import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

interface PasswordInputProps {
  value: string;
  label: string;
  name: string;
  onChange: (input: string, text: string) => void;
  //   handleInputChange: (name: string, text: string) => void;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  value,
  label,
  name,
  onChange,
}) => {
  const inputStyles = {
    height: "60px",
    fontSize: "22px",
    marginBottom: "5px",
  };

  return (
    <div className="input-container">
      <TextField
        type="password"
        id={name}
        name={name}
        label={label}
        variant="outlined"
        fullWidth
        value={value}
        onChange={(e) => onChange(name, e.target.value)}
        style={inputStyles}
      />
    </div>
  );
};
