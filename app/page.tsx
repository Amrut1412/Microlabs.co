import { Block as Navbar } from '@/src/components/blocks/marketing-navbars/navbar-with-call-to-action/block';
import { Block as Hero } from '@/src/components/blocks/heroes/hero-with-command/block';
import { Block as Problems } from '@/src/components/blocks/features/feature-bento-grid-02/block';
import { Block as Mission } from '@/src/components/blocks/features/feature-mission/block';
import { Block as StatsOld } from '@/src/components/blocks/stats/stat-centered-with-separator/block';
import { Block as Features } from '@/src/components/blocks/features/feature-04/block';
import { Block as Products } from '@/src/components/blocks/features/feature-bento-grid-01/block';
import { Block as StatsNew } from '@/src/components/blocks/features/feature-10/block';
import { Block as Testimonials } from '@/src/components/blocks/testimonials/testimonial-with-card/block';
import { Block as PricingPhilosophy } from '@/src/components/blocks/pricing/pricing-philosophy/block';
import { Block as DifferenceBlock } from '@/src/components/blocks/features/feature-difference/block';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problems />
      <StatsOld />
      <Features />
      <Products />
      <StatsNew />
      <Testimonials />
      <Mission />
      <PricingPhilosophy />
      <DifferenceBlock />
    </>
  );
}
