export interface AuthorSocialLinks {
  twitter?: string;
  instagram?: string;
  linkedin?: string;
  website?: string;
  pinterest?: string;
}

export interface Author {
  id: string;
  slug: string;
  name: string;
  jobTitle: string;
  avatar: string;
  coverImage?: string;
  bio: string;
  shortBio: string;
  credentials: string[];
  expertise: string[];
  social: AuthorSocialLinks;
  articleCount: number;
  featured?: boolean;
}
