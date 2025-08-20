import { Button } from '@heroui/react';
import './App.css';
import NavBar from './components/Navbar';


function App() {
  return (
    <>
    <main className='overflow-x-hidden'>
      <NavBar/>
      <div className='w-full max-w-[1440px] mx-auto px-3 md:px-10 lg:px-20 xl:px-24 py-5'>
      </div>
    </main>

    </>
  );
}

export default App;
