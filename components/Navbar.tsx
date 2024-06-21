import styles from './Navbar.module.css';
import { ActiveLink } from './ActiveLink';

const menuItems = [
  {
    text: 'Home',
    href: '/'
  },
  {
    text: 'About',
    href: '/about'
  },
  {
    text: 'Contact',
    href: '/contact'
  },
  {
    text: 'Pricing',
    href: '/pricing'
  },
];

export const Navbar = () => {
  return (
    <nav className={styles['menu-container']}>
      {
        menuItems.map((link) => (
          <ActiveLink key={link.href} href={link.href} text={link.text} />
        ))
      }
    </nav>
  )
}