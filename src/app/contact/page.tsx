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
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Get In Touch</h1>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Ready to transform your fitness journey? Fill out the form below and I'll get back to you within 24 hours.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Contact Form */}
              <div className="lg:col-span-2">
                <Card className="border-2 border-gray-300 shadow-xl bg-white">
                  <CardHeader>
                    <CardTitle className="text-gray-900">Send Me a Message</CardTitle>
                    <CardDescription className="text-gray-700">
                      Fill out the form below and I'll respond as soon as possible
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    {isSubmitted ? (
                      <div className="text-center py-12">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                          <svg
                            className="w-8 h-8 text-green-700"
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
                        <h3 className="text-xl font-semibold mb-2 text-gray-900">Message Sent!</h3>
                        <p className="text-gray-700">
                          Thank you for reaching out. I'll get back to you soon.
                        </p>
                      </div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-900">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="bg-white border-2 border-gray-300 placeholder:text-gray-500"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold mb-2 text-gray-900">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@example.com"
                            className="bg-white border-2 border-gray-300 placeholder:text-gray-500"
                            required
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-gray-900">
                            Phone Number
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 000-0000"
                            className="bg-white border-2 border-gray-300 placeholder:text-gray-500"
                          />
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-semibold mb-2 text-gray-900">
                            Message *
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell me about your fitness goals and what you're looking to achieve..."
                            rows={6}
                            className="bg-white border-2 border-gray-300 placeholder:text-gray-500"
                            required
                          />
                        </div>
                        <Button type="submit" className="w-full bg-gray-900 text-white hover:bg-gray-800 shadow-lg" size="lg">
                          Send Message
                        </Button>
                      </form>
                    )}
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <Card className="border-2 border-gray-300 shadow-xl bg-white">
                  <CardHeader>
                    <CardTitle className="text-gray-900">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <Mail className="w-5 h-5 text-gray-900 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900">Email</p>
                        <a
                          href="mailto:info@jinayfitness.com"
                          className="text-sm text-gray-700 hover:text-black"
                        >
                          info@jinayfitness.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <Phone className="w-5 h-5 text-gray-900 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900">Phone</p>
                        <a
                          href="tel:+15555551234"
                          className="text-sm text-gray-700 hover:text-black"
                        >
                          +1 (555) 555-1234
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <MapPin className="w-5 h-5 text-gray-900 mt-0.5" />
                      <div>
                        <p className="font-semibold text-gray-900">Location</p>
                        <p className="text-sm text-gray-700">
                          Online Coaching Available Worldwide
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-white text-gray-700 border-2 border-gray-300 shadow-xl">
                  <CardHeader>
                    <CardTitle className="text-gray-900">Response Time</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-700">
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
