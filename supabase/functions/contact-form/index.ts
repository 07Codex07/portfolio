const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, x-client-info, apikey',
};

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

Deno.serve(async (req: Request) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    // Only allow POST requests
    if (req.method !== 'POST') {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Method not allowed. Only POST requests are accepted.' 
        }),
        { 
          status: 405, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Parse and validate request body
    let requestData: ContactFormData;
    try {
      requestData = await req.json();
    } catch (parseError) {
      console.error('JSON parsing error:', parseError);
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Invalid JSON format in request body.' 
        }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    const { name, email, message } = requestData;

    // Validate required fields
    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return new Response(
        JSON.stringify({ 
          success: false,
          error: 'All fields are required. Please provide name, email, and message.' 
        }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Please provide a valid email address.' 
        }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Validate field lengths
    if (name.trim().length > 100) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Name must be less than 100 characters.' 
        }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    if (message.trim().length > 2000) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Message must be less than 2000 characters.' 
        }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Get Resend API key from environment
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    
    if (!resendApiKey) {
      console.error('RESEND_API_KEY not found in environment variables');
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Email service is not configured. Please contact the administrator.' 
        }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    // Prepare email content
    const emailSubject = 'New Contact Form Submission';
    const timestamp = new Date().toLocaleString('en-US', {
      timeZone: 'Asia/Kolkata',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });

    const textBody = `
Name: ${name.trim()}
Email: ${email.trim()}
Message: ${message.trim()}

---
This message was sent from your portfolio contact form.
Sent at: ${timestamp}
    `.trim();

    const htmlBody = `
      <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f8f9fa;">
        <div style="background: linear-gradient(135deg, #000000 0%, #1a1a1a 100%); color: #00ff88; padding: 30px; border-radius: 12px; margin-bottom: 20px; text-align: center;">
          <h1 style="margin: 0; font-size: 28px; font-weight: 700; text-shadow: 0 0 10px rgba(0, 255, 136, 0.5);">
            📧 New Contact Form Submission
          </h1>
        </div>
        
        <div style="background-color: white; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); border-left: 5px solid #00ff88;">
          <div style="margin-bottom: 20px;">
            <h3 style="margin: 0 0 8px 0; color: #333; font-size: 16px; font-weight: 600;">👤 Name:</h3>
            <p style="margin: 0; color: #555; font-size: 18px; font-weight: 500;">${name.trim()}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h3 style="margin: 0 0 8px 0; color: #333; font-size: 16px; font-weight: 600;">📧 Email:</h3>
            <p style="margin: 0; color: #555; font-size: 18px;">
              <a href="mailto:${email.trim()}" style="color: #00ff88; text-decoration: none; font-weight: 500;">
                ${email.trim()}
              </a>
            </p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <h3 style="margin: 0 0 12px 0; color: #333; font-size: 16px; font-weight: 600;">💬 Message:</h3>
            <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; border: 1px solid #e9ecef;">
              <p style="margin: 0; color: #333; line-height: 1.6; white-space: pre-wrap; font-size: 16px;">
                ${message.trim()}
              </p>
            </div>
          </div>
        </div>
        
        <div style="margin-top: 20px; padding: 20px; background: linear-gradient(135deg, #e8f5e8 0%, #f0f8f0 100%); border-radius: 8px; border: 1px solid #d4edda;">
          <p style="margin: 0 0 8px 0; font-size: 14px; color: #155724; font-weight: 500;">
            ✅ This message was sent from your portfolio contact form
          </p>
          <p style="margin: 0; font-size: 13px; color: #6c757d;">
            🕒 Received at: ${timestamp}
          </p>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding: 20px;">
          <p style="margin: 0; font-size: 12px; color: #6c757d;">
            Powered by Vinayak Sahu's Portfolio • Built with ❤️ using React & Supabase
          </p>
        </div>
      </div>
    `;

    // Send email via Resend API
    console.log('Attempting to send email via Resend API...');
    
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <noreply@resend.dev>',
        to: ['vinayak1672006@gmail.com'],
        subject: emailSubject,
        text: textBody,
        html: htmlBody,
      }),
    });

    const emailResult = await emailResponse.text();
    
    if (!emailResponse.ok) {
      console.error('Resend API error:', {
        status: emailResponse.status,
        statusText: emailResponse.statusText,
        body: emailResult
      });
      
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Failed to send email. Please try again later or contact directly via email.' 
        }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      );
    }

    console.log('Email sent successfully:', emailResult);

    // Success response
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Thank you for your message! I\'ll get back to you within 24 hours.' 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );

  } catch (error) {
    console.error('Unexpected error in contact form:', error);
    
    return new Response(
      JSON.stringify({ 
        success: false,
        error: 'An unexpected error occurred. Please try again later or contact me directly via email.' 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    );
  }
});