import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-surface py-24 px-6 md:px-24 border-t border-outline-variant/30">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center">
        <span className="text-on-surface text-5xl md:text-6xl font-headline font-light tracking-[0.2em] block mb-16">
          ORMEN<span className="font-bold text-primary">.</span>
        </span>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 w-full mb-20 text-left">
          <div className="flex flex-col gap-6">
            <span className="font-label text-[10px] uppercase tracking-[0.4em] text-primary font-bold">İletişim</span>
            <p className="font-body text-on-surface-variant text-sm leading-relaxed">
              Ankara, Türkiye<br />
              info@ormen.com.tr<br />
              +90 312 000 00 00
            </p>
          </div>
          
          <div className="flex flex-col gap-6">
            <span className="font-label text-[10px] uppercase tracking-[0.4em] text-primary font-bold">Takip Edin</span>
            <div className="flex flex-col gap-3">
              {['Instagram', 'Pinterest', 'LinkedIn'].map((link) => (
                <a 
                  key={link}
                  className="font-body text-sm text-on-surface-variant hover:text-primary transition-colors duration-300" 
                  href="#"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col gap-6">
            <span className="font-label text-[10px] uppercase tracking-[0.4em] text-primary font-bold">Bülten</span>
            <div className="flex flex-col gap-4">
              <p className="font-body text-sm text-on-surface-variant">Arşivimizden en son haberler için bize katılın.</p>
              <div className="flex border-b border-outline py-2">
                <input 
                  type="email" 
                  placeholder="E-posta Adresi" 
                  className="bg-transparent border-none outline-none text-sm font-body w-full placeholder:text-outline"
                />
                <button className="font-label text-[10px] uppercase tracking-widest text-primary font-bold">Katıl</button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="w-full pt-12 border-t border-outline-variant/30 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="font-label tracking-[0.2em] text-[10px] uppercase text-outline">
            © 2024 ORMEN TEKSTİL. TÜM HAKLARI SAKLIDIR.
          </p>
          <div className="flex gap-8">
            {['Gizlilik Politikası', 'Kullanım Şartları'].map((link) => (
              <a 
                key={link}
                className="font-label tracking-[0.2em] text-[10px] uppercase text-outline hover:text-primary transition-colors duration-300" 
                href="#"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
