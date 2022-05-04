import React from 'react'
import databiz from 'assets/images/client-databiz.svg';
import audio from 'assets/images/client-audiophile.svg';
import meet from 'assets/images/client-meet.svg';
import maker from 'assets/images/client-maker.svg';
import { useMediaQuery } from 'react-responsive';

type Props = {}

export const TextContainer = (props: Props) => {
    const isMobile = useMediaQuery({ maxWidth: 768 });
    return (
      <div className='w-11/12  desktop:h-[80vh] md:h-[70vh] desktop:w-1/2 py-10 pt-[8%] px-0 desktop:px-24 flex flex-col md:items-start items-center justify-between md:gap-10 gap-20'>
        <div className='flex flex-col items-center md:items-start justify-between gap-10'>
            <h1 className='font-bold md:text-7xl text-3xl'>
                Make{isMobile ? "" : (<br/>)} Remote Work
            </h1>
                <p className=' font-semibold text-gray-400 md:w-[400px] md:text-left text-center'>
                    Get your team in sync. no matter your location. Streamline processes. Create team rituals and watch productivity soar.
                </p>
            <a href='#learnMore' className='text-white bg-black px-6 py-3 rounded-xl hover:border-[1px] border-black hover:font-bold  tracking-wide hover:bg-white hover:text-black'>
                Learn More
            </a>
        </div>
        <div className='flex flex-row items-center justify-center md:justify-between gap-5 flex-wrap w-full'>
            <img src={databiz} alt="databiz" />
            <img src={audio} alt="audio" />
            <img src={meet} alt="meet" />
            <img src={maker} alt="maker" />
        </div>
    </div>
  )
}
