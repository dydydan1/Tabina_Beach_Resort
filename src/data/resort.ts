export type NavLink = { label: string; href: string; id: string };

export const navLinks: NavLink[] = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Our Story", href: "#owners", id: "owners" },
  { label: "Facilities", href: "#facilities", id: "facilities" },
  { label: "Cottages & Rates", href: "#cottages", id: "cottages" },
  { label: "Gallery", href: "#gallery", id: "gallery" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export const brand = {
  name: "Tabina",
  fullName: "Tabina Spring Resort",
  tagline: "Natural Spring Resort",
  description:
    "A quiet nature retreat built around cool, flowing spring water — spring pools, garden cottages and forest shade for families, friends and slow weekends.",
};

export type Facility = {
  title: string;
  description: string;
  image: string;
  alt: string;
  icon: "spring" | "waves" | "cottage" | "trees" | "dining" | "drop";
};

export const facilities: Facility[] = [
  {
    title: "Natural Spring Pools",
    description:
      "Cool, continuously flowing spring water in rock-lined pools — clear enough to see the stones on the bottom.",
    image: "/images/facility-spring-pool.jpg",
    alt: "Spring water spilling into a clear natural pool surrounded by rock walls and forest",
    icon: "spring",
  },
  {
    title: "Natural Spring Grotto",
    description:
      "A sheltered pool under the rock overhang, lit from above and hung with roots — the coolest corner on a hot afternoon.",
    image: "/images/facility-grotto-pool.jpg",
    alt: "Blue natural spring pool inside a rock grotto, lit by daylight through hanging roots",
    icon: "waves",
  },
  {
    title: "Private Cottages",
    description:
      "Wooden cottages tucked between the trees, with tables and seating — a place to rest, eat and keep your things.",
    image: "/images/facility-private-cottages.jpg",
    alt: "Wooden cottage standing among tall trees and greenery",
    icon: "cottage",
  },
  {
    title: "Open Cottages & Picnic Groves",
    description:
      "Open-air huts and picnic tables under old trees, made for long lunches, birthdays and group gatherings.",
    image: "/images/facility-picnic.jpg",
    alt: "Large shade tree over an open grassy picnic area",
    icon: "trees",
  },
  {
    title: "Spring Streams & Rock Pools",
    description:
      "The stream that feeds the pools runs through the grounds — small falls, flat rocks and cold, clear water.",
    image: "/images/facility-spring-stream.jpg",
    alt: "Clear freshwater spring stream flowing over wide rock ledges beneath green trees",
    icon: "drop",
  },
  {
    title: "Food & Dining Area",
    description:
      "A covered dining space where you can eat your own packed meals or order from the resort kitchen.",
    image: "/images/facility-dining.jpg",
    alt: "Warmly lit resort dining area with wooden tables",
    icon: "dining",
  },
];

export const extraAmenities = [
  "Free parking",
  "Shower rooms & restrooms",
  "Changing rooms",
  "Lifeguard on duty",
  "Grilling stations",
  "Drinking water refill",
  "First-aid station",
];

export type Cottage = {
  id: string;
  name: string;
  description: string;
  image: string;
  alt: string;
  capacity: string;
  price: string;
  inclusions: string[];
};

/**
 * All rates, capacities and inclusions below are placeholders.
 * Replace them with the resort owner's confirmed details before launch.
 */
export const cottages: Cottage[] = [
  {
    id: "small-cottage",
    name: "Small Cottage",
    description: "Compact and private — a good fit for couples or a small family spending the day.",
    image: "/images/cottage-small.jpg",
    alt: "Small thatched wooden hut raised on stilts among green hedges",
    capacity: "Capacity — to be confirmed",
    price: "₱ —",
    inclusions: ["Table and bench seating", "Day use (placeholder)", "Short walk to the pools"],
  },
  {
    id: "family-cottage",
    name: "Family Cottage",
    description:
      "More room to spread out, with seating for a family lunch and space for bags and coolers.",
    image: "/images/cottage-family.jpg",
    alt: "Thatched nipa-style cottage with a veranda, framed by palms and lawn",
    capacity: "Capacity — to be confirmed",
    price: "₱ —",
    inclusions: ["Long table seating", "Electric outlet (placeholder)", "Shaded veranda"],
  },
  {
    id: "group-cottage",
    name: "Group Cottage",
    description: "Built for reunions, birthdays and company outings that need space for a crowd.",
    image: "/images/cottage-large.jpg",
    alt: "Large wooden garden pavilion beside a pond, surrounded by palms",
    capacity: "Capacity — to be confirmed",
    price: "₱ —",
    inclusions: ["Group seating", "Grilling area nearby", "Overnight option (placeholder)"],
  },
];

export type GalleryCategory = "Spring & Pools" | "Nature & Grounds" | "Cottages";

export type GalleryImage = {
  src: string;
  alt: string;
  caption: string;
  category: GalleryCategory;
  span: "tall" | "wide" | "normal";
};

export const galleryImages: GalleryImage[] = [
  {
    src: "/images/gallery-cenote.jpg",
    alt: "Turquoise natural spring pool beneath an overhanging rock ceiling",
    caption: "Spring water inside the rock grotto",
    category: "Spring & Pools",
    span: "tall",
  },
  {
    src: "/images/gallery-santa-barbara.jpg",
    alt: "Wide natural spring pool held between moss-covered rock walls",
    caption: "The main spring pool at midday",
    category: "Spring & Pools",
    span: "wide",
  },
  {
    src: "/images/gallery-spring-stream.jpg",
    alt: "Clear spring water cascading into a green pool beside a tree",
    caption: "Where the spring water leaves the rocks",
    category: "Spring & Pools",
    span: "normal",
  },
  {
    src: "/images/gallery-jungle-creek.jpg",
    alt: "Freshwater creek running over stones through dense green vegetation",
    caption: "The stream through the lower grounds",
    category: "Spring & Pools",
    span: "normal",
  },
  {
    src: "/images/gallery-forest-path.jpg",
    alt: "Sunlight falling across a forest walking path",
    caption: "The walk down to the pools",
    category: "Nature & Grounds",
    span: "normal",
  },
  {
    src: "/images/gallery-boardwalk.jpg",
    alt: "Wooden boardwalk leading through dense forest",
    caption: "Shaded trails around the grounds",
    category: "Nature & Grounds",
    span: "wide",
  },
  {
    src: "/images/gallery-garden.jpg",
    alt: "Garden path lined with flowering hedges",
    caption: "Garden walks between the cottages",
    category: "Nature & Grounds",
    span: "normal",
  },
  {
    src: "/images/gallery-ik-kil.jpg",
    alt: "Stone steps winding down through jungle toward a natural spring pool",
    caption: "Stone steps down to the water",
    category: "Nature & Grounds",
    span: "normal",
  },
  {
    src: "/images/cottage-family.jpg",
    alt: "Thatched cottage with a veranda, surrounded by palm trees and lawn",
    caption: "A cottage among the palms",
    category: "Cottages",
    span: "normal",
  },
  {
    src: "/images/cottage-large.jpg",
    alt: "Large wooden pavilion beside a pond, framed by palms",
    caption: "The group pavilion at the water's edge",
    category: "Cottages",
    span: "wide",
  },
  {
    src: "/images/cottage-small.jpg",
    alt: "Small thatched hut on stilts in a green garden",
    caption: "A small hut in the garden",
    category: "Cottages",
    span: "normal",
  },
  {
    src: "/images/gallery-cottage-interior.jpg",
    alt: "Cozy cottage interior with plants and natural light",
    caption: "Inside a cottage",
    category: "Cottages",
    span: "normal",
  },
];

export type Highlight = {
  title: string;
  description: string;
  icon: "drop" | "leaf" | "users" | "sun";
};

export const whyChooseUs: Highlight[] = [
  {
    title: "Flowing spring water",
    description:
      "The pools are fed by a natural spring, so the water stays cool, clear and constantly moving.",
    icon: "drop",
  },
  {
    title: "Shade and quiet",
    description:
      "Old trees, garden paths and tucked-away corners keep the grounds calm even on busy weekends.",
    icon: "leaf",
  },
  {
    title: "Room for everyone",
    description:
      "Open shelters for day trips and bigger cottages for groups, reunions and family celebrations.",
    icon: "users",
  },
  {
    title: "Simple, unhurried days",
    description:
      "Swim, eat, nap in the shade, walk the grounds — the resort is designed for slow afternoons.",
    icon: "sun",
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  meta: string;
  initials: string;
};

/** Sample copy for layout purposes — not real guest reviews. */
export const testimonials: Testimonial[] = [
  {
    quote:
      "The water was so cool and clear that the kids didn't want to leave the pool. We stayed until the light started to fade.",
    name: "Sample guest name",
    meta: "Family day trip · sample",
    initials: "SG",
  },
  {
    quote:
      "We booked a cottage for a small reunion. Plenty of shade, plenty of space, and the grounds were kept spotless.",
    name: "Sample guest name",
    meta: "Group gathering · sample",
    initials: "SG",
  },
  {
    quote:
      "Quiet, green and unhurried. It felt less like a commercial pool and more like swimming in a forest stream.",
    name: "Sample guest name",
    meta: "Weekend stay · sample",
    initials: "SG",
  },
];

export type Owner = {
  name: string;
  role: string;
  photo: string;
  photoAlt: string;
  quote: string;
  story: string[];
  highlights?: string[];
};

export const owners: Owner[] = [
  {
    name: "Marites Razonado",
    role: "Founder",
    photo: "/images/owner-marites.jpg",
    photoAlt: "Marites Razonado, founder of Tabina Spring Resort, seated outdoors in a garden setting",
    quote: "This land chose us. All we did was listen to what the spring was already trying to say.",
    story: [
      "Growing up near this spring, Marites never imagined that a place where her family once spent their childhood would someday become something special. Together with her family, she saw the potential of the land and dreamed of transforming it into a beautiful place where others could experience the beauty of nature. Now working in New Zealand, she continues to be part of the vision that brought the family resort to life."
    ],
    highlights: [
      "Visionary behind the resort's nature-first philosophy",
      "Personally shaped the guest experience from day one",
      "Ensures every family who visits feels genuinely welcome",
    ],
  },
  {
    name: "Evan Razonado",
    role: "Co-Founder",
    photo: "/images/owner-evan.jpg",
    photoAlt: "Evan Razonado, co-founder of Tabina Spring Resort",
    quote: "Every stone placed, every cottage built — it was all done with family in mind.",
    story: [
      "For Evan, this spring holds memories of childhood adventures, swimming, and playing with his siblings. As the years passed, he and his family began to see beyond those memories and envisioned something greater for the place they grew up loving. As one of the resort's founders, he helped plan its development and transformation into a welcoming destination for families and visitors.",
    ],
    highlights: [
      "Led the construction and development of the resort grounds",
      "Oversees infrastructure and ongoing maintenance",
      "The steady force that keeps everything running smoothly",
    ],
  },
  {
    name: "Danilo Razonado",
    role: "Co-Founder",
    photo: "/images/owner-danilo.jpg",
    photoAlt: "Danilo Razonado, co-founder of Tabina Spring Resort, wearing a 1st place medal",
    quote: "A good day at the resort is simple — guests arrive tired and leave smiling.",
    story: [
      "Having grown up in Tabina, surrounded by mountains and nature, Danilo has always had a deep appreciation for the outdoors. As a child, he spent his days playing, swimming, and catching fish in the very spring that the family is now developing. With his love for gardening, planting, and nature, he became one of the people who helped bring the family's dream to life — preserving the beauty of a place filled with childhood memories.",
    ],
    highlights: [
      "Builds lasting connections with the resort's community of guests",
      "Supports group bookings, reunions, and special celebrations",
      "The friendly face guests remember long after they leave",
    ],
  },
];

export const contactDetails = {
  addressLines: ["Spring Resort Road, Barangay Placeholder", "Municipality, Province, Philippines"],
  phone: "+63 900 000 0000",
  phoneHref: "tel:+639000000000",
  email: "dyann.razonado.5@gmail.com",
  emailHref: "mailto:hello@tabinaspringresort.example",
  facebookLabel: "facebook.com/tabinaspringresort",
  facebookHref: "https://www.facebook.com/",
  hours: ["Day tour: 7:00 AM – 5:00 PM", "Overnight: by reservation", "Open daily (placeholder)"],
  mapsHref: "https://www.google.com/maps/search/?api=1&query=natural+spring+resort",
  mapsNote: "Google Maps link placeholder — replace with the exact resort pin.",
};

export const inquiryTypes = [
  "General inquiry",
  "Cottage reservation",
  "Day tour / group booking",
  "Overnight stay",
  "Events & celebrations",
];

export type ImageCredit = { file: string; title: string; creator: string; license: string; href: string };

/** Attribution for the placeholder photography used on this demo site. */
export const imageCredits: ImageCredit[] = [
  {
    file: "Hero, spring pools",
    title: "Cenote azul mirror",
    creator: "Gen. BaTBaiLeyS",
    license: "CC BY 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Cenote_azul_mirror.jpg",
  },
  {
    file: "About",
    title: "Krause springs natural pool 2013",
    creator: "Larry D. Moore",
    license: "CC BY 4.0",
    href: "https://commons.wikimedia.org/wiki/File:Krause_springs_natural_pool_2013.jpg",
  },
  {
    file: "Pools & gallery",
    title: "Cenote Santa Cruz, Santa Barbara, Zaci and Pool Uinic",
    creator: "Sharon Hahn Darlin",
    license: "CC BY 2.0",
    href: "https://commons.wikimedia.org/wiki/Category:Cenotes_of_Yucat%C3%A1n",
  },
  {
    file: "Grotto",
    title: "Cenote Dzitnup, Yucatan 2010",
    creator: "Adam Baker",
    license: "CC BY 2.0",
    href: "https://commons.wikimedia.org/wiki/File:Cenote_Dzitnup,_Yucatan_2010.jpg",
  },
  {
    file: "Gallery",
    title: "Cenote Ik Kil 03",
    creator: "Álvaro de la Paz Franco",
    license: "CC0",
    href: "https://commons.wikimedia.org/wiki/File:Cenote_Ik_Kil_03.jpg",
  },
  {
    file: "Streams",
    title: "Fossil Creek and Waterfall Trail photographs",
    creator: "Coconino National Forest",
    license: "CC0 / public domain",
    href: "https://commons.wikimedia.org/wiki/Category:Fossil_Creek_(Arizona)",
  },
  {
    file: "Spring & ground",
    title: "Sibul Nature Resort Spring, Abucay, Bataan",
    creator: "Judgefloro",
    license: "Public domain",
    href: "https://commons.wikimedia.org/wiki/File:06505jfSibul_Nature_Resort_Spring_Abucay_Bataanfvf_24.JPG",
  },
  {
    file: "Cottages",
    title: "Bahay Kubo Iao Valley, Bahay Kubo Ifugao house, Nipa hut from Mabini shrine",
    creator: "Viriditas, Lien Bryan, Iloilo Wanderer",
    license: "CC BY-SA 3.0 / CC BY 2.0",
    href: "https://commons.wikimedia.org/wiki/Category:Bahay_kubo",
  },
];
