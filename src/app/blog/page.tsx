import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CalendarDays, Clock3 } from "lucide-react";
import { getAllPosts } from "@/lib/posts";
import { Badge } from "@/components/ui/badge";

function formatPostDate(value: string): string {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  }).format(parsed);
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <main
      className="relative min-h-screen py-10 sm:py-16"
      style={{ background: "var(--app-bg)", color: "var(--fg)" }}
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full chip px-4 py-2 text-sm"
            >
              <ArrowLeft className="size-4" />
              Career tracks
            </Link>
            <Link
              href="/frontend"
              className="inline-flex items-center gap-2 rounded-full chip px-4 py-2 text-sm"
            >
              Frontend portfolio
            </Link>
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl font-black tracking-tight text-fg-token">
            Writing
          </h1>
          <p className="mt-3 text-base sm:text-lg text-muted-token max-w-2xl">
            Product engineering notes on architecture, frontend quality, and practical performance.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5">
          {posts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
              <article className="glass rounded-2xl p-6 sm:p-7 transition-all group-hover:-translate-y-0.5">
                <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-muted-token">
                  <span className="inline-flex items-center gap-1 chip rounded-full px-2.5 py-1">
                    <CalendarDays className="size-3.5" />
                    {formatPostDate(post.date)}
                  </span>
                  <span className="inline-flex items-center gap-1 chip rounded-full px-2.5 py-1">
                    <Clock3 className="size-3.5" />
                    {post.readingTime}
                  </span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-fg-token inline-flex items-center gap-2">
                  {post.title}
                  <ArrowUpRight className="size-4 opacity-70 group-hover:opacity-100 transition-opacity" />
                </h2>
                <p className="mt-3 text-muted-token leading-relaxed max-w-3xl">
                  {post.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} className="rounded-full chip">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
