/* ═══════════════════════════════════════════════════════════════
   TDS/MSDS PRODUCT CONFIGURATION
   5 hero products complete. Add remaining using the skeleton below.
   ═══════════════════════════════════════════════════════════════ */

var TDS_PRODUCTS = {

  // ── HP410: HARDPROOF COOLCOAT ───────────────────────────────
  'hp410-coolcoat': {
    name: 'HARDPROOF COOLCOAT',
    category: 'Waterproofing · Elastomeric Coatings',
    description: 'High-build elastomeric waterproofing coating with heat-reflective pigments. Provides cool roof performance with 350% elongation for crack-bridging on concrete and masonry surfaces.',
    shortDesc: 'Elastomeric heat-reflective waterproofing for roofs and terraces',
    tds: {
      physicalProperties: {
        appearance: 'Smooth paste',
        colour: 'White / Light Grey / Custom tints',
        density: '1.35–1.45 kg/L',
        viscosity: '20,000–30,000 cP (Brookfield)',
        solidsContent: '62–65% by weight',
        voc: '< 50 g/L',
        flashPoint: 'Non-flammable (water-based)',
        ph: '8.0–9.5'
      },
      application: {
        coverage: '1.5–2.0 kg/m² for 2 coats (1.0–1.5 kg/m² per coat)',
        method: 'Brush, roller, or airless spray',
        coats: '2 coats minimum',
        substrateTemp: '5°C to 45°C',
        ambientTemp: '10°C to 40°C',
        humidity: '< 85% RH'
      },
      dryingTimes: {
        touchDry: '1–2 hours at 30°C',
        hardDry: '4–6 hours at 30°C',
        overcoat: 'Minimum 4 hours between coats',
        fullCure: '7 days',
        recoatWindow: '4–24 hours'
      },
      packaging: {
        sizes: '5 L, 10 L, 20 L, 50 L containers',
        shelfLife: '12 months in original sealed packaging',
        storage: 'Store in cool, dry conditions between 5°C and 40°C. Keep from freezing.'
      }
    },
    msds: {
      hazards: {
        classification: 'Not classified as hazardous under GHS',
        signalWord: 'None required',
        statements: 'Low hazard water-based formulation. Avoid eye contact.'
      },
      firstAid: {
        eyeContact: 'Flush thoroughly with water for 15 minutes. Seek medical advice if irritation persists.',
        skinContact: 'Wash with soap and water. No special treatment required.',
        inhalation: 'Move to fresh air. Product has minimal inhalation risk under normal use.',
        ingestion: 'Do not induce vomiting. Seek medical advice. Show this sheet to the physician.'
      },
      ppe: {
        eye: 'Safety glasses or goggles recommended',
        skin: 'Protective gloves (nitrile recommended), avoid prolonged skin contact',
        respiratory: 'Not required under normal ventilated conditions. Use P2 mask if spray applying in confined space.'
      },
      disposal: 'Allow product to dry fully before disposal. Dried material can be disposed as solid waste. Liquid waste — consult local regulations. Do not pour liquid into drains or watercourses.'
    }
  },

  // ── HC710: SBR-50 EPOXY PRIMER ─────────────────────────────
  'hc710-sbr50': {
    name: 'SBR-50 EPOXY PRIMER',
    category: 'Primers · SBR-Modified',
    description: 'SBR-modified bonding agent and primer for repair mortars, overlays, and waterproofing systems. Creates a high-adhesion interface between old concrete and new cementitious applications.',
    shortDesc: 'SBR bonding primer for concrete repair and overlay systems',
    tds: {
      physicalProperties: {
        appearance: 'Milky white liquid',
        colour: 'White (milky emulsion)',
        density: '1.02–1.05 kg/L',
        viscosity: '500–1,000 cP',
        solidsContent: '48–52% by weight',
        voc: '< 30 g/L',
        flashPoint: 'Non-flammable',
        ph: '7.0–8.5'
      },
      application: {
        coverage: 'Primer: 0.10–0.15 kg/m². Slurry coat: 0.3–0.5 kg/m² mixed with cement',
        method: 'Brush or roller for primer; trowel for slurry coat',
        coats: '1 primer coat + 1–2 slurry coats as required',
        substrateTemp: '10°C to 40°C',
        ambientTemp: '10°C to 40°C',
        humidity: 'Apply on damp (not wet) substrate'
      },
      dryingTimes: {
        touchDry: '30–60 minutes (must be tacky when overcoated)',
        hardDry: '2–4 hours',
        overcoat: 'Apply next coat while primer is still tacky',
        fullCure: '28 days (cementitious systems)',
        recoatWindow: 'Apply slurry coat before primer dries fully'
      },
      packaging: {
        sizes: '1 L, 5 L, 10 L, 20 L',
        shelfLife: '12 months in sealed packaging',
        storage: 'Protect from freezing. Store between 5°C and 35°C.'
      }
    },
    msds: {
      hazards: {
        classification: 'Not classified as hazardous',
        signalWord: 'None',
        statements: 'Mild irritant on prolonged skin contact.'
      },
      firstAid: {
        eyeContact: 'Flush with water for 15 minutes. Seek medical attention.',
        skinContact: 'Wash with soap and water. Moisturise if dry.',
        inhalation: 'Fresh air. No specific treatment needed.',
        ingestion: 'Rinse mouth. Seek medical advice if large amount swallowed.'
      },
      ppe: {
        eye: 'Safety glasses',
        skin: 'Nitrile gloves for extended handling',
        respiratory: 'Not required for normal use'
      },
      disposal: 'Allow to cure. Solid waste disposed per local regulations. Do not discharge liquid to waterways.'
    }
  },

  // ── HE400: 1K EPOXY TOPCOAT ────────────────────────────────
  'he400-1k-epoxy': {
    name: '1K EPOXY TOPCOAT',
    category: 'Flooring Systems · Epoxy Coatings',
    description: 'Single-component moisture-curing epoxy topcoat for industrial floors. Provides chemical resistance, abrasion resistance, and a hard-wearing finish without the complexity of two-component mixing.',
    shortDesc: 'Single-component epoxy topcoat for industrial and commercial floors',
    tds: {
      physicalProperties: {
        appearance: 'Smooth liquid',
        colour: 'Available in 12 standard colours + custom tints',
        density: '1.15–1.25 kg/L',
        viscosity: '1,500–3,000 cP',
        solidsContent: '70–75% by volume',
        voc: '< 150 g/L',
        flashPoint: '> 30°C',
        ph: 'N/A (solvent-based)'
      },
      application: {
        coverage: '0.12–0.18 kg/m² per coat (6–8 m²/L)',
        method: 'Short-pile roller (9mm), brush, or airless spray',
        coats: '2 coats over suitable primer',
        substrateTemp: '10°C to 35°C',
        ambientTemp: '10°C to 40°C',
        humidity: 'Substrate moisture < 5%'
      },
      dryingTimes: {
        touchDry: '4–6 hours at 25°C',
        hardDry: '12–16 hours at 25°C',
        overcoat: '12–24 hours',
        fullCure: '7 days at 25°C',
        recoatWindow: '12–48 hours'
      },
      packaging: {
        sizes: '4 L, 10 L, 20 L',
        shelfLife: '24 months in sealed containers',
        storage: 'Store in cool, dry area away from heat sources and ignition. 5°C–35°C.'
      }
    },
    msds: {
      hazards: {
        classification: 'Flammable liquid Category 3. Skin/eye irritant.',
        signalWord: 'Warning',
        statements: 'H226: Flammable liquid and vapour. H315: Causes skin irritation. H319: Causes serious eye irritation.'
      },
      firstAid: {
        eyeContact: 'Immediately flush with water for 15–20 minutes. Seek medical attention.',
        skinContact: 'Remove contaminated clothing. Wash with soap and water. Seek medical advice if irritation persists.',
        inhalation: 'Move to fresh air immediately. If breathing is difficult, seek medical assistance.',
        ingestion: 'Do not induce vomiting. Seek immediate medical attention. Show this MSDS.'
      },
      ppe: {
        eye: 'Chemical splash goggles required',
        skin: 'Nitrile or neoprene gloves, protective clothing',
        respiratory: 'Organic vapour respirator (P100) required in confined or poorly ventilated spaces'
      },
      disposal: 'Treat as flammable chemical waste. Use licensed contractor for disposal. Do not pour down drains. Comply with local environmental regulations.'
    }
  },

  // ── HE500: MARINE EPOXY 2K ──────────────────────────────────
  'he500-marine-epoxy': {
    name: 'MARINE EPOXY 2K',
    category: 'Industrial Coatings · Marine',
    description: 'Two-component high-performance epoxy for marine, offshore, and chemical plant environments. Outstanding resistance to saltwater, acids, alkalis, and continuous immersion. Mix ratio 3:1 by weight.',
    shortDesc: 'Two-component epoxy for marine and chemical environments',
    tds: {
      physicalProperties: {
        appearance: 'Part A: Viscous liquid | Part B: Low viscosity hardener',
        colour: 'Grey, Red Oxide, White, Black (custom on request)',
        density: '1.40–1.50 kg/L (mixed)',
        viscosity: '8,000–12,000 cP (mixed)',
        solidsContent: '98–99% by volume',
        voc: '< 50 g/L',
        flashPoint: '> 60°C',
        ph: 'N/A'
      },
      application: {
        coverage: '0.25–0.35 kg/m² per coat (250–300 micron DFT)',
        method: 'Mix 3:1 (Part A:Part B) by weight. Use within 60 min pot life. Brush, roller, or spray.',
        coats: '2 coats over blast-cleaned or primed substrate',
        substrateTemp: '10°C to 35°C. Min 3°C above dew point.',
        ambientTemp: '10°C to 40°C',
        humidity: 'Below 85% RH'
      },
      dryingTimes: {
        touchDry: '6–8 hours at 25°C',
        hardDry: '18–24 hours at 25°C',
        overcoat: 'Minimum 18 hours, maximum 5 days',
        fullCure: '14 days for full chemical resistance',
        recoatWindow: '18 hours – 5 days. Abrade if overcoat window exceeded.'
      },
      packaging: {
        sizes: '4 L kit (3+1), 16 L kit (12+4)',
        shelfLife: '24 months in original sealed containers',
        storage: 'Store between 10°C and 30°C. Keep containers sealed when not in use.'
      }
    },
    msds: {
      hazards: {
        classification: 'Part A: Skin sensitiser Cat 1, Eye irritant Cat 2A. Part B: Corrosive.',
        signalWord: 'Danger',
        statements: 'H317: May cause allergic skin reaction. H318: Causes serious eye damage. H332: Harmful if inhaled.'
      },
      firstAid: {
        eyeContact: 'Immediately flush with copious water for minimum 20 minutes. Seek immediate medical attention.',
        skinContact: 'Remove clothing. Wash with soap and water thoroughly. Seek medical advice; epoxy can cause sensitisation.',
        inhalation: 'Remove to fresh air. If symptoms persist, seek medical attention.',
        ingestion: 'Do not induce vomiting. Seek immediate medical attention. Do not give anything by mouth.'
      },
      ppe: {
        eye: 'Chemical splash goggles or full face shield required',
        skin: 'Full chemical-resistant gloves (neoprene or butyl rubber), long sleeves, protective suit',
        respiratory: 'Air-purifying respirator with organic vapour / P100 combination cartridge'
      },
      disposal: 'Cure all waste before disposal. Cured material is non-hazardous solid waste. Uncured material must be disposed via licensed hazardous waste contractor. Comply with all local regulations.'
    }
  },

  // ── AS-EMU: ALLSPACE EMULSION ──────────────────────────────
  'as-emu': {
    name: 'ALLSPACE EMULSION',
    category: 'Architectural Coatings · Interior / Exterior',
    description: 'Premium interior/exterior emulsion paint with advanced binder technology. Excellent coverage, scrub resistance, and colour retention. Suitable for all concrete, masonry, and plastered surfaces.',
    shortDesc: 'Premium acrylic emulsion for interior and exterior masonry',
    tds: {
      physicalProperties: {
        appearance: 'Smooth creamy liquid',
        colour: 'White base + 2,000+ tint shades available',
        density: '1.30–1.40 kg/L',
        viscosity: '10,000–18,000 cP',
        solidsContent: '55–58% by volume',
        voc: '< 10 g/L (Interior) / < 30 g/L (Exterior)',
        flashPoint: 'Non-flammable',
        ph: '8.0–9.5'
      },
      application: {
        coverage: '10–14 m²/L per coat (depending on substrate)',
        method: 'Brush, roller, or airless spray. Dilute up to 10% with water if required.',
        coats: '1 primer coat + 2 finish coats recommended',
        substrateTemp: '10°C to 45°C',
        ambientTemp: '10°C to 40°C',
        humidity: '< 85% RH. Do not apply if rain expected within 4 hours.'
      },
      dryingTimes: {
        touchDry: '30–45 minutes at 30°C',
        hardDry: '2 hours at 30°C',
        overcoat: 'Minimum 2 hours',
        fullCure: '14 days',
        recoatWindow: '2–24 hours'
      },
      packaging: {
        sizes: '1 L, 4 L, 10 L, 20 L',
        shelfLife: '24 months in sealed original container',
        storage: 'Store in cool, dry conditions. Protect from freezing. 5°C–40°C.'
      }
    },
    msds: {
      hazards: {
        classification: 'Not classified as hazardous under GHS',
        signalWord: 'None required',
        statements: 'Non-hazardous water-based formulation under normal use conditions.'
      },
      firstAid: {
        eyeContact: 'Flush with water for 10–15 minutes. Seek medical advice if irritation persists.',
        skinContact: 'Wash with soap and water. No special treatment required.',
        inhalation: 'Move to fresh air. Very low inhalation risk.',
        ingestion: 'Rinse mouth. Seek medical advice if large quantities swallowed.'
      },
      ppe: {
        eye: 'Safety glasses recommended',
        skin: 'Gloves optional for prolonged handling',
        respiratory: 'Not required under normal conditions'
      },
      disposal: 'Dried paint is non-hazardous solid waste. Dispose liquid waste per local regulations. Do not dispose in waterways or storm drains.'
    }
  }

  /* ── SKELETON FOR REMAINING PRODUCTS ────────────────────────
  'PRODUCT-ID': {
    name: 'PRODUCT NAME',
    category: 'Category · Subcategory',
    description: '[Full product description]',
    shortDesc: '[Short description]',
    tds: {
      physicalProperties: {
        appearance: '[FILL]',
        colour: '[FILL]',
        density: '[FILL]',
        viscosity: '[FILL]',
        solidsContent: '[FILL]',
        voc: '[FILL]',
        flashPoint: '[FILL]'
      },
      application: {
        coverage: '[FILL]',
        method: '[FILL]',
        coats: '[FILL]',
        substrateTemp: '[FILL]',
        ambientTemp: '[FILL]',
        humidity: '[FILL]'
      },
      dryingTimes: {
        touchDry: '[FILL]',
        hardDry: '[FILL]',
        overcoat: '[FILL]',
        fullCure: '[FILL]'
      },
      packaging: {
        sizes: '[FILL]',
        shelfLife: '[FILL]',
        storage: '[FILL]'
      }
    },
    msds: {
      hazards: { classification: '[FILL]', signalWord: '[FILL]', statements: '[FILL]' },
      firstAid: {
        eyeContact: '[FILL]',
        skinContact: '[FILL]',
        inhalation: '[FILL]',
        ingestion: '[FILL]'
      },
      ppe: { eye: '[FILL]', skin: '[FILL]', respiratory: '[FILL]' },
      disposal: '[FILL]'
    }
  },
  ─────────────────────────────────────────────────────────── */

};
