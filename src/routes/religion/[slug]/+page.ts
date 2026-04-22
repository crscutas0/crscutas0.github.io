import { error } from "@sveltejs/kit";

export async function load({ params }: { params: { slug: string } }) {
  try {
    const post = await import(`$lib/religion/${params.slug}.svelte`);
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

