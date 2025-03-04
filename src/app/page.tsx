import Image from 'next/image';
import '../../assets/root.css';
import HeroSection from './Components/home/components/HeroSection';
import FindTutor from './Components/home/components/FindTutor';
import PopularTutors from './Components/home/components/PopularTutor';
import Testimonials from './Components/home/components/Testimonials';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <FindTutor />
      <PopularTutors />
      <Testimonials />
    </div>
  );
}
