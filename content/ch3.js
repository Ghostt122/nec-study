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
<li><b>Parallel to framing</b>: keep cables and raceways at least 1¼ in. from the nearest edge of the stud, joist, or furring strip, or protect them with a 1/16 in. steel plate or sleeve. RMC, IMC, rigid nonmetallic conduit, and EMT are exempt ([[300.6(D)]]).</li>
<li><b>Under roof decking</b>: keep wiring at least <b>1½ in.</b> below the underside of the roof deck, and never concealed in metal-corrugated roof decking. Roofers' screws go through the deck. RMC and IMC with listed steel or malleable iron fittings and boxes are exempt ([[300.6(E)]]).</li>
<li><b>Big wire, sharp edges</b>: where raceways have <b>4 AWG or larger</b> insulated conductors entering a box, cabinet, enclosure, or raceway, protect them with one of these: an identified fitting with a smoothly rounded insulating surface (an insulating bushing), a listed metal fitting with smoothly rounded edges, identified insulating material fastened in place, or threaded hubs with a smoothly rounded or flared entry ([[300.6(G)]]).</li>
<li>A bushing made <b>entirely of plastic</b> can't be used to hold a fitting or raceway in place. You still need a locknut ([[300.6(G)]]).</li>
<li><b>Structural joints</b>: where a raceway crosses an expansion joint in a building, parking garage, or bridge, use a listed expansion/deflection fitting or other approved means ([[300.6(H)]]).</li>
</ul>
<div class="job"><b>On the job</b>EMT, rigid, and IMC don't need nail plates. MC or NM in wood studs near the face gets a plate. Grommets go in metal-stud holes before NM is pulled. Pipe crossing a building expansion joint gets an expansion/deflection fitting.</div>`
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
<p>Under streets, highways, roads, alleys, driveways, and parking lots it's <b>24 in.</b> for every column. Other rows worth knowing:</p>
<div class="tablewrap"><table>
<tr><th>Location</th><th>Col 1 direct burial</th><th>Col 2 RMC/IMC</th><th>Col 3 PVC/EMT</th></tr>
<tr><td>In a trench under 2 in. of concrete</td><td>18 in.</td><td>6 in.</td><td>12 in.</td></tr>
<tr><td>Under a 4 in. exterior slab, no vehicles, slab extends 6 in. past the run</td><td>18 in.</td><td>4 in.</td><td>4 in.</td></tr>
<tr><td>Under a building</td><td>0 (in raceway, or MC/MI identified for direct burial)</td><td>0</td><td>0</td></tr>
<tr><td>1- and 2-family dwelling driveways</td><td>18 in.</td><td>18 in.</td><td>18 in.</td></tr>
</table></div>
<p>If <b>solid rock</b> keeps you from getting the depth, use a metal raceway or a nonmetallic raceway allowed for direct burial, covered by at least <b>2 in. of concrete</b> down to the rock (Note 5). Raceways approved for burial only when concrete-encased need at least a 2 in. concrete envelope (Note 2).</p>
<ul>
<li>The inside of underground raceways and enclosures is a <b>wet location</b>, so use wet-rated wire like THWN-2 ([[300.7(B)]]).</li>
<li>Underground cables under a building must be in a raceway ([[300.7(C)]]).</li>
<li>Direct-buried conductors coming up out of the ground need protection from the required cover depth to at least <b>8 ft above grade</b>, but never more than 18 in. below grade ([[300.7(D)]]).</li>
<li>Service conductors buried 18 in. or deeper (not in concrete) need a <b>warning ribbon at least 12 in. above</b> them.</li>
<li>Where the raceway is subject to physical damage, the conductors go in EMT, RMC, IMC, RTRC-XW, <b>Schedule 80 PVC</b>, or equivalent ([[300.7(D)]]). That's why risers out of the ground are rigid or Sch 80.</li>
<li>Direct-buried conductors and cables can be spliced or tapped in the ground without a box, using methods per 110.14(B) ([[300.7(E)]]).</li>
<li>No rocks, paving chunks, or sharp stuff in the backfill ([[300.7(F)]]). Seal raceways where moisture could reach live parts, and seal spare raceways too ([[300.7(G)]]). Put a bushing on the end of a raceway that terminates underground where cables come out ([[300.7(H)]]).</li>
<li>All conductors of a circuit, including the neutral and EGC, go in the same raceway or cable, or close together in the same trench ([[300.7(I)]]).</li>
<li>Where the ground can settle or heave, arrange the run to prevent damage, for example S-loops or expansion fittings in risers ([[300.7(J)]]). Directional-bored raceways and cables must be approved for the purpose ([[300.7(K)]]).</li>
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
<li><b>Enamel only</b>: steel parts protected from corrosion only by enamel can't be used outdoors or in wet locations ([[300.8(A)]]).</li>
<li><b>Indoor wet locations</b> (dairies, laundries, canneries, washdown areas): exposed boxes, fittings, raceways, and cable are mounted with at least <b>¼ in. airspace</b> from the wall. Nonmetallic raceways, boxes, and fittings may sit directly on concrete, masonry, or tile ([[300.8(D)]]).</li>
<li><b>Sunlight</b>: nonmetallic raceways, boxes, and fittings exposed to the sun must be listed or identified as sunlight resistant ([[300.8(C)]]).</li>
<li><b>Nothing else in the pipe</b>: a raceway or cable tray with electrical conductors can't contain any pipe or tube for steam, water, air, gas, or drainage ([[300.10]]).</li>
</ul>
<div class="job"><b>On the job</b>Outdoor rooftop EMT: compression (raintight) fittings, wet-rated wire, and weep or drain at low points. Pipe coming out of a cooler gets a seal (duct seal or a sealing fitting).</div>`
    },
    {
      id: 'inraceway', title: 'Conductors in raceways and boxes',
      html: `
<ul>
<li><b>Same circuit together</b>: all conductors of a circuit, including the neutral and the equipment grounding conductor, go in the same raceway, cable, or trench ([[300.5(B)]]).</li>
<li><b>Induced currents</b>: in steel raceways and enclosures, AC phase conductors, neutral, and EGCs are grouped together so the steel doesn't heat up ([[300.22]]). That's why you can't run one phase per pipe in steel.</li>
<li><b>Box required</b>: you need a box or conduit body at every splice, junction, switch, outlet, pull point, termination, and transition between wiring methods ([[300.17]]). Exceptions include wireways and other raceways with removable covers, and cable coming out of a short protective sleeve of conduit (put a fitting on the end).</li>
<li><b>No splices in the pipe</b>: conductors must be continuous between boxes. No splice or tap inside a raceway, except in the ones that allow it, like wireways and auxiliary gutters ([[300.15(A)]]).</li>
<li><b>Free conductor</b>: leave at least <b>6 in.</b> of free conductor at each box. If the box opening is less than 8 in. in any dimension, the conductor must also extend at least <b>3 in.</b> outside the opening ([[300.16]]).</li>
<li><b>Conduit fill</b>: the number of conductors is limited by the percentage fill in [[Ch9 Table 1]] ([[300.19(A)]]): <b>1 wire 53%</b>, <b>2 wires 31%</b>, <b>over 2 wires 40%</b>. Nipples 24 in. or shorter between boxes can be filled to 60%, and the derating factors of 310.15(C)(1) don't apply to them (Note 4). EGCs and bonding jumpers count in the fill calculation (Note 3). When figuring how many same-size wires fit, round up if the answer comes out .8 or more (Note 7). For same-size wires, Informative Annex C has ready-made tables.</li>
<li><b>Bends</b>: no more than <b>360°</b> total between pull points, counting every bend in the run, even when the run mixes conduit types ([[300.24]]).</li>
<li><b>Fire</b>: penetrations through fire-rated walls, floors, and ceilings must be <b>firestopped</b> with approved methods ([[300.23]]).</li>
<li><b>Ducts and plenums</b>: no wiring at all in ducts that carry dust, loose stock, or flammable vapors, or in kitchen hood exhaust ducts ([[300.25(A)]]). In <b>other spaces used for air handling</b> (like the space above a ceiling used as a return-air plenum), the allowed methods include RMC, IMC, EMT, FMC, flexible metallic tubing, AC cable, and MC and MI cable without a nonmetallic outer jacket. Plastic cable ties there must be listed for low smoke and heat release ([[300.25(C)]]).</li>
<li><b>Above lift-out ceiling tiles</b>: wiring must be arranged and secured so the panels can still be removed ([[300.26]]).</li>
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
<tr><td>Unbroken loop or coil at least twice the 300.16 free length (12 in. or more)</td><td>2</td></tr>
<tr><td>Wire that starts and ends in the box (pigtail, jumper)</td><td>0</td></tr>
<tr><td>Internal cable clamps (one or more)</td><td>1 total (largest wire)</td></tr>
<tr><td>Luminaire studs / hickeys</td><td>1 each type</td></tr>
<tr><td>Each device yoke (switch, receptacle)</td><td>2 (largest wire connected to it)</td></tr>
<tr><td>Equipment grounding conductors</td><td>1 total for up to 4, plus ¼ for each additional (largest EGC)</td></tr>
<tr><td>Each terminal block assembly</td><td>1 (largest wire on it)</td></tr>
<tr><td>Small fittings: locknuts, wire nuts, bushings</td><td>0</td></tr>
</table></div>
<p>A device wider than a single 2 in. device box gets the double allowance <b>for each gang</b> it needs. Cable connectors with the clamp outside the box don't count ([[314.16(B)]]).</p>
<div class="tip"><b>Example</b>4" square × 2-1/8" box (30.3 in³). Six 12 AWG, three 12 AWG grounds, one receptacle:<br>
6 × 2.25 = 13.5 · grounds 1 × 2.25 = 2.25 · device 2 × 2.25 = 4.5 · <b>total 20.25 in³</b>. It fits.</div>
<p>Try your own in the <a href="#/tools/box">box fill calculator</a>.</p>
<h3>Pull and junction box size (314.28)</h3>
<p>For 4 AWG and larger in a raceway ([[314.28(A)]]):</p>
<ul>
<li><b>Straight pull</b>: box length at least <b>8 ×</b> the trade size of the largest raceway.</li>
<li><b>Angle or U pull, or splices</b>: distance to the opposite wall at least <b>6 ×</b> the largest raceway in the row, <b>plus</b> the sum of the other raceways in that row on the same wall.</li>
</ul>
<ul>
<li><b>Same conductor in and out</b>: the distance between the raceway entries that carry the same conductor must be at least <b>6 ×</b> the larger raceway ([[314.28(A)]]).</li>
<li>Each row is figured separately, and the row that gives the biggest number is the one you use.</li>
<li>Listed boxes and conduit bodies smaller than these sizes are allowed for the conductor combinations they're listed and marked for ([[314.28(A)]]).</li>
<li>If any dimension of a pull or junction box is over <b>6 ft</b>, all the conductors inside must be secured in an approved manner ([[314.28(B)]]).</li>
<li>Every pull box, junction box, and conduit body needs a cover suitable for the conditions ([[314.28(C)]]).</li>
</ul>
<div class="tip"><b>Example</b>Straight pull with 2" conduits: 8 × 2 = 16 in. minimum length. Angle pull with a 3" and a 2" on the same wall: 6 × 3 + 2 = 20 in.</div>
<h3>Conduit bodies (LBs and friends) [[314.16(C)]]</h3>
<ul>
<li>A conduit body with 6 AWG or smaller conductors must have a cross-section at least <b>twice</b> the largest conduit it attaches to, and can hold as many wires as Chapter 9 Table 1 allows for that conduit.</li>
<li>Splices, taps, or devices are allowed in a conduit body <b>only</b> if it's marked by the maker with its volume. Then you do a box fill calculation. Short-radius conduit bodies (capped elbows, service-entrance elbows) can never have splices.</li>
</ul>`
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
<li>Ceiling boxes for <b>luminaires</b> must be designed for that and support at least <b>50 lb</b>. A luminaire over 50 lb is supported independently unless the box is listed and marked for the weight ([[314.27(A)]]).</li>
<li>Paddle fans need a box listed and marked for fan support. It must be marked with the max weight if over 35 lb, and can support no more than <b>70 lb</b> ([[314.27(B)]]).</li>
<li><b>Damp or wet locations</b>: boxes and fittings must keep water out, and in wet locations they must be listed for wet locations. Field-drilled drain holes are allowed from ⅛ in. to ¼ in. in boxes listed for damp or wet locations ([[314.15]]).</li>
<li><b>Round boxes</b> can't be used where conduits or connectors that need locknuts or bushings connect to the side of the box ([[314.4]]).</li>
<li><b>Box depth</b>: a box with a device fed by 12 or 10 AWG needs at least 1³⁄₁₆ in. of depth; 8, 6, or 4 AWG needs at least 2¹⁄₁₆ in.; 14 AWG and smaller needs at least ¹⁵⁄₁₆ in. ([[314.24]]).</li>
<li><b>Cabinets and panels</b> follow the same setback rules: no more than ¼ in. back in noncombustible walls, flush or out in combustible walls ([[312.5]]). Surface cabinets in damp or wet locations get at least ¼ in. airspace from the wall ([[312.4]]).</li>
</ul>
<h3>Wire-bending space in panels and cabinets [[312.9]]</h3>
<p>Big wire needs room to bend before it lands on a lug. (In older books this was 312.6.)</p>
<ul>
<li><b>Gutter width</b>: conductors can't be bent inside a cabinet or cutout box unless the gutter is at least as wide as [[Table 312.9(A)]] requires. Parallel conductors are judged by the number of conductors in parallel ([[312.9(A)]]).</li>
<li><b>Wire doesn't enter through the wall opposite the lug</b> (it comes in from the side and turns): use [[Table 312.9(A)]].</li>
<li><b>Wire enters through the wall opposite the lug</b> (it comes straight at the terminal): use [[Table 312.9(B)(2)]], which needs more space.</li>
<li>Bending space is measured in a straight line from the end of the lug, perpendicular to the enclosure wall (Table 312.9(B)(2) Note 1). Removable and lay-in lugs made for only one wire can use the smaller spaces marked by the lettered notes.</li>
</ul>
<div class="tablewrap"><table>
<tr><th>Copper/other conductor, 1 wire per terminal</th><th>Table 312.9(A)</th><th>Table 312.9(B)(2)</th></tr>
<tr><td>8 AWG</td><td>1½ in.</td><td>1½ in.</td></tr>
<tr><td>6 AWG</td><td>1½ in.</td><td>2 in.</td></tr>
<tr><td>4 AWG</td><td>2 in.</td><td>3 in.</td></tr>
<tr><td>2 AWG</td><td>2½ in.</td><td>3½ in.</td></tr>
<tr><td>1/0</td><td>3½ in.</td><td>5½ in.</td></tr>
<tr><td>4/0</td><td>4 in.</td><td>7 in.</td></tr>
<tr><td>250 kcmil</td><td>4½ in.</td><td>8½ in.</td></tr>
<tr><td>350 kcmil</td><td>5 in.</td><td>12 in.</td></tr>
<tr><td>500 kcmil</td><td>6 in.</td><td>14 in.</td></tr>
</table></div>
<p>Values in Table 312.9(B)(2) for 3/0 and larger carry lettered notes that allow less space for removable or lay-in one-wire lugs. Always read the table for two or more wires per terminal.</p>
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
<ul>
<li><b>Wet locations</b> (including inside underground and outdoor raceways) need a wet-rated type such as THWN, THWN-2, XHHW, XHHW-2, THW, or RHW ([[310.10(C)]]). Plain THHN alone is not on that list.</li>
<li><b>Parallel conductors</b> (two or more sets of wire for one big feeder) are allowed only in <b>1/0 and larger</b>. Every conductor in a phase must be the same length, same material, same size, same insulation, and terminated the same way ([[310.10(G)]]).</li>
</ul>
<h3>Colors</h3>
<ul>
<li><b>Neutral (grounded conductor)</b>: white or gray, or three continuous white or gray stripes on other than green insulation. 4 AWG and larger can be identified by a white or gray marking at the terminations instead ([[200.7]]).</li>
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
<li><b>Derating</b>: more than 3 current-carrying conductors in a raceway or cable for more than 24 in. → adjustment factors in [[Table 310.15(C)(1)]]. Hot rooms or rooftops → temperature correction in [[Table 310.15(B)(1)(1)]]. Calculations come in a later section.</li>
</ul>
<div class="tablewrap"><table>
<tr><th>Current-carrying conductors</th><th>4–6</th><th>7–9</th><th>10–20</th><th>21–30</th><th>31–40</th><th>41+</th></tr>
<tr><td>Percent of ampacity</td><td>80</td><td>70</td><td>50</td><td>45</td><td>40</td><td>35</td></tr>
</table></div>
<ul>
<li><b>What counts</b>: spare conductors count. The EGC and bonding conductors <b>never</b> count ([[310.15(F)]]). A neutral that carries only the unbalanced current doesn't count, but it <b>does</b> count on a 2-wire circuit, on a 3-wire circuit made of two hots and the neutral of a 4-wire wye (like 208Y/120), and on a 4-wire wye where most of the load is nonlinear ([[310.15(E)]]).</li>
<li><b>Rooftops</b>: a raceway or cable in direct sun less than <b>¾ in.</b> above the roof gets <b>33°C (60°F)</b> added to the outdoor temperature before you look up the correction factor ([[310.15(B)]]). Keep rooftop pipe up on supports at least ¾ in. and the adder goes away.</li>
</ul>`
    },
    {
      id: 'methods', title: 'Raceway articles: uses and limits',
      html: `
<p>Each article's .10 says where you <b>can</b> use it, and .12 says where you <b>can't</b>. The big ones:</p>
<div class="tablewrap"><table>
<tr><th>Method</th><th>Key "can't" or limit</th></tr>
<tr><td>EMT [[358.12]]</td><td>Not where subject to <b>severe</b> physical damage. Not to support luminaires or equipment (except small conduit bodies). Sizes ½ to 6 in. ([[358.20]]). Can be the EGC ([[358.60]]).</td></tr>
<tr><td>RMC [[344.10]]</td><td>Galvanized, PVC-coated, stainless, and red brass RMC are allowed in all atmospheric conditions and occupancies, and where subject to severe physical damage. Sizes ½ to 6 in. ([[344.20]]). Can be the EGC ([[344.60]]).</td></tr>
<tr><td>IMC [[342.10]]</td><td>Same uses as rigid, thinner wall. Sizes ½ to 6 in. ([[342.20]]). Can be the EGC ([[342.60]]).</td></tr>
<tr><td>PVC [[352.12]]</td><td>Not in hazardous locations (except where allowed), not to support luminaires, not where subject to physical damage unless identified for it (Schedule 80), not where ambient is over 50°C (122°F). Sizes ½ to 6 in. ([[352.20]]). Needs a separate EGC because plastic doesn't carry fault current.</td></tr>
<tr><td>FMC [[348.12]]</td><td>Not in <b>wet locations</b>, not underground or in concrete, not where subject to physical damage, not where exposed to oil or gasoline that hurts the wire, not in hoistways (except as allowed), battery rooms, or hazardous locations. Max trade size 4 ([[348.20]]).</td></tr>
<tr><td>LFMC [[350.12]]</td><td>Not where subject to physical damage. This is the one for wet locations and motors. Max trade size 4 ([[350.20]]).</td></tr>
<tr><td>LFNC [[356.12]]</td><td>Not where subject to physical damage. Not longer than <b>6 ft</b> unless secured per 356.30 or a longer length is approved as needed for flexibility.</td></tr>
<tr><td>ENT [[362.12]]</td><td>Not in hazardous locations, not exposed to direct sunlight unless identified, not to support luminaires, not direct buried, not where subject to physical damage, not where ambient is over 50°C (122°F) unless listed otherwise.</td></tr>
<tr><td>HDPE [[353.12]]</td><td>Not exposed and not within a building. Underground and in concrete.</td></tr>
</table></div>
<h3>Cables in commercial work</h3>
<div class="tablewrap"><table>
<tr><th>Cable</th><th>Key limits</th></tr>
<tr><td>MC [[330.12]]</td><td>Not where subject to physical damage. Not direct buried or in concrete, or in cinders, strong chlorides, or similar, unless the armor is resistant or protected (for burial: identified for it). Wet locations generally need a type with a jacket over the armor ([[330.10]]).</td></tr>
<tr><td>AC [[320.12]]</td><td>Not where subject to physical damage, <b>not in damp or wet locations</b>, not where exposed to corrosive conditions.</td></tr>
<tr><td>NM [[334.12]]</td><td>Only where [[334.10]] allows: one- and two-family dwellings, multifamily dwellings of Types III, IV, or V construction, other Type III, IV, or V structures inside walls, floors, or ceilings with a 15-minute finish-rated thermal barrier, or inside raceways in Types I and II construction. Not exposed above a dropped ceiling except in dwellings. Not in concrete, not direct buried, not where subject to physical damage, never as service-entrance cable.</td></tr>
</table></div>
<p>Exposed runs of AC, MC, and NM must closely follow the building surface or running boards ([[330.15]], [[334.15]]). Bend MC with interlocked armor no tighter than <b>7 times</b> its outside diameter ([[330.24]]). Bend NM and AC no tighter than <b>5 times</b> the cable diameter ([[334.24]], [[320.24]]).</p>
<h3>Wireways [[Art 376]]</h3>
<ul>
<li>Conductor fill: no more than <b>20%</b> of the cross section ([[376.22(A)]]).</li>
<li>Splices and taps: allowed if accessible, with fill no more than <b>75%</b> at that point ([[376.56(A)]]).</li>
<li>Derating only kicks in over <b>30</b> current-carrying conductors at any cross section ([[376.22(B)]]).</li>
<li>Supports: horizontal at each end and every <b>5 ft</b> (or at each end/joint of longer sections, max 10 ft). Vertical: every <b>15 ft</b> with no more than one joint between supports ([[376.30]]).</li>
<li>Where 4 AWG or larger is pulled through a wireway, the distance between raceway entries carrying the same conductor follows the pull box rules of 314.28(A) ([[376.23(B)]]).</li>
<li>Not where subject to <b>severe</b> physical damage or severe corrosive environments ([[376.12]]). Dead ends must be closed ([[376.58]]). Listed metal wireway can be the EGC ([[376.60]]).</li>
</ul>
<h3>Cable tray [[Art 392]]</h3>
<p>A support system, not a raceway. Fill rules are in [[392.22]], supports in [[392.30]], bonding in [[392.60]].</p>
<ul>
<li>Not in hoistways or where subject to severe physical damage ([[392.12]]).</li>
<li>Install the tray as a complete system, and finish each run <b>before</b> the cables go in. Keep at least <b>12 in.</b> of access space above the tray (exceptions for industrial sites with qualified people, IT rooms, and crossings) ([[392.18]]).</li>
<li>Single conductors in tray: industrial establishments with qualified maintenance only, <b>1/0 and larger</b>, listed and marked for tray. A single-conductor EGC in tray must be <b>4 AWG or larger</b> ([[392.10(B)]]).</li>
<li>Where cables leave a tray for another tray, a raceway, or equipment, the gap can't exceed <b>6 ft</b>, and the cables are secured to the tray at the transition and protected from damage ([[392.30]]).</li>
<li>Metal tray can be the EGC only where qualified people maintain it and the rules of 392.60 are met. Where tray sections are mechanically discontinuous, bond across the gap ([[392.60]]).</li>
</ul>`
    },
    {
      id: 'pipe', title: 'Running pipe: bends, cuts, threads, fittings',
      html: `
<p>Every raceway article is laid out the same way, so learn the numbers once: <b>.24</b> bends, <b>.28</b> reaming/trimming, <b>.30</b> support, <b>.42</b> couplings and connectors, <b>.46</b> bushings, <b>.60</b> grounding.</p>
<h3>Bends (.24)</h3>
<ul>
<li>A bend can't damage the pipe or effectively reduce its inside diameter. The radius can't be tighter than [[Ch9 Table 2]] ([[358.24]] EMT, [[344.24]] RMC, [[342.24]] IMC, [[352.24]] PVC).</li>
<li><b>360° max</b> between pull points. Four 90s = 360°, so a fifth bend means you need a pull point. Offsets and kicks count: a 30° offset is two 30° bends = 60°.</li>
<li>PVC field bends must be made with <b>identified bending equipment</b> (a PVC heater/bender) ([[352.24]]).</li>
<li>Flexible types (FMC, LFMC, LFNC, ENT) may be bent by hand without extra equipment, using the "Other Bends" column of Chapter 9 Table 2 ([[348.24]], [[350.24]]).</li>
</ul>
<h3>Cut ends (.28)</h3>
<ul>
<li>EMT, RMC, and IMC: every cut end <b>reamed</b> or otherwise finished to remove rough edges ([[358.28]], [[344.28]], [[342.28]]).</li>
<li>PVC and LFMC: trimmed <b>inside and outside</b> ([[352.28]], [[350.28]]). FMC: trimmed, except where the fittings thread into the convolutions ([[348.28]]).</li>
<li>Threading RMC or IMC in the field: use a standard cutting die with a <b>1 in 16 taper (¾ in. per foot)</b>. PVC-coated rigid is threaded per the manufacturer's instructions ([[344.28]], [[342.28]]).</li>
<li><b>EMT is never threaded</b> (factory integral couplings are the only exception) ([[358.28]]).</li>
<li>Where corrosion protection is needed, field-cut threads get an approved <b>electrically conductive</b>, corrosion-resistant compound ([[300.8(A)]]).</li>
</ul>
<h3>Joints and box entries (.29, .42, .46, .48)</h3>
<ul>
<li>Couplings and connectors are made up tight. Buried in concrete or masonry: <b>concrete-tight</b> fittings. Wet locations: fittings <b>listed for wet locations</b> ([[358.42]], [[344.42]]).</li>
<li><b>No running threads</b> at couplings on RMC or IMC ([[344.42]], [[342.42]]). Use a three-piece coupling (Erickson) instead.</li>
<li>Rigid or IMC threads entering a box through a knockout (not a threaded hub) get a <b>locknut inside and outside</b> ([[344.29]], [[342.29]]).</li>
<li>Where conduit enters a box, fitting, or enclosure, use a <b>bushing</b> (PVC: a bushing or adapter) to protect the wire, unless the box or fitting is designed to give that protection ([[344.46]], [[352.46]]). With 4 AWG and larger, follow 300.6(G).</li>
<li>PVC joints are made by an approved method (solvent cement) ([[352.48]]).</li>
<li>Angle connectors on FMC and LFMC can't be concealed ([[348.42]], [[350.42]]).</li>
</ul>
<h3>Expansion</h3>
<ul>
<li>PVC needs an <b>expansion fitting</b> where the length change from [[Table 352.44]] will be <b>¼ in. or more</b> in a straight run between securely mounted items like boxes, cabinets, and elbows ([[352.44]]).</li>
<li>Example: a 100°F swing (cold winter morning to pipe baking in the Texas sun) moves PVC <b>4.06 in. per 100 ft</b> (Table 352.44).</li>
<li>Steel conduit moves about <b>0.20 ×</b> the PVC number, and aluminum about 0.40 × (Informational Note to [[300.9]]).</li>
<li>An expansion fitting in <b>metal</b> raceway must be bonded around ([[250.98]]).</li>
</ul>
<h3>The pipe as the ground (.60)</h3>
<ul>
<li>RMC, IMC, and EMT are permitted as the EGC ([[344.60]], [[342.60]], [[358.60]]). PVC is not, so pull a green wire.</li>
<li>FMC and LFMC can be the EGC only within the limits of 250.118 and only where flexibility isn't needed after installation. Where it is (motor vibration, equipment that moves), install a wire EGC ([[348.60]], [[350.60]]).</li>
</ul>
<div class="job"><b>On the job</b>Count your bends before you start a run. If you're past 360°, set a pull box or conduit body. Ream every cut, tighten every set screw, and pull a green in anything plastic or flexible.</div>
<h3>What it looks like</h3>
[[photo:cut-jagged]]
[[photo:reamer]]`
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
    { v: 1, l: 'boxfill', q: 'Volume allowance for each 12 AWG conductor in box fill:', c: ['2.25 in³', '2.00 in³', '2.50 in³', '3.00 in³'], w: '14 = 2.00, 12 = 2.25, 10 = 2.50, 8 = 3.00, 6 = 5.00.', r: 'Table 314.16(B)(4)' },
    { l: 'boxfill', q: 'Volume allowance for each 14 AWG conductor:', c: ['2.00 in³', '2.25 in³', '1.75 in³', '2.50 in³'], w: '14 AWG = 2.00 in³.', r: 'Table 314.16(B)(4)' },
    { l: 'boxfill', q: 'A single receptacle (one yoke) counts as how many conductors in box fill?', c: ['2', '1', '0', '4'], w: 'Each yoke or strap = double volume allowance based on the largest conductor connected to it.', r: '314.16(B)' },
    { l: 'boxfill', q: 'Three internal cable clamps in a box count as:', c: ['1 conductor total', '3 conductors', '0', '2 conductors'], w: 'One or more internal clamps = a single volume allowance (largest conductor).', r: '314.16(B)' },
    { l: 'boxfill', q: 'Four equipment grounding conductors in a box count as:', c: ['1 conductor', '4 conductors', '2 conductors', '0'], w: 'Up to four EGCs = 1. Each additional EGC beyond four adds ¼.', r: '314.16(B)' },
    { v: 1, l: 'boxfill', q: 'A pigtail that starts and ends inside the box counts as:', c: ['0', '1', '2', '½'], w: 'Conductors that don\'t leave the box aren\'t counted.', r: '314.16(B)' },
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
    { t: 'find', l: 'methods', q: 'Where are the rules for pull and junction box sizing (8× / 6×)?', c: ['314.28', '314.16', '314.23', '312.9'], w: '314.28(A).', r: '314.28(A)' },
    { t: 'find', l: 'methods', q: 'Which table gives conductor ampacities for not more than three current-carrying conductors in raceway?', c: ['Table 310.16', 'Table 310.17', 'Table 310.15(C)(1)', 'Chapter 9 Table 8'], w: 'Table 310.16. Table 310.17 is single conductors in free air.', r: 'Table 310.16' },
    { t: 'find', l: 'methods', q: 'Where is the rule for 6 in. of free conductor at boxes?', c: ['300.16', '300.14', '314.16', '110.14'], w: '2026: 300.16. (Older books: 300.14.)', r: '300.16' },
    { t: 'find', l: 'methods', q: 'Where are the rules for protecting cables from nails and screws in wood framing?', c: ['300.6', '300.4', '300.7', '334.15'], w: '2026: 300.6. (Older books: 300.4.)', r: '300.6' },
    { t: 'find', l: 'methods', q: 'Where is the rule limiting bends to 360° between pull points for any raceway combination?', c: ['300.24', '358.24', '300.20', '314.28'], w: 'General rule 300.24, and each raceway\'s .24 section repeats it.', r: '300.24' },
    { t: 'find', l: 'methods', q: 'Where are the insulation types (THHN, XHHW, etc.) listed?', c: ['Table 310.4(1)', 'Table 310.16', 'Chapter 9 Table 5', 'Article 100'], w: 'Table 310.4(1): conductor applications and insulations.', r: 'Table 310.4(1)' },
    { l: 'damage', q: 'Wiring installed under metal roof decking must be kept at least ___ from the lowest surface of the decking.', c: ['1½ in.', '1¼ in.', '2 in.', '¾ in.'], w: '38 mm (1½ in.). RMC and IMC with listed steel or malleable iron fittings are exempt.', r: '300.6(E)' },
    { l: 'damage', q: 'A bushing made entirely of insulating material may be used to secure a conduit to a box.', c: ['False', 'True', 'True for PVC only', 'True under 4 AWG'], w: '300.6(G): conduit bushings constructed wholly of insulating material shall not be used to secure a fitting or raceway.', r: '300.6(G)' },
    { l: 'damage', q: 'Where a raceway crosses a structural expansion joint in a building or parking garage, use:', c: ['A listed expansion/deflection fitting or other approved means', 'A standard coupling', 'A PVC sleeve', 'Nothing special'], w: '300.6(H).', r: '300.6(H)' },
    { v: 1, l: 'underground', q: 'Minimum cover for PVC (column 3) in a trench below 2 in. of concrete:', c: ['12 in.', '18 in.', '6 in.', '24 in.'], w: 'Table 300.7(A): 300 mm (12 in.).', r: 'Table 300.7(A)' },
    { v: 1, l: 'underground', q: 'Minimum cover for RMC under a 4 in. exterior concrete slab with no vehicle traffic (slab extends at least 6 in. past the run):', c: ['4 in.', '6 in.', '12 in.', '18 in.'], w: 'Table 300.7(A): 100 mm (4 in.).', r: 'Table 300.7(A)' },
    { v: 1, l: 'underground', q: 'Minimum cover for PVC under a one-family dwelling driveway:', c: ['18 in.', '24 in.', '12 in.', '6 in.'], w: 'Table 300.7(A): 450 mm (18 in.) in columns 1 through 3 and 5. Streets and commercial parking lots: 24 in.', r: 'Table 300.7(A)' },
    { l: 'underground', q: 'Where solid rock prevents the required burial depth, the raceway must be covered by at least ___ of concrete extending down to the rock.', c: ['2 in.', '4 in.', '6 in.', '1 in.'], w: 'Table 300.7(A) Note 5: 50 mm (2 in.).', r: 'Table 300.7(A)' },
    { l: 'underground', q: 'Underground conductors in a raceway subject to physical damage (like a riser) may be installed in:', c: ['Schedule 80 PVC', 'Schedule 40 PVC', 'ENT', 'LFNC'], w: '300.7(D)(4): EMT, RMC, IMC, RTRC-XW, Schedule 80 PVC, or equivalent.', r: '300.7(D)' },
    { l: 'underground', q: 'Direct-buried conductors and cables may be spliced or tapped underground:', c: ['Without a splice box, using methods per 110.14(B)', 'Only in a handhole', 'Never', 'Only with a box listed for burial'], w: '300.7(E).', r: '300.7(E)' },
    { l: 'wet', q: 'In indoor wet locations such as dairies and laundries, exposed metal boxes and raceways must have at least ___ of airspace from the wall.', c: ['¼ in.', '½ in.', '1 in.', '⅛ in.'], w: '300.8(D): 6 mm (¼ in.). Nonmetallic raceways, boxes, and fittings may go directly on concrete, masonry, or tile.', r: '300.8(D)' },
    { l: 'wet', q: 'A raceway containing electrical conductors may also contain a water or compressed-air line.', c: ['False', 'True', 'True if it is PVC', 'True outdoors'], w: '300.10: no pipe or tube for steam, water, air, gas, drainage, or any service other than electrical.', r: '300.10' },
    { l: 'inraceway', q: 'Splices may be made inside a run of EMT between boxes.', c: ['False', 'True', 'True if taped', 'True in sizes 2 in. and larger'], w: '300.15(A): no splice or tap within a raceway unless permitted (wireways, gutters, and similar).', r: '300.15(A)' },
    { l: 'inraceway', q: 'When calculating conduit fill, equipment grounding conductors:', c: ['Are counted, using their actual dimensions', 'Are not counted', 'Count only if insulated', 'Count only in nipples'], w: 'Chapter 9 Note 3.', r: 'Ch9 Table 1' },
    { l: 'inraceway', q: 'For conductors in a nipple 24 in. or shorter between enclosures, the 310.15(C)(1) adjustment factors:', c: ['Do not apply', 'Apply at 80%', 'Apply at 50%', 'Are doubled'], w: 'Chapter 9 Note 4: 60% fill allowed and adjustment factors need not apply.', r: 'Ch9 Table 1' },
    { l: 'inraceway', q: 'Which wiring method is permitted in a space above a ceiling used for environmental air (a plenum)?', c: ['EMT', 'NM cable', 'PVC conduit', 'ENT'], w: '300.25(C)(1): RMC, IMC, EMT, FMC, FMT, AC, and MC/MI without a nonmetallic covering, among others.', r: '300.25(C)' },
    { l: 'inraceway', q: 'The total degrees of bends between pull points, for any combination of conduit or tubing in a run, may not exceed:', c: ['360°', '270°', '180°', '540°'], w: '300.24.', r: '300.24' },
    { l: 'boxfill', q: 'An unbroken conductor looped or coiled in a box, at least twice the 300.16 free-conductor length, counts as:', c: ['2 conductors', '1 conductor', '0', '½ conductor'], w: '314.16(B)(1).', r: '314.16(B)' },
    { l: 'boxfill', q: 'In box fill, wire nuts, locknuts, and bushings count as:', c: ['No allowance', '1 conductor each', '1 conductor total', '2 conductors'], w: '314.16(B): no allowance for small fittings such as locknuts, splicing connectors, and bushings.', r: '314.16(B)' },
    { v: 1, l: 'boxfill', q: 'Volume of a 4 in. square × 2⅛ in. metal box per Table 314.16(A):', c: ['30.3 in³', '21.0 in³', '18.0 in³', '42.0 in³'], w: '4 × 1¼ = 18.0, 4 × 1½ = 21.0, 4 × 2⅛ = 30.3.', r: 'Table 314.16(A)' },
    { v: 1, l: 'boxfill', q: 'Volume of a 4¹¹⁄₁₆ in. square × 2⅛ in. metal box per Table 314.16(A):', c: ['42.0 in³', '30.3 in³', '29.5 in³', '32.0 in³'], w: '4¹¹⁄₁₆ square: 25.5 / 29.5 / 42.0 in³.', r: 'Table 314.16(A)' },
    { l: 'boxfill', q: 'A conduit body enclosing 6 AWG or smaller conductors must have a cross-sectional area at least ___ the largest conduit it attaches to.', c: ['Twice', 'Equal to', '1.5 times', 'Three times'], w: '314.16(C)(1).', r: '314.16(C)' },
    { l: 'boxfill', q: 'Splices may be made in a conduit body only if:', c: ['It is durably and legibly marked by the manufacturer with its volume', 'It has a gasketed cover', 'It is an LB', 'It is aluminum'], w: '314.16(C)(2).', r: '314.16(C)' },
    { l: 'boxfill', q: 'In a pull box with any dimension over 6 ft, the conductors must be:', c: ['Secured in an approved manner', 'Spliced', 'Reduced in size', 'Taped together'], w: '314.28(B).', r: '314.28(B)' },
    { l: 'boxfill', q: 'Angle pull with 4 AWG conductors: a conductor enters through a 3 in. raceway and leaves through a 2 in. raceway. Minimum distance between those two entries:', c: ['18 in.', '12 in.', '16 in.', '20 in.'], w: '6 × the larger raceway: 6 × 3 = 18 in.', r: '314.28(A)' },
    { l: 'boxinstall', q: 'A ceiling outlet box for a luminaire must be able to support a luminaire weighing at least:', c: ['50 lb', '35 lb', '70 lb', '25 lb'], w: '314.27(A)(2): 23 kg (50 lb).', r: '314.27(A)' },
    { l: 'boxinstall', q: 'A box listed as the sole support of a ceiling paddle fan may support a fan weighing no more than:', c: ['70 lb', '50 lb', '35 lb', '100 lb'], w: '314.27(B): 32 kg (70 lb); marked with the weight if over 35 lb.', r: '314.27(B)' },
    { l: 'boxinstall', q: 'Field-drilled drain holes in boxes listed for damp or wet locations must be:', c: ['⅛ in. to ¼ in. in diameter', '¼ in. to ½ in.', '1/16 in. to ⅛ in.', '½ in. to 1 in.'], w: '314.15(C): 3 mm to 6 mm. Larger only with listed drain fittings.', r: '314.15' },
    { v: 1, l: 'boxinstall', q: 'Minimum internal depth of a box enclosing a device supplied by 12 AWG conductors:', c: ['1³⁄₁₆ in.', '¹⁵⁄₁₆ in.', '2¹⁄₁₆ in.', '1½ in.'], w: '314.24(B)(4): 30.2 mm (1³⁄₁₆ in.) for 12 or 10 AWG.', r: '314.24' },
    { l: 'boxinstall', q: 'Round boxes may not be used where:', c: ['Conduits or connectors needing locknuts or bushings connect to the side of the box', 'They are in a ceiling', 'They are metal', 'NM cable is used'], w: '314.4.', r: '314.4' },
    { l: 'wire', q: 'Conductors may be connected in parallel (general rule) only in sizes:', c: ['1/0 AWG and larger', '2 AWG and larger', '4/0 AWG and larger', 'Any size'], w: '310.10(G)(1).', r: '310.10(G)' },
    { v: 1, l: 'wire', q: 'Adjustment factor for 10 to 20 current-carrying conductors in a raceway:', c: ['50%', '45%', '70%', '40%'], w: 'Table 310.15(C)(1): 4–6 80, 7–9 70, 10–20 50, 21–30 45, 31–40 40, 41+ 35.', r: 'Table 310.15(C)(1)' },
    { l: 'wire', q: 'Is an equipment grounding conductor counted as a current-carrying conductor for adjustment factors?', c: ['No', 'Yes', 'Only if insulated', 'Only if larger than 6 AWG'], w: '310.15(F).', r: '310.15(F)' },
    { l: 'wire', q: 'A circuit of two hots and the neutral from a 208Y/120 V, 4-wire wye system. For adjustment factors, the neutral:', c: ['Counts as current-carrying', 'Does not count', 'Counts as half', 'Is not allowed'], w: '310.15(E)(1)(2).', r: '310.15(E)' },
    { l: 'wire', q: 'A raceway in direct sunlight less than ¾ in. above a rooftop gets this temperature adder:', c: ['33°C (60°F)', '17°C (30°F)', '22°C (40°F)', 'No adder'], w: '310.15(B)(2).', r: '310.15(B)' },
    { l: 'wire', q: 'Which conductor type is permitted in a wet location (like an underground conduit)?', c: ['THWN-2', 'THHN (not dual-rated)', 'XHH', 'TFFN'], w: '310.10(C)(2) lists THWN, THWN-2, XHHW, XHHW-2, THW, RHW, and others. THHN and XHH are dry/damp types.', r: '310.10(C)' },
    { l: 'methods', q: 'AC cable may be installed in damp or wet locations.', c: ['False', 'True', 'True if jacketed', 'True outdoors only'], w: '320.12(2).', r: '320.12' },
    { l: 'methods', q: 'NM cable may be run exposed above a suspended ceiling in an office building.', c: ['False', 'True', 'True if stapled', 'True in 12 AWG'], w: '334.12(2): only in one- and two-family and multifamily dwellings.', r: '334.12' },
    { v: 1, l: 'methods', q: 'Minimum bending radius of interlocked-armor MC cable:', c: ['7 times its outside diameter', '5 times', '10 times', '12 times'], w: '330.24(B).', r: '330.24' },
    { l: 'methods', q: 'General minimum access space above a cable tray:', c: ['12 in.', '6 in.', '18 in.', '24 in.'], w: '392.18(F): 300 mm (12 in.), with exceptions.', r: '392.18' },
    { l: 'methods', q: 'Single insulated conductors in cable tray (industrial, qualified maintenance) must be at least:', c: ['1/0 AWG', '4 AWG', '2 AWG', '4/0 AWG'], w: '392.10(B)(1)(a).', r: '392.10(B)' },
    { l: 'methods', q: 'A single-conductor equipment grounding conductor in cable tray must be at least:', c: ['4 AWG', '6 AWG', '8 AWG', '1/0 AWG'], w: '392.10(B)(1)(c).', r: '392.10(B)' },
    { l: 'methods', q: 'Where cables leave a cable tray for a raceway or equipment, the unsupported distance between the tray and the raceway may not exceed:', c: ['6 ft', '3 ft', '10 ft', '12 in.'], w: '392.30(B)(3): 1.8 m (6 ft).', r: '392.30' },
    { l: 'methods', q: 'LFNC may not be used in lengths longer than ___ unless secured per 356.30 or a longer length is approved for flexibility.', c: ['6 ft', '3 ft', '10 ft', '4½ ft'], w: '356.12(3).', r: '356.12' },
    { l: 'methods', q: 'Maximum trade size of FMC:', c: ['4', '6', '3', '2'], w: '348.20(B): metric designator 103 (trade size 4).', r: '348.20' },
    { l: 'pipe', q: 'Field threads on RMC must be cut with a standard die having a taper of:', c: ['1 in 16 (¾ in. per foot)', '1 in 32', '1 in 8', 'No taper'], w: '344.28.', r: '344.28' },
    { l: 'pipe', q: 'Where RMC threads enter a box through a knockout (not a threaded hub), you need:', c: ['A locknut inside and a locknut outside', 'One locknut inside only', 'A bushing only', 'Nothing'], w: '344.29.', r: '344.29' },
    { l: 'pipe', q: 'Running threads may be used to connect RMC at a coupling.', c: ['False', 'True', 'True if painted', 'True outdoors'], w: '344.42(B).', r: '344.42' },
    { l: 'pipe', q: 'Field bends in PVC conduit must be made:', c: ['With identified bending equipment', 'With an open flame', 'Cold by hand', 'Any way that works'], w: '352.24(A).', r: '352.24' },
    { l: 'pipe', q: 'Cut ends of PVC conduit must be:', c: ['Trimmed inside and outside', 'Reamed inside only', 'Threaded', 'Left as cut'], w: '352.28.', r: '352.28' },
    { l: 'pipe', q: 'EMT may be threaded in the field.', c: ['False', 'True', 'True for 2 in. and larger', 'True with a special die'], w: '358.28(B): only EMT with factory threaded integral couplings.', r: '358.28' },
    { v: 1, l: 'pipe', q: 'Per Table 352.44, PVC changes length by how much per 100 ft for a 100°F temperature change?', c: ['4.06 in.', '2.03 in.', '6.08 in.', '1.01 in.'], w: '100°F → 4.06 in./100 ft. Expansion fittings are needed when the change is ¼ in. or more.', r: 'Table 352.44' },
    { l: 'pipe', q: 'A run already has three 90° bends. How many more degrees of bend are allowed before a pull point?', c: ['90°', '180°', '45°', '0°'], w: '360° max − 270° used = 90° (4 × 90° = 360°).', r: '358.24' },
    { l: 'pipe', q: 'FMC to a vibrating motor (flexibility needed after installation) requires:', c: ['A wire-type equipment grounding conductor', 'Nothing extra; the flex is the ground', 'A ground rod at the motor', 'Bonding to building steel'], w: '348.60(B).', r: '348.60' },
    { t: 'find', l: 'pipe', q: 'Where is the rule protecting 4 AWG and larger conductors where they enter a box (bushings)?', c: ['300.6(G)', '300.16', '314.28', '300.22'], w: '2026: 300.6(G). (Older books: 300.4(G).)', r: '300.6(G)' },
    { t: 'find', l: 'pipe', q: 'Where is the PVC expansion table?', c: ['Table 352.44', 'Table 352.30(B)', 'Table 300.19(B)', 'Table 344.30(B)'], w: 'Table 352.44.', r: 'Table 352.44' },
    { t: 'find', l: 'pipe', q: 'Where are the rules for wiring in plenums and other air-handling spaces?', c: ['300.25', '300.23', '300.26', '300.13'], w: '2026: 300.25. (Older books: 300.22.)', r: '300.25' },
    { t: 'find', l: 'pipe', q: 'Where is the rule about induced currents (all conductors of a circuit grouped in the same steel raceway)?', c: ['300.22', '300.20', '300.10', '300.24'], w: '2026: 300.22. (Older books: 300.20.)', r: '300.22' },
    { t: 'find', l: 'pipe', q: 'Where is the rule requiring firestopping of penetrations?', c: ['300.23', '300.25', '300.21', '300.26'], w: '2026: 300.23. (Older books: 300.21.)', r: '300.23' },
    { t: 'find', l: 'pipe', q: 'Where are the adjustment factors for more than three current-carrying conductors?', c: ['Table 310.15(C)(1)', 'Table 310.15(B)(1)(1)', 'Table 310.16', 'Chapter 9 Table 1'], w: 'Table 310.15(C)(1).', r: 'Table 310.15(C)(1)' },
    { v: 1, l: 'boxinstall', q: 'Table 312.9(A): one 4/0 AWG conductor per terminal that does NOT enter through the wall opposite its terminal. Minimum wire-bending space:', c: ['4 in.', '7 in.', '3½ in.', '6 in.'], w: 'Table 312.9(A): 3/0–4/0, one wire → 4 in.', r: 'Table 312.9(A)' },
    { v: 1, l: 'boxinstall', q: 'Table 312.9(B)(2): one 4/0 AWG conductor per terminal entering through the wall opposite its terminal. Minimum wire-bending space (before any one-wire lay-in lug reduction):', c: ['7 in.', '4 in.', '5½ in.', '8½ in.'], w: 'Table 312.9(B)(2): 4/0, one wire → 7 in. (Note b allows 1 in. less for removable or lay-in one-wire lugs.)', r: 'Table 312.9(B)(2)' },
    { v: 1, l: 'boxinstall', q: 'Table 312.9(A): minimum wiring gutter width for one 250 kcmil conductor per terminal:', c: ['4½ in.', '4 in.', '6 in.', '8½ in.'], w: 'Table 312.9(A): 250 kcmil, one wire → 4½ in.', r: 'Table 312.9(A)' },
    { l: 'boxinstall', q: 'Wire-bending space at a terminal is measured:', c: ['In a straight line from the end of the lug or connector, perpendicular to the enclosure wall', 'From the center of the lug to the door', 'Along the curve of the conductor', 'From the knockout to the lug'], w: 'Table 312.9(B)(2) Note 1.', r: 'Table 312.9(B)(2)' },
    { l: 'boxinstall', q: 'When sizing a wiring gutter for parallel conductors, the gutter width is judged on the basis of:', c: ['The number of conductors in parallel', 'Only one conductor', 'The OCPD rating', 'The enclosure depth'], w: '312.9(A).', r: '312.9(A)' },
    { t: 'find', l: 'boxinstall', q: 'Where are the wire-bending space and gutter width rules for cabinets and panelboard enclosures?', c: ['312.9', '312.5', '314.28', '110.26'], w: '2026: 312.9 with Tables 312.9(A) and 312.9(B)(2). (Older books: 312.6.)', r: '312.9' },
    { t: 'find', l: 'pipe', q: 'Where are the rules for conduit bodies (LBs) that contain splices?', c: ['314.16(C)', '314.28', '300.17', '314.23'], w: '314.16(C)(2).', r: '314.16(C)' }
  ]
});
