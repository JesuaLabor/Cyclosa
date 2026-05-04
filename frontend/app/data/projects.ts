export type Project = {
  slug: string;
  title: string;
  description: string;
  fullDescription?: string;
  category: string;
  clientType?: string;
  duration?: string;
  techStack?: string[];
  tags: string[];
  image: string;
  gallery?: string[];
  clientReview?: string;
  faq?: { q: string; a: string }[];
};

export const CATEGORIES = ["Web Scraping", "Data Mining", "Automation", "AI Integration", "Video Editing"];

export const ALL_PROJECTS: Project[] = [
  {
    slug: "wine-market-scraper",
    title: "Wine Market Scraper",
    description: "Automated data collection system for tracking wine pricing and reviews across global e-commerce platforms.",
    fullDescription: "This project focused on developing a scalable web scraping solution to collect wine pricing, reviews, and product availability from multiple global e-commerce platforms. The client needed accurate and up-to-date data to better understand market trends and optimize their pricing strategy, but manual tracking was inefficient and inconsistent.\n\nCyclosa built a custom system that automated the data collection process, handled dynamic website structures, and delivered clean, structured data for analysis. This enabled the client to access reliable insights in real time, reduce manual workload, and make faster, data-driven decisions.",
    category: "Web Scraping",
    clientType: "E-commerce Business",
    duration: "2-4 weeks",
    techStack: ["Python", "Scrapy", "BeautifulSoup", "REST APIs", "Pandas", "PostgreSQL"],
    tags: ["Web Scraping"],
    image: "/projects/wine_marker_scraper.jpg",
    gallery: [
      "/projects/wine_marker_scraper.jpg",
      "/projects/wine_marker_scraper.jpg",
      "/projects/wine_marker_scraper.jpg",
      "/projects/wine_marker_scraper.jpg",
      "/projects/wine_marker_scraper.jpg",
      "/projects/wine_marker_scraper.jpg",
    ],
    clientReview: "The accuracy of the data we now receive is unparalleled. Cyclosa's solution has completely transformed how we analyze our competitors.",
    faq: [
      { q: "How often can data be refreshed?", a: "The system can be configured to run daily, weekly, or in real-time depending on your needs." },
      { q: "Can it handle anti-bot measures?", a: "Yes, we implement advanced proxy rotation and human-like browsing patterns to bypass common blocks." }
    ]
  },
  {
    slug: "b2b-leads-platform",
    title: "B2B Leads Generation Platform",
    description: "Automated system to collect and verify business leads for multiple industries.",
    fullDescription: "Generating high-quality B2B leads is a time-consuming process. Our client needed a solution that could not only scrape potential leads but also verify their contact information in real-time. We developed a platform that aggregates data from LinkedIn, company websites, and public registers, providing a steady stream of verified prospects.",
    category: "Data Mining",
    clientType: "SaaS Startup",
    duration: "4-6 weeks",
    techStack: ["Node.js", "Puppeteer", "Elasticsearch", "React", "AWS Lambda"],
    tags: ["Automation", "Data Mining"],
    image: "/projects/b2b_leads_generation_platform.jpg",
    gallery: ["/projects/wine_marker_scraper.jpg", "/projects/b2b_leads_generation_platform.jpg", "/projects/b2b_leads_generation_platform.jpg", "/projects/b2b_leads_generation_platform.jpg"],
    clientReview: "Our sales team's productivity tripled within the first month. The lead quality is exceptional.",
    faq: [{ q: "Is the data GDPR compliant?", a: "Yes, we only collect publicly available business information and follow all local regulations." }]
  },
  {
    slug: "car-data-collector",
    title: "Second-Hand Cars Data Collector",
    description: "Scraped listings, prices, and seller information from online car marketplaces.",
    fullDescription: "We built a comprehensive car market monitoring tool that tracks price fluctuations and listing velocity across 15+ major European marketplaces. This data allows the client to identify undervalued vehicles and predict market trends with high accuracy.",
    category: "Web Scraping",
    clientType: "Automotive Fintech",
    duration: "3-5 weeks",
    techStack: ["Python", "Selenium", "Redis", "Docker", "Grafana"],
    tags: ["Web Scraping"],
    image: "/projects/second_hand_car_data_collector.jpg",
    gallery: ["/projects/second_hand_car_data_collector.jpg", "/projects/wine_marker_scraper.jpg", "/projects/second_hand_car_data_collector.jpg", "/projects/second_hand_car_data_collector.jpg"],
  },
  {
    slug: "ai-model-integration",
    title: "AI Model Integration",
    description: "Integrated AI models to analyze client data for sales forecasts, inventory planning, and trend predictions.",
    fullDescription: "Moving beyond basic analytics, we integrated custom GPT models and neural networks into the client's existing ERP system. The AI now provides predictive maintenance alerts and highly accurate demand forecasting, significantly reducing inventory overhead.",
    category: "AI Integration",
    clientType: "Manufacturing Group",
    duration: "6-8 weeks",
    techStack: ["OpenAI API", "PyTorch", "FastAPI", "Next.js", "Azure"],
    tags: ["AI", "Data Analytics"],
    image: "/projects/ai_integration.png",
    gallery: ["/projects/ai_integration.png", "/projects/ai_integration.png", "/projects/ai_integration.png", "/projects/ai_integration.png"],
  },
  {
    slug: "onboarding-automation",
    title: "Client Onboarding Automation",
    description: "Built an automated onboarding pipeline for new clients, collecting and processing data efficiently.",
    fullDescription: "The client was losing 20% of prospects due to a slow, manual onboarding process. We replaced it with a fully automated workflow that handles identity verification, document collection, and CRM entry in under 5 minutes.",
    category: "Automation",
    clientType: "Financial Services",
    duration: "4 weeks",
    techStack: ["Zapier", "Make.com", "Typeform API", "Bubble.io"],
    tags: ["Automation", "Data Mining"],
    image: "/projects/onboarding_automation.png",
    gallery: ["/projects/onboarding_automation.png", "/projects/wine_marker_scraper.jpg", "/projects/onboarding_automation.png", "/projects/onboarding_automation.png"],
  },
  {
    slug: "video-content-tool",
    title: "Video Content Automation Tool",
    description: "Automates video clipping, basic editing, and subtitles for marketing campaigns.",
    fullDescription: "Taking raw footage to social-ready clips used to take days. Our tool uses AI to detect highlights, crop to vertical aspect ratios, and generate burnt-in subtitles automatically, allowing the client to post daily across 5 platforms.",
    category: "Video Editing",
    clientType: "Marketing Agency",
    duration: "5 weeks",
    techStack: ["Adobe Premiere SDK", "FFmpeg", "OpenAI Whisper", "Python"],
    tags: ["Video Editing"],
    image: "/projects/video_content_automation_tool.jpg",
    gallery: ["/projects/video_content_automation_tool.jpg", "/projects/wine_marker_scraper.jpg", "/projects/video_content_automation_tool.jpg", "/projects/video_content_automation_tool.jpg"],
  },
  {
    slug: "product-review-analyzer",
    title: "Product Review Analyzer",
    description: "Extracted and analyzed customer reviews to identify trends and sentiment.",
    fullDescription: "We developed a sentiment analysis engine that processes thousands of daily reviews from Amazon and Walmart. The system flags emerging product defects and negative trends before they impact the bottom line.",
    category: "Data Mining",
    clientType: "Consumer Brands",
    duration: "3 weeks",
    techStack: ["NLTK", "TensorFlow", "React", "MongoDB"],
    tags: ["Data Mining"],
    image: "/projects/product_review_analyzer.png",
    gallery: ["/projects/product_review_analyzer.png", "/projects/product_review_analyzer.png", "/projects/product_review_analyzer.png", "/projects/product_review_analyzer.png"],
  },
  {
    slug: "youtube-shorts-editing",
    title: "YouTube Shorts Editing",
    description: "Edited and optimized short-form video content for consistent posting.",
    fullDescription: "For content creators, consistency is key. We handle the full post-production of YouTube Shorts, including viral-style editing, dynamic captions, and sound design tailored for high retention.",
    category: "Video Editing",
    clientType: "Content Creator",
    duration: "Ongoing",
    techStack: ["CapCut Pro", "After Effects", "Midjourney"],
    tags: ["Video Editing"],
    image: "/projects/youtube_shorts_editing.png",
    gallery: ["/projects/youtube_shorts_editing.png", "/projects/youtube_shorts_editing.png", "/projects/youtube_shorts_editing.png", "/projects/youtube_shorts_editing.png"],
  },
  {
    slug: "email-outreach-tool",
    title: "Email Outreach Automation Tool",
    description: "Automated email campaigns and follow-ups for lead generation workflows.",
    fullDescription: "Managing cold outreach manually is impossible at scale. We built a custom system that handles personalized dynamic content, deliverability monitoring, and multi-step follow-up sequences.",
    category: "Automation",
    clientType: "Business Consultancy",
    duration: "4 weeks",
    techStack: ["Lemlist API", "n8n", "Google Workspace API"],
    tags: ["Automation"],
    image: "/projects/email_outreatch_automation_tool.png",
    gallery: ["/projects/email_outreatch_automation_tool.png", "/projects/email_outreatch_automation_tool.png", "/projects/email_outreatch_automation_tool.png", "/projects/email_outreatch_automation_tool.png"],
  },
  {
    slug: "podcast-episode-editing",
    title: "Podcast Episode Editing",
    description: "Edited full-length podcast episodes with clean cuts, audio balancing, and subtitles.",
    fullDescription: "Professional audio is non-negotiable for high-end podcasts. We provide full audio engineering, multi-cam video switching, and social media teaser generation for various weekly shows.",
    category: "Video Editing",
    clientType: "Media Company",
    duration: "Weekly",
    techStack: ["DaVinci Resolve", "Izotope RX", "Descript"],
    tags: ["Video Editing"],
    image: "/projects/video_content_automation_tool.jpg",
    gallery: ["/projects/video_content_automation_tool.jpg", "/projects/video_content_automation_tool.jpg", "/projects/video_content_automation_tool.jpg", "/projects/video_content_automation_tool.jpg"],
  },
  {
    slug: "amazon-reviews-scraper",
    title: "Amazon Reviews Scraper",
    description: "Extracting thousands of product reviews for sentiment analysis and competitor research.",
    fullDescription: "A high-performance scraper designed to bypass Amazon's anti-bot measures. It extracts product specs, prices, and verified reviews into a structured dashboard for strategic decision-making.",
    category: "Web Scraping",
    clientType: "Market Research Firm",
    duration: "3 weeks",
    techStack: ["Python", "Bright Data", "Pandas"],
    tags: ["Web Scraping"],
    image: "/projects/wine_marker_scraper.jpg",
    gallery: ["/projects/wine_marker_scraper.jpg", "/projects/wine_marker_scraper.jpg", "/projects/wine_marker_scraper.jpg", "/projects/wine_marker_scraper.jpg"],
  },
];

export const TAG_COLORS: Record<string, { bg: string; text: string }> = {
  "Web Scraping": { bg: "linear-gradient(135deg, #4066FF 0%, #7C4DFF 100%)", text: "#111111" },
  Automation: { bg: "#1DE9B6", text: "#000000" },
  "Data Mining": { bg: "linear-gradient(180deg, #6FDA44 0%, #42B912 100%)", text: "#111111" },
  AI: { bg: "linear-gradient(135deg, #C44DFF 0%, #A60BF3 100%)", text: "#111111" },
  "Data Analytics": { bg: "linear-gradient(135deg, #C44DFF 0%, #A60BF3 100%)", text: "#111111" },
  "Video Editing": { bg: "linear-gradient(135deg, #FF8C40 0%, #EE6910 100%)", text: "#111111" },
};

