import React, { useEffect, useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  Button,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  IconButton,
  Avatar
} from '@mui/material';
import {
  Add,
  Edit,
  Delete,
  Computer,
  ManageSearch,
  LocalShipping,
  Phone,
  Email,
  Business
} from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router-dom';
import { apiProveedor } from '../../api/apiProveedor';

export default function AdminPanel() {
  const [tabValue, setTabValue] = useState(0);
  const {id}=useParams();
  const navigate =useNavigate();
  const [proveedores, setProveedores]=useState([]);
  const provedorApi = apiProveedor();
  
  const cargaProveedores = async()=>{
    try{
      const data = await provedorApi.list();
      setProveedores(data);
    } catch(error){
      console.error("Error al listar proveedores",error);
    }
  };

  // LLAMADO A LA FUNCION AL MOMENTO DE MONTAR EL COMPONENTE
  useEffect(()=>{
    cargaProveedores();
  },[]);

  const hardware = proveedores.filter(prov=>prov.categoria.toLowerCase()==='hardware');
  const otros = proveedores.filter(otro=>otro.categoria.toLowerCase()==='otros');
  const currentProviders = tabValue === 0 ? hardware : otros;
  const activeCount = currentProviders.filter(p => p.activo).length;
  const totalCount = currentProviders.length;

  
  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };
  //console.log("ACTUAL PROVEEDRO =>",currentProviders);
  const handleAdd = () => {
    console.log('Abrir formulario de agregar');
    // Aquí llamarías a tu formulario existente
  };
  
  const handleVerProductos = () => {
    if(currentProviders[0].activo && (currentProviders[0].categoria==='hardware')){
      navigate(`/administrador/${id}/hardware/`);
    }
    else{
      navigate(`/administrador/${id}/otros/`);
      
    }
  };

  // const handleDelete = (providerId) => {
  //   console.log('Eliminar proveedor:', providerId);
  //   // Aquí llamarías a tu función de eliminación del backend
  // };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom fontWeight="bold">
          Gestión de Proveedores
        </Typography>
        <Typography variant="body1" color="text.secondary">
          Administra los proveedores de hardware y otros servicios
        </Typography>
      </Box>

      {/* Tarjetas de estadísticas */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid item xs={12} md={4}>
          <Card elevation={2}>
            <CardContent>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography color="text.secondary" variant="body2">
                    Total Proveedores
                  </Typography>
                  <Typography variant="h3" fontWeight="bold">
                    {totalCount}
                  </Typography>
                </Box>
                <Avatar sx={{ bgcolor: 'primary.main', width: 56, height: 56 }}>
                  <Business fontSize="large" />
                </Avatar>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card elevation={2}>
            <CardContent>
              <Box display="flex" alignItems="center" justifyContent="space-between">
                <Box>
                  <Typography color="text.secondary" variant="body2">
                    Proveedores Activos
                  </Typography>
                  <Typography variant="h3" fontWeight="bold" color="success.main">
                    {activeCount}
                  </Typography>
                </Box>
                <Avatar sx={{ bgcolor: 'success.main', width: 56, height: 56 }}>
                  <Business fontSize="large" />
                </Avatar>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card elevation={2} sx={{ bgcolor: 'primary.main', color: 'white' }}>
            <CardContent>
              <Typography variant="body2" sx={{ opacity: 0.9 }}>
                Categoría Actual
              </Typography>
              <Typography variant="h4" fontWeight="bold" sx={{ mt: 1 }}>
                {tabValue === 0 ? 'Hardware' : 'Otros'}
              </Typography>
              <Box display="flex" alignItems="center" mt={2}>
                {tabValue === 0 ? 
                  <Computer fontSize="large" /> : 
                  <LocalShipping fontSize="large" />
                }
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Contenido principal con tabs */}
      <Paper elevation={3}>
        {/* Tabs */}
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={tabValue} onChange={handleTabChange}>
            <Tab 
              icon={<Computer />} 
              label="Proveedores Hardware" 
              iconPosition="start"
            />
            <Tab 
              icon={<LocalShipping />} 
              label="Otros Proveedores" 
              iconPosition="start"
            />
          </Tabs>
        </Box>

        {/* Contenido del tab */}
        <Box sx={{ p: 3 }}>
          {/* Botón agregar */}
          <Box display="flex" justifyContent="flex-end" mb={3}>
            <Button
              variant="contained"
              startIcon={<Add />}
              onClick={handleAdd}
              size="large"
            >
              Agregar Proveedor
            </Button>
          </Box>

          {/* Tabla de proveedores */}
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow sx={{ bgcolor: 'grey.100' }}>
                  <TableCell><strong>Nombre</strong></TableCell>
                  <TableCell><strong>Contacto</strong></TableCell>
                  <TableCell><strong>Teléfono</strong></TableCell>
                  <TableCell><strong>Email</strong></TableCell>
                  <TableCell><strong>CUIT</strong></TableCell>
                  <TableCell><strong>Estado</strong></TableCell>
                  <TableCell align="center"><strong>Ver Productos</strong></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {currentProviders.map((provider) => (
                  <TableRow 
                    key={provider.id}
                    hover
                    sx={{ '&:last-child td': { border: 0 } }}
                  >
                    <TableCell>
                      <Box display="flex" alignItems="center" gap={1}>
                        <Avatar sx={{ bgcolor: 'primary.main', width: 32, height: 32 }}>
                          {provider.nombre.charAt(0)}
                        </Avatar>
                        <Typography variant="body2" fontWeight="bold">
                          {provider.nombre}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center" gap={0.5}>
                        <Business fontSize="small" color="action" />
                        {provider.contacto}
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center" gap={0.5}>
                        <Phone fontSize="small" color="action" />
                        {provider.telefono}
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box display="flex" alignItems="center" gap={0.5}>
                        <Email fontSize="small" color="action" />
                        {provider.email}
                      </Box>
                    </TableCell>
                    <TableCell>{provider.cuit}</TableCell>
                    <TableCell>
                      <Chip
                        label={provider.activo ? 'Activo' : 'Inactivo'}
                        color={provider.activo ? 'success' : 'default'}
                        size="small"
                      />
                      {/**EDITAR O ELIMINAR EL PROVEEDOR  */}
                    </TableCell>
                    {/** BOTONES PARA VER LOS PRODUCTOS  */}
                    <TableCell align='center'>
                      <IconButton
                      onClick={()=>handleVerProductos()}
                      size='samll'
                      color='primary'
                      >
                        <ManageSearch fontSize='small'/>

                      </IconButton>
                    </TableCell>
                    {/**
                     * 
                     <TableCell align="center">
                       <IconButton
                         onClick={() => handleEdit(provider)}
                         size="small"
                         color="primary"
                       >
                         <Edit fontSize="small" />
                       </IconButton>
                       <IconButton
                         onClick={() => handleDelete(provider.id)}
                         size="small"
                         color="error"
                       >
                         <Delete fontSize="small" />
                       </IconButton>
                     </TableCell>
                     * 
                     */}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      </Paper>
    </Container>
  );
}