import React, { useEffect, Fragment } from "react";
import Glide from "@glidejs/glide";
import "@glidejs/glide/dist/css/glide.core.min.css";
import GlideWrapper, {
  GlideSlideWrapper,
  BulletControlWrapper,
  BulletButton,
} from "./index.style";

interface Options {
  gap?: number;
  autoplay?: number;
  animationDuration?: number;
}

interface GlideCarouselProps {
  className?: string;
  children?: React.ReactNode;
  options?: Options;
  bullets?: boolean;
  numberOfBullets: number;
}

const GlideCarousel: React.FC<GlideCarouselProps> = ({
  className,
  children,
  options,
  bullets,
  numberOfBullets,
}) => {
  const addAllClasses = ["glide"];

  if (className) {
    addAllClasses.push(className);
  }

  const totalBullets = [];

  for (let i = 0; i < numberOfBullets; i++) {
    totalBullets.push(i);
  }
  useEffect(() => {
    const glide = new Glide("#glide", {
      ...options,
    });
    glide.mount();
  }, [options]);

  return (
    <GlideWrapper className={addAllClasses.join(" ")} id="glide">
      <div className="glide__track" data-glide-el="track">
        <ul className="glide__slides">{children}</ul>
      </div>
      {bullets && (
        <BulletControlWrapper
          className="glide__bullets"
          data-glide-el="controls[nav]"
        >
          <Fragment>
            {" "}
            {totalBullets.map((index) => (
              <BulletButton
                key={index}
                className="glide__bullet"
                data-glide-dir={`=${index}`}
              />
            ))}{" "}
          </Fragment>{" "}
        </BulletControlWrapper>
      )}
    </GlideWrapper>
  );
};

interface GlideSlideProps {
  children?: React.ReactNode;
}
const GlideSlide: React.FC<GlideSlideProps> = ({ children }) => {
  return (
    <GlideSlideWrapper className="glide__slide">{children}</GlideSlideWrapper>
  );
};

export { GlideSlide, GlideCarousel };
