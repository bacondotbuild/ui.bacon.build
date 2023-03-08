import { Page } from '@bacondotbuild/ui'

import Meta from '@/components/meta'
import Header from '@/components/header'

const DEFAULT_TITLE = 'ui'

const Layout = ({
  title = DEFAULT_TITLE,
  showHeader = true,
  children,
}: {
  title?: string
  showHeader?: boolean
  children: React.ReactNode
}) => {
  return (
    <Page>
      <Meta
        title={title === DEFAULT_TITLE ? title : `${title} - ${DEFAULT_TITLE}`}
      />
      {showHeader && <Header title={DEFAULT_TITLE} />}
      {children}
    </Page>
  )
}

export default Layout
