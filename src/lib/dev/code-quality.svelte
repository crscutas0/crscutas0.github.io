<script module>
import CodeSnip from "$lib/components/ui/CodeSnip.svelte";

export const title = "Code Quality";
export const date = "2026-05-24";
export const description =
  "What code quality really means, and how to make code simple and easy to read.";

const jsonImport = `import { StatusHeaders } from '@/data/StatusHeaders';
  export const getAccountStatus = () => StatusHeaders;
`;
const noJsonImport = `export const getAccountStatus = () => {
    return ["ID", "ACCOUNT_ID", "STATUS"]
  };
`;

const differentStates = `export const AccountPage = () => {
    if (account.haveLoggedSince(10, "years")) {
      return <div>...</div>
    } else if (account.locationsValid() && account.vendorFlagged()) {
      return <div>...</div>
    } else {
      return <div>...</div>
    }
  };
`;

const differentComponents = `export const AccountValid = () => (<div>...</div>);
export const AccountInactive = () => (<div>...</div>);
export const AccountAnomaly = () => (<div>...</div>);

export const AccountPage = () => {
  const { screen, setScreen } = useState<ScreenOptions>();

  const anomaly = account.locationsValid() && account.vendorFlagged();
  const inactive = account.haveLoggedSince(10, "years");

  if (inactive) {
    setScreen(ScreenOptions.INACTIVE);
  } else if (anomaly) {
    setScreen(ScreenOptions.ANOMALY);
  } else {
    setScreen(ScreenOptions.ACTIVE);
  }

  switch(screen) {
    case ScreenOptions.INACTIVE:
      return <AccountInactive />;
    case ScreenOptions.ANOMALY:
      return <AccountAnomaly />;
    case ScreenOptions.ACTIVE:
      return <AccountValid />;
    default:
      return null;
  }

};
`;
</script>

<h1>Code Quality by defining Simple and Easy</h1>

<div>
  Refereces:
  <ul class="posts">
    <li>
      <a
        href="https://www.youtube.com/watch?v=SxdOUGdseq4"
        target="_blank"
        class="posts">
        Rich Hickey - Simple made Easy
      </a>
    </li>
    <li>
      <a
        href="https://htmx.org/essays/locality-of-behaviour/"
        target="_blank"
        class="posts">
        htmx - Locality of Behavior
      </a>
    </li>
  </ul>
</div>

<p>
  Dev teams often put high emphasis on code quality, and righfully so. But often
  times it focuses on how it should be written, and the concept of "what" that
  means is often left to "familiarity". This approach is not an obvious problem
  specially when teams have agreed on a coding standard. However, while these
  code may lead to a conforming code structure the actual code may not be
  desirable.
</p>

<p>
  Code is one component of a larger system. Its structure is influenced not only
  by the programmer, but also by the framework, runtime environment,
  architecture, and surrounding constraints.
</p>

<p>
  Quality generally refers to the degree to which something possesses desirable
  characteristics. To understand what “Code Quality” means, we must first
  understand the purpose of code itself. For me, code is the primary source of
  truth for how an application is intended to behave. With that, making it easy
  to read should be one of its qualification. But what does easy mean?
</p>

<h2>Easy and Simple</h2>
<h3>Defining Easy</h3>
<p class="mb-7">
  First, let us define “easy.” Ease is often relative to proximity or nearness:
  “easy to reach,” “easy to access,” or “easy to get to.” In code, readability
  becomes easier when related and coherent pieces are kept close to one another.
  The nearer connected concepts are within the codebase, the easier the system
  is to understand and navigate. Consider the following.
</p>

<div class="flex flex-col">
  <tt>Import Data</tt>
  <CodeSnip code={jsonImport} language="typescript" />
  <tt>Inline</tt>
  <CodeSnip code={noJsonImport} language="typescript" />
</div>

<p>
  Inline code is often easier to read because the data and behavior are
  immediately visible. In contrast, imported abstractions may require the reader
  to mentally trace what is being returned or executed. The same principle
  applies to UI logic. For example, when a screen changes design based on
  different states, keeping the relevant state logic close to the UI can make
  the behavior easier to understand.
</p>

<h3>Defining Simple</h3>
<CodeSnip code={differentStates} language="typescript" />

<p>
  While above is easy since the coherent components are just declared within the
  function. This would easily becomes complex. Rich Hickey, creator of clojure
  have likened code complexity as weaving ropes. When ropes are weaved its
  difficult to know where a rope starts and ends. The code above is complex
  because:
</p>

<ul>
  <li>Three different components are declared in one section</li>
  <li>
    The logic for switching components and identifying their states is not
    immediately clear.
  </li>
</ul>

<p>Refactored complex code:</p>

<CodeSnip code={differentComponents} language="typescript" />

<p>
  While the refactored code is longer. But it removes the complexity by just
  grouping them. This code structure is subjectively easier to modify and read.
</p>

<h2>Final Thoughts</h2>
<p>
  You may notice that I have not proposed a single method for achieving code
  quality. This is because some aspects of quality are subjective and depend on
  the needs, constraints, and values of the team.
</p>

<p>
  What remains consistent, however, is the goal of reducing cognitive burden by
  making code more “Simple” and “Easy” to understand. These terms should not be
  treated as rigid constraints, but as guiding concepts that help teams shape
  their own standards and practices.
</p>

<p>
  Ultimately, it is the responsibility of the team to define rules that align
  with their understanding of what "Simple" and "Easy" is.
</p>
