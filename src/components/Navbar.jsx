import Image from 'next/image';
import Link from 'next/link';

import styles from 'styles/Navbar.module.css';
import logo from '../../public/favicon.ico';

const Navbar = () => (
    <nav>
      <a href="/">
        <Image src={logo} alt="logo" width={102} height={40} />
      </a>
      <Link href="/page1">
        <a>Page 1</a>
      </Link>
      <Link href="/page2">
        <a className={styles.link}>Page 2</a>
      </Link>
      <Link href="/page3">
        <a className={styles.link}>Page 3</a>
      </Link>
    </nav>
);

export default Navbar;
