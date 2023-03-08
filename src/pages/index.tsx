import { Main } from '@bacondotbuild/ui'

import Layout from '@/components/layout'
import Header from '@/components/header'
import Code from '@/components/code'

export default function Home() {
  return (
    <Layout showHeader={false}>
      <Main className='flex flex-col p-4'>
        <div className='flex flex-grow flex-col items-center justify-center space-y-4'>
          <Header title='ui' />
          <Code>npm i @bacondotbuild/ui</Code>
        </div>
      </Main>
    </Layout>
  )
}
