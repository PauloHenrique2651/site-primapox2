import Image from "next/image";
import Link from "next/link";
import { pageMetadata } from "@/data/seo";
import { HeroBackgroundVideo } from "@/components/HeroBackgroundVideo";
import { IndustrialGallery } from "@/components/IndustrialGallery";
import { QuoteForm } from "@/components/QuoteForm";
import { applications, benefits, company, processSteps } from "@/data/site";
import { processDetails, supportedMetals } from "@/data/services";
import { legacy } from "@/data/legacy";
import styles from "./home.module.css";

export const metadata = pageMetadata("/", "Primapox | Pintura eletrostática a pó no Rio de Janeiro", "Pintura eletrostática a pó para componentes metálicos, com preparação controlada, cobertura uniforme e acabamento de alto padrão no Rio de Janeiro.");

const capacity = [
  { value: `+${company.yearsOfExperience}`, label: "anos de atuação, desde 1993" },
  { value: "6,5 m", label: "de comprimento máximo de peça" },
  { value: "18 m", label: "de estufa de cura" },
  { value: "200 °C", label: "de temperatura na estufa" },
  { value: "≈ 60 µm", label: "de recobrimento indicado" },
  { value: "2", label: "resinas: híbrida e poliéster" },
];

const services = [
  { title: "Pintura eletrostática a pó", copy: "A carga eletrostática distribui o pó sobre o metal preparado. A cura ativa o sistema de resinas e consolida a película.", href: "/solucoes/pintura-eletrostatica-a-po" },
  { title: "Pré-tratamento", copy: "Limpeza, preparação e tratamento químico removem contaminantes e criam as condições de aderência antes da aplicação.", href: "/processo" },
  { title: "Cura e controle", copy: "O aquecimento polimeriza a tinta e consolida o acabamento antes da verificação final.", href: "/processo" },
  { title: "Manutenção da pintura", copy: "Detergente neutro, materiais macios e intervalos de limpeza compatíveis com o ambiente ajudam a conservar o acabamento poliéster.", href: "/manutencao" },
];

export default function HomePage() {
  return (
    <>
      <section className={styles.hero} aria-labelledby="titulo-principal">
        <div className={styles.slides}>
          <HeroBackgroundVideo src="/media/hero-albruga.webm" poster="/media/primapox-hero-poster.webp" className={styles.video} buttonClassName={styles.videoToggle} />
        </div>
        <div className={`shell ${styles.heroContent}`}>
          <p className={styles.kicker}>Desde 1993 em Vigário Geral, Rio de Janeiro</p>
          <h1 id="titulo-principal">Pintura eletrostática a pó</h1>
          <p className={styles.tagline}>Proteção que adere. Qualidade que permanece.</p>
          <p className={styles.lead}>Revestimento técnico para componentes metálicos, com cobertura uniforme, alta resistência e acabamento de alto padrão.</p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#orcamento">Solicitar orçamento</a>
            <a className={styles.secondary} href="#estrutura">Conhecer a estrutura</a>
          </div>
        </div>
      </section>

      <section className={styles.capacity} aria-label="Capacidade produtiva">
        <dl className="shell">
          {capacity.map((item) => (
            <div key={item.label}><dt>{item.value}</dt><dd>{item.label}</dd></div>
          ))}
        </dl>
      </section>

      <section className={styles.services} aria-labelledby="servicos">
        <div className={`shell ${styles.split}`}>
          <div className={styles.intro}>
            <h2 id="servicos">Serviços</h2>
            <p>{legacy.servicesIntro}</p>
            <Link className={styles.textLink} href="/solucoes/pintura-eletrostatica-a-po">Ver serviço completo</Link>
          </div>
          <ul className={styles.serviceList}>
            {services.map((service) => (
              <li key={service.title}>
                <h3><Link href={service.href}>{service.title}</Link></h3>
                <p>{service.copy}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.slogan} aria-labelledby="vantagens">
        <div className={`shell ${styles.sloganGrid}`}>
          <h2 id="vantagens">{legacy.slogan}</h2>
          <ul>{legacy.advantages.map((advantage) => <li key={advantage}>{advantage}</li>)}</ul>
        </div>
      </section>

      <section className={styles.structure} id="estrutura" aria-labelledby="titulo-estrutura">
        <div className={`shell ${styles.structureTop}`}>
          <div className={styles.structurePhoto}>
            <Image src="/gallery/32.webp" alt="Vista da linha produtiva da Primapox" fill sizes="(max-width: 800px) 90vw, 45vw" />
          </div>
          <div>
            <h2 id="titulo-estrutura">Estrutura</h2>
            <p>{processDetails[2]}</p>
            <p>{processDetails[3]}</p>
            <p>{legacy.noMicrochannels} {legacy.protection}</p>
            <p>A capacidade informada é de peças com até <strong>6,5 m de comprimento</strong>. Consulte a equipe sobre a geometria, o material e as demais dimensões do seu projeto.</p>
          </div>
        </div>
        <div className="shell">
          <h3 className={styles.railTitle}>Quatro etapas na linha</h3>
          <ol className={styles.rail}>
            {processSteps.map((step) => (
              <li key={step.number}>
                <span className={styles.hook} aria-hidden="true" />
                <div className={styles.plate}>
                  <span className={styles.stepNumber}>{step.number}</span>
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <Link className={`${styles.textLink} ${styles.textLinkLight}`} href="/processo">Acompanhar o processo completo</Link>
        </div>
      </section>

      <section className={styles.technology} aria-labelledby="tecnologia">
        <div className="shell">
          <h2 id="tecnologia">Tecnologia</h2>
          <div className={styles.resins}>
            <article>
              <h3>Híbrida</h3>
              <p className={styles.use}>Uso interior</p>
              <p>Combinação de resinas epóxi e poliéster para superfícies metálicas em peças de uso interno.</p>
            </article>
            <article>
              <h3>Poliéster</h3>
              <p className={styles.use}>Uso exterior</p>
              <p>Resinas poliésteres para peças metálicas externas, especialmente aplicações arquitetônicas.</p>
            </article>
            <aside>
              <h3>Metais</h3>
              <ul>{supportedMetals.map((metal) => <li key={metal}>{metal}</li>)}</ul>
              <Link className={styles.textLink} href="/solucoes/pintura-eletrostatica-a-po#ficha-tecnica">Consultar referência técnica</Link>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.benefits} aria-labelledby="diferenciais">
        <div className="shell">
          <h2 id="diferenciais">Diferenciais</h2>
          <ul>{benefits.map((benefit) => <li key={benefit}>{benefit}</li>)}</ul>
        </div>
      </section>

      <section className={styles.applications} aria-labelledby="aplicacoes">
        <div className="shell">
          <div className={styles.rowHead}>
            <h2 id="aplicacoes">Aplicações</h2>
            <Link className={styles.textLink} href="/aplicacoes">Ver todas as aplicações</Link>
          </div>
          <div className={styles.appGrid}>
            {applications.map((application) => (
              <article key={application.code}>
                <div className={styles.appPhoto}><Image src={application.image} alt={application.imageAlt} fill sizes="(max-width: 800px) 90vw, 25vw" /></div>
                <h3>{application.title}</h3>
                <p>{application.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.gallery} aria-labelledby="acervo">
        <div className="shell">
          <div className={styles.rowHead}>
            <h2 id="acervo">Acervo real</h2>
            <Link className={styles.textLink} href="/galeria">Explorar as 46 fotos</Link>
          </div>
          <IndustrialGallery preview />
        </div>
      </section>

      <section className={styles.quote} aria-labelledby="titulo-orcamento">
        <div className={`shell ${styles.quoteGrid}`}>
          <div>
            <h2 id="titulo-orcamento">Solicite um orçamento</h2>
            <p>Envie dimensões, quantidade, fotos ou desenhos. Quanto melhor o escopo, mais objetiva será a análise.</p>
            <p className={styles.mailLabel}>Dúvidas, solicitações e orçamentos</p>
            <a className={styles.mail} href={`mailto:${company.email}`}>{company.email}</a>
            <dl className={styles.contactFacts}>
              <div><dt>Telefone</dt><dd><a href="tel:+552134487320">{company.phoneMain}</a></dd></div>
              <div><dt>Endereço</dt><dd>{company.address}</dd></div>
            </dl>
          </div>
          <div className={styles.formPanel}><QuoteForm /></div>
        </div>
      </section>
    </>
  );
}
