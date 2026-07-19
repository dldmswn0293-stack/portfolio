export function TechBadge({ label }: { label: string }) {
  return (
    <span className="rounded-pill bg-primary-tint px-4 py-2 text-[13px] font-medium text-primary">
      {label}
    </span>
  );
}
