CREATE TABLE fabricante (
    id INT PRIMARY KEY  AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    foto VARCHAR(255)
);

INSERT INTO fabricante (id, nombre, foto) VALUES
(1, 'AMD', '/Imagenes/Productos/Marcas/AMD_a.webp'),
(2, 'Intel', '/Imagenes/Productos/Marcas/Intel_a.webp'),
(3, 'Thermalright', '/Imagenes/Productos/Marcas/Thermalright_b.png'),
(4, 'Xigmatek', '/Imagenes/Productos/Marcas/Xigmatek_c.jpg'),
(5, 'Gamemax', '/Imagenes/Productos/Marcas/Gamemax_a.jpg'),
(6, 'Corsair', '/Imagenes/Productos/Marcas/Corsair_a.png'),
(7, 'Cooler Master', '/Imagenes/Productos/Marcas/CoolerMaster_c.jpg'),
(8, 'Gigabyte', '/Imagenes/Productos/Marcas/Gigabyte_c.jpg'),
(9, 'Asus', '/Imagenes/Productos/Marcas/Asus_a.png'),
(10, 'Asrock', '/Imagenes/Productos/Marcas/Asrock_c.png'),
(11, 'MSI', '/Imagenes/Productos/Marcas/MSI_b.png'),
(12, 'Hiksemi', '/Imagenes/Productos/Marcas/Hiksemi_b.png'),
(13, 'PNY', '/Imagenes/Productos/Marcas/PNY_b.jpg'),
(14, 'Memox', '/Imagenes/Productos/Marcas/Memox_c.jpg'),
(15, 'Hikvision', '/Imagenes/Productos/Marcas/Hikvision_a.png'),
(16, 'Adata', '/Imagenes/Productos/Marcas/Adata_a.png'),
(17, 'Crucial', '/Imagenes/Productos/Marcas/Crucial_a.png'),
(18, 'Kingston', '/Imagenes/Productos/Marcas/Kingston_a.png'),
(19, 'Acer', '/Imagenes/Productos/Marcas/Acer_c.jpg'),
(20, 'Geforce', '/Imagenes/Productos/Marcas/Geforce_a.png'),
(21, 'Patriot', '/Imagenes/Productos/Marcas/Patriot_d.jpg'),
(22, 'Sentey', '/Imagenes/Productos/Marcas/Sentey_a.png'),
(23, 'Genesis', '/Imagenes/Productos/Marcas/Genesis_a.png'),
(24, 'Master Masterbox', '/Imagenes/Productos/Marcas/MasterMasterbox.webp'),
(25, 'Thermaltake', '/Imagenes/Productos/Marcas/Thermaltake_d.png'),
(26, 'ATX', '/Imagenes/Productos/Marcas/ATX_b.png'),
(27, 'GO', '/Imagenes/Productos/Marcas/GO_b.png'),
(28, 'LG', '/Imagenes/Productos/Marcas/LG_c.png'),
(29, 'Natec', '/Imagenes/Productos/Marcas/Natec_a.png'),
(30, 'Fury', '/Imagenes/Productos/Marcas/Fury_a.jpg'),
(31, 'Razer', '/Imagenes/Productos/Marcas/Razer_c.jpg'),
(32, 'Logitech', '/Imagenes/Productos/Marcas/Logitech_a.png'),
(33, 'Redragon', '/Imagenes/Productos/Marcas/Redragon_e.jpg'),
(34, 'Tp-Link', '/Imagenes/Productos/Marcas/TpLink_b.png'),
(35, 'Microsoft', '/Imagenes/Productos/Marcas/TpLink_b.png'),
(36, 'Canonical', '/Imagenes/Productos/Marcas/TpLink_b.png'),
(37, 'Linux', '/Imagenes/Productos/Marcas/TpLink_b.png'),
(38, 'Software Libre o Codigo abierto', '/Imagenes/Productos/Marcas/TpLink_b.png'),
(39, 'Red Hat, Inc', '/Imagenes/Productos/Marcas/TpLink_b.png'),
(40, 'Google', '/Imagenes/Productos/Marcas/TpLink_b.png'),
(41, 'Sin marca', '/Imagenes/Productos/Marcas/sin_marca.svg'),
(42, 'Apple', '/Imagenes/Productos/Marcas/Apple_c.jpg'),
(43, 'Samsung', '/Imagenes/Productos/Marcas/Samsung_b.png'),
(44, 'Lenovo', '/Imagenes/Productos/Marcas/Lenovo_f.jpg'),
(45, 'Dell', '/Imagenes/Productos/Marcas/Dell_c.jpg'),
(46, 'HP', '/Imagenes/Productos/Marcas/HP_b.jpg'),
(47, 'ROG', '/Imagenes/Productos/Marcas/ROG_a.jpg');


CREATE TABLE motherboards (
    id INT PRIMARY KEY  AUTO_INCREMENT,
    fabricante INT,
    nombre VARCHAR(100),
    memoria VARCHAR(100),
    sonido VARCHAR(100),
    puerto_sata VARCHAR(100),
    usb VARCHAR(255),
    hdmi VARCHAR(100),
    vga VARCHAR(100),
    consumo DECIMAL(6,3),              
    foto VARCHAR(255),
    precio DECIMAL(10,2),
    FOREIGN KEY (fabricante) REFERENCES marcas(id)
);


INSERT INTO motherboards (id, fabricante, nombre, memoria, sonido, puerto_sata, usb, hdmi, vga, consumo, foto, precio) VALUES
(1, 9, 'Motherboard Asus A520M-K Prime AM4', '2 (64 GB)', 'Realtek ALC887', '4', '4 (3.2) / 2 (2.0)', '1', 'No', 5.000, '/Imagenes/Productos/PlacaMadre/01_a.jpg', 81500.00),
(2, 8, 'Motherboard Gigabyte H510M-K V2 1200', '2 (Max. 64 GB)', 'No informado', '4', '6 USB-A', 'Sí', 'No', 4.900, '/Imagenes/Productos/PlacaMadre/02_a.jpg', 103800.00),
(3, 9, 'Motherboard Asus Prime A620M-K DDR5 AM5', '2 (Máx. 96 GB)', 'No informado', '4', 'USB 3.2 Gen 1, USB 2.0', 'Sí (HDMI 2.1, 4K a 60Hz)', 'Sí', 60.000, '/Imagenes/Productos/PlacaMadre/03_a.jpg', 118000.00),
(4, 10, 'Motherboard Asrock B550 Phantom Gaming 4/ac AM4', '4 (Max. 128 GB)', 'Realtek 1200 Codec', '4', '6 (3.2)', '1', 'No', 5.000, '/Imagenes/Productos/PlacaMadre/04_a.jpg', 138500.00),
(5, 11, 'Motherboard MSI B760M-E PRO DDR5 1700', '2 (hasta 128 GB)', 'Realtek® ALC1200 codec', '1', '4 x USB 2.0 (traseros), 4 x USB 2.0 (frontales), 2 x USB 3.2 Gen 1 Type-A (traseros), 2 x USB 3.2 Gen 1 Type-A (frontales)', '1', 'No', 4.800, '/Imagenes/Productos/PlacaMadre/05_a.jpg', 177700.00),
(6, 8, 'Motherboard Gigabyte B550 Aorus Elite AX V2 AM4', '4 (Max. 128 GB)', 'Realtek® ALC1200 codec', '4', 'usb', '1', 'No', 70.000, '/Imagenes/Productos/PlacaMadre/06_a.jpg', 301300.00),
(7, 9, 'Motherboard Asus Tuf Gaming B650M-Plus WIFI AM5', '4 (Max. 128 GB)', 'Realtek® ALC1200 codec', '4', '7', 'Sí', 'No', 159.000, '/Imagenes/Productos/PlacaMadre/07_a.jpg', 308500.00),
(8, 10, 'Motherboard AsRock X870E Taichi Lite Wifi AM5 DDR5', '4 (hasta 256 GB)', 'Realtek® ALC1200 codec', '4', '2 x USB4 Type-C, 5 x USB 3.2 Gen2 Type-A, 2 x USB 2.0', 'Sí', 'No', 396.000, '/Imagenes/Productos/PlacaMadre/08_a.jpg', 703800.00),
(9, 8, 'Motherboard Gigabyte X870E AORUS MASTER AM5 DDR5', '4 (hasta 128 GB)', 'Realtek® ALC1200 codec', '4 x SATA 6Gb/s', '2 x USB4 Type-C, USB 3.2 Gen 2x2', 'Sí, HDMI 2.1', 'No', 396.000, '/Imagenes/Productos/PlacaMadre/09_a.jpg', 767700.00),
(10, 9, 'Motherboard Asus Rog Strix X870E - E Gaming Wifi AM5 DDR5', '4 (hasta 192 GB)', 'Realtek® ALC1200 codec', '4', '2 x USB4® Tipo-C®, 1 x USB 3.2 Gen 2 x 2 Tipo-C® (20 Gbps) con PD 3.0 hasta 30 W, 10 x USB 3.2 Gen 2 (10 Gbps)', '1', 'No', 396.000,  '/Imagenes/Productos/PlacaMadre/10_a.jpg', 957100.00),
(11, 41, 'No seleccionar motherboard', null, null, null, null, null, null, 0.000,  '/Imagenes/Productos/ComponenteSiNo/01_b.jpg', 0.00);


CREATE TABLE procesadores (
    id INT PRIMARY KEY  AUTO_INCREMENT,
    fabricante INT,
    nombre VARCHAR(100),
    modelo VARCHAR(100),
    nucleos INT,
    hilos INT,
    frecuencia VARCHAR(100),       
    proceso_fabricacion VARCHAR(100),
    grafica_integrada VARCHAR(100),
    socket VARCHAR(100),
    incluye_cooler BOOLEAN,         
    tdp_watts DECIMAL(6,3),         
    memoria_l1 VARCHAR(100),
    memoria_l2 VARCHAR(100),
    memoria_l3 VARCHAR(100),
    foto VARCHAR(255),
    precio DECIMAL(10,2),
    FOREIGN KEY (fabricante) REFERENCES marcas(id)
);

INSERT INTO procesadores (id, fabricante, nombre, modelo, nucleos, hilos, frecuencia, proceso_fabricacion, grafica_integrada, socket, incluye_cooler, tdp_watts, memoria_l1, memoria_l2, memoria_l3, foto, precio) VALUES
(1, 1, 'Micro AMD Ryzen 3 4100 4.0 GHz AM4', 'AMD Ryzen 3 4100', '4', '8', 'Hasta 4 GHz', '7 nm', 'No informado', 'AM4', 1, 65.000, '64 Kb (por núcleo)', '512 KB (por núcleo)', '8 MB (compartido)', '/Imagenes/Productos/Micros/01_a.jpg', 86000.00),
(2, 2, 'Micro Intel I3-13100 4.5 GHz 12Mb S.1700', 'Core i3-13100', '4', '8', 'Hasta 4.50 GHz', '10 nm', 'Gráficos UHD Intel® 730', '1700', 1, 60.000, '320 Kb', '5 MB', '12 MB', '/Imagenes/Productos/Micros/02_a.jpg', 187700.00),
(3, 2, 'Micro Intel I5-12400 4.4 GHz 18Mb S.1700', 'I5-12400', '6', '12', '4.4 GHz', '10 nm', 'UHD Graphics 730', '1700', 1, 65.000, '80 K', '1.25 MB', '18 MB', '/Imagenes/Productos/Micros/03_a.jpg', 254000.00),
(4, 1, 'Micro AMD Ryzen 7 5800XT 4.8 GHz AM4', 'AMD Ryzen 7 5800XT', '8', '16', '4.8 GHz', '12 nm', 'No', 'AM4', 1, 105.000, '64 KB (Por Núcleo)', '512 KB (Por Núcleo)', '32 Mb', '/Imagenes/Productos/Micros/04_a.jpg', 365200.00),
(5, 2, 'Micro Intel I7-12700F 4.9 GHz 25Mb S.1700', 'I7-12700F', '12', '20', '4.9 GHz', '10 nm', 'No informada', '1700', 1, 65.000, '80 K', '1.25 MB', '25 MB', '/Imagenes/Productos/Micros/05_a.jpg', 421400.00),
(6, 1, 'Micro AMD Ryzen 7 7800X3D 5.0 GHz AM5', 'AMD Ryzen 7 7800X 3D', '8', '16', 'Hasta 5.0 GHz', '5 nm', 'Radeon Graphics', 'AM5', 0, 120.000, '64 Kb', '1 MB', '96 MB', '/Imagenes/Productos/Micros/06_a.jpg', 630300.00),
(7, 1, 'Micro AMD Ryzen 9 9900X 5.6 GHz AM5', 'AMD Ryzen 9 9900X', '12', '24', '5.6 GHz', '5 nm', 'Sí', 'AM5', 0, 105.000, '768 KB', '6 MB', '64 MB', '/Imagenes/Productos/Micros/07_a.jpg', 682000.00),
(8, 2, 'Micro Intel I9-14900KF 6 GHz 36Mb S.1700', 'I9-14900KF', '24', '32', '3.2 GHz (Base) / 6 GHz (Turbo)', 'No informado', 'No', '1700', 0, 125.000, '80 kb', '2 MB', '36 MB', '/Imagenes/Productos/Micros/08_a.jpg', 820400.00),
(9, 1, 'Micro AMD Ryzen 9 9950X 4.3 GHz AM5', 'AMD Ryzen 9 9950X', '16', '32', '4.3 GHz (Base) / 5.7 GHz (Turbo)', '4 nm', 'Sí', 'AM5', 0, 170.000, '1 MB', '16 MB', '64 MB', '/Imagenes/Productos/Micros/09_a.jpg', 920200.00),
(10, 1, 'Micro AMD Ryzen 9 9950X3D 5.7 GHz AM5', 'AMD Ryzen 9 9950X3D', '16', '32', '4.3 GHz (Base) / 5.7 GHz (Turbo)', 'No informado', 'Sí', 'AM5', 0, 170.000, '80 KB por núcleo', '1 MB por núcleo', '128 MB compartidos', '/Imagenes/Productos/Micros/10_a.jpg', 1105700.00);


CREATE TABLE compatibilidad_micro (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_motherboard INT,
    id_micro INT,
    FOREIGN KEY (id_motherboard) REFERENCES motherboards(id),
    FOREIGN KEY (id_micro) REFERENCES procesadores(id)
);

INSERT INTO compatibilidad_micro (id_motherboard, id_micro) VALUES
(1, 1), (1, 4), (1, 9),
(4, 1), (4, 4), (4, 9),
(6, 1), (6, 4), (6, 9),
(2, 2), (2, 3),
(5, 2), (5, 3), (5, 5), (5, 8),
(3, 6), (3, 7), (3, 9),
(7, 6), (7, 7), (7, 9),
(8, 6), (8, 7), (8, 9),
(9, 6), (9, 7), (9, 9),
(10, 6), (10, 7), (10, 9);


CREATE TABLE coolers (
    id INT PRIMARY KEY  AUTO_INCREMENT,
    fabricante INT,
    nombre VARCHAR(100),
    color VARCHAR(20),
    consumo DECIMAL(5,3),                    
    coolers_incluidos INT,
    iluminacion VARCHAR(100),
    foto VARCHAR(255),
    precio DECIMAL(10,2),
    FOREIGN KEY (fabricante) REFERENCES marcas(id)
);

INSERT INTO coolers (id, fabricante, nombre, color, consumo, coolers_incluidos, iluminacion, foto, precio) VALUES
(1, 3, 'Fan Cooler 120mm Thermalright TL-C12CW - 120 White', 'Blanco', 3.000, 1, 'No', '/Imagenes/Productos/Cooler/01_a.jpg', 6400.00),
(2, 4, 'OUTLET - CPU Cooler Xigmatek Air-Killer S Rainbow - Compatible con Intel 12 Gen (Socket 1700)', 'Negro', 3.600, 1, 'Sí', '/Imagenes/Productos/Cooler/02_a.jpg', 30000.00),
(3, 4, 'Fan Cooler 120mm Xigmatek G20A - Black - Pack x3 ARGB', 'Negro', 3.600, 1, 'Sí', '/Imagenes/Productos/Cooler/03_a.jpg', 36900.00),
(4, 5, 'Kit Fan Cooler x3 Gamemax 120mm RQ300 ARGB', 'Negro', 4.000, 1, 'ARGB direccionable con iluminación interior y exterior', '/Imagenes/Productos/Cooler/04_a.jpg', 41000.00),
(5, 6, 'Fan Cooler 120mm Corsair RS120 MAX PWM Single Black', 'Negro', 3.600, 1, 'No', '/Imagenes/Productos/Cooler/05_a.jpg', 52600.00),
(6, 5, 'CPU Water Cooler 360mm Gamemax Icechill 360 ARGB', 'Negro', 3.600, 3, 'Sí', '/Imagenes/Productos/Cooler/06_a.jpg', 124700.00),
(7, 25, 'CPU Water Cooler 240mm Thermaltake TH240 V2 Ultra EX ARGB Sync Snow Edition', 'Blanco', 6.250, 2, 'ARGB direccionable en ventiladores y bomba', '/Imagenes/Productos/Cooler/07_a.jpg', 235900.00),
(8, 8, 'CPU Water Cooler 240mm Gigabyte AORUS WATERFORCE X II 240 ARGB', 'Negro', 3.600, 2, 'Sí', '/Imagenes/Productos/Cooler/08_a.jpg', 326300.00),
(9, 8, 'CPU Water Cooler 360mm Gigabyte AORUS WATERFORCE X II 360 ARGB', 'Negro', 6.750, 3, 'Sí', '/Imagenes/Productos/Cooler/09_a.jpg', 430800.00),
(10, 7, 'CPU Water 360mm Cooler Cooler Master ML 360 ION ARGB', 'Negro', 6.750, 3, 'ARGB direccionable en bomba y ventiladores', '/Imagenes/Productos/Cooler/10_a.jpg', 476600.00),
(11, 41, 'No seleccionar cooler', null, 0.000, null, null, '/Imagenes/Productos/ComponenteSiNo/01_b.jpg', 0.00);


CREATE TABLE compatibilidad_cooler (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_motherboard INT,
    id_cooler INT,
    FOREIGN KEY (id_motherboard) REFERENCES motherboards(id),
    FOREIGN KEY (id_cooler) REFERENCES coolers(id)
);

INSERT INTO compatibilidad_cooler (id_motherboard, id_cooler) VALUES
(1, 1), (1, 2), (1, 3), (1, 4), (1, 5), (1, 6),
(2, 1), (2, 2), (2, 3), (2, 5),
(3, 1), (3, 2), (3, 6), (3, 7), (3, 8), (3, 9), (3, 10),
(4, 1), (4, 2), (4, 3), (4, 6), (4, 8),
(5, 1), (5, 2), (5, 7), (5, 10),
(6, 1), (6, 2), (6, 3), (6, 5), (6, 7), (6, 9),
(7, 1), (7, 2), (7, 6), (7, 8), (7, 9),
(8, 1), (8, 2), (8, 6), (8, 8), (8, 9), (8, 10),
(9, 1), (9, 2), (9, 7), (9, 8), (9, 9),
(10, 1), (10, 2), (10, 6), (10, 9), (10, 10);


CREATE TABLE ram (
    id INT PRIMARY KEY  AUTO_INCREMENT,
    fabricante INT,
    nombre VARCHAR(100),
    tipo VARCHAR(10),
    capacidad_gb INT,              
    latencia VARCHAR(20),
    consumo DECIMAL(5,3),           
    velocidad INT,                   
    pin_de_memoria VARCHAR(100),
    disipador_de_calor VARCHAR(100),  
    foto VARCHAR(255),
    precio DECIMAL(10,2),
    FOREIGN KEY (fabricante) REFERENCES marcas(id)
);

INSERT INTO ram (id, fabricante, nombre, tipo, capacidad_gb, latencia, consumo, velocidad, pin_de_memoria, disipador_de_calor, foto, precio) VALUES
(1, 12, 'Memoria Ram Sodimm Hiksemi 4GB 1600MHz DDR3', 'DDR3', 4, 'CL11', 4.000, 1600, '204', 'No', '/Imagenes/Productos/Ram/01.jpg', 11000.00),
(2, 12, 'Memoria Ram Hiksemi 4GB 1600MHz DDR3', 'DDR3', 4, 'No especificado', 4.000, 1600, '240', 'No', '/Imagenes/Productos/Ram/02.jpg', 12500.00),
(3, 13, 'Memoria Ram PNY Performance 4GB 2666MHz DDR4', 'DDR4', 4, 'CL19', 3.700, 2666, '288', 'No', '/Imagenes/Productos/Ram/03_a.jpg', 19400.00),
(4, 12, 'Memoria Ram Hiksemi Armor 8GB 3200MHz DDR4', 'DDR4', 8, 'CL16', 3.8000, 3200, '288', 'Sí', '/Imagenes/Productos/Ram/04.jpg', 28600.00),
(5, 14, 'Memoria Ram Sodimm Memox 8GB 3200MHz DDR4', 'DDR4', 8, 'CL22', 3.700, 3200, 'SODIMM DDR4, 260-pin', 'Sí', '/Imagenes/Productos/Ram/05.jpg', 29800.00),
(6, 12, 'Memoria Ram Hiksemi Armor White 8GB 3200MHz DDR4', 'DDR4', 8, 'CL22', 3.700, 3200, '288', 'Sí, con disipador térmico blanco', '/Imagenes/Productos/Ram/06_a.jpg', 30300.00),
(7, 12, 'Memoria Ram Hiksemi 8GB 5600MHz DDR5 (No Compatible Con Ryzen Serie 8000)', 'DDR5', 8, 'CL46', 3.000, 5600, '288', 'No', '/Imagenes/Productos/Ram/07.jpg', 34400.00),
(8, 12, 'Memoria Ram Hiksemi Future RGB 8GB 3200MHz DDR4', 'DDR4', 8, 'CL16', 3.500, 3200, '288', 'Sí', '/Imagenes/Productos/Ram/08_a.jpg', 35900.00),
(9, 15, 'Memoria Ram Sodimm Hikvision 8GB 5600MHz DDR5', 'DDR5', 8, 'CL46', 3.000, 5600, '262', 'No', '/Imagenes/Productos/Ram/09.jpg', 37800.00),
(10, 16, 'Memoria Ram Sodimm Adata 8GB 5600MHz DDR5', 'DDR5', 8, 'CL46', 3.000, 5600, '262', 'No', '/Imagenes/Productos/Ram/10_a.jpg', 40200.00),
(11, 16, 'Memoria Ram Adata XPG SPECTRIX D35G RGB 8GB 3200MHz DDR4', 'DDR4', 8, 'CL16', 3.000, 3200, '288', 'Sí', '/Imagenes/Productos/Ram/11_a.jpg', 42100.00),
(12, 17, 'Memoria RAM Crucial Basics 8GB 4800MHz DDR5', 'DDR5', 8, 'CL40', 4.000, 4800, '288', 'No', '/Imagenes/Productos/Ram/12_a.jpg', 45300.00),
(13, 18, 'Memoria RAM Kingston Fury Beast 8GB 5600MHz CL36 DDR5 Black - AMD EXPO', 'DDR5', 8, 'CL36', 3.600, 5600, '288', 'Sí', '/Imagenes/Productos/Ram/13_a.jpg', 46300.00),
(14, 18, 'Memoria Ram Kingston Fury Beast RGB 8GB 3200MHz DDR4', 'DDR4', 8, 'CL16', 3.200, 3200, '288', 'Sí', '/Imagenes/Productos/Ram/14.jpg', 60100.00),
(15, 18, 'Memoria RAM Kingston Fury Beast 16GB 5200MHz RGB DDR5 CL36 Black - Amd Expo', 'DDR5', 16, 'CL36', 3.100, 5200, '288', 'Sí', '/Imagenes/Productos/Ram/15_a.jpg', 79500.00),
(16, 18, 'Memoria RAM Kingston Fury Beast RGB 16GB 5200MHz DDR5 CL36 White - Amd Expo', 'DDR5', 16, 'CL36', 3.500, 5200, '288', 'Sí', '/Imagenes/Productos/Ram/16.jpg', 79500.00),
(17, 16, 'Memoria Ram Adata XPG Lancer RGB 16GB 6800MHz DDR5', 'DDR5', 16, 'CL36', 3.500, 6800, '288', 'Sí', '/Imagenes/Productos/Ram/17_a.jpg', 126000.00),
(18, 18, 'Memoria Ram Kingston Fury Renegade RGB 16GB 6400MHz DDR5 - Silver/Black - CL32 XMP', 'DDR5', 16, 'CL32', 4.000, 6400, '288', 'Sí, aluminio en color plata y negro con iluminación RGB', '/Imagenes/Productos/Ram/18_a.jpg', 130000.00),
(19, 6, 'Memoria RAM Corsair Dominator Platinum 32GB RGB (2x16GB) 5600MHz DDR5', 'DDR5', 32, 'CL36', 3.500, 5600, '288', 'Sí', '/Imagenes/Productos/Ram/19_a.jpg', 211600.00),
(20, 19, 'Memoria Ram Acer Predator Hermes 48GB (2x24GB) RGB 6800MHz DDR5 Black AMD EXPO - Intel XMP', 'DDR5', 48, 'CL36 (36-46-46-125)', 3.700, 6800, '288', 'Sí, aluminio negro con iluminación RGB', '/Imagenes/Productos/Ram/20_a.jpg', 414100.00),
(21, 41, 'No seleccionar memoria RAM', null, null, null, 0.000, null, null, null, '/Imagenes/Productos/ComponenteSiNo/01_b.jpg', 0.00);


CREATE TABLE compatibilidad_ram (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_motherboard INT,
    id_ram INT,
    FOREIGN KEY (id_motherboard) REFERENCES motherboards(id),
    FOREIGN KEY (id_ram) REFERENCES ram(id)
);

INSERT INTO compatibilidad_ram (id_motherboard, id_ram) VALUES
(1, 3), (1, 4), (1, 5), (1, 6), (1, 8), (1, 11), (1, 14),
(2, 3), (2, 4), (2, 6), (2, 8), (2, 11), (2, 14),
(4, 3), (4, 4), (4, 6), (4, 8), (4, 11), (4, 14),
(6, 3), (6, 4), (6, 6), (6, 8), (6, 11), (6, 14),
(3, 7), (3, 9), (3, 10), (3, 12), (3, 13), (3, 15), (3, 16), (3, 17), (3, 18), (3, 19), (3, 20),
(5, 7), (5, 9), (5, 10), (5, 12), (5, 13), (5, 15), (5, 16), (5, 17), (5, 18), (5, 19), (5, 20),
(7, 7), (7, 9), (7, 10), (7, 12), (7, 13), (7, 15), (7, 16), (7, 17), (7, 18), (7, 19), (7, 20),
(8, 7), (8, 9), (8, 10), (8, 12), (8, 13), (8, 15), (8, 16), (8, 17), (8, 18), (8, 19), (8, 20),
(9, 7), (9, 9), (9, 10), (9, 12), (9, 13), (9, 15), (9, 16), (9, 17), (9, 18), (9, 19), (9, 20),
(10, 7), (10, 9), (10, 10), (10, 12), (10, 13), (10, 15), (10, 16), (10, 17), (10, 18), (10, 19), (10, 20);


CREATE TABLE placa_video (
    id INT PRIMARY KEY  AUTO_INCREMENT,
    fabricante INT,
    nombre VARCHAR(100),
    consumo DECIMAL(6,3),           
    memoria_capacidad_gb INT,          
    memoria_tipo VARCHAR(100),
    memoria_velocidad VARCHAR(100),
    resolucion_max VARCHAR(100),
    refrigeracion VARCHAR(100),
    foto VARCHAR(255),
    precio DECIMAL(10,2),
    FOREIGN KEY (fabricante) REFERENCES marcas(id)
);


INSERT INTO placa_video (id, fabricante, nombre, consumo, memoria_capacidad_gb, memoria_tipo, memoria_velocidad, resolucion_max, refrigeracion, foto, precio) VALUES
(1, 9, 'Placa de Video Asus Nvidia Geforce GT 730 2GB GDDR5 Low Profile', 75.000, 2, 'GDDR5', '5 Gbps', 'No informada', 'No', '/Imagenes/Productos/PlacaVideo/01_a.jpg', 106400.00),
(2, 1, 'Placa de Video Asrock AMD Radeon RX 6500 XT Phantom Gaming D 4GB GDDR6 OC', 107.000, 4, 'GDDR6', '18 Gbps', '7680 x 4320 (8K)', 'No', '/Imagenes/Productos/PlacaVideo/02_a.jpg', 260300.00),
(3, 1, 'Placa de Video ASRock AMD Radeon RX 6600 Challenger D Dual Fan 8GB GDDR6', 132.000, 8, 'GDDR6', '14 Gbps', 'No informada', 'No', '/Imagenes/Productos/PlacaVideo/03_a.jpg', 378300.00),
(4, 20, 'Placa de Video Pny Geforce RTX 5060 8GB Dual Fan OC GDDR7', 160.000, 8, 'GDDR7', '28 Gbps', '7680 x 4320 (8K UHD)', 'No', '/Imagenes/Productos/PlacaVideo/04_a.jpg', 504400.00),
(5, 20, 'Placa de Video Pny Geforce RTX 5060 TI Epic X 8GB Triple Fan Argb OC GDDR7', 185.000, 8, 'GDDR7', '28 Gbps', '7680 x 4320 (8K UHD)', 'No', '/Imagenes/Productos/PlacaVideo/05_a.jpg', 670300.00),
(6, 8, 'Placa de Video Gigabyte Nvidia Geforce RTX 5060 TI EAGLE ICE 8GB OC GDDR7', 185.000, 8, 'GDDR7', '20 Gbps', '7680 x 4320', 'Cooler WINDFORCE Dual (HAWK fans, Alternate Spinning)', '/Imagenes/Productos/PlacaVideo/06_a.jpg', 731900.00),
(7, 20, 'Placa de Video Pny Geforce RTX 5060 TI 16GB STD Dual Fan OC GDDR7', 185.000, 16, 'GDDR7', '20 Gbps', '7680 x 4320 (8K UHD)', 'Dual Fan (STD)', '/Imagenes/Productos/PlacaVideo/07_a.jpg', 860700.00),
(8, 20, 'Placa de Video Pny Geforce RTX 5070 EPIC X ARGB 12GB OC Triple Fan GDDR7', 250.000, 12, 'GDDR7', '28 Gbps', '8K (7680 x 4320), hasta 4 monitores', 'Triple ventilador axial (3 x 90mm), iluminación EPIC-X RGB', '/Imagenes/Productos/PlacaVideo/08_a.jpg', 1098500.00),
(9, 1, 'Placa de Video AMD Radeon Asus RX 9070 PRIME OC 16GB GDDR6', 220.000, 16, 'GDDR6', '20 Gbps', '7680 x 4320', 'Triple ventilador axial (3 x 90mm)', '/Imagenes/Productos/PlacaVideo/09_a.jpg', 1133300.00),
(10, 8, 'Placa de Video Gigabyte Nvidia Geforce RTX 5090 Gaming OC 32GB GDDR7', 575.000, 32, 'GDDR7', '28 Gbps', '7680 x 4320 (8K)', 'WINDFORCE con 3 ventiladores Hawk y cámara de vapor', '/Imagenes/Productos/PlacaVideo/10_a.jpg', 5056700.00),
(11, 41, 'No seleccionar placa de video', 0.000, null, null, null, null, null, '/Imagenes/Productos/ComponenteSiNo/01_b.jpg', 0.00);


CREATE TABLE compatibilidad_video (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_motherboard INT,
    id_video INT,
    FOREIGN KEY (id_motherboard) REFERENCES motherboards(id),
    FOREIGN KEY (id_video) REFERENCES placa_video(id)
);

INSERT INTO compatibilidad_video (id_motherboard, id_video) VALUES
(1, 1), (1, 2), (1, 3), (1, 4), (1, 5), (1, 6), (1, 7), (1, 8),
(2, 1), (2, 2), (2, 3), (2, 4), (2, 5), (2, 6), (2, 7), (2, 8),
(3, 1), (3, 2), (3, 3), (3, 4), (3, 5), (3, 6), (3, 7), (3, 8),
(4, 1), (4, 2), (4, 3), (4, 4), (4, 5), (4, 6), (4, 7), (4, 8),
(5, 1), (5, 2), (5, 3), (5, 4), (5, 5), (5, 6), (5, 7), (5, 8),
(6, 1), (6, 2), (6, 3), (6, 4), (6, 5), (6, 6), (6, 7), (6, 8),
(7, 1), (7, 2), (7, 3), (7, 4), (7, 5), (7, 6), (7, 7), (7, 8),
(8, 1), (8, 2), (8, 3), (8, 4), (8, 5), (8, 6), (8, 7), (8, 8),
(9, 1), (9, 2), (9, 3), (9, 4), (9, 5), (9, 6), (9, 7), (9, 8),
(10, 1), (10, 2), (10, 3), (10, 4), (10, 5), (10, 6), (10, 7), (10, 8);


CREATE TABLE disco (
    id INT PRIMARY KEY  AUTO_INCREMENT,
    fabricante INT,
    nombre VARCHAR(100),
    capacidad VARCHAR(100),
    consumo DECIMAL(5,3),           
    velocidad VARCHAR(100),
    conexion VARCHAR(100),
    foto VARCHAR(255),
    precio DECIMAL(10,2),
    FOREIGN KEY (fabricante) REFERENCES marcas(id)
);

INSERT INTO disco (id, fabricante, nombre, capacidad, consumo, velocidad, conexion, foto, precio) VALUES
(1, 14, 'Disco Solido SSD 240GB Memox Sata III 2.5"', '240 GB', 0.195, '500 MB/s', 'SATA Rev. 3.0 (6 Gb/s), retrocompatible con SATA Rev. 2.0 (3 Gb/s)', '/Imagenes/Productos/Disco/01_a.jpg', 21486.00),
(2, 18, 'Disco Solido SSD 480GB Kingston A400 SATA III (Similar 500GB 512GB)', '480 GB', 0.279, '545 MB/s', 'SATA Rev. 3.0 (6 Gb/s), retrocompatible con SATA Rev. 2.0 (3 Gb/s)', '/Imagenes/Productos/Disco/02_a.jpg', 56100.00),
(3, 12, 'Disco Solido SSD 960GB Hiksemi Wave SATA III (Similar 1TB)', '960 GB', 0.265, 'Lectura hasta 550 MB/s, Escritura hasta 480 MB/s', 'SATA Rev. 3.0 (6 Gb/s), retrocompatible con SATA Rev. 2.0 (3 Gb/s)', '/Imagenes/Productos/Disco/03_a.jpg', 77000.00),
(4, 21, 'Disco Solido SSD 960GB Patriot P310 M.2 NVMe PCIe x4 3.0', '960 GB', 2.380, 'Lectura hasta 2100 MB/s, Escritura hasta 1800 MB/s', 'M.2 Nvme', '/Imagenes/Productos/Disco/04_a.jpg', 83600.00),
(5, 16, 'Disco Solido SSD 2TB Adata Legend 710 M.2 NVMe PCIe x4 3.0', '2 TB', 2.380, 'Lectura hasta 2400 MB/s, Escritura hasta 1800 MB/s', 'M.2', '/Imagenes/Productos/Disco/05_a.jpg', 170500.00),
(6, 6, 'Disco Solido SSD 1TB Corsair MP700 Pro M.2 NVMe PCIe Gen 5.0 x4 - BULK', '1 TB', 0.301, 'Lectura hasta 11700 MB/s, Escritura hasta 9600 MB/s', 'M.2', '/Imagenes/Productos/Disco/06_a.jpg', 234200.00),
(7, 18, 'Disco Solido SSD 2TB Kingston Fury Renegade (Con Difusor Térmico) M.2 NVMe PCIe x4 4.0', '2 TB', 2.800, 'Lectura hasta 7300 MB/s, Escritura hasta 7000 MB/s', 'M.2', '/Imagenes/Productos/Disco/07_a.jpg', 283600.00),
(8, 16, 'Disco Solido SSD 2TB Adata XPG G5 Mars 980 Pro Air Cooling M.2 NVMe PCIe Gen5 x4 - C/Cooler Disipado', '2 TB', 2.800, 'Lectura hasta 14000 MB/s, Escritura hasta 13000 MB/s', 'M.2', '/Imagenes/Productos/Disco/08_a.jpg', 337000.00),
(9, 18, 'Disco Solido SSD 4TB Kingston Fury Renegade G5 M.2 NVMe PCIe 5.0 14.800MB/s', '4 TB', 3.000, 'Lectura hasta 14800 MB/s, Escritura hasta 14000 MB/s', 'M.2', '/Imagenes/Productos/Disco/09_a.jpg', 914900.00),
(10, 41, 'No seleccionar disco', null, 0.000, null, null, '/Imagenes/Productos/ComponenteSiNo/01_b.jpg', 0.00);


CREATE TABLE compatibilidad_disco (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_motherboard INT,
    id_disco INT,
    FOREIGN KEY (id_motherboard) REFERENCES motherboards(id),
    FOREIGN KEY (id_disco) REFERENCES disco(id)
);

INSERT INTO compatibilidad_disco (id_motherboard, id_disco) VALUES
(1, 1), (1, 2), (1, 3),
(2, 1), (2, 2), (2, 3),
(4, 1), (4, 2), (4, 3),
(6, 1), (6, 2), (6, 3),
(3, 1), (3, 2), (3, 3), (3, 4),
(5, 1), (5, 2), (5, 3), (5, 4),
(7, 1), (7, 2), (7, 3), (7, 4),
(8, 1), (8, 2), (8, 3), (8, 4),
(9, 1), (9, 2), (9, 3), (9, 4),
(10, 1), (10, 2), (10, 3), (10, 4);


CREATE TABLE gabinete (
    id INT PRIMARY KEY  AUTO_INCREMENT,
    fabricante INT,
    nombre VARCHAR(100),
    ventana VARCHAR(100),
    colores VARCHAR(100),
    usb VARCHAR(100),
    audio_hd VARCHAR(100),
    ancho Integer,              
    alto Integer,             
    profundidad Integer,       
    ventiladores VARCHAR(255),
    incluidos VARCHAR(100),
    radiadores VARCHAR(100),
    consumo DECIMAL(5,3),
    foto VARCHAR(255),
    precio DECIMAL(10,2),
    FOREIGN KEY (fabricante) REFERENCES marcas(id)
);

INSERT INTO gabinete (id, fabricante, nombre, ventana, colores, usb, audio_hd, ancho, alto, profundidad, ventiladores, incluidos, radiadores, consumo, foto, precio) VALUES
(1, 22, 'Gabinete Sentey 6100-SF H10 negro - Sin Cooler Fan', 'Vidrio templado frontal y lateral', 'Negro', '1 x 3.0, 2 x 2.0', 'Sí', 195, 410, 310, 'Soporta hasta 5 x 120 mm (superior, inferior y trasero)', 'No incluye ventiladores', 'Superior: hasta 240 mm', 0.000, '/Imagenes/Productos/Gabinetes/01_a.jpg', 34900.00),
(2, 11, 'Gabinete MSI Mag Shield M301 X1 Fan', 'No', 'Negro', '2 x 3.0, 1 x 2.0', 'Sí', 206, 352, 345, '1x 120 mm', 'Sí', 'No incluye radiadores', 3.000, '/Imagenes/Productos/Gabinetes/02_a.jpg', 35500.00),
(3, 22, 'Gabinete Sentey 6100-SF H10 Blanco - Sin Cooler Fan', 'Vidrio templado frontal y lateral', 'Blanco', '1 x 3.0, 2 x 2.0', 'Sí', 195, 410, 310, 'Soporta hasta 5 x 120 mm (superior, inferior y trasero)', 'No incluye ventiladores', 'Superior: hasta 240 mm', 5.000, '/Imagenes/Productos/Gabinetes/03_a.jpg', 36600.00),
(4, 23, 'Gabinete Genesis IRID 503 V2 ARGB', 'Vidrio templado', 'Negro', '1 x 3.0, 1 x 2.0', 'Sí', 210, 430, 430, 'Frontales: 2 x 140mm, 3 x 120mm - Traseros: 1 x 120 mm - Superiores: 2 x 120mm, 2 x 140mm', 'No incluye ventiladores', 'No incluye radiadores', 0.000, '/Imagenes/Productos/Gabinetes/05_a.jpg', 79900.00),
(5, 22, 'Gabinete Sentey GS-6130 H30 Blanco - Fan x5 Argb', 'Paneles frontal y lateral de vidrio templado', 'Blanco', '1 x USB 3.0, 1 x USB 2.0', 'Sí', 200, 407, 360, 'Lateral: 2 x 120 mm ARGB (incluidos); Superior: 2 x 120 mm ARGB (incluidos); Trasero: 1 x 120 mm ARGB (incluido); Inferior: hasta 2 x 120 mm', 'Sí', 'Superior o lateral: hasta 240 mm', 20.000, '/Imagenes/Productos/Gabinetes/04_a.jpg', 53500.00),
(6, 7, 'Gabinete Cooler Master Masterbox Q300L V2 ARGB', 'Sí', 'Vidrio templado', 'Negro', '2 x 3.0, 1 x 2.0', 230, 383, 387, 'Frontales: 2 x 140mm - Traseros: 1 x 120 mm - Superiores: 2 x 120mm', 'No incluye ventiladores', '1 x 120 mm', 5.000, '/Imagenes/Productos/Gabinetes/06_a.jpg', 88500.00),
(7, 7, 'Gabinete Cooler Master Masterbox TD 300 Mesh Blanco ARGB', 'Vidrio', 'Blanco', '3 x 3.0', 'Sí', 206, 352, 345, 'Frontales: 2 x 140mm - Traseros: 1 x 120 mm - Superiores: 2 x 120mm', 'No incluye ventiladores', 'No incluye radiadores', 0.000, '/Imagenes/Productos/Gabinetes/07_a.jpg', 115300.00),
(8, 16, 'Gabinete ADATA XPG Starker Air BTF Fan x4 ARGB - Blanco', 'Vidrio templado 3 mm', 'Blanco', '1 x USB 3.2 Tipo-C, 2 x USB 3.2 Tipo-A', 'Sí (combo auric/micro)', 496, 242, 464, 'Frontal/Superior: 3x120/3x140 - Trasero: 120/140 - Shroud: 3x120 - Lateral: 2x120 (al quitar bracket)', '4 x 120mm ARGB', 'Frontal/Superior: hasta 360/280/240mm - Trasero: hasta 140mm', 75.000, '/Imagenes/Productos/Gabinetes/08_a.jpg', 146300.00),
(9, 25, 'Gabinete Thermaltake The Tower 300 TG x2 Fan Bumblebee', 'Paneles frontal y laterales de vidrio templado de 3 mm', 'Amarillo', '3 x 3.0', 'Sí', 300, 515, 333,'Superior: 2x140 mm - Lado derecho: hasta 3x140 mm - Trasero: hasta 2x140 mm - Cubierta de la PSU: 1x140 mm', 'Superior: 2 x 140 mm', 'Lado derecho: hasta 420 mm', 47.250, '/Imagenes/Productos/Gabinetes/09_a.jpg', 241100.00),
(10, 25, 'Gabinete Thermaltake AH T200 Tempered Glass Black Micro Chassis', 'Paneles laterales de vidrio templado de 4 mm', 'Negro', '2 x USB 3.0, 1 x USB 3.1 Gen 2 Tipo-C', 'Sí', 282, 444.2, 551.5, 'Frontal: 2 x 120/140 mm - Superior: 2 x 120/140 mm', 'No incluye ventiladores', 'Frontal: hasta 280 mm', 6.750, '/Imagenes/Productos/Gabinetes/10_a.jpg', 224100.00),
(11, 41, 'No seleccionar gabinete', null, null, null, null, null, null, null, null, null, null, null, null, 0.00);


CREATE TABLE compatibilidad_gabinete (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_motherboard INT,
    id_gabinete INT,
    FOREIGN KEY (id_motherboard) REFERENCES motherboards(id),
    FOREIGN KEY (id_gabinete) REFERENCES gabinete(id)
);

INSERT INTO compatibilidad_gabinete (id_motherboard, id_gabinete) VALUES
(1, 1), (1, 2),
(2, 1), (2, 2),
(3, 1), (3, 2),
(4, 1), (4, 2),
(5, 1), (5, 2),
(6, 1), (6, 2),
(7, 2), (7, 3),
(8, 2), (8, 3),
(9, 2), (9, 3),
(10, 2), (10, 3);


CREATE TABLE monitor (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fabricante INT,
    nombre VARCHAR(100),
    panel VARCHAR(100),
    pantalla VARCHAR(100),
    tamanio VARCHAR(100),           
    vga VARCHAR(100),
    displayport VARCHAR(100),
    usb VARCHAR(100),
    hdmi VARCHAR(100),
    resolucion_max VARCHAR(100),
    consumo DECIMAL(5,3),             
    foto VARCHAR(255),
    precio DECIMAL(10,2),
    FOREIGN KEY (fabricante) REFERENCES marcas(id)
);

INSERT INTO monitor (id, fabricante, nombre, panel, pantalla, tamanio, vga, displayport, usb, hdmi, resolucion_max, consumo, foto, precio) VALUES
(1, 27, 'Monitor Led 19" GO VGA/HDMI', 'Led', 'Plana', '19"', 'Sí', 'No', 'No', 'Sí', '1920 x 1080 (Full HD)', 18.00, '/Imagenes/Productos/Monitor/01.jpg', 104800.00),
(2, 28, 'Monitor LED IPS LG 24MS500 FULL HD 100Hz', 'Led', 'Plana', '24"', 'Sí', 'Sí', 'No', 'Sí', '1920 x 1080 (Full HD)', 16.000, '/Imagenes/Productos/Monitor/02_a.jpg', 173000.00),
(3, 28, 'Monitor Gamer IPS 24" VIEWSONIC VX2428A 180Hz FHD Freesync 0.5ms', 'Led', 'Plana', '24"', 'No', 'Sí', 'No', 'Sí', '1920 x 1080 (Full HD)', 25.000, '/Imagenes/Productos/Monitor/03_a.jpg', 227700.00),
(4, 28, 'Monitor LED 32" LG 32MN500M-B 75Hz IPS HDMI', 'Led', 'Plana', '32"', 'No', 'Sí', 'Sí', 'Sí', '1920 x 1080 (Full HD)', 25.000, '/Imagenes/Productos/Monitor/04_a.jpg', 470700.00),
(5, 28, 'Monitor Gamer LED 32" LG 32GR93U-B Pivot UltraGear UHD 4K 144Hz 1Ms G-Sync Freesync Premium', 'Led', 'Plana', '32"', 'Sí', 'Sí', 'Sí', 'Sí', '3840 x 2160 (Full HD)', 65.000, '/Imagenes/Productos/Monitor/05_a.jpg', 1386300.00),
(6, 41, 'No seleccionar monitor', null, null, null, null, null, null, null, null, 0.000, '/Imagenes/Productos/ComponenteSiNo/01_b.jpg', 0.00);


CREATE TABLE compatibilidad_monitor (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_motherboard INT,
    id_monitor INT,
    FOREIGN KEY (id_motherboard) REFERENCES motherboards(id),
    FOREIGN KEY (id_monitor) REFERENCES monitor(id)
);

INSERT INTO compatibilidad_monitor (id_motherboard, id_monitor) VALUES
(1, 1), (1, 2),
(2, 1), (2, 3),
(3, 2), (3, 3),
(4, 1), (4, 2),
(5, 2), (5, 3),
(6, 1), (6, 2),
(7, 2), (7, 3),
(8, 2), (8, 3),
(9, 2), (9, 3),
(10, 2), (10, 3);


CREATE TABLE mouse (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fabricante INT,
    nombre VARCHAR(100),
    color VARCHAR(20),
    conexion VARCHAR(20),
    botones VARCHAR(20),
    iluminacion VARCHAR(20),
    consumo DECIMAL(5,3),            
    foto VARCHAR(255),
    precio DECIMAL(10,2),
    FOREIGN KEY (fabricante) REFERENCES marcas(id)
);

INSERT INTO mouse (id, fabricante, nombre, color, conexion, botones, iluminacion, consumo, foto, precio) VALUES
(1, 29, 'Mouse Natec Optico RUFF 2 1000 DPI White', 'Blanco/Negro', 'USB cable', '3', 'No', 0.700, '/Imagenes/Productos/Mouse/01_a.jpg', 2900.00),
(2, 30, 'Mouse Fury Hustler RGB', 'Negro', 'USB cable', '7', 'Sí', 1.100, '/Imagenes/Productos/Mouse/02_a.jpg', 6100.00),
(3, 23, 'Mouse Gamer Inalámbrico Genesis Fury Tanto T4', 'Blanco/Azul', 'Inalámbrica (2.4 GHz y Bluetooth 5.0) y cableada USB-C', '7 (programables)', 'No', 1.000, '/Imagenes/Productos/Mouse/03_a.jpg', 32200.00),
(4, 32, 'Mouse Logitech G502 HERO', 'Negro', 'USB cable', '11 (Programables)', 'Sí', 1.000, '/Imagenes/Productos/Mouse/04_a.jpg', 69200.00),
(5, 31, 'Mouse Gamer Razer Basilisk V3 Pro 35k - Chroma RGB', 'Negro', 'Inalámbrica (Razer HyperSpeed Wireless y Bluetooth), Cableada USB Tipo-C', '11 (Programables)', 'Sí', 0.900, '/Imagenes/Productos/Mouse/05_a.jpg', 198200.00),
(6, 32, 'Mouse Logitech G502 X Plus Black', 'Negro/Blanco', 'Wireless', '13', 'Sí', 1.200, '/Imagenes/Productos/Mouse/06_a.jpg', 198900.00),
(7, 31, 'Mouse Razer Viper V2 PRO Wireless', 'Negro', 'Inalámbrica (Razer HyperSpeed Wireless, USB-C)', '5 botones programables', 'No', 1.000, '/Imagenes/Productos/Mouse/07_a.jpg', 236300.00),
(8, 41, 'No seleccionar mouse', null, null, null, null, 0.000, '/Imagenes/Productos/ComponenteSiNo/01_b.jpg', 0.00);


CREATE TABLE compatibilidad_mouse (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_motherboard INT,
    id_mouse INT,
    FOREIGN KEY (id_motherboard) REFERENCES motherboards(id),
    FOREIGN KEY (id_mouse) REFERENCES mouse(id)
);

INSERT INTO compatibilidad_mouse (id_motherboard, id_mouse) VALUES
(1, 1), (1, 2), (1, 3), (1, 4), (1, 5), (1, 6),
(2, 1), (2, 2), (2, 3), (2, 4), (2, 5), (2, 6),
(3, 1), (3, 2), (3, 3), (3, 4), (3, 5), (3, 6),
(4, 1), (4, 2), (4, 3), (4, 4), (4, 5), (4, 6),
(5, 1), (5, 2), (5, 3), (5, 4), (5, 5), (5, 6),
(6, 1), (6, 2), (6, 3), (6, 4), (6, 5), (6, 6),
(7, 1), (7, 2), (7, 3), (7, 4), (7, 5), (7, 6),
(8, 1), (8, 2), (8, 3), (8, 4), (8, 5), (8, 6),
(9, 1), (9, 2), (9, 3), (9, 4), (9, 5), (9, 6),
(10, 1), (10, 2), (10, 3), (10, 4), (10, 5), (10, 6);


CREATE TABLE teclado (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fabricante INT,
    nombre VARCHAR(100),
    color VARCHAR(20),
    conexion VARCHAR(20),
    botones VARCHAR(20),
    iluminacion VARCHAR(20),
    consumo DECIMAL(5,3),            
    foto VARCHAR(255),
    precio DECIMAL(10,2),
    FOREIGN KEY (fabricante) REFERENCES marcas(id)
);

INSERT INTO teclado (id, fabricante, nombre, color, conexion, iluminacion, consumo, foto, precio) VALUES
(1, 32, 'Teclado Logitech K120 Usb', 'Negro', 'USB cable', 'No', 0.200, '/Imagenes/Productos/Teclado/01_a.jpg', 24786.00),
(2, 23, 'Teclado Genesis RHOD 350 RGB Español', 'GriGrafitos', 'USB cable', 'Sí', 0.300, '/Imagenes/Productos/Teclado/02_a.jpg', 12300.00),
(3, 32, 'Teclado Logitech K270 Inalámbrico Graphite', 'Grafito', 'Dongle USB-A wireless', 'No', 0.100, '/Imagenes/Productos/Teclado/03_a.jpg', 24786.00),
(4, 33, 'Teclado Mecanico Redragon FIDD K683WBO RGB Switch Magnetico Hall Wired Usb Tipo C', 'Blanco, naranja y gris', 'Cableado (USB-C a USB-A desmontable)', 'Sí', 25.000, '/Imagenes/Productos/Teclado/04_a.jpg', 79400.00),
(5, 31, 'Teclado Razer BlackWidow V4 Mechanical Yellow Switch US Layout', 'Grafito', 'Cable USB-C desmontable', 'Chroma RGB por tecla + underglow lateral', 4.500, '/Imagenes/Productos/Teclado/05_a.jpg', 218200.00),
(6, 32, 'Teclado Logitech Pro X TKL Magenta Lightspeed inalambrico', 'Magenta', 'Lightspeed 1 ms / Bluetooth / USB-C', 'RGB LIGHTSYNC', 2.500, '/Imagenes/Productos/Teclado/06_a.jpg', 303800.00),
(7, 41, 'No seleccionar teclado', null, null, null, 0.000, '/Imagenes/Productos/ComponenteSiNo/01_b.jpg', 0.00);


CREATE TABLE compatibilidad_teclado (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_motherboard INT,
    id_teclado INT,
    FOREIGN KEY (id_motherboard) REFERENCES motherboards(id),
    FOREIGN KEY (id_teclado) REFERENCES teclado(id)
);

INSERT INTO compatibilidad_teclado (id_motherboard, id_teclado) VALUES
(1, 1), (1, 2), (1, 3), (1, 4), (1, 5), (1, 6),
(2, 1), (2, 2), (2, 3), (2, 4), (2, 5), (2, 6),
(3, 1), (3, 2), (3, 3), (3, 4), (3, 5), (3, 6),
(4, 1), (4, 2), (4, 3), (4, 4), (4, 5), (4, 6),
(5, 1), (5, 2), (5, 3), (5, 4), (5, 5), (5, 6),
(6, 1), (6, 2), (6, 3), (6, 4), (6, 5), (6, 6),
(7, 1), (7, 2), (7, 3), (7, 4), (7, 5), (7, 6),
(8, 1), (8, 2), (8, 3), (8, 4), (8, 5), (8, 6),
(9, 1), (9, 2), (9, 3), (9, 4), (9, 5), (9, 6),
(10, 1), (10, 2), (10, 3), (10, 4), (10, 5), (10, 6);


CREATE TABLE placa_wifi (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fabricante INT,
    nombre VARCHAR(100),
    frecuencia VARCHAR(100),
    velocidad VARCHAR(100),
    consumo DECIMAL(5,3),             
    foto VARCHAR(255),
    precio DECIMAL(10,2),
    FOREIGN KEY (fabricante) REFERENCES marcas(id)
);

INSERT INTO placa_wifi (id, fabricante, nombre, frecuencia, velocidad, consumo, foto, precio) VALUES
(1, 34, 'Placa de Red PCIe WIFI Tp-Link TL-WN881ND 2.4 Ghz 300Mbps', '2.400-2.4835GHz', '11 Mbps - 300 Mbps', 2.000, '/Imagenes/Productos/PlacaWifi/01_a.jpg', 16500.00),
(2, 34, 'Placa de Red WIFI Usb Tp-Link Archer TX10UB Nano AX900 Dual Band 2.4/5Ghz - Wifi 6 + BT', '2.400-2.4835GHz', 'Hasta 900 Mbps (600 Mbps @5 GHz + 300 Mbps @2.4 GHz)', 2.000, '/Imagenes/Productos/PlacaWifi/02_a.jpg', 21500.00),
(3, 34, 'Placa de Red Usb WIFI Tp-Link Archer TXE50UH AXE3000 Triple Band High Gain 2.4/5/6Ghz - Wifi 6E', '2.400-2.4835GHz', '2.4 GHz: hasta 574 Mbps / 5 GHz: hasta 1201 Mbps / 6 GHz: hasta 1201 Mbps', 3.000, '/Imagenes/Productos/PlacaWifi/03_a.jpg', 14785.00),
(4, 41, 'No seleccionar placa wifi', null, null, 0.000, '/Imagenes/Productos/ComponenteSiNo/01_b.jpg', 0.00);


CREATE TABLE compatibilidad_wifi (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_motherboard INT,
    id_wifi INT,
    FOREIGN KEY (id_motherboard) REFERENCES motherboards(id),
    FOREIGN KEY (id_wifi) REFERENCES placa_wifi(id)
);

INSERT INTO compatibilidad_wifi (id_motherboard, id_wifi) VALUES
(1, 1), (1, 2), (1, 3),
(2, 1), (2, 2), (2, 3),
(3, 1), (3, 2), (3, 3),
(4, 1), (4, 2), (4, 3),
(5, 1), (5, 2), (5, 3),
(6, 1), (6, 2), (6, 3),
(7, 1), (7, 2), (7, 3),
(8, 1), (8, 2), (8, 3),
(9, 1), (9, 2), (9, 3),
(10, 1), (10, 2), (10, 3);


CREATE TABLE fuente (
    id INT PRIMARY KEY  AUTO_INCREMENT,
    fabricante INT,
    nombre VARCHAR(100),
    consumo DECIMAL(7,3),             
    eficiencia VARCHAR(100),
    ventilador VARCHAR(100),
    foto VARCHAR(255),
    precio DECIMAL(10,2),
    FOREIGN KEY (fabricante) REFERENCES marcas(id)
);

INSERT INTO fuente (id, fabricante, nombre, consumo, eficiencia, ventilador, foto, precio) VALUES
(1, 26, 'Fuente ATX 550W Perfomance', 500.000, ' 80 % Típicamente', '80 mm', '/Imagenes/Productos/Monitor/01_a.jpg', 23700.00),
(2, 25, 'Fuente 550W Thermaltake LitePower', 550.000, 'No especifica', 'Si (120mm)', '/Imagenes/Productos/Monitor/02_a.jpg', 65100.00),
(3, 16, 'Fuente 700W Adata XPG Probe 80 Plus Bronze', 700.000, '80 PLUS Bronze (hasta 87% a 50% de carga)', '120 mm con cojinete de manguito (2400 ±10% RPM)', '/Imagenes/Productos/Monitor/03_a.jpg', 88200.00),
(4, 22, 'Fuente 850W Sentey GSP850-GM 80 PLUS Gold - Modular', 850.000, '90 %', '120 mm silencioso con control inteligente', '/Imagenes/Productos/Monitor/04_a.jpg', 135400.00),
(5, 6, 'Fuente 1000W Corsair HX1000 80 PLUS Platinum Modular', 1000.000, '97 %', '140 mm con rodamientos de fluido dinámico (FDB) y modo Zero RPM', '/Imagenes/Productos/Fuente/05_a.jpg', 444000.00),
(6, 41, 'No seleccionar fuente', 0.000, null, null, '/Imagenes/Productos/ComponenteSiNo/01_b.jpg', 0.00);


CREATE TABLE compatibilidad_fuente (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_motherboard INT,
    id_fuente INT,
    consumo_total DECIMAL(7,3),
    FOREIGN KEY (id_motherboard) REFERENCES motherboards(id),
    FOREIGN KEY (id_fuente) REFERENCES fuente(id)
);

INSERT INTO compatibilidad_fuente (id_motherboard, id_fuente, consumo_total) VALUES
(1, 1, 350.00), (1, 2, 450.00),
(4, 1, 400.00), (4, 2, 500.00),
(6, 1, 400.00), (6, 2, 500.00),
(2, 1, 350.00), (2, 2, 450.00),
(5, 2, 550.00), (5, 3, 650.00),
(3, 2, 500.00), (3, 3, 650.00),
(7, 2, 550.00), (7, 3, 700.00),
(8, 3, 700.00), (8, 4, 850.00),
(9, 3, 700.00), (9, 4, 850.00),
(10, 3, 750.00), (10, 4, 900.00);


CREATE TABLE armar_pc (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50),
    foto VARCHAR(255),
    precio DECIMAL(10,2)
);

INSERT INTO armar_pc (id, nombre, foto, precio) VALUES
(1, 'Armar la PC', '/Imagenes/Productos/ArmarPC/01_a.jpg', 4999.00),
(2, 'No armar la PC', '/Imagenes/Productos/ArmarPC/01_b.jpg', 0.00);


CREATE TABLE sistema_operativo (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_marca INT,
    nombre VARCHAR(50) NOT NULL,
    detalle VARCHAR(100),
    foto VARCHAR(255),
    precio DECIMAL(10,2)
);

INSERT INTO sistema_operativo (id, id_marca, nombre, detalle, foto, precio) VALUES
(1, 41, 'No agregar sistema operativo', '', '/Imagenes/Productos/SO/01_a.jpg', 0.00),
(2, 35, 'Windows 10 Home', 'Licencia digital OEM', '/Imagenes/Productos/SO/02_a.jpg', 1500000.00),
(3, 35, 'Windows 10 Pro', 'Licencia original', '/Imagenes/Productos/SO/03_a.jpg', 2000000.00),
(4, 35, 'Windows 11 Home', 'Single Language', '/Imagenes/Productos/SO/04_a.jpg', 3000000.00),
(5, 35, 'Windows 11 Pro', 'Single Language', '/Imagenes/Productos/SO/05_a.jpg', 3500000.00),
(6, 36, 'Ubuntu 22.04 LTS', 'Versión gratuita, se cobra costo de instalación', '/Imagenes/Productos/SO/06_a.jpg', 500000.00),
(7, 36, 'Ubuntu 24.04 LTS', 'Versión gratuita, se cobra costo de instalación', '/Imagenes/Productos/SO/07_a.jpg', 500000.00),
(8, 37, 'Linux Mint', 'Versión gratuita, se cobra costo de instalación', '/Imagenes/Productos/SO/08_a.jpg', 500000.00),
(9, 38, 'Debian', 'Versión gratuita, se cobra costo de instalación', '/Imagenes/Productos/SO/09_a.jpg', 500000.00),
(10, 39, 'Fedora', 'Versión gratuita, se cobra costo de instalación', '/Imagenes/Productos/SO/10_a.jpg', 500000.00),
(11, 37, 'Arch Linux', 'Versión gratuita, se cobra costo de instalación', '/Imagenes/Productos/SO/11_a.jpg', 500000.00),
(12, 40, 'ChromeOS Flex', 'Versión gratuita, se cobra costo de instalación', '/Imagenes/Productos/SO/12_a.jpg', 500000.00),
(13, 41, 'FreeDOS', 'Versión gratuita, se cobra costo de instalación', '/Imagenes/Productos/SO/13_a.jpg', 500000.00),
(14, 41, 'Ninguno', 'Versión gratuita, se cobra costo de instalación', '/Imagenes/Productos/SO/14_a.jpg', 500000.00);


CREATE TABLE pc_escritorio (
    id INT,
    fabricante INT,
    nombre VARCHAR(255),
    tipo VARCHAR(100),
    oferta BOOLEAN,                        
    envioGratis BOOLEAN,                   
    gamer BOOLEAN,                         
    teclado_extra BOOLEAN,                 
    usos VARCHAR(100),
    almacenamiento VARCHAR(20),
    pantalla_tamanio VARCHAR(20),
    pantalla_tactil BOOLEAN,              
    pantalla_led BOOLEAN,                 
    memoria_ram INT,                     
    gpu_dedicada BOOLEAN,                 
    sistemaOperativo VARCHAR(20),
    procesador VARCHAR(50),
    imagen VARCHAR(255),
    imagenHover VARCHAR(255),
    salary DECIMAL(10,2),
    FOREIGN KEY (fabricante) REFERENCES marcas(id)
);

INSERT INTO pc_escritorio (id, fabricante, nombre, tipo, oferta, envioGratis, gamer, teclado_extra, usos, almacenamiento, pantalla_tamanio, pantalla_tactil, pantalla_led, memoria_ram, gpu_dedicada, sistemaOperativo, procesador, imagen, imagenHover, salary) VALUES
(1, 45, 'Dell Inspiron 3880', 'PC Armada', 1, 1, 0, 0, 'Oficina', '480 GB', '27"', 0, 1, 8, 0, 'Windows', 'No', 'Imagenes/Productos/CompuArmada/01_a.jpeg', 'Imagenes/Productos/CompuArmada/01_b.jpeg', 85000.00),
(2, 44, 'Lenovo IdeaCentre 3', 'PC Armada', 0, 0, 0, 0, 'Oficina', '1 TB', '21.5"', 1, 1, 4, 0, 'Linux', 'AMD', '/Imagenes/Productos/CompuArmada/02_a.jpeg', '/Imagenes/Productos/CompuArmada/02_b.jpeg', 78000.00),
(3, 46, 'HP Pavilion TP01', 'PC Armada', 1, 1, 0, 0, 'Oficina', '256 GB', '21.5"', 1, 1, 8, 0, 'Windows', 'Intel', '/Imagenes/Productos/CompuArmada/03_a.webp', '/Imagenes/Productos/CompuArmada/03_b.webp', 92000.00),
(4, 9, 'Asus M32CD', 'PC Armada', 0, 0, 1, 0, 'Juegos', '512 GB', '21.5"', 0, 0, 16, 1, 'DOS', 'AMD', '/Imagenes/Productos/CompuArmada/04_a.jpeg', '/Imagenes/Productos/CompuArmada/04_b.jpeg', 60000.00),
(5, 19, 'Acer Aspire TC', 'PC Armada', 1, 1, 1, 0, 'Juegos', '512 GB', '21.5"', 0, 1, 16, 1, 'Windows', 'AMD', '/Imagenes/Productos/CompuArmada/05_a.jpeg', '/Imagenes/Productos/CompuArmada/05_b.jpeg', 75000.00),
(6, 43, 'Samsung Desktop', 'PC Armada', 0, 0, 1, 0, 'Juegos', '512 GB', '21.5"', 0, 1, 16, 1, 'Linux', 'AMD', '/Imagenes/Productos/CompuArmada/06_a.jpeg', '/Imagenes/Productos/CompuArmada/06_b.jpeg', 82000.00),
(7, 42, 'Apple iMac', 'PC Armada', 0, 1, 0, 0, 'Oficina', '960 GB', '21.5"', 0, 1, 8, 1, 'MacOS', 'Intel', '/Imagenes/Productos/CompuArmada/07_a.jpeg', '/Imagenes/Productos/CompuArmada/07_b.jpeg', 150000.00),
(8, 45, 'Dell G5', 'PC Armada', 1, 1, 0, 0, 'Oficina', '240 GB', 'No', 0, 1, 8, 0, 'Windows', 'Intel', '/Imagenes/Productos/CompuArmada/08_a.jpeg', '/Imagenes/Productos/CompuArmada/08_b.jpeg', 89000.00),
(9, 19, 'Acer Chromebox', 'PC Armada', 1, 0, 0, 0, 'Oficina', '120 GB', '21.5"', 0, 1, 8, 0, 'Chrome OS', 'Intel', '/Imagenes/Productos/CompuArmada/09_a.webp', '/Imagenes/Productos/CompuArmada/09_b.webp', 68000.00),
(10, 46, 'HP Omen 30L', 'PC Armada', 0, 1, 0, 0, 'Oficina', '480 GB', '21.5"', 0, 1, 8, 0, 'Windows', 'Intel', '/Imagenes/Productos/CompuArmada/10_b.jpeg', '/Imagenes/Productos/CompuArmada/10_b.jpeg', 95000.00),
(11, 9, 'PC Gamer AMD Ryzen', 'PC Armada', 0, 1, 1, 0, 'Juegos', '2 TB', 'No', 0, 1, 32, 1, 'Windows', 'AMD', '/Imagenes/Productos/CompuArmada/11_a.jpg', '/Imagenes/Productos/CompuArmada/11_b.jpg', 1032550.00),
(12, 9, 'Pc Gamer Amd Ryzen 7 5700g + 32gb + 1tb', 'PC Armada', 0, 1, 1, 0, 'Juegos', '1 TB', 'No', 0, 1, 32, 1, 'Windows', 'AMD', '/Imagenes/Productos/CompuArmada/12_a.webp', '/Imagenes/Productos/CompuArmada/12_b.webp', 544544.00),
(13, 46, 'Pc Armada Gamer Amd Ryzen 7 5700g 32gb 960gb Ssd 32 Gb', 'PC Armada', 0, 1, 1, 0, 'Juegos', '960 GB', 'No', 0, 1, 32, 1, 'Windows', 'AMD', '/Imagenes/Productos/CompuArmada/13_a.webp', '/Imagenes/Productos/CompuArmada/13_b.webp', 623434.00),
(14, 9, 'PC Gamer Intel Core i3 13100F', 'PC Armada', 0, 1, 1, 0, 'Juegos', '1 TB', '24"', 0, 1, 16, 1, 'Windows', 'Intel', '/Imagenes/Productos/CompuArmada/14_a.webp', '/Imagenes/Productos/CompuArmada/14_b.webp', 1340000.00),
(15, 9, 'Pc Diseño Grafico Amd Ryzen 7', 'PC Armada', 0, 1, 0, 1, 'Diseño', '1 TB', '24"', 1, 1, 32, 1, 'Windows', 'AMD', '/Imagenes/Productos/CompuArmada/15_a.webp', '/Imagenes/Productos/CompuArmada/15_b.webp', 787966.00),
(16, 46, 'Pc Armada Intel Core I7 12700 32gb 1tb Fuente 650w Cert 80+ 32 Gb', 'PC Armada', 0, 1, 0, 0, 'Diseño', '1 TB', '24"', 0, 1, 32, 1, 'Windows', 'Intel', '/Imagenes/Productos/CompuArmada/16_a.webp', '/Imagenes/Productos/CompuArmada/16_b.webp', 1039999.00);


CREATE TABLE notebook (
    id INT PRIMARY KEY  AUTO_INCREMENT,
    fabricante INT,
    nombre VARCHAR(255),
    tipo VARCHAR(20),
    oferta BOOLEAN,                    
    envioGratis BOOLEAN,               
    gamer BOOLEAN,                     
    teclado_extra BOOLEAN,             
    usos VARCHAR(100),                 
    almacenamiento VARCHAR(20),
    pantalla_tamanio VARCHAR(20),
    pantalla_tactil BOOLEAN,           
    pantalla_led BOOLEAN,              
    memoria_ram INT,                   
    gpu_dedicada BOOLEAN,              
    procesador VARCHAR(50),
    imagen VARCHAR(255),
    imagenHover VARCHAR(255),
    salary DECIMAL(10,2),
    FOREIGN KEY (fabricante) REFERENCES marcas(id)
);

INSERT INTO notebook (id, fabricante, nombre, tipo, oferta, envioGratis, gamer, teclado_extra, usos, almacenamiento, pantalla_tamanio, pantalla_tactil, pantalla_led, memoria_ram, gpu_dedicada, procesador, imagen, imagenHover, salary) VALUES
(1, 44, 'Lenovo IdeaPad 3', 'Notebook', 1, 1, 0, 0, 'Oficina', '512 GB', '14"', 0, 1, 8, 0, 'AMD', '/Imagenes/Productos/Notebook/01_a.jpeg', '/Imagenes/Productos/Notebook/01_b.jpeg', 110000.00),
(2, 42, 'Apple MacBook Air', 'Notebook', 0, 1, 0, 0, 'Oficina', '512 GB', '15.6"', 0, 1, 8, 0, 'AMD', '/Imagenes/Productos/Notebook/02_a.jpeg', '/Imagenes/Productos/Notebook/02_b.jpeg', 220000.00),
(3, 46, 'HP Pavilion 15', 'Notebook', 1, 0, 0, 0, 'Oficina', '512 GB', '15.6"', 0, 1, 8, 0, 'AMD', '/Imagenes/Productos/Notebook/03_a.jpeg', '/Imagenes/Productos/Notebook/03_b.jpeg', 105000.00),
(4, 45, 'Dell Vostro 3400', 'Notebook', 0, 1, 0, 0, 'Oficina', '512 GB', '15.6"', 0, 1, 16, 0, 'Intel', '/Imagenes/Productos/Notebook/04_a.jpeg', '/Imagenes/Productos/Notebook/04_b.jpeg', 98000.00),
(5, 43, 'Samsung Chromebook', 'Notebook', 1, 1, 0, 0, 'Oficina', '512 GB', '15.6"', 0, 1, 8, 0, 'Intel', '/Imagenes/Productos/Notebook/05_a.jpeg', '/Imagenes/Productos/Notebook/05_b.jpeg', 87000.00),
(6, 19, 'Acer Aspire 5', 'Notebook', 0, 0, 0, 0, 'Oficina', '256 GB', '15.6"', 0, 1, 8, 0, 'Intel', '/Imagenes/Productos/Notebook/06_a.jpeg', '/Imagenes/Productos/Notebook/06_b.jpeg', 94000.00),
(7, 9, 'Asus VivoBook', 'Notebook', 1, 1, 0, 0, 'Oficina', '512 GB', '15.6"', 0, 1, 16, 0, 'AMD', '/Imagenes/Productos/Notebook/07_a.jpeg', '/Imagenes/Productos/Notebook/07_b.jpeg', 102000.00),
(8, 45, 'Dell Inspiron 15', 'Notebook', 0, 1, 0, 0, 'Oficina', '512 GB', '15.6"', 0, 1, 16, 0, 'Intel', '/Imagenes/Productos/Notebook/08_a.jpeg', '/Imagenes/Productos/Notebook/08_b.jpeg', 97000.00),
(9, 42, 'Apple MacBook Pro', 'Notebook', 1, 1, 0, 0, 'Oficina', '240 GB', '14"', 0, 1, 8, 0, 'Intel', '/Imagenes/Productos/Notebook/09_a.jpeg', '/Imagenes/Productos/Notebook/09_b.jpeg', 250000.00),
(10, 44, 'Lenovo ThinkBook', 'Notebook', 0, 0, 0, 0, 'Oficina', '512 GB', '14"', 0, 1, 8, 0, 'AMD', '/Imagenes/Productos/Notebook/10_a.jpeg', '/Imagenes/Productos/Notebook/10_b.jpeg', 89000.00),
(11, 19, 'Notebook Gamer Acer ALG', 'Notebook', 0, 0, 1, 0, 'Juegos', '512 GB', '15.6"', 0, 1, 16, 0, 'Intel', '/Imagenes/Productos/Notebook/11_a.webp', '/Imagenes/Productos/Notebook/11_b.webp', 1199999.00),
(12, 46, 'Notebook Hp Gamer Victus 15', 'Notebook', 0, 0, 1, 0, 'Juegos', '512 GB', '15.6"', 0, 1, 8, 0, 'AMD', '/Imagenes/Productos/Notebook/12_a.webp', '/Imagenes/Productos/Notebook/12_b.webp', 1244499.00),
(13, 46, 'Notebook Hp 17', 'Notebook', 0, 0, 0, 0, 'Diseño', '1 TB', '17.3"', 0, 1, 16, 0, 'AMD', '/Imagenes/Productos/Notebook/13_a.webp', '/Imagenes/Productos/Notebook/13_b.webp', 1099999.00),
(14, 46, 'Laptop Hp 250 G10', 'Notebook', 0, 0, 0, 0, 'Diseño', '512 GB', '15.6"', 0, 1, 32, 0, 'Intel', '/Imagenes/Productos/Notebook/14_a.webp', '/Imagenes/Productos/Notebook/14_b.webp', 1200000.00);



CREATE TABLE usuario (
    id INT PRIMARY KEY AUTO_INCREMENT,
    username VARCHAR(150) NOT NULL,
    first_name VARCHAR(150) NOT NULL,
    last_name VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL,
    last_login TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    is_superuser TINYINT NOT NULL, 
    password  VARCHAR(255),
    is_staff TINYINT NOT NULL,
    is_active TINYINT NOT NULL,
    date_joined TIMESTAMP
);


CREATE TABLE rol (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL
);

INSERT INTO rol (id, nombre) VALUES
(1, 'admin'),
(2, 'cliente'),
(3,'libre');

CREATE TABLE usuario_rol (
    id INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT,
    id_rol INT,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id),
    FOREIGN KEY (id_rol) REFERENCES rol(id)
);


CREATE TABLE menu(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    link VARCHAR(100) NOT NULL,
    icono VARCHAR(100) NOT NULL
)

INSERT INTO menu (id, nombre, link, icono) VALUES
(1, 'Inicio', 'index.php', 'fa-solid fa-house'),
(2, 'Productos', 'productos.php', 'fa-solid fa-store'),
(3, 'Armar PC', 'armar_pc.php', 'fa-solid fa-computer'),
(4, 'Contacto', 'contacto.php', 'fa-solid fa-address-book'),
(5, 'Nosotros', 'nosotros.php', 'fa-solid fa-users'),
(6, 'Mi Cuenta', 'mi_cuenta.php', 'fa-solid fa-user'),
(7, 'Carrito', 'carrito.php', 'fa-solid fa-cart-shopping'),
(8, 'Administración', 'admin/', 'fa-solid fa-lock');


CREATE TABLE categoria(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL
)

INSERT INTO categoria(id,nombre) VALUES
(1,'Computadoras'),
(2,'Hardware'),
CREATE TABLE menu_rol (
    id INT PRIMARY KEY AUTO_INCREMENT,
    menu_id INT,
    rol_id INT,
    FOREIGN KEY (menu_id) REFERENCES menu(id),
    FOREIGN KEY (rol_id) REFERENCES rol (id)
)

CREATE TABLE categoria (
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
)

INSERT INTO categoria (id,nombre) VALUES 
(1,'Computadoras'),
(2,'Hardware')
(3,'Perifericos'),
(4,'Armar tu PC'),
(5,'Contacto');

CREATE TABLE sub_categoria(
    id INT PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(50) NOT NULL,
    categoria_id INT,
     FOREIGN KEY (categoria_id) REFERENCES categoria(id)
)

INSERT INTO sub_categoria(id,nombre,categoria_id) VALUES
(1,'PC Escritorio',1),
(2,'Notebook',1),
(3,'Motherboard',2),
(4,'Cpu',2),
(5,'Gpu',2),
(6,'Ram',2),
(7,'Cooler',3),
(8,'Disco',2),
(9,'Fuente',3),
(10,'Gabinete',2),
(11,'Teclado',3),
(12,'Monitor',3),
(13,'Mouse',3);


CREATE TABLE resultado(
    id INT PRIMARY KEY AUTO_INCREMENT,
    puntaje INT NOT NULL,
    comentario TEXT
)


CREATE TABLE encuesta (
    id INT PRIMARY KEY AUTO_INCREMENT,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    usuario_id INT,
    resultado_id INT,
    FOREIGN KEY (usuario_id) REFERENCES usuario(id)
    FOREIGN KEY (resultado_id) REFERENCES resultado(id)
)

CREATE TABLE venta(
    id INT PRIMARY KEY AUTO_INCREMENT,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    monto FLOAT NOT NULL,
    cliente_id INT,
    FOREIGN KEY (cliente_id) REFERENCES usuario(id)
)

-- ESTA TABLA NO SE IMPLEMENTA TAL CUAL YA QUE USAMOS HERENCIA Y DJANGO LO GESTIONA DIFERENTE EN LA BD-- 
CREATE TABLE detalle_venta (
    id INT PRIMARY KEY AUTO_INCREMENT,
    cantidad INT NOT NULL,
    id_producto INT,
    venta_id INT,
    FOREIGN KEY (id_producto)
)
