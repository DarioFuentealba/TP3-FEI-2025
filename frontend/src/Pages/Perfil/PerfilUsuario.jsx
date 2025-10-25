import React, { useState } from 'react';
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
  DialogActions
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
  Notifications
} from '@mui/icons-material';
import { useUser } from '../../context/UserContext';
import BotonReporte from '../../Components/Botones/BotonReporte/BotonReporte';

export default function PerfilUsuario() {
  const [tabValue, setTabValue] = useState(0);
  const [editMode, setEditMode] = useState(false);
  const [settingsDialog, setSettingsDialog] = useState(false);
  const {user, checkingAuth} = useUser();


  
  
  // Estado del usuario
  const [userData, setUserData] = useState({
    username: 'TechMaster2024',
    email: 'techmaster@ejemplo.com',
    joinDate: '15 de Marzo, 2023',
    bio: 'Entusiasta de la tecnología y gaming. Me encanta armar PCs y compartir conocimientos.',
    avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=TechMaster',
    experienceLevel: 'Experto',
    interests: ['Gaming', 'Programación', 'Overclocking', 'RGB']
  });
  
  // Especificaciones del PC actual
  const [pcSpecs, setPcSpecs] = useState({
    processor: 'AMD Ryzen 9 7950X',
    gpu: 'NVIDIA RTX 4090',
    ram: '32GB DDR5 6000MHz',
    storage: '2TB NVMe SSD + 4TB HDD',
    motherboard: 'ASUS ROG Crosshair X670E'
  });

  // Productos favoritos
  const [favorites] = useState([
    { id: 1, name: 'RTX 4080 Super', category: 'GPU', price: '$999' },
    { id: 2, name: 'Ryzen 7 7800X3D', category: 'CPU', price: '$449' },
    { id: 3, name: 'Corsair 4000D Airflow', category: 'Case', price: '$104' }
  ]);
  
  // Historial de productos vistos
  const [recentlyViewed] = useState([
    { id: 1, name: 'Kingston Fury Beast 32GB', date: '2 días atrás' },
    { id: 2, name: 'Samsung 990 PRO 2TB', date: '3 días atrás' },
    { id: 3, name: 'Cooler Master MasterLiquid', date: '5 días atrás' }
  ]);
  
  // Reviews del usuario
  const [reviews] = useState([
    { 
      id: 1, 
      product: 'NVIDIA RTX 4070', 
      rating: 5, 
      comment: 'Excelente rendimiento para 1440p',
      date: '10 Oct 2024'
    },
    { 
      id: 2, 
      product: 'G.Skill Trident Z5', 
      rating: 4, 
      comment: 'Buena RAM pero un poco cara',
      date: '5 Oct 2024'
    }
  ]);
  
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  
  const handleSaveProfile = () => {
    setEditMode(false);
    // Aquí guardarías los datos en el backend
  };
  
  if (checkingAuth) return <div>Cargando perfil...</div>;
  if(!user) return <div>No Hay usuario logeado</div>
  console.log("USUARIO: ",user.first_name);


  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Header del perfil */}
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Grid container spacing={3} alignItems="center">
          <Grid item>
            <Avatar
              src={userData.avatar}
              sx={{ width: 120, height: 120 }}
            />
          </Grid>
          <Grid item xs>
            <Box display="flex" alignItems="center" gap={2} mb={1}>
              <Typography variant="h4">{userData.username}</Typography>
              <Chip 
                label={userData.experienceLevel} 
                color="primary" 
                size="small"
              />
            </Box>
            <Typography color="text.secondary" gutterBottom>
              {userData.email}
            </Typography>
            <Typography variant="body2" color="text.secondary" gutterBottom>
              Miembro desde {userData.joinDate}
            </Typography>
            <Typography variant="body1" sx={{ mt: 2 }}>
              {userData.bio}
            </Typography>
            <Box sx={{ mt: 2 }}>
              {userData.interests.map((interest, index) => (
                <Chip 
                  key={index} 
                  label={interest} 
                  sx={{ mr: 1, mb: 1 }} 
                  variant="outlined"
                />
              ))}
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
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Nombre de usuario"
                  value={userData.username}
                  onChange={(e) => setUserData({...userData, username: e.target.value})}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Email"
                  value={userData.email}
                  onChange={(e) => setUserData({...userData, email: e.target.value})}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  multiline
                  rows={3}
                  label="Biografía"
                  value={userData.bio}
                  onChange={(e) => setUserData({...userData, bio: e.target.value})}
                />
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
                  onClick={() => setEditMode(false)}
                >
                  Cancelar
                </Button>
              </Grid>
            </Grid>
          </Box>
        )}
      </Paper>

      {/* Mi PC Actual */}
      <Paper elevation={3} sx={{ p: 3, mb: 3 }}>
        <Box display="flex" alignItems="center" mb={2}>
          <Computer sx={{ mr: 1, color: 'primary.main' }} />
          <Typography variant="h5">Mi PC Actual</Typography>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center" mb={1}>
              <Memory sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant="body2" color="text.secondary">
                Procesador:
              </Typography>
            </Box>
            <Typography variant="body1" fontWeight="bold">
              {pcSpecs.processor}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center" mb={1}>
              <Videocam sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant="body2" color="text.secondary">
                Tarjeta Gráfica:
              </Typography>
            </Box>
            <Typography variant="body1" fontWeight="bold">
              {pcSpecs.gpu}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center" mb={1}>
              <Memory sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant="body2" color="text.secondary">
                Memoria RAM:
              </Typography>
            </Box>
            <Typography variant="body1" fontWeight="bold">
              {pcSpecs.ram}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box display="flex" alignItems="center" mb={1}>
              <Storage sx={{ mr: 1, fontSize: 20 }} />
              <Typography variant="body2" color="text.secondary">
                Almacenamiento:
              </Typography>
            </Box>
            <Typography variant="body1" fontWeight="bold">
              {pcSpecs.storage}
            </Typography>
          </Grid>
        </Grid>
      </Paper>

      {/* Tabs de contenido */}
      <Paper elevation={3}>
        <Tabs value={tabValue} onChange={handleTabChange} centered>
          <Tab icon={<Favorite />} label="Favoritos" />
          <Tab icon={<History />} label="Historial" />
          <Tab icon={<Star />} label="Mis Reviews" />
        </Tabs>
        
        <Box sx={{ p: 3 }}>
          {/* Tab Favoritos */}
          {tabValue === 0 && (
            <Grid container spacing={2}>
              {favorites.map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.id}>
                  <Card variant="outlined">
                    <CardContent>
                      <Box display="flex" justifyContent="space-between" alignItems="start">
                        <div>
                          <Typography variant="h6" gutterBottom>
                            {item.name}
                          </Typography>
                          <Chip label={item.category} size="small" sx={{ mb: 1 }} />
                          <Typography variant="h6" color="primary">
                            {item.price}
                          </Typography>
                        </div>
                        <IconButton size="small" color="error">
                          <Delete />
                        </IconButton>
                      </Box>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          )}

          {/* Tab Historial */}
          {tabValue === 1 && (
            <List>
              {recentlyViewed.map((item) => (
                <ListItem key={item.id} divider>
                  <ListItemIcon>
                    <History />
                  </ListItemIcon>
                  <ListItemText
                    primary={item.name}
                    secondary={item.date}
                  />
                </ListItem>
              ))}
            </List>
          )}

          {/* Tab Reviews */}
          {tabValue === 2 && (
            <Box>
              {reviews.map((review) => (
                <Card key={review.id} sx={{ mb: 2 }} variant="outlined">
                  <CardContent>
                    <Box display="flex" justifyContent="space-between" alignItems="start">
                      <div>
                        <Typography variant="h6">{review.product}</Typography>
                        <Rating value={review.rating} readOnly size="small" />
                        <Typography variant="body2" sx={{ mt: 1 }}>
                          {review.comment}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {review.date}
                        </Typography>
                      </div>
                      <IconButton size="small">
                        <Edit fontSize="small" />
                      </IconButton>
                    </Box>
                  </CardContent>
                </Card>
              ))}
            </Box>
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