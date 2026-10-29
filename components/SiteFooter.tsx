import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { SocialLinks } from "@/components/SocialLinks";
import { whatsappLink } from "@/data/whatsapp";
import { company, navigation } from "@/data/site";
import { contact, footerRights, home } from "@/data/primapox";
import styles from "./SiteFooter.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.footer} id="rodape">
      <div className={styles.brandBand}>
        <div className={`shell ${styles.brandRow}`}>
          <BrandMark className={styles.brand} sizes="(max-width: 800px) 220px, 300px" />
          <p>{footerRights}</p>
        </div>
      </div>
      <div className={`shell ${styles.columns}`}>
        <div>
          <nav className={styles.links} aria-label="Navegação do rodapé">
            {navigation.map((item) => <Link key={item.href} href={item.href}>{item.label}</Link>)}
          </nav>
        </div>
        <div>
          <h2>{home.contactTitle}</h2>
          <div className={styles.links}>
            <a className={styles.mail} href={`mailto:${contact.email}`}>{contact.email}</a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">WhatsApp {company.whatsappLabel}</a>
            {contact.phoneLines.map((line) => <span key={line}>{line}</span>)}
          </div>
          <SocialLinks className={styles.social} />
        </div>
        <div>
          <h2>{home.locationTitle}</h2>
          <p className={styles.address}>{contact.addressLines.map((line) => <span key={line}>{line}<br /></span>)}</p>
          <a className={styles.route} href={company.mapsUrl} target="_blank" rel="noopener noreferrer">{home.more}</a>
        </div>
        <iframe className={styles.map} src={company.mapsEmbedUrl} title="Localização da Primapox no Google Maps" loading="lazy" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
      </div>
      <div className={`shell ${styles.bottom}`}>
        <span>{footerRights}</span>
        <Link href="/politica-de-privacidade">Política de privacidade</Link>
      </div>
    </footer>
  );
}
