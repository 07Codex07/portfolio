// Frontend utility function to call the contact form API
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export interface ContactFormResponse {
  success: boolean;
  message?: string;
  error?: string;
}

export const submitContactForm = async (formData: ContactFormData): Promise<ContactFormResponse> => {
  try {
    console.log('🚀 Submitting contact form with data:', {
      name: formData.name ? '✓' : '✗',
      email: formData.email ? '✓' : '✗',
      message: formData.message ? '✓' : '✗'
    });

    // Validate environment variables
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

    console.log('🔧 Environment check:', {
      supabaseUrl: supabaseUrl ? '✓ Found' : '✗ Missing',
      supabaseAnonKey: supabaseAnonKey ? '✓ Found' : '✗ Missing'
    });

    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error('Supabase configuration is missing. Please check your environment variables.');
    }

    const apiUrl = `${supabaseUrl}/functions/v1/contact-form`;
    console.log('📡 API URL:', apiUrl);

    // Prepare request payload
    const payload = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      message: formData.message.trim()
    };

    console.log('📦 Request payload:', payload);

    // Make the API call
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${supabaseAnonKey}`,
      },
      body: JSON.stringify(payload),
    });

    console.log('📬 Response received:', {
      status: response.status,
      statusText: response.statusText,
      ok: response.ok,
      headers: Object.fromEntries(response.headers.entries())
    });

    // Parse the response
    let result: any;
    const responseText = await response.text();
    console.log('📝 Raw response text:', responseText);

    try {
      result = JSON.parse(responseText);
      console.log('✅ Parsed response:', result);
    } catch (parseError) {
      console.error('❌ Failed to parse response as JSON:', parseError);
      console.error('Raw response:', responseText);
      
      return {
        success: false,
        error: `Server returned invalid response. Status: ${response.status}`
      };
    }

    if (!response.ok) {
      console.error('❌ API request failed:', {
        status: response.status,
        result
      });
      
      return {
        success: false,
        error: result.error || `Server error: ${response.status} ${response.statusText}`
      };
    }

    console.log('✅ Contact form submitted successfully');
    return result;

  } catch (error) {
    console.error('💥 Contact form submission error:', error);
    
    if (error instanceof TypeError && error.message.includes('fetch')) {
      console.error('🌐 Network error detected');
      return {
        success: false,
        error: 'Network error. Please check your internet connection and try again.'
      };
    }

    if (error instanceof Error) {
      return {
        success: false,
        error: error.message
      };
    }

    return {
      success: false,
      error: 'An unexpected error occurred. Please try again later.'
    };
  }
};

// Test function for debugging (can be called from browser console)
export const testContactFormAPI = async () => {
  console.log('🧪 Testing contact form API...');
  
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    message: 'This is a test message from the API test function.'
  };

  const result = await submitContactForm(testData);
  console.log('🧪 Test result:', result);
  return result;
};

// Debug function to check environment variables
export const debugEnvironment = () => {
  console.log('🔍 Environment Debug Info:');
  console.log('VITE_SUPABASE_URL:', import.meta.env.VITE_SUPABASE_URL ? '✓ Set' : '✗ Missing');
  console.log('VITE_SUPABASE_ANON_KEY:', import.meta.env.VITE_SUPABASE_ANON_KEY ? '✓ Set' : '✗ Missing');
  console.log('Mode:', import.meta.env.MODE);
  console.log('Dev:', import.meta.env.DEV);
  console.log('Prod:', import.meta.env.PROD);
};

// Example usage in a React component:
/*
import { submitContactForm, debugEnvironment, testContactFormAPI } from './utils/contactApi';

// Debug environment variables
debugEnvironment();

// Test the API
testContactFormAPI();

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    const result = await submitContactForm({
      name: formData.name,
      email: formData.email,
      message: formData.message
    });

    if (result.success) {
      showNotification('success', result.message || 'Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } else {
      showNotification('error', result.error || 'Failed to send message');
    }
  } catch (error) {
    showNotification('error', 'Network error. Please try again.');
  } finally {
    setIsSubmitting(false);
  }
};
*/