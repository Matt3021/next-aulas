import { navigationLinks } from '@/utils/data'
import Link from 'next/link'
import { useRouter } from 'next/router'

export const Navbar = () => {
  const router = useRouter()

  const verifyActiveLink = (loopPath: string) => {
    if (loopPath === '/' && router.pathname !== '/') return 'text-black'
    if (router.pathname.indexOf(loopPath) === 0) {
      return 'text-red-700'
    } else {
      return 'text-black'
    }
  }
  return (
    <ul className='flex list-none'>
      {navigationLinks.map((link, index) => (
        <li key={index}>
          <Link href={link.path} className={`py-0 px-[15px] underline hover:no-underline ${verifyActiveLink(link.path)}`}>{link.label}</Link>
        </li>
      ))}
    </ul>
  )
}