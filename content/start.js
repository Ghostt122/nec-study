(window.MODULES ||= []).push({
  id: 'start', icon: '🧭', title: 'Start Here: How the Code Book Works',
  blurb: 'How the NEC is laid out, how to read a rule, the key words, and the Texas path to journeyman.',
  lessons: [
    {
      id: 'layout', title: 'How the book is laid out',
      html: `
<p>The NEC (NFPA 70) is a rule book for safe electrical installations. It's <b>not</b> a how-to manual. It tells you the minimum that's safe, not the best way to do it. You'll use it for your whole career, and the Texas exam is <b>open book</b>, so knowing your way around it is the most valuable skill you can build.</p>
<h3>The big pieces</h3>
<div class="tablewrap"><table>
<tr><th>Part</th><th>What's in it</th></tr>
<tr><td>Article 90</td><td>Introduction: purpose, what the code covers, how it's arranged</td></tr>
<tr><td>Chapter 1 (100–130)</td><td>General: definitions (100), general requirements (110), load calculations (120)</td></tr>
<tr><td>Chapter 2 (200–270)</td><td>Wiring and protection: branch circuits, feeders, services, overcurrent, grounding &amp; bonding (250)</td></tr>
<tr><td>Chapter 3 (300–399)</td><td>Wiring methods and materials: conduit, cable, boxes, conductors. <b>Your daily life running pipe.</b></td></tr>
<tr><td>Chapter 4 (400–495)</td><td>Equipment for general use: cords, switches, receptacles, panelboards, lights, motors, transformers</td></tr>
<tr><td>Chapter 5 (500–590)</td><td>Specific occupancies and locations: hazardous locations, hospitals, gas stations, temporary power</td></tr>
<tr><td>Chapter 6 (600–695)</td><td>Specific equipment: signs, EV chargers, welders, pools, solar (690), fire pumps</td></tr>
<tr><td>Chapter 7 (700–772)</td><td>Specific conditions and systems: emergency systems, standby, energy storage, Class 1/2/3/4 limited-energy circuits, fire alarm</td></tr>
<tr><td>Chapter 8 (800–830)</td><td>Communications systems outside and entering buildings: phone, antennas, CATV, broadband</td></tr>
<tr><td>Chapter 9</td><td>Tables: conduit fill, conductor properties, conduit dimensions</td></tr>
<tr><td>Informative Annexes</td><td>Helpful extras (like conduit fill tables in Annex C) but <b>not</b> rules</td></tr>
</table></div>
<p>Read [[90.3]]. It says Chapters 1–4 apply generally, and Chapters 5–8 may <b>supplement or modify</b> the requirements in Chapters 1 through 8 for specific situations. Chapter 9 tables apply only where a rule references them, and the Informative Annexes (A through L) are not requirements.</p>
<h3>How a number reads</h3>
<p><b>358.30(A)(2)</b> means Chapter 3 → Article 358 (EMT) → Section 358.30 (Securing and Supporting) → subsection (A) → list item (2).</p>
<h3>The secret pattern in Chapter 3</h3>
<p>Every raceway and cable article uses the <b>same section numbers for the same topic</b>. Learn this once and you can find support rules for any pipe in seconds:</p>
<div class="tablewrap"><table>
<tr><th>Ends in</th><th>Topic</th><th>Example</th></tr>
<tr><td>.1</td><td>Scope</td><td>358.1</td></tr>
<tr><td>.10</td><td>Uses Permitted</td><td>[[358.10]]</td></tr>
<tr><td>.12</td><td>Uses Not Permitted</td><td>[[358.12]]</td></tr>
<tr><td>.20</td><td>Size (min/max)</td><td>[[358.20]]</td></tr>
<tr><td>.22</td><td>Number of Conductors</td><td>[[358.22]]</td></tr>
<tr><td>.24</td><td>Bends</td><td>[[358.24]]</td></tr>
<tr><td>.28</td><td>Reaming and threading (trimming for flex)</td><td>[[358.28]]</td></tr>
<tr><td>.30</td><td><b>Securing and Supporting</b></td><td>[[358.30]]</td></tr>
<tr><td>.42</td><td>Couplings and Connectors</td><td>[[358.42]]</td></tr>
<tr><td>.60</td><td>Grounding</td><td>[[358.60]]</td></tr>
<tr><td>.100</td><td>Construction</td><td>358.100</td></tr>
</table></div>
<div class="tip"><b>Remember this</b>Need straps for PVC? Go to 352 (PVC) and add .30, which gives [[352.30]]. Rigid? [[344.30]]. MC cable? [[330.30]].</div>`
    },
    {
      id: 'reading', title: 'How to read a rule',
      html: `
<p>The exact words matter. [[90.5]] spells out what kind of language is a requirement and what isn't.</p>
<ul>
<li><b>"shall" / "shall not"</b> means you must do it, or you must not. That's a requirement.</li>
<li><b>"shall be permitted" / "shall not be required"</b> means you're allowed to, but you don't have to.</li>
<li><b>Exceptions</b> come right after the rule they modify (in italics). They only apply in the exact situation they describe.</li>
<li><b>Informational Notes</b> are explanations only. They are <b>not</b> enforceable rules.</li>
<li><b>Informative Annexes</b> at the back are also not requirements.</li>
</ul>
<h3>Other things you'll see on the page</h3>
<ul>
<li>Measurements come metric first, then US in parentheses: "900 mm (3 ft)".</li>
<li>Pipe sizes have a <b>metric designator</b> and a <b>trade size</b>: designator 21 = trade size ¾. See [[Table 300.19(B)]]. On the job everyone says trade size: "three-quarter EMT".</li>
<li>A "T" in the margin means a Tentative Interim Amendment changed that rule after printing.</li>
<li>Shading and markers in the margins show what changed from the last edition.</li>
</ul>
<div class="job"><b>On the job</b>The <b>AHJ</b> (Authority Having Jurisdiction, usually the city inspector) has the final word. When the code says "approved," it means acceptable to the AHJ.</div>
<div class="test"><b>For the test</b>Read the whole question and the whole rule. Exam questions often turn on one word: "shall" vs. "shall be permitted," "within" vs. "at intervals of," "3 ft" vs. "5 ft."</div>`
    },
    {
      id: 'words', title: 'Key words (Article 100)',
      html: `
<p>All the official definitions live in [[Art 100]], in alphabetical order. These come up every day. The explanations below are in plain English; tap the article to read the exact wording.</p>
<div class="tablewrap"><table>
<tr><th>Word</th><th>Plain English</th></tr>
<tr><td>Approved</td><td>Acceptable to the inspector (AHJ)</td></tr>
<tr><td>Listed</td><td>On a testing lab's list (like UL) as tested for a purpose</td></tr>
<tr><td>Labeled</td><td>Has the testing lab's label or mark on it</td></tr>
<tr><td>Identified (for a use)</td><td>Recognized as suitable for that specific use, usually through listing or labeling</td></tr>
<tr><td>Raceway</td><td>An enclosed channel made to hold wires: conduit, tubing, wireway, surface raceway. <b>Cable is not a raceway.</b></td></tr>
<tr><td>Conduit body</td><td>A part of the conduit system with a removable cover for access, like an LB, LL, LR, T, C, or X ("condulets"). FS and FD boxes are <b>not</b> conduit bodies.</td></tr>
<tr><td>Fitting</td><td>Locknut, bushing, connector, coupling. Mainly mechanical, not electrical.</td></tr>
<tr><td>Exposed (wiring methods)</td><td>On or attached to a surface, or behind panels designed to allow access</td></tr>
<tr><td>Concealed</td><td>Hidden by the structure or finish of the building (inside walls, above hard lids)</td></tr>
<tr><td>Accessible (equipment)</td><td>Can be reached to operate, replace, or inspect it</td></tr>
<tr><td>Accessible (wiring methods)</td><td>Can be removed or exposed without damaging the building structure or finish (not permanently closed in)</td></tr>
<tr><td>Readily accessible</td><td>You can reach it quickly without tools (other than keys), portable ladders, climbing over or under things, or moving obstacles</td></tr>
<tr><td>Dry / Damp / Wet location</td><td>Damp: protected but moderate moisture (under a canopy, a basement). Wet: weather-exposed, underground, in concrete in contact with earth.</td></tr>
<tr><td>Ampacity</td><td>How much current a conductor can carry continuously without going over its temperature rating</td></tr>
<tr><td>Branch circuit</td><td>The wiring between the last overcurrent device (breaker) and the outlets</td></tr>
<tr><td>Feeder</td><td>The wiring between the service and the last breaker (for example, panel to subpanel)</td></tr>
<tr><td>Grounded conductor</td><td>The conductor intentionally connected to earth, usually the <b>neutral</b> (white or gray)</td></tr>
<tr><td>Equipment grounding conductor (EGC)</td><td>The green or bare wire, or a metal raceway, that gives fault current a path back to trip the breaker</td></tr>
<tr><td>Qualified person</td><td>Has the skills, knowledge, and safety training for the equipment and its hazards</td></tr>
</table></div>
<div class="job"><b>On the job</b>"Grounded" (neutral) and "grounding" (ground wire / EGC) are different conductors. Mixing them up is the most common rookie mistake in conversation and on the test.</div>`
    },
    {
      id: 'finding', title: 'Finding things fast (open-book skill)',
      html: `
<p>On the older 4-hour, 80-question format you had about <b>3 minutes per question</b>. Whatever the current format, the clock is tight. Most people who fail run out of time hunting through the book. Speed comes from practice.</p>
<h3>Three ways in</h3>
<ol>
<li><b>Know the article.</b> Learn the article numbers for the big topics (list below). That gets you most of the way.</li>
<li><b>Use the Index</b> at the back. Look up the thing ("Electrical metallic tubing"), then the topic under it ("Securing and supporting").</li>
<li><b>Use the patterns.</b> In Chapter 3, .30 is always securing and supporting.</li>
</ol>
<h3>Article numbers to memorize first</h3>
<div class="tablewrap"><table>
<tr><td>100</td><td>Definitions</td><td>300</td><td>General wiring methods</td></tr>
<tr><td>110</td><td>General requirements, working space</td><td>310</td><td>Conductors, ampacity tables</td></tr>
<tr><td>120</td><td>Load calculations</td><td>314</td><td>Boxes, box fill</td></tr>
<tr><td>210</td><td>Branch circuits, GFCI/AFCI</td><td>344</td><td>Rigid (RMC)</td></tr>
<tr><td>215</td><td>Feeders</td><td>352</td><td>PVC</td></tr>
<tr><td>230</td><td>Services</td><td>358</td><td>EMT</td></tr>
<tr><td>240</td><td>Overcurrent protection</td><td>408</td><td>Panelboards</td></tr>
<tr><td>250</td><td>Grounding &amp; bonding</td><td>430</td><td>Motors</td></tr>
</table></div>
<h3>Texas exam book rules (from the PSI candidate bulletin)</h3>
<ul>
<li>Bring your own <b>soft-bound</b> NEC. Loose-leaf, spiral, or ring-bound books are not allowed. <b>The NEC Handbook is not allowed.</b></li>
<li>You may highlight, underline, and write notes in it <b>before</b> the exam, but not during.</li>
<li>Tabs must be <b>permanent tabs made by the book's publisher</b>. Homemade or DIY tabs aren't allowed, and you'd have to pull them off.</li>
</ul>
<div class="tip"><b>Do this now</b>When you buy the printed 2026 book, get the publisher's tab set and highlight as you learn. Every time this app shows a section number, find it in the book too. That's the practice that counts.</div>`
    },
    {
      id: 'texas', title: 'Texas path: apprentice to journeyman',
      html: `
<p>Electricians in Texas are licensed by <b>TDLR</b> (Texas Department of Licensing and Regulation). Here's the path as TDLR's website listed it in October 2026. This part is <b>not</b> in the NEC, and fees and rules change, so <b>check tdlr.texas.gov</b> before you apply.</p>
<h3>1. Apprentice Electrician license</h3>
<ul>
<li>No experience or exam needed. Apply online ($20) and renew every year.</li>
<li>You work under the general supervision of a Master Electrician, Journeyman Electrician, or Residential Wireman.</li>
</ul>
<h3>2. Rack up hours</h3>
<ul>
<li>Journeyman needs <b>8,000 hours</b> of on-the-job training under a <b>Texas-licensed Master Electrician</b>.</li>
<li>You can apply and test at <b>7,000 hours</b>, but the license isn't issued until you hit 8,000.</li>
<li>Each master you worked under signs an <b>Experience Verification Form (ELC017)</b>, one form per master.</li>
</ul>
<div class="tip"><b>Start now</b>Keep your own log: dates, hours, employer, supervising master's name and license number. Getting old bosses to sign forms years later is much easier if you have records. At about 2,000 hours a year of full-time work, 8,000 hours is roughly 4 years.</div>
<h3>3. Apply and test</h3>
<ul>
<li>Mail the Journeyman application with the $30 fee. TDLR runs a background check.</li>
<li>After approval, schedule the exam with <b>PSI</b>.</li>
<li>The license is good for 1 year and must be renewed every year; renewal requires continuing education (check TDLR for the current hours).</li>
</ul>
<h3>Which code edition?</h3>
<p>Texas adopted the <b>2026 NEC</b> as the state electrical code (16 TAC §73.100), effective September 1, 2026, with one limited Texas amendment: GFCI protection is not required for outdoor HVAC outlets at dwellings under [[210.8(F)]]. That's the same edition as your book. Cities can adopt local amendments, so check TDLR and your city.</p>`
    },
    {
      id: 'exam', title: 'The journeyman exam',
      html: `
<p>From TDLR's exam page and the PSI Candidate Information Bulletin (CIB). <b>Check TDLR:</b> the exam page says that since <b>March 11, 2025</b> the journeyman exam has <b>two separate parts, a knowledge portion and a calculations portion</b>, and that it is open book with the <b>2026 NEC</b>. The bulletin posted online in October 2026 was still the 2023-NEC edition and showed the older single-exam format below, so get the current bulletin from PSI for the new item counts and times.</p>
<ul>
<li>Older single-exam format (CIB): <b>80 scored questions</b> plus 5 unscored ones, <b>240 minutes</b> (plus 20 for the unscored ones), <b>70% to pass</b>.</li>
<li>Open book: your own soft-bound NEC.</li>
<li>Unless a question says otherwise, <b>all conductors are copper</b>.</li>
<li>The CIB says <b>don't apply code exceptions or optional calculation methods</b> (like the 120.82 optional dwelling calc) unless the question tells you to.</li>
<li>Both the knowledge and calculations portions are multiple choice; TDLR requires <b>70%</b> to pass.</li>
</ul>
<h3>What's on it (scored items, from the CIB content outline)</h3>
<div class="tablewrap"><table>
<tr><th>Subject</th><th>#</th></tr>
<tr><td>Wiring methods &amp; materials</td><td><b>18</b></td></tr>
<tr><td>Branch circuit calculations &amp; conductors</td><td><b>15</b></td></tr>
<tr><td>Electrical equipment &amp; devices</td><td>10</td></tr>
<tr><td>Services, service equipment &amp; separately derived systems</td><td>9</td></tr>
<tr><td>Special occupancies, equipment &amp; conditions</td><td>9</td></tr>
<tr><td>Definitions, calculations, theory &amp; plans</td><td>6</td></tr>
<tr><td>Motors &amp; generators</td><td>5</td></tr>
<tr><td>Feeders</td><td>3</td></tr>
<tr><td>Control devices &amp; disconnecting means</td><td>3</td></tr>
<tr><td>Renewable energy</td><td>2</td></tr>
</table></div>
<p>Wiring methods is the <b>biggest single chunk</b>, and it's the work you're doing right now: running pipe. Learning it on the job and in this app counts twice.</p>
<div class="test"><b>Strategy</b>Go through once and answer everything you know fast. Flag the long lookups and calculations and come back. Never leave one blank.</div>`
    }
  ],
  questions: [
    { v: 1, l: 'layout', q: 'Which chapters of the NEC apply generally to all installations?', c: ['Chapters 1 through 4', 'Chapters 1 through 9', 'Chapters 5 through 8', 'Chapter 9 only'], w: 'Chapters 1–4 apply generally. Chapters 5–8 supplement or modify them for special occupancies, equipment, and conditions.', r: '90.3' },
    { v: 1, l: 'layout', q: 'Chapters 5, 6, and 7 can do what to the rules in Chapters 1–4?', c: ['Supplement or modify them', 'Nothing; they only apply to communications', 'Replace the definitions in Article 100', 'Only add tables'], w: 'Special occupancies, special equipment, and special conditions can supplement or modify the general rules.', r: '90.3' },
    { v: 1, l: 'layout', q: 'Chapter 9 of the NEC is mostly:', c: ['Tables that apply where referenced', 'Definitions', 'Hazardous locations', 'Communications systems'], w: 'Chapter 9 holds tables (conduit fill, conductor properties, etc.) used where the code references them.', r: '90.3' },
    { v: 1, l: 'layout', q: 'Are Informative Annexes enforceable requirements?', c: ['No, they are for information only', 'Yes, same as the rest of the code', 'Only Annex C', 'Only when the AHJ adopts them by name in the permit'], w: 'Informative annexes are not part of the requirements of the code.', r: '90.3' },
    { v: 1, l: 'layout', q: 'In Chapter 3 raceway articles, the section ending in ".30" covers:', c: ['Securing and supporting', 'Uses permitted', 'Bends', 'Grounding'], w: 'The numbering is parallel: .10 uses permitted, .12 not permitted, .24 bends, .30 securing & supporting, .60 grounding.', r: '358.30' },
    { v: 1, l: 'layout', q: 'In a raceway article, "Uses Not Permitted" is found in which section number?', c: ['.12', '.10', '.22', '.42'], w: 'xxx.12 is always Uses Not Permitted (e.g., 358.12 for EMT).', r: '358.12' },
    { l: 'layout', q: 'What does the (A) mean in 358.30(A)?', c: ['A subsection of section 358.30', 'A reference to Annex A', 'An article in Chapter 1', 'An exception'], w: 'Article 358 → Section 358.30 → subsection (A) → list items (1), (2)…' },
    { v: 1, l: 'reading', q: 'In the NEC, "shall be permitted" means:', c: ['It is allowed but not required', 'It is required', 'It is prohibited', 'It is only a recommendation in an informational note'], w: 'Permissive rules use "shall be permitted" or "shall not be required."', r: '90.5(B)' },
    { v: 1, l: 'reading', q: 'Informational Notes in the NEC are:', c: ['Explanatory and not enforceable', 'Mandatory rules', 'Only for inspectors', 'Exceptions to the rule above them'], w: 'Informational notes are explanatory material and not enforceable requirements.', r: '90.5(C)' },
    { v: 1, l: 'reading', q: 'A mandatory rule in the NEC uses the words:', c: ['shall or shall not', 'should or may', 'is recommended', 'shall be permitted'], w: 'Mandatory rules are characterized by "shall" or "shall not."', r: '90.5(A)' },
    { v: 1, l: 'reading', q: 'Metric designator 21 is what trade size?', c: ['3/4', '1/2', '1', '1-1/4'], w: 'Designators: 16 = 1/2, 21 = 3/4, 27 = 1, 35 = 1-1/4, 41 = 1-1/2, 53 = 2.', r: 'Table 300.19(B)' },
    { v: 1, l: 'reading', q: 'Metric designator 16 is what trade size?', c: ['1/2', '3/8', '3/4', '1'], w: '16 = 1/2. The numbers are for identification only, not actual dimensions.', r: 'Table 300.19(B)' },
    { l: 'reading', q: '"Approved" in the NEC means:', c: ['Acceptable to the authority having jurisdiction', 'Listed by UL', 'Labeled by the manufacturer', 'Shown on the plans'], w: 'Approved = acceptable to the AHJ (usually the inspector). Don\'t confuse with "listed."', r: 'Art 100' },
    { v: 1, l: 'words', q: 'Equipment that appears on a list published by a testing organization (like UL) is:', c: ['Listed', 'Approved', 'Identified', 'Labeled'], w: 'Listed = included on a list by a testing lab. Labeled = has the lab\'s label attached. Approved = OK\'d by the AHJ.', r: 'Art 100' },
    { v: 1, l: 'words', q: 'Which of these is NOT a raceway?', c: ['Type MC cable', 'EMT', 'Rigid PVC conduit', 'Metal wireway'], w: 'Cable assemblies (MC, AC, NM) are cables, not raceways. A raceway is an enclosed channel that conductors are pulled into.', r: 'Art 100' },
    { v: 1, l: 'words', q: 'Capable of being reached quickly without climbing over things, using a portable ladder, or using tools is:', c: ['Readily accessible', 'Accessible', 'Exposed', 'Approved'], w: 'Readily accessible is the stricter one. It\'s needed for things like disconnects and panelboard breakers.', r: 'Art 100' },
    { l: 'words', q: 'The neutral is usually which conductor?', c: ['The grounded conductor', 'The grounding electrode conductor', 'The equipment grounding conductor', 'The ungrounded conductor'], w: 'The neutral is normally the grounded conductor (white/gray). The EGC is the green or bare one.', r: 'Art 100' },
    { l: 'words', q: 'Wiring between the final overcurrent device and the outlets is a:', c: ['Branch circuit', 'Feeder', 'Service', 'Tap'], w: 'Feeder = service to final OCPD. Branch circuit = final OCPD to the outlets.', r: 'Art 100' },
    { v: 1, l: 'words', q: 'An LB is an example of a:', c: ['Conduit body', 'Junction box', 'Cabinet', 'Raceway'], w: 'Conduit bodies (LB, LL, LR, T, C, X) give access through a removable cover at a junction or termination point.', r: 'Art 100' },
    { v: 1, l: 'words', q: 'Underground and in concrete slabs in contact with the earth are classified as:', c: ['Wet locations', 'Damp locations', 'Dry locations', 'Hazardous locations'], w: 'Installations underground or in concrete slabs in direct contact with earth are wet locations.', r: 'Art 100' },
    { l: 'finding', q: 'Which of these may NOT be brought into the Texas exam room?', c: ['The NEC Handbook', 'A soft-bound NEC with highlighting', 'A soft-bound NEC with publisher tabs', 'A soft-bound NEC with brief notes written before the exam'], w: 'The PSI bulletin says the NEC Handbook is not allowed, and neither are loose-leaf, spiral, or ring-bound books or homemade tabs.' },
    { l: 'finding', q: 'According to the PSI bulletin, tabs in your exam code book must be:', c: ['Permanent tabs made by the NEC book publisher', 'Any sticky tabs', 'Handwritten tabs only', 'Not allowed at all'], w: 'Homemade, DIY, or non-NEC tabs are not permitted.' },
    { v: 1, l: 'texas', q: 'How many hours of on-the-job training does Texas require for a journeyman electrician license?', c: ['8,000', '4,000', '6,000', '12,000'], w: '8,000 hours under a Texas-licensed Master Electrician. You may apply and test at 7,000 hours.' },
    { v: 1, l: 'texas', q: 'At how many hours can you apply to take the Texas journeyman exam early?', c: ['7,000', '6,000', '7,500', '8,000 (no early testing)'], w: 'TDLR lets you test at 7,000 hours. The license is issued once you reach 8,000.' },
    { v: 1, l: 'texas', q: 'Which agency licenses electricians in Texas?', c: ['TDLR', 'NFPA', 'OSHA', 'PSI'], w: 'TDLR licenses electricians. PSI is the testing vendor. NFPA publishes the NEC.' },
    { v: 1, l: 'texas', q: 'As an apprentice in Texas you may work under the general supervision of:', c: ['A Master, Journeyman, or Residential Wireman', 'Only a Master Electrician', 'Any other apprentice with more hours', 'Only the electrical contractor owner'], w: 'Per TDLR, apprentices work under the general supervision of a Master Electrician, Journeyman Electrician, or Residential Wireman.' },
    { v: 1, l: 'exam', q: 'Passing score on the Texas journeyman exam is:', c: ['70%', '75%', '80%', '65%'], w: 'TDLR: 70% or better to pass (each portion). Check the current PSI bulletin for item counts and times.' },
    { v: 1, l: 'exam', q: 'Unless the exam question says otherwise, conductors are assumed to be:', c: ['Copper', 'Aluminum', 'Copper-clad aluminum', 'Whatever is cheapest'], w: 'The PSI bulletin says all conductors are to be considered copper unless specifically noted.' },
    { l: 'exam', q: 'Which subject area has the most questions on the Texas journeyman exam?', c: ['Wiring methods and materials', 'Motors and generators', 'Renewable energy', 'Feeders'], w: 'Wiring methods and materials: 18 of 80 scored items in the CIB content outline (check the current bulletin for the split-exam outline).' },
    { l: 'exam', q: 'On the Texas exam, should you apply code exceptions or optional calculation methods?', c: ['Only if the question tells you to', 'Always, they give smaller answers', 'Only exceptions, never optional calcs', 'Only optional calcs, never exceptions'], w: 'PSI Candidate Information Bulletin: don\'t consider exceptions or optional calculation methods unless the question specifically directs you to.' },
    { l: 'exam', q: 'Since March 11, 2025, TDLR says the journeyman exam is made up of:', c: ['A knowledge portion and a calculations portion', 'One 100-question exam', 'A written exam and a hands-on practical', 'An oral exam'], w: 'TDLR exam page. Check the current PSI bulletin for item counts and times.' },
    { v: 1, l: 'layout', q: 'In the 2026 NEC, Chapters 5 through 8 may supplement or modify the requirements in:', c: ['Chapters 1 through 8', 'Chapters 1 through 4 only', 'Chapter 9 only', 'Nothing; they stand alone'], w: '90.3 (2026). Figure 90.3 shows Chapter 8 (communications) now in the same group as 5–7.', r: '90.3' },
    { v: 1, l: 'words', q: '"Accessible" as applied to equipment means:', c: ['Capable of being reached for operation, renewal, and inspection', 'Reachable without tools or ladders', 'Not permanently closed in by the building finish', 'Behind a locked door'], w: 'Article 100. "Not closed in by the finish" is the wiring-methods meaning; "without tools or ladders" is readily accessible.', r: 'Art 100' },
    { v: 1, t: 'find', l: 'finding', q: 'Where are the official definitions located?', c: ['Article 100', 'Article 90', 'Article 110', 'Chapter 9'], w: 'Article 100 has the definitions, in alphabetical order.', r: 'Art 100' },
    { v: 1, t: 'find', l: 'finding', q: 'Which article covers EMT?', c: ['Article 358', 'Article 344', 'Article 352', 'Article 348'], w: '344 = RMC, 348 = FMC, 352 = PVC, 358 = EMT.', r: 'Art 358' },
    { v: 1, t: 'find', l: 'finding', q: 'Which article covers grounding and bonding?', c: ['Article 250', 'Article 240', 'Article 230', 'Article 300'], w: '240 = overcurrent protection, 230 = services, 250 = grounding & bonding.', r: 'Art 250' },
    { v: 1, t: 'find', l: 'finding', q: 'Which article covers boxes and box fill?', c: ['Article 314', 'Article 312', 'Article 300', 'Article 408'], w: '312 = cabinets and cutout boxes, 314 = outlet, device, pull, and junction boxes, 408 = panelboards.', r: 'Art 314' },
    { v: 1, t: 'find', l: 'finding', q: 'Which article covers rigid metal conduit (RMC)?', c: ['Article 344', 'Article 342', 'Article 358', 'Article 350'], w: '342 = IMC, 344 = RMC.', r: 'Art 344' },
    { v: 1, t: 'find', l: 'finding', q: 'Which article covers rigid PVC conduit?', c: ['Article 352', 'Article 353', 'Article 356', 'Article 362'], w: '352 = PVC, 353 = HDPE, 356 = LFNC, 362 = ENT.', r: 'Art 352' }
  ]
});
