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
  {
    category: "code",
    slug: "code-quality",
    title: "Code Quality",
  },
];

export const religionPosts: Post[] = [
  { category: "Beliefs", slug: "life-after", title: "Life after" },
];

export const politicsPosts: Post[] = [];

export const othersPosts: Post[] = [];
