import React from 'react';
import { Headphones, User } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-[#02182b] text-white w-full border-b-4 border-[#eab308]">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="bg-white rounded-full p-2">
            <Headphones className="w-10 h-10 text-black" />
          </div>
          <div className="flex flex-col">
            <span className="font-teko text-4xl font-bold italic tracking-wide text-white leading-none">
              DJMUSICTV
            </span>
          </div>
        </div>

        {/* Right Info Section */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex gap-2">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className={`w-8 h-8 rounded-full flex items-center justify-center text-xs border border-white/20 shadow-lg ${i % 2 === 0 ? 'bg-purple-900' : 'bg-blue-900'}`}>
                <Headphones size={14} />
              </div>
            ))}
          </div>
          <button className="w-12 h-12 rounded-full border-2 border-yellow-400 flex items-center justify-center hover:bg-yellow-400 hover:text-black transition-colors">
            <User size={24} />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;