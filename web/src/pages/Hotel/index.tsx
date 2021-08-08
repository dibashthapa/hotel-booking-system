import Api from "services/api";
import { useQuery } from "react-query";
import {
  ImageGallery,
  HotelContainer,
  DescriptionContainer,
} from "./index.style";
import { useParams } from "react-router-dom";
import { AxiosError } from "axios";
import { Text } from "@hotel-ui/Text";
import { Flex } from "@hotel-ui";
import { ReservationForm } from "./ReservationForm";
const api = new Api(true);
export const Hotel = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoading, data, isFetching } = useQuery<any, AxiosError>(
    "rooms",
    () => api.get(`rooms/id/${id}`).then((res) => res.data)
  );

  return isLoading || isFetching ? (
    <p>Loadding</p>
  ) : (
    <HotelContainer>
      <ImageGallery>
        {data?.gallery?.map((url: string, index: number) => (
          <img src={url.replace("_thumb", "")} alt="" key={index} />
        ))}
      </ImageGallery>
      <Flex noWrap basis="40%" justify="space-around" margin="20px 0px">
        <DescriptionContainer>
          <h2>Description</h2>
          <Text fontSize="18px">{data?.description}</Text>
          <Text>What this place offers</Text>
        </DescriptionContainer>
        <ReservationForm
          price={data?.price}
          roomId={data?._id}
          location={data?.hotel.location.name}
        />
      </Flex>
    </HotelContainer>
  );
};
