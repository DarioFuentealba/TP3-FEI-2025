import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  IconButton,
  Paper,
  Card,
  CardContent,
  Box,
  Stack,
  TableContainer,
} from "@mui/material";
import { Edit, Delete, ArrowBack } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useApi } from "../hooks/useApi";
import { SelectField } from "../Components/SelectField/SelectField";

export default function CrudManager({ resource, fields }) {
  const { data, createItem, updateItem, deleteItem } = useApi(resource);
  const { handleSubmit, control, reset, setValue } = useForm();
  const [editingId, setEditingId] = useState(null);

  console.log("DATA => ", data);
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

  // Campo "subcategoria" al final
  const subcategoriaField = fields.find(
    (f) => f.name.toLowerCase() === "subcategoria"
  );
  const otherFields = fields.filter(
    (f) => f.name.toLowerCase() !== "subcategoria"
  );

  return (
    <Box sx={{ mt: 3, px: { xs: 2, md: 6 }, pb: 6 }}>
      {/* 🔙 Botón volver atrás */}
      <Box sx={{ mb: 2 }}>
        <Button
          component={Link}
          to="/"
          startIcon={<ArrowBack />}
          variant="text"
          sx={{ textTransform: "none" }}
        >
          Volver atrás
        </Button>
      </Box>

      {/* 🧾 FORMULARIO */}
      <Card sx={{ mb: 4, p: 2 }}>
        <CardContent>
          <Typography variant="h6" gutterBottom>
            {editingId ? `Editar ${resource}` : `Crear ${resource}`}
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2}>
              {/* Campos dinámicos */}
              {otherFields.map((field) => (
                <Controller
                  key={field.name}
                  name={field.name}
                  control={control}
                  defaultValue={field.type === "checkbox" ? false : ""}
                  render={({ field: controllerField }) => {
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

                    if (field.type === "select") {
                      return (
                        <SelectField
                          key={field.name}
                          field={field}
                          control={control}
                        />
                      );
                    }

                    if (field.type === "file") {
                      return (
                        <Box>
                          <Typography variant="body2" sx={{ mb: 0.5 }}>
                            {field.label}
                          </Typography>
                          <input
                            type="file"
                            accept={field.accept || "image/*"}
                            onChange={(e) =>
                              controllerField.onChange(e.target.files[0])
                            }
                          />
                        </Box>
                      );
                    }

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
              ))}

              {/* Campo subcategoría al final */}
              {subcategoriaField && (
                <Controller
                  name={subcategoriaField.name}
                  control={control}
                  render={({ field: controllerField }) => (
                    <SelectField
                      key={subcategoriaField.name}
                      field={subcategoriaField}
                      control={control}
                      {...controllerField}
                    />
                  )}
                />
              )}

              {/* Botones */}
              <Stack spacing={1}>
                <Button type="submit" variant="contained" fullWidth>
                  {editingId ? "Actualizar" : "Crear"}
                </Button>
                {editingId && (
                  <Button
                    variant="outlined"
                    color="secondary"
                    fullWidth
                    onClick={() => {
                      reset();
                      setEditingId(null);
                    }}
                  >
                    Cancelar edición
                  </Button>
                )}
              </Stack>
            </Stack>
          </form>
        </CardContent>
      </Card>

      {/* 📊 TABLA DE REGISTROS */}
      <Paper sx={{ p: 2 }}>
        <Typography variant="h6" gutterBottom>
          Lista de {resource}
        </Typography>

        <TableContainer sx={{ maxHeight: 500, overflowY: "auto" }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {fields.map((f) => (
                  <TableCell
                    key={f.name}
                    sx={{
                      fontWeight: "bold",
                      backgroundColor: "#f5f5f5",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      maxWidth: 200,
                    }}
                  >
                    {f.label}
                  </TableCell>
                ))}
                <TableCell sx={{ fontWeight: "bold", backgroundColor: "#f5f5f5" }}>
                  Acciones
                </TableCell>
              </TableRow>
            </TableHead>

            <TableBody>
              {data.map((item) => (
                <TableRow
                  key={item.id}
                  hover
                  sx={{
                    "&:nth-of-type(odd)": { backgroundColor: "#fafafa" },
                  }}
                >
                  {fields.map((f) => (
                    <TableCell
                      key={f.name}
                      sx={{
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                        maxWidth: 250,
                      }}
                      title={item[f.name]} // Tooltip con texto completo
                    >
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
                    <IconButton
                      color="error"
                      onClick={() => handleDelete(item.id)}
                    >
                      <Delete />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
