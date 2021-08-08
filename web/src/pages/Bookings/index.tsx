import { ProductGrid } from "components/Product/index.style";
import { Product } from "components/Product";
import { useQuery } from "react-query";
import Api from "services/api";
import { Container } from "@hotel-ui/Container";
import { Map } from "components/Map";
import { AxiosError } from "axios";
const api = new Api(true);
export const Bookings = () => {
  const { isLoading, error, data, isFetching } = useQuery<any, AxiosError>(
    "rooms",
    () => api.get("bookings").then((res) => res.data)
  );

  return isLoading || isFetching ? (
    <p>Loading ...</p>
  ) : error ? (
    <span>Error : {error?.response?.data.message}</span>
  ) : (
    <Container>
      <ProductGrid>
        {data?.map((page: any) => (
          <Product
            hotel={page.room.name}
            price={page.room.price}
            gallery={page.room.gallery}
            key={page._id}
            id={page._id}
            booking
          />
        ))}
      </ProductGrid>
    </Container>
  );
};
