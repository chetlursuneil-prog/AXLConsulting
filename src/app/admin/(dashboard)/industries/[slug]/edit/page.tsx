import Link from 'next/link';
import { industries } from '@/data/industries';

export default function AdminIndustryEdit({ params }: { params: { slug: string } }) {
  const item = industries.find((i) => i.slug === params.slug);
  if (!item) return <div className="p-8">Industry not found</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Edit: {item.name}</h1>
      <form className="space-y-4 mt-4">
        <label className="block">
          <div className="text-sm">Name</div>
          <input defaultValue={item.name} className="mt-1 w-full border px-3 py-2 rounded" />
        </label>
        <label className="block">
          <div className="text-sm">Description</div>
          <textarea defaultValue={item.description} className="mt-1 w-full border px-3 py-2 rounded" />
        </label>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-primary-600 text-white rounded">Save</button>
          <Link href="/admin/industries" className="px-4 py-2 border rounded">Cancel</Link>
        </div>
      </form>
    </div>
  );
}
