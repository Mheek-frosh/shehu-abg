export const site = {
  name: "Shehu ABG",
  fullName: "Hon. Usman Shehu Bawa",
  tagline: "Son of Kaduna. Servant of the people.",
  description:
    "Usman Shehu Bawa — Shehu ABG — businessman, former member of the House of Representatives for Kaduna North, and Peoples Democratic Party candidate for Governor of Kaduna State in 2027.",
  email: "info@sheuabg2027.ng",
  hq: "Shehu ABG Campaign HQ, Kaduna North, Kaduna State",
  social: {
    x: "https://x.com/Usmanshehubawa",
    facebook: "https://www.facebook.com/UsmanShehuBawa",
    instagram: "https://www.instagram.com/usmanshehubawa_official/",
    youtube: "https://www.youtube.com/@UsmanShehuBawa",
    tiktok: "https://www.tiktok.com/@hon_usman_shehu_bawa",
  },
};

export const nav = [
  { href: "/story", label: "Story" },
  { href: "/impact", label: "Impact" },
  { href: "/blog", label: "Blog" },
  { href: "/media", label: "Media" },
  { href: "/join", label: "Join" },
];

export type PhotoContent = {
  src: string;
  alt: string;
  caption: string;
  description: string;
  credit: string;
  license: string;
};

export const chapters = [
  {
    id: "roots",
    year: "1973",
    title: "Roots",
    line: "Born in Kaduna",
    image: "/media/photos/ahead.jpeg",
    position: "50% 18%",
  },
  {
    id: "abu",
    year: "1999",
    title: "Graduate",
    line: "ABU Zaria · Geography",
    image: "/media/photos/conversation.jpeg",
    position: "50% 20%",
  },
  {
    id: "house",
    year: "2011",
    title: "House",
    line: "Kaduna North · National Assembly",
    image: "/media/photos/portrait.jpeg",
    position: "50% 12%",
  },
  {
    id: "wards",
    year: "2015",
    title: "Wards",
    line: "Service without a camera crew",
    image: "/media/photos/service.jpeg",
    position: "50% 18%",
  },
  {
    id: "jamb",
    year: "2025",
    title: "Students",
    line: "5,000 JAMB candidates funded",
    image: "/media/photos/community.jpg",
    position: "center",
  },
  {
    id: "people",
    year: "2027",
    title: "People",
    line: "The P.E.O.P.L.E Agenda",
    image: "/media/photos/flags.jpg",
    position: "center",
  },
];

export const numbers = [
  {
    value: "23",
    text: "local government areas. One Kaduna. Solar-powered digital hubs promised in every LGA — not only the cities.",
    href: "/story#people",
  },
  {
    value: "255",
    text: "wards. Each is to have a functioning primary health centre under a Shehu ABG government.",
    href: "/story#people",
  },
  {
    value: "14 yr",
    text: "of showing up in markets, schools and wards before asking for the governorship.",
    href: "/story#house",
  },
  {
    value: "5,000",
    text: "JAMB candidates funded in 2025 — before the campaign season, because the timing was right.",
    href: "/story#jamb",
  },
  {
    value: "124,170",
    text: "votes recorded at the party primary. The résumé is public. The offices are on the record.",
    href: "/story#people",
  },
  {
    value: "12",
    text: "wards where boreholes were sunk with his own resources — the reverse challenge still stands.",
    href: "/story#wards",
  },
];

export const photos: PhotoContent[] = [
  {
    src: "/media/photos/ahead.jpeg",
    alt: "Shehu Bawa looking ahead",
    caption: "Looking ahead",
    description:
      "Hon. Usman Shehu Bawa — Shehu ABG — photographed in traditional dress. Used on the campaign as a portrait of purpose, not of office.",
    credit: "Shehu ABG campaign",
    license: "Editorial use · usmanshehubawa.ng",
  },
  {
    src: "/media/photos/service.jpeg",
    alt: "Shehu Bawa, grounded in service",
    caption: "Grounded",
    description:
      "A quieter frame. The campaign uses it to mark the years of work that preceded the 2027 ticket.",
    credit: "Shehu ABG campaign",
    license: "Editorial use · usmanshehubawa.ng",
  },
  {
    src: "/media/photos/portrait.jpeg",
    alt: "Hon. Usman Shehu Bawa, PDP gubernatorial candidate, Kaduna 2027",
    caption: "The candidate",
    description:
      "Official campaign portrait. Peoples Democratic Party, Kaduna State governorship, 2027.",
    credit: "Shehu ABG campaign",
    license: "Editorial use · usmanshehubawa.ng",
  },
  {
    src: "/media/photos/conversation.jpeg",
    alt: "Shehu Bawa in thoughtful conversation",
    caption: "Conversation",
    description:
      "A still from the campaign’s gallery of the man in conversation — the register this site prefers to the rally shout.",
    credit: "Shehu ABG campaign",
    license: "Editorial use · usmanshehubawa.ng",
  },
  {
    src: "/media/photos/march.jpg",
    alt: "Supporters marching under campaign banners",
    caption: "The street fills",
    description:
      "Campaign photography of supporters on the move — the movement in motion.",
    credit: "Campaign gallery via usmanshehubawa.ng",
    license: "Editorial use",
  },
  {
    src: "/media/photos/rally.jpg",
    alt: "Rally gathering",
    caption: "Rally",
    description: "A ward-level gathering. Dates for the next round of town halls are still being set.",
    credit: "Campaign gallery via usmanshehubawa.ng",
    license: "Editorial use",
  },
  {
    src: "/media/photos/flags.jpg",
    alt: "Campaign flags at a meeting",
    caption: "Flags",
    description: "Party colours at a community meeting. PDP Kaduna, 2027.",
    credit: "Campaign gallery via usmanshehubawa.ng",
    license: "Editorial use",
  },
  {
    src: "/media/photos/community.jpg",
    alt: "Community gathering",
    caption: "One Kaduna",
    description:
      "The argument of the campaign is not a camera crew in election season. It is presence across faith and ethnic lines.",
    credit: "Campaign gallery via usmanshehubawa.ng",
    license: "Editorial use",
  },
];

export const impactPhotos: PhotoContent[] = [
  {
    src: "/media/photos/car01.jpeg",
    alt: "Four men in traditional dress beside a light blue car during a key handover",
    caption: "Keys in hand",
    description:
      "A handover during an ABG empowerment initiative, with the keys passed beside the vehicle.",
    credit: "Shehu ABG Impact Team",
    license: "Editorial use",
  },
  {
    src: "/media/photos/car1.jpeg",
    alt: "A community member holding vehicle keys beside a car",
    caption: "A new set of keys",
    description:
      "A moment from an ABG empowerment initiative, marking practical support for mobility.",
    credit: "Shehu ABG Impact Team",
    license: "Editorial use",
  },
  {
    src: "/media/photos/car2.jpeg",
    alt: "A community member standing beside a car with family and community members",
    caption: "A moment shared",
    description:
      "Community members gather around a vehicle during an empowerment handover.",
    credit: "Shehu ABG Impact Team",
    license: "Editorial use",
  },
  {
    src: "/media/photos/car3.jpeg",
    alt: "A community member holding keys beside a car",
    caption: "Opportunity in motion",
    description:
      "A beneficiary holds the keys to a vehicle provided through empowerment support.",
    credit: "Shehu ABG Impact Team",
    license: "Editorial use",
  },
  {
    src: "/media/photos/car4.jpeg",
    alt: "Community members gathered beside a car during a handover",
    caption: "Progress, together",
    description:
      "Community members share a moment during an ABG empowerment handover.",
    credit: "Shehu ABG Impact Team",
    license: "Editorial use",
  },
];

export const impactProjects = [
  {
    slug: "celebrating-beneficiaries-of-abg-empowerment",
    title: "Throwback: Celebrating Beneficiaries of ABG Empowerment",
    author: "Shehu ABG Impact Team",
    date: "August 28, 2026",
    dateTime: "2026-08-28",
    summary:
      "A look back at some of the people reached through ABG empowerment support—and the hope that continues to inspire the work ahead.",
    paragraphs: [
      "These throwback pictures capture some of the beneficiaries of ABG empowerment initiatives and the moments when practical support was placed directly into the hands of members of the community.",
      "The empowerment effort reflects a belief that people thrive when they are given opportunities and resources that can help them become more productive, independent, and confident about the future. Support such as mobility assistance can open new possibilities for work, enterprise, and improved livelihoods.",
      "Beyond every presentation is a personal story, a family, and a wider community that can benefit when one person is empowered. These moments remain a reminder that meaningful impact begins by listening to people and responding to their real needs.",
      "Looking back, we are grateful for the lives reached, the trust shared, and the progress made together. Every beneficiary represents a reason to keep building initiatives that create dignity, opportunity, and lasting value.",
      "As we look ahead, we do so with hope and a renewed commitment to expanding empowerment opportunities across Kaduna State. The journey continues, and the goal remains clear: to help more people turn opportunity into sustainable progress.",
    ],
    closing: "Looking back with gratitude and looking ahead with hope.",
    images: impactPhotos,
  },
];

export const lately = [
  {
    date: "2025",
    title: "5,000 JAMB candidates",
    text: "Fees covered for students across Kaduna — recorded on the campaign site as work done before anyone asked for a vote.",
  },
  {
    date: "2011–2015",
    title: "Kaduna North in the House",
    text: "Member of the House of Representatives. Oversight of the agencies that shape daily life. He resigned every business directorship before taking the seat.",
  },
  {
    date: "17 Apr 1973",
    title: "Born in Kaduna",
    text: "Fifth of thirteen children of Alhaji Bawa Garba, who pioneered satellite television in Northern Nigeria and founded the Kaduna International Trade Fair.",
  },
];

export const lgas = [
  "Birnin Gwari",
  "Chikun",
  "Giwa",
  "Igabi",
  "Ikara",
  "Jaba",
  "Jema'a",
  "Kachia",
  "Kaduna North",
  "Kaduna South",
  "Kagarko",
  "Kajuru",
  "Kaura",
  "Kauru",
  "Kubau",
  "Kudan",
  "Lere",
  "Makarfi",
  "Sabon Gari",
  "Sanga",
  "Soba",
  "Zangon Kataf",
  "Zaria",
];

export const roles = [
  "Ward Coordinator",
  "Community Mobiliser",
  "Social Media Champion",
  "Rally Organiser",
  "Youth Coordinator",
  "Women's Network Lead",
  "Data Entry Volunteer",
];
