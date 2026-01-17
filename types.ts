
export interface DetailBlock {
  title: string;
  text: string;
  image?: string;
  style?: 'standard' | 'vertical' | 'overlap' | 'big';
}

export interface ScrapItem {
  image: string;
  top: string;
  left: string;
  rotation: number;
}

export interface EraData {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  color: string;
  textColor: string;
  fontFamily: string;
  accentColor: string;
  image: string;
  rotation?: number;
  details: DetailBlock[];
  scraps?: ScrapItem[];
}
