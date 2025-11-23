import React from 'react';
import { NAV_ITEMS } from '../constants';

const Navigation: React.FC = () => {
  return (
    <nav className="bg-[#02182b] text-white w-full border-b border-white/10 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-2">
        <ul className="flex flex-wrap items-center justify-center md:justify-between gap-1 py-2 md:py-0">
          {NAV_ITEMS.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className={`
                  block px-3 py-3 font-teko text-xl tracking-wide transition-colors
                  ${item.active 
                    ? 'text-white bg-[#1e3a5f]' 
                    : 'text-gray-300 hover:text-yellow-400 hover:bg-[#0f253a]'}
                `}
              >
                {item.label.toUpperCase()}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;