<script module>
import CodeSnip from "$lib/components/ui/CodeSnip.svelte";

export const title = "Readme Levels";
export const date = "June 01, 2026";
export const description = "";

const folderStructure = `
project/
├── docs/
│   ├── README.md                  # Level 1
│   ├── problem-space.md           # Level 1
│   ├── audience.md 
│   └── features.md
│
│   ├── authentication/
│   │   ├── README.md              # Level 2
│   │   ├── 3rdParty.md            # Level 3
│   │   └── constraints.md
│   │
│   └── notifications/
│       ├── README.md
│       ├── delivery-channels.md
│       ├── retry-policy.md
│       └── rate-limits.md
│
├── src/
│   ├── ... `;
</script>

<h1>README Levels</h1>

<p>
  Documentation becomes easier to navigate when information is organized by
  depth. Readers should be able to start with a broad understanding of a project
  and progressively move toward more detailed information only when necessary.
</p>

<p>
  This document proposes three levels of documentation commonly found in project
  README files and supporting documentation.
</p>

<h2>Level 1: Project Overview</h2>

<p>
  <code>Level 1</code> introduces the project without discussing implementation details.
</p>

<p>A reader should be able to answer:</p>

<ul class="posts">
  <li>What is this project?</li>
  <li>What problem does it solve?</li>
  <li>Who is it intended for?</li>
</ul>

<p>
  Level 1 should provide enough context for someone to determine whether the
  project is relevant to them. Implementation details, setup procedures, and
  feature-specific behavior should be avoided.
</p>

<h2>Level 2: Features and Capabilities</h2>

<p>
  <code>Level 2</code> describes the features provided by the project.
</p>

<p>At this level, the reader should learn:</p>

<ul class="posts">
  <li>What features exist</li>
  <li>Why they exist</li>
  <li>How they relate to other features</li>
</ul>

<p>
  The goal is to explain the project's capabilities without discussing
  implementation details.
</p>

<h2>Level 3: Feature Details</h2>

<p>
  <code>Level 3</code> documents the behavior and constraints of individual features.
</p>

<p>This level may include:</p>

<ul class="posts">
  <li>Workflows</li>
  <li>Assumptions</li>
  <li>Limitations</li>
</ul>

<p>
  Authors should avoid duplicating information already expressed clearly in the
  code or code comments. Instead, the documentation should focus on information
  that explains the boundaries, expectations, and interactions surrounding the
  feature.
</p>

<h2>Level 4 (Exceptional Cases)</h2>

<p>
  Most projects should not require a <code>Level 4</code>. However, some
  implementation details are important enough and reused enough that they
  deserve dedicated documentation.
</p>

<p>
  Examples include shared payload structures, event contracts, state
  transitions, response formats, or other implementation-specific patterns that
  span multiple features.
</p>

<p>
  These topics are too specific to belong in feature documentation, yet too
  important to be understood solely from reading the code. In these cases, a
  Level 4 document may be appropriate.
</p>

<h2>Example</h2>

<CodeSnip code={folderStructure} language="markdown" />

<h2>General Principle</h2>

<p> As documentation becomes deeper, it should become more specific. </p>

<p>
  Readers should be able to stop at any level and still gain value without being
  required to read the next level. Each level should answer a different set of
  questions and avoid repeating information from the previous one.
</p>
