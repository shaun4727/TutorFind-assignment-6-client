import Image from 'next/image';
import styles from '../../page.module.css';
import '@/../../assets/root.css';
import { ConfigProvider, Menu, MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number] & { route: string };
const routes: MenuItem[] = [
  {
    label: 'Home',
    key: 'home',
    route: '/',
  },
  {
    label: 'About Us',
    key: 'about',
    route: '/',
  },
  {
    label: 'Tutors',
    key: 'tutor',
    route: '/',
  },
  {
    label: 'FAQ',
    key: 'faq',
    route: '/',
  },
  {
    label: 'Blog',
    key: 'Dashboard',
    route: '/',
  },
];

export default function NavBar() {
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
          <Menu mode="horizontal" items={routes} className={styles.navStyle} />
        </div>
      </ConfigProvider>
    </>
  );
}
