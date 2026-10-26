(() => {
const S = (inner) => `<svg viewBox="0 0 120 80" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">${inner}</svg>`;
const fig = (svg, name, nick = '') => `<figure>${S(svg)}<figcaption>${name}${nick ? `<small>${nick}</small>` : ''}</figcaption></figure>`;
const D = {
  emt: '<path d="M10 30h100M10 50h100"/><ellipse cx="10" cy="40" rx="4" ry="10"/><ellipse cx="110" cy="40" rx="4" ry="10"/>',
  rigid: '<path d="M10 28h80M10 52h80"/><ellipse cx="10" cy="40" rx="5" ry="12"/><path d="M90 24h20v32H90z"/><path d="M70 28v24M75 28v24M80 28v24M85 28v24" stroke-width="1.5"/>',
  pvc: '<path d="M10 30h78M10 50h78M88 26h22M88 54h22M88 26v28" fill="none"/><ellipse cx="10" cy="40" rx="4" ry="10"/>',
  flex: '<path d="M10 30h100M10 50h100" stroke-width="2"/><path d="M14 30l6 20M24 30l6 20M34 30l6 20M44 30l6 20M54 30l6 20M64 30l6 20M74 30l6 20M84 30l6 20M94 30l6 20"/>',
  mc: '<path d="M10 32h100M10 48h100" stroke-width="2"/><path d="M14 32q4 8 0 16M24 32q4 8 0 16M34 32q4 8 0 16M44 32q4 8 0 16M54 32q4 8 0 16M64 32q4 8 0 16M74 32q4 8 0 16M84 32q4 8 0 16M94 32q4 8 0 16"/><path d="M110 36l6-4M110 40h7M110 44l6 4" stroke="#7cc4ff"/>',
  nm: '<rect x="10" y="30" width="96" height="20" rx="8"/><path d="M106 34h10M106 40h10M106 46h10" stroke="#9aa5b1"/>',
  ssconn: '<path d="M20 26h40v28H20z"/><path d="M36 26v-10h8v10"/><path d="M60 32h30v16H60"/><path d="M76 26v28" stroke-width="5"/><path d="M4 30h16M4 50h16"/>',
  compconn: '<path d="M30 26h26v28H30z"/><path d="M16 22h14v36H16z"/><path d="M19 22v36M27 22v36" stroke-width="1.5"/><path d="M56 32h34v16H56"/><path d="M78 26v28" stroke-width="5"/><path d="M2 30h14M2 50h14"/>',
  coupling: '<path d="M30 24h60v32H30z"/><path d="M48 24v-10h6v10M66 24v-10h6v10"/><path d="M6 30h24M6 50h24M90 30h24M90 50h24"/>',
  onehole: '<path d="M10 66h100" stroke-width="2" stroke-dasharray="4 4"/><circle cx="50" cy="44" r="16"/><path d="M30 64v-20a20 20 0 0 1 40 0v22h36"/><circle cx="90" cy="66" r="3" fill="currentColor"/>',
  twohole: '<path d="M10 66h100" stroke-width="2" stroke-dasharray="4 4"/><circle cx="60" cy="44" r="16"/><path d="M14 66h22v-22a24 24 0 0 1 48 0v22h22"/><circle cx="24" cy="66" r="3" fill="currentColor"/><circle cx="96" cy="66" r="3" fill="currentColor"/>',
  strut: '<path d="M30 20v44h60V20M30 20h12v8M90 20H78v8"/><path d="M10 72h100" stroke-width="1.5" stroke-dasharray="3 5"/>',
  strutstrap: '<path d="M20 64h80v14H20z"/><circle cx="60" cy="42" r="14"/><path d="M38 64V42a22 22 0 0 1 44 0v22"/><path d="M38 64h-8M82 64h8" stroke-width="4"/>',
  beamclamp: '<path d="M14 14h92M14 22h92M60 14v-8" stroke-width="2"/><path d="M40 10h36v20H58v12"/><path d="M40 10v28h8"/><path d="M60 42v30" stroke-width="5"/>',
  rod: '<path d="M60 4v72" stroke-width="5"/><path d="M54 10l12-4M54 20l12-4M54 30l12-4M54 40l12-4M54 50l12-4M54 60l12-4M54 70l12-4" stroke-width="1.5"/>',
  caddy: '<path d="M20 20h80" stroke-width="5"/><path d="M40 20v40h40V28"/><circle cx="60" cy="48" r="10"/>',
  lb: '<path d="M14 30h56a8 8 0 0 1 8 8v34H58V46H14z"/><rect x="26" y="34" width="36" height="8" rx="3"/><path d="M4 32h10M4 44h10M60 72v6M76 72v6"/>',
  ll: '<path d="M14 30h56v42H50V48H14z"/><path d="M50 36v8" /><text x="76" y="34" font-size="12" fill="currentColor" stroke="none">cover</text><text x="76" y="48" font-size="12" fill="currentColor" stroke="none">on side</text>',
  tee: '<path d="M10 30h100v18H70v24H50V48H10z"/><rect x="36" y="34" width="48" height="8" rx="3"/>',
  box4: '<rect x="20" y="10" width="60" height="60" rx="3"/><rect x="34" y="22" width="32" height="36" rx="6"/><circle cx="50" cy="16" r="2" fill="currentColor"/><circle cx="50" cy="64" r="2" fill="currentColor"/><path d="M86 30h24M86 50h24" stroke-width="2"/><text x="86" y="26" font-size="11" fill="currentColor" stroke="none">ring</text>',
  handy: '<rect x="35" y="8" width="50" height="64" rx="8"/><circle cx="60" cy="16" r="2" fill="currentColor"/><circle cx="60" cy="64" r="2" fill="currentColor"/>',
  locknut: '<circle cx="60" cy="40" r="18"/><path d="M60 14l6 8h-12zM86 40l-8 6v-12zM60 66l-6-8h12zM34 40l8-6v12z" fill="currentColor"/>',
  bushing: '<circle cx="60" cy="40" r="26"/><circle cx="60" cy="40" r="16"/><path d="M60 14v6M60 60v6" />',
  gbush: '<circle cx="54" cy="40" r="22"/><circle cx="54" cy="40" r="13"/><path d="M76 34h20v12H76"/><path d="M96 40h18" stroke="#3ecf8e"/>',
  anchor: '<path d="M40 14h40M60 14v50" stroke-width="5"/><path d="M50 50l10 14 10-14" /><path d="M54 24l12-4M54 32l12-4" stroke-width="1.5"/>',
  hub: '<path d="M30 30h40v20H30z"/><path d="M22 22h56v8H22z"/><path d="M40 50v14h20V50"/><path d="M14 22h8M78 22h8" />',
  expansion: '<path d="M6 30h40M6 50h40"/><path d="M40 24h40v32H40z"/><path d="M80 30h34M80 50h34"/><path d="M58 24v32" stroke-dasharray="3 3"/>',
  sweep: '<path d="M14 70V50a40 40 0 0 1 40-40h52"/><path d="M34 70V50a20 20 0 0 1 20-20h52"/>',
  bender: '<path d="M20 60a40 40 0 0 1 40-40h4v14h-4a26 26 0 0 0-26 26z"/><path d="M60 34l40 40" stroke-width="5"/><path d="M40 34l-6 6" stroke="#ffb020"/>',
  reamer: '<path d="M20 40l40-18v36z"/><path d="M60 34h40v12H60z"/><path d="M28 36l24-10M28 44l24 10" stroke-width="1.5"/>',
  band: '<rect x="14" y="20" width="92" height="40" rx="10"/><path d="M30 60v12h60V60"/><path d="M20 24h80" stroke-dasharray="4 3"/>',
  fish: '<circle cx="50" cy="40" r="26"/><circle cx="50" cy="40" r="8"/><path d="M76 40h36" /><path d="M108 36l6 4-6 4"/>',
  ko: '<circle cx="40" cy="40" r="20"/><path d="M30 40h20M40 30v20" stroke-width="1.5"/><path d="M76 20h24v40H76z"/><path d="M88 20V8" stroke-width="5"/>',
};
window.FIG = D;

(window.MODULES ||= []).push({
  id: 'names', icon: '🔩', title: 'Names of Things',
  blurb: 'What the journeyman means when he says "grab me a 1-hole and a set-screw connector."',
  lessons: [
    {
      id: 'raceways', title: 'Pipe (raceways)',
      html: `
<p>A <b>raceway</b> is any closed channel you pull wire into. Most of commercial and industrial work is <b>pipe</b>, and each kind has its own article in Chapter 3.</p>
<div class="fig">
${fig(D.emt, 'EMT', 'Thin-wall, "pipe." Art 358')}
${fig(D.rigid, 'RMC / GRC', 'Rigid, threaded, heavy. Art 344')}
${fig(D.rigid, 'IMC', 'Intermediate, lighter than rigid. Art 342')}
${fig(D.pvc, 'PVC', 'Sched 40 / 80, glued. Art 352')}
${fig(D.flex, 'FMC', '"Flex," "Greenfield." Art 348')}
${fig(D.flex, 'LFMC', '"Sealtite," liquidtight flex. Art 350')}
</div>
<div class="tablewrap"><table>
<tr><th>Name</th><th>Article</th><th>What it is / where you see it</th></tr>
<tr><td><b>EMT</b> (electrical metallic tubing)</td><td>[[Art 358]]</td><td>Thin-wall steel tube. <b>Not threaded</b>. Joined with set-screw or compression couplings/connectors. The everyday pipe in commercial buildings: walls, ceilings, exposed runs.</td></tr>
<tr><td><b>RMC</b> rigid metal conduit ("rigid," "GRC" galvanized rigid)</td><td>[[Art 344]]</td><td>Thick-wall, threaded. Toughest pipe: services, underground stub-ups, industrial, areas with physical damage.</td></tr>
<tr><td><b>IMC</b> intermediate metal conduit</td><td>[[Art 342]]</td><td>Threaded like rigid but thinner wall and lighter. Used about anywhere rigid is.</td></tr>
<tr><td><b>PVC</b> rigid polyvinyl chloride conduit</td><td>[[Art 352]]</td><td>Plastic, glued joints. Schedule 40 (standard) and Schedule 80 (thicker, for physical damage). Underground, wet and corrosive areas. Bent with a heat box/blanket.</td></tr>
<tr><td><b>ENT</b> electrical nonmetallic tubing ("smurf tube")</td><td>[[Art 362]]</td><td>Corrugated, flexible blue plastic tubing. Inside walls and in concrete slabs.</td></tr>
<tr><td><b>FMC</b> flexible metal conduit ("flex," "Greenfield")</td><td>[[Art 348]]</td><td>Spiral steel. Final connections to light fixtures, motors, and equipment that vibrates or needs to move a bit.</td></tr>
<tr><td><b>LFMC</b> liquidtight flexible metal conduit ("Sealtite")</td><td>[[Art 350]]</td><td>Flex with a plastic jacket. Motors, AC units, anything outdoors or wet.</td></tr>
<tr><td><b>LFNC</b> liquidtight flexible nonmetallic conduit</td><td>[[Art 356]]</td><td>All-plastic liquidtight flex.</td></tr>
<tr><td><b>HDPE</b> high density polyethylene conduit</td><td>[[Art 353]]</td><td>Comes on reels. Directional boring and long underground runs.</td></tr>
<tr><td><b>Wireway</b> ("gutter," "trough")</td><td>[[Art 376]]</td><td>Square sheet-metal channel with a hinged or screw-on cover. Over panels and MCCs to tap off many circuits.</td></tr>
<tr><td><b>Surface raceway</b> ("Wiremold")</td><td>[[Art 386]]</td><td>Low-profile metal raceway that mounts on finished walls.</td></tr>
<tr><td><b>Cable tray</b></td><td>[[Art 392]]</td><td>Ladder-style or solid-bottom tray that supports cables (not a raceway). Big in industrial plants.</td></tr>
</table></div>
<div class="job"><b>On the job</b>When someone says "pipe" in commercial work they usually mean EMT. "Rigid" or "GRC" means RMC. Sizes are trade sizes: "half-inch," "three-quarter," "inch," "inch-and-a-quarter."</div>
<h3>What it looks like</h3>
[[photo:emt-fittings]]
[[photo:pvc]]
[[photo:ent]]
[[photo:conduit-strut]]
[[photo:deck-conduit]]
[[photo:pvc-stubups]]
[[photo:duct-bank]]`
    },
    {
      id: 'cables', title: 'Cables',
      html: `
<p>A <b>cable</b> is a factory assembly of wires inside a jacket or armor. You don't pull wire into it; you install the whole thing.</p>
<div class="fig">
${fig(D.mc, 'MC cable', 'Metal-clad. Art 330')}
${fig(D.nm, 'NM ("Romex")', 'Nonmetallic-sheathed. Art 334')}
</div>
<div class="tablewrap"><table>
<tr><th>Name</th><th>Article</th><th>Notes</th></tr>
<tr><td><b>MC</b> metal-clad cable</td><td>[[Art 330]]</td><td>Interlocked aluminum or steel armor. Common in commercial buildings for lighting and receptacle drops. Most MC has a <b>green insulated ground wire</b> inside.</td></tr>
<tr><td><b>AC</b> armored cable ("BX")</td><td>[[Art 320]]</td><td>Looks like MC, but has a thin copper or aluminum <b>bonding strip</b> under the armor, and the armor plus strip is the ground path ([[320.108]]). You need an insulating <b>anti-short bushing</b> (the red "redhead") between the wires and the armor at every cut end ([[320.40]]). Not allowed in damp or wet locations.</td></tr>
<tr><td><b>NM / NMC</b> ("Romex")</td><td>[[Art 334]]</td><td>Plastic-jacketed. Mostly houses and apartments. Jacket color tells the size: white 14, yellow 12, orange 10.</td></tr>
<tr><td><b>UF</b> underground feeder</td><td>[[Art 340]]</td><td>Like NM, but solid gray and rated for direct burial.</td></tr>
<tr><td><b>SE / USE / SER</b> service-entrance cable</td><td>[[Art 338]]</td><td>Big gray cable for services and feeders. "SER" is the round style with individually insulated conductors. USE is the underground type.</td></tr>
<tr><td><b>TC</b> tray cable</td><td>[[Art 336]]</td><td>Industrial control and power cable for cable trays.</td></tr>
<tr><td><b>MI</b> mineral-insulated cable</td><td>[[Art 332]]</td><td>Copper tube packed with mineral insulation. Fire-rated circuits.</td></tr>
</table></div>
<div class="tip"><b>Remember</b>MC with a green wire: the green wire is the ground. AC (BX): the armor plus the bonding strip is the ground path, and the redhead bushing protects the wires from the cut armor edge.</div>
<h3>What it looks like</h3>
[[photo:nm]]
[[photo:cable-tray]]
[[photo:tray-trapeze]]`
    },
    {
      id: 'fittings', title: 'Fittings: connectors, couplings, locknuts, bushings',
      html: `
<p>Fittings join pipe to pipe and pipe to boxes. Use them only with the wiring method they're listed for: EMT fittings on EMT, MC fittings on MC ([[300.17]]).</p>
<div class="fig">
${fig(D.ssconn, 'Set-screw connector', 'Dry locations, EMT to box')}
${fig(D.compconn, 'Compression connector', '"Raintight." Wet locations')}
${fig(D.coupling, 'Set-screw coupling', 'Joins two sticks of EMT')}
${fig(D.locknut, 'Locknut', 'Holds a connector in the KO')}
${fig(D.bushing, 'Insulating bushing', 'Protects wire from sharp edges')}
${fig(D.gbush, 'Grounding bushing', 'Has a lug for a bonding jumper')}
${fig(D.hub, 'Myers hub', 'Watertight entry on top of a box')}
${fig(D.expansion, 'Expansion fitting', 'Lets PVC grow and shrink')}
${fig(D.sweep, 'Elbow / sweep', 'Factory 90° bend')}
</div>
<ul>
<li><b>Connector</b>: goes on the end of the pipe and into a box knockout (KO). A <b>locknut</b> holds it on the inside of the box.</li>
<li><b>Coupling</b>: joins two pieces of pipe. Rigid uses threaded couplings, EMT uses set-screw or compression, PVC is glued.</li>
<li><b>Set-screw vs. compression (EMT)</b>: set-screw is fine dry. In <b>wet locations use fittings listed for wet locations</b> (compression "raintight"), and in concrete use <b>concrete-tight</b> fittings ([[358.42]]).</li>
<li><b>Bushing</b>: a smooth ring on the end of threaded pipe inside a box, so wire doesn't get cut. Rigid and IMC need one wherever the pipe enters a box, unless the box or fitting is designed to protect the wire ([[344.46]]). With <b>4 AWG and larger</b>, the protection must be a smoothly rounded insulating surface or one of the other methods in [[300.6(G)]]. An all-plastic bushing can't be what holds the pipe to the box; that's the locknut's job.</li>
<li><b>Grounding/bonding bushing</b>: a bushing with a lug, used to bond a pipe where the locknut alone isn't enough (services, concentric KOs).</li>
<li><b>Reducing washers</b>: make a big KO fit a smaller connector.</li>
<li><b>Erickson</b> (3-piece coupling): joins two rigid pipes when neither can be turned.</li>
<li><b>Chase nipple</b>: short threaded nipple for connecting two boxes close together.</li>
<li><b>Nipple</b>: a short piece of pipe, usually threaded on both ends. A nipple <b>24 in. or shorter</b> between boxes can be filled to 60% (Chapter 9, Note 4).</li>
<li><b>PVC terminal adapter / female adapter</b>: glues onto PVC so it can screw into a box with a locknut.</li>
</ul>
<div class="job"><b>On the job</b>"Raintight" (compression) fittings outside, set-screw inside. Ream every cut end ([[358.28(A)]]), and make every set screw tight. Loose EMT fittings break the ground path.</div>
<h3>What it looks like</h3>
[[photo:straps-fittings]]
[[photo:ac-connectors]]`
    },
    {
      id: 'boxes', title: 'Boxes and conduit bodies',
      html: `
<div class="fig">
${fig(D.box4, '4" square box', '"Four-square," "1900 box," with mud ring')}
${fig(D.handy, 'Handy box', 'Surface utility box')}
${fig(D.lb, 'LB', 'Cover on the back')}
${fig(D.ll, 'LL / LR', 'Cover on left / right')}
${fig(D.tee, 'T', 'Three openings')}
</div>
<div class="tablewrap"><table>
<tr><th>Name</th><th>What it is</th></tr>
<tr><td><b>4" square ("four-square," "1900")</b></td><td>The workhorse box in commercial work: 1-1/2" or 2-1/8" deep. Add a <b>mud ring</b> (plaster ring/device ring) to set the depth for drywall and hold devices.</td></tr>
<tr><td><b>4-11/16" box ("big square," "eleven-sixteenths")</b></td><td>Bigger square box for more wires or bigger pipe.</td></tr>
<tr><td><b>Octagon / round box</b></td><td>Ceiling boxes for light fixtures.</td></tr>
<tr><td><b>Handy box (utility box)</b></td><td>Small surface-mount box for one device.</td></tr>
<tr><td><b>FS / FD box</b></td><td>Cast boxes with threaded hubs, for wet locations and rigid conduit.</td></tr>
<tr><td><b>Pull box / junction box ("j-box")</b></td><td>A box with a blank cover, used to pull wire or splice.</td></tr>
<tr><td><b>Conduit bodies</b>: LB, LL, LR, T, C, X</td><td>Named by where the cover is when you hold the body like an upside-down L: <b>LB</b> = cover on the back, <b>LL</b> = left, <b>LR</b> = right. <b>T</b> has three openings, <b>C</b> is straight through, <b>X</b> has four.</td></tr>
<tr><td><b>Cabinet / can / enclosure</b></td><td>Bigger enclosures with doors or covers (Art 312).</td></tr>
</table></div>
<p>Boxes are covered in [[Art 314]]. Supporting boxes: [[314.23]]. How many wires fit (box fill): [[314.16]].</p>
<div class="tip"><b>Conduit body trick</b>Hold it upright like a capital L, with the end hub pointing up and the straight side facing you. The side the cover (and the side opening) is on gives the letter: on the back = LB, on the left = LL, on the right = LR. In practice, an LB is "the one that turns a corner through the wall."</div>
<p>Conduit bodies with 6 AWG or smaller must have at least twice the cross-section of the largest conduit attached, and can only hold splices if they're marked with their volume ([[314.16(C)]]). Every conduit body gets a cover ([[314.25]]).</p>
<h3>What it looks like</h3>
[[photo:box-4sq]]
[[photo:box-4sq-deep]]
[[photo:box-handy]]
[[photo:offset-box]]`
    },
    {
      id: 'supports', title: 'Supports and hardware',
      html: `
<div class="fig">
${fig(D.onehole, 'One-hole strap', '"1-hole," pipe strap')}
${fig(D.twohole, 'Two-hole strap', 'Holds pipe on a flat surface')}
${fig(D.strut, 'Strut', '"Unistrut," "Kindorf," 1-5/8" channel')}
${fig(D.strutstrap, 'Strut strap', 'Clamps pipe to strut')}
${fig(D.beamclamp, 'Beam clamp', 'Hangs rod from steel beam flange')}
${fig(D.rod, 'All-thread', '"Threaded rod," 3/8" common')}
${fig(D.caddy, 'Caddy clip', 'Spring-steel clip; rod, wire, or beam')}
${fig(D.anchor, 'Anchor', 'Tapcon, wedge anchor, drop-in')}
</div>
<ul>
<li><b>One-hole / two-hole straps</b>: fasten pipe flat to a wall or ceiling. One-holes are the most common for EMT on walls.</li>
<li><b>Strut</b> ("Unistrut," "Kindorf," "channel"): 1-5/8" steel channel. Bolt it to walls, or hang it on all-thread to make a <b>trapeze</b> for many pipes at once. Pipes are held with <b>strut straps</b> (pipe clamps). Bolts go into <b>spring nuts / channel nuts</b>.</li>
<li><b>All-thread</b> (threaded rod): hangs strut, boxes, and pipe from the structure above.</li>
<li><b>Beam clamp</b>: attaches all-thread to the flange of a steel beam.</li>
<li><b>Caddy clips / "batwings" / "hammer-ons"</b>: spring-steel clips for pipe and boxes on rod, wire, or flanges.</li>
<li><b>Anchors</b>: Tapcons (concrete screws), wedge anchors ("red heads"), drop-ins (set with a setting tool), toggle bolts for hollow walls, powder-actuated "shots" (Hilti/Ramset; needs training).</li>
<li><b>Minerallac</b>: a hanger strap that hammers onto a beam or nails into wood.</li>
<li><b>Independent support wire</b>: a separate, marked hanger wire for wiring above a drop ceiling. You can't use the ceiling grid wires ([[300.13(B)]]).</li>
</ul>
<div class="warn"><b>Never</b>Support pipe, boxes, or cable from drop-ceiling grid wires or the grid itself, from other trades' pipes, or from other conduits (unless the raceway is identified as a support). See [[300.13]].</div>
<h3>What it looks like</h3>
[[photo:strut-trapeze]]
[[photo:spring-nut]]`
    },
    {
      id: 'tools', title: 'Tools of the trade',
      html: `
<div class="fig">
${fig(D.bender, 'Hand bender', 'EMT/rigid, ½"–1¼"')}
${fig(D.reamer, 'Reamer', 'Cleans burrs from cut ends')}
${fig(D.band, 'Portable band saw', '"Porta-band," cuts pipe and strut')}
${fig(D.fish, 'Fish tape', 'Pulls wire through pipe')}
${fig(D.ko, 'Knockout punch', 'Makes holes in boxes')}
</div>
<div class="tablewrap"><table>
<tr><th>Tool</th><th>Used for</th></tr>
<tr><td>Hand bender ("Ideal," "Klein," "Greenlee")</td><td>Bending ½" to 1¼" EMT (and smaller rigid). Has marks: arrow, star, teardrop, degree marks.</td></tr>
<tr><td>Hickey</td><td>A bending tool for rigid conduit, mainly small kicks and offsets</td></tr>
<tr><td>Chicago bender / electric bender (Greenlee 555)</td><td>Bigger pipe: 1¼"+ EMT, rigid, IMC</td></tr>
<tr><td>Portable band saw / Sawzall / hacksaw</td><td>Cutting pipe and strut. Band saw cuts clean and square.</td></tr>
<tr><td>Reamer / deburring tool</td><td>Every cut end must be reamed so the wire won't get cut ([[358.28]])</td></tr>
<tr><td>Pipe threader (Ridgid 300, handheld threader)</td><td>Threading rigid and IMC. Use cutting oil.</td></tr>
<tr><td>Knockout punch set</td><td>Clean holes in boxes and panels</td></tr>
<tr><td>Step bit / hole saw</td><td>Holes in boxes, strut, and wood</td></tr>
<tr><td>Fish tape / mule tape / pull rope / tugger</td><td>Pulling wire. A <b>tugger</b> is a powered puller for big pulls. Use <b>wire lube</b>.</td></tr>
<tr><td>Channellocks / lineman's / strippers / nut drivers</td><td>Basic hand tools. Lineman's pliers can ream EMT in a pinch.</td></tr>
<tr><td>Torque screwdriver / torque wrench</td><td>Terminations must be torqued to the listed value with a calibrated tool ([[110.14(D)]])</td></tr>
<tr><td>Multimeter / non-contact tester</td><td>Testing voltage. Always <b>test before touch</b>, and test your meter on a known live source first.</td></tr>
<tr><td>Torpedo level</td><td>Plumb and level pipe and boxes. Neat work is required ([[110.12]]).</td></tr>
</table></div>
<h3>What it looks like</h3>
[[photo:bender]]
[[photo:tubing-cutter]]
[[photo:reamer]]
[[photo:fish-tape]]
[[photo:lineman]]
[[photo:longnose]]
[[photo:stripper]]
[[photo:multimeter]]
[[photo:clamp-meter]]
[[photo:tester]]
[[photo:tape]]`
    },
    {
      id: 'gear', title: "Equipment you'll see (photos)",
      html: `
<p>Real photos of equipment you'll work on. Tap a section button to read what the code says about it.</p>
[[photo:panel]]
[[photo:safety-switch]]
[[photo:mcc]]
[[photo:padmount]]
[[photo:meter-base]]
[[photo:service-mast]]
[[photo:receptacles]]
[[photo:gfci]]`
    }
  ],
  questions: [
    { l: 'raceways', q: 'EMT stands for:', c: ['Electrical metallic tubing', 'Electrical metal threaded', 'Emergency metallic tubing', 'Enclosed metal trough'], w: 'Electrical metallic tubing, Article 358.', r: 'Art 358' },
    { l: 'raceways', q: '"GRC" on the job refers to:', c: ['Galvanized rigid conduit (RMC)', 'Ground return conductor', 'Gray rigid PVC', 'General raceway conduit'], w: 'GRC = galvanized rigid conduit, which the NEC calls rigid metal conduit (RMC), Article 344.', r: 'Art 344' },
    { l: 'raceways', q: 'Which of these may NOT be threaded?', c: ['EMT', 'RMC', 'IMC', 'All of them can be threaded'], w: 'EMT shall not be threaded (except factory integral couplings).', r: '358.28(B)' },
    { l: 'raceways', q: '"Sealtite" is a trade name for:', c: ['Liquidtight flexible metal conduit (LFMC)', 'Flexible metal conduit (FMC)', 'Schedule 80 PVC', 'MC cable'], w: 'LFMC is flex with a liquidtight plastic jacket, Article 350.', r: 'Art 350' },
    { l: 'raceways', q: '"Greenfield" is:', c: ['Flexible metal conduit (FMC)', 'Liquidtight flexible conduit', 'Green-insulated ground wire', 'ENT'], w: 'FMC (flex), Article 348.', r: 'Art 348' },
    { l: 'raceways', q: '"Smurf tube" is:', c: ['ENT (electrical nonmetallic tubing)', 'LFNC', 'PVC Schedule 80', 'HDPE'], w: 'The blue corrugated ENT, Article 362.', r: 'Art 362' },
    { l: 'raceways', q: 'Which PVC schedule is thicker and used where subject to physical damage?', c: ['Schedule 80', 'Schedule 40', 'Schedule 20', 'Type EB'], w: 'Schedule 80 has a thicker wall.', r: '352.10' },
    { l: 'raceways', q: 'A sheet-metal trough with a removable cover over a panel, used to tap off many circuits, is a:', c: ['Wireway (gutter)', 'Cable tray', 'Conduit body', 'Busway'], w: 'Metal wireways, Article 376.', r: 'Art 376' },
    { l: 'cables', q: 'Which cable needs a red plastic anti-short bushing at cut ends?', c: ['AC (BX)', 'NM', 'UF', 'TC'], w: 'AC cable needs an insulating bushing (redhead) between the conductors and the armor at terminations.', r: 'Art 320' },
    { l: 'cables', q: 'NM cable with a yellow jacket is usually what size?', c: ['12 AWG', '14 AWG', '10 AWG', '8 AWG'], w: 'Industry color code: white 14, yellow 12, orange 10, black 8/6.' },
    { l: 'cables', q: 'Is MC cable a raceway?', c: ['No, it is a cable assembly', 'Yes, because it has metal armor', 'Only the steel type', 'Only when used as a ground'], w: 'Cables (MC, AC, NM) are factory assemblies, not raceways.', r: 'Art 100' },
    { l: 'cables', q: 'Which cable is commonly used in industrial cable trays?', c: ['TC (tray cable)', 'NM', 'UF', 'AC'], w: 'Type TC, Article 336.', r: 'Art 336' },
    { l: 'fittings', q: 'For EMT in a wet location, couplings and connectors must be:', c: ['Listed for wet locations', 'Set-screw type', 'Concrete-tight only', 'Any EMT fitting'], w: 'Wet location = fittings listed for wet locations (compression/raintight).', r: '358.42' },
    { l: 'fittings', q: 'For EMT buried in concrete, couplings and connectors must be:', c: ['Concrete-tight type', 'Raintight type', 'Set-screw type only', 'Threaded'], w: 'Buried in masonry or concrete = concrete-tight.', r: '358.42' },
    { l: 'fittings', q: 'Where rigid conduit enters a box, a bushing is required unless:', c: ['The box or fitting is designed to protect the wire', 'The wire is smaller than 4 AWG', 'The box is outdoors', 'Two locknuts are used'], w: '344.46. For 4 AWG and larger, see also 300.6(G).', r: '344.46' },
    { l: 'cables', q: 'In AC cable (BX), the fault-current path is provided by:', c: ['The armor together with the internal bonding strip', 'A green insulated wire inside', 'The neutral', 'The building steel'], w: '320.100 and 320.108: armor with an internal copper or aluminum bonding strip.', r: '320.108' },
    { l: 'fittings', q: 'What holds a connector in a box knockout on the inside?', c: ['A locknut', 'A bushing', 'A set screw', 'A strap'], w: 'The locknut threads onto the connector inside the box.' },
    { l: 'fittings', q: 'Where conductors 4 AWG or larger enter a box from a raceway, the conductors must be protected by:', c: ['An identified fitting providing a smoothly rounded insulating surface (like a bushing)', 'Nothing extra', 'Tape on the end of the pipe', 'A locknut only'], w: 'Conductors 4 AWG and larger need an insulating bushing or equivalent.', r: '300.6(G)' },
    { l: 'fittings', q: 'A three-piece coupling used to join two rigid conduits when neither can be turned is an:', c: ['Erickson', 'Chase nipple', 'Myers hub', 'Expansion fitting'], w: 'An Erickson (three-piece union) joins rigid where you can\'t spin either pipe.' },
    { l: 'fittings', q: 'Fittings and connectors may be used:', c: ['Only with the wiring methods they are designed and listed for', 'With any wiring method if they fit', 'Only indoors', 'Only with metal raceways'], w: 'EMT fittings on EMT, MC connectors on MC, and so on.', r: '300.17' },
    { l: 'boxes', q: 'An LB conduit body has its cover on the:', c: ['Back', 'Left', 'Right', 'Bottom'], w: 'LB = back, LL = left, LR = right.' },
    { l: 'boxes', q: 'A "mud ring" is used to:', c: ['Set device depth for the wall finish and mount devices on a square box', 'Seal a box against water', 'Ground a box', 'Support pipe'], w: 'Plaster/mud rings bring a 4" square box out to the drywall face and hold the device.' },
    { l: 'boxes', q: 'Box support rules are found in:', c: ['314.23', '314.16', '300.13', '110.26'], w: '314.23 = supports. 314.16 = box fill.', r: '314.23' },
    { l: 'supports', q: 'Wiring above a suspended ceiling may be supported by the ceiling grid support wires.', c: ['False', 'True', 'True if it is EMT', 'True for MC cable only'], w: 'Wiring shall not be secured to or supported by the ceiling grid system, including the grid support wires. Use independent support wires.', r: '300.13(B)' },
    { l: 'supports', q: 'Independent support wires for wiring above a suspended ceiling must be:', c: ['Distinguishable from the ceiling wires and secured at both ends', 'The same color as the ceiling wires', 'Secured at the top only', 'Not allowed at all'], w: 'They\'re in addition to the grid wires, distinguishable by color or tagging, secured at both ends, and provide secure support.', r: '300.13(B)' },
    { l: 'supports', q: 'A strut hung on two threaded rods supporting several conduits is called a:', c: ['Trapeze', 'Beam clamp', 'Minerallac', 'Riser'], w: 'A trapeze hanger.' },
    { l: 'tools', q: 'Every cut end of EMT must be:', c: ['Reamed or finished to remove rough edges', 'Threaded', 'Taped', 'Painted'], w: 'Reaming protects wire insulation during the pull.', r: '358.28(A)' },
    { l: 'tools', q: 'When a terminal has a torque value marked, it must be tightened with:', c: ['A calibrated torque tool', 'Your best judgment', 'An impact driver', 'Channellocks'], w: 'Tightening torque values shall be applied using an approved means like a calibrated torque tool.', r: '110.14(D)' },
    { l: 'tools', q: 'Electrical equipment shall be installed in a ___ manner.', c: ['Professional and skillful (neat and workmanlike)', 'Fast and efficient', 'Low-cost', 'Concealed'], w: '110.12: Mechanical execution of work.', r: '110.12' },
  ]
});
})();
