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
                        src="https://playerv.samcast.com.br/video/arenajs/7/true/false/#/?playlistId=0&videoId=0" 
                        title="YouTube video player" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowFullScreen
                    ></iframe>
                    
                    {/* Dark Gradient Overlay - Pointer events none to allow clicking video if needed */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none"></div>

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