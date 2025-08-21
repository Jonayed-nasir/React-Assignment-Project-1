import { Button } from '@heroui/react';
import './App.css';
import NavBar from './components/Navbar';
import Hero from './components/Hero';
import Partners from './components/Partners';
import ControlSection from './components/ControlSection';
import Prefered from './components/Prefered';
import Pagination from './components/Pagination';
import Inpact from './components/Inpact';

function App() {
  return (
    <>
    <main className='overflow-x-hidden'>
      <NavBar/>
      <Hero/>
      <Partners/>
      <div className='w-full max-w-[1440px] mx-auto px-3 md:px-10 lg:px-20 xl:px-24 py-5'>
      <ControlSection />
      <Prefered />
      <Pagination />
      <Inpact />
      </div>
    </main>

    </>
  );
}

export default App;
