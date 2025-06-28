import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
}

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Only allow POST requests
    if (req.method !== 'POST') {
      return new Response(
        JSON.stringify({ error: 'Method not allowed' }),
        { 
          status: 405, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Parse the request body
    const { name, email, message }: ContactFormData = await req.json()

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ 
          error: 'Missing required fields. Please provide name, email, and message.' 
        }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { 
          status: 400, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Prepare email content
    const emailSubject = 'New Contact Form Submission'
    const emailBody = `
Name: ${name}
Email: ${email}
Message: ${message}

---
This message was sent from your portfolio contact form.
Sent at: ${new Date().toISOString()}
    `.trim()

    // Send email using a third-party service (EmailJS alternative)
    // Using Resend API for reliable email delivery
    const resendApiKey = Deno.env.get('RESEND_API_KEY')
    
    if (!resendApiKey) {
      console.error('RESEND_API_KEY not found in environment variables')
      return new Response(
        JSON.stringify({ error: 'Email service not configured' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Send email via Resend API
    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'Portfolio Contact <noreply@yourdomain.com>',
        to: ['vinayak1672006@gmail.com'],
        subject: emailSubject,
        text: emailBody,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
            <div style="background-color: #000; color: #00ff88; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="margin: 0; font-size: 24px;">New Contact Form Submission</h2>
            </div>
            <div style="background-color: white; padding: 20px; border-radius: 8px; border-left: 4px solid #00ff88;">
              <p style="margin: 0 0 15px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 0 0 15px 0;"><strong>Email:</strong> ${email}</p>
              <p style="margin: 0 0 15px 0;"><strong>Message:</strong></p>
              <div style="background-color: #f5f5f5; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${message}</div>
            </div>
            <div style="margin-top: 20px; padding: 15px; background-color: #e8f5e8; border-radius: 4px; font-size: 12px; color: #666;">
              <p style="margin: 0;">This message was sent from your portfolio contact form.</p>
              <p style="margin: 5px 0 0 0;">Sent at: ${new Date().toLocaleString()}</p>
            </div>
          </div>
        `
      }),
    })

    if (!emailResponse.ok) {
      const errorData = await emailResponse.text()
      console.error('Email sending failed:', errorData)
      return new Response(
        JSON.stringify({ error: 'Failed to send email. Please try again later.' }),
        { 
          status: 500, 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
        }
      )
    }

    // Success response
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Message sent successfully! I\'ll get back to you soon.' 
      }),
      { 
        status: 200, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    return new Response(
      JSON.stringify({ 
        error: 'An unexpected error occurred. Please try again later.' 
      }),
      { 
        status: 500, 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' } 
      }
    )
  }
})