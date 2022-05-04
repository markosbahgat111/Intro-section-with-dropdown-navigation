import {useState} from 'react';
import './App.scss';
import { NavBar } from './components/navbar/navbar.component';
import { TextContainer } from './components/textContainer/textContainer.components';
import heroDesktop from 'assets/images/image-hero-desktop.png';
import heroMobile from 'assets/images/image-hero-mobile.png';
import { useMediaQuery } from 'react-responsive';

function App() {
  const isMobile = useMediaQuery({ query: "(max-width:1000px)" });
  const [iconClass, setIconClass] = useState<number>(0);
    const handleOpenMenu = (value: number) => {
        setIconClass(iconClass => iconClass === 0 ? value : 0)
    }
  return (
    <div className="App" >
      <NavBar handleOpenMenu={handleOpenMenu} iconClass={iconClass} />
      <div className='content_container w-full h-full flex flex-row items-center justify-between desktop:p-5 p-0' onClick={() => setIconClass(0)}>
        <TextContainer />
        <div className='w-full h-[auto] desktop:w-1/2 desktop:h-[70vh]'>
            <img src={isMobile ? heroMobile : heroDesktop} alt="hero" className='object-contain w-full h-full'/>
        </div>
      </div>
    </div>
  );
};

export default App;
