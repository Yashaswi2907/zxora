export default function TrustBar() {
  return (
    <section className="bg-zinc-950 border-y border-zinc-800 overflow-hidden">

      <div className="py-5 whitespace-nowrap animate-marquee">

        <span className="mx-12 text-cyan-400 font-semibold">
          ✓ Personalized Plans
        </span>

        <span className="mx-12 text-cyan-400 font-semibold">
          ✓ Weekly Check-ins
        </span>

        <span className="mx-12 text-cyan-400 font-semibold">
          ✓ Nutrition Guidance
        </span>

        <span className="mx-12 text-cyan-400 font-semibold">
          ✓ Direct Coach Support
        </span>

        {/* Duplicate for seamless loop */}

        <span className="mx-12 text-cyan-400 font-semibold">
          ✓ Personalized Plans
        </span>

        <span className="mx-12 text-cyan-400 font-semibold">
          ✓ Weekly Check-ins
        </span>

        <span className="mx-12 text-cyan-400 font-semibold">
          ✓ Nutrition Guidance
        </span>

        <span className="mx-12 text-cyan-400 font-semibold">
          ✓ Direct Coach Support
        </span>

      </div>

    </section>
  );
}