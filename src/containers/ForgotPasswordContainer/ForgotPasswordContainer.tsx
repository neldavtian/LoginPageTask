import { Box, Button } from "@mui/material";
import CustomInput from "../../components/CustomInput";
import "./forgotPasswordStyle.css";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { string, object } from "yup";
import { fetchResetPassword } from "../../services/fetchResetPassword";
import { yupResolver } from "@hookform/resolvers/yup";

export interface IEmailValid {
  email: string;
}

const ForgotPasswordContainer = () => {
  const schema = object().shape({
    email: string()
      .required("Email is a required field.")
      .email("Not valid email!"),
  });

  const navigate = useNavigate();

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<IEmailValid>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: IEmailValid) => {
    if (data.email) {
      fetchResetPassword({
        email: data.email,
        redirect_url: "https://auth-qa.qencode.com/password-set",
      })
        .catch(console.error);
      navigate("/setpassword");
    }
  };

  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      component={"form"}
      className="forgotPasswordContainer"
    >
      <CustomInput
        placeholder="Enter your email"
        control={control}
        errors={errors}
        type="email"
        name="email"
      />
      <Button
        variant="contained"
        sx={{
          width: "100%",
          height: "48px",
          borderRadius: "8px",
        }}
        type="submit"
      >
        Send
      </Button>
    </Box>
  );
};

export default ForgotPasswordContainer;
