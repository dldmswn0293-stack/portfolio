export function TechBadge({ label }: { label: string }) {
  return (
    <span className="rounded-pill bg-canvas px-4 py-2 text-[14px] text-ink ring-1 ring-inset ring-hairline">
      {label}
    </span>
  );
}
