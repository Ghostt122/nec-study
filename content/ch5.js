(window.MODULES ||= []).push({
  id: 'ch5', icon: '🧪', title: 'Chapter 5: Special Occupancies (500–590)',
  blurb: 'Hazardous locations and seals, garages, gas stations, hospitals, and temporary power on job sites.',
  lessons: [
    {
      id: 'classes', title: 'Hazardous locations: Class, Division, Group',
      html: `
<p>Where flammable gas, vapor, dust, or fibers could be in the air, a spark from normal electrical equipment could cause an explosion. [[Art 500]] classifies these areas. The class tells you <b>what</b> the hazard is; the division tells you <b>how likely</b> it is to be present.</p>
<div class="tablewrap"><table>
<tr><th>Class</th><th>Hazard</th><th>Examples</th></tr>
<tr><td><b>Class I</b></td><td>Flammable gases or vapors ([[500.5(B)]])</td><td>Paint spray booths, fuel dispensing, refineries, solvent rooms</td></tr>
<tr><td><b>Class II</b></td><td>Combustible <b>dust</b> ([[500.5(C)]])</td><td>Grain elevators, flour mills, coal, metal powder plants</td></tr>
<tr><td><b>Class III</b></td><td>Ignitible <b>fibers/flyings</b> ([[500.5(D)]])</td><td>Textile mills, cotton gins, woodworking (sawdust flyings)</td></tr>
</table></div>
<ul>
<li><b>Division 1</b>: the hazard is present under <b>normal</b> operating conditions, or frequently from repair or leaks.</li>
<li><b>Division 2</b>: the hazard is present only under <b>abnormal</b> conditions: material normally confined in closed containers or systems, or kept out by ventilation that could fail, or next to a Division 1 area.</li>
</ul>
<h3>Groups [[500.6]]</h3>
<div class="tablewrap"><table>
<tr><td>Class I, Group A</td><td>Acetylene</td></tr>
<tr><td>Class I, Group B</td><td>Hydrogen (typical)</td></tr>
<tr><td>Class I, Group C</td><td>Ethylene (typical)</td></tr>
<tr><td>Class I, Group D</td><td>Propane (typical). Gasoline stations are Group D.</td></tr>
<tr><td>Class II, Group E</td><td>Metal dusts (aluminum, magnesium)</td></tr>
<tr><td>Class II, Group F</td><td>Carbon dusts (coal, carbon black)</td></tr>
<tr><td>Class II, Group G</td><td>Other dusts (flour, grain, wood, plastic)</td></tr>
</table></div>
<p>There's also a <b>Zone</b> system (Articles 505 and 506, Zone 0, 1, 2 and 20, 21, 22) used mostly in plants designed to international standards.</p>`
    },
    {
      id: 'wiring', title: 'Class I wiring, threads, and seals',
      html: `
<ul>
<li><b>Wiring methods</b> for Class I, Division 1 are listed in [[Table 501.10(A)(1)]]: mainly <b>threaded RMC or IMC</b>, MI cable, and special hazardous-location cables (MC-HL, ITC-HL). Boxes and fittings must be <b>explosionproof</b>, identified for Class I, Division 1 ([[501.10(A)]]).</li>
<li><b>Threads</b>: NPT threaded entries into explosionproof equipment need at least <b>five threads fully engaged</b>. Conduit and fittings are made up <b>wrenchtight</b> ([[500.8(E)]]).</li>
<li><b>Bonding</b>: locknut-bushing and double-locknut connections can't be relied on for bonding in hazardous locations. Use bonding jumpers, threaded connections, or listed bonding fittings ([[500.30]]).</li>
</ul>
<h3>Seals ("poured fittings," EYS) [[501.15]]</h3>
<p>Seals stop gas from traveling through the conduit and keep an explosion inside one enclosure from spreading.</p>
<ul>
<li><b>At enclosures</b>: each conduit entering an explosionproof enclosure that contains arcing or high-temperature devices (switches, breakers, relays) needs a seal within <b>18 in.</b> of the enclosure ([[501.15(A)]]). Only explosionproof unions, reducers, elbows, and couplings can be between the seal and the enclosure. Entries 2 in. trade size or larger into enclosures with terminals, splices, or taps also need seals.</li>
<li><b>At the boundary</b>: each conduit leaving a Division 1 area needs a seal within <b>10 ft</b> of the boundary, on either side, with no union, coupling, or box between the seal and the boundary.</li>
<li><b>Compound</b>: at least the conduit trade size thick, never less than <b>⅝ in.</b>, with a melting point of at least 200°F ([[501.15(C)]]).</li>
<li><b>No splices</b> in sealing fittings.</li>
<li><b>Conductor fill</b> in a seal: max <b>25%</b> of the cross-section of the same size RMC, unless the seal is identified for more.</li>
</ul>
<div class="job"><b>On the job</b>Pour seals <b>after</b> the wire is pulled and the dam fiber is packed. Inspectors usually want to see them before pouring, then the poured seal. Never put a splice in an EYS.</div>`
    },
    {
      id: 'garages', title: 'Garages and gas stations (511, 514)',
      html: `
<h3>Commercial garages [[Art 511]]</h3>
<ul>
<li><b>Parking garages</b> are allowed to be <b>unclassified</b> ([[511.5(A)]]).</li>
<li><b>Repair garages</b> for vehicles using gasoline or heavier-than-air fuels follow [[Table 511.5(C)]]. Major repair: pits and below-grade work areas without ventilation are Class I, Division 1; the floor area up to <b>18 in.</b> above the floor is Class I, Division 2 (unless ventilated as the table describes); within 3 ft of any fill or dispensing point is Division 2.</li>
<li>Adjacent areas like stockrooms are unclassified if ventilated at 4 or more air changes per hour, under positive pressure, or separated by a solid wall.</li>
</ul>
<h3>Motor fuel dispensing (gas stations) [[Art 514]]</h3>
<ul>
<li>Areas around dispensers and tanks are classified per [[Table 514.5(B)(1)]] (Class I, Group D).</li>
<li><b>Underground wiring</b>: threaded RMC or IMC, MI cable, or PVC, RTRC, or HDPE buried at least <b>2 ft</b> deep, with the last <b>2 ft</b> to where it comes up being threaded RMC or IMC ([[514.8]]). Conduit under a classified area must be sealed within <b>10 ft</b> of where it emerges above grade.</li>
<li><b>Seals</b> at each dispenser and at boundaries ([[514.9]]).</li>
<li><b>Emergency shutoffs</b>: clearly identified, at least <b>20 ft</b> and no more than <b>100 ft</b> from the dispensers they serve. They kill power to the dispensers, remote pumps, and related circuits ([[514.11(A)]]).</li>
</ul>`
    },
    {
      id: 'health', title: 'Health care facilities (517)',
      html: `
<ul>
<li>Patient care spaces and their systems are designed and installed to <b>risk categories 1 through 4</b> (Category 1 = critical care, the highest risk), which are described in NFPA 99 ([[517.7]]).</li>
<li><b>Redundant grounding</b> in patient care spaces: branch circuits must be in a <b>metal raceway or metal-armored cable</b> that itself qualifies as an EGC, <b>and</b> have an <b>insulated green copper EGC</b> ([[517.13]]). That's why hospitals use EMT or "hospital grade" MC (HCF) with a green wire.</li>
<li>Exception: luminaires more than <b>7½ ft</b> above the floor and switches outside the patient care vicinity can use just one of the two paths.</li>
<li>Hospitals have an <b>essential electrical system</b> with life safety, critical, and equipment branches fed from generators. It's a specialty area. You'll learn it on those jobs.</li>
</ul>
<div class="job"><b>On the job</b>On hospital work, the color coding, separate raceways for emergency branches, and the double ground are inspected closely. Follow the drawings exactly.</div>`
    },
    {
      id: 'temp', title: 'Temporary power on job sites (590)',
      html: `
<p>Construction power (spider boxes, temp poles, string lights) is wired under [[Art 590]].</p>
<ul>
<li><b>Time limits</b>: during construction, remodeling, maintenance, repair, or demolition; <b>90 days</b> max for holiday decorative lighting; during emergencies and tests. Remove it as soon as the work is done ([[590.5]]).</li>
<li><b>Wiring</b>: NM and SE cable can be used in any building type and don't need to be concealed. Cords and cables must be hard or extra-hard usage types ([[590.6(B)]]).</li>
<li><b>Receptacles</b>: grounding type, with an EGC, and <b>not on circuits that supply temporary lighting</b> on construction sites ([[590.6(C)]]). Tripping a GFCI shouldn't leave people in the dark.</li>
<li><b>Disconnects</b> for all ungrounded conductors of each circuit; multiwire circuits disconnect simultaneously ([[590.6(D)]]).</li>
<li><b>Lamps</b> for general lighting need guards, except listed temporary LED strings with nonreplaceable lamps ([[590.6(E)]]).</li>
<li><b>Splices</b> go in a box with a cover, with exceptions for splicing cord or cable assemblies on construction sites ([[590.6(F)]]).</li>
<li><b>GFCI for personnel</b>: all 125 V, single-phase, 15, 20, and 30 A receptacle outlets used by workers, whether temporary or permanent wiring used for temp power, need GFCI protection. A listed portable GFCI cord set is OK for permanent receptacles ([[590.7(A)]]).</li>
</ul>`
    }
  ],
  questions: [
    { l: 'classes', q: 'A location with flammable gases or vapors is:', c: ['Class I', 'Class II', 'Class III', 'Zone 20'], w: '500.5(B).', r: '500.5(B)' },
    { l: 'classes', q: 'A location with combustible dust is:', c: ['Class II', 'Class I', 'Class III', 'Division 2'], w: '500.5(C).', r: '500.5(C)' },
    { l: 'classes', q: 'A textile mill with ignitible fibers/flyings is:', c: ['Class III', 'Class II', 'Class I', 'Unclassified'], w: '500.5(D).', r: '500.5(D)' },
    { l: 'classes', q: 'Where ignitible concentrations exist under normal operating conditions, the location is:', c: ['Division 1', 'Division 2', 'Zone 2', 'Unclassified'], w: '500.5(B)(1).', r: '500.5(B)' },
    { l: 'classes', q: 'Where flammable liquids are normally confined in closed containers and escape only by accident, the location is:', c: ['Division 2', 'Division 1', 'Class III', 'Unclassified'], w: '500.5(B)(2).', r: '500.5(B)' },
    { l: 'classes', q: 'Acetylene is Class I, Group:', c: ['A', 'B', 'C', 'D'], w: '500.6(A)(1).', r: '500.6(A)' },
    { l: 'classes', q: 'A typical Class I, Group D material is:', c: ['Propane', 'Hydrogen', 'Acetylene', 'Ethylene'], w: '500.6(A)(4).', r: '500.6(A)' },
    { l: 'classes', q: 'A typical Class I, Group B material is:', c: ['Hydrogen', 'Propane', 'Gasoline', 'Acetylene'], w: '500.6(A)(2).', r: '500.6(A)' },
    { l: 'classes', q: 'Aluminum and magnesium dust are Class II, Group:', c: ['E', 'F', 'G', 'D'], w: '500.6(B)(1).', r: '500.6(B)' },
    { l: 'wiring', q: 'NPT threaded entries into explosionproof equipment need at least ___ threads fully engaged.', c: ['Five', 'Three', 'Four', 'Seven'], w: '500.8(E)(1).', r: '500.8(E)' },
    { l: 'wiring', q: 'In a Class I, Division 1 location, conduit seals at enclosures with arcing devices must be within:', c: ['18 in.', '12 in.', '10 ft', '3 ft'], w: '501.15(A)(1).', r: '501.15(A)' },
    { l: 'wiring', q: 'A conduit leaving a Class I, Division 1 location must be sealed within ___ of the boundary.', c: ['10 ft', '18 in.', '5 ft', '20 ft'], w: '501.15(A)(4).', r: '501.15(A)' },
    { l: 'wiring', q: 'Minimum thickness of sealing compound in a seal:', c: ['The trade size, but never less than ⅝ in.', '½ in.', '1 in. always', '2 in.'], w: '501.15(C)(3).', r: '501.15(C)' },
    { l: 'wiring', q: 'Splices may be made in a sealing fitting intended only for compound.', c: ['False', 'True', 'True if insulated', 'True in Division 2'], w: '501.15(C)(4).', r: '501.15(C)' },
    { l: 'wiring', q: 'Conductor fill in a seal may not exceed ___ of the RMC cross-section unless identified for more.', c: ['25%', '40%', '53%', '60%'], w: '501.15(C)(6).', r: '501.15(C)' },
    { l: 'wiring', q: 'Sealing compound must have a melting point of at least:', c: ['200°F (93°C)', '150°F', '300°F', '100°F'], w: '501.15(C)(2).', r: '501.15(C)' },
    { l: 'wiring', q: 'In hazardous locations, bonding may NOT rely on:', c: ['Locknut-bushing and double-locknut connections', 'Threaded couplings made up wrenchtight', 'Bonding jumpers', 'Listed bonding fittings'], w: '500.30(B).', r: '500.30' },
    { l: 'garages', q: 'Parking garages used only for parking or storage are permitted to be:', c: ['Unclassified', 'Class I, Division 1', 'Class I, Division 2', 'Class II'], w: '511.5(A).', r: '511.5(A)' },
    { l: 'garages', q: 'In a major repair garage (gasoline vehicles), the area up to ___ above the floor is generally Class I, Division 2.', c: ['18 in.', '12 in.', '3 ft', '4 ft'], w: 'Table 511.5(C), unless ventilated as described.', r: 'Table 511.5(C)' },
    { l: 'garages', q: 'An unventilated pit in a major repair garage is:', c: ['Class I, Division 1', 'Class I, Division 2', 'Unclassified', 'Class II, Division 1'], w: 'Table 511.5(C).', r: 'Table 511.5(C)' },
    { l: 'garages', q: 'PVC under a fuel dispensing area must have at least ___ of cover.', c: ['2 ft', '18 in.', '6 in.', '3 ft'], w: '514.8(C).', r: '514.8' },
    { l: 'garages', q: 'When PVC is used underground at a gas station, the last ___ to the point of emergence must be threaded RMC or IMC.', c: ['2 ft', '10 ft', '18 in.', '5 ft'], w: '514.8(C).', r: '514.8' },
    { l: 'garages', q: 'Emergency shutoffs for fuel dispensers must be located between ___ from the dispensers.', c: ['20 ft and 100 ft', '10 ft and 50 ft', '5 ft and 25 ft', '50 ft and 200 ft'], w: '514.11(A).', r: '514.11(A)' },
    { l: 'health', q: 'Branch circuits in patient care spaces need a metal raceway or armored cable qualifying as an EGC, plus:', c: ['An insulated copper equipment grounding conductor', 'A second neutral', 'A GFCI on every circuit', 'An isolated ground receptacle'], w: '517.13(A) and (B).', r: '517.13' },
    { v: 1, l: 'health', q: 'Luminaires more than ___ above the floor in patient care spaces may use only one grounding path.', c: ['7½ ft', '6 ft', '8 ft', '10 ft'], w: '517.13 Exception.', r: '517.13' },
    { l: 'temp', q: 'Temporary holiday decorative lighting is permitted for no more than:', c: ['90 days', '30 days', '60 days', '180 days'], w: '590.5(B).', r: '590.5' },
    { l: 'temp', q: 'On construction sites, temporary receptacles may be on circuits that supply temporary lighting.', c: ['False', 'True', 'True if GFCI', 'True if 20 A'], w: '590.6(C).', r: '590.6(C)' },
    { l: 'temp', q: 'Which receptacle outlets used by construction personnel need GFCI protection?', c: ['All 125 V, single-phase, 15, 20, and 30 A', 'Only 15 A', 'Only outdoor ones', 'Only temporary ones, not permanent'], w: '590.7(A).', r: '590.7(A)' },
    { l: 'temp', q: 'Temporary wiring must be removed:', c: ['Immediately upon completion of the purpose', 'Within 90 days of completion', 'At final inspection', 'Within 30 days'], w: '590.5(D).', r: '590.5' },
    { l: 'temp', q: 'Lamps for general illumination on temporary wiring must be:', c: ['Protected by a guard (except listed nonreplaceable LED strings)', 'LED only', 'At least 8 ft high', 'On GFCI'], w: '590.6(E).', r: '590.6' },
    { t: 'find', l: 'temp', q: 'Where are Class I conduit seal requirements?', c: ['501.15', '500.8', '502.15', '514.9'], w: '501.15.', r: '501.15' },
    { t: 'find', l: 'temp', q: 'Where are hazardous location classes and divisions defined?', c: ['500.5', '500.6', '501.10', '505.5'], w: '500.5 (groups are 500.6).', r: '500.5' },
    { t: 'find', l: 'temp', q: 'Where are GFCI requirements for temporary construction power?', c: ['590.7', '590.6', '210.8', '527.6'], w: '2026 NEC: 590.7.', r: '590.7' },
    { t: 'find', l: 'temp', q: 'Where is the repair garage classification table?', c: ['Table 511.5(C)', 'Table 514.5(B)(1)', 'Table 500.6', 'Table 501.10(A)(1)'], w: 'Table 511.5(C).', r: 'Table 511.5(C)' }
  ]
});
