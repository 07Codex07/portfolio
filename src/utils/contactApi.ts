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
    // Validate environment variables
    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseAnonKey) {
      throw new Error('Supabase configuration is missing');
    }

    // Make the API call
    const response = await fetch(`${supabaseUrl}/functions/v1/contact-form`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${supabaseAnonKey}`,
      },
      body: JSON.stringify(formData),
    });

    // Parse the response
    const result = await response.json();

    if (!response.ok) {
      return {
        success: false,
        error: result.error || `Server error: ${response.status}`
      };
    }

    return result;

  } catch (error) {
    console.error('Contact form submission error:', error);
    
    if (error instanceof TypeError && error.message.includes('fetch')) {
      return {
        success: false,
        error: 'Network error. Please check your internet connection and try again.'
      };
    }

    return {
      success: false,
      error: 'An unexpected error occurred. Please try again later.'
    };
  }
};

// Example usage in a React component:
/*
import { submitContactForm } from './utils/contactApi';

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