export interface Collection {
  id: string;
  name: string;
  type: string;
  image: string;
  colors: number;
  durability: string;
  availability: string;
  description?: string;
  composition?: string;
  weight?: string;
  width?: string;
  gallery?: string[];
}

export interface FabricType {
  id: string;
  name: string;
  description: string;
  specs: string;
  image: string;
  composition?: string;
  weight?: string;
  width?: string;
  gallery?: string[];
}

export interface ColorTone {
  name: string;
  hex: string;
  height: string;
}
