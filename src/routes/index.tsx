import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/logo-la-deriva.jpg.asset.json";
import interno from "@/assets/interno-tavolo.jpg.asset.json";
import salaVolta from "@/assets/sala-volta.jpg.asset.json";
import polpo from "@/assets/polpo.jpg.asset.json";
import gamberi from "@/assets/gamberi.jpg.asset.json";
import sashimi from "@/assets/sashimi.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { property: "og:image", content: interno.url },
      { property: "twitter:image", content: interno.url },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Restaurant",
          name: "La Deriva",
          servesCuisine: ["Pesce", "Mediterranea"],
          telephone: "+390575802841",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Piaggia San Bartolomeo 2",
            addressLocality: "Arezzo",
            addressCountry: "IT",
          },
          openingHours: "Th-Mo 12:00-14:30,19:00-22:30",
        }),
      },
    ],
  }),
});

const PHONE_DISPLAY = "0575 802841";
const PHONE_TEL = "tel:+390575802841";
const ADDRESS = "Piaggia San Bartolomeo 2, Arezzo";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Piaggia+San+Bartolomeo+2+Arezzo";

function Nav() {
  return (
    <header className="fixed top-0 z-50 w-full backdrop-blur-md bg-[color:var(--ink)]/70 border-b border-white/5">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo.url} alt="La Deriva" className="h-10 w-10 rounded-full object-cover" />
          <span className="hidden sm:inline font-display text-lg tracking-[0.35em] text-primary">
            LA DERIVA
          </span>
        </a>
        <nav className="hidden md:flex items-center gap-10 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <a href="#atmosfera" className="hover:text-primary transition">Atmosfera</a>
          <a href="#cucina" className="hover:text-primary transition">Cucina</a>
          <a href="#orari" className="hover:text-primary transition">Orari</a>
          <a href="#dove" className="hover:text-primary transition">Dove</a>
        </nav>
        <a
          href={PHONE_TEL}
          className="text-xs uppercase tracking-[0.22em] border border-[color:var(--terracotta)] text-primary px-4 py-2.5 hover:bg-[color:var(--terracotta)] transition-colors"
        >
          Prenota
        </a>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full overflow-hidden">
      <img
        src={interno.url}
        alt="Sala di La Deriva, tavolo apparecchiato in pietra e luce calda"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[color:var(--ink)]/85 via-[color:var(--ink)]/55 to-[color:var(--ink)]/95" />
      <div className="relative z-10 mx-auto flex min-h-screen max-w-6xl flex-col items-start justify-end px-6 pb-24 pt-40 md:px-10 md:pb-32">
        <img
          src={logo.url}
          alt="La Deriva logo"
          className="mb-10 h-24 w-24 md:h-28 md:w-28 rounded-full shadow-2xl shadow-black/50"
        />
        <span className="rule-line text-[0.7rem] uppercase tracking-[0.45em] text-[color:var(--stone-warm)]">
          Nuova apertura · 16 luglio · Arezzo
        </span>
        <h1 className="mt-6 max-w-4xl font-display text-5xl leading-[1.05] md:text-7xl lg:text-[5.5rem]">
          Il sapore autentico del mare{" "}
          <em className="text-[color:var(--stone-warm)]">ormeggia</em> ad Arezzo.
        </h1>
        <p className="mt-8 max-w-xl text-base md:text-lg text-muted-foreground leading-relaxed">
          Cucina di mare essenziale e stagionale. Cantina di vini naturali.
          Una sala a volta in un vicolo di pietra del centro storico.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-5">
          <a
            href={PHONE_TEL}
            className="group inline-flex items-center gap-3 bg-[color:var(--terracotta)] px-7 py-4 text-sm uppercase tracking-[0.25em] text-primary hover:bg-[color:var(--terracotta)]/85 transition"
          >
            Prenota un tavolo
            <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href={PHONE_TEL}
            className="font-display text-2xl md:text-3xl italic text-primary hover:text-[color:var(--stone-warm)] transition"
          >
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
    </section>
  );
}

function Atmosfera() {
  return (
    <section id="atmosfera" className="relative py-28 md:py-40 px-6 md:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 md:grid-cols-12 md:gap-10 items-center">
          <div className="md:col-span-7 md:pr-8">
            <img
              src={salaVolta.url}
              alt="Sala a volta in mattoni di La Deriva"
              className="w-full aspect-[4/5] object-cover shadow-2xl shadow-black/40"
            />
          </div>
          <div className="md:col-span-5 md:pt-24">
            <span className="rule-line text-[0.7rem] uppercase tracking-[0.4em] text-[color:var(--terracotta)]">
              L'atmosfera
            </span>
            <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[1.1]">
              Perdersi per ritrovarsi{" "}
              <em className="text-[color:var(--stone-warm)]">tra i sapori più puri</em> del mare.
            </h2>
            <p className="mt-8 text-muted-foreground leading-relaxed">
              Un vicolo di pietra, una sala a volta in mattoni, la luce bassa
              della sera. La Deriva è una sosta scelta, non un passaggio.
            </p>
            <div className="mt-14 md:-ml-24 md:w-[70%]">
              <img
                src={sashimi.url}
                alt="Dettaglio piatto crudo di pesce"
                className="w-full aspect-square object-cover shadow-xl shadow-black/40"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const dishes = [
  { name: "Polpo alla brace", note: "crema di mais, pomodoro confit, basilico", img: polpo.url },
  { name: "Gambero rosso crudo", note: "materia prima del giorno", img: gamberi.url },
  { name: "Trota marinata", note: "cipollotto, olio al prezzemolo", img: sashimi.url },
];

function Cucina() {
  return (
    <section id="cucina" className="py-28 md:py-40 px-6 md:px-10 bg-[color:var(--card)]">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl mb-24">
          <span className="rule-line text-[0.7rem] uppercase tracking-[0.4em] text-[color:var(--terracotta)]">
            La cucina
          </span>
          <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[1.1]">
            Materia prima, brace, silenzio.
          </h2>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            La carta cambia con il pescato. Poche voci, scelte con cura.
          </p>
        </div>

        <div className="space-y-24 md:space-y-32">
          {dishes.map((d, i) => (
            <article
              key={d.name}
              className={`grid gap-8 md:gap-16 md:grid-cols-2 items-center ${
                i % 2 === 1 ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              <div>
                <img
                  src={d.img}
                  alt={d.name}
                  className="w-full aspect-[4/5] object-cover shadow-2xl shadow-black/40"
                />
              </div>
              <div className={i % 2 === 1 ? "md:pr-8" : "md:pl-8"}>
                <span className="font-display italic text-[color:var(--stone-warm)] text-lg">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-4xl md:text-5xl leading-tight">
                  {d.name}
                </h3>
                <p className="mt-4 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  {d.note}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Orari() {
  return (
    <section id="orari" className="py-28 md:py-40 px-6 md:px-10">
      <div className="mx-auto max-w-5xl text-center">
        <span className="text-[0.7rem] uppercase tracking-[0.4em] text-[color:var(--terracotta)]">
          Orari & prenotazioni
        </span>
        <h2 className="mt-6 font-display text-4xl md:text-6xl leading-[1.05]">
          Da giovedì a lunedì.
        </h2>
        <div className="mt-14 grid gap-10 md:grid-cols-2 max-w-3xl mx-auto">
          <div className="border-t border-white/10 pt-8">
            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">Pranzo</p>
            <p className="mt-3 font-display text-3xl md:text-4xl">12:00 — 14:30</p>
          </div>
          <div className="border-t border-white/10 pt-8">
            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-muted-foreground">Cena</p>
            <p className="mt-3 font-display text-3xl md:text-4xl">19:00 — 22:30</p>
          </div>
        </div>
        <p className="mt-10 text-sm uppercase tracking-[0.25em] text-muted-foreground">
          Chiuso martedì e mercoledì
        </p>
        <div className="mt-16">
          <a
            href={PHONE_TEL}
            className="inline-flex flex-col items-center gap-3 group"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-[color:var(--terracotta)]">
              Chiama per prenotare
            </span>
            <span className="font-display text-5xl md:text-7xl italic group-hover:text-[color:var(--stone-warm)] transition">
              {PHONE_DISPLAY}
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Dove() {
  return (
    <section id="dove" className="py-28 md:py-40 px-6 md:px-10 bg-[color:var(--card)]">
      <div className="mx-auto max-w-6xl grid gap-16 md:grid-cols-2 items-center">
        <div>
          <span className="rule-line text-[0.7rem] uppercase tracking-[0.4em] text-[color:var(--terracotta)]">
            Dove siamo
          </span>
          <h2 className="mt-6 font-display text-4xl md:text-5xl leading-[1.1]">
            In un vicolo di pietra <em className="text-[color:var(--stone-warm)]">del centro</em>.
          </h2>
          <address className="mt-8 not-italic font-display text-2xl md:text-3xl leading-snug">
            Piaggia San Bartolomeo 2<br />
            <span className="text-[color:var(--stone-warm)]">52100 Arezzo</span>
          </address>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noreferrer"
              className="text-xs uppercase tracking-[0.25em] border border-white/20 px-5 py-3 hover:border-[color:var(--terracotta)] transition"
            >
              Apri in Google Maps →
            </a>
            <a
              href={PHONE_TEL}
              className="text-xs uppercase tracking-[0.25em] border border-[color:var(--terracotta)] bg-[color:var(--terracotta)] px-5 py-3 hover:bg-transparent transition"
            >
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
        <div className="aspect-[4/5] w-full overflow-hidden shadow-2xl shadow-black/40">
          <iframe
            title="Mappa La Deriva - Piaggia San Bartolomeo 2, Arezzo"
            src="https://www.google.com/maps?q=Piaggia+San+Bartolomeo+2,+Arezzo&output=embed"
            className="h-full w-full grayscale contrast-125 opacity-90"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 md:px-10 py-14">
      <div className="mx-auto max-w-6xl grid gap-10 md:grid-cols-3 items-start">
        <div className="flex items-center gap-4">
          <img src={logo.url} alt="La Deriva" className="h-14 w-14 rounded-full object-cover" />
          <div>
            <p className="font-display tracking-[0.3em] text-lg">LA DERIVA</p>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mt-1">
              Ristorante di mare · Arezzo
            </p>
          </div>
        </div>
        <div className="text-sm text-muted-foreground leading-relaxed">
          {ADDRESS}
          <br />
          Gio — Lun · 12:00-14:30 / 19:00-22:30
        </div>
        <div className="md:text-right">
          <a
            href={PHONE_TEL}
            className="font-display italic text-2xl hover:text-[color:var(--terracotta)] transition"
          >
            {PHONE_DISPLAY}
          </a>
        </div>
      </div>
      <p className="mx-auto max-w-6xl mt-10 text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground/60">
        © {new Date().getFullYear()} La Deriva
      </p>
    </footer>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Nav />
      <Hero />
      <Atmosfera />
      <Cucina />
      <Orari />
      <Dove />
      <Footer />
    </main>
  );
}
