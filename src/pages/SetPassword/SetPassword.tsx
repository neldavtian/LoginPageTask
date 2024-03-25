import { Box, Button } from "@mui/material";
import Title from "../../components/Title";
import "./setPasswordStyle.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
// import { ICheckPasswords } from "../../types/loginFormTypes";
import { yupResolver } from "@hookform/resolvers/yup";
import CustomInput from "../../components/CustomInput";
import { fetchSetPassword } from "../../services/fetchCreateNewPassword";
import useLocalStorage from "../../hooks/useLocalStorage";
import { fetchHealthCheck } from "../../services/fetchHealtCheck";

export interface ICheckPasswords {
  password: string;
  confirmPassword: string;
}

const SetPassword = () => {
  const schema = yup.object().shape({
    password: yup
      .string()
      .required("Please enter new password")
      .min(8, "Password must be at least 8 characters long")
      .max(50)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
        "Password must contain at least one numeric, one uppercase letter, and one lowercase letter"
      ),
    confirmPassword: yup.string().required("Please repeat new password"),
  });

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<ICheckPasswords>({
    resolver: yupResolver(schema),
  });

  const { value: access_token } = useLocalStorage<string>("access_token", null);

  const onSubmit = (data: ICheckPasswords) => {
    if (data.password !== data.confirmPassword) {
      throw new Error("Not valid password!");
    } else {
      const createNewPasswordPayload = {
        token: access_token,
        secret: "secret",
        password: data.password,
        password_confirm: data.confirmPassword,
      };
      fetchSetPassword(createNewPasswordPayload).catch(console.error);
      fetchHealthCheck();
    }
  };

  return (
    <Box component={"div"} className="rootPage">
      <Title />
      <p>Create new Password?</p>
      <Box
        component={"form"}
        className="formBox"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h4 className="passwordText"> Password </h4>
        <CustomInput
          control={control}
          errors={errors}
          placeholder="Password"
          type="password"
          name="password"
        />
        <h4 className="passwordText"> Confirm password </h4>
        <CustomInput
          control={control}
          errors={errors}
          placeholder="Password"
          type="password"
          name="confirmPassword"
        />
        <Button
          sx={{
            marginTop: "10px",
            width: "100%",
            height: "48px",
            borderRadius: "8px",
          }}
          variant="contained"
          type="submit"
        >
          Reset Password
        </Button>
      </Box>
    </Box>
  );
};

export default SetPassword;
