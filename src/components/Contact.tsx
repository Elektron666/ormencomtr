import React, { useState } from 'react';
import { motion } from 'motion/react';
import { db } from '../lib/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { CheckCircle2 } from 'lucide-react';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      await addDoc(collection(db, 'messages'), {
        ...formData,
        createdAt: new Date().toISOString()
      });
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error("Error sending message:", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-32 bg-surface px-6 md:px-24 border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div className="flex flex-col gap-8">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="font-label text-xs uppercase tracking-[0.4em] text-primary font-bold"
          >
            İletişim
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-headline text-5xl md:text-7xl font-light text-on-surface leading-tight"
          >
            Bir sonraki projeniz için <span className="italic">konuşalım.</span>
          </motion.h2>
          <p className="font-body text-on-surface-variant text-lg leading-relaxed max-w-md">
            Özel projeleriniz, numune talepleriniz veya iş birliği fırsatları için ekibimizle iletişime geçin.
          </p>
          
          <div className="flex flex-col gap-4 mt-8">
            <div className="flex flex-col">
              <span className="font-label text-[10px] uppercase tracking-widest text-primary font-bold mb-1">Adres</span>
              <p className="font-body text-on-surface">Ankara, Türkiye</p>
            </div>
            <div className="flex flex-col">
              <span className="font-label text-[10px] uppercase tracking-widest text-primary font-bold mb-1">E-posta</span>
              <p className="font-body text-on-surface">info@ormen.com.tr</p>
            </div>
          </div>
        </div>

        <form className="flex flex-col gap-12" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col gap-2">
              <label className="font-label text-[10px] uppercase tracking-widest text-outline font-bold">İsim Soyisim</label>
              <input 
                required
                className="bg-transparent border-b border-outline py-4 font-body text-on-surface focus:border-primary outline-none transition-colors" 
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-label text-[10px] uppercase tracking-widest text-outline font-bold">E-posta</label>
              <input 
                required
                className="bg-transparent border-b border-outline py-4 font-body text-on-surface focus:border-primary outline-none transition-colors" 
                type="email" 
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="font-label text-[10px] uppercase tracking-widest text-outline font-bold">Mesajınız</label>
            <textarea 
              required
              className="bg-transparent border-b border-outline py-4 font-body text-on-surface focus:border-primary outline-none transition-colors resize-none" 
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            ></textarea>
          </div>

          <div className="flex items-center gap-6">
            <button 
              disabled={status === 'loading'}
              className="px-12 py-5 bg-on-surface text-surface font-label text-xs uppercase tracking-[0.3em] hover:bg-primary transition-colors duration-300 self-start shadow-xl disabled:opacity-50" 
              type="submit"
            >
              {status === 'loading' ? 'Gönderiliyor...' : 'Mesaj Gönder'}
            </button>

            {status === 'success' && (
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-2 text-primary font-label text-[10px] uppercase tracking-widest"
              >
                <CheckCircle2 size={16} />
                Mesajınız Alındı
              </motion.div>
            )}
          </div>
        </form>

        {/* Map Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="lg:col-span-2 mt-24"
        >
          <div className="w-full h-[400px] grayscale hover:grayscale-0 transition-all duration-700 rounded-sm overflow-hidden shadow-2xl border border-outline-variant/30">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d195884.3004300305!2d32.62267988365447!3d39.90325843799634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d347d520732db1%3A0xbdc57b0c0830d602!2sAnkara!5e0!3m2!1str!2str!4v1712314567890!5m2!1str!2str" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
