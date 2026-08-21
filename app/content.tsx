import type { ReactNode } from "react";

/**
 * ─────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH FOR ALL COPY
 *  Edit texts, prices, links, images and slogans here.
 *  All page components read from this file.
 * ─────────────────────────────────────────────────────────────
 */

export const CAMPAIGN = {
  title: "The Dressing Room of a Female Knight",
  artist: "Niki",
  venue: "KOIK Contemporary, Mexico City",
  opens: "5 December 2026",
  goalEuros: 20000, // Email said €20.000. (The story PDF mentions €25.000 — confirm.)
  raisedEuros: 6400, // placeholder progress — wire to real data later
  backers: 58, // placeholder
  callToAction: "Bring me your juice",
};

/** Poetic slogans from the story (used in the hero marquee). */
export const SLOGANS = [
  "GOD SAVE THE KNIGHT",
  "WOMEN BELONG ON THE BATTLEFIELD",
  "IMAGINE A KNIGHT. IS IT A MAN?",
  "THE KNIGHT STRIKES BACK",
  "KNIGHT HAPPENS",
  "CHOOSE YOUR KNIGHT",
  "WE ARE ALL KNIGHTS",
  "YOUR KNIGHT IS IN THERE",
  "GET YOUR KNIGHT ON",
  "KNIGHTS UNITE",
  "OBSESSED WITH EPIC WOMEN",
  "FEMALE KNIGHT STUDIES",
];

/** Rings of the diana menu (inner → outer). Center = DONATE. */
export const NAV = [
  { label: "about", href: "/about" },
  { label: "story", href: "/story" },
  { label: "exhibition", href: "/exhibition" },
  { label: "academy", href: "/academy" },
  { label: "rewards", href: "/rewards" },
];

export const HEADER_LINKS = [
  { label: "Story", href: "/story" },
  { label: "Exhibition", href: "/exhibition" },
  { label: "Academy", href: "/academy" },
  { label: "Rewards", href: "/rewards" },
];

/** ─── Reward tiers ─── */
export type Reward = {
  id: string;
  name: string;
  price: string;
  min: number; // suggested minimum in euros
  tagline: string;
  body: string;
  perks: string[];
  href: string; // detail page
  rings: number; // how many concentric rings the target draws
  filledCenter: boolean;
};

export const REWARDS: Reward[] = [
  {
    id: "blanc",
    name: "Blanc",
    price: "Anything you can spare",
    min: 5,
    tagline: "Every gift builds the armour — size doesn't change what it means.",
    body: "Support a woman building her first solo exhibition, in her own name, for the first time in her life. Every euro goes straight into the room.",
    perks: [
      "Your name sits inside the work, not beside it",
      "You watch a world get built, in real time",
    ],
    href: "/rewards",
    rings: 1,
    filledCenter: false,
  },
  {
    id: "founding",
    name: "Founding Member",
    price: "€50 or more",
    min: 50,
    tagline: "A seat inside the process.",
    body: "Unlimited access to the classroom. All Knight Teachings, as I make them — the research, the rituals, the process, live.",
    perks: [
      "Founding Member of the Knight Academy",
      "All Knight Teachings, live as they happen",
      "Part of a lineage — your name inside the work",
    ],
    href: "/academy/teachings",
    rings: 2,
    filledCenter: false,
  },
  {
    id: "discovery",
    name: "1:1 Knight Discovery Session",
    price: "€250 or more",
    min: 250,
    tagline: "Meet the knight already standing in you.",
    body: "A 90-minute session to discover your own inner knight: your armour, your sword, your banner — translated into a tangible image that could become the base of your own portrait.",
    perks: [
      "Everything in Founding Member",
      "90-minute 1:1 session (online or in person)",
      "A personalised wrap-up — yours to keep",
    ],
    href: "/academy/discovery",
    rings: 2,
    filledCenter: true,
  },
  {
    id: "table",
    name: "The Knight Table",
    price: "€750 or more",
    min: 750,
    tagline: "You no longer have to be a solo knight.",
    body: "Two Knight Nights. An exclusive seat at the table where the most powerful truths of female knighthood get shared out loud: legacy, epic life, divine calling, banners, conviction, ritual.",
    perks: [
      "Everything in the lower tiers",
      "A reserved seat — Mexico City or the Netherlands",
      "An artistic initiation into knighthood",
    ],
    href: "/academy/table",
    rings: 3,
    filledCenter: true,
  },
];

/** ─── Article block model (drives all long-form pages) ─── */
export type Block =
  | { type: "kicker"; text: string }
  | { type: "title"; text: string }
  | { type: "lead"; node: ReactNode }
  | { type: "p"; node: ReactNode }
  | { type: "h2"; text: string }
  | { type: "list"; items: ReactNode[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "target" }
  | { type: "image"; src: string; alt: string }
  | {
      type: "images";
      items: { src: string; alt: string }[];
    }
  | { type: "signature"; text: string };

/** Small placeholder image helper — swap for Niki's real assets later. */
const img = (id: string, q = 80) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1200&q=${q}`;

export const IMG = {
  armour: img("1509248961158-e54f6934749c"),
  banner: img("1519681393784-d120267933ba"),
  studio: img("1513364776144-60967b0f800f"),
  ritual: img("1507003211169-0a1dd7228f2d"),
  horse: img("1553284965-83fd3e82fa5a"),
  room: img("1600607687939-ce8a6c25118c"),
  table: img("1414235077428-338989a2e8c0"),
  mexico: img("1518105779142-d975f22f1b0a"),
  poster: img("1561214115-f2f134cc4912"),
};

/* ───────────────────────── ABOUT / HOME ───────────────────────── */
export const ABOUT: Block[] = [
  { type: "kicker", text: "About the Knight Academy" },
  {
    type: "title",
    text: "Six hundred years ago, a girl with no title walked into a court and crowned a king.",
  },
  {
    type: "lead",
    node: (
      <>
        She&rsquo;d never held a sword in anger. Within a year she&rsquo;d turned
        a hundred-year war — not through force, but through conviction, a banner
        she loved more than her blade, and a presence that made hardened generals
        kneel beside her before battle.
      </>
    ),
  },
  {
    type: "p",
    node: (
      <>
        Jeanne d&rsquo;Arc is not a fairy tale to me. She&rsquo;s proof. Proof of
        what happens when a woman answers a calling she can&rsquo;t fully explain —
        and refuses to shrink it to make it easier for everyone else to believe.
      </>
    ),
  },
  {
    type: "p",
    node: (
      <>
        The Knight Academy is the classroom I built around one question:{" "}
        <strong>what if more of us did the same?</strong> Not a history lesson. A
        living practice.
      </>
    ),
  },
  { type: "target" },
  { type: "h2", text: "Five doorways, borrowed from Jeanne's own life" },
  {
    type: "p",
    node: (
      <>
        I study epic women — real and fictional, past and present — and ask
        what&rsquo;s underneath the myth. The calling. The conviction. The banner.
        The ritual. The armour and the sword. Five doorways that turn out to fit
        almost anyone&rsquo;s life.
      </>
    ),
  },
  {
    type: "list",
    items: [
      <>Jeanne d&rsquo;Arc, obviously — but also Jane Goodall, Frida Kahlo,</>,
      <>Princess Diana, Lady Gaga, Bella Baxter, Pippi Longstocking.</>,
      <>Real or fictional — doesn&rsquo;t matter. What matters is the pattern.</>,
      <>Each teaching, you choose your knight. Sometimes online, sometimes live.</>,
    ],
  },
  {
    type: "quote",
    text: "This is for you if some part of you already knows: this is not a small life. You no longer have to figure it out alone.",
  },
  {
    type: "images",
    items: [
      { src: IMG.studio, alt: "The classroom where the research happens" },
      { src: IMG.ritual, alt: "A ritual in practice" },
    ],
  },
];

/* ───────────────────────── MY STORY ───────────────────────── */
export const STORY: Block[] = [
  { type: "kicker", text: "Big news. The armour is being forged." },
  { type: "title", text: "The dressing room of a female knight" },
  {
    type: "lead",
    node: (
      <>
        <strong>This year, I become a knight.</strong> Not a costume. A calling.
        I&rsquo;m building the room where she prepares — and the room where she
        lays the armour down again.
      </>
    ),
  },
  {
    type: "p",
    node: (
      <>
        I&rsquo;m raising to build it right. Not to ask permission. To build the
        room. The first solo exhibition of my life.
      </>
    ),
  },
  { type: "target" },
  { type: "h2", text: "My story" },
  {
    type: "p",
    node: (
      <>
        2025 was the hardest year of my life. My body collapsed. My spirit
        followed. I let go of the campaign studio I built from scratch, of the
        project that took a decade of my life and travelled the world, of the
        Netherlands, my income, my identity. Everything asked for rest. So I
        listened.
      </>
    ),
  },
  {
    type: "p",
    node: (
      <>
        I discovered Mexico City. I worked as a chef. I cooked, I painted, I
        learned to VJ. I stripped myself down to the studs and let something else
        come up in the space that opened.
      </>
    ),
  },
  {
    type: "p",
    node: (
      <>
        Along the way I went looking for a new source of strength. I studied epic
        women — the fictional and the real, the fierce and the quiet. And I kept
        circling back to one: Jeanne d&rsquo;Arc. What moves me isn&rsquo;t the
        hero myth. It&rsquo;s her radical inner conviction. Deeply feminine.
        Deeply powerful. Both, at once.
      </>
    ),
  },
  {
    type: "quote",
    text: "For fifteen years I lent my voice to other people's missions. Behind a client's name, I was safe. Behind my own name, I'm not. This is the moment I stop hiding.",
  },
  {
    type: "image",
    src: IMG.armour,
    alt: "The armour, being forged",
  },
  { type: "h2", text: "Why trust the hands building this" },
  {
    type: "p",
    node: (
      <>
        I co-founded <strong>Human Rights Tattoo</strong>, a decade-long global
        art project that tattooed the full Universal Declaration of Human Rights,
        letter by letter, on 6.773 people worldwide. It won the Red Dot Design
        Award and the Red Dot Grand Prix, and travelled to museums in China,
        Mexico and France.
      </>
    ),
  },
  {
    type: "p",
    node: (
      <>
        I know how ideas grow, how an audience forms, and how a vision becomes a
        room people walk into and feel. I&rsquo;ve just never done it for myself
        before. Now I am.
      </>
    ),
  },
  { type: "signature", text: "🖤 Niki — The dot says it all." },
];

/* ───────────────────────── EXHIBITION ───────────────────────── */
export const EXHIBITION: Block[] = [
  { type: "kicker", text: "The offer" },
  { type: "title", text: "Eight new works. Eight makers. One world, built together." },
  {
    type: "lead",
    node: (
      <>
        <strong>The Dressing Room of a Female Knight</strong> is a spatial
        exhibition — armour, banner, ritual, horse, dressing room, conviction —
        reimagined for a knight of now. Not a historical costume. A contemporary
        practice.
      </>
    ),
  },
  { type: "image", src: IMG.room, alt: "The dressing room installation" },
  { type: "h2", text: "The eight works" },
  {
    type: "list",
    items: [
      <><strong>Photographic series</strong> — a female reinterpretation of the four knights of the tarot, with Diego Guadarrama</>,
      <><strong>VJ work</strong>, with visual artist/architect Erik López</>,
      <><strong>Video work</strong>, with visual storyteller Armando Juarez</>,
      <><strong>Poster wall</strong>, with graphic designer Olivier van Zummeren</>,
      <><strong>Floor text / word art</strong>, with poet Loes van Rooij</>,
      <><strong>Banners</strong> — Jeanne d&rsquo;Arc&rsquo;s own banner, also shown as five billboard works across Mexico City, with Publimex</>,
      <><strong>Dressing room installation</strong>, with fashion designer Gabrielle Venguer</>,
      <><strong>Performance / ritual</strong>, with music by Edgar Mondragón and somatic guidance from Dolores Hoppener Mae</>,
    ],
  },
  { type: "target" },
  {
    type: "p",
    node: (
      <>
        The exhibition opens at KOIK Contemporary on{" "}
        <strong>5 December 2026</strong>, runs through January 2027, and travels
        to the Netherlands in spring 2027 — bringing the two worlds I live and
        work between finally into one room.
      </>
    ),
  },
  {
    type: "quote",
    text: "Your gift funds the raw material of this: production, materials, and fair pay for eight collaborators building something that doesn't exist yet.",
  },
  {
    type: "images",
    items: [
      { src: IMG.banner, alt: "Banner work" },
      { src: IMG.mexico, alt: "Billboards across Mexico City" },
    ],
  },
];

/* ───────────────────────── KNIGHT ACADEMY (hub) ───────────────────────── */
export const ACADEMY_INTRO: Block[] = [
  { type: "kicker", text: "Knight Academy" },
  { type: "title", text: "A classroom built around the obsession I couldn't put down." },
  {
    type: "lead",
    node: (
      <>
        All year, one question followed me everywhere: what if we actually studied
        the women who lived epic lives — and learned from them? Not as history. As
        practice.
      </>
    ),
  },
  {
    type: "p",
    node: (
      <>
        This isn&rsquo;t a personality quiz. It&rsquo;s a classroom for women who
        already suspect they weren&rsquo;t made for a small life. Each teaching,
        you choose your knight.
      </>
    ),
  },
];

/* ───────────────────────── KNIGHT TEACHINGS ───────────────────────── */
export const TEACHINGS: Block[] = [
  { type: "kicker", text: "Founding Member · €50" },
  { type: "title", text: "Knight Teachings" },
  {
    type: "lead",
    node: (
      <>
        The Knight Academy is where I share the research, the rituals, and the
        teachings behind this work as they happen — not a recap, a live account.
      </>
    ),
  },
  { type: "h2", text: "How it works" },
  {
    type: "list",
    items: [
      <>Donate €50 or more</>,
      <>Join the classroom</>,
      <>Choose your knight</>,
      <>Learn — sometimes online, sometimes live</>,
    ],
  },
  {
    type: "quote",
    text: "You don't need credentials to recognise a calling when you feel one.",
  },
];

/* ───────────────────────── 1:1 DISCOVERY ───────────────────────── */
export const DISCOVERY: Block[] = [
  { type: "kicker", text: "1:1 Session · €250" },
  { type: "title", text: "Some call it personal branding. I call it meeting your knight." },
  {
    type: "lead",
    node: (
      <>
        One clear mirror. One sharp blade. One honest guide. We sit down and go
        straight for what matters: your calling, your conviction, your banner,
        your armour, your sword, your rituals.
      </>
    ),
  },
  {
    type: "p",
    node: (
      <>
        Not a personality test — a translation of what&rsquo;s already true about
        you, into a vision you can actually use. In 90 minutes we don&rsquo;t
        build a knight from nothing. We uncover the one already standing in you.
      </>
    ),
  },
  { type: "image", src: IMG.ritual, alt: "A discovery session in progress" },
  { type: "h2", text: "How it works" },
  {
    type: "list",
    items: [
      <>Donate €250 or more</>,
      <>Book your session</>,
      <>Fill out a short questionnaire</>,
      <>90-minute 1:1 session (online or in person)</>,
      <>Receive your personalised wrap-up</>,
    ],
  },
  {
    type: "quote",
    text: "Throw in a coin. Let the imagination machine run. Once you see your knight, you don't unsee her.",
  },
];

/* ───────────────────────── KNIGHT TABLE ───────────────────────── */
export const TABLE: Block[] = [
  { type: "kicker", text: "The Knight Table · €750" },
  { type: "title", text: "Once a season, we gather." },
  {
    type: "lead",
    node: (
      <>
        A round table. A sacred ritual. An exclusive seat. We eat. We drink. We
        talk about knighthood — legacy, calling, banners, conviction, ritual, the
        sword. Not to network. Not to perform.
      </>
    ),
  },
  {
    type: "quote",
    text: "Each Night is an artistic initiation into knighthood. You don't just talk about becoming. You become.",
  },
  { type: "image", src: IMG.table, alt: "The round table" },
  { type: "h2", text: "Two nights. Two countries. Two kinds of power." },
  {
    type: "p",
    node: (
      <>
        <strong>Mexico City — December 4th.</strong> The night before the
        exhibition opens. A secret table, a closed door. This is the night you are
        <em> geslagen tot ridder</em> — dubbed, the old way. You arrive one thing.
        You leave another.
      </>
    ),
  },
  {
    type: "p",
    node: (
      <>
        <strong>The Netherlands.</strong> A table joined by a woman who is,
        officially, a knight — sword and all, no metaphor required. She answers,
        honestly, what it costs and what it carries.
      </>
    ),
  },
  { type: "h2", text: "How it works" },
  {
    type: "list",
    items: [
      <>Donate €750 or more</>,
      <>Reserve your seat</>,
      <>Choose Mexico City or the Netherlands</>,
      <>Show up</>,
    ],
  },
];

/* ───────────────────────── WHERE THE MONEY GOES ───────────────────────── */
export const BUDGET = [
  { label: "Production & materials", pct: 40, note: "Armour, banners, dressing room, print" },
  { label: "Fair pay — 8 collaborators", pct: 35, note: "Photographer, VJ, poet, designers, musicians" },
  { label: "Venue & install at KOIK", pct: 15, note: "Mexico City, opening 5 Dec 2026" },
  { label: "Travel to the Netherlands", pct: 10, note: "Bringing the show to a second room, spring 2027" },
];

export const MONEY: Block[] = [
  { type: "kicker", text: "Where the money goes" },
  { type: "title", text: "Not a donation into a void. A seat inside the process." },
  {
    type: "lead",
    node: (
      <>
        This isn&rsquo;t charity. It&rsquo;s an invitation to build something
        unmistakable, together. Every euro goes straight into the room — and you
        can see exactly where.
      </>
    ),
  },
];
