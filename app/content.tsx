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
  opens: "6 March 2027",
  goalEuros: 25000, // Briefing: "I'm raising €25.000 to build it right."
  raisedEuros: 6400, // placeholder progress — wire to real data later
  backers: 58, // placeholder
  callToAction: "Become a fellow knight",
  monthlyMonths: 5, // Briefing: "MONTHLY (5 months)"
};

/**
 * Donorbox handles the payment only; the site keeps the choice (room, amount,
 * message). Leave `campaign` empty and the payment step stays simulated. Fill
 * in the slug from donorbox.org/<slug> and the payment step embeds the
 * Donorbox form, with amount, monthly/once and name already filled in.
 *
 * In the Donorbox campaign editor, set "Redirect after donation" to
 * https://<site>/donate/complete so donors land on our thank-you page.
 * `language` only applies when the campaign language is "Auto-detect".
 */
export const DONORBOX = {
  campaign: "the-dressing-room-of-a-female-knight",
  language: "en",
};

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
  { label: "€750,-", href: "/rewards/round-table" },
  { label: "€250,-", href: "/rewards/dressing-room" },
  { label: "€50,-", href: "/rewards/class-room" },
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

/* In reward copy, "\n" inside a string is a line break within the paragraph. */
export type RewardDetail = {
  /** The thank-you line that sits directly under the reward name. */
  thanks: string;
  image: string;
  /** Some rooms open on motion rather than a still. */
  video?: { src: string; poster: string; portrait?: boolean };
  statement: string;
  lead: string;
  /** Paragraphs that follow the lead, before the picture. */
  intro?: string[];
  reframe: { title: string; paras: string[] };
  forYouIf: { title: string; items: string[] };
  /** `quoteAfter` puts the quote under the story instead of above it. */
  story: { title: string; quote?: string; quoteAfter?: boolean; paras: string[] };
  /** Extra passages after the story; a title is optional. */
  sections?: { title?: string; paras: ReactNode[] }[];
  doorways?: { name: string; body: string }[];
  walkAway?: { title: string; paras: string[] };
  included: { title: string; intro?: string; groups: IncludedGroup[] };
  howItWorks: string[];
  howItWorksNote?: string;
  investment: { title: string; line: string; note?: string };
  /** The section only shows once there is a real quote. */
  proof?: { quote: string; cite: string };
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
    "8 Knight Teachings: live in the Netherlands, live in Mexico City and online",
    "Founding Member status in the Knight Academy",
    "Access to the classroom Telegram",
    "Permission to bring someone",
  ],
};

const FROM_DRESSING_ROOM: IncludedGroup = {
  group: "From The Dressing Room",
  items: [
    "One 90-minute 1:1 Knight Discovery Session, online or in person",
    "A personal wrap-up of what surfaced, yours to keep",
  ],
};

const ROUND_TABLE_ITEMS = [
  "One seat at a Round Table: Mexico City or the Netherlands",
  "Dinner, ritual and your knighting",
  "Your relic, your vow and your secret mission",
];

const FROM_ROUND_TABLE: IncludedGroup = {
  group: "From The Round Table",
  items: ROUND_TABLE_ITEMS,
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
    price: "€50,- or more",
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
        "As a BIG thank you for your generosity, I’m opening the doors to my most profound teachings on knighthood. Consider this your invitation to gather, to learn, to question, to declare what you believe in and to witness what becomes possible when we dare to take one another seriously.",
      image: IMG.classroom,
      statement: "Some of us were never made for a small life.",
      lead: "A classroom in female knighthood. A place to study courage, devotion, conviction and the particular kind of power.",
      intro: [
        "For the curious.\nFor the students.\nFor the ones who feel the call.\nFor the future knights.",
        "Every revolution has its first believers. You are one of ours.",
      ],
      reframe: {
        title: "Imagine the most extraordinary women in history were your teachers",
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
        line: "€50,- or more.",
        note: "One time, or monthly.",
      },
      proof: {
        quote:
          "The female knight night. So inspiring! Creative soul. Happy birthday big sister.",
        cite: "Ana Corredoyra",
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
    price: "€250,- or more",
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
        title: "The dressing room is where we rehearse the future.",
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
              "A personal wrap-up of what surfaced, yours to keep",
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
        line: "€250,- or more.",
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
    price: "€750,- or more",
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
        "As a thank you for your generosity, I reserve a seat for you at the Round Table, where we gather to share our boldest ambitions, witness one another’s becoming and pass on the art of knighthood out loud.\nYour seat is waiting.",
      image: IMG.table,
      statement: "Once a season, we gather.",
      lead: "Once a season, a table is set for giants.",
      intro: [
        "Not the famous, the fearless or the particularly tall. A giant is anyone willing to take up the space their life requires. Some arrive with a vision fully formed. Others arrive with a thought they’ve never dared to say out loud.",
        "Over one night, you are fed, challenged and knighted in front of witnesses. Then you’re sent back into your life with a mission.",
      ],
      reframe: {
        title: "Not a dinner you attend. A night you enter.",
        paras: [
          "There is a life that looks perfectly respectable from the outside.\nAnd then there is the life that keeps knocking from within. The one with the outrageous ambition, the inconvenient desire, the impossible idea. The version of you that refuses to become smaller just because the room was built that way.",
          "We made this evening for that version of you.",
          "Each gathering is a living artwork. A secret ceremony where the sacred meets the ridiculous, beauty flirts with the grotesque, and every guest is both the artist and the masterpiece. Expect baroque excess, punk royalty, mythological glamour and a touch of beautiful absurdity. Impossible flowers, strange rituals, unexpected confessions, and a feast fit for the people who intend to rewrite the story.",
          "We gather around a table that has no head, because nobody here has come to kneel. Power may wear pearls, armour, silk, sequins, or nothing you can name.",
          "You have spent enough time being palatable. For one night, let the room adjust to you.",
          "No shrinking. No false modesty. No pretending not to want what you want.",
        ],
      },
      forYouIf: {
        title: "This is for you if…",
        items: [
          "Ordinary life occasionally feels like a set designed by someone with no sense of colour",
          "You want your life to become a work of art",
          "You have an ambition that sounds outrageous when you say it out loud",
          "You want to leave dinner with a fire under your arse",
          "You want to be witnessed in your becoming, not just applauded once you’ve arrived",
          "You want to surround yourself with people who make your world feel bigger, stranger and more alive",
        ],
      },
      story: {
        title: "The story",
        quote:
          "Before the night ends, the table writes its cheer together: a battle cry, a toast and a sermon, spoken once, by everyone.",
        quoteAfter: true,
        paras: [
          "I’ve always dreamed of being surrounded by extraordinary people. Giants of all sizes. People fully willing not to stay small. The kind of company that leaves you inspired, connected, and a little braver than when you arrived.",
          "So I decided to create the night of my dreams. An evening of impeccable ceremony, devoted to the dangerous art of not behaving. A secret gathering where we are knighted, fed, challenged and bound to a mission that sends us back into the world differently.",
          "A place where extraordinary becomes contagious.",
          "You helped bring this world into being. And I want you inside it.",
        ],
      },
      sections: [
        {
          paras: [
            "Here, ambition doesn’t need to be disguised as modesty. We speak the things we’ve been taught to whisper, celebrate the selves we’ve been taught to edit, and make room for the person we haven’t yet dared to become.",
          ],
        },
        {
          title: "Your first night as a knight",
          paras: [
            <>
              Somewhere between the feast and midnight, a bell rings and the
              room falls silent. One question is put to you:{" "}
              <em>
                what are you willing to stand for, even if it costs you
                something?
              </em>{" "}
              You can answer it out loud or keep it to yourself. Then you step
              forward, and the blade touches your shoulders, in front of
              everyone at the table.
            </>,
          ],
        },
        {
          title: "Then you leave carrying a mission.",
          paras: [
            "A secret assignment. A piece of the night that belongs to you, and now asks something of you. You take it home with your vow, a relic of the night, and an ally who heard you say it and will hold you to it. Next season, the table is set again. You come back and tell us what happened.",
          ],
        },
        {
          title: "The first two tables",
          paras: [
            <>
              <strong>Mexico City · 5 March.</strong> The night before the
              exhibition opens, behind a closed door. The next morning, you walk
              into the exhibition already a knight.
            </>,
            <>
              <strong>The Netherlands · TBA.</strong> Joined by someone who was
              officially knighted, sword and all.
            </>,
          ],
        },
      ],
      included: {
        title: "What's included",
        groups: [
          FROM_CLASSROOM,
          FROM_DRESSING_ROOM,
          { group: "Plus, The Round Table", items: ROUND_TABLE_ITEMS },
        ],
      },
      howItWorks: [
        "Donate",
        "Choose your table",
        "Receive your sealed invitation",
        "Take your seat",
      ],
      howItWorksNote: "Seats per table are limited. Travel is not included.",
      investment: {
        title: "The investment",
        line: "€750,- or more.",
      },
      close: {
        lines: ["The world can keep its rules.", "We have a table to return to."],
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
        title: "A reward I haven’t invented yet",
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
        quote:
          "Niki is a nutcracker. Give her a coconut-sized challenge and she will crack it with precision. Open it up, and turn what’s inside into something unexpectedly brilliant.",
        cite: "Nino Schöningh, CEO Toffey",
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
  | { type: "signature"; text: string }
  /** A "Go to … →" link, e.g. at the end of a home disclosure. */
  | { type: "more"; label: string; href: string };

/* ───────────────────────── HOME ───────────────────────── */
/* Texts: Niki's final input "HOME" (October 2026). */

/** Replaces "Studio Niki" in letters above the big title. */
export const HOME_TOPLINE =
  "My first solo exhibition · Opening 6 March 2027 · Mexico City";

export const HOME_SHOUT = "BIG NEWS. THE ARMOUR IS BEING FORGED.";

export const HOME_INTRO_1: ReactNode[] = [
  <>
    This year, I become a knight.
    <br />
    Not a costume. A calling.
  </>,
  <>
    For fifteen years, I built other people&rsquo;s worlds. Now I&rsquo;m
    building my own: the room where a female knight prepares for what
    she&rsquo;s here to do. Where she&rsquo;s afraid, gathers herself and
    chooses what to carry. And where, afterwards, she lays the armour down.
  </>,
  <>
    Eight makers. Eight new works. One room.
    <br />
    Opening at KOIK Contemporary, Mexico City.
  </>,
  <>
    I&rsquo;m raising €25.000 to build it right.
    <br />
    Not to ask permission. To build the room.
  </>,
];

export const HOME_ACTIONS = {
  primary: { label: "Become a fellow knight", href: "/donate" },
  secondary: { label: "Enter the dressing room", href: "/exhibition" },
};

/** The line that sits above the funding bar. */
export const HOME_SCALE_LINE = "The armour, piece by piece.";

/** Intro text 2 — centred, bold. */
export const HOME_INTRO_2 = {
  title: "This is for your boldest calling.",
  paras: [
    "For anyone who has known something before they could prove it. The calling you can’t fully explain. The one that won’t leave, however many times you reason it back into silence.",
    "You don’t need a sword. Or a title. Or permission. If something in you recognises itself here, you’re already in the room.",
  ],
};

/** Home → My story: the teaser, then the rest behind a disclosure. */
export const HOME_STORY: Block[] = [
  { type: "kicker", text: "My story" },
  {
    type: "lead",
    node: (
      <>
        2025 was the hardest year of my life. My body collapsed. My spirit
        followed. I let go of Toffey, the studio I built from scratch. Of Human
        Rights Tattoo, a decade of my life. Of my income, my identity, and the
        person I thought I was supposed to be.
      </>
    ),
  },
  {
    type: "p",
    node: (
      <>
        Then I found Jeanne d&rsquo;Arc. Seventeen. No title. No army. She
        believed herself before anyone else did.
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
            For fifteen years, I lent my voice to other people&rsquo;s missions.
            Behind a client&rsquo;s name, I was safe. Behind my own name,
            I&rsquo;m not.
          </>
        ),
      },
      { type: "statement", text: "This is the moment I stop hiding." },
      { type: "more", label: "Go to my story", href: "/story" },
    ],
  },
];

export const HOME_EXHIBITION: Block[] = [
  { type: "kicker", text: "The exhibition" },
  { type: "lead", node: <>Not the battlefield. The room before it.</> },
  {
    type: "p",
    node: (
      <>
        <em>The Dressing Room of a Female Knight</em> is a room you walk into.
        Armour, garments, photography, video, projection, banners, words, sound
        and ritual. Eight works, each made with a different maker. A place to
        meet the woman you might become if you took your own imagination
        seriously.
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
            Opening <strong>6 March 2027</strong> at KOIK Contemporary, Mexico
            City. Five billboards across the city carry the banner into the
            streets. Then the room travels to the Netherlands.
          </>
        ),
      },
      { type: "more", label: "Go to the exhibition", href: "/exhibition" },
    ],
  },
];

export const HOME_TRUST = {
  quote: "Why trust the hands building this?",
  body: [
    "I’ve done this before. Just never in my own name.",
    "For ten years, I co-led Human Rights Tattoo: the Universal Declaration of Human Rights, tattooed letter by letter onto 6,773 people worldwide. I held its artistic direction from Tilburg to museums in China, Mexico and France. It won the Red Dot Grand Prix.",
    "For nearly a decade, I was artistic lead of Toffey, building worlds for Kunstbende, the Textielmuseum, Zuidelijk Toneel and Roadburn. I gave Doloris its name, and Toffey built the brand around it. It grew into an international art maze.",
    "I know how to find an idea’s hidden wiring, gather the right makers and build something people walk into and feel.",
    "A solo exhibition doesn’t mean a solitary act. I set the vision. Eight makers bring their own language. Together, we build the room.",
  ],
  src: IMG.portrait,
  alt: "Niki in the studio",
};

/** Donation title — same centred, bold design as intro text 2. */
export const HOME_DONATE = {
  title: "You help me become a knight. I help you become yours.",
  sub: "Every gift builds the armour.",
  afterTiers: "Every door you open, you keep.",
  button: { label: "Choose where you belong", href: "/rewards" },
};

/** The moving bar. */
export const MARQUEE_ITEMS = [
  "Bring me bigness",
  "Every gift builds the armour",
  "Opening 6 March 2027",
];

export const HOME_SEAT = {
  title: "Not a donation into a void. A seat inside the process.",
  items: [
    {
      lead: "You’re there while it happens.",
      body: "The research, the experiments, the rituals, the doubts, the decisions. Everything that usually happens behind closed doors, before the lights come on.",
    },
    {
      lead: "You enter the Knight Academy.",
      body: "Study the women who went into battle before you. Walk through the seven doorways. Decide what you’re willing to stand up for.",
    },
    {
      lead: "You fund the real thing.",
      body: "Production, materials and fair pay for eight makers. Not the cheaper version. The work as it deserves to be made.",
    },
  ],
  close: "You fund an exhibition. You inherit a quest.",
  // Placeholder until Niki's new photos arrive.
  src: IMG.armourOrnate,
  alt: "The armour",
};

/** Wide picture between the donation part and the questions.
 *  Empty until Niki delivers a landscape photo — the slot hides itself. */
export const HOME_LANDSCAPE = { src: "", alt: "" };

export const HOME_OBJECTIONS_TITLE = "You might be wondering";

export const HOME_OBJECTIONS: { q: string; a: ReactNode }[] = [
  {
    q: "“Why are you doing this?”",
    a: "Because I have to. For fifteen years, I made others visible. Now I’m completing a transformation: deeply feminine, deeply powerful, both at once. And I’m doing it for everyone who suspects they weren’t made for a small life either.",
  },
  {
    q: "“I’m not a woman. Is this for me?”",
    a: "Absolutely. Female knighthood isn’t about gender. It’s about a calling that takes you somewhere no path was laid. It isn’t inherited through birth or title. You answer it through conviction. The calling is yours to answer.",
  },
  {
    q: "“I don’t know anything about knights. Or art.”",
    a: "Neither did the seventeen-year-old who walked into a royal court and told a king what she’d come to do. This isn’t a history lesson. It’s a living practice.",
  },
  {
    q: "“What if nobody believes in it?”",
    a: (
      <>
        They don&rsquo;t have to.
        <br />
        I&rsquo;ll build it anyway.
        <br />
        But I&rsquo;d love you inside.
      </>
    ),
  },
];

export const HOME_KOIK = {
  quote: "I didn’t apply. I was asked.",
  body: [
    "On 12 March 2026, Lester Aguirre, founder and curator of KOIK Contemporary, invited me for a three-month residency and my first solo exhibition in Mexico City. It wasn’t an open call. It was a personal invitation, to an artist he saw before I dared to call myself one out loud.",
    "KOIK isn’t a commercial gallery. It’s an independent, research-driven platform for experimental work, and you can only get in by invitation.",
    "Someone saw the knight before I did. Now it’s my turn.",
  ],
  src: IMG.mexico,
  alt: "KOIK Contemporary, Mexico City",
};

export const HOME_CLOSE = {
  title: "This is your invitation.",
  lines: [
    "You don’t have to wait for the doors to open. You can help build the room now. And when they open, you’ll know part of that armour is yours.",
    "I trust 2026. I trust timing. I trust my fellow knights.",
  ],
  statement: "Help me build the room. Then step into your own.",
  signature: "🖤 Niki",
  primary: { label: "Enter knighthood", href: "/donate" },
  secondary: { label: "Where the money goes", href: "/where-the-money-goes" },
};

/* ───────────────────────── MY STORY ───────────────────────── */
export const STORY: Block[] = [
  { type: "kicker", text: "Big news. The armour is being forged." },
  { type: "title", text: "The Dressing Room of a Female Knight" },
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
        <strong>
          2025 was the hardest year of my life.
          <br />
          My body collapsed. My spirit followed.
        </strong>
        <br />
        It had been coming for a while. I had let go of Toffey, the campaign
        studio I built from scratch. Of Human Rights Tattoo, the project that
        took a decade of my life and travelled the world. Of my income, my
        identity, and the person I thought I was supposed to be.
      </>
    ),
  },
  { type: "p", node: <>Everything was asking me to stop.</> },
  { type: "p", node: <>So I stopped.</> },
  {
    type: "p",
    node: (
      <>
        It got dark. Very dark. I lost my lust for life. And somewhere in the
        space where my old life had been, something unexpected started growing.
      </>
    ),
  },
  {
    type: "p",
    node: (
      <>
        My brother gave me a job in a kitchen. I started painting. I learned to
        VJ. I returned to Mexico City. I went looking for a new source of power.
      </>
    ),
  },
  {
    type: "p",
    node: (
      <>
        I found it in women who lived epic lives. The real ones. The fictional
        ones. The fierce ones. The strange ones. Women who refused to become
        smaller to make the world more comfortable.
      </>
    ),
  },
  { type: "p", node: <>And then there was Jeanne d&rsquo;Arc.</> },
  {
    type: "p",
    node: (
      <>
        Seventeen years old. No title. No education. No army of her own. She
        walked into a royal court and told a king what she had come to do.
      </>
    ),
  },
  {
    type: "p",
    node: (
      <>
        What moves me isn&rsquo;t the hero story. It&rsquo;s her radical inner
        conviction.
      </>
    ),
  },
  { type: "p", node: <>She believed herself before anyone else did.</> },
  { type: "statement", text: "Deeply feminine. Deeply powerful. Both, at once." },
  {
    type: "p",
    node: (
      <>
        I became obsessed with one moment. The moment you know what you have to
        do, but the world hasn&rsquo;t caught up with you yet.
      </>
    ),
  },
  {
    type: "p",
    node: (
      <>
        And I started imagining a room I&rsquo;d never seen. Not the
        battlefield. Not the victory portrait. Not the triumphant woman holding
        up her sword while everyone applauds.
      </>
    ),
  },
  { type: "p", node: <>The room before.</> },
  {
    type: "p",
    node: (
      <>
        The dressing room of a female knight. Where she prepares. Where she is
        still herself, still uncertain, still human. Where she chooses what to
        carry. And where, afterwards, she can take the armour off again.
      </>
    ),
  },
  { type: "image", src: IMG.armour, alt: "The armour, being forged" },
  {
    type: "quote",
    text: "For fifteen years, I lent my voice to other people's missions. Behind a client's name, I was safe. Behind my own name, I'm not. This is the moment I stop hiding.",
  },
  { type: "h2", text: "Playing it safe rarely leaves a mark." },
  {
    type: "p",
    node: (
      <>
        <strong>
          I&rsquo;m Niki. (Brand) artist, knight, entrepreneur.
          <br />
          Artist&rsquo;s soul. Chess-player mind.
        </strong>
        <br />
        For fifteen years, I built brands, projects and creative worlds for
        others. Now I&rsquo;m building my own.
      </>
    ),
  },
  {
    type: "p",
    node: (
      <>
        I love the blank canvas. I like ideas with scale, colour, feeling and a
        little bit of nerve. I build worlds through words, images, moving
        pictures, rituals, billboards, objects, and the people who know how to
        bring them to life.
      </>
    ),
  },
  {
    type: "p",
    node: (
      <>
        I don&rsquo;t work alone. I bring the right constellation of makers
        together around an idea, then give that idea its fullest possible form.
      </>
    ),
  },
  {
    type: "p",
    node: (
      <>
        <em>The Dressing Room of a Female Knight</em> is where all of that comes
        together. Fifteen years of building rooms for others. Finally, one of my
        own.
      </>
    ),
  },
  {
    type: "p",
    node: (
      <>A personal experiment in what happens when you stop waiting to feel ready.</>
    ),
  },
  { type: "p", node: <>I&rsquo;m scared.</> },
  { type: "p", node: <>I&rsquo;m doing it anyway.</> },
  { type: "signature", text: "🖤 Niki" },
];

/* ───────────────────────── EXHIBITION ───────────────────────── */
export const EXHIBITION: Block[] = [
  { type: "kicker", text: "The exhibition" },
  { type: "title", text: "Eight new works. One room." },
  { type: "lead", node: <>Not a costume. A world on its own.</> },
  {
    type: "p",
    node: (
      <>
        On <strong>6 March 2027</strong>,{" "}
        <em>The Dressing Room of a Female Knight</em> opens at KOIK Contemporary
        in Mexico City.
      </>
    ),
  },
  {
    type: "p",
    node: (
      <>
        The Dressing Room is a spatial exhibition. A room you enter. A universe
        of armour, garments, photography, video, projections, banners, words,
        sound and ritual. A place to encounter the woman you might become if you
        took your own imagination seriously.
      </>
    ),
  },
  {
    type: "p",
    node: (
      <>
        The invitation came from Lester Aguirre, founder and curator of KOIK
        Contemporary, one of the most brilliant contemporary art spaces in CDMX.
      </>
    ),
  },
  {
    type: "p",
    node: (
      <>
        Not an open call. Not an application. A personal invitation to an artist
        he&rsquo;d been watching before I called myself one out loud.
      </>
    ),
  },
  {
    type: "p",
    node: (
      <>
        I said yes. Three months of residency. One solo exhibition.
        <br />
        My coming out. As an artist. As a knight.
      </>
    ),
  },
  {
    type: "p",
    node: <strong>What happens when an advertiser reinvents herself as an artist?</strong>,
  },
  {
    type: "p",
    node: (
      <>
        For fifteen years, I built worlds for others. Brands. Campaigns. Other
        people&rsquo;s missions. Behind a client, I never had to stand in front.
        This time, there&rsquo;s no one to hide behind.
      </>
    ),
  },
  {
    type: "p",
    node: (
      <>
        So I&rsquo;m building a room I&rsquo;ve never seen, but have imagined for
        years. The space behind the stage. Where the star gets ready. Where the
        knight prepares for battle. No masks. The place where a calling takes
        shape. Grows firm. Becomes real.
      </>
    ),
  },
  {
    type: "p",
    node: (
      <>
        A lifetime of obsessions, finally in one room. Epic women. The catwalk.
        The battlefield. Giants. Billboards. Bathing. Rituals. Cheerleaders.
        Devotion.
      </>
    ),
  },
  { type: "image", src: IMG.room, alt: "The dressing room installation" },
  { type: "h2", text: "The eight works" },
  {
    type: "p",
    node: (
      <strong>
        A solo exhibition doesn&rsquo;t mean a solitary act. I set the vision. I
        bring the right makers together. Each brings a language of their own.
        Together, we build the room. I am creating eight works.
      </strong>
    ),
  },
  {
    type: "list",
    items: [
      <>
        <strong>01. The Knights, Reimagined</strong>
        <br />
        The four knights of the tarot, reimagined as women. Real women. Epic
        presence. Photography with visual storyteller Armando Juarez.
      </>,
      <>
        <strong>02. The Mirror</strong>
        <br />
        Reflection, light and moving image. VJ work with visual artist and
        architect Erik López. The familiar becomes less certain.
      </>,
      <>
        <strong>03. Apotheosis</strong>
        <br />A video about becoming. The fun and struggle of finding your sword
        and armour.
      </>,
      <>
        <strong>04. The Wall of Words</strong>
        <br />
        Posters, floor text, word art. With graphic designer Olivier van
        Zummeren and poet Loes van Rooij. Sometimes words don&rsquo;t explain a
        feeling. They unlock it.
      </>,
      <>
        <strong>05. The Banner</strong>
        <br />
        Jeanne d&rsquo;Arc carried her banner closer than her sword. A
        contemporary translation, also brought onto five billboards across
        Mexico City, made possible by Publimex.
      </>,
      <>
        <strong>06. The Altar</strong>
        <br />
        Armour. Sword. Garments. Where high fashion meets power. Where wigs
        become an altar.
      </>,
      <>
        <strong>07. The Ritual</strong>
        <br />A bath. An accolade. A sword laid on the shoulder, marking the
        passage into a new identity.
      </>,
      <>
        <strong>08. The Knights Cheer</strong>
        <br />A battle cry. A toast. A sermon. Preach. Words by my sister, poet
        Loes van Rooij.
      </>,
    ],
  },
  {
    type: "p",
    node: (
      <>
        A dressing room is a strange and wonderful place. Intimate. Private.
        Sometimes ridiculous. A place for wigs, weapons, nerves, lipstick, prayer
        and last-minute existential crises. Where you take everything off before
        deciding what to put on.
      </>
    ),
  },
  {
    type: "p",
    node: (
      <>
        Where you prepare to be seen. And are allowed, for a moment, not to be.
      </>
    ),
  },
  { type: "p", node: <>Sacred. Kitsch. Vulnerable and intimidating.</> },
  {
    type: "p",
    node: (
      <>
        Picture a woman stepping out of a classical painting, stealing a rock
        star&rsquo;s wardrobe, challenging the king, and looking spectacular
        while doing it.
      </>
    ),
  },
  {
    type: "p",
    node: (
      <>
        Here, femininity doesn&rsquo;t have to be pretty, agreeable or easy to
        understand. Power can be extravagant. Vulnerability can have a
        magnificent wardrobe.
      </>
    ),
  },
  {
    type: "p",
    node: (
      <>
        A lifetime of obsessions, finally at the same table. Epic women.
        Catwalks. Battlefields. Giants. Rock stars. Cheerleaders. Altars.
        Bathing. Devotion. And the delicious theatre of being alive.
      </>
    ),
  },
  {
    type: "p",
    node: (
      <>
        I want to build a room that gives form to the moment before becoming.
        The charged, uncertain, gloriously private space between who you have
        been and who you might dare to be.
      </>
    ),
  },
  {
    type: "p",
    node: <>You choose the dress. You fasten the armour. You pick up the sword.</>,
  },
  {
    type: "quote",
    text: "A room that asks a question I have been asking myself for years: What would you become if you gave yourself permission to go all the way?",
  },
  {
    type: "images",
    items: [
      { src: IMG.jeanneBanner, alt: "Jeanne d'Arc and her banner" },
      { src: IMG.mexico, alt: "The crowd the work is made for" },
    ],
  },
  { type: "h2", text: "Why €25.000?" },
  {
    type: "lead",
    node: <>Because ambition deserves more than a compromised version of itself.</>,
  },
  {
    type: "p",
    node: (
      <>
        Your contribution funds production, materials and fair pay for eight
        makers. Not shrinking the idea until it&rsquo;s affordable. Not asking
        the people who make it possible to work for less than they&rsquo;re
        worth.
      </>
    ),
  },
  {
    type: "p",
    node: (
      <>
        I&rsquo;m not raising money to ask whether this deserves to exist.
        I&rsquo;m raising it to give it the room it needs.
      </>
    ),
  },
  {
    type: "p",
    node: (
      <>
        I have the invitation. I have the vision. I have gathered the makers.
      </>
    ),
  },
  { type: "p", node: <strong>Now I need you.</strong> },
  {
    type: "p",
    node: (
      <>
        Help build a world where a woman is allowed to be extravagant in her
        ambitions, strange in her beauty and entirely unreasonable about the
        size of her dreams.
      </>
    ),
  },
  {
    type: "p",
    node: (
      <>
        You can watch a woman become a knight.
        <br />
        Or you can help build the room where it happens.
      </>
    ),
  },
  {
    type: "p",
    node: (
      <>
        Step into the Knight Academy, where the research continues with everyone
        who joins. A classroom. A dressing room. A round table. An open field.
        Choose where you belong.
      </>
    ),
  },
  {
    type: "p",
    node: <>I can&rsquo;t wait to give you a sword. A banner. A crown.</>,
  },
  { type: "signature", text: "🖤 Niki" },
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
        A thank-you that turns into a world of its own. A school for your
        boldest calling. Because we are meant to live an epic life. Together.
      </>
    ),
  },
  {
    type: "h2",
    text: "You help me become a knight. I help you become yours. Welcome to the Knight Academy.",
  },
  {
    type: "p",
    node: (
      <>
        Every knight needs a place to train. And to get dressed. The Academy is
        the living research behind{" "}
        <em>The Dressing Room of a Female Knight</em>: a place to study
        knighthood, try on armour, swords and banners, and ask what you&rsquo;re
        willing to stand up for.
      </>
    ),
  },
  {
    type: "p",
    node: (
      <>
        It&rsquo;s a school for anyone who suspects they were never made for a
        small life. For anyone who refused to shrink, but hasn&rsquo;t quite
        figured out how to take up space on their own terms.
      </>
    ),
  },
  {
    type: "p",
    node: (
      <>
        An academy for becoming the heroine of your own unfinished story. Study
        the women who went into battle before you. Explore the seven doorways of
        knighthood. Find your look, discover what you&rsquo;re up against, and
        learn to enter the fight before the fear has gone away.
      </>
    ),
  },
  {
    type: "p",
    node: (
      <>
        It has a classroom, a dressing room, a round table and an open field.
        Four ways into the world. Four ways of taking part. Step inside.
      </>
    ),
  },
  { type: "h2", text: "You fund an exhibition. You inherit a quest." },
  {
    type: "p",
    node: (
      <>
        I&rsquo;ve realised that what I&rsquo;m finding is too big to keep to
        myself. I want you to come close. To step in.
      </>
    ),
  },
  {
    type: "p",
    node: (
      <>
        Your contribution helps bring this world of art, armour, images and
        ritual to life. But I didn&rsquo;t build all this for you to stand
        outside and admire it. I want you inside the room. I want you trying on
        the armour, choosing your colours, finding your banner and deciding what
        you&rsquo;re ready to fight for. The stage is yours, too.
      </>
    ),
  },
  {
    type: "p",
    node: (
      <>
        Because knighthood isn&rsquo;t about being untouchable. It&rsquo;s about
        deciding what matters enough to stand up for. What you&rsquo;re willing
        to risk. What you&rsquo;ll carry into battle, even when the battle is
        yours alone.
      </>
    ),
  },
  {
    type: "p",
    node: (
      <>
        Every donation opens a room in the Knight Academy. Teachings. A private
        session. A seat at the table. A reward built just for you.
      </>
    ),
  },
  { type: "p", node: <strong>Every door you open, you keep.</strong> },
  {
    type: "p",
    node: (
      <>
        You&rsquo;re taking a risk on me. So I&rsquo;m giving back everything
        I&rsquo;ve found. And more. Because it means the world to me to receive
        your support. I can&rsquo;t wait to give you a sword. A banner. A crown.
        In return.
      </>
    ),
  },
  {
    type: "p",
    node: <>I&rsquo;m building this world. And I want you to step in.</>,
  },
  { type: "signature", text: "🖤 Niki" },
  {
    type: "h2",
    text: "Every donation opens a different room. Choose where you belong.",
  },
];

export const ACADEMY_DOORWAYS = {
  title: "The female knight’s blueprint",
  lead: "The hidden wiring. The quiet rhythm. The soul code beneath the surface. I discovered a blueprint for female knighthood: seven doorways drawn from the lives, stories and experiences of extraordinary women.",
};

export const ACADEMY_KNIGHTS = {
  title:
    "Imagine the most extraordinary women in history were your teachers. What might you become?",
  lead: "Joan of Arc teaching conviction. Lady Gaga teaching reinvention. Vivienne Westwood teaching rebellion. Jane Goodall teaching devotion. Pippi Longstocking teaching you how to live without asking the grown-ups for permission.",
  button: { label: "Choose where you belong", href: "/rewards" },
};

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
    note: "Mexico City, opening 6 March 2027",
  },
  {
    label: "Travel to the Netherlands",
    pct: 10,
    note: "Bringing the show to a second room",
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
