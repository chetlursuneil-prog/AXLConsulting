import Link from 'next/link';
import { caseStudies } from '@/data/case-studies';

export default function AdminCaseStudyView({ params }: { params: { slug: string } }) {
  const item = caseStudies.find((c) => c.slug === params.slug);
  if (!item) return <div className="p-8">Case study not found</div>;

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">{item.title}</h1>
          <p className="text-sm text-charcoal-600">{item.client}</p>
        </div>
        <div className="flex gap-2">
          <Link href={`/admin/case-studies/${item.slug}/edit`} className="px-3 py-2 bg-primary-600 text-white rounded">Edit</Link>
          <button className="px-3 py-2 bg-red-600 text-white rounded">Delete</button>
        </div>
      </div>

      <section className="bg-white p-4 rounded shadow">
        <p className="text-sm text-charcoal-700">{item.summary}</p>
      </section>
    </div>
  );
}
