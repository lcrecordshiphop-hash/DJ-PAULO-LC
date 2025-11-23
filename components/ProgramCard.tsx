import React from 'react';
import { Info, Download, Calendar, Music } from 'lucide-react';
import { Program } from '../types';

interface ProgramCardProps {
  program: Program;
}

const ProgramCard: React.FC<ProgramCardProps> = ({ program }) => {
  return (
    <a 
      href={program.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block bg-white flex flex-col shadow-sm hover:shadow-xl transition-all duration-300 group border border-gray-200 cursor-pointer"
    >
      {/* Square Image Container */}
      <div className="relative w-full aspect-square overflow-hidden bg-gray-900">
        <img 
          src={program.image} 
          alt={program.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out opacity-90 group-hover:opacity-100"
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-80"></div>
        
        {/* Title Overlay on Image (Bottom) */}
        <div className="absolute bottom-0 left-0 right-0 p-3">
            <h3 className="text-2xl font-teko font-bold text-white leading-none mb-1 shadow-black drop-shadow-md">
              {program.title}
            </h3>
             <div className="flex items-center gap-1 text-yellow-400 text-xs font-bold uppercase tracking-wider">
                <Music size={10} />
                {program.artist}
            </div>
        </div>
        
        {/* Action Buttons Overlay (Top Right) */}
        <div className="absolute top-2 right-2 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
             <div className="bg-yellow-500 hover:bg-white text-black p-2 rounded-sm shadow-lg transition-colors" title="Download">
                <Download size={16} />
             </div>
             <div className="bg-blue-900 hover:bg-blue-800 text-white p-2 rounded-sm shadow-lg transition-colors" title="Info">
                <Info size={16} />
             </div>
        </div>
      </div>

      {/* Info Footer */}
      <div className="bg-gray-100 px-3 py-2 flex items-center justify-between text-xs border-t border-gray-200">
         <div className="flex items-center gap-1 text-gray-600 font-semibold">
            <Calendar size={12} />
            {program.date.split(' ')[0]}
         </div>
         <span className="bg-gray-300 text-gray-800 px-2 py-0.5 rounded text-[10px] font-bold uppercase">
             {program.edition.split(' ')[1] || 'VOL 1'}
         </span>
      </div>
    </a>
  );
};

export default ProgramCard;