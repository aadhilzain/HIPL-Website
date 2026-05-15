// ═══════════════════════════════════════════════════════════════════
// SOLUTIONS DATABASE
// ═══════════════════════════════════════════════════════════════════

const SOLUTIONS = [
  {
    id: 'roofing',
    title: 'Roofing & Terraces',
    icon: '🏠',
    tagline: 'Complete waterproofing systems for every roof type',
    pageUrl: 'solutions-terrace-waterproofing.html',
    description: 'From flat concrete roofs to metal sheet roofing, our waterproofing systems provide long-lasting protection against water ingress, heat, and UV degradation. Elastomeric coatings with up to 350% elongation handle thermal movement without cracking.',
    challenges: [
      'Water pooling on flat roofs',
      'Thermal cracking from extreme temperature cycles',
      'UV degradation of conventional coatings',
      'Leakage at joints and penetrations'
    ],
    recommendedProducts: ['hardproof-coolcoat'],
    image: ''
  },
  {
    id: 'industrial-floors',
    title: 'Industrial Floors',
    icon: '🏭',
    tagline: 'Heavy-duty flooring for demanding environments',
    pageUrl: 'solution-industrial-flooring.html',
    description: 'Epoxy and polyurethane flooring systems engineered for warehouses, manufacturing plants, food processing units, and pharmaceutical facilities. Chemical resistant, easy to clean, and built to withstand heavy traffic and impact.',
    challenges: [
      'Heavy forklift and vehicle traffic',
      'Chemical spills and aggressive substances',
      'Hygiene and cleanroom requirements',
      'Concrete dusting and surface degradation'
    ],
    recommendedProducts: ['hardfloor-sl1000', 'hardfloor-mtp100'],
    image: ''
  },
  {
    id: 'basements',
    title: 'Basement Waterproofing',
    icon: '🏗️',
    tagline: 'Keep water out from below grade structures',
    pageUrl: 'solution-basement-waterproofing.html',
    description: 'Comprehensive waterproofing solutions for basements, retaining walls, and underground structures. Positive and negative side waterproofing systems that handle hydrostatic pressure and rising damp.',
    challenges: [
      'Hydrostatic water pressure',
      'Rising damp through concrete',
      'Construction joint leakage',
      'Difficult access for repairs after construction'
    ],
    recommendedProducts: ['hardproof-coolcoat'],
    image: ''
  },
  {
    id: 'facades',
    title: 'Facade Protection',
    icon: '🏢',
    tagline: 'Protect and beautify exterior walls',
    pageUrl: 'solution-protective-coatings.html',
    description: 'Weather-resistant coatings and sealers that protect building facades from rain penetration, pollution, and biological growth while maintaining breathability and aesthetic appearance.',
    challenges: [
      'Driving rain penetration',
      'Algae and fungal growth',
      'Pollution staining',
      'Thermal and structural cracking'
    ],
    recommendedProducts: ['paveguard-wb'],
    image: ''
  },
  {
    id: 'concrete-repair',
    title: 'Concrete Repair',
    icon: '🔧',
    tagline: 'Restore structural integrity to damaged concrete',
    pageUrl: 'solution-concrete-repair.html',
    description: 'Repair mortars, bonding agents, and protective coatings for rehabilitating deteriorated concrete structures. From micro-crack injection to full structural repair, our systems restore and protect.',
    challenges: [
      'Reinforcement corrosion and spalling',
      'Structural cracking and delamination',
      'Carbonation and chloride attack',
      'Aging infrastructure maintenance'
    ],
    recommendedProducts: [],
    image: ''
  },
  {
    id: 'bathroom-waterproofing',
    title: 'Bathroom Waterproofing',
    icon: '🚿',
    tagline: 'Stop seepage into adjacent rooms permanently',
    pageUrl: 'solution-bathroom-waterproofing.html',
    description: 'Flexible cementitious waterproofing for bathrooms, wet areas, balconies and kitchens. Applied under tiles. Bridges movement cracks. Lasts the life of the bathroom.',
    challenges: [
      'Seepage through tiles into adjoining walls',
      'Failed grout at floor-wall junctions',
      'Mould growth and dampness in adjacent rooms',
      'Structural movement cracking waterproof layer'
    ],
    recommendedProducts: [],
    image: ''
  },
  {
    id: 'water-tanks',
    title: 'Water Tanks & Pools',
    icon: '💧',
    tagline: 'Potable water safe. 15-year protection.',
    pageUrl: 'solution-water-tanks.html',
    description: 'Rigid cementitious waterproofing for overhead tanks, sumps, reservoirs, and swimming pools. Resists positive and negative hydrostatic pressure. Potable water approved after 28 days.',
    challenges: [
      'Water loss from leaking tanks and sumps',
      'Contamination risk from unsealed concrete',
      'Algae growth destroying concrete surface',
      'Construction joint failure under water pressure'
    ],
    recommendedProducts: [],
    image: ''
  },
  {
    id: 'sports-flooring',
    title: 'Sports Court Flooring',
    icon: '🎾',
    tagline: 'Consistent play. UV resistant. 8+ year life.',
    pageUrl: 'solution-sports-flooring.html',
    description: 'Acrylic sports court systems for tennis, basketball, badminton, and multi-sport facilities. Primer, basecoat, optional cushion, topcoat, and line marking. Designed for India\'s climate.',
    challenges: [
      'Inconsistent ball bounce from cracked or uneven surfaces',
      'UV fading of court colours within 2–3 years',
      'Slippery surfaces when wet causing player injuries',
      'Peeling from poor adhesion to concrete'
    ],
    recommendedProducts: [],
    image: ''
  },
  {
    id: 'decorative-concrete',
    title: 'Decorative Concrete',
    icon: '✨',
    tagline: 'Protect pavers. Enhance colour. Stop algae.',
    pageUrl: 'solution-decorative-concrete.html',
    description: 'PAVEGUARD sealer range for pavers, stamped concrete, driveways, and decorative floors. UV resistant, stain resistant, colour enhancing. Applied in hours. Protects for 5–7 years.',
    challenges: [
      'Monsoon algae growth on unprotected pavers',
      'Efflorescence and colour fading within 2 years',
      'Oil and tyre staining on driveways',
      'Joint erosion and weed growth'
    ],
    recommendedProducts: [],
    image: ''
  }
];

window.SOLUTIONS = SOLUTIONS;

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { SOLUTIONS };
}
