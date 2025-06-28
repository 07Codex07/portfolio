# Vinayak Sahu - AI/ML Developer Portfolio

A professional, cyberpunk-themed portfolio website showcasing AI/ML projects, skills, and certifications.

## 🚀 Features

- **Modern Design**: Black theme with neon green accents and cyberpunk aesthetics
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth animations and hover effects using Framer Motion
- **Contact Form**: Working backend with email notifications
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

The contact form uses Supabase Edge Functions for the backend. To set it up:

1. **Create a Supabase project** at [supabase.com](https://supabase.com)
2. **Get your project URL and anon key** from the project settings
3. **Set up Resend API** at [resend.com](https://resend.com) for email delivery
4. **Configure environment variables**:
   ```bash
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   RESEND_API_KEY=your_resend_api_key
   ```
5. **Deploy the Edge Function** to your Supabase project

### Contact Form Features

- ✅ **Form Validation**: Client-side and server-side validation
- ✅ **Email Notifications**: Formatted emails sent to your inbox
- ✅ **Loading States**: Visual feedback during submission
- ✅ **Error Handling**: Comprehensive error messages
- ✅ **Success Feedback**: Confirmation messages for users
- ✅ **Responsive Design**: Works perfectly on all devices
- ✅ **Security**: CORS protection and input sanitization

## 🔗 Social Links

- **Email**: vinayak1672006@gmail.com
- **GitHub**: [07Codex07](https://github.com/07Codex07)
- **LinkedIn**: [vinayak-sahu-8999a9259](https://www.linkedin.com/in/vinayak-sahu-8999a9259)
- **Twitter**: [@Vinayak97386184](https://x.com/Vinayak97386184)
- **Portfolio**: [Live Demo](https://portfolio-delta-two-15.vercel.app/)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).