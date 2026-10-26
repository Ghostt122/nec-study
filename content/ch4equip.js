(window.MODULES ||= []).push({
  id: 'equip', icon: '💡', title: 'Chapter 4: Cords, Devices, Panels, Lights (400–424)',
  blurb: 'Flexible cords, switches and receptacles, panelboards, luminaires, and appliances.',
  lessons: [
    {
      id: 'cords', title: 'Flexible cords (400)',
      html: `
<p>Cords are for things that move, vibrate, or get unplugged, not a shortcut around real wiring.</p>
<h3>Allowed uses [[400.10]]</h3>
<p>Pendants, wiring of luminaires, portable and mobile equipment, elevator cables, cranes and hoists, equipment that's frequently interchanged, preventing noise or vibration transmission, appliances designed to be removed for maintenance, connecting moving parts, and where specifically permitted elsewhere. When used for portable equipment, frequently interchanged equipment, or removable appliances, the cord needs an attachment plug and must be fed from a receptacle.</p>
<h3>Not allowed [[400.12]]</h3>
<ol>
<li>As a substitute for the fixed wiring of a building</li>
<li>Run through holes in walls, ceilings (including drop ceilings), or floors</li>
<li>Run through doorways, windows, or similar openings</li>
<li>Attached to building surfaces</li>
<li>Concealed by walls, floors, or ceilings, or above suspended ceilings</li>
<li>Installed in raceways (unless permitted elsewhere)</li>
<li>Where subject to physical damage</li>
</ol>
<ul>
<li><b>Strain relief</b>: cords are connected so pull isn't transmitted to joints or terminals ([[400.14]]). Use cord grips. Knotting or taping are examples in the informational note.</li>
<li>Cord ampacities are in [[Table 400.5(A)(1)]] (not 310.16).</li>
</ul>
<div class="job"><b>On the job</b>Zip-tying an extension cord across the ceiling to power a printer is a 400.12 violation three times over: it substitutes for fixed wiring, it's attached to the building, and it's above a ceiling. Install a receptacle.</div>`
    },
    {
      id: 'switches', title: 'Switches (404 and 406)',
      html: `
<p>In the 2026 NEC, <b>general-use snap switches</b> (regular light switches), dimmers, and control switches moved into <b>Article 406</b> (Wiring Devices). Article 404 now mostly covers knife switches, enclosed switches, and similar.</p>
<ul>
<li><b>Hot side only</b>: 3-way and 4-way switches switch only the ungrounded conductor. In metal raceways, keep the travelers with the circuit (300.22). Switches can't open the neutral unless they open all conductors together ([[406.30]]).</li>
<li><b>Neutral at the switch</b>: at switch locations controlling lighting in bathrooms, hallways, stairways, and habitable rooms, bring a <b>neutral</b> to the switch box (for smart switches and occupancy sensors), with listed exceptions ([[406.30(C)]]).</li>
<li><b>Height</b>: operable from a readily accessible place, with the handle in its highest position no more than <b>6 ft 7 in.</b> above the floor ([[406.38(A)]]). Exception: switches next to the motor or equipment they serve.</li>
<li><b>300 V between devices</b>: snap switches ganged with other devices in one box can't have more than <b>300 V</b> between adjacent devices unless there's an identified barrier ([[406.38(B)]]). For example, a 277 V switch next to a 120 V receptacle on different phases of a 480Y/277 system needs a barrier.</li>
<li>Switches go in boxes and are externally operable ([[406.32]]). Metal switch enclosures are connected to the EGC ([[406.44]]).</li>
<li><b>Ratings</b> ([[406.46]]): AC general-use snap switches can control resistive and inductive loads up to their rating, LED and electronic driver loads up to 20 A and the switch rating, and <b>motor loads up to 80%</b> of the switch rating.</li>
<li>Circuit breakers used as switches for lighting must be marked SWD or HID ([[240.83(D)]]).</li>
</ul>
<h3>Damp and wet locations</h3>
<p>Surface switches in damp locations go in weatherproof enclosures. Flush switches get weatherproof covers ([[406.9]]).</p>`
    },
    {
      id: 'receptacles', title: 'Receptacles (406)',
      html: `
<ul>
<li><b>Grounding type</b>: receptacles on 15 and 20 A circuits must be the grounding type, and their ground contacts connected to the EGC ([[406.12]]).</li>
<li><b>Controlled receptacles</b> (switched or energy-management controlled) are marked with the word "controlled" and the controlled symbol on the face ([[406.11]]).</li>
<li><b>Mounting</b>: in boxes set back (allowed up to ¼ in.), the yoke must be held rigidly at the finished surface. Receptacle faces must be flush with or stick out from insulating faceplates, and stick out at least 0.015 in. from metal plates ([[406.14]]).</li>
</ul>
<h3>Replacing receptacles [[406.12(D)]]</h3>
<ul>
<li>If a ground exists in the box, replace with a grounding-type receptacle connected to it.</li>
<li><b>No ground in an old box</b>: replace with (a) another non-grounding receptacle, (b) a GFCI receptacle marked <b>"No Equipment Ground"</b>, or (c) a grounding-type receptacle fed through a GFCI, marked <b>"GFCI Protected"</b> and <b>"No Equipment Ground"</b>. Don't run a ground wire from the GFCI to downstream receptacles.</li>
<li>Replacements where GFCI is now required must get GFCI protection. Replacements in AFCI-required areas need AFCI protection (with some exceptions). Replacements where tamper-resistant or weather-resistant receptacles are required must be TR or WR.</li>
</ul>
<h3>Tamper-resistant (TR) [[406.26]]</h3>
<p>All 15 and 20 A, 125 and 250 V nonlocking receptacles must be TR in: dwelling units (including garages and accessory buildings), hotel and motel guest rooms, child care facilities, preschools and schools, waiting areas and public offices of clinics, transportation waiting areas, gyms, auditoriums, dormitories, assisted living, nursing homes, and more.</p>
<h3>Damp and wet locations [[406.9]]</h3>
<ul>
<li><b>Damp</b> (covered porch): enclosure weatherproof with the cover closed and no plug inserted. 15 and 20 A receptacles must be listed <b>weather-resistant (WR)</b>.</li>
<li><b>Wet</b>: 15 and 20 A receptacles need an enclosure that's weatherproof <b>whether or not a plug is inserted</b> (an "in-use" or "bubble" cover). The outlet box hood must be listed and identified as <b>extra-duty</b>.</li>
</ul>`
    },
    {
      id: 'panels', title: 'Panelboards and switchboards (408)',
      html: `
<ul>
<li><b>Circuit directory</b>: every circuit must be clearly and specifically described, including spares. "Lights" or "Kitchen" isn't specific. Descriptions can't depend on who lives in a room ("Bobby's room") ([[408.4(A)]]).</li>
<li><b>Source of supply</b>: panels fed by feeders in other than one- or two-family dwellings must be marked with where the power comes from (for example, "Fed from MDP, Elec Rm 101"), on a permanent label that isn't handwritten ([[408.4(B)]]).</li>
<li><b>Overcurrent protection</b>: a panelboard must be protected by an OCPD rated no more than the panelboard rating, located in the panel or ahead of it ([[408.36]]). Panels fed through a transformer get their protection on the secondary side.</li>
<li><b>Unused openings</b> for breakers must be closed with identified closures (blank fillers) ([[408.7]]).</li>
<li><b>Grounding</b>: metal panel cabinets are connected to the EGC, with an equipment grounding terminal bar bonded to the cabinet. EGCs don't go on the neutral bar except where neutral-to-ground bonding is allowed, at the service ([[408.40]]).</li>
<li><b>One neutral per terminal</b>: each neutral gets its own terminal, not doubled up (except parallel conductors on a terminal identified for it) ([[408.41]]).</li>
<li>A panel can't have more breakers installed than it's designed, rated, and listed for; a 2-pole breaker counts as two ([[408.54]]).</li>
<li><b>Reconditioned panelboards</b> are not permitted ([[408.3]]).</li>
</ul>
<div class="job"><b>On the job</b>Typing up a neat panel schedule with specific descriptions ("Rm 204 receptacles, north wall") is part of the job, and inspectors do read them.</div>`
    },
    {
      id: 'lights', title: 'Luminaires (410)',
      html: `
<h3>Bathtubs and showers [[410.10(D)]]</h3>
<p>No cord-connected, chain-, cable-, or cord-hung luminaires, track lighting, pendants, or ceiling fans with light kits within <b>3 ft horizontally and 8 ft vertically</b> from the top of the tub rim or shower threshold. Luminaires within the actual tub or shower footprint up to 8 ft must be marked for damp or wet locations, and <b>wet</b> if subject to shower spray.</p>
<h3>Clothes closets [[410.16]]</h3>
<ul>
<li>Allowed: surface or recessed LED or incandescent with a <b>completely enclosed</b> light source, and fluorescent. Not allowed: open or partially enclosed lamps and pendants.</li>
<li>Clearance to the storage space: <b>12 in.</b> for surface incandescent or LED with enclosed source. <b>6 in.</b> for surface fluorescent, recessed incandescent or LED with enclosed source, and recessed fluorescent ([[410.16(D)]]).</li>
</ul>
<h3>Support</h3>
<ul>
<li>Luminaires may be supported by outlet boxes installed per 314.23 and listed for luminaire support ([[410.36(A)]]).</li>
<li><b>Lay-in fixtures</b>: the ceiling grid must be fastened together and to the building structure, and luminaires fastened to the grid with bolts, screws, rivets, or <b>listed clips</b> ([[410.36(B)]]).</li>
</ul>
<h3>Recessed luminaires (cans)</h3>
<ul>
<li><b>Non-IC</b> cans: recessed parts at least <b>½ in.</b> from combustibles. Insulation must be kept <b>3 in.</b> away and not over the top. <b>IC-rated</b> cans may touch insulation ([[410.116]]).</li>
<li>Recessed incandescent fixtures must be thermally protected ([[410.115(B)]]).</li>
<li><b>Fixture whips</b>: tap conductors from the luminaire to a junction box at least <b>1 ft</b> away, in raceway or AC or MC cable at least <b>18 in.</b> and no more than <b>6 ft</b> long ([[410.117(C)]]).</li>
</ul>
<h3>Disconnects for fluorescent and LED fixtures [[410.71]]</h3>
<p>Indoors in other than dwellings, fluorescent and LED fixtures with double-ended lamps and ballasts or drivers that can be serviced in place need a disconnect, internal or external (the little in-line plug connector). Required when replacing a ballast or driver in existing fixtures too.</p>`
    },
    {
      id: 'appliances', title: 'Appliances (422)',
      html: `
<ul>
<li><b>Water heaters</b>: fixed storage water heaters of 120 gal or less are considered <b>continuous loads</b> ([[422.13]]), so the branch circuit is sized at 125%.</li>
<li><b>Overcurrent protection</b> for a single non-motor appliance: not over the rating marked on it. If unmarked: 20 A max for appliances 13.3 A or less, or 150% of the rating for appliances over 13.3 A ([[422.11(E)]]).</li>
<li><b>Cord-and-plug connection</b> ([[422.16(B)]]):
  <ul><li><b>Disposals</b>: cord 18 in. to 36 in. long.</li>
  <li><b>Built-in dishwashers</b>: cord 3 ft to 6½ ft, receptacle in the space <b>adjacent</b> to the dishwasher.</li>
  <li><b>Trash compactors</b>: cord 3 ft to 4 ft, receptacle in or next to the appliance space.</li>
  <li>Receptacles must be accessible and protected from damage. Cords through cabinet openings get a bushing or grommet.</li></ul></li>
<li><b>Disconnects</b>: for permanently connected appliances not over ⅛ hp (or any VA rating), the branch-circuit breaker can be the disconnect if it's <b>within sight</b> or <b>lockable</b> per 110.25 ([[422.31]]).</li>
</ul>
<p>Fixed electric space heating (baseboard and unit heaters) is in [[Art 424]]. It's considered a <b>continuous load</b> ([[424.5]]), so circuits are sized at 125%. Branch circuits with two or more heater outlets are limited to <b>30 A</b> ([[424.4]]).</p>`
    }
  ],
  questions: [
    { l: 'cords', q: 'Flexible cords may be used as a substitute for the fixed wiring of a structure.', c: ['False', 'True', 'True if 12 AWG', 'True in dwellings'], w: '400.12(1).', r: '400.12' },
    { l: 'cords', q: 'Flexible cords may be run above a suspended ceiling.', c: ['False (except in a listed enclosure in other environmental air spaces)', 'True', 'True if secured', 'True for luminaires'], w: '400.12(5).', r: '400.12' },
    { l: 'cords', q: 'Which is a permitted use of flexible cord?', c: ['Connection of moving parts', 'Through a hole in a wall', 'Stapled to a wall', 'Inside a raceway (generally)'], w: '400.10(A)(9).', r: '400.10' },
    { l: 'cords', q: 'Flexible cords must be connected so that tension is not transmitted to:', c: ['Joints or terminals', 'The plug blades', 'The receptacle', 'The cord jacket'], w: '400.14.', r: '400.14' },
    { l: 'cords', q: 'Flexible cords may be run through doorways.', c: ['False', 'True', 'True if protected', 'True temporarily'], w: '400.12(3).', r: '400.12' },
    { l: 'switches', q: 'In the 2026 NEC, general-use snap switch installation rules are mainly in Article:', c: ['406', '404', '410', '210'], w: 'Snap switches, dimmers, and control switches moved into 406.', r: 'Art 406' },
    { l: 'switches', q: 'The operating handle of a switch in its highest position may be no more than ___ above the floor.', c: ['6 ft 7 in.', '6 ft', '5 ft 6 in.', '7 ft'], w: '406.38(A)(2).', r: '406.38(A)' },
    { l: 'switches', q: 'Snap switches ganged with other devices: voltage between adjacent devices may not exceed ___ unless barriers are installed.', c: ['300 V', '150 V', '250 V', '600 V'], w: '406.38(B).', r: '406.38(B)' },
    { l: 'switches', q: 'Three-way and four-way switches must switch:', c: ['Only the ungrounded conductor', 'The neutral', 'Both conductors', 'The EGC'], w: '406.30(A).', r: '406.30' },
    { l: 'switches', q: 'An AC general-use snap switch may control a motor load of up to ___ of its ampere rating.', c: ['80%', '100%', '50%', '125%'], w: '406.46(A)(4).', r: '406.46' },
    { l: 'switches', q: 'A neutral is generally required at switch locations controlling lighting in:', c: ['Bathrooms, hallways, stairways, and habitable rooms', 'Only kitchens', 'Only commercial buildings', 'Nowhere'], w: '406.30(C).', r: '406.30' },
    { l: 'receptacles', q: 'Receptacles on 15 and 20 A branch circuits must be:', c: ['Grounding type', 'GFCI type', 'Tamper-resistant everywhere', '20 A rated'], w: '406.12(A).', r: '406.12' },
    { l: 'receptacles', q: 'Replacing a two-prong receptacle where no ground exists with a GFCI receptacle requires marking:', c: ['"No Equipment Ground"', '"GFCI"', '"Ungrounded Circuit"', 'Nothing'], w: '406.12(D)(2)(b).', r: '406.12(D)' },
    { l: 'receptacles', q: 'A three-prong receptacle fed through a GFCI (no ground present) must be marked:', c: ['"GFCI Protected" and "No Equipment Ground"', '"No Equipment Ground" only', '"GFCI Protected" only', 'Nothing'], w: '406.12(D)(2)(c).', r: '406.12(D)' },
    { l: 'receptacles', q: 'In dwelling units, 15 and 20 A, 125 and 250 V nonlocking receptacles must be:', c: ['Tamper-resistant', 'Weather-resistant', 'Isolated ground', 'Hospital grade'], w: '406.26(1).', r: '406.26' },
    { l: 'receptacles', q: 'Which location requires tamper-resistant receptacles?', c: ['Child care facilities', 'Industrial plants', 'Electrical rooms', 'Rooftops'], w: '406.26(3).', r: '406.26' },
    { l: 'receptacles', q: '15 and 20 A receptacles in a wet location need an enclosure that is weatherproof:', c: ['Whether or not a plug is inserted', 'Only with the cover closed', 'Only when unused', 'Never required'], w: '406.9(B)(1)(a).', r: '406.9' },
    { l: 'receptacles', q: 'Outlet box hoods for 15 and 20 A receptacles in wet locations must be listed and identified as:', c: ['Extra-duty', 'Heavy-duty', 'Raintight', 'Rainproof'], w: '406.9(B)(1)(b).', r: '406.9' },
    { l: 'receptacles', q: '15 and 20 A, 125 and 250 V nonlocking receptacles in damp locations must be listed:', c: ['Weather-resistant', 'Tamper-resistant', 'Hospital grade', 'Extra-duty'], w: '406.9(A)(1)(c).', r: '406.9' },
    { l: 'receptacles', q: 'Receptacle faces must project at least ___ from metal faceplates.', c: ['0.015 in.', '⅛ in.', '1/16 in.', '0.005 in.'], w: '406.14(D).', r: '406.14' },
    { v: 1, l: 'panels', q: 'Which panel directory description is acceptable?', c: ['"Room 204 receptacles, north wall"', '"Bobby\'s room"', '"Misc."', '"Lights"'], w: 'Clear, evident, specific; not dependent on transient occupancy.', r: '408.4(A)' },
    { l: 'panels', q: 'In a commercial building, a feeder-supplied panelboard must be marked with:', c: ['Where its power originates', 'The installer\'s name', 'The date of installation', 'The utility account'], w: '408.4(B), not handwritten.', r: '408.4' },
    { l: 'panels', q: 'A panelboard must be protected by an OCPD rated:', c: ['Not greater than the panelboard rating', 'At 125% of the panel', 'At the feeder ampacity only', 'At 80% of the panel'], w: '408.36.', r: '408.36' },
    { l: 'panels', q: 'Each neutral in a panelboard must terminate:', c: ['In an individual terminal', 'Two per terminal', 'On the ground bar', 'Anywhere'], w: '408.41.', r: '408.41' },
    { l: 'panels', q: 'Reconditioned panelboards are permitted to be installed.', c: ['False', 'True', 'True if listed', 'True in existing buildings'], w: '408.3(B).', r: '408.3' },
    { l: 'panels', q: 'Unused breaker openings in a panel must be closed with:', c: ['Identified closures', 'Tape', 'Cardboard', 'Nothing'], w: '408.7.', r: '408.7' },
    { l: 'lights', q: 'Pendants and cord-connected luminaires are prohibited within ___ horizontally of a bathtub rim.', c: ['3 ft', '6 ft', '8 ft', '5 ft'], w: '410.10(D): 3 ft horizontally and 8 ft vertically.', r: '410.10(D)' },
    { l: 'lights', q: 'The prohibited zone above a bathtub extends ___ vertically from the rim.', c: ['8 ft', '6 ft', '7 ft', '10 ft'], w: '410.10(D).', r: '410.10(D)' },
    { l: 'lights', q: 'A luminaire in a shower subject to shower spray must be marked suitable for:', c: ['Wet locations', 'Damp locations', 'Dry locations', 'Hazardous locations'], w: '410.10(D)(2).', r: '410.10(D)' },
    { l: 'lights', q: 'Clearance from a surface-mounted LED closet light (enclosed source) to the storage space:', c: ['12 in.', '6 in.', '18 in.', '3 in.'], w: '410.16(D)(1).', r: '410.16(D)' },
    { l: 'lights', q: 'Clearance from a recessed LED closet light (enclosed source) to the storage space:', c: ['6 in.', '12 in.', '3 in.', '18 in.'], w: '410.16(D)(3).', r: '410.16(D)' },
    { l: 'lights', q: 'Lay-in luminaires must be fastened to the ceiling grid by:', c: ['Bolts, screws, rivets, or listed clips', 'Resting on the grid', 'Tie wire', 'Tape'], w: '410.36(B).', r: '410.36(B)' },
    { l: 'lights', q: 'A non-IC recessed luminaire must have recessed parts at least ___ from combustibles.', c: ['½ in.', '3 in.', '1 in.', '¼ in.'], w: '410.116(A)(1).', r: '410.116(A)' },
    { l: 'lights', q: 'Thermal insulation must be kept at least ___ from a non-IC recessed luminaire.', c: ['3 in.', '½ in.', '6 in.', '12 in.'], w: '410.116(B).', r: '410.116' },
    { l: 'lights', q: 'Fixture tap conductors in raceway or AC/MC cable must be at least 18 in. and no more than ___ long.', c: ['6 ft', '4 ft', '10 ft', '3 ft'], w: '410.117(C).', r: '410.117(C)' },
    { l: 'lights', q: 'Indoors in commercial buildings, fluorescent and LED fixtures with serviceable ballasts or drivers and double-ended lamps need:', c: ['A disconnecting means', 'A GFCI', 'An AFCI', 'A dedicated circuit'], w: '410.71(A).', r: '410.71' },
    { l: 'appliances', q: 'Fixed storage water heaters of 120 gal or less are considered:', c: ['Continuous loads', 'Noncontinuous loads', 'Motor loads', 'Optional loads'], w: '422.13.', r: '422.13' },
    { l: 'appliances', q: 'A cord-connected disposal\'s cord must be:', c: ['18 in. to 36 in. long', '3 ft to 6½ ft long', '6 ft max', '12 in. to 24 in.'], w: '422.16(B)(1).', r: '422.16(B)' },
    { l: 'appliances', q: 'A built-in dishwasher\'s cord must be:', c: ['3 ft to 6½ ft long', '18 in. to 36 in.', '3 ft to 4 ft', '6 ft max'], w: '422.16(B)(2).', r: '422.16(B)' },
    { l: 'appliances', q: 'The receptacle for a built-in dishwasher must be located:', c: ['In the space adjacent to the dishwasher', 'Behind the dishwasher', 'Above the counter', 'Within 6 ft of the sink'], w: '422.16(B)(2).', r: '422.16(B)' },
    { v: 1, l: 'appliances', q: 'Unmarked single non-motor appliance rated 16 A: max OCPD is generally:', c: ['150% of 16 A, rounded per the rule', '20 A', '16 A', '30 A'], w: '422.11(E)(3): 150% of rated current if over 13.3 A and not marked.', r: '422.11(E)' },
    { t: 'find', l: 'appliances', q: 'Where are tamper-resistant receptacle requirements?', c: ['406.26', '406.12', '210.52', '406.9'], w: '406.26.', r: '406.26' },
    { t: 'find', l: 'appliances', q: 'Where are luminaire rules for clothes closets?', c: ['410.16', '410.10', '410.116', '210.70'], w: '410.16.', r: '410.16' },
    { t: 'find', l: 'appliances', q: 'Where is the panel circuit directory requirement?', c: ['408.4', '110.22', '408.36', '408.58'], w: '408.4.', r: '408.4' },
    { t: 'find', l: 'appliances', q: 'Where are uses NOT permitted for flexible cords?', c: ['400.12', '400.10', '400.14', '590.4'], w: '400.12.', r: '400.12' }
  ]
});
