import Link from 'next/link';
import { founders } from '@/data/team';

export default function AdminTeamMemberView({ params, searchParams }: { params: { id: string }, searchParams?: { [key: string]: string | string[] | undefined } }) {
  const member = founders.find((f) => f.id === params.id);
  if (!member) return <div className="p-8">Team member not found</div>;

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <div className="flex items-center gap-4">
            <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-100">
              {member.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={member.image} alt={member.name} className="object-cover w-full h-full" />
              ) : null}
            </div>
            <div>
              <h1 className="text-2xl font-bold">{member.name}</h1>
              <p className="text-sm text-charcoal-600">{member.role}</p>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <Link href={`/admin/team/${member.id}/edit${searchParams?.returnTo ? `?returnTo=${encodeURIComponent(String(searchParams.returnTo))}` : ''}`} className="px-3 py-2 bg-primary-600 text-white rounded">Edit</Link>
          <button className="px-3 py-2 bg-red-600 text-white rounded">Delete</button>
        </div>
      </div>
      <section className="bg-white p-4 rounded shadow">
        <p className="text-sm text-charcoal-700">{member.bio}</p>
      </section>
    </div>
  );
}
