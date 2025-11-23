import React, { useState } from 'react';
import { Volume2, VolumeX, Radio, Cast } from 'lucide-react';

const VideoPlayer: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);

  return (
    <div className="relative w-full overflow-hidden mb-0">
        {/* Background Image Effect (Blurred) */}
        <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
                backgroundImage: 'url(https://playerv.samcast.com.br/video/arenajs/4/true/)',
                filter: 'brightness(0.3) blur(2px)'
            }}
        ></div>

        <div className="container mx-auto px-0 md:px-4 relative z-10 py-6 md:py-10">
            
            {/* Video Player Container - Box Shadow and Border */}
            <div className="bg-transparent rounded-lg overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)] max-w-5xl mx-auto">
                
                {/* Header inside video section - Ref 2 Style (White Background) */}
                <div className="bg-white px-4 py-2 flex items-center gap-3 border-b border-gray-200">
                    <div className="relative">
                        <img src="https://picsum.photos/seed/avatar/50/50" alt="DJ Logo" className="rounded-full w-10 h-10 border border-gray-300" />
                        <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                    </div>
                    <div className="flex flex-col">
                        <span className="font-teko text-2xl font-bold text-black leading-none">DJMUSICTV ®</span>
                        <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">Transmissão Oficial</span>
                    </div>
                </div>

                {/* Video Container */}
                <div className="relative aspect-video bg-black flex items-center justify-center group">
                    {/* Placeholder for Video Stream */}
                    <img 
                        src="https://playerv.samcast.com.br/video/arenajs/4/true/" 
                        alt="Live Stream" 
                        className={`w-full h-full object-cover transition-opacity duration-1000 ${isMuted ? 'opacity-80' : 'opacity-100'}`}
                    />
                    
                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none"></div>

                    {/* Logo Overlay - Bottom Left (TV ARENA DJS) */}
                    <div className="absolute bottom-8 left-8 flex flex-col items-center z-20">
                        <div className="w-14 h-14 rounded-full border-2 border-green-500 flex items-center justify-center bg-black/60 shadow-[0_0_10px_rgba(34,197,94,0.5)]">
                             <Cast className="text-white drop-shadow-md" size={24}/>
                        </div>
                        <div className="bg-black/80 px-2 py-0.5 mt-1 rounded border border-yellow-500/30">
                            <span className="text-yellow-400 font-bold text-[10px] tracking-widest uppercase">TV Arena DJS</span>
                        </div>
                    </div>

                    {/* Sound Activation Overlay (Center Button) */}
                    {isMuted && (
                        <button 
                            onClick={() => setIsMuted(false)}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#333333] hover:bg-[#222] text-white px-6 py-2.5 rounded-full flex items-center gap-3 transition-all cursor-pointer shadow-lg z-30 group-hover:scale-105"
                        >
                            <span className="text-sm font-medium tracking-wide">Click aqui para activar sonido</span>
                            <VolumeX size={18} className="text-gray-300"/>
                        </button>
                    )}

                    {/* Volume Indicator when Unmuted */}
                    {!isMuted && (
                         <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-black/50 backdrop-blur text-white px-4 py-1 rounded-full flex items-center gap-2 text-xs border border-white/10">
                            <Volume2 size={14} className="text-green-400"/> Áudio Ativo
                        </div>
                    )}

                    {/* Live Indicator Badge (Top Right) */}
                    <div className="absolute top-6 right-6 bg-red-600 text-white px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest animate-pulse flex items-center gap-1.5 shadow-md z-20">
                        <span className="w-1.5 h-1.5 bg-white rounded-full block"></span>
                        AO VIVO
                    </div>
                </div>

                {/* Footer inside video section */}
                <div className="bg-[#111] px-4 py-2 flex justify-between items-center text-gray-400 text-xs border-t border-gray-800">
                   <div className="flex items-center gap-2">
                       <span className="text-green-500">●</span>
                       <span>2.4k espectadores</span>
                   </div>
                   <div className="flex gap-4">
                       <span className="hover:text-white cursor-pointer transition-colors">Compartilhar</span>
                       <span className="hover:text-white cursor-pointer transition-colors">Denunciar</span>
                   </div>
                </div>
            </div>
        </div>
    </div>
  );
};

export default VideoPlayer;