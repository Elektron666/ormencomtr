import React from 'react';
import { motion } from 'motion/react';
import { COLLECTIONS } from '../constants';
import { Collection } from '../types';

interface CollectionsProps {
  onSelectItem: (item: Collection) => void;
}

export const Collections: React.FC<CollectionsProps> = ({ onSelectItem }) => {
  return (
    <section id="collections" className="py-32 px-6 md:px-24">
      <div className="flex flex-col gap-16">
        <div className="flex justify-between items-end">
          <div className="flex flex-col gap-4">
            <span className="font-label text-primary tracking-[0.4em] uppercase text-xs font-semibold">
              Arşivler
            </span>
            <h2 className="font-headline text-5xl md:text-7xl font-light text-on-surface">
              Koleksiyonlarımız
            </h2>
          </div>
          <div className="hidden md:block">
            <p className="font-body text-on-surface-variant max-w-xs text-sm leading-relaxed italic text-right">
              Her biri kendine özgü karakteri ve hikayesi olan, en seçkin malzemelerden oluşan küratörlü bir seçki.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {COLLECTIONS.map((item, index) => (
            <motion.article 
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group cursor-pointer"
              onClick={() => onSelectItem(item)}
            >
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm mb-6 shadow-lg transition-shadow duration-500 group-hover:shadow-2xl">
                <img 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform duration-[1500ms] group-hover:scale-110" 
                  src={item.image}
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-on-surface/0 group-hover:bg-on-surface/10 transition-colors duration-500" />
                <div className="absolute top-6 right-6 font-headline text-surface text-xl italic opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  0{index + 1}
                </div>
              </div>
              
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center">
                  <span className="font-label text-[10px] uppercase tracking-[0.3em] text-primary font-bold">
                    {item.type}
                  </span>
                  <span className="font-label text-[10px] text-outline uppercase tracking-widest">
                    {item.colors} Renk
                  </span>
                </div>
                <h3 className="font-headline text-3xl font-light text-on-surface group-hover:text-primary transition-colors duration-300">
                  {item.name}
                </h3>
                <div className="w-0 h-[1px] bg-primary transition-all duration-500 group-hover:w-full mt-2" />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};
