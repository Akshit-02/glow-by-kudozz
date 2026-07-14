export interface NewsletterSubscribePayload {
  email: string;
  source?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  url: string;
  likes: number;
}
