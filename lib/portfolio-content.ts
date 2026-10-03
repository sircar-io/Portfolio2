export const capabilityFamilies = [
  {
    key: "think",
    title: "Think",
    thesis: "Find the point before making the piece.",
    skills: ["Research", "Strategy", "Ideation", "Positioning"],
  },
  {
    key: "make",
    title: "Make",
    thesis: "Turn the point into something people will watch.",
    skills: ["Scriptwriting", "Storytelling", "Shoot direction", "Editing"],
  },
  {
    key: "lead",
    title: "Lead",
    thesis: "Keep the idea intact across every handoff.",
    skills: ["Brand communication", "Creative QC", "Editor feedback", "Content ownership"],
  },
] as const;

export const ownershipSteps = ["Brief", "Idea", "Script", "Shoot", "Edit", "QC", "Publish"];

export const businessValue = [
  {
    number: "01",
    title: "Less lost in translation",
    copy: "One person can connect the strategist, writer, shoot, editor and brand context.",
  },
  {
    number: "02",
    title: "A problem can be handed over",
    copy: "The starting point can be an open brief—not only a pre-defined production task.",
  },
  {
    number: "03",
    title: "Faster creative loops",
    copy: "Thinking, writing, making, reviewing and communicating stay in one feedback loop.",
  },
];

export const roleFunctions = [
  { title: "Creative Strategist", focus: "Find the angle and shape the content system." },
  { title: "Content Lead", focus: "Own the route from brief to publish." },
  { title: "Creative Lead", focus: "Protect the idea through production and review." },
  { title: "Creative Generalist", focus: "Move wherever the work needs thinking or making." },
];

export const selectedWork = [
  {
    name: "Ai+ Smartphone",
    context: "YAAS Media",
    summary: "Strategy, IP and content buckets through long-form, short-form and post-production review.",
    capabilities: ["Strategy", "Scripts", "Shoot", "Editor QC", "Thumbnails", "Brand comms"],
    tone: "acid",
  },
  {
    name: "Nothing / Death of PC",
    context: "YAAS Media",
    summary: "Technical research translated into internet-native short-form scripts, skits, direction and QC.",
    capabilities: ["Research", "Short-form", "Direction", "QC"],
    metric: "40K in 3 days · other reels at 10–15K at the time",
    tone: "paper",
  },
  {
    name: "Zerodha / Hackonomics",
    context: "YAAS Media",
    summary: "Long-form scripting for a finance and economics format.",
    capabilities: ["Finance", "Long-form script"],
    tone: "orange",
  },
  {
    name: "South Indian Bank / The Fincredibles",
    context: "YAAS Media",
    summary: "Ideation for a finance-led content property.",
    capabilities: ["Finance", "Ideation"],
    tone: "blue",
  },
  {
    name: "Brave Tech",
    context: "YAAS Media",
    summary: "Short-form writing for consumer technology stories.",
    capabilities: ["Tech", "Short-form"],
    tone: "ink",
  },
] as const;

export const creatorMetrics = [
  { value: "2.3M", label: "views on a creator post" },
  { value: "700K+", label: "views on a creator post" },
  { value: "400K+", label: "views on a creator post" },
];

export const creatorCollaborations = [
  "Udemy",
  "Tinksy",
  "Audio Array",
  "Axis Bank NFO",
  "Savyo.Shop",
  "Inventiko",
  "Noise",
];

export const receiptItems = [
  {
    src: "/assets/ai-plus.jpg",
    alt: "Ai+ Smartphone launch and social profile context",
    label: "Strategy → execution",
    detail: "Ai+ Smartphone · content system, scripts, QC, thumbnails and brand communication",
    className: "receipt--tall receipt--ai",
  },
  {
    src: "/assets/wallet-bulky.jpg",
    alt: "Siddhartha introducing the familiar problem of a bulky wallet",
    label: "Script + performance",
    detail: "The Wallet Store · paid partnership · 31.2K views visible in supplied screenshots",
    className: "receipt--wide receipt--wallet-a",
  },
  {
    src: "/assets/wallet-product.jpg",
    alt: "Product payoff frame from The Wallet Store video",
    label: "Shoot + edit",
    detail: "One idea carried from human hook to product payoff",
    className: "receipt--landscape receipt--wallet-b",
  },
  {
    src: "/assets/death-of-pc.jpg",
    alt: "Death of PC profile and short-form video grid",
    label: "Technical storytelling",
    detail: "Nothing / Death of PC · research, scripts, direction and QC",
    className: "receipt--tall receipt--death",
  },
  {
    src: "/assets/creator-grid.jpg",
    alt: "A grid of posts from Siddhartha's sircar.io creator profile",
    label: "Audience instinct",
    detail: "Independent creator practice · hooks, structure and visual packaging",
    className: "receipt--tall receipt--creator",
  },
  {
    src: "/assets/wallet-presenter.jpg",
    alt: "Siddhartha presenting The Wallet Store product on camera",
    label: "On-camera delivery",
    detail: "Creator-led brand work",
    className: "receipt--wide receipt--wallet-c",
  },
] as const;
