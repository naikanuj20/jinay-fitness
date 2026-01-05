'use client';

import { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle, Mail, Calendar } from 'lucide-react';
import Link from 'next/link';

function SuccessContent() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [isVerifying, setIsVerifying] = useState(true);

  useEffect(() => {
    // Simulate verification (you can add actual verification with Stripe API)
    setTimeout(() => {
      setIsVerifying(false);
    }, 1500);
  }, []);

  if (isVerifying) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-700">Verifying your payment...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <section className="py-20 bg-gradient-to-b from-green-50 to-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 rounded-full mb-6">
                  <CheckCircle className="w-12 h-12 text-green-600" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                  Payment Successful!
                </h1>
                <p className="text-xl text-gray-700">
                  Thank you for choosing Forged Fitness with Jinay
                </p>
              </div>

              <Card className="border-2 border-green-200 shadow-xl bg-white mb-8">
                <CardHeader className="bg-green-50 border-b border-green-200">
                  <CardTitle className="text-gray-900">What's Next?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Mail className="w-5 h-5 text-blue-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Check Your Email</h3>
                      <p className="text-gray-700">
                        You'll receive a confirmation email with your purchase details and next steps.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-purple-600" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">Schedule Your Session</h3>
                      <p className="text-gray-700">
                        Jinay will contact you within 24 hours to schedule your first session.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-50 border border-gray-300 rounded-lg p-4">
                    <p className="text-sm text-gray-700">
                      <strong>Session ID:</strong> {sessionId || 'Confirmed'}
                    </p>
                    <p className="text-sm text-gray-700 mt-2">
                      Keep this confirmation for your records.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center space-y-4">
                <p className="text-gray-700">
                  Have questions? Feel free to reach out!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button className="bg-gray-900 hover:bg-gray-800 text-white font-semibold px-8 py-6">
                      Contact Us
                    </Button>
                  </Link>
                  <Link href="/">
                    <Button variant="outline" className="border-2 border-gray-300 font-semibold px-8 py-6">
                      Return Home
                    </Button>
                  </Link>
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

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-gray-900 mx-auto mb-4"></div>
          <p className="text-gray-700">Loading...</p>
        </div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
