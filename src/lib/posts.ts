export interface Post {
  category: string;
  slug: string;
  title: string;
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
];

export const religionPosts: Post[] = [
  { category: "Beliefs", slug: "life-after", title: "Life after" },
];

export const politicsPosts: Post[] = [];

export const othersPosts: Post[] = [];

