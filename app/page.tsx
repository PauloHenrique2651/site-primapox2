import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/data/seo";
import { HeroBackgroundVideo } from "@/components/HeroBackgroundVideo";
import { LegacyContactForm } from "@/components/LegacyContactForm";
import { PhotoGallery } from "@/components/PhotoGallery";
import { about, contact, galleryTitle, home, services } from "@/data/primapox";
import styles from "./home.module.css";

export const metadata = pageMetadata("/", "Primapox | Pintura eletrostática a pó no Rio de Janeiro", "Executamos pintura eletrostática com tinta em pó, ideais para: esquadrias, batentes, caixilhos, forros, divisórias, fachadas, telhas metálicas, coberturas, estruturas espaciais, etc.");

// Every visible text comes verbatim from data/primapox.ts (legacy primapox.com).
const [paintingFirst, paintingSecond] = services.painting.split(" A tinta em pó tem");

const capacity = [
  { value: "6,5m", label: "peças com até 6,5m de comprimento" },
  { value: "18 metros", label: "estufa de 18 metros de comprimento" },
  { value: "200ºC", label: "à uma temperatura de 200ºC" },
  { value: "60 mícrons", label: "recobrimento uniforme de aproximadamente 60 mícrons" },
  { value: "50 À 70", label: "camadas de 50 À 70 microns" },
];

const highlights = [
  { title: services.pretreatmentTitle, text: services.pretreatment[1], href: "/servicos" },
  { title: services.paintingTitle, text: paintingFirst, href: "/servicos" },
  { title: services.cureTitle, text: services.after[0], href: "/servicos" },
  { title: "Manutenção", text: "A pintura Poliéster deve ser limpa regularmente para manter suas propriedades decorativas.", href: "/manutencao" },
];

const line = [
  { number: "01", title: services.pretreatmentTitle, text: services.pretreatment[2] },
  { number: "02", title: services.paintingTitle, text: `A tinta em pó tem${paintingSecond}` },
  { number: "03", title: services.cureTitle, text: services.after[0] },
];

const materialPhotos = ["/gallery/17.webp", "/gallery/40.webp", "/gallery/44.webp", "/gallery/45.webp", "/gallery/5.webp"];

export default function HomePage() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="titulo-principal">
        <div className={styles.slides}>
          <HeroBackgroundVideo src="/media/hero-albruga.webm" poster="/media/primapox-hero-poster.webp" className={styles.video} buttonClassName={styles.videoToggle} />
        </div>
        <div className={`shell ${styles.heroContent}`}>
          <h1 id="titulo-principal">{services.closing}</h1>
          <p className={styles.tagline}>{services.sloganTitle}</p>
          <p className={styles.lead}>{home.servicesText}</p>
          <div className={styles.actions}>
            <Link className={styles.primary} href="/contato">{home.contactTitle}</Link>
            <Link className={styles.secondary} href="/servicos">{home.more}</Link>
          </div>
        </div>
      </section>

      <section className={styles.capacity} aria-label={home.servicesTitle}>
        <dl className="shell">
          {capacity.map((item) => <div key={item.value}><dt>{item.value}</dt><dd>{item.label}</dd></div>)}
        </dl>
      </section>

      <section className={styles.services} aria-labelledby="servicos">
        <div className={`shell ${styles.split}`}>
          <div className={styles.intro}>
            <h2 id="servicos">{home.servicesTitle}</h2>
            <p>{home.servicesText}</p>
            <Link className={styles.textLink} href="/servicos">{home.more}</Link>
          </div>
          <ul className={styles.serviceList}>
            {highlights.map((item) => (
              <li key={item.title}>
                <h3><Link href={item.href}>{item.title}</Link></h3>
                <p>{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.slogan} aria-labelledby="vantagens">
        <div className={`shell ${styles.sloganGrid}`}>
          <div>
            <p className={styles.sloganLabel}>{home.advantagesTitle}</p>
            <h2 id="vantagens">{services.sloganTitle}</h2>
          </div>
          <ul>{home.advantages.map((advantage) => <li key={advantage}>{advantage}</li>)}</ul>
        </div>
      </section>

      <section className={styles.structure} id="estrutura" aria-labelledby="titulo-estrutura">
        <div className={`shell ${styles.structureTop}`}>
          <div className={styles.structurePhoto}>
            <Image src="/gallery/32.webp" alt="Vista da linha produtiva da Primapox" fill sizes="(max-width: 800px) 90vw, 45vw" />
          </div>
          <div>
            <h2 id="titulo-estrutura">{home.aboutTitle}</h2>
            <p>{home.aboutText}</p>
            <p>{about.paragraphs[2]}</p>
            <p><strong>{about.paragraphs[3]}</strong></p>
          </div>
        </div>
        <div className="shell">
          <ol className={`${styles.rail} ${styles.railThree}`}>
            {line.map((step) => (
              <li key={step.number}>
                <span className={styles.hook} aria-hidden="true" />
                <div className={styles.plate}>
                  <span className={styles.stepNumber}>{step.number}</span>
                  <h4>{step.title}</h4>
                  <p>{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
          <Link className={`${styles.textLink} ${styles.textLinkLight}`} href="/servicos">{home.more}</Link>
        </div>
      </section>

      <section className={styles.technology} aria-labelledby="tecnologia">
        <div className="shell">
          <h2 id="tecnologia">{services.typesTitle}</h2>
          <div className={styles.resins}>
            <article>
              <h3>{services.types[0][0]}</h3>
              <p>{services.types[0][1]}</p>
            </article>
            <article>
              <h3>{services.types[1][0]}</h3>
              <p>{services.types[1][1]}</p>
            </article>
            <aside>
              <h3>{services.tableTitle}</h3>
              <p className={styles.asideText}>{services.typesNote}</p>
              <Link className={styles.textLink} href="/servicos#ficha-tecnica">{home.more}</Link>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.benefits} aria-labelledby="diferenciais">
        <div className="shell">
          <h2 id="diferenciais">{services.benefitsTitle}</h2>
          <ul className={styles.benefitList}>{services.benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
        </div>
      </section>

      <section className={styles.applications} aria-labelledby="aplicacoes">
        <div className="shell">
          <div className={styles.rowHead}>
            <h2 id="aplicacoes">{services.materialTitle}</h2>
            <Link className={styles.textLink} href="/servicos">{home.more}</Link>
          </div>
          <p className={styles.sectionLead}>{services.materialIntro}</p>
          <div className={`${styles.appGrid} ${styles.appGridFive}`}>
            {services.materials.map(([title, text], index) => (
              <article key={title}>
                <div className={styles.appPhoto}><Image src={materialPhotos[index]} alt={title} fill sizes="(max-width: 800px) 90vw, 20vw" /></div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.gallery} aria-labelledby="acervo">
        <div className="shell">
          <div className={styles.rowHead}>
            <h2 id="acervo">{galleryTitle}</h2>
            <Link className={styles.textLink} href="/galeria">{home.more}</Link>
          </div>
          <PhotoGallery limit={8} />
        </div>
      </section>

      <section className={styles.quote} aria-labelledby="titulo-orcamento">
        <div className={`shell ${styles.quoteGrid}`}>
          <div>
            <h2 id="titulo-orcamento">{home.contactTitle}</h2>
            <p>{contact.intro}</p>
            <p className={styles.mailLabel}>{home.locationTitle}</p>
            <p>{home.locationText}</p>
            <a className={styles.mail} href={`mailto:${contact.email}`}>{contact.email}</a>
          </div>
          <div className={styles.formPanel}><LegacyContactForm /></div>
        </div>
      </section>
    </>
  );
}
