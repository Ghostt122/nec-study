(window.MODULES ||= []).push({
  id: 'service', icon: '⚡', title: 'Chapter 2: Services & Outside Wiring (225, 230)',
  blurb: 'Where the utility hands off power: drops, laterals, clearances, service entrance, disconnects, and feeders to other buildings.',
  lessons: [
    {
      id: 'parts', title: 'Parts of a service',
      html: `
<p>The <b>service</b> is everything that brings power from the utility to the building's main disconnect. Key words from [[Art 100]]:</p>
<div class="tablewrap"><table>
<tr><th>Term</th><th>What it is</th></tr>
<tr><td>Service point</td><td>Where the utility's conductors connect to the customer's wiring. Everything on the customer side is NEC; the utility side isn't.</td></tr>
<tr><td>Service drop</td><td>Utility's <b>overhead</b> conductors from the pole to the building</td></tr>
<tr><td>Service lateral</td><td>Utility's <b>underground</b> conductors to the building</td></tr>
<tr><td>Overhead / underground service conductors</td><td>Customer-side conductors from the service point to the service-entrance conductors</td></tr>
<tr><td>Service-entrance conductors</td><td>From the service conductors to the <b>service equipment</b> (main disconnect)</td></tr>
<tr><td>Service equipment</td><td>The main breaker(s) or switch(es) and fuses that disconnect the building</td></tr>
</table></div>
<ul>
<li><b>One service per building</b>, unless an exception applies: fire pumps, emergency and standby systems, capacity needs, or different voltages or characteristics ([[230.4]]).</li>
<li><b>Service conductors are only "outside" in certain conditions</b>: under 2 in. of concrete beneath the building, in a raceway encased in 2 in. of concrete or brick, in a vault, in conduit under 18 in. of earth beneath the building, or in RMC or IMC through an eave ([[230.6]]). Inside a building, they're unprotected until the disconnect, so keep that run short.</li>
<li><b>Nothing else in the service raceway</b>: only service conductors. The exceptions are grounding electrode conductors, supply-side bonding jumpers, and protected load-management control conductors ([[230.7]]).</li>
<li><b>Seal</b> service raceways where they enter the building, including spares ([[230.8]]).</li>
<li>Service equipment must be listed or field evaluated. Meter sockets (not under utility control), power distribution blocks, and pressure connectors must be listed ([[230.2]]).</li>
</ul>`
    },
    {
      id: 'overhead', title: 'Overhead services: clearances and masts',
      html: `
<h3>Vertical clearance above grade [[230.24(B)]]</h3>
<div class="tablewrap"><table>
<tr><td><b>10 ft</b></td><td>At the service entrance, lowest point of the drip loop, and over sidewalks accessible only to pedestrians (cabled with a bare messenger, 150 V or less to ground)</td></tr>
<tr><td><b>12 ft</b></td><td>Over residential property and driveways, and commercial areas not subject to truck traffic (300 V or less to ground)</td></tr>
<tr><td><b>15 ft</b></td><td>Same areas as the 12 ft row, but over 300 V to ground</td></tr>
<tr><td><b>18 ft</b></td><td>Over public streets, alleys, roads, parking areas with truck traffic, non-residential driveways, and farm land</td></tr>
<tr><td><b>24½ ft</b></td><td>Over railroad tracks</td></tr>
</table></div>
<ul>
<li><b>Above roofs</b>: 8 ft 6 in., kept for 3 ft past the roof edge ([[230.24(A)]]). Exceptions allow 3 ft over a steep roof (4/12 slope or more) at 300 V or less, and 18 in. over just the overhang when no more than 6 ft of conductor (4 ft horizontally) passes over it and it ends at a through-the-roof mast.</li>
<li><b>From windows, doors, porches, balconies, and fire escapes</b>: 3 ft for open conductors. Running above the top of a window is OK ([[230.9(A)]]).</li>
<li><b>Point of attachment</b>: never less than <b>10 ft</b> above finished grade ([[230.26]]).</li>
<li><b>Mast</b>: strong enough or braced/guyed for the pull of the drop. Don't attach the drop between the weatherhead and a coupling that sits above the last support ([[230.28]]).</li>
<li><b>Trees</b> can't be used to support service conductors ([[230.10]]).</li>
</ul>
<h3>Weatherhead details [[230.54]]</h3>
<ul>
<li>Raceways need a <b>service head</b> listed for wet locations.</li>
<li>The service head goes <b>above</b> the point of attachment (or within 24 in. if that's impractical).</li>
<li>Conductors of different potential come out through separately bushed openings.</li>
<li><b>Drip loops</b> on individual conductors: connections are made below the level of the service head so water can't run in.</li>
</ul>
<p>Service-entrance cable (SE) gets strapped within <b>12 in.</b> of the service head, gooseneck, or enclosure and every <b>30 in.</b> ([[230.51(A)]]). Service raceways exposed to weather must be listed for wet locations and arranged to drain ([[230.53]]).</p>`
    },
    {
      id: 'sizes', title: 'Service conductor sizes',
      html: `
<ul>
<li>Overhead and underground service conductors: minimum <b>8 AWG copper</b> or <b>6 AWG aluminum</b> ([[230.23(B)]], [[230.31(B)]]). A single small branch circuit can use 12 AWG copper.</li>
<li>Service-entrance conductors: ampacity at least the calculated load (Article 120), and at least the rating of the service disconnect required by 230.79 ([[230.42]]).</li>
<li>The neutral must be at least the size required by [[250.24(D)]] (based on the size of the service conductors).</li>
<li><b>Dwelling services</b>: single-phase 120/240 V dwelling services and feeders can use the special sizing in [[310.12]] (83% rule).</li>
</ul>
<h3>Minimum service disconnect rating [[230.79]]</h3>
<div class="tablewrap"><table>
<tr><td>One branch circuit only</td><td>15 A</td></tr>
<tr><td>Two 2-wire branch circuits</td><td>30 A</td></tr>
<tr><td><b>One-family dwelling</b></td><td><b>100 A</b></td></tr>
<tr><td>All others</td><td>60 A</td></tr>
</table></div>`
    },
    {
      id: 'disconnect', title: 'Service disconnects',
      html: `
<ul>
<li>Every building needs a means to disconnect all ungrounded conductors from the service ([[230.70]]).</li>
<li><b>Location, one- and two-family dwellings</b>: in a <b>readily accessible outdoor location</b>, on the dwelling or within sight of it ([[230.70(A)]]). This lets firefighters kill power from outside.</li>
<li><b>Location, other buildings</b>: readily accessible, either outside or inside <b>nearest the point of entrance</b> of the service conductors.</li>
<li><b>Never in bathrooms.</b></li>
<li><b>Marking</b>: each one is marked <b>"SERVICE DISCONNECT"</b>. For one- and two-family dwellings, it's marked <b>"EMERGENCY DISCONNECT"</b> with white letters on a red background, at least ½ in. high ([[230.70(B)]]).</li>
<li><b>Two to six disconnects</b> are allowed per service, but each must be in its <b>own enclosure</b>, its own switchboard section, or its own compartment ([[230.71(B)]]). The old "six breakers in one panel" setup is no longer allowed for new work.</li>
<li>The disconnects must be <b>grouped</b>, and each marked with the load it serves ([[230.72]]). Disconnects for fire pumps and emergency/standby services are installed remote from the normal ones.</li>
<li>In multi-tenant buildings, each occupant needs access to their own service disconnect.</li>
<li>Each service disconnect must open all ungrounded conductors simultaneously ([[230.74]]).</li>
</ul>
<h3>Overcurrent and ground-fault protection</h3>
<ul>
<li>Each ungrounded service conductor needs overload protection, rated no higher than the conductor ampacity (with exceptions) ([[230.90]]). No overcurrent device in the neutral unless it opens all conductors at once.</li>
<li><b>GFPE</b>: required on each service disconnect rated <b>1000 A or more</b> on solidly grounded wye systems over 150 V to ground (480Y/277 V) ([[230.95(A)]]). It's not required for continuous industrial processes where a sudden shutdown would be more dangerous.</li>
<li><b>Surge protection</b>: services to dwellings, dorms, hotel guest rooms, nursing home sleeping rooms, and fire station sleeping quarters need a Type 1 or Type 2 SPD in or right next to the service equipment ([[230.67]]).</li>
</ul>`
    },
    {
      id: 'outside', title: 'Feeders to other buildings (225)',
      html: `
<p>[[Art 225]] covers branch circuits and feeders that run outside, on or between buildings, like a feeder from the main building to a detached shop.</p>
<ul>
<li><b>One supply per building</b>: a building fed from another building's service gets only one feeder or branch circuit, unless an exception applies (emergency systems, fire pumps, capacity, and others) ([[225.30]]). A multiwire branch circuit counts as one.</li>
<li><b>Disconnect at the building</b>: there must be a disconnect for all ungrounded conductors. Inside, put it at a readily accessible spot nearest where the conductors enter. Outside, put it on or within sight of the building ([[225.31]]).</li>
<li>Up to two to six disconnects, grouped ([[225.33]], [[225.34]]). Minimum disconnect ratings mirror services: one-family dwelling 100 A ([[225.39]]).</li>
<li><b>Emergency disconnect for dwellings</b>: one- and two-family dwellings fed this way need an outdoor, readily accessible emergency disconnect on or within sight of the house, unless the service disconnect already meets that ([[225.41]]).</li>
<li>Overhead clearances for these conductors are in [[225.18]] and [[225.19]], and track the service clearances.</li>
<li>Trees can't support overhead conductor spans ([[225.26]]). Raceways entering a building from underground must be sealed ([[225.27]]).</li>
</ul>
<div class="job"><b>On the job</b>A feeder to a detached building needs four wires: hots, neutral, and an equipment grounding conductor. The neutral and ground stay separate at the second building, and that building gets its own grounding electrode. That's covered in the Grounding section ([[250.32]]).</div>`
    }
  ],
  questions: [
    { l: 'parts', q: 'The utility\'s underground conductors to a building are the:', c: ['Service lateral', 'Service drop', 'Feeder', 'Service-entrance conductors'], w: 'Drop = overhead, lateral = underground.', r: 'Art 100' },
    { l: 'parts', q: 'A building is generally supplied by how many services?', c: ['One', 'Two', 'As many as needed', 'One per floor'], w: 'Only one, unless 230.4(A) through (D) permits more.', r: '230.4' },
    { l: 'parts', q: 'Service conductors are considered outside a building when installed under at least ___ of concrete beneath the building.', c: ['2 in.', '4 in.', '6 in.', '18 in.'], w: '50 mm (2 in.).', r: '230.6' },
    { l: 'parts', q: 'Service conductors in conduit are considered outside the building when under at least ___ of earth beneath it.', c: ['18 in.', '12 in.', '24 in.', '6 in.'], w: '450 mm (18 in.).', r: '230.6' },
    { l: 'parts', q: 'Which may be installed in the same raceway as service conductors?', c: ['The grounding electrode conductor', 'A branch circuit for the porch light', 'A feeder to a subpanel', 'Phone cable'], w: '230.7 Exception No. 1: GECs and supply-side bonding jumpers.', r: '230.7' },
    { l: 'parts', q: 'Where a service raceway enters a building, it must be:', c: ['Sealed, including spare raceways', 'Left open to drain', 'Bonded with a jumper', 'Painted'], w: '230.8.', r: '230.8' },
    { l: 'overhead', q: 'Minimum clearance of overhead service conductors over residential driveways (300 V or less to ground):', c: ['12 ft', '10 ft', '15 ft', '18 ft'], w: '230.24(B)(2): 3.7 m (12 ft).', r: '230.24(B)' },
    { l: 'overhead', q: 'Minimum clearance of overhead service conductors over a public street:', c: ['18 ft', '15 ft', '12 ft', '24½ ft'], w: '230.24(B)(4): 5.5 m (18 ft).', r: '230.24(B)' },
    { l: 'overhead', q: 'Minimum clearance at the lowest point of the drip loop (cabled with messenger, ≤150 V to ground):', c: ['10 ft', '8 ft', '12 ft', '15 ft'], w: '230.24(B)(1): 3.0 m (10 ft).', r: '230.24(B)' },
    { l: 'overhead', q: 'Over residential property where voltage exceeds 300 V to ground, the clearance is:', c: ['15 ft', '12 ft', '18 ft', '10 ft'], w: '230.24(B)(3).', r: '230.24(B)' },
    { l: 'overhead', q: 'Minimum clearance of overhead service conductors over railroad tracks:', c: ['24½ ft', '18 ft', '22 ft', '30 ft'], w: '7.5 m (24½ ft).', r: '230.24(B)' },
    { l: 'overhead', q: 'Minimum vertical clearance of service conductors above a flat roof (general rule):', c: ['8 ft 6 in.', '3 ft', '10 ft', '18 in.'], w: '2.6 m (8 ft 6 in.).', r: '230.24(A)' },
    { l: 'overhead', q: 'Over a roof with a slope of 4 in 12 or more (300 V or less), the roof clearance may be reduced to:', c: ['3 ft', '18 in.', '8 ft', '5 ft'], w: 'Exception No. 2.', r: '230.24(A)' },
    { l: 'overhead', q: 'Open service conductors must be kept at least ___ from windows that open, doors, porches, and fire escapes.', c: ['3 ft', '2 ft', '5 ft', '10 ft'], w: '900 mm (3 ft); above the top of a window is OK.', r: '230.9(A)' },
    { l: 'overhead', q: 'The service drop point of attachment may never be less than ___ above finished grade.', c: ['10 ft', '12 ft', '8 ft', '15 ft'], w: '3.0 m (10 ft).', r: '230.26' },
    { l: 'overhead', q: 'Service heads must be located:', c: ['Above the point of attachment of the service drop', 'Below the point of attachment', 'At the meter', 'Within 10 ft of grade'], w: 'Or within 24 in. if impracticable.', r: '230.54(C)' },
    { l: 'overhead', q: 'Service-entrance cable must be supported within 12 in. of the service head and at intervals not exceeding:', c: ['30 in.', '4½ ft', '24 in.', '6 ft'], w: '750 mm (30 in.).', r: '230.51(A)' },
    { l: 'overhead', q: 'Trees may be used to support overhead service conductors.', c: ['False', 'True', 'True if guyed', 'True for laterals'], w: 'Vegetation shall not be used for support.', r: '230.10' },
    { l: 'sizes', q: 'Minimum size of overhead service conductors (general):', c: ['8 AWG copper or 6 AWG aluminum', '6 AWG copper or 4 AWG aluminum', '10 AWG copper', '4 AWG copper'], w: '230.23(B).', r: '230.23(B)' },
    { l: 'sizes', q: 'Minimum service disconnect rating for a one-family dwelling:', c: ['100 A', '60 A', '150 A', '200 A'], w: '230.79(C).', r: '230.79' },
    { l: 'sizes', q: 'Minimum service disconnect rating for a commercial building (general):', c: ['60 A', '100 A', '30 A', '200 A'], w: '230.79(D) All others: 60 A.', r: '230.79' },
    { l: 'sizes', q: 'Minimum service disconnect for only two 2-wire branch circuits:', c: ['30 A', '15 A', '60 A', '20 A'], w: '230.79(B).', r: '230.79' },
    { l: 'disconnect', q: 'For a one-family dwelling, the service disconnect must be located:', c: ['In a readily accessible outdoor location, on or within sight of the dwelling', 'Inside nearest the point of entrance', 'In the garage', 'Anywhere readily accessible'], w: '230.70(A)(1).', r: '230.70(A)' },
    { l: 'disconnect', q: 'For a commercial building, the service disconnect may be inside:', c: ['Nearest the point of entrance of the service conductors', 'Anywhere in the building', 'Only in a fire-rated room', 'Only on the roof'], w: '230.70(A)(2).', r: '230.70(A)' },
    { l: 'disconnect', q: 'Service disconnects may be installed in bathrooms.', c: ['False', 'True', 'True if readily accessible', 'True in commercial buildings'], w: '230.70(A)(3).', r: '230.70(A)' },
    { l: 'disconnect', q: 'One- and two-family dwelling service disconnect enclosures must be marked:', c: ['EMERGENCY DISCONNECT', 'MAIN', 'SERVICE ENTRANCE', 'DANGER HIGH VOLTAGE'], w: 'Red background, white text, letters at least ½ in. high.', r: '230.70(B)' },
    { l: 'disconnect', q: 'Up to how many service disconnects are permitted for each service?', c: ['Six', 'Two', 'Four', 'Unlimited'], w: 'Two to six, each in its own enclosure, section, or compartment.', r: '230.71(B)' },
    { l: 'disconnect', q: 'In new work, multiple service disconnects may be installed in a single panelboard enclosure.', c: ['False', 'True', 'True up to six', 'True in dwellings'], w: 'Each must be in a separate enclosure, switchboard section, or compartment (existing installs are excepted).', r: '230.71(B)' },
    { l: 'disconnect', q: 'GFPE is required on service disconnects rated ___ or more on 480Y/277 V systems.', c: ['1000 A', '800 A', '1200 A', '600 A'], w: '230.95(A).', r: '230.95(A)' },
    { l: 'disconnect', q: 'An overcurrent device may be placed in a grounded service conductor:', c: ['Only if it\'s a breaker that opens all conductors simultaneously', 'Always', 'Never', 'Only fuses'], w: '230.90(B).', r: '230.90' },
    { l: 'disconnect', q: 'Dwelling services require what type of surge-protective device?', c: ['Type 1 or Type 2', 'Type 3', 'Type 4', 'None'], w: '230.67.', r: '230.67' },
    { l: 'outside', q: 'A detached garage fed from the house is generally limited to:', c: ['One feeder or branch circuit', 'Two feeders', 'One per circuit needed', 'One service'], w: 'Multiwire branch circuits count as one.', r: '225.30' },
    { l: 'outside', q: 'If the disconnect for a building fed by a feeder is outside, it must be:', c: ['On or within sight of the building', 'Within 100 ft', 'At the main building', 'Inside a locked room'], w: '225.31(B).', r: '225.31' },
    { l: 'outside', q: 'Which article covers outside branch circuits and feeders?', c: ['225', '230', '215', '250'], w: '225 Outside Branch Circuits and Feeders.', r: 'Art 225' },
    { t: 'find', l: 'outside', q: 'Where are the vertical clearances for overhead service conductors?', c: ['230.24(B)', '225.18', '230.9', '680.9'], w: '230.24(B) (225.18 is for outside feeders/branch circuits).', r: '230.24(B)' },
    { t: 'find', l: 'outside', q: 'Where is the max number of service disconnects?', c: ['230.71', '230.72', '230.79', '225.33'], w: '230.71.', r: '230.71' },
    { t: 'find', l: 'outside', q: 'Where is the minimum service disconnect rating?', c: ['230.79', '230.42', '230.90', '230.71'], w: '230.79.', r: '230.79' },
    { t: 'find', l: 'outside', q: 'Where is GFPE for services required?', c: ['230.95', '215.10', '210.13', '240.13'], w: '230.95 services; 215.10 feeders; 210.13 branch circuits.', r: '230.95' }
  ]
});
