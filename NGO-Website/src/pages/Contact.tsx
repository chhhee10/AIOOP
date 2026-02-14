import { useState } from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import PageHeader from '@/components/PageHeader';


export default function Contact() {
  const { t } = useLanguage();
  const [submitted, setSubmitted] = useState(false);

const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [message, setMessage] = useState("");
const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);

  const formData = new FormData();
  formData.append("name", name);
  formData.append("email", email);
  formData.append("message", message);

  try {
    const response = await fetch("/api/contact.php", {
      method: "POST",
      body: formData,
    });

    const result = await response.text();

    if (result.trim() === "success") {
      setSubmitted(true);
      setName("");
      setEmail("");
      setMessage("");
    } else {
      alert("Something went wrong. Please try again.");
    }
  } catch (error) {
    alert("Server error. Please try later.");
  }

  setLoading(false);
};


  return (
    <div className="container mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
      <PageHeader title={t.contact.title} description={t.contact.desc} />
      <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 pb-20">
        {/* Form */}
        <div className="bg-card rounded-2xl p-6 md:p-8 lg:p-10 shadow-soft">
          {submitted ? (
            <div className="text-center py-12">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-6">
                <Mail className="w-8 h-8 md:w-10 md:h-10 text-success" />
              </div>
              <h3 className="font-display font-bold text-lg md:text-xl text-foreground mb-2">Thank you!</h3>
              <p className="text-muted-foreground text-sm md:text-base">We will get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              <div>
                <label className="block text-xs md:text-sm font-medium text-foreground mb-2">{t.contact.name}</label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-4 py-2 md:py-3 rounded-xl border border-input bg-background text-foreground text-sm md:text-body-md focus:outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label className="block text-xs md:text-sm font-medium text-foreground mb-2">{t.contact.email}</label>
                <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 md:py-3 rounded-xl border border-input bg-background text-foreground text-sm md:text-body-md focus:outline-none focus:ring-2 focus:ring-ring"
              />
              </div>
              <div>
                <label className="block text-xs md:text-sm font-medium text-foreground mb-2">{t.contact.message}</label>
                <textarea
                  required
                  rows={5}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2 md:py-3 rounded-xl border border-input bg-background text-foreground text-sm md:text-body-md focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2.5 md:py-3.5 rounded-xl bg-primary text-primary-foreground font-medium text-sm md:text-body-md hover:opacity-90 transition-opacity"
              >
                {t.contact.send}
              </button>
            </form>
          )}
        </div>

        {/* Info */}
        <div className="flex flex-col gap-4 md:gap-6">
          {[
            { icon: MapPin, label: t.contact.address },
            { icon: Phone, label: t.contact.phone },
            { icon: Mail, label: t.contact.emailAddress },
            { icon: Clock, label: `${t.contact.officeHours}: ${t.contact.officeHoursValue}` },
          ].map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-card rounded-xl p-5 md:p-6 lg:p-8 shadow-soft animate-fade-in"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-accent flex items-center justify-center shrink-0">
                <item.icon className="w-6 h-6 md:w-7 md:h-7 text-primary" />
              </div>
              <p className="text-foreground text-sm md:text-body-md pt-1 md:pt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
