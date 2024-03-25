import { Box, Divider } from "@mui/material";
import CustomButton from "../../components/CustomButton";
import FormContainer from "../../containers/FormContainer";
import "./LoginStyle.css";
import Title from "../../components/Title/Title";

function Login() {
  return (
    <Box component={"div"} className="rootPage">
      <Title />
      <Box component={"div"} className="login">
        <p>Log in to your account</p>
        <Box component={"div"} className="links">
          <CustomButton type="Google" />
          <CustomButton type="Github" />
        </Box>
        <Box component={"div"} className="divider">
          <Divider />
          <span>OR</span>
          <Divider />
        </Box>
        <FormContainer />
        <h4>
          Is your company new to Qencode? <a href="#">Sign up</a>
        </h4>
      </Box>
    </Box>
  );
}

export default Login;
