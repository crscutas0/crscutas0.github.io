<script module>
import CodeSnip from "$lib/components/ui/CodeSnip.svelte";

export const title = "SLAP - Single Level of Abstraction Principle";
export const date = "April 20, 2026";

const sampleCode1 = `
def print_numbers_one_to_ten():
    for i in range(1, 11):
        print(i)

def main():
    print_numbers_one_to_ten()

    for i in range(11, 21):
        print(i)

    print(21)

    if 22 % 2 == 0:
        print(22)

        for i in range(23, 31):
            print(i)

            if i == 30:
                for j in range(31, 36):
                    print(j)`;

const sampleCode2 = `
def main():
    print_numbers_one_to_ten()
    print_numbers_eleven_to_twenty()
    print_twenty_one()
    print_from_twenty_two_to_thirty_five()`;
</script>

<h1>SLAP - Single Level of Abstraction Principle</h1>

<div class="flex flex-col">
  <p>
    This document is based from
    <a
      class="posts"
      href="https://danparkin.com/2018/10/14/the-single-level-of-abstraction-principle-slap/"
    >
      danparkin.com
    </a>, however, the site is no longer available, which is sad. Being sad is
    not good, so I decided to write this post.
  </p>

  <p>
    Let’s start with a simple exercise. Read the code below and see how quickly
    you can understand what it does.
  </p>

  <CodeSnip code={sampleCode1} language="python" />

  <p>
    The code works, but it is not easy to read. <tt>main()</tt> mixes different levels
    of detail—control flow, conditions, and actual intent are all tangled together.
  </p>

  <p> Below is a visual breakdown of the same function’s complexity: </p>

  <img
    src="/posts/slap/sample_code_1.png"
    class="size-100"
    alt="sample code 1"
  />

  <p>
    The goal of SLAP is to structure code so that each function operates at a
    single level of abstraction. The top level should describe <b>what</b> is
    happening, not <b>how</b> it happens.
  </p>

  <CodeSnip code={sampleCode2} language="python" />

  <p>
    Now <tt>main()</tt> reads like a sequence of steps. You understand the flow without
    needing to inspect implementation details.
  </p>

  <p>
    Visualization of the improved <tt>main()</tt>:
  </p>

  <img
    src="/posts/slap/sample_code_2.png"
    class="size-100"
    alt="sample code 2"
  />

  <h2>What are we trying to achieve?</h2>
  <p>
    Think of complexity as volume of water. The more complex it gets, the higher
    its volume. Imagine your brain as a bucket. Our mental capacity to hold
    complexities is limited. Sectioning these complexities allows us to
    understand to learn as needed.
  </p>

  <h2>How is it achieved?</h2>
  <p>
    When reading code, we usually start from an entry point — typically
    <tt>main()</tt>. Think of it as a table of contents.
  </p>

  <p>
    Each function should represent a section. From there, you can drill down
    only when you need details.
  </p>

  <p>
    This also makes debugging easier. If something breaks in “printing 21 to
    35,” you immediately know which function to inspect instead of scanning a
    large block of mixed logic.
  </p>

  <h2>Considerations</h2>
  <ul class="posts">
    <li>
      Some complexity is unavoidable. Do not force abstraction where it hurts
      clarity.
    </li>
    <li>
      Do not overdo it — too many tiny functions can also reduce readability.
    </li>
    <li>Function length is not a reliable measure of complexity.</li>
    <li>Apply SLAP mostly during refactoring, not as a strict upfront rule.</li>
    <li>Think of code as a composition of focused solutions.</li>
  </ul>
</div>
