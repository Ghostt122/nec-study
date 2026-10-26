(window.MODULES ||= []).push({
  id: 'bend', icon: '↪️', title: 'Pipe Bending',
  blurb: '90s, offsets, saddles, kicks, and rolling offsets with a hand bender. The calculator is in Tools.',
  lessons: [
    {
      id: 'bender', title: 'Know your bender',
      html: `
<p>A hand bender (Ideal, Klein, Greenlee, Gardner) bends ½" to 1¼" EMT. Most also fit rigid one size smaller (a ¾" EMT bender bends ½" rigid). The marks cast into the shoe are the whole system:</p>
<div class="tablewrap"><table>
<tr><th>Mark</th><th>Used for</th></tr>
<tr><td><b>Arrow</b></td><td>Stub-ups (90s) and the first bend of offsets. Line your mark up with the arrow.</td></tr>
<tr><td><b>Star</b> (back-of-bend mark)</td><td>Back-to-back 90s: lines up with a measurement to the <b>back</b> of the 90.</td></tr>
<tr><td><b>Teardrop / rim notch</b></td><td>Center of a 3-point saddle (the 45° center bend).</td></tr>
<tr><td><b>Degree marks</b> (10°, 22½°, 30°, 45°, 60°)</td><td>On the side of the shoe. Bend until the pipe lines up with the mark.</td></tr>
<tr><td><b>Take-up / deduct</b> number</td><td>Stamped on the bender: 5" for ½" EMT, 6" for ¾", 8" for 1", 11" for 1¼".</td></tr>
</table></div>
<h3>Technique</h3>
<ul>
<li>Bend on a hard, flat floor. Put <b>heavy foot pressure on the foot pedal</b> and keep steady pressure on the handle. Most bad bends come from too little foot.</li>
<li>Keep the pipe flat on the floor so bends stay <b>in the same plane</b>. A twist between bends is a <b>dog-leg</b>.</li>
<li>Mark with a pencil or marker all the way around the pipe so you can see it from any side.</li>
<li>Check 90s with a level on both legs.</li>
</ul>
<div class="warn"><b>Code limits</b>Bends can't damage the pipe or reduce its inside diameter (no kinks or flattened spots), and the radius must be at least what's in [[Ch9 Table 2]] ([[358.24(A)]]). Total bends between pull points: <b>360° max</b> ([[358.24(B)]]), and new in 2026, [[300.24]] applies the same 360° limit to a run that mixes conduit and tubing types. That's four 90s, and offsets and saddles count too (a 30° offset = 60°, a 3-point saddle = 90°).</div>
<p>[[Ch9 Table 2]] minimum radius (one-shot and full-shoe benders) to the centerline of the pipe: ½" = <b>4"</b>, ¾" = <b>4½"</b>, 1" = <b>5¾"</b>, 1¼" = <b>7¼"</b>. Factory hand benders are made to meet this. PVC field bends must be made only with <b>identified bending equipment</b> (such as a PVC heater box or heat blanket made for the job) ([[352.24(A)]]).</p>
<div class="tip"><b>NEC vs. trade</b>Only the radius, the no-damage rule, and the 360° limit are NEC rules. Take-ups, multipliers, shrink, and bender marks below are standard trade practice; check the numbers stamped on your own bender.</div>
<h3>What it looks like</h3>
[[photo:bender]]
[[photo:bender-chart]]
[[photo:bending-foot]]`
    },
    {
      id: 'ninety', title: '90° stub-ups and back-to-backs',
      html: `
<h3>Stub-up</h3>
<p>You want the pipe to come up a wall to a box, with the 90 at a certain height.</p>
<ol>
<li>Measure the <b>stub height</b> you want (floor to the back of the pipe, or the end of the stub).</li>
<li><b>Subtract the take-up</b> (deduct) for your bender: ½" EMT = 5", ¾" = 6", 1" = 8", 1¼" = 11".</li>
<li>Mark the pipe at that distance from the end.</li>
<li>Put the bender on the pipe with the hook toward the end, <b>arrow on the mark</b>, and bend to 90°.</li>
</ol>
<div class="tip"><b>Example</b>Need a 12" stub with ½" EMT: 12 − 5 = mark at <b>7"</b>. Arrow on the 7" mark, bend 90°.</div>
<h3>Back-to-back 90s</h3>
<p>A U shape, like going up one side of a beam and down the other. After the first 90, measure from the <b>back</b> of the first 90 to where the back of the second must be. Mark it, turn the bender around, and line the mark up with the <b>star</b>.</p>
<h3>Gain</h3>
<p>A 90 takes a curve instead of a sharp corner, so the pipe needed is a little <b>shorter</b> than the two legs added together. That difference is the <b>gain</b>, and many benders have a gain chart. It matters when you cut a pipe to length before bending both ends.</p>`
    },
    {
      id: 'offset', title: 'Offsets',
      html: `
<p>An <b>offset</b> is two equal bends in opposite directions to move the pipe over an obstacle or out from the wall at a box (a <b>box offset</b>). The <b>depth</b> is how far the pipe moves.</p>
<div class="tablewrap"><table>
<tr><th>Angle</th><th>Multiplier (distance between marks)</th><th>Shrink per inch of depth</th></tr>
<tr><td>10°</td><td>6.0</td><td>1/16"</td></tr>
<tr><td>22½°</td><td>2.6</td><td>3/16"</td></tr>
<tr><td><b>30°</b></td><td><b>2.0</b></td><td><b>1/4"</b></td></tr>
<tr><td>45°</td><td>1.4</td><td>3/8"</td></tr>
<tr><td>60°</td><td>1.2</td><td>1/2"</td></tr>
</table></div>
<ol>
<li><b>Distance between marks = depth × multiplier.</b> 6" deep with 30° bends: 6 × 2 = 12" between marks.</li>
<li><b>Shrink = depth × shrink per inch.</b> The offset uses up a little pipe length: 6 × ¼ = 1½".</li>
<li>If you're bending <b>toward an obstruction</b> (measuring from the pipe end to the obstacle), add the shrink to your first mark so the offset lands in the right spot.</li>
<li>Bend the first mark at the arrow to your angle. Slide to the second mark, <b>roll the pipe 180°</b>, and bend the same angle.</li>
</ol>
<div class="tip"><b>Why 30°?</b>The multiplier is 2, so the math is easy, and it pulls easily. Smaller angles (10°, 22½°) make gentle offsets that pull easier but take more room.</div>
<div class="test"><b>The math behind it</b>The multiplier is the cosecant of the angle (1 ÷ sin θ). Shrink per inch is cosecant minus cotangent, which equals the tangent of half the angle; the table rounds it to the nearest 16th. You don't need trig on the job; just remember the table.</div>
<h3>What it looks like</h3>
[[photo:offset-box]]`
    },
    {
      id: 'saddle', title: 'Saddles',
      html: `
<h3>3-point saddle</h3>
<p>Crosses over a small obstacle (another pipe) and comes back to the same line. One 45° center bend and two 22½° outer bends.</p>
<ol>
<li>Measure to the <b>center</b> of the obstacle. Add shrink: <b>3/16" per inch</b> of obstacle height. That's the center mark.</li>
<li>Outer marks: <b>2½ × the height</b> on each side of the center mark.</li>
<li>Bend 45° at the center mark using the <b>teardrop/notch</b>. Then roll and bend 22½° at each outer mark, both in the opposite direction to the center bend.</li>
</ol>
<div class="tip"><b>Example</b>2" pipe to cross, center 30" from the end. Center mark: 30 + (2 × 3/16) = 30⅜". Outer marks: 2 × 2.5 = 5" on each side, at 25⅜" and 35⅜".</div>
<h3>4-point saddle</h3>
<p>For wide obstacles (a duct or beam). It's two offsets back to back: up and over, then back down. Use the offset table for each, and space them by the width of the obstacle.</p>`
    },
    {
      id: 'kick', title: 'Kicks and rolling offsets',
      html: `
<h3>Kick</h3>
<p>A single bend (less than 90°) that moves the pipe away from a surface, for example to come off a wall at an angle into a ceiling or to clear something.</p>
<h3>Rolling offset</h3>
<p>The pipe needs to move <b>both up and over</b>, like going around a corner of a duct diagonally. Instead of two offsets, do one offset rolled at an angle.</p>
<ol>
<li>Find the <b>true offset</b>: √(rise² + roll²). Rule of thumb: the longer side plus half the shorter side is close.</li>
<li>Use the true offset as the depth in the offset table.</li>
<li>Rotate the pipe so the bends point diagonally toward where it needs to go.</li>
</ol>
<div class="tip"><b>Example</b>Rise 8", roll 6": true offset = √(64 + 36) = <b>10"</b>. At 30°: marks 20" apart, shrink 2½".</div>
<p>Use the <a href="#/tools/bend">bending calculator</a> to check your marks.</p>`
    }
  ],
  questions: [
    { v: 1, l: 'bender', q: 'Maximum total degrees of bends between pull points in a conduit run:', c: ['360°', '270°', '180°', '450°'], w: 'Four 90s. After that you need a pull point (box or conduit body).', r: '300.24' },
    { v: 1, l: 'bender', q: 'The minimum radius of field bends in EMT is found in:', c: ['Chapter 9, Table 2', 'Table 344.30(B)', 'Table 300.19(B)', 'Chapter 9, Table 4'], w: '358.24(A) sends you to Chapter 9 Table 2 for one-shot and full-shoe benders.', r: 'Ch9 Table 2' },
    { l: 'bender', q: 'A bend that twists out of plane so the pipe doesn\'t lie flat is called a:', c: ['Dog-leg', 'Kick', 'Saddle', 'Gain'], w: 'Dog-legs happen when the pipe rotates between bends.' },
    { v: 1, l: 'bender', q: 'Bends in EMT must be made so the pipe isn\'t damaged and its ___ isn\'t effectively reduced.', c: ['Internal diameter', 'Length', 'Weight', 'Wall thickness rating'], w: 'No kinks or flattening.', r: '358.24(A)' },
    { l: 'ninety', q: 'Typical take-up (deduct) for a ½" EMT hand bender:', c: ['5"', '6"', '8"', '11"'], w: '½" = 5", ¾" = 6", 1" = 8", 1¼" = 11". Check your bender.' },
    { l: 'ninety', q: 'Typical take-up (deduct) for a ¾" EMT hand bender:', c: ['6"', '5"', '8"', '4"'], w: '¾" EMT: 6".' },
    { l: 'ninety', q: 'You need a 14" stub with ¾" EMT (6" take-up). Where is your mark?', c: ['8"', '20"', '14"', '9"'], w: '14 − 6 = 8". Arrow on the mark.' },
    { l: 'ninety', q: 'For a back-to-back 90, the second mark lines up with the bender\'s:', c: ['Star (back-of-bend mark)', 'Arrow', 'Teardrop', '45° mark'], w: 'The star is for measurements to the back of a 90.' },
    { l: 'ninety', q: 'Which bender mark is used for a normal stub-up?', c: ['Arrow', 'Star', 'Teardrop', 'Rim notch'], w: 'Arrow for stub-ups and offsets.' },
    { l: 'offset', q: 'Multiplier for a 30° offset:', c: ['2', '1.4', '2.6', '6'], w: '30° = 2.0. 45° = 1.4. 22½° = 2.6. 10° = 6.' },
    { l: 'offset', q: 'Multiplier for a 45° offset:', c: ['1.4', '2', '1.2', '2.6'], w: '45° = 1.414 (use 1.4).' },
    { l: 'offset', q: 'A 4" deep offset using 30° bends. Distance between marks?', c: ['8"', '5.6"', '10.4"', '4"'], w: '4 × 2 = 8".' },
    { l: 'offset', q: 'Shrink per inch of depth for a 30° offset:', c: ['1/4"', '3/16"', '3/8"', '1/2"'], w: '10° 1/16, 22½° 3/16, 30° 1/4, 45° 3/8, 60° 1/2.' },
    { l: 'offset', q: 'A 6" offset at 30°. How much shrink?', c: ['1½"', '¾"', '2¼"', '3"'], w: '6 × ¼ = 1½".' },
    { l: 'offset', q: 'After making the first bend of an offset, before the second bend you:', c: ['Roll the pipe 180°', 'Roll the pipe 90°', 'Flip the bender upside down', 'Bend the same direction'], w: 'The second bend is the same angle in the opposite direction.' },
    { l: 'offset', q: 'Which offset angle has a multiplier of 6?', c: ['10°', '22½°', '30°', '60°'], w: '10° bends: multiplier about 6 (5.76). Good for small box offsets.' },
    { l: 'saddle', q: 'A 3-point saddle uses which bends?', c: ['45° center, 22½° on each side', '30° center, 15° each side', '90° center, 45° each side', 'Two 45° bends'], w: 'Center 45°, outer bends 22½°.' },
    { l: 'saddle', q: 'For a 3-point saddle, outer marks are placed ___ the obstruction height from the center mark.', c: ['2½ ×', '2 ×', '1.4 ×', '6 ×'], w: '2.5 × height on each side.' },
    { l: 'saddle', q: 'Shrink for a 3-point saddle (45° center) is about ___ per inch of height.', c: ['3/16"', '1/4"', '1/16"', '1/2"'], w: '3/16" per inch of saddle height.' },
    { l: 'saddle', q: 'A 4-point saddle is basically:', c: ['Two offsets', 'Three 90s', 'A kick and a 90', 'A rolling offset'], w: 'Up-and-over offset, then a down offset.' },
    { l: 'kick', q: 'Rise 8", roll 6". What is the true offset?', c: ['10"', '14"', '12"', '7"'], w: '√(8² + 6²) = √100 = 10".' },
    { l: 'kick', q: 'Rise 12", roll 5". What is the true offset?', c: ['13"', '17"', '14½"', '11"'], w: '√(144 + 25) = √169 = 13".' },
    { v: 1, l: 'bender', q: 'Minimum bend radius (to centerline) for ½" conduit with a one-shot bender, per Chapter 9 Table 2:', c: ['4"', '5"', '6"', '3"'], w: 'Ch9 Table 2: ½" = 4", ¾" = 4½", 1" = 5¾" for one-shot and full-shoe benders.', r: 'Ch9 Table 2' },
    { v: 1, l: 'bender', q: 'Field bends in PVC conduit must be made:', c: ['Only with identified bending equipment', 'With any heat source', 'Cold, without heat', 'Only at the factory'], w: '352.24(A).', r: '352.24(A)' },
    { v: 1, l: 'bender', q: 'A single run mixes EMT, a section of rigid, and a piece of flex. The bends between pull points may total:', c: ['360° for the whole run', '360° for each wiring method', '540°', 'No limit'], w: '300.24 (2026): the 360° limit applies to any combination of conduit or tubing in a single run.', r: '300.24' },
    { l: 'offset', q: 'A 10" offset using 45° bends. Distance between marks?', c: ['14"', '20"', '12"', '26"'], w: '10 × 1.4 = 14".' },
    { l: 'offset', q: 'A 4" offset using 45° bends. How much shrink?', c: ['1½"', '1"', '¾"', '2"'], w: '4 × 3/8" = 1½".' },
    { l: 'saddle', q: 'How many degrees does a 3-point saddle (45° center, two 22½° outer bends) add toward the 360° limit?', c: ['90°', '45°', '67½°', '180°'], w: '45 + (2 × 22½) = 90°. Offsets and saddles count toward the 360° limit.', r: '358.24(B)' }
  ]
});
