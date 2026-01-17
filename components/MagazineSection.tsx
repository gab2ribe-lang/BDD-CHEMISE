
import React from 'react';
import { EraData } from '../types.ts';

interface MagazineSectionProps {
  data: EraData;
  index: number;
  onExplore: (era: EraData) => void;
}

const MagazineSection: React.FC<MagazineSectionProps> = ({ data, index, onExplore }) => {
  const isEven = index % 2 === 0;

  return (
    <section 
      id={data.id}
      className="w-full h-full relative overflow-hidden flex items-center justify-center p-8 md:p-20 select-none transition-all duration-700"
      style={{ backgroundColor: data.color }}
    >
      {/* Background Scrap Elements for Main View */}
      <div className="absolute inset-0 pointer-events-none opacity-40 overflow-hidden">
        {data.scraps?.map((scrap, i) => (
          <div 
            key={i}
            className="absolute shadow-lg border-2 border-white wiggle-anim hover:scale-110 transition-transform duration-500"
            style={{ 
              top: scrap.top, 
              left: scrap.left, 
              transform: `rotate(${scrap.rotation}deg)`,
              width: '140px'
            }}
          >
            <div className="pin" />
            <img src={scrap.image} className="w-full h-auto" alt="scrap" />
          </div>
        ))}
      </div>

      {/* Massive Horizontal Text Background */}
      <div 
        className="absolute w-full text-center opacity-5 pointer-events-none whitespace-nowrap overflow-hidden select-none"
        style={{ 
          fontFamily: data.fontFamily, 
          fontSize: '30vw', 
          color: data.textColor,
          top: '50%',
          transform: 'translateY(-50%)'
        }}
      >
        {data.title}
      </div>

      <div className="relative w-full h-full max-w-7xl flex flex-col items-center justify-center z-10">
        
        {/* Main Composition */}
        <div className={`w-full flex flex-col md:flex-row items-center gap-12 ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
          
          {/* Main Hero Image */}
          <div className="relative md:w-1/2 group">
             <div className="absolute -top-10 left-10 text-xs font-mono uppercase tracking-[0.5em] opacity-50" style={{ color: data.textColor }}>
               Archive No. {index + 1}
             </div>
             <div className="absolute -inset-4 border border-white opacity-20 group-hover:opacity-100 transition-opacity duration-700" style={{ transform: 'rotate(2deg)' }} />
             <div className="pin" />
             <img 
               src={data.image} 
               alt={data.title} 
               className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000 shadow-2xl border-4 border-white transform hover:scale-[1.02]"
             />
             <div className="absolute bottom-4 right-4 bg-white text-black px-3 py-1 text-[10px] font-mono rotate-3 shadow-lg">
               IMAGE_REF_{data.id.toUpperCase()}
             </div>
          </div>

          {/* Content Block */}
          <div 
            className="md:w-1/2 space-y-8 p-6 md:p-12 relative"
            style={{ 
              transform: `rotate(${isEven ? -1 : 1}deg)`,
              backgroundColor: `${data.textColor}11`,
              backdropFilter: 'blur(5px)',
              border: `1px solid ${data.textColor}33`
            }}
          >
            {/* Horizontal Overlapping Title */}
            <div className="relative">
              <h1 
                className="text-7xl md:text-9xl uppercase font-black leading-none mb-2"
                style={{ fontFamily: data.fontFamily, color: data.textColor }}
              >
                {data.title}
              </h1>
              <h2 
                className="text-2xl md:text-4xl font-black italic tracking-tighter absolute -bottom-4 right-0"
                style={{ color: data.accentColor, fontFamily: 'Playfair Display' }}
              >
                {data.subtitle}
              </h2>
            </div>

            <div className="h-px w-24 bg-current opacity-30 my-8" />

            <div className="space-y-6">
              <p 
                className="text-xl md:text-3xl leading-relaxed font-light"
                style={{ color: data.textColor, fontFamily: 'Space Grotesk' }}
              >
                {data.content}
              </p>
              
              {/* Extra context snippets added to the cover page */}
              <p className="text-lg italic opacity-70" style={{ fontFamily: 'Reenie Beanie', color: data.textColor }}>
                {data.details[0]?.text?.substring(0, 100)}...
              </p>
            </div>

            <div className="flex flex-wrap gap-6 items-center pt-8">
              <button 
                onClick={() => onExplore(data)}
                className="group relative px-10 py-4 bg-transparent border-2 overflow-hidden transition-all duration-300 hover:pr-14"
                style={{ borderColor: data.accentColor, color: data.textColor }}
              >
                <span className="relative z-10 text-lg uppercase font-black tracking-widest">Explorer l'Archive</span>
                <div 
                  className="absolute inset-y-0 right-0 w-0 bg-white transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: data.accentColor }}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300">→</span>
              </button>
              
              <div className="flex flex-col">
                <span className="text-[10px] uppercase font-mono tracking-tighter opacity-40" style={{ color: data.textColor }}>
                  Classification: TOP_SECRET
                </span>
                <span className="text-[10px] uppercase font-mono tracking-tighter opacity-40" style={{ color: data.textColor }}>
                  Epoque: {index + 1} / 8
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative large page number */}
      <div 
        className="absolute bottom-20 left-20 text-[20vw] font-black opacity-5 pointer-events-none select-none"
        style={{ color: data.textColor, fontFamily: 'Bebas Neue' }}
      >
        {String(index + 1).padStart(2, '0')}
      </div>
    </section>
  );
};

export default MagazineSection;
