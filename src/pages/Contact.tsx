import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import Footer from '@/components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://hchbwjydicjtwlsmvpmj.supabase.co/functions/v1/send-contact-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        toast({
          title: "Message sent successfully!",
          description: "Thank you for your message. I'll get back to you soon!",
        });

        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error(result.error || 'Failed to send message');
      }
    } catch (error: any) {
      console.error('Error sending message:', error);
      toast({
        title: "Error sending message",
        description: "There was an error sending your message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "ahmadfahrezir@gmail.com",
      href: "mailto:ahmadfahrezir@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+62 857-5091-7426",
      href: "tel:+6285750917426"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Semarang, Indonesia",
      href: null
    }
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Panjullauditore", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ahmadfahrezi7/", label: "LinkedIn" },
    { icon: Twitter, href: "https://x.com/panjulauditore", label: "Twitter" },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
                Get In Touch
              </h1>
              <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
                I'd love to hear from you! Whether you have a project in mind or just want to chat about technology.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="animate-scale-in">
                <Card className="bg-gradient-card border-border/50">
                  <CardHeader>
                    <CardTitle className="text-2xl text-foreground">Send me a message</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-foreground/80 mb-2">
                            Name
                          </label>
                          <Input
                            id="name"
                            name="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={handleInputChange}
                            className="bg-background/50 border-border/50 focus:border-primary"
                            placeholder="Your name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-foreground/80 mb-2">
                            Email
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={handleInputChange}
                            className="bg-background/50 border-border/50 focus:border-primary"
                            placeholder="your.email@example.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-foreground/80 mb-2">
                          Subject
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          type="text"
                          required
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="bg-background/50 border-border/50 focus:border-primary"
                          placeholder="What's this about?"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-foreground/80 mb-2">
                          Message
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formData.message}
                          onChange={handleInputChange}
                          className="bg-background/50 border-border/50 focus:border-primary resize-none"
                          placeholder="Tell me about your project or just say hello!"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-primary hover:opacity-90 text-primary-foreground"
                      >
                        {isSubmitting ? (
                          "Sending..."
                        ) : (
                          <>
                            <Send className="h-4 w-4 mr-2" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Information */}
              <div className="space-y-8 animate-scale-in" style={{ animationDelay: '0.1s' }}>
                {/* Contact Info Cards */}
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <Card 
                      key={info.title} 
                      className="bg-gradient-card border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105 group"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-center space-x-4">
                          <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                            <info.icon className="h-5 w-5 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                              {info.title}
                            </h3>
                            {info.href ? (
                              <a 
                                href={info.href}
                                className="text-foreground/60 hover:text-primary transition-colors duration-300"
                              >
                                {info.details}
                              </a>
                            ) : (
                              <p className="text-foreground/60">{info.details}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* Social Links */}
                <Card className="bg-gradient-card border-border/50">
                  <CardHeader>
                    <CardTitle className="text-xl text-foreground">Follow me</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex space-x-4">
                      {socialLinks.map((social) => (
                        <Button
                          key={social.label}
                          variant="outline"
                          size="icon"
                          asChild
                          className="border-border/50 hover:border-primary/50 hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                        >
                          <a href={social.href} target="_blank" rel="noopener noreferrer">
                            <social.icon className="h-5 w-5" />
                            <span className="sr-only">{social.label}</span>
                          </a>
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                {/* Availability */}
                <Card className="bg-gradient-card border-border/50">
                  <CardContent className="p-6">
                    <h3 className="font-semibold text-foreground mb-3">Availability</h3>
                    <div className="space-y-2 text-sm text-foreground/70">
                      <div className="flex items-center justify-between">
                        <span>Response time:</span>
                        <span className="text-green-500 font-medium">Within 24 hours</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Best time to reach:</span>
                        <span className="text-foreground">9 AM - 6 PM WIB</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span>Status:</span>
                        <span className="text-green-500 font-medium flex items-center">
                          <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                          Available for projects
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </main>
      
    </div>
  );
};

export default Contact;