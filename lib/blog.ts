import type { PhotoContent } from "@/lib/content";

export type BlogPost = {
  slug: string;
  title: string;
  category: string;
  author: string;
  authorRole: string;
  date: string;
  dateTime: string;
  readTime: string;
  description: string;
  fit: "cover" | "contain";
  image: PhotoContent | null;
  video: string;
  gallery: PhotoContent[];
  paragraphs: string[];
  tags: string[];
};

export const blogPosts: BlogPost[] = [
  {
    "slug": "abg-campaign-office-kaduna-ready-for-the-peoples-agenda-2027",
    "title": "ABG Campaign Office in Kaduna Ready for The People's Agenda 2027",
    "category": "Campaign Update",
    "author": "El-Masjid Abdul Umar (Masallaci)",
    "authorRole": "",
    "date": "September 19, 2026",
    "dateTime": "2026-09-19",
    "readTime": "2 min read",
    "description": "The Hon. Usman S. Bawa, ABG Campaign Office in Kaduna is fully set and ready to commence campaign activities in earnest.",
    "fit": "contain",
    "image": {
      "src": "/media/blog/campaign-office-logo.png",
      "alt": "Shehu ABG Impact Initiative mark, with a portrait and the PDP umbrella",
      "caption": "The mark",
      "description": "The Hon. Usman S. Bawa, ABG Campaign Office in Kaduna is fully set and ready to commence campaign activities in earnest.",
      "credit": "El-Masjid Abdul Umar (Masallaci)",
      "license": "Editorial use"
    },
    "video": "/media/blog/campaign-office.mp4",
    "gallery": [],
    "paragraphs": [
      "This is the Hon. Usman S. Bawa, ABG Campaign Office in Kaduna, fully set and ready to commence campaign activities in earnest.",
      "The atmosphere here tells the story of a movement that is prepared, organized and determined. The office is beautifully branded, adorned with the vibrant colours of the Peoples Democratic Party, the green, white and red flags flying proudly, and lined with bold banners carrying the message that resonates with the people, THE PEOPLE'S AGENDA 2027.",
      "This is not just a campaign office, it is a statement of intent. It reflects the seriousness, the structure and the people-centred vision of Rt. Hon. Usman Bawa ABG, a man who has served with distinction in the House of Representatives and who understands the yearnings of the people of Kaduna State.",
      "From the strategic location to the meticulous arrangement of campaign materials, everything indicates that the ABG team is not coming to play politics as usual, but to present a credible alternative anchored on experience, capacity and compassion for the people.",
      "As preparations are being finalized, one thing is clear, Kaduna is about to witness a campaign driven by substance, by connection to the grassroots, and by a genuine desire to restore hope.",
      "The People's Agenda has begun. The movement is ready. Allah ya bamu Sa'a",
      "©️El-Masjid Abdul Umar (Masallaci)\nSeptember 19, 2026"
    ],
    "tags": [
      "Campaign Update",
      "The People's Agenda 2027",
      "Kaduna",
      "ABG"
    ]
  },
  {
    "slug": "new-era-of-prosperity-abg-aag-path-to-true-development",
    "title": "New Era of Prosperity: ABG/AAG and the Path to True Development",
    "category": "Governance",
    "author": "El-Masjid Abdul Umar (Masallaci)",
    "authorRole": "",
    "date": "August 03, 2026",
    "dateTime": "2026-08-03",
    "readTime": "4 min read",
    "description": "A vision for accountable leadership, inclusive growth, equitable investment, and lasting prosperity across Kaduna State.",
    "fit": "contain",
    "image": {
      "src": "/media/blog/prosperity.png",
      "alt": "Campaign poster of Hon. Usman Shehu Bawa (ABG) for Governor of Kaduna State",
      "caption": "For governor",
      "description": "A vision for accountable leadership, inclusive growth, equitable investment, and lasting prosperity across Kaduna State.",
      "credit": "El-Masjid Abdul Umar (Masallaci)",
      "license": "Editorial use"
    },
    "video": "",
    "gallery": [],
    "paragraphs": [
      "Across Kaduna State, a quiet resolve is taking root, a collective longing for governance that delivers, leadership that listens, and progress that leaves no community behind. It is this deep-seated hope that defines the moment we stand in today, as Hon. Usman Bawa ABG and Hon. Amos Adamu Gandu step forward with a vision forged in service, integrity, and an unshakable commitment to the common good. Theirs is not merely a political aspiration; it is a solemn promise to usher in a New Era of Prosperity, one built not on grand rhetoric or fleeting gestures, but on enduring structures, shared opportunity, and accountable leadership.",
      "For too long, the people of Kaduna have borne the weight of unfulfilled pledges. Budgets are announced with fanfare, yet roads crumble, critical projects lie abandoned, and the most vulnerable among us see little reflection of public investment in their daily lives. Development cannot exist in speeches alone; it must be tangible, visible, and felt in every home, every farm, and every marketplace. It is this gap between promise and reality that the ABG/AAG ticket exists to close. Drawing from a wealth of experience in both private enterprise and public service, Hon. Usman Bawa ABG understands that true prosperity grows from transparency, fiscal discipline, and a governance model that places the people's interest above all else. Paired with Hon. Amos Adamu Gandu, a leader whose own career is marked by diligence, empathy, and a deep connection to grassroots communities, they bring a balanced, purposeful partnership ready to meet Kaduna's most pressing challenges.",
      "Their vision for development rests on three unshakable pillars: inclusive economic growth, equitable social investment, and uncompromising security. They believe that prosperity must reach every corner of our state, from the bustling heart of Kaduna city to the remotest village, and that no region, no ethnicity, and no faith community should ever be left behind. Under their leadership, public funds will be deployed with clear accountability toward reviving critical infrastructure, revitalizing agriculture to secure food sufficiency, empowering our youth with skills and opportunity, and rebuilding trust between government and the governed. Where others see obstacles, ABG sees potential: potential in our people, potential in our resources, and the boundless possibility of a unified, progressive Kaduna.",
      "This is more than a change of leadership; it is a transformation of governance itself. It marks the end of exclusion and the beginning of a government that walks among its people, answers to them, and works tirelessly to lift every citizen up. As we approach 2027, the path to true development stands clear. It is the path of integrity over expediency, service over self-interest, and shared prosperity over selective progress. Together, with Hon. Usman Bawa ABG and Hon. Amos Adamu Gandu at the helm, we do not merely look forward to a better Kaduna; we build it together. The new era has dawned, and its name is prosperity for all."
    ],
    "tags": [
      "ABG/AAG",
      "Prosperity",
      "Governance",
      "Kaduna 2027"
    ]
  },
  {
    "slug": "shehu-abg-visits-former-kaduna-governor-ahmed-makarfi",
    "title": "Shehu ABG Visits Former Kaduna Governor Senator Ahmed Mohammed Makarfi",
    "category": "Stakeholder Engagement",
    "author": "Shehu ABG Impact Team",
    "authorRole": "",
    "date": "August 29, 2026",
    "dateTime": "2026-08-29",
    "readTime": "2 min read",
    "description": "Rt. Hon. Shehu Usman Bawa (ABG) paid a visit to former Kaduna State Governor Senator Ahmed Mohammed Makarfi at his residence in Kaduna.",
    "fit": "cover",
    "image": {
      "src": "/media/blog/makarfi-1.jpeg",
      "alt": "Shehu ABG seated with Senator Ahmed Mohammed Makarfi",
      "caption": "With Senator Makarfi",
      "description": "Rt. Hon. Shehu Usman Bawa (ABG) paid a visit to former Kaduna State Governor Senator Ahmed Mohammed Makarfi at his residence in Kaduna.",
      "credit": "Shehu ABG Impact Team",
      "license": "Editorial use"
    },
    "video": "",
    "gallery": [
      {
        "src": "/media/blog/makarfi-2.jpeg",
        "alt": "Another moment from Shehu ABG's visit to Senator Ahmed Mohammed Makarfi",
        "caption": "The visit",
        "description": "Rt. Hon. Shehu Usman Bawa (ABG) paid a visit to former Kaduna State Governor Senator Ahmed Mohammed Makarfi at his residence in Kaduna.",
        "credit": "Shehu ABG Impact Team",
        "license": "Editorial use"
      }
    ],
    "paragraphs": [
      "Rt. Hon. Shehu Usman Bawa (ABG) paid a visit to former Governor of Kaduna State, Senator Ahmed Mohammed Makarfi, at his residence in Kaduna.",
      "The visit provided an opportunity for warm interaction with the respected statesman and other leaders present at the residence. It reflected the value Shehu ABG places on maintaining meaningful relationships with experienced leaders and engaging stakeholders whose service has helped shape Kaduna State's political and public life.",
      "Senator Makarfi remains a prominent figure in Kaduna State and national politics, with a record of leadership and public service spanning several years. The cordial meeting demonstrated mutual respect and the importance of sustained dialogue among leaders committed to the progress, peace, and unity of the state.",
      "For Shehu ABG, such engagements are part of a broader commitment to listening, consultation, and building bridges across communities and generations. Constructive conversations with leaders, elders, and citizens help deepen understanding of the aspirations of the people and strengthen the shared pursuit of purposeful leadership.",
      "The visit concluded in a warm atmosphere, underscoring the enduring bonds of friendship, respect, and collective responsibility for a stronger and more prosperous Kaduna State."
    ],
    "tags": [
      "Stakeholder Engagement",
      "Ahmed Makarfi",
      "Kaduna",
      "Leadership"
    ]
  },
  {
    "slug": "shehu-abg-engages-stakeholders-ahead-of-campaign-take-off",
    "title": "Shehu ABG Engages Stakeholders Ahead of Campaign Take-Off",
    "category": "Campaign Update",
    "author": "Ibrahim A. Malali",
    "authorRole": "DG, Media and Publicity",
    "date": "August 28, 2026",
    "dateTime": "2026-08-28",
    "readTime": "2 min read",
    "description": "Consultations with key stakeholders are underway across Kaduna State ahead of the official take-off of the 2027 governorship campaign.",
    "fit": "cover",
    "image": {
      "src": "/media/blog/stakeholders-1.jpeg",
      "alt": "Shehu ABG with stakeholders ahead of the campaign take-off",
      "caption": "Stakeholders",
      "description": "Consultations with key stakeholders are underway across Kaduna State ahead of the official take-off of the 2027 governorship campaign.",
      "credit": "Ibrahim A. Malali",
      "license": "Editorial use"
    },
    "video": "",
    "gallery": [
      {
        "src": "/media/blog/stakeholders-2.jpeg",
        "alt": "Stakeholders gathered with Shehu ABG",
        "caption": "The meeting",
        "description": "Consultations with key stakeholders are underway across Kaduna State ahead of the official take-off of the 2027 governorship campaign.",
        "credit": "Ibrahim A. Malali",
        "license": "Editorial use"
      },
      {
        "src": "/media/blog/stakeholders-3.jpeg",
        "alt": "A stakeholder meeting ahead of the campaign",
        "caption": "Consultation",
        "description": "Consultations with key stakeholders are underway across Kaduna State ahead of the official take-off of the 2027 governorship campaign.",
        "credit": "Ibrahim A. Malali",
        "license": "Editorial use"
      },
      {
        "src": "/media/blog/stakeholders-4.jpeg",
        "alt": "Party leaders and supporters with Shehu ABG",
        "caption": "Together",
        "description": "Consultations with key stakeholders are underway across Kaduna State ahead of the official take-off of the 2027 governorship campaign.",
        "credit": "Ibrahim A. Malali",
        "license": "Editorial use"
      }
    ],
    "paragraphs": [
      "The Peoples Democratic Party (PDP) Governorship Candidate for Kaduna State, Rt. Hon. Shehu Usman Bawa (ABG), has commenced engagements with key stakeholders across the state ahead of the official take-off of his 2027 governorship campaign.",
      "The engagements are aimed at strengthening consultations, mobilising party leaders and supporters, and fostering unity among stakeholders as the campaign prepares for a successful take-off.",
      "During the meetings, Shehu ABG reiterated his commitment to inclusive leadership and called on stakeholders to work together towards rescuing Kaduna State and providing purposeful leadership that will improve the lives of its people.",
      "The consultations are expected to continue across the various zones of the state as preparations intensify for the official campaign launch soon."
    ],
    "tags": [
      "Campaign",
      "Stakeholder Engagement",
      "Kaduna State",
      "PDP"
    ]
  },
  {
    "slug": "shehu-abg-pays-condolence-visits-in-kaduna",
    "title": "Shehu ABG Pays Condolence Visits in Kaduna",
    "category": "",
    "author": "Ibrahim A. Malali",
    "authorRole": "DG, Media & Publicity",
    "date": "August 28, 2026",
    "dateTime": "2026-08-28",
    "readTime": "2 min read",
    "description": "Shehu ABG visited bereaved PDP leaders and families in Zaria and Kaduna North to offer his condolences, prayers, and continued support.",
    "fit": "cover",
    "image": {
      "src": "/media/blog/condolence-1.jpeg",
      "alt": "Shehu ABG during a condolence visit in Kaduna",
      "caption": "Condolence",
      "description": "Shehu ABG visited bereaved PDP leaders and families in Zaria and Kaduna North to offer his condolences, prayers, and continued support.",
      "credit": "Ibrahim A. Malali",
      "license": "Editorial use"
    },
    "video": "",
    "gallery": [
      {
        "src": "/media/blog/condolence-2.jpeg",
        "alt": "A condolence visit with a bereaved PDP family",
        "caption": "With the family",
        "description": "Shehu ABG visited bereaved PDP leaders and families in Zaria and Kaduna North to offer his condolences, prayers, and continued support.",
        "credit": "Ibrahim A. Malali",
        "license": "Editorial use"
      },
      {
        "src": "/media/blog/condolence-3.jpeg",
        "alt": "Shehu ABG with family during a condolence visit",
        "caption": "Solidarity",
        "description": "Shehu ABG visited bereaved PDP leaders and families in Zaria and Kaduna North to offer his condolences, prayers, and continued support.",
        "credit": "Ibrahim A. Malali",
        "license": "Editorial use"
      },
      {
        "src": "/media/blog/condolence-4.jpeg",
        "alt": "Another frame from the condolence visits",
        "caption": "Kaduna",
        "description": "Shehu ABG visited bereaved PDP leaders and families in Zaria and Kaduna North to offer his condolences, prayers, and continued support.",
        "credit": "Ibrahim A. Malali",
        "license": "Editorial use"
      }
    ],
    "paragraphs": [
      "Rt. Hon. Shehu Usman Bawa (ABG), PDP Gubernatorial Candidate Kaduna 2027, paid condolence visits to:",
      "1. Alh. Musa Danbaba Saya — PDP Zone 1 Chairman, Zaria, over the loss of his son Habeeb.",
      "2. The family of Hon. Aminu Ayuba MC in Kawo, Kaduna North, who passed away on Thursday.",
      "He prayed that Allah forgive them, grant them Aljannah Firdaus, and give the families strength to bear the loss. Amin 🤲",
      "He assured them of his continued support and solidarity."
    ],
    "tags": [
      "ABG2027",
      "ShehuABG",
      "PDP",
      "Kaduna"
    ]
  },
  {
    "slug": "throwback-abg-empowerment-beneficiaries",
    "title": "Throwback: Celebrating Beneficiaries of ABG Empowerment",
    "category": "Empowerment",
    "author": "Shehu ABG Impact Team",
    "authorRole": "",
    "date": "August 28, 2026",
    "dateTime": "2026-08-28",
    "readTime": "2 min read",
    "description": "A look back at some of the people reached through ABG empowerment support—and the hope that continues to inspire the work ahead.",
    "fit": "cover",
    "image": {
      "src": "/media/photos/car1.jpeg",
      "alt": "A community member holding vehicle keys beside a car",
      "caption": "A new set of keys",
      "description": "A look back at some of the people reached through ABG empowerment support—and the hope that continues to inspire the work ahead.",
      "credit": "Shehu ABG Impact Team",
      "license": "Editorial use"
    },
    "video": "",
    "gallery": [
      {
        "src": "/media/photos/car2.jpeg",
        "alt": "A community member standing beside a car with family and community members",
        "caption": "A moment shared",
        "description": "A look back at some of the people reached through ABG empowerment support—and the hope that continues to inspire the work ahead.",
        "credit": "Shehu ABG Impact Team",
        "license": "Editorial use"
      },
      {
        "src": "/media/photos/car3.jpeg",
        "alt": "A community member holding keys beside a car",
        "caption": "Opportunity in motion",
        "description": "A look back at some of the people reached through ABG empowerment support—and the hope that continues to inspire the work ahead.",
        "credit": "Shehu ABG Impact Team",
        "license": "Editorial use"
      },
      {
        "src": "/media/photos/car4.jpeg",
        "alt": "Community members gathered beside a car during a handover",
        "caption": "Progress, together",
        "description": "A look back at some of the people reached through ABG empowerment support—and the hope that continues to inspire the work ahead.",
        "credit": "Shehu ABG Impact Team",
        "license": "Editorial use"
      }
    ],
    "paragraphs": [
      "These throwback pictures capture some of the beneficiaries of ABG empowerment initiatives and the moments when practical support was placed directly into the hands of members of the community.",
      "The empowerment effort reflects a belief that people thrive when they are given opportunities and resources that can help them become more productive, independent, and confident about the future. Support such as mobility assistance can open new possibilities for work, enterprise, and improved livelihoods.",
      "Beyond every presentation is a personal story, a family, and a wider community that can benefit when one person is empowered. These moments remain a reminder that meaningful impact begins by listening to people and responding to their real needs.",
      "Looking back, we are grateful for the lives reached, the trust shared, and the progress made together. Every beneficiary represents a reason to keep building initiatives that create dignity, opportunity, and lasting value.",
      "As we look ahead, we do so with hope and a renewed commitment to expanding empowerment opportunities across Kaduna State. The journey continues, and the goal remains clear: to help more people turn opportunity into sustainable progress.",
      "Looking back with gratitude and looking ahead with hope."
    ],
    "tags": [
      "ABGEmpowerment",
      "CommunityImpact",
      "Beneficiaries",
      "Kaduna"
    ]
  },
  {
    "slug": "shehu-abg-attends-nephews-wedding-in-kaduna",
    "title": "Shehu ABG Attends Nephew's Wedding in Kaduna",
    "category": "Community",
    "author": "Ibrahim A. Malali",
    "authorRole": "DG, Media and Publicity",
    "date": "August 28, 2026",
    "dateTime": "2026-08-28",
    "readTime": "2 min read",
    "description": "Shehu ABG joined family members and well-wishers at Sultan Bello Mosque to celebrate the marriage of Abdullahi Shehu Ibrahim and Khadija Dauda Suleiman.",
    "fit": "cover",
    "image": {
      "src": "/media/blog/wedding-1.jpeg",
      "alt": "Shehu ABG at his nephew's wedding at Sultan Bello Mosque",
      "caption": "Sultan Bello Mosque",
      "description": "Shehu ABG joined family members and well-wishers at Sultan Bello Mosque to celebrate the marriage of Abdullahi Shehu Ibrahim and Khadija Dauda Suleiman.",
      "credit": "Ibrahim A. Malali",
      "license": "Editorial use"
    },
    "video": "",
    "gallery": [
      {
        "src": "/media/blog/wedding-2.jpeg",
        "alt": "Guests at the wedding celebration in Kaduna",
        "caption": "The gathering",
        "description": "Shehu ABG joined family members and well-wishers at Sultan Bello Mosque to celebrate the marriage of Abdullahi Shehu Ibrahim and Khadija Dauda Suleiman.",
        "credit": "Ibrahim A. Malali",
        "license": "Editorial use"
      },
      {
        "src": "/media/blog/wedding-3.jpeg",
        "alt": "Family and well-wishers at the wedding",
        "caption": "Family",
        "description": "Shehu ABG joined family members and well-wishers at Sultan Bello Mosque to celebrate the marriage of Abdullahi Shehu Ibrahim and Khadija Dauda Suleiman.",
        "credit": "Ibrahim A. Malali",
        "license": "Editorial use"
      },
      {
        "src": "/media/blog/wedding-4.jpeg",
        "alt": "A moment from the wedding gathering",
        "caption": "Well-wishers",
        "description": "Shehu ABG joined family members and well-wishers at Sultan Bello Mosque to celebrate the marriage of Abdullahi Shehu Ibrahim and Khadija Dauda Suleiman.",
        "credit": "Ibrahim A. Malali",
        "license": "Editorial use"
      },
      {
        "src": "/media/blog/wedding-5.jpeg",
        "alt": "The wedding congregation in Kaduna",
        "caption": "The day",
        "description": "Shehu ABG joined family members and well-wishers at Sultan Bello Mosque to celebrate the marriage of Abdullahi Shehu Ibrahim and Khadija Dauda Suleiman.",
        "credit": "Ibrahim A. Malali",
        "license": "Editorial use"
      }
    ],
    "paragraphs": [
      "The Governorship Candidate of the Peoples Democratic Party (PDP) in Kaduna State, Rt. Hon. Shehu Usman Bawa (ABG), attended the wedding ceremony of his nephew, Abdullahi Shehu Ibrahim, and Khadija Dauda Suleiman at the Sultan Bello Mosque in Kaduna.",
      "The ceremony brought together family members, friends, community leaders, and well-wishers who gathered to share in the joy of the newlyweds and their families. Shehu ABG joined the congregation in celebrating the important milestone and extended his warm wishes to the couple.",
      "He prayed for Allah's blessings upon their union and asked that their home be filled with peace, love, understanding, and prosperity. He also prayed that the couple would find strength in one another and build a marriage founded on patience, mutual respect, and faith.",
      "The occasion offered another meaningful opportunity for relatives and members of the wider community to reconnect, celebrate together, and reaffirm the importance of family bonds.",
      "Shehu ABG congratulated Abdullahi and Khadija and wished them a happy, peaceful, and fulfilling married life."
    ],
    "tags": [
      "Wedding",
      "Family",
      "Kaduna",
      "ShehuABG"
    ]
  },
  {
    "slug": "shehu-abg-visits-ailing-igabi-pdp-chairman-in-lambar-zango",
    "title": "Shehu ABG Stops Over in Lambar Zango, Visits Ailing Igabi PDP Chairman",
    "category": "Community Support",
    "author": "Ibrahim Abdullahi",
    "authorRole": "DG, Media and Publicity",
    "date": "August 29, 2026",
    "dateTime": "2026-08-29",
    "readTime": "2 min read",
    "description": "Shehu ABG stopped at Lambar Zango Village on his return from Zaria to visit the ailing Igabi PDP Chairman, Alhaji Musa Ismail.",
    "fit": "cover",
    "image": {
      "src": "/media/blog/igabi-1.png",
      "alt": "Shehu ABG visiting Alhaji Musa Ismail in Lambar Zango",
      "caption": "Lambar Zango",
      "description": "Shehu ABG stopped at Lambar Zango Village on his return from Zaria to visit the ailing Igabi PDP Chairman, Alhaji Musa Ismail.",
      "credit": "Ibrahim Abdullahi",
      "license": "Editorial use"
    },
    "video": "",
    "gallery": [
      {
        "src": "/media/blog/igabi-2.png",
        "alt": "The visit to the Igabi PDP chairman",
        "caption": "Igabi",
        "description": "Shehu ABG stopped at Lambar Zango Village on his return from Zaria to visit the ailing Igabi PDP Chairman, Alhaji Musa Ismail.",
        "credit": "Ibrahim Abdullahi",
        "license": "Editorial use"
      },
      {
        "src": "/media/blog/igabi-3.png",
        "alt": "Shehu ABG with the Igabi PDP chairman and others",
        "caption": "A brief visit",
        "description": "Shehu ABG stopped at Lambar Zango Village on his return from Zaria to visit the ailing Igabi PDP Chairman, Alhaji Musa Ismail.",
        "credit": "Ibrahim Abdullahi",
        "license": "Editorial use"
      }
    ],
    "paragraphs": [
      "The Governorship Candidate of the Peoples Democratic Party (PDP) in Kaduna State, His Excellency, Rt. Hon. Shehu Usman Bawa (ABG), on Saturday made a stopover at Lambar Zango Village along the Zaria–Kaduna Road, where he paid a brief visit to the PDP Chairman of Igabi Local Government Area, Alhaji Musa Ismail, who is currently unwell.",
      "During the stopover, Rt. Hon. Shehu ABG warmly greeted Alhaji Musa Ismail and expressed sincere concern over his health condition. He conveyed his best wishes to the chairman and encouraged him as he continues his recovery.",
      "Shehu ABG prayed to Almighty Allah to grant Alhaji Musa Ismail complete healing, renewed strength, and a speedy return to his normal activities and responsibilities.",
      "The visit was also an expression of solidarity with Alhaji Musa Ismail, his family, and members of the PDP in Igabi Local Government Area. It reflected the importance of standing together and showing care during times of personal difficulty.",
      "Beyond political engagement, the brief stopover further demonstrated Shehu ABG's commitment to the welfare of PDP members and his continued support for party leaders and supporters across Kaduna State.",
      "He wished Alhaji Musa Ismail a full and lasting recovery and prayed that Almighty Allah continue to protect and strengthen him."
    ],
    "tags": [
      "Community Support",
      "Igabi",
      "Lambar Zango",
      "PDP",
      "Kaduna"
    ]
  },
  {
    "slug": "shehu-abg-civic-tech-initiative",
    "title": "Shehu ABG Announces New Civic Tech Initiative for Youth",
    "category": "Innovation",
    "author": "Shehu ABG Impact Team",
    "authorRole": "",
    "date": "November 14, 2025",
    "dateTime": "2025-11-14",
    "readTime": "5 min read",
    "description": "The newly envisioned initiative will serve as a statewide center for technical training and applied research in the digital economy.",
    "fit": "cover",
    "image": {
      "src": "/media/blog/civic-tech.jpg",
      "alt": "Young people in discussion at a workshop table",
      "caption": "Photograph",
      "description": "The newly envisioned initiative will serve as a statewide center for technical training and applied research in the digital economy.",
      "credit": "Shehu ABG Impact Team",
      "license": "Unsplash"
    },
    "video": "",
    "gallery": [],
    "paragraphs": [
      "Shehu Usman ABG today unveiled a landmark Civic Tech Initiative aimed at equipping thousands of Kaduna State youth with the digital skills needed to compete in the 21st-century economy. The programme, announced at a well-attended event in Kaduna, will focus on coding, digital entrepreneurship, and civic data literacy.",
      "The initiative is set to establish dedicated Tech Hubs in three local government areas, each equipped with modern computer laboratories, high-speed internet, and qualified instructors. The first cohort is expected to enroll over 500 young people, with plans to scale to 3,000 participants within 18 months.",
      "\"We believe that knowledge is the ultimate infrastructure,\" said Shehu ABG during the announcement. \"This initiative is not just about teaching technology — it's about using technology to solve our communities' most pressing problems.\"",
      "The curriculum, designed in partnership with leading Nigerian tech organisations, will cover software development, UI/UX design, data analytics, and e-commerce. Graduates of the programme will receive internationally recognized certification.",
      "Community leaders and youth representatives present at the event expressed strong support for the initiative, describing it as a timely intervention that addresses the unemployment and skills gap among young Kadunans."
    ],
    "tags": [
      "Innovation",
      "Youth",
      "Technology",
      "Education"
    ]
  },
  {
    "slug": "educational-roundtable-2025",
    "title": "Impact Initiative Participates in State Educational Roundtable",
    "category": "Education",
    "author": "Shehu ABG Impact Team",
    "authorRole": "",
    "date": "May 23, 2025",
    "dateTime": "2025-05-23",
    "readTime": "4 min read",
    "description": "Representatives of the Impact Initiative joined educators, policymakers, and community leaders to discuss the future of public education in Kaduna State.",
    "fit": "cover",
    "image": {
      "src": "/media/blog/education.jpg",
      "alt": "A lecture hall during an education forum",
      "caption": "Photograph",
      "description": "Representatives of the Impact Initiative joined educators, policymakers, and community leaders to discuss the future of public education in Kaduna State.",
      "credit": "Shehu ABG Impact Team",
      "license": "Unsplash"
    },
    "video": "",
    "gallery": [],
    "paragraphs": [
      "The Shehu ABG Impact Initiative sent a strong delegation to the Kaduna State Educational Roundtable, a high-level forum that brought together school administrators, teachers, parents, and government officials to chart a path toward improved learning outcomes across the state.",
      "The delegation, led by senior Impact Initiative officials, presented a comprehensive brief on grassroots educational challenges gathered from community consultations in over 20 local government areas. Key issues highlighted included teacher-to-student ratios, inadequate school infrastructure, and the lack of STEM resources in rural schools.",
      "During the panel sessions, the Impact Initiative called for a dedicated Education Emergency Fund, increased teacher salaries linked to performance outcomes, and accelerated deployment of digital learning tools to under-resourced schools.",
      "The roundtable produced a joint communiqué that will be submitted to the State Ministry of Education as a policy roadmap. The Impact Initiative's participation underlines its commitment to evidence-based advocacy and inclusive governance."
    ],
    "tags": [
      "Education",
      "Policy",
      "Community"
    ]
  },
  {
    "slug": "nextgen-agricultural-programme",
    "title": "Launch of NextGen Agricultural Support Programme",
    "category": "Agriculture",
    "author": "Shehu ABG Impact Team",
    "authorRole": "",
    "date": "March 4, 2025",
    "dateTime": "2025-03-04",
    "readTime": "6 min read",
    "description": "A forward-looking agricultural initiative designed to modernize farming practices and boost food security across Kaduna State.",
    "fit": "cover",
    "image": null,
    "video": "",
    "gallery": [],
    "paragraphs": [
      "The NextGen Agricultural Support Programme was officially launched at a ceremony attended by hundreds of farmers, local government officials, and agricultural experts. The programme, championed by the Shehu ABG Impact Initiative, aims to transform subsistence farming into a commercially viable enterprise for thousands of families across Kaduna State.",
      "Phase one of the programme involves the distribution of subsidised modern farming equipment to 1,200 registered smallholder farmers. This includes tractors, irrigation pumps, and precision planting tools that will dramatically reduce labor costs and increase yield per hectare.",
      "In addition to equipment support, the programme provides structured access to agricultural financing through partnerships with three microfinance institutions. Farmers can access low-interest loans to purchase seeds, pesticides, and post-harvest storage solutions.",
      "The Impact Initiative also organised a three-day farmer-training workshop covering soil health management, climate-smart agriculture, and market linkage strategies. More than 400 farmers participated in the inaugural workshop, with many describing it as transformative."
    ],
    "tags": [
      "Agriculture",
      "Food Security",
      "Rural Development"
    ]
  },
  {
    "slug": "state-ministry-workshop-partnership",
    "title": "State Ministry Partners with Impact Initiative for 3-Day Workshop",
    "category": "Partnership",
    "author": "Shehu ABG Impact Team",
    "authorRole": "",
    "date": "February 19, 2025",
    "dateTime": "2025-02-19",
    "readTime": "3 min read",
    "description": "A landmark collaboration between the State Ministry of Works and Energy Development and the Shehu ABG Impact Initiative.",
    "fit": "cover",
    "image": {
      "src": "/media/blog/workshop.jpg",
      "alt": "People in discussion around a workshop table",
      "caption": "Photograph",
      "description": "A landmark collaboration between the State Ministry of Works and Energy Development and the Shehu ABG Impact Initiative.",
      "credit": "Shehu ABG Impact Team",
      "license": "Unsplash"
    },
    "video": "",
    "gallery": [],
    "paragraphs": [
      "In a demonstration of the growing influence of community-led governance, the Kaduna State Ministry of Works and Energy Development entered into a formal partnership with the Shehu ABG Impact Initiative to co-host a three-day capacity-building workshop for local contractors and infrastructure managers.",
      "The workshop covered topics including sustainable construction practices, procurement transparency, project monitoring, and the application of digital tools for infrastructure management. Over 150 participants drawn from across the state's 23 local government areas attended.",
      "The partnership agreement includes provisions for joint field assessments of ongoing road and energy projects, as well as a citizen feedback mechanism that will allow communities to report infrastructure deficiencies directly to the ministry.",
      "This collaboration marks a significant step toward institutionalising community participation in government project oversight — a key pillar of Shehu ABG's governance vision."
    ],
    "tags": [
      "Partnership",
      "Infrastructure",
      "Governance"
    ]
  },
  {
    "slug": "shehu-abg-award-of-excellence",
    "title": "Shehu ABG Receives Award of Excellence in Leadership",
    "category": "Recognition",
    "author": "Shehu ABG Impact Team",
    "authorRole": "",
    "date": "January 14, 2025",
    "dateTime": "2025-01-14",
    "readTime": "3 min read",
    "description": "Shehu Usman ABG was honoured with a prestigious Award of Excellence recognising his outstanding contributions to civic leadership and community development.",
    "fit": "cover",
    "image": {
      "src": "/media/blog/award.jpg",
      "alt": "A formal portrait in a dark suit",
      "caption": "Photograph",
      "description": "Shehu Usman ABG was honoured with a prestigious Award of Excellence recognising his outstanding contributions to civic leadership and community development.",
      "credit": "Shehu ABG Impact Team",
      "license": "Unsplash"
    },
    "video": "",
    "gallery": [],
    "paragraphs": [
      "At a gala ceremony held in Abuja, Shehu Usman ABG was presented with the Award of Excellence in Civic Leadership by a prominent national governance foundation. The award recognises individuals who have demonstrated exceptional commitment to public service, transparent leadership, and transformative community impact.",
      "Shehu ABG was cited for his work in establishing the Impact Initiative, which in its first year has reached over 50,000 beneficiaries through its education, health, and agricultural programmes. The selection committee noted his consistent effort to bring marginalised communities into the centre of governance conversations.",
      "In his acceptance remarks, Shehu ABG dedicated the honour to the communities of Kaduna State whose trust and partnership have been the foundation of all his work.",
      "\"This award belongs to every farmer we supported, every student who gained skills, and every woman who attended our civic education workshops,\" he said. \"The work continues — and we are only just beginning.\""
    ],
    "tags": [
      "Recognition",
      "Leadership",
      "Civic Service"
    ]
  },
  {
    "slug": "pvc-registration-drive-2025",
    "title": "Mass PVC Registration Drive Reaches 10,000 New Voters",
    "category": "Civic Action",
    "author": "Shehu ABG Impact Team",
    "authorRole": "",
    "date": "December 5, 2025",
    "dateTime": "2025-12-05",
    "readTime": "4 min read",
    "description": "The Impact Initiative's grassroots PVC campaign surpassed its 10,000-voter target, registering citizens from 15 local government areas.",
    "fit": "cover",
    "image": {
      "src": "/media/blog/pvc.jpg",
      "alt": "People gathered at a civic meeting",
      "caption": "Photograph",
      "description": "The Impact Initiative's grassroots PVC campaign surpassed its 10,000-voter target, registering citizens from 15 local government areas.",
      "credit": "Shehu ABG Impact Team",
      "license": "Unsplash"
    },
    "video": "",
    "gallery": [],
    "paragraphs": [
      "The Shehu ABG Impact Initiative's Permanent Voter Card (PVC) registration drive concluded its first phase with remarkable results — over 10,000 previously unregistered citizens now hold valid voter identification cards, enabling them to participate in upcoming elections.",
      "The campaign mobilised over 200 volunteer registration assistants who fanned out across 15 local government areas, setting up mobile registration desks in markets, mosques, churches, and community centres. Special outreach was directed at first-time voters, women in rural areas, and persons with disabilities.",
      "The Impact Initiative partnered with the Independent National Electoral Commission (INEC) to ensure all registrations were properly captured and cards collected on time. Regular update meetings with INEC officials helped resolve bottlenecks quickly and keep the drive on schedule.",
      "With elections approaching, the Impact Initiative has committed to a second phase of the drive targeting an additional 5,000 registrations in the most under-served communities."
    ],
    "tags": [
      "Civic Action",
      "Voting",
      "Democracy",
      "Community"
    ]
  }
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export function relatedPosts(slug: string, limit = 3) {
  const post = getBlogPost(slug);
  if (!post) return [];
  const rest = blogPosts.filter((item) => item.slug !== slug);
  const same = rest.filter(
    (item) => post.category && item.category === post.category,
  );
  const other = rest.filter((item) => item.category !== post.category);
  return [...same, ...other].slice(0, limit);
}
