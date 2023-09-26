import React from "react";

import { TextField } from "@mui/material";

type Mode = "outlined" | "flat";
type KeyboadType = "default" | "number-pad";

interface StandardInputProps {
  value: string;
  label: string;
  name: string;
  mode?: Mode;
  keyboardType?: KeyboadType;
  secureTextEntry?: boolean;
  onChange: (input: string, text: string) => void;
}

export const StandardInput = ({
  value,
  label,
  name,
  mode,
  keyboardType,
  onChange,
}: StandardInputProps) => {
  return (
    <div style={styles.inputContainer}>
      <TextField
        variant="outlined"
        value={value}
        label={label}
        fullWidth
        onChange={(e) => onChange(name, e.target.value)}
        type={keyboardType === "number-pad" ? "number" : "text"}
        style={styles.input}
      />
    </div>
  );
};

const styles = {
  inputContainer: {
    width: "100%",
  },
  input: {
    backgroundColor: "#fff",
    height: 60,
    fontSize: 18,
    marginBottom: 5,
  },
};
