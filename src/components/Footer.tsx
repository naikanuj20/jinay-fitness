import Link from 'next/link';
import { Instagram, Facebook, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gray-200 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gray-200 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-3xl font-bold text-gray-900">
              Jinay Fitness
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Transform your body and elevate your life with personalized online fitness coaching.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="https://www.instagram.com/jinay.tandel/" className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-900 hover:text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="mailto:forgedfitnesswithjinay@gmail.com" className="w-10 h-10 rounded-full bg-gray-200 hover:bg-gray-900 hover:text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Right Column - Links and Contact */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-gray-900">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-gray-900 transition-all duration-300 inline-block">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/online-program" className="text-gray-600 hover:text-gray-900 transition-all duration-300 inline-block">
                    Online Program
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-600 hover:text-gray-900 transition-all duration-300 inline-block">
                    About Me
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-600 hover:text-gray-900 transition-all duration-300 inline-block">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-lg font-bold mb-6 text-gray-900">Get in Touch</h4>
              <div className="space-y-4">
                <p className="text-gray-600 flex items-center gap-2">
                  <Mail size={18} className="text-gray-900" />
                  <a href="mailto:forgedfitnesswithjinay@gmail.com" className="hover:text-gray-900 transition-colors">
                    forgedfitnesswithjinay@gmail.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-300 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} Jinay Fitness. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-600">
            <Link href="#" className="hover:text-gray-900 transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-gray-900 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
