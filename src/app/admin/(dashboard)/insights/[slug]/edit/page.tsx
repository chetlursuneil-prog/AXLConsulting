import Link from 'next/link';
import { insights } from '@/data/insights';

export default function AdminInsightEdit({ params }: { params: { slug: string } }) {
  const item = insights.find((i) => i.slug === params.slug);
  if (!item) return <div className="p-8">Insight not found</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Edit: {item.title}</h1>
      <form className="space-y-4 mt-4">
        <label className="block">
          <div className="text-sm">Title</div>
          <input defaultValue={item.title} className="mt-1 w-full border px-3 py-2 rounded" />
        </label>
        <label className="block">
          <div className="text-sm">Excerpt</div>
          <textarea defaultValue={item.excerpt} className="mt-1 w-full border px-3 py-2 rounded" />
        </label>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-primary-600 text-white rounded">Save</button>
          <Link href="/admin/insights" className="px-4 py-2 border rounded">Cancel</Link>
        </div>
      </form>
    </div>
  );
}
