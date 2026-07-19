import { Hero } from "@/components/hero";
import { CapabilityStrip } from "@/components/capability-strip";

export default function Home() {
  return (
    <main className="flex-1">
      <Hero />
      <CapabilityStrip />
    </main>
  );
}
