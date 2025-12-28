import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import Image from 'next/image';
import { Check, Dumbbell, Apple, Brain, Calendar, Video, MessageCircle } from 'lucide-react';

export default function OnlineProgramPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center mb-12 animate-fade-in-up">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Online Coaching Program</h1>
              <p className="text-lg md:text-xl text-gray-700 mb-8">
                A comprehensive, science-based approach to building strength, mastering technique, 
                and achieving your ultimate physique—all from anywhere in the world.
              </p>
              <Link 
                href="#pricing" 
                className={buttonVariants({ size: "lg", className: "bg-gray-900 text-white hover:bg-gray-800" })}
              >
                View Pricing Plans
              </Link>
            </div>
          </div>
        </section>

        {/* What You Get */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">What's Included</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <Card className="bg-white border-2 border-gray-300 hover:border-gray-400 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center mb-4">
                    <Dumbbell className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-gray-900">Personalized Training</CardTitle>
                  <CardDescription className="text-gray-600">
                    Custom workout plans designed specifically for your goals, experience level, and available equipment
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white border-2 border-gray-300 hover:border-gray-400 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center mb-4">
                    <Apple className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-gray-900">Nutrition Guidance</CardTitle>
                  <CardDescription className="text-gray-600">
                    Comprehensive meal planning and nutrition coaching to fuel your training and optimize results
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white border-2 border-gray-300 hover:border-gray-400 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center mb-4">
                    <Video className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-gray-900">Form Check Videos</CardTitle>
                  <CardDescription className="text-gray-600">
                    Submit videos for detailed form analysis and personalized technique corrections
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white border-2 border-gray-300 hover:border-gray-400 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center mb-4">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-gray-900">Direct Communication</CardTitle>
                  <CardDescription className="text-gray-600">
                    Unlimited messaging support for questions, adjustments, and motivation
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white border-2 border-gray-300 hover:border-gray-400 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center mb-4">
                    <Calendar className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-gray-900">Progress Tracking</CardTitle>
                  <CardDescription className="text-gray-600">
                    Systematic tracking of workouts, measurements, and milestones to ensure continuous improvement
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="bg-white border-2 border-gray-300 hover:border-gray-400 transition-all">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gray-900 flex items-center justify-center mb-4">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-gray-900">Mindset Coaching</CardTitle>
                  <CardDescription className="text-gray-600">
                    Mental strategies and habit formation techniques for long-term success
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Training Philosophy */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Training Philosophy</h2>
              <div className="space-y-8">
                <Card className="bg-white border-2 border-gray-300 shadow-xl hover:border-gray-400 transition-all">
                  <CardHeader>
                    <CardTitle className="text-gray-900">Phase 1: Building Foundations</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Building a resilient, responsive physique by mastering fundamental movement patterns. 
                      Your body will adapt to a variety of stimuli—calisthenics for control, weight training 
                      for raw strength, and weighted calisthenics for the bridge between them.
                    </p>
                    <ul className="space-y-2">
                      {[
                        'Master bodyweight movements',
                        'Build work capacity and conditioning',
                        'Develop joint stability and mobility',
                        'Learn proper breathing and bracing techniques'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Check className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white border-2 border-gray-300 shadow-xl hover:border-gray-400 transition-all">
                  <CardHeader>
                    <CardTitle className="text-gray-900">Phase 2: Strength Development</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Transitioning from simply moving weight to executing flawless, powerful lifts. 
                      This is where you refine technique, ingrain efficient motor patterns, and channel 
                      your accumulated strength into personal records.
                    </p>
                    <ul className="space-y-2">
                      {[
                        'Progressive overload strategies',
                        'Advanced compound movements',
                        'Periodization for continuous gains',
                        'Recovery and deload protocols'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Check className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-white border-2 border-gray-300 shadow-xl hover:border-gray-400 transition-all">
                  <CardHeader>
                    <CardTitle className="text-gray-900">Phase 3: Mastery & Optimization</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4">
                      Learning how to eat right and resist temptation while optimizing your training 
                      for peak performance. This phase focuses on fine-tuning all aspects of your program 
                      for maximum results.
                    </p>
                    <ul className="space-y-2">
                      {[
                        'Advanced nutrition strategies',
                        'Macro cycling and meal timing',
                        'Competition preparation (if desired)',
                        'Sustainable lifestyle integration'
                      ].map((item, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <Check className="w-5 h-5 text-gray-900 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Choose Your Plan</h2>
              <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                Select from individual training sessions or commit to a monthly coaching program for the best results.
              </p>
            </div>

            {/* Training Sessions */}
            <div className="mb-20">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Training Sessions</h3>
                <p className="text-gray-600">Perfect for getting started or supplementing your current routine</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {[
                  { 
                    id: 'consultation', 
                    title: 'Consultation & Assessment', 
                    price: 30, 
                    duration: '45 minutes',
                    description: 'Comprehensive fitness evaluation and personalized consultation'
                  },
                  { 
                    id: 'single-session', 
                    title: 'Single Training Session', 
                    price: 49.99, 
                    duration: '55 minutes',
                    description: 'One-on-one personalized training session'
                  },
                  { 
                    id: 'six-sessions', 
                    title: '6 Training Sessions', 
                    price: 249.99, 
                    duration: '55 min each',
                    description: 'Six personalized training sessions package'
                  },
                  { 
                    id: 'twelve-sessions', 
                    title: '12 Training Sessions', 
                    price: 499.99, 
                    duration: '55 min each',
                    description: 'Twelve personalized training sessions package'
                  },
                ].map((session, index) => (
                  <Card 
                    key={session.id} 
                    className="bg-white border-2 border-gray-300 hover:border-gray-400 hover:shadow-xl transition-all group animate-fade-in-up h-full flex flex-col"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <CardHeader className="flex-grow">
                      <CardTitle className="text-xl text-gray-900 group-hover:text-gray-700 transition-colors min-h-[56px]">{session.title}</CardTitle>
                      <CardDescription className="text-gray-600 text-sm min-h-[40px]">{session.description}</CardDescription>
                      <div className="mt-4">
                        <span className="text-3xl font-bold text-gray-900">${session.price.toFixed(2)}</span>
                        <p className="text-sm text-gray-600 mt-1">{session.duration}</p>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <Link 
                        href={`/payment?plan=${session.id}&title=${encodeURIComponent(session.title)}&price=${session.price}`}
                        className={buttonVariants({ 
                          className: 'w-full bg-gray-900 text-white hover:bg-gray-800' 
                        })}
                      >
                        Add to Cart →
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Monthly Coaching Programs */}
            <div>
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">Monthly Coaching Programs</h3>
                <p className="text-gray-600">Comprehensive online coaching for serious transformation. Longer commitments = better value.</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {[
                  { 
                    id: 'one-month', 
                    title: '1 Month Program', 
                    price: '200', 
                    duration: '1 month',
                    perMonth: '200'
                  },
                  { 
                    id: 'three-months', 
                    title: '3 Month Program', 
                    price: '500', 
                    duration: '3 months',
                    perMonth: '166.67'
                  },
                  { 
                    id: 'six-months', 
                    title: '6 Month Program', 
                    price: '1,000', 
                    duration: '6 months',
                    perMonth: '166.67'
                  },
                  { 
                    id: 'twelve-months', 
                    title: '12 Month Program', 
                    price: '2,100', 
                    duration: '12 months',
                    perMonth: '175'
                  },
                ].map((plan, index) => (
                  <Card 
                    key={plan.id} 
                    className="bg-white border-2 border-gray-300 hover:border-gray-400 hover:shadow-xl transition-all group relative overflow-hidden animate-fade-in-up h-full flex flex-col"
                    style={{ animationDelay: `${index * 0.1 + 0.4}s` }}
                  >
                    <CardHeader className="flex-grow">
                      <CardTitle className="text-xl text-gray-900 group-hover:text-gray-700 transition-colors min-h-[56px] pr-20">{plan.title}</CardTitle>
                      <div className="mt-4">
                        <span className="text-3xl font-bold text-gray-900">${plan.price}</span>
                        <p className="text-sm text-gray-600 mt-1">${plan.perMonth}/month</p>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0 space-y-4">
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <Check className="w-4 h-4 text-gray-900 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Personalized training plans</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-4 h-4 text-gray-900 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Nutrition coaching</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-4 h-4 text-gray-900 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Form check videos</span>
                        </li>
                        <li className="flex items-start">
                          <Check className="w-4 h-4 text-gray-900 mt-0.5 mr-2 flex-shrink-0" />
                          <span>Direct messaging support</span>
                        </li>
                      </ul>
                      <Link 
                        href={`/payment?plan=${plan.id}&title=${encodeURIComponent(plan.title)}&price=${plan.price.replace(',', '')}`}
                        className={buttonVariants({ 
                          className: 'w-full bg-gray-900 text-white hover:bg-gray-800' 
                        })}
                      >
                        Buy Now
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        
      </main>
      <Footer />
    </div>
  );
}
