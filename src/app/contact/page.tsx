'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error('Failed to send');
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', phone: '', message: '' });
      }, 3000);
    } catch (error) {
      alert('Unable to send message. Please try again later.');
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-[#0E0E0E]">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-[#0E0E0E]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Get In Touch</h1>
              <p className="text-lg text-[#CFCFCF] max-w-2xl mx-auto">
                Ready to transform your fitness journey? Fill out the form below and I'll get back to you within 24 hours.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border border-[#1F1F1F] shadow-xl bg-[#141414] hover:border-[#6A00FF] transition-all">
                  <CardHeader>
                    <CardTitle className="text-white">Send Me a Message</CardTitle>
                    <CardDescription className="text-[#CFCFCF]">
                      Fill out the form below and I'll respond as soon as possible
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isSubmitted ? (
                      <div className="text-center py-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#6A00FF]/20 mb-4">
                          <svg
                            className="w-8 h-8 text-[#6A00FF]"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 text-white">Message Sent!</h3>
                        <p className="text-[#CFCFCF]">
                          Thank you for reaching out. I'll get back to you soon.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold mb-2 text-white">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="bg-[#0E0E0E] border-[#1F1F1F] placeholder:text-[#9A9A9A] text-white"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold mb-2 text-white">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className="bg-[#0E0E0E] border-[#1F1F1F] placeholder:text-[#9A9A9A] text-white"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-white">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 000-0000"
                            className="bg-[#0E0E0E] border-[#1F1F1F] placeholder:text-[#9A9A9A] text-white"
                          />
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-semibold mb-2 text-white">
                            Message *
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell me about your fitness goals and what you're looking to achieve..."
                            rows={6}
                            className="bg-[#0E0E0E] border-[#1F1F1F] placeholder:text-[#9A9A9A] text-white"
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full bg-[#6A00FF] text-white hover:bg-[#8C3CFF] font-semibold shadow-lg hover:shadow-[#6A00FF]/30" size="lg">
                          Send Message
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <Card className="border border-[#1F1F1F] shadow-xl bg-[#141414] hover:border-[#6A00FF] transition-all">
                  <CardHeader>
                    <CardTitle className="text-white">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-[#6A00FF] mt-0.5" />
                      <div>
                        <p className="font-semibold text-white">Email</p>
                        <a
                          href="mailto:forgedfitnesswithjinay@gmail.com"
                          className="text-sm text-[#CFCFCF] hover:text-[#6A00FF] transition-colors"
                        >
                          forgedfitnesswithjinay@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-[#6A00FF] mt-0.5" />
                      <div>
                        <p className="font-semibold text-white">Phone</p>
                        <a
                          href="tel:+16507846890"
                          className="text-sm text-[#CFCFCF] hover:text-[#6A00FF] transition-colors"
                        >
                          +1 (650) 784-6890
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-[#6A00FF] mt-0.5" />
                      <div>
                        <p className="font-semibold text-white">Location</p>
                        <p className="text-sm text-[#CFCFCF]">
                          Online Coaching Available Worldwide
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-[#141414] text-[#CFCFCF] border border-[#1F1F1F] shadow-xl hover:border-[#6A00FF] transition-all">
                  <CardHeader>
                    <CardTitle className="text-white">Response Time</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-[#CFCFCF]">
                      I typically respond to all inquiries within 24 hours during business days.
                      For urgent matters, please call directly.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
