import type { Testimonial, FaqItem, InstagramPost } from "@/types";

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Aanya Kapoor",
    role: "Newsletter Subscriber",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80",
    quote:
      "Glow is the only beauty newsletter I actually open. The retinol guide alone saved my skin from months of trial and error.",
    rating: 5,
  },
  {
    id: "t2",
    name: "Marcus Bell",
    role: "Reader since 2024",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
    quote:
      "Finally a grooming section that isn't an afterthought. Jonah's beard care guide fixed two years of unnecessary itch.",
    rating: 5,
  },
  {
    id: "t3",
    name: "Sofia Chen",
    role: "Verified Buyer",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80",
    quote:
      "Every product recommendation actually links back to real ingredient reasoning. It's rare to trust a beauty site this much.",
    rating: 5,
  },
  {
    id: "t4",
    name: "Priyanka Desai",
    role: "Newsletter Subscriber",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=200&q=80",
    quote:
      "The curly hair porosity piece finally explained why nothing was working for me. Changed my whole routine overnight.",
    rating: 4,
  },
];

export const siteFaqs: FaqItem[] = [
  {
    id: "faq-1",
    question: "How does Glow by Kudozz choose which products to feature?",
    answer:
      "Every product featured on Glow is either tested directly by our editorial team or reviewed against ingredient lists and clinical claims by our medical reviewer. We do not accept payment for positive coverage — affiliate links may earn us a commission, but placement is never for sale.",
  },
  {
    id: "faq-2",
    question: "Is the advice on Glow medically reviewed?",
    answer:
      "Clinical and dermatological claims across our skincare and wellness content are reviewed by Dr. Sana Malik, a board-certified dermatologist, to ensure accuracy and safety.",
  },
  {
    id: "faq-3",
    question: "How often is content updated?",
    answer:
      "We revisit our most-trafficked evergreen guides at least twice a year to reflect new research, reformulated products, or updated recommendations. Every article displays its last-updated date.",
  },
  {
    id: "faq-4",
    question: "Can I submit a guest article or product for review?",
    answer:
      "Yes — reach out via our contact page with your pitch or product details. We review all submissions but can't guarantee coverage for every request.",
  },
  {
    id: "faq-5",
    question: "How do I unsubscribe from the newsletter?",
    answer:
      "Every newsletter email includes an unsubscribe link at the bottom. You can also email us directly and we'll remove you promptly.",
  },
];

export const instagramPosts: InstagramPost[] = [
  { id: "ig-1", image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80", caption: "Weekend skin reset ✨", url: "#", likes: 3420 },
  { id: "ig-2", image: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&q=80", caption: "Behind the scenes: editorial shoot", url: "#", likes: 2190 },
  { id: "ig-3", image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&q=80", caption: "This month's fragrance edit", url: "#", likes: 1870 },
  { id: "ig-4", image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&q=80", caption: "The serum everyone's asking about", url: "#", likes: 4110 },
  { id: "ig-5", image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=600&q=80", caption: "Curl care Sunday", url: "#", likes: 2560 },
  { id: "ig-6", image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&q=80", caption: "Silk pillowcase szn", url: "#", likes: 1980 },
];
