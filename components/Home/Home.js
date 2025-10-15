import React from "react";
import Hero from "./Hero/Hero";
import TechStack from "./Trusted/Trusted";
import Values from "./Values/Values";
import Process from "./Process/Process";
import Testimonials from "./Testimonials/Testimonials";
import PricingPreview from "./PricingPreview/PricingPreview";
import FinalCta from "./FinalCta/FinalCta";
import styles from "./Home.module.scss";

export default function Home(){
  return (
    <main className={styles.home}>
      <Hero />
      <TechStack />
      <Values id="services" />
      <Process id="process" />
      <Testimonials />
      <PricingPreview />
      <FinalCta />
    </main>
  );
}
