export type Link = { label: string; href: string }

export type Project = {
  id: string
  kicker: string
  title: string
  summary: string
  points: string[]
  stack: string[]
  image: string
  imageAlt: string
  links: Link[]
}

export const featured = {
  kicker: 'Featured case study · 2026',
  title: 'JennuCrafts Inventory',
  summary:
    'A filament inventory and quoting tool for a small 3D-printing shop. Ask it “Can I print three black card stands?” and it checks the saved slicer estimate against live stock, picks the spool, prices the job and, once you approve, reserves the filament in a single database transaction.',
  problem:
    'Spreadsheets could not tell me how much PLA was really free once committed prints were counted, and two orders could quietly claim the same spool.',
  decisions: [
    {
      title: 'Overbooking is impossible, not just unlikely',
      body: 'Every reservation runs inside one Postgres function that locks the spool rows in a fixed order. In tests, 10 parallel orders against a 100 g spool produced exactly 2 successes, and 20 crossing two-colour orders produced no deadlocks.',
    },
    {
      title: 'The AI proposes, the database decides',
      body: 'The Claude-powered assistant only has read-only tools. It turns plain English into a proposal, and the person approves it. Prices and stock checks happen server-side, so the model cannot invent a number or skip a check.',
    },
    {
      title: 'Real costs per colour',
      body: 'Spools track regular and paid price per kg with a weighted average on restock. Models are split into plates and parts, so COGS and print time come out per colour, ready for Etsy listings.',
    },
  ],
  stack: ['React', 'TypeScript', 'Supabase', 'Postgres RLS', 'Edge Functions', 'Claude API', 'Netlify'],
  images: [
    { src: '/img/jc-assistant.webp', alt: 'The assistant answering a print request with a proposed quote' },
    { src: '/img/jc-spools.webp', alt: 'Spool table with remaining, reserved and available grams' },
    { src: '/img/jc-models.webp', alt: 'Model detail with plates, filament parts and cost per colour' },
  ],
  links: [
    { label: 'Try the live demo', href: 'https://jennucrafts-inventory.netlify.app/demo/' },
    { label: 'Source on GitHub', href: 'https://github.com/VSmigielski/jennucrafts-inventory' },
  ],
}

export const projects: Project[] = [
  {
    id: 'budget-quest',
    kicker: 'Learning game · live product',
    title: 'Budget Quest',
    summary:
      'A fantasy adventure that teaches kids in grades 2–12 real money skills. Students earn gold through jobs, plan for bills, save toward rewards and face consequences like the Debt Dragon, a boss that grows with every missed payment. Parents and teachers set the jobs and rewards and follow progress from their own dashboards.',
    points: [
      'Separate experiences for kids, parents, classrooms and financial-institution sponsors',
      'Story-driven levels, from the Crystal Vault budgeting game to the Debt Temple boss fight',
      'A no-sign-up demo so anyone can play a level in a minute',
    ],
    stack: ['React', 'TypeScript', 'Supabase', 'Game design'],
    image: '/img/budget-quest-site.webp',
    imageAlt: 'Budget Quest home page for parents, with the parent dashboard',
    links: [
      { label: 'Visit budget-quest.com', href: 'https://budget-quest.com/' },
      { label: 'Try the 60-second demo', href: 'https://budget-quest.com/demo' },
    ],
  },
  {
    id: 'winterinbloom',
    kicker: 'Creator platform',
    title: 'Winter in Bloom Studio',
    summary:
      'An invite-only marketplace for independent audio creators: profiles, audio uploads with moderation, direct messages, wishlists, support tickets and a full staff admin area.',
    points: [
      '50+ Supabase migrations with row-level security throughout',
      'Unit and end-to-end tests (Vitest, Playwright), Sentry, uptime monitoring and written runbooks',
      'Feature flags to ship commissions and payments only when they are ready',
    ],
    stack: ['Next.js', 'React', 'TypeScript', 'Supabase', 'Railway'],
    image: '',
    imageAlt: '',
    links: [{ label: 'Visit the studio', href: 'https://winterinbloom.studio' }],
  },
  {
    id: 'czech-k-9',
    kicker: 'Client website',
    title: 'Czech K-9',
    summary:
      'A website for a working-dog breeder and trainer, built for a real client: clear service pages, photo-led layout and an easy way for buyers to get in touch.',
    points: ['Gathered requirements with the client and iterated on feedback', 'Responsive layout built to be easy to update'],
    stack: ['HTML', 'CSS', 'JavaScript'],
    image: '/img/czech-k-9-1.webp',
    imageAlt: 'Czech K-9 website home page',
    links: [{ label: 'View the site', href: 'https://goofy-austin-ce00f1.netlify.app/' }],
  },
]

export const earlyWork: { title: string; image: string; href: string }[] = [
  { title: 'Dictionary', image: '/img/dictionary-1.webp', href: 'https://elegant-perlman-775402.netlify.app/' },
  { title: 'Weather (React)', image: '/img/weather-react.webp', href: 'https://objective-chandrasekhar-cd70ce.netlify.app/' },
  { title: 'Travel', image: '/img/travel-new-font.webp', href: 'https://keen-lalande-08fde2.netlify.app/' },
  { title: 'Vending machine', image: '/img/vending-machine-1.webp', href: 'https://silly-jones-011bae.netlify.app/' },
  { title: 'Bug tracker', image: '/img/bug-tracker.webp', href: 'https://mystifying-minsky-0a91a9.netlify.app/' },
  { title: 'Contacts app', image: '/img/contact-app.webp', href: 'https://friendly-fermi-5a9c25.netlify.app/' },
  { title: 'Product Hunt clone', image: '/img/product-hunt.webp', href: 'https://eager-brown-0b5158.netlify.app/' },
  { title: 'Calculator', image: '/img/calculator.webp', href: 'https://gracious-mayer-942d5e.netlify.app/' },
  { title: 'Tic-tac-toe', image: '/img/tic-tac-toe.webp', href: 'https://dazzling-almeida-0be174.netlify.app/' },
  { title: 'Birthday tracker', image: '/img/birthday-project.webp', href: 'https://optimistic-minsky-4fd3b7.netlify.app/' },
  { title: 'Tours', image: '/img/tours-project.webp', href: 'https://festive-jackson-d79bc1.netlify.app/' },
  { title: 'Reviews', image: '/img/reviews-project.webp', href: 'https://romantic-johnson-ded6e0.netlify.app/' },
]

export const contact = {
  email: 'veronicasmigielski@gmail.com',
  github: 'https://github.com/VSmigielski',
  linkedin: 'https://www.linkedin.com/in/veronica-mccormick-b85025174/',
}
