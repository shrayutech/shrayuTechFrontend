import { MapPin, Phone, Mail, Clock, Send, AlertCircle } from 'lucide-react';
import { useState, useCallback } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import { GoogleReCaptchaProvider, useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import SEO from '../components/SEO';

const ContactForm = () => {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      company: '',
      message: ''
    },
    validationSchema: Yup.object({
      name: Yup.string().min(2, 'Too Short!').max(100, 'Too Long!').required('Required'),
      email: Yup.string().email('Invalid email').required('Required'),
      company: Yup.string().max(100, 'Too Long!'),
      message: Yup.string().min(10, 'Message must be at least 10 characters').max(2000, 'Too Long!').required('Required'),
    }),
    onSubmit: async (values, { resetForm }) => {
      const isDev = import.meta.env.DEV;
      const recaptchaKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
      const isRecaptchaMissing = !recaptchaKey || recaptchaKey === 'your-site-key-here';

      if (!executeRecaptcha) {
        if (isDev && isRecaptchaMissing) {
          console.warn('reCAPTCHA not initialized. Bypassing for development...');
        } else {
          toast.error('reCAPTCHA not initialized. Please try again.');
          return;
        }
      }

      setIsSubmitting(true);
      try {
        // 1. Get reCAPTCHA token (or use dummy in dev)
        let captchaToken = 'dev-bypass-token';
        if (executeRecaptcha && !isRecaptchaMissing) {
          captchaToken = await executeRecaptcha('contact_form');
        }

        // 2. Submit to backend
        const response = await fetch('/api/contact', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...values, captchaToken }),
        });

        const result = await response.json();

        if (response.ok && result.success) {
          toast.success(result.message || 'Message sent successfully!');
          resetForm();
        } else {
          toast.error(result.error || 'Failed to submit the form.');
          console.error('Submission error details:', result.details);
        }
      } catch (error) {
        console.error('Submission error:', error);
        toast.error('A network error occurred. Please try again later.');
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
          <input
            id="name"
            name="name"
            type="text"
            {...formik.getFieldProps('name')}
            className={`w-full px-4 py-3 rounded-lg border ${formik.touched.name && formik.errors.name ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 focus:ring-blue-600'} focus:ring-2 focus:border-transparent transition-colors`}
            placeholder="John Doe"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-rose-500 text-xs mt-1 flex items-center"><AlertCircle className="h-3 w-3 mr-1" />{formik.errors.name}</div>
          ) : null}
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
          <input
            id="email"
            name="email"
            type="email"
            {...formik.getFieldProps('email')}
            className={`w-full px-4 py-3 rounded-lg border ${formik.touched.email && formik.errors.email ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 focus:ring-blue-600'} focus:ring-2 focus:border-transparent transition-colors`}
            placeholder="john@example.com"
          />
          {formik.touched.email && formik.errors.email ? (
            <div className="text-rose-500 text-xs mt-1 flex items-center"><AlertCircle className="h-3 w-3 mr-1" />{formik.errors.email}</div>
          ) : null}
        </div>
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">Company (Optional)</label>
        <input
          id="company"
          name="company"
          type="text"
          {...formik.getFieldProps('company')}
          className={`w-full px-4 py-3 rounded-lg border ${formik.touched.company && formik.errors.company ? 'border-rose-500' : 'border-slate-300'} focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-colors`}
          placeholder="Your Company Ltd."
        />
        {formik.touched.company && formik.errors.company ? (
          <div className="text-rose-500 text-xs mt-1 flex items-center"><AlertCircle className="h-3 w-3 mr-1" />{formik.errors.company}</div>
        ) : null}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">Your Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          {...formik.getFieldProps('message')}
          className={`w-full px-4 py-3 rounded-lg border ${formik.touched.message && formik.errors.message ? 'border-rose-500 focus:ring-rose-500' : 'border-slate-300 focus:ring-blue-600'} focus:ring-2 focus:border-transparent transition-colors resize-none`}
          placeholder="Tell us about your project or inquiry..."
        ></textarea>
        {formik.touched.message && formik.errors.message ? (
          <div className="text-rose-500 text-xs mt-1 flex items-center"><AlertCircle className="h-3 w-3 mr-1" />{formik.errors.message}</div>
        ) : null}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full md:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 text-white rounded-lg font-bold text-lg transition-all flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed shadow-lg hover:shadow-blue-600/30"
      >
        {isSubmitting ? (
          <span>Securing & Sending...</span>
        ) : (
          <>
            <span>Send Secure Message</span>
            <Send className="ml-2 h-5 w-5" />
          </>
        )}
      </button>

      <p className="text-[10px] text-slate-400 mt-4 leading-tight">
        This site is protected by reCAPTCHA and the Google 
        <a href="https://policies.google.com/privacy" className="text-blue-500 hover:underline mx-1">Privacy Policy</a> and
        <a href="https://policies.google.com/terms" className="text-blue-500 hover:underline mx-1">Terms of Service</a> apply.
      </p>
    </form>
  );
};

const Contact = () => {
  return (
    <div className="bg-slate-50 min-h-screen pt-12 pb-24">
      <SEO 
        title="Contact Us"
        description="Get in touch with Shrayu Technologies. Our secure and scalable contact system ensures your inquiry is handled with the highest priority."
        keywords="contact Shrayu Technologies, secure contact form, business inquiry, tech support"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">Let's Build Together</h1>
          <p className="text-xl text-slate-600 leading-relaxed">
            Ready to start your next big project? Contact our team of experts via our secure communication channel.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100">
          
          {/* Contact Information */}
          <div className="lg:w-2/5 p-10 md:p-14 bg-blue-600 text-white">
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <p className="text-blue-100 mb-12 text-lg">
              Our enterprise-grade routing system ensures your message reaches the right expert instantly.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <MapPin className="h-7 w-7 text-blue-300 mr-4 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Our Headquarters</h3>
                  <p className="text-blue-100">123 Tech Boulevard<br/>Innovation District, CA 94043</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-7 w-7 text-blue-300 mr-4 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Phone Number</h3>
                  <p className="text-blue-100">+91 {702004614}<br/>Available 24/7</p>
                </div>
              </div>
              <div className="flex items-start">
                <Mail className="h-7 w-7 text-blue-300 mr-4 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Email Address</h3>
                  <p className="text-blue-100">shrayutech@gmail.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-7 w-7 text-blue-300 mr-4 shrink-0" />
                <div>
                  <h3 className="font-semibold text-lg mb-1">Response Time</h3>
                  <p className="text-blue-100">Typically under 2 hours<br/>Guaranteed within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-3/5 p-10 md:p-14">
            <h2 className="text-3xl font-bold text-slate-900 mb-8">Send us a Message</h2>
            <GoogleReCaptchaProvider 
              reCaptchaKey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || '6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI'} 
              useRecaptchaNet={false}
              scriptProps={{
                async: true,
                defer: true,
                appendTo: 'head',
              }}
            >
              <ContactForm />
            </GoogleReCaptchaProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
