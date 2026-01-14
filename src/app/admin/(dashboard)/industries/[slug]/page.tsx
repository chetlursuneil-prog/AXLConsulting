import Link from 'next/link';
import { industries } from '@/data/industries';

export default function AdminIndustryView({ params }: { params: { slug: string } }) {
  const item = industries.find((i) => i.slug === params.slug);
  if (!item) return <div className="p-8">Industry not found</div>;

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">{item.name}</h1>
          <p className="text-sm text-charcoal-600">{item.description}</p>
        </div>
        <div className="flex gap-2">
          <Link href={`/admin/industries/${item.slug}/edit`} className="px-3 py-2 bg-primary-600 text-white rounded">Edit</Link>
          <button className="px-3 py-2 bg-red-600 text-white rounded">Delete</button>
        </div>
      </div>
    </div>
  );
}
