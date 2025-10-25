import React, { useState, useMemo } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { data } from './BDCompus';
import 'bootstrap/dist/css/bootstrap.min.css';

//Componente tarjeta con hover de imagen
const CardProducto = ({ item }) => {
    const [src, setSrc] = useState(item.imagen);

    return(
        <div
        style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
        >
        {item.imagen && (
            <img
            src={src}
            alt={`${item.marca} ${item.tipo}`}
            style={{ width: '150px', height: '150px', objectFit: 'contain', marginBottom: '1rem', borderRadius: '8px', cursor: 'pointer' }}
            onMouseEnter={() => setSrc(item.imagenHover)}
            onMouseLeave={() => setSrc(item.imagen)}
            />
        )}
        <div><strong>Sistema Operativo:</strong> {item.sistemaOperativo}</div>
        <div><strong>Marca:</strong> {item.marca}</div>
        <div><strong>Tipo:</strong> {item.tipo}</div>
        <div><strong>Precio:</strong> {item.salary.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</div>
        <div><strong>Oferta:</strong> {item.oferta}</div>
        <div><strong>Envío Gratis:</strong> {item.envioGratis}</div>
        </div>
    );
};

const Paginador = ({ table }) => (
    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', margin: '1rem 0' }}>
        <button onClick={() => table.setPageIndex(0)} disabled={!table.getCanPreviousPage()}>
            {'<<'}
        </button>
        <button onClick={() => table.previousPage()} disabled={!table.getCanPreviousPage()}>
            {'<'}
        </button>
        <span>
            Página {table.getState().pagination.pageIndex + 1} de {table.getPageCount()}
        </span>
        <button onClick={() => table.nextPage()} disabled={!table.getCanNextPage()}>
            {'>'}
        </button>
        <button onClick={() => table.setPageIndex(table.getPageCount() - 1)} disabled={!table.getCanNextPage()}>
            {'>>'}
        </button>
    </div>
);

    const Filtro = () => {
    //Columnas de la tabla
    const columns = useMemo(() => [
        { accessorKey: 'sistemaOperativo', header: 'Sistema Operativo', filterVariant: 'autocomplete' },
        { accessorKey: 'marca', header: 'Marca', filterVariant: 'autocomplete' },
        { accessorKey: 'tipo', header: 'Tipo', filterVariant: 'autocomplete' },
        {
        accessorKey: 'salary',
        header: 'Precio',
        Cell: ({ cell }) => cell.getValue().toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
        filterVariant: 'range-slider',
        filterFn: 'betweenInclusive',
        muiFilterSliderProps: {
            marks: true,
            step: 5000,
            min: 0,
            max: Math.max(...data.map(d => d.salary)),
            valueLabelFormat: value => value.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
        },
        },
        { accessorKey: 'oferta', header: 'Oferta', filterVariant: 'autocomplete' },
        { accessorKey: 'envioGratis', header: 'Envío Gratis', filterVariant: 'autocomplete' },
    ], []);

    //Tabla material react
    const table = useMaterialReactTable({
        columns,
        data,
        enableFacetedValues: true,
        initialState: { showColumnFilters: true },
        filterFns: {
        betweenInclusive: (row, columnId, filterValue) => {
            const rowValue = row.getValue(columnId);
            return rowValue >= filterValue[0] && rowValue <= filterValue[1];
        },
        },
        muiTableBodyProps: { sx: { display: 'none' } }, // Oculta filas
    });

    return(
        <>
        {/* Filtros */}
        <MaterialReactTable table={table} />

        {/* Paginador arriba*/}
        <Paginador table={table} />

        {/* Grid de tarjetas */}
        <div
            style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
            marginTop: '1rem',
            }}
        >
            {table.getRowModel().rows.map(row => (
            <CardProducto key={row.id} item={row.original} />
            ))}
        </div>

        {/* Paginador abajo*/}
        <Paginador table={table} />
        </>
    );
};

export default Filtro;


/*
import React, { useState, useMemo } from 'react';
import { MaterialReactTable, useMaterialReactTable } from 'material-react-table';
import { data } from './BDCompus';
import 'bootstrap/dist/css/bootstrap.min.css';

//Componente tarjeta con hover de imagen
const CardProducto = ({ item }) => {
    const [src, setSrc] = useState(item.imagen);

    return(
        <div
        style={{
            border: '1px solid #ddd',
            borderRadius: '8px',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
        }}
        >
        {item.imagen && (
            <img
            src={src}
            alt={`${item.marca} ${item.tipo}`}
            style={{ width: '150px', height: '150px', objectFit: 'contain', marginBottom: '1rem', borderRadius: '8px', cursor: 'pointer' }}
            onMouseEnter={() => setSrc(item.imagenHover)}
            onMouseLeave={() => setSrc(item.imagen)}
            />
        )}
        <div><strong>Sistema Operativo:</strong> {item.sistemaOperativo}</div>
        <div><strong>Marca:</strong> {item.marca}</div>
        <div><strong>Tipo:</strong> {item.tipo}</div>
        <div><strong>Precio:</strong> {item.salary.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</div>
        <div><strong>Oferta:</strong> {item.oferta}</div>
        <div><strong>Envío Gratis:</strong> {item.envioGratis}</div>
        </div>
    );
    };

    const Filtro = () => {
    //Columnas de la tabla
    const columns = useMemo(() => [
        { accessorKey: 'sistemaOperativo', header: 'Sistema Operativo', filterVariant: 'autocomplete' },
        { accessorKey: 'marca', header: 'Marca', filterVariant: 'autocomplete' },
        { accessorKey: 'tipo', header: 'Tipo', filterVariant: 'autocomplete' },
        {
        accessorKey: 'salary',
        header: 'Precio',
        Cell: ({ cell }) => cell.getValue().toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
        filterVariant: 'range-slider',
        filterFn: 'betweenInclusive',
        muiFilterSliderProps: {
            marks: true,
            step: 5000,
            min: 0,
            max: Math.max(...data.map(d => d.salary)),
            valueLabelFormat: value => value.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
        },
        },
        { accessorKey: 'oferta', header: 'Oferta', filterVariant: 'autocomplete' },
        { accessorKey: 'envioGratis', header: 'Envío Gratis', filterVariant: 'autocomplete' },
    ], []);

    //Tabla material react
    const table = useMaterialReactTable({
        columns,
        data,
        enableFacetedValues: true,
        initialState: { showColumnFilters: true },
        filterFns: {
        betweenInclusive: (row, columnId, filterValue) => {
            const rowValue = row.getValue(columnId);
            return rowValue >= filterValue[0] && rowValue <= filterValue[1];
        },
        },
        muiTableBodyProps: { sx: { display: 'none' } }, // Oculta filas
    });

    return(
        <>
        */ //{/* Filtros */}
       /* <MaterialReactTable table={table} />

       */ //{/* Grid de tarjetas */}
      /*  <div
            style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1rem',
            marginTop: '1rem',
            }}
        >
            {table.getRowModel().rows.map(row => (
            <CardProducto key={row.id} item={row.original} />
            ))}
        </div>
        </>
    );
};

export default Filtro;
*/