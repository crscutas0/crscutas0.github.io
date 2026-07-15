<script module>
import CodeSnip from "$lib/components/ui/CodeSnip.svelte";

export const title = "Another Option";
export const date = "July 13, 2026";
export const description = "";

const shapeCode = `
enum ShapeType {
  SQUARE,
  RECTANGLE,
  TRIANGLE,
  CIRCLE
}

static class ShapeUnion {
  ShapeType type;
  float width;
  float height;

  ShapeUnion(ShapeType t, float w, float h) {
    type = t;
    width = w;
    height = h;
  }
}

static float getAreaSwitch(ShapeUnion s) {
  return switch (s.type) {
    case SQUARE -> s.width * s.width;
    case RECTANGLE -> s.width * s.height;
    case TRIANGLE -> 0.5f * s.width * s.height;
    case CIRCLE -> PI * s.width * s.width;
  };
}`;

const benchmarkResult = `
> ./gradlew run
Polymorphic                        2.57 ns/shape
Switch                             0.99 ns/shape`;

const textInput =
  `<` +
  `script lang="ts">
	let {
		value = $bindable(),
		id,
		label,
		placeholder,
		required = false,
    type = 'text',
		disabled = false
	} = $props();
<` +
  `/script>

<div class="mb-4">
  <label for={id}>{label}</label>

	<input
		{id}
		{type}
		bind:value
		{placeholder}
		{required}
		{disabled}
	/>
</div>
`;
</script>

<h1>{title}</h1>

<div>
  Refereces:
  <ul class="posts">
    <li>
      <a
        href="https://www.computerenhance.com/p/clean-code-horrible-performance"
        target="_blank"
        class="posts">
        "Clean" Code, Horrible Performance
      </a>
    </li>
    <li>
      <a
        href="https://refactoring.guru/replace-conditional-with-polymorphism"
        target="_blank"
        class="posts">
        refactoring.guru: Replace Conditional with Polymorphism
      </a>
    </li>
  </ul>
</div>

<p>
  When working with code, common wisdom is something that should always be
  considered. That said, when code deviates from this common wisdom we should
  not automatically think it is badly written.
</p>

<h2>if/switch statements are good enough</h2>

<p>
  Clean code advocates to use polymorphism when handling variety of behavior. I
  personally like this idea since it reduces opportunity to make bugs.
  Coditional statements are quite easy to mess up. However, this approach when
  applied to a large dataset performs rather slow. For the polymorphism code
  example go to `refactoring.guru`.
</p>

<p>
  The code below is an example of changing the implementation from polymorphic
  to switch case.
</p>

<CodeSnip code={shapeCode} />

<p>
  To test the persformance, we created 1_000_000 dataset and calculated how long
  it takes to calculate each shape's area.
</p>

<CodeSnip code={benchmarkResult} />

<p>
  Using switch case is much faster, while it may look like that code readability
  may suffer, maybe the correct observation would be "we are just used to
  looking at abstraction". We can create statif functions for the calculations
  if that "can" improve readability, that would still not affect performance.
</p>

<h2>Take your time understanding the coding principles</h2>

<p>
  Let's explore DRY (Don't Repeat Yourself). The summary of this principle is
  "It aims to reduce code duplication, minimize maintenance efforts, and prevent
  bugs caused by inconsistent updates". The idea sounds simple and familiar that
  it feels like there is no need to further expound on what it means.
</p>

<p>
  In my observation when this principle is only understood at a surface level,
  devs tend to group code when they look the same. For example a text and
  password input. In html changing from text to password is just changing the
  value of the type attribute. So the sample code below would make sense.
</p>

<CodeSnip code={textInput} language="typescript" />

<p>
  What if we want to have a different behavior for password? That would force us
  to write some conditions to cater the new requirements. With that we are still
  adhering to DRY but we could be warned about other principles. However, what
  if we create another component, this time it would be specific for password.
  Are we now violating DRY given that their difference is only the type
  attribute?
</p>

<p>
  The key concept with DRY is "REPEAT", but how exactly are we repeating? Is it
  about code sameness, behavior, or purpose? In our example while both text and
  password are a kind of input, the two have different purpose. While sameness
  in code may lead to misuse of inheritance, this is still an acceptable basis
  for what "repeat" means. All of this variation in meaning is actually a
  strength, when applied correctly, your code will truly be DRY.
</p>

<h2>Datatypes in variable names</h2>

<p>
  Naming variables is up there in difficulties of programming. Although minor
  but I find certain practices a source of slight irritation. Say for example
  "is_active", does having the prefix "is" make it more "active"? Or
  AccountTypeEnum as suppose to AccountType.
</p>

<p>
  My consideration for naming could be broken in two areas. First would be as a
  literature. When I read this code, will it tell me the thing its trying to do?
  Let's consider names like "active", "stores", "UnknownProcess", to me these
  nouns sufficiently represent their purpose. Attaching the data type in the
  name often times does not help.
</p>

<p>
  Second is when writing code. Can I remember the names I have assigned to these
  components, or does it improve its intuitiveness. While I do agree that typing
  "is_" would help with the code suggestion, but I am willing to forego that
  feature just to remove these noise in code names.
</p>

<p>
  Establishing naming rules can help create a consistent and predictable
  vocabulary throughout the project. One useful guideline is to use the number
  of nouns in a name to indicate how specific a concept is. For example, a
  single noun such as Account suggests there is only one account concept in the
  entire project. When multiple concepts share the same general idea, use a more
  specific name by combining nouns. For example, UserProfile, CompanyProfile, or
  CustomerProfile.
</p>

<h2>Closing</h2>

<p>
  The article does is not oppose to common wisdom, but on the common
  implementation suggested by these common wisdom. It also does suggest hard
  rules, but rather some ideas to consider. As the title says, let's consider
  this as "Another Option".
</p>
