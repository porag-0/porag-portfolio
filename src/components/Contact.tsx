import React, { useState } from 'react';
import {
  Mail,
  Send,
  Github,
  Linkedin,
  FileText,
  Copy,
  Check,
  CheckCircle2,
  ExternalLink,
  MessageSquare,
} from 'lucide-react';
import { profileData } from '../data/profile';

interface Props {
  onOpenCvModal: () => void;
  onPlaceholderClick: (name: string, path: string) => void;
}

export const Contact: React.FC<Props> = ({ onOpenCvModal, onPlaceholderClick }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [copiedEmail, setCopiedEmail] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please provide your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please provide a subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please write a brief message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Build standard mailto URL fallback so the message is never lost or falsely faked
    const targetEmail = profileData.socialLinks.email || 'md.moktadur.rahman.porag@example.com';
    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formData.subject}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoUrl = `mailto:${targetEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedStatus('success');

      // Trigger user's mail client safely
      window.location.href = mailtoUrl;

      // Reset form fields
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});
    }, 700);
  };

  const copyEmail = () => {
    const emailToCopy = profileData.socialLinks.email || 'md.moktadur.porag@placeholder.com';
    navigator.clipboard.writeText(emailToCopy).then(() => {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    });
  };

  return (
    <section id="contact" className="py-20 relative bg-dark-secondary/30 dark:bg-dark-secondary/30 light:bg-light-secondary/40 border-t border-dark-border dark:border-dark-border light:border-light-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/25 text-xs font-mono uppercase tracking-wider text-accent font-semibold mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold font-heading text-white dark:text-white light:text-light-text tracking-tight">
            Let's build something meaningful.
          </h2>
          <p className="mt-2 text-sm text-dark-muted dark:text-dark-muted light:text-light-muted">
            I'm interested in learning, collaborating, and exploring opportunities to build useful software. If you have a project idea, an internship opportunity, or simply want to connect, feel free to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Direct Channels & Social Placeholders */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-2xl bg-dark-card dark:bg-dark-card light:bg-light-card border border-dark-border dark:border-dark-border light:border-light-border p-6 shadow-sm">
              <h3 className="text-base font-bold font-heading text-white dark:text-white light:text-light-text mb-2">
                Direct Contact Channels
              </h3>
              <p className="text-xs text-dark-muted dark:text-dark-muted light:text-light-muted mb-6 leading-relaxed">
                Connect directly for software development discussions, academic collaboration, or professional internship inquiries.
              </p>

              {/* Email Card with 1-Click Copy */}
              <div className="p-4 rounded-xl bg-dark-secondary dark:bg-dark-secondary light:bg-light-secondary border border-dark-border/80 dark:border-dark-border/80 light:border-light-border mb-4">
                <div className="flex items-center justify-between text-xs text-dark-muted dark:text-dark-muted light:text-light-muted mb-1.5">
                  <span className="font-mono">Email Address</span>
                  <button
                    onClick={copyEmail}
                    className="flex items-center gap-1 text-[11px] font-mono text-accent hover:underline"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy Email</span>
                      </>
                    )}
                  </button>
                </div>
                <div className="text-sm font-mono text-white dark:text-white light:text-light-text font-medium break-all">
                  {profileData.socialLinks.email || '[ADD EMAIL ADDRESS]'}
                </div>
              </div>

              {/* Profiles & Links */}
              <div className="space-y-2.5">
                {/* GitHub */}
                <button
                  type="button"
                  onClick={() =>
                    profileData.socialLinks.github
                      ? window.open(profileData.socialLinks.github, '_blank')
                      : onPlaceholderClick('GitHub URL', 'src/data/profile.ts')
                  }
                  className="w-full flex items-center justify-between p-3.5 rounded-xl bg-dark-secondary dark:bg-dark-secondary light:bg-light-secondary border border-dark-border/70 dark:border-dark-border/70 light:border-light-border hover:border-accent/40 text-xs text-white dark:text-white light:text-light-text transition-colors text-left"
                >
                  <div className="flex items-center gap-3">
                    <Github className="w-4 h-4 text-accent" />
                    <div>
                      <div className="font-semibold">GitHub Profile</div>
                      <div className="text-[11px] font-mono text-dark-muted dark:text-dark-muted light:text-light-muted">
                        {profileData.socialLinks.github || '[ADD GITHUB URL]'}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-dark-muted" />
                </button>

                {/* LinkedIn */}
                <button
                  type="button"
                  onClick={() =>
                    profileData.socialLinks.linkedin
                      ? window.open(profileData.socialLinks.linkedin, '_blank')
                      : onPlaceholderClick('LinkedIn URL', 'src/data/profile.ts')
                  }
                  className="w-full flex items-center justify-between p-3.5 rounded-xl bg-dark-secondary dark:bg-dark-secondary light:bg-light-secondary border border-dark-border/70 dark:border-dark-border/70 light:border-light-border hover:border-accent/40 text-xs text-white dark:text-white light:text-light-text transition-colors text-left"
                >
                  <div className="flex items-center gap-3">
                    <Linkedin className="w-4 h-4 text-accent" />
                    <div>
                      <div className="font-semibold">LinkedIn Profile</div>
                      <div className="text-[11px] font-mono text-dark-muted dark:text-dark-muted light:text-light-muted">
                        {profileData.socialLinks.linkedin || '[ADD LINKEDIN URL]'}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-dark-muted" />
                </button>

                {/* CV PDF */}
                <button
                  type="button"
                  onClick={onOpenCvModal}
                  className="w-full flex items-center justify-between p-3.5 rounded-xl bg-dark-secondary dark:bg-dark-secondary light:bg-light-secondary border border-dark-border/70 dark:border-dark-border/70 light:border-light-border hover:border-accent/40 text-xs text-white dark:text-white light:text-light-text transition-colors text-left"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-accent" />
                    <div>
                      <div className="font-semibold">Curriculum Vitae (PDF)</div>
                      <div className="text-[11px] font-mono text-dark-muted dark:text-dark-muted light:text-light-muted">
                        {profileData.socialLinks.cvFile || '[ADD CV PDF]'}
                      </div>
                    </div>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-dark-muted" />
                </button>
              </div>
            </div>

            {/* Response Time & Location Box */}
            <div className="p-4 rounded-xl bg-accent/5 border border-dashed border-accent/25 text-xs text-dark-muted dark:text-dark-muted light:text-light-muted leading-relaxed">
              <strong className="text-white dark:text-white light:text-light-text block mb-1">
                Dhaka, Bangladesh (UTC+6)
              </strong>
              Emails and message dispatches are typically reviewed daily. Inquiries from recruiters, collaborators, and engineering peers are warmly welcomed.
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-dark-card dark:bg-dark-card light:bg-light-card border border-dark-border dark:border-dark-border light:border-light-border p-6 sm:p-8 shadow-sm">
              <div className="flex items-center gap-2 mb-6">
                <MessageSquare className="w-4 h-4 text-accent" />
                <h3 className="text-base font-bold font-heading text-white dark:text-white light:text-light-text">
                  Send a Direct Message
                </h3>
              </div>

              {submittedStatus === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="font-semibold block text-emerald-200">
                      Message Prepared Successfully!
                    </strong>
                    Your default email application was triggered to transmit this message. If your email client did not automatically launch, you can also copy the email directly from the left card.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-xs font-mono text-dark-muted dark:text-dark-muted light:text-light-muted mb-1.5"
                    >
                      Your Name <span className="text-accent">*</span>
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className={`w-full px-4 py-2.5 rounded-xl text-xs bg-dark-secondary dark:bg-dark-secondary light:bg-light-secondary border text-white dark:text-white light:text-light-text placeholder:text-dark-muted/50 focus:outline-none transition-colors ${
                        errors.name
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-dark-border dark:border-dark-border light:border-light-border focus:border-accent'
                      }`}
                    />
                    {errors.name && (
                      <p className="mt-1 text-[11px] text-red-400 font-mono">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      htmlFor="contact-email"
                      className="block text-xs font-mono text-dark-muted dark:text-dark-muted light:text-light-muted mb-1.5"
                    >
                      Your Email <span className="text-accent">*</span>
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@example.com"
                      className={`w-full px-4 py-2.5 rounded-xl text-xs bg-dark-secondary dark:bg-dark-secondary light:bg-light-secondary border text-white dark:text-white light:text-light-text placeholder:text-dark-muted/50 focus:outline-none transition-colors ${
                        errors.email
                          ? 'border-red-500 focus:border-red-500'
                          : 'border-dark-border dark:border-dark-border light:border-light-border focus:border-accent'
                      }`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-[11px] text-red-400 font-mono">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="contact-subject"
                    className="block text-xs font-mono text-dark-muted dark:text-dark-muted light:text-light-muted mb-1.5"
                  >
                    Subject <span className="text-accent">*</span>
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Software Internship Opportunity / Collaboration"
                    className={`w-full px-4 py-2.5 rounded-xl text-xs bg-dark-secondary dark:bg-dark-secondary light:bg-light-secondary border text-white dark:text-white light:text-light-text placeholder:text-dark-muted/50 focus:outline-none transition-colors ${
                      errors.subject
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-dark-border dark:border-dark-border light:border-light-border focus:border-accent'
                    }`}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-[11px] text-red-400 font-mono">{errors.subject}</p>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-xs font-mono text-dark-muted dark:text-dark-muted light:text-light-muted mb-1.5"
                  >
                    Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share the details of your project, role, or question..."
                    className={`w-full px-4 py-2.5 rounded-xl text-xs bg-dark-secondary dark:bg-dark-secondary light:bg-light-secondary border text-white dark:text-white light:text-light-text placeholder:text-dark-muted/50 focus:outline-none transition-colors resize-none ${
                      errors.message
                        ? 'border-red-500 focus:border-red-500'
                        : 'border-dark-border dark:border-dark-border light:border-light-border focus:border-accent'
                    }`}
                  />
                  {errors.message && (
                    <p className="mt-1 text-[11px] text-red-400 font-mono">{errors.message}</p>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 px-6 rounded-xl bg-accent hover:bg-accent-hover text-white font-medium text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-accent/20 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Preparing Transmission...</span>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

                <p className="text-[11px] font-mono text-dark-muted/80 text-center pt-2">
                  Transparent Delivery: Dispatches via email client protocol without fabricated backend logs.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
