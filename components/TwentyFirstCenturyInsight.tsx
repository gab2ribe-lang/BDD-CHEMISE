
import React, { useEffect, useState } from 'react';
import { getFutureInsights } from '../services/geminiService.ts';

interface Insight {
  title: string;
  description: string;
}

const TwentyFirstCenturyInsight: React.FC = () => {
  const [insights, setInsights] = useState<Insight[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInsights = async () => {
      const data = await getFutureInsights();
      setInsights(data);
      setLoading(false);
    };
    fetchInsights();
  }, []);

  return (
    <section className="w-full h-full bg-black text-white flex flex-col items-center justify-center p-8 overflow-hidden relative">
      <div className="absolute top-10 left-10 text-xs font-mono uppercase tracking-[0.5em] text-cyan-400">
        Gemini Intel // Future Analysis
      </div>
      
      <div className="z-10 w-full max-w-4xl space-y-16">
        <h2 className="text-7xl md:text-9xl font-black italic glitch-text text-center uppercase tracking-tighter mb-20">
          DEMAIN
        </h2>

        {loading ? (
          <div className="flex justify-center items-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-cyan-400"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {insights.map((insight, idx) => (
              <div 
                key={idx} 
                className="border-l border-cyan-400 pl-6 py-4 hover:bg-white hover:text-black transition-all group cursor-crosshair"
              >
                <div className="text-cyan-400 font-mono text-sm mb-2 group-hover:text-black">0{idx + 1}</div>
                <h3 className="text-3xl font-black mb-4 uppercase">{insight.title}</h3>
                <p className="text-lg font-light opacity-80 leading-snug">{insight.description}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Decorative Matrix Background Elements */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        {Array.from({ length: 10 }).map((_, i) => (
          <div 
            key={i}
            className="absolute text-[8px] font-mono text-cyan-500 whitespace-nowrap"
            style={{ 
              top: `${Math.random() * 100}%`, 
              left: `${Math.random() * 100}%`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          >
            SYSTEM_ANALYSIS_CHEMISE_DATA_STREAM_010101
          </div>
        ))}
      </div>
    </section>
  );
};

export default TwentyFirstCenturyInsight;
