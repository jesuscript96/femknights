import type { ReactNode } from "react";

/**
 * ─────────────────────────────────────────────────────────────
 *  SINGLE SOURCE OF TRUTH FOR ALL COPY
 *  Texts follow "Briefing home and rewards" (Niki, Aug 2026).
 *  Where the briefing and older copy disagreed, the briefing wins.
 * ─────────────────────────────────────────────────────────────
 */

export const CAMPAIGN = {
  studio: "Studio Niki",
  title: "The Dressing Room of a Female Knight",
  artist: "Niki",
  venue: "KOIK Contemporary, Mexico City",
  opens: "5 December 2026",
  runsThrough: "February 2027",
  travelsTo: "the Netherlands, spring 2027",
  goalEuros: 25000, // Briefing: "I'm raising €25.000 to build it right."
  raisedEuros: 6400, // placeholder progress — wire to real data later
  backers: 58, // placeholder
  callToAction: "Bring me your juice",
  monthlyMonths: 5, // Briefing: "MONTHLY (5 months)"
};

/**
 * Donorbox handles the payment only; the site keeps the choice (room, amount,
 * message). Leave `campaign` empty and "Start payment" stays simulated. Fill in
 * the slug from donorbox.org/<slug> and it hands off to Donorbox, with the
 * amount and monthly/once already set.
 */
export const DONORBOX = {
  campaign: "",
};

/** The single line that runs across the home page. */
export const MARQUEE_LINE = "BIG NEWS. THE ARMOUR IS BEING FORGED.";

/** Poetic slogans from the story (used on the rewards + academy pages). */
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

/**
 * The diana is the donation button.
 * Rings run inner → outer: blanc · 750 · 250 · 50 · rewards.
 * The centre is an X that closes it.
 */
export const DIANA_RINGS = [
  { label: "blanc", href: "/rewards/open-field" },
  { label: "750", href: "/rewards/round-table" },
  { label: "250", href: "/rewards/dressing-room" },
  { label: "50", href: "/rewards/class-room" },
  { label: "rewards", href: "/rewards" },
];

/** The cross menu in the top right corner carries the site navigation. */
export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "My story", href: "/story" },
  { label: "The exhibition", href: "/exhibition" },
  { label: "Rewards", href: "/rewards" },
  { label: "Knight Academy", href: "/academy" },
  { label: "Where the money goes", href: "/where-the-money-goes" },
  { label: "Donate", href: "/donate" },
];

/** ─── Reward tiers ─── */

export type IncludedGroup = { group: string; items: string[] };

export type RewardDetail = {
  /** The thank-you line that sits directly under the reward name. */
  thanks: string;
  image: string;
  /** Some rooms open on motion rather than a still. */
  video?: { src: string; poster: string; portrait?: boolean };
  statement: string;
  lead: string;
  reframe: { title: string; paras: string[] };
  forYouIf: { title: string; items: string[] };
  story: { title: string; quote?: string; paras: string[] };
  doorways?: { name: string; body: string }[];
  walkAway?: { title: string; paras: string[] };
  included: { title: string; intro?: string; groups: IncludedGroup[] };
  howItWorks: string[];
  investment: { title: string; line: string; note?: string };
  /** Testimonials are still missing — Niki flagged all three in the briefing. */
  proof: { pending: string };
  close: { lines: string[]; cta: string };
};

export type Reward = {
  id: string;
  slug: string;
  name: string;
  price: string;
  min: number;
  /** The Open Field accepts an empty amount — it is the blank cheque. */
  allowBlank?: boolean;
  tagline: string;
  body: string;
  perks: string[];
  rings: number;
  filledCenter: boolean;
  cta: string;
  detail: RewardDetail;
};

const img = (name: string) => `/img/${name}.webp`;

/**
 * Niki's own material (Dressingroom folder), converted to WebP.
 * No stock placeholders left.
 */
export const IMG = {
  // Jeanne d'Arc
  jeanne: img("jeanne-lilies"),
  jeanneBanner: img("jeanne-banner"),
  jeanneLynch: img("jeanne-lynch"),

  // Armour and knights
  armour: img("knight-winged"),
  knightYoung: img("knight-young"),
  knightChild: img("knight-child"),
  knightNow: img("knight-subway"),
  armourVintage: img("armour-vintage"),
  armourOrnate: img("armour-ornate"),
  horse: img("rider"),

  // The rooms
  room: img("dressing-room-red"),
  redAxe: img("red-axe"),
  field: img("open-field"),
  ritual: img("knight-bjork"),

  // Grids and gatherings
  table: img("grid-four-c"),
  mexico: img("grid-four-a"),
  poster: img("grid-four-b"),

  // Portraits used as sections
  studio: img("knight-child"),
  classroom: img("knight-goodall"),
  mirror: img("knight-bella"),
  portrait: img("knight-brienne"),
};

export const VIDEO = {
  hero: { src: "/video/hero.mp4", poster: "/video/hero-poster.jpg" },
  dressingRoom: {
    src: "/video/dressing-room.mp4",
    poster: "/video/dressing-room-poster.jpg",
    portrait: true,
  },
};

export const LOGO = "/img/studio-niki.png";

/**
 * The knight catalogue — "Every teaching, you choose your knight.
 * I have an amazing knight catalogue." (briefing)
 * Only figures identified with confidence are named here.
 */
export const KNIGHTS = [
  { name: "Jeanne d'Arc", src: img("jeanne-lilies") },
  { name: "Jane Goodall", src: img("knight-goodall") },
  { name: "Frida Kahlo", src: img("knight-frida") },
  { name: "Björk", src: img("knight-bjork") },
  { name: "Princess Leia", src: img("knight-leia") },
  { name: "Malala Yousafzai", src: img("knight-malala") },
  { name: "Princess Diana", src: img("knight-diana") },
  { name: "Vivienne Westwood", src: img("knight-westwood") },
  { name: "Serena Williams", src: img("knight-serena") },
  { name: "Yoko Ono", src: img("knight-yoko") },
  { name: "Sojourner Truth", src: img("knight-sojourner") },
  { name: "Ruth Bader Ginsburg", src: img("knight-rbg") },
  { name: "Bella Baxter", src: img("knight-bella") },
  { name: "Brienne of Tarth", src: img("knight-brienne") },
  { name: "Lady Gaga", src: img("knight-gaga") },
  { name: "Jennifer Coolidge", src: img("knight-coolidge") },
];

/** Shared "what's included" groups, so a change lands on every tier at once. */
const FROM_CLASSROOM: IncludedGroup = {
  group: "From The Class Room",
  items: [
    "8 Knight Teachings, starting September — 1 live in the Netherlands, 1 live in Mexico City, 6 online",
    "Founding Member status in the Knight Academy",
    "Access to the classroom Telegram",
    "Permission to bring someone",
  ],
};

const FROM_DRESSING_ROOM: IncludedGroup = {
  group: "From The Dressing Room",
  items: [
    "One 90-minute 1:1 Knight Discovery Session — online or in person",
    "A personalised wrap-up of what surfaced — yours to keep",
  ],
};

const FROM_ROUND_TABLE: IncludedGroup = {
  group: "From The Round Table",
  items: [
    "One seat at a Round Table — Mexico City or the Netherlands",
    "Artistic proof from the evening",
  ],
};

export const SEVEN_DOORWAYS = [
  {
    name: "The calling",
    body: "The pull toward something you can't fully explain, and don't shrink to make it more believable.",
  },
  {
    name: "Devotion",
    body: "A banner you love more than your blade.",
  },
  {
    name: "Conviction",
    body: "Not an idea. Something lived, that starts shaping the situations around you.",
  },
  {
    name: "The dressing room",
    body: "The place for transformation and ritual. Preparing for the next level. Preparing for the uncomfortable.",
  },
  {
    name: "The armour",
    body: "What protects you, and what it makes impossible while it does.",
  },
  {
    name: "The sword",
    body: "The part of you that's already sharp, whether or not you've used it yet.",
  },
  {
    name: "Horse, banners and symbols",
    body: "The visible signs that carry a mission further than you can carry it alone.",
  },
];

export const REWARDS: Reward[] = [
  {
    id: "class-room",
    slug: "class-room",
    name: "The Class Room",
    price: "€50 or more",
    min: 50,
    tagline: "Some of us were never made for a small life.",
    body: "Unlimited access to the classroom in which I teach my most profound knight teachings. All of them, as I make them — the research, the rituals, the process, live.",
    perks: [
      "Founding Member of the Knight Academy",
      "8 Knight Teachings, live as they happen",
      "Part of a lineage — your name inside the work",
    ],
    rings: 2,
    filledCenter: false,
    cta: "Join as a founding member",
    detail: {
      thanks:
        "As a BIG thank you for your donation I call you a Founding Member of the Knight Academy and give unlimited access to the CLASS ROOM in which I teach my most profound knight teachings.",
      image: IMG.classroom,
      statement: "Some of us were never made for a small life.",
      lead: "The Knight Academy is a 12-week live classroom in female knighthood — for people who already suspect that about themselves.",
      reframe: {
        title: "The reframe",
        paras: [
          "All year, one question followed me everywhere: what if we actually studied the women who lived epic lives — and learned from them?",
          "In this room I hand over the most outstanding, mind-blowing things I've found about female knighthood — after a year of full-blown obsession. Inspired. Activated. Nothing about me is the same since.",
          "I need to share this. And I promise: it's the most colourful, most powerful classroom you've ever sat in. Not as history. As practice.",
          "It's a classroom for people who already suspect they are not made for a small life. And my wish is that it may inspire you to step into your bigness as much as it did me.",
        ],
      },
      forYouIf: {
        title: "This is for you if…",
        items: [
          "You love stories of epic women, and you want to know why I've been obsessed with one for a year",
          "You're curious what's actually underneath the myth — the calling, the conviction, the banner, the sword",
          "You want to lead, and you're looking for a new armour, a new banner, a new horse",
          "You're ready for a more devoted relationship with your own calling",
          "Some part of you already knows: this is not a small life",
        ],
      },
      story: {
        title: "My story",
        quote:
          "The Knight Teachings were born on my fortieth birthday. I invited my Mexico people for a different kind of night. A round table, dedicated to female knighthood.",
        paras: [
          "I hadn't planned to teach — I just started talking about the women I couldn't stop studying. Jeanne d'Arc, obviously. But also Jane Goodall. Frida Kahlo. Björk. Pippi Longstocking. Princess Leia.",
          "It was so much fun teaching. I loved the conversations after even more.",
          "Six hundred years ago, a seventeen-year-old girl with no title, no army, no education, walked into a royal court and told a king she'd been sent to crown him. She'd never held a sword in anger. Within a year, she'd turned a hundred-year war — not through force, but through conviction, a banner she loved more than her blade, and a presence that made hardened generals kneel beside her before battle.",
          "Jeanne d'Arc is not a fairy tale to me. She's proof. Proof of what happens when a woman answers a calling she can't fully explain — and refuses to shrink it to make it easier for everyone else to believe.",
          "While studying her, and the others, I realised I had too many stories to keep to myself. So I built a model out of them. Seven doorways, borrowed from lives that were anything but small, that turn out to fit almost anyone's.",
          "Then I built a room to teach it in. Not a history lesson. A living practice. And you are super invited to join.",
        ],
      },
      doorways: SEVEN_DOORWAYS,
      included: {
        title: "What's included",
        groups: [
          {
            group: "The Class Room",
            items: [
              "8 extraordinary teachings, starting September",
              "1 live session in the Netherlands, 1 live session in Mexico City, 6 online",
              "Every teaching, you choose your knight — I have an amazing knight catalogue",
              "Founding Member status in the Knight Academy",
              "Access to the classroom Telegram",
              "Permission to bring someone who'd appreciate a classroom built around female knighthood",
            ],
          },
        ],
      },
      howItWorks: [
        "Donate",
        "Join the classroom",
        "Choose your knight",
        "Learn — sometimes online, sometimes live",
      ],
      investment: {
        title: "The investment",
        line: "€50 or more.",
        note: "One time, or monthly.",
      },
      proof: {
        pending:
          "A short quote from a guest at the original birthday round table goes here — real and attributable, once it lands.",
      },
      close: {
        lines: [
          "You no longer have to figure it out alone.",
          "Choose your knight.",
        ],
        cta: "Join the classroom",
      },
    },
  },
  {
    id: "dressing-room",
    slug: "dressing-room",
    name: "The Dressing Room",
    price: "€250 or more",
    min: 250,
    tagline: "Meet the knight already standing in you.",
    body: "A 1:1 Knight Discovery Session. Ninety minutes to uncover your own inner knight: your calling, your armour, your sword, your banner — and the rituals that carry them.",
    perks: [
      "Everything in The Class Room",
      "90-minute 1:1 session (online or in person)",
      "A personalised wrap-up — yours to keep",
    ],
    rings: 2,
    filledCenter: true,
    cta: "Book your Knight Discovery Session",
    detail: {
      thanks:
        "As a BIG thank you for your donation I call you a Founding Member of the Knight Academy, and I invite you into the CLASS ROOM and the DRESSING ROOM for a 1:1 Knight Discovery Session.",
      image: IMG.mirror,
      video: VIDEO.dressingRoom,
      statement: "Some call it personal branding. I call it meeting your knight.",
      lead: "One clear mirror. One sharp blade. One honest guide. Ninety minutes, and you don't unsee her again.",
      reframe: {
        title: "The reframe",
        paras: [
          "Not a personality test. Not a vision board.",
          "Ninety minutes where I read you the way I read a blueprint — fast, precise, uncomfortably accurate. What comes out isn't advice. It's the knight already standing in you, just no longer invisible to yourself.",
        ],
      },
      forYouIf: {
        title: "This is for you if…",
        items: [
          "You bring a calling that's still half-formed, and you're tired of carrying it alone",
          "You want a mirror sharp enough to actually show you something",
          "You need clarity before a photoshoot, a launch, a birthday, a hard conversation with your boss",
          "You'd rather uncover the knight already standing in you than build one from nothing",
          "You trust a blueprint more than a workbook",
          "You want your best ideas to arrive in the room, not three weeks later in the shower",
        ],
      },
      story: {
        title: "The story",
        paras: [
          "I've spent fifteen years reading blueprints. Brands, campaigns, people. I read what's strong, what's missing, what's ready to grow — quickly, almost before I mean to.",
          "I used to lend that instinct to other people's missions. Fifteen years of building worlds for brands, for clients, for causes that weren't mine. It taught me everything about giving an idea its full shape. It also let me hide. Behind a client, I could disappear into the work. Behind my own name, I can't.",
          "The Knight Discovery Session is the same instinct, pointed at you instead of a brand — and pointed at me, for the first time, without a client standing between us.",
          "We sit down and go straight for what matters: your calling. Your conviction. Your flags and banner. Your armour, your sword, your rituals. You bring your calling, half-formed. I bring the blueprint-reading. In ninety minutes, we don't build a knight from nothing. We uncover the one already standing in you.",
          "I guide. I ask the questions no one else asks. We ride into the field of unlimited possibility, together. Everything that surfaces in that room is yours to keep.",
        ],
      },
      walkAway: {
        title: "What you walk away with",
        paras: [
          "Clarity. A banner. A sharper self-image. A name. A direction. A ritual. A colour that's suddenly obvious. Or simply the quiet certainty of knowing which knight you are.",
          "It could become the mood board for your next shoot. The idea behind your next birthday. The sharpening you need before you walk into that room.",
          "Throw in a coin. Let the imagination machine run.",
        ],
      },
      included: {
        title: "What's included",
        intro:
          "You step into the Dressing Room with full access to the Class Room too — nothing here stands alone.",
        groups: [
          FROM_CLASSROOM,
          {
            group: "Plus, The Dressing Room itself",
            items: [
              "One 90-minute 1:1 Knight Discovery Session — online or in person",
              "A short questionnaire beforehand, so we start already warm",
              "A personalised wrap-up of what surfaced — yours to keep",
            ],
          },
        ],
      },
      howItWorks: [
        "Donate",
        "Book your session",
        "Fill out a short questionnaire",
        "90-minute session",
        "Receive your wrap-up",
      ],
      investment: {
        title: "The investment",
        line: "€250 or more.",
      },
      proof: {
        pending:
          "A short quote from a past 1:1 client goes here — ideally one where the wrap-up led somewhere concrete: a campaign, a shoot, a decision made.",
      },
      close: {
        lines: ["Once you see your knight, you don't unsee her."],
        cta: "Book the Dressing Room",
      },
    },
  },
  {
    id: "round-table",
    slug: "round-table",
    name: "The Round Table",
    price: "€750 or more",
    min: 750,
    tagline: "You no longer have to be a solo knight.",
    body: "A seat at the round table. Two Knight Nights, two countries, two kinds of power — where the most powerful truths of female knighthood get shared out loud.",
    perks: [
      "Everything in the lower rooms",
      "A reserved seat — Mexico City or the Netherlands",
      "An artistic initiation into knighthood",
    ],
    rings: 3,
    filledCenter: true,
    cta: "Reserve your seat",
    detail: {
      thanks:
        "As a BIG thank you for your donation I call you a Founding Member of the Knight Academy, and I keep a seat for you at the table where knighthood gets handed over out loud.",
      image: IMG.table,
      statement: "Once a season, we gather.",
      lead: "A round table. A ritual. No hierarchy, no one performing as the expert — just knights, building power together instead of alone.",
      reframe: {
        title: "The reframe",
        paras: [
          "Not a networking dinner. Not a talk about becoming.",
          "A table where power actually rises — where archetypes get bodies and creation happens on the spot, in front of you, with you, because of you.",
          "You don't leave having heard about transformation. You leave transformed.",
        ],
      },
      forYouIf: {
        title: "This is for you if…",
        items: [
          "You want to be part of something crazy powerful, not just hear about it after",
          "You're ready to sit at a table with no hierarchy and no expert performing at the head of it",
          "You want witnesses to a threshold you're crossing, not just notes about it",
          "You're drawn to ritual that isn't a metaphor",
          "You already know which table you'd choose, Mexico City or the Netherlands, before you finish reading this",
        ],
      },
      story: {
        title: "The story",
        quote:
          "What's made in that room stays real after the table is cleared. You don't leave with notes. You leave with witnesses, and with artistic proof.",
        paras: [
          "We eat. We drink. We talk about knighthood — legacy, calling, banners, conviction, ritual, the sword. Not to network. Not to perform.",
          "Each Night is an artistic initiation into knighthood. Two nights. Two countries. Two kinds of power.",
          "Mexico City — 4 December. The night before the exhibition opens. A secret table. A closed door. This is the night you are dubbed — the old way. A hand, a blade, a shoulder, a title given out loud, in front of witnesses who will remember it happened. You arrive at the table one thing. You leave it another. The next morning, the doors of the exhibition open. You'll already be a knight when you walk through them.",
          "The Netherlands. A table joined by a woman who is, officially, a knight — geridderd, sword and all, no metaphor required. She sits across from the version of knighthood we're building for ourselves, and answers, honestly, what it costs and what it carries.",
          "You no longer have to be a solo knight. You just have to show up to the table.",
        ],
      },
      included: {
        title: "What's included",
        intro:
          "The Round Table sits on top of both rooms before it — you arrive with all of it, not just a seat.",
        groups: [
          FROM_CLASSROOM,
          FROM_DRESSING_ROOM,
          {
            group: "Plus, The Round Table itself",
            items: [
              "One seat at a Round Table — Mexico City or the Netherlands, your choice",
              "Artistic proof from the evening",
            ],
          },
        ],
      },
      howItWorks: [
        "Donate",
        "Reserve your seat",
        "Choose Mexico City or the Netherlands",
        "Show up",
      ],
      investment: {
        title: "The investment",
        line: "€750 or more.",
        note: "Seats are limited. After your gift, you'll receive a short form to reserve your place.",
      },
      proof: {
        pending:
          "An account from a guest at the original birthday round table goes here — the closest thing to a precedent this room already has.",
      },
      close: {
        lines: ["You arrive at the table one thing. You leave it another."],
        cta: "Join the knights table",
      },
    },
  },
  {
    id: "open-field",
    slug: "open-field",
    name: "The Open Field",
    price: "Name your number",
    min: 5,
    allowBlank: true,
    tagline: "Where the blank cheque lives.",
    body: "No number required. Just the confidence to hand me one, and see what I hand back. Leave it empty and I'll take it as the blank cheque — we'll shape the reward together.",
    perks: [
      "Everything in all three rooms",
      "A personal conversation about what I can build for you",
      "A reward matched to what you dared",
    ],
    rings: 1,
    filledCenter: false,
    cta: "Take the dare",
    detail: {
      thanks:
        "I dare you to trust me. Write the cheque — or leave it empty and let it stand as the blank cheque. Either way, I get in touch and we shape what comes back together.",
      image: IMG.field,
      statement: "I dare you to trust me.",
      lead: "No number required. Just the confidence to hand me one, and see what I hand back.",
      reframe: {
        title: "The reframe",
        paras: [
          "Not a donation. A dare.",
          "Write the cheque. I match it — not in euros, but in imagination. Whatever you put in, I hand back something built only for you, and just as magnificent.",
          "Fill out nothing and I will consider this the blank cheque: a signed cheque with the amount left empty. Metaphorically, it grants someone unlimited freedom, authority, or funding to act as needed to reach a goal. Special involvement. I help you decide what to donate, and together we make a powerful custom reward proposal.",
        ],
      },
      forYouIf: {
        title: "This is for you if…",
        items: [
          "You'd rather dare than decide — trust me with the number instead of negotiating it",
          "You want to be matched, not thanked — a gesture this size deserves a gesture back",
          "You have a problem, a room, a team, or a question, and you're curious what a knight would do with it",
          "This resonates somewhere personal, and you can't fully explain why",
          "You've read the Class Room, the Dressing Room and the Round Table, and none of them go far enough",
        ],
      },
      story: {
        title: "The story",
        paras: [
          "Fifteen years ago, I lent my name to other people's missions. This year, for the first time, I'm asking people to lend theirs to mine.",
          "Three rooms ask you to come to me. The Open Field asks something bolder: show me how much you trust me, and I'll show you what that trust is worth.",
          "Here's the dare, plainly. You write the cheque — the amount is yours to decide, not mine to ask for. After your gesture, I get in touch. Together, we explore what I can give back.",
          "I don't know yet what it will be. It can be anything. A problem, solved. A new idea, built from nothing. A ritual, designed only for you. The only thing I can promise: it will be full of imagination, power, and magic.",
          "That's not a hedge. That's the offer.",
        ],
      },
      included: {
        title: "What's included",
        intro:
          "The Open Field carries everything from the three rooms before it, plus a reward I haven't invented yet — because it isn't mine to invent alone. It's built to match what you dared.",
        groups: [
          FROM_CLASSROOM,
          FROM_DRESSING_ROOM,
          FROM_ROUND_TABLE,
          {
            group: "Plus, The Open Field itself",
            items: [
              "A personal conversation with me, after your gesture, to explore what I can build for you",
              "A reward matched to your trust — a solved problem, a new idea, a ritual designed only for you, or something neither of us has named yet",
              "Direct, ongoing access to me through the making of this work",
            ],
          },
        ],
      },
      howItWorks: [
        "Take the dare — name your number, or leave it empty",
        "I get in touch",
        "Together we shape what comes back",
      ],
      investment: {
        title: "The investment",
        line: "Name your number. That's the dare.",
        note: "Leave the amount empty and I'll treat it as the blank cheque.",
      },
      proof: {
        pending: "A quote from Nino Schöningh goes here, once the wording is agreed.",
      },
      close: {
        lines: [
          "You dare me with a number.",
          "I dare you back with everything I have.",
        ],
        cta: "Take the dare",
      },
    },
  },
];

export const rewardBySlug = (slug: string) =>
  REWARDS.find((r) => r.slug === slug) ?? null;

/** ─── Article block model (drives all long-form pages) ─── */
export type Block =
  | { type: "kicker"; text: string }
  | { type: "title"; text: string }
  | { type: "lead"; node: ReactNode }
  | { type: "p"; node: ReactNode }
  | { type: "h2"; text: string }
  | { type: "statement"; text: string }
  | { type: "list"; items: ReactNode[] }
  | { type: "quote"; text: string; cite?: string }
  | { type: "target" }
  | { type: "image"; src: string; alt: string }
  | { type: "images"; items: { src: string; alt: string }[] }
  | { type: "video"; src: string; poster: string; alt: string; caption?: string }
  | { type: "expandable"; label: string; blocks: Block[] }
  | {
      type: "imageQuote";
      src: string;
      alt: string;
      quote: string;
      body?: ReactNode;
      flip?: boolean;
    }
  | { type: "faq"; items: { q: string; a: ReactNode }[] }
  | { type: "signature"; text: string };

/* ───────────────────────── HOME ───────────────────────── */

export const HOME_INTRO_1 = [
  "This year, I become a knight. Not a costume. A calling.",
  "I'm building the room where she prepares — and the room where she lays the armour down again. Eight makers. One world. Opening at KOIK Contemporary, Mexico City.",
  "I'm raising €25.000 to build it right. Not to ask permission. To build the room. The first solo exhibition of my life.",
];

export const HOME_INTRO_2 =
  "If you've ever felt a calling you couldn't fully explain. Not the loud kind. The quiet kind. The one that doesn't leave, no matter how many times you reason it back into silence. This is for you too.";

/** Home → My story: the teaser, then the full thing behind a disclosure. */
export const HOME_STORY: Block[] = [
  { type: "kicker", text: "My story" },
  {
    type: "lead",
    node: (
      <>
        2025 was the hardest year of my life. My body collapsed. My spirit
        followed. I let go of Toffey, the campaign studio I built from scratch.
        Let go of Human Rights Tattoo, the project that took a decade of my life
        and travelled the world. Let go of the Netherlands, my income, my
        identity. Everything asked for rest. So I listened.
      </>
    ),
  },
  {
    type: "expandable",
    label: "Read the full story",
    blocks: [
      {
        type: "p",
        node: (
          <>
            I discovered Mexico City. I worked as a chef. I cooked, I painted, I
            learned to VJ. I stripped myself down to the studs and let something
            else come up in the space that opened.
          </>
        ),
      },
      {
        type: "p",
        node: (
          <>
            Along the way, I went looking for a new source of strength. I studied
            epic women — the fictional and the real, the fierce and the quiet.
            And I kept circling back to one: Jeanne d&rsquo;Arc. Seventeen. No
            education, no title, no army of her own. She still walked into a
            royal court and told a king she&rsquo;d been sent to crown him. What
            moves me isn&rsquo;t the hero myth. It&rsquo;s her radical inner
            conviction — she acted on something she knew, whether or not the
            world made space for it.
          </>
        ),
      },
      { type: "statement", text: "Deeply feminine. Deeply powerful. Both, at once." },
      {
        type: "p",
        node: (
          <>
            I started imagining a room I&rsquo;d never seen anywhere: not the
            battlefield, but the space before and after it. The dressing room.
            Where a knight puts the armour on — or takes it off.
          </>
        ),
      },
      { type: "image", src: IMG.armour, alt: "The armour, being forged" },
      {
        type: "p",
        node: (
          <>
            For fifteen years, I lent my voice to other people&rsquo;s missions.
            To Human Rights Tattoo. To the clients of Toffey. That work taught me
            everything about giving an idea its full shape. It also let me hide.
            Behind a client&rsquo;s name, I was safe. Behind my own name,
            I&rsquo;m not.
          </>
        ),
      },
      { type: "statement", text: "This is the moment I stop hiding." },
    ],
  },
];

export const HOME_EXHIBITION: Block[] = [
  { type: "kicker", text: "The exhibition" },
  {
    type: "lead",
    node: (
      <>
        On March 12, 2026, Lester Aguirre — founder and curator of KOIK
        Contemporary in Mexico City — invited me for a residency and a solo
        exhibition. <strong>The Dressing Room of a Female Knight</strong> is a
        spatial exhibition — armour, banner, ritual, horse, dressing room,
        conviction — reimagined for a knight of now.
      </>
    ),
  },
  {
    type: "expandable",
    label: "More about the exhibition",
    blocks: [
      {
        type: "p",
        node: (
          <>
            Not an open call. A personal invitation, to an artist he&rsquo;d been
            watching before I called myself one out loud.
          </>
        ),
      },
      {
        type: "p",
        node: (
          <>
            This year, I become a knight. Not to fight. To answer a mission I
            can&rsquo;t fully explain — and refuse to shrink to make it more
            believable.
          </>
        ),
      },
      { type: "h2", text: "Eight new works. Eight makers. One world, built together." },
      {
        type: "list",
        items: [
          <>
            <strong>Photographic series</strong> — a female reinterpretation of
            the four knights of the tarot, with photographer Diego Guadarrama
          </>,
          <>
            <strong>VJ work</strong>, with visual artist/architect Erik López
          </>,
          <>
            <strong>Video work</strong>, with visual storyteller Armando Juarez
          </>,
          <>
            <strong>Poster wall</strong>, with graphic designer Olivier van
            Zummeren
          </>,
          <>
            <strong>Floor text / word art</strong>, with poet Loes van Rooij
          </>,
          <>
            <strong>Banners</strong> — a contemporary translation of Jeanne
            d&rsquo;Arc&rsquo;s own banner, which she carried closer than her
            sword — also shown as five billboard works across Mexico City, made
            possible by Publimex
          </>,
          <>
            <strong>Dressing room installation</strong>, including garments, with
            fashion designer Gabrielle Venguer
          </>,
          <>
            <strong>Performance / ritual</strong>, with music by producer Edgar
            Mondragón and somatic guidance from Dolores Hoppener Mae
          </>,
        ],
      },
      { type: "image", src: IMG.room, alt: "The dressing room installation" },
      {
        type: "p",
        node: (
          <>
            The exhibition opens at KOIK Contemporary on{" "}
            <strong>5 December 2026</strong>, runs through{" "}
            <strong>February 2027</strong>, and travels to the Netherlands in
            spring 2027 — bringing the two worlds I live and work between finally
            into one room.
          </>
        ),
      },
      {
        type: "quote",
        text: "Your gift funds the raw material of this: production, materials, and fair pay for eight collaborators building something that doesn't exist yet.",
      },
    ],
  },
];

export const HOME_TRUST = {
  quote: "Why trust the hands building this?",
  body: "I've done this before — just never fully in my own name.",
  src: IMG.portrait,
  alt: "Niki in the studio",
};

export const HOME_SEAT = {
  title: "Not a donation into a void. A seat inside the process.",
  items: [
    "You watch a world get built, in real time.",
    "You become part of a lineage. The Knight Academy is where I share the research, the rituals, and the teachings behind this work as they happen.",
    "You get access most people won't — to the room, the class room, the round tables, and eventually, the finished work itself.",
  ],
  close: "This isn't charity. It's an invitation to build something unmistakable, together.",
};

export const HOME_OBJECTIONS = [
  {
    q: "You might be thinking I don't know anything about knights nor art.",
    a: "Neither did the seventeen-year-old who crowned a king. This isn't a history lesson. It's a living practice — you don't need credentials to recognise a calling when you feel one.",
  },
  {
    q: "This feels very personal — is it for me?",
    a: "It's for anyone who's ever carried a mission. Some part of you already knows: this is not a small life. If that's you, you're already in the room.",
  },
];

export const HOME_PULLQUOTE =
  "What moves me isn't the hero story. It's that she believed herself before anybody else did.";

export const HOME_KOIK = {
  quote: "I didn't apply. I was asked.",
  body: "KOIK Contemporary isn't a commercial gallery. It's an independent, research-driven platform — invitation-only, chosen for artists whose work matches its profile.",
  extra:
    "I know how ideas grow, how an audience forms, and how a vision becomes a room people walk into and feel. I've just never done it for myself before. Now I am.",
  src: IMG.mexico,
  alt: "KOIK Contemporary, Mexico City",
};

export const HOME_CLOSE = {
  lines: [
    "I trust 2026. I trust timing. I trust my fellow knight.",
    "This is the year I am inviting you into my world.",
  ],
  statement: "Help me build the room. Then step into your own.",
  signature: "🖤 Niki",
};

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
        I&rsquo;m raising €25.000 to build it right. Not to ask permission. To
        build the room. The first solo exhibition of my life.
      </>
    ),
  },
  { type: "image", src: IMG.knightChild, alt: "Before I called myself one out loud" },
  { type: "h2", text: "My story" },
  {
    type: "p",
    node: (
      <>
        2025 was the hardest year of my life. My body collapsed. My spirit
        followed. I let go of Toffey, the campaign studio I built from scratch.
        Let go of Human Rights Tattoo, the project that took a decade of my life
        and travelled the world. Let go of the Netherlands, my income, my
        identity. Everything asked for rest. So I listened.
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
        Along the way, I went looking for a new source of strength. I studied epic
        women — the fictional and the real, the fierce and the quiet. And I kept
        circling back to one: Jeanne d&rsquo;Arc. Seventeen. No education, no
        title, no army of her own. She still walked into a royal court and told a
        king she&rsquo;d been sent to crown him. What moves me isn&rsquo;t the
        hero myth. It&rsquo;s her radical inner conviction — she acted on
        something she knew, whether or not the world made space for it.
      </>
    ),
  },
  { type: "statement", text: "Deeply feminine. Deeply powerful. Both, at once." },
  { type: "target" },
  {
    type: "p",
    node: (
      <>
        I started imagining a room I&rsquo;d never seen anywhere: not the
        battlefield, but the space before and after it. The dressing room. Where
        a knight puts the armour on — or takes it off.
      </>
    ),
  },
  { type: "image", src: IMG.armour, alt: "The armour, being forged" },
  {
    type: "quote",
    text: "For fifteen years, I lent my voice to other people's missions. Behind a client's name, I was safe. Behind my own name, I'm not. This is the moment I stop hiding.",
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
  { type: "kicker", text: "The exhibition" },
  {
    type: "title",
    text: "Eight new works. Eight makers. One world, built together.",
  },
  {
    type: "lead",
    node: (
      <>
        On March 12, 2026, Lester Aguirre — founder and curator of KOIK
        Contemporary in Mexico City — invited me for a residency and a solo
        exhibition. Not an open call. A personal invitation, to an artist
        he&rsquo;d been watching before I called myself one out loud.
      </>
    ),
  },
  {
    type: "p",
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
      <>
        <strong>Photographic series</strong> — a female reinterpretation of the
        four knights of the tarot, with photographer Diego Guadarrama
      </>,
      <>
        <strong>VJ work</strong>, with visual artist/architect Erik López
      </>,
      <>
        <strong>Video work</strong>, with visual storyteller Armando Juarez
      </>,
      <>
        <strong>Poster wall</strong>, with graphic designer Olivier van Zummeren
      </>,
      <>
        <strong>Floor text / word art</strong>, with poet Loes van Rooij
      </>,
      <>
        <strong>Banners</strong> — a contemporary translation of Jeanne
        d&rsquo;Arc&rsquo;s own banner, which she carried closer than her sword —
        also shown as five billboard works across Mexico City, made possible by
        Publimex
      </>,
      <>
        <strong>Dressing room installation</strong>, including garments, with
        fashion designer Gabrielle Venguer
      </>,
      <>
        <strong>Performance / ritual</strong>, with music by producer Edgar
        Mondragón and somatic guidance from Dolores Hoppener Mae
      </>,
    ],
  },
  { type: "target" },
  {
    type: "p",
    node: (
      <>
        The exhibition opens at KOIK Contemporary on{" "}
        <strong>5 December 2026</strong>, runs through{" "}
        <strong>February 2027</strong>, and travels to the Netherlands in spring
        2027 — bringing the two worlds I live and work between finally into one
        room.
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
      { src: IMG.jeanneBanner, alt: "Jeanne d'Arc and her banner" },
      { src: IMG.mexico, alt: "The crowd the work is made for" },
    ],
  },
  {
    type: "imageQuote",
    src: IMG.poster,
    alt: "KOIK Contemporary",
    quote: "I didn't apply. I was asked.",
    body: (
      <>
        KOIK Contemporary isn&rsquo;t a commercial gallery. It&rsquo;s an
        independent, research-driven platform — invitation-only, chosen for
        artists whose work matches its profile.
      </>
    ),
  },
];

/* ───────────────────────── KNIGHT ACADEMY ───────────────────────── */
export const ACADEMY_INTRO: Block[] = [
  { type: "kicker", text: "Knight Academy" },
  {
    type: "title",
    text: "A classroom built around the obsession I couldn't put down.",
  },
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
        This isn&rsquo;t a personality quiz. It&rsquo;s a classroom for people who
        already suspect they weren&rsquo;t made for a small life.
      </>
    ),
  },
  { type: "target" },
  {
    type: "statement",
    text: "Every donation gives you access to a different room in the Knight Academy.",
  },
];

/* ───────────────────────── REWARDS INDEX ───────────────────────── */
export const REWARDS_INTRO = {
  kicker: "Rewards",
  title: "You donate. You will be rewarded big times.",
  lead: "Your donation means the world and I would love to reward generously.",
  body: "The rewards are linked to a price range. Every gift builds the armour — the size doesn't change what it means. Pick your tier, then step into the room.",
};

/* ───────────────────────── WHERE THE MONEY GOES ───────────────────────── */
export const BUDGET = [
  {
    label: "Production & materials",
    pct: 40,
    note: "Armour, banners, dressing room, print",
  },
  {
    label: "Fair pay — 8 collaborators",
    pct: 35,
    note: "Photographer, VJ, poet, designers, musicians",
  },
  {
    label: "Venue & install at KOIK",
    pct: 15,
    note: "Mexico City, opening 5 December 2026",
  },
  {
    label: "Travel to the Netherlands",
    pct: 10,
    note: "Bringing the show to a second room, spring 2027",
  },
];

export const MONEY: Block[] = [
  { type: "kicker", text: "Where the money goes" },
  {
    type: "title",
    text: "Not a donation into a void. A seat inside the process.",
  },
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
