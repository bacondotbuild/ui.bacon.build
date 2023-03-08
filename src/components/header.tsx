import Link from 'next/link'
import { useRouter } from 'next/router'
import { Header as HeaderComponent, GithubIcon } from '@bacondotbuild/ui'

const navItems = [
  {
    href: '/components',
    text: 'components',
  },
  {
    href: '/design',
    text: 'design',
  },
]

export default function Header({ title }: { title: string }) {
  const { pathname } = useRouter()
  return (
    <>
      <div className='flex items-center justify-center'>
        <HeaderComponent>
          {pathname === '/' ? (
            <span>{title}</span>
          ) : (
            <Link href='/' className='hover:text-cb-pink'>
              {title}
            </Link>
          )}
        </HeaderComponent>
        <a
          className='absolute right-4 text-cb-pink hover:opacity-80'
          href='https://github.com/bacondotbuild/ui'
          target='_blank'
          rel='noopener noreferrer'
        >
          <GithubIcon />
        </a>
      </div>
      <nav>
        <ul className='flex items-center justify-center space-x-4'>
          {navItems.map(({ href, text }) => (
            <li key={href}>
              <Link className='text-cb-pink hover:underline' href={href}>
                {text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}
