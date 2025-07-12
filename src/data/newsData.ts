export interface NewsArticle {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  readTime: string;
  content: string;
  imageUrl?: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    title: "New Plastic-Eating Enzyme Breakthrough Shows Promise for Ocean Cleanup",
    description: "Scientists develop enhanced enzyme that can break down plastic bottles in hours rather than centuries.",
    date: "2024-01-15",
    category: "Technology",
    readTime: "5 min read",
    content: `
      <h2>Revolutionary Discovery</h2>
      <p>Researchers at the University of Portsmouth have made a groundbreaking discovery in the fight against plastic pollution. Their newly developed enzyme, dubbed PETase 2.0, can break down plastic bottles in just a matter of hours.</p>
      
      <h3>How It Works</h3>
      <p>The enzyme targets PET (polyethylene terephthalate), the material used in most plastic bottles. Unlike traditional recycling methods, this biological approach can break down plastic at the molecular level, returning it to its original building blocks.</p>
      
      <h3>Environmental Impact</h3>
      <p>This breakthrough could revolutionize how we handle plastic waste. The enzyme works at room temperature and doesn't require harmful chemicals, making it an environmentally friendly solution to plastic pollution.</p>
      
      <h3>Next Steps</h3>
      <p>The research team is now working on scaling up the process for industrial use. Initial trials suggest the technology could be commercially viable within the next 5 years.</p>
    `
  },
  {
    id: 2,
    title: "Ocean Cleanup Project Removes 100,000kg of Plastic from Pacific",
    description: "The Ocean Cleanup's innovative system successfully extracts massive amounts of plastic waste from the Great Pacific Garbage Patch.",
    date: "2024-01-12",
    category: "Environment",
    readTime: "4 min read",
    content: `
      <h2>Milestone Achievement</h2>
      <p>The Ocean Cleanup project has reached a significant milestone, successfully removing over 100,000 kilograms of plastic waste from the Great Pacific Garbage Patch.</p>
      
      <h3>Innovative Technology</h3>
      <p>The project uses a passive collection system that harnesses ocean currents and winds to capture plastic waste. The system consists of a 600-meter-long floating barrier that acts like an artificial coastline.</p>
      
      <h3>Types of Waste Collected</h3>
      <p>The collected waste includes everything from massive fishing nets to tiny microplastics. The majority consists of:
      • Abandoned fishing gear (ghost nets)
      • Plastic bottles and containers
      • Microplastics fragments
      • Various plastic debris</p>
      
      <h3>Future Plans</h3>
      <p>The organization plans to deploy multiple systems and aims to remove 90% of floating ocean plastic by 2040. The collected plastic will be recycled into new products, creating a circular economy approach to ocean cleanup.</p>
    `
  },
  {
    id: 3,
    title: "European Union Bans Single-Use Plastics: What This Means Globally",
    description: "The EU's comprehensive ban on single-use plastics sets a precedent for environmental policy worldwide.",
    date: "2024-01-10",
    category: "Policy",
    readTime: "6 min read",
    content: `
      <h2>Historic Legislation</h2>
      <p>The European Union has implemented one of the world's most comprehensive bans on single-use plastics, prohibiting items like plastic straws, cutlery, plates, and cotton swabs.</p>
      
      <h3>Banned Items</h3>
      <p>The legislation covers:
      • Plastic cutlery and plates
      • Plastic straws and stirrers
      • Cotton swabs with plastic stems
      • Balloon sticks
      • Polystyrene food containers
      • Expanded polystyrene beverage containers</p>
      
      <h3>Economic Impact</h3>
      <p>While the transition presents challenges for some industries, it has also spurred innovation in sustainable alternatives. Companies are developing biodegradable and compostable options, creating new markets and job opportunities.</p>
      
      <h3>Global Influence</h3>
      <p>The EU's leadership is influencing policy decisions worldwide. Similar legislation is being considered in over 60 countries, potentially creating a global shift away from single-use plastics.</p>
    `
  },
  {
    id: 4,
    title: "Microplastics Found in Human Blood: Health Implications Revealed",
    description: "Groundbreaking study detects microplastics in human bloodstream for the first time, raising concerns about health effects.",
    date: "2024-01-08",
    category: "Health",
    readTime: "7 min read",
    content: `
      <h2>Alarming Discovery</h2>
      <p>For the first time, scientists have detected microplastics in human blood samples, confirming that these tiny particles can travel throughout our bodies and potentially accumulate in organs.</p>
      
      <h3>Study Details</h3>
      <p>The study, conducted by Vrije Universiteit Amsterdam, analyzed blood samples from 22 healthy volunteers. Microplastics were found in 17 of the samples, with PET (from plastic bottles) being the most common type detected.</p>
      
      <h3>Health Concerns</h3>
      <p>While the health implications are still being studied, researchers are concerned about:
      • Inflammation responses
      • Cellular damage
      • Potential accumulation in organs
      • Long-term health effects</p>
      
      <h3>Sources of Exposure</h3>
      <p>Microplastics enter our bodies through:
      • Drinking water
      • Food packaging
      • Airborne particles
      • Cosmetics and personal care products</p>
      
      <h3>Prevention Measures</h3>
      <p>Experts recommend reducing plastic use, choosing glass or metal containers, and supporting policies that address plastic pollution at its source.</p>
    `
  },
  {
    id: 5,
    title: "Revolutionary Plastic Alternative Made from Seaweed Shows Promise",
    description: "Indonesian startup develops biodegradable plastic alternative using seaweed that dissolves harmlessly in water.",
    date: "2024-01-05",
    category: "Innovation",
    readTime: "5 min read",
    content: `
      <h2>Seaweed Solution</h2>
      <p>Evoware, an Indonesian startup, has developed a revolutionary plastic alternative made from seaweed that is not only biodegradable but also edible and nutritious.</p>
      
      <h3>Product Features</h3>
      <p>The seaweed-based packaging offers several advantages:
      • Dissolves in warm water within minutes
      • Completely edible and safe for consumption
      • Rich in vitamins and fiber
      • No artificial chemicals or additives
      • 100% biodegradable</p>
      
      <h3>Applications</h3>
      <p>The technology can be used for:
      • Food packaging
      • Beverage cups
      • Shopping bags
      • Soap wrappers
      • Instant noodle seasonings</p>
      
      <h3>Environmental Benefits</h3>
      <p>Seaweed cultivation actually helps the environment by absorbing carbon dioxide and doesn't require fresh water, fertilizers, or pesticides. This makes it a truly sustainable alternative to traditional plastics.</p>
    `
  },
  {
    id: 6,
    title: "Plastic Pollution Linked to Coral Reef Decline in New Study",
    description: "Comprehensive research reveals direct correlation between plastic waste and coral reef degradation across the Pacific.",
    date: "2024-01-03",
    category: "Marine Life",
    readTime: "6 min read",
    content: `
      <h2>Devastating Impact</h2>
      <p>A new study published in Science Magazine reveals that plastic pollution is directly contributing to coral reef decline, with reefs showing up to 89% increase in disease when in contact with plastic debris.</p>
      
      <h3>Research Methodology</h3>
      <p>The study examined over 124,000 corals across 159 reefs in the Asia-Pacific region, documenting the presence of plastic debris and coral health indicators over a four-year period.</p>
      
      <h3>Key Findings</h3>
      <p>The research revealed:
      • Coral disease increases from 4% to 89% when in contact with plastic
      • Plastic debris causes physical wounds that become infection sites
      • Chemicals from plastic disrupt coral immune systems
      • Plastic blocks sunlight essential for coral photosynthesis</p>
      
      <h3>Future Predictions</h3>
      <p>Scientists estimate that plastic debris on coral reefs will increase by 40% over the next seven years if current trends continue, potentially causing irreversible damage to these vital ecosystems.</p>
    `
  },
  {
    id: 7,
    title: "Major Brands Commit to 100% Recyclable Packaging by 2025",
    description: "Leading consumer brands announce ambitious targets to eliminate plastic waste through innovative packaging solutions.",
    date: "2024-01-01",
    category: "Business",
    readTime: "4 min read",
    content: `
      <h2>Industry Transformation</h2>
      <p>Major consumer brands including Unilever, Nestlé, and Coca-Cola have committed to making 100% of their packaging recyclable, reusable, or compostable by 2025.</p>
      
      <h3>Innovative Solutions</h3>
      <p>Companies are investing in:
      • Plant-based packaging materials
      • Refillable container systems
      • Concentrated product formulas
      • Packaging-free products
      • Advanced recycling technologies</p>
      
      <h3>Consumer Response</h3>
      <p>Market research shows that 73% of consumers are willing to pay more for sustainable packaging, driving demand for eco-friendly alternatives across all product categories.</p>
      
      <h3>Challenges Ahead</h3>
      <p>Despite the commitments, challenges remain in maintaining product quality, ensuring cost-effectiveness, and developing infrastructure for new packaging systems.</p>
    `
  },
  {
    id: 8,
    title: "Plastic-Free Cities Initiative Gains Momentum Worldwide",
    description: "Over 50 cities across six continents join global movement to eliminate single-use plastics from municipal operations.",
    date: "2023-12-28",
    category: "Policy",
    readTime: "5 min read",
    content: `
      <h2>Global Movement</h2>
      <p>The Plastic-Free Cities Initiative has gained significant momentum, with over 50 cities worldwide committing to eliminate single-use plastics from their municipal operations.</p>
      
      <h3>Participating Cities</h3>
      <p>Major cities involved include:
      • San Francisco, USA
      • Vancouver, Canada
      • Mumbai, India
      • Lagos, Nigeria
      • Stockholm, Sweden
      • Melbourne, Australia</p>
      
      <h3>Implementation Strategies</h3>
      <p>Cities are adopting various approaches:
      • Banning plastic bags and straws
      • Implementing deposit return systems
      • Creating plastic-free zones
      • Supporting local businesses in transition
      • Educational campaigns for residents</p>
      
      <h3>Measurable Results</h3>
      <p>Early adopters report significant reductions in plastic waste, with San Francisco achieving a 72% reduction in plastic bag use since implementing its ban.</p>
    `
  },
  {
    id: 9,
    title: "AI-Powered Waste Sorting Revolutionizes Recycling Efficiency",
    description: "Machine learning technology dramatically improves plastic waste sorting accuracy, increasing recycling rates by 40%.",
    date: "2023-12-25",
    category: "Technology",
    readTime: "4 min read",
    content: `
      <h2>Smart Recycling</h2>
      <p>Advanced AI-powered waste sorting systems are revolutionizing recycling facilities, achieving 95% accuracy in identifying and separating different types of plastic waste.</p>
      
      <h3>Technology Overview</h3>
      <p>The systems use:
      • Computer vision to identify plastic types
      • Robotic arms for precise sorting
      • Machine learning algorithms that improve over time
      • Near-infrared spectroscopy for material identification</p>
      
      <h3>Impact on Recycling</h3>
      <p>Facilities using AI sorting report:
      • 40% increase in recycling rates
      • 60% reduction in contamination
      • 25% decrease in operational costs
      • Ability to process previously non-recyclable materials</p>
      
      <h3>Future Applications</h3>
      <p>The technology is being adapted for household use, with smart bins that can sort waste automatically, making recycling more accessible and efficient for consumers.</p>
    `
  },
  {
    id: 10,
    title: "Youth Climate Activists Launch Global Plastic-Free Challenge",
    description: "International coalition of young environmentalists mobilizes millions in month-long campaign to reduce plastic consumption.",
    date: "2023-12-22",
    category: "Activism",
    readTime: "3 min read",
    content: `
      <h2>Youth-Led Initiative</h2>
      <p>A coalition of young climate activists has launched the Global Plastic-Free Challenge, mobilizing over 2 million participants worldwide to reduce their plastic consumption for one month.</p>
      
      <h3>Challenge Components</h3>
      <p>Participants commit to:
      • Using reusable bags and water bottles
      • Avoiding single-use plastic items
      • Choosing products with minimal packaging
      • Documenting their journey on social media
      • Educating others about plastic pollution</p>
      
      <h3>Social Media Impact</h3>
      <p>The campaign has generated:
      • Over 10 million social media engagements
      • 500,000 plastic-free pledges
      • Participation from 80 countries
      • Support from major environmental organizations</p>
      
      <h3>Long-term Goals</h3>
      <p>Organizers aim to create lasting behavior change and influence policy decisions, demonstrating that collective action can drive meaningful environmental progress.</p>
    `
  }
];