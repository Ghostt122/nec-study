(window.MODULES ||= []).push({
  id: 'motors', icon: '⚙️', title: 'Chapter 4: Motors, A/C, Generators, Transformers, Batteries (430–480)',
  blurb: 'Motor wire, breakers, overloads and disconnects; A/C equipment; generators; transformers; stationary batteries. Big for industrial work and the exam.',
  lessons: [
    {
      id: 'flc', title: 'Motor current: table vs. nameplate',
      html: `
<p>The first rule of motor math: use the right current for the right job ([[430.6(A)]]).</p>
<div class="tablewrap"><table>
<tr><th>To size…</th><th>Use…</th></tr>
<tr><td>Conductors, disconnect switch ratings, branch-circuit short-circuit and ground-fault protection (breaker or fuse)</td><td><b>Table FLC</b>: [[Table 430.248]] single-phase, [[Table 430.250]] three-phase (and [[Table 430.247]] DC)</td></tr>
<tr><td><b>Overload</b> protection (heaters)</td><td><b>Nameplate</b> full-load current</td></tr>
</table></div>
<p><b>Exception</b>: for motors built for low speeds (less than 1200 RPM), high torques, canned pumps, and multispeed motors, use the <b>nameplate</b> current for the wire, switches, and breaker too ([[430.6(A)]]).</p>
<h3>Some three-phase FLCs from [[Table 430.250]]</h3>
<div class="tablewrap"><table>
<tr><th>HP</th><th>208 V</th><th>230 V</th><th>460 V</th></tr>
<tr><td>5</td><td>16.7</td><td>15.2</td><td>7.6</td></tr>
<tr><td>10</td><td>30.8</td><td>28</td><td>14</td></tr>
<tr><td>25</td><td>74.8</td><td>68</td><td>34</td></tr>
<tr><td>50</td><td>143</td><td>130</td><td>65</td></tr>
<tr><td>100</td><td>273</td><td>248</td><td>124</td></tr>
</table></div>
<div class="test"><b>Exam habit</b>Every motor question: open Table 430.250 (or 430.248), find the HP and voltage, and write down the FLC before doing anything else. The nameplate amps only matter for overloads.</div>`
    },
    {
      id: 'conductors', title: 'Motor conductors and overloads',
      html: `
<h3>Conductors</h3>
<ul>
<li><b>Single motor</b>: at least <b>125% of the table FLC</b> ([[430.22]]).</li>
<li><b>Several motors on a feeder</b>: 125% of the largest motor's FLC + the sum of the other motors' FLCs + 100% of noncontinuous other loads + 125% of continuous other loads ([[430.24]]).</li>
</ul>
<div class="tip"><b>Example</b>25 hp, 460 V, 3-phase: FLC 34 A. Conductors ≥ 34 × 1.25 = <b>42.5 A</b>, so use 8 AWG Cu (50 A in the 75°C column, with 75°C-rated terminals).</div>
<h3>Overload protection [[430.32(A)]]</h3>
<p>For continuous-duty motors over 1 hp, a separate overload device is sized from the <b>nameplate</b> current, at no more than:</p>
<div class="tablewrap"><table>
<tr><td>Service factor 1.15 or more</td><td>125%</td></tr>
<tr><td>Temperature rise 40°C or less</td><td>125%</td></tr>
<tr><td>All other motors</td><td>115%</td></tr>
</table></div>
<p>If that won't let the motor start, you may go up to <b>140%</b> (SF 1.15+ or 40°C rise) or <b>130%</b> (all others) ([[430.32(C)]]).</p>
<div class="tip"><b>Example</b>Nameplate 32 A, SF 1.15: overload ≤ 32 × 1.25 = <b>40 A</b> (max 32 × 1.40 = 44.8 A if it won't start).</div>`
    },
    {
      id: 'ocpd', title: 'Motor breakers and fuses (430.52)',
      html: `
<p>The motor branch-circuit breaker or fuse protects against <b>short circuits and ground faults</b>, not overload. It has to be big enough to let the motor start (inrush can be 6× running current). Max size is a percentage of <b>table FLC</b> from [[Table 430.52(C)(1)]] (it was Table 430.52 in older books):</p>
<div class="tablewrap"><table>
<tr><th>Device</th><th>Most AC motors (single-phase, squirrel cage)</th></tr>
<tr><td>Nontime-delay fuse</td><td>300%</td></tr>
<tr><td>Dual-element (time-delay) fuse</td><td>175%</td></tr>
<tr><td>Instantaneous-trip breaker</td><td>800% (1100% for Design B energy-efficient, Design B premium efficiency, Design BE, and Design CE)</td></tr>
<tr><td><b>Inverse time breaker</b> (normal breaker)</td><td><b>250%</b></td></tr>
</table></div>
<ul>
<li>If the result isn't a standard size, you may go to the <b>next higher standard size</b> ([[430.52(C)]]).</li>
<li>If it still won't start the motor, you may go higher: inverse time breaker up to <b>400%</b> (FLC 100 A or less) or 300% (over 100 A), time-delay fuse up to <b>225%</b>, nontime-delay fuse (600 A or less) up to 400% ([[430.52(C)]]).</li>
<li>Wound-rotor motors and DC motors have lower percentages (150% for fuses and inverse time breakers). Check the table row for the motor type.</li>
<li>If the manufacturer's overload relay table or the equipment marks a lower max breaker or fuse, that lower value can't be exceeded.</li>
</ul>
<div class="tip"><b>Example</b>25 hp, 460 V: FLC 34 A. Inverse time breaker: 34 × 2.5 = 85 A, next standard size up = <b>90 A</b>. (The 8 AWG wire on a 90 A breaker is fine here, because the overloads protect the wire from overload.)</div>
<h3>Motor feeders [[430.62(A)]]</h3>
<p>Feeder breaker ≤ the largest motor's branch-circuit breaker rating + the sum of the other motors' FLCs. Here you <b>round down</b>; don't go to the next size up.</p>`
    },
    {
      id: 'disconnect', title: 'Motor disconnects and controllers',
      html: `
<ul>
<li><b>Controller disconnect</b>: each motor controller (starter) needs a disconnect located <b>in sight from</b> the controller ([[430.102(A)]]).</li>
<li><b>Motor disconnect</b>: a disconnect must also be <b>in sight from the motor and the driven machinery</b>. The controller disconnect can serve if it's in sight of the motor ([[430.102(B)]]).</li>
<li><b>Exception</b>: no motor-location disconnect is needed if the controller disconnect is <b>lockable open</b> (110.25) and either a disconnect at the motor is impracticable or increases hazards (big motors, VFD motors, submersibles, hazardous locations), or it's an industrial site with written safety procedures and qualified people.</li>
<li>"In sight" = visible and within <b>50 ft</b> ([[110.29]]).</li>
<li><b>Rating</b>: the disconnect must be rated at least <b>115% of the table FLC</b> ([[430.110(A)]]). A listed unfused motor-circuit switch rated in horsepower at least the motor HP may be less than 115%.</li>
<li>At least one disconnect must be readily accessible ([[430.107]]).</li>
<li><b>Operation</b>: it opens all ungrounded conductors, no pole can operate by itself, and it can't close automatically ([[430.103]]). It must plainly show <b>ON or OFF</b> ([[430.104]]).</li>
</ul>
<h3>What can be the disconnect [[430.109]]</h3>
<ul>
<li>Normally: a listed horsepower-rated motor-circuit switch, a listed molded case circuit breaker, a listed molded case switch, or other listed devices in 430.109(A).</li>
<li><b>⅛ hp or less</b> (stationary): the branch-circuit breaker or fuse can be the disconnect ([[430.109(B)]]).</li>
<li><b>2 hp or less, 300 V or less</b>: a general-use switch rated at least <b>twice</b> the motor FLC, or an AC-only snap switch where the motor FLC is not more than <b>80%</b> of the switch rating.</li>
</ul>
<div class="job"><b>On the job</b>That's why every rooftop unit and exhaust fan has a "local disconnect" right next to it: lockout at the machine where you can see it.</div>`
    },
    {
      id: 'ac', title: 'Air conditioning and refrigeration (440)',
      html: `
<p>Hermetic refrigerant motor-compressors (A/C units, condensers, coolers) use <b>nameplate</b> values: rated-load current (RLA) or branch-circuit selection current, whichever is greater.</p>
<ul>
<li><b>Conductors</b>: at least <b>125%</b> of the RLA or branch-circuit selection current, whichever is greater ([[440.32]]). In practice, use the <b>MCA</b> (minimum circuit ampacity) on the unit's nameplate.</li>
<li><b>Breaker/fuse</b>: not over <b>175%</b> of the RLA or branch-circuit selection current (whichever is greater); next standard size up allowed; up to <b>225%</b> if needed to start; and never required to be under 15 A ([[440.22(A)]]). In practice, use the <b>MOCP</b> (max overcurrent protection) on the nameplate. Never exceed it.</li>
<li><b>Disconnect</b>: <b>within sight</b> of and <b>readily accessible</b> from the unit. It may be on or in the unit, but <b>not on the access panels</b> or covering the nameplate ([[440.14]]).</li>
<li>Don't forget the service receptacle within 25 ft, GFCI protected ([[210.63]], [[210.8(E)]]).</li>
</ul>
<div class="test"><b>Why 12 AWG on a 30 A breaker can be legal</b>A/C nameplate MCA 18 A, MOCP 30 A: 12 AWG (rated for 20 A or more) is fine with a 30 A breaker, because 240.4(G) lets Article 440 override the small conductor rule.</div>`
    },
    {
      id: 'gen', title: 'Generators and transformers (445, 450)',
      html: `
<h3>Generators [[Art 445]]</h3>
<ul>
<li>Conductors from the generator terminals to the first overcurrent device: at least <b>115%</b> of the nameplate current ([[445.13]]).</li>
<li>Portable generators that only supply their own receptacles and equipment don't need a ground rod, if equipment and receptacle grounds bond to the frame ([[250.34(A)]]).</li>
<li><b>Disconnect</b>: generators (other than cord-and-plug portable ones) need a disconnect that opens all ungrounded conductors and is lockable open. It may be inside the generator behind a cover, with a label saying where ([[445.18]]).</li>
<li><b>Emergency shutdown</b>: generators need a way to shut down the engine that requires a mechanical reset. Outside dwellings, generators over <b>15 kW</b> need a <b>remote</b> shutdown, readily accessible, outside the equipment room or on the generator enclosure, marked "Generator Emergency Shutdown" ([[445.19]]).</li>
<li><b>GFCI</b>: 125 V, 15 and 20 A receptacles on portable generators 15 kW or smaller need GFCI built in ([[445.20]]).</li>
</ul>
<h3>Transformers [[Art 450]]</h3>
<ul>
<li><b>Overcurrent protection</b> (1000 V or less), [[Table 450.5(B)]]:
  <ul><li><b>Primary only</b>: primary OCPD ≤ <b>125%</b> of rated primary current (9 A or more; next standard size up allowed). No secondary protection required by this table.</li>
  <li><b>Primary and secondary</b>: primary ≤ <b>250%</b>, secondary ≤ <b>125%</b> (9 A or more).</li></ul></li>
<li>Remember the secondary conductors still need protection per 240.21(C), and the panel they feed per 408.36.</li>
<li><b>Ventilation</b>: don't block vent openings, and keep the clearances marked on the transformer. Flat, readily accessible tops must be marked to prohibit storage ([[450.11]]).</li>
<li><b>Working space</b> in front of the transformer follows [[110.26]], like any other equipment that may be worked on while energized.</li>
<li><b>Dry-types indoors</b>: 112½ kVA or less: 12 in. from combustibles (unless a barrier, or 1000 V or less and completely enclosed except vents). Over 112½ kVA: a 1-hour fire-rated transformer room, unless Class 155 or higher insulation and either a barrier or 6 ft horizontal and 12 ft vertical separation, or completely enclosed except vents ([[450.21]]).</li>
<li><b>Accessible</b>: readily accessible to qualified people, except dry-types 1000 V or less on walls, columns, or structures, and small dry-types (50 kVA or less) in hollow spaces that meet ventilation rules ([[450.15]]).</li>
<li><b>Disconnect</b>: within sight of the transformer, or remote if lockable and its location is marked on the transformer ([[450.16]]).</li>
<li>A transformer creates a <b>separately derived system</b>: system bonding jumper and grounding electrode per [[250.30]].</li>
</ul>
<div class="tip"><b>Transformer current</b>Three-phase: I = kVA × 1000 ÷ (V × 1.732). A 75 kVA, 480 V primary: 75,000 ÷ (480 × 1.732) = 90.2 A. Primary-only protection at 125% = 112.8 A, so use a 125 A breaker (next standard size).</div>`
    },
    {
      id: 'batt', title: 'Stationary batteries (480)',
      html: `
<p>[[Art 480]] covers stationary batteries over <b>1 kWh</b> (3.6 MJ): UPS battery racks, switchgear trip batteries, telecom DC plants ([[480.1]]). Listed energy storage systems (ESS) are in [[Art 706]].</p>
<ul>
<li><b>Disconnect</b>: required for all ungrounded conductors from a battery over <b>60 V DC</b>. It must be <b>readily accessible</b> and <b>within sight</b> of the battery ([[480.7(A)]]).</li>
<li>One- and two-family dwellings: an outdoor, readily accessible disconnect or remote control labeled <b>EMERGENCY DISCONNECT</b>.</li>
<li>Series strings over <b>240 V DC</b> that get field serviced must be able to be split into segments of 240 V DC or less.</li>
<li>If the disconnect is operated by remote controls that are not within sight of the battery, the disconnect must be lockable open and the control location marked on it.</li>
<li><b>Ventilation</b>: enough to keep battery gases (hydrogen) from building up to an explosive mixture ([[480.10]]).</li>
<li><b>Working space</b> per 110.26, measured from the edge of the cabinet, rack, or tray. Keep at least <b>1 in.</b> between a cell container and a wall on the side not needing service.</li>
<li><b>Vents</b>: each vented cell has a <b>flame arrester</b>; sealed cells that can build pressure have a pressure-release vent ([[480.11]]).</li>
</ul>
<div class="job"><b>On the job</b>Battery rooms: no open flames or sparks, eye wash nearby, and insulated tools. Lead-acid batteries vent hydrogen while charging.</div>`
    }
  ],
  questions: [
    { l: 'flc', q: 'To size motor branch-circuit conductors, use:', c: ['The FLC from Tables 430.247–430.250', 'The motor nameplate current', 'The locked-rotor current', 'The breaker size'], w: '430.6(A)(1).', r: '430.6(A)' },
    { v: 1, l: 'flc', q: 'Motor overload protection is sized from:', c: ['The nameplate full-load current', 'Table 430.250', 'Table 430.52(C)(1)', 'The conductor ampacity'], w: '430.32 uses nameplate current.', r: '430.32(A)' },
    { v: 1, l: 'flc', q: 'FLC of a 10 hp, 460 V, three-phase motor:', c: ['14 A', '28 A', '30.8 A', '11 A'], w: 'Table 430.250.', r: 'Table 430.250' },
    { v: 1, l: 'flc', q: 'FLC of a 25 hp, 460 V, three-phase motor:', c: ['34 A', '68 A', '27 A', '40 A'], w: 'Table 430.250.', r: 'Table 430.250' },
    { v: 1, l: 'flc', q: 'FLC of a 10 hp, 208 V, three-phase motor:', c: ['30.8 A', '32.2 A', '28 A', '14 A'], w: 'Table 430.250 (200 V column is 32.2).', r: 'Table 430.250' },
    { v: 1, l: 'flc', q: 'FLC of a 50 hp, 460 V, three-phase motor:', c: ['65 A', '130 A', '52 A', '77 A'], w: 'Table 430.250.', r: 'Table 430.250' },
    { l: 'flc', q: 'Single-phase motor FLCs are found in:', c: ['Table 430.248', 'Table 430.250', 'Table 430.247', 'Table 430.249'], w: '430.247 DC, 430.248 single-phase, 430.249 two-phase, 430.250 three-phase.', r: 'Table 430.248' },
    { l: 'conductors', q: 'Conductors for a single continuous-duty motor must be at least ___ of the table FLC.', c: ['125%', '100%', '115%', '150%'], w: '430.22.', r: '430.22' },
    { l: 'conductors', q: '25 hp, 460 V motor (FLC 34 A). Minimum conductor ampacity:', c: ['42.5 A', '34 A', '39.1 A', '85 A'], w: '34 × 1.25 = 42.5 A.', r: '430.22' },
    { l: 'conductors', q: 'Feeder for several motors: 125% of the largest motor FLC plus:', c: ['The sum of the other motors\' FLCs (plus other loads)', '125% of all other motors', '250% of the others', 'Nothing else'], w: '430.24.', r: '430.24' },
    { v: 1, l: 'conductors', q: 'Max overload setting for a motor with service factor 1.15:', c: ['125% of nameplate', '115% of nameplate', '140% of nameplate', '100% of nameplate'], w: '430.32(A)(1).', r: '430.32(A)' },
    { v: 1, l: 'conductors', q: 'Max overload setting for a motor with no service factor or temperature rise marking:', c: ['115% of nameplate', '125%', '130%', '100%'], w: 'All other motors: 115%.', r: '430.32(A)' },
    { v: 1, l: 'conductors', q: 'If the standard overload won\'t let a SF 1.15 motor start, it may be increased to:', c: ['140%', '130%', '150%', '175%'], w: '430.32(C).', r: '430.32(C)' },
    { v: 1, l: 'ocpd', q: 'Max inverse time breaker for a squirrel-cage motor (before next-size-up):', c: ['250% of FLC', '175%', '300%', '800%'], w: 'Table 430.52(C)(1).', r: 'Table 430.52(C)(1)' },
    { v: 1, l: 'ocpd', q: 'Max dual-element (time-delay) fuse for a squirrel-cage motor:', c: ['175% of FLC', '250%', '300%', '125%'], w: 'Table 430.52(C)(1).', r: 'Table 430.52(C)(1)' },
    { v: 1, l: 'ocpd', q: 'Max nontime-delay fuse for a single-phase motor:', c: ['300% of FLC', '175%', '250%', '400%'], w: 'Table 430.52(C)(1).', r: 'Table 430.52(C)(1)' },
    { v: 1, l: 'ocpd', q: 'Max instantaneous-trip breaker for a Design B energy-efficient motor:', c: ['1100%', '800%', '250%', '1700%'], w: 'Table 430.52(C)(1).', r: 'Table 430.52(C)(1)' },
    { v: 1, l: 'ocpd', q: '25 hp, 460 V motor (FLC 34 A), inverse time breaker. Max standard size using the next-size-up rule:', c: ['90 A', '85 A', '80 A', '100 A'], w: '34 × 2.5 = 85 → next standard size 90 A.', r: '430.52(C)' },
    { v: 1, l: 'ocpd', q: 'If an inverse time breaker won\'t start a motor with FLC under 100 A, it may be increased up to:', c: ['400% of FLC', '300%', '250%', '225%'], w: '430.52(C)(1)(b)(3).', r: '430.52(C)' },
    { v: 1, l: 'ocpd', q: 'If a time-delay fuse won\'t start the motor, it may be increased up to:', c: ['225% of FLC', '175%', '300%', '400%'], w: '430.52(C)(1)(b)(2).', r: '430.52(C)' },
    { l: 'disconnect', q: 'A motor controller disconnect must be located:', c: ['In sight from the controller', 'Within 100 ft', 'In the electrical room', 'Anywhere lockable'], w: '430.102(A).', r: '430.102(A)' },
    { l: 'disconnect', q: 'A motor disconnect must be in sight from:', c: ['The motor location and the driven machinery', 'The panel', 'The controller only', 'The building entrance'], w: '430.102(B).', r: '430.102(B)' },
    { l: 'disconnect', q: 'Motor disconnects must be rated at least ___ of the motor FLC.', c: ['115%', '125%', '100%', '150%'], w: '430.110(A).', r: '430.110(A)' },
    { l: 'disconnect', q: 'The motor-location disconnect can be omitted (with a lockable controller disconnect) when:', c: ['A disconnect at the motor is impracticable or increases hazards', 'The motor is under 1 hp', 'The panel is in the same building', 'Never'], w: '430.102(B) exception.', r: '430.102(B)' },
    { l: 'disconnect', q: 'At least one motor disconnect must be:', c: ['Readily accessible', 'Fused', 'Outdoors', 'In a locked room'], w: '430.107.', r: '430.107' },
    { l: 'ac', q: 'A/C disconnects must be:', c: ['Within sight from and readily accessible from the equipment', 'In the electrical room', 'On the access panel', 'Within 100 ft'], w: '440.14.', r: '440.14' },
    { l: 'ac', q: 'An A/C disconnect may be mounted on the unit\'s service access panel.', c: ['False', 'True', 'True if fused', 'True on rooftops'], w: 'Not on panels designed to allow access, and not covering the nameplate.', r: '440.14' },
    { l: 'ac', q: 'Conductors for a single motor-compressor must be at least ___ of the RLA or branch-circuit selection current, whichever is greater.', c: ['125%', '100%', '175%', '115%'], w: '440.32.', r: '440.32' },
    { l: 'ac', q: 'Motor-compressor branch protection generally may not exceed ___ of RLA.', c: ['175%', '125%', '250%', '300%'], w: '440.22(A); up to 225% if needed to start.', r: '440.22(A)' },
    { l: 'ac', q: 'If needed to start, motor-compressor branch protection may be increased up to:', c: ['225%', '175%', '250%', '400%'], w: '440.22(A) Exception No. 2.', r: '440.22(A)' },
    { l: 'gen', q: 'Generator conductors to the first OCPD must be at least ___ of nameplate current.', c: ['115%', '125%', '100%', '150%'], w: '445.13(A).', r: '445.13' },
    { v: 1, l: 'gen', q: 'Transformer, primary-only protection, primary current 9 A or more: max primary OCPD is:', c: ['125%', '250%', '167%', '300%'], w: 'Table 450.5(B).', r: 'Table 450.5(B)' },
    { v: 1, l: 'gen', q: 'Transformer with primary and secondary protection: max primary OCPD is:', c: ['250%', '125%', '300%', '167%'], w: 'Table 450.5(B).', r: 'Table 450.5(B)' },
    { v: 1, l: 'gen', q: 'Transformer with primary and secondary protection: max secondary OCPD (9 A or more):', c: ['125%', '250%', '167%', '100%'], w: 'Table 450.5(B).', r: 'Table 450.5(B)' },
    { l: 'gen', q: 'A transformer disconnect located remotely must be:', c: ['Lockable open with its location marked on the transformer', 'Within 25 ft', 'Fused', 'Not allowed'], w: '450.16.', r: '450.16' },
    { l: 'gen', q: 'Dry-type transformers 1000 V or less mounted on walls or columns must be readily accessible.', c: ['False', 'True', 'True over 50 kVA', 'True indoors'], w: '450.15(A).', r: '450.15' },
    { l: 'gen', q: 'Transformers with ventilation openings must be installed so that:', c: ['The openings aren\'t blocked', 'They touch the wall', 'They are enclosed in drywall', 'They face the ceiling'], w: '450.11(B).', r: '450.11' },
    { t: 'find', l: 'gen', q: 'Where is the three-phase motor full-load current table?', c: ['Table 430.250', 'Table 430.248', 'Table 430.52(C)(1)', 'Table 310.16'], w: 'Table 430.250.', r: 'Table 430.250' },
    { t: 'find', l: 'gen', q: 'Where are the max motor branch-circuit breaker and fuse percentages?', c: ['Table 430.52(C)(1)', 'Table 430.250', '430.32', 'Table 240.6(A)'], w: 'Table 430.52(C)(1).', r: 'Table 430.52(C)(1)' },
    { t: 'find', l: 'gen', q: 'Where are motor overload sizing rules?', c: ['430.32', '430.22', '430.52', '430.110'], w: '430.32.', r: '430.32' },
    { t: 'find', l: 'gen', q: 'Where is the A/C disconnect location rule?', c: ['440.14', '430.102', '210.63', '440.32'], w: '440.14.', r: '440.14' },
    { t: 'find', l: 'gen', q: 'Where is the transformer overcurrent protection table (1000 V or less)?', c: ['Table 450.5(B)', 'Table 450.5(A)', 'Table 240.4(G)', 'Table 430.72(B)'], w: 'In the 2026 NEC: Table 450.5(B).', r: 'Table 450.5(B)' },
    { v: 1, l: 'flc', q: 'FLC of a 5 hp, 208 V, three-phase motor:', c: ['16.7 A', '17.5 A', '15.2 A', '7.6 A'], w: 'Table 430.250 (200 V column is 17.5).', r: 'Table 430.250' },
    { v: 1, l: 'flc', q: 'FLC of a 100 hp, 460 V, three-phase motor:', c: ['124 A', '248 A', '99 A', '156 A'], w: 'Table 430.250.', r: 'Table 430.250' },
    { v: 1, l: 'flc', q: 'FLC of a 2 hp, 230 V, single-phase motor:', c: ['12 A', '24 A', '6.8 A', '13.2 A'], w: 'Table 430.248.', r: 'Table 430.248' },
    { v: 1, l: 'flc', q: 'FLC of a 1 hp, 115 V, single-phase motor:', c: ['16 A', '8 A', '9.8 A', '13.8 A'], w: 'Table 430.248.', r: 'Table 430.248' },
    { l: 'flc', q: 'For a low-speed motor (less than 1200 RPM), conductors and branch-circuit protection are sized from:', c: ['The nameplate current', 'Table 430.250', 'Table 430.52(C)(1)', 'Locked-rotor current'], w: '430.6(A)(2).', r: '430.6(A)' },
    { v: 1, l: 'ocpd', q: 'Max dual-element (time-delay) fuse for a wound-rotor motor:', c: ['150% of FLC', '175%', '250%', '300%'], w: 'Table 430.52(C)(1), wound-rotor row.', r: 'Table 430.52(C)(1)' },
    { v: 1, l: 'ocpd', q: 'If an inverse time breaker won\'t start a motor with FLC over 100 A, it may be increased up to:', c: ['300% of FLC', '400%', '250%', '225%'], w: '430.52(C)(1)(b)(3).', r: '430.52(C)' },
    { l: 'ocpd', q: 'Feeder protection for several motors: largest motor\'s branch breaker rating plus:', c: ['The sum of the other motors\' FLCs', '125% of the other FLCs', 'The other breakers\' ratings', 'Nothing'], w: '430.62(A). Don\'t round up to the next size.', r: '430.62(A)' },
    { l: 'disconnect', q: 'For a stationary motor of ⅛ hp or less, the disconnecting means may be:', c: ['The branch-circuit overcurrent device', 'A plug only', 'A snap switch rated 80%', 'None required'], w: '430.109(B).', r: '430.109(B)' },
    { l: 'disconnect', q: 'For a 2 hp, 230 V motor, a general-use switch may be the disconnect if its ampere rating is at least:', c: ['Twice the motor FLC', '115% of FLC', '125% of FLC', 'Equal to FLC'], w: '430.109(C)(1).', r: '430.109' },
    { l: 'disconnect', q: 'A motor disconnecting means must:', c: ['Plainly indicate whether it is open (off) or closed (on)', 'Be fused', 'Close automatically', 'Open only one pole'], w: '430.104.', r: '430.104' },
    { l: 'disconnect', q: '"In sight from" means visible and not more than ___ away.', c: ['50 ft', '25 ft', '100 ft', '10 ft'], w: '110.29.', r: '110.29' },
    { l: 'ac', q: 'The motor-compressor branch-circuit protective device is not required to be rated less than:', c: ['15 A', '20 A', '10 A', '30 A'], w: '440.22(A) Exception No. 3.', r: '440.22(A)' },
    { l: 'gen', q: 'Generators (other than cord-and-plug portable ones) need a disconnecting means that is:', c: ['Lockable open', 'Fused', 'Outdoors', 'GFCI protected'], w: '445.18(A).', r: '445.18' },
    { l: 'gen', q: 'Outside dwellings, generators rated over ___ need a remote emergency shutdown device.', c: ['15 kW', '10 kW', '25 kW', '50 kW'], w: '445.19(B).', r: '445.19' },
    { l: 'gen', q: '125 V, 15 and 20 A receptacles on a 15 kW or smaller portable generator need:', c: ['GFCI protection', 'AFCI protection', 'Tamper-resistant covers', 'Nothing special'], w: '445.20.', r: '445.20' },
    { l: 'gen', q: 'Indoor dry-type transformers over 112½ kVA (without the listed exceptions) must be installed in:', c: ['A 1-hour fire-rated transformer room', 'A vault', 'Any room', 'Outdoors only'], w: '450.21(B).', r: '450.21' },
    { l: 'gen', q: 'Indoor dry-type transformers 112½ kVA or less must be at least ___ from combustibles (unless barriered or completely enclosed, 1000 V or less).', c: ['12 in.', '6 in.', '3 ft', '6 ft'], w: '450.21(A).', r: '450.21' },
    { l: 'gen', q: 'Horizontal, readily accessible transformer tops must be:', c: ['Marked to prohibit storage', 'Painted red', 'Covered with plywood', 'Grounded separately'], w: '450.11(C).', r: '450.11' },
    { l: 'batt', q: 'Article 480 applies to stationary batteries with a capacity greater than:', c: ['1 kWh', '10 kWh', '100 Ah', '50 V'], w: '480.1: greater than 3.6 MJ (1 kWh).', r: '480.1' },
    { l: 'batt', q: 'A disconnecting means is required for ungrounded conductors from a stationary battery over:', c: ['60 V DC', '30 V DC', '120 V DC', '240 V DC'], w: '480.7(A).', r: '480.7' },
    { l: 'batt', q: 'The stationary battery disconnect must be readily accessible and located:', c: ['Within sight of the battery', 'At the service', 'Outdoors', 'Within 100 ft'], w: '480.7(A).', r: '480.7' },
    { l: 'batt', q: 'Field-serviced battery strings over ___ must be able to be split into segments not over that voltage.', c: ['240 V DC', '120 V DC', '60 V DC', '600 V DC'], w: '480.7(C).', r: '480.7' },
    { l: 'batt', q: 'Each vented battery cell must have:', c: ['A flame arrester', 'A GFCI', 'A fuse', 'A pressure gauge'], w: '480.11(A).', r: '480.11' },
    { l: 'batt', q: 'Minimum clearance between a battery cell container and a wall on the side not requiring service:', c: ['1 in.', '6 in.', '3 ft', '½ in.'], w: '480.10(C).', r: '480.10' },
    { t: 'find', l: 'batt', q: 'Where are motor disconnect location (in sight) rules?', c: ['430.102', '430.109', '440.14', '430.32'], w: '430.102.', r: '430.102' },
    { t: 'find', l: 'batt', q: 'Where are the conductor sizing rules for a single motor-compressor?', c: ['440.32', '440.22', '430.22', '440.14'], w: '440.32.', r: '440.32' },
    { t: 'find', l: 'batt', q: 'Where are generator conductor sizing rules (115%)?', c: ['445.13', '445.18', '250.34', '700.12'], w: '445.13.', r: '445.13' },
    { t: 'find', l: 'batt', q: 'Where is the stationary battery disconnect requirement?', c: ['480.7', '706.15', '480.10', '240.21'], w: '480.7.', r: '480.7' }
  ]
});
