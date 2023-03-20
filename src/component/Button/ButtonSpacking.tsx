import React from "react";
import Button from "@mui/material/Button";

function ButtonSpacking({ handleChangeSpacking }: any) {
  const arraySpacking = [3, 5, 7, 9];

  return (
    <>
      {arraySpacking.map((item) => {
        return (
          <Button
            onClick={() => handleChangeSpacking(item)}
            variant="text"
            color="primary"
          >
            Value: {item}
          </Button>
        );
      })}
    </>
  );
}

export default ButtonSpacking;
