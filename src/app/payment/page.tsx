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

  const [paymentMethod, setPaymentMethod] = useState<'card' | 'venmo'>('card');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    venmoHandle: '',
  });

  const handleCardPayment = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, integrate with Stripe or similar payment processor
    alert('Payment processing... In production, this will process your card payment securely.');
  };

  const handleVenmoPayment = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Please send $${parseFloat(rawPrice).toFixed(2)} to @jinay-fitness on Venmo with your name in the note.`);
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <Link 
              href="/online-program" 
              className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 mb-8 font-semibold"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Plans
            </Link>

            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Complete Your Purchase</h1>
                <p className="text-lg text-gray-700">
                  You're one step away from starting your fitness transformation
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <Card className="bg-gray-50 border-2 border-gray-300 shadow-xl sticky top-8">
                    <CardHeader>
                      <CardTitle className="text-gray-900">Order Summary</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-sm text-gray-600 mb-1">Selected Plan</p>
                        <p className="text-xl font-bold text-gray-900">{planTitle}</p>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-300">
                        <p className="text-sm text-gray-700 leading-relaxed">{currentSession.description}</p>
                      </div>
                      <div className="border-t border-gray-300 pt-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-gray-700">Subtotal</span>
                          <span className="text-gray-900 font-semibold">{planPrice}</span>
                        </div>
                        <div className="flex justify-between items-center text-lg font-bold border-t border-gray-300 pt-4 mt-4">
                          <span className="text-gray-900">Total</span>
                          <span className="text-gray-900">{planPrice}</span>
                        </div>
                      </div>
                      <div className="bg-white p-4 rounded-lg border border-gray-300">
                        <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                          <Check className="w-4 h-4 mr-2 text-green-600" />
                          What's Included
                        </h4>
                        <ul className="text-sm text-gray-700 space-y-1">
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
                  <Card className="border-2 border-gray-300 shadow-xl bg-white">
                    <CardHeader>
                      <CardTitle className="text-gray-900">Choose Payment Method</CardTitle>
                      <CardDescription className="text-gray-700">
                        Select how you'd like to complete your purchase
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Payment Method Selection */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <button
                          onClick={() => setPaymentMethod('card')}
                          className={`p-6 rounded-lg border-2 transition-all ${
                            paymentMethod === 'card'
                              ? 'border-gray-900 bg-gray-50'
                              : 'border-gray-300 hover:border-gray-400'
                          }`}
                        >
                          <div className="flex items-center justify-center mb-2">
                            <CreditCard className="w-8 h-8 text-gray-900" />
                          </div>
                          <h3 className="font-semibold text-gray-900">Card</h3>
                          <p className="text-sm text-gray-600 mt-1">Debit or Credit</p>
                        </button>

                        <button
                          onClick={() => setPaymentMethod('venmo')}
                          className={`p-6 rounded-lg border-2 transition-all ${
                            paymentMethod === 'venmo'
                              ? 'border-gray-900 bg-gray-50'
                              : 'border-gray-300 hover:border-gray-400'
                          }`}
                        >
                          <div className="flex items-center justify-center mb-2">
                            <Smartphone className="w-8 h-8 text-gray-900" />
                          </div>
                          <h3 className="font-semibold text-gray-900">Venmo</h3>
                          <p className="text-sm text-gray-600 mt-1">Quick transfer</p>
                        </button>
                      </div>

                      {/* Card Payment Section */}
                      {paymentMethod === 'card' && (
                        <form onSubmit={handleCardPayment} className="space-y-4">
                          <div className="bg-gray-50 border border-gray-300 rounded-lg p-4">
                            <p className="text-sm text-gray-700">
                              Enter your card details below. All transactions are secure and encrypted.
                            </p>
                          </div>
                          <div>
                            <label htmlFor="cardName" className="block text-sm font-semibold mb-2 text-gray-900">
                              Cardholder Name *
                            </label>
                            <Input
                              id="cardName"
                              value={formData.name}
                              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                              placeholder="John Doe"
                              className="bg-white border-2 border-gray-300 placeholder:text-gray-500 text-gray-900"
                              required
                            />
                          </div>
                          <div>
                            <label htmlFor="cardNumber" className="block text-sm font-semibold mb-2 text-gray-900">
                              Card Number *
                            </label>
                            <Input
                              id="cardNumber"
                              value={formData.cardNumber}
                              onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                              placeholder="1234 5678 9012 3456"
                              className="bg-white border-2 border-gray-300 placeholder:text-gray-500 text-gray-900"
                              maxLength={19}
                              required
                            />
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <label htmlFor="expiryDate" className="block text-sm font-semibold mb-2 text-gray-900">
                                Expiry Date *
                              </label>
                              <Input
                                id="expiryDate"
                                value={formData.expiryDate}
                                onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                                placeholder="MM/YY"
                                className="bg-white border-2 border-gray-300 placeholder:text-gray-500 text-gray-900"
                                maxLength={5}
                                required
                              />
                            </div>
                            <div>
                              <label htmlFor="cvv" className="block text-sm font-semibold mb-2 text-gray-900">
                                CVV *
                              </label>
                              <Input
                                id="cvv"
                                value={formData.cvv}
                                onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                                placeholder="123"
                                className="bg-white border-2 border-gray-300 placeholder:text-gray-500 text-gray-900"
                                maxLength={4}
                                required
                              />
                            </div>
                          </div>
                          <div>
                            <label htmlFor="cardEmail" className="block text-sm font-semibold mb-2 text-gray-900">
                              Email Address *
                            </label>
                            <Input
                              id="cardEmail"
                              type="email"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              placeholder="john@example.com"
                              className="bg-white border-2 border-gray-300 placeholder:text-gray-500 text-gray-900"
                              required
                            />
                          </div>
                          <Button
                            type="submit"
                            className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-6 text-lg shadow-lg"
                          >
                            Pay {planPrice}
                          </Button>
                        </form>
                      )}

                      {/* Venmo Section */}
                      {paymentMethod === 'venmo' && (
                        <div className="space-y-4">
                          <div className="bg-blue-50 border-2 border-blue-300 rounded-lg p-6">
                            <h4 className="font-semibold text-gray-900 mb-4">Venmo Payment Instructions</h4>
                            <div className="space-y-3 text-sm">
                              <div>
                                <span className="text-gray-600">Venmo Username:</span>
                                <p className="font-semibold text-gray-900 text-lg">@jinay-fitness</p>
                              </div>
                              <div>
                                <span className="text-gray-600">Amount:</span>
                                <p className="font-semibold text-gray-900">{planPrice}</p>
                              </div>
                              <div className="mt-4 p-3 bg-amber-50 border border-amber-300 rounded">
                                <p className="text-amber-900 text-sm">
                                  <strong>Important:</strong> Please include your name and "{planTitle}" in the payment note.
                                </p>
                              </div>
                            </div>
                          </div>
                          <form onSubmit={handleVenmoPayment} className="space-y-4">
                            <div>
                              <label htmlFor="venmoName" className="block text-sm font-semibold mb-2 text-gray-900">
                                Full Name *
                              </label>
                              <Input
                                id="venmoName"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="John Doe"
                                className="bg-white border-2 border-gray-300 placeholder:text-gray-500 text-gray-900"
                                required
                              />
                            </div>
                            <div>
                              <label htmlFor="venmoHandle" className="block text-sm font-semibold mb-2 text-gray-900">
                                Your Venmo Username *
                              </label>
                              <Input
                                id="venmoHandle"
                                value={formData.venmoHandle}
                                onChange={(e) => setFormData({ ...formData, venmoHandle: e.target.value })}
                                placeholder="@your-username"
                                className="bg-white border-2 border-gray-300 placeholder:text-gray-500 text-gray-900"
                                required
                              />
                            </div>
                            <div>
                              <label htmlFor="venmoEmail" className="block text-sm font-semibold mb-2 text-gray-900">
                                Email Address *
                              </label>
                              <Input
                                id="venmoEmail"
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="john@example.com"
                                className="bg-white border-2 border-gray-300 placeholder:text-gray-500 text-gray-900"
                                required
                              />
                            </div>
                            <Button
                              type="submit"
                              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 text-lg shadow-lg"
                            >
                              Confirm Venmo Payment
                            </Button>
                          </form>
                        </div>
                      )}
                    </CardContent>
                  </Card>

                  {/* Security Notice */}
                  <div className="mt-6 text-center text-sm text-gray-600">
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
