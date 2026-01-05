'use client';

import { Card, CardContent } from '@/components/ui/card';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Anuj Naik',
    role: 'Student',
    content: 'I honestly didn’t think I could stay consistent, but the way the plan was built around my schedule made it easy. I’m stronger, leaner, and feel more confident than I have in years.',
    rating: 5,
  },
  {
    name: 'Hiten Prajapati',
    role: 'Business Owner',
    content: 'This wasn’t just about workouts. I learned how to train smart and take care of my body. I have more energy during the day and actually look forward to exercising now.',
    rating: 5,
  },
  {
    name: 'Aum Karkar',
    role: '',
    content: 'I’ve tried multiple programs before, but this is the first one that actually stuck. The coaching felt personal, and the small corrections made a huge difference in my strength.',
    rating: 5,
  },
  {
    name: 'Nishani Salvi',
    role: '',
    content: 'What I loved most was the balance. I didn’t have to give up foods I enjoy, and I still saw real results. It finally feels like something I can maintain long-term.',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gray-100/50 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-gray-100/50 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="inline-block px-4 py-1 rounded-full bg-gray-900 text-white text-sm font-semibold mb-4 tracking-wide">
            SUCCESS STORIES
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
            Client Testimonials
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real transformations from real people who trusted the process
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <Card className="border-2 border-gray-300 shadow-2xl bg-white overflow-hidden hover:border-gray-400 transition-all">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gray-900"></div>
                    <CardContent className="pt-12 pb-8 px-8">
                      {/* Quote Icon */}
                      <div className="mb-6">
                        <svg className="w-12 h-12 text-gray-200" fill="currentColor" viewBox="0 0 32 32">
                          <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z"/>
                        </svg>
                      </div>
                      
                      {/* Stars */}
                      <div className="flex mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-6 h-6 text-yellow-400 fill-current drop-shadow-sm"
                            viewBox="0 0 24 24"
                          >
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>
                      
                      {/* Testimonial Text */}
                      <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed font-light italic">
                        "{testimonial.content}"
                      </p>
                      
                      {/* Author Info */}
                      <div className="flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-bold text-lg text-gray-900">{testimonial.name}</p>
                          <p className="text-sm text-gray-600">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-10">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === currentIndex 
                    ? 'w-12 h-3 bg-gray-900' 
                    : 'w-3 h-3 bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
