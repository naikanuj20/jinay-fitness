'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CreditCard, Building2, Check, ArrowLeft, Smartphone, Wallet } from 'lucide-react';
import Link from 'next/link';
import { loadStripe } from '@stripe/stripe-js';

// Initialize Stripe
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

function PaymentContent() {
  const searchParams = useSearchParams();
  const planId = searchParams.get('plan') || 'consultation';
  const planTitle = searchParams.get('title') || 'Consultation and Fitness Assessment';
  const rawPrice = searchParams.get('price') || '30';
  const planPrice = `$${parseFloat(rawPrice).toFixed(2)}`;

  const sessionDetails: Record<string, { description: string; details: string[] }> = {
    consultation: {
      description: 'Start your fitness journey with a comprehensive evaluation and expert guidance tailored to your goals.',
      details: [
        'Full body composition analysis',
        'Fitness level assessment',
        'Goal-setting consultation',
        'Personalized recommendations',
        '45-minute session',
      ],
    },
    'single-session': {
      description: 'Experience personalized training with expert guidance in a single, focused session.',
      details: [
        'One-on-one training',
        'Customized workout plan',
        'Form and technique correction',
        'Nutritional advice',
        '55-minute session',
      ],
    },
    'six-sessions': {
      description: 'Build momentum with 6 personalized training sessions designed to transform your fitness.',
      details: [
        'Six personalized sessions',
        'Progressive workout plans',
        'Nutrition coaching included',
        'Weekly check-ins',
        'Performance tracking',
      ],
    },
    'twelve-sessions': {
      description: 'Complete transformation package with 12 personalized training sessions for maximum results.',
      details: [
        'Twelve personalized sessions',
        'Comprehensive fitness plan',
        'Detailed nutrition coaching',
        'Bi-weekly progress reviews',
        'Full performance tracking',
      ],
    },
  };

  const currentSession = sessionDetails[planId] || sessionDetails.consultation;

  const [isProcessing, setIsProcessing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handleStripePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    try {
      // Call your API to create Stripe checkout session
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          planId,
          planTitle,
          price: rawPrice,
          customerEmail: formData.email,
          customerName: formData.name,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Payment failed');
      }

      // Redirect to Stripe checkout URL
      if (!data.url) {
        throw new Error('No checkout URL received');
      }
      window.location.href = data.url;
    } catch (error: any) {
      console.error('Payment error:', error);
      alert('Payment failed: ' + (error.message || 'Please try again'));
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0E0E0E]">
      <Header />
      <main>
        <section className="py-20 bg-[#0E0E0E]">
          <div className="container mx-auto px-4">
            <Link 
              href="/online-program" 
              className="inline-flex items-center text-sm text-[#CFCFCF] hover:text-[#6A00FF] mb-8 font-semibold"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Plans
            </Link>

            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Complete Your Purchase</h1>
                <p className="text-lg text-[#CFCFCF]">
                  You're one step away from starting your fitness transformation
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <Card className="bg-[#1F1F1F] border-2 border-[#1F1F1F] shadow-xl sticky top-8">
                    <CardHeader>
                      <CardTitle className="text-white">Order Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-sm text-[#9A9A9A] mb-1">Selected Plan</p>
                        <p className="text-xl font-bold text-white">{planTitle}</p>
                      </div>
                      <div className="bg-[#0E0E0E] p-4 rounded-lg border border-[#1F1F1F]">
                        <p className="text-sm text-[#CFCFCF] leading-relaxed">{currentSession.description}</p>
                      </div>
                      <div className="border-t border-[#1F1F1F] pt-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-[#CFCFCF]">Subtotal</span>
                          <span className="text-white font-semibold">{planPrice}</span>
                        </div>
                        <div className="flex justify-between items-center text-lg font-bold border-t border-[#1F1F1F] pt-4 mt-4">
                          <span className="text-white">Total</span>
                          <span className="text-[#6A00FF]">{planPrice}</span>
                        </div>
                      </div>
                      <div className="bg-[#0E0E0E] p-4 rounded-lg border border-[#1F1F1F]">
                        <h4 className="font-semibold text-white mb-2 flex items-center">
                          <Check className="w-4 h-4 mr-2 text-[#6A00FF]" />
                          What's Included
                        </h4>
                        <ul className="text-sm text-[#CFCFCF] space-y-1">
                          {currentSession.details.map((detail, index) => (
                            <li key={index}>• {detail}</li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Payment Methods */}
                <div className="lg:col-span-2">
                  <Card className="border-2 border-[#1F1F1F] shadow-xl bg-[#0E0E0E]">
                    <CardHeader>
                      <CardTitle className="text-white">Choose Payment Method</CardTitle>
                      <CardDescription className="text-[#CFCFCF]">
                        Select how you'd like to complete your purchase
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Payment Info */}
                      <div className="bg-[#1F1F1F] border border-[#6A00FF] border-opacity-30 rounded-lg p-4">
                        <p className="text-sm text-[#CFCFCF]">
                          All payments are processed securely through <strong>Stripe</strong>. You'll have the option to pay with:
                        </p>
                        <ul className="text-sm text-[#CFCFCF] mt-3 space-y-1">
                          <li>✓ Credit/Debit Card (Visa, Mastercard, American Express)</li>
                          <li>✓ ACH Debit (Direct Bank Transfer)</li>
                        </ul>
                      </div>

                      {/* Stripe Payment Form */}
                      <form onSubmit={handleStripePayment} className="space-y-4">
                        <div>
                          <label htmlFor="name" className="block text-sm font-semibold mb-2 text-white">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            placeholder="John Doe"
                            className="bg-[#1F1F1F] border-2 border-[#1F1F1F] placeholder:text-[#9A9A9A] text-white"
                            required
                            disabled={isProcessing}
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-semibold mb-2 text-white">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="john@example.com"
                            className="bg-[#1F1F1F] border-2 border-[#1F1F1F] placeholder:text-[#9A9A9A] text-white"
                            required
                            disabled={isProcessing}
                          />
                        </div>
                        <Button
                          type="submit"
                          className="w-full bg-[#6A00FF] hover:bg-[#8C3CFF] text-white font-semibold py-6 text-lg shadow-lg hover:shadow-[#6A00FF]/30 disabled:opacity-50 disabled:cursor-not-allowed"
                          disabled={isProcessing}
                        >
                          {isProcessing ? 'Processing...' : `Proceed to Payment (${planPrice})`}
                        </Button>
                        <p className="text-xs text-center text-[#9A9A9A]">
                          Powered by Stripe • Credit Card and ACH Debit available
                        </p>
                      </form>
                    </CardContent>
                  </Card>

                  {/* Security Notice */}
                  <div className="mt-6 text-center text-sm text-[#9A9A9A]">
                    <p>🔒 Your payment information is secure and encrypted</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default function PaymentPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <PaymentContent />
    </Suspense>
  );
}
