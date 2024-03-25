import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { FC, useState } from "react";
import { Control, Controller, FieldErrors, FieldValues } from "react-hook-form";
import { IFormLogin } from "../../types/loginFormTypes";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import "./CustomInputStyle.css";

interface ICustomInputProps<TFormData extends FieldValues = any> {
  type: "email" | "password";
  errors: FieldErrors<IFormLogin>;
  control: Control<TFormData>;
  placeholder: string;
  name: "password" | "confirmPassword" | "email";
}

const CustomInput: FC<ICustomInputProps> = ({
  placeholder,
  type,
  control,
  errors,
  name,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Box component={"div"} className="inputContainer">
      <Controller
        control={control}
        name={name}
        render={({ field: { onBlur, onChange }, fieldState: { error } }) => (
          <TextField
            className="input"
            id={name}
            name={name}
            type={
              type === "password" ? (showPassword ? "text" : "password") : type
            }
            onChange={onChange}
            onBlur={onBlur}
            placeholder={placeholder}
            InputProps={{
              endAdornment: type === "password" && (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {showPassword ? (
                      <VisibilityOffOutlinedIcon />
                    ) : (
                      <RemoveRedEyeOutlinedIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            error={!!error}
          />
        )}
      />
      {errors ? (
        <Typography
          margin={"10px"}
          variant="caption"
          height="20px"
          color={"black"}
          marginBottom={"20px"}
        >
          {errors[type]?.message}
        </Typography>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default CustomInput;
