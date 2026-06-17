export const siteConfig = {
  name: "Keiryan Wilson",
  shortName: "KW",
  tagline: "Build the thing. Break it open. See what else it can become.",
  description:
    "Technical operator, AI ops leader, and writer. Building things, writing things, living somewhere in between.",
  email: "keiryanwilson@gmail.com",
  location: "Leland, NC",
  social: {
    github: "https://github.com/keiryan",
    linkedin: "https://www.linkedin.com/in/keiryan/",
    instagram: "https://www.instagram.com/keiryans",
  },
};

export const navLinks = [
  { href: "/writing", label: "Writing" },
  { href: "/photos", label: "Photos" },
  { href: "/hobbies", label: "Hobbies" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
];

export const currently = [
  { label: "Playing", text: "Fortnite (3,500 hours and counting) and Overwatch.", to: "/hobbies" },
  { label: "Building", text: "This site, and writing down why it exists.", to: "/writing/why-i-built-this" },
  { label: "Shooting", text: "Macro spiders, travel, and the occasional handstand.", to: "/photos" },
  { label: "Listening", text: "A handful of songs on heavy rotation.", to: "/hobbies#music" },
  { label: "Working on", text: "Wrapping an AI ops contract at G2i. Open to what's next.", to: "/work" },
];

export type Track = {
  title: string;
  artist: string;
  album: string;
  cover: string;
  preview: string;
  link: string;
  /** Optional direct links. When absent, a service search link is generated. */
  spotify?: string;
  youtube?: string;
  featured?: boolean;
};

// Imported from Keiryan's Apple Music "Heavy Rotation" playlist via
// scripts/fetch-music.mjs <playlist-url>. Re-run to refresh.
export const onRepeat: Track[] = [
  {
    title: "up to me",
    artist: "LANY",
    album: "gg bb xx (deluxe)",
    cover: "/music/lany-up-to-me.jpg",
    preview: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/34/a0/6f/34a06f55-2946-ff5b-6293-aa8556ed1e18/mzaf_1757726415007009876.plus.aac.p.m4a",
    link: "https://music.apple.com/us/album/up-to-me/1591302526?i=1591302533",
    featured: true,
  },
  {
    title: "TN",
    artist: "Morgan Wallen",
    album: "I’m The Problem",
    cover: "/music/morgan-wallen-tn.jpg",
    preview: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/0a/6b/b7/0a6bb7ad-6252-f358-4ddf-27e54929bfa6/mzaf_16958171224402755787.plus.aac.p.m4a",
    link: "https://music.apple.com/us/album/tn/1802103958?i=1802104206",
  },
  {
    title: "Low Lights",
    artist: "Ella Langley",
    album: "Dandelion",
    cover: "/music/ella-langley-low-lights.jpg",
    preview: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/7c/48/3d/7c483d84-99be-8557-ddee-7a0e24cbceed/mzaf_17317222436738644378.plus.aac.p.m4a",
    link: "https://music.apple.com/us/album/low-lights/1895159736?i=6763094069",
  },
  {
    title: "We Know Us",
    artist: "Ella Langley",
    album: "Dandelion",
    cover: "/music/ella-langley-we-know-us.jpg",
    preview: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/19/87/8b/19878b26-1cbf-0758-e5b5-ef6160f90914/mzaf_7283279624162743677.plus.aac.p.m4a",
    link: "https://music.apple.com/us/album/we-know-us/1895159736?i=6763094067",
  },
  {
    title: "Contigo (Estar Contigo)",
    artist: "Luis Miguel",
    album: "Romances",
    cover: "/music/luis-miguel-contigo-estar-contigo.jpg",
    preview: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/2e/fb/4b/2efb4b28-c5e6-54a7-7021-edabc9202a71/mzaf_650128594147823905.plus.aac.p.m4a",
    link: "https://music.apple.com/us/album/contigo-estar-contigo/101070760?i=101070249",
  },
  {
    title: "Por Debajo de la Mesa",
    artist: "Luis Miguel",
    album: "Romances",
    cover: "/music/luis-miguel-por-debajo-de-la-mesa.jpg",
    preview: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/a0/f7/f7/a0f7f7ae-7587-a3e5-24be-1a9ad9bc57db/mzaf_8009559610099565150.plus.aac.p.m4a",
    link: "https://music.apple.com/us/album/por-debajo-de-la-mesa/101070760?i=101069847",
  },
  {
    title: "Doing It Wrong",
    artist: "Drake",
    album: "Take Care (Deluxe Version)",
    cover: "/music/drake-doing-it-wrong.jpg",
    preview: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/bc/a3/4d/bca34d4c-e883-cc45-c674-d3db42018ddb/mzaf_10138665108723971612.plus.aac.p.m4a",
    link: "https://music.apple.com/us/album/doing-it-wrong/1440642493?i=1440642990",
  },
  {
    title: "Walking On a Dream",
    artist: "Empire Of The Sun",
    album: "Walking On a Dream (Special Edition)",
    cover: "/music/empire-of-the-sun-walking-on-a-dream.jpg",
    preview: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/ff/32/28/ff322824-bf6c-f621-5c2e-32dcb237edca/mzaf_15258983271916273742.plus.aac.p.m4a",
    link: "https://music.apple.com/us/album/walking-on-a-dream/712862605?i=712862708",
    featured: true,
  },
  {
    title: "Half Mast",
    artist: "Empire Of The Sun",
    album: "Walking On a Dream (Special Edition)",
    cover: "/music/empire-of-the-sun-half-mast.jpg",
    preview: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview125/v4/3a/0a/2b/3a0a2b8b-cdff-e07a-e132-a4639aea075c/mzaf_5425005158944821413.plus.aac.p.m4a",
    link: "https://music.apple.com/us/album/half-mast/712862605?i=712862709",
  },
  {
    title: "NUEVAYoL",
    artist: "Bad Bunny",
    album: "DeBÍ TiRAR MáS FOToS",
    cover: "/music/bad-bunny-nuevayol.jpg",
    preview: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/2e/97/55/2e97555a-1ed3-9e07-de57-07e1213186c9/mzaf_7594924455925081680.plus.aac.p.m4a",
    link: "https://music.apple.com/us/album/nuevayol/1787022393?i=1787022572",
  },
  {
    title: "B’s On The Table",
    artist: "Drake",
    album: "ICEMAN",
    cover: "/music/drake-bs-on-the-table.jpg",
    preview: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/4d/72/6f/4d726fc3-a7cf-74c5-9059-67653b1cda7d/mzaf_13013409159915658947.plus.aac.p.m4a",
    link: "https://music.apple.com/us/album/bs-on-the-table/6769568449?i=6769568604",
  },
  {
    title: "Plot Twist",
    artist: "Drake",
    album: "ICEMAN",
    cover: "/music/drake-plot-twist.jpg",
    preview: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/f8/02/4d/f8024dc5-cd55-b35b-d606-b1762b4d3fe1/mzaf_17338170859147482394.plus.aac.p.m4a",
    link: "https://music.apple.com/us/album/plot-twist/6769568449?i=6769568609",
  },
  {
    title: "2 Hard 4 The Radio",
    artist: "Drake",
    album: "ICEMAN",
    cover: "/music/drake-2-hard-4-the-radio.jpg",
    preview: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/f0/47/47/f04747d9-f818-8b6d-8b6e-b73573fe42b9/mzaf_10728849588895508141.plus.aac.p.m4a",
    link: "https://music.apple.com/us/album/2-hard-4-the-radio/6769568449?i=6769568610",
  },
  {
    title: "remember that",
    artist: "LANY",
    album: "gg bb xx (deluxe)",
    cover: "/music/lany-remember-that.jpg",
    preview: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/e4/11/9b/e4119b82-2651-4cd5-3883-a56e43cb6d94/mzaf_1320572410294373712.plus.aac.p.m4a",
    link: "https://music.apple.com/us/album/remember-that/1591302526?i=1591302830",
  },
  {
    title: "What Did I Miss?",
    artist: "Drake",
    album: "ICEMAN",
    cover: "/music/drake-what-did-i-miss.jpg",
    preview: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/fa/53/36/fa5336fb-4517-7dc7-bb15-76834ee29c9c/mzaf_15470080213283181966.plus.aac.p.m4a",
    link: "https://music.apple.com/us/album/what-did-i-miss/6769568449?i=6769568607",
  },
  {
    title: "i die first",
    artist: "LANY",
    album: "gg bb xx (deluxe)",
    cover: "/music/lany-i-die-first.jpg",
    preview: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/1c/9f/07/1c9f0715-78f9-255f-ed04-ff30a2425faf/mzaf_12715193363654581222.plus.aac.p.m4a",
    link: "https://music.apple.com/us/album/i-die-first/1591302526?i=1591302823",
  },
  {
    title: "New Normal",
    artist: "Sasha Alex Sloan",
    album: "I Blame The World",
    cover: "/music/sasha-alex-sloan-new-normal.jpg",
    preview: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/ca/c1/d4/cac1d4fc-669b-fae1-ddc0-b3e6cda3e545/mzaf_16420146545766962605.plus.aac.p.m4a",
    link: "https://music.apple.com/us/album/new-normal/1613597960?i=1613598199",
  },
  {
    title: "You & Me Time",
    artist: "Ella Langley",
    album: "Dandelion",
    cover: "/music/ella-langley-you-and-me-time.jpg",
    preview: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/93/91/6c/93916ca9-72fb-d044-9acc-4d8857eeed36/mzaf_10687543215786026585.plus.aac.p.m4a",
    link: "https://music.apple.com/us/album/you-me-time/1895159736?i=6763094076",
  },
  {
    title: "Adult",
    artist: "Sasha Alex Sloan",
    album: "I Blame The World",
    cover: "/music/sasha-alex-sloan-adult.jpg",
    preview: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d4/58/39/d45839d4-9c8d-4ec0-680d-0fac27c128e2/mzaf_2954685832200458750.plus.aac.p.m4a",
    link: "https://music.apple.com/us/album/adult/1613597960?i=1613598186",
  },
  {
    title: "Choosin' Texas",
    artist: "Ella Langley",
    album: "Choosin' Texas - Single",
    cover: "/music/ella-langley-choosin-texas.jpg",
    preview: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/38/49/4c/38494cb4-f9e0-1db4-0b84-8c478cb55390/mzaf_4251933786704889664.plus.aac.p.m4a",
    link: "https://music.apple.com/us/album/choosin-texas/1844932149?i=1844932150",
  },
  {
    title: "Live Laugh Love",
    artist: "Sasha Alex Sloan",
    album: "I Blame The World",
    cover: "/music/sasha-alex-sloan-live-laugh-love.jpg",
    preview: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/5d/47/11/5d47110d-941d-7785-b9e0-67e200a8007e/mzaf_10730629767439280212.plus.aac.p.m4a",
    link: "https://music.apple.com/us/album/live-laugh-love/1613597960?i=1613598190",
  },
  {
    title: "I Blame The World",
    artist: "Sasha Alex Sloan",
    album: "I Blame The World",
    cover: "/music/sasha-alex-sloan-i-blame-the-world.jpg",
    preview: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/8f/07/48/8f074899-42d5-6557-c073-e2e01e2cdae0/mzaf_5660156534142844576.plus.aac.p.m4a",
    link: "https://music.apple.com/us/album/i-blame-the-world/1613597960?i=1613597974",
    featured: true,
  },
  {
    title: "Someone You Hate",
    artist: "Sasha Alex Sloan",
    album: "Only Child",
    cover: "/music/sasha-alex-sloan-someone-you-hate.jpg",
    preview: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview115/v4/0e/10/69/0e106934-9245-d2bd-f308-07822ee959cc/mzaf_12494885369113265973.plus.aac.p.m4a",
    link: "https://music.apple.com/us/album/someone-you-hate/1529018233?i=1529018243",
  },
  {
    title: "Be Her",
    artist: "Ella Langley",
    album: "Dandelion",
    cover: "/music/ella-langley-be-her.jpg",
    preview: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview221/v4/c8/7c/d4/c87cd4df-1197-1d1d-a07c-c5139d59a58f/mzaf_8671653320488087674.plus.aac.p.m4a",
    link: "https://music.apple.com/us/album/be-her/1869436835?i=1869436845",
  },
  {
    title: "Dandelion",
    artist: "Ella Langley",
    album: "Dandelion",
    cover: "/music/ella-langley-dandelion.jpg",
    preview: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview211/v4/d8/4a/b4/d84ab4c1-3e7f-05eb-9d58-4586fad093be/mzaf_18220091210023101261.plus.aac.p.m4a",
    link: "https://music.apple.com/us/album/dandelion/1895159736?i=6763094064",
  },
];

export type PhotoCamera = "iPhone" | "Sony";

export const cameraLabels: Record<PhotoCamera, string> = {
  iPhone: "Shot on iPhone",
  Sony: "Shot on Sony",
};

export type Photo = {
  src: string;
  alt: string;
  camera: PhotoCamera;
  location: string;
  title?: string;
  caption?: string;
  story?: string;
  instagram?: string;
  featured?: boolean;
};

export const photos: Photo[] = [
  {
    src: "/photos/misc-dsc04006.png",
    alt: "Ripples on dark water catching low sunlight",
    camera: "Sony",
    location: "Leland, NC",
    title: "An inviting lake.",
    story: "The lake just behind my house on a breezy day.",
    instagram: "https://www.instagram.com/p/DBysdFoO3MT/",
    featured: true,
  },
  {
    src: "/photos/colombia-messcam-4794.png",
    alt: "A woman with curly hair smiling on a high-rise balcony, mountains hazy behind her",
    camera: "Sony",
    location: "Medellin, Colombia",
    title: "A foreign friend.",
    story: "One of the many beautiful people I met in Colombia. Turned out to be an impromptu photoshoot.",
    instagram: "https://www.instagram.com/p/DUzEsdQDK-U/?img_index=1",
  },
  {
    src: "/photos/spider-img-6545.png",
    alt: "A momma wolf spider photographed up close",
    camera: "iPhone",
    location: "Leland, NC",
    title: "Momma Wolfy",
    story: "A momma wolf spider I saw and just _had_ to photograph. This shoot required a focus merge to be able to get so close and still have the entire spider in focus. It was probably the most difficult photoshoot I have done to date. Shot on my iPhone 13 Pro Max.",
    instagram: "https://www.instagram.com/reel/CjihZjftaKs/",
  },
  {
    src: "/photos/misc-nicole.png",
    alt: "Nicole flexing her biceps at Kure Beach",
    camera: "Sony",
    location: "Kure Beach, NC",
    title: "Nicole",
    caption: "Ocean light",
    story: "My friend Nicole flexing her biceps at Kure Beach.",
    instagram: "https://www.instagram.com/reel/C_rZMf-NWWL/",
  },
  {
    src: "/photos/misc-img-1808.png",
    alt: "A handstand on parallette bars in a driveway, trees in the background",
    camera: "Sony",
    location: "Leland, NC",
    title: "Calisthenics & I.",
    story: "One of my many fitness goals is a handstand pushup. Haven’t quite got it yet, but I am always trying for it.",
  },
  {
    src: "/photos/peru-img-1130.png",
    alt: "Justin and Keiryan before leaving an Airbnb in Cusco, Peru",
    camera: "Sony",
    location: "Cusco, Peru",
    title: "Twinergy",
    story: "Justin (one of my close friends) and I just before we left our 2nd Airbnb in Cusco, Peru.",
    instagram: "https://www.instagram.com/p/DB_3ZYEygVh/",
    featured: true,
  },
  {
    src: "/photos/misc-dsc07075.png",
    alt: "Portrait of a man wearing sunglasses near a bridge",
    camera: "Sony",
    location: "Miami, FL",
    title: "In motion",
    story: "A guy Justin and I encountered in our travels in Miami. His name was “Nick”. I thought his vibe was such an aesthetic I had to ask him for a photoshoot. Very impromptu.",
    instagram: "https://www.instagram.com/reel/CjihZjftaKs/",
  },
  {
    src: "/photos/spider-img-6569.png",
    alt: "A wolf spider in the grass, her back covered in spiderlings",
    camera: "iPhone",
    location: "Leland, NC",
    title: "Momma Wolfy II",
    story: "Another shot of mama bear holding her babies.",
    instagram: "https://www.instagram.com/reel/CjihZjftaKs/",
  },
  {
    src: "/photos/misc-img-1823.png",
    alt: "A handstand on parallettes in the middle of a baseball diamond",
    camera: "Sony",
    location: "Leland, NC",
    title: "Calisthenics & I Pt. II",
    story: "One of my many fitness goals is a handstand pushup. Haven’t quite got it yet, but I am always trying for it.",
  },
  {
    src: "/photos/colombia-messcam-4797.png",
    alt: "A woman in a blue dress dancing on a balcony above a sprawling city skyline",
    camera: "Sony",
    location: "Medellin, Colombia",
    title: "A foreign friend II",
    story: "One of the many beautiful people I met in Colombia. Turned out to be an impromptu photoshoot.",
    instagram: "https://www.instagram.com/p/DUzEsdQDK-U/",
  },
  {
    src: "/photos/misc-img-9755.png",
    alt: "A jet crossing an overcast sky, contrail trailing behind",
    camera: "iPhone",
    location: "Leland, NC",
    title: "On Cloud 9",
    story: "A plane traveling through the clouds over my house.",
    instagram: "https://www.instagram.com/p/C-A4BSLOXxa/",
  },
  {
    src: "/photos/misc-img-9751.png",
    alt: "Plane cutting through heavy clouds",
    camera: "iPhone",
    location: "Leland, NC",
    title: "Through the clouds",
    story: "Shot on iPhone 15 Pro Max.",
    instagram: "https://www.instagram.com/p/C-A4BSLOXxa/",
  },
  {
    src: "/photos/misc-img-0312.png",
    alt: "Portrait of Keiryan smiling outdoors with a backpack",
    camera: "Sony",
    location: "Miami, FL",
    title: "Miami just before Peru.",
    story: "Standing in Miami with Justin just before boarding our flights to Peru.",
  },
  {
    src: "/photos/spider-img-6582.png",
    alt: "Macro close-up of a wolf spider's face, spiderlings riding on her back",
    camera: "iPhone",
    location: "Leland, NC",
    title: "Mama Wolfy III",
    story: "Another shot of mama bear holding her babies.",
    instagram: "https://www.instagram.com/reel/CjihZjftaKs/",
  },
  {
    src: "/photos/peru-img-0133.png",
    alt: "Sunset over the beach in Peru",
    camera: "Sony",
    location: "Lima, Peru",
    title: "Sunset at La Playa",
    story: "A gorgeous burn of a sunset at the beach in Peru.",
  },
  {
    src: "/photos/misc-dsc07909.png",
    alt: "Black-and-white street portrait of a man resting on marble steps outside a storefront",
    camera: "Sony",
    location: "Lima, Peru",
    title: "The streets of Peru.",
    story: "The reality of the streets of Lima, Peru.",
    instagram: "https://www.instagram.com/p/DCKUlSiSBD2/",
  },
  {
    src: "/photos/spider-img-6621.png",
    alt: "A wolf spider facing the camera head-on, eyes in sharp focus",
    camera: "iPhone",
    location: "Leland, NC",
    title: "Mama Wolfy IV",
    story: "Another shot of mama bear holding her babies.",
    instagram: "https://www.instagram.com/reel/CjihZjftaKs/",
  },
  {
    src: "/photos/misc-ben-2.png",
    alt: "A campfire with friends in Georgia",
    camera: "Sony",
    location: "Dallas, GA",
    title: "A fire with friends",
    story: "A scene from a campfire with friends in Georgia.",
    instagram: "https://www.instagram.com/p/DCCbFdkvzN0/",
  },
  {
    src: "/photos/misc-img-9612.png",
    alt: "Night street scene outside a storefront in Los Angeles",
    camera: "iPhone",
    location: "Los Angeles, CA",
    title: "A night in LA",
    story: "LA is often painted as very glamorous in Hollywood. I guess that's because it is Hollywood. The reality off-screen is very different, however, and a night spent walking through LA will quickly teach you that.",
    instagram: "https://www.instagram.com/p/DCFIbrIyd_l/",
  },
  {
    src: "/photos/misc-img-4418.png",
    alt: "A smiling man with FPV drone goggles pushed up on his forehead, green field behind him",
    camera: "Sony",
    location: "Leland, NC",
    title: "Me flying FPV.",
    story: "BTS of me flying my drone. One of my many hobbies.",
  },
  {
    src: "/photos/misc-img-0226.png",
    alt: "Golden wild grass catching the afternoon sun",
    camera: "iPhone",
    location: "Los Angeles, CA",
    title: "Sunset in LA",
    story: "Some plants right outside of a stadium in LA.",
  },
  {
    src: "/photos/new-dsc04011.jpg",
    alt: "A calm lake behind a house on a breezy day.",
    camera: "Sony",
    location: "Leland, NC",
    title: "Lake Behind the House",
    caption: "A breezy frame from the lake behind my house.",
    story: "This is an exported frame from a video I shot on my Sony FX30. It was just a breezy day by the lake behind my house, and the frame had the kind of quiet texture that made it feel worth saving on its own.",
  },
  {
    src: "/photos/new-dsc07928.jpg",
    alt: "A candid street scene in Lima, Peru, with a person sleeping along the sidewalk.",
    camera: "Sony",
    location: "Lima, Peru",
    title: "The Streets of Peru",
    caption: "A candid moment from walking through Peru with Justin.",
    story: "I saw this scene while walking through Peru with Justin. It stayed with me because it reminded me how different a place can feel in real life compared with the version you see online, on TV, or in someone else's highlight reel.",
  },
  {
    src: "/photos/new-img-0311.jpg",
    alt: "Keiryan jumps into a high kick while waiting inside an airport.",
    camera: "Sony",
    location: "Miami, FL",
    title: "Killing Time in Miami",
    caption: "A random airport movement prompt that turned into one of the coolest frames.",
    story: "Justin and I were killing time in Miami while waiting for our plane. He told me to move around, so I jumped and threw a kick, and the frame landed in a way that felt way cooler than planned.",
  },
  {
    src: "/photos/new-img-0984.jpg",
    alt: "A small lizard posed outdoors after being carried out of the house.",
    camera: "iPhone",
    location: "Leland, NC",
    title: "Lizard Photo Shoot",
    caption: "A tiny house guest got safely relocated and briefly became the subject.",
    story: "I found this lizard inside the house, took him outside, and gave him a quick photo shoot before letting him go. It was shot on my iPhone 13 Pro Max with a ShiftCam lens attachment.",
  },
  {
    src: "/photos/new-img-2466.jpg",
    alt: "A rain-soaked scene outside an apartment complex after a storm.",
    camera: "iPhone",
    location: "Greensboro, NC",
    title: "After the Rain",
    caption: "A quiet scene outside my apartment complex right after it rained.",
    story: "This was outside the apartment complex I lived at then. It had just rained, and the whole scene had that soft, reflective look that made an ordinary place feel worth photographing.",
  },
  {
    src: "/photos/new-messcam-1914-21534007.jpg",
    alt: "A man poses outside a Miami restaurant after agreeing to be photographed.",
    camera: "Sony",
    location: "Miami, FL",
    title: "The Man Outside the Restaurant",
    caption: "A portrait request that somehow turned into a free lunch invitation.",
    story: "We saw him outside a restaurant in Miami and I thought he looked incredibly cool. I asked if we could take his photo, and he said yes. He liked the shots so much that he told us to come back for lunch on him.",
  },
  {
    src: "/photos/new-messcam-2125-00323705.jpg",
    alt: "Justin sits in an Airbnb in Cusco, looking over with a shocked expression.",
    camera: "Sony",
    location: "Cusco, Peru",
    title: "Justin, Flabbergasted",
    caption: "Justin reacting exactly how he should have after I said something wild.",
    story: "This was in our Airbnb in Cusco. Justin looked absolutely flabbergasted because I said something ridiculous, and the expression made the whole moment.",
  },
  {
    src: "/photos/new-messcam-2218-01510018.jpg",
    alt: "Llamas stand close together as Justin walks past them in Peru.",
    camera: "Sony",
    location: "Pisaq, Peru",
    title: "Llamas in Passing",
    caption: "A very specific, very candid moment with Justin and the llamas.",
    story: "Justin was walking by while two llamas were mating, and the timing made the frame feel almost staged even though it was completely candid.",
  },
  {
    src: "/photos/new-messcam-2218-01510110.jpg",
    alt: "Justin walks near a pair of llamas in Pisaq, Peru.",
    camera: "Sony",
    location: "Pisaq, Peru",
    title: "Peru, Unscripted",
    caption: "One of those travel frames that only works because nobody planned it.",
    story: "This was part of the same odd, candid moment in Pisaq. The scene had that travel-photo energy where the best part is how unplanned and strange the timing is.",
  },
  {
    src: "/photos/new-messcam-2218-01510225.jpg",
    alt: "A wide candid frame of Justin passing llamas in Peru.",
    camera: "Sony",
    location: "Pisaq, Peru",
    title: "Justin and the Llamas",
    caption: "Justin walking through a scene that was already doing plenty on its own.",
    story: "Another frame from the llama moment. I liked how Justin's casual walk through the scene made the whole thing feel even more surreal.",
  },
  {
    src: "/photos/new-messcam-2913-12154229.jpg",
    alt: "Keiryan plays basketball outside on a court.",
    camera: "Sony",
    location: "Leland, NC",
    title: "Solo Runs",
    caption: "Outside getting shots up and working on the parts that still need work.",
    story: "This is me outside playing basketball. I like shooting solo to work on my shot, and I am still working on my dribble, but there is something peaceful about putting in reps alone.",
  },
  {
    src: "/photos/new-messcam-3905-02304410.jpg",
    alt: "A spider hangs below a light outside under a porch.",
    camera: "Sony",
    location: "Leland, NC",
    title: "Porch Light Spider",
    caption: "A small scene under the porch light that felt cinematic up close.",
    story: "This spider was hanging below the light outside my house under the porch. The light, web, and shadow made it feel like a much bigger scene than it actually was.",
  },
  {
    src: "/photos/new-messcam-3907-02324002.jpg",
    alt: "A close view of a spider and web beneath an outdoor porch light.",
    camera: "Sony",
    location: "Leland, NC",
    title: "Under the Web",
    caption: "Another angle on the spider living just below the porch light.",
    story: "This is another frame from the porch spider. I liked how the shape of the web and the hard light made the moment feel a little eerie and precise.",
  },
  {
    src: "/photos/new-messcam-4208-07162510.jpg",
    alt: "Lainey sits inside a Waffle House booth in warm restaurant light.",
    camera: "Sony",
    location: "Springdale, AR",
    title: "Lainey at Waffle House",
    caption: "A Waffle House frame that felt like it belonged in a Netflix special.",
    story: "This is my homie Lainey inside a Waffle House. The light and the booth made the scene feel surprisingly cinematic, almost like a still from a little Netflix special.",
  },
  {
    src: "/photos/new-messcam-4208-07162717.jpg",
    alt: "A candid portrait of Lainey inside a Waffle House.",
    camera: "Sony",
    location: "Springdale, AR",
    title: "Late Booth Light",
    caption: "The kind of diner light that makes an ordinary night feel like a scene.",
    story: "Another shot of Lainey at Waffle House. I liked how simple it was: a booth, good light, and a moment that felt more cinematic than expected.",
  },
  {
    src: "/photos/new-messcam-4244-07330007.jpg",
    alt: "Roman bends near the water in Hawaii while checking his phone.",
    camera: "Sony",
    location: "Nanākuli, Hawaii",
    title: "Roman by the Water",
    caption: "Roman taking a second with his phone while photographing the water.",
    story: "This is my friend Roman in Hawaii. I liked the way the sign and the water framed him while he paused to look at his phone after taking photos.",
  },
  {
    src: "/photos/new-messcam-4265-08003027.jpg",
    alt: "Roman walks outdoors in Hawaii on the way to breakfast.",
    camera: "Sony",
    location: "Nanākuli, Hawaii",
    title: "Breakfast Walk in Hawaii",
    caption: "A morning walk in Hawaii on the way to get breakfast.",
    story: "Roman and I were walking in Hawaii on the way to breakfast. It was one of those simple travel mornings where the in-between moments become the photos you remember.",
  },
  {
    src: "/photos/new-messcam-4561-13573924-1.jpg",
    alt: "Laura turns in a candid moment at the state fair.",
    camera: "Sony",
    location: "Raleigh, NC",
    title: "Laura at the Fair",
    caption: "A quick candid turn from Laura at the state fair.",
    story: "This is my friend Laura at the state fair. She turned at just the right second, and the candid timing made the frame feel alive.",
  },
  {
    src: "/photos/new-messcam-4869-19341922.jpg",
    alt: "A San Diego scene from the day of a best friend's engagement.",
    camera: "Sony",
    location: "San Diego, California",
    title: "On the Way to the Proposal",
    caption: "San Diego, right before helping set up my best friend's engagement.",
    story: "This was in San Diego on the way to my best friend's engagement. I was excited and also responsible for hiding the phone and helping set up the moment.",
  },
  {
    src: "/photos/new-messcam-4881-19371715.jpg",
    alt: "A couple stands near a cliffside in San Diego before an engagement proposal.",
    camera: "Sony",
    location: "San Diego, California",
    title: "Cliffside Setup",
    caption: "The beginning of a cliffside proposal I got to help hide and capture.",
    story: "This starts the engagement sequence. I got to hide the ring in a special place and shoot from afar so the proposal could unfold in a candid way.",
  },
  {
    src: "/photos/new-messcam-4881-19372720.jpg",
    alt: "A cliffside engagement proposal unfolds in San Diego.",
    camera: "Sony",
    location: "San Diego, California",
    title: "The Question",
    caption: "The proposal moment from a distance.",
    story: "This is part of the moment he proposed on the cliffside. I was hiding out and shooting from afar, trying to catch it without interrupting what was happening.",
  },
  {
    src: "/photos/new-messcam-4881-19375029-1.jpg",
    alt: "A couple shares a proposal moment on a cliffside by the water.",
    camera: "Sony",
    location: "San Diego, California",
    title: "A Faraway Yes",
    caption: "A candid proposal frame from far enough away to let it stay theirs.",
    story: "I was really happy for them, and I loved that I could document the moment from a distance. It kept the scene intimate while still letting me capture it.",
  },
  {
    src: "/photos/new-messcam-4884-19384519.jpg",
    alt: "A newly engaged couple stands together on a San Diego cliffside.",
    camera: "Sony",
    location: "San Diego, California",
    title: "After the Yes",
    caption: "The excitement right after the proposal.",
    story: "This is one of the frames after the proposal landed. The best part was getting to watch the excitement from afar after helping set the whole thing up.",
  },
  {
    src: "/photos/new-messcam-4884-19384621.jpg",
    alt: "A candid engagement photo taken from a hidden vantage point near a cliff.",
    camera: "Sony",
    location: "San Diego, California",
    title: "The Hidden Angle",
    caption: "A hidden angle from the engagement sequence.",
    story: "I had to stay tucked away while shooting, which made the whole thing feel like a little mission. This angle captures that feeling of watching something huge happen quietly.",
  },
  {
    src: "/photos/new-messcam-4887-19394413.jpg",
    alt: "A couple celebrates an engagement near the cliffs in San Diego.",
    camera: "Sony",
    location: "San Diego, California",
    title: "Engaged in San Diego",
    caption: "The end of the cliffside engagement sequence.",
    story: "This closes out the proposal set. I was grateful I got to be part of the setup and still capture the moment in a way that felt candid and real.",
  },
  {
    src: "/photos/new-water-toss-2.jpg",
    alt: "A friend tosses a rock into the water at Kure Beach.",
    camera: "Sony",
    location: "Kure Beach, NC",
    title: "Rock Toss at Kure Beach",
    caption: "A buddy tossing a rock into the water at Kure Beach.",
    story: "This was shot at Kure Beach. One of my buddies tossed a rock into the water, and the motion made the frame feel relaxed and playful.",
  },
  {
    src: "/photos/new-dsc06799.jpg",
    alt: "A plate from the Miami taco place connected to the restaurant portrait session.",
    camera: "Sony",
    location: "Miami, FL",
    title: "Lunch on the House",
    caption: "The lunch we got after the restaurant owner liked the photos.",
    story: "This belongs with the portrait from row 7. After he liked the photos, he invited us back at a specific time and gave us lunch on the house at his taco place.",
  },
  {
    src: "/photos/new-dsc06801.jpg",
    alt: "Food and table details from a Miami taco restaurant.",
    camera: "Sony",
    location: "Miami, FL",
    title: "The Taco Place",
    caption: "A detail from the free lunch that came out of asking for a portrait.",
    story: "This is another frame from the lunch connected to the Miami restaurant owner. The whole thing felt like a perfect little reward for being willing to ask for the photo.",
  },
  {
    src: "/photos/new-dsc06811.jpg",
    alt: "A wider view of food from the Miami taco place lunch.",
    camera: "Sony",
    location: "Miami, FL",
    title: "After the Portrait",
    caption: "Part of the lunch that came from a spontaneous portrait session.",
    story: "This continues the set from the taco place. I like that the story behind the meal is as memorable as the photo itself: a portrait, a yes, and an unexpected lunch.",
  },
  {
    src: "/photos/new-dsc06812-2.jpg",
    alt: "A final food photo from the Miami taco place lunch.",
    camera: "Sony",
    location: "Miami, FL",
    title: "A Free Lunch Story",
    caption: "The last frame from the lunch we got because the restaurant owner loved the shots.",
    story: "This wraps the lunch set tied to the portrait in row 7. It is one of my favorite kinds of photo stories, where asking for a shot turns into a real human exchange.",
  },
];

export type WorkRole = {
  company: string;
  title: string;
  type?: string;
  start: string;
  end: string;
  location: string;
  bullets: { text: string }[];
};

export const workHistory: WorkRole[] = [
  {
    company: "G2i",
    title: "AI Operations Lead",
    type: "Contract",
    start: "Aug 2025",
    end: "Feb 2026",
    location: "Remote",
    bullets: [
      { text: "Designed and executed an internal human data pipeline pilot that produced actionable operational insights, validating feasibility and directly supporting early client acquisition for simulated-environment AI research." },
      { text: "Built core AI operations from inception through scale, standing up foundational systems and processes to support rapid growth from 0 to 200 contributors." },
      { text: "Owned operational execution after client acquisition, setting up the infrastructure, workflows, and tooling required for teams building simulated software environments used in reinforcement learning research." },
      { text: "Architected secure identity and access infrastructure using Okta, implementing SSO, SAML, and SCIM-based provisioning to enforce one-click onboarding and offboarding across all services." },
      { text: "Researched, selected, deployed, and integrated enterprise SaaS tooling (Slack, Google Workspace, Linear, Cursor, OnePassword), tying systems together through internal automations to reduce manual ops overhead." },
      { text: "Managed day-to-day AI operations spanning account provisioning, access controls, service reliability, vendor negotiations, and enterprise subscription upgrades in a fast-moving research environment." },
      { text: "Partnered with IT, engineering, and research stakeholders to align AI operations with security, compliance, and human data delivery requirements." },
    ],
  },
  {
    company: "Mercor",
    title: "Operations Manager",
    start: "Nov 2024",
    end: "Apr 2025",
    location: "Remote",
    bullets: [
      { text: "Spearheaded sourcing & onboarding of 600+ domain experts in <7 days, enabling client to launch their next-gen AI model on schedule." },
      { text: "Co-led AI training programs that directly supported $80M+ in ARR, managing delivery pipelines and execution across multiple high-complexity domains." },
      { text: "Shaped vendor strategy alongside C-suite and represented the company in evaluations with a trillion-dollar partner, securing a $40M ARR engagement." },
      { text: "Designed human-in-the-loop QA pipelines that increased dataset accuracy from 90% to 98%, reducing retraining cycles by two weeks." },
      { text: "Achieved 100% NPS, driving repeat engagement and earning client acknowledgment for exceptional operational leadership." },
    ],
  },
  {
    company: "Mercor",
    title: "QA Engineer",
    type: "Contract",
    start: "Aug 2024",
    end: "Oct 2024",
    location: "Leland, NC",
    bullets: [
      { text: "Executed 40+ rubric-based LLM evaluation tasks per week, performing A/B response comparisons under strict week-long sprint SLAs." },
      { text: "Identified and documented critical model failure patterns and edge cases, crafting feedback that informed the client's next AI training iteration." },
      { text: "Partnered with the project manager to escalate issues and deliver polished QA deliverables on schedule." },
    ],
  },
  {
    company: "Thatcher Technology Group",
    title: "Front End Lead",
    type: "Contract",
    start: "Mar 2023",
    end: "Dec 2023",
    location: "Remote / Illinois",
    bullets: [
      { text: "Led the complete front-end lifecycle for a Fortune 500 client, delivering accessible, responsive desktop and mobile web applications." },
      { text: "Implemented ADA-compliant code aligning deliverables with modern standards." },
      { text: "Redesigned legacy webpages into engaging, modern interfaces that improved usability and engagement." },
      { text: "Worked closely with UX designers and backend engineers to ensure seamless functionality." },
    ],
  },
  {
    company: "Developer PRO",
    title: "React Developer",
    start: "Aug 2021",
    end: "Mar 2023",
    location: "Leland, NC",
    bullets: [
      { text: "Led migration of legacy React codebases to containerized architectures using Docker, improving scalability and deployment efficiency." },
      { text: "Mentored junior developers and refined code review processes to maintain high-quality, maintainable code." },
      { text: "Developed data-driven applications using Next.js and Chart.js, boosting user engagement through interactive visualizations." },
      { text: "Transformed complex design specs into scalable, accessible web apps that met WCAG standards across browsers." },
    ],
  },
  {
    company: "Apple Inc.",
    title: "Technical Specialist & RCC Advisor",
    start: "Nov 2020",
    end: "Jul 2021",
    location: "Remote / Greensboro, NC",
    bullets: [
      { text: "Provided remote support in Retail At Home, resolving technical issues and turning detractors into promoters." },
      { text: "Simplified complex Apple ecosystem concepts to empower users and increase product confidence." },
      { text: "Applied strong communication and problem-solving skills to rebuild strained customer relationships." },
    ],
  },
  {
    company: "Apple Inc.",
    title: "Specialist",
    start: "Nov 2019",
    end: "Nov 2020",
    location: "Greensboro, NC",
    bullets: [
      { text: "Guided customers in identifying their needs to recommend the right Apple products, deepening brand connection." },
      { text: "Consistently exceeded performance targets through adaptability and consultative selling." },
      { text: "Created workflow efficiencies using Apple Shortcuts that improved team-wide customer experience strategies." },
    ],
  },
];

export const skills = [
  { group: "AI Operations", items: ["Human Data Pipelines", "Contributor Onboarding", "QA / Evals", "Vendor Strategy", "Okta SSO/SAML/SCIM"] },
  { group: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind", "Accessibility (WCAG/ADA)", "Chart.js"] },
  { group: "Tooling", items: ["Slack", "Linear", "Google Workspace", "Cursor", "1Password", "Docker", "GitHub"] },
  { group: "Leadership", items: ["Cross-functional alignment", "Mentorship", "Stakeholder demos", "Zero-to-one execution"] },
];

export type Post = {
  slug: string;
  title: string;
  date: string;
  category: "Tech" | "Ops" | "Life" | "Reflections";
  excerpt: string;
  published?: boolean;
  image?: {
    src: string;
    alt: string;
    caption?: string;
  };
  content: string; // markdown-lite
};

export const posts: Post[] = [
  {
    slug: "the-ops-layer",
    title: "The Ops Layer Nobody Talks About",
    date: "2026-04-15",
    category: "Ops",
    published: false,
    excerpt: "A new contributor signs at 9am. Are they working by lunch? That question is the whole job.",
    content: `When people imagine an AI company, they imagine the research. GPUs, loss curves, the occasional dramatic whiteboard. I've spent the last few years inside two of these companies, and I can tell you where the drama actually lives: provisioning.

Here is the test I use. A new contributor signs their agreement at 9am. Are they working by lunch?

At most companies the honest answer is "by Thursday." Their manager has to remember every tool the team uses, file six access requests, chase down two of them, and apologize in Slack about a third. Multiply that by a few hundred contributors and you are not running a research lab anymore. You are running a very slow ticketing system with a research lab attached.

That gap between Thursday and lunch is the job. At G2i I built the operations layer from zero while we grew from 0 to 200 contributors. Okta sat at the center, with SSO and SCIM provisioning wired into everything, so one click onboarded a person into Slack, Google Workspace, Linear, Cursor, and 1Password. One click offboarded them too, which matters more than people think. Security reviews stop being archaeology when access has a single source of truth.

At Mercor the same instinct showed up at a different scale. We sourced and onboarded 600+ domain experts in under a week so a client could launch their next-generation model on schedule. Nothing about that week was glamorous. It worked because the boring machinery underneath it had been built to absorb exactly that kind of load: accounts, access, QA loops, escalation paths.

The QA loops deserve their own mention. Human-in-the-loop pipelines we designed there took dataset accuracy from 90% to 98%, which sounds like a rounding error until you realize it cut two weeks of retraining out of the cycle. The model people got the credit. The pipeline made it possible. I have made my peace with that ordering. Mostly.

This is the layer nobody talks about because when it works, it's invisible. Nobody writes a launch tweet about offboarding. But every AI team that feels fast is standing on someone's identity infrastructure, and every team that feels slow is drowning in access requests it has stopped noticing.

If you're standing up one of these teams, build the boring layer first. You will never get a better excuse than day one.`,
  },
  {
    slug: "why-i-built-this",
    title: "Why I Built This Site",
    date: "2026-06-11",
    category: "Life",
    excerpt: "A thread from Legos to code, and why I wanted a home base on the internet.",
    image: {
      src: "/writing/cusco-window-headline.jpg",
      alt: "Keiryan standing in front of a wide window overlooking Cusco.",
      caption: "Standing in an Airbnb in Cusco, Peru, getting ready for the morning.",
    },
    content: `I have been a builder for as long as I can remember.

Long before I knew what code, systems, interfaces, or the internet were, I had Legos. My fascination with building things probably started with my first Lego set, which, if I remember correctly, was a firetruck.

![A young Keiryan holding a Lego fire truck build.](/writing/lego-fire-truck.jpg "Little me with my first Lego set. A firetruck.")

I loved following the instruction manual. There was something satisfying about turning that chaotic pile of plastic bricks into the thing on the box. But once I'd built the set, I would take it apart and challenge myself to build whatever else I could think of with the pieces I had. Instead of just a fire truck, I'd try to build a car, or a house, or a transformer, whatever I could imagine from what was in front of me. That became the game: figuring out what else was possible with the pieces I had.

The fascination only grew as I got more Lego sets, and then I discovered Lego Creationary, which felt like someone had turned that exact instinct into a board game. You drew a card and had to figure out how to build whatever was on it with the pieces available to you. I absolutely adored that game. I played it with whoever I could, which was mostly my little sister at the time, and when nobody would play, I'd play it solo just to get better at building things faster and more creatively.

Then Minecraft entered the picture, and Minecraft was basically Legos in an infinite space. Suddenly building wasn't limited to the pieces in a box. I could make worlds, structures, systems, hidden rooms, redstone contraptions, and whatever else I could figure out how to create. And once I'd spent enough time building inside the game, I started wondering how the game itself worked.

That led me to mods. I wanted to change mobs, build my own mods, and understand how people were making the things I loved playing with. Somewhere in there I had a thought that probably changed the direction of my life: if I could learn to code, I could build more than what the game already gave me.

I was homeschooled for sixth grade, and when I was supposed to be completing my studies, I kept sneaking off to learn Python on Grok Academy instead. I was in love with the idea that I could write in a language computers understood. I could type something, run it, break it, fix it, and slowly make the machine do what I wanted.

![A Grok Academy Python lesson showing a passed beginner programming exercise.](/writing/grok-academy-python.png "One of the Grok Academy Python lessons where I learned the basics.")

There was one problem: I wasn't allowed to have a computer. My parents were careful about how much computer time we got, which, honestly, was probably fair. The internet is a scary place for kids!

But I found a really old laptop in the garage. Thick, prehistoric, the kind of thing that must have weighed five pounds and got about an hour of battery life. I installed a Python IDE on a thumb drive, snuck the laptop out of the garage, and since my room was in the basement, I'd wait until everyone else was asleep and write code at night.

The first real thing I remember building was a terminal game based on a doll family my sister and I had invented. I wanted it to feel like some kind of hacker game. The code was absolutely terrible, just a pile of switch statements, broken logic, and oddly named variables, but it worked enough to make me feel like I'd actually created something. Code turned out to be a building block, just like my Legos from long before. And building that awful little game taught me how to debug, how to research, how to read documentation, and how to get stuck and stay with it until I found a way through.

That love of coding sat on the back burner for years. I worked at Apple retail for almost two years, which might seem unrelated, but it taught me more than I realized at the time: communication, empathy, listening, explaining technical things to people without making them feel small, staying calm when someone is frustrated and figuring out what they actually need.

I really, really wanted to stay with Apple. But when I moved to Wilmington, North Carolina, there was no Apple retail store anywhere nearby, and I knew I had to jump into something different.

So in 2021, I came back to coding. I found a mentor named Cristian Florea, a Romanian developer who introduced me to front-end development, and that was the beginning of my tech career.

It was also maybe the worst time in history to try to break into tech. The market was collapsing, companies were laying people off left and right, and my hopes and dreams of jumping straight into a development job kind of shattered. It took months and months of trying, then more months after that. After about a year and a half, I finally landed my first development role.

Since then the work has moved through front-end development, AI operations, identity infrastructure, internal tooling, and the kind of operational problem-solving that sits between people, software, and process. The tools keep changing. Legos became Minecraft, Minecraft became Python, Python became JavaScript and React and whatever else the problem requires. But the instinct hasn't changed: take the pieces in front of me, understand how they work, build the thing the instructions describe, then take it apart and see what else it could become.

That's why I built this site. I wanted a place on the internet that felt like mine. A home base where I can write things down, document what I'm learning, and connect the parts of my work that don't always fit neatly into one category. For a long time those interests felt scattered. This site is an attempt to gather them into one place. We'll see how that works out 😂

It won't be perfect, and I don't want it to be. I want it to feel alive, like something I can keep taking apart and rebuilding as I learn more. That has always been the point.

Build the thing. Learn from it. Break it open. See what else it can become.

::lego And then do it again.`,
  },
  {
    slug: "hardware-obsession",
    title: "The Never-Ending PC Build",
    date: "2026-03-18",
    category: "Tech",
    published: false,
    excerpt: "Four \"final\" builds in, still on a 2018 GPU, and weirdly at peace with it.",
    content: `My PC has been "done" four times now. I can prove it, because I still have the parts lists.

The current build, the fourth final one, is an i7-8700, an RTX 2080, 32GB of RAM, and a terabyte of storage. If you know hardware, you just winced. That is a 2018-class machine, and every spec sheet on the internet agrees I should have replaced it years ago.

Here's the thing though: I have 3,500 hours in Fortnite, and it has never once been the PC's fault that I lost.

Every year or so the itch comes back. I open the parts sites, spec out a full replacement, watch the total climb past what I'd actually pay, and start the real exercise, which is not shopping. It's being honest. What do I actually play? Competitive FPS games that are built to run on everything. What do I actually do? Code, browsers, too many Slack workspaces. Where is the actual bottleneck? Reader, it is not the GPU.

So the full rebuild collapses into one targeted upgrade, or none at all, and the 2080 lives another year.

I used to think this cycle meant I was bad at the hobby. I've come around to thinking the cycle _is_ the hobby. The research, the benchmarks, the forum threads from people whose use case is almost-but-not-quite mine, the moment you catch yourself justifying a purchase with a workload you do twice a year. Every loop through it sharpens the same skill: making decisions under constraint, with imperfect information and a real budget.

That skill turns out to be most of my actual job. Vendor evaluations, tooling decisions, build-versus-buy: it's all the parts list exercise wearing a collared shirt. Hardware is just the version with RGB and an honest feedback loop, because when you choose wrong, your frames drop where you can see them.

The 2080 will need to be replaced eventually. Something will come out that I genuinely can't run, the fifth final build will happen, and it will be glorious for about a month before the first upgrade thought arrives.

I already know what the post about it will be called.`,
  },
];

export const publishedPosts = posts.filter((post) => post.published !== false);
