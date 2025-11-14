import { useState } from 'react';
import { GlassCard } from '../components/GlassCard';
import { NeonButton } from '../components/NeonButton';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter, MessageSquare } from 'lucide-react';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'itsudesh95@gmail.com',
      link: 'mailto:itsudesh95@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 8427444424',
      link: 'tel:+918427444424'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'New Delhi, India',
      link: null
    },
    {
      icon: MessageSquare,
      label: 'Response Time',
      value: 'Within 24 hours',
      link: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      handle: '@sudesh095',
      url: 'https://github.com/sudesh095',
      color: 'text-[#17A7FF]'
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      handle: 'sudesh-kumar-android',
      url: 'https://www.linkedin.com/in/sudesh-kumar-android/',
      color: 'text-[#DE3484]'
    },
    {
      icon: Twitter,
      name: 'Twitter',
      handle: '@itsudesh95',
      url: 'https://x.com/itsudesh95',
      color: 'text-[#17A7FF]'
    }
  ];

  const availability = [
    {
      title: 'Freelance Projects',
      status: 'Available',
      description: 'Open to mobile app development projects',
      available: true
    },
    {
      title: 'Consulting',
      status: 'Available',
      description: 'Architecture review and code audits',
      available: true
    },
    {
      title: 'Speaking Engagements',
      status: 'Available',
      description: 'Tech talks and workshop facilitation',
      available: true
    },
    {
      title: 'Mentorship',
      status: 'Limited Slots',
      description: '1-on-1 mentoring for Android developers',
      available: false
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-12 lg:py-16">
      {/* Header */}
      <div className="mb-12 text-center">
        <h1 className="text-[#DE3484] mb-4">Let's Connect</h1>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Whether you have a project in mind, need technical consultation, or just want to discuss 
          Android development, I'd love to hear from you. Let's build something amazing together!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <GlassCard className="p-8">
            <h2 className="text-[#17A7FF] mb-6">Send a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm mb-2 text-gray-300">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/[0.05] border border-white/10 rounded-lg focus:outline-none focus:border-[#17A7FF]/50 transition-colors text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm mb-2 text-gray-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/[0.05] border border-white/10 rounded-lg focus:outline-none focus:border-[#17A7FF]/50 transition-colors text-white"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm mb-2 text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white/[0.05] border border-white/10 rounded-lg focus:outline-none focus:border-[#17A7FF]/50 transition-colors text-white"
                  placeholder="Project Inquiry"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm mb-2 text-gray-300">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-2 bg-white/[0.05] border border-white/10 rounded-lg focus:outline-none focus:border-[#17A7FF]/50 transition-colors text-white resize-none"
                  placeholder="Tell me about your project..."
                />
              </div>

              <NeonButton variant="blue" className="w-full flex items-center justify-center gap-2">
                <Send size={18} />
                Send Message
              </NeonButton>
            </form>
          </GlassCard>
        </div>

        {/* Contact Info Sidebar */}
        <div className="space-y-6">
          {/* Contact Details */}
          <GlassCard className="p-6">
            <h3 className="text-[#DE3484] mb-4">Contact Information</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#17A7FF]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="text-[#17A7FF]" size={18} />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 mb-1">{info.label}</div>
                      {info.link ? (
                        <a href={info.link} className="text-sm text-white hover:text-[#17A7FF] transition-colors">
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-sm text-white">{info.value}</div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </GlassCard>

          {/* Social Links */}
          <GlassCard className="p-6">
            <h3 className="text-[#DE3484] mb-4">Social Media</h3>
            <div className="space-y-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] border border-white/5 hover:border-white/20 transition-all group"
                  >
                    <Icon className={`${social.color} group-hover:scale-110 transition-transform`} size={20} />
                    <div className="flex-1">
                      <div className="text-sm">{social.name}</div>
                      <div className="text-xs text-gray-500">{social.handle}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </GlassCard>
        </div>
      </div>

      {/* Availability */}
      <div className="mb-12">
        <h2 className="text-[#DE3484] mb-6">Current Availability</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {availability.map((item, index) => (
            <GlassCard 
              key={index} 
              className={`p-6 ${item.available ? 'border-[#17A7FF]/30' : 'border-[#DE3484]/30'}`}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className={`w-2 h-2 rounded-full ${item.available ? 'bg-[#17A7FF]' : 'bg-[#DE3484]'} animate-pulse`}></div>
                <span className={`text-sm ${item.available ? 'text-[#17A7FF]' : 'text-[#DE3484]'}`}>
                  {item.status}
                </span>
              </div>
              <h4 className="mb-2">{item.title}</h4>
              <p className="text-sm text-gray-400">{item.description}</p>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <GlassCard className="p-8">
        <h2 className="text-[#DE3484] mb-6">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div>
            <h4 className="text-[#17A7FF] mb-2">What types of projects do you work on?</h4>
            <p className="text-sm text-gray-400">
              I specialize in Android native apps, Kotlin Multiplatform projects, app architecture redesign, 
              performance optimization, and security implementations. I work on both new projects and existing codebases.
            </p>
          </div>
          <div>
            <h4 className="text-[#17A7FF] mb-2">What is your typical response time?</h4>
            <p className="text-sm text-gray-400">
              I typically respond to all inquiries within 24 hours on business days. For urgent matters, 
              feel free to mention it in your message.
            </p>
          </div>
          <div>
            <h4 className="text-[#17A7FF] mb-2">Do you offer consulting services?</h4>
            <p className="text-sm text-gray-400">
              Yes! I provide technical consulting including code reviews, architecture planning, team training, 
              and performance audits. Contact me to discuss your specific needs.
            </p>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}
