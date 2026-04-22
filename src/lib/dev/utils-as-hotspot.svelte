<script module>
import CodeSnip from "$lib/components/ui/CodeSnip.svelte";

export const title = "The problem with utils";
export const date = "April 21, 2026";

const sampleCode = `
class MobileProvider(str, Enum):
    GLOBE = "Globe"
    SMART = "Smart"
    DITO = "DITO"

class PhilippineMobileNumber:
    country_code: str
    prefix: str
    subscriber_number: str
    provider: MobileProvider
    raw: str

    def is_valid(self) -> bool:
        return self.raw.startswith("+63") and len(self.subscriber_number) == 10

    def formatted(self) -> str:
        return f"{self.country_code} {self.prefix}-{self.subscriber_number}"

...(rest of the code omitted)`;
</script>

<h1>{title}</h1>

<div class="flex flex-col">
  <div>
    References:
    <ul class="posts">
      <li>
        <a
          class="posts"
          href="https://web.archive.org/web/20230611000625/https://danparkin.com/2017/04/20/helpers-utils-and-hot-spots/"
        >
          danparkin.com
        </a>
      </li>
    </ul>
  </div>

  <p>
    Many codebases eventually grow a package called <code>utils</code>. It
    starts innocently enough: a place for functions that don’t clearly belong
    anywhere else. But over time, it becomes a dumping ground for logic that
    actually belongs in the domain.
  </p>

  <p>
    This is closely related to the <a class="posts" href="/posts/tell-dont-ask"
      >Tell, Don’t Ask principle</a
    >. When you rely too much on utility functions, you often end up “asking”
    for data and processing it elsewhere, instead of letting objects “tell” you
    what they know how to do.
  </p>

  <p> Let’s start with something simple: </p>

  <CodeSnip
    code={`phone_number: string = "+63 917-231-1234"`}
    language="python"
  />

  <p>
    At first glance, this looks harmless. It is just data. But the moment you
    need to validate, format, or interpret this value, a familiar temptation
    appears: <em>just put it in utils</em>.
  </p>

  <p>
    That decision seems practical, but it quietly pushes behavior away from the
    data it belongs to. Instead of modeling the concept, we start collecting
    operations in a separate place.
  </p>

  <p>
    A better alternative is to treat the phone number as a domain concept, not a
    raw string:
  </p>

  <CodeSnip code={sampleCode} language="python" />

  <p>
    Notice what changed. We didn’t just “add a class instead of a utils
    function”. We moved behavior closer to the data it describes. Validation,
    formatting, and provider logic now live where they naturally belong.
  </p>

  <p>
    This is the real issue with <code>utils</code>: it often becomes a
    substitute for thinking in terms of behavior. Instead of asking “what does
    this concept do?”, we ask “where should I put this function?”
  </p>

  <h2>Before creating a utility function, consider this: </h2>
  <div>
    <ul class="posts">
      <li>
        Does this logic belong to an existing concept that we have failed to
        model properly?
      </li>
      <li>
        Are we duplicating behavior, or just noticing superficial similarity in
        code shape?
      </li>
      <li>
        Would it make more sense for this behavior to live with the data it
        operates on?
      </li>
    </ul>
  </div>

  <p>
    Not all utility functions are bad. But many of them are a signal: the domain
    might not be fully expressed yet in the code.
  </p>
</div>
