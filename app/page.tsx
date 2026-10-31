import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/data/seo";
import { HeroBackgroundVideo } from "@/components/HeroBackgroundVideo";
import { LegacyContactForm } from "@/components/LegacyContactForm";
import { about, contact, home, services } from "@/data/primapox";
import styles from "./home.module.css";

export const metadata = pageMetadata("/", "Primapox | Pintura eletrostática a pó no Rio de Janeiro", "Executamos pintura eletrostática com tinta em pó, ideais para: esquadrias, batentes, caixilhos, forros, divisórias, fachadas, telhas metálicas, coberturas, estruturas espaciais, etc.");

// Section order follows albruga.com.br (reverse engineered); every visible text comes verbatim from data/primapox.ts.
const [paintingFirst] = services.painting.split(" A tinta em pó tem");
const finishes = ["/gallery/22.webp", "/gallery/5.webp", "/gallery/9.webp", "/gallery/10.webp", "/gallery/16.webp", "/gallery/13.webp", "/gallery/8.webp", "/gallery/18.webp", "/gallery/43.webp"];

function Icon({ name }: { name: "prep" | "paint" | "cure" | "pin" | "phone" | "mail" }) {
  const paths = {
    prep: <path d="M4 20h16M6 20V9l6-5 6 5v11M10 20v-6h4v6" />,
    paint: <path d="M3 21l6-6M14.5 4.5l5 5-8 8-5-5 8-8zM12 7l5 5" />,
    cure: <path d="M12 3c2 3 5 5 5 9a5 5 0 0 1-10 0c0-2 1-3.5 2-4.5 0 2 1 3 2 3 0-3-1-5 1-7.5z" />,
    pin: <path d="M12 21s-7-6.2-7-11.5A7 7 0 0 1 19 9.5C19 14.8 12 21 12 21zM12 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />,
    phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />,
    mail: <path d="M3 6h18v12H3zM3 7l9 6 9-6" />,
  };
  return <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

export default function HomePage() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="titulo-principal">
        <HeroBackgroundVideo src="/media/hero-albruga.webm" poster="/media/primapox-hero-poster.webp" className={styles.video} buttonClassName={styles.videoToggle} />
        <div className={styles.heroText}>
          <h1 id="titulo-principal">{services.closing}</h1>
          <Link className={styles.outline} href="/servicos">{home.more}</Link>
        </div>
      </section>

      <section className={styles.feature} aria-labelledby="a-primapox">
        <div className={styles.featurePhoto}>
          <Image src="/gallery/32.webp" alt="Linha de pintura da Primapox" fill sizes="(max-width: 900px) 100vw, 48vw" />
          <h2 id="a-primapox"><span>{home.servicesTitle.split(" ")[0]}</span>{home.servicesTitle.split(" ").slice(1).join(" ")}</h2>
        </div>
        <div className={styles.featureText}>
          <p className={styles.featureLead}>{services.sloganTitle}</p>
          <p>{home.servicesText}</p>
          <p>{home.aboutText}</p>
          <div className={styles.featureActions}>
            <Link className={styles.outline} href="/contato">{home.contactTitle}</Link>
            <Link className={styles.outline} href="/empresa">{home.more}</Link>
          </div>
        </div>
      </section>

      <section className={styles.welcome} aria-labelledby="capacidade">
        <div className={styles.shell}>
          <p className={styles.bigNumber} id="capacidade">6,5m</p>
          <p className={styles.bigLabel}>{about.paragraphs[3]}</p>
          <ul className={styles.swatches} aria-label={home.advantages[2]}>
            {finishes.map((src) => <li key={src}><Image src={src} alt="" fill sizes="90px" /></li>)}
          </ul>
          <h2 className={styles.welcomeTitle}>{home.aboutTitle}</h2>
          <p className={styles.welcomeText}>{about.paragraphs[1]}</p>
          <div className={styles.triad}>
            <article><Icon name="prep" /><h3>{services.pretreatmentTitle}</h3><p>{services.pretreatment[1]}</p></article>
            <article><Icon name="paint" /><h3>{services.paintingTitle}</h3><p>{paintingFirst}</p></article>
            <article><Icon name="cure" /><h3>{services.cureTitle}</h3><p>{services.after[0]}</p></article>
          </div>
        </div>
      </section>

      <section className={styles.band} aria-hidden="true">
        <Image src="/gallery/31.webp" alt="" fill sizes="100vw" />
      </section>

      <section className={styles.services} aria-labelledby="servicos">
        <div className={styles.shell}>
          <h2 id="servicos">{services.typesTitle}</h2>
          <div className={styles.cards}>
            {services.types.slice(0, 2).map(([name, text], index) => (
              <article key={name}>
                <div className={styles.cardPhoto}><Image src={index ? "/gallery/25.webp" : "/gallery/40.webp"} alt={name} fill sizes="(max-width: 800px) 90vw, 34vw" /></div>
                <div className={styles.cardBody}>
                  <h3>{name}</h3>
                  <p>{text}</p>
                  <Link className={styles.outlineDark} href="/servicos">{home.more}</Link>
                </div>
              </article>
            ))}
          </div>
          <p className={styles.note}>{services.typesNote}</p>
        </div>
      </section>

      <section className={styles.advantages} aria-labelledby="vantagens">
        <div className={styles.shell}>
          <h2 id="vantagens">{home.advantagesTitle}</h2>
          <ul>{home.advantages.map((advantage) => <li key={advantage}>{advantage}</li>)}</ul>
        </div>
      </section>

      <section className={styles.contact} aria-labelledby="fale-conosco">
        <div className={styles.shell}>
          <h2 id="fale-conosco">{home.contactTitle}</h2>
          <div className={styles.contactCols}>
            <div><Icon name="pin" /><h3>{home.locationTitle}</h3>{contact.addressLines.map((line) => <p key={line}>{line}</p>)}</div>
            <div><Icon name="phone" /><h3>{contact.fields.phone.replace(":", "")}</h3>{contact.phoneLines.map((line) => <p key={line}>{line}</p>)}</div>
            <div><Icon name="mail" /><h3>{contact.fields.email.replace(":", "")}</h3><p><a href={`mailto:${contact.email}`}>{contact.email}</a></p></div>
          </div>
          <p className={styles.contactIntro}>{contact.intro}</p>
          <div className={styles.formWrap}><LegacyContactForm /></div>
        </div>
      </section>
    </>
  );
}
