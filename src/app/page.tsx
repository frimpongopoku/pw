import Portfolio from "@/components/portfolio";
import { getLatestPosts } from "@/lib/posts";

export default function HomePage() {
  const latestPosts = getLatestPosts(3);
  return <Portfolio latestPosts={latestPosts} />;
}
