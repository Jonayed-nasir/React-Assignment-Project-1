import { Button } from '@heroui/react';
import './App.css';
import NavBar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import ControlSection from './components/ControlSection';

function App() {
  return (
    <>
    <main className='overflow-x-hidden'>
      <NavBar/>
      <Hero/>
      <Partners/>
      <div className='w-full max-w-[1440px] mx-auto px-3 md:px-10 lg:px-20 xl:px-24 py-5'>
      <ControlSection />
      </div>
    </main>

    </>
  );
}

export default App;
