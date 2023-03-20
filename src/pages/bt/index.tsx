import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Button, TextField } from "@mui/material";

function BT() {
  const [numA, setNumA] = useState(Number);
  const [numB, setNumB] = useState(Number);
  const [numC, setNumC] = useState(Number);
  const [value, setValue] = useState(Number);
  const [value2, setValue2] = useState(Number);
  const [msgErr, setMsgErr] = useState(String);

  const handleSetNum = (e: any, type: string) => {
    if (type == "numA") {
      setNumA(e.target.value);
    } else if (type == "numB") {
      setNumB(e.target.value);
    } else {
      setNumC(e.target.value);
    }
  };

  const handleAdd = () => {
    const delta = Number(numB * numB) - 4 * Number(numA) * Number(numC);
    console.log(delta);

    if (delta < 0) {
      setMsgErr("Phương trình vô nghiệm");
    } else if (delta == 0) {
      let result = Number(Number(-numB) / (2 * numA));
      setValue(result);
    } else {
      let x1 = Number((Number(-numB) - Math.sqrt(delta)) / (2 + Number(numA)));
      let x2 = Number((Number(-numB) + Math.sqrt(delta)) / (2 + Number(numA)));
      setValue(x1);
      setValue2(x2);
    }
  };

  return (
    <div>
      <TextField
        id="outlined-password-input"
        label="Number A"
        onChange={(e) => {
          handleSetNum(e, "numA");
        }}
      />
      <TextField
        id="outlined-password-input"
        label="Number B"
        onChange={(e) => {
          handleSetNum(e, "numB");
        }}
      />

      <TextField
        id="outlined-password-input"
        label="Number C"
        onChange={(e) => {
          handleSetNum(e, "numC");
        }}
      />
      <Button onClick={handleAdd} color="primary">
        Tính
      </Button>
      <Typography variant="body1" color="initial">
        x1 = {value}
      </Typography>

      <Typography variant="body1" color="initial">
        x2 = {value2}
      </Typography>
    </div>
  );
}

export default BT;
