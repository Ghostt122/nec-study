(window.MODULES ||= []).push({
  id: 'ocpd', icon: '🛡️', title: 'Chapter 2: Overcurrent Protection (240)',
  blurb: 'Breakers and fuses: protecting wire, standard sizes, the next-size-up rule, tap rules, and where breakers can go.',
  lessons: [
    {
      id: 'protect', title: 'Protecting conductors (240.4)',
      html: `
<p>The main job of a breaker or fuse is to protect the <b>wire</b> from overheating. The general rule: protect conductors at their ampacity ([[240.4]]).</p>
<h3>Next size up: 800 A or less [[240.4(B)]]</h3>
<p>If the wire's ampacity doesn't match a standard breaker size, you can go up to the <b>next higher standard size</b>, but only if:</p>
<ol>
<li>The circuit isn't a multi-outlet branch circuit for cord-and-plug portable loads (receptacles).</li>
<li>The ampacity doesn't already match a standard size.</li>
<li>The next size up isn't over <b>800 A</b>.</li>
</ol>
<div class="tip"><b>Example</b>3 AWG THWN copper, 75°C: 100 A. That's a standard size, so use 100 A. A conductor good for 115 A can go on a 125 A breaker (next standard size) if it's not feeding receptacles.</div>
<p><b>Over 800 A</b>: no rounding up. The conductor ampacity must be at least the breaker rating ([[240.4(C)]]).</p>
<h3>Small conductor rule [[240.4(D)]]</h3>
<div class="tablewrap"><table>
<tr><th>Conductor</th><th>Max OCPD</th></tr>
<tr><td>18 AWG Cu</td><td>7 A (with conditions)</td></tr>
<tr><td>16 AWG Cu</td><td>10 A (with conditions)</td></tr>
<tr><td>14 AWG Cu</td><td>15 A</td></tr>
<tr><td>12 AWG Al / Cu-clad Al</td><td>15 A</td></tr>
<tr><td>12 AWG Cu</td><td>20 A</td></tr>
<tr><td>10 AWG Al / Cu-clad Al</td><td>25 A</td></tr>
<tr><td>10 AWG Cu</td><td>30 A</td></tr>
</table></div>
<p>These caps apply after derating, unless an exception in [[240.4(G)]] applies. [[Table 240.4(G)]] lists specific uses, like motors, A/C equipment, and welders, that have their own rules. That's why an A/C unit can have 12 AWG on a 30 A breaker if the nameplate says so.</p>
<p>Flexible cords and fixture wire are protected per [[240.5]].</p>`
    },
    {
      id: 'ratings', title: 'Standard ratings and how breakers work',
      html: `
<h3>Standard sizes [[Table 240.6(A)]]</h3>
<p>10, 15, 20, 25, 30, 35, 40, 45, 50, 60, 70, 80, 90, 100, 110, 125, 150, 175, 200, 225, 250, 300, 350, 400, 450, 500, 600, 700, 800, 1000, 1200, 1600, 2000, 2500, 3000, 4000, 5000, 6000 A. Fuses also come in 1, 3, 6, and 601 A ([[240.6(A)]]).</p>
<div class="test"><b>Memorize the gaps</b>Up to 50 the steps are 5 A. Then 60, 70, 80, 90, 100, 110, 125, 150, 175, 200, 225, 250, 300… There's no 55 or 65, and no 105 or 115.</div>
<ul>
<li><b>Adjustable-trip breakers</b> are rated at their <b>maximum</b> possible setting, unless access to the adjustment is restricted (sealable cover, bolted door, locked room, or password) ([[240.6(B)]], [[240.6(C)]]).</li>
<li><b>No paralleling</b> breakers or fuses unless factory assembled and listed as a unit ([[240.8]]).</li>
<li><b>Hots only</b>: a breaker or fuse must be in each ungrounded conductor ([[240.15]]), and not in the grounded conductor unless it opens all conductors at once ([[240.22]]).</li>
<li><b>Single-pole breakers with handle ties</b> are OK for multiwire branch circuits with line-to-neutral loads, and for some line-to-line loads on 120/240 V systems, if the ties are <b>identified</b> ([[240.15(B)]]).</li>
<li><b>Interrupting rating</b>: breakers and fuses must have an interrupting rating of at least <b>5000 A</b> ([[240.16]]), and at least the fault current available where they're installed ([[110.9]]).</li>
<li><b>Breakers used as switches</b> for lighting circuits must be marked <b>SWD</b> or <b>HID</b> ([[240.83(D)]]).</li>
<li><b>Arc energy reduction</b>: breakers that can be set to <b>1200 A or more</b> need a way to reduce clearing time, like an energy-reducing maintenance switch or zone-selective interlocking ([[240.87]]).</li>
</ul>`
    },
    {
      id: 'location', title: 'Where breakers and fuses can go (240.24)',
      html: `
<ul>
<li><b>Readily accessible</b>, with the center of the handle grip in its highest position no more than <b>6 ft 7 in.</b> above the floor or working platform ([[240.24(A)]]). Exceptions: busway switches, supplementary devices, and OCPDs next to the equipment they supply (reachable with a ladder).</li>
<li><b>Each occupant</b> must have ready access to the OCPDs protecting their own circuits ([[240.24(B)]]).</li>
<li><b>Not exposed to physical damage</b> ([[240.24(C)]]) and <b>not near easily ignitible material</b> like clothes closets ([[240.24(D)]]).</li>
<li><b>Not in bathrooms</b>, showering facilities, or locker rooms with showers ([[240.24(E)]]).</li>
<li><b>Not over the steps</b> of a stairway ([[240.24(F)]]).</li>
<li>Enclosures for breakers and fuses are mounted <b>vertically</b>. A breaker panel can be horizontal only if the breakers still meet the up-is-on rule of 240.81 ([[240.33]]).</li>
<li>In damp or wet locations, enclosures follow [[312.4]] ([[240.32]]): weatherproof, and surface-mounted with at least ¼ in. of air space from the wall ([[312.4(A)]]).</li>
</ul>
<div class="job"><b>On the job</b>Breaker handles: "up is on" when mounted vertically. That's 240.81, and it's why you can't mount a standard panel on its side.</div>`
    },
    {
      id: 'taps', title: 'Feeder taps: the 10 ft and 25 ft rules (240.21)',
      html: `
<p>Normally a conductor is protected where it gets its supply ([[240.21]]). <b>Tap rules</b> let you tap a smaller conductor off a bigger feeder without a breaker at the tap point, if you follow strict conditions.</p>
<h3>10 ft tap [[240.21(B)]](1)</h3>
<ul>
<li>Tap no longer than <b>10 ft</b>.</li>
<li>Ampacity at least the load and at least the rating of the breaker or equipment it terminates in.</li>
<li>Doesn't extend past the enclosure of the equipment it supplies, and is in a raceway from the tap to that enclosure.</li>
<li>If it leaves the enclosure where the tap is made (field installed), its ampacity must be at least <b>1/10</b> of the feeder OCPD rating.</li>
</ul>
<h3>25 ft tap [[240.21(B)]](2)</h3>
<ul>
<li>Tap no longer than <b>25 ft</b>.</li>
<li>Ampacity at least <b>1/3</b> of the feeder OCPD rating.</li>
<li>Terminates in a <b>single</b> breaker or set of fuses that limits the load to the tap's ampacity.</li>
<li>Protected from physical damage (raceway or other approved means).</li>
</ul>
<div class="tip"><b>Example</b>Feeder protected at 400 A. A 25 ft tap must be at least 400 ÷ 3 = 133.3 A, so use 2/0 Cu (175 A at 75°C) or anything good for 134 A or more, ending in a single breaker sized for that tap.</div>
<p>There are other tap rules for transformer secondaries ([[240.21(C)]]), outside taps, and very long taps in high-bay buildings. You can't apply the next-size-up rule to taps.</p>`
    }
  ],
  questions: [
    { l: 'protect', q: 'The "next size up" rule for OCPDs applies to devices rated up to:', c: ['800 A', '600 A', '1000 A', '1200 A'], w: '240.4(B)(3).', r: '240.4(B)' },
    { l: 'protect', q: 'The next size up rule may NOT be used for:', c: ['Branch circuits supplying more than one receptacle for cord-and-plug portable loads', 'Feeders', 'Motor circuits', 'Single appliance circuits'], w: '240.4(B)(1).', r: '240.4(B)' },
    { l: 'protect', q: 'For OCPDs rated over 800 A, the conductor ampacity must be:', c: ['Equal to or greater than the OCPD rating', 'At least 80% of the OCPD', 'Rounded up to next size', 'At least 125% of the load only'], w: '240.4(C).', r: '240.4(C)' },
    { l: 'protect', q: 'Max OCPD for 14 AWG copper (small conductor rule):', c: ['15 A', '20 A', '10 A', '25 A'], w: '240.4(D)(4).', r: '240.4(D)' },
    { l: 'protect', q: 'Max OCPD for 12 AWG aluminum:', c: ['15 A', '20 A', '25 A', '10 A'], w: '240.4(D)(5).', r: '240.4(D)' },
    { l: 'protect', q: 'Max OCPD for 10 AWG aluminum:', c: ['25 A', '30 A', '20 A', '35 A'], w: '240.4(D)(7).', r: '240.4(D)' },
    { l: 'protect', q: 'Max OCPD for 18 AWG copper (when its conditions are met):', c: ['7 A', '5 A', '10 A', '6 A'], w: '240.4(D)(1), continuous load not over 5.6 A.', r: '240.4(D)' },
    { l: 'protect', q: 'Max OCPD for 16 AWG copper (when its conditions are met):', c: ['10 A', '7 A', '15 A', '8 A'], w: '240.4(D)(2), continuous load not over 8 A.', r: '240.4(D)' },
    { l: 'protect', q: 'Motor and A/C circuits can have breakers larger than 240.4(D) allows because of:', c: ['240.4(G) and Table 240.4(G)', '240.4(B)', '110.14(C)', '240.6'], w: 'Specific conductor applications.', r: '240.4(G)' },
    { l: 'ratings', q: 'Which of these is a standard breaker size?', c: ['110 A', '105 A', '115 A', '55 A'], w: 'Table 240.6(A): …90, 100, 110, 125, 150…', r: 'Table 240.6(A)' },
    { v: 1, l: 'ratings', q: 'Which is NOT a standard breaker size?', c: ['65 A', '45 A', '70 A', '175 A'], w: 'After 50: 60, 70, 80, 90, 100…', r: 'Table 240.6(A)' },
    { l: 'ratings', q: 'Additional standard ratings for fuses only include:', c: ['1, 3, 6, and 601 A', '5, 7, 12 A', '1, 2, 4 A', '600 and 1200 A'], w: '240.6(A).', r: '240.6(A)' },
    { l: 'ratings', q: 'The rating of an adjustable-trip breaker without restricted access is:', c: ['Its maximum possible setting', 'Its current setting', 'Its minimum setting', 'The frame size'], w: '240.6(B).', r: '240.6(B)' },
    { l: 'ratings', q: 'Individual circuit breakers may be connected in parallel to get a larger rating.', c: ['False, unless factory assembled and listed as a unit', 'True', 'True for feeders', 'True if the same brand'], w: '240.8.', r: '240.8' },
    { l: 'ratings', q: 'Breakers used as switches for 120 V or 277 V fluorescent lighting must be marked:', c: ['SWD or HID', 'HACR', 'GFCI', 'CU/AL'], w: '240.83(D).', r: '240.83(D)' },
    { l: 'ratings', q: 'Minimum interrupting rating for OCPDs per 240.16:', c: ['5000 A', '10,000 A', '1000 A', '22,000 A'], w: 'No less than 5000 A, and never less than the available fault current (110.9).', r: '240.16' },
    { l: 'location', q: 'A surface-mounted panel in a wet location must have at least ___ of air space from the wall.', c: ['¼ in.', '½ in.', '1 in.', '⅛ in.'], w: '312.4(A): 6 mm (¼ in.); nonmetallic enclosures on concrete or masonry are excepted.', r: '312.4(A)' },
    { l: 'ratings', q: 'Arc energy reduction is required when a breaker can be set to ___ or more.', c: ['1200 A', '800 A', '1000 A', '2000 A'], w: '240.87.', r: '240.87' },
    { l: 'ratings', q: 'Single-pole breakers with identified handle ties may protect a multiwire branch circuit that serves:', c: ['Only line-to-neutral loads', 'Only 3-phase motors', 'Any load', 'Only line-to-line loads'], w: '240.15(B)(1).', r: '240.15(B)' },
    { l: 'location', q: 'The center of a breaker handle grip in its highest position may be no more than ___ above the floor.', c: ['6 ft 7 in.', '6 ft', '7 ft', '6 ft 6 in.'], w: '2.0 m (6 ft 7 in.).', r: '240.24(A)' },
    { l: 'location', q: 'Overcurrent devices (other than supplementary) may be in a bathroom.', c: ['False (except existing panelboards)', 'True', 'True in commercial', 'True if GFCI'], w: '240.24(E).', r: '240.24(E)' },
    { l: 'location', q: 'OCPDs may not be located:', c: ['Over the steps of a stairway', 'In a garage', 'In a basement', 'Outdoors'], w: '240.24(F).', r: '240.24(F)' },
    { l: 'location', q: 'OCPDs must not be near easily ignitible material such as:', c: ['Clothes closets', 'Kitchens', 'Garages', 'Hallways'], w: '240.24(D).', r: '240.24(D)' },
    { l: 'location', q: 'Each occupant must have ready access to:', c: ['All OCPDs protecting their own conductors', 'The main service', 'The building\'s fire pump', 'Other tenants\' panels'], w: '240.24(B).', r: '240.24(B)' },
    { l: 'location', q: 'Enclosures for OCPDs are generally mounted:', c: ['Vertically', 'Horizontally', 'Upside down', 'Any position'], w: '240.33.', r: '240.33' },
    { l: 'taps', q: 'The 10 ft feeder tap rule limits tap length to:', c: ['10 ft', '25 ft', '3 ft', '15 ft'], w: '240.21(B)(1).', r: '240.21(B)' },
    { l: 'taps', q: 'A 25 ft feeder tap must have ampacity at least ___ of the feeder OCPD rating.', c: ['1/3', '1/10', '1/2', '1/4'], w: '240.21(B)(2).', r: '240.21(B)' },
    { l: 'taps', q: 'A field-installed 10 ft tap that leaves the enclosure where the tap is made must have ampacity at least ___ of the feeder OCPD.', c: ['1/10', '1/3', '1/2', '1/5'], w: '240.21(B)(1)(4).', r: '240.21(B)' },
    { l: 'taps', q: 'A 25 ft tap must terminate in:', c: ['A single circuit breaker or single set of fuses', 'A panelboard with any number of breakers', 'A junction box', 'A motor'], w: '240.21(B)(2)(2).', r: '240.21(B)' },
    { l: 'taps', q: 'Feeder protected at 600 A. Minimum ampacity of a 25 ft tap:', c: ['200 A', '60 A', '300 A', '150 A'], w: '600 ÷ 3 = 200 A.', r: '240.21(B)' },
    { l: 'taps', q: 'Can the next-size-up rule (240.4(B)) be applied to feeder tap conductors?', c: ['No', 'Yes', 'Only 10 ft taps', 'Only under 800 A'], w: '240.21(B): 240.4(B) shall not be permitted for tap conductors.', r: '240.21(B)' },
    { t: 'find', l: 'taps', q: 'Where is the table of standard OCPD ratings?', c: ['Table 240.6(A)', 'Table 240.4(G)', 'Table 310.16', 'Table 430.52'], w: 'Table 240.6(A).', r: 'Table 240.6(A)' },
    { t: 'find', l: 'taps', q: 'Where are the feeder tap rules?', c: ['240.21(B)', '240.4(E)', '210.19', '430.28'], w: '240.21(B).', r: '240.21(B)' },
    { t: 'find', l: 'taps', q: 'Where is the "small conductor rule"?', c: ['240.4(D)', '310.16', '210.19(A)', '240.6'], w: '240.4(D).', r: '240.4(D)' }
  ]
});
