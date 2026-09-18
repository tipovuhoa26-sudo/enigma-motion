export interface AdvantageCard {
  id: string;
  index: number;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  bgColor: string;
  isDark?: boolean;
  metric: {
    value: number;
    prefix?: string;
    suffix?: string;
    label: string;
    subtext?: string;
  };
  widgetType: 'bars' | 'ring' | 'dots';
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  image: string;
  widthClass: string;
  heightClass: string;
  slug: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export const ADVANTAGES_DATA: AdvantageCard[] = [
  {
    id: 'advantage-1',
    index: 1,
    eyebrow: 'Increased Revenue',
    title: 'Cultivating Growth, Maximizing Revenue',
    description: 'Implementing our strategies has led to an average increase in revenue of 25% for our clients.',
    image: '/assets/advantage-card-1.jpg',
    bgColor: '#FAFFDE',
    metric: {
      value: 20,
      suffix: '%',
      label: 'increase in monthly sales',
      subtext: 'Revenue boost of 30%',
    },
    widgetType: 'bars',
  },
  {
    id: 'advantage-2',
    index: 2,
    eyebrow: 'Market Expansion',
    title: 'Scaling Global Footprint & Operations',
    description: 'Our clients expand into new territories 2.4x faster with intelligent automation and localized delivery.',
    image: '/assets/advantage-card-2.jpg',
    bgColor: '#F5F3F6',
    metric: {
      value: 29,
      prefix: '+',
      suffix: '%',
      label: 'operational velocity',
      subtext: 'Global deployment index',
    },
    widgetType: 'ring',
  },
  {
    id: 'advantage-3',
    index: 3,
    eyebrow: 'Efficiency Unlocked',
    title: 'Precision Engineering, Zero Waste',
    description: 'Eliminating manual bottlenecks through end-to-end data pipeline synthesis and autonomous workflows.',
    image: '/assets/advantage-card-3.jpg',
    bgColor: '#FAFFDE',
    metric: {
      value: 78,
      suffix: '%',
      label: 'processing efficiency',
      subtext: 'Task completion rate',
    },
    widgetType: 'dots',
  },
];

export const CASES_DATA: CaseStudy[] = [
  {
    id: 'case-1',
    title: 'E-commerce Optimization',
    category: 'Retail & Commerce',
    image: '/assets/case-1.jpg',
    widthClass: 'w-[300px] sm:w-[340px] md:w-[380px]',
    heightClass: 'h-[200px] sm:h-[230px] md:h-[260px]',
    slug: 'e-commerce-optimization',
  },
  {
    id: 'case-2',
    title: 'Manufacturing Efficiency',
    category: 'Industrial IoT',
    image: '/assets/case-2.jpg',
    widthClass: 'w-[320px] sm:w-[360px] md:w-[400px]',
    heightClass: 'h-[220px] sm:h-[250px] md:h-[280px]',
    slug: 'manufacturing-efficiency',
  },
  {
    id: 'case-3',
    title: 'Hospitality Automation',
    category: 'Sensory Experience',
    image: '/assets/case-3.jpg',
    widthClass: 'w-[290px] sm:w-[330px] md:w-[360px]',
    heightClass: 'h-[190px] sm:h-[220px] md:h-[250px]',
    slug: 'hospitality-automation',
  },
  {
    id: 'case-4',
    title: 'Fintech Infrastructure',
    category: 'Cryptographic Security',
    image: '/assets/case-4.jpg',
    widthClass: 'w-[340px] sm:w-[380px] md:w-[420px]',
    heightClass: 'h-[240px] sm:h-[270px] md:h-[300px]',
    slug: 'fintech-infrastructure',
  },
  {
    id: 'case-5',
    title: 'Autonomous Logistics',
    category: 'Supply Chain AI',
    image: '/assets/case-5.jpg',
    widthClass: 'w-[310px] sm:w-[350px] md:w-[390px]',
    heightClass: 'h-[210px] sm:h-[240px] md:h-[270px]',
    slug: 'autonomous-logistics',
  },
  {
    id: 'case-6',
    title: 'BioTech Precision Platform',
    category: 'Life Sciences',
    image: '/assets/case-6.jpg',
    widthClass: 'w-[300px] sm:w-[340px] md:w-[380px]',
    heightClass: 'h-[200px] sm:h-[230px] md:h-[260px]',
    slug: 'biotech-precision-platform',
  },
  {
    id: 'case-7',
    title: 'Cloud Infrastructure Scale',
    category: 'Enterprise SaaS',
    image: '/assets/case-1.jpg',
    widthClass: 'w-[320px] sm:w-[360px] md:w-[400px]',
    heightClass: 'h-[220px] sm:h-[250px] md:h-[280px]',
    slug: 'cloud-infrastructure-scale',
  },
  {
    id: 'case-8',
    title: 'Cognitive Computing Suite',
    category: 'AI Research',
    image: '/assets/case-5.jpg',
    widthClass: 'w-[310px] sm:w-[350px] md:w-[390px]',
    heightClass: 'h-[210px] sm:h-[240px] md:h-[270px]',
    slug: 'cognitive-computing-suite',
  },
];

export const STATS_DATA: StatItem[] = [
  {
    value: '99.8%',
    label: 'Platform Reliability & Enterprise Uptime',
  },
  {
    value: '140+',
    label: 'Global Enterprise Solutions Delivered',
  },
  {
    value: '2.4x',
    label: 'Average Operational Velocity Multiplier',
  },
];
