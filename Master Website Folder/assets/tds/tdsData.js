(function () {
  'use strict';

  function joinList(items) {
    return items.map(function (item) {
      return '<li>' + item + '</li>';
    }).join('');
  }

  function joinRows(rows) {
    return rows.map(function (row) {
      return '<tr><th>' + row[0] + '</th><td>' + row[1] + '</td></tr>';
    }).join('');
  }

  function createTds(config) {
    return `
      <div class="tds-document">
        <div class="tds-topbar">
          <div>
            <p class="tds-brand">HARDEX INDIA</p>
            <p class="tds-subtitle">Technical Data Sheet</p>
          </div>
          <div class="tds-code-block">
            <span class="tds-code-label">Product Code</span>
            <strong>${config.code}</strong>
          </div>
        </div>

        <h1>${config.name}</h1>
        <p class="tds-lead">${config.summary}</p>

        <div class="tds-meta-grid">
          <div class="tds-meta-card">
            <h2>Product Description</h2>
            <p>${config.description}</p>
          </div>
          <div class="tds-meta-card">
            <h2>Recommended Use</h2>
            <p>${config.application}</p>
          </div>
        </div>

        <h2>Key Features</h2>
        <ul>
          ${joinList(config.features)}
        </ul>

        <h2>Technical Data</h2>
        <table>
          <tbody>
            ${joinRows(config.technicalData)}
          </tbody>
        </table>

        <h2>Application Guide</h2>
        <table>
          <tbody>
            ${joinRows(config.applicationGuide)}
          </tbody>
        </table>

        <h2>Suitable Substrates</h2>
        <ul>
          ${joinList(config.substrates)}
        </ul>

        <h2>Packaging And Storage</h2>
        <table>
          <tbody>
            ${joinRows(config.packaging)}
          </tbody>
        </table>

        <h2>Important Notes</h2>
        <ul>
          ${joinList(config.notes)}
        </ul>

        <div class="tds-footer-note">
          <h4>Disclaimer</h4>
          <p>${config.disclaimer}</p>
        </div>
      </div>
    `;
  }

  var commonDisclaimer = 'The information contained in this document is based on present knowledge and practical experience. Final product selection, substrate testing, and suitability for the intended use remain the responsibility of the applicator and project owner.';

  var documents = {
    'hardfloor-sl1000': createTds({
      code: 'HARDFLOOR-SL1000',
      name: 'HARDFLOOR SL1000',
      summary: 'Self-leveling epoxy flooring system for smooth, seamless industrial and commercial floor finishes.',
      description: 'HARDFLOOR SL1000 is a high-build self-leveling epoxy floor system designed to create dense, non-porous, easy-to-clean surfaces with a uniform gloss finish.',
      application: 'Clean rooms, electronics plants, showrooms, assembly areas, laboratories, and commercial interiors requiring a seamless floor.',
      features: [
        'Creates a smooth and level finish with excellent aesthetics.',
        'Provides durable resistance against dusting, abrasion, and routine chemical exposure.',
        'Forms a seamless surface that supports easy cleaning and hygiene control.',
        'Suitable for medium to heavy foot traffic and light wheeled movement.'
      ],
      technicalData: [
        ['Appearance', 'Self-leveling epoxy flooring compound'],
        ['Finish', 'Smooth, seamless, gloss finish'],
        ['Recommended Thickness', '1 to 3 mm'],
        ['Coverage', '1.2 to 1.5 kg/m² per mm thickness'],
        ['Category', 'Flooring Systems / Self-Leveling Epoxy'],
        ['Color', 'Standard industrial shades on request']
      ],
      applicationGuide: [
        ['Surface Preparation', 'Concrete substrate should be clean, sound, dry to touch, and free from laitance, oil, grease, and loose particles.'],
        ['Primer', 'Prime with compatible epoxy primer before application.'],
        ['Mixing', 'Mix full units at low speed until a uniform blend is achieved.'],
        ['Application', 'Pour and spread with notched trowel, then roll with spike roller to release entrapped air.'],
        ['Curing', 'Protect from dust, moisture, and traffic until sufficiently cured.']
      ],
      substrates: [
        'Prepared cement concrete floors',
        'Industrial screeds and repair mortars',
        'Interior floors requiring smooth epoxy topping'
      ],
      packaging: [
        ['Supply Format', 'Multi-component epoxy flooring system'],
        ['Storage', 'Store in unopened containers under cool and dry covered conditions'],
        ['Shelf Life', 'Use within manufacturer-recommended storage period']
      ],
      notes: [
        'Do not apply on weak or contaminated substrates.',
        'Application should be planned within the specified pot life.',
        'Product performance depends on proper substrate preparation and thickness control.'
      ],
      disclaimer: commonDisclaimer
    }),
    'hf100-ep100': createTds({
      code: 'HF100-EP100',
      name: 'HARDFLOOR EP100',
      summary: 'Industrial epoxy primer for floor coating systems requiring secure bond development on concrete substrates.',
      description: 'HARDFLOOR EP100 is a two-component epoxy primer used below epoxy and polyurethane floor systems to improve adhesion, seal porous concrete, and support long-term coating performance.',
      application: 'Primer coat for epoxy flooring systems, polyurethane flooring systems, and prepared cementitious floors in industrial and commercial environments.',
      features: [
        'Promotes strong adhesion between prepared concrete and subsequent coats.',
        'Helps seal porous surfaces and reduce pinholes in top layers.',
        'Supports durable industrial floor build-ups.',
        'Compatible with multiple resin floor system configurations.'
      ],
      technicalData: [
        ['Appearance', 'Low viscosity epoxy primer'],
        ['Coverage', '0.15 to 0.20 kg/m²'],
        ['Category', 'Flooring Systems / Epoxy Primers'],
        ['Typical Use', 'Base primer for epoxy and PU systems'],
        ['Substrate', 'Prepared concrete and cementitious screeds'],
        ['Finish', 'Transparent to lightly tinted primer film']
      ],
      applicationGuide: [
        ['Surface Preparation', 'Mechanically prepare the substrate and remove dust, laitance, oil, and contaminants.'],
        ['Mixing', 'Mix all components thoroughly using a slow-speed drill and paddle.'],
        ['Application', 'Apply evenly by roller, brush, or squeegee to achieve a continuous film.'],
        ['Recoat Window', 'Apply the next layer after the primer becomes tack-free and within the recommended overcoating interval.'],
        ['Curing', 'Protect from moisture and contamination during cure.']
      ],
      substrates: [
        'Concrete floors',
        'Cementitious screeds',
        'Prepared industrial substrates compatible with epoxy primers'
      ],
      packaging: [
        ['Supply Format', 'Two-component epoxy primer'],
        ['Storage', 'Keep sealed and stored under dry shaded conditions'],
        ['Shelf Life', 'Best used within standard resin product shelf life']
      ],
      notes: [
        'Not intended as a final wear surface.',
        'Ensure substrate moisture and condition are suitable for the selected system.',
        'Apply only after confirming surface soundness and cleanliness.'
      ],
      disclaimer: commonDisclaimer
    }),
    'hf110-ep-sb': createTds({
      code: 'HF110-EP-SB',
      name: 'HARDFLOOR EP SB',
      summary: 'Solvent-based epoxy primer and sealer for industrial flooring systems where rapid surface wetting is required.',
      description: 'HARDFLOOR EP SB is a solvent-based epoxy primer formulated for improved substrate wetting on dense or difficult prepared floors prior to subsequent resin flooring layers.',
      application: 'Industrial floor priming, concrete sealing, and base preparation for resin floor systems in workshops, production areas, and service zones.',
      features: [
        'Improves wetting of mechanically prepared concrete surfaces.',
        'Supports adhesion of follow-on epoxy build coats and toppings.',
        'Helps reduce substrate porosity and uneven absorption.',
        'Suitable for controlled industrial application conditions.'
      ],
      technicalData: [
        ['Appearance', 'Solvent-based epoxy primer'],
        ['Coverage', '0.12 to 0.18 kg/m²'],
        ['Category', 'Flooring Systems / Primers'],
        ['Application Method', 'Roller or brush application'],
        ['Typical Use', 'Primer and sealer for resin floor systems'],
        ['Finish', 'Thin sealing primer coat']
      ],
      applicationGuide: [
        ['Surface Preparation', 'Prepare surface by grinding or shot blasting and remove all contaminants.'],
        ['Mixing', 'Mix components thoroughly before use.'],
        ['Application', 'Apply a uniform coat without ponding.'],
        ['Ventilation', 'Ensure adequate ventilation during application and cure.'],
        ['Overcoating', 'Apply subsequent coat within the recommended time window.']
      ],
      substrates: [
        'Prepared concrete floors',
        'Cementitious industrial substrates',
        'Dense floors requiring primer sealing'
      ],
      packaging: [
        ['Supply Format', 'Two-component solvent-based epoxy system'],
        ['Storage', 'Store in closed containers away from heat and direct sunlight'],
        ['Shelf Life', 'Use within recommended storage period']
      ],
      notes: [
        'Use with appropriate ventilation and jobsite safety controls.',
        'Do not apply on contaminated or unsound surfaces.',
        'Confirm compatibility with the full flooring build-up before use.'
      ],
      disclaimer: commonDisclaimer
    }),
    'hf120-ep100': createTds({
      code: 'HF120-EP100',
      name: 'HARDFLOOR EP100 HB',
      summary: 'High-build epoxy base coat for resin flooring systems requiring better filling and film build on prepared concrete.',
      description: 'HARDFLOOR EP100 HB is a heavier-bodied epoxy intermediate coat intended to improve build, substrate filling, and system integrity prior to final flooring layers.',
      application: 'Base build coat below self-leveling systems, epoxy coatings, and filled resin floor applications.',
      features: [
        'Provides higher film build than standard primer coats.',
        'Helps level minor surface texture before the final finish.',
        'Suitable as part of multi-layer industrial flooring systems.',
        'Contributes to overall durability of the installed floor.'
      ],
      technicalData: [
        ['Appearance', 'High-build epoxy intermediate coat'],
        ['Coverage', '0.25 to 0.35 kg/m²'],
        ['Category', 'Flooring Systems / Base Coats'],
        ['Function', 'Build coat and pore-filling layer'],
        ['Finish', 'Uniform intermediate resin film'],
        ['Typical Use', 'Underlayment layer in epoxy floor systems']
      ],
      applicationGuide: [
        ['Surface Preparation', 'Apply only over sound, primed, and contamination-free substrate.'],
        ['Mixing', 'Blend all components uniformly with slow-speed mechanical mixing.'],
        ['Application', 'Spread by squeegee or trowel and back-roll where required.'],
        ['System Build', 'Broadcast filler or aggregate if specified for the system.'],
        ['Curing', 'Allow sufficient cure before applying finish coats.']
      ],
      substrates: [
        'Primed concrete floors',
        'Epoxy flooring build-up systems',
        'Industrial and commercial floor substrates'
      ],
      packaging: [
        ['Supply Format', 'Multi-component epoxy base coat'],
        ['Storage', 'Store in dry covered conditions in original containers'],
        ['Shelf Life', 'Use within normal shelf-life period for resin systems']
      ],
      notes: [
        'Use only as part of a defined floor build-up.',
        'Temperature and substrate condition will influence working time.',
        'Maintain recommended layer thickness for best results.'
      ],
      disclaimer: commonDisclaimer
    }),
    'hf130-mtp100': createTds({
      code: 'HF130-MTP100',
      name: 'HARDFLOOR MTP100',
      summary: 'Moisture-tolerant epoxy primer for damp concrete and high-humidity floor installation conditions.',
      description: 'HARDFLOOR MTP100 is an epoxy primer designed for use over concrete substrates where residual dampness or elevated humidity would challenge conventional resin primers.',
      application: 'New concrete, damp floor slabs, refurbishment projects with high humidity, and industrial floors where moisture tolerance is essential.',
      features: [
        'Designed for use on damp concrete conditions within project limits.',
        'Supports adhesion where conventional primers may fail.',
        'Useful for time-sensitive projects on recently cast or humid substrates.',
        'Compatible with industrial resin flooring systems.'
      ],
      technicalData: [
        ['Appearance', 'Moisture-tolerant epoxy primer'],
        ['Coverage', '0.15 to 0.20 kg/m²'],
        ['Category', 'Flooring Systems / Moisture Tolerant'],
        ['Typical Substrate Moisture', 'Suitable for damp concrete conditions as specified by the system'],
        ['Application', 'Roller, brush, or squeegee'],
        ['Function', 'Primer and moisture-tolerant bonding layer']
      ],
      applicationGuide: [
        ['Surface Preparation', 'Prepare substrate to a clean and sound profile free from standing water and contaminants.'],
        ['Mixing', 'Mix components fully before application.'],
        ['Application', 'Apply uniformly to ensure complete wetting of the prepared substrate.'],
        ['Follow-On Coat', 'Apply build or finish coats within the approved recoat period.'],
        ['Curing', 'Protect from contamination until cured.']
      ],
      substrates: [
        'Damp concrete floors',
        'High-humidity industrial flooring projects',
        'Prepared cement-based substrates'
      ],
      packaging: [
        ['Supply Format', 'Two-component moisture-tolerant epoxy primer'],
        ['Storage', 'Store in a cool dry area in unopened packs'],
        ['Shelf Life', 'Use within standard shelf-life period']
      ],
      notes: [
        'Do not apply over standing water or weak surface laitance.',
        'Confirm substrate moisture condition against project specification.',
        'This product is intended for trained flooring applicators.'
      ],
      disclaimer: commonDisclaimer
    }),
    'hf200-erc150': createTds({
      code: 'HF200-ERC150',
      name: 'HARDFLOOR ERC150',
      summary: 'Solvent-based epoxy roller coating for walls and vertical surfaces in clean industrial environments.',
      description: 'HARDFLOOR ERC150 is a hard-wearing epoxy wall coating formulated for hygienic and easy-to-clean vertical surfaces in industrial, food, and pharmaceutical spaces.',
      application: 'Industrial walls, clean rooms, food processing plants, utility corridors, and pharmaceutical interiors.',
      features: [
        'Provides a washable, durable, and chemically resistant wall finish.',
        'Improves hygiene and cleanability in controlled environments.',
        'Forms a sealed surface with good visual uniformity.',
        'Suitable for vertical surface coating systems.'
      ],
      technicalData: [
        ['Appearance', 'Epoxy roller coating for walls'],
        ['Coverage', '0.15 to 0.20 kg/m² per coat'],
        ['Category', 'Flooring Systems / Wall Coatings'],
        ['Typical Finish', 'Smooth roller-applied finish'],
        ['Recommended Use', 'Walls and vertical surfaces'],
        ['Environment', 'Industrial and hygienic interiors']
      ],
      applicationGuide: [
        ['Surface Preparation', 'Prepare wall surface to a clean, dry, and sound condition.'],
        ['Priming', 'Use suitable primer where required by substrate condition.'],
        ['Mixing', 'Mix thoroughly to uniform consistency.'],
        ['Application', 'Apply by roller in thin even coats.'],
        ['Recoating', 'Allow adequate interval between coats as per conditions.']
      ],
      substrates: [
        'Prepared cement plaster',
        'Concrete and masonry walls',
        'Interior vertical surfaces in industrial facilities'
      ],
      packaging: [
        ['Supply Format', 'Two-component epoxy wall coating'],
        ['Storage', 'Store sealed in dry covered conditions'],
        ['Shelf Life', 'Use within the recommended shelf-life period']
      ],
      notes: [
        'Substrate moisture and curing must be appropriate before coating.',
        'Use only on prepared and stable interior surfaces.',
        'Field trials are recommended where appearance is critical.'
      ],
      disclaimer: commonDisclaimer
    }),
    'hf210-sl1000': createTds({
      code: 'HF210-SL1000',
      name: 'HARDFLOOR SL1000',
      summary: 'Self-leveling epoxy floor finish for seamless, glossy, and easy-maintenance industrial floors.',
      description: 'HARDFLOOR SL1000 is a seamless self-leveling epoxy system developed for areas that require a smooth visual finish, easy cleaning, and dependable service under regular industrial use.',
      application: 'Clean areas, process rooms, corridors, assembly areas, laboratories, and showrooms.',
      features: [
        'Excellent level finish with consistent appearance.',
        'Creates a joint-free wearing surface that is easy to maintain.',
        'Useful for facilities needing dust control and improved floor presentation.',
        'Can be integrated into multi-layer epoxy floor systems.'
      ],
      technicalData: [
        ['Appearance', 'Self-leveling epoxy topping'],
        ['Coverage', '1.2 to 1.5 kg/m² per mm thickness'],
        ['Category', 'Flooring Systems / Self-Leveling Epoxy'],
        ['Recommended Thickness', '1 to 3 mm'],
        ['Finish', 'Smooth gloss floor surface'],
        ['Typical Areas', 'Industrial and commercial interiors']
      ],
      applicationGuide: [
        ['Substrate', 'Apply over suitable primed substrate.'],
        ['Mixing', 'Mix complete pack to a homogeneous blend.'],
        ['Application', 'Lay at specified thickness and de-air with spike roller.'],
        ['Joints', 'Treat movement joints as per project detailing.'],
        ['Cure', 'Allow adequate hardening before service exposure.']
      ],
      substrates: [
        'Primed concrete',
        'Industrial repair screeds',
        'Prepared cementitious bases'
      ],
      packaging: [
        ['Supply Format', 'Multi-component self-leveling epoxy system'],
        ['Storage', 'Keep in original unopened containers in dry covered storage'],
        ['Shelf Life', 'Use within approved storage duration']
      ],
      notes: [
        'Thickness selection should reflect service requirements.',
        'Do not bridge active structural movement joints without detailing.',
        'Application environment affects flow and finish quality.'
      ],
      disclaimer: commonDisclaimer
    }),
    'hf300-sl1003': createTds({
      code: 'HF300-SL1003',
      name: 'HARDFLOOR SL1003',
      summary: 'Heavy-duty epoxy screed for severe industrial floor service, impact resistance, and high mechanical demands.',
      description: 'HARDFLOOR SL1003 is a robust epoxy screed system intended for hard-working industrial environments where higher thickness, abrasion resistance, and mechanical durability are needed.',
      application: 'Heavy machinery zones, forklift aisles, impact-prone areas, production plants, and industrial service bays.',
      features: [
        'High-build system for demanding industrial floor exposure.',
        'Designed for improved impact and abrasion resistance.',
        'Suitable for heavy service areas where lighter coatings are insufficient.',
        'Supports durable refurbishment of worn industrial concrete.'
      ],
      technicalData: [
        ['Appearance', 'Heavy-duty epoxy screed'],
        ['Coverage', '2.0 to 3.0 kg/m² per mm thickness'],
        ['Category', 'Flooring Systems / Epoxy Screed'],
        ['Recommended Thickness', '2 to 6 mm depending on system'],
        ['Finish', 'Dense industrial screed finish'],
        ['Service Use', 'Heavy-duty industrial floors']
      ],
      applicationGuide: [
        ['Surface Preparation', 'Prepare substrate by mechanical means to expose a sound profile.'],
        ['Priming', 'Use compatible primer before laying screed.'],
        ['Mixing', 'Blend resin and fillers thoroughly to uniform consistency.'],
        ['Application', 'Spread and compact to the specified thickness, then finish as required.'],
        ['Curing', 'Keep free from traffic until adequate mechanical strength develops.']
      ],
      substrates: [
        'Concrete industrial floors',
        'Repair areas requiring thicker resin build',
        'Production zones under heavy service loads'
      ],
      packaging: [
        ['Supply Format', 'Multi-component epoxy screed system'],
        ['Storage', 'Store dry and protected from direct heat'],
        ['Shelf Life', 'Use within manufacturer-recommended period']
      ],
      notes: [
        'Project-specific thickness should be chosen according to loading conditions.',
        'Surface profile and bond quality are critical for long-term performance.',
        'Use experienced applicators for screed placement and finishing.'
      ],
      disclaimer: commonDisclaimer
    }),
    'hf310-erc200': createTds({
      code: 'HF310-ERC200',
      name: 'HARDFLOOR ERC200',
      summary: 'Epoxy roller coating for light industrial floors and commercial areas requiring a clean, dust-free surface.',
      description: 'HARDFLOOR ERC200 is a roller-applied epoxy floor coating designed for practical refurbishment and protection of concrete floors in warehouses, commercial interiors, and light manufacturing spaces.',
      application: 'Warehouses, light manufacturing zones, service corridors, showrooms, storage areas, and commercial back-of-house floors.',
      features: [
        'Improves floor appearance and supports dust-free operation.',
        'Provides an easy-to-clean protective coating film.',
        'Suitable for light to moderate industrial service.',
        'Can be applied as part of practical refurbishment works.'
      ],
      technicalData: [
        ['Appearance', 'Epoxy roller floor coating'],
        ['Coverage', '0.20 to 0.30 kg/m² per coat'],
        ['Category', 'Flooring Systems / Epoxy Coatings'],
        ['Finish', 'Uniform roller-applied coating'],
        ['Typical Service', 'Light industrial and commercial'],
        ['Application Area', 'Concrete floors and screeds']
      ],
      applicationGuide: [
        ['Surface Preparation', 'Prepare floor to remove dust, laitance, oil, and weak surface material.'],
        ['Priming', 'Use compatible primer when required by substrate porosity.'],
        ['Mixing', 'Mechanically mix complete units until uniform.'],
        ['Application', 'Apply by roller in even coats to achieve full coverage.'],
        ['Cure', 'Allow sufficient cure before trafficking or loading.']
      ],
      substrates: [
        'Concrete floors',
        'Cement screeds',
        'Light industrial and commercial substrates'
      ],
      packaging: [
        ['Supply Format', 'Two-component epoxy floor coating'],
        ['Storage', 'Store in cool and dry covered conditions'],
        ['Shelf Life', 'Use within normal unopened storage period']
      ],
      notes: [
        'Not intended for extreme heavy-duty impact zones.',
        'Final gloss and coverage may vary with substrate absorption.',
        'Observe suitable application temperature and cure conditions.'
      ],
      disclaimer: commonDisclaimer
    }),
    'he200-eb300': createTds({
      code: 'HE200-EB300',
      name: 'HARDPOXY EB300',
      summary: 'Epoxy bonding agent for concrete repair and permanent bonding of new concrete to old prepared surfaces.',
      description: 'HARDPOXY EB300 is a high-strength epoxy bonding system developed to create reliable adhesion between existing concrete and fresh repair or overlay materials.',
      application: 'Concrete repairs, bonding of new-to-old concrete, overlays, patching works, and structural repair interfaces.',
      features: [
        'Creates a strong bonding layer between old and new concrete.',
        'Useful for repair works where conventional bonding slurries are insufficient.',
        'Supports durable adhesion in demanding repair environments.',
        'Suitable for civil, industrial, and maintenance applications.'
      ],
      technicalData: [
        ['Appearance', 'Epoxy bonding agent'],
        ['Coverage', '0.30 to 0.40 kg/m²'],
        ['Category', 'Epoxy Systems / Bonding Agents'],
        ['Function', 'Concrete-to-concrete bonding'],
        ['Typical Use', 'Repairs and overlays'],
        ['Application Method', 'Brush or roller application on prepared substrate']
      ],
      applicationGuide: [
        ['Surface Preparation', 'Prepare old concrete to a clean, roughened, and sound condition.'],
        ['Mixing', 'Mix complete components thoroughly before application.'],
        ['Application', 'Apply uniformly on the prepared substrate and place the repair material within the open time.'],
        ['Overlay Placement', 'Fresh mortar or concrete should be placed while the bonding layer is still active as specified.'],
        ['Curing', 'Follow curing requirements for both bonding agent and repair material system.']
      ],
      substrates: [
        'Existing concrete requiring bonded repair',
        'Overlays and patch repairs',
        'Structural maintenance works'
      ],
      packaging: [
        ['Supply Format', 'Two-component epoxy bonding system'],
        ['Storage', 'Store unopened in dry shaded conditions'],
        ['Shelf Life', 'Use within the stated shelf-life period']
      ],
      notes: [
        'Substrate preparation quality directly affects final bond performance.',
        'Place the new material within the approved working window.',
        'Carry out site trials where substrate condition is variable.'
      ],
      disclaimer: commonDisclaimer
    })
  };

  documents['hardfloor-mtp100'] = documents['hf130-mtp100'];
  documents['he100-eb300'] = documents['he200-eb300'];

  window.tdsData = documents;
})();
