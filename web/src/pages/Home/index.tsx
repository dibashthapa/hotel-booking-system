import { Container, SearchBox, SearchBoxContainer } from "./index.style";
import { Text, GlideCarousel, GlideSlide } from "@hotel-ui";
import { SearchForm } from "components/Search";

export const Home = () => {
  return (
    <Container>
      <GlideCarousel
        options={{ gap: 0, autoplay: 5000, animationDuration: 1000 }}
        numberOfBullets={3}
        bullets={true}
      >
        <>
          <GlideSlide>
            <img
              src="https://images.unsplash.com/photo-1534215782964-d58601aa091c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt="Banner 1"
            />
          </GlideSlide>
          <GlideSlide>
            <img
              src="https://images.unsplash.com/photo-1611516491426-03025e6043c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1191&q=80"
              alt="Banner 2"
            />
          </GlideSlide>
          <GlideSlide>
            <img
              src="https://images.unsplash.com/photo-1574830639539-5874074dd3b2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
              alt="Banner 3"
            />
          </GlideSlide>
        </>
      </GlideCarousel>
      <SearchBox>
        <SearchBoxContainer>
          <h2 style={{ margin: "0px" }}>Latest Reviews. Lowest Prices</h2>
          <Text marginBottom="10px">
            {" "}
            Compares prices from booking sites to help you find the lowest price
            on the right hotel for you
          </Text>
          <SearchForm />
        </SearchBoxContainer>
      </SearchBox>
    </Container>
  );
};
