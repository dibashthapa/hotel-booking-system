import { ProductGrid } from "components/Product/index.style";
import { Product } from "components/Product";
import { useQuery } from "react-query";
import Api from "services/api";
import { Container } from "@hotel-ui/Container";
import { AxiosError } from "axios";
const api = new Api(false);
export const Listing = () => {
  const { isLoading, error, data, isFetching } = useQuery<any, AxiosError>(
    "rooms",
    () => api.get("rooms").then((res) => res.data)
  );
  console.log(data);

  return isLoading || isFetching ? (
    <p>Loading ...</p>
  ) : error ? (
    <span>Error : {error?.response?.data.message}</span>
  ) : (
    <Container>
      <ProductGrid>
        {data?.map((page: any) => (
          <Product
            hotel={page.name}
            price={page.price}
            gallery={page.gallery}
            location="Kathmandu , Nepal"
            key={page._id}
            id={page._id}
          />
        ))}
      </ProductGrid>
    </Container>
  );
};
