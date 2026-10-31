import type { ReactNode } from "react";
import Image from "next/image";
import styles from "./PageHero.module.css";

export function PageHero({ title, image }: { eyebrow?: string; title: ReactNode; copy: string; marker: string; image?: string }) {
  return (
    <section className={styles.hero} data-image={Boolean(image)}>
      {image && <Image className={styles.photo} src={image} alt="" fill sizes="100vw" priority />}
      <div className={`shell ${styles.grid}`}>
        <div>
          <h1>{title}</h1>
        </div>
      </div>
    </section>
  );
}
