import React, { useState, useEffect } from 'react';
import {
  Container,
  Paper,
  Avatar,
  Typography,
  Box,
  Grid,
  Chip,
  TextField,
  Button,
  Divider,
  Card,
  CardContent,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Tab,
  Tabs,
  Rating,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  CircularProgress,
  Alert,
  Snackbar
} from '@mui/material';
import {
  Edit,
  Computer,
  Memory,
  Storage,
  Videocam,
  Favorite,
  History,
  Settings,
  Star,
  Delete,
  Lock,
  Notifications,
  Add
} from '@mui/icons-material';
import { useUser } from '../../context/UserContext';
import BotonReporte from '../../Components/Botones/BotonReporte/BotonReporte';
import axios from 'axios';

// Configuración de axios
const API_URL = 'http://localhost:8000/api/usuario/'; // Ajusta según tu configuración

// Función helper para obtener el token
const getAuthHeaders = () => {
  const token = localStorage.getItem('access_token');
  return {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json'
  };
};

export default function PerfilUsuario() {
  const [tabValue, setTabValue] = useState(0);
  const [editMode, setEditMode] = useState(false);
  const [settingsDialog, setSettingsDialog] = useState(false);
  const { user, checkingAuth } = useUser();

  // Estados para datos del perfil
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  // Estados para edición
  const [editData, setEditData] = useState({
    biografia: '',
    experiencia: ''
  });

  // Estados para nuevo interés
  const [newInterest, setNewInterest] = useState('');
  const [addingInterest, setAddingInterest] = useState(false);

  // Cargar perfil al montar el componente
  useEffect(() => {
    if (user) {
      loadProfile();
    }
  }, [user]);

  // Función para cargar el perfil
  const loadProfile = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}perfil/`, {
        headers: getAuthHeaders()
      });
      setProfile(response.data);
      setEditData({
        biografia: response.data.biografia || '',
        experiencia: response.data.experiencia || 'principiante'
      });
      setError(null);
    } catch (err) {
      console.error('Error cargando perfil:', err);
      setError('Error al cargar el perfil');
      showSnackbar('Error al cargar el perfil', 'error');
    } finally {
      setLoading(false);
    }
  };

  // Función para actualizar el perfil
  const handleSaveProfile = async () => {
    try {
      const response = await axios.patch(`${API_URL}perfil/`, editData, {
        headers: getAuthHeaders()
      });
      setProfile(response.data);
      setEditMode(false);
      showSnackbar('Perfil actualizado correctamente', 'success');
    } catch (err) {
      console.error('Error actualizando perfil:', err);
      showSnackbar('Error al actualizar el perfil', 'error');
    }
  };

  // Función para agregar interés
  const handleAddInterest = async () => {
    if (!newInterest.trim()) return;

    try {
      const response = await axios.post(
        `${API_URL}perfil/add_interest/`,
        { nombre: newInterest },
        { headers: getAuthHeaders() }
      );
      setProfile(response.data);
      setNewInterest('');
      setAddingInterest(false);
      showSnackbar('Interés agregado', 'success');
    } catch (err) {
      console.error('Error agregando interés:', err);
      showSnackbar('Error al agregar interés', 'error');
    }
  };

  // Función para eliminar interés
  const handleRemoveInterest = async (interestName) => {
    try {
      const response = await axios.delete(
        `${API_URL}perfil/remove_interest/`,
        {
          headers: getAuthHeaders(),
          data: { nombre: interestName }
        }
      );
      setProfile(response.data);
      showSnackbar('Interés eliminado', 'success');
    } catch (err) {
      console.error('Error eliminando interés:', err);
      showSnackbar('Error al eliminar interés', 'error');
    }
  };

  // Función para eliminar favorito
  const handleRemoveFavorite = async (favoriteId) => {
    try {
      await axios.delete(
        `${API_URL}perfil/remove_favorite/`,
        {
          headers: getAuthHeaders(),
          data: { favorite_id: favoriteId }
        }
      );
      // Recargar perfil para actualizar favoritos
      loadProfile();
      showSnackbar('Producto eliminado de favoritos', 'success');
    } catch (err) {
      console.error('Error eliminando favorito:', err);
      showSnackbar('Error al eliminar de favoritos', 'error');
    }
  };

  // Función para mostrar snackbar
  const showSnackbar = (message, severity = 'success') => {
    setSnackbar({ open: true, message, severity });
  };

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  // Loading state
  if (checkingAuth || loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 4, display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </Container>
    );
  }

  // No user state
  if (!user) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Alert severity="warning">No hay usuario logueado</Alert>
      </Container>
    );
  }

  // Error state
  if (error && !profile) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Alert severity="error">{error}</Alert>
        <Button onClick={loadProfile} sx={{ mt: 2 }}>Reintentar</Button>
      </Container>
    );
  }

  // Si no hay perfil aún
  if (!profile) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Alert severity="info">Cargando perfil...</Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Snackbar para notificaciones */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>

      {/* Header del perfil */}
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <Avatar
              src={profile.avatar ? `${API_URL}${profile.avatar}` : undefined}
              sx={{ width: 120, height: 120 }}
            >
              {!profile.avatar && profile.user.username.charAt(0).toUpperCase()}
            </Avatar>
          </Grid>
          <Grid item xs>
            <Box display="flex" alignItems="center" gap={2} mb={1}>
              <Typography variant="h4">{profile?.user?.username}</Typography>
              <Chip 
                label={profile.experiencia || 'Principiante'} 
                color="primary" 
                size="small"
              />
            </Box>
            <Typography color="text.secondary" gutterBottom>
              {profile?.user?.email}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Miembro desde {profile?.created_at ? new Date(profile.created_at).toLocaleDateString('es-ES', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              }):''}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              {profile.biografia || 'Sin biografía'}
            </Typography>
            <Box sx={{ mt: 2 }}>
              {profile.interes && profile.interes.map((interest) => (
                <Chip 
                  key={interest.id} 
                  label={interest.nombre}
                  sx={{ mr: 1, mb: 1 }} 
                  variant="outlined"
                  onDelete={editMode ? () => handleRemoveInterest(interest.nombre) : undefined}
                />
              ))}
              {editMode && (
                addingInterest ? (
                  <Box display="inline-flex" gap={1} alignItems="center">
                    <TextField
                      size="small"
                      placeholder="Nuevo interés"
                      value={newInterest}
                      onChange={(e) => setNewInterest(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' && handleAddInterest()}
                    />
                    <Button size="small" onClick={handleAddInterest}>Agregar</Button>
                    <Button size="small" onClick={() => setAddingInterest(false)}>Cancelar</Button>
                  </Box>
                ) : (
                  <Chip 
                    icon={<Add />}
                    label="Agregar interés"
                    onClick={() => setAddingInterest(true)}
                    sx={{ mb: 1 }}
                  />
                )
              )}
            </Box>
          </Grid>
          <Grid item>
            <IconButton 
              color="primary" 
              onClick={() => setEditMode(!editMode)}
              sx={{ mb: 1 }}
            >
              <Edit />
            </IconButton>
            <br />
            <IconButton 
              color="default"
              onClick={() => setSettingsDialog(true)}
            >
              <Settings />
            </IconButton>
          </Grid>
        </Grid>

        {editMode && (
          <Box sx={{ mt: 3 }}>
            <Divider sx={{ mb: 3 }} />
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  label="Biografía"
                  value={editData.bio}
                  onChange={(e) => setEditData({...editData, bio: e.target.value})}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  select
                  fullWidth
                  label="Nivel de experiencia"
                  value={editData.experience_level}
                  onChange={(e) => setEditData({...editData, experience_level: e.target.value})}
                  SelectProps={{
                    native: true,
                  }}
                >
                  <option value="principiante">Principiante</option>
                  <option value="intermedio">Intermedio</option>
                  <option value="experto">Experto</option>
                </TextField>
              </Grid>
              <Grid item xs={12}>
                <Button 
                  variant="contained" 
                  onClick={handleSaveProfile}
                  sx={{ mr: 1 }}
                >
                  Guardar Cambios
                </Button>
                <Button 
                  variant="outlined" 
                  onClick={() => {
                    setEditMode(false);
                    setEditData({
                      bio: profile.bio || '',
                      experience_level: profile.experience_level || 'principiante'
                    });
                  }}
                >
                  Cancelar
                </Button>
              </Grid>
            </Grid>
          </Box>
        )}
      </Paper>

      {/* Mi PC Actual */}
      {profile.pc_specs && (
        <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
          <Box display="flex" alignItems="center" mb={2}>
            <Computer sx={{ mr: 1, color: 'primary.main' }} />
            <Typography variant="h5">Mi PC Actual</Typography>
          </Box>
          <Grid container spacing={2}>
            {profile.pc_specs.cpu_details && (
              <Grid item xs={12} sm={6}>
                <Box display="flex" alignItems="center" mb={1}>
                  <Memory sx={{ mr: 1, fontSize: 20 }} />
                  <Typography variant="body2" color="text.secondary">
                    Procesador:
                  </Typography>
                </Box>
                <Typography variant="body1" fontWeight="bold">
                  {profile.pc_specs.cpu_details.nombre}
                </Typography>
              </Grid>
            )}
            {profile.pc_specs.gpu_details && (
              <Grid item xs={12} sm={6}>
                <Box display="flex" alignItems="center" mb={1}>
                  <Videocam sx={{ mr: 1, fontSize: 20 }} />
                  <Typography variant="body2" color="text.secondary">
                    Tarjeta Gráfica:
                  </Typography>
                </Box>
                <Typography variant="body1" fontWeight="bold">
                  {profile.pc_specs.gpu_details.nombre}
                </Typography>
              </Grid>
            )}
            {profile.pc_specs.ram_details && (
              <Grid item xs={12} sm={6}>
                <Box display="flex" alignItems="center" mb={1}>
                  <Memory sx={{ mr: 1, fontSize: 20 }} />
                  <Typography variant="body2" color="text.secondary">
                    Memoria RAM:
                  </Typography>
                </Box>
                <Typography variant="body1" fontWeight="bold">
                  {profile.pc_specs.ram_details.nombre}
                </Typography>
              </Grid>
            )}
            {profile.pc_specs.disco_details && (
              <Grid item xs={12} sm={6}>
                <Box display="flex" alignItems="center" mb={1}>
                  <Storage sx={{ mr: 1, fontSize: 20 }} />
                  <Typography variant="body2" color="text.secondary">
                    Almacenamiento:
                  </Typography>
                </Box>
                <Typography variant="body1" fontWeight="bold">
                  {profile.pc_specs.disco_details.nombre}
                </Typography>
              </Grid>
            )}
          </Grid>
        </Paper>
      )}

      {/* Tabs de contenido */}
      <Paper elevation={3}>
        <Tabs value={tabValue} onChange={handleTabChange} centered>
          <Tab icon={<Favorite />} label="Favoritos" />
        </Tabs>
        
        <Box sx={{ p: 3 }}>
          {/* Tab Favoritos */}
          {tabValue === 0 && (
            <Grid container spacing={2}>
              {profile.favoritos && profile.favoritos.length > 0 ? (
                profile.favoritos.map((item) => (
                  <Grid item xs={12} sm={6} md={4} key={item.id}>
                    <Card variant="outlined">
                      <CardContent>
                        <Box display="flex" justifyContent="space-between" alignItems="start">
                          <div>
                            <Typography variant="h6" gutterBottom>
                              {item.product_details?.nombre || 'Producto'}
                            </Typography>
                            <Chip 
                              label={item.product_type} 
                              size="small" 
                              sx={{ mb: 1, textTransform: 'uppercase' }} 
                            />
                            <Typography variant="h6" color="primary">
                              ${item.product_details?.precio || '0'}
                            </Typography>
                          </div>
                          <IconButton 
                            size="small" 
                            color="error"
                            onClick={() => handleRemoveFavorite(item.id)}
                          >
                            <Delete />
                          </IconButton>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))
              ) : (
                <Grid item xs={12}>
                  <Typography color="text.secondary" align="center">
                    No tienes productos favoritos aún
                  </Typography>
                </Grid>
              )}
            </Grid>
          )}
        </Box>
      </Paper>

      {/* Dialog de Configuración */}
      <Dialog 
        open={settingsDialog} 
        onClose={() => setSettingsDialog(false)}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle>Configuración de Cuenta</DialogTitle>
        <DialogContent>
          <List>
            <ListItem button>
              <ListItemIcon>
                <Lock />
              </ListItemIcon>
              <ListItemText 
                primary="Cambiar Contraseña"
                secondary="Actualiza tu contraseña de acceso"
              />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <Notifications />
              </ListItemIcon>
              <ListItemText 
                primary="Notificaciones"
                secondary="Configura tus preferencias de notificación"
              />
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSettingsDialog(false)}>
            Cerrar
          </Button>
        </DialogActions>
      </Dialog>
      <BotonReporte/>
    </Container>
  );
}