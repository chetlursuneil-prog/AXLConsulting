import Link from 'next/link';
import { caseStudies } from '@/data/case-studies';

export default function AdminCaseStudyEdit({ params }: { params: { slug: string } }) {
  const item = caseStudies.find((c) => c.slug === params.slug);
  if (!item) return <div className="p-8">Case study not found</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Edit: {item.title}</h1>
      <form className="space-y-4 mt-4">
        <label className="block">
          <div className="text-sm">Title</div>
          <input defaultValue={item.title} className="mt-1 w-full border px-3 py-2 rounded" />
        </label>
        <label className="block">
          <div className="text-sm">Summary</div>
          <textarea defaultValue={item.summary} className="mt-1 w-full border px-3 py-2 rounded" />
        </label>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-primary-600 text-white rounded">Save</button>
          <Link href="/admin/case-studies" className="px-4 py-2 border rounded">Cancel</Link>
        </div>
      </form>
    </div>
  );
}
