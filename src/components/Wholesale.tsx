import React from 'react';
import { motion } from 'motion/react';
import { Truck, Package, Globe, ShieldCheck } from 'lucide-react';

export const Wholesale: React.FC = () => {
  const features = [
    {
      icon: <Truck size={32} strokeWidth={1} />,
      title: "Hızlı Lojistik",
      desc: "Dünya çapında güvenilir ve hızlı sevkiyat ağımızla projelerinizi aksatmadan teslimat yapıyoruz."
    },
    {
      icon: <Package size={32} strokeWidth={1} />,
      title: "Yüksek Stok Kapasitesi",
      desc: "Geniş depo alanlarımız ve sürekli güncellenen stoklarımızla büyük ölçekli taleplerinizi anında karşılıyoruz."
    },
    {
      icon: <Globe size={32} strokeWidth={1} />,
      title: "Global Standartlar",
      desc: "Uluslararası kalite sertifikalarına sahip ürünlerimizle dünya pazarında rekabetçi çözümler sunuyoruz."
    },
    {
      icon: <ShieldCheck size={32} strokeWidth={1} />,
      title: "Garanti ve Destek",
      desc: "Tüm toptan alımlarda ürün garantisi ve satış sonrası teknik destek hizmeti sağlıyoruz."
    }
  ];

  return (
    <section id="wholesale" className="py-32 bg-surface-container px-6 md:px-24">
      <div className="max-w-7xl mx-auto flex flex-col gap-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
          <div className="flex flex-col gap-8 max-w-2xl">
            <motion.span 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-label text-xs uppercase tracking-[0.4em] text-primary font-bold"
            >
              Toptan Satış & Proje
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="font-headline text-5xl md:text-7xl font-light text-on-surface leading-tight"
            >
              Global projeler için <span className="italic">ölçeklenebilir</span> çözümler.
            </motion.h2>
          </div>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-body text-on-surface-variant text-lg max-w-sm leading-relaxed"
          >
            Dünya genelindeki otel, restoran ve kurumsal projeleriniz için yüksek hacimli üretim ve tedarik kapasitemizle yanınızdayız.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex flex-col gap-6 p-8 bg-surface rounded-sm border border-outline-variant/10 hover:border-primary/30 transition-all duration-500 group"
            >
              <div className="text-primary group-hover:scale-110 transition-transform duration-500 origin-left">
                {feature.icon}
              </div>
              <h4 className="font-headline text-xl">{feature.title}</h4>
              <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative h-[500px] overflow-hidden rounded-sm group"
        >
          <img 
            src="https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=2187&auto=format&fit=crop" 
            alt="Wholesale Warehouse" 
            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-on-surface/40 flex flex-col items-center justify-center text-center p-6">
            <h3 className="font-headline text-4xl md:text-6xl text-surface mb-8 font-light italic">
              Büyük düşünün, biz gerçekleştirelim.
            </h3>
            <a 
              href="#contact" 
              className="px-12 py-5 bg-primary text-surface font-label text-xs uppercase tracking-[0.3em] hover:bg-surface hover:text-on-surface transition-all duration-500 shadow-2xl"
            >
              Kurumsal Teklif Alın
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
