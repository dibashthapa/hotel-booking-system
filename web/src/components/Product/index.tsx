import {
  ProductCard,
  ContentWrapper,
  ImageWrapper,
  TextLink,
} from "./index.style";
import { Link } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { LISTING_POSTS_PAGE } from "settings/constant";
import { HiOutlineExternalLink } from "react-icons/hi";

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 1,
    paritialVisibilityGutter: 40,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
    paritialVisibilityGutter: 30,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 1,
    paritialVisibilityGutter: 30,
  },
};
interface ProductProps {
  gallery: string[];
  location: string;
  hotel: string;
  price: string;
  id: string;
}
export const Product: React.FC<ProductProps> = ({
  gallery,
  location,
  hotel,
  price,
  id,
}) => {
  return (
    <ProductCard>
      <ImageWrapper>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlaySpeed={3000}
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          renderDotsOutside={false}
          responsive={responsive}
          showDots={true}
          sliderClass=""
          slidesToSlide={1}
        >
          {gallery?.map((url, index) => (
            <img src={url} alt={hotel} key={index} draggable={false} />
          ))}
        </Carousel>
      </ImageWrapper>
      <ContentWrapper>
        <div className="location">{location}</div>
        <div className="hotel">
          <Link to={hotel}>{hotel}</Link>
        </div>

        <div className="meta-wrapper">
          <div className="price">{price}</div>
        </div>
        <TextLink to={`${LISTING_POSTS_PAGE}/id/${id}`}>
          <HiOutlineExternalLink />
          View Details
        </TextLink>
      </ContentWrapper>
    </ProductCard>
  );
};
