(window.MODULES ||= []).push({
  id: 'ch6', icon: '🏊', title: 'Chapter 6: Special Equipment (600–695)',
  blurb: 'Pools and spas, solar PV, EV chargers, signs, welders, and fire pumps.',
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
<li><b>PV disconnect</b>: lockable open, marked <b>"PV SYSTEM DISCONNECT"</b> ([[690.13]]).</li>
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
<li>Permanently connected EVSE needs a disconnect in a readily accessible location; if remote, post a plaque on the charger showing where ([[625.43]]).</li>
</ul>
<h3>Signs [[Art 600]]</h3>
<ul>
<li>Each commercial building and occupancy accessible to pedestrians needs at least one <b>sign outlet</b> at each entrance to each tenant space, on a <b>20 A</b> (minimum) branch circuit that supplies no other load ([[600.5(A)]]).</li>
<li>A sign disconnect is required at the point the circuit enters the sign, or within sight, or remote and lockable ([[600.6]]).</li>
</ul>
<h3>Welders [[Art 630]]</h3>
<p>Supply conductor ampacity is the I<sub>1eff</sub> on the nameplate, or the rated primary current × the duty-cycle multiplier from [[Table 630.11(A)]] ([[630.11(A)]]). Welders that don't run continuously can use smaller wire.</p>
<h3>Fire pumps [[Art 695]]</h3>
<ul>
<li>Fire pump power must be reliable. It can come from a separate service or a tap ahead of the service disconnect, and the source must carry the pump's <b>locked-rotor current</b> indefinitely ([[695.4]]).</li>
<li>Voltage at the controller can't drop more than <b>15%</b> during motor starting ([[695.8]]).</li>
<li>Overloads aren't required where power loss would be the bigger hazard ([[430.31]]): you'd rather burn up the motor than lose the fire pump.</li>
</ul>`
    }
  ],
  questions: [
    { l: 'pools1', q: 'The required general-purpose receptacle for a permanent pool must be located between ___ from the inside wall.', c: ['6 ft and 20 ft', '5 ft and 10 ft', '10 ft and 20 ft', '3 ft and 15 ft'], w: '680.22(A)(1).', r: '680.22(A)' },
    { l: 'pools1', q: 'All receptacles within ___ of the inside walls of a pool need GFCI protection.', c: ['20 ft', '10 ft', '6 ft', '15 ft'], w: '680.22(A)(4).', r: '680.22(A)' },
    { l: 'pools1', q: 'Receptacles for pool pump motors must be at least ___ from the inside wall.', c: ['6 ft', '5 ft', '10 ft', '3 ft'], w: '680.22(A)(2).', r: '680.22(A)' },
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
    { t: 'find', l: 'other', q: 'Where are pool receptacle distance rules?', c: ['680.22(A)', '680.13', '210.8', '680.11'], w: '680.22(A).', r: '680.22(A)' }
  ]
});
