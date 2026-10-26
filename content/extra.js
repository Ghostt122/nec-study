(window.MODULES ||= []).push({
  id: 'extra', icon: '🏭', title: 'More Code You Need: Industrial Equipment',
  blurb: 'Plant-floor rules the other modules don\'t cover: industrial control panels (409), industrial machinery (670), capacitors (460), and busway (368).',
  lessons: [
    {
      id: 'icp', title: 'Industrial control panels (409)',
      html: `
<p>An <b>industrial control panel</b> is the box full of contactors, starters, PLCs, and terminal blocks that runs a process or machine. [[Art 409]] covers them at 1000 V ac / 1500 V dc or less ([[409.1]]). It is a different article from panelboards (408).</p>
<h3>Supply conductors [[409.20]]</h3>
<p>Ampacity of the supply conductors must be at least:</p>
<ul>
<li><b>125%</b> of the full-load current of all <b>heating</b> loads, plus</li>
<li><b>125%</b> of the full-load current of the <b>highest rated motor</b>, plus</li>
<li>the <b>sum</b> of the full-load currents of all other motors and apparatus that may run at the same time (based on duty cycle).</li>
</ul>
<h3>Overcurrent protection [[409.21]]</h3>
<ul>
<li>Each incoming supply circuit is protected by an OCPD <b>ahead of</b> the panel or a <b>single main OCPD inside</b> it. With the main inside, the supply conductors are treated as feeders or taps under 240.21.</li>
<li>Maximum rating: the largest branch-circuit short-circuit and ground-fault device in the panel, <b>plus 125%</b> of the resistance heating loads, <b>plus</b> the full-load currents of everything else that can run at the same time ([[409.21]](C)).</li>
</ul>
<h3>Short-circuit current rating (SCCR) [[409.22]]</h3>
<p>A panel <b>can't be installed where the available fault current is higher than its marked SCCR</b>. Where the SCCR marking is required, the available fault current at the panel and the <b>date</b> it was calculated must be documented and made available to those who inspect, install, or maintain it.</p>
<h3>Nameplate [[409.110]]</h3>
<p>Required markings include the manufacturer; supply voltage, phases, frequency, and full-load current for each incoming supply circuit; the <b>SCCR</b>; "suitable for use as service equipment" if it is; a wiring diagram or its number; and an enclosure type number. Voltage/phase/FLA and the SCCR go on the <b>outside</b> of the enclosure. Panels with only control-circuit components don't need an SCCR marking.</p>
<div class="job"><b>On the job</b>Before you land a new feeder on a control panel, find the SCCR on the nameplate. If the switchgear label says 42 kA available and the panel says 5 kA SCCR, stop and tell your foreman.</div>`
    },
    {
      id: 'machinery', title: 'Industrial machinery (670)',
      html: `
<p>[[Art 670]] covers the nameplate, surge protection, and the size and overcurrent protection of the <b>supply conductors</b> to industrial machinery (machine tools, packaging lines). For the electrical equipment <b>on</b> the machine itself, the [[670.1]] Informational Note points you to NFPA 79, Electrical Standard for Industrial Machinery.</p>
<h3>Machine nameplate [[670.4]]</h3>
<p>Permanent, visible, on or next to the main control enclosure. It shows: supply voltage, phases, frequency, and full-load current; the <b>maximum OCPD rating</b>; the largest motor's current; the machine control panel's <b>SCCR</b>; and the electrical diagram number. The full-load current on the plate can't be less than everything that runs at the same time.</p>
<h3>Supply conductors [[670.5]]</h3>
<ul>
<li><b>Size</b> (A): <b>125%</b> of resistance heating loads + <b>125%</b> of the highest rated motor + the sum of all other motors and apparatus that may run at the same time. Same formula as 409.20.</li>
<li><b>Disconnect</b> (B): each machine is an individual unit and gets its own disconnecting means. The disconnect doesn't have to include overcurrent protection.</li>
<li><b>OCPD on the machine</b> (C): a single breaker or set of fuses per supply circuit, and the supply conductors are feeders or taps under 240.21.</li>
</ul>
<h3>SCCR and surge [[670.6]], [[670.7]]</h3>
<p>Machinery can't be installed where the available fault current exceeds its marked SCCR, and the machine must be <b>field-marked with the available fault current</b> (marking per 110.21(B)). Machinery with <b>safety circuits</b> must have <b>surge protection</b>.</p>
<div class="tip"><b>Example</b>Nameplate currents: heater 10 A, largest motor 20 A, two other motors 8 A and 6 A, all able to run together.<br>
Supply conductor ampacity ≥ (10 × 1.25) + (20 × 1.25) + 8 + 6 = 12.5 + 25 + 14 = <b>51.5 A</b>.</div>`
    },
    {
      id: 'caps', title: 'Capacitors (460)',
      html: `
<p>Power-factor correction capacitors show up on big motors and in plant switchgear. [[Art 460]] covers installing them; capacitors built into other equipment (like a motor-run cap in an A/C unit) are excluded ([[460.1]]).</p>
<ul>
<li><b>Stored energy</b> [[460.6]]: a capacitor stays charged after you open the switch. It must have a discharge means that brings it down to <b>50 V or less within 1 minute</b>. The discharge circuit is permanently connected or connects automatically; manual discharge switching isn't allowed.</li>
<li><b>Conductors</b> [[460.8]]: at least <b>135%</b> of the capacitor's rated current. Conductors from a motor's terminals or motor circuit to a capacitor: at least <b>one-third</b> the ampacity of the motor circuit conductors, and never less than 135% of the capacitor current.</li>
<li><b>Overcurrent</b> [[460.9]]: an OCPD in each ungrounded conductor for each capacitor bank, rated as low as practicable. Not needed for a capacitor on the load side of the motor overload device.</li>
<li><b>Disconnect</b> [[460.10]]: opens all ungrounded conductors at once and is rated at least <b>135%</b> of the capacitor current. Not needed for a capacitor on the load side of a motor controller.</li>
</ul>
<div class="warn"><b>Safety</b>Wait at least the discharge time and <b>test</b> before touching capacitor terminals, even with the disconnect open and locked.</div>
<div class="tip"><b>Example</b>Capacitor rated 30 A: conductors ≥ 30 × 1.35 = <b>40.5 A</b>; the disconnect must also be rated at least 40.5 A.</div>`
    },
    {
      id: 'busway', title: 'Busway (368)',
      html: `
<p>Busway (bus duct) is a factory-built metal enclosure with bus bars inside, often run overhead in plants with plug-in units that drop down to machines. [[Art 368]].</p>
<ul>
<li><b>Uses permitted</b> [[368.10]]: exposed where visible, or behind access panels if totally enclosed, nonventilating, with joints accessible.</li>
<li><b>Not permitted</b> [[368.12]]: where subject to severe physical damage or corrosive vapors; in hoistways; in hazardous locations unless specifically approved; outdoors or in wet or damp locations unless identified for it. Lighting and trolley busway: not less than <b>8 ft</b> above the floor or working platform unless it has an identified cover.</li>
<li><b>Support</b> [[368.30]]: at intervals not over <b>5 ft</b> unless designed and marked otherwise.</li>
<li><b>Overcurrent</b> [[368.17]]: protect busway at its current rating (240.4 is allowed). Where the busway is <b>reduced in ampacity</b>, you need overcurrent protection, except in <b>industrial establishments only</b>: the smaller busway may be up to <b>50 ft</b> long if its ampacity is at least <b>one-third</b> of the OCPD rating back on the line and it's free from contact with combustibles.</li>
<li><b>Plug-in devices</b> [[368.17]](C): taps off a feeder busway must contain the OCPD for the circuit, as an externally operable breaker or fusible switch. Where they're out of reach, ropes, chains, or sticks must be provided to operate the disconnect from the floor.</li>
</ul>`
    }
  ],
  questions: [
    { v: 1, l: 'icp', q: 'Which article covers industrial control panels?', c: ['Article 409', 'Article 408', 'Article 430', 'Article 670'], w: '408 = switchboards and panelboards, 409 = industrial control panels, 670 = industrial machinery.', r: 'Art 409', t: 'find' },
    { v: 1, l: 'icp', q: 'Industrial control panel supply conductors must be at least 125% of heating loads plus 125% of the highest rated motor plus:', c: ['The sum of all other motors and apparatus that may run at the same time', '125% of all other motors', '100% of the OCPD rating', 'Nothing else'], w: '409.20.', r: '409.20' },
    { v: 1, l: 'icp', q: 'An industrial control panel may not be installed where the available fault current exceeds its:', c: ['Short-circuit current rating (SCCR)', 'Full-load current', 'Enclosure type number', 'Interrupting rating of the largest contactor'], w: '409.22(A).', r: '409.22' },
    { v: 1, l: 'icp', q: 'When an industrial control panel must be marked with an SCCR, what must be documented?', c: ['The available fault current at the panel and the date it was calculated', 'Only the installer\'s license number', 'The panel weight', 'Nothing'], w: '409.22(B).', r: '409.22' },
    { v: 1, l: 'icp', q: 'Which industrial control panel markings must be on the OUTSIDE of the enclosure?', c: ['Supply voltage/phase/frequency/full-load current, and the SCCR', 'The wiring diagram number', 'The enclosure type number', 'The manufacturer\'s name only'], w: '409.110: items (2) and (3) go on the outside.', r: '409.110' },
    { v: 1, l: 'machinery', q: 'The wiring on an industrial machine itself is covered mainly by:', c: ['NFPA 79', 'NEC Article 409', 'NEC Article 430', 'NFPA 70E'], w: '670.1 Informational Note refers to NFPA 79, Electrical Standard for Industrial Machinery. Article 670 covers the nameplate and supply conductors.', r: '670.1' },
    { l: 'machinery', q: 'Machine nameplate: heater 10 A, largest motor 20 A, other motors 8 A and 6 A. Minimum supply conductor ampacity:', c: ['51.5 A', '44 A', '55 A', '47.5 A'], w: '(10 × 1.25) + (20 × 1.25) + 8 + 6 = 51.5 A.', r: '670.5' },
    { v: 1, l: 'machinery', q: 'Does the disconnecting means for an industrial machine have to include overcurrent protection?', c: ['No', 'Yes, always fuses', 'Yes, always a breaker', 'Only over 600 V'], w: '670.5(B).', r: '670.5' },
    { v: 1, l: 'machinery', q: 'Industrial machinery must be field-marked with:', c: ['The available fault current', 'The installer\'s name', 'The date of the last inspection', 'The conductor size'], w: '670.6(B).', r: '670.6' },
    { v: 1, l: 'machinery', q: 'Industrial machinery with safety circuits must have:', c: ['Surge protection', 'A GFCI main', 'An AFCI', 'A second disconnect'], w: '670.7.', r: '670.7' },
    { v: 1, l: 'caps', q: 'After a capacitor is disconnected, its residual voltage must drop to 50 V or less within:', c: ['1 minute', '5 minutes', '10 seconds', '15 minutes'], w: '460.6(A) (1000 V or less).', r: '460.6' },
    { v: 1, l: 'caps', q: 'Capacitor circuit conductors must have an ampacity of at least ___ of the capacitor\'s rated current.', c: ['135%', '125%', '150%', '100%'], w: '460.8.', r: '460.8' },
    { l: 'caps', q: 'A capacitor is rated 30 A. Minimum conductor ampacity:', c: ['40.5 A', '37.5 A', '30 A', '45 A'], w: '30 × 1.35 = 40.5 A.', r: '460.8' },
    { v: 1, l: 'caps', q: 'A capacitor connected on the load side of a motor overload device needs a separate OCPD:', c: ['No, it\'s not required', 'Yes, always', 'Only if over 50 kVAR', 'Only outdoors'], w: '460.9 Exception.', r: '460.9' },
    { v: 1, l: 'caps', q: 'The disconnecting means for a capacitor bank must be rated at least:', c: ['135% of the capacitor\'s rated current', '125% of the capacitor\'s rated current', '100% of the capacitor\'s rated current', '115% of the motor FLC'], w: '460.10.', r: '460.10' },
    { v: 1, l: 'busway', q: 'Busway must be supported at intervals not over ___ unless designed and marked otherwise.', c: ['5 ft', '10 ft', '3 ft', '8 ft'], w: '368.30.', r: '368.30' },
    { v: 1, l: 'busway', q: 'Busway may NOT be installed:', c: ['In hoistways', 'Exposed where visible', 'Behind access panels with accessible joints', 'In a dry industrial building'], w: '368.12(B).', r: '368.12' },
    { v: 1, l: 'busway', q: 'In industrial establishments only, a reduced-ampacity busway may skip overcurrent protection if it is not over ___ long and at least 1/3 the upstream OCPD rating.', c: ['50 ft', '25 ft', '10 ft', '100 ft'], w: '368.17(B) Exception (also free from contact with combustibles).', r: '368.17' },
    { v: 1, l: 'busway', q: 'Lighting and trolley busway without an identified cover must be at least ___ above the floor or working platform.', c: ['8 ft', '7 ft', '10 ft', '6 ft 7 in.'], w: '368.12(E).', r: '368.12' }
  ]
});
