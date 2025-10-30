import About from '@/components/About';
import Hero from '@/components/Hero';
import Navbar from '@/components/Navbar';

const HomePage = () => {
  return (
    <main className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
    </main>
  );
};

export default HomePage;
