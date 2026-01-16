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
      <div className="min-h-screen flex items-center justify-center bg-[#0E0E0E]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#6A00FF] mx-auto mb-4"></div>
          <p className="text-[#CFCFCF]">Verifying your payment...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0E0E0E]">
      <Header />
      <main>
        <section className="py-20 bg-gradient-to-b from-[#1F1F1F] to-[#0E0E0E]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-[#6A00FF] bg-opacity-20 rounded-full mb-6 border border-[#6A00FF]">
                  <CheckCircle className="w-12 h-12 text-[#6A00FF]" />
                </div>
                <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                  Payment Successful!
                </h1>
                <p className="text-xl text-[#CFCFCF]">
                  Thank you for choosing Forged Fitness with Jinay
                </p>
              </div>

              <Card className="border-2 border-[#6A00FF] shadow-xl bg-[#1F1F1F] shadow-[#6A00FF]/20 mb-8">
                <CardHeader className="bg-[#6A00FF] bg-opacity-10 border-b border-[#6A00FF]">
                  <CardTitle className="text-white">What's Next?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-[#6A00FF] bg-opacity-20 rounded-full flex items-center justify-center border border-[#6A00FF]">
                        <Mail className="w-5 h-5 text-[#6A00FF]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Check Your Email</h3>
                      <p className="text-[#CFCFCF]">
                        You'll receive a confirmation email with your purchase details and next steps.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0">
                      <div className="w-10 h-10 bg-[#6A00FF] bg-opacity-20 rounded-full flex items-center justify-center border border-[#6A00FF]">
                        <Calendar className="w-5 h-5 text-[#6A00FF]" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">Schedule Your Session</h3>
                      <p className="text-[#CFCFCF]">
                        Jinay will contact you within 24 hours to schedule your first session.
                      </p>
                    </div>
                  </div>

                  <div className="bg-[#0E0E0E] border border-[#1F1F1F] rounded-lg p-4">
                    <p className="text-sm text-[#CFCFCF]">
                      <strong>Session ID:</strong> {sessionId || 'Confirmed'}
                    </p>
                    <p className="text-sm text-[#CFCFCF] mt-2">
                      Keep this confirmation for your records.
                    </p>
                  </div>
                </CardContent>
              </Card>

              <div className="text-center space-y-4">
                <p className="text-[#CFCFCF]">
                  Have questions? Feel free to reach out!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact">
                    <Button className="bg-[#6A00FF] hover:bg-[#8C3CFF] text-white font-semibold px-8 py-6 shadow-lg hover:shadow-[#6A00FF]/30">
                      Contact Us
                    </Button>
                  </Link>
                  <Link href="/">
                    <Button variant="outline" className="border-2 border-[#6A00FF] text-[#6A00FF] hover:bg-[#6A00FF] hover:text-white font-semibold px-8 py-6">
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
      <div className="min-h-screen flex items-center justify-center bg-[#0E0E0E]">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-[#6A00FF] mx-auto mb-4"></div>
          <p className="text-[#CFCFCF]">Loading...</p>
        </div>
      </div>
    }>
      <SuccessContent />
    </Suspense>
  );
}
