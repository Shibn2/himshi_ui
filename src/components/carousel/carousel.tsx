import { useEffect, useRef } from 'react';
import styles from './carousel.module.scss';



const THROTTLE_DELAY = 500;

function throttle(fn, delay){
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



export const carousel = ({ slidesList = []}) => {
  const carouselFrameRef = useRef(null);
  const scrollActiveCount = useRef({ count: 0 });
  
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      const containerHeight = carouselFrameRef.current.parentElement.clientHeight;
      const dir = event.deltaY > 0 ? "down" : "up";
      console.log('dir->', dir );
      if(dir === "down") {
        if(scrollActiveCount.current.count < slidesList.length-1){
          scrollActiveCount.current.count++;
          console.log('-containerHeight * scrollActiveCount.current.count', -(containerHeight * scrollActiveCount.current.count))
          carouselFrameRef.current.style.transform = `translateY(-${containerHeight * scrollActiveCount.current.count}px)`          
          console.log('scrollActiveCount.current.count', scrollActiveCount.current.count)
        } else {
          event.preventDefault()
        }
      } else {
        if(scrollActiveCount.current.count > 0){
          scrollActiveCount.current.count--;
          carouselFrameRef.current.style.transform = `translateY(-${containerHeight * scrollActiveCount.current.count}px)`
          console.log('-containerHeight * scrollActiveCount.current.count', -(containerHeight * scrollActiveCount.current.count), 'scrollActiveCount.current.count', scrollActiveCount.current.count)
        } else {
          event.preventDefault();
        }
      }
      console.log("Mouse scrolled", event.deltaY > 0 ? "down" : "up");
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
          {slide.text}
      </div>
      })}
    </div>
    <div className={styles.btn_group}>
    { slidesList.map((slide, index) => {
        return <button className={styles.carousel_card}>
      </button>
      })}
    </div>
  </div>;
};