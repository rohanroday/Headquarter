// All editable site content lives here.
// PHOTOS: the Unsplash images below are placeholders for the pitch. Before launch,
// replace each with HQ's own photo (drop files in /public/work or /public/feed and
// use e.g. image: "/work/chirbirey.jpg").

const u = (id: string) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=75`;

export const photos = {
  hero: u("photo-1600402808924-9c591a6dace8"), // prayer flags + snow peaks
  heroAlt: "Prayer flags in front of snow-covered Himalayan peaks in Sikkim",
  creators: u("photo-1769246752403-df4ff7fce8be"), // prayer flags, hazy hills
  about: u("photo-1632187981988-40f3cbaeef5e"), // crew around a camera
  contact: u("photo-1635346537940-9d51faeb6e32"), // hill town at sunset
};

export const site = {
  name: "Headquarter",
  shortName: "HQ",
  tagline: "The ultimate marketing base camp.",
  description:
    "Headquarter is a media house and creative agency from Gangtok, Sikkim — content, marketing, events and creator campaigns built for Northeast India.",
  url: "https://headquarter.in", // TODO: replace with the real domain once bought
  email: "headquarterwork@gmail.com",
  phone: "+91 78649 52058",
  phoneRaw: "917864952058",
  location: "Gangtok, East Sikkim — Northeast India",
  instagram: "https://www.instagram.com/headquarters_core/",
  instagramHandle: "@headquarters_core",
};

export const whatsappLink = (text?: string) =>
  `https://wa.me/${site.phoneRaw}${text ? `?text=${encodeURIComponent(text)}` : ""}`;

export const nav = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "On the ground", href: "#feed" },
  { label: "Creators", href: "#creators" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const stats = [
  { value: "27+", label: "Creators on the roster" },
  { value: "8", label: "Northeast states reached" },
  { value: "6+", label: "Brands & departments served" },
  { value: "1", label: "Team, end-to-end" },
];

export const services = [
  {
    title: "Content Production",
    line: "Concept → crew → shoot → edit → final cut.",
    body: "Reels, campaign films and social-first content made by an in-house team that knows the hills and the people in them.",
    tags: ["Reels", "Films", "Edits"],
  },
  {
    title: "Social Media Management",
    line: "Run like a season, not random posting.",
    body: "Content calendars, captions, community management and platform strategy — with a monthly report you can actually read.",
    tags: ["Calendars", "Community", "Growth"],
  },
  {
    title: "Event Coverage",
    line: "Don't just document it. Tell its story.",
    body: "On-ground photo and video, real-time stories and post-event recap reels for festivals, launches and conferences.",
    tags: ["Live content", "Recaps", "Photo"],
  },
  {
    title: "Brand Campaigns",
    line: "Ideas built around real local insight.",
    body: "Campaign strategy, creative concepts, launches and activations shaped for Northeast audiences — not a repurposed national cut.",
    tags: ["Strategy", "Launches", "Activations"],
  },
  {
    title: "Creator & Influencer Marketing",
    line: "The right creator for the right brief.",
    body: "27+ creators across Northeast India, matched on audience, geography, language, content style and brand fit.",
    tags: ["Matching", "Briefing", "Reporting"],
  },
  {
    title: "PR & Communications",
    line: "From press release to public conversation.",
    body: "PR mandates, media outreach and communication for brands, festivals and government departments.",
    tags: ["Press", "Govt comms", "Media"],
  },
  {
    title: "Workshops & Training",
    line: "We teach what we practise.",
    body: "Hands-on social media and digital skilling workshops for entrepreneurs, MSMEs, students and teams.",
    tags: ["MSMEs", "Women entrepreneurs", "Teams"],
  },
];

export type CaseStudy = {
  client: string;
  sector: string;
  tags: string[];
  brief: string;
  execution: string;
  image?: string;
  tone: "orange" | "pine" | "sand" | "night";
};

export const work: CaseStudy[] = [
  {
    client: "Chirbirey River Fest",
    image: u("photo-1637505275770-8cbf37f4c928"),
    sector: "Festival",
    tags: ["Event coverage", "Social media", "Reels"],
    brief: "Make a riverside camping festival feel unmissable — before, during and after.",
    execution:
      "On-ground crew filming daily, trend-led reels with the volunteers and artists, and a steady stream of stories that kept the festival feed alive all weekend.",
    tone: "pine",
  },
  {
    client: "Decathlon",
    image: u("photo-1632407575668-c956f851c3d7"),
    sector: "Sports retail",
    tags: ["Influencer marketing", "Creator campaigns"],
    brief: "Build regional relevance for a national sports brand in the Northeast.",
    execution:
      "Multiple creator campaigns from our roster — sport-led content built around how the region actually trains, hikes and plays.",
    tone: "orange",
  },
  {
    client: "Sikkim Utsav",
    image: u("photo-1533174072545-7a4b6ad7a6c3"),
    sector: "Culture",
    tags: ["PR mandate", "Social media", "Event coverage"],
    brief: "Own the communication for one of Sikkim's flagship cultural celebrations.",
    execution:
      "Full PR and social mandate — campaign communication, on-ground coverage, creator activity and real-time storytelling.",
    tone: "sand",
  },
  {
    client: "KFC",
    image: u("photo-1662039382503-afbf702487ed"),
    sector: "Food & beverage",
    tags: ["Brand campaign", "Content"],
    brief: "Land a brand campaign with a Northeast audience.",
    execution:
      "Creative and content made for local feeds, local voices and local context.",
    tone: "night",
  },
  {
    client: "Sikkim Kalakar Barosa Sammelan",
    image: u("photo-1759738099669-d64b0656f6cf"),
    sector: "Arts",
    tags: ["Campaign", "Communications"],
    brief: "Build visibility for a state-level gathering of artists.",
    execution:
      "Culture-led messaging, media outreach and content built around the artists themselves.",
    tone: "orange",
  },
  {
    client: "MSME Digital Skilling Workshop",
    image: u("photo-1774504798113-a03e2aa24789"),
    sector: "Government",
    tags: ["Workshop", "Commerce & Industries Dept."],
    brief: "Deliver a government-commissioned digital skilling workshop in Gangtok.",
    execution:
      "Two days teaching social media to women entrepreneurs — training, documentation and communication under one roof.",
    tone: "pine",
  },
  {
    client: "Medhavi Skills University",
    image: u("photo-1551731409-43eb3e517a1a"),
    sector: "Education",
    tags: ["Event coverage", "Content production"],
    brief: "Capture and amplify a flagship university event.",
    execution:
      "Photography, film and social-first content built around the story of the day.",
    tone: "sand",
  },
];

// Recent stories from the Instagram feed. Link each one to its post.
export type FeedPost = {
  title: string;
  kind: string;
  href: string;
  tone: CaseStudy["tone"];
  image?: string;
};

export const feed: FeedPost[] = [
  {
    title: "We actually made it to Chirbirey River Fest",
    image: u("photo-1586758744709-059a69f8206b"),
    kind: "Festival coverage",
    href: "https://www.instagram.com/headquarters_core/",
    tone: "pine",
  },
  {
    title: "Two days teaching social media to women entrepreneurs",
    image: u("photo-1680759291020-79a92d38cdfd"),
    kind: "Workshop",
    href: "https://www.instagram.com/headquarters_core/",
    tone: "orange",
  },
  {
    title: "Deo Ashish Mothey, founder of Warnamala Pariwar",
    image: u("photo-1611784728558-6c7d9b409cdf"),
    kind: "Interview series",
    href: "https://www.instagram.com/headquarters_core/",
    tone: "night",
  },
  {
    title: "Tell us a little bit about the poetry room",
    image: u("photo-1560785219-cc81ab373cd3"),
    kind: "Voices of Sikkim",
    href: "https://www.instagram.com/headquarters_core/",
    tone: "sand",
  },
  {
    title: "Pottery, tradition and the history of Sikkim",
    image: u("photo-1589051088132-06f36a22012a"),
    kind: "Culture story",
    href: "https://www.instagram.com/headquarters_core/",
    tone: "orange",
  },
  {
    title: "POV: the only dance steps the whole crew can do",
    image: u("photo-1506157786151-b8491531f063"),
    kind: "Behind the scenes",
    href: "https://www.instagram.com/headquarters_core/",
    tone: "pine",
  },
];

export const creatorNiches = [
  "Comedy",
  "Lifestyle",
  "Fashion",
  "Food",
  "Travel",
  "Culture",
  "Fitness",
  "Music",
];

export const matchedOn = [
  "Audience",
  "Geography",
  "Language",
  "Content style",
  "Personality",
  "Brand fit",
  "Community relevance",
];

export const process = [
  { step: "Brief", text: "Understand the objective and the audience." },
  { step: "Insight", text: "Find the real human or cultural truth." },
  { step: "Strategy", text: "Plan the route to the summit." },
  { step: "Create", text: "Turn the insight into an idea worth sharing." },
  { step: "Produce", text: "Shoot, edit and finish in-house." },
  { step: "Distribute", text: "Put it in the right feeds and communities." },
  { step: "Measure", text: "Report, learn and plan the next climb." },
];

export const clients = [
  "Decathlon",
  "KFC",
  "Sikkim Utsav",
  "Chirbirey River Fest",
  "Medhavi Skills University",
  "Sikkim Kalakar Barosa Sammelan",
  "Commerce & Industries Dept., Sikkim",
];

export const reasons = [
  {
    title: "Built in the Northeast",
    text: "We understand the region because we're from it — the languages, the festivals, the people your audience trusts.",
  },
  {
    title: "End-to-end",
    text: "Idea, crew, creators, PR, social and final cut — one team, one point of contact.",
  },
  {
    title: "Creator-first",
    text: "A regional roster chosen for relevance, not just follower count.",
  },
  {
    title: "Brands + government",
    text: "Experience across commercial campaigns, festivals and government communication.",
  },
];

export const projectTypes = [
  "Social media management",
  "Content / reels",
  "Event coverage",
  "Brand campaign",
  "Creator collaboration",
  "PR",
  "Workshop",
  "Other",
];

export const budgets = ["Under ₹25k", "₹25k – ₹1L", "₹1L – ₹5L", "₹5L+", "Not sure yet"];
