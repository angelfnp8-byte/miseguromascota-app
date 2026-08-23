import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { requireAdmin } from "@/lib/require-admin";
import { createClient } from "@/lib/supabase/server";
import { InsurerEditForm } from "./InsurerEditForm";

export const metadata: Metadata = {
  title: "Editar aseguradora",
  robots: { index: false, follow: false },
};

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await requireAdmin(`/admin/aseguradoras/${id}/editar`);

  const supabase = await createClient();
  const { data: insurer } = await supabase.from("insurers").select("*").eq("id", id).maybeSingle();
  if (!insurer) notFound();

  return (
    <div className="mx-auto max-w-[720px] px-5 py-12">
      <h1>Editar {insurer.name}</h1>
      <InsurerEditForm insurer={insurer} />
    </div>
  );
}
