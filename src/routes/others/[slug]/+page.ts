import { error } from "@sveltejs/kit";

export async function load({ params }) {
  try {
    const post = await import(`$lib/others/${params.slug}.svelte`);
    return {
      title: post.title,
      date: post.date,
      content: post.default,
    };
  } catch (e) {
    console.error(e);
    throw error(404, "Post not found");
  }
}