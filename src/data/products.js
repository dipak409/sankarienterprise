export const products = [
  {
    slug: 'steel-almirahs',
    name: 'Steel Almirahs',
    tagline: 'Secure storage that never sags.',
    icon: 'archive',
    category: 'Storage',
    featured: true,
    description:
      'Heavy-gauge steel almirahs with smooth-sliding shutters, adjustable shelving and lock options built for daily use. Powder-coated finishes resist rust, scratches and years of wear.',
    features: ['Custom-gauge steel body', 'Multi-point locking', 'Adjustable shelves', 'Custom sizes on request'],
  },
  {
    slug: 'steel-wardrobes',
    name: 'Steel Wardrobes',
    tagline: 'Sleek lines. Serious structure.',
    icon: 'wardrobe',
    category: 'Storage',
    featured: true,
    description:
      'Modern steel wardrobes with full-height hanging space, drawers and mirrors. Designed to stay square and silent — no warping, no termites, no creaking doors.',
    features: ['Full-height hanging', 'Soft-close doors', 'Optional mirror panel', 'Scratch-resistant finish'],
  },
  {
    slug: 'modular-kitchens',
    name: 'Steel Modular Kitchens',
    tagline: 'A kitchen that works as hard as you do.',
    icon: 'chef',
    category: 'Kitchen',
    featured: true,
    description:
      'Durable steel-made modular kitchens with smart storage, moisture-proof cabinets and easy-clean surfaces. Built layout-first, so every inch earns its place.',
    features: ['Moisture-proof carcass', 'Custom layout planning', 'Easy-clean surfaces', 'Soft-close hardware'],
  },
  {
    slug: 'wall-doors',
    name: 'Steel Wall Doors',
    tagline: 'Strength at every threshold.',
    icon: 'door',
    category: 'Doors',
    featured: true,
    description:
      'Steel doors engineered for security and longevity, with clean modern profiles, reinforced frames and a finish that holds up to weather and daily traffic.',
    features: ['Reinforced frame', 'Anti-rust coating', 'Heavy-duty hinges', 'Security lock options'],
  },
  {
    slug: 'study-tables',
    name: 'Study Tables',
    tagline: 'A solid base for focused work.',
    icon: 'table',
    category: 'Work',
    featured: true,
    description:
      'Steel study tables with generous worktops, cable management and rock-solid frames. Ideal for homes, hostels, coaching centres and offices.',
    features: ['Rigid steel frame', 'Scratch-safe top', 'Cable management', 'Compact & full-size options'],
  },
  {
    slug: 'showcases',
    name: 'Showcases',
    tagline: 'Display with confidence.',
    icon: 'showcase',
    category: 'Display',
    featured: true,
    description:
      'Steel showcases with glass fronts and adjustable shelving for shops, clinics and homes. Clean sightlines, secure locks and a premium finish.',
    features: ['Glass display front', 'Adjustable shelving', 'Secure locking', 'Custom widths'],
  },
  {
    slug: 'dressing-tables',
    name: 'Dressing Tables',
    tagline: 'Everyday elegance in steel.',
    icon: 'dressing',
    category: 'Bedroom',
    featured: false,
    description:
      'Steel dressing tables with mirror options, drawers and a slim profile that fits modern bedrooms without crowding them.',
    features: ['Mirror options', 'Smooth-glide drawers', 'Rust-resistant finish', 'Space-saving design'],
  },
  {
    slug: 'medical-hostel-beds',
    name: 'Medical & Hostel Beds',
    tagline: 'Built for rest and reliability.',
    icon: 'bed',
    category: 'Institutional',
    featured: false,
    description:
      'Strong steel beds for hospitals, hostels and dormitories — with optional rails, storage and stackable frames for high-use environments.',
    features: ['High load capacity', 'Optional side rails', 'Stackable frames', 'Easy-clean surfaces'],
  },
  {
    slug: 'racks',
    name: 'Storage Racks',
    tagline: 'Organised, from floor to ceiling.',
    icon: 'rack',
    category: 'Storage',
    featured: false,
    description:
      'Steel racks for shops, warehouses, kitchens and homes. Adjustable levels, stable frames and finishes that handle heavy, repeated loading.',
    features: ['Adjustable levels', 'Heavy load ratings', 'Custom spans', 'Powder-coated finish'],
  },
  {
    slug: 'service-lockers',
    name: 'Secure Service Lockers',
    tagline: 'Safe hands for your valuables.',
    icon: 'locker',
    category: 'Security',
    featured: false,
    description:
      'Secure service lockers for shops, offices, gyms and institutions. Individual locking compartments with a rugged steel body built for constant use.',
    features: ['Individual locks', 'Durable steel body', 'Multiple sizes', 'Custom compartment layouts'],
  },
]

export const categories = ['All', ...new Set(products.map((p) => p.category))]
