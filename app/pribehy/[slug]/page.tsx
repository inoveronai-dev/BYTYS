import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pribehy, getPribehBySlug } from "@/data/pribehy";
import { StoryArticle } from "@/components/stories/StoryArticle";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return pribehy.map((story) => ({ slug: story.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const story = getPribehBySlug(slug);
  if (!story) return { title: "Príbeh" };
  return {
    title: `${story.number} · ${story.title}`,
    description: story.subtitle ?? story.title,
  };
}

export default async function StoryPage({ params }: PageProps) {
  const { slug } = await params;
  const story = getPribehBySlug(slug);
  if (!story) notFound();
  return <StoryArticle story={story} />;
}
