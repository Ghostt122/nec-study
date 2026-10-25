(window.MODULES ||= []).push({
  id: 'ch3', icon: '🧵', title: 'Chapter 3: Wiring Methods',
  blurb: 'Article 300 general rules, boxes and box fill (314), conductors (310), and the raceway articles. The biggest exam category.',
  lessons: [
    {
      id: 'damage', title: 'Protection from damage (300.6)',
      html: `
<p>[[300.6]]: where wiring is subject to physical damage, it must be protected. The details are about nails and screws going through walls later.</p>
<ul>
<li><b>Bored holes in wood</b>: the edge of the hole must be at least <b>1¼ in.</b> from the edge of the stud or joist. If not, cover it with a <b>steel plate at least 1/16 in. thick</b> ([[300.6(A)]]). RMC, IMC, PVC, RTRC, and EMT don't need the plate.</li>
<li><b>Notches in wood</b>: allowed if it doesn't weaken the structure, with a 1/16 in. steel plate over the notch, installed before the drywall goes up.</li>
<li><b>NM cable through metal studs</b>: listed bushings or grommets must cover the metal edges, secured before you pull the cable ([[300.6(B)]]).</li>
<li><b>Parallel to framing</b>: keep cables and raceways at least 1¼ in. from the face of the stud, or protect them with a plate ([[300.6(D)]]).</li>
<li><b>Big wire, sharp edges</b>: where raceways have <b>4 AWG or larger</b> conductors entering a box or enclosure, use an identified fitting with a smoothly rounded insulating surface, like an insulating bushing ([[300.6(G)]]).</li>
</ul>
<div class="job"><b>On the job</b>EMT in metal studs is exempt from nail plates. MC or NM in wood studs near the face gets a plate. Grommets go in metal-stud holes before NM is pulled.</div>`
    },
    {
      id: 'underground', title: 'Underground (300.7)',
      html: `
<p>[[300.7]] covers anything buried. The burial depth table is [[Table 300.7(A)]] (it was Table 300.5 in older books). <b>Cover</b> is measured from the <b>top</b> of the pipe or cable to the top of finished grade.</p>
<div class="tablewrap"><table>
<tr><th>"All locations not specified" row</th><th>Min cover</th></tr>
<tr><td>Col 1: Direct-buried cables or conductors (UF, USE)</td><td>24 in.</td></tr>
<tr><td>Col 2: RMC or IMC</td><td>6 in.</td></tr>
<tr><td>Col 3: EMT, nonmetallic raceways (PVC) listed for direct burial, without concrete encasement</td><td>18 in.</td></tr>
<tr><td>Col 4: Residential branch circuits 120 V or less, GFCI, 20 A max</td><td>12 in.</td></tr>
<tr><td>Col 5: Irrigation/landscape lighting, 30 V or less</td><td>6 in.</td></tr>
</table></div>
<p>Under streets, highways, roads, alleys, driveways, and parking lots it's <b>24 in.</b> for every column. Read the other rows (under a building, under 4 in. slab, etc.) in the table itself.</p>
<ul>
<li>The inside of underground raceways and enclosures is a <b>wet location</b>, so use wet-rated wire like THWN-2 ([[300.7(B)]]).</li>
<li>Underground cables under a building must be in a raceway ([[300.7(C)]]).</li>
<li>Direct-buried conductors coming up out of the ground need protection from the required cover depth to at least <b>8 ft above grade</b>, but never more than 18 in. below grade ([[300.7(D)]]).</li>
<li>Service conductors buried 18 in. or deeper (not in concrete) need a <b>warning ribbon at least 12 in. above</b> them.</li>
<li>No rocks, paving chunks, or sharp stuff in the backfill ([[300.7(F)]]). Seal raceways where moisture could reach live parts ([[300.7(G)]]). Put a bushing on the end of a raceway that terminates underground where cables come out ([[300.7(H)]]).</li>
</ul>`
    },
    {
      id: 'wet', title: 'Corrosion, wet locations, temperature',
      html: `
<ul>
<li><b>Suitable materials</b>: raceways, boxes, fittings, supports, and hardware must suit the environment ([[300.8]]). Ferrous (steel) parts need corrosion protection. Threads cut in the field (rigid/IMC) must be coated with an <b>electrically conductive, corrosion-resistant compound</b> where corrosion protection is needed ([[300.8(A)]]).</li>
<li><b>Wet locations above grade</b>: the inside of a raceway in a wet location is a wet location, so wire must be wet-rated (W in the name) ([[300.11(A)]]). Raceways must be arranged to <b>drain</b> ([[300.11(B)]]).</li>
<li><b>Different temperatures</b>: where a raceway runs from a warm area to a cold area (into a freezer or out of a conditioned building), seal it to stop condensation ([[300.9(A)]]). Expansion fittings are used where needed ([[300.9(B)]]).</li>
<li><b>Dissimilar metals</b>: avoid them where practicable to prevent galvanic corrosion ([[358.14]] for EMT).</li>
</ul>
<div class="job"><b>On the job</b>Outdoor rooftop EMT: compression (raintight) fittings, wet-rated wire, and weep or drain at low points. Pipe coming out of a cooler gets a seal (duct seal or a sealing fitting).</div>`
    },
    {
      id: 'inraceway', title: 'Conductors in raceways and boxes',
      html: `
<ul>
<li><b>Same circuit together</b>: all conductors of a circuit, including the neutral and the equipment grounding conductor, go in the same raceway, cable, or trench ([[300.5(B)]]).</li>
<li><b>Induced currents</b>: in steel raceways and enclosures, AC phase conductors, neutral, and EGCs are grouped together so the steel doesn't heat up ([[300.22]]). That's why you can't run one phase per pipe in steel.</li>
<li><b>Box required</b>: you need a box or conduit body at every splice, junction, switch, outlet, pull point, termination, and transition between wiring methods ([[300.17]]). No splices buried in the pipe.</li>
<li><b>Free conductor</b>: leave at least <b>6 in.</b> of free conductor at each box. If the box opening is less than 8 in. in any dimension, the conductor must also extend at least <b>3 in.</b> outside the opening ([[300.16]]).</li>
<li><b>Conduit fill</b>: the number of conductors is limited by the percentage fill in [[Ch9 Table 1]] ([[300.19(A)]]): <b>1 wire 53%</b>, <b>2 wires 31%</b>, <b>over 2 wires 40%</b>. Nipples 24 in. or shorter can be filled to 60%. For same-size wires, Informative Annex C has ready-made tables.</li>
<li><b>Fire</b>: penetrations through fire-rated walls, floors, and ceilings must be <b>firestopped</b> with approved methods ([[300.23]]).</li>
<li><b>Ducts and plenums</b>: limits on wiring in ducts and air-handling spaces are in [[300.25]].</li>
</ul>
<div class="test"><b>Fill tip</b>On the exam, if all the wires are the same size and type, go straight to Annex C (Table C.1 for EMT, etc.). It's fast and allowed, and it gives the number of wires directly.</div>`
    },
    {
      id: 'boxfill', title: 'Box fill (314.16)',
      html: `
<p>Every box has a volume in cubic inches, either from [[Table 314.16(A)]] or marked on the box. Everything inside counts against it ([[314.16(B)]]). Each counted item uses the volume per conductor in [[Table 314.16(B)(4)]]:</p>
<div class="tablewrap"><table>
<tr><th>Wire size</th><th>14</th><th>12</th><th>10</th><th>8</th><th>6</th></tr>
<tr><td>in³ each</td><td>2.00</td><td>2.25</td><td>2.50</td><td>3.00</td><td>5.00</td></tr></table></div>
<h3>How to count</h3>
<div class="tablewrap"><table>
<tr><th>Item</th><th>Counts as</th></tr>
<tr><td>Each conductor that enters from outside the box</td><td>1 each (its own size)</td></tr>
<tr><td>Conductor that passes through without a splice</td><td>1</td></tr>
<tr><td>Wire that starts and ends in the box (pigtail, jumper)</td><td>0</td></tr>
<tr><td>Internal cable clamps (one or more)</td><td>1 total (largest wire)</td></tr>
<tr><td>Luminaire studs / hickeys</td><td>1 each type</td></tr>
<tr><td>Each device yoke (switch, receptacle)</td><td>2 (largest wire connected to it)</td></tr>
<tr><td>Equipment grounding conductors</td><td>1 total for up to 4, plus ¼ for each additional</td></tr>
</table></div>
<div class="tip"><b>Example</b>4" square × 2-1/8" box (30.3 in³). Six 12 AWG, three 12 AWG grounds, one receptacle:<br>
6 × 2.25 = 13.5 · grounds 1 × 2.25 = 2.25 · device 2 × 2.25 = 4.5 · <b>total 20.25 in³</b>. It fits.</div>
<p>Try your own in the <a href="#/tools/box">box fill calculator</a>.</p>
<h3>Pull and junction box size (314.28)</h3>
<p>For 4 AWG and larger in a raceway ([[314.28(A)]]):</p>
<ul>
<li><b>Straight pull</b>: box length at least <b>8 ×</b> the trade size of the largest raceway.</li>
<li><b>Angle or U pull, or splices</b>: distance to the opposite wall at least <b>6 ×</b> the largest raceway in the row, <b>plus</b> the sum of the other raceways in that row on the same wall.</li>
</ul>
<div class="tip"><b>Example</b>Straight pull with 2" conduits: 8 × 2 = 16 in. minimum length. Angle pull with a 3" and a 2" on the same wall: 6 × 3 + 2 = 20 in.</div>`
    },
    {
      id: 'boxinstall', title: 'Installing boxes (314)',
      html: `
<ul>
<li><b>Flush boxes in noncombustible walls</b> (drywall, tile, concrete): the box or mud ring can be set back no more than <b>¼ in.</b> from the finished surface ([[314.20(A)]]).</li>
<li><b>In combustible walls</b> (wood paneling): flush with the surface or sticking out, <b>never set back</b> ([[314.20(B)]]).</li>
<li><b>Gaps around boxes</b> in drywall or plaster must be repaired so there are no gaps more than ⅛ in. ([[314.21]]).</li>
<li>Every box needs a <b>cover, faceplate, or fixture canopy</b> when done ([[314.25]]).</li>
<li>Boxes must stay <b>accessible</b>, not buried behind walls or ceilings ([[314.29]]).</li>
<li><b>Unused openings</b> (knockouts) must be closed with something that protects as well as the box wall ([[110.12(A)]]). Use KO seals.</li>
<li>Ceiling boxes for <b>luminaires</b> must be designed for that ([[314.27(A)]]), and paddle fans need a box listed for fan support ([[314.27(B)]]).</li>
</ul>
<div class="job"><b>On the job</b>Set your mud rings for the drywall thickness (½" or ⅝" rings) so devices end up flush. Boxes too deep get extension rings.</div>`
    },
    {
      id: 'wire', title: 'Wire: types, colors, and ampacity basics',
      html: `
<h3>Reading insulation letters</h3>
<div class="tablewrap"><table>
<tr><td><b>T</b></td><td>Thermoplastic insulation</td></tr>
<tr><td><b>H</b></td><td>75°C rated (heat)</td></tr>
<tr><td><b>HH</b></td><td>90°C rated (high heat)</td></tr>
<tr><td><b>W</b></td><td>Wet location rated</td></tr>
<tr><td><b>N</b></td><td>Nylon jacket</td></tr>
<tr><td><b>-2</b></td><td>90°C wet or dry</td></tr>
<tr><td><b>X</b></td><td>Cross-linked polyethylene (XHHW)</td></tr>
</table></div>
<p><b>THHN/THWN-2</b> is the dual-rated wire you pull every day: 90°C dry, 90°C wet (the -2). The full list is [[Table 310.4(1)]].</p>
<h3>Colors</h3>
<ul>
<li><b>Neutral (grounded conductor)</b>: white or gray, or three white stripes ([[Art 200]]).</li>
<li><b>Equipment grounding conductor</b>: green, green with yellow stripes, or bare ([[250.119]]).</li>
<li>Hot (ungrounded) conductors: any other color. Commercial custom is <b>black-red-blue</b> for 208Y/120 V and <b>brown-orange-yellow</b> for 480Y/277 V. Those are industry custom, not NEC requirements, but your job specs will usually require them.</li>
</ul>
<h3>Ampacity: Table 310.16</h3>
<p>[[Table 310.16]] is the most used table in the book. It lists ampacity by size, metal (copper or aluminum), and temperature column (60°C, 75°C, 90°C). Copper examples:</p>
<div class="tablewrap"><table>
<tr><th>Size</th><th>60°C</th><th>75°C</th><th>90°C</th><th>Max breaker (small conductor rule)</th></tr>
<tr><td>14 AWG</td><td>15</td><td>20</td><td>25</td><td>15 A</td></tr>
<tr><td>12 AWG</td><td>20</td><td>25</td><td>30</td><td>20 A</td></tr>
<tr><td>10 AWG</td><td>30</td><td>35</td><td>40</td><td>30 A</td></tr>
</table></div>
<ul>
<li>The <b>small conductor rule</b> caps the breaker for 14, 12, and 10 copper at 15, 20, and 30 A ([[240.4(D)]]).</li>
<li><b>Terminations limit you</b>: most breakers and devices are rated 60°C or 75°C, so you can't use the 90°C column for the final ampacity at the terminal ([[110.14(C)]]). The 90°C column is a starting point for derating.</li>
<li><b>Derating</b>: more than 3 current-carrying conductors in a raceway → adjustment factors in [[Table 310.15(C)(1)]] (4–6 = 80%, 7–9 = 70%). Hot rooms or rooftops → temperature correction in [[Table 310.15(B)(1)(1)]]. Calculations come in a later section.</li>
</ul>`
    },
    {
      id: 'methods', title: 'Raceway articles: uses and limits',
      html: `
<p>Each article's .10 says where you <b>can</b> use it, and .12 says where you <b>can't</b>. The big ones:</p>
<div class="tablewrap"><table>
<tr><th>Method</th><th>Key "can't" or limit</th></tr>
<tr><td>EMT [[358.12]]</td><td>Not where subject to <b>severe</b> physical damage. Not to support luminaires or equipment (except small conduit bodies). Sizes ½ to 6 in. ([[358.20]]). Can be the EGC ([[358.60]]).</td></tr>
<tr><td>RMC [[344.10]]</td><td>Allowed in all atmospheric conditions and occupancies. Sizes ½ to 6 in. ([[344.20]]).</td></tr>
<tr><td>PVC [[352.12]]</td><td>Not in hazardous locations (except where allowed), not to support luminaires, not where subject to physical damage unless identified for it (Schedule 80), not where ambient is over 50°C (122°F). Sizes ½ to 6 in. ([[352.20]]). Needs a separate EGC because plastic doesn't carry fault current.</td></tr>
<tr><td>FMC [[348.12]]</td><td>Not in <b>wet locations</b>, not underground or in concrete, not where subject to physical damage, not in hoistways (except as allowed), battery rooms, or hazardous locations.</td></tr>
<tr><td>LFMC [[350.12]]</td><td>Not where subject to physical damage. This is the one for wet locations and motors.</td></tr>
<tr><td>ENT [[362.12]]</td><td>Not in hazardous locations, not exposed to direct sunlight unless identified, not to support luminaires, and more.</td></tr>
</table></div>
<h3>Wireways [[Art 376]]</h3>
<ul>
<li>Conductor fill: no more than <b>20%</b> of the cross section ([[376.22(A)]]).</li>
<li>Splices and taps: allowed if accessible, with fill no more than <b>75%</b> at that point ([[376.56(A)]]).</li>
<li>Derating only kicks in over <b>30</b> current-carrying conductors at any cross section ([[376.22(B)]]).</li>
<li>Supports: horizontal at each end and every <b>5 ft</b> (or at each end/joint of longer sections, max 10 ft). Vertical: every <b>15 ft</b> with no more than one joint between supports ([[376.30]]).</li>
</ul>
<h3>Cable tray [[Art 392]]</h3>
<p>A support system, not a raceway. Fill rules are in [[392.22]], supports in [[392.30]], bonding in [[392.60]].</p>`
    }
  ],
  questions: [
    { l: 'damage', q: 'A hole bored in a wood stud for a cable must be at least ___ from the nearest edge, or protected by a steel plate.', c: ['1¼ in.', '1 in.', '1½ in.', '¾ in.'], w: '32 mm (1¼ in.) from the edge of the wood member.', r: '300.6(A)' },
    { l: 'damage', q: 'A steel plate protecting cables in wood framing must be at least ___ thick.', c: ['1/16 in.', '1/8 in.', '1/32 in.', '1/4 in.'], w: '1.6 mm (1/16 in.) unless listed and marked thinner.', r: '300.6(A)' },
    { l: 'damage', q: 'Which wiring method does NOT need a steel plate when bored through wood closer than 1¼ in. to the edge?', c: ['EMT', 'NM cable', 'MC cable', 'AC cable'], w: 'RMC, IMC, PVC, RTRC, and EMT are exempt.', r: '300.6(A)' },
    { l: 'damage', q: 'NM cable through holes in metal studs must be protected by:', c: ['Listed bushings or grommets installed before the cable', 'Tape over the edges', 'Nothing if the holes are factory punched', 'A steel plate only'], w: 'Listed bushings or grommets covering all metal edges, securely fastened before the cable is pulled.', r: '300.6(B)' },
    { l: 'damage', q: 'Insulating bushings (or equivalent) are required where raceways contain insulated conductors of ___ or larger entering a box.', c: ['4 AWG', '6 AWG', '1/0 AWG', '8 AWG'], w: '4 AWG and larger.', r: '300.6(G)' },
    { l: 'underground', q: 'Minimum cover for direct-buried UF cable in "all locations not specified":', c: ['24 in.', '18 in.', '12 in.', '6 in.'], w: 'Column 1: 600 mm (24 in.).', r: 'Table 300.7(A)' },
    { l: 'underground', q: 'Minimum cover for rigid metal conduit in "all locations not specified":', c: ['6 in.', '12 in.', '18 in.', '24 in.'], w: 'Column 2 (RMC/IMC): 150 mm (6 in.).', r: 'Table 300.7(A)' },
    { l: 'underground', q: 'Minimum cover for PVC listed for direct burial (no concrete) in "all locations not specified":', c: ['18 in.', '24 in.', '12 in.', '6 in.'], w: 'Column 3: 450 mm (18 in.).', r: 'Table 300.7(A)' },
    { l: 'underground', q: 'Minimum cover for any wiring method under a street, driveway, or parking lot:', c: ['24 in.', '18 in.', '30 in.', '12 in.'], w: 'All columns: 600 mm (24 in.).', r: 'Table 300.7(A)' },
    { l: 'underground', q: 'Burial "cover" is measured from:', c: ['The top of the conduit or cable to the top of finished grade', 'The bottom of the trench to grade', 'The center of the conduit to grade', 'The bottom of the conduit to grade'], w: 'Note 1 to the table: top of the raceway or cable to top of finished grade.', r: 'Table 300.7(A)' },
    { l: 'underground', q: 'The inside of a raceway installed underground is considered:', c: ['A wet location', 'A damp location', 'A dry location', 'Unclassified'], w: 'So conductors must be wet-rated.', r: '300.7(B)' },
    { l: 'underground', q: 'Direct-buried conductors emerging from grade must be protected up to at least ___ above finished grade.', c: ['8 ft', '6 ft', '10 ft', '18 in.'], w: '2.5 m (8 ft) above finished grade.', r: '300.7(D)' },
    { l: 'underground', q: 'A warning ribbon for buried service conductors (18 in. or deeper, not in concrete) goes at least ___ above them.', c: ['12 in.', '6 in.', '18 in.', '24 in.'], w: '300 mm (12 in.) above the underground installation.', r: '300.7(D)' },
    { l: 'underground', q: 'Underground cables installed under a building must be:', c: ['In a raceway', 'Direct buried at 24 in.', 'Type UF', 'Encased in 2 in. of concrete'], w: 'With exceptions for certain MI and MC cable.', r: '300.7(C)' },
    { l: 'wet', q: 'The interior of a raceway in a wet location above grade is considered:', c: ['A wet location', 'A damp location', 'A dry location', 'A hazardous location'], w: 'Conductors must comply with 310.10(C) (wet-rated).', r: '300.11(A)' },
    { l: 'wet', q: 'Raceways in wet locations above grade must be arranged to:', c: ['Drain', 'Hold water', 'Be sealed airtight', 'Slope upward'], w: '300.11(B).', r: '300.11(B)' },
    { l: 'wet', q: 'A raceway going from a warm room into a walk-in cooler should be ___ to prevent condensation.', c: ['Sealed', 'Vented', 'Grounded twice', 'Painted'], w: 'Raceways exposed to different temperatures must be sealed to prevent circulation of warm air to the colder section.', r: '300.9(A)' },
    { l: 'wet', q: 'Field-cut threads on rigid conduit, where corrosion protection is needed, must be coated with:', c: ['An approved electrically conductive, corrosion-resistant compound', 'Paint', 'Teflon tape', 'Nothing'], w: 'Conductive compound so the joint still carries fault current.', r: '300.8(A)' },
    { l: 'inraceway', q: 'All conductors of the same circuit, including the neutral and EGC, must be:', c: ['In the same raceway or cable', 'In separate raceways', 'Twisted together', 'The same color'], w: 'Same raceway, cable, trench, or cord.', r: '300.5(B)' },
    { l: 'inraceway', q: 'Minimum free conductor length at each box for splices or connections:', c: ['6 in.', '3 in.', '8 in.', '12 in.'], w: '150 mm (6 in.), plus 3 in. outside the opening if the opening is less than 8 in.', r: '300.16(A)' },
    { l: 'inraceway', q: 'If a box opening is less than 8 in. in any dimension, each conductor must extend at least ___ outside the opening.', c: ['3 in.', '6 in.', '2 in.', '4 in.'], w: '75 mm (3 in.).', r: '300.16(B)' },
    { l: 'inraceway', q: 'Maximum conduit fill for three or more conductors (not a nipple):', c: ['40%', '31%', '53%', '60%'], w: 'Chapter 9 Table 1: 1 wire 53%, 2 wires 31%, over 2 wires 40%.', r: 'Ch9 Table 1' },
    { l: 'inraceway', q: 'Maximum fill for a single conductor in a conduit:', c: ['53%', '40%', '31%', '60%'], w: 'One conductor: 53%.', r: 'Ch9 Table 1' },
    { l: 'inraceway', q: 'Conduit nipples 24 in. or less may be filled to:', c: ['60%', '40%', '53%', '75%'], w: 'Chapter 9 Table 1, Note 4.', r: 'Ch9 Table 1' },
    { l: 'inraceway', q: 'A box or conduit body is required at each:', c: ['Splice point, pull point, and wiring method transition', 'Change in direction', '100 ft of conduit', '360° of bends only'], w: 'Every outlet, switch, splice, junction, termination, transition, and pull point (with listed exceptions).', r: '300.17' },
    { l: 'inraceway', q: 'Openings around penetrations through fire-rated walls must be:', c: ['Firestopped using approved methods', 'Left open for air', 'Filled with drywall mud only', 'Sealed with duct tape'], w: 'Maintain the fire resistance rating.', r: '300.23' },
    { l: 'inraceway', q: 'Why are all phase conductors and the EGC of an AC circuit grouped in the same steel raceway?', c: ['To avoid heating the steel by induction', 'To save conduit', 'For color coding', 'To meet box fill'], w: 'Induced currents in ferrous metal enclosures.', r: '300.22(A)' },
    { l: 'boxfill', q: 'Volume allowance for each 12 AWG conductor in box fill:', c: ['2.25 in³', '2.00 in³', '2.50 in³', '3.00 in³'], w: '14 = 2.00, 12 = 2.25, 10 = 2.50, 8 = 3.00, 6 = 5.00.', r: 'Table 314.16(B)(4)' },
    { l: 'boxfill', q: 'Volume allowance for each 14 AWG conductor:', c: ['2.00 in³', '2.25 in³', '1.75 in³', '2.50 in³'], w: '14 AWG = 2.00 in³.', r: 'Table 314.16(B)(4)' },
    { l: 'boxfill', q: 'A single receptacle (one yoke) counts as how many conductors in box fill?', c: ['2', '1', '0', '4'], w: 'Each yoke or strap = double volume allowance based on the largest conductor connected to it.', r: '314.16(B)' },
    { l: 'boxfill', q: 'Three internal cable clamps in a box count as:', c: ['1 conductor total', '3 conductors', '0', '2 conductors'], w: 'One or more internal clamps = a single volume allowance (largest conductor).', r: '314.16(B)' },
    { l: 'boxfill', q: 'Four equipment grounding conductors in a box count as:', c: ['1 conductor', '4 conductors', '2 conductors', '0'], w: 'Up to four EGCs = 1. Each additional EGC beyond four adds ¼.', r: '314.16(B)' },
    { l: 'boxfill', q: 'A pigtail that starts and ends inside the box counts as:', c: ['0', '1', '2', '½'], w: 'Conductors that don\'t leave the box aren\'t counted.', r: '314.16(B)' },
    { l: 'boxfill', q: 'Box fill: four 12 AWG, two 12 AWG grounds, one switch. Required volume?', c: ['15.75 in³', '13.50 in³', '18.00 in³', '20.25 in³'], w: '4 × 2.25 = 9 + grounds 2.25 + switch 2 × 2.25 = 4.5 → 15.75 in³.', r: '314.16(B)' },
    { l: 'boxfill', q: 'Straight pull, largest raceway 2 in. (4 AWG+ conductors). Minimum box length:', c: ['16 in.', '12 in.', '14 in.', '24 in.'], w: '8 × 2 = 16 in.', r: '314.28(A)' },
    { l: 'boxfill', q: 'Angle pull: a 3 in. and a 2 in. raceway on the same wall. Distance to the opposite wall:', c: ['20 in.', '18 in.', '24 in.', '30 in.'], w: '6 × 3 + 2 = 20 in.', r: '314.28(A)' },
    { l: 'boxinstall', q: 'In a drywall (noncombustible) wall, a flush box or mud ring may be set back no more than:', c: ['¼ in.', '⅛ in.', '½ in.', '0 in.'], w: '6 mm (¼ in.).', r: '314.20(A)' },
    { l: 'boxinstall', q: 'In a wood-paneled (combustible) wall, a flush box must be:', c: ['Flush with or projecting from the surface', 'Set back ¼ in. max', 'Set back ⅛ in. max', 'Recessed ½ in.'], w: 'Combustible surface = flush or projecting, never set back.', r: '314.20(B)' },
    { l: 'boxinstall', q: 'Gaps in drywall around a box must be repaired so none are larger than:', c: ['⅛ in.', '¼ in.', '1/16 in.', '½ in.'], w: '3 mm (⅛ in.).', r: '314.21' },
    { l: 'boxinstall', q: 'Unused openings in boxes and enclosures must be:', c: ['Closed with protection equivalent to the enclosure wall', 'Left open for ventilation', 'Taped over', 'Filled with foam'], w: 'Unused openings shall be closed.', r: '110.12(A)' },
    { l: 'wire', q: 'In THHN, the "HH" means:', c: ['90°C rated', '75°C rated', 'Heavy-duty', 'High-voltage'], w: 'H = 75°C, HH = 90°C.' },
    { l: 'wire', q: 'Which insulation letter means suitable for wet locations?', c: ['W', 'N', 'H', 'T'], w: 'W = wet. THWN, XHHW, THWN-2.' },
    { l: 'wire', q: 'Which colors may be used for an equipment grounding conductor?', c: ['Green, green with yellow stripes, or bare', 'White or gray', 'Green or white', 'Any color with green tape'], w: 'Insulated EGCs: green, or green with one or more yellow stripes; or bare.', r: '250.119' },
    { l: 'wire', q: 'Per the small conductor rule, 12 AWG copper is limited to a ___ breaker.', c: ['20 A', '25 A', '15 A', '30 A'], w: '14 Cu = 15 A, 12 Cu = 20 A, 10 Cu = 30 A.', r: '240.4(D)' },
    { l: 'wire', q: 'Ampacity of 10 AWG copper THHN in the 75°C column of Table 310.16:', c: ['35 A', '30 A', '40 A', '25 A'], w: '10 Cu: 30 / 35 / 40 A at 60 / 75 / 90°C.', r: 'Table 310.16' },
    { l: 'wire', q: 'Adjustment factor for 4–6 current-carrying conductors in a raceway:', c: ['80%', '70%', '50%', '90%'], w: '4–6: 80%, 7–9: 70%, 10–20: 50%.', r: 'Table 310.15(C)(1)' },
    { l: 'wire', q: 'Termination temperature limits are found in:', c: ['110.14(C)', '310.16', '240.4(D)', '110.26'], w: 'You can\'t exceed the temperature rating of the terminal.', r: '110.14(C)' },
    { l: 'methods', q: 'FMC (flex) may NOT be used in:', c: ['Wet locations', 'Dry locations', 'Accessible ceilings', 'Motor connections indoors'], w: 'Use LFMC (Sealtite) in wet locations.', r: '348.12' },
    { l: 'methods', q: 'EMT may not be used where subject to:', c: ['Severe physical damage', 'Any physical damage', 'Moisture', 'Sunlight'], w: 'Only severe physical damage is prohibited.', r: '358.12' },
    { l: 'methods', q: 'PVC may not be used where the ambient temperature exceeds ___ unless listed otherwise.', c: ['50°C (122°F)', '40°C (104°F)', '60°C (140°F)', '75°C (167°F)'], w: '352.12(D).', r: '352.12(D)' },
    { l: 'methods', q: 'The maximum trade size of EMT in the 2026 NEC is:', c: ['6', '4', '3', '5'], w: 'Metric designator 155 (trade size 6).', r: '358.20(B)' },
    { l: 'methods', q: 'Conductors in a metal wireway may not fill more than ___ of the cross section.', c: ['20%', '40%', '75%', '53%'], w: '20% for conductors. Splices and taps: 75% at that point.', r: '376.22(A)' },
    { l: 'methods', q: 'In a metal wireway, splices and taps (with conductors) may fill up to ___ of the area at that point.', c: ['75%', '20%', '40%', '60%'], w: '376.56(A).', r: '376.56(A)' },
    { l: 'methods', q: 'Adjustment factors apply in a metal wireway only when there are more than ___ current-carrying conductors at a cross section.', c: ['30', '3', '20', '9'], w: '376.22(B).', r: '376.22(B)' },
    { l: 'methods', q: 'Vertical runs of metal wireway must be supported at intervals not exceeding:', c: ['15 ft', '5 ft', '10 ft', '20 ft'], w: '4.5 m (15 ft), with no more than one joint between supports.', r: '376.30(B)' },
    { t: 'find', l: 'methods', q: 'Where is the burial depth table?', c: ['Table 300.7(A)', 'Table 300.5', 'Table 310.16', 'Table 352.30(B)'], w: '2026: Table 300.7(A). (Older books: Table 300.5.)', r: 'Table 300.7(A)' },
    { t: 'find', l: 'methods', q: 'Where are the conduit fill percentages (53/31/40)?', c: ['Chapter 9, Table 1', 'Chapter 9, Table 4', 'Table 300.19(B)', 'Annex C'], w: 'Ch 9 Table 1. Table 4 has conduit dimensions, and Annex C has same-size wire counts.', r: 'Ch9 Table 1' },
    { t: 'find', l: 'methods', q: 'Where do you find the box volumes for standard metal boxes?', c: ['Table 314.16(A)', 'Table 314.16(B)(4)', 'Table 312.9(A)', '314.28'], w: 'Table 314.16(A): metal boxes.', r: 'Table 314.16(A)' },
    { t: 'find', l: 'methods', q: 'Where is the volume allowance per conductor for box fill?', c: ['Table 314.16(B)(4)', 'Table 314.16(A)', 'Chapter 9, Table 5', 'Table 310.16'], w: 'Table 314.16(B)(4).', r: 'Table 314.16(B)(4)' },
    { t: 'find', l: 'methods', q: 'Where are the rules for pull and junction box sizing (8× / 6×)?', c: ['314.28', '314.16', '314.23', '312.6'], w: '314.28(A).', r: '314.28(A)' },
    { t: 'find', l: 'methods', q: 'Which table gives conductor ampacities for not more than three current-carrying conductors in raceway?', c: ['Table 310.16', 'Table 310.17', 'Table 310.15(C)(1)', 'Chapter 9 Table 8'], w: 'Table 310.16. Table 310.17 is single conductors in free air.', r: 'Table 310.16' },
    { t: 'find', l: 'methods', q: 'Where is the rule for 6 in. of free conductor at boxes?', c: ['300.16', '300.14', '314.16', '110.14'], w: '2026: 300.16. (Older books: 300.14.)', r: '300.16' },
    { t: 'find', l: 'methods', q: 'Where are the rules for protecting cables from nails and screws in wood framing?', c: ['300.6', '300.4', '300.7', '334.15'], w: '2026: 300.6. (Older books: 300.4.)', r: '300.6' },
    { t: 'find', l: 'methods', q: 'Where is the rule limiting bends to 360° between pull points for any raceway combination?', c: ['300.24', '358.24', '300.20', '314.28'], w: 'General rule 300.24, and each raceway\'s .24 section repeats it.', r: '300.24' },
    { t: 'find', l: 'methods', q: 'Where are the insulation types (THHN, XHHW, etc.) listed?', c: ['Table 310.4(1)', 'Table 310.16', 'Chapter 9 Table 5', 'Article 100'], w: 'Table 310.4(1): conductor applications and insulations.', r: 'Table 310.4(1)' }
  ]
});
