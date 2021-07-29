import { Button, Flex, Input, Form, Text } from "@hotel-ui";
import { loginSchema } from "utils/validators";
import { useFormik } from "formik";
import { loginUser } from "auth/actions";
import { useAuth } from "auth";
import { useEffect } from "react";
import { payload } from "auth/authContext";
import { Loading } from "components/Loading";
import { useHistory, useLocation } from "react-router-dom";
import { HOME_PAGE } from "settings/constant";

export interface LocationProps {
  prevLocation: string;
}
export const Login = () => {
  const { dispatch, state } = useAuth();
  const history = useHistory();
  const location = useLocation<LocationProps>();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },

    validationSchema: loginSchema,
    onSubmit: (values: payload["credentials"]) => {
      if (values) {
        loginUser(dispatch, values);
      }
    },
  });

  useEffect(() => {
    if (state.isUserLoggedIn) {
      history.push(
        location.state?.prevLocation ? location.state?.prevLocation : HOME_PAGE
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state.isUserLoggedIn]);
  return (
    <Flex justify="center" height="calc(100vh - 72px)" align="center">
      <Form autoComplete="off" noValidate onSubmit={formik.handleSubmit}>
        {state.errorMessage && <Text color="red">{state.errorMessage}</Text>}
        {formik.touched.email && formik.errors.email && (
          <Text color="red">{formik.errors.email}</Text>
        )}
        <Input
          type="email"
          autoComplete="off"
          placeholder="Email"
          padding="0px 20px 0px"
          border={
            formik.touched.email && formik.errors.email ? "danger" : "gray"
          }
          borderRadius="small"
          height="small"
          borderHover={
            formik.touched.email && formik.errors.email ? "red" : "primary"
          }
          value={formik.values.email}
          id="email"
          onChange={formik.handleChange}
        />
        {formik.touched.password && formik.errors.password && (
          <Text color="red">{formik.errors.password}</Text>
        )}
        <Input
          type="password"
          autoComplete="off"
          placeholder="Password"
          border={
            formik.touched.password && formik.errors.password
              ? "danger"
              : "gray"
          }
          borderRadius="small"
          height="small"
          id="password"
          borderHover={
            formik.touched.password && formik.errors.password
              ? "red"
              : "primary"
          }
          onChange={formik.handleChange}
          value={formik.values.password}
          padding="0px 20px 0px"
        />
        <Button width="100%" size="small">
          {state.isLoading && <Loading />} Login
        </Button>
      </Form>
    </Flex>
  );
};
