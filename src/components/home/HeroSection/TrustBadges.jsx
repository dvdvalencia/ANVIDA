const BADGES = [
  "Cientos de viajeros felices",
  "Asesoría personalizada",
  "Pagos flexibles",
  "Seguridad absoluta",
];

export default function TrustBadges() {
  return (
    <ul className="mx-auto mt-5 flex max-w-3xl flex-wrap justify-center gap-2 text-[10px] font-semibold text-white/90">
      {BADGES.map((badge) => (
        <li key={badge} className="rounded-full bg-white/10 px-3 py-2">
          {badge}
        </li>
      ))}
    </ul>
  );
}
