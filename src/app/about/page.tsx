import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { buttonVariants } from '@/components/ui/button';
import Link from 'next/link';
import { Award, Target, Heart, TrendingUp } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0E0E0E]">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-[#0E0E0E]">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-fade-in-up">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">About Jinay Fitness</h1>
                <p className="text-lg text-[#CFCFCF] mb-6">
                  I'm a passionate advocate for fitness that feels good. My philosophy centers on movement as celebration, strength as empowerment, and progress—not perfection.My own fitness journey showed me that true change happens at the intersection of knowledge and support.

                </p>
                <p className="text-lg text-[#CFCFCF] mb-8">
                  I specialize in creating personalized fitness strategies that fit your life, so you can move better, feel stronger, and own your potential. Together, we’ll build habits that nourish your body and energize your life.I’m here to cut through the noise, provide clear guidance, and be your biggest cheerleader as you discover a stronger, healthier, and more energetic version of yourself.
                </p>
                <Link href="/contact" className={buttonVariants({ size: "lg", className: "bg-[#6A00FF] text-white hover:bg-[#8C3CFF] shadow-lg hover:shadow-[#6A00FF]/30" })}>
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
        <section className="py-20 bg-[#141414]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">My Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#6A00FF] mb-4">
                  <Target className="w-8 h-8 text-[#0E0E0E]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Goal-Oriented</h3>
                <p className="text-[#9A9A9A]">
                  Every program is designed with your specific goals in mind, ensuring measurable progress.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#6A00FF] mb-4">
                  <Award className="w-8 h-8 text-[#0E0E0E]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Excellence</h3>
                <p className="text-[#9A9A9A]">
                  Commitment to the highest standards in coaching, programming, and client support.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#6A00FF] mb-4">
                  <Heart className="w-8 h-8 text-[#0E0E0E]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Holistic Approach</h3>
                <p className="text-[#9A9A9A]">
                  Training, nutrition, and mindset work together for complete transformation.
                </p>
              </div>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#6A00FF] mb-4">
                  <TrendingUp className="w-8 h-8 text-[#0E0E0E]" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Progressive</h3>
                <p className="text-[#9A9A9A]">
                  Continuous improvement through systematic progression and adaptation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications & Experience */}
        <section className="py-20 bg-[#0E0E0E]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-white">Experience & Credentials</h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                <div className="bg-[#1F1F1F] p-6 rounded-lg shadow-sm border-2 border-[#1F1F1F] hover:border-[#6A00FF] transition-all">
                  <h3 className="text-xl font-semibold mb-2 text-white">Certified Personal Trainer (CPT)</h3>
                  <p className="text-[#CFCFCF]">
                    National Academy of Sports Medicine (NASM)
                  </p>
                </div>
                <div className="bg-[#1F1F1F] p-6 rounded-lg shadow-sm border-2 border-[#1F1F1F] hover:border-[#6A00FF] transition-all">
                  <h3 className="text-xl font-semibold mb-2 text-white">Certified Strength & Conditioning Specialist</h3>
                  <p className="text-[#CFCFCF]">
                    International Sports Sciences Association (ISSA)
                  </p>
                </div>
                <div className="bg-[#1F1F1F] p-6 rounded-lg shadow-sm border-2 border-[#1F1F1F] hover:border-[#6A00FF] transition-all">
                  <h3 className="text-xl font-semibold mb-2 text-white">Precision Nutrition Level 1</h3>
                  <p className="text-[#CFCFCF]">
                    Certified in nutrition coaching and habit-based transformation 
                  </p>
                </div>
                <div className="bg-[#1F1F1F] p-6 rounded-lg shadow-sm border-2 border-[#1F1F1F] hover:border-[#6A00FF] transition-all">
                  <h3 className="text-xl font-semibold mb-2 text-white">10+ Years Coaching Experience</h3>
                  <p className="text-[#CFCFCF]">
                    Successfully coached over 500 clients to achieve their fitness goals
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#141414]">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Start Your Transformation?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-[#CFCFCF]">
              Let's work together to achieve your fitness goals with a personalized coaching program.
            </p>
            <Link href="/contact" className={buttonVariants({ size: "lg", className: "bg-[#6A00FF] text-white hover:bg-[#8C3CFF] font-semibold shadow-lg hover:shadow-[#6A00FF]/30" })}>
              Get Started Today
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
