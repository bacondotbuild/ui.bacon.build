import Link from 'next/link'
import { Main } from '@bacondotbuild/ui'

import Layout from '@/components/layout'

export const nav = [
  {
    href: '/components/drag-drop-list',
    text: 'drag drop list',
  },
  {
    href: '/components/modal',
    text: 'modal',
  },
]

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <Layout>
      <Main className='flex flex-col p-4'>
        <div className='flex flex-grow flex-col items-center justify-center space-y-4'>
          <ul className='flex space-x-3'>
            {nav.map(({ href, text }) => (
              <li key={href}>
                <Link className='text-cb-pink hover:underline' href={href}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>
          {children}
        </div>
      </Main>
    </Layout>
  )
}
