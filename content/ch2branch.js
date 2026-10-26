(window.MODULES ||= []).push({
  id: 'branch', icon: '🔌', title: 'Chapter 2: Branch Circuits & Feeders (200, 210, 215)',
  blurb: 'Neutrals, multiwire circuits, GFCI, AFCI, the 125% rule, receptacle and lighting outlets, feeders.',
  lessons: [
    {
      id: 'neutral', title: 'The neutral (Article 200)',
      html: `
<ul>
<li><b>One neutral per circuit</b>: a neutral can't be shared by more than one branch circuit, multiwire branch circuit, or set of feeder conductors unless the code specifically allows it ([[200.6(A)]]).</li>
<li><b>Group them</b>: where neutrals of different circuits are in the same box or panel, each neutral must be grouped or marked with its hots (wire markers, zip ties) in at least one place in the enclosure ([[200.6(B)]]). That way nobody lands the wrong neutral.</li>
<li><b>6 AWG and smaller</b>: the neutral is identified by a continuous <b>white</b> or <b>gray</b> outer finish, or three continuous white or gray stripes on other than green insulation ([[200.7(A)]]).</li>
<li><b>4 AWG and larger</b>: same options, <b>plus</b> a wire of another color (like black) can be re-identified at installation with a distinctive white or gray marking (tape) that encircles the insulation at its terminations ([[200.7(B)]]).</li>
<li><b>Two systems in one place</b> (like 208Y/120 and 480Y/277 in the same raceway or box): each system's neutral must be distinguishable, such as white for one and gray for the other, or white with a colored stripe ([[200.7(D)]]).</li>
<li><b>White used as a hot</b>: in a cable assembly (like NM or MC), a white conductor can be used as a hot only if it's re-identified (tape or paint, not white, gray, or green) at every termination and wherever visible. In a switch loop, the re-identified white may be the <b>supply to the switch</b>, not the return to the light ([[200.8(C)]]).</li>
<li><b>Polarity</b>: never connect the neutral so it reverses polarity ([[200.11]]). The neutral goes to the silver screw.</li>
</ul>`
    },
    {
      id: 'mwbc', title: 'Multiwire branch circuits and identification',
      html: `
<p>A <b>multiwire branch circuit (MWBC)</b> is two or three hots sharing one neutral: for example black, red, and blue with one white on a 208Y/120 V system.</p>
<ul>
<li>All conductors of an MWBC must come from the same panel or equipment ([[210.4(A)]]).</li>
<li>It needs a means to <b>simultaneously disconnect all hots</b> where it originates: a 2-pole or 3-pole breaker, or single-pole breakers with <b>identified</b> handle ties ([[210.4(B)]], [[240.15(B)]]).</li>
<li>MWBCs supply only line-to-neutral loads, unless they feed one piece of equipment or the breaker opens all hots at once ([[210.4(C)]]).</li>
<li>The hots and neutral of each MWBC must be grouped together in the panel ([[210.4(D)]]).</li>
<li><b>Two circuits on one yoke</b> (like a split-wired duplex fed by two circuits): you also need a means to simultaneously disconnect the hots where the circuits originate ([[210.7]]).</li>
</ul>
<div class="warn"><b>Why it matters</b>If the shared neutral is opened while the circuit is live (pulling a device, or a loose wire nut), the loads end up in series across 208 V or 240 V. Things burn up, and you can get shocked from the "neutral." Never break a shared neutral under load.</div>
<h3>Identifying hots</h3>
<p>If a building has more than one voltage system (common in commercial: 480Y/277 and 208Y/120), every hot must be identified by <b>phase and system</b> at every termination, connection, and splice, and the color scheme must be <b>posted at each panel</b> or documented ([[210.5(C)]]). The posting can't be handwritten. Feeders have the same rule in [[215.12(C)]].</p>
<div class="job"><b>On the job</b>Typical scheme: 208Y/120 V = black/red/blue, white neutral. 480Y/277 V = brown/orange/yellow, gray neutral. Your job's spec or the panel label tells you which.</div>`
    },
    {
      id: 'gfci', title: 'GFCI protection (210.8)',
      html: `
<p>GFCIs must be listed <b>Class A</b> and installed in a <b>readily accessible</b> location ([[210.8]]). Exception: the GFCI for a rooftop receptacle only has to be readily accessible from the rooftop. Distances from sinks and tubs are measured as the shortest path the cord would follow, without piercing a floor, wall, ceiling, or fixed barrier (so not through a door or wall).</p>
<h3>Dwelling units [[210.8(A)]]</h3>
<p>All 125–250 V receptacles on single-phase circuits 150 V or less to ground in: bathrooms, garages, accessory buildings (storage/work areas), outdoors, crawl spaces at or below grade, basements, kitchens, areas with sinks and food/drink prep or cooking, within 6 ft of a sink, boathouses, within 6 ft of a tub or shower, laundry areas, and indoor damp or wet locations.</p>
<h3>Other than dwelling units [[210.8(B)]]</h3>
<p>All 125–250 V receptacles on single-phase circuits 150 V or less to ground and 50 A or less (and three-phase circuits 150 V or less to ground, 100 A or less) in:</p>
<ul>
<li>Bathrooms, kitchens, areas with sinks and food/drink prep or cooking, buffet serving areas</li>
<li><b>Rooftops</b> and <b>outdoors</b></li>
<li>Within 6 ft of a sink (receptacles or cord-connected appliances)</li>
<li>Indoor damp and wet locations, locker rooms with showers</li>
<li>Garages, accessory buildings, service bays</li>
<li>Crawl spaces at or below grade, <b>unfinished areas</b> of basements</li>
<li>Within 6 ft of aquariums, bait wells, and similar tanks</li>
<li>Laundry areas; within 6 ft of a tub or shower</li>
</ul>
<p><b>Industrial exception</b>: at industrial plants where only qualified personnel are involved, if cutting power to outdoor fixed or stationary cord-and-plug equipment would create a greater hazard (or the equipment can't work with a GFCI), an <b>assured equipment grounding conductor program</b> may be used instead of GFCI ([[210.8(B)]] Exception No. 2).</p>
<h3>Specific appliances [[210.8(D)]]</h3>
<p>The branch circuit or outlet for these (single- or 3-phase, 150 V or less to ground, 60 A or less) needs GFCI: automotive vacuum machines, drinking water coolers and bottle fill stations, high-pressure spray washers, tire inflation machines, vending machines, sump pumps, dishwashers, electric ranges, wall-mounted ovens, counter-mounted cooking units, clothes dryers, and microwave ovens. These apply in any occupancy, not just homes.</p>
<h3>Also</h3>
<ul>
<li>Lighting outlets in crawl spaces, 120 V or less ([[210.8(C)]]).</li>
<li>The service receptacle for HVAC equipment ([[210.8(E)]], [[210.63]]).</li>
<li>Dwelling outdoor outlets, not just receptacles (single-phase, 150 V or less to ground, 60 A or less) ([[210.8(F)]]). Lighting outlets are exempt (other than crawl spaces). For listed HVAC equipment, the 2026 book has an exception that <b>expired September 1, 2026</b>, and another that allows a listed <b>Class C SPGFCI</b> instead, with a warning label at the HVAC disconnect. <b>Texas amendment</b> (from the state adoption, 16 TAC §73.100, not printed in your book): Texas does not require GFCI for outdoor HVAC outlets at dwellings under this rule. Cities can add their own amendments, so check yours.</li>
</ul>`
    },
    {
      id: 'afci', title: 'AFCI and surge protection',
      html: `
<p>An <b>AFCI</b> (arc-fault circuit interrupter) detects arcing from damaged cords and loose connections, a common cause of house fires. It must be listed and readily accessible ([[210.12]]).</p>
<ul>
<li><b>Dwelling units</b>: all 120 V, single-phase, 10, 15, and 20 A branch circuits supplying outlets or devices in kitchens, family rooms, dining rooms, living rooms, parlors, libraries, dens, bedrooms, sunrooms, recreation rooms, closets, hallways, laundry areas, and similar areas ([[210.12(B)]]). Not bathrooms, garages, or outdoors (those need GFCI).</li>
<li>Dormitory units have their own list ([[210.12(C)]]). <b>Other occupancies</b>: hotel and motel guest rooms, patient sleeping rooms in nursing homes, and sleeping quarters in fire and police stations ([[210.12(D)]]).</li>
<li>The usual method is a <b>combination-type AFCI breaker</b> at the panel ([[210.12(A)]]).</li>
<li><b>Extending or modifying</b> a circuit in those areas: add AFCI protection (a breaker, or an outlet-type AFCI at the first outlet). There's no AFCI needed if the extension is 6 ft or less with no added outlets or devices ([[210.12(E)]]).</li>
</ul>
<h3>Surge protection</h3>
<p>Feeders supplying dwelling units, dormitories, hotel guest rooms, nursing home sleeping rooms, and fire and police station sleeping quarters need a <b>Type 1 or Type 2 SPD</b> in or next to the distribution equipment that holds the branch-circuit breakers for those areas. The SPD must have a nominal discharge current rating (In) of at least <b>10 kA</b>, and replacing that equipment triggers the rule ([[215.18]]). Services to these occupancies have a similar rule ([[230.67]]).</p>`
    },
    {
      id: 'sizing', title: 'Sizing branch circuits: the 125% rule',
      html: `
<p>A <b>continuous load</b> runs at its max current for <b>3 hours or more</b> (store lighting, office lighting, heaters) ([[Art 100]]).</p>
<ul>
<li><b>Conductors</b>: ampacity at least the <b>noncontinuous load + 125% of the continuous load</b> ([[210.19(A)]]).</li>
<li><b>Breaker</b>: rating at least the noncontinuous load + 125% of the continuous load ([[210.20(A)]]).</li>
<li>Exception for both: if the assembly is listed for 100% operation, you can use 100%. Most standard breakers aren't, so use 125%.</li>
</ul>
<div class="tip"><b>Example</b>16 A of continuous lighting: 16 × 1.25 = 20 A. You need a 20 A breaker and conductors good for at least 20 A, so 12 AWG copper.<br>
Flip side: a 20 A circuit can carry only 20 ÷ 1.25 = <b>16 A</b> of continuous load. That's the "80% rule" you'll hear about.</div>
<h3>Circuit ratings</h3>
<ul>
<li>A branch circuit's rating is set by its breaker, not its wire. Circuits with more than one outlet are rated <b>10, 15, 20, 30, 40, or 50 A</b> ([[210.18]]). 10 A circuits can't supply receptacles.</li>
<li>Ranges of 8¾ kW or more: minimum 40 A branch circuit ([[210.19(C)]]). Taps from a range circuit of 50 A or less to a wall oven or cooktop: at least 20 A ampacity. The range neutral may be smaller than the hots, but at least 70% of the circuit rating and not smaller than 10 AWG.</li>
<li>Other branch-circuit conductors: not smaller than <b>14 AWG</b> (fixture wire and cords excepted) ([[210.19(D)]]).</li>
<li>Circuits with more than one receptacle for cord-and-plug portable loads: conductor ampacity at least the circuit rating ([[210.19(B)]]).</li>
</ul>
<h3>Receptacles</h3>
<ul>
<li>A <b>single receptacle</b> on an individual branch circuit must be rated at least the circuit rating ([[210.21(B)]]). A single 15 A receptacle on a 20 A individual circuit is not allowed, but a <b>duplex</b> 15 A receptacle on a 20 A circuit is, since it's two receptacles.</li>
<li>On a circuit with two or more receptacles: 15 A circuit takes 15 A receptacles; 20 A circuit takes 15 or 20 A; 30 A takes 30 A; 40 A takes 40 or 50 A; 50 A takes 50 A ([[Table 210.21(B)(3)]]).</li>
<li>Max cord-and-plug load on a receptacle on a multi-outlet circuit: 15 A receptacle 12 A, 20 A receptacle 16 A, 30 A receptacle 24 A ([[Table 210.21(B)(2)]]).</li>
</ul>
<h3>What a circuit can feed [[210.23]]</h3>
<ul>
<li><b>10 A</b>: only lighting outlets, plus dwelling exhaust fans on bathroom and laundry room lighting circuits.</li>
<li><b>15 or 20 A</b>: lighting, other utilization equipment, or both. One cord-connected appliance not fastened in place can't exceed <b>80%</b> of the circuit rating. Equipment fastened in place (not lights) can't exceed <b>50%</b> of the rating if lights or plug-in loads are on the same circuit.</li>
<li><b>30 A</b>: fixed lighting with heavy-duty lampholders (not in dwellings) or utilization equipment in any occupancy. One cord-connected appliance: 80% max.</li>
<li><b>40 or 50 A</b>: fastened-in-place cooking appliances in any occupancy. In other than dwellings, also fixed lighting with heavy-duty lampholders, infrared heaters, or other utilization equipment.</li>
<li><b>Over 50 A</b>: nonlighting outlet loads only.</li>
</ul>`
    },
    {
      id: 'dwelling', title: 'Required outlets in homes (210.11, 210.52, 210.70)',
      html: `
<h3>Required circuits [[210.11(C)]]</h3>
<ul>
<li><b>Two or more 20 A small-appliance circuits</b> for kitchen, pantry, breakfast, and dining area receptacles. No other outlets on them.</li>
<li>At least one <b>20 A laundry</b> circuit, with no other outlets.</li>
<li>At least one <b>20 A bathroom receptacle</b> circuit. It can feed only bathroom receptacles, or everything in one single bathroom.</li>
<li>At least one <b>20 A garage</b> circuit (it may also feed outdoor receptacles).</li>
</ul>
<h3>Receptacle placement [[210.52]]</h3>
<ul>
<li><b>Living areas</b>: no point along the floor line of any wall space more than <b>6 ft</b> from a receptacle. Any wall space <b>2 ft</b> or wider counts ([[210.52(A)]]). Floor receptacles count only if within 18 in. of the wall.</li>
<li><b>Kitchen countertops</b> 12 in. or wider: no point along the wall line more than <b>24 in.</b> from a receptacle. Receptacles go no more than <b>20 in.</b> above the counter, or in the counter if listed for it ([[210.52(C)]]). Islands and peninsulas: if no receptacle is installed, provisions must be left for a future one.</li>
<li><b>Bathrooms</b>: at least one receptacle within <b>3 ft</b> of the outside edge of each sink, no more than 12 in. below the countertop ([[210.52(D)]]).</li>
<li><b>Outdoors</b>: one-family and each grade-level unit of a two-family: one at the <b>front and back</b>, accessible from grade and not more than <b>6½ ft</b> above it. Balconies, decks, and porches within 4 in. of the house need one ([[210.52(E)]]).</li>
<li><b>Laundry</b>: at least one ([[210.52(F)]]). <b>Garages</b>: one in each vehicle bay, not more than 5½ ft above the floor ([[210.52(G)]]).</li>
<li><b>Hallways</b> 10 ft or longer (measured along the centerline): at least one ([[210.52(H)]]).</li>
<li><b>Foyers</b> that aren't part of a hallway and are larger than <b>60 sq ft</b>: a receptacle in each wall space 3 ft or wider ([[210.52(I)]]).</li>
<li><b>One kitchen per circuit</b>: countertop receptacles need at least two small-appliance circuits, and no small-appliance circuit may serve more than one kitchen ([[210.52(B)]]).</li>
</ul>
<h3>Lighting [[210.70(A)]]</h3>
<p>Every habitable room, kitchen, laundry area, and bathroom needs a wall-switched lighting outlet (in rooms other than kitchens, laundries, and baths, a switched receptacle can substitute). Also hallways, stairways, garages, accessory buildings with power, and outdoor entrances with grade-level access (a garage vehicle door doesn't count). An interior stairway with <b>6 or more risers</b> needs a switch at each floor level and each landing with a stairway entry. In all occupancies, attics, underfloor spaces, utility rooms, and basements used for storage or with equipment needing service need a light with a point of control at each entry ([[210.70(C)]]).</p>
<div class="tip"><b>Voltage limit in homes</b>In dwelling units and hotel guest rooms, luminaires and cord-and-plug loads of 1440 VA or less (or under ¼ hp) must be supplied at no more than <b>120 V</b> between conductors ([[210.6(A)]]).</div>`
    },
    {
      id: 'commercial', title: 'Commercial outlet rules and feeders (215)',
      html: `
<ul>
<li><b>HVAC service receptacle</b>: a 125 V, single-phase, 15 or 20 A receptacle outlet is required at an accessible location within <b>25 ft</b> of heating, A/C, and refrigeration equipment, on the <b>same level</b>, and not on the load side of the equipment's disconnect ([[210.63(A)]]). Rooftop units count. It needs GFCI ([[210.8(E)]]).</li>
<li><b>Electrical rooms</b>: in other than dwellings, where the wiring includes a solidly grounded system under <b>150 V to ground</b> (like 208Y/120), a receptacle outlet is required within 25 ft, in the same room or area as indoor switchboards, switchgear, panelboards, MCCs, and service equipment ([[210.63(B)]]).</li>
<li><b>Show windows</b>: one receptacle within 18 in. of the top of each show window, with no point along the top more than 6 ft from a receptacle ([[210.62]]).</li>
<li><b>Meeting rooms</b> of not more than <b>1000 sq ft</b> (other than dwellings): wall receptacles spaced like 210.52(A). If the room has a floor dimension of 12 ft or more and at least 215 sq ft, it needs a floor receptacle outlet at least 6 ft from any fixed wall for each 215 sq ft or fraction ([[210.65]]).</li>
<li><b>GFPE on big branch circuits</b>: branch-circuit disconnects rated <b>1000 A or more</b> on solidly grounded wye systems over 150 V to ground (480Y/277) need GFPE ([[210.13]]).</li>
</ul>
<h3>Feeders [[Art 215]]</h3>
<ul>
<li>Feeder conductors are sized like branch circuits: noncontinuous load + <b>125%</b> of continuous load ([[215.4(A)]]). The breaker uses the same rule ([[215.5]]).</li>
<li><b>Ground-fault protection of equipment (GFPE)</b>: feeder disconnects rated <b>1000 A or more</b> on solidly grounded wye systems over 150 V to ground (480Y/277) need GFPE ([[215.10(A)]]).</li>
<li>Feeder hots must be identified by phase and system just like branch circuits ([[215.12(C)]]).</li>
<li>A feeder neutral can't be smaller than the EGC required by 250.122 ([[215.4(B)]]). A feeder supplying branch circuits that need EGCs must include or provide an EGC ([[215.6]]).</li>
<li>A listed GFCI on the feeder may be used instead of GFCI at each 210.8 receptacle ([[215.9]]).</li>
</ul>
<div class="test"><b>Voltage drop</b>The 3% feeder / 5% total (feeder plus branch circuit) voltage drop numbers are in an <b>informational note</b> to [[215.4(A)]] (and one to 210.19). They are recommendations for efficiency, not enforceable rules. Exam questions love this.</div>`
    }
  ],
  questions: [
    { l: 'neutral', q: 'A neutral may be shared by more than one branch circuit:', c: ['Only where specifically permitted (like a multiwire branch circuit)', 'Always', 'Never', 'Only in dwellings'], w: 'Neutrals shall not be used for more than one branch circuit unless specifically permitted.', r: '200.6(A)' },
    { l: 'neutral', q: 'Where neutrals of different circuits share an enclosure, they must be:', c: ['Grouped or identified with their ungrounded conductors', 'Twisted together', 'Run in separate boxes', 'The same size'], w: 'Grouped by wire markers, cable ties, or similar means.', r: '200.6(B)' },
    { l: 'neutral', q: 'A 4 AWG black conductor may be used as a neutral if:', c: ['It is marked with a distinctive white or gray marking at its terminations at installation', 'It is in a raceway', 'Never', 'It is marked green'], w: '4 AWG and larger may be re-identified at terminations.', r: '200.7(B)' },
    { l: 'neutral', q: 'A 6 AWG insulated neutral must be identified by:', c: ['White or gray finish, or three white or gray stripes', 'White tape at the ends', 'Green insulation', 'Any color with a tag'], w: '6 AWG and smaller: continuous white/gray, or three stripes (some special exceptions).', r: '200.7(A)' },
    { l: 'neutral', q: 'In a cable switch loop, a re-identified white conductor may be used as:', c: ['The supply to the switch, not the return to the outlet', 'The return from the switch only', 'Either', 'The equipment ground'], w: '200.8(C)(1)(b).', r: '200.8(C)' },
    { l: 'mwbc', q: 'A multiwire branch circuit must have a means to:', c: ['Simultaneously disconnect all ungrounded conductors where it originates', 'Disconnect the neutral first', 'Disconnect each hot separately', 'Be GFCI protected'], w: '2- or 3-pole breaker or identified handle ties.', r: '210.4(B)' },
    { l: 'mwbc', q: 'Multiwire branch circuits generally supply only:', c: ['Line-to-neutral loads', 'Line-to-line loads', 'Motor loads', 'Lighting'], w: 'Unless they supply one utilization equipment or all hots open simultaneously.', r: '210.4(C)' },
    { l: 'mwbc', q: 'Where a building has more than one voltage system, branch circuit hots must be identified by phase and system at:', c: ['Every termination, connection, and splice point', 'The panel only', 'The device only', 'Every 10 ft'], w: 'And the method must be posted at each panel.', r: '210.5(C)' },
    { l: 'mwbc', q: 'The posted label describing the conductor identification scheme may be handwritten.', c: ['False', 'True', 'True if in marker', 'True in existing buildings'], w: '210.5(C)(2)(b): shall not be handwritten.', r: '210.5(C)' },
    { l: 'mwbc', q: 'Two branch circuits supply devices on the same yoke (like a split-wired duplex receptacle). What is required?', c: ['A means to simultaneously disconnect the ungrounded conductors where the circuits originate', 'Separate neutrals only', 'GFCI protection', 'Nothing extra'], w: '210.7 Multiple branch circuits.', r: '210.7' },
    { l: 'mwbc', q: 'Single-pole breakers used for a multiwire branch circuit serving line-to-neutral loads must have:', c: ['Identified handle ties', 'Any handle tie, including a nail', 'A lockout clip', 'Nothing; single poles are fine alone'], w: '240.15(B)(1).', r: '240.15(B)' },
    { l: 'gfci', q: 'GFCI devices required by 210.8 must be:', c: ['Listed Class A and installed in a readily accessible location', 'Class C', 'In the panel only', 'Behind appliances'], w: '210.8.', r: '210.8' },
    { l: 'gfci', q: 'In a commercial building, a 120 V receptacle on a rooftop requires GFCI protection.', c: ['True', 'False', 'Only if within 25 ft of HVAC', 'Only above 20 A'], w: 'Rooftops are in the 210.8(B) list.', r: '210.8(B)' },
    { l: 'gfci', q: 'In a commercial building, GFCI is required for 125 V receptacles within ___ of a sink.', c: ['6 ft', '3 ft', '10 ft', '4 ft'], w: '1.8 m (6 ft) from the top inside edge of the bowl.', r: '210.8(B)' },
    { l: 'gfci', q: 'In other than dwelling units, single-phase 125–250 V receptacles in the 210.8(B) locations need GFCI up to:', c: ['50 A', '20 A', '30 A', '100 A'], w: 'Single-phase ≤150 V to ground, 50 A or less; three-phase ≤150 V to ground, 100 A or less.', r: '210.8(B)' },
    { l: 'gfci', q: 'Which dwelling appliance requires GFCI protection under 210.8(D)?', c: ['Dishwasher', 'Refrigerator', 'Gas furnace', 'Smoke alarm'], w: 'The list includes dishwashers, ranges, wall ovens, cooktops, dryers, microwaves, and sump pumps.', r: '210.8(D)' },
    { l: 'gfci', q: 'Distance from a sink for GFCI purposes is measured:', c: ['As the shortest path a cord would follow without piercing a floor, wall, ceiling, or fixed barrier', 'In a straight line through walls', 'From the faucet', 'From the drain'], w: '210.8.', r: '210.8' },
    { l: 'gfci', q: 'Are lighting outlets in a crawl space required to be GFCI protected?', c: ['Yes, if 120 V or less', 'No', 'Only LED', 'Only in dwellings'], w: '210.8(C).', r: '210.8(C)' },
    { l: 'gfci', q: 'Which dwelling location is NOT on the 210.8(A) GFCI list?', c: ['Bedrooms', 'Laundry areas', 'Basements', 'Garages'], w: 'Bedrooms need AFCI, not GFCI.', r: '210.8(A)' },
    { l: 'gfci', q: 'The GFCI protecting a commercial rooftop receptacle must be readily accessible from:', c: ['The rooftop (it need not be readily accessible from anywhere else)', 'Grade level', 'The main electrical room', 'Inside the HVAC unit'], w: '210.8 Exception: receptacles on rooftops shall not be required to be readily accessible other than from the rooftop.', r: '210.8' },
    { l: 'gfci', q: 'In other than dwelling units, GFCI is required for receptacles in which part of a basement?', c: ['Unfinished areas', 'Finished areas only', 'Every area', 'No part'], w: '210.8(B)(13): unfinished areas of basements.', r: '210.8(B)' },
    { l: 'gfci', q: 'In a commercial building, a three-phase receptacle in a 210.8(B) location needs GFCI if it is 150 V or less to ground and rated:', c: ['100 A or less', '50 A or less', '60 A or less', '30 A or less'], w: 'Single-phase: 50 A or less. Three-phase: 100 A or less.', r: '210.8(B)' },
    { l: 'gfci', q: 'At an industrial plant with only qualified personnel, where GFCI would create a greater hazard for outdoor fixed equipment, what may be used instead?', c: ['An assured equipment grounding conductor program', 'Nothing at all', 'An AFCI', 'A larger EGC'], w: '210.8(B) Exception No. 2, per 590.7(B)(2).', r: '210.8(B)' },
    { l: 'gfci', q: 'The 210.8(D) appliance GFCI rule covers appliances rated 150 V or less to ground and:', c: ['60 A or less, single- or 3-phase', '20 A or less, single-phase only', '50 A or less, single-phase only', '100 A or less'], w: '210.8(D).', r: '210.8(D)' },
    { l: 'gfci', q: 'Which of these is on the 210.8(D) GFCI appliance list?', c: ['Drinking water coolers and bottle fill stations', 'Refrigerators', 'Gas water heaters', 'Ceiling fans'], w: 'Also vending machines, tire inflation machines, auto vacuums, pressure washers, sump pumps, and cooking and laundry appliances.', r: '210.8(D)' },
    { l: 'gfci', q: 'Which receptacles must be GFCI protected under 210.8(E)?', c: ['The HVAC service receptacles required by 210.63', 'All receptacles on roofs over 30 A', 'Receptacles inside panelboards', 'Weight-supporting ceiling receptacles'], w: '210.8(E) Equipment requiring servicing.', r: '210.8(E)' },
    { l: 'afci', q: 'AFCI protection in dwellings applies to which circuits?', c: ['120 V, single-phase, 10, 15, and 20 A branch circuits in the listed areas', 'All 240 V circuits', 'Only bedroom lighting', 'All circuits over 20 A'], w: '210.12(B).', r: '210.12(B)' },
    { l: 'afci', q: 'Which dwelling area requires AFCI protection?', c: ['Closets', 'Bathrooms', 'Garages', 'Outdoors'], w: 'The list includes kitchens, bedrooms, living areas, closets, hallways, and laundry areas.', r: '210.12(B)' },
    { l: 'afci', q: 'Hotel and motel guest rooms require AFCI protection for 120 V 15 and 20 A circuits.', c: ['True', 'False', 'Only bathrooms', 'Only if carpeted'], w: '210.12(D)(1).', r: '210.12(D)' },
    { l: 'afci', q: 'Extending a dwelling AFCI-area circuit by ___ or less with no new outlets doesn\'t require adding AFCI.', c: ['6 ft', '3 ft', '10 ft', '25 ft'], w: '210.12(E) exception.', r: '210.12(E)' },
    { l: 'afci', q: 'Feeders supplying dwelling units require surge protection of type:', c: ['Type 1 or Type 2 SPD', 'Type 3 only', 'Type 4', 'None'], w: '215.18(C).', r: '215.18' },
    { l: 'afci', q: 'SPDs required for feeders by 215.18 must have a nominal discharge current rating (In) of at least:', c: ['10 kA', '5 kA', '20 kA', '3 kA'], w: '215.18(E). Services have the same rating rule in 230.67(E).', r: '215.18' },
    { l: 'afci', q: 'In a dormitory unit, which area requires AFCI protection that a house does not list?', c: ['Bathrooms', 'Garages', 'Outdoors', 'Crawl spaces'], w: '210.12(C) dormitories: bedrooms, living rooms, hallways, closets, bathrooms, and similar rooms.', r: '210.12(C)' },
    { l: 'sizing', q: 'A continuous load is one where the max current continues for:', c: ['3 hours or more', '1 hour or more', '8 hours or more', '30 minutes or more'], w: 'Article 100 definition.', r: 'Art 100' },
    { l: 'sizing', q: 'Branch circuit conductors for continuous loads must have ampacity at least:', c: ['Noncontinuous load + 125% of continuous load', '100% of all loads', '80% of the breaker', '150% of continuous load'], w: '210.19(A)(1).', r: '210.19(A)' },
    { l: 'sizing', q: 'A 20 A breaker (not listed for 100%) may carry a continuous load of at most:', c: ['16 A', '20 A', '15 A', '18 A'], w: '20 ÷ 1.25 = 16 A.', r: '210.20(A)' },
    { l: 'sizing', q: '24 A continuous load. Minimum standard breaker size?', c: ['30 A', '25 A', '35 A', '24 A'], w: '24 × 1.25 = 30 A.', r: '210.20(A)' },
    { l: 'sizing', q: 'Standard ratings for branch circuits with more than one outlet include:', c: ['10, 15, 20, 30, 40, and 50 A', '15, 20, 25, 30 A only', '15 and 20 A only', 'Any rating'], w: '210.18.', r: '210.18' },
    { l: 'sizing', q: 'Can a 10 A branch circuit supply receptacle outlets?', c: ['No', 'Yes', 'Only in dwellings', 'Only GFCI receptacles'], w: '210.18 Exception No. 2.', r: '210.18' },
    { l: 'sizing', q: 'A single receptacle on an individual 20 A branch circuit must be rated at least:', c: ['20 A', '15 A', '16 A', '25 A'], w: 'Not less than the branch circuit rating.', r: '210.21(B)' },
    { l: 'sizing', q: 'On a 20 A circuit with several receptacle outlets, the receptacles may be rated:', c: ['15 or 20 A', '20 A only', '15 A only', '20 or 30 A'], w: 'Table 210.21(B)(3).', r: 'Table 210.21(B)(3)' },
    { l: 'sizing', q: 'Max cord-and-plug load on a 20 A receptacle on a 20 A multi-outlet circuit:', c: ['16 A', '20 A', '12 A', '15 A'], w: 'Table 210.21(B)(2).', r: 'Table 210.21(B)(2)' },
    { l: 'sizing', q: 'On a 20 A circuit, one cord-and-plug-connected appliance not fastened in place may not exceed:', c: ['16 A (80%)', '10 A (50%)', '20 A', '12 A'], w: '80% of the branch circuit rating.', r: '210.23(B)' },
    { l: 'sizing', q: 'Fastened-in-place equipment on a 20 A circuit that also supplies lighting may total at most:', c: ['10 A (50%)', '16 A (80%)', '20 A', '15 A'], w: '50% when lighting or plug-in loads are also supplied.', r: '210.23(B)' },
    { l: 'sizing', q: 'Minimum branch circuit rating for a household range of 8¾ kW or more:', c: ['40 A', '30 A', '50 A', '60 A'], w: '210.19(C).', r: '210.19(C)' },
    { l: 'sizing', q: 'The neutral of a 3-wire household range branch circuit may be smaller than the hots, but must be at least ___ of the circuit rating and not smaller than 10 AWG.', c: ['70%', '50%', '80%', '100%'], w: '210.19(C) Exception No. 2.', r: '210.19(C)' },
    { l: 'sizing', q: 'Tap conductors from a 50 A range branch circuit to a wall-mounted oven must have an ampacity of at least:', c: ['20 A', '30 A', '15 A', '40 A'], w: '210.19(C) Exception No. 1: not less than 20 A and sufficient for the load.', r: '210.19(C)' },
    { l: 'sizing', q: 'General branch-circuit conductors (not cooking appliances, cords, or fixture wire) may not be smaller than:', c: ['14 AWG', '12 AWG', '16 AWG', '18 AWG'], w: '210.19(D).', r: '210.19(D)' },
    { l: 'sizing', q: 'A 10 A multioutlet branch circuit is limited to supplying:', c: ['Lighting outlets, and dwelling exhaust fans on bathroom and laundry lighting circuits', 'Receptacle outlets', 'Small-appliance outlets', 'Any load under 10 A'], w: '210.23(A).', r: '210.23(A)' },
    { l: 'sizing', q: 'In a dwelling, a 40 or 50 A multioutlet branch circuit may supply:', c: ['Cooking appliances fastened in place', 'General-purpose receptacles', 'Lighting outlets', 'Any load up to its rating'], w: '210.23(D). Fixed heavy-duty lighting and infrared heaters are allowed only in other than dwelling units.', r: '210.23(D)' },
    { l: 'sizing', q: 'Multioutlet branch circuits rated over 50 A may supply:', c: ['Only nonlighting outlet loads', 'Lighting only', 'Receptacles for portable tools only', 'Any load'], w: '210.23(E).', r: '210.23(E)' },
    { l: 'sizing', q: 'Branch-circuit conductors supplying more than one receptacle for cord-and-plug portable loads must have an ampacity of at least:', c: ['The rating of the branch circuit', '80% of the branch circuit rating', 'The largest load', '125% of the branch circuit rating'], w: '210.19(B).', r: '210.19(B)' },
    { l: 'dwelling', q: 'Minimum number of 20 A small-appliance branch circuits in a dwelling kitchen:', c: ['2', '1', '3', '4'], w: 'Two or more.', r: '210.11(C)' },
    { l: 'dwelling', q: 'The required dwelling laundry circuit is rated:', c: ['20 A', '15 A', '30 A', '25 A'], w: 'At least one 120 V, 20 A circuit with no other outlets.', r: '210.11(C)' },
    { l: 'dwelling', q: 'In a dwelling living room, no point along the floor line may be more than ___ from a receptacle.', c: ['6 ft', '12 ft', '4 ft', '10 ft'], w: '1.8 m (6 ft).', r: '210.52(A)' },
    { l: 'dwelling', q: 'A wall space in a dwelling (210.52(A)) is any space at least ___ wide.', c: ['2 ft', '3 ft', '12 in.', '4 ft'], w: '600 mm (2 ft) or more.', r: '210.52(A)' },
    { l: 'dwelling', q: 'Kitchen countertop receptacles: no point along the wall line more than ___ from a receptacle.', c: ['24 in.', '12 in.', '36 in.', '48 in.'], w: '600 mm (24 in.).', r: '210.52(C)' },
    { l: 'dwelling', q: 'Countertop receptacles mounted above the counter may be no more than ___ above it.', c: ['20 in.', '18 in.', '24 in.', '12 in.'], w: '500 mm (20 in.).', r: '210.52(C)' },
    { l: 'dwelling', q: 'Dwelling bathroom: at least one receptacle within ___ of the outside edge of each sink.', c: ['3 ft', '6 ft', '2 ft', '4 ft'], w: '900 mm (3 ft).', r: '210.52(D)' },
    { l: 'dwelling', q: 'Outdoor receptacles at the front and back of a one-family dwelling must be no more than ___ above grade.', c: ['6½ ft', '5 ft', '8 ft', '4 ft'], w: '2.0 m (6½ ft).', r: '210.52(E)' },
    { l: 'dwelling', q: 'Dwelling hallways at least ___ long need a receptacle.', c: ['10 ft', '6 ft', '12 ft', '8 ft'], w: '3.0 m (10 ft).', r: '210.52(H)' },
    { l: 'dwelling', q: 'Dwelling garages: at least one receptacle in each vehicle bay, no more than ___ above the floor.', c: ['5½ ft', '4 ft', '6½ ft', '3 ft'], w: '1.7 m (5½ ft).', r: '210.52(G)' },
    { l: 'dwelling', q: 'A small-appliance branch circuit may serve countertop receptacles in:', c: ['No more than one kitchen', 'Two kitchens if lightly loaded', 'Any number of kitchens', 'A kitchen and a garage'], w: '210.52(B)(3): no small-appliance branch circuit shall serve more than one kitchen.', r: '210.52(B)' },
    { v: 1, l: 'dwelling', q: 'A dwelling foyer that is not part of a hallway needs a receptacle in each wall space 3 ft or wider if its area is greater than:', c: ['60 sq ft', '40 sq ft', '100 sq ft', '80 sq ft'], w: '210.52(I) Foyers: greater than 5.6 m² (60 ft²).', r: '210.52(I)' },
    { l: 'dwelling', q: 'Where lighting is installed for an interior dwelling stairway with ___ or more risers, a wall switch is required at each floor level and at each landing with a stairway entry.', c: ['Six', 'Four', 'Eight', 'Ten'], w: '210.70(A)(2)(3): six or more risers.', r: '210.70(A)' },
    { l: 'dwelling', q: 'Attics, underfloor spaces, utility rooms, and basements used for storage need a lighting outlet with a point of control:', c: ['At each entry to the space', 'Only at the panel', 'Anywhere in the dwelling', 'Within 25 ft of the space'], w: '210.70(C)(1). This applies to all occupancies.', r: '210.70(C)' },
    { v: 1, l: 'dwelling', q: 'In dwelling units, luminaires must be supplied at no more than ___ between conductors.', c: ['120 V', '277 V', '240 V', '208 V'], w: '210.6(A). Same for cord-and-plug loads of 1440 VA or less or under ¼ hp.', r: '210.6(A)' },
    { l: 'commercial', q: 'The HVAC service receptacle must be within ___ of the equipment.', c: ['25 ft', '50 ft', '10 ft', '6 ft'], w: '210.63: within 7.5 m (25 ft), same level.', r: '210.63' },
    { l: 'commercial', q: 'The HVAC service receptacle may be connected to the load side of the unit\'s disconnect.', c: ['False', 'True', 'True if GFCI', 'True on rooftops'], w: 'Shall not be connected to the load side of the equipment\'s disconnecting means.', r: '210.63(A)' },
    { l: 'commercial', q: 'Show windows need a receptacle within ___ of the top of each window.', c: ['18 in.', '12 in.', '24 in.', '6 ft'], w: '450 mm (18 in.), no point more than 6 ft from a receptacle.', r: '210.62' },
    { l: 'commercial', q: 'Feeder disconnects of ___ or more on 480Y/277 V solidly grounded wye systems require GFPE.', c: ['1000 A', '800 A', '1200 A', '2000 A'], w: '215.10(A): 1000 A or more, more than 150 V to ground.', r: '215.10(A)' },
    { l: 'commercial', q: 'Feeder conductors for continuous loads are sized at:', c: ['Noncontinuous + 125% of continuous', '100% of total', '80% of OCPD', '150% of largest load'], w: '215.4(A)(1).', r: '215.4(A)' },
    { l: 'commercial', q: 'In a commercial building with a 208Y/120 V system, a 125 V receptacle outlet is required in the same room or area as indoor:', c: ['Switchboards, switchgear, panelboards, MCCs, and service equipment', 'Transformers only', 'Lighting contactors only', 'Fire alarm panels only'], w: '210.63(B): where the wiring includes a solidly grounded system under 150 V to ground.', r: '210.63(B)' },
    { l: 'commercial', q: 'Meeting rooms in other than dwelling units of not more than ___ must have 125 V, 15 or 20 A receptacle outlets per 210.65.', c: ['1000 sq ft', '500 sq ft', '2000 sq ft', '1500 sq ft'], w: '210.65(A): 93 m² (1000 ft²).', r: '210.65(A)' },
    { v: 1, l: 'commercial', q: 'A meeting room with a floor dimension of 12 ft or more and at least 215 sq ft needs a floor receptacle outlet at least ___ from any fixed wall for each 215 sq ft or fraction.', c: ['6 ft', '3 ft', '4 ft', '12 ft'], w: '210.65(B)(2).', r: '210.65(B)' },
    { l: 'commercial', q: 'GFPE is required on a branch-circuit disconnect rated ___ or more on a 480Y/277 V solidly grounded wye system.', c: ['1000 A', '800 A', '1200 A', '600 A'], w: '210.13(A).', r: '210.13(A)' },
    { l: 'commercial', q: 'A feeder supplying branch circuits that require equipment grounding conductors must:', c: ['Include or provide an equipment grounding conductor', 'Use the neutral as the ground', 'Be run in PVC', 'Have GFPE'], w: '215.6.', r: '215.6' },
    { l: 'commercial', q: 'The informational note in 215.4 suggests limiting voltage drop to 3% on feeders and ___ total on feeders plus branch circuits.', c: ['5%', '3%', '8%', '10%'], w: '215.4(A) Informational Note No. 2. It is a recommendation, not a rule.', r: '215.4(A)' },
    { l: 'commercial', q: 'The 3%/5% voltage drop limits in the NEC are:', c: ['Informational notes, not enforceable requirements', 'Mandatory for all feeders', 'Mandatory only for dwelling units', 'Mandatory only over 100 ft'], w: 'They appear in informational notes (215.4, 210.19). Informational notes are not enforceable (90.5(C)).', r: '215.4(A)' },
    { l: 'commercial', q: 'A listed GFCI may protect a feeder instead of providing GFCI at each receptacle required by 210.8.', c: ['True', 'False', 'Only in dwellings', 'Only for 240 V'], w: '215.9.', r: '215.9' },
    { t: 'find', l: 'commercial', q: 'Where are the receptacle requirements for meeting rooms?', c: ['210.65', '210.62', '210.52', '518.1'], w: '210.65 Meeting rooms.', r: '210.65' },
    { t: 'find', l: 'commercial', q: 'Where is the rule requiring a receptacle near indoor switchboards and panelboards in commercial buildings?', c: ['210.63(B)', '210.62', '110.26(D)', '408.4'], w: '210.63(B) Other electrical equipment.', r: '210.63(B)' },
    { t: 'find', l: 'commercial', q: 'Where are the limits on what a 15, 20, 30, 40, or 50 A multioutlet circuit may supply?', c: ['210.23', '210.21', '210.18', '210.11'], w: '210.23 Permissible loads, multiple-outlet branch circuits (summarized in Table 210.24).', r: '210.23' },
    { t: 'find', l: 'commercial', q: 'Where are the GFCI requirements for receptacles?', c: ['210.8', '210.12', '406.4', '215.9'], w: '210.8. 210.12 is AFCI.', r: '210.8' },
    { t: 'find', l: 'commercial', q: 'Where are the AFCI requirements?', c: ['210.12', '210.8', '210.13', '406.4(D)'], w: '210.12.', r: '210.12' },
    { t: 'find', l: 'commercial', q: 'Where are required dwelling receptacle outlet locations?', c: ['210.52', '210.70', '406.12', '210.11'], w: '210.52. 210.70 is lighting outlets.', r: '210.52' },
    { t: 'find', l: 'commercial', q: 'Where is the rule for the HVAC service receptacle?', c: ['210.63', '440.14', '210.8(E)', '424.19'], w: '210.63 (and 210.8(E) requires it be GFCI).', r: '210.63' },
    { t: 'find', l: 'commercial', q: 'Where is the max cord-and-plug load table for receptacles?', c: ['Table 210.21(B)(2)', 'Table 210.21(B)(3)', 'Table 210.24(1)', 'Table 400.5(A)(1)'], w: '(2) is max load; (3) is receptacle ratings.', r: 'Table 210.21(B)(2)' }
  ]
});
