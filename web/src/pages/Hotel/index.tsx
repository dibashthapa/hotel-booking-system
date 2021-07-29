import React from "react";
import Api from "services/api";
import { useQuery } from "react-query";
import {
  ImageGallery,
  MiddleContent,
  DescriptionContainer,
} from "./index.style";
import { Container } from "@hotel-ui/Container";
import { useParams } from "react-router-dom";
import { AxiosError } from "axios";

const api = new Api(false);
export const Hotel = () => {
  const { id } = useParams<{ id: string }>();
  const { isLoading, error, data, isFetching } = useQuery<any, AxiosError>(
    "hotels",
    () => api.get(`hotels/id/${id}`).then((res) => res.data)
  );
  return isLoading || isFetching ? (
    <p>Loadding</p>
  ) : (
    <Container>
      <ImageGallery>
        <img src={data?.gallery[0]?.replace("_thumb", "")} />
        <img src={data?.gallery[1]?.replace("_thumb", "")} alt="" />
        <img src={data?.gallery[2]?.replace("_thumb", "")} alt="" />
      </ImageGallery>
      <MiddleContent>
        <DescriptionContainer>
          In South Williamsburg only a few blocks inland from the East River,
          Marlo &Sons is a rustic respite with nice wine, good cocktails, and
          excellent snacking fare such as oysters, local cheese, and potato
          tortilla. But thereâ€™s more: seasonal salads and soups, the famous
          brick chicken, a dimly lit space outfitted in various types of
          wood(this is an Andrew Tarlow restaurant, after all). In many ways.
        </DescriptionContainer>
      </MiddleContent>
    </Container>
  );
};
