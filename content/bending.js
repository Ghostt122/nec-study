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
<p>For wide obstacles (a duct or beam). It's two offsets back to back: up and over, then back down. Step by step in the next lesson.</p>`
    },
    {
      id: 'saddle4', title: '4-point saddles, step by step',
      html: `
<p>A 4-point saddle goes <b>up and over</b> something wide (a duct, beam, or a rack of pipe) and <b>comes back down</b> to the same line. It's just <b>two offsets</b> with the same depth and angle. All four bends use the same angle. Trade method, not an NEC rule.</p>
<p>You need three measurements: <b>D</b> = pipe end to the near edge of the obstacle, <b>H</b> = height to clear, <b>W</b> = width of the obstacle. Then from the offset table: the <b>multiplier</b> and <b>shrink per inch</b> for your angle.</p>
<ol>
<li><b>Shrink</b> for one offset = H × shrink per inch.</li>
<li><b>Mark 2</b> (top of the first offset) = D + shrink.</li>
<li><b>Mark 1</b> = Mark 2 − (H × multiplier).</li>
<li><b>Mark 3</b> (start back down) = D + W + shrink.</li>
<li><b>Mark 4</b> = Mark 3 + (H × multiplier).</li>
<li>Bend Mark 1 at the arrow. Slide to Mark 2, roll 180°, bend the same angle. That's the first offset.</li>
<li>Bend Mark 3 so the pipe heads <b>back down</b>, then slide to Mark 4, roll 180°, and bend the same angle. Sight down the pipe between bends so all four stay in the same plane.</li>
</ol>
<div class="tip"><b>Example</b>½" EMT, obstacle 6" high and 12" wide, near edge 40" from the end, 30° bends (multiplier 2, shrink ¼" per inch).<br>Shrink = 6 × ¼ = 1½".<br>Mark 2 = 40 + 1½ = <b>41½"</b>. Mark 1 = 41½ − 12 = <b>29½"</b>.<br>Mark 3 = 40 + 12 + 1½ = <b>53½"</b>. Mark 4 = 53½ + 12 = <b>65½"</b>.<br>The whole saddle uses up 3" of pipe (two offsets × 1½").</div>
<ul>
<li>Shrink table values are rounded, so the bends land within about ⅛" of the target. Leave a little clearance over the obstacle.</li>
<li>Counting toward the 360° limit between pull points ([[358.24(B)]]): four 30° bends = <b>120°</b>. Four 45° bends = 180°. Use smaller angles when the run already has other bends.</li>
</ul>`
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
    },
    {
      id: 'air', title: 'Bending in the air',
      html: `
<p>Bending "in the air" means the bender is <b>upside down</b>: head up, handle on the floor. You hold the handle steady (foot or knee on it) and push the pipe down into the shoe by hand. Trade method, not an NEC rule.</p>
<ul>
<li>Good for <b>small bends</b>: kicks, box offsets, and touching up an angle.</li>
<li>Good when the stick is <b>long</b> or already has bends that would hit the floor or a wall if you bent it the normal way.</li>
<li>You can watch the angle the whole time and stop right on it.</li>
<li>The marks on the shoe still work: line your pencil mark up with the arrow before you push.</li>
<li>Smaller pipe (½" and ¾" EMT) bends this way easily. Big bends and larger pipe are easier and safer on the floor.</li>
<li>Keep the rest of the pipe level and in line so the bend doesn't twist into a dog-leg.</li>
</ul>`
    },
    {
      id: 'speed', title: 'Speed tricks: box offsets and bending to the lines',
      html: `
<p>These save time once you know the basics. Trade methods, not NEC rules.</p>
<h3>Quick box offset</h3>
<p>A small offset right at the end of the pipe so it enters a surface-mounted box's knockout straight.</p>
<ol>
<li><b>Depth</b> = (wall to center of the knockout) − (wall to center of the pipe). It's usually small, about ½".</li>
<li>Use <b>10° bends</b>. Marks = depth × 6. A ½" offset: marks <b>3" apart</b>. Shrink is only 1/16" per inch, so ignore it.</li>
<li>Put the offset back far enough that the straight end past the second bend fits fully into the connector.</li>
<li>Bend the first mark about 10°, roll 180°, bend the second the same amount. Many hands do both bends in the air.</li>
</ol>
<p>Why not 30°? A ½" offset at 30° needs marks only 1" apart, too close to make two bends with a hand bender.</p>
<h3>Bending to the lines on the bender</h3>
<p>Skip the protractor: the shoe has <b>degree lines</b> (10°, 22½°, 30°, 45°, 60°) on its side. When the pipe sitting in the shoe lines up with a line, you're at that angle. For a 90, the pipe straight up and down (check with a level) is the target.</p>
<h3>More time savers</h3>
<ul>
<li>Do all the math and <b>mark every bend before you start</b>. Mark all the way around the pipe.</li>
<li>For the same bend on many pipes (a row of stub-ups or box offsets), bend one, check it, then <b>use it as a pattern</b> to mark the rest.</li>
<li>Keep the offset table in your head: 10° × 6, 22½° × 2.6, 30° × 2, 45° × 1.4, 60° × 1.2.</li>
<li>Check your work with the <a href="#/tools/bend">bending calculator</a> until the numbers are automatic.</li>
</ul>`
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
    { l: 'saddle', q: 'How many degrees does a 3-point saddle (45° center, two 22½° outer bends) add toward the 360° limit?', c: ['90°', '45°', '67½°', '180°'], w: '45 + (2 × 22½) = 90°. Offsets and saddles count toward the 360° limit.', r: '358.24(B)' },
    { l: 'saddle4', q: 'A 4-point saddle is 6" high with 30° bends. Distance between the two marks of each offset?', c: ['12"', '6"', '9"', '18"'], w: '6 × 2 (30° multiplier) = 12".' },
    { l: 'saddle4', q: 'A 4-point saddle is 6" high with 30° bends. Shrink for each offset?', c: ['1½"', '¾"', '3"', '6"'], w: '6 × ¼" = 1½".' },
    { l: 'saddle4', q: 'A 4-point saddle is 6" high with 30° bends. Total pipe used up by shrink?', c: ['3"', '1½"', '6"', '¾"'], w: '2 offsets × 1½" = 3".' },
    { l: 'saddle4', q: 'Obstacle near edge 40" from the pipe end, 6" high, 30° bends. Where is Mark 2 (top of the first offset)?', c: ['41½"', '40"', '38½"', '52"'], w: 'D + shrink = 40 + (6 × ¼) = 41½".' },
    { l: 'saddle4', q: 'Mark 2 is at 41½" for a 6" high saddle with 30° bends. Where is Mark 1?', c: ['29½"', '35½"', '41½"', '53½"'], w: '41½ − (6 × 2) = 29½".' },
    { l: 'saddle4', q: 'Four 30° bends in a 4-point saddle add how much toward the 360° limit?', c: ['120°', '90°', '60°', '180°'], w: '4 × 30° = 120°.', r: '358.24(B)' },
    { l: 'air', q: 'Bending "in the air" means:', c: ['Bender upside down, handle on the floor, pushing the pipe into the shoe by hand', 'Bending pipe overhead on a lift', 'Bending without marking the pipe', 'Using a hydraulic bender'], w: 'Head up, handle down; good for small bends and long sticks.' },
    { l: 'air', q: 'Bending in the air is most handy for:', c: ['Small bends like kicks and box offsets, or a long stick with bends in the way', 'Large 90s on 1¼" EMT', 'Rigid over 1"', 'Cutting pipe'], w: 'Small bends where the floor method would hit something.' },
    { l: 'speed', q: 'A ½" box offset using 10° bends. How far apart are the marks?', c: ['3"', '1"', '6"', '1½"'], w: '½ × 6 = 3".' },
    { l: 'speed', q: 'Why use 10° bends instead of 30° for a ½" box offset?', c: ['At 30° the marks would be only 1" apart, too close to bend', '30° is not allowed by code', '10° bends have more shrink', 'It uses less pipe'], w: '½ × 2 = 1" at 30°; ½ × 6 = 3" at 10°.' },
    { l: 'speed', q: 'The multiplier for 10° offset bends is:', c: ['6', '2', '2.6', '1.4'], w: 'Offset table: 10° = 6.' },
  ]
});
