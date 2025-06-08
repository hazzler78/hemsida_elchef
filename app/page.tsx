import Hero from './components/Hero'
import Features from './components/Features'
import ElectricityPrice from './components/ElectricityPrice'
import TrustpilotReviews from './components/TrustpilotReviews'
import CTA from './components/CTA'

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <ElectricityPrice />
      <TrustpilotReviews />
      <CTA />
    </main>
  );
}
