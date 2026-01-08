import { useState, useEffect } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Send, Phone, MapPin, ExternalLink, Calendar } from "lucide-react";

declare global {
  interface Window {
    Calendly?: {
      initInlineWidget: (options: { url: string; parentElement: HTMLElement }) => void;
    };
  }
}

const locations = [
  {
    country: "United States",
    address: "7911 Handy Court\nFort Collins\nCO 80525\nUSA",
    mapsUrl: "https://maps.google.com/?q=7911+Handy+Court,+Fort+Collins,+CO+80525,+USA",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3030.5!2d-105.0!3d40.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s7911%20Handy%20Court%2C%20Fort%20Collins!5e0!3m2!1sen!2sus!4v1234567890",
  },
  {
    country: "United Kingdom",
    address: "Mynshull House\n78 Churchgate\nStockport, Cheshire\nSK1 1YJ, UK",
    mapsUrl: "https://maps.google.com/?q=MYNSHULL+HOUSE+78+CHURCHGATE+STOCKPORT+CHESHIRE+SK1+1YJ",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2378.5!2d-2.1574!3d53.4084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb36e5e5e5e5e%3A0x0!2sChurchgate%2C%20Stockport!5e0!3m2!1sen!2suk!4v1234567890",
  },
];

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.body.appendChild(script);

    // Load Calendly CSS
    const link = document.createElement("link");
    link.href = "https://assets.calendly.com/assets/external/widget.css";
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent",
      description: "We'll get back to you as soon as possible.",
    });

    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-sm font-medium text-primary tracking-wider uppercase mb-4">
              Contact
            </p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground leading-tight">
              Let's start a conversation
            </h1>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Whether you have a specific project in mind or just want to explore possibilities, we'd love to hear from you.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Booking */}
      <section className="section-padding-sm">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              {/* Form + Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-foreground mb-6">
                    Send us a message
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about your project or what you're looking to achieve..."
                        rows={5}
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      size="lg"
                      className="w-full sm:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </div>

                {/* Contact Info Box */}
                <div className="p-6 rounded-2xl bg-card border border-border">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <a
                        href="mailto:info@auxilio.cloud"
                        className="text-sm text-primary hover:underline underline-offset-4"
                      >
                        info@auxilio.cloud
                      </a>
                    </div>
                    <div className="hidden sm:block w-px h-8 bg-border" />
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-sm text-muted-foreground">
                        Phone coming soon
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Calendly */}
              <div>
                <h2 className="text-2xl font-semibold text-foreground mb-6">
                  Book a call
                </h2>
                <div 
                  className="calendly-inline-widget rounded-2xl overflow-hidden" 
                  data-url="https://calendly.com/naveed-auxilio?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=0d1424&text_color=e8edf5&primary_color=8bd33a"
                  style={{ minWidth: '320px', height: '650px' }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section-padding bg-secondary/30">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <p className="text-sm font-medium text-primary tracking-wider uppercase mb-4">
                Our Locations
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
                Find us worldwide
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {locations.map((location) => (
                <div
                  key={location.country}
                  className="rounded-2xl bg-card border border-border overflow-hidden"
                >
                  <a
                    href={location.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block p-8 hover:bg-secondary/30 transition-colors"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {location.country}
                    </h3>
                    <p className="text-muted-foreground text-sm whitespace-pre-line">
                      {location.address}
                    </p>
                  </a>
                  <div className="h-48 w-full">
                    <iframe
                      src={location.embedUrl}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title={`Map of ${location.country} office`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;