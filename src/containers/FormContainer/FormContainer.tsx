import { Box, Button } from "@mui/material";
import CustomInput from "../../components/CustomInput";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IFormLogin } from "../../types/loginFormTypes";
import { string, object } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { fetchLogin } from "../../services/fetchLogin";
import useLocalStorage from "../../hooks/useLocalStorage";
import { Link } from "react-router-dom";
import "./FormContainerStyle.css";

function FormContainer() {
  const schema = object().shape({
    email: string()
      .required("Email is a required field.")
      .email("Not valid email!"),
    password: string()
      .min(8, "Password must be at least 8 characters long")
      .max(50)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
        "Password must contain at least one numeric, one uppercase letter, and one lowercase letter"
      ),
  });

  const { changeValue: changeUser } = useLocalStorage<string>(
    "access_token",
    null
  );

  const [isEmailExist, setIsEmailExist] = useState<boolean>(false);

  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<IFormLogin>({
    resolver: yupResolver(schema),
  });

  const onSubmitForPasswordInput = () => {
    setIsEmailExist(true);
  };

  const onSubmit = (data: IFormLogin) => {
    if (
      data.email === "test+ui@qencode.com" &&
      data.password === "C4aLE2dRM7QE5mT*"
    ) {
      fetchLogin({
        email: data.email,
        password: data.password,
      })
        .then(({ data }) => {
          if (data.access_token) {
            changeUser(data.access_token);
          }
        })
        .catch(console.error);
    }
    reset();
  };

  return (
    <Box
      width={"100%"}
      component={"form"}
      onSubmit={
        !isEmailExist
          ? handleSubmit(onSubmitForPasswordInput)
          : handleSubmit(onSubmit)
      }
    >
      <CustomInput
        placeholder="Work email"
        control={control}
        errors={errors}
        type="email"
        name="email"
      />
      {isEmailExist && (
        <>
          <CustomInput
            placeholder="Password"
            control={control}
            errors={errors}
            type="password"
            name="password"
          />
          <h5>
            <Link to={"forgot"}>Forgot your password?</Link>
          </h5>
        </>
      )}
      <Button
        sx={{ width: "100%", borderRadius: "8px", height: "48px" }}
        type="submit"
        variant="contained"
      >
        Log in to Qencode
      </Button>
    </Box>
  );
}

export default FormContainer;
