import { useState } from 'react'
import { Title, DragDropList } from '@bacondotbuild/ui'

import Layout from '@/components/components-layout'
import Code from '@/components/code'

export default function DragDropListPage() {
  const [items, setItems] = useState(['components', 'design', 'icons'])
  return (
    <Layout>
      <Title>drag drop list</Title>
      <Code>{`import { DragDropList } from '@bacondotbuild/ui'`}</Code>
      <DragDropList
        items={items.map(item => ({ id: item, item }))}
        renderItem={({ id, item }, index) => (
          <div key={id} className='rounded-lg bg-cobalt p-3'>
            {index + 1}. {item}
          </div>
        )}
        setItems={newItems => {
          setItems(newItems.map(({ item }) => item))
        }}
        listContainerClassName='space-y-3'
      />
    </Layout>
  )
}
