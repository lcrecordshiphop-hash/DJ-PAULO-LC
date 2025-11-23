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
                        <img src="data:image/png;base64,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" alt="DJ Logo" className="rounded-full w-10 h-10 border border-gray-300" />
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
                        src="https://www.youtube.com/watch?v=5bISEfNhCF0" 
                        alt="Live Stream" 
                        className={`w-full h-full object-cover transition-opacity duration-1000 ${isMuted ? 'opacity-80' : 'opacity-100'}`}
                    />
                    
                    {/* Dark Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none"></div>

                    {/* Logo Overlay - Bottom Left (DJMUSICTV) */}
                    <div className="absolute bottom-8 left-8 flex flex-col items-center z-20">
                        <div className="w-14 h-14 rounded-full border-2 border-green-500 flex items-center justify-center bg-black/60 shadow-[0_0_10px_rgba(34,197,94,0.5)]">
                             <Cast className="text-white drop-shadow-md" size={24}/>
                        </div>
                        <div className="bg-black/80 px-2 py-0.5 mt-1 rounded border border-yellow-500/30">
                            <span className="text-yellow-400 font-bold text-[10px] tracking-widest uppercase">DJMUSICTV</span>
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