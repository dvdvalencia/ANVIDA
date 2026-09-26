export default function ContactCTA() {
  return (
    <section className="bg-[#fff7ed] py-14">
      <div className="container-anvida overflow-hidden rounded-xl bg-cyan-700 px-6 py-10 text-white shadow-lg md:px-10">
        <span className="rounded-full bg-white/10 px-3 py-1 text-[9px] font-bold">
          ATENCIÓN INMEDIATA
        </span>
        <div className="mt-4 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="font-display text-3xl font-extrabold">
              ¿No sabes por dónde empezar? Habla con un especialista ANVIDA
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-white/80">
              Cuéntanos tus fechas soñadas y crearemos un presupuesto personalizado
              en menos de 2 horas, sin ningún compromiso.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-2">
            <a href="#" className="rounded-full bg-orange-500 px-5 py-3 text-xs font-bold">
              Chatear por WhatsApp
            </a>
            <a href="tel:+3146145106" className="rounded-full bg-white/10 px-5 py-3 text-xs font-bold">
              Llamada Gratuita
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
