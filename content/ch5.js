(window.MODULES ||= []).push({
  id: 'ch5', icon: '🧪', title: 'Chapter 5: Special Occupancies (500–590)',
  blurb: 'Hazardous locations and seals, garages, gas stations, hospitals, assembly occupancies, and temporary power on job sites.',
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
<p>Class II, Division 1 also includes any location where <b>Group E</b> (metal) dusts may be present in hazardous amounts, whether conditions are normal or abnormal ([[500.5(C)]]).</p>
<h3>Groups [[500.6]]</h3>
<div class="tablewrap"><table>
<tr><td>Class I, Group A</td><td>Acetylene</td></tr>
<tr><td>Class I, Group B</td><td>Hydrogen (typical)</td></tr>
<tr><td>Class I, Group C</td><td>Ethylene (typical)</td></tr>
<tr><td>Class I, Group D</td><td>Propane (typical). Gasoline stations are Group D.</td></tr>
<tr><td>Class II, Group E</td><td>Metal dusts (aluminum, magnesium)</td></tr>
<tr><td>Class II, Group F</td><td>Carbonaceous dusts with more than 8% entrapped volatiles (coal, carbon black, charcoal, coke)</td></tr>
<tr><td>Class II, Group G</td><td>Other dusts (flour, grain, wood, plastic, chemicals)</td></tr>
</table></div>
<p>There's also a <b>Zone</b> system ([[Art 505]] for gases and vapors, Zone 0, 1, 2; [[Art 506]] for dusts and fibers, Zone 20, 21, 22) used mostly in plants designed to international standards. Class II rules are in [[Art 502]], Class III in Article 503.</p>`
    },
    {
      id: 'wiring', title: 'Class I wiring, threads, and seals',
      html: `
<ul>
<li><b>Wiring methods</b> for Class I, Division 1 are listed in [[Table 501.10(A)(1)]]: mainly <b>threaded RMC or IMC</b>, MI cable, and (in restricted industrial establishments) MC-HL, ITC-HL, TC-ER-HL, and Type P cable. PVC is allowed only underground, encased in at least <b>2 in.</b> of concrete with at least <b>24 in.</b> of cover, with RMC or IMC for the last 24 in. to where it comes up.</li>
<li>All boxes and fittings must be <b>identified for Class I, Division 1</b> ([[501.10(A)]]).</li>
<li><b>Threads</b>: NPT threaded entries into explosionproof equipment need at least <b>five threads fully engaged</b>. Exception: listed explosionproof equipment with factory-threaded NPT entries needs at least <b>4½ threads</b>. Conduit and fittings are made up <b>wrenchtight</b>. Unused openings get listed plugs ([[500.8(E)]]).</li>
<li><b>Bonding</b>: locknut-bushing and double-locknut connections can't be relied on for bonding in hazardous locations. Use bonding jumpers, threaded connections, or listed bonding fittings ([[500.30]]).</li>
</ul>
<h3>Seals ("poured fittings," EYS) [[501.15]]</h3>
<p>Seals stop gas from traveling through the conduit and keep an explosion inside one enclosure from spreading.</p>
<ul>
<li><b>At enclosures</b>: each conduit entering an explosionproof enclosure that contains arcing or high-temperature devices (switches, breakers, relays) needs a seal within <b>18 in.</b> of the enclosure ([[501.15(A)]]). Only threaded couplings, or explosionproof fittings like unions, reducers, elbows, and capped elbows (not larger than the conduit trade size), can be between the seal and the enclosure. Entries 2 in. trade size or larger into enclosures with terminals, splices, or taps also need seals.</li>
<li><b>At the boundary</b>: each conduit leaving a Division 1 area needs a seal within <b>10 ft</b> of the boundary, on either side, with no union, coupling, box, or fitting between the seal and the boundary except a listed explosionproof reducer at the seal.</li>
<li><b>Division 2</b>: seals are also required where a conduit leaves a Division 2 area (within 10 ft of the boundary), and at explosionproof enclosures that need them ([[501.15(B)]]). Boundary seals in Division 2 don't have to be explosionproof.</li>
<li>Exception for both: unbroken metal conduit passing completely through the classified area, with no fittings within 12 in. of either side of the boundary and both ends in unclassified locations, doesn't need a seal.</li>
<li><b>Compound</b>: at least the conduit trade size thick, never less than <b>⅝ in.</b>, with a melting point of at least 200°F ([[501.15(C)]]).</li>
<li><b>No splices</b> in sealing fittings.</li>
<li><b>Conductor fill</b> in a seal: max <b>25%</b> of the cross-section of the same size RMC, unless the seal is identified for more.</li>
</ul>
<h3>Class II (dust) wiring [[Art 502]]</h3>
<ul>
<li><b>Division 1 wiring</b> ([[Table 502.10(A)(1)]]): threaded RMC or IMC, MI cable, and (restricted industrial establishments) MC-HL, ITC-HL, TC-ER-HL, and Type P cable.</li>
<li><b>Division 1 boxes</b>: threaded bosses and <b>dusttight</b>. Boxes with taps, joints, or terminal connections, or in Group E locations, must be identified for Class II ([[502.10]]). Division 2 boxes and fittings: dusttight.</li>
<li><b>Sealing</b> ([[502.15]]): where a raceway connects a dust-ignitionproof enclosure to one that isn't, keep dust out with one of these: a permanent and effective seal, a horizontal raceway at least <b>10 ft</b> long, a vertical raceway at least <b>5 ft</b> long running down from the dust-ignitionproof enclosure, or electrical sealing putty. Not required between a dust-ignitionproof enclosure and one in an unclassified location. Dust seals don't have to be explosionproof.</li>
<li><b>Switches, breakers, starters</b>: Division 1 enclosures identified for the location; Division 2 enclosures dusttight or identified ([[502.115]]).</li>
<li><b>Luminaires</b> (Division 1): identified for the location, marked with lamp type and max wattage, guarded or located out of harm's way. Pendant stems longer than <b>12 in.</b> need bracing or a flexible fitting within 12 in. ([[502.130(A)]]).</li>
<li><b>Receptacles</b> are part of the premises wiring, and plugs connect to the cord's EGC ([[502.145]]).</li>
</ul>
<h3>Class III (fibers and flyings) [[Art 503]]</h3>
<ul>
<li>Equipment must run at full rating without getting hot enough to dry out or char the fibers that pile up on it ([[503.5]]).</li>
<li><b>Wiring</b>: methods in Table 503.10(A)(1); all boxes and fittings <b>dusttight</b>. In Division 2 storage-only areas without machinery, open wiring on insulators is allowed per Article 398 ([[503.10]]).</li>
<li>Switches, breakers, motor controllers, and fuses: <b>dusttight</b> enclosures ([[503.115]]).</li>
<li>Fixed luminaires keep fibers out and sparks in, marked with the max lamp wattage that keeps the exposed surface at or below <b>165°C (329°F)</b> ([[503.130]]).</li>
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
<li><b>Minor repair</b> (fuel not transferred or dispensed): an unventilated pit is Class I, Division 2, and so is the area up to 18 in. above the floor within 3 ft of the pit opening.</li>
<li>Adjacent areas like stockrooms are unclassified if ventilated at 4 or more air changes per hour, under positive pressure, or separated by an unpierced wall, roof, or other solid partition.</li>
<li><b>Underground</b> below classified areas: threaded RMC or IMC, or PVC, RTRC, or HDPE with at least <b>2 ft</b> of cover and threaded RMC or IMC for the last 2 ft ([[511.8]]). Seals per 501.15, at horizontal and vertical boundaries ([[511.9]]).</li>
</ul>
<h3>Motor fuel dispensing (gas stations) [[Art 514]]</h3>
<ul>
<li>Areas around dispensers and tanks are classified per [[Table 514.5(B)(1)]] (Class I, Group D). Inside and under the dispenser pit or containment is <b>Division 1</b>. Within <b>18 in.</b> of the dispenser enclosure is Division 2. Outdoors, the area up to <b>18 in.</b> above grade within <b>20 ft</b> horizontally of the dispenser is Division 2.</li>
<li><b>Underground wiring</b>: threaded RMC or IMC, MI cable, or PVC, RTRC, or HDPE buried at least <b>2 ft</b> deep, with the last <b>2 ft</b> to where it comes up being threaded RMC or IMC ([[514.8]]). Conduit under a classified area must be sealed within <b>10 ft</b> of where it emerges above grade.</li>
<li><b>Seals</b>: a listed seal in each conduit entering or leaving a dispenser. The seal (or a listed explosionproof reducer at the seal) is the <b>first fitting</b> after the conduit comes out of the earth or concrete. More seals at boundaries per 501.15 ([[514.9]]).</li>
<li><b>Emergency shutoffs</b>: clearly identified, at least <b>20 ft</b> and no more than <b>100 ft</b> from the dispensers they serve. They kill power to the dispensers, remote pumps, and related circuits, and open all conductors including the neutral (EGCs stay connected). Resetting takes manual action ([[514.11(A)]]).</li>
</ul>`
    },
    {
      id: 'health', title: 'Health care facilities (517)',
      html: `
<ul>
<li>Patient care spaces and their systems are designed and installed to <b>risk categories 1 through 4</b> (Category 1 = critical care, the highest risk), which are described in NFPA 99 ([[517.7]]).</li>
<li><b>Redundant grounding</b> in patient care spaces: branch circuits must be in a <b>metal raceway or metal-armored cable</b> that itself qualifies as an EGC, <b>and</b> have an <b>insulated green copper EGC</b> ([[517.13]]). That's why hospitals use EMT or "hospital grade" MC (HCF) with a green wire.</li>
<li>Exception: luminaires more than <b>7½ ft</b> above the floor and switches outside the patient care vicinity can use just one of the two paths.</li>
<li><b>Patient bed receptacles</b>: Category 2 (general care) bed locations need at least <b>8</b> receptacles ([[517.18(B)]]). Category 1 (critical care) bed locations need at least <b>14</b> ([[517.19(B)]]). Operating rooms need at least <b>36</b>. They must be listed and identified <b>"hospital grade"</b> (in operating rooms, the nonlocking ones).</li>
<li><b>GFCI</b>: receptacles in patient bathrooms and toilet rooms in Category 2 spaces need GFCI ([[517.21]]).</li>
<li>Hospitals have an <b>essential electrical system</b> with life safety, critical, and equipment branches fed from generators. It's a specialty area. You'll learn it on those jobs.</li>
</ul>
<div class="job"><b>On the job</b>On hospital work, the color coding, separate raceways for emergency branches, and the double ground are inspected closely. Follow the drawings exactly.</div>`
    },
    {
      id: 'assembly', title: 'Assembly occupancies and theaters (518, 520)',
      html: `
<p>[[Art 518]] covers buildings or parts of buildings designed for <b>100 or more persons</b> gathering for things like worship, eating, drinking, entertainment, or awaiting transportation ([[518.1]]). Examples: auditoriums, restaurants, conference rooms, gyms, courtrooms, churches, museums, bowling alleys, casinos ([[518.4]]).</p>
<ul>
<li>A room for fewer than 100 people that's incidental to another occupancy is treated as part of that other occupancy.</li>
<li><b>Wiring methods</b> ([[518.6]]): metal raceways, flexible metal raceways, nonmetallic raceways encased in at least <b>2 in.</b> of concrete, or Type MI, MC, or AC cable containing an insulated EGC sized per Table 250.122.</li>
<li>Where the building (or part) is <b>not required to be fire-rated</b> by the building code, NM cable, ENT, and PVC are also allowed.</li>
<li>ENT and PVC are also allowed in certain spaces (club rooms, conference rooms in hotels, restaurants, places of worship, and others) when concealed behind a thermal barrier with at least a <b>15-minute finish rating</b>.</li>
<li>Stages, projection booths, and theatrical areas follow [[Art 520]]. Its fixed wiring methods are similar: metal raceways, concrete-encased nonmetallic raceways, or MI, MC, or AC cable with an insulated EGC ([[520.5]]).</li>
</ul>
<div class="test"><b>For the test</b>Assembly occupancy = 100 or more persons. In fire-rated assembly buildings, no NM cable.</div>`
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
    { v: 1, l: 'garages', q: 'In a major repair garage (gasoline vehicles), the area up to ___ above the floor is generally Class I, Division 2.', c: ['18 in.', '12 in.', '3 ft', '4 ft'], w: 'Table 511.5(C), unless ventilated as described.', r: 'Table 511.5(C)' },
    { v: 1, l: 'garages', q: 'An unventilated pit in a major repair garage is:', c: ['Class I, Division 1', 'Class I, Division 2', 'Unclassified', 'Class II, Division 1'], w: 'Table 511.5(C).', r: 'Table 511.5(C)' },
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
    { t: 'find', l: 'temp', q: 'Where is the repair garage classification table?', c: ['Table 511.5(C)', 'Table 514.5(B)(1)', 'Table 500.6', 'Table 501.10(A)(1)'], w: 'Table 511.5(C).', r: 'Table 511.5(C)' },
    { l: 'classes', q: 'A typical Class I, Group C material is:', c: ['Ethylene', 'Propane', 'Hydrogen', 'Acetylene'], w: '500.6(A)(3) Informational Note.', r: '500.6(A)' },
    { l: 'classes', q: 'Flour, grain, wood, and plastic dusts are Class II, Group:', c: ['G', 'E', 'F', 'D'], w: '500.6(B)(3).', r: '500.6(B)' },
    { l: 'classes', q: 'Where Group E metal dusts may be present in hazardous quantities in normal or abnormal operation, the location is:', c: ['Class II, Division 1', 'Class II, Division 2', 'Class III, Division 1', 'Class I, Division 2'], w: '500.5(C)(1)(3).', r: '500.5(C)' },
    { l: 'classes', q: 'An area that is normally kept safe by positive mechanical ventilation, but could become hazardous if ventilation fails, is:', c: ['Class I, Division 2', 'Class I, Division 1', 'Unclassified', 'Zone 0'], w: '500.5(B)(2)(2).', r: '500.5(B)' },
    { v: 1, l: 'wiring', q: 'Listed explosionproof equipment with factory-threaded NPT entries must be made up with at least:', c: ['4½ threads fully engaged', '5 threads', '3 threads', '7 threads'], w: '500.8(E)(1) Exception.', r: '500.8(E)' },
    { v: 1, l: 'wiring', q: 'In Class I, Division 1, PVC conduit is permitted only:', c: ['Underground, encased in at least 2 in. of concrete with 24 in. of cover', 'Above ground in sunlight', 'In cable tray', 'Never'], w: 'Table 501.10(A)(1); RMC or IMC for the last 24 in.', r: 'Table 501.10(A)(1)' },
    { l: 'wiring', q: 'In Class I, Division 1, all boxes and fittings must be:', c: ['Identified for Class I, Division 1', 'Nonmetallic', 'Listed for wet locations only', 'Painted red'], w: '501.10(A)(3).', r: '501.10' },
    { l: 'wiring', q: 'Between a seal and an explosionproof enclosure, which may be installed?', c: ['An explosionproof union or elbow no larger than the conduit trade size', 'A junction box', 'A conduit body (LB) not explosionproof', 'A splice'], w: '501.15(A)(1).', r: '501.15(A)' },
    { l: 'wiring', q: 'A conduit leaving a Class I, Division 2 location must be sealed within ___ of the boundary.', c: ['10 ft', '18 in.', '3 ft', '25 ft'], w: '501.15(B)(2).', r: '501.15(B)' },
    { l: 'wiring', q: 'Unbroken metal conduit passing completely through a Class I location needs no seal if no fittings are within ___ of either side of the boundary (ends unclassified).', c: ['12 in.', '18 in.', '3 ft', '10 ft'], w: '501.15(A)(4) Exception No. 1.', r: '501.15(A)' },
    { v: 1, l: 'garages', q: 'In a minor repair garage, an unventilated pit is classified as:', c: ['Class I, Division 2', 'Class I, Division 1', 'Unclassified', 'Class II, Division 2'], w: 'Table 511.5(C), minor repair garage.', r: 'Table 511.5(C)' },
    { v: 1, l: 'garages', q: 'In a major repair garage, the area within ___ of any fill or dispensing point is Class I, Division 2.', c: ['3 ft', '18 in.', '5 ft', '10 ft'], w: 'Table 511.5(C).', r: 'Table 511.5(C)' },
    { v: 1, l: 'garages', q: 'The space within and under a fuel dispenser pit or containment is:', c: ['Class I, Division 1', 'Class I, Division 2', 'Unclassified', 'Class II, Division 1'], w: 'Table 514.5(B)(1).', r: 'Table 514.5(B)(1)' },
    { v: 1, l: 'garages', q: 'Outdoors, the area up to 18 in. above grade within ___ horizontally of a dispenser is Class I, Division 2.', c: ['20 ft', '10 ft', '25 ft', '50 ft'], w: 'Table 514.5(B)(1).', r: 'Table 514.5(B)(1)' },
    { l: 'garages', q: 'At a fuel dispenser, the seal must be:', c: ['The first fitting after the conduit emerges from the earth or concrete', 'Within 10 ft of the dispenser', 'Inside the dispenser only', 'Not required'], w: '514.9(A).', r: '514.9' },
    { l: 'garages', q: 'Fuel dispenser emergency shutoffs must disconnect:', c: ['All circuit conductors including the grounded conductor (EGCs stay connected)', 'Only the ungrounded conductors', 'Only the lights', 'The EGC too'], w: '514.11(A).', r: '514.11(A)' },
    { v: 1, l: 'health', q: 'Minimum receptacles at each Category 2 (general care) patient bed location:', c: ['8', '6', '14', '4'], w: '517.18(B)(1).', r: '517.18(B)' },
    { v: 1, l: 'health', q: 'Minimum receptacles at each Category 1 (critical care) patient bed location:', c: ['14', '8', '36', '12'], w: '517.19(B)(1).', r: '517.19(B)' },
    { v: 1, l: 'health', q: 'Minimum receptacles in each operating room:', c: ['36', '14', '24', '12'], w: '517.19(C)(1), on at least two branch circuits.', r: '517.19' },
    { v: 1, l: 'health', q: 'Patient bed location receptacles must be listed and identified as:', c: ['Hospital grade', 'Tamper-resistant', 'Isolated ground', 'Weather-resistant'], w: '517.18(B)(2).', r: '517.18(B)' },
    { l: 'assembly', q: 'Article 518 applies to buildings designed for the gathering of at least ___ persons.', c: ['100', '50', '200', '1000'], w: '518.1.', r: '518.1' },
    { l: 'assembly', q: 'In an assembly occupancy required to be fire-rated, which wiring method is NOT permitted?', c: ['Type NM cable', 'EMT', 'Type MC cable with an insulated EGC', 'RMC'], w: '518.6(A); NM only where fire-rated construction isn\'t required (518.6(C)).', r: '518.6' },
    { l: 'assembly', q: 'In assembly occupancies, nonmetallic raceways are permitted when encased in at least ___ of concrete.', c: ['2 in.', '1 in.', '4 in.', '6 in.'], w: '518.6(A)(3).', r: '518.6' },
    { l: 'assembly', q: 'Which of these is an assembly occupancy example in 518.4?', c: ['Restaurants', 'Warehouses', 'Factories', 'Single-family homes'], w: '518.4(A).', r: '518.4' },
    { t: 'find', l: 'assembly', q: 'Where are wiring methods for assembly occupancies?', c: ['518.6', '520.5', '300.22', '518.4'], w: '518.6 (theaters: 520.5).', r: '518.6' },
    { t: 'find', l: 'assembly', q: 'Where are fuel dispenser emergency shutoff requirements?', c: ['514.11', '514.9', '511.8', '700.12'], w: '514.11.', r: '514.11' },
    { t: 'find', l: 'assembly', q: 'Where are Class I, Division 1 wiring methods listed?', c: ['Table 501.10(A)(1)', 'Table 501.10(B)(1)', '501.15', 'Table 500.6'], w: 'Table 501.10(A)(1).', r: 'Table 501.10(A)(1)' },
    { v: 1, l: 'wiring', q: 'In Class II, a raceway between a dust-ignitionproof enclosure and one that is not can avoid a seal if it runs horizontally at least:', c: ['10 ft', '5 ft', '18 in.', '3 ft'], w: '502.15(2).', r: '502.15' },
    { v: 1, l: 'wiring', q: 'In Class II, a vertical raceway extending downward from a dust-ignitionproof enclosure can serve instead of a seal if it is at least:', c: ['5 ft', '10 ft', '18 in.', '3 ft'], w: '502.15(3).', r: '502.15' },
    { v: 1, l: 'wiring', q: 'Class II sealing fittings are required to be explosionproof.', c: ['False', 'True', 'True in Division 1', 'True for Group E'], w: '502.15: accessible, not required to be explosionproof.', r: '502.15' },
    { v: 1, l: 'wiring', q: 'Which is a permitted Class II, Division 1 wiring method?', c: ['Threaded RMC', 'EMT', 'Type NM cable', 'ENT'], w: 'Table 502.10(A)(1).', r: 'Table 502.10(A)(1)' },
    { l: 'wiring', q: 'In Class II, Division 1, boxes and fittings must have threaded bosses and be:', c: ['Dusttight', 'Raintight', 'Nonmetallic', 'Vented'], w: '502.10(A)(3).', r: '502.10' },
    { l: 'wiring', q: 'In Class II, Division 2, enclosures for switches, breakers, and motor controllers must be:', c: ['Dusttight or otherwise identified for the location', 'Explosionproof', 'NEMA 1', 'Open type'], w: '502.115(B).', r: '502.115' },
    { l: 'wiring', q: 'In Class III locations, switches, breakers, motor controllers, and fuses must be in:', c: ['Dusttight enclosures', 'Explosionproof enclosures', 'Any enclosure', 'Open panels'], w: '503.115.', r: '503.115' },
    { l: 'wiring', q: 'Class III fixed luminaires must be marked with the max lamp wattage that keeps the exposed surface at or below:', c: ['165°C (329°F)', '100°C (212°F)', '200°C (392°F)', '120°C (248°F)'], w: '503.130(A).', r: '503.130' },
    { t: 'find', l: 'assembly', q: 'Where are Class II sealing (dust seal) rules?', c: ['502.15', '501.15', '503.10', '500.8'], w: '502.15.', r: '502.15' }
  ]
});
