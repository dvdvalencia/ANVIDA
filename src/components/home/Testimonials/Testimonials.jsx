const testimonials = [
  ["Familia Morales", "Familias en Coveñas", "Nuestra experiencia fue maravillosa. La atención estuvo pendiente de nosotros en todo momento."],
  ["Carlos & Sofía", "Luna de Miel en Cartagena", "Nos hicieron sentir muy acompañados. Todo estaba perfectamente organizado."],
  ["Laura R.", "Eje Cafetero", "La expedición superó nuestras expectativas. Gran atención y excelente itinerario."],
];

export default function Testimonials() {
  return (
    <section className="bg-[#f5ede3] py-14">
      <div className="container-anvida">
        <span className="text-[10px] font-bold uppercase tracking-widest text-orange-600">
          Historias reales
        </span>
        <h2 className="mt-2 font-display text-3xl font-bold">Lo que dicen nuestros viajeros</h2>

        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {testimonials.map(([name, place, text]) => (
            <article key={name} className="rounded-xl bg-white p-5 shadow-sm">
              <div className="text-orange-500">★★★★★</div>
              <p className="mt-3 text-sm italic leading-6 text-slate-600">“{text}”</p>
              <div className="mt-5 flex items-center gap-3">
                <div className="size-9 rounded-full bg-cyan-100" />
                <div>
                  <strong className="block text-xs font-bold">{name}</strong>
                  <span className="text-[10px] text-slate-500">{place}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}