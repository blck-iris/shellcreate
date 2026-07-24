export const researchStats = {
  shellWasteAnnual: "10–20 million tonnes",
  calciumCarbonateContent: "~98%",
  optimalCementReplacement: "5–15%",
  co2Reduction: "up to 36%",
  compressiveStrengthAt15: "Comparable to control mix",
  compressiveStrengthAt40: "30 MPa (meets building standards)",
  cementCo2PerTonne: "0.5–0.6 tonnes",
  constructionEmissions: "~27% of global CO2",
  opcGlobalEmissions: "7–8% of global total",
  densityReduction30: "2.27%",
  densityReduction40: "~10%",
  settingTimeIncrease: "30% initial",
  phRange: "12–13 (safe for steel)",
  waterAbsorptionReduction: "Improved with WOSP",
  freezeThawResistance: "Enhanced",
  tensileStrengthImprovement: "Higher than OPC concrete (at 4% replacement)",
};

export const shellTypes = [
  { name: "Oyster Shells", percentage: 45, color: "#0ea5e9", calcium: "96–98%" },
  { name: "Clam Shells", percentage: 25, color: "#22c55e", calcium: "94–96%" },
  { name: "Mussel Shells", percentage: 15, color: "#f59e0b", calcium: "92–95%" },
  { name: "Eggshells", percentage: 10, color: "#ec4899", calcium: "94%" },
  { name: "Other", percentage: 5, color: "#8b5cf6", calcium: "90–93%" },
];

export const wasteSources = [
  { name: "Restaurants", volume: 6230, unit: "kg", icon: "UtensilsCrossed" },
  { name: "Seafood Markets", volume: 3480, unit: "kg", icon: "Fish" },
  { name: "Bakeries", volume: 1920, unit: "kg", icon: "Cake" },
  { name: "Egg Processors", volume: 2110, unit: "kg", icon: "Egg" },
  { name: "Households", volume: 680, unit: "kg", icon: "Home" },
  { name: "Coastal Communities", volume: 1000, unit: "kg", icon: "Waves" },
];

export const processingSteps = [
  {
    step: 1,
    title: "Shell Waste Sources",
    description: "Shell waste collected from restaurants, seafood markets, bakeries, egg processors, households, and coastal communities.",
    icon: "Shell",
  },
  {
    step: 2,
    title: "Clean & Process",
    description: "Shells are cleaned, dried, crushed and graded into powder or granules rich in calcium carbonate (~98% CaCO₃).",
    icon: "Droplets",
  },
  {
    step: 3,
    title: "Use in Products",
    description: "Processed shells are used as a partial substitute in selected non-structural concrete products (blocks, pavers, tiles, panels).",
    icon: "Package",
  },
  {
    step: 4,
    title: "Construction Use",
    description: "Construction companies, developers and public projects use ShellCrete products for sustainable build solutions.",
    icon: "Building2",
  },
  {
    step: 5,
    title: "Trace & Verify with ShellPass",
    description: "ShellPass records the journey from waste source to final product, generating a digital material passport.",
    icon: "ClipboardCheck",
  },
];

export const impactMetrics = [
  {
    label: "Shell Waste Diverted From Dumping",
    value: "15,420",
    unit: "kg",
    change: "+18%",
    changeLabel: "vs Apr",
    icon: "CloudOff",
  },
  {
    label: "CO₂e Avoided (Estimated)",
    value: "22,450",
    unit: "kg",
    change: "+20%",
    changeLabel: "vs Apr",
    icon: "Leaf",
  },
  {
    label: "ShellCrete Products Produced",
    value: "6,210",
    unit: "units",
    change: "+15%",
    changeLabel: "vs Apr",
    icon: "Package",
  },
  {
    label: "Limestone Extraction Reduced",
    value: "12,350",
    unit: "kg",
    change: "+22%",
    changeLabel: "vs Apr",
    icon: "Mountain",
  },
];

export const products = [
  {
    name: "Paving Blocks",
    description: "Durable, slip-resistant blocks for walkways, patios and public spaces. 10–15% shell partial substitution.",
    specs: ["Compressive: 30+ MPa", "Slip-resistant", "Lightweight"],
    image: "/images/paving-blocks.jpg",
  },
  {
    name: "Bricks",
    description: "Partial shell-based calcium carbonate filler for non-load bearing bricks. Meets building standards at 40% replacement.",
    specs: ["Non-structural", "40% max replacement", "Eco-certified"],
    image: "/images/bricks.jpg",
  },
  {
    name: "Tiles",
    description: "Aesthetic, durable tiles for indoor and outdoor applications. Enhanced freeze-thaw resistance.",
    specs: ["Frost resistant", "Low water absorption", "Aesthetic finish"],
    image: "/images/tiles.jpg",
  },
  {
    name: "Precast Panels",
    description: "Lightweight, non-structural panels for partition walls and facades. Density reduced by up to 10%.",
    specs: ["Lightweight", "Non-structural", "Partition ready"],
    image: "/images/precast.jpg",
  },
];

export const researchPapers = [
  {
    title: "Strength and Microstructural Changes in Cementitious Composites Containing Waste Oyster Shell Powder",
    journal: "Buildings (MDPI)",
    year: 2023,
    keyFinding: "WOSP replacement <20% shows no significant difference in compressive strength. Optimal at 5% for construction use.",
    citation: "Yang et al., 2023",
    doi: "10.3390/buildings13123078",
  },
  {
    title: "The Substitution Effect of Fine Aggregate in Concrete with Oyster Shell",
    journal: "PMC / NCBI",
    year: 2024,
    keyFinding: "At 40% replacement, concrete achieves 30 MPa compressive strength — meeting building standards. Density reduced by ~10%.",
    citation: "Hong et al., 2024",
    doi: "PMC11679971",
  },
  {
    title: "Using Seashells to Cut Concrete's Carbon Emissions",
    journal: "Construction Materials",
    year: 2025,
    keyFinding: "Replacing cement with seashell powder reduced CO₂ emissions by up to 36%. At 15% replacement, strength remained comparable.",
    citation: "Azobuild, 2025",
    doi: "Construction Materials Journal",
  },
  {
    title: "Evaluation Studies on Capability of Crushed Oyster Shell Powder & Sisal Fibers",
    journal: "IJSART",
    year: 2024,
    keyFinding: "20% oyster powder + 3% sisal fiber achieved 42.72 MPa at 28 days — exceeding target mean strength for M30 concrete.",
    citation: "IJSART, 2024",
    doi: "IJSARTV10I11101501",
  },
  {
    title: "Calcination Analysis of CaCO₃ from Waste Oyster Shells for Partial Cement Replacement",
    journal: "SDHM / TechScience",
    year: 2025,
    keyFinding: "WOS contains ~98% CaCO₃. When substituted into cement, accelerates binding process and improves early-age strength.",
    citation: "TechScience, 2025",
    doi: "10.32604/sdhm",
  },
  {
    title: "Use of Seashell as Cement Replacement in Construction Material: A Review",
    journal: "Academia.edu",
    year: 2024,
    keyFinding: "Seashells can effectively replace 5–15% of cement. Seafood industry generates 10–20 million tonnes of shell waste annually.",
    citation: "Academia Review, 2024",
    doi: "122786594",
  },
];

export const dashboardData = {
  totalWaste: 15420,
  processed: 12350,
  products: 6210,
  co2Avoided: 22450,
  impactScore: 88,
  processingStatus: [
    { stage: "Collected", percentage: 100 },
    { stage: "Cleaned", percentage: 95 },
    { stage: "Dried", percentage: 90 },
    { stage: "Crushed/Graded", percentage: 85 },
  ],
  recentTransactions: [
    { buyer: "UrbanBuild Co.", amount: "2,400 kg", date: "May 28", type: "Purchased" },
    { buyer: "GreenConstruct Ltd.", amount: "1,750 kg", date: "May 25", type: "Purchased" },
    { buyer: "Coastal Developments", amount: "3,000 kg", date: "May 22", type: "Purchased" },
  ],
  productsInUse: [
    {
      name: "Paving Blocks",
      project: "Oceanview Walkway Project",
      location: "Malindi, Kenya",
      status: "Completed",
      shellType: "Oyster Shells",
      productId: "SC-2024-000123",
    },
  ],
};
