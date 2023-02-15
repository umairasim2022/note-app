// form
import { useFormContext, Controller } from "react-hook-form";
// @mui
import TextField from "@mui/material/TextField";

import React from "react";

const RHFTextfield = ({ name, other }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <TextField
          {...field}
          fullWidth
          value={
            typeof field.value === "number" && field.value === 0
              ? ""
              : field.value
          }
          error={!!error}
          helperText={error?.message}
          {...other}
        />
      )}
    />
  );
};

export default RHFTextfield;
