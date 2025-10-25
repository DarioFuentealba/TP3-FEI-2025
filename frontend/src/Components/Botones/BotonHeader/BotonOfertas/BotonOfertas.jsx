import React from 'react';
import DropdownMenu from '../../../DropdownMenu/DropdownMenu';
import IconoDinero from '../../../Icono/IconosHeader/IconoDinero/IconoDinero';

function BotonOfertas({ onFiltrarPcArmada, onFiltrarNotebook }) {
    return (
        <DropdownMenu
        icono={IconoDinero}
        texto="Ofertas"
        categorias={[
            { nombre: "PC de escritorio", onClick: onFiltrarPcArmada },
            { nombre: "Notebook", onClick: onFiltrarNotebook },
        ]}
        />
    );
};

export default BotonOfertas;