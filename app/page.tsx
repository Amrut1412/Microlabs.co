import { Block as Navbar } from '@/src/components/blocks/marketing-navbars/navbar-with-call-to-action/block';
import { Block as Hero } from '@/src/components/blocks/heroes/hero-with-command/block';
import { Block as Problems } from '@/src/components/blocks/features/feature-bento-grid-02/block';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problems />
    </>
  );
}
