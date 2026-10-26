(window.MODULES ||= []).push({
  id: 'ocpd', icon: '🛡️', title: 'Chapter 2: Overcurrent Protection (240)',
  blurb: 'Breakers and fuses: protecting wire, standard sizes, the next-size-up rule, tap rules, and where breakers can go.',
  lessons: [
    {
      id: 'protect', title: 'Protecting conductors (240.4)',
      html: `
<p>The main job of a breaker or fuse is to protect the <b>wire</b> from overheating. The general rule: protect conductors at their ampacity from 310.14 ([[240.4]]).</p>
<p><b>Power loss hazard</b>: where opening the circuit would create a hazard (fire pumps, material-handling magnets), overload protection isn't required, but <b>short-circuit protection</b> still is ([[240.4(A)]]).</p>
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
<tr><td>14 AWG Cu-clad Al</td><td>10 A (with conditions)</td></tr>
<tr><td>14 AWG Cu</td><td>15 A</td></tr>
<tr><td>12 AWG Al / Cu-clad Al</td><td>15 A</td></tr>
<tr><td>12 AWG Cu</td><td>20 A</td></tr>
<tr><td>10 AWG Al / Cu-clad Al</td><td>25 A</td></tr>
<tr><td>10 AWG Cu</td><td>30 A</td></tr>
</table></div>
<p>The "with conditions" sizes (18 Cu, 16 Cu, 14 CCA) need continuous loads of 5.6 A, 8 A, and 8 A or less, and an OCPD marked for that wire or certain fuse classes (CC, CF, CG, J, T).</p>
<p>These caps apply after correction factors for ambient temperature and number of conductors, unless 240.4(E) (taps) or [[240.4(G)]] permits otherwise. [[Table 240.4(G)]] lists specific uses, like motors, A/C equipment, and welders, that have their own rules. That's why an A/C unit can have 12 AWG on a 30 A breaker if the nameplate says so.</p>
<h3>More 240.4 rules</h3>
<ul>
<li><b>Transformer secondaries</b>: secondary conductors are <b>not</b> protected by the primary OCPD, except for a single-phase 2-wire secondary or a 3-phase delta-delta 3-wire secondary, and only if the primary OCPD meets 450.5 and doesn't exceed the secondary conductor ampacity × the secondary-to-primary voltage ratio ([[240.4(F)]]). A 480 V delta to 208Y/120 V transformer's secondary needs its own protection or a tap rule.</li>
<li><b>Dwelling services and feeders</b> may be protected at the 310.12 ampacity values ([[240.4(H)]]).</li>
<li>Flexible cords and fixture wire are protected per [[240.5]].</li>
</ul>`
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
<li><b>Interrupting rating</b>: breakers and fuses must have an interrupting rating of at least <b>5000 A</b> ([[240.16]]), and at least the fault current available where they're installed ([[110.9]]). A breaker with an interrupting rating other than 5000 A must have it marked on the breaker ([[240.83(C)]]).</li>
<li><b>Breakers used as switches</b> in 120 V and 277 V fluorescent lighting circuits must be listed and marked <b>SWD</b> or <b>HID</b>. For HID lighting circuits, they must be marked <b>HID</b> ([[240.83(D)]]).</li>
<li><b>Slash ratings</b>: a breaker rated 120/240 V or 480Y/277 V may be used only on a solidly grounded system where no conductor is over the lower number to ground and none is over the higher number between conductors. So a 480Y/277 V breaker can't go on a 480 V corner-grounded or ungrounded delta. A straight-rated breaker (like 480 V) only needs the voltage between any two conductors to be within its rating ([[240.85]]).</li>
<li><b>Supplementary OCPDs</b> (like a fuse inside a luminaire or appliance) can't replace the required branch-circuit OCPD, and they don't have to be readily accessible ([[240.10]]).</li>
<li><b>Building main GFPE</b>: a building or structure main disconnect rated <b>1000 A or more</b> on a solidly grounded wye over 150 V to ground (480Y/277) needs GFPE, except for continuous industrial processes, where GFPE is already provided, and fire pumps ([[240.13]]).</li>
<li><b>Arc energy reduction</b>: breakers that can be set to <b>1200 A or more</b> need a way to reduce clearing time, like an energy-reducing maintenance switch or zone-selective interlocking ([[240.87]]).</li>
<li><b>Fuses rated 1200 A or more</b> have their own arc energy reduction rule: the fuse must clear in <b>0.07 seconds or less</b> at the available arcing current, or another means (differential relaying, energy-reducing maintenance switching, an active arc-flash mitigation system, etc.) must be provided. It's performance tested when first installed ([[240.67]]).</li>
</ul>
<h3>Plug fuses (old work)</h3>
<ul>
<li>Plug fuses only on circuits not over <b>125 V</b> between conductors, or on a grounded-neutral system not over 150 V to ground. Fuses of 15 A and less have a <b>hexagonal</b> window or cap ([[240.50]]).</li>
<li><b>Edison-base</b> plug fuses: 125 V and 30 A max, and only as <b>replacements</b> in existing installations with no sign of overfusing or tampering ([[240.51]]). <b>Type S</b> fuses come in non-interchangeable 0–15, 16–20, and 21–30 A classes ([[240.53]]).</li>
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
<div class="job"><b>On the job</b>Breaker handles that move up and down must be "on" in the up position ([[240.81]]). Turn a standard panel on its side and half the breakers would be on in the down position, which is why you can't do that.</div>`
    },
    {
      id: 'taps', title: 'Feeder taps: the 10 ft and 25 ft rules (240.21)',
      html: `
<p>Normally a conductor is protected where it gets its supply ([[240.21]]). <b>Tap rules</b> let you tap a smaller conductor off a bigger feeder without a breaker at the tap point, if you follow strict conditions.</p>
<h3>10 ft tap [[240.21(B)]](1)</h3>
<ul>
<li>Tap no longer than <b>10 ft</b>.</li>
<li>Ampacity at least the combined calculated load and at least the rating of the equipment or breaker it terminates in.</li>
<li>Doesn't extend past the enclosure of the equipment it supplies, and is in a raceway from the tap to that enclosure.</li>
<li>If it leaves the enclosure where the tap is made (field installed), its ampacity must be at least <b>1/10</b> of the feeder OCPD rating.</li>
</ul>
<h3>25 ft tap [[240.21(B)]](2)</h3>
<ul>
<li>Tap no longer than <b>25 ft</b>.</li>
<li>Ampacity at least <b>1/3</b> of the feeder OCPD rating.</li>
<li>Terminates in a <b>single</b> breaker or set of fuses that limits the load to the tap's ampacity. That one device may then feed any number of breakers on its load side.</li>
<li>Protected from physical damage (raceway or other approved means).</li>
</ul>
<div class="tip"><b>Example</b>Feeder protected at 400 A. A 25 ft tap must be at least 400 ÷ 3 = 133.3 A. 1 AWG Cu at 75°C is only 130 A (too small), so 1/0 Cu at 150 A is the smallest copper that works ([[Table 310.16]]). It ends in a single breaker no larger than the tap's ampacity.</div>
<h3>Other feeder taps [[240.21(B)]]</h3>
<ul>
<li><b>(3) Tap to a transformer</b>: primary plus secondary conductor total not over <b>25 ft</b>. Primary at least 1/3 of the feeder OCPD; secondary at least the primary-to-secondary voltage ratio × 1/3 of the feeder OCPD; ends in a single breaker or set of fuses.</li>
<li><b>(4) High-bay manufacturing</b> (over 35 ft high at the walls, qualified persons only): up to 25 ft horizontal and 100 ft total, at least 1/3 of the feeder OCPD, no splices, 6 AWG Cu or 4 AWG Al minimum, no wall/floor/ceiling penetrations, tap made at least 30 ft above the floor.</li>
<li><b>(5) Outside taps</b>: <b>unlimited length</b> if outside the building (except at the termination), protected from damage, ending in a single OCPD that's part of or right next to a disconnect located outside or inside nearest the point of entrance.</li>
</ul>
<h3>Transformer secondary conductors [[240.21(C)]]</h3>
<ul>
<li><b>10 ft</b>: like the 10 ft feeder tap. If field installed and they leave the enclosure, ampacity at least the primary-to-secondary voltage ratio × <b>1/10</b> of the primary OCPD.</li>
<li><b>25 ft</b>: ampacity at least the primary-to-secondary voltage ratio × <b>1/3</b> of the primary OCPD, ending in a single breaker or set of fuses, protected from damage.</li>
<li>Industrial 25 ft rule for switchgear/switchboards, and outside secondary conductors of unlimited length, also exist.</li>
</ul>
<p>You can't apply the next-size-up rule (240.4(B)) to feeder taps or transformer secondary conductors. Conductors supplied under these tap rules can't supply another conductor except through an OCPD meeting 240.4.</p>`
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
    { l: 'protect', q: 'Max OCPD for 14 AWG copper-clad aluminum (when its conditions are met):', c: ['10 A', '15 A', '7 A', '20 A'], w: '240.4(D)(3), continuous load not over 8 A.', r: '240.4(D)' },
    { l: 'protect', q: 'Where interrupting the circuit would create a hazard (like a fire pump), what protection is NOT required?', c: ['Overload protection', 'Short-circuit protection', 'All overcurrent protection', 'Grounding'], w: '240.4(A): overload protection not required; short-circuit protection shall be provided.', r: '240.4(A)' },
    { l: 'protect', q: 'The secondary conductors of a 480 V delta to 208Y/120 V transformer are protected by the primary OCPD.', c: ['False', 'True', 'True if under 10 ft', 'True if rated 75°C'], w: '240.4(F): only single-phase 2-wire or 3-phase delta-delta 3-wire secondaries can be protected by the primary.', r: '240.4(F)' },
    { l: 'protect', q: 'The small conductor limits of 240.4(D) apply:', c: ['After correction factors for ambient temperature and number of conductors', 'Before any derating', 'Only to aluminum', 'Only to dwellings'], w: '240.4(D).', r: '240.4(D)' },
    { l: 'ratings', q: 'Which of these is a standard breaker size?', c: ['110 A', '105 A', '115 A', '55 A'], w: 'Table 240.6(A): …90, 100, 110, 125, 150…', r: 'Table 240.6(A)' },
    { v: 1, l: 'ratings', q: 'Which is NOT a standard breaker size?', c: ['65 A', '45 A', '70 A', '175 A'], w: 'After 50: 60, 70, 80, 90, 100…', r: 'Table 240.6(A)' },
    { l: 'ratings', q: 'Additional standard ratings for fuses only include:', c: ['1, 3, 6, and 601 A', '5, 7, 12 A', '1, 2, 4 A', '600 and 1200 A'], w: '240.6(A).', r: '240.6(A)' },
    { l: 'ratings', q: 'The rating of an adjustable-trip breaker without restricted access is:', c: ['Its maximum possible setting', 'Its current setting', 'Its minimum setting', 'The frame size'], w: '240.6(B).', r: '240.6(B)' },
    { l: 'ratings', q: 'Individual circuit breakers may be connected in parallel to get a larger rating.', c: ['False, unless factory assembled and listed as a unit', 'True', 'True for feeders', 'True if the same brand'], w: '240.8.', r: '240.8' },
    { l: 'ratings', q: 'Breakers used as switches for 120 V or 277 V fluorescent lighting must be marked:', c: ['SWD or HID', 'HACR', 'GFCI', 'CU/AL'], w: '240.83(D).', r: '240.83(D)' },
    { l: 'ratings', q: 'Minimum interrupting rating for OCPDs per 240.16:', c: ['5000 A', '10,000 A', '1000 A', '22,000 A'], w: 'No less than 5000 A, and never less than the available fault current (110.9).', r: '240.16' },
    { l: 'location', q: 'A surface-mounted panel in a wet location must have at least ___ of air space from the wall.', c: ['¼ in.', '½ in.', '1 in.', '⅛ in.'], w: '312.4(A): 6 mm (¼ in.); nonmetallic enclosures on concrete or masonry are excepted.', r: '312.4(A)' },
    { l: 'ratings', q: 'Where fuses rated 1200 A or more are installed, the fuse must clear the available arcing current in:', c: ['0.07 seconds or less', '0.5 seconds or less', '1 second or less', '0.25 seconds or less'], w: '240.67(B).', r: '240.67(B)' },
    { l: 'ratings', q: 'Arc energy reduction is required when a breaker can be set to ___ or more.', c: ['1200 A', '800 A', '1000 A', '2000 A'], w: '240.87.', r: '240.87' },
    { l: 'ratings', q: 'Single-pole breakers with identified handle ties may protect a multiwire branch circuit that serves:', c: ['Only line-to-neutral loads', 'Only 3-phase motors', 'Any load', 'Only line-to-line loads'], w: '240.15(B)(1).', r: '240.15(B)' },
    { l: 'ratings', q: 'A circuit breaker must have its interrupting rating marked on it if the rating is other than:', c: ['5000 A', '10,000 A', '22,000 A', '1000 A'], w: '240.83(C) (not required for supplementary protection).', r: '240.83(C)' },
    { l: 'ratings', q: 'A breaker with a 480Y/277 V slash rating may be used on:', c: ['A solidly grounded 480Y/277 V wye system', 'A 480 V corner-grounded delta', 'A 480 V ungrounded delta', 'Any 480 V system'], w: '240.85(B): no conductor over 277 V to ground, none over 480 V between conductors, solidly grounded.', r: '240.85(B)' },
    { l: 'ratings', q: 'Supplementary overcurrent devices (like a fuse inside a luminaire):', c: ['Cannot substitute for the required branch-circuit OCPD and need not be readily accessible', 'May replace the branch-circuit breaker', 'Must be readily accessible', 'Must be rated 10,000 AIC'], w: '240.10.', r: '240.10' },
    { l: 'ratings', q: 'A 1200 A building main disconnect on a 480Y/277 V solidly grounded wye needs GFPE, except when it supplies:', c: ['A fire pump', 'An office building', 'A school', 'A warehouse'], w: '240.13(A): also excepted are continuous industrial processes and installations where GFPE is provided by other service or feeder rules.', r: '240.13(A)' },
    { l: 'ratings', q: 'Breakers used as switches in high-intensity discharge (HID) lighting circuits must be marked:', c: ['HID', 'SWD', 'HACR', 'SWD or HID'], w: '240.83(D): SWD or HID is for 120/277 V fluorescent; HID circuits need HID.', r: '240.83(D)' },
    { l: 'ratings', q: 'An adjustable-trip breaker may be rated at its adjusted setting (rather than its maximum) when access to the adjustment is restricted by:', c: ['A sealable cover, bolted doors, locked doors for qualified persons, or a password', 'A warning label', 'A plastic cover held by a clip', 'Nothing; it is always rated at the setting'], w: '240.6(C).', r: '240.6(C)' },
    { l: 'ratings', q: 'Plug fuses may be used on circuits not exceeding ___ between conductors (or 150 V to ground on a grounded-neutral system).', c: ['125 V', '250 V', '150 V', '300 V'], w: '240.50(A).', r: '240.50' },
    { l: 'ratings', q: 'Plug fuses rated 15 A and less are identified by:', c: ['A hexagonal window, cap, or other prominent part', 'A red cap', 'A round window', 'A blue label'], w: '240.50(C).', r: '240.50' },
    { l: 'ratings', q: 'Edison-base plug fuses may be used:', c: ['Only as replacements in existing installations with no evidence of overfusing or tampering', 'In any new work', 'On 240 V circuits', 'Up to 60 A'], w: '240.51(B).', r: '240.51(B)' },
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
    { v: 1, l: 'taps', q: 'Feeder protected at 400 A, 25 ft tap, copper at 75°C. Smallest tap conductor?', c: ['1/0 AWG', '1 AWG', '2 AWG', '2/0 AWG'], w: '400 ÷ 3 = 133.3 A. 1 AWG = 130 A (too small); 1/0 = 150 A (Table 310.16, 75°C).', r: 'Table 310.16' },
    { l: 'taps', q: 'The single breaker at the end of a 25 ft feeder tap may supply:', c: ['Any number of additional OCPDs on its load side', 'Only one load', 'No more than six breakers', 'Only a motor'], w: '240.21(B)(2)(2).', r: '240.21(B)' },
    { l: 'taps', q: 'A 10 ft feeder tap must have an ampacity at least the combined calculated load and at least:', c: ['The rating of the equipment or OCPD it terminates in', '1/3 of the feeder OCPD', '125% of the feeder rating', 'The feeder ampacity'], w: '240.21(B)(1)(1).', r: '240.21(B)' },
    { l: 'taps', q: 'In a high-bay manufacturing building over 35 ft high at the walls, a feeder tap may run up to 25 ft horizontally and ___ total.', c: ['100 ft', '50 ft', '35 ft', '75 ft'], w: '240.21(B)(4). The tap is made at least 30 ft above the floor, and only qualified persons service the system.', r: '240.21(B)' },
    { l: 'taps', q: 'An outside feeder tap that meets 240.21(B)(5) is limited in length to:', c: ['No limit (unlimited length)', '25 ft', '100 ft', '10 ft'], w: '240.21(B)(5) Outside taps of unlimited length.', r: '240.21(B)' },
    { l: 'taps', q: 'Transformer secondary conductors up to 25 ft long must have ampacity at least the primary-to-secondary voltage ratio times ___ of the primary OCPD rating.', c: ['1/3', '1/10', '1/2', '1/4'], w: '240.21(C)(6).', r: '240.21(C)' },
    { l: 'taps', q: 'Can the next-size-up rule be used for transformer secondary conductors?', c: ['No', 'Yes', 'Only up to 800 A', 'Only for 10 ft taps'], w: '240.21(C): 240.4(B) shall not be permitted for transformer secondary conductors.', r: '240.21(C)' },
    { t: 'find', l: 'taps', q: 'Where are the transformer secondary conductor rules (10 ft and 25 ft)?', c: ['240.21(C)', '240.21(B)', '450.3', '240.4(F)'], w: '240.21(C). 240.21(B) is feeder taps; 450.3 is transformer OCPD.', r: '240.21(C)' },
    { t: 'find', l: 'taps', q: 'Where is the rule that a vertically operated breaker handle must be on in the up position?', c: ['240.81', '240.33', '404.7', '240.83'], w: '240.81 Indicating.', r: '240.81' },
    { t: 'find', l: 'taps', q: 'Where is the rule for slash-rated breakers like 120/240 V and 480Y/277 V?', c: ['240.85', '240.83', '240.86', '110.9'], w: '240.85 Applications. 240.86 is series ratings.', r: '240.85' },
    { t: 'find', l: 'taps', q: 'Where is the table of standard OCPD ratings?', c: ['Table 240.6(A)', 'Table 240.4(G)', 'Table 310.16', 'Table 430.52'], w: 'Table 240.6(A).', r: 'Table 240.6(A)' },
    { t: 'find', l: 'taps', q: 'Where are the feeder tap rules?', c: ['240.21(B)', '240.4(E)', '210.19', '430.28'], w: '240.21(B).', r: '240.21(B)' },
    { t: 'find', l: 'taps', q: 'Where is the "small conductor rule"?', c: ['240.4(D)', '310.16', '210.19(A)', '240.6'], w: '240.4(D).', r: '240.4(D)' }
  ]
});
