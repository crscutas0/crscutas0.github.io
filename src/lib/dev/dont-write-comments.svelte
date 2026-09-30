<script module>
import CodeSnip from "$lib/components/ui/CodeSnip.svelte";

export const title = "Don't write comments";
export const date = "September 30, 2026";
export const description =
  "Comments should add value, not act as a redundancy.";

const sampleCode = `"""
Calculates the area of a square.

:param x: The length of the side of the square.
:return: The area of the square.
"""
def square_area(x):
    return x * x
`;

const sampleCode2 = `"""
Given the quantity of shapes being processed, 
use of static methods instead of polymorphic
approach is ideal given the speed benefit.

static method: 10ns
polymorphic method: 30ns
"""
def calculate_area(shape: Shape) -> float:
    switch shape:
        case Shape.SQUARE:
            return square_area(shape.side_length)
        case Shape.CIRCLE:
            return circle_area(shape.radius)
        case Shape.TRIANGLE:
            return triangle_area(shape.base, shape.height)
`;
</script>

<h1>{title}</h1>

<div class="flex flex-col">
  <div>
    Refereces:
    <ul class="posts">
      <li>
        <a class="posts" href="https://www.youtube.com/watch?v=SUIUZ09mnwM">
          Seven Ineffective Coding Habits of Many Programmers (Kevlin Henney)
        </a>
      </li>
    </ul>
  </div>

  <blockquote class="quote">
    {description}
  </blockquote>

  <p>
    While the title and the description may seem to be figthing each other, but
    they are actually complementary. I want to say don't write comments to get
    rid of the habbit of writing comments that repeats what has already been
    written in code. If an information could not or too difficult to express in
    code, then a comment would be appropriate.
  </p>

  <CodeSnip code={sampleCode} language="python" />

  <p> The simple code above is problematic for the following reasons: </p>

  <ul>
    <li>
      If the implementation change the responsible thing to do would be to
      update the comment, otherwise the code and the comment will drift.
    </li>
    <li>
      If the comment and the code drifts in meaning, which one is accurate?
      Usually it would lead to the comment as unreliable, but still to
      conflicting claims in code is a bug.
    </li>
    <li>
      Comments like this are noise. Often times noise in code gets tuned out.
    </li>
  </ul>

  <CodeSnip code={sampleCode2} language="python" />

  <p>
    The comment adds value since it communicates an information not immediately
    clear in the code. If there are changes in the specification, the comment
    does not need to be updated as it does not reflect the specifics of the
    implementation.
  </p>
</div>
