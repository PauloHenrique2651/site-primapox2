import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { SocialLinks } from "@/components/SocialLinks";
import { whatsappLink } from "@/data/whatsapp";
import { company, navigation } from "@/data/site";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer} id="rodape">
      <div className={styles.brandBand}>
        <div className={`shell ${styles.brandRow}`}>
          <BrandMark className={styles.brand} sizes="(max-width: 800px) 220px, 300px" />
          <p>Pintura eletrostática a pó com preparação controlada, cobertura uniforme e acabamento de alto padrão.</p>
        </div>
      </div>
      <div className={`shell ${styles.columns}`}>
        <div>
          <h2>Navegação</h2>
          <nav className={styles.links} aria-label="Navegação do rodapé">
            {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
            <Link href="/galeria">Galeria</Link>
            <Link href="/central-tecnica">Central técnica</Link>
          </nav>
        </div>
        <div>
          <h2>Contato</h2>
          <div className={styles.links}>
            <a className={styles.mail} href={`mailto:${company.email}`}>{company.email}</a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">WhatsApp {company.whatsappLabel}</a>
            {company.phones.map((phone) => <a key={phone} href={`tel:+55${phone.replace(/\D/g, "")}`}>{phone}</a>)}
          </div>
          <SocialLinks className={styles.social} />
        </div>
        <div>
          <h2>Onde estamos</h2>
          <p className={styles.address}>{company.address}</p>
          <a className={styles.route} href={company.mapsUrl} target="_blank" rel="noopener noreferrer">Traçar rota no mapa</a>
        </div>
        <iframe className={styles.map} src={company.mapsEmbedUrl} title="Localização da Primapox no Google Maps" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
      </div>
      <div className={`shell ${styles.bottom}`}>
        <span>© {new Date().getFullYear()} {company.name}</span>
        <Link href="/politica-de-privacidade">Política de privacidade</Link>
      </div>
    </footer>
  );
}
