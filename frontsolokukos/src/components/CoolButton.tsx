import React from "react";
import { Button } from "@mui/material";

interface CoolButtonProps {
  value: string;
  iconName?: string;
  colorButton: string;
  colorText: string;
  iconSize?: number;
  fontSize?: number;
  disabled?: boolean;
  loading?: boolean;
  pressCoolButton: Function;
}

export const CoolButton: React.FC<CoolButtonProps> = ({
  value,
  iconName,
  colorButton,
  colorText,
  iconSize,
  fontSize = 18,
  disabled = false,
  loading = false,
  pressCoolButton,
}) => {
  const iconSrc = `@mui/material-icons/${iconName}`;

  return (
    <div>
      <Button
        variant="contained"
        color="primary"
        style={{
          backgroundColor: colorButton,
          color: colorText,
          fontSize: `${fontSize}px`,
        }}
        disabled={disabled || loading}
        onClick={() => pressCoolButton()}
        startIcon={
          <i className={iconSrc} style={{ fontSize: `${iconSize}px` }} />
        }
      >
        {value}
      </Button>
    </div>
  );
};
