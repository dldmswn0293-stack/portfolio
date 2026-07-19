import Link from "next/link";

export default function ProjectNotFound() {
  return (
    <main className="flex min-h-[60vh] flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
      <h1 className="text-[28px] font-semibold text-ink">Project not found</h1>
      <Link href="/" className="text-[17px] text-primary hover:underline">
        ← Back to home
      </Link>
    </main>
  );
}
