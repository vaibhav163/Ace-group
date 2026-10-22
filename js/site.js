"use strict";
/* ================================================================
   CONFIG — edit everything from here.
   ================================================================ */
const SITE = {
  /* Your live domain after hosting (used for canonical / OG URLs
     and the sitemap). Keep the trailing slash off. */
  url: "https://acegroupsales.com",
  name: "Ace Group — Authorized Channel Partner",
  phoneDisplay: "+91 87997 56026",
  phoneIntl: "918799756026",           // used for tel: and wa.me links
  /* Email notifications: paste your FormSubmit address to receive
     every enquiry by email, e.g. "https://formsubmit.co/ajax/you@example.com".
     Leave "" and the button falls back to WhatsApp so no lead is lost. */
  formEndpoint: "",
  /* Tracking IDs — placeholders; paste real IDs to activate.
     Events fire only after the visitor consents (cookie banner). */
  gaId: "",                            // e.g. "G-XXXXXXXXXX"
  metaPixelId: "",                     // e.g. "123456789012345"
  heroImage: "/assets/img-001.webp",
  ogImage: "/assets/og-image.jpg"
};

/* ================================================================
   PROJECTS — one entry per project. To change a photo, replace the
   file in assets/ or edit "img". Each project's "gallery" lists its
   real photos (sourced from the developer's website and property
   portals) shown on the project page — swap the files in assets/
   to replace them. "price" stays "Price on request"
   until you have a verified figure to publish.
   ================================================================ */
const PROJECTS = [
  { slug:"ace-verde", name:"ACE Verde", type:"Residential", corridor:"yamuna-expressway",
    corridorLabel:"Yamuna Expressway", location:"Sector 22A, Yamuna Expressway", config:"3 & 3.5 BHK flats",
    status:"", rera:"UPRERAPRJ913692/03/2025", featured:true, img:"/assets/img-003.webp",
    gallery:[["/assets/img-004.webp","ACE Verde towers and landscaped greens — artist's impression (official image)"],["/assets/img-005.webp","ACE Verde pool and club greens (official image)"]],
    desc:"A new Yamuna Expressway address in neo-classical architecture — formal facades and landscaped greens in Sector 22A, with a fine-dine restaurant, pool, padel court and amphitheatre.",
    highlights:["Neo-classical architecture","Fine-dine restaurant & banquet","Pool, padel court & skating rink"] },
  { slug:"ace-terra", name:"ACE Terra", type:"Residential", corridor:"yamuna-expressway",
    corridorLabel:"Yamuna Expressway", location:"Sector 22D, Yamuna Expressway", config:"3 & 4 BHK apartments",
    status:"", rera:"UPRERAPRJ683816", featured:true, img:"/assets/img-006.webp",
    gallery:[["/assets/img-007.webp","ACE Terra residence interior (official image)"]],
    desc:"Luxury 3 & 4 BHK apartments with distinctive landscaping, green spaces and water features, anchored by the Club Spade clubhouse in Sector 22D.",
    highlights:["Club Spade clubhouse","Spacious decks","Green spaces & water features"] },
  { slug:"ace-acreville", name:"ACE Acreville", type:"Residential", corridor:"yamuna-expressway",
    corridorLabel:"Yamuna Expressway", location:"Sector 22A, Yamuna Expressway", config:"Residential plots — 100-acre township",
    status:"", rera:"UPRERAPRJ248777/03/2025", featured:false, img:"/assets/img-008.webp",
    gallery:[["/assets/img-009.webp","ACE Acreville township entrance (official image)"]],
    desc:"A 100-acre plotted township in Sector 22A on the Yamuna Expressway — build your own home amid parks, a fountain, a temple area and an amphitheatre. Plot sizes and availability on enquiry.",
    highlights:["100-acre plotted township","Club with rooftop restaurant & pool","Parks, fountain & temple area"] },
  { slug:"ace-estate", name:"ACE Estate", type:"Residential", corridor:"yamuna-expressway",
    corridorLabel:"Yamuna Expressway", location:"Yamuna Expressway", config:"Integrated township",
    status:"", rera:"UPRERAPRJ442226", featured:false, img:"/assets/img-010.webp",
    gallery:[],
    desc:"A one-of-a-kind integrated township coming up on the Yamuna Expressway. Detailed plans are awaited from the developer — register your interest early.",
    highlights:["Integrated township format","Yamuna Expressway growth corridor","Details awaited — register interest"] },
  { slug:"ace-hanei", name:"ACE Han'ei", type:"Residential", corridor:"greater-noida-west",
    corridorLabel:"Greater Noida West", location:"Sector 12, Greater Noida West", config:"3 & 4 BHK ultra-luxury apartments",
    status:"New launch", rera:"UPRERAPRJ677887", featured:true, img:"/assets/img-011.webp",
    gallery:[],
    desc:"Upcoming ultra-luxury residences in Sector 12 with triple-height lobbies, high-speed elevators, massive decks and wrap-around balconies — Italian marble, modular kitchens and wardrobes fitted in.",
    highlights:["Triple-height lobbies","Massive decks & wrap-around balconies","Clubhouse, gym, yoga & banquets"] },
  { slug:"ace-starlit", name:"ACE Starlit", type:"Residential", corridor:"noida-expressway",
    corridorLabel:"Noida Expressway", location:"Sector 152, Noida", config:"2 & 3 BHK apartments",
    status:"", rera:"UPRERAPRJ677294", featured:false, img:"/assets/img-012.webp",
    gallery:[["/assets/img-013.webp","ACE Starlit residences (official image)"],["/assets/img-014.webp","ACE Starlit gallery view (official image)"]],
    desc:"Residences in Sector 152 beside the proposed Noida Authority golf course and the upcoming international cricket stadium, near the Sector-148 metro — with Italian marble flooring and modular kitchens.",
    highlights:["Next to the proposed golf course","Near the upcoming cricket stadium","Close to Sector-148 metro"] },
  { slug:"ace-divino", name:"ACE Divino", type:"Residential", corridor:"greater-noida-west",
    corridorLabel:"Greater Noida West", location:"Greater Noida West", config:"2, 3 & 4 BHK apartments, garden floors & penthouses",
    status:"Delivered", rera:"UPRERAPRJ6734", featured:false, img:"/assets/img-015.webp",
    gallery:[["/assets/img-016.webp","ACE Divino towers and pool (official image)"],["/assets/img-017.webp","ACE Divino residences (official image)"]],
    desc:"A delivered landmark in Noida Extension — 1,572 flats across 11 towers, with a kids' activity area, snooker room and swimming pool.",
    highlights:["Delivered — ready to move","1,572 flats across 11 towers","Pool, snooker room & kids' activity area"] },
  { slug:"ace-parkway", name:"ACE Parkway", type:"Residential", corridor:"noida-expressway",
    corridorLabel:"Noida Expressway", location:"Sector 150, Noida", config:"2, 3 & 4 BHK apartments & penthouses",
    status:"Delivered", rera:"UPRERAPRJ4514", featured:true, img:"/assets/img-018.webp",
    gallery:[["/assets/img-019.webp","ACE Parkway residences (official image)"]],
    desc:"Delivered ultra-luxury residences and penthouses in low-density Sector 150, with Club Spade lifestyle spaces — basketball, pool, coffee lounge, gym and restaurant.",
    highlights:["Delivered — ready to move","Club Spade lifestyle spaces","Low-density Sector 150 greens"] },
  { slug:"ace-palm-floors", name:"ACE Palm Floors", type:"Residential", corridor:"gurugram",
    corridorLabel:"Gurugram", location:"Sector 89 & 90, Gurugram", config:"Luxury independent floors & plots",
    status:"Delivered", rera:"", featured:false, img:"/assets/img-020.webp",
    gallery:[["/assets/img-021.webp","ACE Palm Floors residences (official image)"]],
    desc:"Delivered low-rise luxury floors amid nature in New Gurugram's Sectors 89 & 90, with a clubhouse, amphitheatre and fountain.",
    highlights:["Delivered — ready to move","Low-rise floors amid nature","Clubhouse, amphitheatre & fountain"] },
  { slug:"ace-golfshire", name:"ACE Golfshire", type:"Residential", corridor:"noida-expressway",
    corridorLabel:"Noida Expressway", location:"Sector 150, Noida", config:"2 & 3 BHK apartments & penthouses",
    status:"Delivered", rera:"", featured:false, img:"/assets/img-022.webp",
    gallery:[["/assets/img-023.webp","ACE Golfshire clubhouse pool (official gallery photo)"]],
    desc:"Delivered resort-theme residences with a world-class clubhouse and low-density living in Sector 150 — the sample flat was designed by Gauri Khan.",
    highlights:["Delivered — ready to move","Resort-theme, low-density living","Sample flat designed by Gauri Khan"] },
  { slug:"ace-platinum", name:"ACE Platinum", type:"Residential", corridor:"greater-noida-west",
    corridorLabel:"Greater Noida West", location:"Sector Zeta 1, Greater Noida", config:"1, 2, 3 & 4 BHK apartments",
    status:"Delivered", rera:"", featured:false, img:"/assets/img-024.webp",
    gallery:[],
    desc:"A delivered residential complex of 1,276 homes across 7 towers in Sector Zeta 1, connected via the Aqua Metro line, NH-24 and the Noida & Yamuna Expressways.",
    highlights:["Delivered — ready to move","1,276 homes across 7 towers","Aqua Metro & expressway connectivity"] },
  { slug:"ace-city", name:"ACE City", type:"Residential", corridor:"greater-noida-west",
    corridorLabel:"Greater Noida West", location:"Greater Noida West", config:"2 & 3 BHK apartments",
    status:"Delivered", rera:"", featured:false, img:"/assets/img-025.webp",
    gallery:[],
    desc:"Delivered 2 & 3 BHK apartments — 2,532 flats with a club, commercial complex, waterbody and fountain, near the proposed metro.",
    highlights:["Delivered — ready to move","2,532 flats","Club, waterbody & commercial complex"] },
  { slug:"ace-aspire", name:"ACE Aspire", type:"Residential", corridor:"greater-noida-west",
    corridorLabel:"Greater Noida West", location:"Greater Noida West", config:"2 & 3 BHK apartments",
    status:"Delivered", rera:"", featured:false, img:"/assets/img-026.webp",
    gallery:[],
    desc:"Delivered residences with a jogging track, skating rink and gazebo, close to schools, hospitals and a commercial complex.",
    highlights:["Delivered — ready to move","Jogging track & skating rink","Near schools & hospitals"] },
  { slug:"ace-medalleo", name:"ACE–Mahagun Medalleo", type:"Residential", corridor:"noida-expressway",
    corridorLabel:"Noida Expressway", location:"Sector 107, Noida", config:"Luxury residential enclave",
    status:"", rera:"UPRERAPRJ125561", featured:false, img:"/assets/img-027.webp",
    gallery:[["/assets/img-028.webp","ACE–Mahagun Medalleo residences (official image)"]],
    desc:"A distinct residential enclave in Sector 107 with forest trails, two exclusive clubhouses and IGBC Gold certification — a joint-venture project taken forward by Ace Group with Mahagun.",
    highlights:["Forest trails within the enclave","Two exclusive clubhouses","IGBC Gold certified"] },
  { slug:"ace-arte", name:"ACE Arte", type:"Residential", corridor:"noida-expressway",
    corridorLabel:"Noida Expressway", location:"Sector 150, Sports City, Noida", config:"3 & 4 BHK luxury residences",
    status:"New launch", rera:"UPRERAPRJ528653/07/2026", featured:true, img:"/assets/img-029.webp",
    logo:"/assets/img-030.webp",
    gallery:[["/assets/img-031.webp","ACE Arte residences and pool deck (official image)"]],
    desc:"Neo-classical residences designed by Ar. Hafeez Contractor — a ~15-acre, 3-side-open development in Sports City, Sector 150, with ~9 acres of landscaping, ~80% open spaces and a ~50,000 sq ft clubhouse across 784 residences.",
    highlights:["Designed by Ar. Hafeez Contractor","~80% open spaces, ~9 acres landscaped","~50,000 sq ft clubhouse"] },
  { slug:"ace-studio", name:"ACE Studio", type:"Commercial", corridor:"noida-expressway",
    corridorLabel:"Noida Expressway", location:"Sector 126, Noida", config:"Corporate office spaces (lease)",
    status:"Delivered", rera:"", featured:false, img:"/assets/img-032.webp",
    gallery:[],
    desc:"A delivered commercial landmark on the Noida–Greater Noida Expressway near Amity University — corporate office spaces on lease, and home to Ace Group's own corporate office.",
    highlights:["Delivered commercial landmark","Expressway frontage near Amity University","Ace Group's corporate office"] },
  { slug:"ace-city-square", name:"City Square", type:"Commercial", corridor:"greater-noida-west",
    corridorLabel:"Greater Noida West", location:"Ace City, Greater Noida West", config:"Premium retail spaces",
    status:"Delivered", rera:"", featured:false, img:"/assets/img-033.webp",
    gallery:[],
    desc:"An exclusive retail destination with premium brands, inside the delivered ACE City township in Greater Noida West.",
    highlights:["Delivered retail destination","Inside the ACE City township","Premium brand mix"] },
  { slug:"ace-medley-avenue", name:"ACE Medley Avenue", type:"Commercial", corridor:"noida-expressway",
    corridorLabel:"Noida Expressway", location:"Sector 150, Noida", config:"High-street retail",
    status:"", rera:"UPRERAPRJ348653", featured:false, img:"/assets/img-034.webp",
    gallery:[["/assets/img-035.webp","ACE Medley Avenue retail frontage (official image)"]],
    desc:"A premium high-street retail avenue serving the delivered residences and growing catchment of Sector 150.",
    highlights:["High-street retail format","Sector 150 residential catchment","Retail & dining frontage"] },
  { slug:"ace-153", name:"ACE153", type:"Commercial", corridor:"noida-expressway",
    corridorLabel:"Noida Expressway", location:"Sector 153, Noida", config:"Commercial — offices & retail",
    status:"", rera:"UPRERAPRJ423807", featured:true, img:"/assets/img-036.webp",
    gallery:[],
    desc:"An IGBC Gold certified commercial project spread over 20,000+ sq mts in Sector 153, designed in meticulous detail for offices and retail.",
    highlights:["IGBC Gold certified","20,000+ sq mts of commercial space","Sector 153, Noida Expressway"] },
  { slug:"ace-yxp", name:"ACE YXP", type:"Commercial", corridor:"yamuna-expressway",
    corridorLabel:"Yamuna Expressway", location:"Yamuna Expressway", config:"Commercial lifestyle centre",
    status:"", rera:"UPRERAPRJ397607", featured:false, img:"/assets/img-037.webp",
    gallery:[["/assets/img-038.webp","ACE YXP lifestyle centre (official image)"]],
    desc:"NCR's first-of-its-kind exclusive lifestyle centre on the Yamuna Expressway — retail, dining and leisure for the corridor's new townships.",
    highlights:["NCR's first exclusive lifestyle centre","Yamuna Expressway frontage","Early-entry growth corridor"] },
  { slug:"ace-hive", name:"ACE Hive", type:"Commercial", corridor:"yamuna-expressway",
    corridorLabel:"Yamuna Expressway", location:"Sector 22A, Yamuna Expressway", config:"Fully-furnished business suites",
    status:"New launch", rera:"UPRERAPRJ939595/03/2025", featured:false, img:"/assets/img-039.webp",
    gallery:[["/assets/img-040.webp","ACE Hive suite interiors (official image)"]],
    desc:"Hospitality-led, fully-furnished business suites in Sector 22A, professionally managed — with a rooftop pool and deck, grand arrival lobby, curated suites and coffee kiosks.",
    highlights:["Fully-furnished, professionally managed suites","Rooftop pool & deck","Grand arrival lobby"] },
  { slug:"ace-edit", name:"ACE Edit", type:"Commercial", corridor:"yamuna-expressway",
    corridorLabel:"Yamuna Expressway", location:"Sector 22D, Yamuna Expressway", config:"Studio apartments (commercial)",
    status:"New launch", rera:"UPRERAPRJ467686/09/2025", featured:false, img:"/assets/img-041.webp",
    gallery:[],
    desc:"A compact commercial studio project in Sector 22D — around 15 studio apartments on ~1.40 acres, currently at teaser stage.",
    highlights:["~15 studio apartments","~1.40-acre development","Sector 22D, Yamuna Expressway"] },
  { slug:"ace-capitol", name:"ACE Capitol", type:"Commercial", corridor:"noida-expressway",
    corridorLabel:"Noida Expressway", location:"Sector 132, Noida", config:"Commercial office spaces (lease)",
    status:"Ready / Delivered", rera:"", featured:false, img:"/assets/img-042.webp",
    gallery:[["/assets/img-043.webp","ACE Capitol office towers (official image)"],["/assets/img-044.webp","ACE Capitol on the Noida Expressway corridor (official image)"],["/assets/img-045.webp","ACE Capitol office towers above the expressway greens (official image)"]],
    desc:"IGBC Gold certified commercial offices in Sector 132 with app-based smart building management — ready-to-fit-out spaces on lease for offices and retail.",
    highlights:["IGBC Gold certified","App-smart building management","Ready-to-fit-out spaces on lease"] }
];

/* ================================================================
   PROJECT PAGE DETAILS — the Eldeco-style project pages are built
   from this block. "plans" drives the floor-plan cards and price
   list (sizes & prices stay "On request" until you publish real
   ones); "amenities" photos are representative lifestyle images
   in assets/ — swap the file to change a card's photo.
   ================================================================ */
const AMENITY_IMGS = {
  pool:      { img: "/assets/img-046.webp",      label: "Swimming pool & deck" },
  clubhouse: { img: "/assets/img-047.webp", label: "Clubhouse & lounge" },
  gym:       { img: "/assets/img-048.webp",       label: "Fitness centre" },
  garden:    { img: "/assets/img-049.webp",    label: "Landscaped gardens" },
  sports:    { img: "/assets/img-050.webp",    label: "Sports courts" },
  golf:      { img: "/assets/img-051.webp",      label: "Golf greens" }
};
const DETAILS = {
  "ace-verde": {
    tagline: "Neo-classical 3 & 3.5 BHK residences with a fine-dine restaurant, padel court and amphitheatre in Sector 22A.",
    plans: ["3 BHK", "3.5 BHK"],
    amenities: [["pool", "Swimming pool", "A resort-style pool at the heart of the landscaped greens."], ["clubhouse", "Banquet & fine-dine restaurant", "A fine-dine restaurant and banquet for celebrations within the project."], ["sports", "Padel court & skating rink", "Padel, skating and play areas woven into the plan."], ["garden", "Amphitheatre & cabana greens", "An amphitheatre, cabanas and balcony views over formal gardens."]]
  },
  "ace-terra": {
    tagline: "3 & 4 BHK luxury apartments with Club Spade, green spaces and water features in Sector 22D.",
    plans: ["3 BHK", "4 BHK"],
    amenities: [["clubhouse", "Club Spade", "The project's signature clubhouse for social and leisure time."], ["garden", "Green spaces & water features", "Distinctive landscaping with water features throughout."], ["pool", "Pool & leisure deck", "Resort-style downtime after the day."], ["sports", "Spacious decks & play", "Generous decks and lifestyle amenities across the project."]]
  },
  "ace-acreville": {
    tagline: "Your own plot in a 100-acre township on the airport-led Yamuna Expressway corridor.",
    plans: ["Residential plots"],
    amenities: [["garden", "Parks & fountain", "Landscaped parks and a fountain across the township."], ["clubhouse", "Club & rooftop restaurant", "A club elevation with a rooftop multi-cuisine restaurant."], ["pool", "Swimming pool", "A pool for plot owners and their families."], ["sports", "Amphitheatre, play area & temple", "Shared recreation, a play area and a temple area in the township."]]
  },
  "ace-estate": {
    tagline: "A one-of-a-kind integrated township on the Yamuna Expressway — details awaited from the developer.",
    plans: ["Integrated township"],
    amenities: [["garden", "Township greens", "Open, green planning across the integrated township (details awaited)."], ["clubhouse", "Community spaces", "Shared social infrastructure planned for residents (details awaited)."], ["pool", "Leisure spaces", "Lifestyle amenities to be announced with the detailed plan."], ["sports", "Play & activity areas", "Recreation woven into the township layout (details awaited)."]]
  },
  "ace-hanei": {
    tagline: "Ultra-luxury residences with triple-height lobbies, massive decks and wrap-around balconies.",
    plans: ["3 BHK", "4 BHK"],
    amenities: [["clubhouse", "Clubhouse & private dining", "Clubhouse living with banquets, private dining and a bar & cafe."], ["gym", "Gym, yoga & pilates", "Dedicated fitness, yoga and pilates spaces."], ["garden", "Decks & wrap-around balconies", "Massive decks with Italian marble, modular kitchens and wardrobes inside."], ["sports", "Cycling track", "A cycling track alongside the leisure spread."]]
  },
  "ace-starlit": {
    tagline: "Residences beside the proposed golf course and upcoming cricket stadium in Sector 152.",
    plans: ["2 BHK", "3 BHK"],
    amenities: [["garden", "Golf-course neighbourhood", "Next to the proposed Noida Authority golf course."], ["clubhouse", "Fitted interiors", "Italian marble flooring, modular kitchen and wardrobes as standard."], ["pool", "Pool & leisure deck", "Unwind above the expressway rush."], ["gym", "Fitness centre", "A workout floor inside the project."]]
  },
  "ace-divino": {
    tagline: "A delivered landmark — 1,572 flats across 11 towers in Noida Extension.",
    plans: ["2 BHK", "3 BHK", "4 BHK", "Penthouse"],
    amenities: [["pool", "Swimming pool", "A residents' pool within the delivered towers."], ["sports", "Kids' activity area", "Dedicated activity spaces for children."], ["clubhouse", "Snooker room", "Indoor games and social spaces for residents."], ["garden", "Garden floors", "Garden floors and green pockets across the project."]]
  },
  "ace-parkway": {
    tagline: "Delivered ultra-luxury residences with Club Spade lifestyle spaces in Sector 150.",
    plans: ["2 BHK", "3 BHK", "4 BHK", "Penthouse"],
    amenities: [["clubhouse", "Club Spade", "Club Spade lifestyle spaces at the heart of the community."], ["pool", "Swimming pool", "Resort-style leisure for evenings and weekends."], ["sports", "Basketball court", "Courts and play spaces within the project."], ["gym", "Gym, restaurant & coffee lounge", "Fitness, dining and a coffee lounge under one roof."]]
  },
  "ace-palm-floors": {
    tagline: "Delivered low-rise luxury floors amid nature in New Gurugram's Sectors 89 & 90.",
    plans: ["Independent floors", "Plots"],
    amenities: [["clubhouse", "Clubhouse", "A residents' clubhouse for the low-rise community."], ["garden", "Amphitheatre & fountain", "Landscaped facades with an amphitheatre and fountain."], ["sports", "Open greens", "Nature and open spaces all around the floors."]]
  },
  "ace-golfshire": {
    tagline: "Delivered resort-theme residences with a world-class clubhouse in low-density Sector 150.",
    plans: ["2 BHK", "3 BHK", "Penthouse"],
    amenities: [["golf", "Golf-course setting", "Resort-theme living oriented to the Sector 150 greens."], ["clubhouse", "World-class clubhouse", "Clubhouse with salon, library & card room and a departmental store."], ["pool", "Pool & leisure deck", "Leisure spaces facing the greens."], ["garden", "Low-density living", "Sector 150's open, low-density planning all around."]]
  },
  "ace-platinum": {
    tagline: "A delivered complex of 1,276 homes across 7 towers in Sector Zeta 1, Greater Noida.",
    plans: ["1 BHK", "2 BHK", "3 BHK", "4 BHK"],
    amenities: [["pool", "Swimming pool", "A residents' pool within the complex."], ["sports", "Amphitheatre & play area", "An amphitheatre and children's play area."], ["clubhouse", "24-hr security with intercom", "Round-the-clock security and covered parking."], ["garden", "Rainwater harvesting", "Green practices built into the delivered complex."]]
  },
  "ace-city": {
    tagline: "Delivered 2 & 3 BHK apartments — 2,532 flats with a club and waterbody in Greater Noida West.",
    plans: ["2 BHK", "3 BHK"],
    amenities: [["clubhouse", "Club & commercial complex", "A club and an in-campus commercial complex."], ["pool", "Swimming pool", "Leisure close to home for all 2,532 families."], ["garden", "Waterbody & fountain", "A waterbody and fountain at the township's heart."], ["sports", "Kids' play area", "Play spaces woven through the sectors."]]
  },
  "ace-aspire": {
    tagline: "Delivered residences with a jogging track, skating rink and gazebo in Greater Noida West.",
    plans: ["2 BHK", "3 BHK"],
    amenities: [["sports", "Jogging track & skating rink", "Active mornings on the track and rink."], ["garden", "Gazebo & greens", "A gazebo and green corners across the project."], ["clubhouse", "Kids' play area", "Play areas for children within the campus."], ["pool", "Everyday conveniences", "Schools, hospitals and a commercial complex close by."]]
  },
  "ace-medalleo": {
    tagline: "A forest-trail enclave with two clubhouses and IGBC Gold certification in Sector 107.",
    plans: ["Luxury residences"],
    amenities: [["garden", "Forest trails", "Forest trails woven through the enclave."], ["pool", "All-weather swimming pool", "Swim through the year, whatever the weather."], ["sports", "Sports arena", "A dedicated sports arena for residents."], ["clubhouse", "Two clubhouses & grand arrival lobby", "Two exclusive clubhouses behind a grand arrival experience."]]
  },
  "ace-arte": {
    tagline: "Neo-classical residences by Ar. Hafeez Contractor — ~80% open spaces in Sports City, Sector 150.",
    plans: ["3 BHK", "4 BHK"],
    amenities: [["clubhouse", "~50,000 sq ft clubhouse", "One of the largest clubhouses in Sector 150, with a banquet & party lawn."], ["gym", "Gymnasium", "A full fitness floor inside the clubhouse."], ["sports", "Sports courts & indoor games", "Courts and indoor games for every age."], ["garden", "Kids' play zone & yoga lawns", "Play zones, yoga & meditation spaces across ~9 landscaped acres."]]
  },
  "ace-studio": {
    tagline: "Delivered corporate offices on lease on the Noida–Greater Noida Expressway, near Amity University.",
    plans: ["Office spaces"],
    amenities: [["clubhouse", "Corporate workspaces", "Formal and informal meeting settings for teams and clients."], ["garden", "Expressway frontage", "A high-visibility frontage on the expressway corridor."], ["gym", "Workplace wellness", "Everyday facilities for office occupiers."], ["sports", "Breakout spaces", "Open-air breakout areas across the development."]]
  },
  "ace-city-square": {
    tagline: "An exclusive retail destination with premium brands, inside ACE City in Greater Noida West.",
    plans: ["Retail spaces"],
    amenities: [["garden", "Retail frontage", "Street-facing retail for maximum footfall."], ["clubhouse", "Premium brand mix", "Curated brands serving the ACE City catchment."], ["pool", "Township catchment", "Thousands of delivered homes within walking distance."], ["sports", "Family footfall", "A young, active residential catchment all around."]]
  },
  "ace-medley-avenue": {
    tagline: "A premium high-street retail avenue for the Sector 150 catchment.",
    plans: ["Retail spaces", "Dining spaces"],
    amenities: [["garden", "High-street frontage", "Street-style retail frontage for maximum footfall."], ["clubhouse", "Dining & social spaces", "Cafés and restaurants at the neighbourhood's centre."], ["pool", "Leisure catchment", "Serves the delivered residences of Sector 150."], ["sports", "Active neighbourhood", "A young, active residential catchment all around."]]
  },
  "ace-153": {
    tagline: "IGBC Gold certified commercial space over 20,000+ sq mts in Sector 153.",
    plans: ["Office spaces", "Retail spaces"],
    amenities: [["clubhouse", "Business spaces", "Formal and informal meeting settings for teams."], ["garden", "Landscaped frontage", "A green, high-visibility expressway frontage."], ["gym", "Workplace wellness", "Fitness facilities for office occupiers."], ["sports", "Breakout greens", "Open-air breakout spaces across the development."]]
  },
  "ace-yxp": {
    tagline: "NCR's first-of-its-kind exclusive lifestyle centre on the Yamuna Expressway.",
    plans: ["Retail & lifestyle spaces"],
    amenities: [["garden", "Expressway frontage", "Visibility from the Yamuna Expressway corridor."], ["clubhouse", "Lifestyle centre", "Retail, dining and leisure formats under one destination."], ["sports", "Township catchment", "New residential townships rising along the corridor."], ["pool", "Early-entry advantage", "Early positioning in a fast-appreciating corridor."]]
  },
  "ace-hive": {
    tagline: "Hospitality-led, fully-furnished business suites — professionally managed, in Sector 22A.",
    plans: ["Business suites"],
    amenities: [["pool", "Rooftop pool & deck", "A rooftop pool and deck above the expressway."], ["clubhouse", "Grand arrival lobby", "A hospitality-style arrival experience."], ["gym", "Curated suites & coffee kiosks", "Professionally managed suites with coffee kiosks."], ["garden", "Terrace sitting", "Terrace sitting spaces for work and downtime."]]
  },
  "ace-edit": {
    tagline: "A compact commercial studio project — ~15 studio apartments on ~1.40 acres in Sector 22D.",
    plans: ["Studio apartments"],
    amenities: [["clubhouse", "Studio living", "Compact, contemporary studio formats."], ["garden", "Corridor frontage", "A Yamuna Expressway address with room to grow."], ["gym", "Occupier amenities", "Everyday facilities for businesses and visitors."], ["sports", "Growing catchment", "Townships and traffic building along the corridor."]]
  },
  "ace-capitol": {
    tagline: "IGBC Gold certified offices with app-smart building management in Sector 132 — ready on lease.",
    plans: ["Office spaces", "Retail spaces"],
    amenities: [["clubhouse", "Community spaces", "Shared community and meeting spaces for occupiers."], ["garden", "Landscaped frontage", "A green, high-visibility frontage on the Noida Expressway."], ["gym", "Smart building technology", "App-based building management and post-COVID measures."], ["sports", "Security & access", "Managed security across the development."]]
  }
};
/* Location advantages per corridor — qualitative only; add verified
   drive times here once you have them from official sources. */
const LOCATION_POINTS = {
  "noida-expressway": [
    ["Expressway connectivity", ["Direct access to the Noida–Greater Noida Expressway", "Fast road links towards Delhi and Greater Noida"]],
    ["The Sector 150–153 belt", ["Low-density residential sectors with wide greens", "Golf greens and social infrastructure nearby"]],
    ["Work & business", ["Expressway office districts within easy reach", "Grade-A commercial addresses along the corridor"]],
    ["Everyday living", ["Schools, hospitals and retail across the expressway sectors", "Metro corridor serving the expressway belt"]]
  ],
  "yamuna-expressway": [
    ["The airport-led corridor", ["On the Yamuna Expressway growth corridor", "Development momentum around the upcoming Noida International Airport at Jewar"]],
    ["Expressway connectivity", ["Wide, high-speed expressway towards Greater Noida and Delhi", "Direct links to the Noida Expressway network"]],
    ["Growth & investment", ["Among the region’s fastest-growing corridors", "New townships and social infrastructure coming up"]],
    ["Open, green setting", ["Low-density planning with wide open landscapes", "Weekend getaways towards Agra and Mathura on the same expressway"]]
  ],
  "greater-noida-west": [
    ["Established neighbourhoods", ["Family residential sectors of Noida Extension", "Schools, markets and hospitals close by"]],
    ["Connectivity", ["Road links to Noida, Greater Noida and Ghaziabad", "Metro expansion planned for the corridor"]],
    ["Everyday living", ["Daily-need retail and high-street markets in the sectors", "Parks and community spaces across the neighbourhood"]],
    ["Value corridor", ["Greater Noida West’s established value-for-money housing belt", "Ready social infrastructure around the sectors"]]
  ],
  "gurugram": [
    ["New Gurugram sectors", ["Sector 89 & 90, New Gurugram", "Planned sectors with wide internal roads"]],
    ["Low-rise living", ["Independent floors instead of high-rise towers", "Landscaped facades, amphitheatre and fountain within"]],
    ["Everyday living", ["Sector markets and daily-need retail nearby", "Schools and hospitals across New Gurugram"]],
    ["Nature around", ["Green, low-density surroundings", "A quieter residential setting within the city"]]
  ]
};
/* ====================== end of editable data ====================== */

const $  = (s, el) => (el || document).querySelector(s);
const $$ = (s, el) => Array.from((el || document).querySelectorAll(s));
const esc = s => String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[c]));
const projectBySlug = slug => PROJECTS.find(p => p.slug === slug);
const waLink = text => "https://wa.me/" + SITE.phoneIntl + "?text=" + encodeURIComponent(text);

/* ---------- Toast notifications ---------- */
function toast(msg, kind) {
  const box = $("#toasts");
  const t = document.createElement("div");
  t.className = "toast" + (kind ? " " + kind : "");
  t.setAttribute("role", "status");
  t.innerHTML = "<span>" + esc(msg) + "</span>";
  const x = document.createElement("button");
  x.type = "button"; x.setAttribute("aria-label", "Dismiss notification"); x.textContent = "×";
  x.addEventListener("click", () => t.remove());
  t.appendChild(x);
  box.appendChild(t);
  setTimeout(() => { if (t.isConnected) t.remove(); }, 6000);
}

/* ---------- Consent + conversion tracking ----------
   No cookies are written and no tracker loads until the visitor
   consents. Set SITE.gaId / SITE.metaPixelId to activate. */
const consent = { essential: true, analytics: false, marketing: false, decided: false };
let gaLoaded = false, pixelLoaded = false;

function track(event, params) {
  const payload = Object.assign({ event: event, page: location.hash || "/" }, params || {});
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);
  if (consent.analytics && typeof window.gtag === "function") window.gtag("event", event, params || {});
  if (consent.marketing && typeof window.fbq === "function") window.fbq("trackCustom", event, params || {});
}
function loadAnalytics() {
  if (gaLoaded || !SITE.gaId) return;
  gaLoaded = true;
  const s = document.createElement("script");
  s.async = true; s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(SITE.gaId);
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
  window.gtag("js", new Date());
  window.gtag("config", SITE.gaId, { anonymize_ip: true });
}
function loadPixel() {
  if (pixelLoaded || !SITE.metaPixelId) return;
  pixelLoaded = true;
  /* Meta Pixel base code (loads only after marketing consent) */
  const f = window, b = document, e = "script", v = "https://connect.facebook.net/en_US/fbevents.js";
  if (f.fbq) return;
  const n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
  if (!f._fbq) f._fbq = n;
  n.push = n; n.loaded = true; n.version = "2.0"; n.queue = [];
  const t = b.createElement(e); t.async = true; t.src = v;
  b.getElementsByTagName(e)[0].parentNode.insertBefore(t, null);
  window.fbq("init", SITE.metaPixelId);
  window.fbq("track", "PageView");
}
function applyConsent() {
  if (consent.analytics) loadAnalytics();
  if (consent.marketing) loadPixel();
}

/* ---------- Project cards ---------- */
function cardHTML(p, eager) {
  const locLine = (p.location === p.corridorLabel || p.location.endsWith(p.corridorLabel))
    ? p.location : p.location + " · " + p.corridorLabel;
  return '<article class="card">' +
    '<a class="card-media" href="/projects/' + p.slug + '.html' + '" aria-label="View ' + esc(p.name) + '">' +
      '<img src="' + p.img + '" alt="' + esc(p.name) + " — " + esc(p.location) + '" ' +
        (eager ? 'fetchpriority="high"' : 'loading="lazy" decoding="async"') + ' width="960" height="640" />' +
      '<span class="badge">' + esc(p.type) + "</span>" +
      (p.status ? '<span class="badge done" style="left:auto; right:12px">' + esc(p.status) + "</span>" : "") +
    "</a>" +
    '<div class="card-body">' +
      '<h3><a href="/projects/' + p.slug + '.html' + '">' + esc(p.name) + "</a></h3>" +
      '<p class="card-loc"><span aria-hidden="true">📍</span>' + esc(locLine) + "</p>" +
      '<p class="card-conf">' + esc(p.config) + "</p>" +
      '<p class="card-desc">' + esc(p.desc) + "</p>" +
      '<div class="card-foot"><span class="price-note">Price on request</span>' +
      '<a class="btn small ghost" href="/projects/' + p.slug + '.html' + '">Details →</a></div>' +
    "</div></article>";
}
function skeletonHTML(n) {
  let out = "";
  for (let i = 0; i < n; i++)
    out += '<div class="skel" aria-hidden="true"><div class="sk-img shimmer"></div>' +
           '<div class="sk-line shimmer"></div><div class="sk-line short shimmer"></div><div class="sk-line shimmer"></div></div>';
  return out;
}
function renderFeatured() {
  const grid = $("#featuredGrid");
  grid.innerHTML = skeletonHTML(3);
  setTimeout(() => {
    grid.innerHTML = PROJECTS.filter(p => p.featured).map(p => cardHTML(p, true)).join("");
  }, 350);
}

/* ---------- Project listing: filters + search ---------- */
const filters = { type: "all", corridor: "all", q: "" };
function applyFilters(animate) {
  const grid = $("#projectGrid"), empty = $("#projectEmpty");
  const render = () => {
    const q = filters.q.trim().toLowerCase();
    const list = PROJECTS.filter(p =>
      (filters.type === "all" || p.type === filters.type) &&
      (filters.corridor === "all" || p.corridor === filters.corridor) &&
      (!q || (p.name + " " + p.location + " " + p.config + " " + p.corridorLabel + " " + p.type).toLowerCase().includes(q))
    );
    grid.innerHTML = list.map(p => cardHTML(p, false)).join("");
    empty.classList.toggle("hidden", list.length > 0);
    grid.classList.toggle("hidden", list.length === 0);
    $("#resultCount").textContent = list.length === PROJECTS.length
      ? "Showing all " + list.length + " projects"
      : "Showing " + list.length + " of " + PROJECTS.length + " projects";
  };
  if (animate) { grid.innerHTML = skeletonHTML(3); empty.classList.add("hidden"); setTimeout(render, 300); }
  else render();
}
function setChipGroup(containerSel, attr, value) {
  $$(containerSel + " .chip").forEach(c => c.setAttribute("aria-pressed", String(c.dataset[attr] === value)));
}
function resetFilters() {
  filters.type = "all"; filters.corridor = "all"; filters.q = "";
  $("#projectSearch").value = "";
  setChipGroup("#typeFilters", "type", "all");
  setChipGroup("#corridorFilters", "corridor", "all");
  applyFilters(true);
  toast("Filters cleared — showing all projects.", "ok");
}

"use strict";
/* ---------- Project detail ---------- */
function iconFor(text) {
  const t = String(text).toLowerCase();
  if (t.includes("golf")) return "⛳";
  if (t.includes("expressway") || t.includes("connectiv") || t.includes("frontage") || t.includes("commute")) return "🛣️";
  if (t.includes("rera") || t.includes("registered")) return "🛡️";
  if (t.includes("completed") || t.includes("ready")) return "🔑";
  if (t.includes("clubhouse")) return "🏛️";
  if (t.includes("pool")) return "🏊";
  if (t.includes("sport") || t.includes("play")) return "🏸";
  if (t.includes("gym") || t.includes("fitness")) return "🏋️";
  if (t.includes("plot") || t.includes("land") || t.includes("township")) return "🗺️";
  if (t.includes("price")) return "🏷️";
  if (t.includes("office") || t.includes("business") || t.includes("commercial") || t.includes("retail") || t.includes("grade-a")) return "🏢";
  if (t.includes("garden") || t.includes("green") || t.includes("landscape") || t.includes("open")) return "🌳";
  if (t.includes("sector") || t.includes("location") || t.includes("noida")) return "📍";
  if (t.includes("bhk") || t.includes("apartment") || t.includes("residence") || t.includes("home") || t.includes("penthouse")) return "🏠";
  return "✦";
}
function ribbonItems(p) {
  const items = [];
  const add = (icon, label, sub) => items.push({ icon: icon, label: label, sub: sub });
  add(iconFor(p.config), p.config, "Configurations");
  add("📍", p.location, "Location");
  add("🛣️", p.corridorLabel, "Corridor");
  add(iconFor(p.type), p.type, "Project type");
  if (p.status) add("🔑", p.status, "Status");
  if (p.rera) add("🛡️", "RERA Registered", p.rera);
  p.highlights.forEach(h => { if (items.length < 8) add(iconFor(h), h, "Highlight"); });
  if (items.length < 8) add("🏷️", "Price on request", "On enquiry");
  return items.slice(0, 8);
}
function planArt() {
  return '<svg width="118" height="88" viewBox="0 0 120 90" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">' +
    '<rect x="6" y="6" width="108" height="78" rx="2"/>' +
    '<path d="M6 46h44M50 6v78M50 46h28v38M78 62h36M84 6v26h30"/>' +
    '<circle cx="99" cy="71" r="6"/></svg>';
}
function gallerySlides(p) {
  const slides = [{ img: p.img, cap: p.name + " — project elevation (representative render)" }];
  (p.gallery || []).forEach(g => slides.push({ img: g[0], cap: g[1] }));
  /* Top up with representative lifestyle images only when a project
     has fewer than three of its own photos in the gallery. */
  if (slides.length < 4) {
    const keys = [];
    if (/golf/i.test(p.name + " " + p.desc)) keys.push("golf");
    ["clubhouse", "pool", "garden", "sports"].forEach(k => keys.push(k));
    keys.forEach(k => {
      if (slides.length < 4 && !slides.some(s => s.img === AMENITY_IMGS[k].img))
        slides.push({ img: AMENITY_IMGS[k].img, cap: AMENITY_IMGS[k].label + " — representative lifestyle image" });
    });
  }
  return slides;
}
function scrollToEl(el) {
  if (!el) return;
  const smooth = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  el.scrollIntoView({ behavior: smooth ? "smooth" : "auto", block: "start" });
}

function renderProjectDetail(p) {
  const d = DETAILS[p.slug] || { tagline: p.desc, plans: [p.config], amenities: [] };
  const related = PROJECTS.filter(x => x.slug !== p.slug && (x.corridor === p.corridor || x.type === p.type)).slice(0, 3);
  const locPoints = LOCATION_POINTS[p.corridor] || [];
  const slides = gallerySlides(p);
  const locImg = /golf/i.test(p.name + " " + p.desc) ? AMENITY_IMGS.golf.img : AMENITY_IMGS.garden.img;
  const lifeImg = p.type === "Commercial" ? AMENITY_IMGS.clubhouse.img
    : (p.slug === "ace-acreville" ? AMENITY_IMGS.garden.img : AMENITY_IMGS.pool.img);
  const facts = [
    ["Project", p.name], ["Type", p.type], ["Location", p.location],
    ["Corridor", p.corridorLabel], ["Configurations", p.config]
  ];
  if (p.status) facts.push(["Status", p.status]);
  if (p.rera) facts.push(["RERA No.", p.rera]);
  facts.push(["Price", "On request"]);

  const badges =
    (p.status ? '<span class="offer-badge green">' + esc(p.status) + " project</span>" : "") +
    '<span class="offer-badge">Price on request</span>' +
    (p.rera ? '<span class="offer-badge ghost">RERA ' + esc(p.rera) + "</span>" : "") +
    '<span class="offer-badge ghost">' + esc(p.type) + "</span>";

  const anchors = [["#overview", "Overview"], ["#amenities", "Amenities"], ["#floor-plans", "Floor Plans"],
                   ["#price-list", "Price List"], ["#gallery", "Gallery"], ["#location", "Location"]];

  $("#projectDetail").innerHTML =
    '<nav class="crumbs" aria-label="Breadcrumb">' +
      '<a href="/">Home</a><span aria-hidden="true">›</span>' +
      '<a href="projects.html">Projects</a><span aria-hidden="true">›</span>' +
      '<a href="/projects.html?corridor=' + p.corridor + '">' + esc(p.corridorLabel) + '</a><span aria-hidden="true">›</span>' +
      '<span aria-current="page">' + esc(p.name) + "</span></nav>" +

    /* ---- Hero ---- */
    '<div class="p-hero"><img src="' + p.img + '" alt="' + esc(p.name) + " — " + esc(p.location) +
      '" fetchpriority="high" width="1920" height="820" />' +
      '<div class="p-hero-in"><div class="offer-badges">' + badges + "</div>" +
      (p.logo ? '<img class="p-logo" src="' + p.logo + '" alt="' + esc(p.name) + ' logo" width="400" height="266" />' : "") +
      "<h1>" + esc(p.name) + "</h1>" +
      '<p class="p-tagline">' + esc(d.tagline) + "</p>" +
      '<p class="p-loc">📍 ' + esc(p.location) + " · " + esc(p.corridorLabel) + "</p></div></div>" +

    /* ---- Sticky anchor nav ---- */
    '<div class="anchor-nav" id="anchorNav"><nav aria-label="On this project page">' +
      anchors.map(a => '<a href="' + a[0] + '">' + a[1] + "</a>").join("") + "</nav>" +
      '<div class="anchor-cta">' +
        '<a class="btn small" href="tel:+91' + SITE.phoneIntl.slice(2) + '" data-track="call_click">☎ ' + SITE.phoneDisplay + "</a>" +
        '<a class="btn small wa" target="_blank" rel="noopener" data-track="whatsapp_click" href="' +
          waLink("Hi, I'm interested in " + p.name + " (" + p.location + "). Please share the price list and availability.") + '">WhatsApp</a>' +
      "</div></div>" +

    /* ---- Highlights ribbon ---- */
    '<div class="ribbon" aria-label="Project highlights">' +
      ribbonItems(p).map(it =>
        '<div class="ribbon-item"><span class="ric" aria-hidden="true">' + it.icon + "</span><b>" +
        esc(it.label) + "</b><span>" + esc(it.sub) + "</span></div>").join("") + "</div>" +

    /* ---- Overview + sticky Express Your Interest ---- */
    '<section class="block sec-anchor" id="overview" style="padding-bottom:10px" aria-labelledby="ov-h">' +
      '<div class="detail-grid" style="margin-top:0"><div>' +
        '<h2 id="ov-h" style="font-size:clamp(1.8rem,3.6vw,2.5rem)">Overview</h2>' +
        '<p class="detail-desc">' + esc(p.desc) + "</p>" +
        '<div class="quick-facts">' +
          '<div class="qf"><span>Project type</span><b>' + esc(p.type) + "</b></div>" +
          '<div class="qf"><span>Location</span><b>' + esc(p.location) + "</b></div>" +
          '<div class="qf"><span>Configurations</span><b>' + esc(p.config) + "</b></div>" +
        "</div>" +
        '<ul class="highlights">' + p.highlights.map(h => "<li>" + esc(h) + "</li>").join("") + "</ul>" +
        '<div class="cta-row">' +
          '<button class="btn" type="button" data-gate="Brochure">Download brochure</button>' +
          '<button class="btn ghost" type="button" data-gate="Site visit">Schedule a site visit</button>' +
        "</div>" +
        '<p class="fineprint">Brochure, floor plans and the price list for ' + esc(p.name) +
          ' are shared on enquiry — tap a button above or use the form, and our desk will send them on call / WhatsApp.</p>' +
      "</div>" +
      '<div class="sticky-side">' +
        '<form class="mini" id="miniForm" novalidate>' +
          '<h2 class="serif">Express your interest</h2>' +
          "<p>Get the price list, availability and a site-visit slot for " + esc(p.name) + ".</p>" +
          '<label>Your name<input type="text" name="name" autocomplete="name" placeholder="e.g. Rohit Sharma" />' +
            '<span class="field-err" data-err="name" hidden></span></label>' +
          '<label>Mobile number<input type="tel" name="phone" autocomplete="tel" inputmode="tel" placeholder="10-digit mobile number" />' +
            '<span class="field-err" data-err="phone" hidden></span></label>' +
          '<button class="btn" type="submit">Request a callback</button>' +
          '<p class="fineprint" style="color:var(--on-dark-muted); margin-top:0">Prefer talking? Call <a href="tel:+91' +
            SITE.phoneIntl.slice(2) + '" data-track="call_click" style="color:var(--gold-bright)">' + SITE.phoneDisplay + "</a>.</p>" +
        "</form>" +
        '<aside class="facts" aria-label="Project facts"><h2>Project facts</h2><dl>' +
          facts.map(f => '<div class="row"><dt>' + esc(f[0]) + "</dt><dd>" + esc(f[1]) + "</dd></div>").join("") +
        "</dl></aside>" +
      "</div></div></section>" +

    /* ---- Amenities ---- */
    '<section class="block sec-anchor" id="amenities" style="padding-top:26px" aria-labelledby="am-h">' +
      '<div class="photo-band"><img src="' + p.img + '" alt="" loading="lazy" decoding="async" width="1920" height="732" />' +
        '<div class="band-in"><h2 id="am-h">Amenities &amp; lifestyle</h2>' +
        "<p>Life at " + esc(p.name) + " — the spaces and settings that come with the address.</p></div></div>" +
      '<div class="amen-grid">' +
        d.amenities.map(a =>
          '<article class="amen-card"><img src="' + AMENITY_IMGS[a[0]].img + '" alt="' + esc(a[1]) + " at " + esc(p.name) +
            ' (representative)" loading="lazy" decoding="async" width="960" height="640" /><h3>' + esc(a[1]) + "</h3><p>" + esc(a[2]) + "</p></article>").join("") +
      "</div>" +
      '<p class="fineprint" style="text-align:center; margin-top:14px">Amenity photos are representative lifestyle images for this listing; the project’s final amenity list is confirmed in the brochure.</p>' +
    "</section>" +

    /* ---- Floor plans ---- */
    '<section class="block sec-anchor" id="floor-plans" style="padding-top:10px" aria-labelledby="fp-h">' +
      '<div class="sec-title"><h2 id="fp-h">Floor plans</h2>' +
      "<p>One plan per configuration at " + esc(p.name) + ". Detailed plans with sizes are shared on enquiry.</p></div>" +
      '<div class="plan-grid" style="margin-top:22px">' +
        d.plans.map(u =>
          '<article class="plan-card"><div class="plan-art">' + planArt() + "</div><h3>" + esc(u) + "</h3>" +
          "<p>Layout &amp; sizes shared with the detailed floor plan.</p>" +
          '<button class="btn ghost small" type="button" data-gate="Floor plan — ' + esc(u) + '">Download floor plan</button></article>').join("") +
      "</div></section>" +

    /* ---- Price list ---- */
    '<section class="block sec-anchor" id="price-list" style="padding-top:10px" aria-labelledby="pl-h">' +
      '<div class="sec-title"><h2 id="pl-h">Price list</h2>' +
      "<p>Current prices for " + esc(p.name) + " are confirmed on enquiry — rates and availability change without notice.</p></div>" +
      '<div class="price-wrap" style="margin-top:22px"><table class="price"><thead><tr>' +
        "<th scope=\"col\">Type</th><th scope=\"col\">Size</th><th scope=\"col\">Price</th></tr></thead><tbody>" +
        d.plans.map(u => '<tr><td class="type">' + esc(u) + '</td><td>On Request</td><td class="price">On Request</td></tr>').join("") +
      "</tbody></table></div>" +
      '<div class="cta-row" style="justify-content:center">' +
        '<button class="btn" type="button" data-gate="Price list">Download price list</button></div>' +
    "</section>" +

    /* ---- Gallery ---- */
    '<section class="block sec-anchor" id="gallery" style="padding-top:10px" aria-labelledby="ga-h">' +
      '<div class="sec-title"><h2 id="ga-h">Gallery</h2></div>' +
      '<div class="carousel" id="carousel" style="margin-top:22px"><div class="car-track" id="carTrack">' +
        slides.map((s, i) =>
          '<figure class="car-slide"><img src="' + s.img + '" alt="' + esc(s.cap) + '"' +
          (i === 0 ? ' fetchpriority="high"' : ' loading="lazy" decoding="async"') + ' width="1920" height="960" />' +
          "<figcaption>" + esc(s.cap) + "</figcaption></figure>").join("") +
      "</div>" +
      '<button class="car-btn prev" id="carPrev" type="button" aria-label="Previous gallery image">‹</button>' +
      '<button class="car-btn next" id="carNext" type="button" aria-label="Next gallery image">›</button>' +
      '<div class="car-dots" role="tablist" aria-label="Gallery images">' +
        slides.map((s, i) => '<button type="button" data-slide="' + i + '" aria-current="' + (i === 0) +
          '" aria-label="Show image ' + (i + 1) + '"></button>').join("") +
      "</div></div></section>" +

    /* ---- Location ---- */
    '<section class="block sec-anchor" id="location" style="padding-top:10px" aria-labelledby="lo-h">' +
      '<div class="sec-title"><h2 id="lo-h">Location advantages</h2>' +
      "<p>" + esc(p.location) + " — on the " + esc(p.corridorLabel) + " corridor.</p></div>" +
      '<div class="loc-grid" style="margin-top:22px">' +
        '<div class="loc-visual"><img src="' + locImg + '" alt="Around ' + esc(p.location) +
          ' (representative)" loading="lazy" decoding="async" width="960" height="640" />' +
          '<div class="loc-cap"><b>' + esc(p.location) + "</b><span>" + esc(p.corridorLabel) + " corridor</span></div></div>" +
        '<div class="loc-cards">' +
          locPoints.map(lp =>
            '<div class="loc-card"><h3>' + esc(lp[0]) + '</h3><ul>' +
            lp[1].map(x => "<li>" + esc(x) + "</li>").join("") + "</ul></div>").join("") +
        "</div></div></section>" +

    /* ---- Enquire now ---- */
    '<section class="block sec-anchor" id="enquire" style="padding-top:10px" aria-labelledby="en-h">' +
      '<div class="sec-title"><h2 id="en-h">Enquire now</h2>' +
      "<p>Ask about " + esc(p.name) + " — price list, availability, floor plans and site visits.</p></div>" +
      '<div class="enquire-split" style="margin-top:22px"><div id="detailFormSlot"></div>' +
      '<div class="life-img"><img src="' + lifeImg + '" alt="Lifestyle at ' + esc(p.name) +
        ' (representative)" loading="lazy" decoding="async" width="960" height="960" /></div></div>' +
      '<p class="fineprint" style="margin-top:16px">Photos on this page show this project as published by the developer and property portals; renders are indicative and the finished project may differ. ' +
        (p.rera ? "RERA No. " + esc(p.rera) + " — shown as listed in project sources; please verify the current registration at up-rera.in before booking." :
                 "RERA and possession details for this project are shared on enquiry.") + "</p>" +
    "</section>" +

    (related.length ?
      '<section class="block" style="padding-top:6px; padding-bottom:10px" aria-labelledby="rel-h"><div class="sec-head"><div>' +
      '<h2 id="rel-h">Related projects</h2><p>More Ace Group addresses in the ' + esc(p.corridorLabel) + " corridor and similar formats.</p></div>" +
      '<a class="sec-link" href="projects.html">All projects →</a></div>' +
      '<div class="grid">' + related.map(r => cardHTML(r, false)).join("") + "</div></section>" : "");

  /* Breadcrumb structured data for this page */
  const old = document.getElementById("crumbLd");
  if (old) old.remove();
  const ld = document.createElement("script");
  ld.type = "application/ld+json"; ld.id = "crumbLd";
  ld.textContent = JSON.stringify({
    "@context": "https://schema.org", "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE.url + "/" },
      { "@type": "ListItem", "position": 2, "name": "Projects", "item": SITE.url + "/projects.html" },
      { "@type": "ListItem", "position": 3, "name": p.corridorLabel, "item": SITE.url + "//projects.html?corridor=" + p.corridor },
      { "@type": "ListItem", "position": 4, "name": p.name, "item": SITE.url + "/projects/" + p.slug + ".html" }
    ]
  });
  document.head.appendChild(ld);
  wireDetailPage(p);
  track("project_view", { project: p.slug });
}

function wireDetailPage(p) {
  /* Keep the sticky anchor bar below the site header and size section offsets */
  const head = $(".site-head"), nav = $("#anchorNav");
  if (head && nav) {
    nav.style.top = head.offsetHeight + "px";
    const offset = head.offsetHeight + nav.offsetHeight + 16;
    $$("#projectDetail .sec-anchor").forEach(s => { s.style.scrollMarginTop = offset + "px"; });
    const side = $("#projectDetail .sticky-side");
    if (side) side.style.top = offset + "px";
  }

  /* Anchor links scroll in-page (they must not trigger the hash router) */
  $$("#anchorNav nav a").forEach(a => a.addEventListener("click", e => {
    e.preventDefault();
    scrollToEl($(a.getAttribute("href")));
  }));

  /* Gated downloads / site visit → explain, track, and take the visitor to the form */
  $$("#projectDetail [data-gate]").forEach(btn => btn.addEventListener("click", () => {
    const item = btn.dataset.gate;
    track("gate_request", { project: p.slug, item: item });
    toast(item + " for " + p.name + " is shared on enquiry — use the form below or WhatsApp us and we’ll send it right away.");
    scrollToEl($("#enquire"));
  }));

  /* Express Your Interest mini-form */
  const mini = $("#miniForm");
  if (mini) mini.addEventListener("submit", async ev => {
    ev.preventDefault();
    const name = mini.querySelector("[name='name']");
    const phone = mini.querySelector("[name='phone']");
    let ok = true;
    const check = (input, valid, message) => {
      const err = mini.querySelector("[data-err='" + input.name + "']");
      input.setAttribute("aria-invalid", String(!valid));
      if (err) { err.textContent = valid ? "" : message; err.hidden = valid; }
      if (!valid) ok = false;
    };
    check(name, name.value.trim().length >= 2, "Please enter your name.");
    check(phone, /^[6-9]\d{9}$/.test(phone.value.replace(/[\s+\-]/g, "").replace(/^91/, "")), "Enter a valid 10-digit mobile number.");
    if (!ok) { toast("Please fix the highlighted fields and try again.", "err"); return; }
    const payload = { name: name.value.trim(), phone: phone.value.trim(), project: p.name,
      message: "Express Your Interest form on the " + p.name + " page — please share the price list, availability and site-visit options.",
      _subject: "New Ace Group enquiry — " + p.name, _template: "table" };
    const btn = mini.querySelector("button[type='submit']");
    btn.disabled = true; btn.textContent = "Sending…";
    const sent = await submitLead(payload, p.slug);
    if (sent) mini.reset();
    btn.disabled = false; btn.textContent = "Request a callback";
  });

  /* Full enquiry form at the bottom, pre-set to this project */
  const slot = $("#detailFormSlot");
  if (slot) {
    slot.appendChild($("#enquiryTpl").content.cloneNode(true));
    wireForm(slot.querySelector("form"));
    const sel = slot.querySelector("select[name='project']");
    if (sel) sel.value = p.slug;
  }

  /* Gallery carousel */
  const root = $("#carousel");
  if (root) {
    const trackEl = $("#carTrack"), slideEls = $$(".car-slide", root), dots = $$(".car-dots button", root);
    let idx = 0;
    const go = n => {
      idx = (n + slideEls.length) % slideEls.length;
      trackEl.style.transform = "translateX(-" + idx * 100 + "%)";
      dots.forEach((dEl, j) => dEl.setAttribute("aria-current", String(j === idx)));
    };
    $("#carPrev").addEventListener("click", () => { go(idx - 1); track("gallery_nav", { project: p.slug, dir: "prev" }); });
    $("#carNext").addEventListener("click", () => { go(idx + 1); track("gallery_nav", { project: p.slug, dir: "next" }); });
    dots.forEach(dEl => dEl.addEventListener("click", () => go(Number(dEl.dataset.slide))));
  }
}

/* ---------- Per-page SEO (unique title / description / canonical / OG) ---------- */
function setMeta(title, desc, path, image) {
  document.title = title;
  const url = SITE.url + "/" + (path || "");
  const img = SITE.url + "/" + (image || SITE.ogImage);
  const set = (sel, attr, val) => { const el = $(sel); if (el) el.setAttribute(attr, val); };
  set('meta[name="description"]', "content", desc);
  set("#canonical", "href", url);
  set("#ogTitle", "content", title); set("#twTitle", "content", title);
  set("#ogDesc", "content", desc);  set("#twDesc", "content", desc);
  set("#ogUrl", "content", url);
  set("#ogImage", "content", img);  set("#twImage", "content", img);
}

/* ---------- Router ---------- */
const SEO = {
  home:    { t: "Ace Group Projects in Noida & Yamuna Expressway | Authorized Channel Partner",
             d: "Explore Ace Group residential and commercial projects — ACE Parkway, Starlit, Golfshire, Terra, Verde, ACE 153 and more across Noida, the Yamuna Expressway and Greater Noida West. Prices on request. Call +91 87997 56026." },
  projects:{ t: "All Ace Group Projects — Noida, Yamuna Expressway & Gr. Noida West",
             d: "Browse all 23 Ace Group projects: 1–4 BHK residences, penthouses, plots and commercial spaces across Noida, Yamuna Expressway, Greater Noida West and Gurugram. Prices on request." },
  about:   { t: "About Ace Group | Noida Developer — Channel Partner",
             d: "Ace Group is a Noida-based developer led by Ajay Chaudhary, building townships and commercial projects along the Noida & Yamuna Expressways. Learn about the portfolio and this channel-partner website." },
  contact: { t: "Enquire — Ace Group Projects | Call +91 87997 56026",
             d: "Enquire about any Ace Group project: price lists, availability, site visits and booking assistance from the authorized channel partner desk. Call or WhatsApp +91 87997 56026." },
  notfound:{ t: "Page Not Found (404) | Ace Group — Authorized Channel Partner",
             d: "The page you requested could not be found. Browse all Ace Group projects in Noida, Yamuna Expressway and Greater Noida West instead." }
};
function showView(name) {
  $$("[data-view]").forEach(v => v.classList.toggle("hidden", v.dataset.view !== name));
  $$(".main-nav a").forEach(a => {
    if (a.dataset.nav === name) a.setAttribute("aria-current", "page");
    else a.removeAttribute("aria-current");
  });
  $("#mainNav").classList.remove("open");
  $("#navToggle").setAttribute("aria-expanded", "false");
  window.scrollTo({ top: 0, behavior: "auto" });
}
function parseHash() {
  const raw = location.hash.replace(/^#\/?/, "");
  const [path, qs] = raw.split("?");
  return { parts: path.split("/").filter(Boolean), params: new URLSearchParams(qs || "") };
}
function route() {
  const { parts, params } = parseHash();
  const page = parts[0] || "";
  if (page === "" ) {
    showView("home"); setMeta(SEO.home.t, SEO.home.d, "");
  } else if (page === "projects") {
    filters.corridor = params.get("corridor") || "all";
    if (!["all", "noida-expressway", "yamuna-expressway", "greater-noida-west", "gurugram"].includes(filters.corridor)) filters.corridor = "all";
    setChipGroup("#corridorFilters", "corridor", filters.corridor);
    showView("projects"); applyFilters(false);
    setMeta(SEO.projects.t, SEO.projects.d, "projects.html");
  } else if (page === "project" && parts[1]) {
    const p = projectBySlug(parts[1]);
    if (!p) { showView("notfound"); setMeta(SEO.notfound.t, SEO.notfound.d, location.hash); return; }
    renderProjectDetail(p);
    showView("project");
    setMeta(p.name + " — " + p.location + " | Ace Group",
      p.name + ": " + p.config + " at " + p.location + " (" + p.corridorLabel + "). " + p.desc + " Price on request — call +91 87997 56026.",
      "projects/" + p.slug + ".html", p.img);
  } else if (page === "about") {
    showView("about"); setMeta(SEO.about.t, SEO.about.d, "about.html");
  } else if (page === "contact") {
    showView("contact"); setMeta(SEO.contact.t, SEO.contact.d, "contact.html");
    const pre = params.get("project");
    if (pre && projectBySlug(pre)) {
      const sel = $("#contactFormSlot select[name='project']");
      if (sel) sel.value = pre;
    }
  } else {
    showView("notfound"); setMeta(SEO.notfound.t, SEO.notfound.d, location.hash);
  }
  track("page_view", { view: page || "home" });
}

/* ---------- Enquiry forms ---------- */
function wireForm(form) {
  const sel = form.querySelector("select[name='project']");
  sel.innerHTML = PROJECTS.map(p => '<option value="' + p.slug + '">' + esc(p.name) + " — " + esc(p.location) + "</option>").join("") +
                  '<option value="general">General enquiry — help me choose</option>';
  const onDetail = location.hash.startsWith("#/project/");
  if (onDetail) { const s = location.hash.split("/")[2]; if (projectBySlug(s)) sel.value = s; }

  form.addEventListener("submit", async ev => {
    ev.preventDefault();
    const name = form.querySelector("[name='name']");
    const phone = form.querySelector("[name='phone']");
    const msg = form.querySelector("[name='message']");
    let ok = true;
    const check = (input, valid, message) => {
      const err = form.querySelector("[data-err='" + input.name + "']");
      input.setAttribute("aria-invalid", String(!valid));
      if (err) { err.textContent = valid ? "" : message; err.hidden = valid; }
      if (!valid) ok = false;
    };
    check(name, name.value.trim().length >= 2, "Please enter your name.");
    check(phone, /^[6-9]\d{9}$/.test(phone.value.replace(/[\s+\-]/g, "").replace(/^91/, "")), "Enter a valid 10-digit mobile number.");
    if (!ok) { toast("Please fix the highlighted fields and try again.", "err"); return; }

    const projectName = (projectBySlug(sel.value) || {}).name || "General enquiry";
    const payload = { name: name.value.trim(), phone: phone.value.trim(), project: projectName, message: msg.value.trim(),
                      _subject: "New Ace Group enquiry — " + projectName, _template: "table" };
    const btn = form.querySelector("button[type='submit']");
    btn.disabled = true; btn.textContent = "Sending…";
    const sent = await submitLead(payload, sel.value);
    if (sent) form.reset();
    btn.disabled = false; btn.textContent = "Send enquiry";
  });
}
/* Shared lead delivery: email endpoint when configured, otherwise the
   lead is handed to WhatsApp so it is never lost. */
async function submitLead(payload, projectSlug) {
  const projectName = payload.project;
  try {
    if (SITE.formEndpoint) {
      const res = await fetch(SITE.formEndpoint, { method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" }, body: JSON.stringify(payload) });
      if (!res.ok) throw new Error("send failed");
      track("form_submit", { project: projectSlug, method: "email" });
      if (typeof window.fbq === "function" && consent.marketing) window.fbq("track", "Lead", { content_name: projectName });
      toast("Enquiry sent — our desk will call you back shortly.", "ok");
      return true;
    }
    track("form_submit", { project: projectSlug, method: "whatsapp_fallback" });
    toast("Opening WhatsApp to complete your enquiry…", "ok");
    window.open(waLink("Hi, I'm " + payload.name + ". I'm interested in " + projectName + ". " + (payload.message || "Please share details.")), "_blank", "noopener");
    return true;
  } catch (e) {
    toast("Couldn’t send online — please call " + SITE.phoneDisplay + " or use WhatsApp.", "err");
    track("form_error", { project: projectSlug });
    return false;
  }
}
function mountForms() {
  const tpl = $("#enquiryTpl");
  [["#homeFormSlot"], ["#contactFormSlot"]].forEach(([slot]) => {
    const host = $(slot);
    if (host && !host.querySelector("form")) { host.appendChild(tpl.content.cloneNode(true)); wireForm(host.querySelector("form")); }
  });
}

/* ---------- Cookie consent UI ---------- */
function openCookiePrefs() {
  $$("#cookieModal .switch[data-pref]").forEach(sw => {
    if (sw.dataset.pref !== "essential") sw.setAttribute("aria-checked", String(!!consent[sw.dataset.pref]));
  });
  const dlg = $("#cookieModal");
  if (typeof dlg.showModal === "function") dlg.showModal(); else dlg.setAttribute("open", "");
}
function closeCookiePrefs() { const dlg = $("#cookieModal"); if (dlg.open) dlg.close(); }
function decideConsent(next, silent) {
  Object.assign(consent, next, { decided: true });
  $("#cookieBanner").classList.remove("show");
  applyConsent();
  track("cookie_consent", { analytics: consent.analytics, marketing: consent.marketing });
  if (!silent) toast("Cookie preferences saved.", "ok");
}

/* ---------- Photo safety net ----------
   The audit evidence for "no photos visible" showed below-fold project
   cards rendered as blank boxes: every content photo was native
   loading="lazy", and in the served webview those deferred loads never
   fired — the <img> elements sat in the DOM with no pixels. So: watch
   for photos as they are rendered, promote any lazy photo to eager as
   soon as it nears the viewport (native lazy stays as the first pass),
   retry a photo once if its load errors, and sweep once shortly after
   each render so a stalled lazy queue can never leave a page photoless. */
const photoIO = ("IntersectionObserver" in window) ? new IntersectionObserver(entries => {
  entries.forEach(en => { if (en.isIntersecting) { en.target.loading = "eager"; photoIO.unobserve(en.target); } });
}, { rootMargin: "900px 0px" }) : null;
function watchPhoto(img) {
  if (!img || img.dataset.watched) return;
  img.dataset.watched = "1";
  if (photoIO && img.loading === "lazy") photoIO.observe(img);
}
function sweepPhotos() {
  $$("img").forEach(watchPhoto);
  /* Belt and braces: anything still lazy + unloaded a moment after a
     render gets promoted outright — a visible photo beats a saved KB. */
  setTimeout(() => $$('img[loading="lazy"]').forEach(img => { img.loading = "eager"; }), 2500);
}
new MutationObserver(() => sweepPhotos()).observe(document.documentElement, { childList: true, subtree: true });
document.addEventListener("error", e => {
  const img = e.target;
  if (img && img.tagName === "IMG" && !img.dataset.retried) {
    img.dataset.retried = "1";
    img.loading = "eager";
    const src = img.getAttribute("src");
    if (src) img.src = src; /* one re-request: transient webview failures recover */
  }
}, true);

/* ---------- Wiring ---------- */
document.addEventListener("DOMContentLoaded", () => {
  sweepPhotos();
  renderFeatured();
  mountForms();
  $("#footProjects").innerHTML = PROJECTS.slice(0, 7).map(p =>
    '<li><a href="/projects/' + p.slug + '.html' + '">' + esc(p.name) + "</a></li>").join("") +
    '<li><a href="projects.html">View all ' + PROJECTS.length + ' projects →</a></li>';

  $("#navToggle").addEventListener("click", () => {
    const nav = $("#mainNav"), open = nav.classList.toggle("open");
    $("#navToggle").setAttribute("aria-expanded", String(open));
  });
  $$("#typeFilters .chip").forEach(c => c.addEventListener("click", () => {
    filters.type = c.dataset.type; setChipGroup("#typeFilters", "type", filters.type); applyFilters(true);
  }));
  $$("#corridorFilters .chip").forEach(c => c.addEventListener("click", () => {
    filters.corridor = c.dataset.corridor; setChipGroup("#corridorFilters", "corridor", filters.corridor); applyFilters(true);
  }));
  let deb;
  $("#projectSearch").addEventListener("input", e => {
    clearTimeout(deb); deb = setTimeout(() => { filters.q = e.target.value; applyFilters(false); }, 180);
  });
  $("#resetFilters").addEventListener("click", resetFilters);

  /* Conversion events on call / WhatsApp taps (delegated; works for dynamic content too) */
  document.addEventListener("click", e => {
    const a = e.target.closest("[data-track]");
    if (a) track(a.dataset.track, { href: a.getAttribute("href") });
  });

  /* Cookie banner + preferences */
  setTimeout(() => { if (!consent.decided) $("#cookieBanner").classList.add("show"); }, 1200);
  $("#cookieAccept").addEventListener("click", () => decideConsent({ analytics: true, marketing: true }));
  $("#cookieReject").addEventListener("click", () => decideConsent({ analytics: false, marketing: false }));
  $("#cookiePrefs").addEventListener("click", openCookiePrefs);
  $("#cookieSettingsBtn").addEventListener("click", openCookiePrefs);
  $$("#cookieModal .switch[data-pref]").forEach(sw => sw.addEventListener("click", () => {
    if (sw.hasAttribute("disabled")) return;
    sw.setAttribute("aria-checked", String(sw.getAttribute("aria-checked") !== "true"));
  }));
  $("#cookieModalClose").addEventListener("click", closeCookiePrefs);
  $("#cookieSave").addEventListener("click", () => {
    const get = k => $("#cookieModal .switch[data-pref='" + k + "']").getAttribute("aria-checked") === "true";
    decideConsent({ analytics: get("analytics"), marketing: get("marketing") });
    closeCookiePrefs();
  });

  window.addEventListener("hashchange", function(){ if (!window.PAGE || location.hash.indexOf("#/") === 0) route(); });
  if (window.PAGE) { staticRoute(window.PAGE); } else { route(); }
});
/* ---------- Static multi-page bootstrap ----------
   Every generated page sets window.PAGE before loading this script.
   We render that route directly and skip the hash router; in-page
   anchors (#overview, #main, ...) no longer trigger route(). */
function staticRoute(page) {
  var t = page.type;
  if (t === "home") { showView("home"); }
  else if (t === "projects") {
    var qs = new URLSearchParams(location.search);
    filters.corridor = qs.get("corridor") || "all";
    if (["all", "noida-expressway", "yamuna-expressway", "greater-noida-west"].indexOf(filters.corridor) < 0)
      filters.corridor = "all";
    setChipGroup("#corridorFilters", "corridor", filters.corridor);
    showView("projects"); applyFilters(false);
  }
  else if (t === "project") {
    var p = projectBySlug(page.slug);
    if (!p) { showView("notfound"); }
    else {
      renderProjectDetail(p); showView("project");
      var sel = document.querySelector("#detailFormSlot select[name='project']");
      if (sel) sel.value = p.slug;
    }
  }
  else if (t === "about") { showView("about"); }
  else if (t === "contact") {
    showView("contact");
    var pre = new URLSearchParams(location.search).get("project");
    if (pre && projectBySlug(pre)) {
      var csel = document.querySelector("#contactFormSlot select[name='project']");
      if (csel) csel.value = pre;
    }
  }
  else { showView("notfound"); }
  track("page_view", { view: t });
}
