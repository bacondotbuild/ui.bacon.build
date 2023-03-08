import { useState } from 'react'
import { Title, Modal, Button } from '@bacondotbuild/ui'

import Layout from '@/components/components-layout'
import Code from '@/components/code'

export default function ModalPage() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Layout>
      <Title>modal</Title>
      <Code>{`import { Modal } from '@bacondotbuild/ui'`}</Code>
      <Button onClick={() => setIsOpen(true)}>open</Button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} title='modal title'>
        modal children
      </Modal>
    </Layout>
  )
}
