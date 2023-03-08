import Link from 'next/link'
import { Main, Title } from '@bacondotbuild/ui'

import Layout from '@/components/layout'
import { nav } from '@/components/components-layout'

export default function Components() {
  return (
    <Layout>
      <Main className='flex flex-col p-4'>
        <div className='flex flex-grow flex-col items-center justify-center space-y-4'>
          <Title>components</Title>
          <ul className='space-y-3'>
            {nav.map(({ href, text }) => (
              <li key={href}>
                <Link className='text-cb-pink hover:underline' href={href}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Main>
    </Layout>
  )
}
