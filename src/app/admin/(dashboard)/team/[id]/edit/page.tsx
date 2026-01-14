"use client";

import Link from 'next/link';
import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { founders } from '@/data/team';

export default function AdminTeamMemberEdit({ params, searchParams }: { params: { id: string }, searchParams?: { [key: string]: string | string[] | undefined } }) {
  const member = founders.find((f) => f.id === params.id || f.slug === params.id);
  if (!member) return <div className="p-8">Team member not found</div>;

  const [preview, setPreview] = useState<string | null>(member.image || null);
  const [uploading, setUploading] = useState(false);

  async function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    const reader = new FileReader();
    reader.onload = async () => {
      const dataUrl = reader.result as string;
      // send to API
      const res = await fetch('/api/admin/team/photo', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: member.id, filename: file.name, data: dataUrl }),
      });
      const json = await res.json();
      if (json?.url) {
        setPreview(json.url);
      } else {
        alert('Upload failed');
      }
      setUploading(false);
    };
    reader.readAsDataURL(file);
  }

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!preview) {
      alert('No image to save');
      return;
    }
    const res = await fetch('/api/admin/team/update', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id: member.id, imageUrl: preview }),
    });
    const json = await res.json();
    if (json?.ok) {
      // Navigate back to origin if provided, otherwise to team list
      try {
        const sp = useSearchParams();
        const router = useRouter();
        const returnTo = sp?.get ? sp.get('returnTo') : (searchParams?.returnTo ? String(searchParams.returnTo) : null);
        if (returnTo) {
          router.push(returnTo);
        } else {
          router.push('/admin/team');
        }
      } catch (err) {
        window.location.href = '/admin/team';
      }
    } else {
      alert('Save failed: ' + (json?.error || 'unknown'));
    }
  }

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

        <div className="block">
          <div className="text-sm">Photo</div>
          <div className="mt-2 flex items-center gap-4">
            <div className="w-28 h-28 bg-gray-100 rounded overflow-hidden flex items-center justify-center">
              {preview ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={preview} alt="preview" className="object-cover w-full h-full" />
              ) : (
                <div className="text-xs text-charcoal-500">No image</div>
              )}
            </div>
            <div>
              <input type="file" accept="image/*" onChange={handleFile} />
              {uploading && <div className="text-sm text-charcoal-500 mt-2">Uploading…</div>}
            </div>
          </div>
        </div>

        <div className="flex gap-2">
          <button onClick={handleSave} className="px-4 py-2 bg-primary-600 text-white rounded">Save</button>
          <Link href="/admin/team" className="px-4 py-2 border rounded">Cancel</Link>
        </div>
      </form>
    </div>
  );
}
