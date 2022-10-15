import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import styles from "./Slider.module.css";

export default function SlideShow() {
  const slideImages = [
    'https://matjarii.com/pub/media/codazon/slideshow/cache/880x380/b/a/banner-06.jpg',
    'https://gs1ca.org/gs1ca-components/images/graphics/intro-image-eComm.png',
    'https://thumbs.dreamstime.com/b/online-shopping-young-person-buying-product-application-smartphone-ecommerce-market-transportation-logistic-business-182456255.jpg',
    'http://images.ctfassets.net/sxag7u4cz1re/15G5nc0t9fMg1tjZQMuhJD/a6b4f1e25a3acf4b496f2f8fe8b9336b/young-woman-working-on-laptop-from-home.jpg',
  ];
  
  return (
    <div className={styles.container} style={{marginTop:'3.75rem'}}>
      <Slide easing="ease">
        {slideImages.map((slide, index) => {
          return (
            <div className={styles.slide} key={slide}>
              <div style={{ backgroundImage: `url(${slideImages[index]})` }}>
              </div>
            </div>
          );
        })}
      </Slide>
    </div>
  );
}



