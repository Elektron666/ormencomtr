import React, { useState, useEffect } from 'react';
import { auth, db } from '../lib/firebase';
import { signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from 'firebase/auth';
import { collection, query, orderBy, onSnapshot, doc, deleteDoc, getDoc } from 'firebase/firestore';
import { motion, AnimatePresence } from 'motion/react';
import { LogOut, Trash2, Mail, Users, LayoutDashboard, ChevronRight, CheckCircle2, Clock } from 'lucide-react';

export const Admin: React.FC = () => {
  const [user, setUser] = useState<any>(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);
  const [messages, setMessages] = useState<any[]>([]);
  const [activeTab, setActiveTab] = useState<'dashboard' | 'messages' | 'sectors'>('dashboard');

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        // Check if user is admin in Firestore
        const userDoc = await getDoc(doc(db, 'users', user.uid));
        if (userDoc.exists() && userDoc.data().role === 'admin') {
          setIsAdmin(true);
        } else if (user.email === 'ormentekstil@gmail.com') {
          // Default admin check
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      } else {
        setUser(null);
        setIsAdmin(false);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (isAdmin) {
      const q = query(collection(db, 'messages'), orderBy('createdAt', 'desc'));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        setMessages(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      });
      return () => unsubscribe();
    }
  }, [isAdmin]);

  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleLogout = () => signOut(auth);

  const handleDeleteMessage = async (id: string) => {
    if (window.confirm('Bu mesajı silmek istediğinize emin misiniz?')) {
      await deleteDoc(doc(db, 'messages', id));
    }
  };

  if (loading) return <div className="h-screen flex items-center justify-center font-label uppercase tracking-widest">Yükleniyor...</div>;

  if (!isAdmin) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-surface px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full bg-surface-container p-12 rounded-sm shadow-2xl border border-outline-variant/30 text-center"
        >
          <h1 className="font-headline text-3xl mb-6">Yönetim Paneli</h1>
          <p className="font-body text-on-surface-variant mb-8">Bu alana erişmek için yetkili bir hesapla giriş yapmalısınız.</p>
          <button 
            onClick={handleLogin}
            className="w-full py-4 bg-on-surface text-surface font-label text-xs uppercase tracking-widest hover:bg-primary transition-colors duration-300 flex items-center justify-center gap-3"
          >
            Google ile Giriş Yap
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-surface flex">
      {/* Sidebar */}
      <aside className="w-72 bg-surface-container border-r border-outline-variant/30 flex flex-col">
        <div className="p-8 border-b border-outline-variant/30">
          <h2 className="font-headline text-2xl tracking-tight">Ormen <span className="italic font-extralight">Admin</span></h2>
        </div>
        
        <nav className="flex-1 p-6 flex flex-col gap-2">
          <button 
            onClick={() => setActiveTab('dashboard')}
            className={`flex items-center gap-4 p-4 rounded-sm transition-all duration-300 font-label text-xs uppercase tracking-widest ${activeTab === 'dashboard' ? 'bg-primary text-surface' : 'hover:bg-surface-container-high text-on-surface-variant'}`}
          >
            <LayoutDashboard size={18} />
            Panel
          </button>
          <button 
            onClick={() => setActiveTab('messages')}
            className={`flex items-center gap-4 p-4 rounded-sm transition-all duration-300 font-label text-xs uppercase tracking-widest ${activeTab === 'messages' ? 'bg-primary text-surface' : 'hover:bg-surface-container-high text-on-surface-variant'}`}
          >
            <Mail size={18} />
            Mesajlar
            {messages.length > 0 && <span className="ml-auto bg-surface text-primary px-2 py-0.5 rounded-full text-[10px]">{messages.length}</span>}
          </button>
          <button 
            onClick={() => setActiveTab('sectors')}
            className={`flex items-center gap-4 p-4 rounded-sm transition-all duration-300 font-label text-xs uppercase tracking-widest ${activeTab === 'sectors' ? 'bg-primary text-surface' : 'hover:bg-surface-container-high text-on-surface-variant'}`}
          >
            <Users size={18} />
            Sektörler
          </button>
        </nav>

        <div className="p-6 border-t border-outline-variant/30">
          <div className="flex items-center gap-4 mb-6 px-2">
            <img src={user?.photoURL} alt="Profile" className="w-10 h-10 rounded-full border border-outline-variant" />
            <div className="flex flex-col overflow-hidden">
              <span className="font-label text-[10px] uppercase tracking-widest truncate">{user?.displayName}</span>
              <span className="font-body text-[10px] text-on-surface-variant truncate">{user?.email}</span>
            </div>
          </div>
          <button 
            onClick={handleLogout}
            className="w-full py-3 border border-outline text-on-surface-variant font-label text-[10px] uppercase tracking-widest hover:bg-error/10 hover:text-error hover:border-error transition-all duration-300 flex items-center justify-center gap-2"
          >
            <LogOut size={14} />
            Çıkış Yap
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-12 overflow-y-auto">
        <AnimatePresence mode="wait">
          {activeTab === 'dashboard' && (
            <motion.div 
              key="dashboard"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col gap-12"
            >
              <div className="flex flex-col gap-2">
                <h1 className="font-headline text-5xl font-light">Hoş Geldiniz</h1>
                <p className="font-body text-on-surface-variant">Sitenizin güncel durumu ve son aktiviteler.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-surface-container p-8 rounded-sm border border-outline-variant/30 flex flex-col gap-4">
                  <Mail className="text-primary" size={24} />
                  <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Toplam Mesaj</span>
                  <span className="font-headline text-4xl">{messages.length}</span>
                </div>
                <div className="bg-surface-container p-8 rounded-sm border border-outline-variant/30 flex flex-col gap-4">
                  <Users className="text-primary" size={24} />
                  <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Aktif Sektörler</span>
                  <span className="font-headline text-4xl">6</span>
                </div>
                <div className="bg-surface-container p-8 rounded-sm border border-outline-variant/30 flex flex-col gap-4">
                  <CheckCircle2 className="text-primary" size={24} />
                  <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant">Sistem Durumu</span>
                  <span className="font-headline text-4xl">Aktif</span>
                </div>
              </div>

              <div className="bg-surface-container p-8 rounded-sm border border-outline-variant/30">
                <h3 className="font-headline text-2xl mb-8">Son Mesajlar</h3>
                <div className="flex flex-col gap-4">
                  {messages.slice(0, 3).map((msg) => (
                    <div key={msg.id} className="flex items-center gap-6 p-4 border-b border-outline-variant/10 last:border-0">
                      <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold">
                        {msg.name[0]}
                      </div>
                      <div className="flex flex-col flex-1">
                        <span className="font-label text-xs uppercase tracking-widest">{msg.name}</span>
                        <span className="font-body text-xs text-on-surface-variant truncate max-w-md">{msg.message}</span>
                      </div>
                      <span className="font-body text-[10px] text-outline">{new Date(msg.createdAt).toLocaleDateString('tr-TR')}</span>
                    </div>
                  ))}
                  {messages.length === 0 && <p className="font-body text-on-surface-variant text-sm italic">Henüz mesaj bulunmuyor.</p>}
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'messages' && (
            <motion.div 
              key="messages"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col gap-12"
            >
              <div className="flex flex-col gap-2">
                <h1 className="font-headline text-5xl font-light">Mesajlar</h1>
                <p className="font-body text-on-surface-variant">İletişim formu üzerinden gelen tüm talepler.</p>
              </div>

              <div className="flex flex-col gap-6">
                {messages.map((msg) => (
                  <div key={msg.id} className="bg-surface-container p-8 rounded-sm border border-outline-variant/30 flex flex-col gap-6">
                    <div className="flex justify-between items-start">
                      <div className="flex flex-col gap-1">
                        <h4 className="font-headline text-xl">{msg.name}</h4>
                        <span className="font-body text-sm text-primary">{msg.email}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 text-outline text-[10px] font-label uppercase tracking-widest">
                          <Clock size={12} />
                          {new Date(msg.createdAt).toLocaleString('tr-TR')}
                        </div>
                        <button 
                          onClick={() => handleDeleteMessage(msg.id)}
                          className="p-2 text-on-surface-variant hover:text-error transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                    <p className="font-body text-on-surface-variant leading-relaxed bg-surface/50 p-6 rounded-sm border border-outline-variant/10">
                      {msg.message}
                    </p>
                  </div>
                ))}
                {messages.length === 0 && (
                  <div className="py-24 text-center">
                    <Mail size={48} className="mx-auto text-outline-variant mb-6 opacity-20" />
                    <p className="font-body text-on-surface-variant italic">Henüz bir mesaj alınmadı.</p>
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {activeTab === 'sectors' && (
            <motion.div 
              key="sectors"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="flex flex-col gap-12"
            >
              <div className="flex flex-col gap-2">
                <h1 className="font-headline text-5xl font-light">Sektörler</h1>
                <p className="font-body text-on-surface-variant">Ana sayfada listelenen hizmet alanları.</p>
              </div>
              
              <div className="bg-surface-container p-12 rounded-sm border border-outline-variant/30 text-center">
                <Users size={48} className="mx-auto text-outline-variant mb-6 opacity-20" />
                <p className="font-body text-on-surface-variant italic">Sektör düzenleme özelliği yakında eklenecek.</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
};
