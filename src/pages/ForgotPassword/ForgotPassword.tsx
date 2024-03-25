import { Box, Button } from "@mui/material";
import ForgotPasswordContainer from "../../containers/ForgotPasswordContainer";
import Title from "../../components/Title";
import "./ForgotPasswordStyle.css";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const onSubmitToLogin = () => {
    navigate(-1);
  };

  return (
    <Box component={"div"} className="rootPage">
      <Title />
      <Box component={"div"} className="forgotPassword">
        <span className="forgotPasswordText">Forgot Password?</span>
        <ForgotPasswordContainer />
      </Box>
      <Button
        variant="outlined"
        sx={{
          width: "100%",
          marginTop: "48px",
          height: "48px",
          borderRadius: "8px",
        }}
        onClick={onSubmitToLogin}
      >
        Cancel
      </Button>
    </Box>
  );
};

export default ForgotPassword;
