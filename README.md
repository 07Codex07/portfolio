# Vinayak Sahu - AI/ML Developer Portfolio

A professional, cyberpunk-themed portfolio website showcasing AI/ML projects, skills, and certifications.

## 🚀 Features

- **Modern Design**: Black theme with neon green accents and cyberpunk aesthetics
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth animations and hover effects using Framer Motion
- **Contact Form**: Working backend with email notifications via Supabase Edge Functions
- **Professional**: Clean, minimal design focused on showcasing technical expertise
- **Fast**: Built with React and Vite for optimal performance

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React, React Icons
- **Build Tool**: Vite
- **Backend**: Supabase Edge Functions
- **Email**: Resend API
- **Deployment**: Vercel/Netlify ready

## 📁 Project Structure

```
src/
├── components/
│   ├── AboutSection.tsx
│   ├── CertificationsSection.tsx
│   ├── ContactSection.tsx
│   ├── Footer.tsx
│   ├── HeroSection.tsx
│   ├── MatrixBackground.tsx
│   ├── Navbar.tsx
│   ├── ProjectsSection.tsx
│   └── TechStackSection.tsx
├── utils/
│   └── contactApi.ts
├── App.tsx
├── main.tsx
└── index.css
supabase/
└── functions/
    └── contact-form/
        └── index.ts
```

## 🎨 Design Features

- **Color Scheme**: Pure black background (#000000) with neon green (#00FF88) and teal (#00f7ff) accents
- **Typography**: Inter font family for clean, modern text
- **Animations**: Subtle glowing effects, smooth transitions, and micro-interactions
- **Layout**: Minimalist design with focus on content and readability

## 📱 Sections

1. **Hero**: Name, role, and call-to-action buttons
2. **About**: Professional background and expertise
3. **Projects**: Featured AI/ML projects with live links
4. **Tech Stack**: Technologies and tools used
5. **Certifications**: Professional certifications and achievements
6. **Contact**: Working contact form with email backend
7. **Footer**: Social links and branding

## 🚀 Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables (see `.env.example`)
4. Start development server: `npm run dev`
5. Build for production: `npm run build`

## 📧 Contact Form Setup

The contact form uses Supabase Edge Functions for the backend and Resend API for email delivery.

### Prerequisites

1. **Supabase Project**: Create a project at [supabase.com](https://supabase.com)
2. **Resend Account**: Sign up at [resend.com](https://resend.com) for email delivery

### Environment Variables

Create a `.env` file in your project root:

```bash
# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Email Service Configuration (for Edge Function)
RESEND_API_KEY=your_resend_api_key
```

### Supabase Setup

1. **Get your Supabase credentials**:
   - Go to your Supabase project dashboard
   - Navigate to Settings > API
   - Copy your Project URL and anon/public key

2. **Set up the Edge Function**:
   - The Edge Function will be automatically deployed when you connect to Supabase
   - Add your `RESEND_API_KEY` to your Supabase project's environment variables

3. **Configure Resend API**:
   - Sign up at [resend.com](https://resend.com)
   - Get your API key from the dashboard
   - Add it to your Supabase project's environment variables

### Contact Form Features

- ✅ **Form Validation**: Client-side and server-side validation
- ✅ **Email Notifications**: Formatted emails sent to your inbox
- ✅ **Loading States**: Visual feedback during submission
- ✅ **Error Handling**: Comprehensive error messages
- ✅ **Success Feedback**: Confirmation messages for users
- ✅ **Responsive Design**: Works perfectly on all devices
- ✅ **Security**: CORS protection and input sanitization
- ✅ **Rate Limiting**: Built-in Supabase protection

### API Endpoint

The contact form submits to:
```
POST {SUPABASE_URL}/functions/v1/contact-form
```

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to connect!"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Thank you for your message! I'll get back to you within 24 hours."
}
```

### Frontend Usage Example

```typescript
import { submitContactForm } from './utils/contactApi';

const handleSubmit = async (formData) => {
  const result = await submitContactForm({
    name: formData.name,
    email: formData.email,
    message: formData.message
  });

  if (result.success) {
    console.log('Message sent successfully!');
  } else {
    console.error('Error:', result.error);
  }
};
```

## 🔗 Social Links

- **Email**: vinayak1672006@gmail.com
- **GitHub**: [07Codex07](https://github.com/07Codex07)
- **LinkedIn**: [vinayak-sahu-8999a9259](https://www.linkedin.com/in/vinayak-sahu-8999a9259)
- **Twitter**: [@Vinayak97386184](https://x.com/Vinayak97386184)
- **Portfolio**: [Live Demo](https://portfolio-delta-two-15.vercel.app/)

## 🐛 Troubleshooting

### Common Issues

1. **Network Error**: Check your Supabase URL and API key
2. **Email Not Sending**: Verify your Resend API key is set correctly
3. **CORS Issues**: Ensure your domain is allowed in Supabase settings

### Debug Mode

Enable debug logging by checking the browser console and Supabase Edge Function logs.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).