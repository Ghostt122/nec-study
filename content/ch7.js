(window.MODULES ||= []).push({
  id: 'ch7', icon: '🚨', title: 'Chapters 7 & 8: Emergency, Standby, Low-Voltage, Communications',
  blurb: 'Emergency and standby power, solar and battery interconnection, Class 2 and fire alarm cabling, and communications bonding.',
  lessons: [
    {
      id: 'emergency', title: 'Emergency, legally required, and optional standby',
      html: `
<div class="tablewrap"><table>
<tr><th>System</th><th>What it powers</th><th>Power back within</th></tr>
<tr><td><b>Emergency</b> [[Art 700]]</td><td>Life safety: exit signs, egress lighting, fire alarm, required by law</td><td><b>10 seconds</b> ([[700.12]])</td></tr>
<tr><td><b>Legally required standby</b> [[Art 701]]</td><td>Required by codes but not life safety: smoke control, sewage pumps, some communications</td><td><b>60 seconds</b> ([[701.12]])</td></tr>
<tr><td><b>Optional standby</b> [[Art 702]]</td><td>Whatever the owner wants backed up: data centers, homes, refrigeration</td><td>No time requirement</td></tr>
</table></div>
<h3>Emergency system wiring [[700.10]]</h3>
<ul>
<li>Kept <b>entirely independent</b> of all other wiring and equipment, with limited exceptions (transfer switch enclosures, exit/emergency fixtures fed from two sources, listed relays, and others) ([[700.10(B)]]).</li>
<li><b>Marked</b>: all boxes and enclosures (transfer switches, generators, panels) are permanently marked as emergency. Exposed raceway or cable without boxes is marked at least every <b>25 ft</b>. Emergency receptacles get a distinctive color or marking ([[700.10(A)]]).</li>
<li>Emergency OCPDs must be <b>selectively coordinated</b> with all supply-side and load-side OCPDs, so only the breaker closest to a fault opens ([[700.32]]). Legally required standby OCPDs too ([[701.32]]).</li>
<li>Reconditioned transfer switches are not allowed ([[700.3]]).</li>
<li><b>Duration</b>: the emergency source must carry the load for the designed time, never less than <b>2 hours</b> (except unit equipment and certain emergency illumination), with on-site fuel for at least 2 hours ([[700.12(B)]]). Legally required standby: same 2-hour minimum ([[701.12]]).</li>
<li><b>Testing</b>: the AHJ conducts or witnesses a commissioning test, the system is tested periodically, and written or digital records are kept ([[700.4]]).</li>
<li><b>Signs</b>: a sign at the service-entrance equipment shows the type and location of each on-site emergency source ([[700.8]]).</li>
<li><b>SPD</b>: a listed surge protective device in or right next to every emergency switchboard, switchgear, and panelboard ([[700.9]]).</li>
<li><b>Emergency lighting circuits</b> supply no appliances and no lamps other than those required for emergency use ([[700.15]]).</li>
<li><b>Emergency illumination</b> includes egress lighting and exit signs, designed so one failed lamp can't leave an area in total darkness. Where an emergency system is installed and the service or building disconnect is indoors, emergency illumination is required in the area of that disconnect ([[700.16]]).</li>
<li>Emergency OCPDs are accessible to <b>authorized persons only</b> ([[700.30]]).</li>
</ul>
<h3>Optional standby (generators at homes and businesses)</h3>
<ul>
<li>Requires <b>transfer equipment</b> or an <b>interlock</b> that prevents connecting the generator and utility together ([[702.5(A)]]). Backfeeding a panel through a dryer receptacle with a "suicide cord" is illegal and kills lineworkers.</li>
<li>Exception: qualified-person temporary connections where the normal supply is locked out or physically disconnected.</li>
<li>Transfer switches installed between the utility meter and the meter socket must be listed <b>meter-mounted</b> transfer switches. In other than dwellings, the transfer equipment's short-circuit current rating is field marked on it ([[702.5]]).</li>
</ul>`
    },
    {
      id: 'interconnect', title: 'Interconnected power (solar backfeed) (705)',
      html: `
<p>When solar inverters or batteries backfeed a panel through a breaker, the bus can get current from two directions. [[705.12(B)]] limits it:</p>
<ul>
<li><b>Simple method</b>: 125% of the inverter output current + the main breaker rating ≤ the busbar rating.</li>
<li><b>120% rule</b>: with the main breaker and the backfeed breaker at <b>opposite ends</b> of the bus, 125% of inverter output + main breaker ≤ <b>120%</b> of the bus rating. Label it: "WARNING: POWER SOURCE OUTPUT. DO NOT RELOCATE THIS OVERCURRENT DEVICE."</li>
<li><b>Sum-of-breakers method</b>: total of all breakers (except the main) ≤ bus rating, with a warning label.</li>
</ul>
<div class="tip"><b>Example: 120% rule</b>200 A bus, 200 A main. 120% × 200 = 240 A. 240 − 200 = 40 A left. Inverter output × 1.25 ≤ 40, so up to a 32 A inverter output on a 40 A backfeed breaker at the far end of the bus.</div>
<p>Power source disconnects must be readily accessible and show open/closed ([[705.20]]). Battery energy storage systems are covered in [[Art 706]].</p>`
    },
    {
      id: 'lowvolt', title: 'Low-voltage cabling (720–726), fire alarm (760)',
      html: `
<p>The 2026 code reorganized limited-energy wiring into several articles, and there is <b>no Article 770</b> in the 2026 book: optical fiber cable rules moved into Article 722 ([[722.160]] and following).</p>
<div class="tablewrap"><table>
<tr><td>[[Art 720]]</td><td>General wiring methods and materials for limited-energy systems</td></tr>
<tr><td>[[Art 721]]</td><td>Power sources for limited-energy circuits (Class 2, 3, 4 power supplies)</td></tr>
<tr><td>[[Art 722]]</td><td>Limited-energy cables (power-limited, fault-managed power, optical fiber, communications): types, separation, substitutions</td></tr>
<tr><td>[[Art 723]]</td><td>Raceways, cable routing assemblies, and cable trays for limited-energy systems</td></tr>
<tr><td>[[Art 724]]</td><td>Class 1 power-limited circuits (these still need Chapter 3 wiring methods)</td></tr>
<tr><td>[[Art 725]]</td><td>Class 2 and Class 3 power-limited circuits (thermostats, doorbells, control wiring, many PoE and LED systems)</td></tr>
<tr><td>[[Art 726]]</td><td>Class 4 fault-managed power systems</td></tr>
<tr><td>[[Art 742]]</td><td>Overvoltage (primary and secondary protector) protection of limited-energy systems</td></tr>
<tr><td>[[Art 750]]</td><td>Grounding and bonding of limited-energy systems</td></tr>
<tr><td>[[Art 760]]</td><td>Fire alarm systems</td></tr>
<tr><td>[[Art 772]]</td><td>Fire-resistive cable systems (cables that keep critical circuits, like fire pump and emergency feeders, working during a fire)</td></tr>
</table></div>
<ul>
<li><b>Support</b>: low-voltage cable on walls and ceilings is supported by the <b>building structure</b> with listed straps, staples, ties, or hangers. Above drop ceilings, <b>not</b> on the ceiling grid or its wires. Independent support wires must be marked and secured at both ends ([[720.30]]).</li>
<li><b>Not on conduit</b>: communications cables can't be strapped, taped, or attached to the outside of a raceway as a means of support ([[722.133]]).</li>
<li><b>Abandoned cables</b>: the accessible portion must be removed. Cables kept for future use get a durable tag ([[720.25]]).</li>
<li><b>Separation</b>: limited-energy cables are kept at least <b>2 in.</b> from power and lighting conductors, and not in the same raceway, box, or enclosure unless specifically permitted (barriers, or the power conductors are only there to connect the same equipment) ([[722.15(A)]]).</li>
<li><b>Raceway as support</b>: a raceway can support Class 2 or Class 3 cables only if it's identified as a means of support, or if it carries the power conductors for the equipment those Class 2 or 3 cables control ([[720.30(C)]]).</li>
<li><b>Fire alarm circuits</b> are identified at terminal and junction locations so nobody accidentally sets off or disables the alarm when working on other systems ([[760.30]]). Red boxes and covers are the common practice.</li>
<li><b>Fire alarm branch circuit</b> (feeding the panel): supplies no other loads, is <b>not</b> on GFCI or AFCI, the breaker location is identified at the fire alarm control unit, and the breaker has <b>red</b> identification, is accessible only to qualified persons, and is marked <b>"FIRE ALARM CIRCUIT."</b> It may be locked in the on position ([[760.41]], [[760.121]]).</li>
<li><b>NPLFA</b> (non-power-limited) fire alarm conductors: 18 AWG protected at no more than <b>7 A</b>, 16 AWG at no more than <b>10 A</b> ([[760.43]]). A PLFA power source is protected at no more than <b>20 A</b> ([[760.127]]).</li>
<li>Abandoned fire alarm cable: remove the accessible portion ([[760.25]]).</li>
</ul>`
    },
    {
      id: 'comm', title: 'Communications systems (Chapter 8)',
      html: `
<p>In the 2026 NEC, Chapter 8 covers communications wires and cables <b>outside and entering</b> buildings ([[Art 800]]), radio and TV antennas ([[Art 810]]), CATV coax ([[Art 820]]), and network-powered broadband ([[Art 830]]). Inside the building, communications cables follow the Chapter 7 limited-energy articles (720, 722, 750).</p>
<ul>
<li>Communications, CATV, and antenna systems bond to the building's <b>intersystem bonding termination (IBT)</b> at the service (see [[250.94]] and [[750.94]]).</li>
<li><b>Bonding conductor or GEC</b> for primary protectors and cable shields: copper or other corrosion-resistant material, at least <b>14 AWG</b>, not required to be larger than <b>6 AWG</b>. In one- and two-family dwellings, it's as short as practicable and no more than <b>20 ft</b> long ([[750.100]]).</li>
<li>Same support rules: not on ceiling grids, not on the outside of conduit, remove abandoned cable.</li>
</ul>
<div class="job"><b>On the job</b>Low-voltage contractors often run their own cable. As the electrician, you provide the boxes, mud rings, sleeves through firewalls (firestopped!), and the IBT at the service.</div>`
    }
  ],
  questions: [
    { l: 'emergency', q: 'Emergency power must be available within:', c: ['10 seconds', '60 seconds', '30 seconds', '5 seconds'], w: '700.12.', r: '700.12' },
    { l: 'emergency', q: 'Legally required standby power must be available within:', c: ['60 seconds', '10 seconds', '30 seconds', '2 minutes'], w: '701.12.', r: '701.12' },
    { l: 'emergency', q: 'Emergency system wiring must be:', c: ['Kept entirely independent of other wiring (with listed exceptions)', 'Run in the same raceway as normal power', 'GFCI protected', 'Aluminum'], w: '700.10(B).', r: '700.10(B)' },
    { l: 'emergency', q: 'Exposed emergency raceway or cable without boxes must be marked as emergency at intervals not exceeding:', c: ['25 ft', '10 ft', '50 ft', '100 ft'], w: '700.10(A)(2).', r: '700.10(A)' },
    { l: 'emergency', q: 'Emergency system overcurrent devices must be:', c: ['Selectively coordinated', 'GFCI protected', 'Rated 100%', 'Fuses only'], w: '700.32.', r: '700.32' },
    { l: 'emergency', q: 'Reconditioned transfer switches may be installed on emergency systems.', c: ['False', 'True', 'True if tested', 'True if listed'], w: '700.3.', r: '700.3' },
    { l: 'emergency', q: 'Optional standby systems require:', c: ['Transfer equipment or an interlock preventing interconnection of sources', 'A 10-second start', 'Selective coordination', 'Nothing special'], w: '702.5(A).', r: '702.5(A)' },
    { l: 'interconnect', q: 'Under the 120% rule, 125% of inverter output plus the main breaker may not exceed:', c: ['120% of the busbar rating', '100% of the busbar', '125% of the busbar', 'The main breaker'], w: '705.12(B)(2).', r: '705.12(B)' },
    { l: 'interconnect', q: 'For the 120% rule, the backfeed breaker must be located:', c: ['At the opposite end of the busbar from the main', 'Next to the main', 'Anywhere', 'In a separate panel'], w: '705.12(B)(2).', r: '705.12(B)' },
    { l: 'interconnect', q: '200 A bus with a 200 A main: max backfeed breaker under the 120% rule:', c: ['40 A', '50 A', '20 A', '60 A'], w: '200 × 1.2 = 240; 240 − 200 = 40 A of room for 125% of inverter output (a 32 A inverter on a 40 A breaker).', r: '705.12(B)' },
    { l: 'lowvolt', q: 'Low-voltage cables above a suspended ceiling may be supported by the ceiling grid wires.', c: ['False', 'True', 'True for Class 2', 'True for fire alarm'], w: '720.30(B).', r: '720.30' },
    { l: 'lowvolt', q: 'The accessible portion of abandoned low-voltage cables must be:', c: ['Removed', 'Tagged and left', 'Cut flush', 'Taped'], w: '720.25 (cables kept for future use get a tag).', r: '720.25' },
    { l: 'lowvolt', q: 'Limited-energy cables must be separated from power and lighting conductors by at least:', c: ['2 in.', '6 in.', '12 in.', '1 in.'], w: '722.15(A).', r: '722.15' },
    { l: 'lowvolt', q: 'Communications cables may be strapped to the outside of a conduit for support.', c: ['False (except aerial drops on a raceway-type mast)', 'True', 'True if tie-wrapped', 'True in plenums'], w: '722.133.', r: '722.133' },
    { l: 'lowvolt', q: 'Fire alarm circuits must be identified at:', c: ['Terminal and junction locations', 'Every 10 ft', 'The panel only', 'Every device'], w: '760.30.', r: '760.30' },
    { l: 'lowvolt', q: 'In the 2026 NEC, Class 2 and Class 3 circuits are covered in Article:', c: ['725', '724', '722', '760'], w: '724 = Class 1, 725 = Class 2 and 3, 722 = limited-energy cables.', r: 'Art 725' },
    { l: 'comm', q: 'Minimum size of the bonding conductor for communications primary protectors:', c: ['14 AWG', '10 AWG', '6 AWG', '12 AWG'], w: '750.100(A)(3); not required to exceed 6 AWG.', r: '750.100' },
    { l: 'comm', q: 'In one- and two-family dwellings, the communications bonding conductor may be no longer than:', c: ['20 ft', '10 ft', '6 ft', '50 ft'], w: '750.100(A)(4).', r: '750.100' },
    { l: 'comm', q: 'Which article covers radio and TV antenna equipment?', c: ['810', '820', '800', '830'], w: '810.', r: 'Art 810' },
    { l: 'comm', q: 'Which article covers CATV (coax) systems?', c: ['820', '810', '830', '800'], w: '820.', r: 'Art 820' },
    { t: 'find', l: 'comm', q: 'Where are the emergency wiring identification and independence rules?', c: ['700.10', '700.12', '701.10', '760.30'], w: '700.10.', r: '700.10' },
    { t: 'find', l: 'comm', q: 'Where is the "120% rule" for backfed breakers?', c: ['705.12(B)', '690.64', '408.36', '705.20'], w: '705.12(B).', r: '705.12(B)' },
    { t: 'find', l: 'comm', q: 'Where are support rules for low-voltage cable above ceilings?', c: ['720.30', '300.13', '725.24', '800.24'], w: '2026 NEC: 720.30.', r: '720.30' },
    { l: 'emergency', q: 'An emergency power source must be able to carry the load for not less than:', c: ['2 hours', '90 minutes', '30 minutes', '8 hours'], w: '700.12(B), except unit equipment and certain emergency illumination.', r: '700.12(B)' },
    { l: 'emergency', q: 'Legally required standby system OCPDs must be:', c: ['Selectively coordinated', 'GFCI protected', 'Fuses only', 'Rated 125%'], w: '701.32.', r: '701.32' },
    { l: 'emergency', q: 'A sign at the service-entrance equipment must show:', c: ['The type and location of each on-site emergency power source', 'The generator fuel level', 'The installer\'s name', 'The utility phone number'], w: '700.8(A).', r: '700.8' },
    { l: 'emergency', q: 'Emergency system switchboards, switchgear, and panelboards need:', c: ['A listed SPD integral to or immediately adjacent', 'GFCI main breakers', 'Isolated ground bars', 'Arc-flash relays'], w: '700.9.', r: '700.9' },
    { l: 'emergency', q: 'Emergency lighting circuits may also supply appliances.', c: ['False', 'True', 'True if under 10 A', 'True with AHJ approval'], w: '700.15.', r: '700.15' },
    { l: 'emergency', q: 'Who must conduct or witness the commissioning test of an emergency system?', c: ['The authority having jurisdiction', 'The building owner', 'The utility', 'The generator supplier only'], w: '700.4(A).', r: '700.4' },
    { l: 'emergency', q: 'Overcurrent devices in emergency circuits must be accessible to:', c: ['Authorized persons only', 'All occupants', 'The public', 'Anyone with a key'], w: '700.30.', r: '700.30' },
    { l: 'emergency', q: 'A transfer switch installed between the utility meter and the meter enclosure must be:', c: ['A listed meter-mounted transfer switch', 'A manual double-throw switch of any type', 'An interlock kit', 'Not permitted'], w: '702.5(B).', r: '702.5' },
    { l: 'interconnect', q: 'A power source (PV, battery) disconnecting means must be:', c: ['Readily accessible', 'Inside the inverter only', 'Within 6 ft of the meter', 'Fused'], w: '705.20(A).', r: '705.20' },
    { l: 'lowvolt', q: 'In the 2026 NEC, Class 4 fault-managed power systems are covered in Article:', c: ['726', '725', '724', '760'], w: 'Art 726.', r: 'Art 726' },
    { l: 'lowvolt', q: 'In the 2026 NEC, optical fiber cable installation rules are found in Article:', c: ['722', '770', '820', '760'], w: '722.160 and following; there is no Article 770 in the 2026 book.', r: '722.160' },
    { l: 'lowvolt', q: 'In the 2026 NEC, Class 1 power-limited circuits are covered in Article:', c: ['724', '725', '722', '720'], w: 'Art 724.', r: 'Art 724' },
    { l: 'lowvolt', q: 'A raceway may support Class 2 cables when the raceway:', c: ['Contains power conductors for the equipment those Class 2 cables control', 'Is EMT', 'Is larger than 1 in.', 'Is in a plenum'], w: '720.30(C)(2), or if identified as a means of support.', r: '720.30' },
    { l: 'lowvolt', q: 'The branch circuit supplying a fire alarm control unit may be GFCI or AFCI protected.', c: ['False', 'True', 'True in dwellings', 'True if labeled'], w: '760.41(B) and 760.121(B).', r: '760.41' },
    { l: 'lowvolt', q: 'The fire alarm branch-circuit disconnecting means must be marked:', c: ['"FIRE ALARM CIRCUIT" with red identification', '"FACP" in black', '"EMERGENCY"', 'Nothing'], w: '760.41(B) and 760.121(B)(4).', r: '760.121' },
    { l: 'lowvolt', q: 'Overcurrent protection for 18 AWG NPLFA conductors may not exceed:', c: ['7 A', '10 A', '15 A', '5 A'], w: '760.43. 16 AWG: 10 A.', r: '760.43' },
    { l: 'lowvolt', q: 'The accessible portion of abandoned fire alarm cable must be:', c: ['Removed', 'Tagged only', 'Left in place', 'Painted red'], w: '760.25.', r: '760.25' },
    { l: 'comm', q: 'Communications cables outside and entering buildings are covered in Article:', c: ['800', '810', '722', '830'], w: 'Art 800 (2026).', r: 'Art 800' },
    { t: 'find', l: 'comm', q: 'Where are the fire alarm branch-circuit (power supply) rules for PLFA circuits?', c: ['760.121', '760.30', '760.43', '210.8'], w: '760.121.', r: '760.121' },
    { t: 'find', l: 'comm', q: 'Where is selective coordination for emergency systems required?', c: ['700.32', '700.10', '240.12', '701.12'], w: '700.32.', r: '700.32' },
    { t: 'find', l: 'comm', q: 'Where is the emergency source minimum 2-hour duration?', c: ['700.12(B)', '700.4', '700.16', '702.5'], w: '700.12(B).', r: '700.12(B)' }
  ]
});
