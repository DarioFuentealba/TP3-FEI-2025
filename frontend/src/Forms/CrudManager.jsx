import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  Paper,
  MenuItem,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { useApi } from "../hooks/useApi";

export default function CrudManager({ resource, fields }) {
  const { data, createItem, updateItem, deleteItem } = useApi(resource);
  const { handleSubmit, control, reset, setValue } = useForm();
  const [editingId, setEditingId] = useState(null);

  // Hooks para cargar selects dinámicos
  const selectsHooks = {};
  fields.forEach((f) => {
    if (f.type === "select" && f.optionsResource) {
      selectsHooks[f.name] = useApi(f.optionsResource);
    }
  });

  const handleEdit = (item) => {
    setEditingId(item.id);
    Object.keys(item).forEach((key) => setValue(key, item[key]));
  };

  const onSubmit = async (formData) => {
    try {
      if (editingId) await updateItem(editingId, formData);
      else await createItem(formData);
      reset();
      setEditingId(null);
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("¿Seguro que deseas eliminar este elemento?")) return;
    await deleteItem(id);
  };

  return (
    <Grid container spacing={4} sx={{ mt: 2 }}>
      {/* Formulario */}
      <Grid item xs={12} md={5}>
        <Card>
          <CardContent>
            <Typography variant="h6" gutterBottom>
              {editingId ? `Editar ${resource}` : `Crear ${resource}`}
            </Typography>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={2}>
                {fields.map((field) => (
                  <Grid item xs={12} key={field.name}>
                    <Controller
                      name={field.name}
                      control={control}
                      defaultValue={field.type === "checkbox" ? false : ""}
                      render={({ field: controllerField }) => {
                        // Checkbox
                        if (field.type === "checkbox") {
                          return (
                            <FormControlLabel
                              control={
                                <Checkbox
                                  {...controllerField}
                                  checked={controllerField.value}
                                />
                              }
                              label={field.label}
                            />
                          );
                        }

                        // Select dinámico
                        if (field.type === "select") {
                          const hook = selectsHooks[field.name];
                          const options = field.options || hook?.data || [];

                          return (
                            <TextField
                              {...controllerField}
                              select
                              fullWidth
                              label={field.label}
                            >
                              {options.map((opt) => (
                                <MenuItem key={opt.id || opt.value} value={opt.id || opt.value}>
                                  {opt.nombre || opt.label}
                                </MenuItem>
                              ))}
                            </TextField>
                          );
                        }

                        // File
                        if (field.type === "file") {
                          return (
                            <input
                              type="file"
                              accept="image/*"
                              onChange={(e) =>
                                controllerField.onChange(e.target.files[0])
                              }
                            />
                          );
                        }

                        // Text/Number
                        return (
                          <TextField
                            {...controllerField}
                            label={field.label}
                            fullWidth
                            type={field.type}
                          />
                        );
                      }}
                    />
                  </Grid>
                ))}

                <Grid item xs={12}>
                  <Button type="submit" variant="contained" fullWidth>
                    {editingId ? "Actualizar" : "Crear"}
                  </Button>
                  {editingId && (
                    <Button
                      variant="outlined"
                      color="secondary"
                      fullWidth
                      sx={{ mt: 1 }}
                      onClick={() => {
                        reset();
                        setEditingId(null);
                      }}
                    >
                      Cancelar edición
                    </Button>
                  )}
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>

      {/* Tabla */}
      <Grid item xs={12} md={7}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Lista de {resource}
          </Typography>
          <Table>
            <TableHead>
              <TableRow>
                {fields.map((f) => (
                  <TableCell key={f.name}>{f.label}</TableCell>
                ))}
                <TableCell>Acciones</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((item) => (
                <TableRow key={item.id}>
                  {fields.map((f) => (
                    <TableCell key={f.name}>
                      {f.type === "checkbox"
                        ? item[f.name]
                          ? "✅"
                          : "❌"
                        : f.type === "file"
                        ? item[f.name] && (
                            <img
                              src={item[f.name]}
                              alt={f.label}
                              width="50"
                            />
                          )
                        : item[f.name]}
                    </TableCell>
                  ))}
                  <TableCell>
                    <IconButton color="primary" onClick={() => handleEdit(item)}>
                      <Edit />
                    </IconButton>
                    <IconButton color="error" onClick={() => handleDelete(item.id)}>
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </Grid>
    </Grid>
  );
}
