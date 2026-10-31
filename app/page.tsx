import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/data/seo";
import { HeroBackgroundVideo } from "@/components/HeroBackgroundVideo";
import { HomeContactForm } from "@/components/HomeContactForm";
import { company } from "@/data/site";
import { home } from "@/data/primapox";
import styles from "./home.module.css";

export const metadata = pageMetadata("/", "Primapox", home.servicesText);

// Only the content of the legacy home page (index.php), in its order, styled after albruga.com.br.
export default function HomePage() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="nossos-servicos">
        <HeroBackgroundVideo src="/media/hero-albruga.webm" poster="/media/primapox-hero-poster.webp" className={styles.video} buttonClassName={styles.videoToggle} />
        <div className={styles.heroText}>
          <h1 id="nossos-servicos">{home.servicesTitle}</h1>
          <p className={styles.heroLead}>{home.servicesText}</p>
          <p className={styles.heroLabel}>{home.advantagesTitle}</p>
          <ul className={styles.heroList}>{home.advantages.map((item) => <li key={item}>{item}</li>)}</ul>
        </div>
      </section>

      <section className={styles.feature} aria-labelledby="a-primapox">
        <div className={styles.featurePhoto}>
          <Image src="/gallery/12.webp" alt="Primapox" fill sizes="(max-width: 900px) 100vw, 48vw" />
          <h2 id="a-primapox">{home.aboutTitle}</h2>
        </div>
        <div className={styles.featureText}>
          <p>{home.aboutText}</p>
        </div>
      </section>

      <section className={styles.contact} aria-labelledby="fale-conosco">
        <div className={styles.shell}>
          <h2 id="fale-conosco">{home.contactTitle}</h2>
          <div className={styles.formWrap}><HomeContactForm /></div>
        </div>
      </section>

      <section className={styles.location} aria-labelledby="localizacao">
        <div className={`${styles.shell} ${styles.locationGrid}`}>
          <iframe className={styles.map} src={company.mapsEmbedUrl} title={home.locationTitle} loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
          <div>
            <h2 id="localizacao">{home.locationTitle}</h2>
            <p>{home.locationText}</p>
            <Link className={styles.outlineDark} href="/contato">{home.more}</Link>
          </div>
        </div>
      </section>
    </>
  );
}
