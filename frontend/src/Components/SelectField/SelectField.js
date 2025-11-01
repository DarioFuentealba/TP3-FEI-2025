// src/components/SelectField.js
import { Controller } from "react-hook-form";
import { TextField, MenuItem } from "@mui/material";
import { useApi } from "../../hooks/useApi";

export function SelectField({ field, control }) {
  const { data = [], loading } = useApi(field.optionsResource);

  return (
    <Controller
      name={field.name}
      control={control}
      render={({ field: controllerField }) => (
        <TextField
          select
          fullWidth
          label={field.label}
          value={controllerField.value || ""}
          onChange={controllerField.onChange}
          disabled={loading}
        >
          {data.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.nombre}
            </MenuItem>
          ))}
        </TextField>
      )}
    />
  );
}
