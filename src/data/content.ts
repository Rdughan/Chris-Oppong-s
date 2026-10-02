export const contact = {
  whatsapp: "https://wa.me/233248634726",
  email: "steppingforachange@gmail.com",
  linkedin: "https://www.linkedin.com/",
};

export const tagline = "Building people. Building possibilities.";

export const hero = {
  kicker: tagline,
  heading: "Education that puts practical skills in young people's hands.",
  lede: "Chris Oppong works on education, technology and entrepreneurship in Ghana, through Glinax STEAM Institute, Hilth Foundation and other projects.",
};

export const belief = {
  heading: "Learning lasts when young people get to use it.",
  lede: "The work starts in classrooms and school halls, where students meet practical skills, technology and people who show them what is possible.",
  photoCaption: "A group photo with students.",
};

export const stats = [
  { num: "1,000+", label: "Trained" },
  { num: "50+", label: "Schools" },
  { num: "20+", label: "Communities" },
];

export const impact = {
  heading: "Impact",
  photoCaption: "Hilth Foundation, HSIP 26, at Adventist Senior High School, Bantama.",
  note: "Verified results, tied to specific schools, dates and programmes, will be added here as they are confirmed.",
};

export interface WorkItem {
  name: string;
  description: string;
  isPlaceholder?: boolean;
}

export const workItems: WorkItem[] = [
  {
    name: "Glinax STEAM Institute",
    description: "STEAM education for the younger generation.",
  },
  {
    name: "Hilth Foundation",
    description:
      "Programmes in senior high schools, such as HSIP 26 at Adventist Senior High School.",
  },
  {
    name: "GTECH",
    description:
      "GTECH was built around a simple mission: to transform how people learn, how they work and how they solve problems using technology.",
  },
  {
    name: "Learn With Chris",
    description:
      "It's to help develop people who can think critically, adapt quickly, create value and build solutions that matter.",
  },
];

export const ideas = {
  heading: "Ideas, on stage and in writing",
  lede: "Chris speaks about education and technology at conferences and in schools, and shares his thinking on LinkedIn.",
  photoCaption: "Speaking at the Elevation Conference.",
};

export const about = {
  heading: tagline,
  paragraphs: [
    "Chris Oppong is an educator, entrepreneur, technologist and social change maker passionate about helping people, especially young people, discover what they can do and build what matters.",
    "Since 2021, he has worked across education, technology and entrepreneurship, creating initiatives that make learning more practical, develop useful skills and turn ideas into solutions.",
    "His work is rooted in a simple belief:",
  ],
  pullQuote:
    "When people have the right knowledge, tools and opportunity, they can create meaningful change.",
  closing:
    "Chris is committed to making that opportunity more accessible — one person, one idea and one community at a time.",
};

export interface Principle {
  title: string;
  description: string;
}

export const principles: Principle[] = [
  {
    title: "Start in the classroom",
    description: "Programmes are built with the students and teachers they are meant for.",
  },
  {
    title: "Make it practical",
    description: "A skill counts when a student can use it the next day.",
  },
  {
    title: "Show the work",
    description: "Claims come with a place, a date and a photo.",
  },
];

export const contactSection = {
  heading: "Working on something for young people? Let's talk.",
  lede: "For school programmes, speaking invitations and partnerships, message Chris directly.",
};

export const nav = [
  { label: "Impact", href: "#impact" },
  { label: "Work", href: "#work" },
  { label: "Ideas", href: "#ideas" },
  { label: "About", href: "#about" },
];
