import type { Author } from "@/types";

export const authors: Author[] = [
  {
    id: "author-mira-shah",
    slug: "mira-shah",
    name: "Mira Shah",
    jobTitle: "Licensed Esthetician & Skincare Editor",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
    coverImage: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=1600&q=80",
    bio:
      "Mira is a licensed esthetician with twelve years of clinical and editorial experience. She writes about ingredient science, skin barrier health, and building routines that actually work — no fluff, no fear-mongering.",
    shortBio: "Licensed esthetician covering skin barrier health and ingredient science.",
    credentials: ["Licensed Esthetician (NY)", "Cosmetic Chemistry Certificate, UCLA Extension"],
    expertise: ["Skincare", "Ingredient Science", "Acne", "Anti-Aging"],
    social: {
      instagram: "https://instagram.com/mirashahskin",
      twitter: "https://twitter.com/mirashahskin",
      linkedin: "https://linkedin.com/in/mirashah",
    },
    articleCount: 16,
    featured: true,
  },
  {
    id: "author-jonah-reyes",
    slug: "jonah-reyes",
    name: "Jonah Reyes",
    jobTitle: "Grooming & Fragrance Editor",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80",
    coverImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=1600&q=80",
    bio:
      "Jonah has spent a decade covering men's and unisex grooming, from classic wet shaving to modern minimalist routines. He's obsessed with fragrance layering and will happily talk your ear off about vetiver.",
    shortBio: "Grooming and fragrance specialist with a decade in the category.",
    credentials: ["Certified Barber Instructor", "Fragrance Foundation Member"],
    expertise: ["Grooming", "Fragrance", "Beard Care"],
    social: {
      instagram: "https://instagram.com/jonahgrooms",
      website: "https://jonahreyes.com",
    },
    articleCount: 0,
    featured: true,
  },
  {
    id: "author-priya-nair",
    slug: "priya-nair",
    name: "Priya Nair",
    jobTitle: "Haircare Editor",
    avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&q=80",
    coverImage: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1600&q=80",
    bio:
      "Priya is a trichology-trained haircare editor who has tested more shampoos than she'd like to admit. She specializes in curl science, scalp health, and demystifying hair porosity.",
    shortBio: "Trichology-trained editor specializing in curl science and scalp health.",
    credentials: ["Trichology Certificate, Institute of Trichologists"],
    expertise: ["Haircare", "Curly Hair", "Scalp Care"],
    social: {
      instagram: "https://instagram.com/priyahair",
      pinterest: "https://pinterest.com/priyahair",
    },
    articleCount: 0,
    featured: true,
  },
  {
    id: "author-elle-woods",
    slug: "elle-woods",
    name: "Elle Woods",
    jobTitle: "Makeup Artist & Beauty Editor",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=80",
    coverImage: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=1600&q=80",
    bio:
      "Elle is a professional makeup artist turned editor, having worked backstage at fashion week before joining Glow full-time. She covers trends, technique, and the products worth your money.",
    shortBio: "Professional makeup artist covering trends and technique.",
    credentials: ["Certified Makeup Artist, MUD"],
    expertise: ["Makeup", "Color Trends"],
    social: {
      instagram: "https://instagram.com/ellewoodsmakeup",
    },
    articleCount: 0,
    featured: false,
  },
  {
    id: "author-dr-sana-malik",
    slug: "dr-sana-malik",
    name: "Dr. Sana Malik",
    jobTitle: "Board-Certified Dermatologist (Medical Reviewer)",
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
    bio:
      "Dr. Malik is a board-certified dermatologist who medically reviews clinical claims across Glow's skincare and wellness content to ensure accuracy and safety.",
    shortBio: "Board-certified dermatologist and medical reviewer.",
    credentials: ["MD, Board-Certified Dermatologist", "Fellow, American Academy of Dermatology"],
    expertise: ["Dermatology", "Clinical Skincare", "Wellness"],
    social: {
      linkedin: "https://linkedin.com/in/drsanamalik",
    },
    articleCount: 16,
    featured: false,
  },
];
