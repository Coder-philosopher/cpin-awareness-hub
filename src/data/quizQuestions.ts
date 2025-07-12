export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "How long does it take for a plastic bottle to decompose?",
    options: ["10 years", "50 years", "100 years", "450 years"],
    correctAnswer: 3,
    explanation: "Plastic bottles can take up to 450 years to decompose, making them one of the most persistent forms of pollution."
  },
  {
    id: 2,
    question: "What percentage of plastic waste is recycled globally?",
    options: ["50%", "30%", "15%", "9%"],
    correctAnswer: 3,
    explanation: "Only about 9% of all plastic waste ever produced has been recycled, highlighting the need for better waste management systems."
  },
  {
    id: 3,
    question: "How much plastic enters the ocean every year?",
    options: ["1 million tons", "8 million tons", "15 million tons", "25 million tons"],
    correctAnswer: 1,
    explanation: "Approximately 8 million tons of plastic waste enters our oceans annually, equivalent to dumping a garbage truck of plastic every minute."
  },
  {
    id: 4,
    question: "Which country produces the most plastic waste?",
    options: ["United States", "China", "India", "Indonesia"],
    correctAnswer: 0,
    explanation: "The United States generates the most plastic waste per capita, though China produces the most in absolute terms."
  },
  {
    id: 5,
    question: "What is microplastic?",
    options: [
      "Plastic smaller than 5mm",
      "Plastic smaller than 1cm", 
      "Plastic smaller than 1mm",
      "Any plastic in the ocean"
    ],
    correctAnswer: 0,
    explanation: "Microplastics are plastic particles smaller than 5mm that can be found in our food, water, and even the air we breathe."
  },
  {
    id: 6,
    question: "Which marine animal is most affected by plastic pollution?",
    options: ["Dolphins", "Sea turtles", "Whales", "All marine life equally"],
    correctAnswer: 3,
    explanation: "Plastic pollution affects all marine life, with over 700 species documented to have been affected by marine debris."
  },
  {
    id: 7,
    question: "What is the Great Pacific Garbage Patch?",
    options: [
      "A recycling facility",
      "A collection of marine debris",
      "A type of plastic",
      "An environmental organization"
    ],
    correctAnswer: 1,
    explanation: "The Great Pacific Garbage Patch is a collection of marine debris in the North Pacific Ocean, largely composed of plastics."
  },
  {
    id: 8,
    question: "Which type of plastic is most commonly found in ocean waste?",
    options: ["Plastic bags", "Plastic bottles", "Fishing gear", "Food packaging"],
    correctAnswer: 2,
    explanation: "Abandoned fishing gear, also known as 'ghost gear,' makes up a significant portion of ocean plastic pollution."
  },
  {
    id: 9,
    question: "What percentage of seabirds have plastic in their stomachs?",
    options: ["25%", "50%", "75%", "90%"],
    correctAnswer: 3,
    explanation: "Studies show that about 90% of seabirds have plastic in their stomachs, and this number is expected to rise to 99% by 2050."
  },
  {
    id: 10,
    question: "Which country was the first to ban single-use plastic bags?",
    options: ["Sweden", "Bangladesh", "Kenya", "France"],
    correctAnswer: 1,
    explanation: "Bangladesh was the first country to ban single-use plastic bags in 2002, following severe flooding linked to plastic waste blocking drainage systems."
  },
  {
    id: 11,
    question: "What is the circular economy approach to plastic?",
    options: [
      "Burning plastic for energy",
      "Burying plastic in landfills", 
      "Reducing, reusing, and recycling plastic",
      "Exporting plastic waste to other countries"
    ],
    correctAnswer: 2,
    explanation: "The circular economy approach focuses on reducing plastic use, reusing items, and recycling materials to create a closed-loop system."
  },
  {
    id: 12,
    question: "How many plastic bags does the average person use per year?",
    options: ["50", "150", "300", "500"],
    correctAnswer: 2,
    explanation: "The average person uses approximately 300 plastic bags per year, most of which are used for just a few minutes but persist in the environment for centuries."
  },
  {
    id: 13,
    question: "What is bioplastic?",
    options: [
      "Plastic made from biological sources",
      "Plastic that biodegrades quickly",
      "Plastic found in living organisms",
      "Both A and B"
    ],
    correctAnswer: 3,
    explanation: "Bioplastic can refer to plastics made from renewable biological sources and/or plastics that are biodegradable or compostable."
  },
  {
    id: 14,
    question: "Which industry is the largest consumer of plastic?",
    options: ["Automotive", "Construction", "Packaging", "Electronics"],
    correctAnswer: 2,
    explanation: "The packaging industry is the largest consumer of plastic, accounting for about 36% of global plastic production."
  },
  {
    id: 15,
    question: "What happens to plastic in the human body?",
    options: [
      "It is digested normally",
      "It accumulates in tissues",
      "It is immediately excreted",
      "It dissolves in stomach acid"
    ],
    correctAnswer: 1,
    explanation: "Microplastics can accumulate in human tissues, including the lungs, liver, and placenta, with potential health implications still being studied."
  },
  {
    id: 16,
    question: "Which country recycles the most plastic per capita?",
    options: ["Germany", "Japan", "South Korea", "Norway"],
    correctAnswer: 0,
    explanation: "Germany has one of the highest plastic recycling rates per capita, thanks to comprehensive waste management systems and strong environmental policies."
  },
  {
    id: 17,
    question: "What is 'plastic-free July'?",
    options: [
      "A month when plastic production stops",
      "An awareness campaign to reduce plastic use",
      "A recycling initiative",
      "A government policy"
    ],
    correctAnswer: 1,
    explanation: "Plastic Free July is a global movement that encourages people to reduce their plastic consumption for one month to raise awareness about plastic pollution."
  },
  {
    id: 18,
    question: "How many times can plastic typically be recycled?",
    options: ["Once", "2-3 times", "5-7 times", "Indefinitely"],
    correctAnswer: 1,
    explanation: "Most plastics can only be recycled 2-3 times before the quality degrades too much for further recycling, unlike materials like glass or aluminum."
  },
  {
    id: 19,
    question: "What is the main component of plastic?",
    options: ["Carbon dioxide", "Petroleum", "Water", "Sand"],
    correctAnswer: 1,
    explanation: "Most plastics are made from petroleum (oil) and natural gas, making them fossil fuel-based products that contribute to climate change."
  },
  {
    id: 20,
    question: "Which region has the highest concentration of ocean plastic?",
    options: ["Atlantic Ocean", "Pacific Ocean", "Indian Ocean", "Arctic Ocean"],
    correctAnswer: 1,
    explanation: "The Pacific Ocean contains the highest concentration of plastic pollution, including the infamous Great Pacific Garbage Patch."
  },
  {
    id: 21,
    question: "What is the term for plastics breaking down into smaller pieces?",
    options: ["Biodegradation", "Photodegradation", "Fragmentation", "Dissolution"],
    correctAnswer: 2,
    explanation: "Plastic fragmentation occurs when larger plastic items break down into smaller pieces due to UV radiation, wave action, and other environmental factors."
  },
  {
    id: 22,
    question: "How much plastic has been produced since the 1950s?",
    options: ["5 billion tons", "9 billion tons", "15 billion tons", "25 billion tons"],
    correctAnswer: 1,
    explanation: "Over 9 billion tons of plastic have been produced since the 1950s, with production rates accelerating dramatically in recent decades."
  },
  {
    id: 23,
    question: "What percentage of plastic packaging is used only once?",
    options: ["30%", "50%", "70%", "95%"],
    correctAnswer: 3,
    explanation: "About 95% of plastic packaging is used only once before being discarded, representing a massive waste of resources and materials."
  },
  {
    id: 24,
    question: "Which alternative to plastic bags is most environmentally friendly?",
    options: ["Paper bags", "Cotton bags", "Jute bags", "Reusable polypropylene bags"],
    correctAnswer: 2,
    explanation: "Jute bags have the lowest environmental impact when used multiple times, as jute is a sustainable crop that requires minimal resources to grow."
  },
  {
    id: 25,
    question: "What is extended producer responsibility (EPR)?",
    options: [
      "Making consumers responsible for waste",
      "Making producers responsible for product lifecycle",
      "Extending product warranties",
      "Increasing production quotas"
    ],
    correctAnswer: 1,
    explanation: "EPR makes producers responsible for the entire lifecycle of their products, including disposal and recycling, incentivizing more sustainable design."
  },
  {
    id: 26,
    question: "Which country has banned the most single-use plastics?",
    options: ["Canada", "India", "France", "Kenya"],
    correctAnswer: 1,
    explanation: "India has implemented some of the most comprehensive bans on single-use plastics, prohibiting 19 categories of single-use plastic items."
  },
  {
    id: 27,
    question: "What is the main challenge in plastic recycling?",
    options: [
      "Lack of technology",
      "Cost of recycling",
      "Contamination and sorting",
      "Consumer awareness"
    ],
    correctAnswer: 2,
    explanation: "Contamination and the difficulty of sorting different types of plastics remain the biggest challenges in effective plastic recycling."
  },
  {
    id: 28,
    question: "How long do plastic microfibers from clothing persist in the environment?",
    options: ["1 year", "10 years", "100 years", "1000+ years"],
    correctAnswer: 3,
    explanation: "Synthetic microfibers from clothing can persist in the environment for over 1000 years, accumulating in marine ecosystems and food chains."
  },
  {
    id: 29,
    question: "What percentage of global greenhouse gas emissions come from plastic production?",
    options: ["1%", "3.4%", "7%", "12%"],
    correctAnswer: 1,
    explanation: "Plastic production accounts for approximately 3.4% of global greenhouse gas emissions, contributing significantly to climate change."
  },
  {
    id: 30,
    question: "Which innovation shows the most promise for addressing plastic pollution?",
    options: [
      "Plastic-eating enzymes",
      "Ocean cleanup systems",
      "Biodegradable alternatives",
      "All of the above"
    ],
    correctAnswer: 3,
    explanation: "A combination of plastic-eating enzymes, ocean cleanup technologies, and biodegradable alternatives offers the most comprehensive approach to addressing plastic pollution."
  }
];

export const getRandomQuestions = (count: number = 10): QuizQuestion[] => {
  const shuffled = [...quizQuestions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};