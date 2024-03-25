import { Box, Button } from "@mui/material";
import { FC } from "react";
import "./CustomButtonStyle.css";
import GoogleIcon from "../../Icons/GoogleSVG";
import GitHubIcon from "../../Icons/GitHubSVG";

interface ICustomButtonProps {
  type: "Google" | "Github";
}

const CustomButton: FC<ICustomButtonProps> = ({ type }) => {
  return (
    <Box component={"div"} className="buttonContainer">
      <Button className="button">
        <Box
          sx={{
            display: "flex",
            width: "100px",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {type === "Google" ? <GoogleIcon /> : <GitHubIcon />}
          <h4 className="links">{type} </h4>
        </Box>
      </Button>
    </Box>
  );
};

export default CustomButton;
