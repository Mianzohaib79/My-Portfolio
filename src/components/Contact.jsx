import { useState } from 'react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

const Contact = () => {
  const [sectionRef, isVisible] = useIntersectionObserver({ threshold: 0.15 });

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear errors when the user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    let hasErrors = false;
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
      hasErrors = true;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email.';
      hasErrors = true;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address.';
      hasErrors = true;
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter a message.';
      hasErrors = true;
    }

    setErrors(newErrors);

    if (!hasErrors) {
      // Fire confetti particles
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#6366f1', '#a855f7', '#0d9488', '#3b82f6'],
      });

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });

      // Reset success status after a few seconds
      setTimeout(() => {
        setStatus('idle');
      }, 5000);
    }
  };

  return (
    <section id="contact" className="section" ref={sectionRef}>
      <div className="glow-blur" style={{ top: '30%', right: '10%' }} />
      <div className="glow-blur" style={{ bottom: '5%', left: '10%', background: 'linear-gradient(135deg, rgba(99, 102, 241, 0.12) 0%, rgba(168, 85, 247, 0.12) 100%)' }} />

      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project idea, want to collaborate, or simply say hello? Drop a message below!
          </p>
        </div>

        <div className={`contact-grid reveal ${isVisible ? 'visible' : ''}`}>
          {/* Contact Details Column */}
          <div className="contact-info">
            <div>
              <h3>Contact Information</h3>
              <p className="contact-info-description">
                Feel free to reach out via email, phone, or standard social channels. I am actively open to remote roles, contract projects, and design consultancies.
              </p>
            </div>

            <div className="contact-list">
              <div className="contact-item">
                <div className="contact-item-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-item-details">
                  <p>Email Me</p>
                  <p>mianzohaib447788@gmail.com</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <Phone size={20} />
                </div>
                <div className="contact-item-details">
                  <p>Call Me</p>
                  <p>03046787426</p>
                </div>
              </div>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <MapPin size={20} />
                </div>
                <div className="contact-item-details">
                  <p>Workplace</p>
                  <p>Faisalabad, Punjab, Pakistan</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <div className="contact-form-wrapper glass-card">
            {status === 'success' ? (
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  textAlign: 'center',
                  height: '100%',
                  padding: '40px 0',
                  animation: 'fade-in 0.4s ease-out forwards'
                }}
              >
                <CheckCircle2 size={64} style={{ color: '#0d9488', marginBottom: '20px' }} />
                <h3 style={{ marginBottom: '12px' }}>Message Sent!</h3>
                <p style={{ maxWidth: '340px' }}>
                  Thank you for reaching out. Your message was processed successfully, and I will get back to you within 24 hours!
                </p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="contact-form" noValidate>
                {/* Name */}
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder=" "
                    className="form-input"
                    value={formData.name}
                    onChange={handleChange}
                  />
                  <label htmlFor="name" className="form-label">Full Name</label>
                  {errors.name && (
                    <span style={{ fontSize: '0.8rem', color: '#ef4444', marginTop: '4px', display: 'block', paddingLeft: '8px' }}>
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder=" "
                    className="form-input"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <label htmlFor="email" className="form-label">Email Address</label>
                  {errors.email && (
                    <span style={{ fontSize: '0.8rem', color: '#ef4444', marginTop: '4px', display: 'block', paddingLeft: '8px' }}>
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="form-group">
                  <textarea
                    id="message"
                    name="message"
                    placeholder=" "
                    className="form-input form-textarea"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                  <label htmlFor="message" className="form-label">Your Message</label>
                  {errors.message && (
                    <span style={{ fontSize: '0.8rem', color: '#ef4444', marginTop: '4px', display: 'block', paddingLeft: '8px' }}>
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <button type="submit" className="btn btn-primary btn-submit">
                  Send Message <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
export { confetti };
