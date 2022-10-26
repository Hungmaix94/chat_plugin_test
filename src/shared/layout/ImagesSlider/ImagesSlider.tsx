import React, { FC, useState } from 'react';
import { Carousel, CarouselControl, CarouselIndicators, CarouselItem } from 'reactstrap';
import './ImagesSlider.scss';

interface IImagesSlider {
  images: { src: string; onClick?: any; className?: any }[];
  className?: string;
}

const ImagesSlider: FC<IImagesSlider> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const onExiting = () => {
    setAnimating(true);
  };

  const onExited = () => {
    setAnimating(false);
  };

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === images.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? images.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = images.map(item => {
    return (
      <CarouselItem onExiting={onExiting} onExited={onExited} key={item.src} className={item?.className}>
        <img
          src={item.src}
          alt="background"
          onClick={() => {
            if (item?.onClick) {
              item?.onClick();
            }
          }}
        />
      </CarouselItem>
    );
  });

  return (
    <Carousel activeIndex={activeIndex} next={next} previous={previous} className={'images-slider'} autoPlay={false}>
      <CarouselIndicators items={images} activeIndex={activeIndex} onClickHandler={goToIndex} />
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
};

export default ImagesSlider;
