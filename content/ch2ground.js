(window.MODULES ||= []).push({
  id: 'ground', icon: '🌍', title: 'Chapter 2: Grounding & Bonding (250)',
  blurb: 'The most-tested article in the book: why we ground, the main bonding jumper, electrodes, GEC and EGC sizing, bonding.',
  lessons: [
    {
      id: 'why', title: 'Grounding vs. bonding: what each one does',
      html: `
<p>Two different jobs, often confused ([[250.4(A)]]):</p>
<ul>
<li><b>Grounding</b> (connecting to the earth): limits voltage from lightning, line surges, and accidental contact with higher-voltage lines, and stabilizes voltage to earth.</li>
<li><b>Bonding</b> (connecting metal parts together and back to the source): creates an <b>effective ground-fault current path</b>, a low-impedance path back to the source so the breaker trips fast when a hot wire touches metal.</li>
</ul>
<div class="warn"><b>The key fact</b>The earth is <b>not</b> an effective ground-fault current path ([[250.4(A)]]). A ground rod alone will not trip a breaker; dirt has too much resistance. Fault current has to get back to the source through the EGC, raceway, or bonding, and the main bonding jumper back to the neutral.</div>
<h3>The words</h3>
<div class="tablewrap"><table>
<tr><td><b>Grounded conductor</b></td><td>The neutral (current-carrying, white or gray)</td></tr>
<tr><td><b>Equipment grounding conductor (EGC)</b></td><td>Green or bare wire, or metal raceway, that bonds equipment back to the source</td></tr>
<tr><td><b>Grounding electrode</b></td><td>The thing in the earth: rod, water pipe, rebar (Ufer), ground ring</td></tr>
<tr><td><b>Grounding electrode conductor (GEC)</b></td><td>The wire from the service (neutral/ground bar) to the electrode</td></tr>
<tr><td><b>Main bonding jumper (MBJ)</b></td><td>The link (screw, strap, or wire) that connects the neutral bar to the ground bar and enclosure at the <b>service</b></td></tr>
<tr><td><b>System bonding jumper</b></td><td>Same link, but at a separately derived system like a transformer</td></tr>
</table></div>
<p>Connections for grounding and bonding: listed pressure connectors, terminal bars, exothermic welding, machine screws with at least two threads engaged, and similar. Never <b>solder only</b> ([[250.8]]).</p>`
    },
    {
      id: 'service', title: 'At the service: the one place neutral meets ground',
      html: `
<ul>
<li>A grounded service gets a GEC connected to the neutral at the service, anywhere from the load end of the service drop or lateral to the service disconnect's neutral terminal ([[250.24(A)]]).</li>
<li>The neutral must be brought to every service disconnect, even if there are no neutral loads, because it's the fault return path to the utility ([[250.24(D)]]). It can't be smaller than [[Table 250.102(C)(1)]] requires.</li>
<li>An <b>unspliced main bonding jumper</b> connects the neutral to the EGCs and the service enclosure ([[250.24(C)]]). It's sized from Table 250.102(C)(1) ([[250.28(D)]]). It can be a wire, bus, or screw. If it's only a screw, the screw must have a <b>green finish</b> you can see with it installed ([[250.28(B)]]).</li>
<li><b>Downstream, never again</b>: on the load side of the service disconnect, the neutral must not be connected to equipment grounding conductors or metal parts ([[250.24(B)]], [[250.142(B)]]).</li>
</ul>
<div class="warn"><b>Subpanels</b>In a subpanel, the <b>neutral bar is isolated</b> (bonding screw removed) and the grounds go on a separate ground bar bonded to the can. If you bond neutral to ground there, normal neutral current flows on every pipe and ground wire. That's "objectionable current," a shock and fire hazard ([[250.6]]).</div>
<h3>Separately derived systems (transformers) [[250.30]]</h3>
<p>A transformer (like a 480 V to 208Y/120 V dry-type) creates a new system, so its neutral gets bonded and grounded all over again:</p>
<ul>
<li><b>System bonding jumper (SBJ)</b>: unspliced, sized from Table 250.102(C)(1), installed at <b>one single point</b> anywhere from the transformer to the first disconnect or OCPD ([[250.30(A)(1)]]). The only time both ends are allowed is an outdoor transformer feeding a building, and only if it doesn't create a parallel neutral path.</li>
<li><b>Supply-side bonding jumper</b>: if the transformer and the first disconnect are in separate enclosures, one runs with the secondary conductors. It's sized from Table 250.102(C)(1) for the derived conductors, and a nonflexible metal raceway can serve as it ([[250.30(A)(2)]]).</li>
<li><b>Electrode</b>: use the building's grounding electrode system ([[250.30(A)(4)]]). The GEC is sized from Table 250.66 for the derived conductors and connects at the <b>same point</b> as the SBJ ([[250.30(A)(5)]]).</li>
<li>Metal water piping and exposed building steel in the area the transformer serves get bonded to its neutral at that same point. Size from Table 250.102(C)(1), never more than 3/0 Cu or 250 kcmil Al ([[250.104(D)]]).</li>
</ul>
<h3>Separate buildings</h3>
<p>A building fed by a feeder from another building gets an <b>EGC run with the feeder</b>, its own grounding electrode, and the <b>neutral kept separate</b> from ground at that building ([[250.32(B)]]). Old installs that used the neutral as the ground return are allowed to remain only under strict conditions. A building fed by only <b>one branch circuit</b> (a multiwire branch circuit counts as one) that has an EGC doesn't need its own electrode ([[250.32(A)]]).</p>`
    },
    {
      id: 'electrodes', title: 'Grounding electrodes',
      html: `
<p>Every electrode on this list that's <b>present</b> at a building must be bonded together into the <b>grounding electrode system</b> ([[250.50]]). If none exist, install one or more of the ones you can add.</p>
<div class="tablewrap"><table>
<tr><th>Electrode [[250.52(A)]]</th><th>Requirements</th></tr>
<tr><td>Metal underground water pipe</td><td>In contact with earth <b>10 ft</b> or more. Must be supplemented by another electrode ([[250.53(D)]]).</td></tr>
<tr><td>Metal in-ground support structure</td><td>Steel columns or pilings in earth vertically 10 ft or more</td></tr>
<tr><td>Concrete-encased electrode ("Ufer")</td><td>At least <b>20 ft</b> of ½ in. or larger rebar, or 20 ft of bare copper <b>4 AWG</b> or larger, encased in at least <b>2 in.</b> of concrete in a footing or foundation in contact with the earth</td></tr>
<tr><td>Ground ring</td><td>At least <b>20 ft</b> of bare copper not smaller than <b>2 AWG</b>, encircling the building, buried at least <b>30 in.</b> ([[250.53(F)]])</td></tr>
<tr><td>Rod and pipe</td><td>At least <b>8 ft</b> long. Rods at least <b>⅝ in.</b> diameter unless listed. Pipe at least ¾ trade size, galvanized if steel.</td></tr>
<tr><td>Plate</td><td>At least <b>2 ft²</b> exposed to soil, buried at least 30 in.</td></tr>
<tr><td>Other listed electrodes; other local metal underground systems</td><td>Piping systems, tanks, well casings</td></tr>
</table></div>
<p><b>Not allowed</b> as electrodes: metal underground <b>gas piping</b>, <b>aluminum</b>, and the swimming pool structural rebar ([[250.52(B)]]).</p>
<h3>Ground rods [[250.53(A)]]</h3>
<ul>
<li>At least 8 ft in contact with the soil, driven vertically. If you hit rock, drive at an angle up to 45°, or lay it in a trench at least 30 in. deep.</li>
<li>The top is flush with or below grade unless the end and the clamp are protected.</li>
<li><b>One rod must be supplemented</b> by a second electrode, unless the single rod has a resistance to earth of <b>25 ohms or less</b>.</li>
<li>Multiple rods must be at least <b>6 ft</b> apart.</li>
<li>The bonding jumper that's the <b>only</b> connection to a supplemental rod, pipe, or plate never has to be larger than <b>6 AWG copper</b> (4 AWG Al) ([[250.53(E)]]).</li>
</ul>
<h3>Tying the system together</h3>
<ul>
<li>Bonding jumpers between electrodes are sized from Table 250.66. <b>Rebar can't be used</b> as the conductor that connects electrodes together ([[250.53(C)]]).</li>
<li>A water pipe electrode's ground path can't depend on the <b>water meter</b>, filters, or similar equipment, so jump around them ([[250.53(D)]]).</li>
<li>Ground clamps must be listed for the electrode and conductor materials. <b>One conductor per clamp</b> unless the clamp is listed for more. Clamps that get buried or encased must be listed for direct burial or concrete encasement ([[250.70]]).</li>
<li>Every system in a building uses the <b>same</b> grounding electrode system ([[250.58]]). Lightning protection ground terminals are bonded to it too ([[250.106]]).</li>
</ul>
<div class="job"><b>On the job</b>On commercial jobs, the electrician ties into the footing rebar (Ufer) before the concrete pour, usually with a 4 AWG copper tail coming up. Miss that and it's gone forever.</div>`
    },
    {
      id: 'gec', title: 'Grounding electrode conductor (GEC)',
      html: `
<h3>Sizing: [[Table 250.66]]</h3>
<p>Based on the size of the largest service-entrance conductor (or equivalent area for parallel sets):</p>
<div class="tablewrap"><table>
<tr><th>Largest Cu service conductor</th><th>Cu GEC</th><th>Al GEC</th></tr>
<tr><td>2 or smaller</td><td>8</td><td>6</td></tr>
<tr><td>1 or 1/0</td><td>6</td><td>4</td></tr>
<tr><td>2/0 or 3/0</td><td>4</td><td>2</td></tr>
<tr><td>Over 3/0 through 350</td><td>2</td><td>1/0</td></tr>
<tr><td>Over 350 through 600</td><td>1/0</td><td>3/0</td></tr>
<tr><td>Over 600 through 1100</td><td>2/0</td><td>4/0</td></tr>
<tr><td>Over 1100</td><td>3/0</td><td>250</td></tr>
</table></div>
<p><b>Size caps</b> ([[250.66(A)]]): the GEC to a <b>rod, pipe, or plate</b> never needs to be larger than <b>6 AWG copper</b>. To a <b>concrete-encased electrode</b>, never larger than <b>4 AWG copper</b>. To a <b>ground ring</b>, never larger than the ring conductor.</p>
<h3>Installation [[250.64]]</h3>
<ul>
<li>6 AWG or larger, not exposed to damage: can run along the building surface without protection. Exposed to damage: protect it in RMC, IMC, Schedule 80 PVC, RTRC-XW, EMT, or cable armor. Smaller than 6 AWG: must always be protected ([[250.64(B)]]).</li>
<li>One <b>continuous</b> length, no splices, except: irreversible compression connectors listed as grounding and bonding equipment, exothermic welds, splices at accessible locations with listed grounding and bonding equipment, busbar sections, and connections of building steel or metal water pipe ([[250.64(C)]]).</li>
<li>Ferrous (steel) raceways, enclosures, and cable armor around a GEC must be continuous and <b>bonded at each end</b> to the GEC or electrode, or the steel acts as a choke on fault current. The bonding jumper is at least the same size as the GEC inside. Nonferrous (aluminum) raceways don't have to be continuous ([[250.64(E)]]).</li>
<li>Bare or covered aluminum GECs can't touch concrete or be used where corrosive. Outdoors, an aluminum GEC can't be terminated within <b>18 in.</b> of the earth ([[250.64(A)]]).</li>
<li>Don't route a GEC through ventilation, mounting, or drain openings of an enclosure ([[250.64(G)]]).</li>
<li>Connections to electrodes must be accessible, except buried or encased ones and exothermic or irreversible connections ([[250.68(A)]]).</li>
<li>Interior metal water pipe can extend the electrode connection only within <b>5 ft</b> of where the pipe enters the building ([[250.68(C)]]). In industrial, commercial, and institutional buildings with only qualified people servicing it, exposed water pipe beyond 5 ft can be used.</li>
<li>The building's <b>steel frame</b> can be used as a GEC or to connect electrodes together. A <b>rebar stub</b> brought out of the footing to an accessible spot can be the connection point for a concrete-encased electrode ([[250.68(C)]]).</li>
</ul>`
    },
    {
      id: 'bonding', title: 'Bonding at the service and over 250 V',
      html: `
<ul>
<li><b>What gets bonded at the service</b>: every raceway, cable tray, auxiliary gutter, and service cable armor that holds service conductors, and every enclosure on them, like meter bases and boxes ([[250.92(A)]]).</li>
<li><b>At the service</b>, locknuts alone are <b>not</b> enough to bond service raceways. Use threaded entries made up wrenchtight, threadless fittings made up tight, bonding locknuts, or <b>bonding bushings with jumpers</b>. Concentric or eccentric knockouts that aren't fully removed, and reducing washers, need a bonding jumper ([[250.92(B)]]).</li>
<li><b>Over 250 V to ground</b> (480Y/277 V circuits), the same service bonding methods apply to raceways with other than service conductors ([[250.97]]). If no oversized or concentric knockouts are involved, two locknuts on rigid or IMC, or EMT connectors with a locknut inside, are OK.</li>
<li><b>Intersystem bonding termination (IBT)</b>: a listed termination with room for at least <b>three</b> communications bonding conductors (phone, cable TV, satellite), outside the enclosure at the service and at disconnects for buildings fed by a feeder ([[250.94(A)]]).</li>
<li><b>Bonding jumpers</b> on the load side of an OCPD are sized from [[Table 250.122]] ([[250.102(D)]]). Installed outside a raceway, a jumper can be at most <b>6 ft</b> long and must be routed with the raceway ([[250.102(E)]]).</li>
<li><b>Metal water piping</b> must be bonded to the service enclosure, the neutral at the service, the GEC, or an electrode. The jumper is sized from Table 250.102(C)(1), but never needs to be larger than 3/0 Cu ([[250.104(A)]]). Other metal piping likely to become energized (including gas pipe) is bonded per [[250.104(B)]], with a jumper sized from Table 250.122 using the rating of the circuit likely to energize it.</li>
<li><b>Exposed building steel</b> that isn't intentionally grounded and is likely to become energized gets bonded, sized from Table 250.102(C)(1) up to 3/0 Cu max ([[250.104(C)]]).</li>
<li><b>Expansion fittings</b> and telescoping sections in <b>metal</b> raceway must be bonded around with an equipment bonding jumper or other means, because the slip joint isn't a reliable ground path ([[250.98]]).</li>
<li><b>Metal raceways and enclosures</b> for anything other than service conductors must be connected to the EGC. Short sections used only to protect or support cable are exempt ([[250.86]]).</li>
<li><b>Isolated ground</b>: an equipment enclosure can be isolated from its raceway with a listed nonmetallic fitting at the enclosure, but the raceway still has to be grounded, and an insulated EGC is run inside to ground the equipment ([[250.96(B)]]).</li>
</ul>`
    },
    {
      id: 'egc', title: 'Equipment grounding conductors (EGC)',
      html: `
<h3>What counts as an EGC [[250.118(A)]]</h3>
<ul>
<li>A copper, aluminum, or copper-clad aluminum wire (bare, covered, or insulated) or busbar</li>
<li><b>RMC, IMC, and EMT</b></li>
<li><b>Listed FMC</b>: only if terminated in listed fittings, circuits are 20 A or less, it's 1¼ trade size or smaller, the total flex length in the ground path is <b>6 ft</b> or less, and it isn't installed for flexibility. Otherwise run a green wire.</li>
<li><b>Listed LFMC</b>: similar limits. ⅜–½ trade sizes on circuits 20 A or less, ¾–1¼ trade sizes on circuits 60 A or less, total flex 6 ft or less, not for flexibility.</li>
<li>The armor of AC cable. MC cable that contains an EGC wire, or whose metal sheath is listed and identified as an EGC.</li>
<li>Cable tray (where 392.10 and 392.60 allow), other listed electrically continuous metal raceways, and surface metal raceways listed for grounding</li>
<li><b>Not allowed</b> as EGCs: grounding electrode conductors (with a limited exception) and the <b>structural steel frame</b> of the building ([[250.118(B)]]).</li>
<li>Where the <b>pipe is the ground</b>, every connection, joint, and fitting must be made tight ([[250.120(A)]]). A loose set screw is a broken ground.</li>
</ul>
<h3>Identification [[250.119]]</h3>
<p>Green, green with yellow stripes, or bare. Green insulation can't be used for a hot or a neutral (a few low-voltage cable exceptions) ([[250.119(A)]]). <b>4 AWG and larger</b> can be re-identified at each end and everywhere accessible by stripping the insulation, coloring it green, or wrapping green tape ([[250.119(B)]]).</p>
<h3>Sizing: [[Table 250.122]]</h3>
<p>Based on the rating of the breaker or fuse ahead of the circuit:</p>
<div class="tablewrap"><table>
<tr><th>OCPD up to</th><th>Cu</th><th>Al</th></tr>
<tr><td>15 A</td><td>14</td><td>12</td></tr>
<tr><td>20 A</td><td>12</td><td>10</td></tr>
<tr><td>60 A</td><td>10</td><td>8</td></tr>
<tr><td>100 A</td><td>8</td><td>6</td></tr>
<tr><td>200 A</td><td>6</td><td>4</td></tr>
<tr><td>300 A</td><td>4</td><td>2</td></tr>
<tr><td>400 A</td><td>3</td><td>1</td></tr>
<tr><td>500 A</td><td>2</td><td>1/0</td></tr>
<tr><td>600 A</td><td>1</td><td>2/0</td></tr>
<tr><td>800 A</td><td>1/0</td><td>3/0</td></tr>
<tr><td>1000 A</td><td>2/0</td><td>4/0</td></tr>
<tr><td>1200 A</td><td>3/0</td><td>250</td></tr>
</table></div>
<ul>
<li>The EGC never has to be larger than the circuit conductors ([[250.122(A)]]).</li>
<li><b>Upsized hots, upsized ground</b>: if the hots are increased in size (for voltage drop, for example), the wire EGC must be increased proportionally by circular mil area ([[250.122(D)]]). This doesn't apply when the hots were upsized only because of ambient temperature correction or adjustment for more than three conductors (310.15(B) or (C)).</li>
<li>One EGC can serve multiple circuits in the same raceway if sized for the largest OCPD ([[250.122(E)]]).</li>
<li><b>Motor circuits</b>: size the EGC from Table 250.122 using the rating of the motor branch-circuit short-circuit and ground-fault protective device ([[250.122(F)]]).</li>
<li><b>Parallel runs</b> in separate raceways: each raceway gets its own wire EGC (if a wire EGC is used), sized from Table 250.122 for the <b>full</b> OCPD rating. You don't divide it among the pipes. It never has to be larger than the biggest hot in that raceway ([[250.122(H)]]).</li>
<li>No switch or automatic cutout may be put in an EGC unless opening it disconnects all sources of energy ([[250.124]]).</li>
</ul>
<h3>In the box</h3>
<ul>
<li>All EGCs spliced or terminated in a box are connected together, arranged so removing a device doesn't break the ground path ([[250.148]]). Metal boxes get their own connection: a ground screw or listed clip.</li>
<li>Metal boxes need a connection to the EGC used for <b>no other purpose</b>, sized from Table 250.122 for the largest OCPD in the box ([[250.148(C)]]).</li>
<li>Receptacles in metal boxes need a bonding jumper to the box, except for surface-mounted boxes with direct metal-to-metal yoke contact (remove at least one of the insulating washers), or self-grounding receptacles ([[250.146]]).</li>
<li><b>Isolated ground receptacles</b> have the ground terminal insulated from the yoke and are connected to an insulated EGC run with the circuit ([[250.146(D)]]).</li>
</ul>`
    }
  ],
  questions: [
    { l: 'why', q: 'Is the earth considered an effective ground-fault current path?', c: ['No', 'Yes', 'Only with two ground rods', 'Only under 25 ohms'], w: '250.4(A)(5).', r: '250.4(A)' },
    { l: 'why', q: 'The main purpose of bonding equipment back to the source is to:', c: ['Create a low-impedance path so the OCPD opens on a ground fault', 'Limit lightning voltage', 'Reduce the electric bill', 'Carry neutral current'], w: 'Effective ground-fault current path.', r: '250.4(A)' },
    { l: 'why', q: 'The conductor from the service neutral/ground bar to the ground rod is the:', c: ['Grounding electrode conductor', 'Equipment grounding conductor', 'Main bonding jumper', 'Grounded conductor'], w: 'GEC.', r: 'Art 100' },
    { l: 'why', q: 'Grounding and bonding connections may NOT depend solely on:', c: ['Solder', 'Exothermic welding', 'Listed pressure connectors', 'Terminal bars'], w: '250.8(B).', r: '250.8' },
    { l: 'why', q: 'Machine screws used for grounding connections must engage at least ___ threads or be secured with a nut.', c: ['Two', 'One', 'Three', 'Five'], w: '250.8(A)(5).', r: '250.8(A)' },
    { l: 'service', q: 'The neutral and equipment grounding conductors are connected together at:', c: ['The service (main bonding jumper)', 'Every panel', 'Every subpanel and the service', 'The first receptacle'], w: 'Not on the load side of the service disconnect (except separately derived systems and limited exceptions).', r: '250.24(B)' },
    { l: 'service', q: 'In a subpanel fed from the service, the neutral bar must be:', c: ['Isolated from the enclosure and EGCs', 'Bonded to the enclosure', 'Connected to a ground rod', 'Removed'], w: '250.24(B) and 250.142(B).', r: '250.142(B)' },
    { l: 'service', q: 'The main bonding jumper must be:', c: ['Unspliced', 'Green', 'Smaller than the GEC', 'Aluminum'], w: '250.24(C).', r: '250.24(C)' },
    { l: 'service', q: 'Main bonding jumpers are sized using:', c: ['Table 250.102(C)(1)', 'Table 250.122', 'Table 250.66', 'Table 310.16'], w: '250.28(D)(1).', r: '250.28(D)' },
    { l: 'service', q: 'Is the neutral required to be brought to each service disconnect even if there are no line-to-neutral loads?', c: ['Yes', 'No', 'Only for 120/240 V', 'Only in dwellings'], w: 'It\'s the fault-current return path to the utility.', r: '250.24(D)' },
    { l: 'service', q: 'A detached building fed by a feeder needs:', c: ['An EGC with the feeder, its own grounding electrode, and the neutral isolated from ground', 'Neutral bonded to ground at the building', 'No grounding electrode', 'Only a ground rod and no EGC'], w: '250.32(B)(1).', r: '250.32(B)' },
    { l: 'service', q: 'Current flowing on equipment grounding paths during normal operation is called:', c: ['Objectionable current', 'Fault current', 'Inrush current', 'Leakage current'], w: '250.6.', r: '250.6' },
    { l: 'electrodes', q: 'All grounding electrodes present at a building must be:', c: ['Bonded together to form the grounding electrode system', 'Isolated from each other', 'Tested to 25 ohms', 'Connected to the gas pipe'], w: '250.50.', r: '250.50' },
    { l: 'electrodes', q: 'A metal underground water pipe qualifies as an electrode if it\'s in contact with the earth for at least:', c: ['10 ft', '8 ft', '20 ft', '5 ft'], w: '3.0 m (10 ft).', r: '250.52(A)' },
    { l: 'electrodes', q: 'A concrete-encased electrode must be at least ___ of rebar or bare copper.', c: ['20 ft', '10 ft', '8 ft', '25 ft'], w: '6.0 m (20 ft).', r: '250.52(A)' },
    { l: 'electrodes', q: 'Minimum bare copper size for a concrete-encased electrode:', c: ['4 AWG', '6 AWG', '2 AWG', '1/0 AWG'], w: '250.52(A)(3)(2).', r: '250.52(A)' },
    { l: 'electrodes', q: 'Minimum rebar diameter for a concrete-encased electrode:', c: ['½ in.', '⅜ in.', '¾ in.', '⅝ in.'], w: '13 mm (½ in.).', r: '250.52(A)' },
    { l: 'electrodes', q: 'A concrete-encased electrode must be covered by at least ___ of concrete.', c: ['2 in.', '3 in.', '4 in.', '1 in.'], w: '50 mm (2 in.).', r: '250.52(A)' },
    { l: 'electrodes', q: 'A ground ring must be at least 20 ft of bare copper not smaller than:', c: ['2 AWG', '4 AWG', '6 AWG', '1/0 AWG'], w: '250.52(A)(4).', r: '250.52(A)' },
    { l: 'electrodes', q: 'Minimum length of a ground rod:', c: ['8 ft', '10 ft', '6 ft', '20 ft'], w: '2.44 m (8 ft).', r: '250.52(A)' },
    { l: 'electrodes', q: 'Minimum diameter of a steel or stainless ground rod (unless listed):', c: ['⅝ in.', '½ in.', '¾ in.', '1 in.'], w: '15.87 mm (⅝ in.).', r: '250.52(A)' },
    { l: 'electrodes', q: 'Which may NOT be used as a grounding electrode?', c: ['Metal underground gas piping', 'Metal underground water pipe', 'Ground ring', 'Building steel in the earth'], w: '250.52(B): gas piping, aluminum, and pool structural rebar.', r: '250.52(B)' },
    { l: 'electrodes', q: 'A single ground rod does not need a supplemental electrode if its resistance to earth is:', c: ['25 ohms or less', '50 ohms or less', '5 ohms or less', '100 ohms or less'], w: '250.53(A)(2) Exception.', r: '250.53(A)' },
    { l: 'electrodes', q: 'Multiple ground rods must be at least ___ apart.', c: ['6 ft', '8 ft', '10 ft', '3 ft'], w: '1.8 m (6 ft).', r: '250.53(A)' },
    { l: 'electrodes', q: 'If rock is hit, a ground rod may be laid in a trench at least ___ deep.', c: ['30 in.', '18 in.', '24 in.', '8 ft'], w: '750 mm (30 in.).', r: '250.53(A)' },
    { l: 'electrodes', q: 'A metal underground water pipe electrode must be:', c: ['Supplemented by an additional electrode', 'Used alone', 'At least 20 ft in the earth', 'Isolated from interior piping'], w: '250.53(D)(2).', r: '250.53(D)' },
    { l: 'gec', q: 'GEC size for 3/0 copper service conductors:', c: ['4 AWG Cu', '6 AWG Cu', '2 AWG Cu', '8 AWG Cu'], w: 'Table 250.66: 2/0 or 3/0 → 4 Cu.', r: 'Table 250.66' },
    { l: 'gec', q: 'GEC size for 500 kcmil copper service conductors:', c: ['1/0 Cu', '2 Cu', '2/0 Cu', '3/0 Cu'], w: 'Over 350 through 600 → 1/0 Cu.', r: 'Table 250.66' },
    { l: 'gec', q: 'GEC size for 2 AWG copper service conductors:', c: ['8 AWG Cu', '6 AWG Cu', '4 AWG Cu', '10 AWG Cu'], w: '2 or smaller → 8 Cu.', r: 'Table 250.66' },
    { l: 'gec', q: 'The GEC to a ground rod never has to be larger than:', c: ['6 AWG copper', '4 AWG copper', '8 AWG copper', '2 AWG copper'], w: '250.66(A).', r: '250.66(A)' },
    { l: 'gec', q: 'The GEC to a concrete-encased electrode never has to be larger than:', c: ['4 AWG copper', '6 AWG copper', '2 AWG copper', '1/0 copper'], w: '250.66(B).', r: '250.66(B)' },
    { l: 'gec', q: 'A GEC smaller than 6 AWG must be:', c: ['Protected in RMC, IMC, Sch 80 PVC, RTRC-XW, EMT, or cable armor', 'Run along the surface unprotected', 'Aluminum', 'Not used'], w: '250.64(B)(3).', r: '250.64(B)' },
    { l: 'gec', q: 'A GEC must generally be installed:', c: ['In one continuous length without a splice (with listed exceptions)', 'With splices every 10 ft', 'Only in PVC', 'Only underground'], w: 'Irreversible compression or exothermic splices are allowed.', r: '250.64(C)' },
    { l: 'gec', q: 'Interior metal water piping may be used to extend a GEC connection only within ___ of where it enters the building.', c: ['5 ft', '10 ft', '3 ft', '20 ft'], w: '1.52 m (5 ft).', r: '250.68(C)' },
    { l: 'bonding', q: 'At the service, standard locknuts alone are acceptable for bonding service raceways.', c: ['False', 'True', 'True for EMT', 'True under 200 A'], w: '250.92(B).', r: '250.92(B)' },
    { l: 'bonding', q: 'Where service raceways enter concentric knockouts not fully removed, you need:', c: ['A bonding jumper (e.g., bonding bushing with jumper)', 'Nothing extra', 'A second locknut', 'Tape'], w: 'Impaired connections need bonding jumpers.', r: '250.92(B)' },
    { l: 'bonding', q: 'An intersystem bonding termination must have capacity for at least ___ bonding conductors.', c: ['Three', 'Two', 'Four', 'Six'], w: '250.94(A)(2).', r: '250.94(A)' },
    { l: 'bonding', q: 'Bonding for circuits over ___ to ground follows service bonding methods.', c: ['250 V', '150 V', '120 V', '600 V'], w: '250.97.', r: '250.97' },
    { l: 'bonding', q: 'An equipment bonding jumper installed outside a raceway may be no longer than:', c: ['6 ft', '3 ft', '10 ft', '12 in.'], w: '1.8 m (6 ft), routed with the raceway.', r: '250.102(E)' },
    { l: 'bonding', q: 'Bonding jumper for interior metal water piping (at the service) never needs to be larger than:', c: ['3/0 copper', '4 AWG copper', '1/0 copper', '250 kcmil copper'], w: '250.104(A)(1): 3/0 Cu or 250 kcmil Al.', r: '250.104(A)' },
    { l: 'egc', q: 'Which may serve as an equipment grounding conductor?', c: ['EMT', 'PVC conduit', 'ENT', 'The earth'], w: 'RMC, IMC, EMT, and others per 250.118(A).', r: '250.118(A)' },
    { l: 'egc', q: 'Which may NOT be used as an equipment grounding conductor?', c: ['The structural metal frame of the building', 'Rigid metal conduit', 'EMT', 'A bare copper wire'], w: '250.118(B)(2).', r: '250.118(B)' },
    { l: 'egc', q: 'FMC may serve as the EGC only if the total length in the ground path is no more than:', c: ['6 ft', '3 ft', '10 ft', '4½ ft'], w: '250.118(A)(5)(d).', r: '250.118(A)' },
    { l: 'egc', q: 'FMC used as an EGC is limited to circuits protected at:', c: ['20 A or less', '60 A or less', '30 A or less', '15 A or less'], w: '250.118(A)(5)(b).', r: '250.118(A)' },
    { l: 'egc', q: '¾ in. LFMC may be the EGC on circuits protected at up to:', c: ['60 A', '20 A', '30 A', '100 A'], w: '250.118(A)(6)(c): trade sizes ¾–1¼, 60 A or less.', r: '250.118(A)' },
    { l: 'egc', q: 'A 4 AWG black insulated conductor may be used as an EGC if:', c: ['Permanently identified green at each end and every accessible point', 'Never', 'Taped white', 'It\'s in conduit'], w: '250.119(B).', r: '250.119(B)' },
    { l: 'egc', q: 'Minimum copper EGC for a 20 A circuit:', c: ['12 AWG', '14 AWG', '10 AWG', '8 AWG'], w: 'Table 250.122.', r: 'Table 250.122' },
    { l: 'egc', q: 'Minimum copper EGC for a 60 A circuit:', c: ['10 AWG', '8 AWG', '12 AWG', '6 AWG'], w: 'Table 250.122.', r: 'Table 250.122' },
    { l: 'egc', q: 'Minimum copper EGC for a 100 A feeder:', c: ['8 AWG', '6 AWG', '10 AWG', '4 AWG'], w: 'Table 250.122.', r: 'Table 250.122' },
    { l: 'egc', q: 'Minimum copper EGC for a 200 A feeder:', c: ['6 AWG', '4 AWG', '8 AWG', '3 AWG'], w: 'Table 250.122.', r: 'Table 250.122' },
    { l: 'egc', q: 'Minimum copper EGC for a 400 A feeder:', c: ['3 AWG', '2 AWG', '4 AWG', '1 AWG'], w: 'Table 250.122.', r: 'Table 250.122' },
    { l: 'egc', q: 'Minimum copper EGC for an 800 A feeder:', c: ['1/0 AWG', '1 AWG', '2/0 AWG', '3/0 AWG'], w: 'Table 250.122.', r: 'Table 250.122' },
    { l: 'egc', q: 'Minimum aluminum EGC for a 200 A feeder:', c: ['4 AWG', '6 AWG', '2 AWG', '3 AWG'], w: 'Table 250.122.', r: 'Table 250.122' },
    { l: 'egc', q: 'If hot conductors are upsized for voltage drop, a wire-type EGC must be:', c: ['Increased proportionally by circular mil area', 'Left at Table 250.122 size', 'Doubled', 'Removed'], w: '250.122(D).', r: '250.122(D)' },
    { l: 'egc', q: 'All EGCs spliced or terminated in a box must be:', c: ['Connected together', 'Kept separate', 'Insulated green', 'Cut short'], w: '250.148(A).', r: '250.148' },
    { t: 'find', l: 'egc', q: 'Where is the table for sizing the GEC?', c: ['Table 250.66', 'Table 250.122', 'Table 250.102(C)(1)', 'Table 310.16'], w: 'GEC = 250.66. EGC = 250.122.', r: 'Table 250.66' },
    { t: 'find', l: 'egc', q: 'Where is the table for sizing equipment grounding conductors?', c: ['Table 250.122', 'Table 250.66', 'Table 250.102(C)(1)', 'Chapter 9 Table 8'], w: 'Table 250.122.', r: 'Table 250.122' },
    { t: 'find', l: 'egc', q: 'Where is the list of permitted grounding electrodes?', c: ['250.52(A)', '250.50', '250.53', '250.66'], w: '250.52(A).', r: '250.52(A)' },
    { t: 'find', l: 'egc', q: 'Where is the list of what can serve as an equipment grounding conductor?', c: ['250.118', '250.119', '250.122', '250.134'], w: '250.118.', r: '250.118' },
    { t: 'find', l: 'egc', q: 'Where are the rules for grounding at a second building fed by a feeder?', c: ['250.32', '250.30', '250.24', '225.31'], w: '250.32.', r: '250.32' },
    { l: 'service', q: 'If a main bonding jumper is a screw only, the screw must be:', c: ['Identified with a green finish visible with the screw installed', 'Brass', 'Painted white', 'Stainless steel'], w: '250.28(B).', r: '250.28(B)' },
    { v: 1, l: 'service', q: 'Main bonding jumper size for a service with 500 kcmil copper conductors:', c: ['1/0 Cu', '2 Cu', '2/0 Cu', '3/0 Cu'], w: 'Table 250.102(C)(1): over 350 through 600 kcmil Cu → 1/0 Cu.', r: 'Table 250.102(C)(1)' },
    { l: 'service', q: 'The system bonding jumper for a separately derived system (like a dry-type transformer) is installed:', c: ['At one point, anywhere from the source to the first disconnecting means or OCPD', 'At the transformer and at every panel it feeds', 'Only at the building service', 'At the first receptacle'], w: '250.30(A)(1): a single point, within the enclosure where it originates.', r: '250.30(A)' },
    { l: 'service', q: 'The GEC for a separately derived system connects to the derived neutral at:', c: ['The same point where the system bonding jumper is connected', 'The building service only', 'Any downstream panel', 'The water heater'], w: '250.30(A)(5).', r: '250.30(A)' },
    { l: 'service', q: 'A building supplied by only one branch circuit (with an EGC) must have its own grounding electrode.', c: ['False', 'True', 'True if over 120 V', 'True for multiwire circuits'], w: '250.32(A) Exception: a single branch circuit, including a multiwire branch circuit, with an EGC.', r: '250.32(A)' },
    { l: 'electrodes', q: 'Rebar may be used as the conductor that interconnects the electrodes of a grounding electrode system.', c: ['False', 'True', 'True if 20 ft long', 'True in footings only'], w: '250.53(C): rebar shall not be used as a conductor to interconnect electrodes.', r: '250.53(C)' },
    { l: 'electrodes', q: 'The bonding jumper that is the sole connection to a supplemental ground rod never has to be larger than:', c: ['6 AWG copper', '4 AWG copper', '8 AWG copper', '2 AWG copper'], w: '250.53(E): 6 AWG Cu or 4 AWG Al.', r: '250.53(E)' },
    { l: 'electrodes', q: 'A ground ring must be installed at least ___ below the surface of the earth.', c: ['30 in.', '18 in.', '24 in.', '12 in.'], w: '750 mm (30 in.).', r: '250.53(F)' },
    { l: 'electrodes', q: 'A plate electrode must expose at least ___ of surface to the soil.', c: ['2 ft²', '1 ft²', '4 ft²', '½ ft²'], w: '0.186 m² (2 ft²).', r: '250.52(A)' },
    { l: 'electrodes', q: 'Unless the clamp is listed for more, how many conductors may be connected to an electrode by a single ground clamp?', c: ['One', 'Two', 'Three', 'Any number'], w: '250.70(A).', r: '250.70' },
    { l: 'gec', q: 'A steel (ferrous) raceway that protects a GEC must be:', c: ['Bonded at each end to the GEC or the electrode', 'Left unbonded', 'Bonded at one end only', 'Replaced with PVC'], w: '250.64(E)(1): electrically continuous and bonded at each end.', r: '250.64(E)' },
    { l: 'gec', q: 'Outside a building, an aluminum GEC may not be terminated within ___ of the earth.', c: ['18 in.', '12 in.', '6 in.', '24 in.'], w: '450 mm (18 in.).', r: '250.64(A)' },
    { l: 'bonding', q: 'An expansion fitting in a run of metal conduit must be:', c: ['Made electrically continuous with a bonding jumper or other means', 'Left as is', 'Replaced with a coupling', 'Wrapped in tape'], w: '250.98: expansion, expansion-deflection, and telescoping sections of metal raceway.', r: '250.98' },
    { l: 'bonding', q: 'A bonding jumper for metal gas piping that is likely to become energized is sized from:', c: ['Table 250.122, based on the circuit likely to energize the piping', 'Table 250.66', 'Table 250.102(C)(1)', 'Table 310.16'], w: '250.104(B).', r: '250.104(B)' },
    { l: 'bonding', q: 'Service raceways, meter bases, and other enclosures for service conductors must be:', c: ['Bonded together', 'Isolated from each other', 'Grounded to a separate rod', 'Nonmetallic'], w: '250.92(A).', r: '250.92(A)' },
    { l: 'egc', q: 'Where a metal raceway serves as the EGC, all connections, joints, and fittings must be:', c: ['Made tight', 'Taped', 'Painted', 'Welded'], w: '250.120(A).', r: '250.120(A)' },
    { v: 1, l: 'egc', q: 'A feeder protected by a 400 A breaker runs in two parallel conduits. Minimum copper wire EGC in each conduit:', c: ['3 AWG', '6 AWG', '8 AWG', '1/0 AWG'], w: '250.122(H): each raceway gets an EGC sized for the full OCPD. Table 250.122: 400 A → 3 Cu.', r: '250.122(H)' },
    { l: 'egc', q: 'A switch may be placed in an equipment grounding conductor:', c: ['Only if opening it disconnects all sources of energy', 'Any time', 'Only on 20 A circuits', 'If it is labeled'], w: '250.124(B).', r: '250.124' },
    { l: 'egc', q: 'Green insulation may be used on a hot or neutral conductor in a power circuit.', c: ['False', 'True', 'True if taped at each end', 'True for 4 AWG and larger'], w: '250.119(A)(3), with exceptions only for certain low-voltage cables, cords, and traffic signals.', r: '250.119(A)' },
    { l: 'egc', q: 'Hot conductors are upsized only to account for more than three current-carrying conductors in the raceway. The wire EGC:', c: ['Does not have to be increased', 'Must be increased proportionally', 'Must be doubled', 'Must go up one size'], w: '250.122(D) applies to increases for any reason other than 310.15(B) or 310.15(C).', r: '250.122(D)' },
    { l: 'egc', q: 'A receptacle on a surface-mounted metal box may use direct metal-to-metal yoke contact for grounding if:', c: ['At least one insulating washer is removed so the yoke contacts the box', 'The box is painted', 'The cover is plastic', 'Never'], w: '250.146(A)(1).', r: '250.146' },
    { t: 'find', l: 'egc', q: 'Where are the rules for bonding metal water piping, gas piping, and building steel?', c: ['250.104', '250.92', '250.66', '250.122'], w: '250.104.', r: '250.104' },
    { t: 'find', l: 'egc', q: 'Where are the grounding rules for separately derived systems (transformers)?', c: ['250.30', '250.32', '250.24', '250.36'], w: '250.30.', r: '250.30' },
    { t: 'find', l: 'egc', q: 'Where is the table for sizing main bonding jumpers and supply-side bonding jumpers?', c: ['Table 250.102(C)(1)', 'Table 250.122', 'Table 250.66', 'Table 310.16'], w: 'Table 250.102(C)(1).', r: 'Table 250.102(C)(1)' }
  ]
});
