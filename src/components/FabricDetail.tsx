import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Ruler, Weight, Layers, Info } from 'lucide-react';
import { Collection, FabricType } from '../types';

interface FabricDetailProps {
  item: Collection | FabricType | null;
  onClose: () => void;
}

export const FabricDetail: React.FC<FabricDetailProps> = ({ item, onClose }) => {
  if (!item) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-surface/95 backdrop-blur-xl overflow-y-auto"
      >
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          onClick={onClose}
          className="fixed top-8 right-8 z-[110] p-4 bg-on-surface text-surface rounded-full hover:bg-primary transition-colors duration-300 shadow-xl"
        >
          <X size={24} strokeWidth={1.5} />
        </motion.button>

        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start py-20">
          {/* Image Gallery */}
          <div className="flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/5] overflow-hidden rounded-sm shadow-2xl"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            
            {item.gallery && item.gallery.length > 0 && (
              <div className="grid grid-cols-2 gap-6">
                {item.gallery.map((img, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 + idx * 0.1 }}
                    className="aspect-square overflow-hidden rounded-sm shadow-lg"
                  >
                    <img
                      src={img}
                      alt={`${item.name} detail ${idx + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                ))}
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex flex-col gap-4"
            >
              <span className="font-label text-xs uppercase tracking-[0.5em] text-primary font-bold">
                {'type' in item ? item.type : 'Kumaş Türü'}
              </span>
              <h2 className="font-headline text-6xl md:text-8xl font-light text-on-surface">
                {item.name}
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-8"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3 text-primary">
                  <Info size={18} />
                  <span className="font-label text-xs uppercase tracking-widest font-bold">Açıklama</span>
                </div>
                <p className="font-body text-on-surface-variant text-lg leading-relaxed">
                  {item.description || 'Bu seçkin malzeme için henüz bir açıklama girilmemiş.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-outline-variant/30">
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-primary">
                    <Layers size={18} />
                    <span className="font-label text-xs uppercase tracking-widest font-bold">İçerik</span>
                  </div>
                  <p className="font-body text-on-surface-variant">{item.composition || 'N/A'}</p>
                </div>
                
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-primary">
                    <Weight size={18} />
                    <span className="font-label text-xs uppercase tracking-widest font-bold">Ağırlık</span>
                  </div>
                  <p className="font-body text-on-surface-variant">{item.weight || ('specs' in item ? item.specs.split('—')[0] : 'N/A')}</p>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-primary">
                    <Ruler size={18} />
                    <span className="font-label text-xs uppercase tracking-widest font-bold">Genişlik</span>
                  </div>
                  <p className="font-body text-on-surface-variant">{item.width || '140 cm'}</p>
                </div>

                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3 text-primary">
                    <span className="font-label text-xs uppercase tracking-widest font-bold">Dayanıklılık</span>
                  </div>
                  <p className="font-body text-on-surface-variant">
                    {'durability' in item ? item.durability : ('specs' in item ? item.specs.split('—')[1] : 'N/A')}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap gap-6 pt-12"
            >
              <a href="#contact" onClick={onClose} className="px-12 py-5 bg-on-surface text-surface font-label text-xs uppercase tracking-[0.3em] hover:bg-primary transition-colors duration-300 shadow-xl text-center">
                Numune Talebi
              </a>
              <button className="px-12 py-5 border border-outline text-on-surface font-label text-xs uppercase tracking-[0.3em] hover:bg-surface-container-high transition-colors duration-300">
                Teknik Katalog İndir
              </button>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
