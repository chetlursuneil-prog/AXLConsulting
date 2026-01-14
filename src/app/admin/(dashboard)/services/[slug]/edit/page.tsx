import Link from 'next/link';
import { services } from '@/data/services';

export default function AdminServiceEdit({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return <div className="p-8">Service not found</div>;

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Edit: {service.title}</h1>
      <form className="space-y-4">
        <label className="block">
          <div className="text-sm font-medium">Title</div>
          <input defaultValue={service.title} className="mt-1 w-full border px-3 py-2 rounded" />
        </label>
        <label className="block">
          <div className="text-sm font-medium">Description</div>
          <textarea defaultValue={service.description} className="mt-1 w-full border px-3 py-2 rounded" />
        </label>
        <div className="flex gap-2">
          <button type="button" className="px-4 py-2 bg-primary-600 text-white rounded">Save</button>
          <Link href="/admin/services" className="px-4 py-2 border rounded">Cancel</Link>
        </div>
      </form>
    </div>
  );
}
