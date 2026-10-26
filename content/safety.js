(window.MODULES ||= []).push({
  id: 'safety', icon: '⛑️', title: 'Safety (OSHA & NFPA 70E)',
  blurb: 'The rules that keep you alive: lockout, test before touch, arc flash, ladders, lifts, trenches.',
  lessons: [
    {
      id: 'shock', title: 'What electricity does to you',
      html: `
<div class="tip"><b>Where these rules come from</b>Most of this module is <b>not</b> NEC. The NEC (NFPA 70) covers the installation. Worker safety comes from <b>NFPA 70E</b> (electrical safe work practices) and <b>OSHA</b> (29 CFR 1926 for construction, 1910 for general industry). NEC sections are shown as buttons; everything else is OSHA/70E or common practice, and your company's safety program can be stricter.</div>
<p>It's the <b>current</b> through your body that hurts you, and it doesn't take much. Approximate effects of 60 Hz current through the body (general safety-training figures, not NEC):</p>
<div class="tablewrap"><table>
<tr><th>Current</th><th>Effect</th></tr>
<tr><td>~1 mA</td><td>You can just feel it</td></tr>
<tr><td>~5 mA</td><td>Painful shock. A Class A GFCI trips here: it must trip at 6 mA or more and must not trip below 4 mA (NEC Article 100, GFCI definition).</td></tr>
<tr><td>~10–20 mA</td><td>"Let-go" threshold: muscles clamp and you may not be able to let go</td></tr>
<tr><td>~50–100 mA+</td><td>Heart can go into fibrillation. This can kill.</td></tr>
</table></div>
<p>A 20 A breaker is 20,000 mA. <b>Breakers protect wire and equipment, not people.</b> GFCIs protect people.</p>
<p>Three hazards:</p>
<ul>
<li><b>Shock / electrocution</b>: current through you.</li>
<li><b>Arc flash</b>: an explosion of heat and light when a fault goes through the air. It can be hotter than the sun's surface and causes severe burns several feet away.</li>
<li><b>Arc blast</b>: the pressure wave from that explosion. It throws people and molten metal.</li>
</ul>
<div class="warn"><b>Rule #1</b>Treat everything as energized until <b>you</b> have proven it dead with a tester.</div>`
    },
    {
      id: 'loto', title: 'Lockout/tagout and test before touch',
      html: `
<p>NFPA 70E (the electrical safety-in-the-workplace standard OSHA leans on) says the safest way to work is in an <b>Electrically Safe Work Condition</b>: de-energized, locked out, and <b>tested</b>.</p>
<h3>Steps to make it safe</h3>
<ol>
<li>Find <b>all</b> sources of power (check drawings, labels, backfeeds, generators, solar, UPS, capacitors).</li>
<li>Turn it off with the normal controls. Open the disconnect.</li>
<li>Visually verify the blades are open or the breaker is off, where you can.</li>
<li><b>Apply your own lock and tag.</b> Your lock, your key. Nobody removes your lock but you.</li>
<li><b>Test for absence of voltage</b> with a properly rated meter, using <b>live-dead-live</b>: test the meter on a known live source, test the circuit (phase-to-phase and phase-to-ground), then test the meter on the live source again.</li>
<li>Ground conductors if there could be induced or stored voltage.</li>
</ol>
<div class="job"><b>On the job</b>"I flipped the breaker" is not lockout. Breakers get mislabeled, circuits get backfed, and someone can flip it back on. Lock, tag, and test it yourself, every time.</div>
<p>The NEC helps by requiring disconnects that are <b>lockable open</b> where another rule calls for it, with the locking provision staying in place with or without the lock ([[110.25]]), and <b>arc-flash labels</b> in other than dwelling units on service equipment and feeder-supplied equipment (switchboards, switchgear, panelboards, industrial control panels, meter socket enclosures, MCCs) likely to be worked on while energized ([[110.16]]). The 110.16 label must show: the nominal system voltage, the arc flash boundary, the available incident energy or minimum PPE level, and the date the assessment was done.</p>
<div class="test"><b>Key idea</b>Energized work is only justified when de-energizing creates a greater hazard or isn't feasible. It needs an energized electrical work permit (with some exceptions such as testing and troubleshooting), plus qualified people and proper PPE.</div>`
    },
    {
      id: 'arcflash', title: 'Arc flash, boundaries, and PPE',
      html: `
<ul>
<li><b>Arc flash boundary</b> (NFPA 70E): the distance where an arc flash could cause a second-degree burn (1.2 cal/cm²). Inside it, you need arc-rated PPE.</li>
<li><b>Limited approach boundary</b>: shock boundary. Unqualified people can't cross it unless escorted by a qualified person.</li>
<li><b>Restricted approach boundary</b>: closer shock boundary. Only qualified people with proper PPE and a plan.</li>
</ul>
<p>Arc-rated clothing is rated in <b>cal/cm²</b>. PPE categories run from 1 to 4 (higher = more protection). The equipment label tells you the boundary and the required PPE.</p>
<h3>Everyday PPE</h3>
<ul>
<li>Safety glasses, always. Pipe cutting, drilling overhead, and wire under tension all throw debris.</li>
<li>Hard hat: Class E is rated for electrical.</li>
<li>Gloves for handling pipe and strut (cut edges).</li>
<li>Hearing protection around hammer drills, band saws, and powder-actuated tools.</li>
<li>No metal jewelry (rings, chains) when working near anything energized.</li>
</ul>
<div class="warn"><b>As an apprentice</b>You should not be inside a panel that's live. If you're asked to, say you're not qualified for energized work and get your journeyman or foreman.</div>`
    },
    {
      id: 'heights', title: 'Ladders, lifts, and falls',
      html: `
<h3>Ladders</h3>
<ul>
<li>Use <b>fiberglass</b> (non-conductive) ladders for electrical work. Never aluminum.</li>
<li>Extension ladders: set at about a <b>4-to-1 angle</b> (1 ft out for every 4 ft up), and extend <b>3 ft above</b> the landing if you're climbing onto something.</li>
<li>Don't stand on the top cap or the top step of a stepladder. Read the labels.</li>
<li>Keep 3 points of contact climbing, and carry tools on your belt or with a rope, not in your hands.</li>
<li>Stepladders must be fully opened and locked. Don't lean them against a wall and climb.</li>
</ul>
<h3>Lifts</h3>
<ul>
<li><b>Boom lifts</b> (aerial lifts): wear a full-body harness with a lanyard tied off to the basket's anchor point.</li>
<li><b>Scissor lifts</b>: the guardrails are your fall protection. Keep the gate chain or bar closed, and never stand on the rails.</li>
<li>Get trained and familiarized on each lift before you operate it. Check overhead for power lines.</li>
</ul>
<h3>Fall protection</h3>
<p>On construction sites, OSHA's general trigger height for fall protection is <b>6 ft</b> (guardrails, nets, or personal fall arrest). Ladder, lift, and fall numbers in this lesson are OSHA construction rules, not NEC.</p>`
    },
    {
      id: 'site', title: 'Jobsite: temp power, trenches, tools',
      html: `
<h3>Temporary power</h3>
<ul>
<li>Temporary wiring on construction sites is covered by [[Art 590]].</li>
<li>Receptacles used by workers for temporary power need <b>GFCI protection</b> for personnel, whether the power comes from the utility or a generator ([[590.7]]). Only in industrial establishments with qualified-only personnel may an <b>assured equipment grounding conductor program</b> replace GFCI, and only for equipment where losing power is a greater hazard or that isn't compatible with GFCI ([[590.7]] Exception). Test GFCIs, and don't use a cord that trips one; it's telling you something.</li>
<li>Inspect cords: no cut jackets, no missing ground pins, no tape repairs. Keep them out of water and doorways.</li>
</ul>
<h3>Trenches</h3>
<ul>
<li>(OSHA excavation rules) Trenches <b>5 ft or deeper</b> need a protective system (sloping, shoring, or a trench box) unless they're in stable rock.</li>
<li>Trenches 4 ft or deeper need a way out (like a ladder) within 25 ft of travel.</li>
<li>Keep the spoil pile at least 2 ft back from the edge.</li>
<li>Call <b>811</b> before digging so underground utilities get marked.</li>
</ul>
<h3>Tools</h3>
<ul>
<li><b>Powder-actuated tools</b> (Hilti/Ramset shots): only after training. Never point one at anyone.</li>
<li><b>Drilling or cutting concrete</b> makes silica dust. Use a shroud with a vacuum or water, as your company's silica plan requires.</li>
<li>Band saws and Sawzalls: keep guards on, clamp the work, and keep your hands clear of the blade path.</li>
<li>Freshly cut and reamed pipe edges are razor sharp. Gloves.</li>
</ul>`
    }
  ],
  questions: [
    { v: 1, l: 'shock', q: 'GFCIs that protect people trip at roughly:', c: ['4–6 mA', '20 A', '30 mA', '100 mA'], w: 'Article 100: a Class A GFCI trips at 6 mA or more and doesn\'t trip below 4 mA, well below the current that can stop a heart.', r: 'Art 100' },
    { l: 'shock', q: 'What actually injures a person in an electric shock?', c: ['Current through the body', 'Voltage alone', 'The breaker size', 'Wire color'], w: 'Voltage pushes the current, but current through the body does the damage.' },
    { l: 'shock', q: 'Circuit breakers are mainly designed to protect:', c: ['Wiring and equipment', 'People from shock', 'Against lightning', 'Against arc flash only'], w: 'A 20 A breaker allows far more current than it takes to kill. GFCIs protect people.' },
    { l: 'shock', q: 'The pressure wave from an arc flash is called:', c: ['Arc blast', 'Arc fault', 'Ground fault', 'Step potential'], w: 'Arc blast can throw people and molten metal.' },
    { l: 'loto', q: '"Live-dead-live" means:', c: ['Test your meter on a known live source, test the circuit, then test the meter again', 'Turn it on, off, on to check the breaker', 'Check two phases then ground', 'Have two people watch'], w: 'It proves your meter worked before and after you read zero.' },
    { l: 'loto', q: 'Who may remove your lockout lock?', c: ['Only you', 'Your foreman', 'Anyone with a key', 'The building owner'], w: 'Your lock, your key.' },
    { v: 1, l: 'loto', q: 'Which NEC section requires arc-flash warning labels on equipment like panelboards (other than in dwellings)?', c: ['110.16', '110.26', '110.14', '240.4'], w: 'Arc-flash hazard marking.', r: '110.16' },
    { l: 'loto', q: 'Turning off a breaker is the same as lockout/tagout.', c: ['False', 'True', 'True if labeled', 'True for 120 V only'], w: 'LOTO means locked, tagged, and verified with a tester.' },
    { l: 'arcflash', q: 'Arc-rated clothing is rated in:', c: ['cal/cm²', 'Volts', 'Amps', 'psi'], w: 'Calories per square centimeter of incident energy.' },
    { l: 'arcflash', q: 'The boundary inside which an arc flash could cause a second-degree burn is the:', c: ['Arc flash boundary', 'Limited approach boundary', 'Restricted approach boundary', 'Working space'], w: 'Inside it you need arc-rated PPE.' },
    { l: 'arcflash', q: 'Class E hard hats are rated for:', c: ['Electrical protection', 'Extreme heat only', 'Eye protection', 'Economy'], w: 'Class E (electrical) hard hats are tested for high voltage.' },
    { l: 'heights', q: 'An extension ladder should be set at about:', c: ['4 to 1 (1 ft out per 4 ft up)', '2 to 1', '1 to 1', 'Straight vertical'], w: 'The 4:1 rule.' },
    { l: 'heights', q: 'An extension ladder used to reach a roof should extend at least ___ above the landing.', c: ['3 ft', '1 ft', '6 ft', '10 ft'], w: '3 ft above the landing surface.' },
    { l: 'heights', q: 'The best ladder material for electrical work is:', c: ['Fiberglass', 'Aluminum', 'Steel', 'Wood with metal rails'], w: 'Fiberglass doesn\'t conduct electricity.' },
    { l: 'heights', q: 'OSHA\'s general fall-protection trigger height in construction is:', c: ['6 ft', '4 ft', '10 ft', '15 ft'], w: '6 ft for construction.' },
    { l: 'heights', q: 'In a boom lift you should:', c: ['Wear a harness tied off to the basket anchor point', 'Tie off to a nearby beam', 'Not wear a harness', 'Stand on the midrail for reach'], w: 'Boom lifts: harness and lanyard to the designated anchor.' },
    { v: 1, l: 'site', q: 'Which NEC section covers GFCI protection for temporary wiring receptacles?', c: ['590.7', '210.8', '590.4', '406.4'], w: 'In the 2026 NEC, 590.7 is ground-fault protection for personnel on temporary installations.', r: '590.7' },
    { l: 'site', q: 'Trenches at least ___ deep need a protective system unless in stable rock.', c: ['5 ft', '3 ft', '8 ft', '10 ft'], w: '5 ft or deeper.' },
    { l: 'site', q: 'Before digging, you call:', c: ['811', '911', 'The inspector', 'TDLR'], w: '811 gets underground utilities marked.' },
    { v: 1, l: 'loto', q: 'Which item is NOT one of the four things a 110.16 arc-flash label must show?', c: ['The name of the electrician who installed it', 'The nominal system voltage', 'The arc flash boundary', 'The date the assessment was completed'], w: '110.16: voltage, arc flash boundary, available incident energy or minimum PPE, and the assessment date.', r: '110.16' },
    { v: 1, l: 'loto', q: 'Where a disconnect must be lockable open, the locking provision must:', c: ['Stay in place with or without the lock installed', 'Be a portable lock-out device kept in the truck', 'Be removed after inspection', 'Only be on the line side'], w: '110.25 (cord-and-plug connections are the exception).', r: '110.25' },
    { v: 1, l: 'site', q: 'An assured equipment grounding conductor program may be used instead of GFCI for temporary receptacles:', c: ['Only in industrial establishments with only qualified personnel, for equipment where a power loss is a greater hazard or that isn\'t GFCI-compatible', 'On any job with a written plan', 'Whenever a generator is used', 'Never'], w: '590.7(A) Exception.', r: '590.7' },
    { v: 1, l: 'site', q: 'Temporary wiring is covered by which NEC article?', c: ['590', '305', '527', '600'], w: 'Article 590 Temporary Installations.', r: 'Art 590' }
  ]
});
