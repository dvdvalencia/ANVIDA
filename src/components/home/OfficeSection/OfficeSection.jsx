export default function OfficeSection() {
  return (
    <section className="bg-[#f5ede3] py-14">
      <div className="container-anvida grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-700">
            Los mejores precios y la mejor atención
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold">
            Visítanos y tómate un café mientras planificamos tu ruta
          </h2>
          <p className="mt-4 text-sm leading-6 text-slate-600">
            Un equipo de expertos te espera para diseñar contigo la próxima
            aventura. Aquí podrás recibir asesoría personalizada.
          </p>
          <div className="mt-5 space-y-2 text-xs text-slate-600">
            <p>◉ Unidad Villa Linda ANVIDA, Bello, Antioquia</p>
            <p>◷ Lunes a Sábado: 09:00 - 20:00</p>
          </div>
        </div>
        <div className="min-h-72 rounded-xl bg-[url('/images/map-placeholder.jpg')] bg-cover bg-center shadow-sm" />
      </div>
    </section>
  );
}
