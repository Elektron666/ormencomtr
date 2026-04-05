import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Collections } from './components/Collections';
import { FabricCinema } from './components/FabricCinema';
import { ColorUniverse } from './components/ColorUniverse';
import { Wholesale } from './components/Wholesale';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FabricDetail } from './components/FabricDetail';
import { Admin } from './components/Admin';
import { motion, useScroll, useSpring } from 'motion/react';
import { useState } from 'react';
import { Collection, FabricType } from './types';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Award, Sparkles, Leaf, Globe2 } from 'lucide-react';

function MainApp({ onSelectItem }: { onSelectItem: (item: Collection | FabricType | null) => void }) {
  return (
    <>
      <Navbar />
      <main className="pt-20">
        <Hero />
        
        {/* Stats Section - New Suggestion */}
        <section className="py-20 bg-on-surface text-surface px-6 md:px-24">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
            {[
              { label: "Yıllık Tecrübe", value: "25+" },
              { label: "İhracat Ülkesi", value: "40+" },
              { label: "Özel Tasarım", value: "1000+" },
              { label: "Mutlu Partner", value: "500+" }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col gap-2"
              >
                <span className="font-headline text-4xl md:text-6xl font-light text-primary">{stat.value}</span>
                <span className="font-label text-[10px] uppercase tracking-widest text-surface/60">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </section>

        <Collections onSelectItem={onSelectItem} />
        
        {/* Quality Pillars - New Suggestion */}
        <section className="py-32 bg-surface px-6 md:px-24 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col gap-24">
            <div className="text-center max-w-3xl mx-auto flex flex-col gap-6">
              <span className="font-label text-xs uppercase tracking-[0.4em] text-primary font-bold">Standartlarımız</span>
              <h2 className="font-headline text-4xl md:text-6xl font-light">Mükemmelliği <span className="italic">dokuyoruz.</span></h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
              {[
                { icon: <Award />, title: "Sertifikalı Üretim", desc: "OEKO-TEX ve GOTS sertifikalı sürdürülebilir üretim süreçleri." },
                { icon: <Sparkles />, title: "İnovatif Dokular", desc: "Ar-Ge merkezimizde geliştirilen leke tutmaz ve yanmaz kumaş teknolojileri." },
                { icon: <Leaf />, title: "Ekolojik Yaklaşım", desc: "Doğaya saygılı, geri dönüştürülmüş ipliklerden oluşan özel koleksiyonlar." },
                { icon: <Globe2 />, title: "Global Tasarım", desc: "İtalyan ve Fransız tasarımcılarla ortaklaşa hazırlanan trend koleksiyonlar." }
              ].map((pillar, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="flex flex-col gap-6 p-10 bg-surface-container rounded-sm border border-outline-variant/10 hover:border-primary/40 transition-all duration-500"
                >
                  <div className="text-primary w-12 h-12 flex items-center justify-center bg-primary/10 rounded-full">
                    {pillar.icon}
                  </div>
                  <h4 className="font-headline text-xl">{pillar.title}</h4>
                  <p className="font-body text-sm text-on-surface-variant leading-relaxed">{pillar.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <FabricCinema onSelectItem={onSelectItem} />
        
        <section className="py-24 px-6 md:px-24 bg-surface-container">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              className="relative aspect-[4/5] overflow-hidden rounded-sm shadow-2xl"
            >
              <img 
                alt="Textile Detail" 
                className="w-full h-full object-cover" 
                src="https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=2070&auto=format&fit=crop"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
            </motion.div>
            
            <div className="flex flex-col gap-10">
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="font-label text-xs uppercase tracking-[0.4em] text-primary font-semibold"
              >
                Felsefemiz
              </motion.span>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="font-headline text-5xl md:text-6xl font-light leading-tight"
              >
                Her iplik bir <span className="italic">ustalık</span> hikayesi anlatır.
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-on-surface-variant text-lg leading-relaxed max-w-xl"
              >
                Sadece alanı dolduran değil, onu tanımlayan malzemeler kürate ediyoruz. Kaliteye olan bağlılığımız, sunduğumuz her tekstilin zamansız zarafetin ve üstün işçiliğin bir kanıtı olmasını sağlar.
              </motion.p>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-8 pt-4"
              >
                <a href="#collections" className="px-8 py-4 bg-on-surface text-surface font-label text-xs uppercase tracking-[0.2em] hover:bg-primary transition-colors duration-300">
                  Arşivleri Keşfedin
                </a>
                <a href="#contact" className="px-8 py-4 border border-outline text-on-surface font-label text-xs uppercase tracking-[0.2em] hover:bg-surface-container-high transition-colors duration-300">
                  Numune Talebi
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        <ColorUniverse />
        <Wholesale />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  const [selectedItem, setSelectedItem] = useState<Collection | FabricType | null>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <Router>
      <div className="relative min-h-screen bg-surface text-on-surface font-body selection:bg-primary/20 overflow-x-hidden">
        <Routes>
          <Route path="/" element={<MainApp onSelectItem={setSelectedItem} />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>

        <FabricDetail 
          item={selectedItem} 
          onClose={() => setSelectedItem(null)} 
        />
      </div>
    </Router>
  );
}
