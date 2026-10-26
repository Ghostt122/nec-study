(window.MODULES ||= []).push({
  id: 'calc', icon: '🧮', title: 'Calculations: Theory, Ampacity, Fill, Voltage Drop, Loads',
  blurb: 'The math on the exam: Ohm\'s law, derating, conduit fill, voltage drop, and dwelling and commercial load calcs (Article 120).',
  lessons: [
    {
      id: 'theory', title: 'Ohm\'s law and power',
      html: `
<div class="tablewrap"><table>
<tr><th>Find</th><th>Formula</th></tr>
<tr><td>Voltage (E)</td><td>E = I × R</td></tr>
<tr><td>Current (I)</td><td>I = E ÷ R</td></tr>
<tr><td>Resistance (R)</td><td>R = E ÷ I</td></tr>
<tr><td>Power (P), watts</td><td>P = E × I, or P = I² × R, or P = E² ÷ R</td></tr>
<tr><td>Single-phase current</td><td>I = VA ÷ E</td></tr>
<tr><td><b>Three-phase current</b></td><td><b>I = VA ÷ (E × 1.732)</b></td></tr>
</table></div>
<ul>
<li>1.732 is the square root of 3. Every three-phase calc uses it.</li>
<li><b>Series</b> resistors add: R = R1 + R2 + … Current is the same through each.</li>
<li><b>Parallel</b> resistors: total is less than the smallest. Two equal resistors in parallel = half of one. Voltage is the same across each.</li>
<li>kVA × 1000 = VA. 1 hp ≈ 746 W.</li>
<li>Load calculations use nominal voltages, including 120, 120/240, 208Y/120, 240, 480Y/277, and 480 ([[120.5(A)]]). Results may be rounded to the nearest whole ampere, dropping fractions smaller than 0.5 ([[120.5(B)]]).</li>
</ul>
<div class="tip"><b>Examples</b>A 1440 W heater at 120 V: I = 1440 ÷ 120 = 12 A.<br>
A 30 kVA three-phase load at 208 V: I = 30,000 ÷ (208 × 1.732) = <b>83.3 A</b>.<br>
A 75 kVA transformer, 480 V three-phase primary: 75,000 ÷ (480 × 1.732) = <b>90.2 A</b>.</div>`
    },
    {
      id: 'derate', title: 'Ampacity: correction and adjustment',
      html: `
<p>[[Table 310.16]] assumes <b>30°C (86°F)</b> ambient and <b>not more than three</b> current-carrying conductors. Change either and you must reduce the ampacity ([[310.15]]).</p>
<ol>
<li><b>Start</b> with the ampacity in the column for the wire's insulation (THHN = 90°C).</li>
<li><b>Correct for temperature</b>: multiply by the factor from [[Table 310.15(B)(1)(1)]] (for 36–40°C: 0.91 for 90°C wire, 0.88 for 75°C; for 41–45°C: 0.87 and 0.82).</li>
<li><b>Adjust for bundling</b>: more than 3 current-carrying conductors in a raceway or cable, multiply by [[Table 310.15(C)(1)]]: 4–6 = 80%, 7–9 = 70%, 10–20 = 50%, 21–30 = 45%, 31–40 = 40%, 41+ = 35%.</li>
<li><b>Check</b> the result against the terminal rating (110.14(C)) and the small conductor rule (240.4(D)). Use the smallest.</li>
</ol>
<h3>What counts as current-carrying</h3>
<ul>
<li>The EGC never counts ([[310.15(F)]]).</li>
<li>A neutral that carries only the unbalanced current of its circuit doesn't count. It <b>does</b> count when it's a 2-wire circuit neutral, the neutral of a 3-wire circuit taken from a 4-wire wye (two hots + neutral off 208Y/120), or when the load is mostly nonlinear (LED drivers, computers) on a 4-wire wye ([[310.15(E)]]).</li>
</ul>
<h3>Rooftops [[310.15(B)]]</h3>
<p>Raceways or cables in direct sun on a rooftop, less than <b>¾ in.</b> above the roof: add <b>33°C (60°F)</b> to the outdoor temperature before using the correction table. XHHW-2 is exempt.</p>
<div class="tip"><b>Example</b>Nine current-carrying 12 AWG THHN in one EMT, 38°C room:<br>
30 A (90°C) × 0.91 × 0.70 = <b>19.1 A</b>.<br>On a circuit feeding several receptacles, 240.4(B) next-size-up isn't allowed, so the breaker can be at most <b>15 A</b>. For a single non-receptacle load, 19.1 A isn't a standard size, so 240.4(B) lets you round up to <b>20 A</b>.</div>`
    },
    {
      id: 'fill', title: 'Conduit fill',
      html: `
<ol>
<li>Find each wire's area in [[Ch9 Table 5]] (THHN: 14 = 0.0097 in², 12 = 0.0133, 10 = 0.0211, 8 = 0.0366, 6 = 0.0507, 4 = 0.0824).</li>
<li>Add them up.</li>
<li>Pick a raceway from [[Ch9 Table 4]] whose <b>40%</b> column (for 3 or more wires) is at least that total. EMT 40%: ½ = 0.122 in², ¾ = 0.213, 1 = 0.346, 1¼ = 0.598.</li>
</ol>
<div class="tip"><b>How many 12 THHN in ¾ EMT?</b>0.213 ÷ 0.0133 = 16.0, so <b>16</b>.<br>
<b>Three 8 THHN + one 10 THHN?</b> 3 × 0.0366 + 0.0211 = 0.1309 in². ½ EMT (0.122) is too small; <b>¾ EMT</b> (0.213) works.</div>
<ul>
<li>When the result is a fraction and all wires are the same size, you can round up a decimal of 0.8 or more (Chapter 9 notes to tables). Same-size wires: use the tables in <b>Informative Annex C</b> directly.</li>
<li>Equipment grounding conductors count in the fill ([[Ch9 Table 1]] notes).</li>
</ul>`
    },
    {
      id: 'vd', title: 'Voltage drop',
      html: `
<p>The NEC doesn't require a voltage drop limit for normal circuits, but informational notes recommend no more than <b>3%</b> on a branch circuit and <b>5%</b> total for feeder plus branch ([[210.19]], [[215.4(A)]]). Exams love it.</p>
<h3>Using Chapter 9 Table 8 (resistance)</h3>
<p>Single-phase: <b>VD = 2 × I × R × L ÷ 1000</b>, where R is ohms per 1000 ft from [[Ch9 Table 8]] (uncoated copper, solid 12 AWG = 1.93, solid 10 AWG = 1.21) and L is the one-way length in feet.</p>
<h3>The K formula (shortcut)</h3>
<p>Single-phase: <b>VD = 2 × K × I × L ÷ CM</b>. Three-phase: <b>VD = 1.732 × K × I × L ÷ CM</b>. K is about <b>12.9</b> for copper, <b>21.2</b> for aluminum (a trade shortcut, not printed in the NEC; it comes from Table 8: stranded 10 AWG copper 1.24 Ω × 10,380 cmil ÷ 1000 ≈ 12.9). CM is circular mils from Table 8 (12 AWG = 6530, 10 = 10,380, 8 = 16,510, 6 = 26,240).</p>
<div class="tip"><b>Example</b>120 V, 16 A, 100 ft one way:<br>
12 AWG: 2 × 12.9 × 16 × 100 ÷ 6530 = 6.3 V = 5.3% (too much).<br>
10 AWG: 41,280 ÷ 10,380 = 4.0 V = 3.3%.<br>
8 AWG: 41,280 ÷ 16,510 = 2.5 V = 2.1% ✓.</div>
<p>Upsizing the hots for voltage drop means upsizing the EGC proportionally too ([[250.122(D)]]).</p>`
    },
    {
      id: 'dwelling', title: 'Dwelling load calculation (standard method)',
      html: `
<p>[[Art 120]] is the 2026 home of load calculations (it was Article 220). <b>Big 2026 change</b>: the dwelling unit load is <b>2 VA/ft²</b> ([[120.41]]), down from 3 VA/ft² in older codes. Floor area uses outside dimensions, not counting open porches, detached garages, or unfinished unusable spaces ([[120.5(C)]]).</p>
<ol>
<li><b>General lighting and receptacles</b>: ft² × 2 VA.</li>
<li>Add <b>1500 VA</b> for each small-appliance circuit (at least 2) and <b>1500 VA</b> for the laundry circuit ([[120.52]]).</li>
<li>Apply [[Table 120.45]] to that total: first <b>3000 VA at 100%</b>, 3001–120,000 at <b>35%</b>, over 120,000 at <b>25%</b>.</li>
<li><b>Range</b>: [[Table 120.55]] Column C. One range up to 12 kW = <b>8 kW</b> ([[120.55]]).</li>
<li><b>Dryer</b>: nameplate or <b>5000 VA</b>, whichever is larger ([[120.54]]).</li>
<li><b>Fixed appliances</b> (water heater, dishwasher, disposal…): nameplate; four or more may take a 75% demand factor ([[120.53]]).</li>
<li><b>Heat vs. A/C</b>: use the larger, not both (noncoincident loads, [[120.6]]). Add 25% of the largest motor-compressor ([[440.33]]; Annex D Example D1(b) does this).</li>
<li>Total VA ÷ 240 V = amps.</li>
</ol>
<div class="tip"><b>Example: 2000 ft² house</b><br>
Lighting 2000 × 2 = 4000 + small appliance 3000 + laundry 1500 = 8500 VA<br>
Demand: 3000 + (5500 × 0.35) = 4925 VA<br>
Range 12 kW → 8000 · Dryer 5000 · Water heater 4500 · A/C 5000 × 1.25 = 6250<br>
Total 28,675 VA ÷ 240 = <b>119 A</b>.</div>
<p><b>Don't mix up the two dwelling numbers:</b> 2 VA/ft² is the feeder and service load ([[120.41]]), but <b>3 VA/ft²</b> is still used to figure the <b>minimum number of branch circuits</b> ([[120.13]]). Annex D Example D1(a): 1500 ft² × 3 VA = 4500 VA ÷ 120 V = 37.5 A, so three 15 A or two 20 A general lighting circuits.</p>
<p>There's also an <b>optional method</b> for dwellings ([[120.82]]): 100% of the first 8 kVA + 40% of the rest of the general loads, plus the largest heating or A/C load.</p>`
    },
    {
      id: 'commercial', title: 'Commercial load calculation',
      html: `
<ul>
<li><b>Lighting</b>: ft² × unit load from [[Table 120.42(A)]]. Examples: office <b>1.3</b>, retail <b>1.9</b>, warehouse <b>1.2</b>, school <b>1.5</b>, restaurant <b>1.5</b>, hospital <b>1.6</b>, manufacturing <b>2.2</b> VA/ft². Store and office lighting normally runs 3 hours or more, so it's treated as a continuous load and the feeder is sized at <b>125%</b> of it ([[215.4(A)]]; Annex D Example D3 does this).</li>
<li><b>Receptacles</b>: <b>180 VA</b> per yoke (single or duplex); a multi-receptacle piece of 4 or more is 90 VA per receptacle ([[120.14]]). Demand per [[Table 120.47]]: first <b>10 kVA at 100%</b>, remainder at <b>50%</b>.</li>
<li><b>Office receptacles</b>: the larger of the calculated (after Table 120.47) or <b>1 VA/ft²</b> ([[120.43]]).</li>
<li><b>Show windows</b>: <b>200 VA per linear foot</b> ([[120.46(A)]]).</li>
<li><b>Sign outlet</b>: at least <b>1200 VA</b> for each required sign branch circuit ([[120.14(F)]]).</li>
<li><b>Track lighting</b>: <b>150 VA per 2 ft</b> of track ([[120.46(B)]]).</li>
<li><b>Fixed multioutlet assemblies (plug strip)</b>: 180 VA per 5 ft, or per 1 ft where loads are likely used at the same time ([[120.14]]).</li>
<li><b>Fixed electric space heating</b>: 100% of connected load ([[120.51]]).</li>
</ul>
<div class="tip"><b>Example: receptacles</b>80 receptacles × 180 = 14,400 VA. Demand: 10,000 + (4400 × 0.5) = <b>12,200 VA</b>. In a 10,000 ft² office, compare with 1 VA/ft² = 10,000 VA; use the larger, 12,200 VA.</div>`
    }
  ],
  questions: [
    { l: 'theory', q: 'A 1440 W load at 120 V draws:', c: ['12 A', '10 A', '14.4 A', '8.3 A'], w: '1440 ÷ 120 = 12 A.', r: '120.5(A)' },
    { l: 'theory', q: 'Current of a 30 kVA three-phase load at 208 V:', c: ['83.3 A', '144 A', '48.1 A', '62.5 A'], w: '30,000 ÷ (208 × 1.732) = 83.3 A.', r: '120.5(A)' },
    { l: 'theory', q: 'Current of a 50 kVA three-phase load at 480 V:', c: ['60.1 A', '104 A', '34.7 A', '52.0 A'], w: '50,000 ÷ (480 × 1.732) = 60.1 A.', r: '120.5(A)' },
    { l: 'theory', q: 'Resistance of a heater drawing 10 A at 240 V:', c: ['24 Ω', '2400 Ω', '0.042 Ω', '12 Ω'], w: 'R = 240 ÷ 10 = 24 Ω.', r: '120.5(A)' },
    { l: 'theory', q: 'Two 10 Ω resistors in parallel equal:', c: ['5 Ω', '20 Ω', '10 Ω', '2.5 Ω'], w: 'Equal resistors in parallel: R ÷ number = 10 ÷ 2 = 5 Ω.', r: '120.5(A)' },
    { v: 1, l: 'theory', q: 'Load calculations may drop fractions of an ampere smaller than:', c: ['0.5', '0.1', '0.9', '0.25'], w: '120.5(B).', r: '120.5(B)' },
    { v: 1, l: 'derate', q: 'Table 310.16 ampacities are based on an ambient temperature of:', c: ['30°C (86°F)', '40°C (104°F)', '25°C (77°F)', '20°C (68°F)'], w: 'Use Table 310.15(B)(1)(1) for other temperatures.', r: 'Table 310.15(B)(1)(1)' },
    { v: 1, l: 'derate', q: 'Correction factor for 90°C wire at an ambient of 36–40°C:', c: ['0.91', '0.88', '0.82', '0.87'], w: 'Table 310.15(B)(1)(1).', r: 'Table 310.15(B)(1)(1)' },
    { v: 1, l: 'derate', q: 'Correction factor for 75°C wire at 41–45°C:', c: ['0.82', '0.87', '0.88', '0.75'], w: 'Table 310.15(B)(1)(1).', r: 'Table 310.15(B)(1)(1)' },
    { v: 1, l: 'derate', q: 'Adjustment factor for 10–20 current-carrying conductors:', c: ['50%', '70%', '45%', '80%'], w: 'Table 310.15(C)(1).', r: 'Table 310.15(C)(1)' },
    { v: 1, l: 'derate', q: 'Adjustment factor for 7–9 current-carrying conductors:', c: ['70%', '80%', '50%', '60%'], w: 'Table 310.15(C)(1).', r: 'Table 310.15(C)(1)' },
    { l: 'derate', q: 'Nine 12 AWG THHN current-carrying conductors at 38°C. Adjusted ampacity:', c: ['19.1 A', '21 A', '27.3 A', '24 A'], w: '30 × 0.91 × 0.70 = 19.1 A.', r: '310.15' },
    { v: 1, l: 'derate', q: 'Does the equipment grounding conductor count as a current-carrying conductor?', c: ['No', 'Yes', 'Only if insulated', 'Only over 4 AWG'], w: '310.15(F).', r: '310.15(F)' },
    { v: 1, l: 'derate', q: 'Two hots and a neutral taken from a 208Y/120 V four-wire system: the neutral is:', c: ['Current-carrying', 'Not current-carrying', 'Counted as half', 'Not allowed'], w: '310.15(E)(1)(2).', r: '310.15(E)' },
    { v: 1, l: 'derate', q: 'On a rooftop, raceways less than ___ above the roof get a 33°C (60°F) temperature adder.', c: ['¾ in.', '3½ in.', '12 in.', '7/8 in.'], w: '310.15(B)(2).', r: '310.15(B)' },
    { v: 1, l: 'derate', q: 'Ampacity of 4 AWG copper THWN (75°C):', c: ['85 A', '95 A', '70 A', '100 A'], w: 'Table 310.16.', r: 'Table 310.16' },
    { v: 1, l: 'derate', q: 'Ampacity of 1/0 copper THHN in the 75°C column:', c: ['150 A', '170 A', '125 A', '135 A'], w: 'Table 310.16.', r: 'Table 310.16' },
    { v: 1, l: 'derate', q: 'Ampacity of 3/0 copper at 75°C:', c: ['200 A', '225 A', '175 A', '165 A'], w: 'Table 310.16.', r: 'Table 310.16' },
    { v: 1, l: 'derate', q: 'Ampacity of 250 kcmil copper at 75°C:', c: ['255 A', '290 A', '215 A', '230 A'], w: 'Table 310.16.', r: 'Table 310.16' },
    { v: 1, l: 'derate', q: 'Ampacity of 4/0 aluminum at 75°C:', c: ['180 A', '205 A', '230 A', '150 A'], w: 'Table 310.16.', r: 'Table 310.16' },
    { v: 1, l: 'fill', q: 'Area of a 12 AWG THHN conductor (Chapter 9 Table 5):', c: ['0.0133 in²', '0.0097 in²', '0.0211 in²', '0.0181 in²'], w: 'Ch9 Table 5.', r: 'Ch9 Table 5' },
    { v: 1, l: 'fill', q: 'Area of an 8 AWG THHN conductor:', c: ['0.0366 in²', '0.0437 in²', '0.0507 in²', '0.0211 in²'], w: 'Ch9 Table 5.', r: 'Ch9 Table 5' },
    { v: 1, l: 'fill', q: '40% fill area of ¾ in. EMT:', c: ['0.213 in²', '0.122 in²', '0.346 in²', '0.533 in²'], w: 'Ch9 Table 4, EMT.', r: 'Ch9 Table 4' },
    { v: 1, l: 'fill', q: '40% fill area of 1 in. EMT:', c: ['0.346 in²', '0.213 in²', '0.598 in²', '0.864 in²'], w: 'Ch9 Table 4, EMT.', r: 'Ch9 Table 4' },
    { v: 1, l: 'fill', q: 'Max number of 12 AWG THHN in ¾ in. EMT:', c: ['16', '9', '12', '26'], w: '0.213 ÷ 0.0133 = 16.', r: 'Ch9 Table 4' },
    { v: 1, l: 'fill', q: 'Max number of 12 AWG THHN in ½ in. EMT:', c: ['9', '16', '7', '12'], w: '0.122 ÷ 0.0133 = 9.17 → 9.', r: 'Ch9 Table 4' },
    { l: 'fill', q: 'Three 8 THHN and one 10 THHN need EMT of at least:', c: ['¾ in.', '½ in.', '1 in.', '1¼ in.'], w: '3 × 0.0366 + 0.0211 = 0.1309 in²; ½ EMT 40% = 0.122 (too small), ¾ = 0.213.', r: 'Ch9 Table 4' },
    { v: 1, l: 'vd', q: 'Recommended max voltage drop on a branch circuit (informational note):', c: ['3%', '5%', '2%', '10%'], w: '210.19 Informational Note: 3% branch, 5% total.', r: '210.19' },
    { v: 1, l: 'vd', q: 'Recommended max combined voltage drop for feeder plus branch circuit:', c: ['5%', '3%', '8%', '10%'], w: '210.19 and 215.4(A) informational notes.', r: '210.19' },
    { v: 1, l: 'vd', q: 'Circular mil area of 10 AWG (Chapter 9 Table 8):', c: ['10,380', '6,530', '16,510', '26,240'], w: 'Ch9 Table 8.', r: 'Ch9 Table 8' },
    { v: 1, l: 'vd', q: 'Circular mil area of 1/0 AWG:', c: ['105,600', '83,690', '133,100', '66,360'], w: 'Ch9 Table 8.', r: 'Ch9 Table 8' },
    { l: 'vd', q: '120 V, 16 A, 100 ft one way, 10 AWG Cu (K = 12.9). Voltage drop:', c: ['About 4.0 V', 'About 6.3 V', 'About 2.5 V', 'About 1.3 V'], w: '2 × 12.9 × 16 × 100 ÷ 10,380 = 3.98 V.', r: 'Ch9 Table 8' },
    { l: 'vd', q: 'The three-phase voltage drop formula uses which multiplier instead of 2?', c: ['1.732', '1.414', '3', '0.866'], w: 'VD = 1.732 × K × I × L ÷ CM.', r: 'Ch9 Table 8' },
    { v: 1, l: 'dwelling', q: 'In the 2026 NEC, the dwelling unit minimum general load is:', c: ['2 VA per ft²', '3 VA per ft²', '1 VA per ft²', '3.5 VA per ft²'], w: '120.41: 22 VA/m² (2 VA/ft²).', r: '120.41' },
    { v: 1, l: 'dwelling', q: 'Each dwelling small-appliance branch circuit is calculated at:', c: ['1500 VA', '1200 VA', '2000 VA', '180 VA per receptacle'], w: '120.52(A).', r: '120.52(A)' },
    { v: 1, l: 'dwelling', q: 'Dwelling lighting demand: the first ___ at 100%.', c: ['3000 VA', '10,000 VA', '8000 VA', '12,500 VA'], w: 'Table 120.45: first 3000 at 100%, 3001–120,000 at 35%, remainder 25%.', r: 'Table 120.45' },
    { v: 1, l: 'dwelling', q: 'Dwelling lighting demand from 3001 to 120,000 VA:', c: ['35%', '25%', '50%', '40%'], w: 'Table 120.45.', r: 'Table 120.45' },
    { v: 1, l: 'dwelling', q: 'Minimum load for a household electric dryer:', c: ['5000 VA or nameplate, whichever is larger', '4000 VA', 'Nameplate only', '1500 VA'], w: '120.54.', r: '120.54' },
    { v: 1, l: 'dwelling', q: 'Demand load for one 12 kW household range (Column C):', c: ['8 kW', '12 kW', '9.6 kW', '6 kW'], w: 'Table 120.55, Column C, 1 appliance.', r: 'Table 120.55' },
    { v: 1, l: 'dwelling', q: 'Column C demand for 3 ranges (12 kW or less each):', c: ['14 kW', '11 kW', '17 kW', '24 kW'], w: 'Table 120.55, Column C.', r: 'Table 120.55' },
    { v: 1, l: 'dwelling', q: 'Four or more fastened-in-place dwelling appliances (not ranges, dryers, heat, A/C, EVSE) may take a demand factor of:', c: ['75%', '50%', '35%', '80%'], w: '120.53.', r: '120.53' },
    { l: 'dwelling', q: '2000 ft² house: lighting + 2 small appliance + laundry = 8500 VA. After demand factors:', c: ['4925 VA', '8500 VA', '2975 VA', '5500 VA'], w: '3000 + (5500 × 0.35) = 4925 VA.', r: 'Table 120.45' },
    { v: 1, l: 'dwelling', q: 'Heating and A/C loads that won\'t run at the same time:', c: ['Use only the larger one', 'Add both', 'Use 50% of each', 'Ignore both'], w: 'Noncoincident loads, 120.6.', r: '120.6' },
    { v: 1, l: 'commercial', q: 'General lighting unit load for an office:', c: ['1.3 VA/ft²', '1.9 VA/ft²', '2.2 VA/ft²', '3.5 VA/ft²'], w: 'Table 120.42(A).', r: 'Table 120.42(A)' },
    { v: 1, l: 'commercial', q: 'General lighting unit load for retail:', c: ['1.9 VA/ft²', '1.3 VA/ft²', '1.5 VA/ft²', '3 VA/ft²'], w: 'Table 120.42(A).', r: 'Table 120.42(A)' },
    { v: 1, l: 'commercial', q: 'General lighting unit load for a warehouse:', c: ['1.2 VA/ft²', '0.3 VA/ft²', '1.5 VA/ft²', '2.2 VA/ft²'], w: 'Table 120.42(A).', r: 'Table 120.42(A)' },
    { v: 1, l: 'commercial', q: 'Commercial receptacle outlets are calculated at ___ per yoke.', c: ['180 VA', '1500 VA', '200 VA', '90 VA'], w: '120.14 (receptacle outlets).', r: '120.14' },
    { v: 1, l: 'commercial', q: 'Non-dwelling receptacle demand: first 10 kVA at 100%, remainder at:', c: ['50%', '35%', '25%', '75%'], w: 'Table 120.47.', r: 'Table 120.47' },
    { l: 'commercial', q: '80 receptacles in a store. Demand load:', c: ['12,200 VA', '14,400 VA', '7200 VA', '10,000 VA'], w: '80 × 180 = 14,400; 10,000 + (4400 × 0.5) = 12,200.', r: 'Table 120.47' },
    { v: 1, l: 'commercial', q: 'Show window lighting load per linear foot:', c: ['200 VA', '180 VA', '150 VA', '1200 VA'], w: '120.46(A).', r: '120.46(A)' },
    { v: 1, l: 'commercial', q: 'Required sign outlet load:', c: ['1200 VA minimum', '180 VA', '1500 VA', '600 VA'], w: '120.14(F).', r: '120.14' },
    { v: 1, l: 'commercial', q: 'Track lighting load (other than dwellings):', c: ['150 VA per 2 ft of track', '180 VA per ft', '200 VA per ft', '600 VA per track'], w: '120.46(B).', r: '120.46(B)' },
    { v: 1, l: 'commercial', q: 'Office building receptacle load: the larger of the calculated load or:', c: ['1 VA/ft²', '1.3 VA/ft²', '3 VA/ft²', '0.5 VA/ft²'], w: '120.43.', r: '120.43' },
    { v: 1, l: 'dwelling', q: 'The MINIMUM NUMBER of general lighting branch circuits in a dwelling is figured at:', c: ['3 VA per ft²', '2 VA per ft²', '1 VA per ft²', '180 VA per outlet'], w: '120.13 uses 3 VA/ft² for counting branch circuits; 120.41 uses 2 VA/ft² for the feeder/service load.', r: '120.13' },
    { v: 1, l: 'dwelling', q: 'EVSE (car charger) load in a load calculation when the nameplate rating isn\'t available:', c: ['7200 W (VA)', '5000 W (VA)', '1500 W (VA)', '9600 W (VA)'], w: '120.57: nameplate, or 7200 W if not available.', r: '120.57' },
    { v: 1, l: 'commercial', q: 'Warehouse (storage) lighting demand: first 12,500 VA at 100%, remainder at:', c: ['50%', '35%', '25%', '75%'], w: 'Table 120.45.', r: 'Table 120.45' },
    { v: 1, l: 'commercial', q: 'General lighting unit load for a manufacturing facility:', c: ['2.2 VA/ft²', '1.2 VA/ft²', '1.7 VA/ft²', '3.5 VA/ft²'], w: 'Table 120.42(A).', r: 'Table 120.42(A)' },
    { v: 1, l: 'fill', q: 'Maximum fill for a raceway with only TWO conductors (Chapter 9 Table 1):', c: ['31%', '40%', '53%', '60%'], w: 'Ch9 Table 1: 1 wire 53%, 2 wires 31%, over 2 wires 40%.', r: 'Ch9 Table 1' },
    { v: 1, l: 'fill', q: 'A conduit nipple not over 24 in. long between enclosures may be filled to:', c: ['60%', '40%', '53%', '75%'], w: 'Chapter 9 Note 4: nipples ≤ 600 mm (24 in.) may be filled to 60%, and the 310.15(C)(1) adjustment factors don\'t apply.', r: 'Ch9 Table 1' },
    { v: 1, t: 'find', l: 'commercial', q: 'In the 2026 NEC, load calculations are in Article:', c: ['120', '220', '210', '230'], w: 'Moved from Article 220 to Article 120.', r: 'Art 120' },
    { v: 1, t: 'find', l: 'commercial', q: 'Where are the conductor areas for THHN?', c: ['Chapter 9, Table 5', 'Chapter 9, Table 4', 'Chapter 9, Table 8', 'Table 310.16'], w: 'Table 5 = wire areas, Table 4 = conduit areas, Table 8 = conductor properties.', r: 'Ch9 Table 5' },
    { v: 1, t: 'find', l: 'commercial', q: 'Where are the household range demand factors?', c: ['Table 120.55', 'Table 120.54', 'Table 120.45', 'Table 220.55'], w: '2026 NEC: Table 120.55.', r: 'Table 120.55' },
    { v: 1, t: 'find', l: 'commercial', q: 'Where are temperature correction factors (30°C based)?', c: ['Table 310.15(B)(1)(1)', 'Table 310.15(C)(1)', 'Table 310.16', 'Table 310.15(B)(1)(2)'], w: '(B)(1)(1) is based on 30°C; (B)(1)(2) on 40°C.', r: 'Table 310.15(B)(1)(1)' }
  ]
});
