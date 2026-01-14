import Link from 'next/link';
import { services } from '@/data/services';

export default function AdminServiceView({ params }: { params: { slug: string } }) {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) return <div className="p-8">Service not found</div>;

  return (
    <div className="space-y-6 p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">{service.title}</h1>
          <p className="text-sm text-charcoal-600">{service.description}</p>
        </div>
        <div className="flex gap-2">
          <Link href={`/admin/services/${service.slug}/edit`} className="px-3 py-2 bg-primary-600 text-white rounded">Edit</Link>
          <button className="px-3 py-2 bg-red-600 text-white rounded">Delete</button>
        </div>
      </div>

      <section className="bg-white p-4 rounded shadow">
        <h2 className="font-semibold mb-2">Features</h2>
        <ul className="list-disc pl-5">
          {service.features.map((f, i) => (
            <li key={i} className="text-sm text-charcoal-700">{f}</li>
          ))}
        </ul>
      </section>
    </div>
  );
}
