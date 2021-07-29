import { Button, Flex, Input, Form, Text } from "@hotel-ui";
import { registerSchema } from "utils/validators";
import { useFormik } from "formik";
import { registerUser } from "auth/actions";
import { useAuth } from "auth";
import { useEffect } from "react";
import { payload } from "auth/authContext";
import { Loading } from "components/Loading";
import { useHistory, useLocation } from "react-router-dom";
import { LocationProps } from "pages/Login";
import { HOME_PAGE } from "settings/constant";
export const SignUp = () => {
  const { dispatch, state } = useAuth();
  const history = useHistory();
  const location = useLocation<LocationProps>();
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values: payload["registerCredentials"]) => {
      if (values) {
        registerUser(dispatch, values);
      }
    },
  });
  useEffect(() => {
    dispatch({ type: "INITIALIZED" });
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
        {formik.touched.name && formik.errors.name && (
          <Text color="red">{formik.errors.name}</Text>
        )}
        <Input
          type="text"
          placeholder="Full Name"
          padding="0px 20px 0px"
          border={formik.touched.name && formik.errors.name ? "danger" : "gray"}
          borderRadius="small"
          height="small"
          borderHover={
            formik.touched.name && formik.errors.name ? "red" : "primary"
          }
          value={formik.values.name}
          id="name"
          onChange={formik.handleChange}
        />
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
          {state.isLoading && <Loading />} SignUp
        </Button>
      </Form>
    </Flex>
  );
};
