export interface Category {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  image: string;
  icon: string;
  color: string;
  featured?: boolean;
}

export interface Tag {
  id: string;
  slug: string;
  name: string;
  articleCount: number;
}
