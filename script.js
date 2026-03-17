/* ==========================================================
   AI UNIVERSE — Global AI News Explorer
   Interactive space-themed AI news visualization
   ========================================================== */

// ===== CONFIGURATION =====
const CONFIG = {
  orbits: {
    inner:  { radius: 160, speed: 0.00018, label: 'Core LLM' },
    middle: { radius: 260, speed: 0.00012, label: 'AI Wrapper' },
    outer:  { radius: 360, speed: 0.00008, label: 'Industry Agent' },
    outer2: { radius: 450, speed: 0.00006, label: 'Industry Agent' },
  },
  zDepth: { inner: 40, middle: 0, outer: -40, outer2: -65 },
  starCount: 280,
  shootingStarInterval: 5000,
};

// ===== BODY DEFINITIONS =====
const BODY_DEFS = [
  // Core LLMs (inner orbit)
  { id: 'chatgpt',  name: 'ChatGPT',     layer: 'inner',  color: '#10a37f', baseSize: 22, icon: '💬', character: 'The Pioneer' },
  { id: 'claude',   name: 'Claude',       layer: 'inner',  color: '#d97757', baseSize: 22, icon: '🧠', character: 'The Thinker' },
  { id: 'gemini',   name: 'Gemini',       layer: 'inner',  color: '#4285f4', baseSize: 22, icon: '♊', character: 'The Polymath' },
  { id: 'others',   name: 'Open Source',  layer: 'inner',  color: '#9b59b6', baseSize: 18, icon: '🌐', character: 'The Collective' },
  // AI Wrappers (middle orbit)
  { id: 'lovable',    name: 'Lovable',     layer: 'middle', color: '#ff6b9d', baseSize: 16, icon: '💖', character: 'The Creator' },
  { id: 'claudecode', name: 'Claude Code', layer: 'middle', color: '#e8834a', baseSize: 16, icon: '⌨️', character: 'The Artisan' },
  { id: 'bolt',       name: 'Bolt',        layer: 'middle', color: '#f1c40f', baseSize: 16, icon: '⚡', character: 'The Speedster' },
  { id: 'replit',     name: 'Replit',      layer: 'middle', color: '#0d84e3', baseSize: 16, icon: '🔮', character: 'The Alchemist' },
  // Industry Agents (outer orbit)
  { id: 'ecom',      name: 'E-Commerce',  layer: 'outer', color: '#2ecc71', baseSize: 13, icon: '🛒', character: 'The Merchant' },
  { id: 'health',    name: 'Healthcare',  layer: 'outer', color: '#e74c3c', baseSize: 13, icon: '🏥', character: 'The Healer' },
  { id: 'finance',   name: 'Finance',     layer: 'outer', color: '#f39c12', baseSize: 13, icon: '📈', character: 'The Oracle' },
  { id: 'education', name: 'Education',   layer: 'outer', color: '#1abc9c', baseSize: 13, icon: '🎓', character: 'The Mentor' },
  { id: 'travel',    name: 'Travel',      layer: 'outer', color: '#00bcd4', baseSize: 13, icon: '✈️', character: 'The Explorer' },
  { id: 'pharma',    name: 'Pharma',      layer: 'outer', color: '#e91e63', baseSize: 13, icon: '💊', character: 'The Chemist' },
  // Outer2 ring
  { id: 'automotive',    name: 'Automotive',     layer: 'outer2', color: '#607d8b', baseSize: 12, icon: '🚗', character: 'The Driver' },
  { id: 'retail',        name: 'Retail',         layer: 'outer2', color: '#ff9800', baseSize: 12, icon: '🏪', character: 'The Shopkeeper' },
  { id: 'fmcg',          name: 'FMCG',           layer: 'outer2', color: '#8bc34a', baseSize: 12, icon: '📦', character: 'The Supplier' },
  { id: 'manufacturing', name: 'Manufacturing',  layer: 'outer2', color: '#795548', baseSize: 12, icon: '🏭', character: 'The Builder' },
  { id: 'telecom',       name: 'Telecom',        layer: 'outer2', color: '#00e5ff', baseSize: 12, icon: '📡', character: 'The Connector' },
];

// ===== TAG ICONS =====
const TAG_ICONS = {
  'Launch':'🚀','Update':'🔄','Feature':'✨','Partnership':'🤝','Research':'🔬',
  'Milestone':'🏆','Integration':'🔗','Funding':'💰','Innovation':'💡','Industry':'🏢',
  'Regulation':'⚖️','Regulatory':'⚖️','Breakthrough':'🌟','Trend':'📊','Study':'📋',
  'Report':'📋','Policy':'📜','Open Source':'🌐','Achievement':'🥇','Product':'📦',
  'API':'⚙️','Announcement':'📢','Pricing':'💲','Community':'👥','Release':'🚀',
  'Enterprise':'🏢',
};

// ===== WEEK DEFINITIONS =====
const WEEKS = [
  { id: 'W07', label: 'W07', dateRange: 'Feb 9 – 15, 2026' },
  { id: 'W08', label: 'W08', dateRange: 'Feb 16 – 22, 2026' },
  { id: 'W09', label: 'W09', dateRange: 'Feb 23 – Mar 1, 2026' },
  { id: 'W10', label: 'W10', dateRange: 'Mar 2 – 8, 2026' },
  { id: 'W11', label: 'W11', dateRange: 'Mar 9 – 15, 2026' },
  { id: 'W12', label: 'W12', dateRange: 'Mar 16 – 22, 2026' },
];

// ===== NEWS DATA =====
const NEWS_DATA = {
  // -------- WEEK 7 --------
  W07: {
    chatgpt: {
      prominence: 0.7, angle: 0.3,
      news: [
        { tag: 'Update', title: 'ChatGPT Gets Enhanced Voice Mode in 40 Languages', date: 'Feb 10', summary: 'OpenAI expands voice conversations to 40 additional languages with improved accent recognition.', detail: 'OpenAI has rolled out an expanded voice mode for ChatGPT supporting 40 new languages and dialects. The update includes significant improvements in accent recognition and natural conversation flow, making the AI assistant more accessible to users worldwide. Enterprise customers get priority access to the new languages.' },
        { tag: 'Partnership', title: 'OpenAI Partners with Reuters for Real-Time News', date: 'Feb 12', summary: 'ChatGPT gains access to Reuters\' live news feed for current events responses.', detail: 'In a landmark partnership, OpenAI has integrated Reuters\' live news feed directly into ChatGPT, enabling the AI to provide up-to-the-minute responses about current events. The deal reportedly worth $150M over 3 years ensures ChatGPT users get verified, sourced news in their conversations.' },
        { tag: 'Feature', title: 'ChatGPT Rolls Out Canvas Mode for Collaborative Writing', date: 'Feb 14', summary: 'New side-by-side editing canvas allows real-time co-writing with AI.', detail: 'OpenAI launched Canvas Mode for ChatGPT Plus and Enterprise users, providing a side-by-side editing interface where users can collaboratively write and refine documents with the AI. The feature supports inline suggestions, version history, and export to Google Docs and Word. Early adoption data shows a 40% increase in long-form content creation among beta users.' },
      ]
    },
    claude: {
      prominence: 0.5, angle: 1.8,
      news: [
        { tag: 'Research', title: 'Anthropic Publishes Constitutional AI v2 Paper', date: 'Feb 11', summary: 'New research details improved safety alignment techniques for Claude models.', detail: 'Anthropic released its Constitutional AI v2 research paper, detailing a new approach to AI safety that reduces harmful outputs by 73% while maintaining helpfulness scores. The techniques are already being applied to Claude model training and represent a significant step in scalable AI alignment.' },
      ]
    },
    gemini: {
      prominence: 0.8, angle: 3.2,
      news: [
        { tag: 'Launch', title: 'Gemini 2.0 Flash Enters Public Preview', date: 'Feb 9', summary: 'Google\'s fastest multimodal model now available to all developers.', detail: 'Google DeepMind has opened public access to Gemini 2.0 Flash, their fastest multimodal model capable of processing text, images, audio, and video. With sub-200ms latency for most queries, it\'s positioned as the go-to model for real-time applications. Early benchmarks show it matches GPT-4 Turbo on reasoning tasks at 3x the speed.' },
        { tag: 'Integration', title: 'Gmail Gets Gemini-Powered Email Drafting', date: 'Feb 14', summary: 'Google integrates Gemini AI directly into Gmail for smart email composition.', detail: 'Google has begun rolling out Gemini-powered email drafting across Gmail, allowing users to generate, refine, and translate emails with a single click. The feature uses Gemini 2.0 Flash for near-instant response and learns from user writing patterns to match their communication style.' },
      ]
    },
    others: {
      prominence: 0.6, angle: 4.8,
      news: [
        { tag: 'Open Source', title: 'Mistral Medium 3 Released with Apache 2.0 License', date: 'Feb 13', summary: 'Mistral\'s latest model bridges the gap between open and closed-source AI.', detail: 'Mistral AI released Medium 3, a 70B parameter model under the Apache 2.0 license that matches Claude 3.5 Sonnet on several benchmarks. The model includes native function calling, 128K context, and optimized inference for consumer GPUs with 4-bit quantization.' },
      ]
    },
    lovable: {
      prominence: 0.4, angle: 0.5,
      news: [
        { tag: 'Feature', title: 'Lovable Adds Database Schema Visual Builder', date: 'Feb 11', summary: 'New drag-and-drop interface for designing database schemas in AI-built apps.', detail: 'Lovable introduced a visual database schema builder that integrates with Supabase. Users can now design complex relational databases using drag-and-drop, and the AI automatically generates migrations, APIs, and type-safe client code.' },
      ]
    },
    claudecode: {
      prominence: 0.5, angle: 2.1,
      news: [
        { tag: 'Update', title: 'Claude Code Launches Jupyter Notebook Support', date: 'Feb 10', summary: 'Developers can now edit and run Jupyter notebooks directly from Claude Code.', detail: 'Claude Code added native Jupyter notebook support, allowing data scientists and ML engineers to create, edit, and execute notebook cells through natural language commands. The integration supports popular kernels including Python, R, and Julia.' },
      ]
    },
    bolt: {
      prominence: 0.3, angle: 3.7,
      news: [
        { tag: 'Milestone', title: 'Bolt.new Surpasses 500K Active Developers', date: 'Feb 12', summary: 'The AI development platform reaches half a million monthly active users.', detail: 'StackBlitz announced that Bolt.new has reached 500,000 monthly active developers, doubling its user base in just 3 months. The platform has processed over 10 million AI-assisted development sessions, with the average project going from idea to deployed prototype in under 15 minutes.' },
      ]
    },
    replit: {
      prominence: 0.5, angle: 5.3,
      news: [
        { tag: 'Launch', title: 'Replit Agent Gets Multi-Step Planning', date: 'Feb 14', summary: 'Replit\'s AI agent can now break complex tasks into steps and execute them sequentially.', detail: 'Replit upgraded its AI Agent with multi-step planning capabilities, allowing it to break down complex development tasks into manageable steps. The agent can now handle tasks like "build a full authentication system with OAuth" by planning and executing each component in sequence, including error handling and testing.' },
      ]
    },
    ecom: {
      prominence: 0.5, angle: 0.8,
      news: [
        { tag: 'Industry', title: 'Shopify Launches AI Product Description Generator', date: 'Feb 10', summary: 'Merchants can generate SEO-optimized product listings with one click.', detail: 'Shopify released an AI-powered product description generator that creates SEO-optimized listings from product photos and basic details. The tool supports 20 languages and includes A/B testing capabilities to optimize conversion rates. Early adopters report 35% improvement in organic search traffic.' },
      ]
    },
    health: {
      prominence: 0.4, angle: 2.4,
      news: [
        { tag: 'Research', title: 'DeepMind AlphaFold 3 Predicts Drug Interactions', date: 'Feb 13', summary: 'AlphaFold extends beyond protein structure to predict drug-molecule interactions.', detail: 'Google DeepMind expanded AlphaFold 3\'s capabilities to predict drug-molecule interactions with 89% accuracy, potentially accelerating drug discovery timelines by years. Pharmaceutical companies including Eli Lilly and Novartis have signed agreements to integrate the technology into their R&D pipelines.' },
      ]
    },
    finance: {
      prominence: 0.3, angle: 4.0,
      news: [
        { tag: 'Regulation', title: 'EU Proposes AI Transparency Rules for Trading Algorithms', date: 'Feb 11', summary: 'New regulations would require disclosure of AI-driven trading strategies.', detail: 'The European Commission proposed new regulations requiring financial institutions to disclose when AI algorithms are making trading decisions. The rules would mandate explainability reports for any AI system managing more than €10M in assets, with compliance expected by 2027.' },
      ]
    },
    education: {
      prominence: 0.4, angle: 5.6,
      news: [
        { tag: 'Launch', title: 'Khan Academy Khanmigo Expands to 5M Students', date: 'Feb 9', summary: 'AI tutoring platform reaches milestone adoption in US school districts.', detail: 'Khan Academy\'s AI tutor Khanmigo surpassed 5 million active students across 3,000 US school districts. Studies show students using the AI tutor improved math scores by an average of 18% compared to control groups. The platform now supports personalized learning paths in math, science, and humanities.' },
      ]
    },
    travel: {
      prominence: 0.5, angle: 1.5,
      news: [
        { tag: 'Launch', title: 'Expedia Unveils AI Travel Planner with Real-Time Pricing', date: 'Feb 10', summary: 'AI-powered itinerary builder optimizes trips based on budget, preferences, and live pricing.', detail: 'Expedia launched an AI travel planner that generates complete itineraries including flights, hotels, and activities while continuously monitoring real-time pricing. The system learns from user preferences and travel history to suggest personalized destinations. Beta users reported saving an average of 23% on trip costs compared to manual booking.' },
        { tag: 'Partnership', title: 'Emirates Partners with Google to Deploy AI Crew Scheduling', date: 'Feb 13', summary: 'AI system optimizes crew assignments across 3,500 weekly flights.', detail: 'Emirates announced a partnership with Google Cloud to deploy an AI-driven crew scheduling system across its fleet of 260 aircraft. The system considers fatigue regulations, crew qualifications, timezone impacts, and operational disruptions to optimize assignments in real time. Early results show a 15% reduction in crew-related delays and improved staff satisfaction scores.' },
      ]
    },
    pharma: {
      prominence: 0.6, angle: 2.8,
      news: [
        { tag: 'Breakthrough', title: 'Insilico Medicine AI-Designed Drug Enters Phase 2 Trials', date: 'Feb 11', summary: 'First fully AI-designed drug candidate advances to mid-stage clinical trials for lung fibrosis.', detail: 'Insilico Medicine\'s ISM001-055, the first drug entirely designed by artificial intelligence, entered Phase 2 clinical trials for idiopathic pulmonary fibrosis. The AI platform identified the novel target and designed the molecule in just 18 months, compared to the typical 4-5 year timeline. Phase 1 results showed favorable safety profiles and promising biomarker responses in 78% of patients.' },
      ]
    },
    automotive: {
      prominence: 0.5, angle: 3.9,
      news: [
        { tag: 'Milestone', title: 'Waymo Surpasses 500K Paid Robotaxi Rides Per Week', date: 'Feb 12', summary: 'Autonomous ride-hailing service hits record weekly ridership across US cities.', detail: 'Waymo announced it now completes over 500,000 paid robotaxi rides per week across San Francisco, Phoenix, Los Angeles, and Austin. The company expanded its service area by 40% in Q1 2026 and reported a 92% rider satisfaction rate. Waymo also revealed plans to launch in Miami and Dallas by mid-2026, with a fleet of 2,000 additional Jaguar I-PACE vehicles.' },
        { tag: 'Launch', title: 'BMW Integrates ChatGPT-Powered Voice Assistant Across 2027 Lineup', date: 'Feb 14', summary: 'All new BMW models will feature conversational AI for vehicle controls and navigation.', detail: 'BMW confirmed that its entire 2027 model lineup will feature an advanced voice assistant powered by OpenAI\'s ChatGPT, replacing the existing voice control system. The AI assistant can handle natural conversations about navigation, vehicle settings, entertainment, and even maintenance scheduling. The system processes sensitive commands on-device while routing general queries to the cloud.' },
      ]
    },
    retail: {
      prominence: 0.4, angle: 5.1,
      news: [
        { tag: 'Industry', title: 'Walmart Deploys AI Inventory Robots in 2,000 Stores', date: 'Feb 9', summary: 'Autonomous shelf-scanning robots reduce out-of-stock items by 30%.', detail: 'Walmart completed the rollout of AI-powered inventory robots to 2,000 US stores, making it the largest deployment of autonomous retail robots in history. The robots scan shelves every 2 hours, detecting out-of-stock items, misplaced products, and pricing errors with 99% accuracy. The system has reduced out-of-stock incidents by 30% and freed up 8 hours of employee time per store daily.' },
      ]
    },
    fmcg: {
      prominence: 0.3, angle: 0.2,
      news: [
        { tag: 'Innovation', title: 'Unilever Uses Generative AI to Cut Product Development Time by 50%', date: 'Feb 13', summary: 'AI-driven formulation and consumer testing accelerates new product launches.', detail: 'Unilever revealed that its AI-powered product development platform has reduced the time from concept to shelf by 50% across its beauty and personal care divisions. The system uses generative AI to simulate thousands of formulation combinations and predict consumer preferences based on social media trend analysis and focus group data. The first AI-accelerated product line launched in Southeast Asia with sales exceeding forecasts by 35%.' },
      ]
    },
    manufacturing: {
      prominence: 0.5, angle: 4.4,
      news: [
        { tag: 'Deployment', title: 'Siemens Launches Industrial Copilot for Factory Floor Workers', date: 'Feb 10', summary: 'AI assistant helps factory operators troubleshoot equipment and optimize production lines.', detail: 'Siemens launched its Industrial Copilot, an AI assistant designed for factory floor workers that provides real-time troubleshooting guidance, predictive maintenance alerts, and production optimization recommendations. The system integrates with Siemens\' Xcelerator platform and supports voice commands in noisy environments. Pilot deployments at 50 factories showed a 25% reduction in unplanned downtime and 12% improvement in overall equipment effectiveness.' },
      ]
    },
    telecom: {
      prominence: 0.4, angle: 6.0,
      news: [
        { tag: 'Launch', title: 'Ericsson Deploys AI-Native 5G Network Optimization Across 30 Operators', date: 'Feb 11', summary: 'AI system autonomously manages 5G network performance in real time.', detail: 'Ericsson announced that 30 telecom operators worldwide are now using its AI-native network optimization platform to autonomously manage 5G performance. The system adjusts network parameters in real time based on traffic patterns, weather conditions, and user density, improving average download speeds by 35% and reducing energy consumption by 18%. The platform processes over 10 billion network events daily across all deployments.' },
        { tag: 'Feature', title: 'T-Mobile Launches AI Customer Service Agent Handling 60% of Calls', date: 'Feb 14', summary: 'AI voice agent resolves most customer inquiries without human handoff.', detail: 'T-Mobile deployed an advanced AI customer service agent that now handles 60% of inbound calls without requiring human intervention. The system uses natural language understanding to diagnose billing issues, process plan changes, troubleshoot device problems, and schedule technician visits. Customer satisfaction scores for AI-handled calls are within 5% of human agent scores, and average call resolution time dropped from 12 minutes to 4 minutes.' },
      ]
    },
  },

  // -------- WEEK 8 --------
  W08: {
    chatgpt: {
      prominence: 0.6, angle: 0.8,
      news: [
        { tag: 'Feature', title: 'ChatGPT Memory Now Persistent Across Devices', date: 'Feb 17', summary: 'Users\' conversation context now syncs across all platforms.', detail: 'OpenAI launched cross-device memory for ChatGPT, allowing conversation context and user preferences to sync seamlessly between mobile, desktop, and web. The feature uses end-to-end encryption and gives users granular control over what the AI remembers. Plus and Enterprise users can store up to 10,000 memory entries.' },
      ]
    },
    claude: {
      prominence: 0.9, angle: 2.0,
      news: [
        { tag: 'Launch', title: 'Claude 4.5 Haiku Sets New Speed-Quality Records', date: 'Feb 18', summary: 'Anthropic\'s smallest model achieves GPT-4 level performance at 10x lower latency.', detail: 'Anthropic released Claude 4.5 Haiku, a model that matches GPT-4\'s performance on key benchmarks while running at 10x lower latency. With costs at $0.25 per million input tokens, it becomes the most cost-effective frontier-class model available. The model excels particularly at code generation and structured data extraction.' },
        { tag: 'Enterprise', title: 'Anthropic Closes $5B Series D at $60B Valuation', date: 'Feb 20', summary: 'Record funding round led by Lightspeed and existing investors.', detail: 'Anthropic closed a $5 billion Series D funding round at a $60 billion valuation, led by Lightspeed Venture Partners with participation from Google, Spark Capital, and Salesforce Ventures. The funds will be used to scale compute infrastructure and expand the Claude model family. The round is the largest in AI history outside of OpenAI.' },
      ]
    },
    gemini: {
      prominence: 0.5, angle: 3.5,
      news: [
        { tag: 'Integration', title: 'Android 16 Beta Ships with Gemini as Default Assistant', date: 'Feb 19', summary: 'Google replaces Google Assistant with Gemini in next Android release.', detail: 'The Android 16 Developer Preview 2 revealed that Gemini will fully replace Google Assistant as the default AI assistant. The integration goes deeper than previous versions, with Gemini able to control apps, manage settings, and perform complex multi-step tasks using on-device processing for privacy-sensitive operations.' },
      ]
    },
    others: {
      prominence: 0.7, angle: 5.0,
      news: [
        { tag: 'Launch', title: 'Meta Releases Llama 4 Scout — Smallest Model with 128K Context', date: 'Feb 21', summary: 'Meta\'s latest open-source model runs on consumer hardware with massive context.', detail: 'Meta released Llama 4 Scout, a 17B active-parameter model using a Mixture-of-Experts architecture that runs efficiently on a single GPU while supporting 128K context length. The model uses a 16-expert MoE design with only 2 active experts per token, achieving Gemini 2.0 Flash-level performance at a fraction of the compute cost.' },
        { tag: 'Community', title: 'Hugging Face Hits 1 Million Model Repository Milestone', date: 'Feb 16', summary: 'The open-source AI platform crosses one million hosted models.', detail: 'Hugging Face celebrated hosting over 1 million models on its platform, reflecting the explosive growth of the open-source AI ecosystem. The milestone model was a fine-tuned Llama 3 variant for medical text analysis. The platform now serves over 50,000 organizations and processes 2 billion API calls monthly.' },
      ]
    },
    lovable: {
      prominence: 0.6, angle: 0.8,
      news: [
        { tag: 'Feature', title: 'Lovable Introduces Multi-Page App Templates', date: 'Feb 17', summary: 'Pre-built templates for SaaS dashboards, marketplaces, and social platforms.', detail: 'Lovable released a library of 25+ multi-page application templates spanning SaaS dashboards, two-sided marketplaces, social platforms, and portfolio sites. Each template comes with authentication, database schema, and payment integration pre-configured, reducing development time from hours to minutes.' },
        { tag: 'Milestone', title: 'Lovable Crosses $10M ARR in Under 12 Months', date: 'Feb 21', summary: 'AI app builder reaches revenue milestone faster than most SaaS startups.', detail: 'Lovable announced it has crossed $10 million in annual recurring revenue less than a year after launch, making it one of the fastest-growing developer tools in history. The platform now hosts over 150,000 deployed applications and has processed more than 2 million AI build sessions. The team plans to use the momentum to expand into mobile app generation and enterprise white-label solutions.' },
      ]
    },
    claudecode: {
      prominence: 0.7, angle: 2.3,
      news: [
        { tag: 'Update', title: 'Claude Code Adds Multi-File Editing with Auto-Refactoring', date: 'Feb 19', summary: 'Developers can refactor across entire codebases with natural language commands.', detail: 'Claude Code introduced multi-file editing capabilities that understand project-wide dependencies. Developers can now request changes like "rename this interface and update all usages" or "extract this logic into a shared utility" and Claude Code will modify all affected files simultaneously, running tests to verify correctness.' },
      ]
    },
    bolt: {
      prominence: 0.4, angle: 3.9,
      news: [
        { tag: 'Feature', title: 'Bolt.new Adds Real-Time Collaboration Mode', date: 'Feb 20', summary: 'Multiple developers can now co-edit AI-generated projects simultaneously.', detail: 'Bolt.new launched a Google Docs-style collaboration mode where multiple developers can work on the same AI-generated project simultaneously. Each user can issue their own AI prompts, and the system intelligently merges changes, resolving conflicts automatically. The feature supports up to 5 concurrent editors.' },
      ]
    },
    replit: {
      prominence: 0.5, angle: 5.5,
      news: [
        { tag: 'Partnership', title: 'Replit Partners with 50 Universities for AI Curriculum', date: 'Feb 18', summary: 'Universities adopt Replit\'s AI-first coding environment for CS education.', detail: 'Replit announced partnerships with 50 universities including MIT, Stanford, and Georgia Tech to integrate its AI-powered development environment into computer science curricula. The academic program provides free Pro access to students and includes AI-specific courses on prompt engineering, agent development, and responsible AI use.' },
      ]
    },
    ecom: {
      prominence: 0.6, angle: 1.0,
      news: [
        { tag: 'Launch', title: 'Amazon Rufus AI Shopping Assistant Goes Global', date: 'Feb 17', summary: 'Amazon expands its AI shopping assistant to 15 new countries.', detail: 'Amazon rolled out its Rufus AI shopping assistant to 15 additional countries across Europe and Asia-Pacific. Rufus can now compare products, explain technical specifications in plain language, and make personalized recommendations based on purchase history. The assistant handles 50 million queries daily, with 67% of interactions leading to a purchase.' },
      ]
    },
    health: {
      prominence: 0.7, angle: 2.6,
      news: [
        { tag: 'Breakthrough', title: 'AI System Detects Pancreatic Cancer 18 Months Earlier', date: 'Feb 20', summary: 'MIT-developed AI identifies early pancreatic cancer markers from routine blood tests.', detail: 'Researchers at MIT published results of an AI system that can detect pancreatic cancer markers up to 18 months before traditional diagnosis using routine blood test data. Tested on 25,000 patient records, the system achieved 92% sensitivity and 95% specificity. Multiple hospital systems are planning clinical trials for 2026-2027.' },
      ]
    },
    finance: {
      prominence: 0.5, angle: 4.2,
      news: [
        { tag: 'Industry', title: 'Goldman Sachs Deploys AI for Real-Time Risk Assessment', date: 'Feb 18', summary: 'AI models now assess portfolio risk in milliseconds instead of hours.', detail: 'Goldman Sachs deployed a new AI-powered risk assessment system that evaluates portfolio risk in real-time, replacing batch processes that previously took hours. The system processes market data, news sentiment, and geopolitical indicators simultaneously, providing traders with instant risk scores and recommended hedging strategies.' },
      ]
    },
    education: {
      prominence: 0.3, angle: 5.8,
      news: [
        { tag: 'Study', title: 'Stanford Study: AI Tutors Improve Learning Outcomes by 22%', date: 'Feb 16', summary: 'Controlled study shows AI-assisted learning significantly improves test scores.', detail: 'A Stanford University study involving 5,000 students found that those using AI tutoring systems showed 22% improvement in test scores compared to traditional instruction alone. The study also found that AI tutors were particularly effective for students who were behind grade level, helping close achievement gaps by up to 40%.' },
      ]
    },
    travel: {
      prominence: 0.4, angle: 1.2,
      news: [
        { tag: 'Industry', title: 'Booking.com AI Trip Planner Generates 2M Itineraries in First Month', date: 'Feb 18', summary: 'AI-powered travel planning tool sees massive adoption across European markets.', detail: 'Booking.com reported that its AI Trip Planner generated over 2 million complete itineraries in its first month of global availability. The tool combines flight, hotel, and activity recommendations with local insights and budget optimization. Users who booked through AI-generated itineraries spent 18% more per trip but reported 25% higher satisfaction scores compared to manual planners.' },
        { tag: 'Innovation', title: 'Hilton Deploys AI-Powered Dynamic Room Pricing Across 7,000 Properties', date: 'Feb 21', summary: 'Machine learning model adjusts room rates every 15 minutes based on demand signals.', detail: 'Hilton rolled out an AI-driven dynamic pricing system across all 7,000 of its global properties. The system analyzes local events, weather forecasts, competitor pricing, booking velocity, and historical patterns to adjust room rates every 15 minutes. Early results show a 12% increase in revenue per available room and improved occupancy during traditionally slow periods.' },
      ]
    },
    pharma: {
      prominence: 0.7, angle: 3.1,
      news: [
        { tag: 'Research', title: 'Moderna Uses AI to Design Next-Gen mRNA Cancer Vaccines', date: 'Feb 19', summary: 'AI platform designs personalized cancer vaccine candidates in 48 hours.', detail: 'Moderna revealed that its AI-powered mRNA design platform can now generate personalized cancer vaccine candidates within 48 hours of receiving a patient\'s tumor biopsy data. The system uses deep learning to identify the most immunogenic neoantigen targets and optimize mRNA sequences for maximum protein expression. Three AI-designed candidates have entered Phase 1 trials for melanoma and non-small cell lung cancer.' },
      ]
    },
    automotive: {
      prominence: 0.6, angle: 4.5,
      news: [
        { tag: 'Launch', title: 'Tesla FSD v13 Achieves 99.99% Highway Safety Record', date: 'Feb 17', summary: 'Latest Full Self-Driving update shows near-perfect highway performance in NHTSA review.', detail: 'Tesla released Full Self-Driving v13, which achieved a 99.99% safety record over 500 million highway miles in an independent NHTSA evaluation. The update introduces improved urban navigation, construction zone handling, and emergency vehicle detection. Tesla plans to petition for removal of the driver-attention monitoring requirement for highway driving based on these results.' },
        { tag: 'Partnership', title: 'Hyundai and NVIDIA Partner on AI-Powered Vehicle Digital Twins', date: 'Feb 20', summary: 'Digital twin technology will simulate and optimize entire vehicle lifecycle.', detail: 'Hyundai announced a strategic partnership with NVIDIA to create AI-powered digital twins for its entire vehicle lineup using the Omniverse platform. The digital twins simulate everything from aerodynamics and crash testing to manufacturing workflows and dealer service scenarios. Hyundai expects to cut physical prototyping costs by 60% and reduce time-to-market for new models by 8 months.' },
      ]
    },
    retail: {
      prominence: 0.5, angle: 0.5,
      news: [
        { tag: 'Feature', title: 'Target Launches AI Personal Shopper in Mobile App', date: 'Feb 19', summary: 'AI recommends products based on past purchases, browsing behavior, and seasonal trends.', detail: 'Target introduced an AI personal shopper within its mobile app that curates product recommendations based on purchase history, browsing patterns, local weather, and upcoming events. The system uses a multi-modal model that can process photos of outfits or rooms to suggest complementary products. Beta testing showed a 28% increase in average order value and 15% improvement in customer retention.' },
      ]
    },
    fmcg: {
      prominence: 0.4, angle: 2.5,
      news: [
        { tag: 'Industry', title: 'P&G Saves $200M Annually with AI Supply Chain Optimization', date: 'Feb 20', summary: 'AI-driven demand forecasting and logistics optimization delivers massive cost savings.', detail: 'Procter & Gamble reported that its AI-powered supply chain optimization platform has delivered $200 million in annual cost savings across its global operations. The system uses machine learning to forecast demand at the store level with 94% accuracy, optimize truck routing, and dynamically adjust production schedules. P&G plans to extend the platform to all 180 manufacturing sites by end of 2026.' },
        { tag: 'Innovation', title: 'Nestlé Uses AI Flavor Profiling to Develop New Beverage Line', date: 'Feb 22', summary: 'AI analyzes taste preferences across 50 markets to create globally appealing flavors.', detail: 'Nestlé unveiled a new beverage line developed using an AI flavor profiling system that analyzed consumer taste preferences across 50 markets. The AI processed data from 2 million taste tests, social media flavor trends, and regional ingredient availability to design 12 new flavors optimized for global appeal. The first products launched in Japan and Brazil with plans for worldwide distribution in Q3 2026.' },
      ]
    },
    manufacturing: {
      prominence: 0.6, angle: 5.5,
      news: [
        { tag: 'Deployment', title: 'Foxconn Reduces Defect Rate by 40% with AI Visual Inspection', date: 'Feb 18', summary: 'Computer vision system catches microscopic defects human inspectors miss.', detail: 'Foxconn deployed an AI-powered visual inspection system across its iPhone manufacturing lines that has reduced defect rates by 40%. The system uses high-resolution cameras and custom-trained vision models to detect microscopic scratches, solder imperfections, and component misalignments at a rate of 500 units per minute. The technology has been so successful that Foxconn plans to roll it out across all 30 of its global manufacturing facilities by Q4 2026.' },
      ]
    },
    telecom: {
      prominence: 0.3, angle: 3.8,
      news: [
        { tag: 'Partnership', title: 'Vodafone and Microsoft Launch AI Network Anomaly Detection', date: 'Feb 21', summary: 'AI system predicts network outages 6 hours before they occur.', detail: 'Vodafone partnered with Microsoft Azure to deploy an AI-powered network anomaly detection system across its European operations. The system analyzes network telemetry data from 300 million connected devices and can predict potential outages up to 6 hours in advance with 87% accuracy. Since deployment, Vodafone has reduced network downtime by 45% and cut mean time to repair by 60%, saving an estimated $150 million annually.' },
      ]
    },
  },

  // -------- WEEK 9 --------
  W09: {
    chatgpt: {
      prominence: 0.9, angle: 1.2,
      news: [
        { tag: 'Launch', title: 'OpenAI Releases GPT-4.5 with Deep Research', date: 'Feb 24', summary: 'New model excels at multi-step research tasks with source citations.', detail: 'OpenAI launched GPT-4.5, featuring a breakthrough "deep research" capability that can spend minutes analyzing complex questions, browsing multiple sources, and synthesizing findings with proper citations. The model shows a 40% improvement on graduate-level reasoning benchmarks and is available to Plus subscribers immediately.' },
        { tag: 'Product', title: 'ChatGPT Operator Agent Enters Limited Beta', date: 'Feb 27', summary: 'OpenAI\'s autonomous agent can browse the web and complete tasks independently.', detail: 'OpenAI began limited beta testing of ChatGPT Operator, an autonomous agent that can browse websites, fill forms, make purchases, and complete multi-step tasks on behalf of users. The agent uses computer-use capabilities and includes safety guardrails requiring user confirmation for financial transactions and sensitive actions.' },
      ]
    },
    claude: {
      prominence: 0.6, angle: 2.3,
      news: [
        { tag: 'Feature', title: 'Claude Projects Gets Shared Knowledge Bases', date: 'Feb 25', summary: 'Teams can build collaborative AI knowledge bases for Claude to reference.', detail: 'Anthropic launched shared knowledge bases for Claude Projects, allowing teams to upload documents, codebases, and reference materials that Claude accesses during conversations. Teams can control access permissions, track which documents are most referenced, and see how Claude uses their knowledge base to answer questions.' },
      ]
    },
    gemini: {
      prominence: 0.7, angle: 3.8,
      news: [
        { tag: 'Launch', title: 'Google Launches Gemini 2.5 Pro with 1M Token Context', date: 'Feb 26', summary: 'Gemini Pro gains massive context window and improved code generation.', detail: 'Google DeepMind released Gemini 2.5 Pro with a 1 million token context window, enabling analysis of entire codebases, lengthy documents, and hours of video in a single prompt. The model also shows significant improvements in code generation, scoring first on multiple coding benchmarks. API pricing starts at $1.25 per million input tokens.' },
        { tag: 'Product', title: 'Google Workspace Gets Gemini-Powered "Help Me Create"', date: 'Feb 28', summary: 'One-click AI creation tools arrive across Docs, Sheets, and Slides.', detail: 'Google rolled out "Help Me Create" powered by Gemini across all Workspace apps. Users can generate complete documents from briefs, create complex spreadsheet formulas with natural language, and build presentation decks from outlines. The feature includes brand kit integration for consistent styling and is included in all Business and Enterprise Workspace plans.' },
        { tag: 'Integration', title: 'Gemini Nano Comes to Chrome for On-Device AI Features', date: 'Feb 27', summary: 'Google embeds Gemini Nano directly in Chrome for instant AI assistance without cloud calls.', detail: 'Google announced the integration of Gemini Nano into Chrome 124, enabling on-device AI features that work without internet connectivity. The browser can now summarize articles, rewrite text, and detect phishing emails locally. Early benchmarks show response times under 100ms for common tasks, with no data leaving the user\'s device.' },
      ]
    },
    others: {
      prominence: 0.5, angle: 5.2,
      news: [
        { tag: 'Release', title: 'DeepSeek V3 Achieves Frontier Performance at $5.5M Training Cost', date: 'Feb 23', summary: 'Chinese lab demonstrates frontier AI can be built at fraction of Western costs.', detail: 'DeepSeek released V3, a model matching GPT-4.5 on most benchmarks while reporting a total training cost of just $5.5 million — a fraction of the estimated $100M+ spent by OpenAI and Google on comparable models. The achievement has reignited debates about AI scaling laws and the necessity of massive compute budgets.' },
      ]
    },
    lovable: {
      prominence: 0.5, angle: 1.0,
      news: [
        { tag: 'Integration', title: 'Lovable Adds Stripe, Auth0, and Twilio Integrations', date: 'Feb 24', summary: 'One-click integration with popular SaaS APIs for AI-built applications.', detail: 'Lovable expanded its integration library with native support for Stripe payments, Auth0 authentication, and Twilio communications. Developers can add payment processing, user login, or SMS notifications to their AI-generated apps with a single prompt, with all configuration and API key management handled automatically.' },
      ]
    },
    claudecode: {
      prominence: 0.8, angle: 2.5,
      news: [
        { tag: 'Launch', title: 'Claude Code Gets MCP Server Support for Tool Extensions', date: 'Feb 26', summary: 'Developers can extend Claude Code with custom tools via Model Context Protocol.', detail: 'Anthropic launched MCP (Model Context Protocol) server support in Claude Code, allowing developers to create custom tool integrations. The ecosystem already includes servers for GitHub, PostgreSQL, Slack, and Jira, letting Claude Code interact with external systems. A community marketplace for sharing MCP servers was launched simultaneously.' },
        { tag: 'Feature', title: 'Claude Code Adds Visual Diff Review and Git Workflows', date: 'Feb 28', summary: 'AI-assisted code review with visual diffs and automated PR creation.', detail: 'Claude Code introduced visual diff review capabilities, showing changes in a side-by-side format before applying them. The update also includes automated git workflows — Claude Code can create branches, stage changes, write commit messages, and open pull requests, all through natural language commands.' },
      ]
    },
    bolt: {
      prominence: 0.6, angle: 4.1,
      news: [
        { tag: 'Feature', title: 'Bolt.new Launches AI Design System Generation', date: 'Feb 25', summary: 'Generate complete design systems with components, tokens, and documentation.', detail: 'Bolt.new introduced AI-powered design system generation, creating complete component libraries with design tokens, accessibility compliance, and Storybook documentation from a text description. Designers can specify brand guidelines, and the AI generates a coherent design system that maintains visual consistency across all generated components.' },
      ]
    },
    replit: {
      prominence: 0.4, angle: 5.7,
      news: [
        { tag: 'Update', title: 'Replit Deployments Gets Auto-Scaling and Edge Computing', date: 'Feb 27', summary: 'Deployed apps now automatically scale and run on edge for faster performance.', detail: 'Replit upgraded its deployment infrastructure with automatic scaling and edge computing. Apps deployed through Replit now automatically scale up during traffic spikes and distribute to edge locations worldwide for sub-50ms response times. The upgrade is available to all paid users at no additional cost.' },
      ]
    },
    ecom: {
      prominence: 0.7, angle: 1.2,
      news: [
        { tag: 'Innovation', title: 'AI-Powered Visual Search Transforms Online Shopping', date: 'Feb 24', summary: 'Major retailers adopt "snap and shop" AI that identifies products from photos.', detail: 'A consortium of major retailers including Target, Walmart, and ASOS launched AI visual search features allowing customers to photograph any item and instantly find similar products across their catalogs. The technology uses multimodal AI to understand style, material, and color from images, with average accuracy of 94% in product matching.' },
      ]
    },
    health: {
      prominence: 0.5, angle: 2.8,
      news: [
        { tag: 'Regulatory', title: 'FDA Fast-Tracks AI Diagnostic Tool Approvals', date: 'Feb 26', summary: 'New regulatory pathway could cut AI medical device approval time by 60%.', detail: 'The FDA announced a new expedited regulatory pathway for AI-powered diagnostic tools, potentially reducing approval timelines from 18 months to 7 months. The framework requires continuous monitoring and automatic performance reporting, with mandatory bias testing across demographic groups. Over 30 AI diagnostic companies have already applied for the new pathway.' },
      ]
    },
    finance: {
      prominence: 0.6, angle: 4.4,
      news: [
        { tag: 'Trend', title: 'AI Robo-Advisors Surpass $1.5T in Assets Under Management', date: 'Feb 25', summary: 'Automated investment platforms see record inflows driven by Gen Z investors.', detail: 'AI-powered robo-advisory platforms collectively surpassed $1.5 trillion in assets under management, driven primarily by Gen Z and millennial investors who prefer automated, AI-driven investment strategies. Leading platforms including Wealthfront, Betterment, and newer entrants using LLM-based analysis reported 45% year-over-year growth in AUM.' },
      ]
    },
    education: {
      prominence: 0.6, angle: 0.0,
      news: [
        { tag: 'Launch', title: 'Duolingo Max Launches AI Roleplay for Language Learning', date: 'Feb 23', summary: 'AI-powered conversation partner simulates real-world scenarios for practice.', detail: 'Duolingo launched AI Roleplay in Duolingo Max, using advanced language models to simulate real-world conversations for language practice. Users can practice ordering food, navigating airports, or having job interviews in their target language, with the AI adapting difficulty in real-time based on proficiency. The feature supports 12 languages at launch.' },
      ]
    },
    travel: {
      prominence: 0.5, angle: 0.9,
      news: [
        { tag: 'Launch', title: 'Expedia Launches AI Travel Planner with Real-Time Itinerary Building', date: 'Feb 24', summary: 'AI agent builds personalized multi-city itineraries with booking integration.', detail: 'Expedia launched an AI-powered travel planner that creates detailed multi-city itineraries based on natural language preferences. The system considers budget, travel style, seasonal events, and real-time pricing to suggest flights, hotels, and activities. Users can modify plans conversationally, and the AI automatically adjusts connected bookings when changes are made.' },
        { tag: 'Innovation', title: 'Emirates Deploys AI Concierge Across All Airport Lounges', date: 'Feb 27', summary: 'Multilingual AI concierge handles passenger requests from rebooking to dining.', detail: 'Emirates rolled out an AI-powered concierge system across all 40 of its global airport lounges. The system supports 35 languages and can handle flight rebooking, spa reservations, dining orders, and ground transportation arrangements. Passenger satisfaction scores in pilot lounges increased by 28% since deployment.' },
      ]
    },
    pharma: {
      prominence: 0.6, angle: 1.8,
      news: [
        { tag: 'Breakthrough', title: 'Recursion Pharmaceuticals Uses AI to Identify New Antibiotic Candidates', date: 'Feb 25', summary: 'AI platform screens 10 million compounds and identifies 8 promising antibiotic candidates.', detail: 'Recursion Pharmaceuticals announced that its AI drug discovery platform screened over 10 million molecular compounds and identified 8 novel antibiotic candidates effective against drug-resistant bacteria. Two candidates showed efficacy against MRSA in preclinical trials. The AI-driven approach compressed what would typically be 3 years of screening into 4 months.' },
      ]
    },
    automotive: {
      prominence: 0.7, angle: 2.6,
      news: [
        { tag: 'Milestone', title: 'Waymo Expands Robotaxi Service to 5 New US Cities', date: 'Feb 26', summary: 'Autonomous ride-hailing now available in Austin, Atlanta, Miami, and more.', detail: 'Waymo announced the expansion of its fully autonomous robotaxi service to Austin, Atlanta, Miami, Nashville, and Orlando, bringing its total to 8 US cities. The expansion follows regulatory approvals and over 10 million autonomous miles driven without a driver-at-fault serious injury. The company reported completing over 200,000 paid rides per week across all markets.' },
        { tag: 'Innovation', title: 'BMW Integrates Generative AI into Vehicle Voice Assistant', date: 'Feb 23', summary: 'Natural language AI replaces rigid voice commands in new BMW models.', detail: 'BMW announced that all 2026 model year vehicles will feature a generative AI-powered voice assistant, replacing the traditional command-based system. Drivers can make complex requests like "find a pet-friendly hotel near my destination with parking" and the system understands context, follow-up questions, and ambiguous instructions. The system processes requests locally for privacy.' },
      ]
    },
    retail: {
      prominence: 0.4, angle: 3.5,
      news: [
        { tag: 'Trend', title: 'Walmart Rolls Out AI-Powered Shelf Monitoring Across 4,700 Stores', date: 'Feb 28', summary: 'Computer vision system detects out-of-stock items and pricing errors in real time.', detail: 'Walmart completed the rollout of AI-powered shelf monitoring cameras across all 4,700 US stores. The computer vision system scans shelves continuously, detecting out-of-stock items, misplaced products, and pricing discrepancies in real time. The system has reduced out-of-stock incidents by 35% and freed up 8 hours of daily manual shelf-checking labor per store.' },
      ]
    },
    fmcg: {
      prominence: 0.3, angle: 4.3,
      news: [
        { tag: 'Strategy', title: 'Unilever Deploys AI Demand Sensing to Cut Forecast Errors by 40%', date: 'Feb 24', summary: 'Machine learning models predict consumer demand using social media, weather, and POS data.', detail: 'Unilever reported that its AI-powered demand sensing platform has reduced forecast errors by 40% across its global supply chain. The system ingests social media trends, weather patterns, point-of-sale data, and macroeconomic indicators to predict demand at the SKU level. The improved accuracy has cut excess inventory costs by $180 million annually and reduced food waste by 25% in perishable categories.' },
      ]
    },
    manufacturing: {
      prominence: 0.5, angle: 5.0,
      news: [
        { tag: 'Innovation', title: 'Siemens Launches AI-Powered Digital Twin for Predictive Factory Maintenance', date: 'Feb 25', summary: 'Digital twins simulate factory equipment behavior to predict failures before they happen.', detail: 'Siemens launched an AI-enhanced digital twin platform that creates virtual replicas of factory equipment and uses machine learning to predict failures 2-3 weeks in advance. The system monitors vibration, temperature, and power consumption patterns across connected machines. Early adopters report a 45% reduction in unplanned downtime and 30% lower maintenance costs.' },
      ]
    },
    telecom: {
      prominence: 0.4, angle: 5.8,
      news: [
        { tag: 'Deployment', title: 'AT&T Deploys AI Network Optimization Across 5G Infrastructure', date: 'Feb 26', summary: 'Self-optimizing AI reduces 5G network congestion by 30% during peak hours.', detail: 'AT&T deployed an AI-powered network optimization system across its entire 5G infrastructure. The system dynamically allocates bandwidth, adjusts cell tower configurations, and reroutes traffic in real time based on usage patterns. During peak hours, the AI reduces congestion by 30% and improves average download speeds by 22%. The deployment is expected to save $500 million annually in infrastructure costs.' },
      ]
    },
  },

  // -------- WEEK 10 --------
  W10: {
    chatgpt: {
      prominence: 0.5, angle: 1.6,
      news: [
        { tag: 'Update', title: 'ChatGPT Canvas Adds Collaborative Coding Mode', date: 'Mar 3', summary: 'The visual coding workspace now supports real-time pair programming with AI.', detail: 'OpenAI updated ChatGPT Canvas with a collaborative coding mode where users can write code alongside the AI in real-time. The workspace includes inline suggestions, automatic error detection, and a built-in terminal for running code. Canvas now supports 15 programming languages and can generate test suites automatically.' },
      ]
    },
    claude: {
      prominence: 0.8, angle: 2.5,
      news: [
        { tag: 'Launch', title: 'Claude Opus 4.6 Released with 1M Token Context', date: 'Mar 4', summary: 'Anthropic\'s most capable model yet excels in complex reasoning and agentic tasks.', detail: 'Anthropic released Claude Opus 4.6, their most powerful model featuring a 1 million token context window, state-of-the-art performance on graduate-level reasoning tasks, and significantly improved agentic capabilities. The model achieves #1 on LMSYS Chatbot Arena and shows particular strength in multi-step planning, code generation, and mathematical reasoning. Available via API and Claude.ai.' },
        { tag: 'Product', title: 'Anthropic Launches Claude for Enterprise with SSO and Audit Logs', date: 'Mar 6', summary: 'Enterprise-grade Claude deployment with advanced security and compliance features.', detail: 'Anthropic launched Claude for Enterprise, featuring SAML SSO, detailed audit logging, data retention controls, and SOC 2 Type II compliance. The offering includes dedicated compute capacity, custom model fine-tuning, and a 99.9% SLA. Early customers include Notion, GitLab, and Bridgewater Associates.' },
      ]
    },
    gemini: {
      prominence: 0.6, angle: 3.9,
      news: [
        { tag: 'Research', title: 'Google DeepMind Achieves Breakthrough in AI Mathematics', date: 'Mar 5', summary: 'Gemini-based system solves previously unsolved mathematics problems.', detail: 'Google DeepMind published research showing a Gemini-based system that independently solved several previously unsolved problems in combinatorial mathematics. The system uses a novel "mathematical reasoning chain" approach that breaks complex proofs into verifiable steps, marking a significant advance in AI\'s ability to do original mathematical research.' },
      ]
    },
    others: {
      prominence: 0.7, angle: 5.3,
      news: [
        { tag: 'Launch', title: 'xAI Releases Grok 3 with Real-Time Web Integration', date: 'Mar 3', summary: 'Elon Musk\'s xAI launches Grok 3 with live data access and competitive benchmarks.', detail: 'xAI released Grok 3, featuring real-time web access, X/Twitter integration, and performance that rivals GPT-4.5 on key benchmarks. The model is distinguished by its willingness to engage with controversial topics and its integration with the X platform for real-time data analysis. Grok 3 is available to X Premium+ subscribers and via API.' },
        { tag: 'Open Source', title: 'Llama 4 Maverick Released as Most Capable Open Model', date: 'Mar 7', summary: 'Meta\'s largest open-source model matches GPT-4.5 on multiple benchmarks.', detail: 'Meta released Llama 4 Maverick, a 400B parameter MoE model that matches GPT-4.5 on several benchmarks while remaining fully open-source under a permissive license. The model features 128 experts with 8 active per token, 256K context, and runs on a cluster of 8 H100 GPUs. It represents the most capable open-source model ever released.' },
      ]
    },
    lovable: {
      prominence: 0.7, angle: 1.2,
      news: [
        { tag: 'Launch', title: 'Lovable Launches Full-Stack AI App Generation Platform', date: 'Mar 4', summary: 'Generate complete web applications from text descriptions with backend and database.', detail: 'Lovable launched its v2 platform capable of generating complete full-stack web applications from text descriptions. The platform creates React frontends, Node.js backends, and PostgreSQL databases, with authentication, API endpoints, and deployment configured automatically. Users report building production-ready MVPs in under 30 minutes.' },
        { tag: 'Funding', title: 'Lovable Raises $15M Seed for AI App Builder', date: 'Mar 6', summary: 'AI-powered app development platform secures seed funding from Accel.', detail: 'Lovable secured a $15 million seed round led by Accel Partners, with participation from Y Combinator and notable angel investors. The funding will accelerate development of enterprise features including team collaboration, custom component libraries, and white-label deployment options.' },
      ]
    },
    claudecode: {
      prominence: 0.6, angle: 2.7,
      news: [
        { tag: 'Feature', title: 'Claude Code Launches IDE Extension for VS Code', date: 'Mar 5', summary: 'Deep VS Code integration brings Claude Code\'s capabilities into the editor.', detail: 'Anthropic released the Claude Code VS Code extension, providing deep integration with the world\'s most popular code editor. Features include inline code suggestions, terminal command generation, file navigation, and project-wide refactoring — all powered by Claude\'s understanding of the full project context.' },
        { tag: 'Update', title: 'Claude Code Adds Multi-File Context and Project Summarization', date: 'Mar 7', summary: 'Enhanced project understanding with automatic codebase indexing and architecture summaries.', detail: 'Anthropic updated Claude Code with automatic codebase indexing that builds a semantic understanding of entire projects. The tool now generates architecture summaries, dependency graphs, and identifies code patterns across repositories. Developers report 60% faster onboarding to unfamiliar codebases when using the new summarization features.' },
      ]
    },
    bolt: {
      prominence: 0.5, angle: 4.3,
      news: [
        { tag: 'Feature', title: 'Bolt.new Adds Backend Generation with Node.js and Python', date: 'Mar 4', summary: 'AI can now generate full backend APIs alongside frontend applications.', detail: 'Bolt.new expanded beyond frontend-only generation to include full backend API creation using Node.js and Python. Developers can now describe an entire application including API endpoints, database models, and business logic, and Bolt generates a complete, deployable full-stack application with proper error handling and input validation.' },
      ]
    },
    replit: {
      prominence: 0.8, angle: 5.9,
      news: [
        { tag: 'Launch', title: 'Replit Agent Now Deploys Production Apps Autonomously', date: 'Mar 3', summary: 'AI agent handles the full lifecycle from code generation to cloud deployment.', detail: 'Replit upgraded its Agent to handle the complete application lifecycle — from understanding requirements, generating code, and writing tests, to configuring deployment and setting up monitoring. The Agent can now deploy to custom domains with SSL, set up CI/CD pipelines, and even configure alerting for production issues.' },
        { tag: 'Pricing', title: 'Replit Core Plan Drops to $7/Month', date: 'Mar 7', summary: 'Aggressive pricing makes AI-powered development accessible to more developers.', detail: 'Replit reduced its Core plan pricing to $7/month (from $20), making its AI-powered development environment accessible to a broader audience. The plan includes unlimited AI code completions, 50 Agent sessions per month, and basic deployment. The move is seen as a competitive response to free-tier offerings from GitHub Copilot and Cursor.' },
      ]
    },
    ecom: {
      prominence: 0.5, angle: 1.4,
      news: [
        { tag: 'Innovation', title: 'AI-Generated Product Photography Replaces Studios for Small Brands', date: 'Mar 5', summary: 'Virtual photography tools cut product imaging costs by 90%.', detail: 'AI product photography platforms including Pebblely and Flair.ai reported that over 100,000 small e-commerce brands have switched from traditional photography studios to AI-generated product images. The technology creates photorealistic product shots in various settings for under $1 per image, compared to $50-200 for traditional photography.' },
      ]
    },
    health: {
      prominence: 0.9, angle: 3.0,
      news: [
        { tag: 'Milestone', title: 'FDA Approves First Fully AI-Designed Drug for Clinical Trial', date: 'Mar 4', summary: 'A drug molecule entirely designed by AI enters Phase 1 human trials.', detail: 'The FDA approved the first fully AI-designed drug molecule for Phase 1 clinical trials. Developed by Insilico Medicine using their AI platform, the molecule targets idiopathic pulmonary fibrosis and was designed, optimized, and validated entirely by AI systems in just 18 months — compared to the typical 4-5 years for traditional drug design. This marks a watershed moment for AI in pharmaceutical development.' },
        { tag: 'Industry', title: 'WHO Endorses AI Diagnostics for Rural Healthcare in Developing Nations', date: 'Mar 7', summary: 'AI diagnostic tools recommended for areas with limited access to specialists.', detail: 'The World Health Organization officially endorsed the use of AI-powered diagnostic tools for rural healthcare settings in developing nations. The recommendation covers AI systems for detecting tuberculosis, malaria, diabetic retinopathy, and cervical cancer using smartphone cameras and portable devices, potentially bringing specialist-level diagnosis to 3 billion people with limited healthcare access.' },
      ]
    },
    finance: {
      prominence: 0.4, angle: 4.6,
      news: [
        { tag: 'Report', title: 'McKinsey: AI Will Create $4.4T in Annual Value for Banking', date: 'Mar 6', summary: 'Consulting firm projects massive AI value creation in financial services.', detail: 'McKinsey\'s latest report estimates AI will generate $4.4 trillion in annual value for the global banking sector by 2030, with the largest gains in risk management (35%), customer service automation (25%), and fraud detection (20%). The report notes that early AI adopters in banking are already seeing 15-25% cost reductions in targeted operations.' },
      ]
    },
    education: {
      prominence: 0.5, angle: 0.2,
      news: [
        { tag: 'Policy', title: 'California Mandates AI Literacy in K-12 Curriculum', date: 'Mar 3', summary: 'First US state to require AI education from elementary through high school.', detail: 'California became the first US state to mandate AI literacy education across K-12 curriculum, requiring schools to teach age-appropriate AI concepts starting in the 2026-2027 school year. The curriculum covers how AI works, ethical considerations, prompt engineering, and critical evaluation of AI-generated content. $200 million in state funding was allocated for teacher training and resources.' },
      ]
    },
    travel: {
      prominence: 0.6, angle: 0.8,
      news: [
        { tag: 'Launch', title: 'Booking.com Debuts AI Trip Planner with Dynamic Packaging', date: 'Mar 4', summary: 'AI assistant builds complete vacation packages from a single conversational prompt.', detail: 'Booking.com launched an AI Trip Planner that creates complete vacation packages — including flights, hotels, car rentals, and activities — from a single natural language description. The system factors in budget constraints, travel preferences, and real-time pricing, automatically rebundling options when one component changes. Beta users reported saving an average of 3 hours per trip compared to manual booking.' },
        { tag: 'Innovation', title: 'Hilton Uses AI to Personalize Guest Experiences at 7,000 Properties', date: 'Mar 7', summary: 'AI system adjusts room settings, dining recommendations, and amenities based on guest profiles.', detail: 'Hilton deployed an AI personalization engine across its 7,000 global properties that customizes guest experiences using booking history, loyalty data, and stated preferences. The system pre-sets room temperature, pillow type, and minibar selections, and sends personalized dining and activity recommendations via the Hilton Honors app. Guest satisfaction scores improved 18% in pilot properties.' },
      ]
    },
    pharma: {
      prominence: 0.7, angle: 1.7,
      news: [
        { tag: 'Milestone', title: 'Moderna Uses AI to Design Next-Gen mRNA Cancer Vaccines', date: 'Mar 5', summary: 'AI-designed mRNA sequences show 3x higher immune response in preclinical trials.', detail: 'Moderna revealed that its AI-powered mRNA design platform generated vaccine candidates for personalized cancer treatment that showed 3x higher immune response rates in preclinical trials compared to traditionally designed sequences. The AI analyzes tumor genomics to identify optimal neoantigen targets and designs mRNA sequences optimized for stability and immune activation. Three candidates are entering Phase 2 trials.' },
        { tag: 'Partnership', title: 'Roche Partners with NVIDIA to Accelerate Clinical Trial Matching', date: 'Mar 3', summary: 'AI reduces clinical trial patient matching time from weeks to hours.', detail: 'Roche announced a partnership with NVIDIA to deploy AI-powered clinical trial matching across its global research network. The system uses large language models to parse patient records and match eligible participants to open trials, reducing matching time from an average of 3 weeks to under 4 hours. The platform has already identified 12,000 additional eligible patients across 45 active trials.' },
      ]
    },
    automotive: {
      prominence: 0.5, angle: 2.8,
      news: [
        { tag: 'Launch', title: 'Tesla FSD V13 Achieves Zero-Intervention Highway Driving', date: 'Mar 6', summary: 'Full Self-Driving update completes highway trips without driver intervention in supervised mode.', detail: 'Tesla released FSD V13, which achieves an average of zero driver interventions during highway driving in supervised mode. The update uses an end-to-end neural network that processes raw camera feeds directly into driving commands, eliminating thousands of lines of hard-coded rules. Tesla reported over 5 billion cumulative FSD miles driven, with the V13 safety record significantly exceeding human averages.' },
      ]
    },
    retail: {
      prominence: 0.5, angle: 3.7,
      news: [
        { tag: 'Innovation', title: 'Amazon Launches AI-Powered Virtual Try-On for Apparel', date: 'Mar 4', summary: 'Generative AI creates realistic images of customers wearing clothes before purchase.', detail: 'Amazon launched an AI-powered virtual try-on feature for its apparel category that generates photorealistic images of customers wearing clothing items. Users upload a photo and the AI renders how garments would look on their specific body type, accounting for fabric drape, fit, and lighting. Early data shows a 25% reduction in apparel return rates for items purchased using the feature.' },
        { tag: 'Trend', title: 'AI Checkout-Free Stores Expand Beyond Grocery to Fashion Retail', date: 'Mar 7', summary: 'Computer vision checkout technology spreads to clothing and electronics stores.', detail: 'The checkout-free store technology pioneered by Amazon Go expanded beyond grocery into fashion and electronics retail. Brands including Zara and Best Buy began piloting stores where AI-powered cameras and sensors track items customers pick up and automatically charge them upon exit. The technology handles complex scenarios like items being tried on and returned to shelves with 99.2% accuracy.' },
      ]
    },
    fmcg: {
      prominence: 0.4, angle: 4.5,
      news: [
        { tag: 'Strategy', title: "P&G Uses Generative AI to Accelerate New Product Development by 50%", date: 'Mar 5', summary: 'AI generates and tests thousands of product formulations virtually before physical prototyping.', detail: "Procter & Gamble revealed that generative AI has cut its new product development cycle by 50%. The company uses AI to generate and simulate thousands of product formulations, packaging designs, and marketing claims before creating physical prototypes. The approach has been applied across beauty, home care, and health categories, with 15 AI-accelerated products launched in the past year." },
      ]
    },
    manufacturing: {
      prominence: 0.6, angle: 5.3,
      news: [
        { tag: 'Innovation', title: 'Foxconn Deploys AI Visual Inspection Replacing 60% of QC Workforce', date: 'Mar 3', summary: 'Computer vision system detects microscopic defects invisible to human inspectors.', detail: 'Foxconn deployed an AI-powered visual inspection system across its iPhone manufacturing lines that detects microscopic defects as small as 0.01mm — far beyond human visual capability. The system processes 500 components per minute with 99.8% accuracy, replacing 60% of quality control staff who are being retrained for higher-skilled roles. Defect escape rates dropped by 90% since deployment.' },
        { tag: 'Report', title: 'World Economic Forum: AI in Manufacturing to Add $3.7T by 2030', date: 'Mar 6', summary: 'Global study projects massive economic impact from smart factory adoption.', detail: 'The World Economic Forum published a comprehensive study projecting that AI adoption in manufacturing will generate $3.7 trillion in economic value by 2030. Key drivers include predictive maintenance (saving $630B), quality optimization ($520B), and supply chain resilience ($410B). The report noted that only 12% of manufacturers have scaled AI beyond pilot programs, suggesting enormous untapped potential.' },
      ]
    },
    telecom: {
      prominence: 0.3, angle: 6.1,
      news: [
        { tag: 'Launch', title: 'T-Mobile Launches AI Customer Service Agent Handling 70% of Calls', date: 'Mar 4', summary: 'AI agent resolves most customer issues without human handoff.', detail: "T-Mobile launched an AI-powered customer service agent that now handles 70% of incoming customer calls without requiring human intervention. The system manages account inquiries, billing disputes, plan changes, and technical troubleshooting using natural conversational AI. Customer satisfaction scores for AI-handled calls match human agent scores at 4.2 out of 5, while average resolution time dropped from 12 minutes to 3 minutes." },
      ]
    },
  },

  // -------- WEEK 11 --------
  W11: {
    chatgpt: {
      prominence: 0.7, angle: 2.0,
      news: [
        { tag: 'Feature', title: 'ChatGPT Pro Gets Unlimited o3-mini-high Access', date: 'Mar 10', summary: 'Pro subscribers gain unlimited access to OpenAI\'s most capable reasoning model.', detail: 'OpenAI expanded ChatGPT Pro ($200/month) to include unlimited access to o3-mini-high, their most capable reasoning model. Previously capped at 50 messages per day, Pro users can now use the model without limits for complex analysis, coding, and research tasks. The change came after user feedback that the limits were too restrictive for professional workflows.' },
        { tag: 'API', title: 'OpenAI Launches Responses API for Agentic Workflows', date: 'Mar 13', summary: 'New API simplifies building multi-step AI agents with built-in tool support.', detail: 'OpenAI released the Responses API, a new primitive designed specifically for building AI agents. The API combines the simplicity of the Chat Completions API with built-in support for tool calling, web search, file reading, and computer use. It also includes a conversation state management system that simplifies building multi-turn agentic workflows.' },
      ]
    },
    claude: {
      prominence: 0.8, angle: 2.4,
      news: [
        { tag: 'Achievement', title: 'Claude Opus 4.6 Tops LMSYS Arena with Highest-Ever Score', date: 'Mar 11', summary: 'Anthropic\'s flagship model achieves record human preference ratings.', detail: 'Claude Opus 4.6 achieved the highest score ever recorded on the LMSYS Chatbot Arena, surpassing GPT-4.5 and Gemini 2.5 Pro in human preference ratings across all categories. The model showed particular strength in nuanced analysis, creative writing, and multi-step reasoning, with evaluators noting its more natural and thoughtful communication style.' },
        { tag: 'Product', title: 'Anthropic Launches Claude Agent SDK for Building Custom Agents', date: 'Mar 14', summary: 'Open-source SDK enables developers to build production-grade AI agents with Claude.', detail: 'Anthropic released the Claude Agent SDK, an open-source framework for building production-grade AI agents. The SDK provides abstractions for tool use, multi-step planning, memory management, and safety guardrails. It supports both Python and TypeScript, integrates with popular frameworks like LangChain and CrewAI, and includes built-in monitoring and logging for production deployments.' },
      ]
    },
    gemini: {
      prominence: 0.6, angle: 4.0,
      news: [
        { tag: 'Update', title: 'Gemini 2.5 Flash Preview Shows Blazing Speed at Low Cost', date: 'Mar 12', summary: 'Google\'s fastest model offers sub-100ms latency at $0.15/M input tokens.', detail: 'Google released a preview of Gemini 2.5 Flash, achieving sub-100ms latency for most queries at just $0.15 per million input tokens. The model is designed for real-time applications including chat, autocomplete, and live translation. Despite its speed, it maintains competitive quality, matching GPT-4o on most general benchmarks.' },
      ]
    },
    others: {
      prominence: 0.5, angle: 5.5,
      news: [
        { tag: 'Launch', title: 'Mistral Large 3 Challenges Frontier Models at 1/10th Cost', date: 'Mar 10', summary: 'European AI startup releases model matching top competitors at fraction of price.', detail: 'Mistral AI released Large 3, a model matching Claude 3.5 Sonnet and GPT-4o on key benchmarks while priced at just $0.20 per million input tokens — roughly 1/10th the cost of comparable models. The model supports 32 languages, 128K context, and includes native function calling, making it an attractive option for cost-sensitive enterprise deployments.' },
      ]
    },
    lovable: {
      prominence: 0.6, angle: 1.4,
      news: [
        { tag: 'Feature', title: 'Lovable Adds AI-Powered Testing and QA', date: 'Mar 12', summary: 'AI automatically generates and runs test suites for generated applications.', detail: 'Lovable introduced automated testing capabilities where the AI generates comprehensive test suites — including unit tests, integration tests, and end-to-end tests — for every application it creates. The system identifies edge cases, simulates user interactions, and provides a test coverage report, ensuring AI-generated apps meet production quality standards.' },
      ]
    },
    claudecode: {
      prominence: 0.7, angle: 2.9,
      news: [
        { tag: 'Update', title: 'Claude Code Adds Background Agents and Parallel Task Execution', date: 'Mar 11', summary: 'Run multiple AI coding tasks simultaneously in separate contexts.', detail: 'Claude Code introduced background agents that can execute tasks in parallel, each with their own isolated context. Developers can now kick off a test suite fix, a documentation update, and a refactoring task simultaneously, with each agent working independently and reporting back when complete. The feature dramatically improves productivity for complex development workflows.' },
        { tag: 'Integration', title: 'Claude Code Integrates with GitHub Actions for CI/CD', date: 'Mar 14', summary: 'Automated code review and fix suggestions directly in CI/CD pipelines.', detail: 'Claude Code now integrates with GitHub Actions, enabling automated code review on every pull request. When CI checks fail, Claude Code can analyze the failure, suggest fixes, and even push corrective commits (with approval). The integration also supports automated dependency updates, security vulnerability patching, and documentation generation.' },
      ]
    },
    bolt: {
      prominence: 0.5, angle: 4.5,
      news: [
        { tag: 'Milestone', title: 'Bolt.new Reaches 800K Developers', date: 'Mar 13', summary: 'Rapid growth continues as AI development platform adds 300K users in 6 weeks.', detail: 'Bolt.new reached 800,000 monthly active developers, adding 300,000 new users in just 6 weeks. The growth was driven by new features including backend generation, real-time collaboration, and improved AI model performance. The platform now hosts over 2 million projects and processes 500,000 AI-assisted development sessions daily.' },
        { tag: 'Feature', title: 'Bolt.new Introduces Real-Time Multiplayer Collaboration', date: 'Mar 14', summary: 'Multiple developers can now co-build applications simultaneously with AI assistance.', detail: 'Bolt.new launched real-time multiplayer collaboration, allowing up to 5 developers to work on the same project simultaneously with shared AI context. Each collaborator can issue AI prompts that are aware of changes made by others, preventing conflicts and enabling pair programming with AI. The feature includes live cursors, voice chat, and a shared AI conversation history.' },
      ]
    },
    replit: {
      prominence: 0.4, angle: 0.1,
      news: [
        { tag: 'Feature', title: 'Replit Adds AI-Powered Database Design and Migration', date: 'Mar 11', summary: 'Describe your data model in English and get a fully configured database.', detail: 'Replit launched AI-powered database design, where developers describe their data model in natural language and the AI generates optimized PostgreSQL schemas, migrations, indexes, and ORM configurations. The system also handles schema evolution, automatically generating migration scripts when the data model changes.' },
      ]
    },
    ecom: {
      prominence: 0.6, angle: 1.6,
      news: [
        { tag: 'Trend', title: 'AI Chatbots Handle 40% of E-Commerce Customer Service', date: 'Mar 10', summary: 'Major retailers report AI chatbots resolving nearly half of customer inquiries.', detail: 'A new report from Gartner reveals that AI chatbots now handle 40% of all e-commerce customer service interactions, up from 25% a year ago. Companies using advanced LLM-powered chatbots report customer satisfaction scores within 5% of human agents, with average resolution times 3x faster. Leading adopters include Zappos, Sephora, and H&M.' },
      ]
    },
    health: {
      prominence: 0.5, angle: 3.2,
      news: [
        { tag: 'Partnership', title: 'Epic Systems Integrates LLM-Powered Clinical Notes', date: 'Mar 12', summary: 'AI-generated clinical notes coming to 250M patient records system.', detail: 'Epic Systems, the largest electronic health records provider in the US, announced integration of LLM-powered clinical note generation into its platform. The AI listens to doctor-patient conversations and generates structured clinical notes in real-time, reducing documentation burden by an estimated 3 hours per physician per day. The feature will be available to all Epic customers serving 250 million patient records.' },
      ]
    },
    finance: {
      prominence: 0.7, angle: 4.8,
      news: [
        { tag: 'Launch', title: 'JPMorgan Launches LLM-Powered Investment Research Platform', date: 'Mar 10', summary: 'AI system analyzes earnings calls, SEC filings, and market data for insights.', detail: 'JPMorgan Chase launched an internal LLM-powered investment research platform that analyzes earnings calls, SEC filings, market data, and news in real-time. The system generates investment insights, risk assessments, and trade recommendations for the bank\'s $3.9 trillion in assets under management. Early results show the AI identifying profitable opportunities 23% faster than human analysts alone.' },
        { tag: 'Regulation', title: 'SEC Issues Framework for AI-Managed Investment Funds', date: 'Mar 14', summary: 'New rules establish guidelines for AI-driven asset management.', detail: 'The SEC issued a comprehensive regulatory framework for AI-managed investment funds, establishing requirements for transparency, risk disclosure, and human oversight. The rules require that any fund using AI for more than 50% of investment decisions must disclose its AI methodology, maintain human override capabilities, and undergo annual algorithmic audits.' },
      ]
    },
    education: {
      prominence: 0.4, angle: 0.4,
      news: [
        { tag: 'Partnership', title: 'Microsoft Copilot for Education Reaches 500K Classrooms', date: 'Mar 11', summary: 'AI teaching assistant deployed across schools in 30 countries.', detail: 'Microsoft announced that Copilot for Education has been deployed in 500,000 classrooms across 30 countries, assisting 15 million students and 800,000 teachers. The AI helps teachers create personalized lesson plans, generate assessments, and provide individualized feedback on student work. Microsoft committed to keeping the education tier free for public schools through 2028.' },
      ]
    },
    travel: {
      prominence: 0.4, angle: 0.9,
      news: [
        { tag: 'Launch', title: 'Booking.com Launches AI Travel Concierge for End-to-End Trip Planning', date: 'Mar 12', summary: 'AI assistant plans entire trips including flights, hotels, and activities from a single conversation.', detail: 'Booking.com launched an AI-powered travel concierge that plans complete trips from a single natural language conversation. The system searches across flights, hotels, restaurants, and activities, optimizing for budget, preferences, and travel style. Early users report saving an average of 4 hours per trip compared to manual planning, with the AI handling real-time rebooking when disruptions occur.' },
      ]
    },
    pharma: {
      prominence: 0.5, angle: 1.9,
      news: [
        { tag: 'Breakthrough', title: 'Insilico Medicine AI-Designed Drug Enters Phase 2 Trials in Record Time', date: 'Mar 13', summary: 'AI-discovered molecule for idiopathic pulmonary fibrosis reaches Phase 2 in under 30 months.', detail: 'Insilico Medicine announced that its AI-designed drug candidate for idiopathic pulmonary fibrosis has entered Phase 2 clinical trials, completing the journey from target discovery to Phase 2 in under 30 months — roughly half the industry average. The molecule was identified and optimized entirely by the company\'s generative AI platform, which screened billions of potential compounds virtually before synthesizing the top candidates.' },
      ]
    },
    automotive: {
      prominence: 0.4, angle: 3.5,
      news: [
        { tag: 'Milestone', title: 'Waymo Surpasses 500K Weekly Autonomous Rides Across 8 US Cities', date: 'Mar 10', summary: 'Alphabet\'s self-driving unit doubles ride volume in 3 months as expansion accelerates.', detail: 'Waymo reported surpassing 500,000 weekly autonomous rides, doubling its volume in just three months following expansion into Atlanta, Austin, and Miami. The company\'s sixth-generation hardware platform, which reduced per-vehicle sensor costs by 50%, has enabled faster fleet scaling. Waymo also announced a partnership with Uber to integrate autonomous rides into the Uber app in all Waymo markets.' },
      ]
    },
    retail: {
      prominence: 0.3, angle: 5.2,
      news: [
        { tag: 'Trend', title: 'AI-Powered Visual Search Drives 35% Conversion Lift for Fashion Retailers', date: 'Mar 11', summary: 'Shoppers uploading photos to find similar products dramatically boosts sales.', detail: 'A retail industry report found that fashion retailers implementing AI-powered visual search — where customers upload a photo and the AI finds similar items in inventory — saw an average 35% increase in conversion rates. Leading adopters including ASOS, Zara, and Nordstrom reported that visual search users browse 2.5x more products and have 40% higher average order values compared to text search users.' },
      ]
    },
    fmcg: {
      prominence: 0.3, angle: 5.8,
      news: [
        { tag: 'Innovation', title: 'Unilever Deploys AI Demand Sensing Across Global Supply Chain', date: 'Mar 14', summary: 'AI predicts consumer demand 8 weeks ahead with 92% accuracy, reducing waste by 20%.', detail: 'Unilever announced full deployment of its AI-powered demand sensing platform across its global supply chain, covering 400+ brands in 190 countries. The system analyzes point-of-sale data, weather patterns, social media trends, and economic indicators to predict demand up to 8 weeks ahead with 92% accuracy. The company reported a 20% reduction in product waste and a 15% improvement in on-shelf availability since the rollout began.' },
      ]
    },
    manufacturing: {
      prominence: 0.4, angle: 4.3,
      news: [
        { tag: 'Partnership', title: 'Siemens and NVIDIA Launch Industrial AI Digital Twin Platform', date: 'Mar 12', summary: 'Real-time factory digital twins powered by AI optimize production across industries.', detail: 'Siemens and NVIDIA jointly launched an industrial AI digital twin platform that creates real-time virtual replicas of entire factories. The platform uses AI to simulate production scenarios, predict equipment failures, and optimize throughput. Pilot customers including BMW and Foxconn reported 18% improvements in production efficiency and 30% reduction in unplanned downtime after deploying the digital twins.' },
      ]
    },
    telecom: {
      prominence: 0.3, angle: 6.0,
      news: [
        { tag: 'Launch', title: 'Ericsson Launches AI-Native 5G Network Management Platform', date: 'Mar 10', summary: 'AI autonomously optimizes 5G network performance, reducing outages by 45%.', detail: 'Ericsson launched its AI-native network management platform for 5G infrastructure, capable of autonomously detecting, diagnosing, and resolving network issues in real time. The platform uses reinforcement learning to continuously optimize spectrum allocation, traffic routing, and energy consumption. Early deployments with T-Mobile and Vodafone showed a 45% reduction in network outages and 25% lower energy costs.' },
      ]
    },
  },

  // -------- WEEK 12 (Current Week) --------
  W12: {
    chatgpt: {
      prominence: 0.8, angle: 2.5,
      news: [
        { tag: 'Announcement', title: 'OpenAI Announces GPT-5 Release Date for Q2 2026', date: 'Mar 17', summary: 'Next-generation model promises "PhD-level" reasoning across all domains.', detail: 'OpenAI CEO Sam Altman announced that GPT-5 will be released in Q2 2026, describing it as a "significant leap" that achieves PhD-level reasoning across science, mathematics, and humanities. The model will feature native multimodal understanding, persistent memory, and advanced agentic capabilities. Altman noted that GPT-5 has been in development for over 18 months and represents the largest training run in OpenAI\'s history.' },
        { tag: 'Product', title: 'ChatGPT Adds Deep Research for All Plus Users', date: 'Mar 19', summary: 'Multi-step research capability previously limited to Pro now available at $20/month.', detail: 'OpenAI expanded access to Deep Research — a capability that allows ChatGPT to spend minutes browsing dozens of sources to compile comprehensive research reports — to all Plus subscribers ($20/month). Previously exclusive to the $200/month Pro tier, the feature is limited to 10 deep research queries per month for Plus users. The move significantly increases accessibility to advanced AI research capabilities.' },
      ]
    },
    claude: {
      prominence: 0.9, angle: 2.7,
      news: [
        { tag: 'Launch', title: 'Anthropic Launches Model Context Protocol as Open Standard', date: 'Mar 17', summary: 'Universal protocol for connecting AI to external data sources gains industry adoption.', detail: 'Anthropic formally launched the Model Context Protocol (MCP) as an open industry standard for connecting AI models to external data sources and tools. Major adopters including Microsoft, Salesforce, and Atlassian announced MCP integrations, creating a universal "USB port" for AI systems. The protocol enables AI models to securely access databases, APIs, file systems, and enterprise tools through standardized connectors.' },
        { tag: 'Research', title: 'Anthropic Publishes Breakthrough in AI Interpretability', date: 'Mar 20', summary: 'New research reveals how Claude "thinks," enabling unprecedented model transparency.', detail: 'Anthropic published groundbreaking research on AI interpretability, revealing detailed mechanisms of how Claude processes information and makes decisions. The research introduces "thought tracing," a technique that maps the internal reasoning chains of the model in human-readable form. This represents the most detailed look inside a frontier AI model to date and has significant implications for AI safety and trust.' },
        { tag: 'Enterprise', title: 'Claude Enterprise Adds Custom Model Fine-Tuning', date: 'Mar 21', summary: 'Enterprise customers can now fine-tune Claude on proprietary data.', detail: 'Anthropic announced custom model fine-tuning for Claude Enterprise customers, allowing organizations to train specialized versions of Claude on their proprietary data. The feature includes privacy guarantees that training data is never used for general model improvements, differential privacy mechanisms, and the ability to create multiple specialized models for different departments or use cases.' },
      ]
    },
    gemini: {
      prominence: 0.7, angle: 4.2,
      news: [
        { tag: 'Launch', title: 'Gemini Pro 2.5 Tops All Major Coding Benchmarks', date: 'Mar 18', summary: 'Google\'s latest model achieves #1 across SWE-Bench, HumanEval, and MBPP.', detail: 'Gemini Pro 2.5 achieved the top score on all major coding benchmarks including SWE-Bench Verified (54.2%), HumanEval (96.3%), and MBPP (91.8%). The model features a "code reasoning" mode that thinks step-by-step through complex programming problems before generating solutions. Google also announced a new $200/month "Gemini Advanced Ultra" tier for professional developers.' },
        { tag: 'Integration', title: 'Google Cloud Launches Gemini-Native Development Suite', date: 'Mar 20', summary: 'Full IDE, deployment, and monitoring powered by Gemini for Google Cloud customers.', detail: 'Google Cloud launched a Gemini-native development suite that integrates AI throughout the software development lifecycle — from requirements analysis and code generation to deployment and monitoring. The suite includes AI-powered code review, automatic performance optimization, and predictive scaling. Available to all Google Cloud customers at no additional cost beyond compute usage.' },
      ]
    },
    others: {
      prominence: 0.6, angle: 5.6,
      news: [
        { tag: 'Launch', title: 'Cohere Releases Command A — Enterprise-Focused Model with RAG', date: 'Mar 17', summary: 'Built-in retrieval-augmented generation makes enterprise deployment seamless.', detail: 'Cohere released Command A, an enterprise-focused model with built-in retrieval-augmented generation (RAG) capabilities. The model can directly query corporate databases, document stores, and knowledge bases without additional infrastructure, reducing enterprise AI deployment complexity by an estimated 60%. Command A supports 23 languages and includes built-in citation generation.' },
        { tag: 'Open Source', title: 'Together AI Launches Free Inference for Top Open Models', date: 'Mar 19', summary: 'Free API access to Llama 4, Mistral Large, and DeepSeek for developers.', detail: 'Together AI launched a free inference tier offering API access to the top open-source models including Llama 4 Maverick, Mistral Large 3, and DeepSeek V3. The free tier includes 10 million tokens per month, making it the most generous free offering for open-source model inference. The move is designed to accelerate open-source AI adoption and compete with proprietary model APIs.' },
      ]
    },
    lovable: {
      prominence: 0.7, angle: 1.6,
      news: [
        { tag: 'Launch', title: 'Lovable Marketplace: Share and Monetize AI-Built Apps', date: 'Mar 18', summary: 'Developers can sell app templates and components built with Lovable.', detail: 'Lovable launched its App Marketplace, where developers can share and monetize applications, templates, and components built using the platform. The marketplace features a revenue sharing model (80/20 in favor of creators) and includes categories for SaaS tools, e-commerce templates, dashboards, and custom components. Over 500 templates were available at launch.' },
        { tag: 'Feature', title: 'Lovable Adds Native Mobile App Generation', date: 'Mar 21', summary: 'Generate React Native mobile apps alongside web applications.', detail: 'Lovable expanded its platform to generate React Native mobile applications alongside web apps. Users can now describe a mobile app and get a fully functional iOS/Android application with native navigation, push notifications, and device API access. The feature includes automatic App Store and Google Play submission preparation.' },
      ]
    },
    claudecode: {
      prominence: 0.8, angle: 3.1,
      news: [
        { tag: 'Launch', title: 'Claude Code Supports Full 1M Context for Codebase Understanding', date: 'Mar 17', summary: 'Entire repositories can now be loaded into context for comprehensive AI assistance.', detail: 'Claude Code now leverages the full 1 million token context window of Claude Opus 4.6, allowing developers to load entire repositories into context. The system intelligently prioritizes relevant files, dependency graphs, and recent changes, giving the AI a complete understanding of the codebase. This enables more accurate suggestions, better refactoring, and fewer hallucinations when working with large projects.' },
        { tag: 'Feature', title: 'Claude Code Launches Hooks for Custom Automation', date: 'Mar 19', summary: 'Automate workflows with custom scripts triggered by Claude Code events.', detail: 'Claude Code introduced Hooks, a system for running custom shell commands in response to Claude Code events like file edits, tool calls, and task completion. Developers can set up hooks for auto-formatting, linting, testing, deployment, and notification workflows. The feature enables teams to enforce coding standards and automate repetitive tasks without manual intervention.' },
      ]
    },
    bolt: {
      prominence: 0.6, angle: 4.7,
      news: [
        { tag: 'Milestone', title: 'Bolt.new Reaches 1 Million Developers', date: 'Mar 18', summary: 'AI-powered development platform crosses 1M monthly active developers.', detail: 'Bolt.new celebrated reaching 1 million monthly active developers, making it one of the fastest-growing development platforms in history. The milestone was achieved just 6 months after launch, driven by the platform\'s ability to generate full-stack applications from natural language descriptions. CEO Eric Simons announced plans for enterprise features including private deployments and SSO.' },
        { tag: 'Feature', title: 'Bolt.new Adds AI-Powered Database Visualization', date: 'Mar 20', summary: 'Visual database explorer lets developers see and modify data schemas interactively.', detail: 'Bolt.new introduced an AI-powered database visualization tool that creates interactive visual representations of database schemas, relationships, and data flows. Developers can modify schemas by dragging connections, and the AI automatically updates migrations, models, and API endpoints to match. The feature supports PostgreSQL, MySQL, and MongoDB.' },
      ]
    },
    replit: {
      prominence: 0.5, angle: 0.3,
      news: [
        { tag: 'Launch', title: 'Replit Launches AI-Native Mobile IDE', date: 'Mar 17', summary: 'Code and deploy applications from your phone with AI assistance.', detail: 'Replit released a completely redesigned mobile IDE with AI at its core. The app allows developers to write, debug, and deploy applications entirely from their phone, using voice commands and natural language for code generation. The mobile IDE includes all the capabilities of the desktop version, including Replit Agent, deployments, and collaboration features.' },
        { tag: 'Partnership', title: 'Replit Partners with Google Cloud for Enterprise AI Development', date: 'Mar 20', summary: 'Enterprise teams get Replit Agent with Google Cloud integration for production deployments.', detail: 'Replit announced a strategic partnership with Google Cloud, integrating Replit Agent directly with Google Cloud services for enterprise customers. The partnership enables one-click deployment to Google Cloud Run, automatic Cloud SQL database provisioning, and integration with Google Workspace for collaborative development. Enterprise plans start at $25/seat/month with dedicated support and SLA guarantees.' },
      ]
    },
    ecom: {
      prominence: 0.8, angle: 1.8,
      news: [
        { tag: 'Launch', title: 'Alibaba Launches AI Commerce Suite for Global B2B Trade', date: 'Mar 17', summary: 'End-to-end AI platform handles sourcing, negotiation, and logistics for businesses.', detail: 'Alibaba launched its AI Commerce Suite, an end-to-end platform that uses AI to handle product sourcing, supplier negotiation, quality inspection (via computer vision), and logistics optimization for B2B trade. The suite includes an AI negotiation agent that can conduct price negotiations in 15 languages, reportedly securing 12-18% better terms than human buyers on average.' },
        { tag: 'Trend', title: 'AI-Powered Personalization Drives 28% Revenue Increase for Retailers', date: 'Mar 19', summary: 'Study shows AI product recommendations significantly boost online retail revenue.', detail: 'A comprehensive study by Forrester Research found that retailers using AI-powered personalization engines saw an average 28% increase in online revenue. The study covered 200 retailers across fashion, electronics, and grocery, finding that AI-driven product recommendations, dynamic pricing, and personalized marketing campaigns together drove the majority of gains.' },
      ]
    },
    health: {
      prominence: 0.7, angle: 3.4,
      news: [
        { tag: 'Breakthrough', title: 'Google Health AI Predicts Disease Outbreaks 2 Weeks in Advance', date: 'Mar 18', summary: 'AI model analyzes search trends, climate, and travel data for early disease warnings.', detail: 'Google Health unveiled an AI system that can predict disease outbreaks up to 2 weeks before traditional surveillance methods detect them. The system analyzes Google Search trends, climate data, travel patterns, and social media signals to identify early warning signs. In testing across 50 countries over 2 years, the system correctly predicted 89% of significant disease outbreaks, including flu seasons, dengue surges, and COVID-19 variants.' },
        { tag: 'Industry', title: 'AI-Powered Mental Health Apps Reach 50M Users Globally', date: 'Mar 20', summary: 'Digital mental health platforms using AI therapy show promising outcomes.', detail: 'AI-powered mental health platforms including Woebot, Wysa, and Youper collectively reached 50 million active users worldwide. Clinical studies show that AI-assisted cognitive behavioral therapy (CBT) reduces anxiety symptoms by 30% and depression symptoms by 25% on average. The platforms are filling a critical gap in mental health care, particularly in regions with severe therapist shortages.' },
      ]
    },
    finance: {
      prominence: 0.5, angle: 5.0,
      news: [
        { tag: 'Innovation', title: 'AI-Powered Fraud Detection Saves Banks $12B Annually', date: 'Mar 18', summary: 'Machine learning systems now prevent majority of attempted financial fraud.', detail: 'A report by the Banking AI Consortium estimates that AI-powered fraud detection systems saved global banks $12 billion in prevented fraud losses in the past year. Modern systems using transformer-based models detect fraudulent transactions with 99.7% accuracy while reducing false positives by 60% compared to rule-based systems. The technology processes over 100 billion transactions annually across participating institutions.' },
      ]
    },
    education: {
      prominence: 0.6, angle: 0.6,
      news: [
        { tag: 'Launch', title: 'Coursera Launches AI-Powered Degree Planning', date: 'Mar 17', summary: 'AI advisor helps students plan optimal paths to career goals.', detail: 'Coursera launched an AI-powered degree planning system that analyzes job market data, student skills, and career goals to recommend optimal learning paths. The system maps current skills against target roles, identifies gaps, and creates personalized course sequences with projected timelines. The feature is available to all Coursera Plus subscribers and has already been used by 2 million students.' },
        { tag: 'Research', title: 'UNESCO Report: AI Could Close Global Education Gap by 40%', date: 'Mar 20', summary: 'Study finds AI personalization could dramatically reduce educational inequality.', detail: 'A UNESCO report concluded that AI-powered personalized learning could reduce the global education achievement gap by up to 40% within 5 years if deployed equitably. The report analyzed pilot programs in 25 developing nations where AI tutors compensated for teacher shortages, finding that students using AI-assisted learning performed comparably to those in well-funded school systems. UNESCO called for $10 billion in global investment for AI education infrastructure.' },
      ]
    },
    travel: {
      prominence: 0.7, angle: 1.1,
      news: [
        { tag: 'Launch', title: 'Expedia Unveils AI Travel Agent That Books Entire Vacations Autonomously', date: 'Mar 18', summary: 'End-to-end AI agent handles research, booking, and itinerary management for travelers.', detail: 'Expedia launched an autonomous AI travel agent that can research destinations, compare prices across airlines and hotels, book entire vacations, and manage itineraries — all from a single conversation. The agent integrates with the user\'s calendar, budget preferences, and loyalty programs. In beta testing, the AI saved users an average of $340 per trip through optimal timing and package combinations.' },
        { tag: 'Innovation', title: 'Hilton Deploys AI Concierge Across 7,000 Properties Worldwide', date: 'Mar 20', summary: 'Generative AI concierge provides personalized local recommendations and handles guest requests.', detail: 'Hilton Hotels completed the global rollout of its AI-powered concierge service across all 7,000 properties. The system provides personalized restaurant recommendations, arranges transportation, handles room service requests, and offers real-time translation in 50 languages. Guest satisfaction scores at AI-concierge properties increased by 22%, and front desk call volume dropped by 35%.' },
      ]
    },
    pharma: {
      prominence: 0.8, angle: 2.1,
      news: [
        { tag: 'Milestone', title: 'AI-Discovered Antibiotics Enter Clinical Trials Against Drug-Resistant Bacteria', date: 'Mar 17', summary: 'MIT-developed AI identifies novel antibiotic compounds effective against superbugs.', detail: 'MIT researchers announced that two novel antibiotic compounds discovered by their AI platform have entered Phase 1 clinical trials. The AI screened over 100 million chemical structures to identify molecules effective against methicillin-resistant Staphylococcus aureus (MRSA) and other drug-resistant bacteria. The compounds work through entirely new mechanisms of action, making them promising candidates against superbugs that resist existing antibiotics.' },
        { tag: 'Industry', title: 'Pfizer Reports AI Cuts Drug Development Timeline by 30%', date: 'Mar 19', summary: 'Pharmaceutical giant credits AI with accelerating multiple pipeline programs.', detail: 'Pfizer reported that AI integration across its drug development pipeline has reduced average development timelines by 30% and cut preclinical costs by $200 million annually. The company\'s AI platform assists with target identification, molecular design, patient recruitment for clinical trials, and regulatory document preparation. Pfizer now has 15 AI-assisted drug candidates in various stages of clinical trials.' },
      ]
    },
    automotive: {
      prominence: 0.7, angle: 3.8,
      news: [
        { tag: 'Launch', title: 'Tesla Rolls Out Full Self-Driving v13 with Level 4 Highway Autonomy', date: 'Mar 18', summary: 'Latest FSD version achieves Level 4 autonomy on highways in approved regions.', detail: 'Tesla released Full Self-Driving v13, achieving Level 4 autonomous driving on highways in California, Texas, and Florida — meaning the car can drive itself without human attention on designated highway routes. The update was approved by NHTSA after 50 million miles of validated testing data showed a safety record 8x better than human drivers on similar routes. Tesla plans to expand Level 4 coverage to 15 more states by Q3 2026.' },
        { tag: 'Innovation', title: 'BMW Opens AI-Powered Factory with 90% Automated Assembly', date: 'Mar 21', summary: 'New Munich facility uses AI-guided robots for nearly complete autonomous vehicle assembly.', detail: 'BMW inaugurated its new AI-powered factory in Munich where 90% of vehicle assembly is performed by AI-guided robots. The facility uses computer vision for real-time quality inspection, digital twins for production optimization, and reinforcement learning for robotic arm coordination. The factory produces 1,200 vehicles daily with 60% fewer defects than traditional assembly lines and 40% lower energy consumption.' },
      ]
    },
    retail: {
      prominence: 0.6, angle: 5.4,
      news: [
        { tag: 'Launch', title: 'Amazon Expands Just Walk Out to 500 Third-Party Stores', date: 'Mar 17', summary: 'AI-powered cashierless technology now available as a service for any retailer.', detail: 'Amazon announced that its Just Walk Out technology — the AI-powered system that lets shoppers grab items and leave without checkout — has been deployed in 500 third-party retail locations including stadiums, airports, and convenience stores. The system uses computer vision and sensor fusion to track items with 99.5% accuracy. Amazon offers it as a turnkey service at $3,000/month per store, making cashierless retail accessible to smaller retailers.' },
        { tag: 'Trend', title: 'AI Styling Assistants Drive 45% Higher Average Order Value', date: 'Mar 20', summary: 'Virtual AI stylists transform online fashion retail with personalized outfit recommendations.', detail: 'Fashion retailers deploying AI styling assistants reported a 45% increase in average order value, according to a McKinsey retail study. The AI analyzes customer body measurements, style preferences, existing wardrobe photos, and social media trends to recommend complete outfits. Stitch Fix, Nordstrom, and H&M lead adoption, with AI-styled orders also showing 30% fewer returns than self-selected purchases.' },
      ]
    },
    fmcg: {
      prominence: 0.6, angle: 6.1,
      news: [
        { tag: 'Innovation', title: 'P&G Uses Generative AI to Develop New Product Formulations 5x Faster', date: 'Mar 18', summary: 'AI designs and tests consumer product formulations virtually before physical prototyping.', detail: 'Procter & Gamble revealed that its generative AI platform for product formulation has reduced new product development time from 18 months to under 4 months. The AI simulates how ingredient combinations interact, predicts consumer sensory responses, and optimizes for cost and sustainability. P&G has used the platform to develop 23 new products across beauty, health, and home care categories in the past year.' },
        { tag: 'Partnership', title: 'Nestl\u00e9 and Google Cloud Launch AI-Powered Personalized Nutrition Platform', date: 'Mar 21', summary: 'AI analyzes health data to recommend personalized food and supplement plans.', detail: 'Nestl\u00e9 partnered with Google Cloud to launch an AI-powered personalized nutrition platform that analyzes users\' health data, dietary preferences, and nutritional goals to recommend tailored meal plans and Nestl\u00e9 products. The platform uses large language models to explain nutritional science in accessible terms and adapts recommendations based on user feedback and health outcomes tracked over time.' },
      ]
    },
    manufacturing: {
      prominence: 0.7, angle: 4.5,
      news: [
        { tag: 'Milestone', title: 'AI-Powered Predictive Maintenance Prevents $8B in Unplanned Industrial Downtime', date: 'Mar 17', summary: 'Global study shows AI predictive maintenance delivering massive ROI across manufacturing.', detail: 'A World Economic Forum study found that AI-powered predictive maintenance systems prevented an estimated $8 billion in unplanned industrial downtime globally in the past year. The systems use vibration sensors, thermal imaging, and acoustic analysis combined with machine learning to predict equipment failures 2-6 weeks in advance. Average ROI for manufacturers deploying these systems exceeded 400% within the first year.' },
        { tag: 'Launch', title: 'Honeywell Launches AI-Powered Autonomous Factory Operating System', date: 'Mar 20', summary: 'Integrated AI platform manages entire factory operations from a single dashboard.', detail: 'Honeywell launched its Autonomous Factory Operating System, an AI platform that integrates and optimizes all factory operations — from raw material intake to finished product shipping. The system uses reinforcement learning to make real-time production decisions, automatically adjusting machine settings, staffing recommendations, and logistics schedules. Early adopters reported 25% improvement in overall equipment effectiveness and 15% reduction in energy costs.' },
      ]
    },
    telecom: {
      prominence: 0.6, angle: 0.2,
      news: [
        { tag: 'Innovation', title: 'AT&T Deploys AI Customer Service That Resolves 70% of Issues Without Human Agent', date: 'Mar 18', summary: 'Advanced AI handles complex billing, technical support, and account management autonomously.', detail: 'AT&T reported that its AI-powered customer service system now resolves 70% of customer inquiries without human intervention, up from 40% a year ago. The system handles complex tasks including billing disputes, plan optimization recommendations, technical troubleshooting with remote device diagnostics, and account management. Customer satisfaction scores for AI-resolved interactions match human agent scores, and average resolution time dropped from 12 minutes to 3 minutes.' },
        { tag: 'Launch', title: 'Nokia and Deutsche Telekom Unveil AI-Optimized 5G Network Slicing', date: 'Mar 21', summary: 'AI dynamically allocates network resources for optimal performance per application.', detail: 'Nokia and Deutsche Telekom launched an AI-driven 5G network slicing platform that dynamically creates and manages virtual network segments optimized for specific applications. The AI predicts traffic patterns and automatically allocates bandwidth, latency, and reliability parameters for each slice — whether for autonomous vehicles, remote surgery, or mass IoT deployments. The platform reduced network provisioning time from weeks to minutes.' },
      ]
    },
  },
};


// ===== STATE =====
let state = {
  weekIndex: WEEKS.length - 1,  // Start at current week (W12)
  bodies: [],
  stars: [],
  selectedBody: null,
  animationId: null,
  time: 0,
  canvasCtx: null,
  canvas: null,
  universeEl: null,
  centerX: 0,
  centerY: 0,
  // Week transition state
  weekTransitionActive: false,
  driftFreezeTime: 0,
  driftResumeAdjust: 0,
  // Landing view state
  landingActive: false,
  landingBodyId: null,
};

// ===== RESPONSIVE ORBIT SCALING =====
function getOrbitScale() {
  const w = window.innerWidth;
  if (w <= 480) return 0.38;
  if (w <= 800) return 0.55;
  if (w <= 1100) return 0.78;
  return 1;
}

// ===== INITIALIZATION =====
function init() {
  state.canvas = document.getElementById('starfield');
  state.canvasCtx = state.canvas.getContext('2d');
  state.universeEl = document.getElementById('universe');

  resizeCanvas();
  createStars();
  createWeekTabs();
  createBodies();
  setupEventListeners();
  setWeek(state.weekIndex);
  animate(0);
  scheduleShootingStar();
}

// ===== STARFIELD =====
function resizeCanvas() {
  state.canvas.width = window.innerWidth;
  state.canvas.height = window.innerHeight;
}

function createStars() {
  state.stars = [];
  for (let i = 0; i < CONFIG.starCount; i++) {
    state.stars.push({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      r: Math.random() * 1.4 + 0.3,
      twinkleSpeed: Math.random() * 0.003 + 0.001,
      phase: Math.random() * Math.PI * 2,
      baseAlpha: Math.random() * 0.5 + 0.2,
    });
  }
}

function drawStars(time) {
  const ctx = state.canvasCtx;
  ctx.clearRect(0, 0, state.canvas.width, state.canvas.height);
  for (const s of state.stars) {
    const alpha = s.baseAlpha + 0.3 * Math.sin(time * s.twinkleSpeed + s.phase);
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(220,225,255,${Math.max(0.05, alpha)})`;
    ctx.fill();
  }
}

// ===== SHOOTING STARS =====
function scheduleShootingStar() {
  const delay = CONFIG.shootingStarInterval + Math.random() * 4000;
  setTimeout(() => {
    createShootingStar();
    scheduleShootingStar();
  }, delay);
}

function createShootingStar() {
  const el = document.createElement('div');
  el.className = 'shooting-star';
  el.style.left = (Math.random() * 70 + 10) + '%';
  el.style.top = (Math.random() * 50 + 5) + '%';
  el.style.transform = `rotate(${15 + Math.random() * 30}deg)`;
  document.getElementById('universe-viewport').appendChild(el);
  setTimeout(() => el.remove(), 1400);
}

// ===== WEEK TABS =====
function createWeekTabs() {
  const container = document.getElementById('week-tabs');
  WEEKS.forEach((w, i) => {
    const tab = document.createElement('div');
    tab.className = 'week-tab';
    tab.textContent = w.label;
    tab.dataset.index = i;
    tab.addEventListener('click', () => setWeek(i));
    container.appendChild(tab);
  });
}

function setWeek(index) {
  state.weekIndex = Math.max(0, Math.min(WEEKS.length - 1, index));
  // Update tab highlight
  document.querySelectorAll('.week-tab').forEach((tab, i) => {
    tab.classList.toggle('active', i === state.weekIndex);
  });
  // Update date range display
  document.getElementById('week-date-range').textContent = WEEKS[state.weekIndex].dateRange;

  // Freeze drift and trigger transition effect
  state.weekTransitionActive = true;
  state.driftFreezeTime = state.time;
  const universe = document.getElementById('universe');
  universe.classList.add('week-transitioning');
  setTimeout(() => {
    state.weekTransitionActive = false;
    // Accumulate pause duration so drift resumes smoothly
    state.driftResumeAdjust += (state.time - state.driftFreezeTime);
    universe.classList.remove('week-transitioning');
  }, 1200);

  // Update body targets
  updateBodyTargets();
  // Update panel if open
  if (state.selectedBody) {
    openPanel(state.selectedBody);
  }
}

// ===== BODY CREATION =====
function createBodies() {
  const universe = state.universeEl;
  BODY_DEFS.forEach(def => {
    const el = document.createElement('div');
    el.className = 'celestial-body';
    el.dataset.id = def.id;

    const colorAlpha = def.color + '55';
    el.style.setProperty('--color', def.color);
    el.style.setProperty('--color-alpha', colorAlpha);
    el.style.setProperty('--float-dur', (3 + Math.random() * 2) + 's');

    el.innerHTML = `
      <div class="body-ring"></div>
      <div class="body-dot"><span class="body-icon">${def.icon}</span></div>
      <div class="body-name"><span class="name-icon">${def.icon} </span>${def.name}</div>
      <div class="body-news-count" style="display:none"></div>
    `;

    // Events
    el.addEventListener('mouseenter', (e) => showTooltip(def.id, e));
    el.addEventListener('mousemove', (e) => moveTooltip(e));
    el.addEventListener('mouseleave', hideTooltip);
    el.addEventListener('click', () => {
      openPanel(def.id);
    });

    universe.appendChild(el);

    state.bodies.push({
      id: def.id,
      def: def,
      el: el,
      currentAngle: 0,
      targetAngle: 0,
      currentSize: def.baseSize,
      targetSize: def.baseSize,
    });
  });
}

// ===== UPDATE BODY TARGETS FROM WEEK DATA =====
function updateBodyTargets() {
  const weekId = WEEKS[state.weekIndex].id;
  const weekData = NEWS_DATA[weekId] || {};

  state.bodies.forEach(body => {
    const data = weekData[body.id];
    if (data) {
      body.targetAngle = data.angle;
      const newsCount = data.news.length;
      body.targetSize = body.def.baseSize + data.prominence * 18 + newsCount * 4;
      // Update news count badge
      const badge = body.el.querySelector('.body-news-count');
      if (newsCount > 0) {
        badge.textContent = newsCount;
        badge.style.display = 'flex';
      } else {
        badge.style.display = 'none';
      }
    } else {
      body.targetAngle = body.currentAngle;
      body.targetSize = body.def.baseSize;
      body.el.querySelector('.body-news-count').style.display = 'none';
    }
  });
}

// ===== ANIMATION LOOP =====
function animate(timestamp) {
  state.time = timestamp;
  drawStars(timestamp);
  updatePositions(timestamp);
  state.animationId = requestAnimationFrame(animate);
}

function updatePositions(timestamp) {
  const rect = state.universeEl.getBoundingClientRect();
  state.centerX = rect.width / 2;
  state.centerY = rect.height / 2;
  const scale = getOrbitScale();

  // Lerp speeds: faster during week transitions for snappy movement
  const angleLerp = state.weekTransitionActive ? 0.08 : 0.04;
  const sizeLerp = state.weekTransitionActive ? 0.10 : 0.06;

  state.bodies.forEach(body => {
    // Smooth lerp towards target angle
    const angleDiff = body.targetAngle - body.currentAngle;
    body.currentAngle += angleDiff * angleLerp;

    // Smooth lerp size
    body.currentSize += (body.targetSize - body.currentSize) * sizeLerp;

    // Orbital drift: freeze during week transitions to make angle changes visible
    const orbitCfg = CONFIG.orbits[body.def.layer];
    let drift;
    if (state.weekTransitionActive) {
      drift = (state.driftFreezeTime - state.driftResumeAdjust) * orbitCfg.speed;
    } else {
      drift = (timestamp - state.driftResumeAdjust) * orbitCfg.speed;
    }
    const finalAngle = body.currentAngle + drift;

    // Position
    const radius = orbitCfg.radius * scale;
    const x = state.centerX + Math.cos(finalAngle) * radius;
    const y = state.centerY + Math.sin(finalAngle) * radius;

    const size = Math.round(body.currentSize);
    body.el.style.left = x + 'px';
    body.el.style.top = y + 'px';
    body.el.style.setProperty('--size', size + 'px');
    body.el.style.transform = 'translate(-50%,-50%)';
  });
}

// ===== TOOLTIP =====
function showTooltip(bodyId, event) {
  const tooltip = document.getElementById('tooltip');
  const def = BODY_DEFS.find(b => b.id === bodyId);
  const weekId = WEEKS[state.weekIndex].id;
  const data = (NEWS_DATA[weekId] || {})[bodyId];

  if (!def) return;

  // Header
  tooltip.querySelector('.tooltip-dot').textContent = def.icon;
  tooltip.querySelector('.tooltip-dot').style.background = 'none';
  tooltip.querySelector('.tooltip-name').textContent = def.name;
  tooltip.querySelector('.tooltip-layer-badge').textContent = def.character;

  // News list
  const list = tooltip.querySelector('.tooltip-news-list');
  list.innerHTML = '';
  list.style.setProperty('--color', def.color);
  if (data && data.news.length) {
    data.news.slice(0, 3).forEach(n => {
      const li = document.createElement('li');
      li.style.borderLeftColor = def.color;
      const tagIcon = TAG_ICONS[n.tag] || '📌';
      li.innerHTML = `<span class="news-tag" style="color:${def.color}">${tagIcon} ${n.tag}</span> ${n.title}`;
      list.appendChild(li);
    });
    tooltip.querySelector('.tooltip-hint').style.display = 'block';
  } else {
    const li = document.createElement('li');
    li.textContent = 'No major news this week';
    li.style.borderLeftColor = 'rgba(255,255,255,0.15)';
    list.appendChild(li);
    tooltip.querySelector('.tooltip-hint').style.display = 'none';
  }

  tooltip.classList.remove('hidden');
  tooltip.classList.add('visible');
  moveTooltip(event);
}

function moveTooltip(event) {
  const tooltip = document.getElementById('tooltip');
  const pad = 18;
  let x = event.clientX + pad;
  let y = event.clientY + pad;
  // Keep on screen
  const rect = tooltip.getBoundingClientRect();
  if (x + rect.width > window.innerWidth - 10) x = event.clientX - rect.width - pad;
  if (y + rect.height > window.innerHeight - 10) y = event.clientY - rect.height - pad;
  tooltip.style.left = x + 'px';
  tooltip.style.top = y + 'px';
}

function hideTooltip() {
  const tooltip = document.getElementById('tooltip');
  tooltip.classList.remove('visible');
  tooltip.classList.add('hidden');
}

// ===== INSIGHT GENERATOR =====
function generateInsight(def, data) {
  const n = data.news.length;
  const p = data.prominence;
  if (p >= 0.8) return `Big moves from ${def.character} this week! With ${n} major development${n>1?'s':''}, ${def.name} is commanding the spotlight. The momentum here is undeniable — expect ripple effects across the ecosystem.`;
  if (p >= 0.6) return `${def.character} keeps pushing forward with ${n} notable update${n>1?'s':''}. ${def.name} is steadily carving out its position. Watch this space — the trajectory is promising.`;
  if (p >= 0.4) return `A measured week for ${def.name}, but don't overlook it. The developments here are laying groundwork for what's ahead. Every quiet week in AI tends to precede a storm.`;
  return `${def.name} is keeping a low profile this week, but that's often when the most interesting R&D happens behind closed doors. Stay tuned.`;
}

// ===== NEWS PANEL (Right Side) =====
function openPanel(bodyId) {
  state.selectedBody = bodyId;
  hideTooltip();

  const panel = document.getElementById('news-panel');
  const def = BODY_DEFS.find(b => b.id === bodyId);
  const weekId = WEEKS[state.weekIndex].id;
  const data = (NEWS_DATA[weekId] || {})[bodyId];
  const week = WEEKS[state.weekIndex];

  if (!def) return;

  // Banner header with gradient
  panel.querySelector('.panel-icon').style.background = `radial-gradient(circle at 35% 35%, rgba(255,255,255,0.5), ${def.color})`;
  panel.querySelector('.panel-icon').style.boxShadow = `0 0 20px ${def.color}55`;
  panel.querySelector('.panel-icon').innerHTML = `<span style="font-size:1.4rem">${def.icon}</span>`;
  panel.querySelector('.panel-title').textContent = def.name;
  panel.querySelector('.panel-layer').textContent = `${def.character}  ·  ${CONFIG.orbits[def.layer].label}`;
  panel.querySelector('.panel-layer').style.color = def.color;
  panel.querySelector('.panel-week-text').textContent = `${week.label}  ·  ${week.dateRange}`;

  // Panel body content
  const body = panel.querySelector('.panel-body');
  body.innerHTML = '';

  // "What It Means" insight section
  if (data) {
    const insight = document.createElement('div');
    insight.className = 'panel-insight';
    insight.innerHTML = `
      <div class="insight-header">🔭 What It Means</div>
      <p class="insight-text">${generateInsight(def, data)}</p>
    `;
    body.appendChild(insight);
  }

  // News items
  if (data && data.news.length) {
    data.news.forEach(n => {
      const tagIcon = TAG_ICONS[n.tag] || '📌';
      const item = document.createElement('div');
      item.className = 'panel-news-item';
      item.innerHTML = `
        <div class="news-item-header" style="background:linear-gradient(135deg, ${def.color}18, ${def.color}08)">
          <span class="news-item-icon">${tagIcon}</span>
          <span class="panel-news-tag" style="background:${def.color}22;color:${def.color}">${n.tag}</span>
        </div>
        <h3 class="panel-news-title">${n.title}</h3>
        <p class="panel-news-date">${n.date}, 2026</p>
        <p class="panel-news-summary">${n.summary}</p>
        <p class="panel-news-detail">${n.detail}</p>
      `;
      body.appendChild(item);
    });
  } else {
    body.innerHTML += `<div class="panel-news-item"><p class="panel-news-detail" style="text-align:center;padding:40px 0;opacity:0.4;">No major news this week for ${def.name}.</p></div>`;
  }

  panel.classList.add('open');
  panel.classList.remove('closed');
}

function closePanel() {
  state.selectedBody = null;
  const panel = document.getElementById('news-panel');
  panel.classList.remove('open');
  panel.classList.add('closed');
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
  document.getElementById('prev-week').addEventListener('click', () => setWeek(state.weekIndex - 1));
  document.getElementById('next-week').addEventListener('click', () => setWeek(state.weekIndex + 1));
  document.getElementById('panel-close').addEventListener('click', closePanel);
  document.getElementById('panel-prev-week').addEventListener('click', () => setWeek(state.weekIndex - 1));
  document.getElementById('panel-next-week').addEventListener('click', () => setWeek(state.weekIndex + 1));

  // Close panel on Escape, arrow keys for week nav
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closePanel();
    if (e.key === 'ArrowLeft') setWeek(state.weekIndex - 1);
    if (e.key === 'ArrowRight') setWeek(state.weekIndex + 1);
  });

  // Close panel when clicking empty space
  document.getElementById('universe-viewport').addEventListener('click', (e) => {
    if (!e.target.closest('.celestial-body') && !e.target.closest('#news-panel')) {
      closePanel();
    }
  });

  // Resize handling
  window.addEventListener('resize', () => {
    resizeCanvas();
    createStars();
  });

  // Music toggle
  document.getElementById('music-toggle').addEventListener('click', toggleMusic);
}

// ===== AMBIENT SPACE MUSIC (Web Audio API) =====
let audioCtx = null;
let musicPlaying = false;
let musicNodes = [];

function toggleMusic() {
  if (musicPlaying) {
    stopMusic();
  } else {
    startMusic();
  }
}

function startMusic() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  if (audioCtx.state === 'suspended') audioCtx.resume();

  musicNodes = [];
  const master = audioCtx.createGain();
  master.gain.value = 0.35;
  master.connect(audioCtx.destination);

  // Deep space drone — layered low pads
  const droneNotes = [55, 82.41, 110]; // A1, E2, A2
  droneNotes.forEach((freq, i) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const filter = audioCtx.createBiquadFilter();
    osc.type = 'sine';
    osc.frequency.value = freq;
    filter.type = 'lowpass';
    filter.frequency.value = 200 + i * 80;
    filter.Q.value = 1;
    gain.gain.value = 0;
    gain.gain.linearRampToValueAtTime(0.12 - i * 0.02, audioCtx.currentTime + 3);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(master);
    osc.start();
    musicNodes.push({ osc, gain });

    // Slow LFO for gentle pulsing
    const lfo = audioCtx.createOscillator();
    const lfoGain = audioCtx.createGain();
    lfo.type = 'sine';
    lfo.frequency.value = 0.05 + i * 0.02;
    lfoGain.gain.value = 0.03;
    lfo.connect(lfoGain);
    lfoGain.connect(gain.gain);
    lfo.start();
    musicNodes.push({ osc: lfo, gain: lfoGain });
  });

  // Ethereal high pad — shimmering texture
  const padNotes = [329.63, 440, 523.25]; // E4, A4, C5
  padNotes.forEach((freq, i) => {
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const filter = audioCtx.createBiquadFilter();
    osc.type = 'triangle';
    osc.frequency.value = freq;
    // Gentle detune for chorus effect
    osc.detune.value = (i - 1) * 8;
    filter.type = 'bandpass';
    filter.frequency.value = freq;
    filter.Q.value = 3;
    gain.gain.value = 0;
    gain.gain.linearRampToValueAtTime(0.025, audioCtx.currentTime + 4);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(master);
    osc.start();
    musicNodes.push({ osc, gain });
  });

  // Cosmic twinkle — random high-frequency pings
  function scheduleTwinkle() {
    if (!musicPlaying) return;
    const notes = [880, 1108.73, 1318.51, 1567.98, 1760, 2093]; // A5-C7 pentatonic
    const freq = notes[Math.floor(Math.random() * notes.length)];
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    const filter = audioCtx.createBiquadFilter();
    osc.type = 'sine';
    osc.frequency.value = freq;
    filter.type = 'highpass';
    filter.frequency.value = 600;
    gain.gain.value = 0;
    const t = audioCtx.currentTime;
    gain.gain.linearRampToValueAtTime(0.04 + Math.random() * 0.03, t + 0.05);
    gain.gain.exponentialRampToValueAtTime(0.001, t + 1.5 + Math.random());
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(master);
    osc.start(t);
    osc.stop(t + 2.5);
    setTimeout(scheduleTwinkle, 800 + Math.random() * 2500);
  }
  scheduleTwinkle();

  // Sub-bass pulse — heartbeat of the universe
  const sub = audioCtx.createOscillator();
  const subGain = audioCtx.createGain();
  sub.type = 'sine';
  sub.frequency.value = 36.71; // D1
  subGain.gain.value = 0;
  subGain.gain.linearRampToValueAtTime(0.08, audioCtx.currentTime + 5);
  const subLfo = audioCtx.createOscillator();
  const subLfoGain = audioCtx.createGain();
  subLfo.type = 'sine';
  subLfo.frequency.value = 0.12;
  subLfoGain.gain.value = 0.04;
  subLfo.connect(subLfoGain);
  subLfoGain.connect(subGain.gain);
  sub.connect(subGain);
  subGain.connect(master);
  sub.start();
  subLfo.start();
  musicNodes.push({ osc: sub, gain: subGain }, { osc: subLfo, gain: subLfoGain });

  musicNodes.push({ gain: master });
  musicPlaying = true;
  document.getElementById('music-icon').textContent = '🔊';
  document.getElementById('music-toggle').classList.add('playing');
}

function stopMusic() {
  musicPlaying = false;
  const t = audioCtx ? audioCtx.currentTime : 0;
  musicNodes.forEach(node => {
    if (node.gain && node.gain.gain) {
      try { node.gain.gain.linearRampToValueAtTime(0, t + 1.5); } catch(e) {}
    }
    if (node.osc) {
      try { node.osc.stop(t + 2); } catch(e) {}
    }
  });
  setTimeout(() => { musicNodes = []; }, 2500);
  document.getElementById('music-icon').textContent = '🔇';
  document.getElementById('music-toggle').classList.remove('playing');
}

// ===== START =====
document.addEventListener('DOMContentLoaded', init);
