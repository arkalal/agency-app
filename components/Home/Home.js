import React from "react";
import Hero from "./Hero/Hero";
import TechStack from "./Trusted/Trusted";
import Values from "./Values/Values";
import Process from "./Process/Process";
import Testimonials from "./Testimonials/Testimonials";
import PricingPreview from "./PricingPreview/PricingPreview";
import FinalCta from "./FinalCta/FinalCta";
import AiBuilderTeaser from "./AiBuilderTeaser/AiBuilderTeaser";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <main className={styles.home}>
      {/* Section 1: Hero */}
      <Hero />

      {/* Section 2: Tech Stack + Services (4 cards) */}
      <section className={styles.techServicesSection}>
        <TechStack />
        <Values id="services" />
      </section>

      {/* Section 3: Process + Testimonials */}
      <section className={styles.processTestimonialsSection}>
        <Process id="process" />
        <Testimonials />
      </section>

      {/* Section 4: AI Builder Teaser */}
      <section className={styles.aiBuilderSection}>
        <AiBuilderTeaser />
      </section>

      {/* Section 5: Pricing */}
      <PricingPreview />

      {/* Section 6: Final CTA + Footer */}
      <section className={styles.finalSection}>
        <FinalCta />
      </section>
    </main>
  );
}
