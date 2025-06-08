import Link from "next/link";
import { Carousel } from "./components/Carousel";
import ElectricityPrice from './components/ElectricityPrice';
import { CheckCircleIcon, BoltIcon, CurrencyDollarIcon, ShieldCheckIcon } from "@heroicons/react/24/outline";
import type { Metadata } from 'next'
import Hero from './components/Hero'
import Features from './components/Features'
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

export const metadata: Metadata = {
  // ... existing code ...
};
