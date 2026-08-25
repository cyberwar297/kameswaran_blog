import {
  FaBook,
  FaBoxArchive,
  FaCalendarCheck,
  FaEnvelope,
  FaFlask,
  FaFolderOpen,
  FaGithub,
  FaLinkedin,
  FaMicrophone,
  FaRss,
  FaSquareRss,
  FaXTwitter,
  FaYoutube,
} from 'react-icons/fa6'
import type { IconType } from 'react-icons'

export type SitePage = {
  path: string
  tab: string
  title: string
  icon: IconType
  externalUrl?: string
}

export const sidebarPages: SitePage[] = [
  {
    path: '/youtube',
    tab: 'Youtube',
    title: 'Youtube',
    icon: FaYoutube,
    externalUrl: 'https://www.youtube.com/@kameswaranjayagopal2461',
  },
  { path: '/blog', tab: 'Blog', title: 'Blog', icon: FaSquareRss },
  { path: '/newsletter', tab: 'Newsletter', title: 'Newsletter', icon: FaEnvelope },
  { path: '/podcast', tab: 'Podcast', title: 'Podcast', icon: FaMicrophone },
  {
    path: '/linkedin',
    tab: 'Linkedin',
    title: 'Linkedin',
    icon: FaLinkedin,
    externalUrl: 'https://www.linkedin.com/in/kameswaran-jayagopal-3884877a/',
  },
  {
    path: '/twitter',
    tab: 'Twitter',
    title: 'Twitter',
    icon: FaXTwitter,
    externalUrl: 'https://x.com/JKAMESWARAN',
  },
  {
    path: '/book-a-meeting',
    tab: 'Book a Meeting',
    title: 'Book a Meeting',
    icon: FaCalendarCheck,
  },
  {
    path: '/github',
    tab: 'Github',
    title: 'Github',
    icon: FaGithub,
    externalUrl: 'https://github.com/cyberwar297',
  },
  { path: '/books', tab: 'Books', title: 'Books', icon: FaBook },
  { path: '/projects', tab: 'Projects', title: 'Projects', icon: FaFolderOpen },
  { path: '/research', tab: 'Research', title: 'Research', icon: FaFlask },
  { path: '/rss', tab: 'Rss', title: 'Rss', icon: FaRss },
  { path: '/archives', tab: 'Archives', title: 'Archives', icon: FaBoxArchive },
]

export const footerLinks = [
  { label: 'Email', href: '#', icon: FaEnvelope },
  { label: 'YouTube', href: 'https://www.youtube.com/@kameswaranjayagopal2461', icon: FaYoutube },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kameswaran-jayagopal-3884877a/', icon: FaLinkedin },
  { label: 'X', href: 'https://x.com/JKAMESWARAN', icon: FaXTwitter },
  { label: 'GitHub', href: 'https://github.com/cyberwar297', icon: FaGithub },
  { label: 'Podcast', href: '#', icon: FaMicrophone },
  { label: 'RSS', href: '#', icon: FaRss },
]

export type HeaderTab = {
  path: string
  title: string
}

export const headerTabs: HeaderTab[] = [
  { path: '/home', title: 'Home' },
  { path: '/blog', title: 'Blog' },
  { path: '/ideas', title: 'Ideas' },
  { path: '/projects', title: 'Projects' },
  { path: '/research', title: 'Research' },
  { path: '/about', title: 'About' },
]

export const routePages: HeaderTab[] = [
  ...headerTabs,
  ...sidebarPages.filter((page) => !headerTabs.some((tab) => tab.path === page.path)),
]
