import React from 'react';
import { useNavigate, useParams, Outlet } from 'react-router-dom';
import { 
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  CircularProgress,
  Box
} from '@mui/material';
import MemoryIcon from '@mui/icons-material/Memory';
import { useCategorias } from '../../utils/categorias';

const AdminProductos = () => {
  const navigate = useNavigate();
  const { id, categoria } = useParams();
  const { categorias, loading, error } = useCategorias();
  let productosCategorias=[];
  let productosSubCategorias=[];

  // Buscar la categoría "HARDWARE" O LAS OTRAS CATEGORIAS (PERIFERICOS - SOTWARE-COMPUTADORAS)
  if(categoria==='hardware'){
    productosCategorias=categorias.filter(
      cat => cat.nombre.toLowerCase()==='hardware'
    );
  }
  else if(categoria==='otros'){
    productosCategorias=categorias.filter(
      cat => ['perifericos','computadoras','software'].includes(cat.nombre.toLowerCase())
    );
  };

  // OBTIENE LAS SUBCATEGORIAS DE HARDWARE O DE LAS OTRAS (SOFTWARE - COMPUTADORAS - PERIFERICOS)
  productosCategorias.forEach(cat=>{
    if(cat.subcategorias && cat.subcategorias.length>0){
      productosSubCategorias.push(...cat.subcategorias);
    }
  });
  
  
  // ⏳ Mientras carga
  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" mt={4}>
        <CircularProgress color="success" />
      </Box>
    );
  }
  
  // ❌ Error
  if (error) {
    return (
      <Typography color="error" align="center" mt={4}>
        Ocurrió un error al cargar las categorías.
      </Typography>
    );
  }
  
  // ⚠️ Si no existe Hardware
  if (!productosCategorias) {
    return (
      <Typography color="warning.main" align="center" mt={4}>
        No se encontró la categoría <strong>{categoria}</strong>.
      </Typography>
    );
  }
  
  // 🚀 Navegar al formulario según subcategoría
  const handleNavigate = (sub) => {
    //console.log('NOMBRE DE LA SUBCATEGORIA=<', sub.nombre.toLowerCase());
    navigate(`/administrador/${id}/${categoria}/${sub.nombre.toLowerCase()}`);
  };

  return (
    <Box sx={{ px: 3, py: 2 }}>
      {/* Título principal */}
      <Box display="flex" alignItems="center" gap={1} mb={3}>
        <MemoryIcon sx={{ color: '#00FF84', fontSize: 40 }} />
        <Typography variant="h5" fontWeight="bold">
          Gestión de Productos 
        </Typography>
      </Box>

      {/* Grid de subcategorías */}
      <Grid container spacing={3}>
        {productosSubCategorias.length === 0 ? (
          <Grid item xs={12}>
            <Typography align="center" color="text.secondary">
              No hay subcategorías disponibles.
            </Typography>
          </Grid>
        ) : (
          productosSubCategorias.map((sub) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={sub.id}>
              <Card
                sx={{
                  borderRadius: 3,
                  boxShadow: '0 4px 12px rgba(0, 255, 132, 0.2)',
                  transition: 'all 0.25s ease',
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: '0 6px 16px rgba(0, 255, 132, 0.4)',
                  },
                  bgcolor: '#1F2937',
                  color: '#fff'
                }}
              >
                <CardActionArea onClick={() => handleNavigate(sub)}>
                  {sub.imagen ? (
                    <CardMedia
                      component="img"
                      image={sub.imagen}
                      alt={sub.nombre}
                      sx={{
                        objectFit: 'contain',
                        height:150,
                        borderRadius:2,
                        width:150,
                        margin: '0 auto',
                        bgcolor: '#111827',
                        p: 1
                      }}
                    />
                  ) : (
                    <Box
                      height={50}
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      sx={{ bgcolor: '#111827' }}
                    >
                      <MemoryIcon sx={{ fontSize: 60, color: '#00FF84' }} />
                    </Box>
                  )}

                  <CardContent>
                    <Typography variant="h6" align="center" fontWeight="bold">
                      {sub.nombre}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))
        )}
      </Grid>

      {/* Aquí se muestran los formularios */}
      <Box mt={4}>
        <Outlet />
      </Box>
    </Box>
  );
};

export default AdminProductos;
