import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    Button, 
    Menu, 
    MenuItem, 
    ListItemIcon, 
    ListItemText,
    Divider 
} from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import CategoryIcon from '@mui/icons-material/Category';

const MenuProductos = ({ categorias, titulo = "Seleccionar Categoría" }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();
    const open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleNavigate = (ruta) => {
        navigate(ruta);
        handleClose();
    };

    return (
        <>
            <Button
                variant="contained"
                endIcon={<KeyboardArrowDownIcon />}
                onClick={handleClick}
                sx={{
                    bgcolor: '#1F2937',
                    '&:hover': { bgcolor: '#374151' },
                }}
            >
                {titulo}
            </Button>

            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                slotPropslist={{
                    'aria-labelledby': 'basic-button',
                }}
                slotPropspaper={{
                    sx: {
                        bgcolor: '#1F2937',
                        color: '#fff',
                        minWidth: 200,
                    }
                }}
            >
                {categorias.map((cat, index) => (
                    <MenuItem 
                        key={cat.id || index}
                        onClick={() => handleNavigate(cat.ruta)}
                        sx={{
                            '&:hover': { 
                                bgcolor: '#374151',
                                color: '#00FF84' 
                            }
                        }}
                    >
                        <ListItemIcon>
                            {cat.icono || <CategoryIcon sx={{ color: '#fff' }} />}
                        </ListItemIcon>
                        <ListItemText>{cat.nombre}</ListItemText>
                    </MenuItem>
                ))}
            </Menu>
        </>
    );
};

export default MenuProductos;