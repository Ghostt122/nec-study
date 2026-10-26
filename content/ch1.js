(window.MODULES ||= []).push({
  id: 'ch1', icon: '📋', title: 'Chapter 1: General Requirements (90, 110)',
  blurb: 'Rules that apply to every job: listing, fault current, connections, labels, and working space in front of panels.',
  lessons: [
    {
      id: 'art90', title: 'Article 90: what the code is and who enforces it',
      html: `
<ul>
<li><b>Purpose</b>: the practical safeguarding of people and property from electrical hazards. The NEC is <b>not</b> a design specification or an instruction manual for untrained persons ([[90.2(B)]]).</li>
<li><b>Safe, not fancy</b>: following the code gives an installation that is essentially free from hazard, but not necessarily efficient, convenient, or adequate for good service or future expansion ([[90.2(C)]]). Spare capacity is a design choice, not a code minimum.</li>
<li><b>What's not covered</b>: ships, aircraft, and automotive vehicles (other than mobile homes and RVs), underground mines, railway power used only for rolling stock, communications utility equipment under their exclusive control, and <b>electric utility installations under their exclusive control</b>, such as service drops, service laterals, and their metering ([[90.2(A)]]).</li>
<li><b>The AHJ</b> (authority having jurisdiction, usually the city inspector) interprets the rules, decides on approval of equipment and materials, and grants <b>special permission</b> ([[90.4(B)]]). By special permission, the AHJ can waive a specific requirement or allow an alternative method if equivalent safety is assured ([[90.4(C)]]).</li>
<li><b>New products</b>: if the code requires a product that isn't available yet, the AHJ may allow products that comply with the most recent previous edition the jurisdiction adopted ([[90.4(D)]]).</li>
<li><b>Listed equipment</b>: factory-installed internal wiring of listed equipment doesn't have to be inspected at installation, except to detect alterations or damage ([[90.7]]).</li>
</ul>
<div class="test"><b>For the test</b>"Who decides?" questions are almost always the AHJ. "Is this enforceable?" questions about informational notes or annexes are "no" ([[90.5(C)]]).</div>`
    },
    {
      id: 'basics', title: 'Approval, listing, and instructions',
      html: `
<ul>
<li><b>Approval</b>: conductors and equipment required or permitted by the code are acceptable only if approved ([[110.2]]).</li>
<li><b>Follow the instructions</b>: listed or labeled equipment must be installed and used according to any instructions in the listing or labeling ([[110.3(B)]]). The manufacturer's instructions become code. That's why you read the box the fixture came in.</li>
<li><b>Copper by default</b>: conductors are copper, aluminum, or copper-clad aluminum. When the code gives a size and doesn't name the metal, it means <b>copper</b> ([[110.5]]).</li>
<li><b>Sizes</b> are in AWG or circular mils ([[110.6]]). Big wire is in kcmil (thousand circular mils).</li>
<li><b>Wiring integrity</b>: finished wiring must be free of shorts, ground faults, and unintended connections to ground ([[110.7]]).</li>
<li><b>Only recognized wiring methods</b> can be used ([[110.8]]).</li>
<li><b>Neat and workmanlike</b>: installed in a professional and skillful manner ([[110.12]]). Unused openings get closed ([[110.12(A)]]). Don't let paint, plaster, or cleaners contaminate busbars and terminals ([[110.12(B)]]).</li>
<li><b>Mounting and cooling</b>: equipment must be firmly secured. <b>Wooden plugs</b> driven into holes in masonry, concrete, or plaster can't be used for mounting ([[110.13(A)]]). Ventilation openings and airflow can't be blocked ([[110.13(B)]]).</li>
</ul>
<div class="job"><b>On the job</b>Keep panel covers on during drywall and paint. Overspray on a bus or breaker is a code violation, and it's yours to clean or replace.</div>`
    },
    {
      id: 'fault', title: 'Interrupting ratings and fault current',
      html: `
<p>When something shorts, a huge current flows for an instant, sometimes tens of thousands of amps. Equipment has to survive it.</p>
<ul>
<li><b>Interrupting rating (AIC)</b>: breakers and fuses meant to open on a fault must have an interrupting rating at least equal to the <b>available fault current</b> at their line terminals ([[110.9]]). A 10,000 A (10 kAIC) breaker on a service with 22,000 A available fault current can explode instead of opening.</li>
<li><b>Short-circuit current ratings</b>: overcurrent devices and equipment ratings must be coordinated with the available fault current so a fault can be cleared without extensive damage ([[110.10]]).</li>
<li><b>Field marking</b>: service equipment in <b>other than dwelling units</b> must be marked with the available fault current and the <b>date</b> the calculation was done ([[110.24(A)]]). Update it if changes affect the available fault current ([[110.24(B)]]). Exception: not required in industrial installations where only qualified persons service the equipment.</li>
<li><b>Series ratings</b>: when breakers are applied using a series combination rating, the enclosure gets a field marking saying so, including "IDENTIFIED REPLACEMENT COMPONENTS REQUIRED" ([[110.22(B)]] engineered, [[110.22(C)]] tested).</li>
</ul>
<div class="test"><b>Vocabulary</b>"AIC" or "kAIC" = amps interrupting capacity. "SCCR" = short-circuit current rating. You'll see both on breaker and panel labels.</div>`
    },
    {
      id: 'connections', title: 'Connections and terminal temperature (110.14)',
      html: `
<ul>
<li>Terminals and connectors must be <b>identified for the conductor material</b>: AL/CU marked lugs for aluminum. Don't mix copper and aluminum in the same terminal unless it's identified for that ([[110.14]]).</li>
<li><b>Wire-binding screws</b> (the screw terminals on a receptacle) are for 10 AWG and smaller ([[110.14(A)]]).</li>
<li><b>Splices</b>: use splicing devices identified for the use (wire nuts, crimps, split bolts). Splices and bare ends must be covered with insulation equal to the wire's. Connectors for direct burial must be listed for it ([[110.14(B)]]).</li>
<li><b>Torque</b>: tighten to the values marked on the equipment or in the manufacturer's instructions, using an <b>approved means</b>, such as a torque wrench or screwdriver, or shear-bolt/breakaway connectors that show the right torque was reached ([[110.14(D)]]).</li>
</ul>
<h3>Terminal temperature: why the 90°C column isn't the answer</h3>
<p>The wire's usable ampacity can't exceed the temperature rating of the <b>lowest-rated</b> thing it connects to ([[110.14(C)]]):</p>
<div class="tablewrap"><table>
<tr><th>Equipment</th><th>Use the ampacity from the…</th></tr>
<tr><td>Circuits <b>100 A or less</b>, or terminals marked for 14–1 AWG</td><td><b>60°C</b> column (unless equipment is listed and marked for higher)</td></tr>
<tr><td>Circuits <b>over 100 A</b>, or terminals marked for wire larger than 1 AWG</td><td><b>75°C</b> column</td></tr>
</table></div>
<p>Higher-rated wire (THHN, 90°C) is still useful: you can start from its 90°C ampacity when you apply derating (correction and adjustment), as long as the final answer doesn't exceed the terminal-rated column.</p>
<div class="test"><b>Exam trap</b>A question about 10 AWG THHN on a 30 A breaker: the 90°C ampacity is 40 A, but the terminal limits it to the 60°C value, 30 A (and 240.4(D) also caps it at 30 A).</div>`
    },
    {
      id: 'markings', title: 'Labels and markings',
      html: `
<ul>
<li><b>High leg</b>: on a 4-wire delta where the midpoint of one phase winding is grounded (a "high-leg delta" or "wild leg" system), the high leg must be marked <b>orange</b> wherever the neutral is also present ([[110.15]]).</li>
<li><b>Arc-flash label</b>: in <b>other than dwelling units</b>, service equipment and feeder-supplied equipment like switchboards, panelboards, industrial control panels, meter sockets, and MCCs that may be worked on energized need a permanent arc-flash label ([[110.16]]) with:
  <ol><li>Nominal system voltage</li><li>Arc flash boundary</li><li>Available incident energy <b>or</b> minimum required PPE</li><li>Date of the assessment</li></ol></li>
<li><b>Field-applied hazard markings</b> (caution, warning, danger signs) must warn of the hazard with effective words, colors, and symbols, be permanently attached, and <b>not be handwritten</b> (except parts that may change) ([[110.21(B)]]).</li>
<li><b>Disconnect identification</b>: each disconnect must be marked to show its purpose. In other than one- or two-family dwellings, the marking must also identify the <b>circuit source and its location</b> ([[110.22(A)]]). For example: "AHU-1 · fed from Panel 2A, circuit 14, Elec Rm 101."</li>
<li><b>Lockable disconnects</b>: where the code requires a disconnect to be lockable open, the locking provision must stay in place with or without the lock installed ([[110.25]]). A removable lock-off clip that falls off doesn't count.</li>
</ul>`
    },
    {
      id: 'workspace', title: 'Working space (110.26)',
      html: `
<p>The clear space in front of panels, switchboards, disconnects, and MCCs that may be worked on while energized. Inspectors check this constantly.</p>
<h3>Depth: [[Table 110.26(A)(1)]]</h3>
<div class="tablewrap"><table>
<tr><th>Voltage to ground</th><th>Condition 1</th><th>Condition 2</th><th>Condition 3</th></tr>
<tr><td>0–150 V</td><td>3 ft</td><td>3 ft</td><td>3 ft</td></tr>
<tr><td>151–600 V</td><td>3 ft</td><td>3½ ft</td><td>4 ft</td></tr>
<tr><td>601–1000 V</td><td>3 ft</td><td>4 ft</td><td>5 ft</td></tr>
</table></div>
<ul>
<li><b>Condition 1</b>: live parts on one side, nothing live or grounded on the other.</li>
<li><b>Condition 2</b>: live parts on one side, <b>grounded</b> parts on the other. <b>Concrete, brick, or tile walls count as grounded.</b></li>
<li><b>Condition 3</b>: live parts on both sides (panels facing each other).</li>
</ul>
<p>A 208Y/120 V panel is 120 V to ground, so it's in the 0–150 V row: 3 ft. A 480Y/277 V panel is 277 V to ground, so it's 151–600 V.</p>
<ul>
<li>Depth is measured from the <b>enclosure front</b> (or opening) ([[110.26(A)]]).</li>
<li><b>Dead-front</b> switchboards, switchgear, and MCCs don't need working space at the back or sides if everything you'd service is reachable from the front. If rear access is needed for nonelectrical parts, leave at least 30 in. horizontally.</li>
</ul>
<h3>Width and height</h3>
<ul>
<li><b>Width</b>: the width of the equipment or <b>30 in.</b>, whichever is greater. Doors must be able to open at least 90° ([[110.26(A)]]).</li>
<li><b>Height</b>: clear from the floor to <b>6½ ft</b> or the height of the equipment, whichever is greater. Equipment associated with the installation (like a concrete housekeeping pad) may stick out up to <b>6 in.</b> beyond the front of the electrical equipment.</li>
<li><b>Limited access</b> (equipment that must go above a lay-in ceiling or in a crawl space): an opening at least <b>22 in. × 22 in.</b> above a lay-in ceiling, or <b>22 in. × 30 in.</b> into a crawl space. Width still 30 in. minimum, doors still open 90°.</li>
</ul>
<h3>Other rules</h3>
<ul>
<li><b>No storage</b> in the working space ([[110.26(B)]]).</li>
<li><b>Entrances</b>: at least one entrance ([[110.26(C)]]). For large equipment rated <b>1200 A or more and over 6 ft wide</b>, you need an entrance at <b>each end</b>, at least 24 in. wide and 6½ ft high (unless egress is unobstructed or the working space is twice the required depth).</li>
<li><b>Personnel doors</b>: for equipment rated <b>800 A or more</b> (with OCPDs, switching, or control devices), doors less than <b>25 ft</b> from the nearest edge of the working space must open at least 90° in the direction of egress and have <b>listed panic hardware</b> or listed fire exit hardware.</li>
<li><b>Lighting</b>: working spaces about service equipment, switchboards, switchgear, panelboards, and MCCs indoors need illumination, and it can't be controlled only by automatic means ([[110.26(D)]]).</li>
<li><b>Dedicated space</b>: the footprint of the equipment from the floor up to <b>6 ft above the equipment</b> (or the structural ceiling, if lower) is reserved for electrical. No piping, ducts, leak protection, or other foreign equipment in that zone ([[110.26(E)]]). A drop ceiling with removable panels is allowed in the zone. A drop ceiling is <b>not</b> the structural ceiling.</li>
<li><b>Above the dedicated space</b>: foreign systems (pipes, ducts) are allowed only if protection keeps condensation, leaks, or breaks off the electrical equipment. Sprinkler protection is permitted for the dedicated space where the piping complies with 110.26(E).</li>
<li><b>Outdoors</b>: dedicated space runs from grade to 6 ft above the equipment. Structural overhangs and roof extensions are allowed in it.</li>
<li><b>Locked rooms</b>: electrical rooms or enclosures controlled by locks count as accessible to qualified persons ([[110.26(F)]]).</li>
</ul>
<div class="job"><b>On the job</b>Mark out the working space in tape before the plumbers and HVAC guys arrive. Water pipes over a panel are a classic failed inspection.</div>`
    },
    {
      id: 'guarding', title: 'Guarding, enclosures, and "within sight"',
      html: `
<ul>
<li><b>Guarding live parts</b>: live parts at 50 V and up must be guarded by enclosures, a room accessible only to qualified persons, partitions, platforms, or <b>elevation</b> ([[110.27(A)]]):
  <ul><li>8 ft for 50–300 V</li><li>8 ft 6 in. for 301–600 V</li><li>8 ft 7 in. for 601–1000 V</li></ul></li>
<li>Rooms with exposed live parts get <b>warning signs</b> forbidding unqualified persons ([[110.27(C)]]).</li>
<li><b>Enclosure types</b>: enclosures must be marked with a type number from [[Table 110.28]]. Common ones: <b>Type 1</b> indoor general purpose; <b>Type 3R</b> outdoor rainproof (most outdoor panels and disconnects); <b>Type 4</b> watertight (hosedown); <b>4X</b> watertight and corrosion resistant (stainless or fiberglass); <b>Type 12</b> indoor industrial, dust and drip tight.</li>
<li><b>"Within sight"</b> means visible and not more than <b>50 ft</b> away ([[110.29]]). This matters for motor and AC disconnects later.</li>
<li>Over 1000 V installations (Part III) have their own working space table, [[Table 110.34(A)]].</li>
</ul>`
    }
  ],
  questions: [
    { l: 'art90', q: 'The purpose of the NEC is:', c: ['The practical safeguarding of persons and property from hazards arising from the use of electricity', 'To serve as a design specification', 'To be an instruction manual for untrained persons', 'To make installations efficient and ready for future expansion'], w: '90.2(B). It is not a design specification or an instruction manual for untrained persons.', r: '90.2(B)' },
    { l: 'art90', q: 'An installation that complies with the NEC is essentially free from hazard, but not necessarily:', c: ['Efficient, convenient, or adequate for good service or future expansion', 'Safe', 'Legal', 'Inspectable'], w: '90.2(C) Adequacy.', r: '90.2(C)' },
    { l: 'art90', q: 'Service drops, service laterals, and their metering under the exclusive control of the electric utility are:', c: ['Not covered by the NEC', 'Covered by Article 230', 'Covered by Article 225', 'Covered only over 600 V'], w: '90.2(A)(2)(5): utility installations under their exclusive control are not covered.', r: '90.2(A)' },
    { l: 'art90', q: 'Who is responsible for making interpretations of the code rules and deciding on approval of equipment and materials?', c: ['The authority having jurisdiction (AHJ)', 'The equipment manufacturer', 'The master electrician', 'NFPA'], w: '90.4(B). The AHJ also grants special permission.', r: '90.4(B)' },
    { l: 'art90', q: 'By special permission, a specific code requirement may be waived or an alternative method allowed by:', c: ['The AHJ, where equivalent objectives are achieved by effective safety', 'The general contractor', 'The utility', 'The building owner'], w: '90.4(C).', r: '90.4(C)' },
    { l: 'art90', q: 'If the code requires a product that is not yet available, the AHJ may permit:', c: ['Products that comply with the most recent previous edition of the code adopted by the jurisdiction', 'Any unlisted product', 'Only imported products', 'Nothing until the product exists'], w: '90.4(D) New products, constructions, or materials.', r: '90.4(D)' },
    { l: 'art90', q: 'Factory-installed internal wiring of listed equipment:', c: ['Need not be inspected at installation, except to detect alterations or damage', 'Must be completely inspected', 'Must be rewired in the field', 'Must be meggered before energizing'], w: '90.7.', r: '90.7' },
    { t: 'find', l: 'art90', q: 'Where does the code say the AHJ interprets the rules and grants special permission?', c: ['90.4', '90.2', '110.2', '90.7'], w: '90.4 Enforcement.', r: '90.4' },
    { l: 'basics', q: 'Wooden plugs driven into holes in concrete or masonry to mount electrical equipment are:', c: ['Not permitted', 'Permitted', 'Permitted for light equipment only', 'Permitted indoors only'], w: '110.13(A).', r: '110.13(A)' },
    { l: 'basics', q: 'Listed equipment must be installed and used according to:', c: ['Any instructions included in the listing or labeling', 'The foreman\'s preference', 'The previous code edition', 'Informational notes only'], w: 'Manufacturer instructions that are part of the listing become requirements.', r: '110.3(B)' },
    { l: 'basics', q: 'When the code gives a conductor size without naming the material, it refers to:', c: ['Copper', 'Aluminum', 'Copper-clad aluminum', 'Any material'], w: 'Sizes apply to copper unless other material is specified.', r: '110.5' },
    { l: 'basics', q: 'Conductor sizes in the NEC are expressed in:', c: ['AWG or circular mils', 'Millimeters only', 'Square inches', 'Pounds per foot'], w: 'AWG or circular mils (kcmil for large sizes).', r: '110.6' },
    { l: 'basics', q: 'Completed wiring must be free of short circuits, ground faults, or connections to ground other than as permitted. This is:', c: ['Wiring integrity', 'Mechanical execution of work', 'Interrupting rating', 'Listing'], w: '110.7 Wiring Integrity.', r: '110.7' },
    { l: 'basics', q: 'Internal parts of equipment like busbars and terminals must not be:', c: ['Damaged or contaminated by paint, plaster, cleaners, or abrasives', 'Torqued', 'Labeled', 'Inspected'], w: '110.12(B) Integrity of electrical equipment and connections.', r: '110.12(B)' },
    { l: 'fault', q: 'Equipment intended to interrupt current at fault levels must have an interrupting rating at least equal to:', c: ['The available fault current at its line terminals', 'The breaker\'s trip rating', '10,000 A', 'The load current'], w: 'Interrupting rating ≥ available fault current.', r: '110.9' },
    { l: 'fault', q: 'Service equipment must be field marked with the available fault current in:', c: ['Other than dwelling units', 'Dwelling units only', 'All occupancies', 'Only hospitals'], w: 'Other than dwelling units, with the date of the calculation.', r: '110.24(A)' },
    { l: 'fault', q: 'The available fault current field marking must include:', c: ['The date the calculation was performed', 'The installer\'s license number', 'The utility account number', 'The breaker brand'], w: '110.24(A).', r: '110.24(A)' },
    { l: 'fault', q: 'The 110.24 available fault current field marking is not required:', c: ['In industrial installations where conditions of maintenance and supervision ensure only qualified persons service the equipment', 'In any commercial building', 'On services over 400 A', 'When the utility provides the number'], w: '110.24 Exception.', r: '110.24' },
    { l: 'fault', q: 'Breakers applied with a manufacturer-tested series combination rating need an enclosure marking that says, in part:', c: ['IDENTIFIED REPLACEMENT COMPONENTS REQUIRED', 'DANGER HIGH VOLTAGE', 'SERVICE DISCONNECT', 'NO USER SERVICEABLE PARTS'], w: '110.22(C): CAUTION, SERIES COMBINATION SYSTEM RATED ___ AMPERES. IDENTIFIED REPLACEMENT COMPONENTS REQUIRED.', r: '110.22(C)' },
    { l: 'connections', q: 'For circuits rated 100 A or less, terminal ampacity is normally based on the ___ column unless the equipment is listed and marked otherwise.', c: ['60°C', '75°C', '90°C', '30°C'], w: '110.14(C)(1)(a): 100 A or less, or 14–1 AWG terminals → 60°C.', r: '110.14(C)' },
    { l: 'connections', q: 'For circuits rated over 100 A, terminal ampacity is based on the ___ column.', c: ['75°C', '60°C', '90°C', '105°C'], w: '110.14(C)(1)(b).', r: '110.14(C)' },
    { l: 'connections', q: 'Can 90°C conductors be installed on 75°C terminals?', c: ['Yes, but ampacity is limited to the 75°C value', 'No, never', 'Yes, at their full 90°C ampacity', 'Only for motors'], w: 'Higher-rated wire is allowed; ampacity is based on the terminal rating. The 90°C value can be used for derating.', r: '110.14(C)' },
    { l: 'connections', q: 'All splices and free ends of conductors must be covered with:', c: ['Insulation equivalent to the conductors\' or an identified insulating device', 'Electrical tape only', 'Nothing if inside a box', 'Heat shrink only'], w: '110.14(B).', r: '110.14(B)' },
    { l: 'connections', q: 'Splice connectors for direct-buried conductors must be:', c: ['Listed for direct burial', 'Soldered', 'Taped twice', 'Inside a box'], w: '110.14(B).', r: '110.14(B)' },
    { l: 'connections', q: 'Can copper and aluminum be mixed in the same terminal?', c: ['Only if the device is identified for that purpose and conditions of use', 'Yes, always', 'Never', 'Only outdoors'], w: '110.14: dissimilar conductors shall not be intermixed unless identified for the purpose.', r: '110.14' },
    { l: 'connections', q: 'Wire-binding screws (like the screw terminals on a receptacle) are permitted for conductors:', c: ['10 AWG or smaller', '8 AWG or smaller', '12 AWG or smaller', 'Of any size'], w: '110.14(A).', r: '110.14(A)' },
    { l: 'connections', q: 'Where torque values are marked on equipment or given in the instructions, they must be achieved with:', c: ['An approved means, such as a torque tool or a breakaway-style device', 'Hand tightening until snug', 'An impact driver', 'Retightening after one week'], w: '110.14(D).', r: '110.14(D)' },
    { l: 'connections', q: 'A breaker terminal is marked for 14–1 AWG and is not marked for higher temperature. 90°C THHN is landed on it. Its ampacity is taken from:', c: ['The 60°C column', 'The 75°C column', 'The 90°C column', 'The 105°C column'], w: '110.14(C)(1)(a): 100 A or less, or marked 14 through 1 AWG → 60°C unless listed and identified otherwise.', r: '110.14(C)' },
    { l: 'markings', q: 'On a 4-wire delta with the midpoint of one phase grounded, the high leg must be marked:', c: ['Orange', 'Red', 'Blue', 'Purple'], w: 'High leg = orange.', r: '110.15' },
    { l: 'markings', q: 'Which is NOT one of the required items on a 110.16 arc-flash label?', c: ['The installer\'s name', 'Nominal system voltage', 'Arc flash boundary', 'Date of the assessment'], w: 'Required: voltage, arc flash boundary, incident energy or PPE level, and date.', r: '110.16' },
    { l: 'markings', q: 'Arc-flash hazard labels per 110.16 are required on panelboards in:', c: ['Other than dwelling units', 'Dwelling units only', 'All buildings including houses', 'Only industrial buildings'], w: 'In other than dwelling units.', r: '110.16' },
    { l: 'markings', q: 'Field-applied danger and warning labels may be handwritten.', c: ['False, except for portions that are variable', 'True', 'True if in permanent marker', 'True indoors only'], w: 'Not handwritten, except parts that may change, which must be legible.', r: '110.21(B)' },
    { l: 'markings', q: 'In a commercial building, a disconnect\'s marking must identify its purpose and:', c: ['The circuit source and its location', 'The installer\'s name', 'The date installed', 'The wire size'], w: 'In other than one- or two-family dwellings.', r: '110.22(A)' },
    { l: 'markings', q: 'Where a disconnect must be lockable open, the locking provision must:', c: ['Remain in place with or without the lock installed', 'Be removable', 'Be on the load side', 'Be a padlock only'], w: '110.25 (cord-and-plug connections excepted).', r: '110.25' },
    { v: 1, l: 'workspace', q: 'Minimum working space depth for a 208Y/120 V panel (Condition 1):', c: ['3 ft', '3½ ft', '4 ft', '30 in.'], w: '120 V to ground → 0–150 V row → 3 ft in all conditions.', r: 'Table 110.26(A)(1)' },
    { v: 1, l: 'workspace', q: 'Minimum working space depth for a 480Y/277 V panel facing a concrete wall:', c: ['3½ ft', '3 ft', '4 ft', '5 ft'], w: '277 V to ground (151–600 V), Condition 2 (concrete is grounded) → 3 ft 6 in.', r: 'Table 110.26(A)(1)' },
    { v: 1, l: 'workspace', q: '480Y/277 V panels on both sides of an aisle facing each other need:', c: ['4 ft', '3½ ft', '3 ft', '6 ft'], w: 'Condition 3, 151–600 V → 4 ft.', r: 'Table 110.26(A)(1)' },
    { v: 1, l: 'workspace', q: 'For working-space purposes, a concrete or brick wall is considered:', c: ['Grounded', 'Insulating', 'Live', 'Not counted'], w: 'Condition 2 note: concrete, brick, or tile walls are considered grounded.', r: 'Table 110.26(A)(1)' },
    { l: 'workspace', q: 'Minimum width of working space in front of a panel:', c: ['30 in. or the width of the equipment, whichever is greater', '24 in.', '36 in.', 'The width of the equipment only'], w: '110.26(A)(2).', r: '110.26(A)' },
    { l: 'workspace', q: 'Minimum height of working space:', c: ['6½ ft or the height of the equipment, whichever is greater', '6 ft', '7 ft', '8 ft'], w: '2.0 m (6½ ft).', r: '110.26(A)' },
    { l: 'workspace', q: 'Working space may be used for storage if it is moved before work.', c: ['False', 'True', 'True in dwellings', 'True for 120 V panels'], w: 'Working space shall not be used for storage.', r: '110.26(B)' },
    { l: 'workspace', q: 'An entrance at each end of the working space is required for equipment rated ___ or more and over 6 ft wide.', c: ['1200 A', '800 A', '600 A', '2000 A'], w: '110.26(C)(2).', r: '110.26(C)' },
    { l: 'workspace', q: 'Personnel doors within 25 ft of working space for equipment rated ___ or more must open in the direction of egress with listed panic hardware.', c: ['800 A', '1200 A', '400 A', '600 A'], w: '110.26(C)(3).', r: '110.26(C)' },
    { l: 'workspace', q: 'The dedicated electrical space extends from the floor to ___ above the equipment or to the structural ceiling, whichever is lower.', c: ['6 ft', '3 ft', '6½ ft', '10 ft'], w: '110.26(E)(1)(a): 1.8 m (6 ft).', r: '110.26(E)' },
    { l: 'workspace', q: 'Which may be located in the dedicated space above a panelboard?', c: ['A suspended ceiling with removable panels', 'A water pipe', 'An HVAC duct', 'A roof drain line'], w: 'Suspended ceilings with removable panels are permitted in the zone. Piping, ducts, and other foreign equipment are not.', r: '110.26(E)' },
    { l: 'workspace', q: 'Working space depth is measured from:', c: ['The enclosure front or opening, if the live parts are enclosed', 'The back wall', 'The center of the equipment', 'The nearest door'], w: '110.26(A)(1): distances are measured from the enclosure front or opening.', r: '110.26(A)' },
    { l: 'workspace', q: 'Working space is not required at the back or sides of a dead-front switchboard or MCC when:', c: ['All connections and renewable or adjustable parts are accessible from other than the back or sides', 'It operates under 600 V', 'It is in a locked room', 'It is rated under 1200 A'], w: '110.26(A)(1)(a).', r: '110.26(A)' },
    { l: 'workspace', q: 'Within the height of the working space, a concrete pad or other equipment associated with the installation may extend up to ___ beyond the front of the electrical equipment.', c: ['6 in.', '3 in.', '12 in.', '2 in.'], w: '110.26(A)(3): not more than 150 mm (6 in.).', r: '110.26(A)' },
    { l: 'workspace', q: 'Equipment that must be installed above a lay-in ceiling needs an access opening at least:', c: ['22 in. × 22 in.', '22 in. × 30 in.', '24 in. × 24 in.', '18 in. × 18 in.'], w: '110.26(A)(4)(1). A crawl space opening is 22 in. × 30 in.', r: '110.26(A)' },
    { l: 'workspace', q: 'Large equipment that needs an entrance at each end may have just one entrance if the working space depth is:', c: ['Twice the depth required by Table 110.26(A)(1)', 'At least 6 ft', 'Well lit', 'Fire rated'], w: '110.26(C)(2)(b). A continuous, unobstructed way of egress also allows a single entrance.', r: '110.26(C)' },
    { l: 'workspace', q: 'Personnel doors serving the working space of equipment rated 800 A or more (within 25 ft) must open at least:', c: ['90° in the direction of egress', '180°', '45° in any direction', 'Inward only'], w: '110.26(C)(3): at least 90° in the direction of egress, with listed panic or fire exit hardware.', r: '110.26(C)' },
    { l: 'workspace', q: 'The area above the 6 ft dedicated electrical space may contain foreign systems like piping if:', c: ['Protection is installed to keep condensation, leaks, or breaks off the electrical equipment', 'The pipes are insulated', 'They are at least 10 ft up', 'The AHJ is notified'], w: '110.26(E)(1)(b).', r: '110.26(E)' },
    { l: 'workspace', q: 'For an outdoor panel, the dedicated equipment space extends from grade to ___ above the equipment.', c: ['6 ft', '3 ft', '6½ ft', '8 ft'], w: '110.26(E)(2)(c): 1.8 m (6 ft). Structural overhangs and roof extensions are allowed in the zone.', r: '110.26(E)' },
    { l: 'workspace', q: 'For working space purposes, a dropped or suspended ceiling that adds no strength to the building is:', c: ['Not considered a structural ceiling', 'The structural ceiling', 'Part of the working space', 'Not allowed near panels'], w: '110.26(E)(1)(d).', r: '110.26(E)' },
    { l: 'workspace', q: 'Lighting for working space around indoor panelboards may be controlled only by automatic means (occupancy sensor).', c: ['False', 'True', 'True if on emergency power', 'True in dwellings'], w: 'Control of all luminaires by automatic means shall not be permitted.', r: '110.26(D)' },
    { l: 'guarding', q: 'Live parts at 120/208 V guarded by elevation must be at least ___ above the floor.', c: ['8 ft', '7 ft', '8 ft 6 in.', '10 ft'], w: '50–300 V: 8 ft. 301–600 V: 8 ft 6 in. 601–1000 V: 8 ft 7 in.', r: '110.27(A)' },
    { l: 'guarding', q: 'Live parts at 480 V guarded by elevation must be at least ___ above the floor.', c: ['8 ft 6 in.', '8 ft', '8 ft 7 in.', '9 ft'], w: '480 V between ungrounded conductors falls in 301–600 V.', r: '110.27(A)' },
    { l: 'guarding', q: '"Within sight" means visible and not more than ___ away.', c: ['50 ft', '25 ft', '100 ft', '10 ft'], w: '15 m (50 ft).', r: '110.29' },
    { l: 'guarding', q: 'The enclosure type commonly used outdoors as "rainproof" is:', c: ['Type 3R', 'Type 1', 'Type 12', 'Type 4X only'], w: 'Rainproof: Types 3R and 3RX. Watertight: 4, 4X, 6, 6P.', r: '110.28' },
    { t: 'find', l: 'guarding', q: 'Where is the working space depth table?', c: ['Table 110.26(A)(1)', 'Table 110.34(A)', 'Table 110.28', 'Table 110.31'], w: '110.34(A) is the over-1000 V table.', r: 'Table 110.26(A)(1)' },
    { t: 'find', l: 'guarding', q: 'Where is the rule on terminal temperature ratings (60°C/75°C)?', c: ['110.14(C)', '310.16', '110.3(B)', '240.4'], w: '110.14(C) Temperature limitations.', r: '110.14(C)' },
    { t: 'find', l: 'guarding', q: 'Where are the requirements for arc-flash labels?', c: ['110.16', '110.21(B)', '110.24', '110.26'], w: '110.16.', r: '110.16' },
    { t: 'find', l: 'guarding', q: 'Where is the definition of "in sight from / within sight"?', c: ['110.29', 'Article 100', '430.102', '110.26'], w: 'In the 2026 NEC it\'s in 110.29.', r: '110.29' }
  ]
});
