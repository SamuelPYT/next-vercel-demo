import Link from 'next/link';
import { MainLayout } from '@/components/layouts/MainLayout';
import { DarkLayout } from '@/components/layouts/DarkLayout';

export default function AboutPage() {
  return (
    <>
      <>
        <h1>About page</h1>

        <h1 className={'title'}>
          Ir a <Link href={"/"} className={'titleColor'}>Home</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{''}
          <code className={'code'}>pages/About.tsx</code>
        </p>

      </>
    </>
  )
}

AboutPage.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>
        {page}
      </DarkLayout>
    </MainLayout>
  )
}