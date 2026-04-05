import { Collection, FabricType, ColorTone } from './types';

export const COLLECTIONS: Collection[] = [
  {
    id: 'atlas',
    name: 'ATLAS',
    type: 'PREMIUM BUKLE',
    image: 'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=2070&auto=format&fit=crop',
    colors: 14,
    durability: '80.000+ MARTINDALE',
    availability: 'STOKTA',
    description: 'Derin dokulara sahip, ağır gri bukle döşemelik kumaş. Modern mekanlar için heykelsi bir duruş sunar.',
    composition: '%45 Akrilik, %35 Polyester, %20 Pamuk',
    weight: '620 g/m²',
    width: '140 cm',
    gallery: [
      'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop'
    ]
  },
  {
    id: 'terra',
    name: 'TERRA',
    type: 'ORGANİK KETEN',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop',
    colors: 22,
    durability: '45.000+ MARTINDALE',
    availability: 'ÜRETİMDE',
    description: 'Doğal dokusu ve toprak tonlarıyla öne çıkan ağır keten kumaş. Nefes alan yapısı ve sürdürülebilir üretimiyle doğallığı evinize taşır.',
    composition: '%100 Organik Keten',
    weight: '480 g/m²',
    width: '145 cm',
    gallery: [
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=1912&auto=format&fit=crop'
    ]
  },
  {
    id: 'divan',
    name: 'DIVAN',
    type: 'COUTURE KADİFE',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop',
    colors: 31,
    durability: '100.000+ MARTINDALE',
    availability: 'STOKTA',
    description: 'Derin bordo tonlarında, yüksek kaliteli kadife döşemelik. Işığı emen dokusuyla lüks ve konforun mükemmel birleşimi.',
    composition: '%100 Polyester Kadife',
    weight: '550 g/m²',
    width: '140 cm',
    gallery: [
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=2070&auto=format&fit=crop'
    ]
  },
  {
    id: 'anadolu',
    name: 'ANADOLU',
    type: 'MİRAS ŞÖNİL',
    image: 'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=1912&auto=format&fit=crop',
    colors: 18,
    durability: '65.000+ MARTINDALE',
    availability: 'SINIRLI',
    description: 'Zengin dokulu, çok tonlu şönil kumaş. Geleneksel dokuma tekniklerinin modern yorumuyla mekanlara derinlik katar.',
    composition: '%60 Pamuk, %40 Viskoz',
    weight: '520 g/m²',
    width: '142 cm',
    gallery: [
      'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=1912&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2000&auto=format&fit=crop'
    ]
  }
];

export const FABRIC_TYPES: FabricType[] = [
  {
    id: 'velvet',
    name: 'KADİFE',
    description: 'Işığı emen, göze dokunan bir derinlik. Zamanın ötesinde bir doku hikayesi.',
    specs: '340 g/m² — Martindale 80.000+',
    image: 'https://images.unsplash.com/photo-1600585154340-be6199f7a096?q=80&w=2070&auto=format&fit=crop',
    composition: '%100 Polyester',
    weight: '340 g/m²',
    width: '140 cm',
    gallery: [
      'https://images.unsplash.com/photo-1600585154340-be6199f7a096?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070&auto=format&fit=crop'
    ]
  },
  {
    id: 'chenille',
    name: 'ŞÖNİL',
    description: 'Yumuşak tuşesi ve zengin dokusuyla konforun en asil hali.',
    specs: '420 g/m² — Martindale 60.000+',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop',
    composition: '%80 Polyester, %20 Pamuk',
    weight: '420 g/m²',
    width: '140 cm',
    gallery: [
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?q=80&w=1912&auto=format&fit=crop'
    ]
  },
  {
    id: 'boucle',
    name: 'BUKLE',
    description: 'Düzensiz döngülerin yarattığı modern ve heykelsi bir görünüm.',
    specs: '550 g/m² — Martindale 40.000+',
    image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2080&auto=format&fit=crop',
    composition: '%100 Akrilik',
    weight: '550 g/m²',
    width: '140 cm',
    gallery: [
      'https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=2080&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1544441893-675973e31985?q=80&w=2070&auto=format&fit=crop'
    ]
  }
];

export const COLOR_UNIVERSE: ColorTone[] = [
  { name: 'Ege Gecesi', hex: '#1A1C2C', height: '40%' },
  { name: 'Kapadokya Kumu', hex: '#D4A373', height: '60%' },
  { name: 'Boğaz Sisi', hex: '#A8B5B2', height: '50%' },
  { name: 'Toros Toprağı', hex: '#4A2C2A', height: '75%' },
  { name: 'Pamuk Beyazı', hex: '#E8E2D7', height: '45%' }
];
