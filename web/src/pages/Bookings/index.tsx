import { useEffect } from "react";
import { ProductGrid } from "components/Product/index.style";
import { LoadingCard } from "components/LoadingCard";
import { Product } from "components/Product";
import { useQuery } from "react-query";
import Api from "services/api";
import { Container } from "@hotel-ui/Container";
import { useHistory } from "react-router-dom";
import { AxiosError } from "axios";
import { NOT_FOUND } from "settings/constant";
const api = new Api(true);
export const Bookings = () => {
  const history = useHistory();
  const { isLoading, error, data, isFetching } = useQuery<any, AxiosError>(
    "rooms",
    () => api.get("bookings").then((res) => res.data)
  );
  useEffect(() => {
    if (error?.response?.status === 404) {
      history.push(NOT_FOUND);
    }
    console.log(data);
  }, [isLoading, isFetching]);
  return (
    <Container>
      <ProductGrid>
        {isLoading || isFetching ? (
          <LoadingCard />
        ) : error ? (
          <span>Error : {error?.response?.data.message}</span>
        ) : (
          data?.map((page: any) => (
            <Product
              hotel={page.room.name}
              price={page.room.price}
              gallery={page.room.gallery}
              location={page.location}
              key={page._id}
              id={page._id}
              booking
            />
          ))
        )}
      </ProductGrid>
    </Container>
  );
};
