import { Skeleton } from "antd";
export const LoadingCard = () => {
  return (
    <>
      <Skeleton.Button
        size="large"
        shape="square"
        active
        style={{ height: "200px", width: "200px" }}
      ></Skeleton.Button>
      <Skeleton.Button
        size="large"
        active
        shape="square"
        style={{ height: "200px", width: "200px" }}
      ></Skeleton.Button>
      <Skeleton.Button
        size="large"
        active
        shape="square"
        style={{ height: "200px", width: "200px" }}
      ></Skeleton.Button>
      <Skeleton.Button
        active
        size="large"
        shape="square"
        style={{ height: "200px", width: "200px" }}
      ></Skeleton.Button>
    </>
  );
};
