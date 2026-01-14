import Link from 'next/link';
import { founders } from '@/data/team';

export default function AdminTeamMemberView({ params }: { params: { id: string } }) {
  const member = founders.find((f) => f.id === params.id || f.slug === params.id);
  if (!member) return <div className="p-8">Team member not found</div>;

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">{member.name}</h1>
          <p className="text-sm text-charcoal-600">{member.role}</p>
        </div>
        <div className="flex gap-2">
          <Link href={`/admin/team/${member.id}/edit`} className="px-3 py-2 bg-primary-600 text-white rounded">Edit</Link>
          <button className="px-3 py-2 bg-red-600 text-white rounded">Delete</button>
        </div>
      </div>
      <section className="bg-white p-4 rounded shadow">
        <p className="text-sm text-charcoal-700">{member.bio}</p>
      </section>
    </div>
  );
}
