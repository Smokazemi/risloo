import CentersPage from "@/components/templates/CentersPage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'صفحه مراکز',
  description: 'صفحه مراکز',
  keywords: 'مراکز, مشاوره, روانشناسی, مشاوره آنلاین, ریسلو',
  openGraph: {
    title: 'صفحه مراکز',
    description: 'صفحه مراکز',
    url: '/',
    siteName: 'ریسلو',
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
  },
  alternates: {
    canonical: '/',
    languages: {
      'fa-IR': '/',
    }
  }
}
export default async function Home({ searchParams }: { searchParams: Promise<{ index?: string }> }) {

  return (
    <div>

      <CentersPage initialIndex={(await searchParams).index} />

    </div>
  );
}
