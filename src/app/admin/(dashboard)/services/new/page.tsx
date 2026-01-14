import Link from 'next/link';

export default function AdminServiceNew() {
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Create New Service</h1>
      <form className="space-y-4">
        <label className="block">
          <div className="text-sm font-medium">Title</div>
          <input placeholder="Service title" className="mt-1 w-full border px-3 py-2 rounded" />
        </label>
        <label className="block">
          <div className="text-sm font-medium">Description</div>
          <textarea placeholder="Short description" className="mt-1 w-full border px-3 py-2 rounded" />
        </label>
        <div className="flex gap-2">
          <button type="button" className="px-4 py-2 bg-primary-600 text-white rounded">Create</button>
          <Link href="/admin/services" className="px-4 py-2 border rounded">Cancel</Link>
        </div>
      </form>
    </div>
  );
}
