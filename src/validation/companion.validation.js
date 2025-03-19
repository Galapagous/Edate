import * as yup from "yup";

export const listenerProfile = yup.object().shape({
  username: yup.string().required("Username is required"),
});
