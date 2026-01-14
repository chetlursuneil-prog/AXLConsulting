import Link from 'next/link';
import { insights } from '@/data/insights';

export default function AdminInsightView({ params }: { params: { slug: string } }) {
  const item = insights.find((i) => i.slug === params.slug);
  if (!item) return <div className="p-8">Insight not found</div>;

  return (
    <div className="p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">{item.title}</h1>
          <p className="text-sm text-charcoal-600">{item.date}</p>
        </div>
        <div className="flex gap-2">
          <Link href={`/admin/insights/${item.slug}/edit`} className="px-3 py-2 bg-primary-600 text-white rounded">Edit</Link>
          <button className="px-3 py-2 bg-red-600 text-white rounded">Delete</button>
        </div>
      </div>

      <article className="mt-4 bg-white p-4 rounded shadow">
        <p className="text-sm text-charcoal-700">{item.excerpt}</p>
      </article>
    </div>
  );
}
