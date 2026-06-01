import { error } from "@sveltejs/kit";

export interface Post {
  category: string;
  slug: string;
  title: string;
}

export function createPostLoader(category: string) {
  return async function load({ params }: { params: { slug: string } }) {
    try {
      const post = await import(`$lib/${category}/${params.slug}.svelte`);
      return {
        title: post.title,
        date: post.date,
        description: post.description,
        content: post.default,
      };
    } catch (e) {
      console.error(e);
      throw error(404, "Post not found");
    }
  };
}

export const devPosts: Post[] = [
  {
    category: "docs",
    slug: "readme-levels",
    title: "Readme Levels",
  },
  {
    category: "docs",
    slug: "documentation",
    title: "Documetation",
  },
  {
    category: "code",
    slug: "code-quality",
    title: "Code Quality",
  },
  {
    category: "code",
    slug: "utils-as-hotspot",
    title: "The problem with Utils",
  },
  { category: "code", slug: "tell-dont-ask", title: "Tell, Don't Ask" },
  {
    category: "code",
    slug: "slap",
    title: "SLAP - Single Level of Abstractionn Principle",
  },
];

export const religionPosts: Post[] = [
  {
    category: "outlook",
    slug: "i-dont-know",
    title: "I don't know",
  },
  { category: "Beliefs", slug: "life-after", title: "Life after" },
];

export const politicsPosts: Post[] = [];

export const othersPosts: Post[] = [];
