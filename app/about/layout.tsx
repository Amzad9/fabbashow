import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | The fABBA Show - ABBA Tribute Celebration',
  description:
    'Learn about The fABBA Show: live ABBA tribute with authentic costumes, hit songs, and nationwide tour dates. Experience the magic of ABBA on stage.',
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
