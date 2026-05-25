<script module>
import CodeSnip from "$lib/components/ui/CodeSnip.svelte";

export const title = "Code Quality";
export const date = "2026-05-24";
export const description = "What code quality really means, and how to make code simple and easy to read.";

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

<h1>Code Quality, what does it mean?</h1>

<p>
  Dev teams often put high emphasis on code quality, and righfully so. But often
  times it focuses on how it should be written, and the concept of "what" that
  means is often left to "familiarity". This approach is not an obvious problem
  specially when we the team have defined certain coding standards. However,
  while these code may lead to a conforming code structure but the actual code
  might not that desirable.
</p>

<p>
  Code is one component of a system, its structure would be affected by other
  components such as purpose, framework, environment and so on. When it. Quality
  generally means the degree to which something possesses desirable
  characteristics or fulfills its purpose well. To figure out what Quality means
  when its attached to Code, first we need to narrow down its purpose. For me
  its the primary source of truth on how the application is meant to behave, in
  short the base documentation. Since its a documentation, readability would be
  my primary concern.
</p>

<h2>Simple and Easy</h2>

<p class="mb-7">
  First lets define Easy, this means things are near. "Its easy to reach", "Its
  easy to get to", ... For me, code is easy to read the coherent code is
  implemented near to each other. Consider the following.
</p>
<div class="flex flex-col">
  <tt>Import Data</tt>
  <CodeSnip code={jsonImport} language="typescript" />
  <tt>Inline</tt>
  <CodeSnip code={noJsonImport} language="typescript" />
</div>

<p>
  Inline is much easier to read because the data is immediately there. Compare
  that to the import example where you have to guess what is being returned.
  Another example would be if a screen will have different design according to
  certain states.
</p>

<CodeSnip code={differentStates} language="typescript" />

<p>
  While above is easy since the coherent components are just declared within the
  function. This would easily becomes complex. Rich Hickey, creator of clojure
  have likened code complexity as weaving ropes. When ropes are weaved its
  difficult to know where it starts and ends. The code above is complex because:
</p>

<ul>
  <li>Three different components are declared in one section</li>
  <li
    >The logic for switching components and identifying what that is not clear.</li>
</ul>

<p>Refactored complex code:</p>

<CodeSnip code={differentComponents} language="typescript" />

<p>
  While the refactored code is longer. But it removes the complexity by just
  grouping them. This code structure is subjectively easier to modify and read.
</p>

<p>
  You might have notice that I have not stated a specific way on how to achieve
  code quality. That is because quality is subjective, however, what is
  consistent in this kind of discussion is that our goal is to make code
  "Simple" and "Easy". While we are familiar with these words, we need to define
  them, but not use it as a constraint. These are only concepts, concepts are
  meant to guide. It is up to the team to make rules that adheres to "Simple"
  and "Easy".
</p>

<h2>Rerences</h2>
<ul>
  <li
    ><a href="https://www.youtube.com/watch?v=SxdOUGdseq4" target="_blank"
      >Rich Hickey - Simple made Easy</a
    ></li>
  <li
    ><a href="https://htmx.org/essays/locality-of-behaviour/" target="_blank"
      >htmx - Locality of Behavior</a
    ></li>
</ul>
