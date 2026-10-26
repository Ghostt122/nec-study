(() => {
const row = (a, what) => `<tr><td>[[Art ${a}]]</td><td>${what}</td></tr>`;
const table = rows => `<div class="tablewrap"><table><tr><th>Article</th><th>Covers</th></tr>${rows.map(r => row(...r)).join('')}</table></div>`;
(window.MODULES ||= []).push({
  id: 'map', icon: '🗺️', title: 'Article Map: The Whole Code at a Glance',
  blurb: 'Every article in the 2026 NEC and what it\'s for. This is how you find anything fast on the open-book exam.',
  lessons: [
    {
      id: 'ch1', title: 'Introduction and Chapter 1',
      html: table([[90, 'Introduction: purpose, scope, code arrangement, mandatory vs. permissive language'], [100, 'Definitions (all of them, alphabetical)'], [110, 'General requirements: approval, connections, markings, working space'], [120, 'Load calculations: branch circuit, feeder, and service (was Article 220)'], [130, 'Energy management systems']]) +
        `<div class="tip"><b>Tip</b>Tab Articles 100, 110, and 120 with your publisher tabs. You'll be in them constantly.</div>`
    },
    {
      id: 'ch2', title: 'Chapter 2: Wiring and protection',
      html: table([[200, 'Grounded conductor (neutral) use and identification'], [206, 'Non-power-limited remote-control and signaling circuits'], [210, 'Branch circuits: GFCI, AFCI, required outlets'], [215, 'Feeders'], [225, 'Outside branch circuits and feeders, buildings fed from other buildings'], [230, 'Services'], [240, 'Overcurrent protection'], [242, 'Overvoltage (surge) protection'], [245, 'Overcurrent protection over 1000 V'], [250, 'Grounding and bonding'], [265, 'Branch circuits over 1000 V'], [266, 'Feeders over 1000 V'], [267, 'Outside branch circuits and feeders over 1000 V'], [268, 'Services over 1000 V'], [270, 'Grounding and bonding over 1000 V']]) +
        `<p>In the 2026 NEC, Chapter 2's over-1000 V rules live in their own articles (245, 265–270), so the main articles (210, 215, 225, 230, 250) are mostly about 1000 V and under.</p>`
    },
    {
      id: 'ch3', title: 'Chapter 3: Wiring methods and materials',
      html: table([[300, 'General rules for all wiring methods'], [305, 'Wiring methods over 1000 V'], [310, 'Conductors and ampacity tables'], [312, 'Cabinets, cutout boxes, meter socket enclosures'], [314, 'Boxes, conduit bodies, handhole enclosures'], [315, 'Medium voltage conductors and cable'], [320, 'AC cable'], [322, 'Flat cable assemblies (FC)'], [324, 'Flat conductor cable (FCC)'], [326, 'Integrated gas spacer cable (IGS)'], [330, 'MC cable'], [332, 'MI cable'], [334, 'NM cable'], [335, 'Instrumentation tray cable (ITC)'], [336, 'Power and control tray cable (TC)'], [337, 'Type P cable'], [338, 'Service-entrance cable (SE, USE)'], [340, 'Underground feeder cable (UF)'], [342, 'IMC'], [344, 'RMC (rigid)'], [348, 'FMC (flex)'], [350, 'LFMC (Sealtite)'], [352, 'PVC'], [353, 'HDPE conduit'], [354, 'NUCC'], [355, 'RTRC (fiberglass conduit)'], [356, 'LFNC'], [358, 'EMT'], [360, 'FMT (flexible metallic tubing)'], [362, 'ENT'], [366, 'Auxiliary gutters'], [368, 'Busways'], [369, 'Insulated bus pipe'], [370, 'Cablebus'], [371, 'Flexible bus systems'], [372, 'Cellular concrete floor raceways'], [374, 'Cellular metal floor raceways'], [376, 'Metal wireways'], [378, 'Nonmetallic wireways'], [380, 'Multioutlet assemblies'], [382, 'Nonmetallic extensions'], [384, 'Strut-type channel raceway'], [386, 'Surface metal raceways'], [388, 'Surface nonmetallic raceways'], [390, 'Underfloor raceways'], [392, 'Cable trays'], [393, 'Low-voltage suspended ceiling power distribution'], [394, 'Concealed knob-and-tube'], [396, 'Messenger-supported wiring'], [398, 'Open wiring on insulators']])
    },
    {
      id: 'ch4', title: 'Chapter 4: Equipment for general use',
      html: table([[400, 'Flexible cords and cables'], [402, 'Fixture wires'], [404, 'Switches: general-use, motor-circuit, isolating, and pullout switches, breakers used as switches (wiring devices moved out)'], [406, 'Wiring devices: receptacles, attachment plugs, and (new in 2026) snap switches, dimmers, and other devices with a yoke'], [408, 'Switchboards, switchgear, and panelboards'], [409, 'Industrial control panels'], [410, 'Luminaires, lampholders, lamps'], [411, 'Low-voltage lighting'], [422, 'Appliances'], [424, 'Fixed electric space heating'], [425, 'Industrial process heating'], [426, 'Outdoor deicing and snow melting'], [427, 'Pipeline and vessel heating (heat trace)'], [430, 'Motors, motor circuits, controllers'], [440, 'Air conditioning and refrigeration'], [445, 'Generators'], [450, 'Transformers and vaults'], [455, 'Phase converters'], [460, 'Capacitors'], [470, 'Resistors and reactors'], [480, 'Stationary batteries'], [495, 'Equipment over 1000 V']])
    },
    {
      id: 'ch5', title: 'Chapter 5: Specific occupancies and locations',
      html: table([[500, 'Hazardous locations: classes, divisions, groups'], [501, 'Class I (gas/vapor) locations'], [502, 'Class II (dust) locations'], [503, 'Class III (fibers/flyings) locations'], [504, 'Intrinsically safe systems'], [505, 'Zone 0, 1, 2 locations'], [506, 'Zone 20, 21, 22 (dust/fibers)'], [511, 'Commercial garages, repair and storage'], [512, 'Cannabis oil equipment and systems'], [513, 'Aircraft hangars'], [514, 'Motor fuel dispensing (gas stations)'], [515, 'Bulk storage plants'], [516, 'Spray application, dipping, coating, printing'], [517, 'Health care facilities'], [518, 'Assembly occupancies (100+ people)'], [520, 'Theaters and audience areas'], [522, 'Amusement attraction control systems'], [525, 'Carnivals, circuses, fairs'], [530, 'Motion picture and TV studios'], [540, 'Motion picture projection rooms'], [545, 'Manufactured and relocatable buildings'], [547, 'Agricultural buildings'], [550, 'Mobile and manufactured homes'], [551, 'RVs and RV parks'], [552, 'Park trailers'], [555, 'Marinas, boatyards, docking facilities'], [590, 'Temporary installations']])
    },
    {
      id: 'ch6', title: 'Chapter 6: Specific equipment',
      html: table([[600, 'Signs and outline lighting'], [604, 'Manufactured wiring systems'], [605, 'Office furnishings (cubicle wiring)'], [610, 'Cranes and hoists'], [620, 'Elevators, escalators, lifts'], [624, 'Electric self-propelled vehicle power transfer'], [625, 'EV charging (power transfer systems)'], [626, 'Electrified truck parking'], [630, 'Electric welders'], [640, 'Audio equipment'], [645, 'Information technology (IT) equipment rooms'], [646, 'Modular data centers'], [647, 'Sensitive electronic equipment'], [650, 'Pipe organs'], [660, 'X-ray equipment'], [665, 'Induction and dielectric heating'], [668, 'Electrolytic cells'], [669, 'Electroplating'], [670, 'Industrial machinery'], [675, 'Irrigation machines'], [680, 'Pools, spas, hot tubs, fountains'], [682, 'Natural and artificial bodies of water'], [685, 'Integrated electrical systems'], [690, 'Solar PV'], [691, 'Large-scale PV supply stations'], [692, 'Fuel cells'], [694, 'Wind systems'], [695, 'Fire pumps']])
    },
    {
      id: 'ch7', title: 'Chapter 7: Specific conditions and systems',
      html: table([[700, 'Emergency systems'], [701, 'Legally required standby'], [702, 'Optional standby'], [705, 'Interconnected power production (solar backfeed)'], [706, 'Energy storage systems (batteries)'], [708, 'Critical operations power systems (COPS)'], [710, 'Stand-alone systems'], [720, 'General requirements for limited-energy wiring'], [721, 'Power sources for limited-energy systems'], [722, 'Limited-energy cables'], [723, 'Raceways, cable routing assemblies, and trays for limited-energy'], [724, 'Class 1 power-limited circuits'], [725, 'Class 2 and Class 3 power-limited circuits'], [726, 'Class 4 fault-managed power systems'], [742, 'Overvoltage protection of limited-energy systems'], [750, 'Grounding and bonding of limited-energy systems'], [760, 'Fire alarm systems'], [772, 'Fire-resistive cable systems']])
    },
    {
      id: 'ch8', title: 'Chapter 8 and 9, and the annexes',
      html: `<h3>Chapter 8: Communications systems (outside and entering buildings)</h3><p>In 2026, Chapters 5 through 8 may all supplement or modify Chapters 1 through 8 ([[90.3]]).</p>` + table([[800, 'General requirements for communications systems'], [810, 'Radio and TV antennas'], [820, 'CATV (coax)'], [830, 'Network-powered broadband']]) + `
<h3>Chapter 9: Tables</h3>
<div class="tablewrap"><table>
<tr><td>[[Ch9 Table 1]]</td><td>Conduit fill percentages (53/31/40) and notes</td></tr>
<tr><td>[[Ch9 Table 2]]</td><td>Minimum bend radius of conduit</td></tr>
<tr><td>[[Ch9 Table 4]]</td><td>Conduit and tubing dimensions and fill areas</td></tr>
<tr><td>[[Ch9 Table 5]]</td><td>Insulated conductor dimensions and areas</td></tr>
<tr><td>[[Ch9 Table 5A]]</td><td>Compact aluminum conductor dimensions</td></tr>
<tr><td>[[Ch9 Table 8]]</td><td>Conductor properties: circular mils, DC resistance</td></tr>
<tr><td>[[Ch9 Table 9]]</td><td>AC resistance and reactance (voltage drop)</td></tr>
<tr><td>[[Ch9 Table 10]]</td><td>Conductor stranding classes</td></tr>
<tr><td>Tables 11 and 12</td><td>Class 2/3 and PLFA power source limits</td></tr>
</table></div>
<h3>Informative Annexes (helpful, not rules)</h3>
<div class="tablewrap"><table>
<tr><td>A</td><td>Product safety standards referenced</td></tr>
<tr><td>B</td><td>Application information for ampacity calculation</td></tr>
<tr><td><b>C</b></td><td><b>Conduit fill tables for same-size conductors</b>: the fast way on the exam</td></tr>
<tr><td><b>D</b></td><td><b>Worked calculation examples</b> (dwelling, store, motors, and more)</td></tr>
<tr><td>F, G</td><td>Critical operations power systems (availability, reliability, testing); SCADA</td></tr>
<tr><td>H</td><td>Administration and enforcement (model for local adoption)</td></tr>
<tr><td><b>I</b></td><td><b>Recommended tightening torque tables</b> when the equipment doesn't give a value</td></tr>
<tr><td>K</td><td>Medical electrical equipment in dwellings and residential board-and-care occupancies</td></tr>
<tr><td>L</td><td>Proposed organization of the 2029 NEC</td></tr>
<tr><td>E, J</td><td>Reserved (empty)</td></tr>
</table></div>`
    }
  ],
  questions: [
    ['Where would you look for rules on cable tray?', 'Article 392', ['Article 376', 'Article 366', 'Article 370'], 'Art 392', 'ch3'],
    ['Where are busway rules?', 'Article 368', ['Article 370', 'Article 376', 'Article 384'], 'Art 368', 'ch3'],
    ['Where are surface metal raceway (Wiremold) rules?', 'Article 386', ['Article 388', 'Article 380', 'Article 376'], 'Art 386', 'ch3'],
    ['Where are strut-type channel raceway rules?', 'Article 384', ['Article 386', 'Article 392', 'Article 300'], 'Art 384', 'ch3'],
    ['Which article covers auxiliary gutters?', 'Article 366', ['Article 376', 'Article 312', 'Article 408'], 'Art 366', 'ch3'],
    ['Which article covers cabinets and meter socket enclosures?', 'Article 312', ['Article 314', 'Article 408', 'Article 230'], 'Art 312', 'ch3'],
    ['Which article covers HDPE conduit?', 'Article 353', ['Article 352', 'Article 355', 'Article 354'], 'Art 353', 'ch3'],
    ['Which article covers RTRC (fiberglass) conduit?', 'Article 355', ['Article 353', 'Article 356', 'Article 352'], 'Art 355', 'ch3'],
    ['Which article covers Type UF cable?', 'Article 340', ['Article 338', 'Article 334', 'Article 336'], 'Art 340', 'ch3'],
    ['Which article covers service-entrance cable (SE/USE)?', 'Article 338', ['Article 340', 'Article 230', 'Article 336'], 'Art 338', 'ch3'],
    ['Which article covers MI cable?', 'Article 332', ['Article 330', 'Article 334', 'Article 336'], 'Art 332', 'ch3'],
    ['Which article covers medium voltage cable (Type MV)?', 'Article 315', ['Article 310', 'Article 305', 'Article 328'], 'Art 315', 'ch3'],
    ['Which article covers fixture wires?', 'Article 402', ['Article 400', 'Article 410', 'Article 411'], 'Art 402', 'ch4'],
    ['Which article covers industrial control panels?', 'Article 409', ['Article 408', 'Article 430', 'Article 670'], 'Art 409', 'ch4'],
    ['Which article covers heat trace for pipelines and vessels?', 'Article 427', ['Article 426', 'Article 424', 'Article 425'], 'Art 427', 'ch4'],
    ['Which article covers outdoor snow melting equipment?', 'Article 426', ['Article 427', 'Article 424', 'Article 422'], 'Art 426', 'ch4'],
    ['Which article covers capacitors?', 'Article 460', ['Article 470', 'Article 455', 'Article 480'], 'Art 460', 'ch4'],
    ['Which article covers stationary batteries?', 'Article 480', ['Article 706', 'Article 460', 'Article 445'], 'Art 480', 'ch4'],
    ['Which article covers phase converters?', 'Article 455', ['Article 450', 'Article 460', 'Article 430'], 'Art 455', 'ch4'],
    ['Which article covers low-voltage lighting systems?', 'Article 411', ['Article 410', 'Article 725', 'Article 393'], 'Art 411', 'ch4'],
    ['Which article covers Class II (dust) locations?', 'Article 502', ['Article 501', 'Article 503', 'Article 506'], 'Art 502', 'ch5'],
    ['Which article covers intrinsically safe systems?', 'Article 504', ['Article 505', 'Article 500', 'Article 501'], 'Art 504', 'ch5'],
    ['Which article covers aircraft hangars?', 'Article 513', ['Article 511', 'Article 514', 'Article 515'], 'Art 513', 'ch5'],
    ['Which article covers spray painting booths?', 'Article 516', ['Article 515', 'Article 511', 'Article 501'], 'Art 516', 'ch5'],
    ['Which article covers assembly occupancies (100 or more people)?', 'Article 518', ['Article 520', 'Article 525', 'Article 517'], 'Art 518', 'ch5'],
    ['Which article covers theaters?', 'Article 520', ['Article 518', 'Article 530', 'Article 540'], 'Art 520', 'ch5'],
    ['Which article covers carnivals and fairs?', 'Article 525', ['Article 518', 'Article 590', 'Article 522'], 'Art 525', 'ch5'],
    ['Which article covers agricultural buildings?', 'Article 547', ['Article 545', 'Article 550', 'Article 675'], 'Art 547', 'ch5'],
    ['Which article covers mobile homes and manufactured homes?', 'Article 550', ['Article 551', 'Article 552', 'Article 545'], 'Art 550', 'ch5'],
    ['Which article covers RV parks?', 'Article 551', ['Article 550', 'Article 552', 'Article 555'], 'Art 551', 'ch5'],
    ['Which article covers marinas and docks?', 'Article 555', ['Article 682', 'Article 551', 'Article 680'], 'Art 555', 'ch5'],
    ['Which article covers elevators and escalators?', 'Article 620', ['Article 610', 'Article 630', 'Article 670'], 'Art 620', 'ch6'],
    ['Which article covers cranes and hoists?', 'Article 610', ['Article 620', 'Article 670', 'Article 630'], 'Art 610', 'ch6'],
    ['Which article covers IT equipment rooms (server rooms)?', 'Article 645', ['Article 646', 'Article 647', 'Article 725'], 'Art 645', 'ch6'],
    ['Which article covers industrial machinery?', 'Article 670', ['Article 409', 'Article 430', 'Article 610'], 'Art 670', 'ch6'],
    ['Which article covers office cubicle (furnishings) wiring?', 'Article 605', ['Article 604', 'Article 406', 'Article 380'], 'Art 605', 'ch6'],
    ['Which article covers lakes, ponds, and other natural bodies of water?', 'Article 682', ['Article 680', 'Article 555', 'Article 547'], 'Art 682', 'ch6'],
    ['Which article covers fuel cell systems?', 'Article 692', ['Article 694', 'Article 690', 'Article 706'], 'Art 692', 'ch6'],
    ['Which article covers wind electric systems?', 'Article 694', ['Article 692', 'Article 690', 'Article 705'], 'Art 694', 'ch6'],
    ['Which article covers X-ray equipment?', 'Article 660', ['Article 517', 'Article 665', 'Article 668'], 'Art 660', 'ch6'],
    ['Which article covers energy storage systems?', 'Article 706', ['Article 480', 'Article 705', 'Article 710'], 'Art 706', 'ch7'],
    ['Which article covers critical operations power systems (COPS)?', 'Article 708', ['Article 700', 'Article 701', 'Article 685'], 'Art 708', 'ch7'],
    ['Which article covers stand-alone (off-grid) systems?', 'Article 710', ['Article 705', 'Article 706', 'Article 702'], 'Art 710', 'ch7'],
    ['Which article covers fire-resistive cable systems?', 'Article 772', ['Article 760', 'Article 728', 'Article 700'], 'Art 772', 'ch7'],
    ['Which article covers Class 1 power-limited circuits?', 'Article 724', ['Article 725', 'Article 722', 'Article 206'], 'Art 724', 'ch7'],
    ['Which article covers non-power-limited remote-control and signaling circuits?', 'Article 206', ['Article 724', 'Article 725', 'Article 760'], 'Art 206', 'ch2'],
    ['Which article covers surge protective devices (overvoltage protection)?', 'Article 242', ['Article 240', 'Article 250', 'Article 285'], 'Art 242', 'ch2'],
    ['Which article covers energy management systems?', 'Article 130', ['Article 120', 'Article 750', 'Article 705'], 'Art 130', 'ch1'],
    ['Which informative annex has conduit fill tables for same-size conductors?', 'Annex C', ['Annex D', 'Annex B', 'Annex I'], 'Ch9 Table 1', 'ch8'],
    ['Which informative annex has worked calculation examples?', 'Annex D', ['Annex C', 'Annex B', 'Annex H'], '120.40', 'ch8'],
    ['Which informative annex has recommended tightening torque tables?', 'Annex I', ['Annex D', 'Annex C', 'Annex A'], '110.14(D)', 'ch8'],
    ['Which Chapter 9 table has conductor circular mil areas and resistance?', 'Table 8', ['Table 5', 'Table 4', 'Table 1'], 'Ch9 Table 8', 'ch8'],
    ['Which Chapter 9 table has AC resistance and reactance?', 'Table 9', ['Table 8', 'Table 10', 'Table 5'], 'Ch9 Table 9', 'ch8'],
    ['Which Chapter 9 table gives minimum conduit bend radius?', 'Table 2', ['Table 1', 'Table 4', 'Table 10'], 'Ch9 Table 2', 'ch8']
  ].map(([q, a, wrong, r, l]) => ({ v: 1, t: 'find', l, q, c: [a, ...wrong], w: `${a}. Use the Article Map to find it fast.`, r }))
});
})();
