import { MainLayout } from '@/components/layouts/MainLayout'
import Link from 'next/link'

export default function PricingPage() {
  return (
    <>
      <MainLayout>
        <h1>Pricing page</h1>

        <h1 className={'title'}>
          Ir a <Link href={"/"} className={'titleColor'}>Home</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{''}
          <code className={'code'}>pages/pricing.tsx</code>
        </p>

      </MainLayout>
    </>
  )
}
