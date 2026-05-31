<script module>
import CodeSnip from "$lib/components/ui/CodeSnip.svelte";

export const title = "Documetation";
export const date = "June 01, 2026";
export const description = "";

const commentSample = `
/*
  Encoding URL id paramters so it will not be easy to guess, 
  and it also saves us URL length since we are limited to 
  255 characters.
*/
func EncodeUrlIds(id int[]) string {
  ...
}
`;

const markdownStructure = `
├── src
│   └── ...
└── docs
    └── About the Project
        ├── Project Setup
        │   ├── Setup
        │   │   ├── Production
        │   │   ├── Local
        │   │   └── Staging
        │   └── Codebase
        │       └── Structure
        ├── Features
        └── Project Management`;
</script>

<h1>Documetation</h1>

<p>
  Documentation is quite challenging. Its not fun to do, but sometimes its like
  photos, you don't appreciate if its recent but give it time that photo would
  make you smile. With that said, how do we make documentation worth doing?
</p>

<p> Before we begin: </p>

<ul class="posts">
  <li>
    I don't think everything should be documented. There is a popular notion
    that we should document every function, and I don't think that is necessary.
  </li>
  <li>
    Code should be considered as documentation. It is readable after all.
  </li>
  <li>
    Documentation should be treated as code as well. It requires maintenance and
    it requires structure.
  </li>
</ul>

<h2>Progression of Information</h2>

<p>
  The location of your documentation would influence the specificity of its
  contents. The graph below shows the progression of specificity of the
  documentation. The further it is from the code the more broad its scopes
  become.
</p>

<img
  src="/posts/documentation/documentation_graph.png"
  class="size-70"
  alt="documentation graph" />

<p>
  Code is the most specific piece literature in your project. It can change for
  various of reasons, be it refactoring, change of library used, or even change
  in specification. Because of how often it change, the next level of
  documentation which is `code comments` should not act as redundancy of
  information. What it should do is enforce the decision how the code is
  written.
</p>

<CodeSnip code={commentSample} language="go" />

<p>
  Notice that the comment does not mention any specifics of the code, this
  allows the comment to be detached enough to require to be updated when code
  changes but still relevant to its content.
</p>

<h2>README</h2>

<p>
  README documents if located in the project may contain the rationale of the
  project, the tech stack, and even the process flow of certain features. Given
  its proximity to code, it should not contain information that can be contained
  in the code itself or even in comments. Having proximity as basis for its
  specificity would save us from immediately deprecating the document.
</p>

<p>
  README still benefits from structure. For organization it helps when I think
  of it as on boarding document. From the top document, I would consider the
  developer was just added to the projeect.
</p>

<CodeSnip code={markdownStructure} language="markdown" />
