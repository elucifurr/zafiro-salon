// app/page.js
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import About from '@/components/About';
import About2 from '@/components/About2';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <About2 />
      <Services />
      <Contact />
    </>
  );
};

export default HomePage;
