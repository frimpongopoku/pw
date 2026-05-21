import type { Metadata } from "next";
import Portfolio from "@/components/portfolio";
import { getLatestPosts } from "@/lib/posts";

export const metadata: Metadata = {
  title: "Frontend Engineer | Mr Frimpong",
  description:
    "Frontend engineering portfolio by Frimpong Opoku Agyemang featuring selected work, writing, and product engineering expertise.",
};

export default function FrontendPage() {
  const latestPosts = getLatestPosts(3);
  return <Portfolio latestPosts={latestPosts} />;
}
