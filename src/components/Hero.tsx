import React from 'react';
import { motion } from 'motion/react';

export const Hero: React.FC = () => {
  const sectors = [
    "Mimarlar",
    "İç Mimarlık",
    "Otel Projeleri",
    "Restoran & Kafe",
    "Kurumsal Projeler",
    "Toptan Satış"
  ];

  return (
    <header className="relative h-screen w-full overflow-hidden flex flex-col justify-center px-6 md:px-24">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="https://videos.pexels.com/video-files/6580030/6580030-uhd_2732_1440_25fps.mp4" type="video/mp4" />
        </video>
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-on-surface/40 backdrop-blur-[1px]" />
      </div>

      <div className="relative z-10 flex flex-col gap-12 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-6"
        >
          <span className="font-label text-primary tracking-[0.6em] uppercase text-sm font-bold drop-shadow-md">
            KALİTE • GÜVEN • ZARAFET
          </span>
          
          <h1 className="font-headline text-5xl md:text-8xl font-light leading-[1.1] tracking-tight text-surface">
            1999'dan bu yana <br />
            <span className="italic font-extralight text-primary drop-shadow-lg">
              tekstil sektörünün güvenilir adresi
            </span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-6 mt-8">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5 + index * 0.1 }}
              className="flex items-center gap-4 group cursor-default"
            >
              <div className="w-8 h-[1px] bg-primary group-hover:w-12 transition-all duration-500" />
              <span className="font-label text-[10px] md:text-xs uppercase tracking-[0.3em] text-surface/90 group-hover:text-primary transition-colors duration-300 font-semibold">
                {sector}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-12 right-6 md:right-24 flex flex-col items-end gap-6"
      >
        <div className="flex items-center gap-6">
          <span className="font-label text-[10px] uppercase tracking-[0.4em] text-surface/60">Keşfetmek için kaydırın</span>
          <motion.div 
            animate={{ height: [40, 80, 40] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-[1px] bg-primary"
          />
        </div>
      </motion.div>
    </header>
  );
};
