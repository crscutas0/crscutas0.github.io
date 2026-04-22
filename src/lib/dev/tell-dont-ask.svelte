<script module>
import CodeSnip from "$lib/components/ui/CodeSnip.svelte";

export const title = "Tell, Don't Ask";
export const date = "April 21, 2026";

const sampleCode = `
class Profile:
    first_name: str
    last_name: str
    birth_date: date

class ProfileHelper:
    def full_name(self, profile: Profile) -> str:
        print(f"{profile.first_name} {profile.last_name}")

    def age(self, profile: Profile) -> int:
        today = date.today()
        print(today.year - profile.birth_date.year)

def main():
    profile = Profile("John", "Doe", date(2020, 1, 1))
    helper = ProfileHelper()

    helper.full_name(profile)
    helper.age(profile)
`;

const sampleCode2 = `
class Profile:
    def __init__(self, first_name: str, last_name: str, birth_date: date):
        self.first_name = first_name
        self.last_name = last_name
        self.birth_date = birth_date

    def full_name(self) -> str:
        return f"{self.first_name} {self.last_name}"

    def age(self) -> int:
        today = date.today()
        return today.year - self.birth_date.year

def main():
    profile = Profile("John", "Doe", date(2020, 1, 1))

    print(profile.full_name())
    print(profile.age())`;
</script>

<h1>Tell, Don't Ask</h1>

<div class="flex flex-col">
  <div>
    Refereces:
    <ul class="posts">
      <li>
        <a
          class="posts"
          href="https://danparkin.com/2018/10/14/the-single-level-of-abstraction-principle-slap/"
        >
          danparkin.com
        </a>
      </li>
      <li>
        <a href="https://martinfowler.com/bliki/TellDontAsk.html" class="posts">
          Tell, don't ask - martinfowler
        </a>
      </li>
    </ul>
  </div>

  <blockquote class="quote">
    The object that has the data does the work. – Allen Holub
  </blockquote>

  <p>
    Objects shouldn’t expose their data just so other objects can decide what to
    do with it. When logic depends heavily on an object’s data, that logic
    usually belongs inside that object.
  </p>

  <h2>A Common Mistake</h2>
  <CodeSnip code={sampleCode} language="python" />

  <div>
    At first glance, this works. But there are a couple of problems:

    <ul class="my-4 posts">
      <li>ProfileHelper needs to know the internal structure of Profile</li>
      <li>Behavior that depends on Profile’s data lives outside of it</li>
      <li>Any change to Profile risks breaking ProfileHelper</li>
    </ul>

    This is a classic case of asking for data, then deciding what to do with it
    elsewhere.
  </div>

  <h2>A Better Approach</h2>
  <p>Move the behavior closer to the data:</p>
  <CodeSnip code={sampleCode2} language="python" />

  <div>
    Now:
    <ul class="posts">
      <li>Profile owns both its data and behavior</li>
      <li>External code doesn’t need to know how Profile works internally</li>
      <li>Changes stay localized </li>
    </ul>
  </div>
  <p>
    Instead of asking for data and deciding what to do, we tell the object what
    we want, and it handles the rest.
  </p>

  <h2>What This Principle Really Means</h2>

  <div class="flex flex-col gap-4">
    <p>Tell, Don’t Ask doesn’t mean you should never access data.</p>
    <p>It means:</p>
    <ul class="posts">
      <li>Avoid pulling data out just to make decisions elsewhere </li>
      <li>Prefer telling objects to perform actions</li>
      <li>Keep behavior close to the data it depends on</li>
    </ul>

    Bad:
    <CodeSnip
      code={`if profile.age() > 18:
    allow_access()`}
      language="python"
    />

    Better:
    <CodeSnip
      code={`if profile.is_adult():
    allow_access()`}
      language="python"
    />

    The second version keeps the logic about “what counts as an adult” inside
    Profile.
  </div>

  <h2>Final Thoughts</h2>

  <p>
    The goal isn’t to eliminate data access. The goal is to keep your code
    cohesive and maintainable.
  </p>

  <p>
    When behavior and data drift apart, coupling increases and changes become
    harder. When they stay together, your code becomes easier to understand and
    evolve.
  </p>

  <p>
    Take time to decide what belongs where. That decision matters more than
    blindly following any principle.
  </p>
</div>
