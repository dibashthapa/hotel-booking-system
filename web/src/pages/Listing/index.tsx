import { ProductGrid } from "components/Product/index.style";
import { Product } from "components/Product";
import { LoadingCard } from "components/LoadingCard";
import { useQuery } from "react-query";
import Api from "services/api";
import { Container } from "@hotel-ui/Container";
import { Flex } from "@hotel-ui/Flex";
import { Map } from "components/Map";
import { AxiosError } from "axios";
import { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Marker, Popup } from "react-leaflet";
import { NOT_FOUND } from "settings/constant";
import { MarkerWrapper } from "./index.style";
const api = new Api(false);

export const Listing = () => {
  const history = useHistory();
  const { isLoading, error, data, isFetching } = useQuery<any, AxiosError>(
    "rooms",
    () => api.get("rooms").then((res) => res.data)
  );

  useEffect(() => {
    if (error?.response?.status === 404) {
      history.push(NOT_FOUND);
    }
  }, [isLoading, isFetching]);

  return (
    <Container>
      {isLoading || isFetching ? (
        <ProductGrid>
          <LoadingCard />
        </ProductGrid>
      ) : error ? (
        <span>Error : {error?.response?.data.message}</span>
      ) : (
        <>
          <Map>
            {data?.map((page: any) => (
              <Marker
                position={[page.hotel.location.lat, page.hotel.location.lon]}
                key={page._id}
              >
                <Popup>
                  <MarkerWrapper>
                    <Product
                      hotel={page.name}
                      price={page.price}
                      gallery={page.gallery}
                      location={page.hotel.location.name}
                      id={page._id}
                    />
                  </MarkerWrapper>
                </Popup>
              </Marker>
            ))}
          </Map>
          <ProductGrid>
            {data?.map((page: any) => (
              <Product
                hotel={page.name}
                price={page.price}
                gallery={page.gallery}
                location={page.hotel.location.name}
                key={page._id}
                id={page._id}
              />
            ))}
          </ProductGrid>
        </>
      )}
    </Container>
  );
};
