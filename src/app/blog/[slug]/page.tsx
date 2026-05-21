import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CalendarDays, Clock3 } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPostBySlug } from "@/lib/posts";
import { Badge } from "@/components/ui/badge";

type PostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function formatPostDate(value: string): string {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(parsed);
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    return {
      title: "Post not found",
    };
  }

  return {
    title: `${post.meta.title} | Writing`,
    description: post.meta.description,
  };
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main
      className="relative min-h-screen py-10 sm:py-16"
      style={{ background: "var(--app-bg)", color: "var(--fg)" }}
    >
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-2">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-full chip px-4 py-2 text-sm"
          >
            <ArrowLeft className="size-4" />
            Back to writing
          </Link>
          <Link
            href="/frontend"
            className="inline-flex items-center gap-2 rounded-full chip px-4 py-2 text-sm"
          >
            Frontend portfolio
          </Link>
        </div>

        <header className="mt-6">
          <div className="mb-4 flex flex-wrap items-center gap-2 text-xs text-muted-token">
            <span className="inline-flex items-center gap-1 chip rounded-full px-2.5 py-1">
              <CalendarDays className="size-3.5" />
              {formatPostDate(post.meta.date)}
            </span>
            <span className="inline-flex items-center gap-1 chip rounded-full px-2.5 py-1">
              <Clock3 className="size-3.5" />
              {post.meta.readingTime}
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-fg-token leading-tight">
            {post.meta.title}
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-token leading-relaxed">
            {post.meta.description}
          </p>
          <div className="mt-5 flex flex-wrap gap-2">
            {post.meta.tags.map((tag) => (
              <Badge key={tag} className="rounded-full chip">
                {tag}
              </Badge>
            ))}
          </div>
        </header>

        <div className="mt-10 glass rounded-2xl p-6 sm:p-8">
          <div className="prose prose-lg prose-neutral dark:prose-invert max-w-none prose-headings:tracking-tight prose-headings:text-fg-token prose-p:text-muted-token prose-strong:text-fg-token prose-code:text-fg-token prose-a:text-fg-token prose-a:underline-offset-4 hover:prose-a:opacity-80">
            <MDXRemote source={post.content} />
          </div>
        </div>
      </article>
    </main>
  );
}
