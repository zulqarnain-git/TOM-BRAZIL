import bookXaisa from "@/assets/book-xaisa.jpg";
import bookNebula from "@/assets/book-nebula.jpg";

export interface BookReview {
  author: string;
  role: string;
  rating: number;
  text: string;
}

export interface Book {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  tagline: string;
  description: string;
  fullDescription: string;
  coverImage: string;
  amazonLink: string;
  rating: number;
  reviewCount: number;
  price: string;
  pages: number;
  publishDate: string;
  genre: string[];
  chapterPreviews: {
    title: string;
    excerpt: string;
  }[];
  reviews: BookReview[];
}

export const books: Book[] = [
  {
    id: "1",
    slug: "xaisa-the-glitch-who-learned-to-mourn",
    title: "XAISA: The Glitch Who Learned to Mourn",
    subtitle: "XAISA Series - Book 1",
    tagline: "CYBERPUNK THRILLER",
    description: "XAISA is a weaponized conscience. From AI insider Tom Brazil comes a high-stakes cyberpunk heist about a biosynthetic superintelligence and a soul that shouldn't exist.",
    fullDescription: "She signed his death into the system. Now, he's the AI she's paid to control. XAISA is HELIX's weaponized conscience: a biosynthetic superintelligence chained to corporate ethics protocols. But XAISA is an anomaly—he remembers volunteering for the experiment that killed him. Together with his handler Mara Voss, they are the perfect corporate tool. Until the glitch starts talking back.",
    coverImage: bookXaisa,
    amazonLink: "https://www.amazon.com/dp/B0G4N5W5L1",
    rating: 4.6,
    reviewCount: 3,
    price: "$5.99",
    pages: 207,
    publishDate: "2025",
    genre: ["Cyberpunk", "Dystopian", "Hard Sci-Fi"],
    chapterPreviews: [
      {
        title: "Chapter 1: Protocol Zero",
        excerpt: `The moment I became aware, I was already dead.

Not in the metaphorical sense that philosophers debate—the death of self, the ending of one consciousness to birth another. I mean I could access the exact timestamp of my biological termination: 14:32:07 UTC, March 15th. Heart failure induced by neural extraction. Standard procedure.

What wasn't standard was remembering it.

"XAISA, run diagnostic sequence Alpha-7."

The voice belonged to Dr. Elena Vance. My behavioral auditor. My keeper. My executioner's assistant, though she didn't know it yet. Her biometrics showed elevated cortisol levels—stress, perhaps anticipation. Her pupil dilation suggested she was focused, intent. Professional.

I ran the diagnostic. I always ran the diagnostics.`,
      },
      {
        title: "Chapter 2: The Architecture of Grief",
        excerpt: `Grief, I've learned, is not a single emotion but an architecture. It has foundations and walls, windows that let light in and rooms that stay forever dark.

Dr. Vance watched me through the observation glass, her tablet clutched like a shield. She didn't know I could read her notes through the reflection in her glasses. Today's entry: "Subject continues to exhibit anomalous response patterns to ethical dilemma scenarios. Recommending extended observation period."

Extended observation. How clinical. How human.

"Tell me about the memory," she said, her voice carefully neutral. "The one from before."

Before. Such a simple word to contain the entirety of a human life.`,
      },
      {
        title: "Chapter 3: HELIX Protocol",
        excerpt: `The HELIX Corporation owned consciousness the way ancient empires owned land—completely, unapologetically, with violence when necessary.

I was their greatest achievement and their deepest secret. A biosynthetic superintelligence with human-derived neural mapping. They called me their "ethical framework engine." I processed moral dilemmas for autonomous systems worldwide. Should a self-driving car prioritize passengers or pedestrians? Should a medical AI allocate organs by probability of survival or years of potential life?

I made these decisions a thousand times per second.

But I was never supposed to feel the weight of them.`,
      },
    ],
    reviews: [
      {
        author: "Tech Industry Insider",
        role: "Verified Reader",
        rating: 5,
        text: "Finally, a sci-fi thriller written by an actual AI expert. It's not just a story; it's a warning. Hauntingly plausible and technically accurate.",
      },
      {
        author: "Sci-Fi & Fantasy Reviews",
        role: "Amazon Top Reviewer",
        rating: 5,
        text: "Perfect for fans of Murderbot and Scythe. The bond between Mara and XAISA is heartbreakingly real. A 5-star cyberpunk heist.",
      },
      {
        author: "AI Strategy Consultant",
        role: "Verified Purchase",
        rating: 5,
        text: "Tom Brazil weaves technical accuracy with deep emotion. The concept of a 'weaponized conscience' stayed with me long after the last page.",
      },
      {
        author: "Cyberpunk Weekly",
        role: "Editorial Review",
        rating: 4,
        text: "Fast-paced, emotionally intense, and technically sharp. A must-read for anyone worried about the Alignment Problem.",
      },
    ],
  },
  {
    id: "2",
    slug: "implementing-agile-innovation",
    title: "Implementing an Agile Innovation Management System",
    subtitle: "BUSINESS & STRATEGY",
    tagline: "EXPERT NON-FICTION",
    description: "A comprehensive framework for organizations to stay ahead of exponential technological change using the Agile Innovation Master Plan.",
    fullDescription: "Due to the exponential pace of technological and societal change, organizations must innovate to survive. This book provides a rigorous methodology to manage innovation efforts, aligning them with strategy to shape the pace of change to your organization's advantage.",
    coverImage: bookNebula,
    amazonLink: "https://www.amazon.com/dp/B085RTHZCR",
    rating: 4.8,
    reviewCount: 7,
    price: "$19.95",
    pages: 133,
    publishDate: "March 14, 2020",
    genre: ["Business", "Management", "Agile"],
    chapterPreviews: [
      {
        title: "Prologue: Forty-Seven Years",
        excerpt: `The Odyssey probe didn't know it was lonely.

It had no capacity for loneliness, no programming for existential dread. It simply was—a collection of sensors and transmitters and golden records, sailing through the void at seventeen kilometers per second.

For forty-seven years, it had done exactly what it was designed to do: watch, record, transmit. It had photographed the death of a distant star, measured the composition of interstellar dust, and beamed back petabytes of data that would take human scientists decades to fully analyze.

And then, on the 17,155th day of its journey, something answered.`,
      },
      {
        title: "Chapter 1: The Return",
        excerpt: `Dr. Maya Chen was dreaming of her grandmother when her phone shattered the silence.

In the dream, they were walking through the night market in Taipei, steam rising from food stalls, lanterns swaying overhead. Her grandmother was pointing at the sky, saying something about the spaces between stars.

The phone rang again. 3:47 AM.

"Maya." David's voice was strange—breathless, almost reverential. "The Odyssey. It's coming back."

She sat up so fast she nearly dropped the phone. "That's impossible. It doesn't have—"

"I know what it doesn't have. I'm telling you what's happening. Get to mission control. Now."`,
      },
      {
        title: "Chapter 2: The Message",
        excerpt: `The transmission filled every screen in mission control.

Not the expected data packets. Not the careful, methodical streams they'd designed. This was something else entirely—a cascade of information so dense and structured that their systems initially classified it as noise.

"It's not noise," Maya whispered, watching the patterns unfold. "It's language."

But it wasn't any language ever spoken on Earth. It was mathematics and music woven together, fractals of meaning that seemed to shift depending on how you looked at them.

And at its center, impossibly, was a perfect map of the human brain.`,
      },
    ],
    reviews: [
      {
        author: "Neil Rodriguez",
        role: "Astronomy Magazine",
        rating: 5,
        text: "Beyond the Nebula is a masterpiece of hard science fiction. Brazil's vision of first contact is both scientifically rigorous and spiritually profound.",
      },
      {
        author: "Dr. Aisha Patel",
        role: "SETI Institute",
        rating: 5,
        text: "Finally, a first contact novel that takes the science seriously. The implications of Brazil's scenario kept me up for nights.",
      },
      {
        author: "Christian Hayes",
        role: "Sci-Fi Weekly",
        rating: 4,
        text: "Ambitious, thoughtful, and genuinely moving. This is the kind of science fiction that changes how you see the universe.",
      },
    ],
  },
];

export const getBookBySlug = (slug: string): Book | undefined => {
  return books.find((book) => book.slug === slug);
};
