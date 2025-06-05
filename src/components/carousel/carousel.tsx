import React, { useEffect, useRef, useState } from 'react';
import styles from './carousel.module.scss';
import { getRandomGrayHex } from '../../utils';



const THROTTLE_DELAY = 800;

function throttle(fn: any, delay: number){
  let isOpen = true;
  return function(this:any, ...args: any[]){
    if(isOpen){
      isOpen = false;
      fn.apply(this, args);
      setTimeout(() => {
        isOpen = true;
      }, delay)
    }
  }
}

type slide = {
  card: React.ReactNode
  image: string
}

type carouselPropType = {
  slidesList: slide[]
}

const Carousel: React.FC<carouselPropType> = ({ slidesList = []}) => {
  const carouselFrameRef = useRef<HTMLDivElement>(null);
  const scrollActiveCount = useRef({ count: 0 });
  const [currSlide, setCurrSlide] = useState(0)
  
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      const containerHeight = carouselFrameRef?.current?.parentElement?.clientHeight || 1;
      const dir = event.deltaY > 0 ? "down" : "up";
      // console.log('scrollActiveCount.current.count', scrollActiveCount.current.count)
      if(dir === "down") {
        if(scrollActiveCount.current.count < slidesList.length-1){
          scrollActiveCount.current.count++;
          setCurrSlide(scrollActiveCount.current.count);
          if(carouselFrameRef?.current) {
            carouselFrameRef.current.style.transform = `translateY(-${containerHeight * scrollActiveCount.current.count}px)`          

          }
        } else {
          event.preventDefault()
        }
      } else {
        if(scrollActiveCount.current.count > 0){
          scrollActiveCount.current.count--;
          setCurrSlide(scrollActiveCount.current.count);
          if(carouselFrameRef.current) {
            carouselFrameRef.current.style.transform = `translateY(-${containerHeight * scrollActiveCount.current.count}px)`
          }
        } else {
          event.preventDefault();
        }
      }
    };
    const throttledHandler = throttle(handleWheel, THROTTLE_DELAY);
    window.addEventListener("wheel", throttledHandler);
  
    return () => {
      window.removeEventListener("wheel", throttledHandler);
    };
  }, []);
  return <div className={styles.carousel} >
    <div ref={carouselFrameRef} className={styles.carousel_frame} >
      { slidesList.map(slide => {
        return <div className={styles.carousel_card}>
          {slide.card}
      </div>
      })}
    </div>
    <div className={styles.btn_group}>
    { slidesList.map((slide, index) => {
        return <button className="" style={(currSlide === index) ? { backgroundColor: getRandomGrayHex() } : {}}>
          <img src={slide.image}/>
      </button>
      })}
    </div>
  </div>;
};

export default Carousel;