import React from 'react';
import { Cast } from 'lucide-react';

const VideoPlayer: React.FC = () => {
  return (
    <div className="relative w-full overflow-hidden mb-0">
        {/* Background Image Effect (Blurred) */}
        <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ 
                backgroundImage: 'url(https://img.youtube.com/vi/5qap5aO4i9A/maxresdefault.jpg)',
                filter: 'brightness(0.3) blur(2px)'
            }}
        ></div>

        <div className="container mx-auto px-0 md:px-4 relative z-10 py-6 md:py-10">
            
            {/* Video Player Container - Box Shadow and Border */}
            <div className="bg-transparent rounded-lg overflow-hidden shadow-[0_0_20px_rgba(0,0,0,0.5)] max-w-5xl mx-auto">
                
                {/* Video Container */}
                <div className="relative aspect-video bg-black flex items-center justify-center group">
                    {/* Iframe for Video Link (Specific Video) */}
                    <iframe 
                        className="w-full h-full absolute inset-0"
                        src="https://www.youtube.com/embed/watch?v=pLLAqNDMc_U" 
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                    
                    {/* Dark Gradient Overlay - Pointer events none to allow clicking video if needed */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"></div>

                    {/* Logo Overlay - Bottom Left (DJMUSICTV) */}
                    <div className="absolute bottom-8 left-8 flex flex-col items-center z-20 pointer-events-none">
                        <div className="w-14 h-14 rounded-full border-2 border-green-500 flex items-center justify-center bg-black/60 shadow-[0_0_10px_rgba(34,197,94,0.5)]">
                             <Cast className="text-white drop-shadow-md" size={24}/>
                        </div>
                        <div className="bg-black/80 px-2 py-0.5 mt-1 rounded border border-yellow-500/30">
                            <span className="text-yellow-400 font-bold text-[10px] tracking-widest uppercase">DJMUSICTV</span>
                        </div>
                    </div>

                    {/* QR Code Placeholder - Bottom Right (Requested Feature) */}
                    <div className="absolute bottom-8 right-8 z-20 flex flex-col items-center bg-white/90 p-2 rounded-lg shadow-lg backdrop-blur-sm">
                        <div className="w-24 h-24 border-2 border-dashed border-gray-400 flex items-center justify-center bg-white">
                            <span className="text-xs text-center text-gray-500 font-bold">ESPAÇO PARA<br/>QR CODE</span>
                        </div>
                         <div className="mt-1 text-[10px] font-bold text-[#02182b] uppercase">Escaneie Aqui</div>
                    </div>

                    {/* Live Indicator Badge (Top Right) */}
                    <div className="absolute top-6 right-6 bg-red-600 text-white px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-widest animate-pulse flex items-center gap-1.5 shadow-md z-20 pointer-events-none">
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