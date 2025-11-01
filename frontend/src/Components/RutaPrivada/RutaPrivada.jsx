import React, { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useUser } from "../../context/UserContext";
import { getUsuarioActual } from "../../api/auth";
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, Typography } from "@mui/material";

export default function RutaPrivada({ adminOnly = false }) {
  const { user } = useUser();
  const [loading, setLoading] = useState(true);
  const [usuario, setUsuario] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchUsuario = async () => {
      if (user) {
        try {
          const data = await getUsuarioActual();
          setUsuario(data);

          // Verificar si es admin
          if (adminOnly && !data.is_superuser) {
            setShowModal(true);
          }
        } catch (error) {
          console.error("Error al obtener usuario:", error);
        }
      }
      setLoading(false);
    };

    fetchUsuario();
  }, [user, adminOnly]);

  const handleCloseModal = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    window.location.href = "/login";
  };

  if (loading) return <p>Cargando...</p>;

  if (!user) return <Navigate to="/login" replace />;

  return (
    <>
      <Outlet />
      
      <Dialog open={showModal} onClose={handleCloseModal}>
        <DialogTitle>Acceso Denegado</DialogTitle>
        <DialogContent>
          <Typography>No tiene credenciales de administrador.</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseModal} variant="contained" color="primary">
            Ir al Login
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
