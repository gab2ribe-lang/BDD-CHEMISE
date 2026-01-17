
import React, { useRef, useEffect, useState } from 'react';
import { ERAS } from './constants.tsx';
import MagazineSection from './components/MagazineSection.tsx';
import TwentyFirstCenturyInsight from './components/TwentyFirstCenturyInsight.tsx';
import EpochDetailView from './components/EpochDetailView.tsx';
import { EraData } from './types.ts';

const App: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [selectedEra, setSelectedEra] = useState<EraData | null>(null);

  // Convert vertical wheel to horizontal scroll
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container || selectedEra) return;

    const handleWheel = (e: WheelEvent) => {
      // Horizontal scroll logic
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) return;
      container.scrollLeft += e.deltaY;
      
      const maxScroll = container.scrollWidth - container.clientWidth;
      const progress = maxScroll > 0 ? (container.scrollLeft / maxScroll) * 100 : 0;
      setScrollProgress(progress);
    };

    container.addEventListener('wheel', handleWheel, { passive: true });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [selectedEra]);

  return (
    <div className="h-screen w-screen overflow-hidden bg-black text-white selection:bg-red-500 selection:text-white flex flex-col">
      {/* Navigation & Branding Overlay */}
      <header className="fixed top-0 left-0 w-full p-6 flex justify-between items-start z-50 mix-blend-difference pointer-events-none">
        <div className="flex flex-col pointer-events-auto">
          <span className="text-2xl font-black tracking-tighter uppercase leading-none">CHEMISE</span>
          <span className="text-[10px] tracking-[0.4em] font-mono">ARCHIVES_DU_POUVOIR</span>
        </div>
        <div className="flex flex-col items-end gap-2 pointer-events-auto">
            <div className="flex gap-4">
               {ERAS.map((era) => (
                 <button 
                   key={era.id} 
                   title={era.title}
                   className="w-2 h-2 rounded-full border border-white hover:bg-white transition-colors"
                   onClick={(e) => {
                     const el = document.getElementById(era.id);
                     el?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
                   }}
                 />
               ))}
            </div>
        </div>
      </header>

      {/* Progress Bar */}
      <div className="fixed bottom-0 left-0 h-1 bg-red-600 z-50 transition-all duration-300" style={{ width: `${scrollProgress}%` }} />

      {/* Explorer Overlay */}
      {selectedEra && (
        <EpochDetailView 
          era={selectedEra} 
          onClose={() => setSelectedEra(null)} 
        />
      )}

      {/* Main Container */}
      <main 
        ref={scrollContainerRef}
        className={`flex h-full w-full overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth ${selectedEra ? 'pointer-events-none' : ''}`}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {ERAS.map((era, index) => (
          <div key={era.id} className="snap-start flex-shrink-0 w-screen h-full">
            <MagazineSection 
              data={era} 
              index={index} 
              onExplore={(data) => setSelectedEra(data)}
            />
          </div>
        ))}

        <div className="snap-start flex-shrink-0 w-screen h-full">
          <TwentyFirstCenturyInsight />
        </div>

        {/* Final Outro / Credits Section */}
        <section className="snap-start flex-shrink-0 w-screen h-full bg-zinc-900 flex flex-col items-center justify-center p-20 text-center relative overflow-hidden">
            <h2 className="text-[25vw] font-black italic tracking-tighter opacity-5 absolute pointer-events-none">FIN</h2>
            <p className="text-4xl md:text-6xl font-light max-w-4xl italic mb-12 relative z-10">
              "Le vêtement est le premier langage de la civilisation."
            </p>
            <div className="h-px w-20 bg-white mb-12" />
            <div className="flex gap-8 text-xs font-mono uppercase tracking-widest opacity-50">
              <span>Édition 2025</span>
              <span>•</span>
              <span>Archives Mode & Pouvoir</span>
              <span>•</span>
              <span>Gemini Enhanced</span>
            </div>
            <button 
              className="mt-20 px-10 py-4 border border-white hover:bg-white hover:text-black transition-all text-xl font-bold uppercase tracking-widest"
              onClick={() => {
                scrollContainerRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
              }}
            >
              Retour à l'Origine
            </button>
        </section>
      </main>

      {/* Vertical Side Tag */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 vertical-text pointer-events-none z-50 mix-blend-difference">
        <span className="text-[10px] font-mono tracking-[0.8em] opacity-40">SCROLL_HORIZONTAL_TO_EVOLVE</span>
      </div>
    </div>
  );
};

export default App;
