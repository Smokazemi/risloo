import CentersPage from "@/components/templates/CentersPage";
import data from '@/data/data.json';
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'صفحه مراکز',
  description: 'صفحه مراکز',
  keywords: 'مراکز, مشاوره, روانشناسی, مشاوره آنلاین, ریسلو',
  openGraph: {
    title: 'صفحه مراکز',
    description: 'صفحه مراکز',
    url: '/centers',
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
export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "itemListElement": data.map((center, index) => ({
      "@type": "MedicalOrganization",
      "@id": `https://risloo.ir/centers/${center.id}`,
      "position": index + 1,
      "name": center.detail.title,
      "description": center.detail.description,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": center.detail.address
      },
      "telephone": center.detail.phone_numbers?.[0],
      "image": center.detail.avatar?.[0]?.url,
      "employee": {
        "@type": "Person",
        "name": center.manager.name,
        "image": center.manager.avatar?.[0]?.url,
        "jobTitle": "Manager"
      }
    }))
  }
  return (
    <div>



      <CentersPage centers={data} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
