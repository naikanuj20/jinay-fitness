'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CreditCard, Building2, Check, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

function PaymentContent() {
  const searchParams = useSearchParams();
  const planId = searchParams.get('plan') || 'one-month';
  const planTitle = searchParams.get('title') || '1 Month';
  const planPrice = searchParams.get('price') || '$200';

  const [paymentMethod, setPaymentMethod] = useState<'paypal' | 'bank'>('paypal');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const handlePayPalCheckout = () => {
    // In production, integrate PayPal SDK here
    alert('PayPal integration coming soon! You will be redirected to PayPal checkout.');
  };

  const handleBankTransfer = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Please transfer to the bank details shown and email confirmation to nanuj1320@gmail.com');
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
                          <li>• Personalized workout plan</li>
                          <li>• Nutrition guidance</li>
                          <li>• Form check videos</li>
                          <li>• Direct communication</li>
                          <li>• Progress tracking</li>
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
                          onClick={() => setPaymentMethod('paypal')}
                          className={`p-6 rounded-lg border-2 transition-all ${
                            paymentMethod === 'paypal'
                              ? 'border-gray-900 bg-gray-50'
                              : 'border-gray-300 hover:border-gray-400'
                          }`}
                        >
                          <div className="flex items-center justify-center mb-2">
                            <CreditCard className="w-8 h-8 text-gray-900" />
                          </div>
                          <h3 className="font-semibold text-gray-900">PayPal</h3>
                          <p className="text-sm text-gray-600 mt-1">Fast & secure payment</p>
                        </button>

                        <button
                          onClick={() => setPaymentMethod('bank')}
                          className={`p-6 rounded-lg border-2 transition-all ${
                            paymentMethod === 'bank'
                              ? 'border-gray-900 bg-gray-50'
                              : 'border-gray-300 hover:border-gray-400'
                          }`}
                        >
                          <div className="flex items-center justify-center mb-2">
                            <Building2 className="w-8 h-8 text-gray-900" />
                          </div>
                          <h3 className="font-semibold text-gray-900">Bank Transfer</h3>
                          <p className="text-sm text-gray-600 mt-1">Direct bank payment</p>
                        </button>
                      </div>

                      {/* PayPal Section */}
                      {paymentMethod === 'paypal' && (
                        <div className="space-y-4">
                          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                            <p className="text-sm text-blue-900">
                              You'll be redirected to PayPal to complete your secure payment.
                            </p>
                          </div>
                          <Button
                            onClick={handlePayPalCheckout}
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-6 text-lg shadow-lg"
                          >
                            Continue to PayPal
                          </Button>
                        </div>
                      )}

                      {/* Bank Transfer Section */}
                      {paymentMethod === 'bank' && (
                        <div className="space-y-6">
                          <div className="bg-gray-50 border-2 border-gray-300 rounded-lg p-6">
                            <h4 className="font-semibold text-gray-900 mb-4">Bank Transfer Details</h4>
                            <div className="space-y-3 text-sm">
                              <div>
                                <span className="text-gray-600">Bank Name:</span>
                                <p className="font-semibold text-gray-900">Your Bank Name</p>
                              </div>
                              <div>
                                <span className="text-gray-600">Account Name:</span>
                                <p className="font-semibold text-gray-900">Jinay Fitness</p>
                              </div>
                              <div>
                                <span className="text-gray-600">Account Number:</span>
                                <p className="font-semibold text-gray-900">1234567890</p>
                              </div>
                              <div>
                                <span className="text-gray-600">Routing Number:</span>
                                <p className="font-semibold text-gray-900">987654321</p>
                              </div>
                              <div>
                                <span className="text-gray-600">Amount:</span>
                                <p className="font-semibold text-gray-900">{planPrice}</p>
                              </div>
                            </div>
                          </div>

                          <form onSubmit={handleBankTransfer} className="space-y-4">
                            <div>
                              <label htmlFor="name" className="block text-sm font-semibold mb-2 text-gray-900">
                                Full Name *
                              </label>
                              <Input
                                id="name"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
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
                                type="email"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                placeholder="john@example.com"
                                className="bg-white border-2 border-gray-300 placeholder:text-gray-500"
                                required
                              />
                            </div>
                            <div>
                              <label htmlFor="phone" className="block text-sm font-semibold mb-2 text-gray-900">
                                Phone Number *
                              </label>
                              <Input
                                id="phone"
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                placeholder="+1 (555) 000-0000"
                                className="bg-white border-2 border-gray-300 placeholder:text-gray-500"
                                required
                              />
                            </div>

                            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
                              <p className="text-sm text-amber-900">
                                <strong>Important:</strong> After completing the bank transfer, please email your payment confirmation to <strong>nanuj1320@gmail.com</strong> with your name and selected plan.
                              </p>
                            </div>

                            <Button
                              type="submit"
                              className="w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-6 text-lg shadow-lg"
                            >
                              Confirm Bank Transfer
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
