<script module>
  import CodeSnip from '$lib/components/ui/CodeSnip.svelte';

  export const title = 'SLAP';
  export const date = 'April 20, 2026';

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

  const sampleCode2 = `def main():
    print_numbers_one_to_ten()
    print_numbers_eleven_to_twenty()
    print_twenty_one()
    print_from_twenty_two_to_thirty_five()`;
</script>

<h1>SLAP - Single Level of Abstractionn Principle</h1>

<div class="flex flex-col gap-8">
  <p>
    This document is based from 
    <a class="posts"
      href="https://danparkin.com/2018/10/14/the-single-level-of-abstraction-principle-slap/">
      danparkin.com
    </a>, however, the site is no longer available and that made me sad. 
    Being sad is no bueno, so I decided to write this post.
  </p>

  <p>
    Let's do a simple exercise, read the code below and time how long it takes you to figure out the
    output.
  </p>

  <CodeSnip code={sampleCode1} language="python" />

  <p>
    While the code works, but it would probably take a minute to figure out. Below visualizes above 
    <tt>main()</tt>'s complexity.
  </p>

  <img src="/posts/slap/sample_code_1.png" class="size-100" alt="sample code 1" />

  <p>
    The goal of SLAP is to make code more expressive in a way that the top level would communicate
    the details of the implementation.
  </p>

  <CodeSnip code={sampleCode2} language="python" />

  <p>
    <tt>main()</tt>
    function complexity visualization:
  </p>

  <img src="/posts/slap/sample_code_2.png" class="size-100" alt="sample code 2" />

  <h2>So what exactly happened?</h2>
  <p>
    Think of complexity as a bucket of water. The more complex it gets, the higher its volume. Then
    imagine your brain as bucket. Our mental capacity to hold these complexities are quite limited.
    Sectioning these complexities to allows us at a glance understand the objective of the code
    without having to look at the details.
  </p>

  <h2>How is it achieved?</h2>
  <p>
    When we read code, we tend to start at the entry point. In this particular example, the main
    function. Think of that entry point function as <b>table of contents</b>, 
    from there you can navigate to the different sections of the code.
  </p>
  <p>
    If you wish to know the particulars. If there is an issue with how "21 ~ 35" is printed it would
    be easier to find the offending code.
  </p>

  <h2>Considerations</h2>
  <ul>
    <li>Some complexities are unavoidable. Do not force applying this principle.</li>
    <li>Do not overdo it. Function length is not always an indicator of complexity.</li>
    <li>Consider this principle as something you apply during code cleanup.</li>
    <li>Look at code as a composition of solutions.</li>
  </ul>
</div>
