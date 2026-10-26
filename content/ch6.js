(window.MODULES ||= []).push({
  id: 'ch6', icon: '🏊', title: 'Chapter 6: Special Equipment (600–695)',
  blurb: 'Pools and spas, solar PV, EV chargers, signs, welders, cranes, IT rooms, elevators, and fire pumps.',
  lessons: [
    {
      id: 'pools1', title: 'Pools: receptacles, lights, switches',
      html: `
<p>Water plus electricity is deadly, so [[Art 680]] is strict and heavily tested. Distances are measured from the <b>inside wall</b> of the pool.</p>
<h3>Receptacles [[680.22(A)]]</h3>
<ul>
<li>A permanently installed pool needs at least one 125 V, 15 or 20 A <b>general-purpose</b> receptacle between <b>6 ft and 20 ft</b> from the inside wall, no more than <b>6½ ft</b> above grade.</li>
<li>Pump and sanitation receptacles: at least <b>6 ft</b> away, GFCI, grounding type.</li>
<li>Other receptacles: at least <b>6 ft</b> away.</li>
<li><b>All receptacles within 20 ft</b> of the inside wall need GFCI (or SPGFCI where allowed).</li>
<li>Distances are measured the way a cord would run, without passing through walls, doors, or windows.</li>
</ul>
<h3>Lights and fans overhead [[680.22(B)]]</h3>
<ul>
<li><b>Outdoors</b>: luminaires, lighting outlets, and paddle fans over the pool or within <b>5 ft</b> horizontally must be at least <b>12 ft</b> above the max water level.</li>
<li><b>Indoors</b>: same, but with GFCI protection, totally enclosed luminaires and identified fans may be at <b>7½ ft</b>.</li>
<li>Luminaires and fans <b>5 to 10 ft</b> from the pool need GFCI unless they're at least 5 ft above the water and rigidly attached.</li>
</ul>
<h3>Switches, other outlets, disconnects</h3>
<ul>
<li>Switches at least <b>5 ft</b> from the inside wall, unless behind a permanent barrier or listed for closer use ([[680.22(C)]]).</li>
<li>Other outlets at least <b>10 ft</b> away ([[680.22(E)]]).</li>
<li><b>Maintenance disconnect</b> for pool equipment (not lighting): readily accessible, within sight, and at least <b>5 ft</b> from the water's edge ([[680.13]]).</li>
</ul>`
    },
    {
      id: 'pools2', title: 'Pools: wiring and equipotential bonding',
      html: `
<ul>
<li><b>Underground wiring</b> within 5 ft of the pool must be RMC, IMC, PVC, RTRC, jacketed MC listed for burial, or LFNC or LFMC listed for direct burial ([[680.11(A)]]).</li>
<li><b>Overhead conductors</b> must keep the clearances in [[Table 680.9(A)]].</li>
<li>Pool pump motors: wiring per [[680.21]] with GFCI where required.</li>
<li><b>Underwater luminaires</b>: designed so there's no shock hazard without a GFCI; transformers and power supplies must be listed for pool use ([[680.23(A)]]).</li>
</ul>
<h3>Equipotential bonding [[680.26]]</h3>
<p>The goal is to keep everything a swimmer can touch at the <b>same voltage</b>, so no current flows through a person. This is not a ground and doesn't go back to the panel.</p>
<ul>
<li>Bond with <b>solid</b> copper (or 40% copper-clad steel) not smaller than <b>8 AWG</b>, bare or insulated. It does <b>not</b> need to extend to the panel, service, or an electrode ([[680.26(B)]]).</li>
<li>Bonded: the conductive pool shell (concrete rebar tied together, or an 8 AWG copper grid on 12 in. × 12 in. spacing), perimeter surfaces, metal fittings, pump motors, underwater lights, metal fences and railings nearby, and other metal parts.</li>
<li><b>Perimeter surface</b> (deck): bonded for <b>3 ft</b> beyond the inside wall, attached to the pool steel or grid at least at four points evenly spaced.</li>
<li><b>Pool water</b>: if nothing bonded touches the water, install a corrosion-resistant conductive surface of at least <b>9 in²</b> in contact with the water ([[680.26(C)]]).</li>
</ul>`
    },
    {
      id: 'pv', title: 'Solar PV (690)',
      html: `
<ul>
<li>PV systems can supply a building in addition to other supply systems, and must be installed by <b>qualified persons</b> ([[690.4]]).</li>
<li><b>Max voltage</b>: module open-circuit voltage goes <b>up</b> in cold weather, so it's corrected with factors like [[Table 690.7(A)]] (colder means a higher multiplier).</li>
<li><b>Max current</b> for PV source circuits: the sum of parallel module short-circuit currents × <b>125%</b> ([[690.8(A)]]).</li>
<li><b>Conductor ampacity</b>: at least that max current × another <b>125%</b> ([[690.8(B)]]). Combined, that's Isc × 1.25 × 1.25 = <b>156%</b>.</li>
<li><b>Rapid shutdown</b> ([[690.12(B)]]): the array boundary is <b>1 ft</b> from the array in all directions. Outside it (or more than 3 ft inside the building), controlled conductors drop to <b>30 V within 30 seconds</b>. Inside the boundary: a listed hazard control system, or 80 V within 30 seconds. This protects firefighters on the roof.</li>
<li><b>Rapid shutdown initiation</b>: readily accessible; the service disconnect, the PV system disconnect, or a listed switch. At one- and two-family dwellings it's outdoors ([[690.12(C)]]). A permanent label at the service shows where it is and says "SOLAR PV SYSTEM EQUIPPED WITH RAPID SHUTDOWN" ([[690.12(D)]]).</li>
<li><b>PV disconnect</b>: lockable open, marked <b>"PV SYSTEM DISCONNECT"</b> ([[690.13]]). No more than <b>six</b> switches or sets of breakers per system ([[690.13(D)]]).</li>
<li>PV equipment and disconnects can't be installed in <b>bathrooms</b> ([[690.4(D)]]).</li>
<li>Readily accessible PV DC circuits over <b>30 V</b> that aren't guarded go in MC cable, multiconductor jacketed cable, or raceway ([[690.31]]).</li>
</ul>
<div class="tip"><b>Example</b>Three strings in parallel, module Isc 10 A: max current = 3 × 10 × 1.25 = 37.5 A. Conductor ampacity ≥ 37.5 × 1.25 = 46.9 A.</div>`
    },
    {
      id: 'other', title: 'EV chargers, signs, welders, fire pumps',
      html: `
<h3>EV charging [[Art 625]]</h3>
<ul>
<li>Outlets for EVSE over 16 A or over 120 V need an <b>individual branch circuit</b> ([[625.40]]).</li>
<li>EV chargers are <b>continuous loads</b> ([[625.41]]): size circuits at 125%. A 48 A charger needs a 60 A circuit.</li>
<li>Permanently connected EVSE needs a disconnect in a readily accessible location, lockable open; if remote, post a plaque on the charger showing where ([[625.43]]).</li>
<li><b>Emergency shutoff</b> (other than one- and two-family dwellings): permanently connected EVSE needs a clearly identified emergency disconnect, readily accessible, at least <b>20 ft</b> and no more than <b>100 ft</b> from the equipment and in sight of it, marked "EVSE EMERGENCY DISCONNECT," manual reset ([[625.43(D)]]).</li>
<li>All receptacles installed for EV charging need <b>GFCI</b> ([[625.54]]).</li>
</ul>
<h3>Signs [[Art 600]]</h3>
<ul>
<li>Each commercial building and occupancy accessible to pedestrians needs at least one <b>sign outlet</b> at each entrance to each tenant space, on a <b>20 A</b> (minimum) branch circuit that supplies no other load ([[600.5(A)]]).</li>
<li>Sign circuits are <b>continuous loads</b>. Circuits for <b>neon</b> tubing are rated no more than <b>30 A</b>; circuits for all other signs no more than <b>20 A</b> ([[600.5(C)]]).</li>
<li>Each sign needs an externally operable switch or breaker that opens all ungrounded conductors and controls no other load. It goes at the point the circuit enters the sign, or within sight of the sign, or within sight of the controller. If it's out of the line of sight, it must be lockable open, with a marking on the sign showing where ([[600.6]]).</li>
</ul>
<h3>Welders [[Art 630]]</h3>
<p>Supply conductor ampacity is the I<sub>1eff</sub> on the nameplate, or the rated primary current × the duty-cycle multiplier from [[Table 630.11(A)]] ([[630.11(A)]]). Welders that don't run continuously can use smaller wire.</p>
<h3>Fire pumps [[Art 695]]</h3>
<ul>
<li>Fire pump power must be reliable. It can come from a separate service or a tap ahead of the service disconnect, and the source must carry the pump's <b>locked-rotor current</b> indefinitely ([[695.4]]).</li>
<li>Voltage at the controller can't drop more than <b>15%</b> during motor starting ([[695.8]]).</li>
<li>Overloads aren't required where power loss would be the bigger hazard ([[430.31]]): you'd rather burn up the motor than lose the fire pump. Fire pump power circuits <b>shall not</b> have automatic overload protection; they're protected against short circuit only ([[695.7(C)]]).</li>
<li><b>Conductors</b>: at least <b>125%</b> of the fire pump and pressure maintenance motor FLCs plus 100% of accessory equipment ([[695.7(B)]]).</li>
<li><b>No GFPE</b> (ground-fault protection of equipment) on any fire pump power circuit ([[695.7(G)]]).</li>
<li>Wiring from the controller to the pump motor: RMC, IMC, EMT, LFMC, LFNC-B, listed MC with an impervious covering, or MI, with fittings listed for wet locations. No twist-on or insulation-piercing connectors at the motor ([[695.7(D)]]).</li>
<li>A listed <b>SPD</b> goes in or on the fire pump controller (not required for diesel fire pumps) ([[695.15]]). Reconditioned fire pump controllers and transfer switches aren't allowed ([[695.3]]).</li>
</ul>`
    },
    {
      id: 'elev', title: 'Elevators (620)',
      html: `
<p>[[Art 620]] covers elevators, dumbwaiters, escalators, moving walks, platform lifts, and stairway chairlifts. On commercial jobs you'll pipe the machine room and pit.</p>
<ul>
<li><b>Main disconnect</b>: a single means to disconnect all ungrounded main power conductors for each elevator, with no pole operating independently. It's an enclosed, externally operable, listed <b>fused motor-circuit switch or circuit breaker</b>, lockable <b>only in the open</b> position ([[620.51]]).</li>
<li>It must be <b>readily accessible to qualified persons</b> and, on elevators without generator field control, <b>within sight of the motor controller</b> ([[620.51(C)]]). It can't be opened or closed from anywhere else in the building.</li>
<li>The main disconnect must <b>not</b> disconnect the car lighting, machine room, or pit lighting and receptacle circuits.</li>
<li>The disconnect is field marked with the <b>available fault current</b> and the date it was calculated, and an <b>SPD</b> is installed with the system or next to the disconnect ([[620.51(D)]]).</li>
<li><b>Car lights</b>: a separate branch circuit for each car ([[620.22]]).</li>
<li><b>Machine room / control room</b>: lighting and receptacles on separate circuits that supply no other loads. Light switch at the point of entry. At least one 125 V, 15 or 20 A duplex receptacle ([[620.23]]).</li>
<li><b>Pit</b>: separate circuits for pit lighting and receptacles. Light switch readily accessible from the pit access door. At least one duplex receptacle in the pit ([[620.24]]).</li>
<li>Required lighting can't be on the load side of a GFCI.</li>
<li><b>GFCI</b>: 125 V, 15 and 20 A receptacles in pits, hoistways, on cars, and in machine rooms and control spaces need listed <b>Class A</b> GFCI protection ([[620.7]]).</li>
<li>Where more than one driving machine is on the same source, their OCPDs must be <b>selectively coordinated</b> ([[620.62]]).</li>
</ul>`
    },
    {
      id: 'crane', title: 'Cranes and hoists (610), IT rooms (645)',
      html: `
<h3>Cranes, monorail hoists, and runways [[Art 610]]</h3>
<ul>
<li><b>Wiring</b>: conductors in raceway, or Type AC cable with an insulated EGC, Type MC, or Type MI. Contact (runway) conductors and short exposed lengths at resistors and collectors don't need raceway. Flexible connections to motors use stranded conductors in FMC, LFMC, LFNC, multiconductor cable, or an approved flexible raceway ([[610.11]]).</li>
<li><b>Runway conductor disconnect</b> (between the power supply and the runway contact conductors): readily accessible and operable from the <b>ground or floor level</b>, <b>lockable open</b>, opens all ungrounded conductors at once, and placed <b>within view of the runway contact conductors</b> ([[610.31]]).</li>
<li><b>Crane disconnect</b>: a disconnect per 430.109 in the leads from the runway conductors on every crane and monorail hoist, lockable open. It can be omitted on a floor-controlled monorail hoist or hand-propelled bridge that's within view of the supply disconnect and has no fixed work platform ([[610.32]]).</li>
<li>That crane disconnect is rated at least <b>50%</b> of the combined short-time ampere rating of the motors, and at least <b>75%</b> of the short-time ratings of the motors for any single motion ([[610.33]]).</li>
<li><b>Working space</b> at energized parts likely to need service: at least <b>2½ ft</b> in the direction of access. Control cabinet doors must open at least 90 degrees or be removable ([[610.57]]).</li>
<li><b>Bonding</b>: the whole crane is bonded as an effective ground-fault path. The trolley and bridge frames are <b>not</b> considered bonded through their wheels and tracks, so a separate bonding conductor is required ([[610.61]]).</li>
</ul>
<h3>Information technology (IT) equipment rooms [[Art 645]]</h3>
<p>Article 645 is an <b>optional</b> set of rules: its relaxed wiring methods apply only when the room meets all the conditions in [[645.5]] (a 645.10 disconnect, a dedicated HVAC system or one with fire/smoke dampers, listed equipment, access limited to IT staff, fire-rated separation, and only IT-related wiring in the room).</p>
<ul>
<li>IT equipment is a <b>continuous load</b> for branch circuits ([[645.6]]).</li>
<li><b>Power-supply cords</b> for IT equipment: no longer than <b>15 ft</b>, listed. Interconnecting cables between IT units aren't limited to 15 ft.</li>
<li><b>Under raised floors</b>: cords, cables, and receptacles for the IT equipment are allowed where the floor space is accessible. Branch-circuit wiring under the floor may be RMC, IMC, EMT, ENT, PVC, FMC, LFMC, LFNC, MC, AC, MI, wireway, and others listed in [[645.6(E)]].</li>
<li><b>Disconnecting means</b> ([[645.10]]): an approved means to cut power to all electronic equipment in the room (or zone), and a similar means to shut down the dedicated HVAC and close the fire/smoke dampers. Remote controls are at approved, readily accessible locations for authorized people and firefighters, grouped and marked.</li>
<li><b>UPS</b> in the room must follow 645.10 too, and the disconnect must also disconnect the battery from its load (with small exceptions, like 750 VA or less) ([[645.11]]).</li>
</ul>`
    }
  ],
  questions: [
    { v: 1, l: 'pools1', q: 'The required general-purpose receptacle for a permanent pool must be located between ___ from the inside wall.', c: ['6 ft and 20 ft', '5 ft and 10 ft', '10 ft and 20 ft', '3 ft and 15 ft'], w: '680.22(A)(1).', r: '680.22(A)' },
    { l: 'pools1', q: 'All receptacles within ___ of the inside walls of a pool need GFCI protection.', c: ['20 ft', '10 ft', '6 ft', '15 ft'], w: '680.22(A)(4).', r: '680.22(A)' },
    { v: 1, l: 'pools1', q: 'Receptacles for pool pump motors must be at least ___ from the inside wall.', c: ['6 ft', '5 ft', '10 ft', '3 ft'], w: '680.22(A)(2).', r: '680.22(A)' },
    { l: 'pools1', q: 'Outdoor luminaires over a pool or within 5 ft horizontally must be at least ___ above the max water level.', c: ['12 ft', '10 ft', '7½ ft', '8 ft'], w: '680.22(B)(1).', r: '680.22(B)' },
    { l: 'pools1', q: 'Indoors, GFCI-protected totally enclosed luminaires over a pool may be as low as:', c: ['7½ ft', '12 ft', '5 ft', '10 ft'], w: '680.22(B)(2).', r: '680.22(B)' },
    { l: 'pools1', q: 'Luminaires between 5 ft and 10 ft horizontally from a pool need GFCI unless they are at least ___ above the water and rigidly attached.', c: ['5 ft', '7½ ft', '12 ft', '3 ft'], w: '680.22(B)(4).', r: '680.22(B)' },
    { l: 'pools1', q: 'Switching devices must be at least ___ horizontally from the inside walls of a pool (without a barrier).', c: ['5 ft', '10 ft', '6 ft', '3 ft'], w: '680.22(C).', r: '680.22(C)' },
    { l: 'pools1', q: 'Other outlets must be at least ___ from the inside walls of a pool.', c: ['10 ft', '5 ft', '6 ft', '20 ft'], w: '680.22(E).', r: '680.22(E)' },
    { l: 'pools1', q: 'The maintenance disconnect for pool equipment must be at least ___ from the inside walls (without a barrier).', c: ['5 ft', '10 ft', '3 ft', '20 ft'], w: '680.13.', r: '680.13' },
    { l: 'pools2', q: 'Minimum size of a solid copper equipotential bonding conductor for a pool:', c: ['8 AWG', '6 AWG', '10 AWG', '4 AWG'], w: '680.26(B).', r: '680.26(B)' },
    { l: 'pools2', q: 'The pool equipotential bonding conductor must be extended to the service panel.', c: ['False', 'True', 'True if over 20 ft', 'True for commercial pools'], w: 'Not required to be extended to panelboards, service equipment, or electrodes.', r: '680.26(B)' },
    { l: 'pools2', q: 'A copper bonding grid for a pool shell is laid out on a ___ grid pattern.', c: ['12 in. × 12 in.', '6 in. × 6 in.', '24 in. × 24 in.', '18 in. × 18 in.'], w: '680.26(B)(1)(b).', r: '680.26(B)' },
    { l: 'pools2', q: 'Perimeter surfaces must be bonded for ___ beyond the inside walls of the pool.', c: ['3 ft', '5 ft', '10 ft', '18 in.'], w: '680.26(B)(2).', r: '680.26(B)' },
    { l: 'pools2', q: 'If no bonded parts touch the pool water, a conductive surface of at least ___ must contact the water.', c: ['9 in²', '4 in²', '16 in²', '1 in²'], w: '680.26(C).', r: '680.26(C)' },
    { l: 'pools2', q: 'Which wiring method is NOT listed for underground wiring within 5 ft of a pool?', c: ['Type UF cable', 'Rigid PVC conduit', 'RMC', 'IMC'], w: '680.11(A) list.', r: '680.11(A)' },
    { l: 'pv', q: 'PV source circuit max current is the sum of parallel short-circuit currents multiplied by:', c: ['125%', '100%', '156%', '80%'], w: '690.8(A)(1).', r: '690.8(A)' },
    { l: 'pv', q: 'PV circuit conductors must have ampacity of at least the max circuit current times:', c: ['125%', '100%', '150%', '80%'], w: '690.8(B)(1).', r: '690.8(B)' },
    { l: 'pv', q: 'For rapid shutdown, the array boundary is ___ from the array in all directions.', c: ['1 ft', '3 ft', '10 ft', '6 in.'], w: '690.12(B).', r: '690.12(B)' },
    { l: 'pv', q: 'Outside the array boundary, controlled conductors must drop to not more than ___ within 30 seconds.', c: ['30 V', '80 V', '50 V', '12 V'], w: '690.12(B)(1).', r: '690.12(B)' },
    { l: 'pv', q: 'A PV disconnect must be marked:', c: ['PV SYSTEM DISCONNECT', 'SOLAR', 'DC DISCONNECT ONLY', 'EMERGENCY'], w: '690.13(C).', r: '690.13' },
    { l: 'pv', q: 'In cold weather, PV module open-circuit voltage:', c: ['Increases', 'Decreases', 'Stays the same', 'Drops to zero'], w: 'That\'s why Table 690.7(A) correction factors are above 1.0 for cold temperatures.', r: 'Table 690.7(A)' },
    { l: 'other', q: 'EV charging equipment is considered:', c: ['A continuous load', 'A noncontinuous load', 'A motor load', 'An optional load'], w: '625.41.', r: '625.41' },
    { l: 'other', q: 'An outlet for EVSE rated over 16 A or over 120 V requires:', c: ['An individual branch circuit', 'A GFCI receptacle only', 'A 50 A circuit', 'A dedicated feeder'], w: '625.40.', r: '625.40' },
    { l: 'other', q: 'A commercial occupancy\'s required sign outlet must be on a branch circuit rated at least:', c: ['20 A', '15 A', '30 A', '50 A'], w: '600.5(A)(2), supplying no other load.', r: '600.5(A)' },
    { l: 'other', q: 'Welder supply conductors may be sized using the nameplate primary current times a multiplier based on:', c: ['Duty cycle', 'Voltage drop', 'Ambient temperature', 'Length of run'], w: '630.11(A) and Table 630.11(A).', r: '630.11(A)' },
    { l: 'other', q: 'Voltage at a fire pump controller may not drop more than ___ during motor starting.', c: ['15%', '5%', '10%', '20%'], w: '695.8(A).', r: '695.8' },
    { t: 'find', l: 'other', q: 'Where is pool equipotential bonding covered?', c: ['680.26', '680.22', '250.104', '680.7'], w: '680.26.', r: '680.26' },
    { t: 'find', l: 'other', q: 'Where are PV rapid shutdown requirements?', c: ['690.12', '690.8', '705.12', '690.13'], w: '690.12.', r: '690.12' },
    { t: 'find', l: 'other', q: 'Which article covers EV charging equipment?', c: ['Article 625', 'Article 626', 'Article 620', 'Article 690'], w: '625 Electric Vehicle Power Transfer System.', r: 'Art 625' },
    { t: 'find', l: 'other', q: 'Where are pool receptacle distance rules?', c: ['680.22(A)', '680.13', '210.8', '680.11'], w: '680.22(A).', r: '680.22(A)' },
    { v: 1, l: 'pools1', q: 'The required general-purpose pool receptacle may be no more than ___ above the floor, platform, or grade.', c: ['6 ft 6 in.', '5 ft', '8 ft', '4 ft'], w: '680.22(A)(1).', r: '680.22(A)' },
    { l: 'pools2', q: 'Fixed metal parts such as fences must be bonded where within ___ horizontally of the inside walls of the pool.', c: ['5 ft', '3 ft', '10 ft', '20 ft'], w: '680.26(B)(7), unless separated by a permanent barrier.', r: '680.26(B)' },
    { l: 'pools2', q: 'Wiring may be run under a pool:', c: ['Only if necessary to supply pool equipment permitted by Article 680', 'Anywhere in PVC', 'If buried 24 in.', 'Never'], w: '680.11(B).', r: '680.11' },
    { l: 'pv', q: 'Inside the array boundary (without a listed hazard control system), rapid shutdown must limit voltage to not more than ___ within 30 seconds.', c: ['80 V', '30 V', '50 V', '120 V'], w: '690.12(B)(2)(2).', r: '690.12(B)' },
    { l: 'pv', q: 'For one- and two-family dwellings, the rapid shutdown initiation device must be located:', c: ['Outdoors', 'In the garage', 'At the inverter', 'In the attic'], w: '690.12(C)(1)(b).', r: '690.12(C)' },
    { l: 'pv', q: 'PV system equipment and disconnecting means may not be installed in:', c: ['Bathrooms', 'Garages', 'Attics', 'Basements'], w: '690.4(D).', r: '690.4(D)' },
    { l: 'pv', q: 'A PV system disconnecting means may consist of no more than ___ switches or sets of breakers.', c: ['Six', 'Two', 'Four', 'Ten'], w: '690.13(D).', r: '690.13(D)' },
    { l: 'other', q: 'Outside one- and two-family dwellings, permanently connected EVSE needs an emergency disconnect located:', c: ['20 ft to 100 ft from the equipment and in sight', 'Within 10 ft', 'At the service only', 'Inside the EVSE'], w: '625.43(D)(1).', r: '625.43(D)' },
    { l: 'other', q: 'Receptacles installed for EV charging require:', c: ['GFCI protection', 'AFCI protection only', 'Isolated grounds', 'No special protection'], w: '625.54.', r: '625.54' },
    { l: 'other', q: 'Branch circuits supplying neon sign tubing may be rated no more than:', c: ['30 A', '20 A', '40 A', '50 A'], w: '600.5(C)(1). Other signs: 20 A max.', r: '600.5(C)' },
    { l: 'other', q: 'Fire pump power circuits may have automatic overload protection.', c: ['False', 'True', 'True if 125%', 'True with GFPE'], w: '695.7(C): short-circuit protection only.', r: '695.7(C)' },
    { l: 'other', q: 'Ground-fault protection of equipment (GFPE) on a fire pump power circuit is:', c: ['Not permitted', 'Required', 'Required over 1000 A', 'Optional'], w: '695.7(G).', r: '695.7(G)' },
    { l: 'other', q: 'Fire pump motor conductors must be at least ___ of the fire pump and pressure maintenance motor FLCs (plus accessory loads).', c: ['125%', '100%', '115%', '250%'], w: '695.7(B)(1).', r: '695.7(B)' },
    { l: 'other', q: 'A listed surge protective device is required in or on:', c: ['The fire pump controller (electric)', 'Every receptacle', 'The jockey pump', 'Nothing'], w: '695.15; not required for diesel fire pumps.', r: '695.15' },
    { l: 'elev', q: 'The elevator main disconnecting means must be lockable:', c: ['Only in the open position', 'Only in the closed position', 'In either position', 'It may not be lockable'], w: '620.51(A).', r: '620.51' },
    { l: 'elev', q: 'The elevator main power disconnect may also disconnect the car lighting circuit.', c: ['False', 'True', 'True if labeled', 'True with an SPD'], w: '620.51: shall not disconnect the circuits required in 620.22, 620.23, 620.24.', r: '620.51' },
    { l: 'elev', q: 'On elevators without generator field control, the main disconnect must be located:', c: ['Within sight of the motor controller', 'In the lobby', 'At the service', 'On the car'], w: '620.51(C)(1).', r: '620.51(C)' },
    { l: 'elev', q: 'The elevator main disconnect must be field marked with:', c: ['The available fault current and the date it was calculated', 'The installer\'s license number', 'The car capacity', 'The floor numbers served'], w: '620.51(D)(1).', r: '620.51(D)' },
    { l: 'elev', q: '125 V, 15 and 20 A receptacles in elevator pits and machine rooms need:', c: ['Listed Class A GFCI protection', 'AFCI protection', 'Hospital-grade receptacles', 'Nothing special'], w: '620.7.', r: '620.7' },
    { l: 'elev', q: 'The elevator machine room lighting switch must be located:', c: ['At the point of entry', 'In the pit', 'On the controller', 'Anywhere in the building'], w: '620.23(B).', r: '620.23' },
    { l: 'elev', q: 'Required elevator pit, machine room, and car lighting may be on the load side of a GFCI.', c: ['False', 'True', 'True if Class A', 'True in the pit only'], w: '620.22, 620.23, 620.24.', r: '620.24' },
    { t: 'find', l: 'elev', q: 'Where is the elevator main disconnecting means rule?', c: ['620.51', '620.22', '430.102', '620.62'], w: '620.51.', r: '620.51' },
    { t: 'find', l: 'elev', q: 'Where are fire pump power wiring rules (no overloads, no GFPE)?', c: ['695.7', '695.4', '430.31', '695.6'], w: '695.7.', r: '695.7' },
    { t: 'find', l: 'elev', q: 'Where are EV charging disconnect and emergency shutoff rules?', c: ['625.43', '625.40', '625.54', '625.42'], w: '625.43.', r: '625.43' },
    { l: 'crane', q: 'The runway conductor disconnecting means for a crane must be:', c: ['Operable from the ground or floor level, lockable open, and within view of the runway conductors', 'On the crane bridge', 'In the electrical room only', 'Fused at 125%'], w: '610.31.', r: '610.31' },
    { l: 'crane', q: 'Crane runway contact conductors must be enclosed in raceway.', c: ['False', 'True', 'True indoors', 'True over 600 V'], w: '610.11(A).', r: '610.11' },
    { l: 'crane', q: 'The crane disconnect (610.32) must be rated at least ___ of the combined short-time ampere rating of the motors.', c: ['50%', '75%', '100%', '125%'], w: '610.33; also at least 75% for any single motion.', r: '610.33' },
    { v: 1, l: 'crane', q: 'Minimum working space in front of crane control live parts likely to need servicing while energized:', c: ['2½ ft', '3 ft', '4 ft', '1½ ft'], w: '610.57.', r: '610.57' },
    { l: 'crane', q: 'A crane\'s trolley frame and bridge frame are considered bonded through the wheels and tracks.', c: ['False; a separate bonding conductor is required', 'True', 'True if steel wheels', 'True under 600 V'], w: '610.61.', r: '610.61' },
    { v: 1, l: 'crane', q: 'Power-supply cords for IT equipment in a 645 IT room may not exceed:', c: ['15 ft', '6 ft', '10 ft', '25 ft'], w: '645.6(B)(1).', r: '645.6' },
    { v: 1, l: 'crane', q: 'IT equipment is considered ___ for branch circuits.', c: ['A continuous load', 'A noncontinuous load', 'A motor load', 'An optional load'], w: '645.6(A).', r: '645.6' },
    { l: 'crane', q: 'An IT room under Article 645 needs a disconnecting means that removes power from the electronic equipment and also:', c: ['Shuts down the dedicated HVAC and closes fire/smoke dampers', 'Trips the building main', 'Shuts off the lights', 'Activates sprinklers'], w: '645.10.', r: '645.10' },
    { l: 'crane', q: 'The alternate wiring methods of Article 645 may be used:', c: ['Only when all the conditions of 645.5 are met', 'In any office', 'In any room with computers', 'Only in hospitals'], w: '645.5.', r: '645.5' },
    { t: 'find', l: 'crane', q: 'Where are the crane runway conductor disconnect rules?', c: ['610.31', '610.32', '430.102', '610.11'], w: '610.31.', r: '610.31' },
    { t: 'find', l: 'crane', q: 'Where is the IT room disconnecting means requirement?', c: ['645.10', '645.5', '645.11', '700.12'], w: '645.10.', r: '645.10' }
  ]
});
