import React from 'react';
import { motion } from 'motion/react';
import { COLOR_UNIVERSE } from '../constants';

export const ColorUniverse: React.FC = () => {
  return (
    <section id="color-universe" className="py-32 bg-surface overflow-hidden">
      <div className="px-6 md:px-24 mb-24 flex flex-col md:flex-row justify-between items-end gap-8">
        <div className="flex flex-col gap-4">
          <span className="font-label text-primary tracking-[0.4em] uppercase text-xs font-semibold">
            Palet
          </span>
          <h2 className="font-headline text-5xl md:text-7xl font-light text-on-surface">
            Renk Evreni
          </h2>
        </div>
        <p className="font-body text-on-surface-variant max-w-md text-lg leading-relaxed italic text-right">
          Doğadan ve mimariden ilham alan, zamansız mekanlar yaratan küratörlü renk seçkimiz.
        </p>
      </div>

      <div className="flex items-end h-[50vh] md:h-[70vh] w-full">
        {COLOR_UNIVERSE.map((tone, index) => (
          <motion.div 
            key={tone.name}
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            transition={{ duration: 1.5, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
            style={{ backgroundColor: tone.hex }}
            className="flex-1 group relative cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-on-surface/0 group-hover:bg-on-surface/10 transition-colors duration-500" />
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
              <span className="font-label text-[10px] uppercase tracking-[0.4em] text-surface whitespace-nowrap bg-on-surface/80 backdrop-blur-sm px-4 py-2">
                {tone.name}
              </span>
              <span className="font-mono text-[10px] text-surface/60 uppercase tracking-widest">
                {tone.hex}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
