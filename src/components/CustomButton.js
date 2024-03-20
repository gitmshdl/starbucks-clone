import { Button } from "@mui/material";
import React from "react";

function CustomButton({ v = "outlined", color, btnText, fontSize = "1rem" }) {
  return (
    <Button
      size="small"
      variant={v}
      sx={{
        textTransform: "none",
        color: { color },
        border: `1px ${color} solid`,
        borderRadius: "50px",
        fontSize: { fontSize },
        fontWeight: "bold",
      }}
    >
      {btnText}
    </Button>
  );
}

export default CustomButton;
