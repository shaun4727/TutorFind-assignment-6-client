'use client';

import Image from 'next/image';
import styles from '@/app/page.module.css';
import '@/../../assets/root.css';
import { useRouter } from 'next/navigation';
import { ConfigProvider, Menu, MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number] & { route: string };
const routes: MenuItem[] = [
  {
    label: 'Home',
    key: '/',
    route: '/',
  },
  {
    label: 'About Us',
    key: 'about',
    route: '/about',
  },
  {
    label: 'Tutors',
    key: 'tutors',
    route: '/tutors',
  },
  {
    label: 'FAQ',
    key: 'faq',
    route: '/faq',
  },
  {
    label: 'Blog',
    key: 'blog',
    route: '/blog',
  },
  {
    label: 'Dashboard',
    key: 'dashboard',
    route: '/dashboard',
  },
];

export default function NavBar() {
  const router = useRouter();
  const onClick: MenuProps['onClick'] = (e) => {
    document.title = e.key;
    router.push(e.key);
    // if (e.key == 'logout') {

    // }
  };
  return (
    <>
      <div className={styles.topNav}>
        <p className={`${styles.topNavP} default-padding-body`}>
          <span className={styles.phoneDtl}>
            <Image
              src="/images/static/call-logo.png"
              width={25}
              height={18}
              className={styles.topNavLogo}
              alt="call-logo"
            />
            +8801234567891
          </span>
          <span className={styles.phoneDtl}>
            <Image
              src="/images/static/email-logo.png"
              width={25}
              height={18}
              alt="email-logo"
            />
            findTutor@gmail.com
          </span>
        </p>
      </div>

      <ConfigProvider
        theme={{
          components: {
            Menu: {
              itemHoverColor: '#fff',
              itemColor: '#fff',
              popupBg: '#002855',
            },
          },
        }}
      >
        <div className={`${styles.navContainer} default-padding-body`}>
          <Image
            src="/images/static/web-logo.png"
            width={200}
            height={35}
            alt="email-logo"
          />
          <Menu
            mode="horizontal"
            onClick={onClick}
            items={routes}
            className={styles.navStyle}
          />
        </div>
      </ConfigProvider>
    </>
  );
}
