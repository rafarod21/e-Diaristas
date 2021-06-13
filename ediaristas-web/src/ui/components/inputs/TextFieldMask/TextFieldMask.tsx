import React from "react";
import InputMaask from "react-input-mask";
import { OutlinedTextFieldProps } from "@material-ui/core";

import TextField from "ui/components/inputs/TextField/TextField";

export interface TextFieldMaskProps extends OutlinedTextFieldProps {
  mask: string;
}

const TextFieldMask: React.FC<TextFieldMaskProps> = ({
  mask,
  value,
  onChange,
  ...props
}) => {
  return (
    <InputMaask mask={mask} value={value} onChange={onChange}>
      {() => <TextField {...props} />}
    </InputMaask>
  );
};

export default TextFieldMask;
