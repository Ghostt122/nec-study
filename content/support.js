(window.MODULES ||= []).push({
  id: 'support', icon: '📏', title: 'Securing & Supporting',
  blurb: 'Every strap-spacing rule you need running pipe and cable, with the section to find it in.',
  lessons: [
    {
      id: 'words', title: '"Secured" vs. "supported" and the 3 big numbers',
      html: `
<p>Two different ideas show up in every .30 section:</p>
<ul>
<li><b>Securely fastened (secured)</b>: strapped or clamped so it can't move. Usually measured from a <b>box, fitting, or termination</b>: "within 3 ft of each box."</li>
<li><b>Supported</b>: held up along the run so it doesn't sag. Measured as an <b>interval</b>: "at least every 10 ft."</li>
</ul>
<p>Most of what you do comes down to three numbers:</p>
<div class="tablewrap"><table>
<tr><th>Wiring method</th><th>Within ___ of box</th><th>Every ___ along the run</th></tr>
<tr><td><b>EMT, Rigid, IMC</b></td><td>3 ft</td><td>10 ft</td></tr>
<tr><td><b>Flex (FMC), Sealtite (LFMC), AC cable, NM cable</b></td><td>12 in.</td><td>4½ ft</td></tr>
<tr><td><b>MC cable</b></td><td>12 in. (small cables)</td><td>6 ft</td></tr>
</table></div>
<div class="job"><b>On the job</b>"Strap within three of the box and every ten" is the EMT rule everyone repeats. Your journeyman might strap closer. That's fine, because the code is a minimum. Never strap farther apart than the code allows.</div>
<div class="test"><b>For the test</b>Watch the units: 3 <b>ft</b> vs. 12 <b>in.</b> Also watch the 2026 MC rule: the 12 in. from a box applies to cables with <b>four or fewer conductors, 10 AWG or smaller</b> ([[330.30(B)]]).</div>`
    },
    {
      id: 'general', title: 'General rules for everything (300.13)',
      html: `
<p>[[300.13]] is the general "securing and supporting" section for all wiring methods. In the 2026 code it's 300.13; older books had this at 300.11.</p>
<ul>
<li><b>Everything gets fastened</b>: raceways, cables, boxes, cabinets, and fittings shall be securely fastened in place ([[300.13(A)]]).</li>
<li><b>Not from the ceiling grid</b>: wiring above a drop ceiling can't be supported by the ceiling grid or the ceiling's support wires. You can add <b>independent support wires</b> if they're in addition to the ceiling wires, distinguishable by color, tagging, or other means, secured at both ends, and give secure support ([[300.13(B)]]). Two exceptions: wiring tested as part of a fire-rated ceiling assembly, and branch-circuit wiring and equipment installed per the ceiling system manufacturer's instructions.</li>
<li><b>Don't hang stuff on pipe</b>: a raceway can't be used to support other raceways, cables, or non-electrical stuff, except: it's identified as a means of support, it carries Class 2/3 control cables for the same equipment, it supports boxes per 314.23 or luminaires per 410.36(E), or it carries a bonding jumper for its own circuit ([[300.13(C)]]).</li>
<li><b>Don't hang stuff on cable</b>: cables can't support other cables, raceways, or anything else ([[300.13(D)]]).</li>
<li><b>Cable ties</b> used for support must be <b>listed and identified for securement and support</b> ([[300.13(E)]]). The cheap ties in your pouch might not be.</li>
</ul>
<h3>Related rules in Article 300</h3>
<ul>
<li><b>Complete runs first</b>: install the raceway complete between boxes <b>before</b> pulling wire ([[300.20(A)]]).</li>
<li><b>No welding</b>: metal raceways can't be supported, terminated, or connected by welding to the raceway ([[300.20(B)]]).</li>
<li><b>Mechanically continuous</b>: raceways and cable armor must be continuous between boxes and secured to boxes and fittings ([[300.14]]).</li>
<li><b>Electrically continuous</b>: metal raceways must be bonded together into a continuous ground-fault path ([[300.12]]). Loose fittings break this.</li>
<li><b>Wire in tall vertical raceways</b> needs at least one support at the top (or as close to the top as practical), plus intermediate supports so no length exceeds [[Table 300.21(A)]] ([[300.21]]). Common methods: insulating wedge clamps in the end of the raceway, or boxes with insulating supports at the required intervals.</li>
</ul>
<div class="tablewrap"><table>
<tr><th>Copper conductor size</th><th>Max vertical distance between supports</th></tr>
<tr><td>18 AWG through 8 AWG</td><td>100 ft</td></tr>
<tr><td>6 AWG through 1/0 AWG</td><td>100 ft</td></tr>
<tr><td>2/0 through 4/0 AWG</td><td>80 ft</td></tr>
<tr><td>Over 4/0 through 350 kcmil</td><td>60 ft</td></tr>
<tr><td>Over 350 through 500 kcmil</td><td>50 ft</td></tr>
<tr><td>Over 500 through 750 kcmil</td><td>40 ft</td></tr>
<tr><td>Over 750 kcmil</td><td>35 ft</td></tr>
</table></div>
<div class="warn"><b>Common inspection fail</b>Pipe or MC zip-tied to the sprinkler pipe, ductwork, or ceiling wires. Get your own support: all-thread, a beam clamp, or an independent wire.</div>`
    },
    {
      id: 'emt', title: 'EMT, Rigid, and IMC',
      html: `
<h3>EMT [[358.30]]</h3>
<ul>
<li>Installed as a complete system per 300.20.</li>
<li>Fastened within <b>3 ft</b> of each outlet box, junction box, device box, cabinet, conduit body, or other termination ([[358.30(A)]]).</li>
<li>Fastened at intervals of <b>10 ft</b> or less.</li>
<li>Exception 1: where structural members don't allow fastening within 3 ft, an <b>unbroken length</b> can be fastened within <b>5 ft</b>.</li>
<li>Exception 2: in finished buildings where securing is impracticable, unbroken lengths (no coupling) can be <b>fished</b>.</li>
<li>Horizontal runs through holes in framing (studs) at no more than 10 ft count as supported, if secured within 3 ft of terminations ([[358.30(B)]]).</li>
</ul>
<h3>Rigid (RMC) [[344.30]] and IMC [[342.30]]</h3>
<ul>
<li>Fastened within <b>3 ft</b> of each box, cabinet, conduit body, or termination. Can be increased to <b>5 ft</b> where structural members don't permit 3 ft.</li>
<li>Where approved, a service <b>mast</b> doesn't need fastening within 3 ft of the service head.</li>
<li>Supported at least every <b>10 ft</b>, or, for straight runs <b>made up with threaded couplings</b>, at the longer spacings in [[Table 344.30(B)]]:</li>
</ul>
<div class="tablewrap"><table>
<tr><th>Trade size</th><th>Max between supports</th></tr>
<tr><td>½ – ¾</td><td>10 ft</td></tr><tr><td>1</td><td>12 ft</td></tr>
<tr><td>1¼ – 1½</td><td>14 ft</td></tr><tr><td>2 – 2½</td><td>16 ft</td></tr>
<tr><td>3 and larger</td><td>20 ft</td></tr></table></div>
<ul>
<li><b>Exposed vertical risers</b> from industrial machinery or fixed equipment: up to <b>20 ft</b> between supports, if threaded couplings are used, it's fastened at the top and bottom, and no other intermediate support is readily available.</li>
<li>Horizontal runs through openings in framing members at no more than <b>10 ft</b> count as supported, if fastened within 3 ft of terminations ([[344.30(B)]], [[342.30(B)]]).</li>
<li>Exception for RMC/IMC/EMT: unbroken lengths (no coupling) can be <b>fished</b> in finished buildings where securing is impracticable.</li>
</ul>
<div class="tip"><b>EMT vs. rigid</b>Both are "3 and 10." Only rigid/IMC gets the longer table spacing and the 20 ft riser rule, because threaded joints are stronger. EMT never gets the table.</div>`
    },
    {
      id: 'pvc', title: 'PVC and ENT',
      html: `
<h3>PVC [[352.30]]</h3>
<ul>
<li>Fastened within <b>3 ft</b> of each box, conduit body, or termination.</li>
<li>Supported per [[Table 352.30(B)]]. Spacing depends on size because plastic sags:</li>
</ul>
<div class="tablewrap"><table>
<tr><th>Trade size</th><th>Max between supports</th></tr>
<tr><td>½ – 1</td><td>3 ft</td></tr><tr><td>1¼ – 2</td><td>5 ft</td></tr>
<tr><td>2½ – 3</td><td>6 ft</td></tr><tr><td>3½ – 5</td><td>7 ft</td></tr><tr><td>6</td><td>8 ft</td></tr></table></div>
<ul>
<li>PVC listed for other securing or support spacing may be installed per its listing ([[352.30]]).</li>
<li>Horizontal runs through holes in framing count as supported if the holes are no farther apart than the table spacing and the pipe is fastened within 3 ft of terminations ([[352.30(B)]]).</li>
<li>PVC must be fastened so it <b>can move</b> with thermal expansion and contraction. Straps hold it in line but let it slide.</li>
<li><b>Expansion fittings</b> are required where the length change in a straight run between fixed points is expected to be <b>¼ in. or more</b>, using [[Table 352.44]] ([[352.44]]). Long outdoor runs in Texas sun grow a lot.</li>
<li>Joints: made by an approved method (PVC cement) ([[352.48]]). Cut ends trimmed inside and out ([[352.28]]).</li>
</ul>
<h3>ENT ("smurf tube") [[362.30]]</h3>
<ul>
<li>Fastened at intervals of <b>3 ft</b> or less, and within <b>3 ft</b> of each box or fitting where it terminates.</li>
<li>Exceptions: up to 6 ft unsecured from a luminaire connection, or within an accessible ceiling from the last support to a luminaire or equipment, and fished in finished buildings.</li>
</ul>
<div class="job"><b>On the job</b>PVC underground: glue every joint, and protect where it comes out of the ground. Outdoors above ground: plan expansion fittings and use straps that let the pipe slide.</div>`
    },
    {
      id: 'flex', title: 'Flex (FMC), Sealtite (LFMC), and LFNC',
      html: `
<h3>FMC [[348.30]] and LFMC [[350.30]] (same rules)</h3>
<ul>
<li>Fastened within <b>12 in.</b> of each box, cabinet, conduit body, or termination.</li>
<li>Supported and secured at intervals of no more than <b>4½ ft</b>.</li>
<li>Cable ties, if used, must be listed and identified for securement and support.</li>
<li>Exceptions:
  <ul>
  <li>Fished in finished buildings where support is impracticable.</li>
  <li>Where <b>flexibility is needed</b> (motors, vibration), the length from the last fastening can be up to: <b>3 ft</b> for trade size ½–1¼, <b>4 ft</b> for 1½–2, <b>5 ft</b> for 2½ and up.</li>
  <li>Up to <b>6 ft</b> from a luminaire terminal connection for tap conductors to luminaires (fixture whips).</li>
  <li>Up to <b>6 ft</b> from the last fastening within an <b>accessible ceiling</b> to a luminaire or equipment.</li>
  </ul></li>
<li>For these exceptions, listed flex fittings count as a means of securement and support.</li>
</ul>
<h3>LFNC (liquidtight nonmetallic) [[356.30]]</h3>
<ul><li>Over 6 ft long: secured at least every <b>3 ft</b> and within <b>12 in.</b> on each side of every box or fitting. Up to 3 ft unsecured at terminals where flexibility is needed, and up to 6 ft to luminaires.</li></ul>
<div class="job"><b>On the job</b>A <b>fixture whip</b> (pre-made flex or MC to a lay-in light) can be up to 6 ft and doesn't need to be strapped to the grid, which you can't do anyway. Over 6 ft, it needs support.</div>`
    },
    {
      id: 'cable', title: 'MC, AC, NM, and tray cable',
      html: `
<h3>MC cable [[330.30]]</h3>
<ul>
<li>Supported and secured by listed cable ties identified for securement, listed staples/straps/hangers/cable cleats, or other approved means. MC connectors count as support.</li>
<li><b>Secured at least every 6 ft</b>, and <b>supported at least every 6 ft</b>.</li>
<li>Cables with <b>four or fewer conductors, 10 AWG or smaller</b> must be secured within <b>12 in.</b> of every box, cabinet, fitting, or termination.</li>
<li>Vertical runs of listed cables with conductors 250 kcmil and larger: secured at intervals up to 10 ft.</li>
<li>Horizontal runs through framing members at 6 ft or less count as supported and secured.</li>
<li>Unsupported/unsecured is allowed when: fished in finished buildings; <b>up to 6 ft</b> from the last support to a luminaire or equipment within an accessible ceiling; or interlocked-armor MC <b>up to 3 ft</b> where flexibility is needed (vibration, movement).</li>
</ul>
<h3>AC cable (BX) [[320.30]]</h3>
<ul>
<li>Secured within <b>12 in.</b> of every box or fitting and at intervals of <b>4½ ft</b> or less, and supported every 4½ ft.</li>
<li>Unsupported allowed: fished; <b>2 ft</b> or less at terminals where flexibility is needed; up to <b>6 ft</b> to a luminaire or equipment in an accessible ceiling.</li>
</ul>
<h3>NM cable (Romex) [[334.30]]</h3>
<ul>
<li>Secured every <b>4½ ft</b> and within <b>12 in.</b> of every cable entry into a box.</li>
<li>The cable length between the box entry and the closest support can't exceed <b>18 in.</b></li>
<li>Flat cables are not stapled on edge.</li>
<li>Where NM is protected from damage by a raceway, it doesn't have to be secured inside the raceway.</li>
<li>Unsupported allowed: fished; or up to <b>4½ ft</b> from the last support to a luminaire or equipment in an accessible ceiling, but only in one-, two-, or multifamily dwellings.</li>
</ul>
<h3>Tray cable (TC) [[336.30]]</h3>
<ul><li>Supported and secured by listed cable ties, listed straps/hangers/cleats, or other approved means that won't damage the cable.</li></ul>
<h3>MI cable [[332.30]]</h3>
<ul><li>Supported and secured at intervals not exceeding <b>6 ft</b>.</li></ul>
<h3>Wireways, gutters, and cable tray</h3>
<ul>
<li><b>Metal wireway</b>: horizontal at each end and every 5 ft (or each end/joint for sections longer than 5 ft, never more than 10 ft apart). Vertical every 15 ft, with no more than one joint between supports ([[376.30]]).</li>
<li><b>Sheet metal auxiliary gutters</b>: supported and secured every 5 ft along the whole length ([[366.30]]).</li>
<li><b>Cable tray</b>: supported at intervals per the <b>installation instructions</b>. Cables in other than horizontal runs are fastened to the tray's cross members ([[392.30]]).</li>
<li>In industrial facilities with qualified maintenance, a cable tray system designed for the load may support raceways, cables, boxes, and conduit bodies. A raceway ending at the tray is fastened with a listed tray clamp or adapter ([[392.18]]).</li>
</ul>
<div class="test"><b>Easy mix-up</b>MC = 6 ft. AC and NM = 4½ ft. All three: 12 in. from boxes (for MC, only small cables).</div>`
    },
    {
      id: 'boxes', title: 'Supporting boxes (314.23)',
      html: `
<ul>
<li><b>Surface mounting</b>: rigidly and securely fastened. If the surface isn't solid enough, add support ([[314.23(A)]]).</li>
<li><b>Structural mounting</b>: to a stud, joist, or from grade, either directly or with a metal, polymeric, or wood brace ([[314.23(B)]]). Nails and screws through the inside of a box must be within ¼ in. of the back or ends. Metal braces must be at least 0.020 in. thick; wood braces at least 1 × 2 in.</li>
<li><b>Finished surfaces</b>: old-work boxes use clamps, anchors, or fittings identified for the job ([[314.23(C)]]).</li>
<li><b>Suspended ceilings</b>: boxes 100 in³ or less can be fastened to the ceiling <b>framing members</b> (with clips identified for it) or to <b>support wires</b> per 300.13(B) that are taut and fastened at both ends ([[314.23(D)]]).</li>
<li><b>Raceway-supported boxes, no devices</b> (junction boxes only): 100 in³ or less, threaded entries or hubs, and <b>two or more conduits</b> threaded wrenchtight. Each conduit secured within <b>3 ft</b>, or within <b>18 in.</b> if all entries are on the same side ([[314.23(E)]]).</li>
<li><b>Raceway-supported boxes with devices or luminaires</b>: same, but each conduit secured within <b>18 in.</b> ([[314.23(F)]]).</li>
<li>A <b>single</b> raceway (IMC, RMC, PVC, RTRC, or EMT) can support only the small items in the 314.23(E) exception: a conduit body no bigger than the largest conduit, an FS or FD single-gang box, or an explosionproof box.</li>
<li><b>Luminaire on a pipe</b>: an unbroken length of RMC or IMC can support a luminaire box only if it's fastened within 3 ft of the box, the luminaire is at least 8 ft above grade or standing area (where unqualified people can reach), it's threaded wrenchtight, and the weight on any single conduit is no more than 20 lb, plus the other conditions in [[314.23(F)]] Exception No. 2.</li>
<li><b>Pendant boxes on conduit stems</b>: RMC or IMC stems. Stems longer than <b>18 in.</b> connect to the wiring system with listed swivel hangers ([[314.23(H)]]).</li>
<li>Boxes embedded in concrete or masonry must be identified as suitably protected from corrosion and securely embedded ([[314.23(G)]]).</li>
</ul>
<div class="job"><b>On the job</b>A 4" square box hung in the middle of a pipe run with nothing holding the box is not OK. Support the box itself (a box hanger, strut, or rod) unless it meets 314.23(E) or (F).</div>`
    },
    {
      id: 'cheat', title: 'Cheat sheet: all the numbers',
      html: `
<div class="tablewrap"><table>
<tr><th>Method</th><th>From box</th><th>Interval</th><th>Section</th></tr>
<tr><td>EMT</td><td>3 ft (5 ft exc.)</td><td>10 ft</td><td>[[358.30]]</td></tr>
<tr><td>RMC</td><td>3 ft (5 ft)</td><td>10 ft / Table</td><td>[[344.30]]</td></tr>
<tr><td>IMC</td><td>3 ft (5 ft)</td><td>10 ft / Table</td><td>[[342.30]]</td></tr>
<tr><td>PVC</td><td>3 ft</td><td>3–8 ft by size</td><td>[[352.30]]</td></tr>
<tr><td>ENT</td><td>3 ft</td><td>3 ft</td><td>[[362.30]]</td></tr>
<tr><td>FMC</td><td>12 in.</td><td>4½ ft</td><td>[[348.30]]</td></tr>
<tr><td>LFMC</td><td>12 in.</td><td>4½ ft</td><td>[[350.30]]</td></tr>
<tr><td>LFNC</td><td>12 in.</td><td>3 ft</td><td>[[356.30]]</td></tr>
<tr><td>AC</td><td>12 in.</td><td>4½ ft</td><td>[[320.30]]</td></tr>
<tr><td>MC</td><td>12 in. (≤4 cond., ≤10 AWG)</td><td>6 ft</td><td>[[330.30]]</td></tr>
<tr><td>NM</td><td>12 in.</td><td>4½ ft</td><td>[[334.30]]</td></tr>
<tr><td>MI</td><td>-</td><td>6 ft</td><td>[[332.30]]</td></tr>
<tr><td>Metal wireway</td><td>each end</td><td>5 ft (10 ft max); vertical 15 ft</td><td>[[376.30]]</td></tr>
<tr><td>Cable tray</td><td>-</td><td>per installation instructions</td><td>[[392.30]]</td></tr>
</table></div>
<div class="tablewrap"><table>
<tr><th>Unsupported lengths allowed</th><th></th></tr>
<tr><td>Flex/LFMC for flexibility</td><td>3 ft (½–1¼), 4 ft (1½–2), 5 ft (2½+)</td></tr>
<tr><td>Flex/LFMC/LFNC/ENT/MC/AC to a luminaire or equipment (accessible ceiling)</td><td>6 ft</td></tr>
<tr><td>AC at terminals for flexibility</td><td>2 ft</td></tr>
<tr><td>Interlocked MC for flexibility/vibration</td><td>3 ft</td></tr>
</table></div>`
    }
  ],
  questions: [
    { l: 'emt', q: 'EMT must be securely fastened within ___ of each outlet box, junction box, or conduit body.', c: ['3 ft', '12 in.', '18 in.', '5 ft'], w: 'Within 900 mm (3 ft) of each box or termination.', r: '358.30(A)' },
    { l: 'emt', q: 'EMT must be fastened at intervals not exceeding:', c: ['10 ft', '8 ft', '6 ft', '4½ ft'], w: '3 m (10 ft).', r: '358.30(A)' },
    { l: 'emt', q: 'Where structural members don\'t readily permit fastening EMT within 3 ft, an unbroken length may be fastened within:', c: ['5 ft', '4 ft', '6 ft', '10 ft'], w: 'Exception No. 1 allows 1.5 m (5 ft) for unbroken lengths.', r: '358.30(A)' },
    { l: 'emt', q: 'Horizontal EMT run through holes in metal studs at 10 ft or less is considered supported if:', c: ['It is secured within 3 ft of terminations', 'It has a strap at every stud', 'It is ½ in. trade size only', 'It is never allowed'], w: 'Supported by openings through framing at 10 ft or less, and secured within 3 ft of termination points.', r: '358.30(B)' },
    { l: 'emt', q: 'Rigid metal conduit must be supported at intervals not exceeding ___ unless Table 344.30(B) applies.', c: ['10 ft', '8 ft', '12 ft', '20 ft'], w: 'General rule 3 m (10 ft); longer spacings for straight runs with threaded couplings.', r: '344.30(B)' },
    { l: 'emt', q: 'Per Table 344.30(B), 1-inch RMC with threaded couplings in a straight run can be supported every:', c: ['12 ft', '10 ft', '14 ft', '16 ft'], w: '½–¾: 10 ft, 1: 12 ft, 1¼–1½: 14 ft, 2–2½: 16 ft, 3+: 20 ft.', r: 'Table 344.30(B)' },
    { l: 'emt', q: 'Per Table 344.30(B), 3-inch RMC with threaded couplings in a straight run can be supported every:', c: ['20 ft', '16 ft', '10 ft', '14 ft'], w: '3 and larger: 20 ft.', r: 'Table 344.30(B)' },
    { l: 'emt', q: 'Exposed vertical RMC risers from industrial machinery can be supported every 20 ft if:', c: ['Threaded couplings are used, it is fastened top and bottom, and no other intermediate support is readily available', 'It is painted', 'It is 2 in. or larger', 'The inspector is notified'], w: 'All three conditions must be met.', r: '344.30(B)' },
    { l: 'emt', q: 'Can EMT use the longer support spacings of Table 344.30(B)?', c: ['No, EMT is 10 ft max', 'Yes, same as rigid', 'Only for 2 in. and larger', 'Only outdoors'], w: 'Table 344.30(B) is for RMC and IMC with threaded couplings. EMT is 10 ft.', r: '358.30' },
    { l: 'emt', q: 'IMC must be fastened within ___ of each box or termination.', c: ['3 ft', '12 in.', '18 in.', '6 ft'], w: 'Same as RMC: 3 ft, or 5 ft where structure doesn\'t permit.', r: '342.30(A)' },
    { l: 'pvc', q: 'Per Table 352.30(B), ¾-inch PVC must be supported at least every:', c: ['3 ft', '5 ft', '6 ft', '10 ft'], w: '½–1 inch: 3 ft.', r: 'Table 352.30(B)' },
    { l: 'pvc', q: 'Per Table 352.30(B), 2-inch PVC must be supported at least every:', c: ['5 ft', '3 ft', '6 ft', '7 ft'], w: '1¼–2 inch: 5 ft.', r: 'Table 352.30(B)' },
    { l: 'pvc', q: 'Per Table 352.30(B), 4-inch PVC must be supported at least every:', c: ['7 ft', '6 ft', '8 ft', '10 ft'], w: '3½–5 inch: 7 ft. 6 inch: 8 ft.', r: 'Table 352.30(B)' },
    { l: 'pvc', q: 'PVC must be fastened within ___ of each box or termination.', c: ['3 ft', '12 in.', '5 ft', '18 in.'], w: '900 mm (3 ft), unless listed for other spacing.', r: '352.30(A)' },
    { l: 'pvc', q: 'PVC expansion fittings are required where the expected length change is at least:', c: ['¼ in.', '½ in.', '1 in.', '⅛ in.'], w: '6 mm (¼ in.) or greater in a straight run between securely mounted items.', r: '352.44' },
    { l: 'pvc', q: 'PVC must be fastened so that:', c: ['Movement from thermal expansion and contraction is permitted', 'It cannot move at all', 'Straps are glued to it', 'It is supported every 10 ft regardless of size'], w: 'The straps must allow expansion and contraction.', r: '352.30' },
    { l: 'pvc', q: 'ENT must be securely fastened at intervals not exceeding:', c: ['3 ft', '4½ ft', '6 ft', '10 ft'], w: 'ENT: every 3 ft and within 3 ft of each box.', r: '362.30(A)' },
    { l: 'flex', q: 'FMC must be secured within ___ of each box and at intervals not exceeding ___.', c: ['12 in.; 4½ ft', '3 ft; 10 ft', '18 in.; 6 ft', '12 in.; 6 ft'], w: '300 mm (12 in.) and 1.4 m (4½ ft).', r: '348.30(A)' },
    { l: 'flex', q: 'LFMC (Sealtite) where flexibility is necessary, trade size ¾, may be unsupported for up to:', c: ['3 ft', '4 ft', '5 ft', '6 ft'], w: '3 ft for ½–1¼, 4 ft for 1½–2, 5 ft for 2½ and larger.', r: '350.30(A)' },
    { l: 'flex', q: 'FMC where flexibility is necessary, trade size 2, may be unsupported for up to:', c: ['4 ft', '3 ft', '5 ft', '6 ft'], w: '1½–2 inch: 4 ft.', r: '348.30(A)' },
    { l: 'flex', q: 'A flex whip from the last fastening to a luminaire within an accessible ceiling may be up to ___ without support.', c: ['6 ft', '3 ft', '4½ ft', '10 ft'], w: 'Exception No. 4: up to 6 ft within an accessible ceiling.', r: '348.30(A)' },
    { l: 'flex', q: 'LFNC over 6 ft long must be secured at intervals not exceeding:', c: ['3 ft', '4½ ft', '6 ft', '10 ft'], w: 'Every 3 ft and within 12 in. on each side of every box.', r: '356.30' },
    { l: 'cable', q: 'MC cable must be secured at intervals not exceeding:', c: ['6 ft', '4½ ft', '10 ft', '3 ft'], w: '1.8 m (6 ft).', r: '330.30(B)' },
    { l: 'cable', q: 'In the 2026 NEC, MC cable must be secured within 12 in. of every box when it has:', c: ['Four or fewer conductors, 10 AWG or smaller', 'Any number of conductors', 'Conductors 8 AWG and larger', 'Steel armor only'], w: '330.30(B): cables with four or fewer conductors sized no larger than 10 AWG.', r: '330.30(B)' },
    { l: 'cable', q: 'Interlocked-armor MC used where flexibility is needed may be unsupported for up to:', c: ['3 ft', '2 ft', '6 ft', '4½ ft'], w: '900 mm (3 ft) from the last point where it is securely fastened.', r: '330.30(D)' },
    { l: 'cable', q: 'AC cable must be secured within ___ of every box and every ___.', c: ['12 in.; 4½ ft', '12 in.; 6 ft', '18 in.; 4½ ft', '3 ft; 10 ft'], w: '300 mm (12 in.) and 1.4 m (4½ ft).', r: '320.30(B)' },
    { l: 'cable', q: 'AC cable at terminals where flexibility is necessary may be unsupported for up to:', c: ['2 ft', '3 ft', '6 ft', '12 in.'], w: '600 mm (2 ft).', r: '320.30(D)' },
    { l: 'cable', q: 'NM cable: the cable length between the box entry and the nearest support may not exceed:', c: ['18 in.', '12 in.', '8 in.', '24 in.'], w: 'Secured within 12 in. of the entry, and the cable between entry and closest support can\'t exceed 18 in.', r: '334.30' },
    { l: 'general', q: 'Raceways must be installed complete between boxes:', c: ['Before conductors are installed', 'After conductors are pulled', 'Only for underground runs', 'Only if over 100 ft'], w: 'Complete runs before conductors, with some exceptions like busways and raceways with removable covers.', r: '300.20(A)' },
    { l: 'general', q: 'Metal raceways may be supported by welding to the raceway.', c: ['False', 'True', 'True for rigid only', 'True if approved'], w: 'Metal raceways shall not be supported, terminated, or connected by welding.', r: '300.20(B)' },
    { l: 'general', q: 'Cable ties used to secure and support cable or flex must be:', c: ['Listed and identified for securement and support', 'Black UV-rated', 'Any nylon tie', 'Metal'], w: 'Listed and identified for securement and support.', r: '300.13(E)' },
    { l: 'general', q: 'A raceway may support Class 2 control cables when:', c: ['It contains power conductors for the controlled equipment and the Class 2 cables are only for that equipment\'s controls', 'Never', 'Always', 'Only if it is PVC'], w: 'One of the allowed conditions in 300.13(C).', r: '300.13(C)' },
    { l: 'general', q: 'Cables may be used to support other cables.', c: ['False', 'True', 'True for MC only', 'True in accessible ceilings'], w: 'Cable wiring methods shall not be used as a means of support for other cables, raceways, or equipment.', r: '300.13(D)' },
    { l: 'general', q: 'Metal raceways and cable armor must be joined to provide:', c: ['An effective ground-fault current path', 'A neutral path', 'Lightning protection', 'Better appearance'], w: 'Electrical continuity of metal raceways.', r: '300.12' },
    { l: 'boxes', q: 'A junction box with no devices supported only by entering conduits: each conduit must be secured within ___ (entries on different sides).', c: ['3 ft', '18 in.', '12 in.', '5 ft'], w: 'Two or more conduits threaded wrenchtight, each secured within 3 ft, or 18 in. if all entries are on the same side.', r: '314.23(E)' },
    { l: 'boxes', q: 'A box containing a device, supported only by entering conduits: each conduit must be secured within:', c: ['18 in.', '3 ft', '12 in.', '24 in.'], w: '450 mm (18 in.).', r: '314.23(F)' },
    { l: 'boxes', q: 'Raceway-supported enclosures (314.23(E) and (F)) may not exceed:', c: ['100 in³', '50 in³', '150 in³', '200 in³'], w: '1650 cm³ (100 in³).', r: '314.23(E)' },
    { l: 'boxes', q: 'Nails or screws passing through the interior of a box must be within ___ of the back or ends.', c: ['¼ in.', '½ in.', '1 in.', '⅛ in.'], w: '6 mm (¼ in.).', r: '314.23(B)' },
    { l: 'boxes', q: 'Wood braces used to support boxes must have a cross section of at least:', c: ['1 × 2 in. nominal', '2 × 4 in. nominal', '1 × 1 in.', '2 × 2 in.'], w: 'Nominal 25 mm × 50 mm (1 × 2 in.).', r: '314.23(B)' },
    { t: 'find', l: 'cheat', q: 'Where are the securing and supporting rules for EMT?', c: ['358.30', '358.24', '344.30', '300.13'], w: 'EMT = 358, and .30 = securing & supporting.', r: '358.30' },
    { t: 'find', l: 'cheat', q: 'Where is the PVC support spacing table?', c: ['Table 352.30(B)', 'Table 344.30(B)', 'Table 300.19(B)', 'Table 352.44'], w: 'PVC = 352 → 352.30 → Table 352.30(B). Table 352.44 is expansion.', r: 'Table 352.30(B)' },
    { t: 'find', l: 'cheat', q: 'Where are the support rules for MC cable?', c: ['330.30', '320.30', '334.30', '336.30'], w: '320 AC, 330 MC, 334 NM, 336 TC.', r: '330.30' },
    { t: 'find', l: 'cheat', q: 'Where is the rule that you can\'t support wiring from the ceiling grid?', c: ['300.13(B)', '300.11', '314.23(D)', '410.36'], w: 'In the 2026 NEC it\'s 300.13(B). (Older editions: 300.11.)', r: '300.13(B)' },
    { t: 'find', l: 'cheat', q: 'Where are the rules for supporting boxes?', c: ['314.23', '314.16', '314.28', '312.5'], w: '314.23 Supports.', r: '314.23' },
    { t: 'find', l: 'cheat', q: 'Where is the support spacing for conductors in vertical raceways?', c: ['Table 300.21(A)', 'Table 310.16', 'Table 300.7(A)', 'Table 344.30(B)'], w: '300.21 Supporting conductors in vertical raceways.', r: 'Table 300.21(A)' },
    { t: 'find', l: 'cheat', q: 'Where are the support rules for liquidtight flexible metal conduit?', c: ['350.30', '348.30', '356.30', '360.30'], w: '348 FMC, 350 LFMC, 356 LFNC.', r: '350.30' },
    { v: 1, l: 'general', q: 'Per Table 300.21(A), 2/0 through 4/0 AWG copper conductors in a vertical raceway must be supported at intervals not greater than:', c: ['80 ft', '100 ft', '60 ft', '50 ft'], w: 'Copper: 18–8 and 6–1/0: 100 ft, 2/0–4/0: 80 ft, over 4/0–350: 60 ft, over 350–500: 50 ft, over 500–750: 40 ft, over 750: 35 ft.', r: 'Table 300.21(A)' },
    { l: 'general', q: 'Conductors in a vertical raceway must have at least one support:', c: ['At the top of the raceway or as close to the top as practical', 'At the bottom only', 'At every coupling', 'Only at pull boxes'], w: '300.21(A).', r: '300.21' },
    { l: 'general', q: 'Branch-circuit wiring may be supported by a suspended ceiling system when:', c: ['Installed in accordance with the ceiling system manufacturer\'s instructions', 'Never', 'The wiring is MC cable', 'The circuit is 20 A or less'], w: '300.13(B) Exception No. 2.', r: '300.13(B)' },
    { l: 'emt', q: 'Horizontal RMC through openings in framing members counts as supported if the openings are no more than ___ apart and the conduit is fastened within 3 ft of terminations.', c: ['10 ft', '6 ft', '4½ ft', '3 ft'], w: '344.30(B)(4): 3 m (10 ft).', r: '344.30(B)' },
    { v: 1, l: 'pvc', q: 'Per Table 352.30(B), 3-inch PVC must be supported at least every:', c: ['6 ft', '5 ft', '7 ft', '8 ft'], w: '2½–3 inch: 1.8 m (6 ft).', r: 'Table 352.30(B)' },
    { v: 1, l: 'pvc', q: 'Per Table 352.30(B), 6-inch PVC must be supported at least every:', c: ['8 ft', '7 ft', '6 ft', '10 ft'], w: '6 inch: 2.5 m (8 ft).', r: 'Table 352.30(B)' },
    { l: 'pvc', q: 'Horizontal PVC through holes in framing counts as supported when:', c: ['The holes are no farther apart than Table 352.30(B) allows and the pipe is fastened within 3 ft of terminations', 'There is a strap at every stud', 'It is Schedule 80', 'Never'], w: '352.30(B).', r: '352.30(B)' },
    { l: 'cable', q: 'MI cable must be supported and secured at intervals not exceeding:', c: ['6 ft', '4½ ft', '10 ft', '3 ft'], w: '332.30: 1.8 m (6 ft).', r: '332.30' },
    { l: 'cable', q: 'In vertical runs, listed MC cable with ungrounded conductors 250 kcmil and larger may be secured at intervals up to:', c: ['10 ft', '6 ft', '15 ft', '20 ft'], w: '330.30(B): 3 m (10 ft).', r: '330.30(B)' },
    { l: 'cable', q: 'NM cable run inside a raceway for protection must also be secured inside the raceway.', c: ['False', 'True', 'True if over 6 ft', 'True in metal raceway'], w: '334.30: sections protected by raceway need not be secured within the raceway.', r: '334.30' },
    { l: 'cable', q: 'Vertical runs of metal wireway must be supported at intervals not exceeding:', c: ['15 ft', '10 ft', '5 ft', '20 ft'], w: '376.30(B): 4.5 m (15 ft), with no more than one joint between supports.', r: '376.30' },
    { l: 'cable', q: 'Cable tray must be supported at intervals:', c: ['In accordance with the installation instructions', 'Of 10 ft', 'Of 5 ft', 'Of 20 ft'], w: '392.30(A).', r: '392.30' },
    { l: 'boxes', q: 'A conduit stem longer than 18 in. supporting a pendant luminaire box must connect to the wiring system with:', c: ['Listed swivel hangers suitable for the location', 'A plain coupling', 'Chain', 'A set-screw connector'], w: '314.23(H)(2).', r: '314.23(H)' },
    { l: 'boxes', q: 'An enclosure fastened to the framing or support wires of a suspended ceiling may not be larger than:', c: ['100 in³', '50 in³', '150 in³', '200 in³'], w: '314.23(D): 1650 cm³ (100 in³).', r: '314.23(D)' },
    { l: 'boxes', q: 'With no devices or luminaires in it, which enclosure may be supported by a single EMT alone?', c: ['An FS or FD single-gang box', 'A 4 in. square junction box', 'A 100 in³ pull box', 'A luminaire box'], w: '314.23(E) Exception: a conduit body no larger than the conduit, an FS/FD single-gang box, or an explosionproof box.', r: '314.23(E)' },
    { t: 'find', l: 'cheat', q: 'Where are the support rules for AC cable?', c: ['320.30', '330.30', '334.30', '336.30'], w: '320 AC, 330 MC, 334 NM, 336 TC.', r: '320.30' },
    { t: 'find', l: 'cheat', q: 'Where are the support rules for rigid metal conduit?', c: ['344.30', '342.30', '358.30', '352.30'], w: '342 IMC, 344 RMC, 352 PVC, 358 EMT.', r: '344.30' },
    { t: 'find', l: 'cheat', q: 'Where are the support rules for metal wireways?', c: ['376.30', '392.30', '366.30', '300.13'], w: '376 metal wireways. 366 is auxiliary gutters, 392 is cable tray.', r: '376.30' }
  ]
});
