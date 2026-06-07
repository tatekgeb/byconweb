/** Shared marketing copy — single source for home, solutions, about, pricing. */

export const audience = {
  eyebrow: 'Medicaid NEMT dispatch',
  headline: 'Run today’s routes with proof on every trip.',
  lead:
    'Bycon is transport management for Medicaid NEMT providers with in-house dispatch—when late runs, missing proof, and document chaos cost you broker scorecards and audit sleep.',
};

export const pains = [
  {
    title: 'Late routes',
    description: 'Trips slip when the day board doesn’t match reality and dispatch is chasing spreadsheets.',
  },
  {
    title: 'Missing proof',
    description: 'Completion details scatter across texts and notes—hard to defend when Medicaid asks what happened.',
  },
  {
    title: 'Document chaos',
    description: 'Driver files, trip records, and broker data live in different places with no single source of truth.',
  },
];

export const outcomes = [
  {
    title: 'See the whole day at a glance',
    description:
      'One day board for routes, assignments, and changes—so dispatch stops playing catch-up and starts managing the run.',
  },
  {
    title: 'Proof on every trip',
    description:
      'Trip status, history, and field context in one record—built for Medicaid-style scrutiny, not after-the-fact reconstruction.',
  },
  {
    title: 'Compliance without the scramble',
    description:
      'Documents, expirations, and trip documentation in a compliance center—fewer gaps when auditors or brokers ask.',
  },
  {
    title: 'Broker trips without re-keying',
    description:
      'Automated Ecolane trip sync today; live MediDrive API on the roadmap—so dispatch works from current broker data.',
  },
];

export const solutionsOutcomes = [
  {
    title: 'Morning dispatch',
    description:
      'Pull broker trips, build routes, and adjust as cancellations and no-shows hit—without leaving the day board.',
  },
  {
    title: 'Field execution',
    description:
      'Driver assignments, SMS, and trip outcomes tied back to the same record dispatch started with.',
  },
  {
    title: 'Close the loop',
    description:
      'On-time metrics, trip history, and documentation views so ops knows how the day landed before the scorecard arrives.',
  },
];

export const integrations = {
  today: [
    {
      name: 'Ecolane',
      description:
        'Automated trip sync via our current integration (website-based today—not a native Ecolane API partnership).',
    },
  ],
  roadmap: [
    {
      name: 'MediDrive',
      description: 'Live API integration—in development.',
    },
  ],
  disclaimer:
    'Broker names describe compatibility targets. Bycon is not affiliated with or endorsed by these brokers unless stated otherwise.',
};

export const proof = {
  videoLabel: 'Product walkthrough',
  videoSrc: '/marketing/bycon_product_walkthrough.mp4',
  videoHint: 'A quick tour of dispatch, the day board, and compliance workflows.',
  quote:
    'Built for dispatch teams that need proof on every Medicaid trip—not another spreadsheet at the end of the day.',
  quoteAttribution: 'Bycon',
  screenshots: [
    {
      title: 'Day board',
      description:
        'Drag unassigned trips onto driver timelines, track progress, and replan when the day changes.',
      screenshot: 'day-board' as const,
    },
    {
      title: 'Compliance center',
      description: 'Trip proof, driver documents, and audit-friendly records in one place.',
      screenshot: 'compliance' as const,
    },
  ],
};

export const ctas = {
  demo: {
    label: 'Request a demo',
    href: '/contact?intent=demo',
  },
  trial: {
    label: 'Start free 30-day trial',
    href: '/contact?intent=trial',
  },
  trialNote:
    'Free for 30 days. We connect your Ecolane trips and get your dispatch team on the day board—usually within the first week.',
  replySla: 'We reply within 1 business day.',
};

export const aboutCopy = {
  lead:
    'We build operations software for Medicaid NEMT providers who run their own dispatch—where the schedule changes hourly, proof matters after the trip, and broker scorecards don’t wait.',
  disclaimer:
    'Capabilities depend on configuration, roles, and integrations. Nothing here is a legal or regulatory guarantee—review with counsel where compliance obligations apply.',
};
