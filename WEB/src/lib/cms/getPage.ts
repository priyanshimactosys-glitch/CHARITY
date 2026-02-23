import { mockPages } from "./mockPages";

export async function getPage(slug: string) {
  return mockPages[slug] || null;
}