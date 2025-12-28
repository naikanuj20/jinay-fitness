import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const sessions = [
  {
    id: 'consultation',
    title: 'Consultation and Fitness Assessment',
    duration: '45 minutes',
    price: 30,
    description: 'Comprehensive fitness evaluation and personalized consultation',
  },
  {
    id: 'single-session',
    title: 'Personal Training Session',
    duration: '55 minutes',
    price: 49.99,
    sessions: 1,
    description: 'One-on-one personalized training session',
  },
  {
    id: 'six-sessions',
    title: 'Personal Training - 6 Sessions',
    duration: '55 minutes',
    price: 249.99,
    sessions: 6,
    description: 'Six personalized training sessions package',
  },
  {
    id: 'twelve-sessions',
    title: 'Personal Training - 12 Sessions',
    duration: '55 minutes',
    price: 499.99,
    sessions: 12,
    description: 'Twelve personalized training sessions package',
  },
];

const features = [
  'Building a resilient, responsive physique',
  'Mastering fundamental movement patterns',
  'Calisthenics, weight training & weighted calisthenics',
  'Refining technique for flawless, powerful lifts',
  'Nutrition coaching and meal planning',
  'Personalized workout plan',
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Decoration */}
      
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-200/40 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
            Training Sessions
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Choose the session that fits your needs. Add to cart to see pricing and checkout.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {sessions.map((session, index) => (
            <Card 
              key={session.id} 
              className="relative group hover:shadow-2xl transition-all duration-300 border-2 bg-white border-gray-300 hover:border-gray-400 animate-fade-in-up hover:scale-105"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="relative">
                <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-gray-700 transition-colors">{session.title}</CardTitle>
                <CardDescription className="text-gray-600">{session.description}</CardDescription>
              </CardHeader>
              <CardContent className="relative">
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-gray-700">
                    <span className="text-lg font-semibold">{session.duration}</span>
                    {session.sessions && (
                      <span className="text-sm text-gray-600">• {session.sessions} session{session.sessions > 1 ? 's' : ''}</span>
                    )}
                  </div>
                </div>
              </CardContent>
              <CardFooter className="relative">
                <Link 
                  href={`/payment?plan=${session.id}&title=${encodeURIComponent(session.title)}&price=${session.price}`}
                  className={buttonVariants({ 
                    className: 'w-full transition-all duration-300 font-semibold bg-gray-900 text-white hover:bg-gray-800', 
                    variant: 'default'
                  })}
                >
                  Add to Cart →
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* What's Included Section */}
        <div className="max-w-5xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Card className="border-2 border-gray-300 shadow-2xl overflow-hidden bg-white">
            
            <CardHeader className="bg-white pb-8">
              <CardTitle className="text-3xl font-bold text-center text-gray-900">
                What's Included in Every Plan
              </CardTitle>
              <p className="text-center text-gray-600 mt-2">Comprehensive features designed for your success</p>
            </CardHeader>
            <CardContent className="pt-8 pb-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="flex items-start space-x-3 p-4 rounded-lg hover:bg-gray-100 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-900 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
                      <Check className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-base font-medium text-gray-700 group-hover:text-gray-900 transition-colors leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
