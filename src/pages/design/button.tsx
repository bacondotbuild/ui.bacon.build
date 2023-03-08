import { useState } from 'react'
import { Title, Button } from '@bacondotbuild/ui'

import Layout from '@/components/design-layout'
import Code from '@/components/code'

export default function ButtonPage() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Layout>
      <Title>button</Title>
      <Code>{`import { Button } from '@bacondotbuild/ui'`}</Code>
      <Button onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? 'open' : 'closed'}
      </Button>
    </Layout>
  )
}
