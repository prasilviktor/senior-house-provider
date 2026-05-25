import ProviderSection from '@/components/sections/ProviderSection'
import ProviderSectionCS from '@/components/sections/ProviderSectionCS'

export default function Home() {
  return (
    <main style={{ padding: '60px 24px', maxWidth: 960, margin: '0 auto' }}>
      {/* Toggle via ?lang=cs in URL or swap components as needed */}
      {/* English version — uncomment to use */}
      {/* <ProviderSection /> */}

      <ProviderSectionCS />
    </main>
  )
}
