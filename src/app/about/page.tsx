import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { Award, Target, Heart, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-fade-in-up">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">About Jinay Fitness</h1>
                <p className="text-lg text-gray-700 mb-6">
                  With over a decade of experience in fitness coaching and personal training, 
                  I've dedicated my life to helping individuals transform their bodies and minds 
                  through structured, science-based training programs.
                </p>
                <p className="text-lg text-gray-700 mb-8">
                  My approach combines traditional strength training with modern calisthenics, 
                  creating a comprehensive system that builds functional strength, mobility, 
                  and aesthetic physiques.
                </p>
                <Link href="/contact" className={buttonVariants({ size: "lg", className: "bg-gray-900 text-white hover:bg-gray-800 shadow-lg" })}>
                  Start Your Journey
                </Link>
              </div>
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070"
                  alt="Fitness coach"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">My Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-900 mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Goal-Oriented</h3>
                <p className="text-gray-600">
                  Every program is designed with your specific goals in mind, ensuring measurable progress.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-900 mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Excellence</h3>
                <p className="text-gray-600">
                  Commitment to the highest standards in coaching, programming, and client support.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-900 mb-4">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Holistic Approach</h3>
                <p className="text-gray-600">
                  Training, nutrition, and mindset work together for complete transformation.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-900 mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Progressive</h3>
                <p className="text-gray-600">
                  Continuous improvement through systematic progression and adaptation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications & Experience */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Experience & Credentials</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm border-2 border-gray-200 hover:border-black transition-all">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Certified Personal Trainer (CPT)</h3>
                  <p className="text-gray-700">
                    National Academy of Sports Medicine (NASM) - 2013
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm border-2 border-gray-200 hover:border-black transition-all">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Certified Strength & Conditioning Specialist</h3>
                  <p className="text-gray-700">
                    International Sports Sciences Association (ISSA) - 2015
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm border-2 border-gray-200 hover:border-black transition-all">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Precision Nutrition Level 1</h3>
                  <p className="text-gray-700">
                    Certified in nutrition coaching and habit-based transformation - 2017
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm border-2 border-gray-200 hover:border-black transition-all">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">10+ Years Coaching Experience</h3>
                  <p className="text-gray-700">
                    Successfully coached over 500 clients to achieve their fitness goals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              Ready to Start Your Transformation?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-700">
              Let's work together to achieve your fitness goals with a personalized coaching program.
            </p>
            <Link href="/contact" className={buttonVariants({ size: "lg", className: "bg-gray-900 text-white hover:bg-gray-800 font-semibold shadow-lg" })}>
              Get Started Today
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
