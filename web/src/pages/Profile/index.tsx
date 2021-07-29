import { Button, Flex, Input, Form } from "@hotel-ui";

export const Profile = () => {
  return (
    <Flex justify="center" height="calc(100vh - 72px)" align="center">
      <Form autoComplete="off" noValidate>
        <Input
          type="text"
          autoComplete="off"
          placeholder="Full Name"
          padding="0px 20px 0px"
          borderRadius="small"
          height="small"
          id="email"
        />
        <Input
          type="password"
          autoComplete="off"
          placeholder="Password"
          borderRadius="small"
          height="small"
          id="password"
          padding="0px 20px 0px"
        />
        <Button width="100%" size="small">
          Update
        </Button>
      </Form>
    </Flex>
  );
};
