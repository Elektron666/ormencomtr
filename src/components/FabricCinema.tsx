import React from 'react';
import { motion } from 'motion/react';
import { FABRIC_TYPES } from '../constants';
import { FabricType } from '../types';

interface FabricCinemaProps {
  onSelectItem: (item: FabricType) => void;
}

export const FabricCinema: React.FC<FabricCinemaProps> = ({ onSelectItem }) => {
  return (
    <section className="flex flex-col">
      {FABRIC_TYPES.map((fabric, index) => (
        <React.Fragment key={fabric.id}>
          <div 
            className="h-screen w-full relative flex items-center overflow-hidden bg-surface-container-lowest cursor-pointer group"
            onClick={() => onSelectItem(fabric)}
          >
            <div className="absolute inset-0">
              <motion.img
                initial={{ scale: 1.1 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 2 }}
                className="w-full h-full object-cover grayscale-[0.2] contrast-125 group-hover:scale-110 transition-transform duration-[2000ms]"
                src={fabric.image}
                alt={fabric.name}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors duration-500" />
            </div>
            
            <div className="relative z-10 w-full h-full flex flex-col md:flex-row justify-between p-12 md:p-24">
              <motion.h2 
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 0.4 }}
                transition={{ duration: 1 }}
                className="text-vertical font-headline text-6xl md:text-[140px] font-thin text-tertiary-fixed self-start tracking-tighter group-hover:opacity-100 transition-opacity duration-500"
              >
                {fabric.name}
              </motion.h2>
              
              <motion.div 
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="self-end text-right flex flex-col items-end gap-4"
              >
                <p className="font-label text-primary-container text-sm md:text-lg tracking-[0.3em] uppercase">
                  {fabric.specs}
                </p>
                <span className="font-label text-[10px] uppercase tracking-[0.4em] text-surface opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary px-4 py-2">
                  Detayları Gör
                </span>
              </motion.div>
            </div>
          </div>

          <div className="py-32 md:py-48 px-6 md:px-12 bg-surface text-center overflow-hidden">
            <motion.span 
              initial={{ x: index % 2 === 0 ? -200 : 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 0.2 }}
              transition={{ duration: 1.5 }}
              className="font-headline text-6xl md:text-[200px] font-extralight text-primary-container tracking-[0.2em] block whitespace-nowrap"
            >
              {index === 0 ? 'DOKUN.' : index === 1 ? 'HİSSET.' : 'YARAT.'}
            </motion.span>
          </div>
        </React.Fragment>
      ))}
    </section>
  );
};
