
import React from 'react';
import { EraData } from '../types.ts';

interface EpochDetailViewProps {
  era: EraData;
  onClose: () => void;
}

const EpochDetailView: React.FC<EpochDetailViewProps> = ({ era, onClose }) => {
  return (
    <div 
      className="fixed inset-0 z-[100] overflow-y-auto overflow-x-hidden animate-detail"
      style={{ backgroundColor: era.color, color: era.textColor }}
    >
      {/* Background Scrap Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-40">
        {era.scraps?.map((scrap, i) => (
          <div 
            key={i}
            className="absolute shadow-xl border-4 border-white wiggle-anim"
            style={{ 
              top: scrap.top, 
              left: scrap.left, 
              transform: `rotate(${scrap.rotation}deg)`,
              width: '180px'
            }}
          >
            <div className="pin" />
            <img src={scrap.image} className="w-full h-auto" alt="scrap" />
          </div>
        ))}
      </div>

      {/* Navigation Overlay */}
      <div className="sticky top-0 w-full p-8 flex justify-between items-center z-50 pointer-events-none">
        <div 
          className="text-4xl font-black uppercase tracking-tighter mix-blend-difference"
          style={{ fontFamily: era.fontFamily }}
        >
          {era.title} / CARNET
        </div>
        <button 
          onClick={onClose}
          className="pointer-events-auto w-16 h-16 rounded-full border-2 border-current flex items-center justify-center text-3xl hover:bg-white hover:text-black transition-all group"
        >
          <span className="group-hover:rotate-90 transition-transform">✕</span>
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-8 pb-32 pt-24 relative">
        
        {/* Header Mood Board */}
        <div className="relative mb-40 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 relative z-10">
            <div className="absolute -top-4 -left-4 w-32 h-10 tape rotate-[-12deg]" />
            <img 
              src={era.image} 
              alt={era.title} 
              className="w-full h-auto shadow-2xl border-8 border-white rotate-[-2deg]"
            />
            <div className="absolute -bottom-6 -right-6 px-4 py-2 bg-white text-black font-mono text-xs rotate-3 shadow-lg">
              INSPIRATION // 01
            </div>
          </div>
          <div className="md:w-1/2 space-y-6">
            <h1 
              className="text-6xl md:text-8xl font-black uppercase italic tracking-tighter"
              style={{ fontFamily: era.fontFamily, color: era.accentColor }}
            >
              {era.subtitle}
            </h1>
            <p className="text-2xl md:text-3xl font-light italic" style={{ fontFamily: 'Reenie Beanie' }}>
              {era.content}
            </p>
          </div>
        </div>

        {/* Destructured Notebook Blocks */}
        <div className="space-y-32 relative">
          {era.details.map((block, i) => (
            <div 
              key={i} 
              className={`relative flex flex-col ${i % 2 === 0 ? 'items-start' : 'items-end'}`}
            >
              <div 
                className={`max-w-2xl p-8 bg-white/5 backdrop-blur-sm border-2 border-current shadow-2xl transition-transform hover:scale-[1.02] duration-500`}
                style={{ 
                  transform: `rotate(${i % 2 === 0 ? 1 : -1}deg)`,
                  borderColor: era.accentColor
                }}
              >
                <div className="absolute -top-10 left-10 text-xs font-mono uppercase tracking-widest opacity-50">
                  Note #{i + 1}
                </div>
                
                <h3 
                  className="text-4xl md:text-6xl font-black uppercase mb-6"
                  style={{ fontFamily: era.fontFamily, color: era.accentColor }}
                >
                  {block.title}
                </h3>
                
                <div className="flex flex-col md:flex-row gap-8">
                  {block.image && (
                    <div className="md:w-1/3 flex-shrink-0">
                      <img src={block.image} className="w-full grayscale border-2 border-current hover:grayscale-0 transition-all" />
                    </div>
                  )}
                  <p 
                    className="text-xl md:text-2xl leading-relaxed"
                    style={{ fontFamily: 'Special Elite' }}
                  >
                    {block.text}
                  </p>
                </div>
              </div>

              {/* Scattered extra details as if written in the margin */}
              <div 
                className={`absolute hidden lg:block text-2xl font-light italic text-current opacity-60 w-48`}
                style={{ 
                  fontFamily: 'Reenie Beanie',
                  top: '10%',
                  [i % 2 === 0 ? 'right' : 'left']: '-20%'
                }}
              >
                {i % 2 === 0 ? "Le pouvoir s'exprime dans le détail..." : "Une révolution de l'apparence."}
              </div>
            </div>
          ))}
        </div>

        {/* Closing Button */}
        <div className="mt-40 text-center relative">
          <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-48 h-10 tape rotate-[2deg] opacity-50" />
          <button 
            onClick={onClose}
            className="px-12 py-6 border-2 border-current text-2xl uppercase font-black hover:bg-current hover:text-black transition-all shadow-[8px_8px_0px_0px_currentColor]"
            style={{ fontFamily: era.fontFamily }}
          >
            Fermer le Dossier
          </button>
        </div>
      </div>
    </div>
  );
};

export default EpochDetailView;
