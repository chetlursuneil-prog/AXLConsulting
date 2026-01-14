import Link from 'next/link';
import { founders } from '@/data/team';

export default function AdminTeamMemberEdit({ params }: { params: { id: string } }) {
  const member = founders.find((f) => f.id === params.id || f.slug === params.id);
  if (!member) return <div className="p-8">Team member not found</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">Edit: {member.name}</h1>
      <form className="space-y-4 mt-4">
        <label className="block">
          <div className="text-sm">Name</div>
          <input defaultValue={member.name} className="mt-1 w-full border px-3 py-2 rounded" />
        </label>
        <label className="block">
          <div className="text-sm">Role</div>
          <input defaultValue={member.role} className="mt-1 w-full border px-3 py-2 rounded" />
        </label>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-primary-600 text-white rounded">Save</button>
          <Link href="/admin/team" className="px-4 py-2 border rounded">Cancel</Link>
        </div>
      </form>
    </div>
  );
}
