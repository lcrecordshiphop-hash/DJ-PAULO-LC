import React from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import VideoPlayer from './components/VideoPlayer';
import ProgramCard from './components/ProgramCard';
import { PROGRAMS, TOP20 } from './constants';
import { Play, MapPin, Mail, Phone } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#e5e7eb] flex flex-col font-roboto">
      <Header />
      <Navigation />
      
      {/* Main Content Area */}
      <main className="flex-grow">
        
        {/* Section 1: TV / Video Player (Dark Theme Area) */}
        <section id="tv" className="w-full bg-[#0f172a] pb-12 border-b border-gray-800">
            <VideoPlayer />
        </section>

        {/* Section 2: Programs Grid (Links Quadrados) */}
        <section id="programs" className="container mx-auto px-4 py-12">
           <div className="mb-8 flex items-center gap-3">
             <div className="h-8 w-1 bg-blue-900"></div>
             <h2 className="text-4xl font-teko font-bold text-[#02182b] uppercase">
               Programas Recentes
             </h2>
           </div>

           {/* The Grid Layout - Square Tiles */}
           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
             {PROGRAMS.map((program) => (
               <ProgramCard key={program.id} program={program} />
             ))}
           </div>

           <div className="mt-8 text-center">
              <button className="bg-[#02182b] text-white px-8 py-2 font-teko text-xl hover:bg-yellow-500 hover:text-black transition-colors uppercase">
                Ver Todos os Programas
              </button>
           </div>
        </section>

        {/* Section 4: Top 20 (List) */}
        <section id="top20" className="bg-[#0f172a] text-white py-12">
            <div className="container mx-auto px-4">
                <div className="mb-8 flex items-center gap-3">
                    <div className="h-8 w-1 bg-yellow-500"></div>
                    <h2 className="text-4xl font-teko font-bold text-yellow-500 uppercase">
                        Top 20 Músicas
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 max-w-4xl mx-auto">
                    {TOP20.map((song) => (
                        <div key={song.pos} className="flex items-center bg-[#1e293b] p-2 rounded hover:bg-[#2d3b55] transition-colors border border-gray-700">
                            <div className="w-12 h-12 flex items-center justify-center bg-yellow-500 text-black font-teko text-2xl font-bold rounded shrink-0">
                                #{song.pos}
                            </div>
                            <img src={song.image} alt={song.title} className="w-12 h-12 rounded ml-4 object-cover" />
                            <div className="ml-4 flex-grow">
                                <h4 className="font-bold text-lg leading-none">{song.title}</h4>
                                <p className="text-gray-400 text-sm">{song.artist}</p>
                            </div>
                            <div className="mr-4">
                                <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
                                    <Play size={20} className="text-green-400" fill="currentColor" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                
                 <div className="mt-8 text-center">
                    <button className="border border-yellow-500 text-yellow-500 px-8 py-2 font-teko text-xl hover:bg-yellow-500 hover:text-black transition-colors uppercase">
                        Ver Ranking Completo
                    </button>
                </div>
            </div>
        </section>

        {/* Section 5: Contact */}
        <section id="contact" className="bg-white py-12 border-t-4 border-blue-900">
            <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <div className="mb-6 flex items-center gap-3">
                        <div className="h-8 w-1 bg-[#02182b]"></div>
                        <h2 className="text-4xl font-teko font-bold text-[#02182b] uppercase">
                            Entre em Contato
                        </h2>
                    </div>
                    <p className="text-gray-600 mb-8">
                        Dúvidas, sugestões ou parcerias? Envie sua mensagem para nossa equipe.
                        Respondemos em até 24 horas.
                    </p>
                    
                    <div className="space-y-4">
                        <div className="flex items-center gap-4 text-gray-700">
                            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-[#02182b]">
                                <MapPin size={20} />
                            </div>
                            <span>Av. Paulista, 1000 - São Paulo, SP</span>
                        </div>
                         <div className="flex items-center gap-4 text-gray-700">
                            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-[#02182b]">
                                <Mail size={20} />
                            </div>
                            <span>contato@centraldj.com.br</span>
                        </div>
                         <div className="flex items-center gap-4 text-gray-700">
                            <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center text-[#02182b]">
                                <Phone size={20} />
                            </div>
                            <span>+55 (11) 99999-9999</span>
                        </div>
                    </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg shadow-sm border border-gray-200">
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Nome</label>
                            <input type="text" className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-900" placeholder="Seu nome" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Email</label>
                            <input type="email" className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:border-blue-900" placeholder="seu@email.com" />
                        </div>
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-1">Mensagem</label>
                            <textarea className="w-full border border-gray-300 p-2 rounded h-32 focus:outline-none focus:border-blue-900" placeholder="Sua mensagem..."></textarea>
                        </div>
                        <button className="w-full bg-[#02182b] text-white py-3 font-bold uppercase tracking-wide hover:bg-blue-900 transition-colors">
                            Enviar Mensagem
                        </button>
                    </form>
                </div>
            </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-[#02182b] text-white py-8 border-t border-white/10">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400 text-sm mb-4">
            © 2025 DJMUSICTV. Todos os direitos reservados.
          </p>
          <div className="flex justify-center gap-4 text-sm text-gray-500">
             <a href="#" className="hover:text-yellow-400">Termos de Uso</a>
             <span>|</span>
             <a href="#" className="hover:text-yellow-400">Privacidade</a>
             <span>|</span>
             <a href="#" className="hover:text-yellow-400">Contato</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;