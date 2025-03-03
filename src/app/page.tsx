import Image from 'next/image';
import styles from './page.module.css';
import { Col, ConfigProvider, Menu, MenuProps, Row, theme } from 'antd';
import '../../assets/root.css';
import HeroSection from './Components/home/components/HeroSection';
import FindTutor from './Components/home/components/FindTutor';
import PopularTutors from './Components/home/components/PopularTutor';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FindTutor />
      <PopularTutors />
    </div>
  );
}
