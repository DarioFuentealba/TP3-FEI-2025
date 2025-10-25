
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";




CREATE TABLE `auth_group` (
  `id` int NOT NULL,
  `name` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `auth_group_permissions` (
  `id` bigint NOT NULL,
  `group_id` int NOT NULL,
  `permission_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `auth_permission` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `content_type_id` int NOT NULL,
  `codename` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO `auth_permission` (`id`, `name`, `content_type_id`, `codename`) VALUES
(1, 'Can add log entry', 1, 'add_logentry'),
(2, 'Can change log entry', 1, 'change_logentry'),
(3, 'Can delete log entry', 1, 'delete_logentry'),
(4, 'Can view log entry', 1, 'view_logentry'),
(5, 'Can add permission', 2, 'add_permission'),
(6, 'Can change permission', 2, 'change_permission'),
(7, 'Can delete permission', 2, 'delete_permission'),
(8, 'Can view permission', 2, 'view_permission'),
(9, 'Can add group', 3, 'add_group'),
(10, 'Can change group', 3, 'change_group'),
(11, 'Can delete group', 3, 'delete_group'),
(12, 'Can view group', 3, 'view_group'),
(13, 'Can add user', 4, 'add_user'),
(14, 'Can change user', 4, 'change_user'),
(15, 'Can delete user', 4, 'delete_user'),
(16, 'Can view user', 4, 'view_user'),
(17, 'Can add content type', 5, 'add_contenttype'),
(18, 'Can change content type', 5, 'change_contenttype'),
(19, 'Can delete content type', 5, 'delete_contenttype'),
(20, 'Can view content type', 5, 'view_contenttype'),
(21, 'Can add session', 6, 'add_session'),
(22, 'Can change session', 6, 'change_session'),
(23, 'Can delete session', 6, 'delete_session'),
(24, 'Can view session', 6, 'view_session'),
(25, 'Can add categoria', 7, 'add_categoria'),
(26, 'Can change categoria', 7, 'change_categoria'),
(27, 'Can delete categoria', 7, 'delete_categoria'),
(28, 'Can view categoria', 7, 'view_categoria'),
(29, 'Can add sub categoria', 8, 'add_subcategoria'),
(30, 'Can change sub categoria', 8, 'change_subcategoria'),
(31, 'Can delete sub categoria', 8, 'delete_subcategoria'),
(32, 'Can view sub categoria', 8, 'view_subcategoria'),
(33, 'Can add ram', 9, 'add_ram'),
(34, 'Can change ram', 9, 'change_ram'),
(35, 'Can delete ram', 9, 'delete_ram'),
(36, 'Can view ram', 9, 'view_ram'),
(37, 'Can add pc escritorio', 10, 'add_pcescritorio'),
(38, 'Can change pc escritorio', 10, 'change_pcescritorio'),
(39, 'Can delete pc escritorio', 10, 'delete_pcescritorio'),
(40, 'Can view pc escritorio', 10, 'view_pcescritorio'),
(41, 'Can add notebook', 11, 'add_notebook'),
(42, 'Can change notebook', 11, 'change_notebook'),
(43, 'Can delete notebook', 11, 'delete_notebook'),
(44, 'Can view notebook', 11, 'view_notebook'),
(45, 'Can add mouse', 12, 'add_mouse'),
(46, 'Can change mouse', 12, 'change_mouse'),
(47, 'Can delete mouse', 12, 'delete_mouse'),
(48, 'Can view mouse', 12, 'view_mouse'),
(49, 'Can add motherboard', 13, 'add_motherboard'),
(50, 'Can change motherboard', 13, 'change_motherboard'),
(51, 'Can delete motherboard', 13, 'delete_motherboard'),
(52, 'Can view motherboard', 13, 'view_motherboard'),
(53, 'Can add monitor', 14, 'add_monitor'),
(54, 'Can change monitor', 14, 'change_monitor'),
(55, 'Can delete monitor', 14, 'delete_monitor'),
(56, 'Can view monitor', 14, 'view_monitor'),
(57, 'Can add gpu', 15, 'add_gpu'),
(58, 'Can change gpu', 15, 'change_gpu'),
(59, 'Can delete gpu', 15, 'delete_gpu'),
(60, 'Can view gpu', 15, 'view_gpu'),
(61, 'Can add gabinete', 16, 'add_gabinete'),
(62, 'Can change gabinete', 16, 'change_gabinete'),
(63, 'Can delete gabinete', 16, 'delete_gabinete'),
(64, 'Can view gabinete', 16, 'view_gabinete'),
(65, 'Can add fuente', 17, 'add_fuente'),
(66, 'Can change fuente', 17, 'change_fuente'),
(67, 'Can delete fuente', 17, 'delete_fuente'),
(68, 'Can view fuente', 17, 'view_fuente'),
(69, 'Can add disco', 18, 'add_disco'),
(70, 'Can change disco', 18, 'change_disco'),
(71, 'Can delete disco', 18, 'delete_disco'),
(72, 'Can view disco', 18, 'view_disco'),
(73, 'Can add cpu', 19, 'add_cpu'),
(74, 'Can change cpu', 19, 'change_cpu'),
(75, 'Can delete cpu', 19, 'delete_cpu'),
(76, 'Can view cpu', 19, 'view_cpu'),
(77, 'Can add cooler', 20, 'add_cooler'),
(78, 'Can change cooler', 20, 'change_cooler'),
(79, 'Can delete cooler', 20, 'delete_cooler'),
(80, 'Can view cooler', 20, 'view_cooler'),
(81, 'Can add teclado', 21, 'add_teclado'),
(82, 'Can change teclado', 21, 'change_teclado'),
(83, 'Can delete teclado', 21, 'delete_teclado'),
(84, 'Can view teclado', 21, 'view_teclado'),
(85, 'Can add venta', 22, 'add_venta'),
(86, 'Can change venta', 22, 'change_venta'),
(87, 'Can delete venta', 22, 'delete_venta'),
(88, 'Can view venta', 22, 'view_venta'),
(89, 'Can add qr venta', 23, 'add_qrventa'),
(90, 'Can change qr venta', 23, 'change_qrventa'),
(91, 'Can delete qr venta', 23, 'delete_qrventa'),
(92, 'Can view qr venta', 23, 'view_qrventa'),
(93, 'Can add detalle venta', 24, 'add_detalleventa'),
(94, 'Can change detalle venta', 24, 'change_detalleventa'),
(95, 'Can delete detalle venta', 24, 'delete_detalleventa'),
(96, 'Can view detalle venta', 24, 'view_detalleventa'),
(97, 'Can add menu', 25, 'add_menu'),
(98, 'Can change menu', 25, 'change_menu'),
(99, 'Can delete menu', 25, 'delete_menu'),
(100, 'Can view menu', 25, 'view_menu'),
(101, 'Can add rol', 26, 'add_rol'),
(102, 'Can change rol', 26, 'change_rol'),
(103, 'Can delete rol', 26, 'delete_rol'),
(104, 'Can view rol', 26, 'view_rol'),
(105, 'Can add menu rol', 27, 'add_menurol'),
(106, 'Can change menu rol', 27, 'change_menurol'),
(107, 'Can delete menu rol', 27, 'delete_menurol'),
(108, 'Can view menu rol', 27, 'view_menurol'),
(109, 'Can add usuario rol', 28, 'add_usuariorol'),
(110, 'Can change usuario rol', 28, 'change_usuariorol'),
(111, 'Can delete usuario rol', 28, 'delete_usuariorol'),
(112, 'Can view usuario rol', 28, 'view_usuariorol'),
(113, 'Can add encuesta', 29, 'add_encuesta'),
(114, 'Can change encuesta', 29, 'change_encuesta'),
(115, 'Can delete encuesta', 29, 'delete_encuesta'),
(116, 'Can view encuesta', 29, 'view_encuesta'),
(117, 'Can add resultado', 30, 'add_resultado'),
(118, 'Can change resultado', 30, 'change_resultado'),
(119, 'Can delete resultado', 30, 'delete_resultado'),
(120, 'Can view resultado', 30, 'view_resultado');


CREATE TABLE `auth_user` (
  `id` int NOT NULL,
  `password` varchar(128) NOT NULL,
  `last_login` datetime(6) DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(150) NOT NULL,
  `first_name` varchar(150) NOT NULL,
  `last_name` varchar(150) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO `auth_user` (`id`, `password`, `last_login`, `is_superuser`, `username`, `first_name`, `last_name`, `email`, `is_staff`, `is_active`, `date_joined`) VALUES
(1, 'pbkdf2_sha256$870000$MWn546pLi9kiuXKenalEKy$6p1fG5LfudkMqQRV0Ep12LIsAqeIO9KpWepqXwzTdfw=', NULL, 0, 'lolo', 'pablo', 'urra', 'p@g.com', 0, 1, '2025-10-01 15:09:06.675748'),
(2, 'pbkdf2_sha256$870000$7X0ht27eG5Xocr8IfyyfVQ$hTtAVwJbb8coNwIV4mE9GrXD8j7xMIND+eyzU2No73M=', NULL, 0, 'lala', 'dani', 'bf', 'd@g.com', 0, 1, '2025-10-01 15:25:58.882727'),
(3, 'pbkdf2_sha256$870000$3Bs5wnE7H6ydacaa6zFbZO$hVH2Fnq6V3+x2vBLArT6rY3BWNOI/Z193uljCeTD8WA=', NULL, 0, 'lulu', 'erica', 'cabezas', 'e@g.com', 0, 1, '2025-10-01 15:26:49.992350'),
(4, 'pbkdf2_sha256$870000$KRqurNK0aNHvx6Ud5ZeIHr$KXyRNCjmDyeQp41nHVBIdQfjVnqma25wMuSc9os2lA0=', NULL, 0, 'lele', 'pepe', 'gozales', 'l@g.com', 0, 1, '2025-10-01 17:17:58.137770');


CREATE TABLE `auth_user_groups` (
  `id` bigint NOT NULL,
  `user_id` int NOT NULL,
  `group_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `auth_user_user_permissions` (
  `id` bigint NOT NULL,
  `user_id` int NOT NULL,
  `permission_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `computacion_categoria` (
  `id` bigint NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO `computacion_categoria` (`id`, `nombre`) VALUES
(1, 'Computadoras'),
(2, 'Hardware'),
(3, 'Perifericos'),
(4, 'Armar tu PC'),
(5, 'Contacto'),
(6, 'Software');


CREATE TABLE `computacion_cooler` (
  `id` bigint NOT NULL,
  `nombre` longtext NOT NULL,
  `stock` int NOT NULL,
  `fabricante` varchar(200) NOT NULL,
  `oferta` tinyint(1) NOT NULL,
  `color` varchar(50) NOT NULL,
  `consumo` decimal(5,3) NOT NULL,
  `cooler_incluidos` int NOT NULL,
  `iluminacion` varchar(150) NOT NULL,
  `foto` varchar(100) DEFAULT NULL,
  `precio` decimal(10,2) NOT NULL,
  `subcategoria_id` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO `computacion_cooler` (`id`, `nombre`, `stock`, `fabricante`, `oferta`, `color`, `consumo`, `cooler_incluidos`, `iluminacion`, `foto`, `precio`, `subcategoria_id`) VALUES
(1, 'Hyper 212 Black Edition', 15, 'Cooler Master', 1, 'Negro', 6.500, 1, 'RGB', '/coolers/5.jpg', 12000.00, 7),
(2, 'NH-D15', 10, 'Noctua', 0, 'Negro', 10.000, 2, 'No', 'coolers/2.jpg', 25000.00, 7),
(3, 'H100i RGB Platinum', 8, 'Corsair', 1, 'Negro', 15.000, 2, 'RGB', '/coolers/8.jpg', 32000.00, 7),
(4, 'Frost Flow X', 12, 'DeepCool', 0, 'Blanco', 8.000, 1, 'RGB', '/coolers/1.jpg', 14000.00, 7),
(5, 'MasterLiquid ML240L', 9, 'Cooler Master', 1, 'Blanco', 12.000, 2, 'RGB', '/coolers/7.jpg', 18000.00, 7),
(6, 'Dark Rock Pro 4', 7, 'Be Quiet!', 0, 'Negro', 9.500, 2, 'No', '/coolers/3.jpg', 27000.00, 7),
(7, 'ARGB Liquid Cooler 360', 6, 'Thermaltake', 1, 'Negro', 20.000, 3, 'RGB', '/coolers/10.jpg', 42000.00, 7),
(8, 'Scythe Mugen 5', 11, 'Scythe', 0, 'Negro', 7.000, 1, 'No', '/coolers/4.jpg', 15000.00, 7),
(9, 'H150i Elite Capellix', 5, 'Corsair', 1, 'Negro', 25.000, 3, 'RGB', '/coolers/9.jpg', 50000.00, 7),
(10, 'ARCTIC Liquid Freezer II 240', 8, 'ARCTIC', 0, 'Negro', 18.000, 2, 'No', '/coolers/6.jpg', 30000.00, 7);


CREATE TABLE `computacion_cpu` (
  `id` bigint NOT NULL,
  `stock` int NOT NULL,
  `fabricante` varchar(200) NOT NULL,
  `oferta` tinyint(1) NOT NULL,
  `nombre` varchar(200) NOT NULL,
  `modelo` varchar(200) NOT NULL,
  `nucleos` int NOT NULL,
  `hilos` int NOT NULL,
  `frecuencia` varchar(200) NOT NULL,
  `proceso_fabricacion` varchar(200) NOT NULL,
  `grafica_itegrada` tinyint(1) NOT NULL,
  `socket` varchar(200) NOT NULL,
  `incluye_cooler` tinyint(1) NOT NULL,
  `tdp_watts` decimal(6,3) NOT NULL,
  `memoria_l1` varchar(200) NOT NULL,
  `memoria_l2` varchar(200) NOT NULL,
  `memoria_l3` varchar(200) NOT NULL,
  `foto` varchar(100) DEFAULT NULL,
  `precio` decimal(10,2) NOT NULL,
  `subcategoria_id` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO `computacion_cpu` (`id`, `stock`, `fabricante`, `oferta`, `nombre`, `modelo`, `nucleos`, `hilos`, `frecuencia`, `proceso_fabricacion`, `grafica_itegrada`, `socket`, `incluye_cooler`, `tdp_watts`, `memoria_l1`, `memoria_l2`, `memoria_l3`, `foto`, `precio`, `subcategoria_id`) VALUES
(1, 25, 'AMD', 1, 'Ryzen 3', '3200G', 4, 8, '3.9 GHz', '12nm', 1, 'AM4', 1, 65.000, '256 KB', '2 MB', '4 MB', '/cpus/1.jpg', 75000.00, 4),
(2, 20, 'Intel', 0, 'Intel Core', 'i3-10100', 4, 8, '4.3 GHz', '14nm', 1, 'LGA1200', 1, 65.000, '256 KB', '1 MB', '6 MB', '/cpus/2.jpg', 85000.00, 4),
(3, 18, 'Intel', 1, 'Intel Core i5 12th GEN', 'i5-12400F', 6, 12, '4.4 GHz', '10nm', 0, 'LGA1700', 1, 65.000, '384 KB', '7.5 MB', '18 MB', '/cpus/3.jpg', 160000.00, 4),
(4, 15, 'AMD', 0, 'Ryzen 7', '5800X', 8, 16, '4.7 GHz', '7nm', 0, 'AM4', 0, 105.000, '512 KB', '4 MB', '32 MB', '/cpus/4.jpg', 250000.00, 4),
(5, 12, 'Intel', 1, 'Intel Core i7 12th GEN', 'i7-12700K', 12, 20, '5.0 GHz', '10nm', 1, 'LGA1700', 0, 125.000, '768 KB', '12 MB', '25 MB', '/cpus/5.jpg', 320000.00, 4),
(6, 10, 'AMD', 1, 'Ryzen 7 3D V-Cache', '5800X3D', 8, 16, '4.5 GHz', '7nm', 0, 'AM4', 0, 105.000, '512 KB', '4 MB', '96 MB', '/cpus/6.jpg', 280000.00, 4),
(7, 8, 'AMD', 0, 'Ryzen 9 9000 Series Processor', '9950X', 16, 32, '5.7 GHz', '5nm', 1, 'AM5', 0, 170.000, '1 MB', '16 MB', '64 MB', '/cpus/7.jpg', 600000.00, 4),
(8, 6, 'Intel', 1, 'Intel Core i9 Unlocked 14th GEN', 'i9-14900K', 24, 32, '6.0 GHz', '10nm ESF', 1, 'LGA1700', 0, 125.000, '2 MB', '32 MB', '36 MB', '/cpus/8.jpg', 700000.00, 4),
(9, 7, 'AMD', 0, 'Ryzen 9 9000 Series Processor', '9900X', 12, 24, '5.6 GHz', '5nm', 1, 'AM5', 0, 120.000, '768 KB', '12 MB', '64 MB', '/cpus/9.jpg', 550000.00, 4),
(10, 5, 'AMD', 1, 'Ryzen 9 9000 Series Processor', '9950X3D', 16, 32, '5.8 GHz', '5nm', 1, 'AM5', 0, 170.000, '1 MB', '16 MB', '128 MB', '/cpus/10.jpg', 750000.00, 4);


CREATE TABLE `computacion_disco` (
  `id` bigint NOT NULL,
  `nombre` longtext NOT NULL,
  `stock` int NOT NULL,
  `fabricante` varchar(200) NOT NULL,
  `oferta` tinyint(1) NOT NULL,
  `capacidad_gb` int NOT NULL,
  `consumo` decimal(10,2) NOT NULL,
  `velocidad` varchar(150) NOT NULL,
  `conexion` varchar(150) NOT NULL,
  `foto` varchar(100) DEFAULT NULL,
  `precio` decimal(10,2) NOT NULL,
  `subcategoria_id` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO `computacion_disco` (`id`, `nombre`, `stock`, `fabricante`, `oferta`, `capacidad_gb`, `consumo`, `velocidad`, `conexion`, `foto`, `precio`, `subcategoria_id`) VALUES
(1, 'Memox', 30, 'Memox', 1, 480, 5.50, '550 MB/s', 'SATA III', '/discos/1.jpg', 25000.00, 8),
(2, 'Kingston', 25, 'Kingston', 0, 512, 6.00, '3500 MB/s', 'NVMe M.2', '/discos/2.jpg', 32000.00, 8),
(3, 'Hiksemi SSD', 20, 'Hiksemi', 1, 256, 4.80, '500 MB/s', 'SATA III', '/discos/3.jpg', 18000.00, 8),
(4, 'Patriot 960GB', 15, 'Patriot', 0, 960, 7.00, '3400 MB/s', 'NVMe M.2', '/discos/4.jpg', 45000.00, 8),
(5, 'Adata Legend 710', 18, 'Adata', 1, 512, 6.20, '2400 MB/s', 'NVMe M.2', '/discos/5.jpg', 40000.00, 8),
(6, 'MP700 PRO SSD', 12, 'Corsair', 0, 2048, 8.00, '10000 MB/s', 'PCIe 5.0 NVMe', '/discos/6.jpg', 160000.00, 8),
(7, 'Kingston Fury', 22, 'Kingston', 1, 1000, 6.50, '7000 MB/s', 'NVMe M.2', '/discos/7.jpg', 90000.00, 8),
(8, 'XPG', 20, 'ADATA XPG', 0, 512, 6.00, '3500 MB/s', 'NVMe M.2', '/discos/8.jpg', 42000.00, 8),
(9, 'Kingston Fury Renegade G25', 10, 'Kingston', 1, 2000, 7.50, '7300 MB/s', 'NVMe M.2', '/discos/9.jpg', 150000.00, 8);


CREATE TABLE `computacion_fuente` (
  `id` bigint NOT NULL,
  `nombre` longtext NOT NULL,
  `stock` int NOT NULL,
  `fabricante` varchar(200) NOT NULL,
  `oferta` tinyint(1) NOT NULL,
  `consumo` decimal(7,2) NOT NULL,
  `eficiencia` varchar(150) NOT NULL,
  `ventiador` varchar(150) NOT NULL,
  `foto` varchar(100) DEFAULT NULL,
  `precio` decimal(10,2) NOT NULL,
  `subcategoria_id` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO `computacion_fuente` (`id`, `nombre`, `stock`, `fabricante`, `oferta`, `consumo`, `eficiencia`, `ventiador`, `foto`, `precio`, `subcategoria_id`) VALUES
(1, 'Raidmax RX 380W', 20, 'Raidmax', 1, 380.00, '80+ White', '120mm', '/fuentes/1.jpg', 18000.00, 9),
(2, 'Lite Power 550W', 25, 'Thermaltake', 0, 550.00, '80+ Bronze', '120mm', '/fuentes/2.jpg', 25000.00, 9),
(3, 'XPG Probe', 15, 'ADATA XPG', 1, 650.00, '80+ Bronze', '135mm', '/fuentes/3.jpg', 30000.00, 9),
(4, 'Cooler Steel Power 850W', 10, 'Cooler Master', 0, 850.00, '80+ Gold', '140mm', '/fuentes/4.jpg', 52000.00, 9),
(5, 'Corsair HX1000', 8, 'Corsair', 1, 1000.00, '80+ Platinum', '140mm', '/fuentes/5.jpg', 85000.00, 9);


CREATE TABLE `computacion_gabinete` (
  `id` bigint NOT NULL,
  `nombre` longtext NOT NULL,
  `stock` int NOT NULL,
  `fabricante` varchar(200) NOT NULL,
  `oferta` tinyint(1) NOT NULL,
  `ventana` varchar(150) NOT NULL,
  `colores` varchar(150) NOT NULL,
  `usb` varchar(150) NOT NULL,
  `audio_hd` varchar(150) NOT NULL,
  `ancho` int NOT NULL,
  `alto` int NOT NULL,
  `profundidad` int NOT NULL,
  `ventiladores` varchar(150) NOT NULL,
  `incluidos` varchar(150) NOT NULL,
  `radiadores` varchar(150) NOT NULL,
  `consumo` decimal(5,3) NOT NULL,
  `foto` varchar(100) DEFAULT NULL,
  `precio` decimal(10,2) NOT NULL,
  `subcategoria_id` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO `computacion_gabinete` (`id`, `nombre`, `stock`, `fabricante`, `oferta`, `ventana`, `colores`, `usb`, `audio_hd`, `ancho`, `alto`, `profundidad`, `ventiladores`, `incluidos`, `radiadores`, `consumo`, `foto`, `precio`, `subcategoria_id`) VALUES
(1, 'NZXT H510', 15, 'NZXT', 1, '1', 'Negro', 'USB 3.0 x2', 'Sí', 210, 460, 428, '2', '2', '240mm', 20.000, '/gabinetes/8.jpg', 65000.00, 10),
(2, 'Corsair 4000D Airflow', 10, 'Corsair', 0, '1', 'Blanco', 'USB 3.1 x1, USB 3.0 x1', 'Sí', 230, 466, 453, '2', '2', '360mm', 25.000, '/gabinetes/4.jpg', 72000.00, 10),
(3, 'Cooler Master MasterBox MB511 RGB', 18, 'Cooler Master', 1, '1', 'Negro con RGB', 'USB 3.0 x2', 'Sí', 210, 496, 468, '3', '3', '360mm', 28.000, '/gabinetes/7.jpg', 59000.00, 10),
(4, 'Thermaltake V200 TG', 12, 'Thermaltake', 0, '1', 'Negro', 'USB 3.0 x1, USB 2.0 x2', 'Sí', 198, 467, 414, '3', '3', '240mm', 23.000, '/gabinetes/10.jpg', 48000.00, 10),
(5, 'Phanteks Eclipse P400A', 14, 'Phanteks', 1, '1', 'Blanco', 'USB 3.0 x2', 'Sí', 210, 470, 465, '2', '2', '360mm', 26.000, '/gabinetes/3.jpg', 70000.00, 10),
(6, 'Lian Li Lancool II Mesh', 9, 'Lian Li', 0, '1', 'Negro', 'USB 3.1 x1, USB 3.0 x2', 'Sí', 229, 494, 478, '3', '3', '360mm', 30.000, '/gabinetes/1.jpg', 85000.00, 10),
(7, 'Asus TUF Gaming GT501', 8, 'Asus', 1, '1', 'Negro-Gris', 'USB 3.0 x2', 'Sí', 251, 545, 552, '4', '4', '360mm', 35.000, '/gabinetes/2.jpg', 98000.00, 10),
(8, 'Aerocool Aero One Frost', 20, 'Aerocool', 1, '1', 'Negro con RGB', 'USB 3.0 x1, USB 2.0 x2', 'Sí', 210, 465, 470, '4', '4', '240mm', 22.000, '/gabinetes/6.jpg', 45000.00, 10),
(9, 'Gigabyte Aorus C700 Glass', 6, 'Gigabyte', 0, '1', 'Negro con RGB', 'USB-C x1, USB 3.0 x2', 'Sí', 302, 714, 683, '4', '4', '420mm', 40.000, '/gabinetes/9.jpg', 150000.00, 10),
(10, 'MSI MPG Gungnir 110R', 11, 'MSI', 1, '1', 'Blanco', 'USB 3.2 x1, USB 2.0 x2', 'Sí', 215, 430, 450, '4', '4', '360mm', 27.000, '/gabinetes/5.jpg', 62000.00, 10);


CREATE TABLE `computacion_gpu` (
  `id` bigint NOT NULL,
  `nombre` longtext NOT NULL,
  `stock` int NOT NULL,
  `fabricante` varchar(200) NOT NULL,
  `oferta` tinyint(1) NOT NULL,
  `consumo` decimal(10,2) NOT NULL,
  `memoria_capacidad_gb` int NOT NULL,
  `memoria_tipo` varchar(200) NOT NULL,
  `memoria_velocidad` varchar(200) NOT NULL,
  `resolucion` varchar(200) NOT NULL,
  `refrigeracion` varchar(200) NOT NULL,
  `foto` varchar(100) DEFAULT NULL,
  `precio` decimal(10,2) NOT NULL,
  `subcategoria_id` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO `computacion_gpu` (`id`, `nombre`, `stock`, `fabricante`, `oferta`, `consumo`, `memoria_capacidad_gb`, `memoria_tipo`, `memoria_velocidad`, `resolucion`, `refrigeracion`, `foto`, `precio`, `subcategoria_id`) VALUES
(1, 'Asus GeForce NVIDIA RTX 4060', 12, 'Asus', 1, 140.00, 8, 'GDDR6', '17 Gbps', '7680x4320', 'ventilador doble', '/gpus/1.jpg', 350000.00, 5),
(2, 'AMD Radeon RX 6500 XT Asrock', 15, 'Asrock', 0, 120.00, 4, 'GDDR6', '18 Gbps', '7680x4320', 'ventilador simple', '/gpus/2.jpg', 180000.00, 5),
(3, 'AMD Challenger Radeon RX 6600 XT Asrock', 10, 'Asrock', 1, 160.00, 8, 'GDDR6', '16 Gbps', '7680x4320', 'ventilador doble', '/gpus/3.jpg', 240000.00, 5),
(4, 'PNY GeForce RTX 5060 NVIDIA', 14, 'PNY', 0, 170.00, 8, 'GDDR6', '18 Gbps', '7680x4320', 'ventilador doble', '/gpus/4.jpg', 400000.00, 5),
(5, 'PNY GeForce RTX 5060 Ti NVIDIA', 9, 'PNY', 1, 200.00, 12, 'GDDR6X', '19 Gbps', '7680x4320', 'ventilador triple', '/gpus/5.jpg', 480000.00, 5),
(6, 'Gigabyte Eagle GeForce RTX 5060 Ti NVIDIA', 8, 'Gigabyte', 1, 210.00, 12, 'GDDR6X', '19.5 Gbps', '7680x4320', 'ventilador triple', '/gpus/6.jpg', 490000.00, 5),
(7, 'PNY GeForce RTX 5070 NVIDIA', 7, 'PNY', 0, 250.00, 16, 'GDDR6X', '21 Gbps', '7680x4320', 'ventilador triple', '/gpus/7.jpg', 600000.00, 5),
(8, 'AMD Prime Radeon RX 9070', 5, 'AMD', 1, 280.00, 16, 'GDDR6', '20 Gbps', '7680x4320', 'ventilador doble', '/gpus/8.jpg', 700000.00, 5),
(9, 'Gigabyte GeForce RTX 5090', 3, 'Gigabyte', 0, 450.00, 24, 'GDDR6X', '23 Gbps', '7680x4320', 'liquida AIO', '/gpus/9.jpg', 1200000.00, 5),
(10, 'Asus ROG Strix GeForce RTX 5080', 6, 'Asus', 1, 380.00, 20, 'GDDR6X', '21 Gbps', '7680x4320', 'ventilador triple', '/gpus/10.jpg', 950000.00, 5);


CREATE TABLE `computacion_monitor` (
  `id` bigint NOT NULL,
  `nombre` longtext NOT NULL,
  `stock` int NOT NULL,
  `fabricante` varchar(200) NOT NULL,
  `oferta` tinyint(1) NOT NULL,
  `panel` varchar(150) NOT NULL,
  `pantalla` varchar(150) NOT NULL,
  `tamanio` varchar(150) NOT NULL,
  `vga` varchar(150) NOT NULL,
  `display_port` varchar(150) NOT NULL,
  `usb` varchar(150) NOT NULL,
  `hdmi` varchar(150) NOT NULL,
  `resolucion` varchar(150) NOT NULL,
  `consumo` decimal(5,3) NOT NULL,
  `foto` varchar(100) DEFAULT NULL,
  `precio` decimal(10,2) NOT NULL,
  `subcategoria_id` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO `computacion_monitor` (`id`, `nombre`, `stock`, `fabricante`, `oferta`, `panel`, `pantalla`, `tamanio`, `vga`, `display_port`, `usb`, `hdmi`, `resolucion`, `consumo`, `foto`, `precio`, `subcategoria_id`) VALUES
(1, 'ASUS TUF Gaming VG27AQ', 10, 'ASUS', 1, 'IPS', 'LED', '27 pulgadas', 'Sí', 'Sí', 'No', 'Sí', '2560x1440', 45.500, '/monitores/1.jpg', 250000.00, 12),
(2, 'Gigabyte M32Q', 7, 'Gigabyte', 0, 'IPS', 'LED', '32 pulgadas', 'No', 'Sí', 'Sí', 'Sí', '2560x1440', 55.000, '/monitores/3.jpg', 280000.00, 12),
(3, 'Samsung Odyssey G5', 12, 'Samsung', 1, 'VA', 'Curvo', '32 pulgadas', 'Sí', 'Sí', 'No', 'Sí', '2560x1440', 60.000, '/monitores/2.jpg', 300000.00, 12),
(4, 'LG UltraGear 24GN600-B', 15, 'LG', 0, 'IPS', 'LED', '24 pulgadas', 'Sí', 'No', 'No', 'Sí', '1920x1080', 40.000, '/monitores/5.jpg', 180000.00, 12),
(5, 'MSI Optix MAG342CQR', 6, 'MSI', 1, 'VA', 'Curvo', '34 pulgadas', 'No', 'Sí', 'Sí', 'Sí', '3440x1440', 65.000, '/monitores/4.jpg', 350000.00, 12);


CREATE TABLE `computacion_motherboard` (
  `id` bigint NOT NULL,
  `nombre` longtext NOT NULL,
  `stock` int NOT NULL,
  `fabricante` varchar(200) NOT NULL,
  `oferta` tinyint(1) NOT NULL,
  `memoria` varchar(200) NOT NULL,
  `socket` varchar(200) NOT NULL,
  `puerto_sata` varchar(200) NOT NULL,
  `ranura_ram` varchar(200) NOT NULL,
  `pci` varchar(200) NOT NULL,
  `usb` varchar(200) NOT NULL,
  `hdmi` varchar(200) NOT NULL,
  `vga` varchar(200) NOT NULL,
  `consumo` decimal(10,2) NOT NULL,
  `foto` varchar(100) DEFAULT NULL,
  `precio` decimal(10,2) NOT NULL,
  `subcategoria_id` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO `computacion_motherboard` (`id`, `nombre`, `stock`, `fabricante`, `oferta`, `memoria`, `socket`, `puerto_sata`, `ranura_ram`, `pci`, `usb`, `hdmi`, `vga`, `consumo`, `foto`, `precio`, `subcategoria_id`) VALUES
(1, 'prime A520m-K', 10, 'Asus', 0, 'DDR4', 'AM4', '4', '2', '1', '4', '1', '1', 65.00, 'motherboards/1.jpg', 15000.00, 3),
(2, 'H510M K V2', 8, 'Gigabyte', 1, 'DDR4', 'LGA1200', '6', '2', '1', '4', '1', '1', 50.00, 'motherboards/2.jpg', 14000.00, 3),
(3, 'PRIME A620M-K', 12, 'Asus', 0, 'DDR5', 'AM5', '4', '2', '1', '4', '1', '1', 70.00, 'motherboards/3.jpg', 18000.00, 3),
(4, 'PHANTOM GAMING 4/ac', 7, 'Asrock', 1, 'DDR4', 'AM4', '6', '2', '2', '4', '1', '1', 60.00, 'motherboards/4.jpg', 16000.00, 3),
(5, 'PRO B760M-E', 9, 'MSI', 0, 'DDR5', 'LGA1700', '4', '4', '2', '6', '2', '1', 75.00, 'motherboards/5', 22000.00, 3),
(6, 'B550 ADRUS ELITE AX V2', 5, 'Gigabyte', 1, 'DDR4', 'AM4', '6', '4', '2', '6', '2', '1', 80.00, 'motherboards/6', 20000.00, 3),
(7, 'TUF GAMING B650M-PLUS WIFI', 6, 'Asus', 0, 'DDR5', 'AM5', '6', '4', '2', '6', '2', '1', 85.00, 'motherboards/7.jpg', 24000.00, 3),
(8, 'X870E TAICHI', 4, 'Asrock', 1, 'DDR5', 'AM5', '8', '4', '3', '8', '2', '2', 95.00, 'motherboards/8.jpg', 35000.00, 3),
(9, 'X870E ADRUS MASTER', 3, 'ADRUS', 0, 'DDR5', 'AM5', '8', '4', '3', '8', '2', '2', 100.00, 'motherboards/9.jpg', 38000.00, 3),
(10, 'ROG STRIX X870E-E GAMING WIFI', 2, 'Asus', 1, 'DDR5', 'AM5', '8', '4', '3', '8', '2', '2', 105.00, 'motherboards/10', 42000.00, 3);


CREATE TABLE `computacion_mouse` (
  `id` bigint NOT NULL,
  `nombre` longtext NOT NULL,
  `stock` int NOT NULL,
  `fabricante` varchar(200) NOT NULL,
  `oferta` tinyint(1) NOT NULL,
  `color` varchar(50) NOT NULL,
  `conexion` varchar(50) NOT NULL,
  `botones` varchar(50) NOT NULL,
  `iluminacion` varchar(50) NOT NULL,
  `foto` varchar(100) DEFAULT NULL,
  `precio` decimal(10,2) NOT NULL,
  `subcategoria_id` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO `computacion_mouse` (`id`, `nombre`, `stock`, `fabricante`, `oferta`, `color`, `conexion`, `botones`, `iluminacion`, `foto`, `precio`, `subcategoria_id`) VALUES
(1, 'Natec Óptico', 20, 'Natec', 0, 'Blanco', 'Cableado', '3', 'No', '/mouses/1.jpg', 8000.00, 13),
(2, 'Gamer Óptico RGB Fury', 15, 'Fury', 1, 'Negro', 'Cableado', '6', 'RGB', '/mouses/2.jpg', 12000.00, 13),
(3, 'Gamer Genesis RGB Fury', 18, 'Genesis', 1, 'Blanco', 'Cableado', '7', 'RGB', '/mouses/3.jpg', 15000.00, 13),
(4, 'G502 HERO Logitech G', 10, 'Logitech', 0, 'Negro', 'Cableado', '11', 'RGB', '/mouses/4.jpg', 22000.00, 13),
(5, 'Gaming RGB Ergonómico Razer Basilisk', 12, 'Razer', 1, 'Negro', 'Cableado', '9', 'RGB', '/mouses/5.jpg', 28000.00, 13),
(6, 'Inalámbrico RGB G502 Plus Logitech', 8, 'Logitech', 1, 'Negro', 'Inalámbrico', '11', 'RGB', '/mouses/6.jpg', 32000.00, 13),
(7, 'Mouse Inalámbrico Gamer Razer Viper', 9, 'Razer', 0, 'Negro', 'Inalámbrico', '8', 'RGB', '/mouses/7.jpg', 35000.00, 13);


CREATE TABLE `computacion_notebook` (
  `id` bigint NOT NULL,
  `nombre` longtext NOT NULL,
  `stock` int NOT NULL,
  `fabricante` varchar(200) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `oferta` tinyint(1) NOT NULL,
  `envio_gratis` tinyint(1) NOT NULL,
  `gamer` tinyint(1) NOT NULL,
  `teclado_extra` tinyint(1) NOT NULL,
  `usos` varchar(150) NOT NULL,
  `almacenamiento` varchar(50) NOT NULL,
  `pantalla_tamanio` varchar(50) NOT NULL,
  `pantalla_tactil` tinyint(1) NOT NULL,
  `pantala_led` tinyint(1) NOT NULL,
  `memoria_ram` int NOT NULL,
  `gpu_dedicada` tinyint(1) NOT NULL,
  `procesador` varchar(50) NOT NULL,
  `foto` varchar(100) DEFAULT NULL,
  `precio` decimal(10,2) NOT NULL,
  `subcategoria_id` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO `computacion_notebook` (`id`, `nombre`, `stock`, `fabricante`, `tipo`, `oferta`, `envio_gratis`, `gamer`, `teclado_extra`, `usos`, `almacenamiento`, `pantalla_tamanio`, `pantalla_tactil`, `pantala_led`, `memoria_ram`, `gpu_dedicada`, `procesador`, `foto`, `precio`, `subcategoria_id`) VALUES
(1, 'HP Pavilion 14', 15, 'HP', 'Ultrabook', 1, 1, 0, 0, 'Oficina', '512GB SSD', '14\"', 0, 1, 8, 0, 'Intel Core i5', '/notebooks/1.jpeg', 450000.00, 2),
(2, 'Acer Aspire 5', 20, 'Acer', 'Notebook', 0, 1, 0, 0, 'Estudio', '1TB HDD', '15.6\"', 0, 1, 8, 0, 'Intel Core i3', '/notebooks/2.jpeg', 380000.00, 2),
(3, 'HP Envy 13', 10, 'HP', 'Notebook', 1, 1, 0, 0, 'Diseño', '512GB SSD', '13.3\"', 1, 1, 16, 1, 'Intel Core i7', '/notebooks/3.jpeg', 600000.00, 2),
(4, 'Lenovo ThinkBook 15', 12, 'Lenovo', 'Notebook', 0, 1, 0, 0, 'Trabajo', '1TB SSD', '15.6\"', 0, 1, 16, 0, 'AMD Ryzen 5', '/notebooks/4.jpeg', 520000.00, 2),
(5, 'Acer Swift 3', 18, 'Acer', 'Ultrabook', 1, 1, 0, 0, 'Movilidad', '512GB SSD', '14\"', 0, 1, 8, 0, 'Intel Core i5', '/notebooks/5.jpeg', 470000.00, 2),
(6, 'Asus VivoBook 15', 15, 'Asus', 'Notebook', 0, 1, 0, 0, 'Estudio', '1TB HDD', '15.6\"', 0, 1, 8, 0, 'Intel Core i3', '/notebooks/6.jpeg', 390000.00, 2),
(7, 'Lenovo IdeaPad Gaming 3', 8, 'Lenovo', 'Gaming', 1, 1, 1, 1, 'Gaming', '512GB SSD', '15.6\"', 0, 1, 16, 1, 'AMD Ryzen 7', '/notebooks/7.jpeg', 680000.00, 2),
(8, 'HP Omen 16', 10, 'HP', 'Gaming', 1, 1, 1, 1, 'Gaming', '1TB SSD', '16.1\"', 0, 1, 32, 1, 'Intel Core i7', '/notebooks/8.jpeg', 950000.00, 2),
(9, 'Bangho Max L5', 9, 'Bangho Maz', 'Notebook', 0, 0, 0, 0, 'Hogar', '512GB SSD', '15.6\"', 0, 1, 8, 0, 'Intel Core i5', '/notebooks/9.jpeg', 420000.00, 2),
(10, 'HP EliteBook 845', 7, 'HP', 'Ultrabook', 0, 1, 0, 0, 'Empresarial', '1TB SSD', '14\"', 0, 1, 16, 0, 'AMD Ryzen 5 PRO', '/notebooks/10.jpeg', 570000.00, 2),
(11, 'Acer Nitro 5 Gaming', 6, 'Acer Gaming', 'Gaming', 1, 1, 1, 1, 'Gaming', '1TB SSD', '17.3\"', 0, 1, 32, 1, 'Intel Core i9', '/notebooks/11.webp', 980000.00, 2),
(12, 'HP Victus 16', 8, 'HP Victus', 'Gaming', 1, 1, 1, 1, 'Gaming', '1TB SSD', '16.1\"', 0, 1, 16, 1, 'AMD Ryzen 7', '/notebooks/12.webp', 890000.00, 2),
(13, 'HP 17 Notebook', 5, 'HP 17', 'Notebook', 0, 1, 0, 0, 'Oficina', '1TB HDD', '17.3\"', 0, 1, 8, 0, 'Intel Core i3', '/notebooks/13.webp', 430000.00, 2),
(14, 'HP Spectre x360', 6, 'HP', 'Convertible', 1, 1, 0, 0, 'Diseño', '1TB SSD', '13.5\"', 1, 1, 16, 1, 'Intel Core i7', '/notebooks/14.webp', 920000.00, 2);


CREATE TABLE `computacion_pcescritorio` (
  `id` bigint NOT NULL,
  `nombre` longtext NOT NULL,
  `stock` int NOT NULL,
  `fabricante` varchar(200) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `oferta` tinyint(1) NOT NULL,
  `envio_gratis` tinyint(1) NOT NULL,
  `gamer` tinyint(1) NOT NULL,
  `teclado_extra` tinyint(1) NOT NULL,
  `usos` varchar(150) NOT NULL,
  `almacenamiento` varchar(50) NOT NULL,
  `pantalla_tamanio` varchar(50) NOT NULL,
  `pantalla_tactil` tinyint(1) NOT NULL,
  `pantala_led` tinyint(1) NOT NULL,
  `memoria_ram` int NOT NULL,
  `gpu_dedicada` tinyint(1) NOT NULL,
  `procesador` varchar(50) NOT NULL,
  `foto` varchar(100) DEFAULT NULL,
  `precio` decimal(10,2) NOT NULL,
  `subcategoria_id` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO `computacion_pcescritorio` (`id`, `nombre`, `stock`, `fabricante`, `tipo`, `oferta`, `envio_gratis`, `gamer`, `teclado_extra`, `usos`, `almacenamiento`, `pantalla_tamanio`, `pantalla_tactil`, `pantala_led`, `memoria_ram`, `gpu_dedicada`, `procesador`, `foto`, `precio`, `subcategoria_id`) VALUES
(1, 'All in One Bangho Lite', 20, 'Bangho', 'All in One', 0, 1, 0, 1, 'Oficina', '512', '21', 0, 1, 8, 0, 'Intel Celeron', '/pc_escritorios/1.jpeg', 350000.00, 1),
(2, 'All in one Lenovo Ideacenter', 25, 'Lenovo', 'All in One', 1, 1, 0, 0, 'Hogar', '512', '23', 0, 1, 8, 0, 'Intel i3', '/pc_escritorios/2.jpeg', 400000.00, 1),
(3, 'All in one Apple iMac', 15, 'Apple', 'All in One', 0, 1, 0, 0, 'Diseño', '1024', '27', 0, 1, 16, 1, 'Apple M1', '/pc_escritorios/3.webp', 1200000.00, 1),
(4, 'Pc Kelyx Pcarm', 30, 'Kelyx', 'PC de Escritorio', 1, 0, 0, 1, 'Oficina', '256', '0', 0, 0, 4, 0, 'Intel Celeron', '/pc_escritorios/4.jpg', 220000.00, 1),
(5, 'PC completa Gfast H100 Intel Celeron 4Gb', 40, 'Gfast', 'PC Completa', 0, 0, 0, 1, 'Hogar', '256', '0', 0, 0, 4, 0, 'Intel Celeron', '/pc_escritorios/5.jpeg', 200000.00, 1),
(6, 'PC armada Amd ryzen 3 3200g Msi B450m', 35, 'MSI', 'PC Armada', 1, 0, 1, 1, 'Gaming', '512', '0', 0, 1, 8, 1, 'AMD Ryzen 3 3200g', '/pc_escritorios/6.webp', 350000.00, 1),
(7, 'PC Gamer Armada AMD Ryzen 5 2600', 28, 'AMD', 'PC Gamer', 1, 0, 1, 1, 'Gaming', '1024', '0', 0, 1, 16, 1, 'AMD Ryzen 5 2600', '/pc_escritorios/7.jpeg', 500000.00, 1),
(8, 'PC Armada Gamer Amd Ryzen 7 5700g', 18, 'AMD', 'PC Gamer', 0, 1, 1, 1, 'Gaming', '1024', '0', 0, 1, 16, 1, 'AMD Ryzen 7 5700g', '/pc_escritorios/8.jpg', 650000.00, 1),
(9, 'PC Sentey F10 Gamer', 20, 'Sentey', 'PC Gamer', 1, 0, 1, 1, 'Gaming', '512', '0', 0, 1, 16, 1, 'Intel i5 10400f', '/pc_escritorios/9.webp', 480000.00, 1),
(10, 'PC gamer intel core i5 10400f', 22, 'Intel', 'PC Gamer', 1, 0, 1, 1, 'Gaming', '1024', '0', 0, 1, 16, 1, 'Intel Core i5 10400f', '/pc_escritorios/10.webp', 550000.00, 1),
(11, 'Pc diseño grafico Ryzen 7 8700g', 15, 'AMD', 'PC Profesional', 0, 1, 0, 0, 'Diseño', '2048', '0', 0, 1, 32, 1, 'AMD Ryzen 7 8700g', '/pc_escritorios/11.jpg', 900000.00, 1),
(12, 'PC armada intel core i5 14400 8gb ddr4', 25, 'Intel', 'PC Armada', 1, 0, 0, 1, 'Oficina', '512', '0', 0, 1, 8, 1, 'Intel Core i5 14400', '/pc_escritorios/12.webp', 420000.00, 1);


CREATE TABLE `computacion_ram` (
  `id` bigint NOT NULL,
  `nombre` longtext NOT NULL,
  `stock` int NOT NULL,
  `fabricante` varchar(200) NOT NULL,
  `oferta` tinyint(1) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `capacidad_gb` int NOT NULL,
  `latencia` varchar(50) NOT NULL,
  `consumo` decimal(10,2) NOT NULL,
  `velocidad` int NOT NULL,
  `pin_de_memoria` varchar(150) NOT NULL,
  `disipador_de_calor` varchar(150) NOT NULL,
  `foto` varchar(100) DEFAULT NULL,
  `precio` decimal(10,2) NOT NULL,
  `subcategoria_id` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

INSERT INTO `computacion_ram` (`id`, `nombre`, `stock`, `fabricante`, `oferta`, `tipo`, `capacidad_gb`, `latencia`, `consumo`, `velocidad`, `pin_de_memoria`, `disipador_de_calor`, `foto`, `precio`, `subcategoria_id`) VALUES
(1, 'Hiksemi DDR4 8GB 3200MHz', 50, 'Hiksemi', 0, 'DDR4', 8, 'CL16', 1.20, 3200, '288', '1', '/ram/1.jpg', 15000.00, 6),
(2, 'Hikvision DDR4 16GB 3200MHz', 40, 'Hikvision', 1, 'DDR4', 16, 'CL18', 1.35, 3200, '288', '1', '/rams/2.jpg', 28000.00, 6),
(3, 'PNY XLR8 DDR5 32GB 5600MHz', 30, 'PNY', 1, 'DDR5', 32, 'CL36', 1.25, 5600, '288', '1', '/rams/3.jpg', 65000.00, 6),
(4, 'Hiksemi DDR5 16GB 5200MHz', 35, 'Hiksemi', 0, 'DDR5', 16, 'CL38', 1.25, 5200, '288', '0', '/rams/4.jpg', 42000.00, 6),
(5, 'Memox DDR4 8GB 2666MHz', 60, 'Memox', 0, 'DDR4', 8, 'CL19', 1.20, 2666, '288', '0', '/rams/5.jpg', 12000.00, 6),
(6, 'Hiksemi DDR4 32GB 3200MHz', 20, 'Hiksemi', 1, 'DDR4', 32, 'CL18', 1.35, 3200, '288', '1', '/rams/6.jpg', 58000.00, 6),
(7, 'Hiksemi DDR5 64GB 6000MHz', 10, 'Hiksemi', 1, 'DDR5', 64, 'CL40', 1.30, 6000, '288', '1', '/rams/7.jpg', 125000.00, 6),
(8, 'Hiksemi Future DDR5 32GB 6400MHz RGB', 15, 'Hiksemi Future', 1, 'DDR5', 32, 'CL32', 1.35, 6400, '288', '1', '/rams/8.jpg', 95000.00, 6),
(9, 'Oscoo DDR4 16GB 3000MHz', 25, 'Oscoo', 0, 'DDR4', 16, 'CL17', 1.20, 3000, '288', '0', '/rams/9.jpg', 26000.00, 6),
(10, 'Adata XPG Lancer DDR5 32GB 6000MHz', 18, 'Adata', 1, 'DDR5', 32, 'CL36', 1.35, 6000, '288', '1', '/rams/10.jpg', 88000.00, 6);


CREATE TABLE `computacion_subcategoria` (
  `id` bigint NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `categoria_id` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO `computacion_subcategoria` (`id`, `nombre`, `categoria_id`) VALUES
(1, 'PC Escritorio', 1),
(2, 'Notebook', 1),
(3, 'Motherboard', 2),
(4, 'Cpu', 2),
(5, 'Gpu', 2),
(6, 'Ram', 2),
(7, 'Cooler', 3),
(8, 'Disco', 2),
(9, 'Fuente', 3),
(10, 'Gabinete', 2),
(11, 'Teclado', 3),
(12, 'Monitor', 3),
(13, 'Mouse', 3),
(14, 'Sistema_Operativo', 6),
(15, 'Paquete_office', 6);


CREATE TABLE `computacion_teclado` (
  `id` bigint NOT NULL,
  `nombre` longtext NOT NULL,
  `stock` int NOT NULL,
  `fabricante` varchar(200) NOT NULL,
  `oferta` tinyint(1) NOT NULL,
  `color` varchar(50) NOT NULL,
  `conexion` varchar(50) NOT NULL,
  `botones` varchar(50) NOT NULL,
  `iluminacion` varchar(50) NOT NULL,
  `consumo` decimal(5,3) NOT NULL,
  `foto` varchar(100) DEFAULT NULL,
  `precio` decimal(10,2) NOT NULL,
  `subcategoria_id` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO `computacion_teclado` (`id`, `nombre`, `stock`, `fabricante`, `oferta`, `color`, `conexion`, `botones`, `iluminacion`, `consumo`, `foto`, `precio`, `subcategoria_id`) VALUES
(1, 'Logitech Estándar Negro', 40, 'Logitech', 0, 'Negro', 'Cableado', '104', '0', 0.500, '/teclados/1.jpg', 8500.00, 11),
(2, 'Teclado Gaming Genesis Rhod', 30, 'Genesis', 1, 'Negro', 'Cableado', '105', '1', 1.200, '/teclados/2.jpg', 12000.00, 11),
(3, 'Logitech Inalámbrico K270', 50, 'Logitech', 0, 'Negro', 'Inalámbrico', '104', '0', 0.300, '/teclados/3.jpg', 9500.00, 11),
(4, 'Redragon Fidd Blanco Naranja Sw', 25, 'Redragon', 1, 'Blanco/Naranja', 'Cableado', '87', '1', 1.500, '/teclados/4.jpg', 18500.00, 11),
(5, 'Razer Blackwidow Gamer Switch', 20, 'Razer', 1, 'Negro', 'Cableado', '104', '1', 1.800, '/teclados/5.jpg', 28000.00, 11),
(6, 'Logitech G Rosa Tenkeyless', 15, 'Logitech', 1, 'Rosa', 'Cableado', '87', '1', 1.400, '/teclados/6.jpg', 22000.00, 11);


CREATE TABLE `django_admin_log` (
  `id` int NOT NULL,
  `action_time` datetime(6) NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint UNSIGNED NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int DEFAULT NULL,
  `user_id` int NOT NULL
) ;


CREATE TABLE `django_content_type` (
  `id` int NOT NULL,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(1, 'admin', 'logentry'),
(3, 'auth', 'group'),
(2, 'auth', 'permission'),
(4, 'auth', 'user'),
(7, 'computacion', 'categoria'),
(20, 'computacion', 'cooler'),
(19, 'computacion', 'cpu'),
(18, 'computacion', 'disco'),
(17, 'computacion', 'fuente'),
(16, 'computacion', 'gabinete'),
(15, 'computacion', 'gpu'),
(14, 'computacion', 'monitor'),
(13, 'computacion', 'motherboard'),
(12, 'computacion', 'mouse'),
(11, 'computacion', 'notebook'),
(10, 'computacion', 'pcescritorio'),
(9, 'computacion', 'ram'),
(8, 'computacion', 'subcategoria'),
(21, 'computacion', 'teclado'),
(5, 'contenttypes', 'contenttype'),
(29, 'encuesta', 'encuesta'),
(30, 'encuesta', 'resultado'),
(6, 'sessions', 'session'),
(25, 'usuario', 'menu'),
(27, 'usuario', 'menurol'),
(26, 'usuario', 'rol'),
(28, 'usuario', 'usuariorol'),
(24, 'venta', 'detalleventa'),
(23, 'venta', 'qrventa'),
(22, 'venta', 'venta');


CREATE TABLE `django_migrations` (
  `id` bigint NOT NULL,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'contenttypes', '0001_initial', '2025-10-01 14:57:32.286891'),
(2, 'auth', '0001_initial', '2025-10-01 14:57:34.417559'),
(3, 'admin', '0001_initial', '2025-10-01 14:57:34.959134'),
(4, 'admin', '0002_logentry_remove_auto_add', '2025-10-01 14:57:34.998448'),
(5, 'admin', '0003_logentry_add_action_flag_choices', '2025-10-01 14:57:35.041398'),
(6, 'contenttypes', '0002_remove_content_type_name', '2025-10-01 14:57:35.421645'),
(7, 'auth', '0002_alter_permission_name_max_length', '2025-10-01 14:57:35.654302'),
(8, 'auth', '0003_alter_user_email_max_length', '2025-10-01 14:57:35.757925'),
(9, 'auth', '0004_alter_user_username_opts', '2025-10-01 14:57:35.794947'),
(10, 'auth', '0005_alter_user_last_login_null', '2025-10-01 14:57:35.994033'),
(11, 'auth', '0006_require_contenttypes_0002', '2025-10-01 14:57:36.004728'),
(12, 'auth', '0007_alter_validators_add_error_messages', '2025-10-01 14:57:36.056132'),
(13, 'auth', '0008_alter_user_username_max_length', '2025-10-01 14:57:36.325828'),
(14, 'auth', '0009_alter_user_last_name_max_length', '2025-10-01 14:57:36.582496'),
(15, 'auth', '0010_alter_group_name_max_length', '2025-10-01 14:57:36.666211'),
(16, 'auth', '0011_update_proxy_permissions', '2025-10-01 14:57:36.689633'),
(17, 'auth', '0012_alter_user_first_name_max_length', '2025-10-01 14:57:36.893411'),
(18, 'computacion', '0001_initial', '2025-10-01 14:57:41.448308'),
(19, 'encuesta', '0001_initial', '2025-10-01 14:57:41.602481'),
(20, 'encuesta', '0002_initial', '2025-10-01 14:57:42.085444'),
(21, 'sessions', '0001_initial', '2025-10-01 14:57:42.224488'),
(22, 'usuario', '0001_initial', '2025-10-01 14:57:43.525440'),
(23, 'venta', '0001_initial', '2025-10-01 14:57:44.727703');


CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `encuesta_encuesta` (
  `id` bigint NOT NULL,
  `fecha` date NOT NULL,
  `usuario_id` int NOT NULL,
  `resultado_id` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `encuesta_resultado` (
  `id` bigint NOT NULL,
  `puntaje` int NOT NULL,
  `comentario` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `usuario_menu` (
  `id` bigint NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `url` varchar(255) NOT NULL,
  `icono` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `usuario_menurol` (
  `id` bigint NOT NULL,
  `menu_id` bigint NOT NULL,
  `rol_id` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `usuario_rol` (
  `id` bigint NOT NULL,
  `nombre` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `usuario_usuariorol` (
  `id` bigint NOT NULL,
  `rol_id` bigint NOT NULL,
  `usuario_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


CREATE TABLE `venta_detalleventa` (
  `id` bigint NOT NULL,
  `cantidad` int NOT NULL,
  `object_id` int UNSIGNED NOT NULL,
  `content_type_id` int NOT NULL,
  `venta_id` bigint NOT NULL
) ;

CREATE TABLE `venta_qrventa` (
  `id` bigint NOT NULL,
  `imagen` varchar(100) DEFAULT NULL,
  `venta_id` bigint NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;



CREATE TABLE `venta_venta` (
  `id` bigint NOT NULL,
  `fecha` datetime(6) NOT NULL,
  `monto` decimal(10,2) NOT NULL,
  `cliente_id` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

ALTER TABLE `auth_group`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `name` (`name`);

ALTER TABLE `auth_group_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_group_permissions_group_id_permission_id_0cd325b0_uniq` (`group_id`,`permission_id`),
  ADD KEY `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` (`permission_id`);

ALTER TABLE `auth_permission`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_permission_content_type_id_codename_01ab375a_uniq` (`content_type_id`,`codename`);

ALTER TABLE `auth_user`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `username` (`username`);

ALTER TABLE `auth_user_groups`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_groups_user_id_group_id_94350c0c_uniq` (`user_id`,`group_id`),
  ADD KEY `auth_user_groups_group_id_97559544_fk_auth_group_id` (`group_id`);

ALTER TABLE `auth_user_user_permissions`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `auth_user_user_permissions_user_id_permission_id_14a6b632_uniq` (`user_id`,`permission_id`),
  ADD KEY `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` (`permission_id`);

ALTER TABLE `computacion_categoria`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `computacion_cooler`
  ADD PRIMARY KEY (`id`),
  ADD KEY `computacion_cooler_SubCategoria_id_30b43932_fk_computaci` (`subcategoria_id`);

ALTER TABLE `computacion_cpu`
  ADD PRIMARY KEY (`id`),
  ADD KEY `computacion_cpu_SubCategoria_id_21d73b1d_fk_computaci` (`subcategoria_id`);

ALTER TABLE `computacion_disco`
  ADD PRIMARY KEY (`id`),
  ADD KEY `computacion_disco_SubCategoria_id_9889c729_fk_computaci` (`subcategoria_id`);

ALTER TABLE `computacion_fuente`
  ADD PRIMARY KEY (`id`),
  ADD KEY `computacion_fuente_SubCategoria_id_b943063b_fk_computaci` (`subcategoria_id`);

ALTER TABLE `computacion_gabinete`
  ADD PRIMARY KEY (`id`),
  ADD KEY `computacion_gabinete_SubCategoria_id_cd29d5fa_fk_computaci` (`subcategoria_id`);

ALTER TABLE `computacion_gpu`
  ADD PRIMARY KEY (`id`),
  ADD KEY `computacion_gpu_SubCategoria_id_b9b3f5f7_fk_computaci` (`subcategoria_id`);

ALTER TABLE `computacion_monitor`
  ADD PRIMARY KEY (`id`),
  ADD KEY `computacion_monitor_SubCategoria_id_594b408f_fk_computaci` (`subcategoria_id`);

ALTER TABLE `computacion_motherboard`
  ADD PRIMARY KEY (`id`),
  ADD KEY `computacion_motherbo_SubCategoria_id_6688cabd_fk_computaci` (`subcategoria_id`);

ALTER TABLE `computacion_mouse`
  ADD PRIMARY KEY (`id`),
  ADD KEY `computacion_mouse_SubCategoria_id_cbe8e314_fk_computaci` (`subcategoria_id`);

ALTER TABLE `computacion_notebook`
  ADD PRIMARY KEY (`id`),
  ADD KEY `computacion_notebook_SubCategoria_id_5af2427d_fk_computaci` (`subcategoria_id`);

ALTER TABLE `computacion_pcescritorio`
  ADD PRIMARY KEY (`id`),
  ADD KEY `computacion_pcescrit_SubCategoria_id_0e7a03b7_fk_computaci` (`subcategoria_id`);

ALTER TABLE `computacion_ram`
  ADD PRIMARY KEY (`id`),
  ADD KEY `computacion_ram_SubCategoria_id_37d72f7e_fk_computaci` (`subcategoria_id`);

ALTER TABLE `computacion_subcategoria`
  ADD PRIMARY KEY (`id`),
  ADD KEY `computacion_subcateg_categoria_id_d4bd0610_fk_computaci` (`categoria_id`);

ALTER TABLE `computacion_teclado`
  ADD PRIMARY KEY (`id`),
  ADD KEY `computacion_teclado_SubCategoria_id_30f98d6a_fk_computaci` (`subcategoria_id`);

ALTER TABLE `django_admin_log`
  ADD PRIMARY KEY (`id`),
  ADD KEY `django_admin_log_content_type_id_c4bce8eb_fk_django_co` (`content_type_id`),
  ADD KEY `django_admin_log_user_id_c564eba6_fk_auth_user_id` (`user_id`);

ALTER TABLE `django_content_type`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `django_content_type_app_label_model_76bd3d3b_uniq` (`app_label`,`model`);

ALTER TABLE `django_migrations`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `django_session`
  ADD PRIMARY KEY (`session_key`),
  ADD KEY `django_session_expire_date_a5c62663` (`expire_date`);

ALTER TABLE `encuesta_encuesta`
  ADD PRIMARY KEY (`id`),
  ADD KEY `encuesta_encuesta_usuario_id_dd006a7a_fk_auth_user_id` (`usuario_id`),
  ADD KEY `encuesta_encuesta_resultado_id_16784275_fk_encuesta_resultado_id` (`resultado_id`);

ALTER TABLE `encuesta_resultado`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `usuario_menu`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `usuario_menurol`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_menurol_menu_id_515bc9c5_fk_usuario_menu_id` (`menu_id`),
  ADD KEY `usuario_menurol_rol_id_e78188dd_fk_usuario_rol_id` (`rol_id`);

ALTER TABLE `usuario_rol`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `usuario_usuariorol`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_usuariorol_rol_id_3c19af4d_fk_usuario_rol_id` (`rol_id`),
  ADD KEY `usuario_usuariorol_usuario_id_48f9d5e9_fk_auth_user_id` (`usuario_id`);

ALTER TABLE `venta_detalleventa`
  ADD PRIMARY KEY (`id`),
  ADD KEY `venta_detalleventa_content_type_id_2c2f78c3_fk_django_co` (`content_type_id`),
  ADD KEY `venta_detalleventa_venta_id_66610f20_fk_venta_venta_id` (`venta_id`);

ALTER TABLE `venta_qrventa`
  ADD PRIMARY KEY (`id`),
  ADD KEY `venta_qrventa_venta_id_748c3ab0_fk_venta_venta_id` (`venta_id`);

ALTER TABLE `venta_venta`
  ADD PRIMARY KEY (`id`),
  ADD KEY `venta_venta_cliente_id_ccc2a041_fk_auth_user_id` (`cliente_id`);

ALTER TABLE `auth_group`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

ALTER TABLE `auth_group_permissions`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

ALTER TABLE `auth_permission`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=121;

ALTER TABLE `auth_user`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

ALTER TABLE `auth_user_groups`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

ALTER TABLE `auth_user_user_permissions`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

ALTER TABLE `computacion_categoria`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

ALTER TABLE `computacion_cooler`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

ALTER TABLE `computacion_cpu`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

ALTER TABLE `computacion_disco`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

ALTER TABLE `computacion_fuente`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

ALTER TABLE `computacion_gabinete`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

ALTER TABLE `computacion_gpu`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

ALTER TABLE `computacion_monitor`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

ALTER TABLE `computacion_motherboard`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

ALTER TABLE `computacion_mouse`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

ALTER TABLE `computacion_notebook`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

ALTER TABLE `computacion_pcescritorio`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

ALTER TABLE `computacion_ram`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

ALTER TABLE `computacion_subcategoria`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

ALTER TABLE `computacion_teclado`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

ALTER TABLE `django_admin_log`
  MODIFY `id` int NOT NULL AUTO_INCREMENT;

ALTER TABLE `django_content_type`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

ALTER TABLE `django_migrations`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

ALTER TABLE `encuesta_encuesta`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

ALTER TABLE `encuesta_resultado`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

ALTER TABLE `usuario_menu`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

ALTER TABLE `usuario_menurol`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

ALTER TABLE `usuario_rol`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

ALTER TABLE `usuario_usuariorol`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

ALTER TABLE `venta_detalleventa`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

ALTER TABLE `venta_qrventa`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

ALTER TABLE `venta_venta`
  MODIFY `id` bigint NOT NULL AUTO_INCREMENT;

ALTER TABLE `auth_group_permissions`
  ADD CONSTRAINT `auth_group_permissio_permission_id_84c5c92e_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_group_permissions_group_id_b120cbf9_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`);

ALTER TABLE `auth_permission`
  ADD CONSTRAINT `auth_permission_content_type_id_2f476e4b_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`);

ALTER TABLE `auth_user_groups`
  ADD CONSTRAINT `auth_user_groups_group_id_97559544_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  ADD CONSTRAINT `auth_user_groups_user_id_6a12ed8b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

ALTER TABLE `auth_user_user_permissions`
  ADD CONSTRAINT `auth_user_user_permi_permission_id_1fbb5f2c_fk_auth_perm` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`),
  ADD CONSTRAINT `auth_user_user_permissions_user_id_a95ead1b_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

ALTER TABLE `computacion_cooler`
  ADD CONSTRAINT `computacion_cooler_SubCategoria_id_30b43932_fk_computaci` FOREIGN KEY (`subcategoria_id`) REFERENCES `computacion_subcategoria` (`id`);

ALTER TABLE `computacion_cpu`
  ADD CONSTRAINT `computacion_cpu_SubCategoria_id_21d73b1d_fk_computaci` FOREIGN KEY (`subcategoria_id`) REFERENCES `computacion_subcategoria` (`id`);

ALTER TABLE `computacion_disco`
  ADD CONSTRAINT `computacion_disco_SubCategoria_id_9889c729_fk_computaci` FOREIGN KEY (`subcategoria_id`) REFERENCES `computacion_subcategoria` (`id`);

ALTER TABLE `computacion_fuente`
  ADD CONSTRAINT `computacion_fuente_SubCategoria_id_b943063b_fk_computaci` FOREIGN KEY (`subcategoria_id`) REFERENCES `computacion_subcategoria` (`id`);

ALTER TABLE `computacion_gabinete`
  ADD CONSTRAINT `computacion_gabinete_SubCategoria_id_cd29d5fa_fk_computaci` FOREIGN KEY (`subcategoria_id`) REFERENCES `computacion_subcategoria` (`id`);

ALTER TABLE `computacion_gpu`
  ADD CONSTRAINT `computacion_gpu_SubCategoria_id_b9b3f5f7_fk_computaci` FOREIGN KEY (`subcategoria_id`) REFERENCES `computacion_subcategoria` (`id`);

ALTER TABLE `computacion_monitor`
  ADD CONSTRAINT `computacion_monitor_SubCategoria_id_594b408f_fk_computaci` FOREIGN KEY (`subcategoria_id`) REFERENCES `computacion_subcategoria` (`id`);

ALTER TABLE `computacion_motherboard`
  ADD CONSTRAINT `computacion_motherbo_SubCategoria_id_6688cabd_fk_computaci` FOREIGN KEY (`subcategoria_id`) REFERENCES `computacion_subcategoria` (`id`);

ALTER TABLE `computacion_mouse`
  ADD CONSTRAINT `computacion_mouse_SubCategoria_id_cbe8e314_fk_computaci` FOREIGN KEY (`subcategoria_id`) REFERENCES `computacion_subcategoria` (`id`);

ALTER TABLE `computacion_notebook`
  ADD CONSTRAINT `computacion_notebook_SubCategoria_id_5af2427d_fk_computaci` FOREIGN KEY (`subcategoria_id`) REFERENCES `computacion_subcategoria` (`id`);

ALTER TABLE `computacion_pcescritorio`
  ADD CONSTRAINT `computacion_pcescrit_SubCategoria_id_0e7a03b7_fk_computaci` FOREIGN KEY (`subcategoria_id`) REFERENCES `computacion_subcategoria` (`id`);

ALTER TABLE `computacion_ram`
  ADD CONSTRAINT `computacion_ram_SubCategoria_id_37d72f7e_fk_computaci` FOREIGN KEY (`subcategoria_id`) REFERENCES `computacion_subcategoria` (`id`);

ALTER TABLE `computacion_subcategoria`
  ADD CONSTRAINT `computacion_subcateg_categoria_id_d4bd0610_fk_computaci` FOREIGN KEY (`categoria_id`) REFERENCES `computacion_categoria` (`id`);

ALTER TABLE `computacion_teclado`
  ADD CONSTRAINT `computacion_teclado_SubCategoria_id_30f98d6a_fk_computaci` FOREIGN KEY (`subcategoria_id`) REFERENCES `computacion_subcategoria` (`id`);

ALTER TABLE `django_admin_log`
  ADD CONSTRAINT `django_admin_log_content_type_id_c4bce8eb_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `django_admin_log_user_id_c564eba6_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`);

ALTER TABLE `encuesta_encuesta`
  ADD CONSTRAINT `encuesta_encuesta_resultado_id_16784275_fk_encuesta_resultado_id` FOREIGN KEY (`resultado_id`) REFERENCES `encuesta_resultado` (`id`),
  ADD CONSTRAINT `encuesta_encuesta_usuario_id_dd006a7a_fk_auth_user_id` FOREIGN KEY (`usuario_id`) REFERENCES `auth_user` (`id`);

ALTER TABLE `usuario_menurol`
  ADD CONSTRAINT `usuario_menurol_menu_id_515bc9c5_fk_usuario_menu_id` FOREIGN KEY (`menu_id`) REFERENCES `usuario_menu` (`id`),
  ADD CONSTRAINT `usuario_menurol_rol_id_e78188dd_fk_usuario_rol_id` FOREIGN KEY (`rol_id`) REFERENCES `usuario_rol` (`id`);

ALTER TABLE `usuario_usuariorol`
  ADD CONSTRAINT `usuario_usuariorol_rol_id_3c19af4d_fk_usuario_rol_id` FOREIGN KEY (`rol_id`) REFERENCES `usuario_rol` (`id`),
  ADD CONSTRAINT `usuario_usuariorol_usuario_id_48f9d5e9_fk_auth_user_id` FOREIGN KEY (`usuario_id`) REFERENCES `auth_user` (`id`);

ALTER TABLE `venta_detalleventa`
  ADD CONSTRAINT `venta_detalleventa_content_type_id_2c2f78c3_fk_django_co` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`),
  ADD CONSTRAINT `venta_detalleventa_venta_id_66610f20_fk_venta_venta_id` FOREIGN KEY (`venta_id`) REFERENCES `venta_venta` (`id`);

ALTER TABLE `venta_qrventa`
  ADD CONSTRAINT `venta_qrventa_venta_id_748c3ab0_fk_venta_venta_id` FOREIGN KEY (`venta_id`) REFERENCES `venta_venta` (`id`);

ALTER TABLE `venta_venta`
  ADD CONSTRAINT `venta_venta_cliente_id_ccc2a041_fk_auth_user_id` FOREIGN KEY (`cliente_id`) REFERENCES `auth_user` (`id`);
COMMIT;


















INSERT INTO `computacion_subcategoria` (`id`, `nombre`, `categoria_id`) VALUES
(1, 'PC Escritorio', 1),
(2, 'Notebook', 1),
(3, 'Motherboard', 2),
(4, 'Cpu', 2),
(5, 'Gpu', 2),
(6, 'Ram', 2),
(7, 'Cooler', 3),
(8, 'Disco', 2),
(9, 'Fuente', 3),
(10, 'Gabinete', 2),
(11, 'Teclado', 3),
(12, 'Monitor', 3),
(13, 'Mouse', 3),
(14, 'Sistema_Operativo', 6),
(15, 'Paquete_office', 6);


INSERT INTO `computacion_cooler` (`id`, `nombre`, `stock`, `fabricante`, `oferta`, `color`, `consumo`, `cooler_incluidos`, `iluminacion`, `foto`, `precio`, `subcategoria_id`) VALUES
(1, 'Hyper 212 Black Edition', 15, 'Cooler Master', 1, 'Negro', 6.500, 1, 'RGB', '/coolers/5.jpg', 12000.00, 7),
(2, 'NH-D15', 10, 'Noctua', 0, 'Negro', 10.000, 2, 'No', 'coolers/2.jpg', 25000.00, 7),
(3, 'H100i RGB Platinum', 8, 'Corsair', 1, 'Negro', 15.000, 2, 'RGB', '/coolers/8.jpg', 32000.00, 7),
(4, 'Frost Flow X', 12, 'DeepCool', 0, 'Blanco', 8.000, 1, 'RGB', '/coolers/1.jpg', 14000.00, 7),
(5, 'MasterLiquid ML240L', 9, 'Cooler Master', 1, 'Blanco', 12.000, 2, 'RGB', '/coolers/7.jpg', 18000.00, 7),
(6, 'Dark Rock Pro 4', 7, 'Be Quiet!', 0, 'Negro', 9.500, 2, 'No', '/coolers/3.jpg', 27000.00, 7),
(7, 'ARGB Liquid Cooler 360', 6, 'Thermaltake', 1, 'Negro', 20.000, 3, 'RGB', '/coolers/10.jpg', 42000.00, 7),
(8, 'Scythe Mugen 5', 11, 'Scythe', 0, 'Negro', 7.000, 1, 'No', '/coolers/4.jpg', 15000.00, 7),
(9, 'H150i Elite Capellix', 5, 'Corsair', 1, 'Negro', 25.000, 3, 'RGB', '/coolers/9.jpg', 50000.00, 7),
(10, 'ARCTIC Liquid Freezer II 240', 8, 'ARCTIC', 0, 'Negro', 18.000, 2, 'No', '/coolers/6.jpg', 30000.00, 7);

INSERT INTO `computacion_cpu` (`id`, `stock`, `fabricante`, `oferta`, `nombre`, `modelo`, `nucleos`, `hilos`, `frecuencia`, `proceso_fabricacion`, `grafica_itegrada`, `socket`, `incluye_cooler`, `tdp_watts`, `memoria_l1`, `memoria_l2`, `memoria_l3`, `foto`, `precio`, `subcategoria_id`) VALUES
(1, 25, 'AMD', 1, 'Ryzen 3', '3200G', 4, 8, '3.9 GHz', '12nm', 1, 'AM4', 1, 65.000, '256 KB', '2 MB', '4 MB', '/cpus/1.jpg', 75000.00, 4),
(2, 20, 'Intel', 0, 'Intel Core', 'i3-10100', 4, 8, '4.3 GHz', '14nm', 1, 'LGA1200', 1, 65.000, '256 KB', '1 MB', '6 MB', '/cpus/2.jpg', 85000.00, 4),
(3, 18, 'Intel', 1, 'Intel Core i5 12th GEN', 'i5-12400F', 6, 12, '4.4 GHz', '10nm', 0, 'LGA1700', 1, 65.000, '384 KB', '7.5 MB', '18 MB', '/cpus/3.jpg', 160000.00, 4),
(4, 15, 'AMD', 0, 'Ryzen 7', '5800X', 8, 16, '4.7 GHz', '7nm', 0, 'AM4', 0, 105.000, '512 KB', '4 MB', '32 MB', '/cpus/4.jpg', 250000.00, 4),
(5, 12, 'Intel', 1, 'Intel Core i7 12th GEN', 'i7-12700K', 12, 20, '5.0 GHz', '10nm', 1, 'LGA1700', 0, 125.000, '768 KB', '12 MB', '25 MB', '/cpus/5.jpg', 320000.00, 4),
(6, 10, 'AMD', 1, 'Ryzen 7 3D V-Cache', '5800X3D', 8, 16, '4.5 GHz', '7nm', 0, 'AM4', 0, 105.000, '512 KB', '4 MB', '96 MB', '/cpus/6.jpg', 280000.00, 4),
(7, 8, 'AMD', 0, 'Ryzen 9 9000 Series Processor', '9950X', 16, 32, '5.7 GHz', '5nm', 1, 'AM5', 0, 170.000, '1 MB', '16 MB', '64 MB', '/cpus/7.jpg', 600000.00, 4),
(8, 6, 'Intel', 1, 'Intel Core i9 Unlocked 14th GEN', 'i9-14900K', 24, 32, '6.0 GHz', '10nm ESF', 1, 'LGA1700', 0, 125.000, '2 MB', '32 MB', '36 MB', '/cpus/8.jpg', 700000.00, 4),
(9, 7, 'AMD', 0, 'Ryzen 9 9000 Series Processor', '9900X', 12, 24, '5.6 GHz', '5nm', 1, 'AM5', 0, 120.000, '768 KB', '12 MB', '64 MB', '/cpus/9.jpg', 550000.00, 4),
(10, 5, 'AMD', 1, 'Ryzen 9 9000 Series Processor', '9950X3D', 16, 32, '5.8 GHz', '5nm', 1, 'AM5', 0, 170.000, '1 MB', '16 MB', '128 MB', '/cpus/10.jpg', 750000.00, 4);


INSERT INTO `computacion_disco` (`id`, `nombre`, `stock`, `fabricante`, `oferta`, `capacidad_gb`, `consumo`, `velocidad`, `conexion`, `foto`, `precio`, `subcategoria_id`) VALUES
(1, 'Memox', 30, 'Memox', 1, 480, 5.50, '550 MB/s', 'SATA III', '/discos/1.jpg', 25000.00, 8),
(2, 'Kingston', 25, 'Kingston', 0, 512, 6.00, '3500 MB/s', 'NVMe M.2', '/discos/2.jpg', 32000.00, 8),
(3, 'Hiksemi SSD', 20, 'Hiksemi', 1, 256, 4.80, '500 MB/s', 'SATA III', '/discos/3.jpg', 18000.00, 8),
(4, 'Patriot 960GB', 15, 'Patriot', 0, 960, 7.00, '3400 MB/s', 'NVMe M.2', '/discos/4.jpg', 45000.00, 8),
(5, 'Adata Legend 710', 18, 'Adata', 1, 512, 6.20, '2400 MB/s', 'NVMe M.2', '/discos/5.jpg', 40000.00, 8),
(6, 'MP700 PRO SSD', 12, 'Corsair', 0, 2048, 8.00, '10000 MB/s', 'PCIe 5.0 NVMe', '/discos/6.jpg', 160000.00, 8),
(7, 'Kingston Fury', 22, 'Kingston', 1, 1000, 6.50, '7000 MB/s', 'NVMe M.2', '/discos/7.jpg', 90000.00, 8),
(8, 'XPG', 20, 'ADATA XPG', 0, 512, 6.00, '3500 MB/s', 'NVMe M.2', '/discos/8.jpg', 42000.00, 8),
(9, 'Kingston Fury Renegade G25', 10, 'Kingston', 1, 2000, 7.50, '7300 MB/s', 'NVMe M.2', '/discos/9.jpg', 150000.00, 8);


INSERT INTO `computacion_fuente` (`id`, `nombre`, `stock`, `fabricante`, `oferta`, `consumo`, `eficiencia`, `ventiador`, `foto`, `precio`, `subcategoria_id`) VALUES
(1, 'Raidmax RX 380W', 20, 'Raidmax', 1, 380.00, '80+ White', '120mm', '/fuentes/1.jpg', 18000.00, 9),
(2, 'Lite Power 550W', 25, 'Thermaltake', 0, 550.00, '80+ Bronze', '120mm', '/fuentes/2.jpg', 25000.00, 9),
(3, 'XPG Probe', 15, 'ADATA XPG', 1, 650.00, '80+ Bronze', '135mm', '/fuentes/3.jpg', 30000.00, 9),
(4, 'Cooler Steel Power 850W', 10, 'Cooler Master', 0, 850.00, '80+ Gold', '140mm', '/fuentes/4.jpg', 52000.00, 9),
(5, 'Corsair HX1000', 8, 'Corsair', 1, 1000.00, '80+ Platinum', '140mm', '/fuentes/5.jpg', 85000.00, 9);
INSERT INTO `computacion_gabinete` (`id`, `nombre`, `stock`, `fabricante`, `oferta`, `ventana`, `colores`, `usb`, `audio_hd`, `ancho`, `alto`, `profundidad`, `ventiladores`, `incluidos`, `radiadores`, `consumo`, `foto`, `precio`, `subcategoria_id`) VALUES
(1, 'NZXT H510', 15, 'NZXT', 1, '1', 'Negro', 'USB 3.0 x2', 'Sí', 210, 460, 428, '2', '2', '240mm', 20.000, '/gabinetes/8.jpg', 65000.00, 10),
(2, 'Corsair 4000D Airflow', 10, 'Corsair', 0, '1', 'Blanco', 'USB 3.1 x1, USB 3.0 x1', 'Sí', 230, 466, 453, '2', '2', '360mm', 25.000, '/gabinetes/4.jpg', 72000.00, 10),
(3, 'Cooler Master MasterBox MB511 RGB', 18, 'Cooler Master', 1, '1', 'Negro con RGB', 'USB 3.0 x2', 'Sí', 210, 496, 468, '3', '3', '360mm', 28.000, '/gabinetes/7.jpg', 59000.00, 10),
(4, 'Thermaltake V200 TG', 12, 'Thermaltake', 0, '1', 'Negro', 'USB 3.0 x1, USB 2.0 x2', 'Sí', 198, 467, 414, '3', '3', '240mm', 23.000, '/gabinetes/10.jpg', 48000.00, 10),
(5, 'Phanteks Eclipse P400A', 14, 'Phanteks', 1, '1', 'Blanco', 'USB 3.0 x2', 'Sí', 210, 470, 465, '2', '2', '360mm', 26.000, '/gabinetes/3.jpg', 70000.00, 10),
(6, 'Lian Li Lancool II Mesh', 9, 'Lian Li', 0, '1', 'Negro', 'USB 3.1 x1, USB 3.0 x2', 'Sí', 229, 494, 478, '3', '3', '360mm', 30.000, '/gabinetes/1.jpg', 85000.00, 10),
(7, 'Asus TUF Gaming GT501', 8, 'Asus', 1, '1', 'Negro-Gris', 'USB 3.0 x2', 'Sí', 251, 545, 552, '4', '4', '360mm', 35.000, '/gabinetes/2.jpg', 98000.00, 10),
(8, 'Aerocool Aero One Frost', 20, 'Aerocool', 1, '1', 'Negro con RGB', 'USB 3.0 x1, USB 2.0 x2', 'Sí', 210, 465, 470, '4', '4', '240mm', 22.000, '/gabinetes/6.jpg', 45000.00, 10),
(9, 'Gigabyte Aorus C700 Glass', 6, 'Gigabyte', 0, '1', 'Negro con RGB', 'USB-C x1, USB 3.0 x2', 'Sí', 302, 714, 683, '4', '4', '420mm', 40.000, '/gabinetes/9.jpg', 150000.00, 10),
(10, 'MSI MPG Gungnir 110R', 11, 'MSI', 1, '1', 'Blanco', 'USB 3.2 x1, USB 2.0 x2', 'Sí', 215, 430, 450, '4', '4', '360mm', 27.000, '/gabinetes/5.jpg', 62000.00, 10);
INSERT INTO `computacion_gpu` (`id`, `nombre`, `stock`, `fabricante`, `oferta`, `consumo`, `memoria_capacidad_gb`, `memoria_tipo`, `memoria_velocidad`, `resolucion`, `refrigeracion`, `foto`, `precio`, `subcategoria_id`) VALUES
(1, 'Asus GeForce NVIDIA RTX 4060', 12, 'Asus', 1, 140.00, 8, 'GDDR6', '17 Gbps', '7680x4320', 'ventilador doble', '/gpus/1.jpg', 350000.00, 5),
(2, 'AMD Radeon RX 6500 XT Asrock', 15, 'Asrock', 0, 120.00, 4, 'GDDR6', '18 Gbps', '7680x4320', 'ventilador simple', '/gpus/2.jpg', 180000.00, 5),
(3, 'AMD Challenger Radeon RX 6600 XT Asrock', 10, 'Asrock', 1, 160.00, 8, 'GDDR6', '16 Gbps', '7680x4320', 'ventilador doble', '/gpus/3.jpg', 240000.00, 5),
(4, 'PNY GeForce RTX 5060 NVIDIA', 14, 'PNY', 0, 170.00, 8, 'GDDR6', '18 Gbps', '7680x4320', 'ventilador doble', '/gpus/4.jpg', 400000.00, 5),
(5, 'PNY GeForce RTX 5060 Ti NVIDIA', 9, 'PNY', 1, 200.00, 12, 'GDDR6X', '19 Gbps', '7680x4320', 'ventilador triple', '/gpus/5.jpg', 480000.00, 5),
(6, 'Gigabyte Eagle GeForce RTX 5060 Ti NVIDIA', 8, 'Gigabyte', 1, 210.00, 12, 'GDDR6X', '19.5 Gbps', '7680x4320', 'ventilador triple', '/gpus/6.jpg', 490000.00, 5),
(7, 'PNY GeForce RTX 5070 NVIDIA', 7, 'PNY', 0, 250.00, 16, 'GDDR6X', '21 Gbps', '7680x4320', 'ventilador triple', '/gpus/7.jpg', 600000.00, 5),
(8, 'AMD Prime Radeon RX 9070', 5, 'AMD', 1, 280.00, 16, 'GDDR6', '20 Gbps', '7680x4320', 'ventilador doble', '/gpus/8.jpg', 700000.00, 5),
(9, 'Gigabyte GeForce RTX 5090', 3, 'Gigabyte', 0, 450.00, 24, 'GDDR6X', '23 Gbps', '7680x4320', 'liquida AIO', '/gpus/9.jpg', 1200000.00, 5),
(10, 'Asus ROG Strix GeForce RTX 5080', 6, 'Asus', 1, 380.00, 20, 'GDDR6X', '21 Gbps', '7680x4320', 'ventilador triple', '/gpus/10.jpg', 950000.00, 5);
INSERT INTO `computacion_monitor` (`id`, `nombre`, `stock`, `fabricante`, `oferta`, `panel`, `pantalla`, `tamanio`, `vga`, `display_port`, `usb`, `hdmi`, `resolucion`, `consumo`, `foto`, `precio`, `subcategoria_id`) VALUES
(1, 'ASUS TUF Gaming VG27AQ', 10, 'ASUS', 1, 'IPS', 'LED', '27 pulgadas', 'Sí', 'Sí', 'No', 'Sí', '2560x1440', 45.500, '/monitores/1.jpg', 250000.00, 12),
(2, 'Gigabyte M32Q', 7, 'Gigabyte', 0, 'IPS', 'LED', '32 pulgadas', 'No', 'Sí', 'Sí', 'Sí', '2560x1440', 55.000, '/monitores/3.jpg', 280000.00, 12),
(3, 'Samsung Odyssey G5', 12, 'Samsung', 1, 'VA', 'Curvo', '32 pulgadas', 'Sí', 'Sí', 'No', 'Sí', '2560x1440', 60.000, '/monitores/2.jpg', 300000.00, 12),
(4, 'LG UltraGear 24GN600-B', 15, 'LG', 0, 'IPS', 'LED', '24 pulgadas', 'Sí', 'No', 'No', 'Sí', '1920x1080', 40.000, '/monitores/5.jpg', 180000.00, 12),
(5, 'MSI Optix MAG342CQR', 6, 'MSI', 1, 'VA', 'Curvo', '34 pulgadas', 'No', 'Sí', 'Sí', 'Sí', '3440x1440', 65.000, '/monitores/4.jpg', 350000.00, 12);
INSERT INTO `computacion_motherboard` (`id`, `nombre`, `stock`, `fabricante`, `oferta`, `memoria`, `socket`, `puerto_sata`, `ranura_ram`, `pci`, `usb`, `hdmi`, `vga`, `consumo`, `foto`, `precio`, `subcategoria_id`) VALUES
(1, 'prime A520m-K', 10, 'Asus', 0, 'DDR4', 'AM4', '4', '2', '1', '4', '1', '1', 65.00, 'motherboards/1.jpg', 15000.00, 3),
(2, 'H510M K V2', 8, 'Gigabyte', 1, 'DDR4', 'LGA1200', '6', '2', '1', '4', '1', '1', 50.00, 'motherboards/2.jpg', 14000.00, 3),
(3, 'PRIME A620M-K', 12, 'Asus', 0, 'DDR5', 'AM5', '4', '2', '1', '4', '1', '1', 70.00, 'motherboards/3.jpg', 18000.00, 3),
(4, 'PHANTOM GAMING 4/ac', 7, 'Asrock', 1, 'DDR4', 'AM4', '6', '2', '2', '4', '1', '1', 60.00, 'motherboards/4.jpg', 16000.00, 3),
(5, 'PRO B760M-E', 9, 'MSI', 0, 'DDR5', 'LGA1700', '4', '4', '2', '6', '2', '1', 75.00, 'motherboards/5', 22000.00, 3),
(6, 'B550 ADRUS ELITE AX V2', 5, 'Gigabyte', 1, 'DDR4', 'AM4', '6', '4', '2', '6', '2', '1', 80.00, 'motherboards/6', 20000.00, 3),
(7, 'TUF GAMING B650M-PLUS WIFI', 6, 'Asus', 0, 'DDR5', 'AM5', '6', '4', '2', '6', '2', '1', 85.00, 'motherboards/7.jpg', 24000.00, 3),
(8, 'X870E TAICHI', 4, 'Asrock', 1, 'DDR5', 'AM5', '8', '4', '3', '8', '2', '2', 95.00, 'motherboards/8.jpg', 35000.00, 3),
(9, 'X870E ADRUS MASTER', 3, 'ADRUS', 0, 'DDR5', 'AM5', '8', '4', '3', '8', '2', '2', 100.00, 'motherboards/9.jpg', 38000.00, 3),
(10, 'ROG STRIX X870E-E GAMING WIFI', 2, 'Asus', 1, 'DDR5', 'AM5', '8', '4', '3', '8', '2', '2', 105.00, 'motherboards/10', 42000.00, 3);
INSERT INTO `computacion_mouse` (`id`, `nombre`, `stock`, `fabricante`, `oferta`, `color`, `conexion`, `botones`, `iluminacion`, `foto`, `precio`, `subcategoria_id`) VALUES
(1, 'Natec Óptico', 20, 'Natec', 0, 'Blanco', 'Cableado', '3', 'No', '/mouses/1.jpg', 8000.00, 13),
(2, 'Gamer Óptico RGB Fury', 15, 'Fury', 1, 'Negro', 'Cableado', '6', 'RGB', '/mouses/2.jpg', 12000.00, 13),
(3, 'Gamer Genesis RGB Fury', 18, 'Genesis', 1, 'Blanco', 'Cableado', '7', 'RGB', '/mouses/3.jpg', 15000.00, 13),
(4, 'G502 HERO Logitech G', 10, 'Logitech', 0, 'Negro', 'Cableado', '11', 'RGB', '/mouses/4.jpg', 22000.00, 13),
(5, 'Gaming RGB Ergonómico Razer Basilisk', 12, 'Razer', 1, 'Negro', 'Cableado', '9', 'RGB', '/mouses/5.jpg', 28000.00, 13),
(6, 'Inalámbrico RGB G502 Plus Logitech', 8, 'Logitech', 1, 'Negro', 'Inalámbrico', '11', 'RGB', '/mouses/6.jpg', 32000.00, 13),
(7, 'Mouse Inalámbrico Gamer Razer Viper', 9, 'Razer', 0, 'Negro', 'Inalámbrico', '8', 'RGB', '/mouses/7.jpg', 35000.00, 13);
INSERT INTO `computacion_notebook` (`id`, `nombre`, `stock`, `fabricante`, `tipo`, `oferta`, `envio_gratis`, `gamer`, `teclado_extra`, `usos`, `almacenamiento`, `pantalla_tamanio`, `pantalla_tactil`, `pantala_led`, `memoria_ram`, `gpu_dedicada`, `procesador`, `foto`, `precio`, `subcategoria_id`) VALUES
(1, 'HP Pavilion 14', 15, 'HP', 'Ultrabook', 1, 1, 0, 0, 'Oficina', '512GB SSD', '14\"', 0, 1, 8, 0, 'Intel Core i5', '/notebooks/1.jpeg', 450000.00, 2),
(2, 'Acer Aspire 5', 20, 'Acer', 'Notebook', 0, 1, 0, 0, 'Estudio', '1TB HDD', '15.6\"', 0, 1, 8, 0, 'Intel Core i3', '/notebooks/2.jpeg', 380000.00, 2),
(3, 'HP Envy 13', 10, 'HP', 'Notebook', 1, 1, 0, 0, 'Diseño', '512GB SSD', '13.3\"', 1, 1, 16, 1, 'Intel Core i7', '/notebooks/3.jpeg', 600000.00, 2),
(4, 'Lenovo ThinkBook 15', 12, 'Lenovo', 'Notebook', 0, 1, 0, 0, 'Trabajo', '1TB SSD', '15.6\"', 0, 1, 16, 0, 'AMD Ryzen 5', '/notebooks/4.jpeg', 520000.00, 2),
(5, 'Acer Swift 3', 18, 'Acer', 'Ultrabook', 1, 1, 0, 0, 'Movilidad', '512GB SSD', '14\"', 0, 1, 8, 0, 'Intel Core i5', '/notebooks/5.jpeg', 470000.00, 2),
(6, 'Asus VivoBook 15', 15, 'Asus', 'Notebook', 0, 1, 0, 0, 'Estudio', '1TB HDD', '15.6\"', 0, 1, 8, 0, 'Intel Core i3', '/notebooks/6.jpeg', 390000.00, 2),
(7, 'Lenovo IdeaPad Gaming 3', 8, 'Lenovo', 'Gaming', 1, 1, 1, 1, 'Gaming', '512GB SSD', '15.6\"', 0, 1, 16, 1, 'AMD Ryzen 7', '/notebooks/7.jpeg', 680000.00, 2),
(8, 'HP Omen 16', 10, 'HP', 'Gaming', 1, 1, 1, 1, 'Gaming', '1TB SSD', '16.1\"', 0, 1, 32, 1, 'Intel Core i7', '/notebooks/8.jpeg', 950000.00, 2),
(9, 'Bangho Max L5', 9, 'Bangho Maz', 'Notebook', 0, 0, 0, 0, 'Hogar', '512GB SSD', '15.6\"', 0, 1, 8, 0, 'Intel Core i5', '/notebooks/9.jpeg', 420000.00, 2),
(10, 'HP EliteBook 845', 7, 'HP', 'Ultrabook', 0, 1, 0, 0, 'Empresarial', '1TB SSD', '14\"', 0, 1, 16, 0, 'AMD Ryzen 5 PRO', '/notebooks/10.jpeg', 570000.00, 2),
(11, 'Acer Nitro 5 Gaming', 6, 'Acer Gaming', 'Gaming', 1, 1, 1, 1, 'Gaming', '1TB SSD', '17.3\"', 0, 1, 32, 1, 'Intel Core i9', '/notebooks/11.webp', 980000.00, 2),
(12, 'HP Victus 16', 8, 'HP Victus', 'Gaming', 1, 1, 1, 1, 'Gaming', '1TB SSD', '16.1\"', 0, 1, 16, 1, 'AMD Ryzen 7', '/notebooks/12.webp', 890000.00, 2),
(13, 'HP 17 Notebook', 5, 'HP 17', 'Notebook', 0, 1, 0, 0, 'Oficina', '1TB HDD', '17.3\"', 0, 1, 8, 0, 'Intel Core i3', '/notebooks/13.webp', 430000.00, 2),
(14, 'HP Spectre x360', 6, 'HP', 'Convertible', 1, 1, 0, 0, 'Diseño', '1TB SSD', '13.5\"', 1, 1, 16, 1, 'Intel Core i7', '/notebooks/14.webp', 920000.00, 2);
INSERT INTO `computacion_pcescritorio` (`id`, `nombre`, `stock`, `fabricante`, `tipo`, `oferta`, `envio_gratis`, `gamer`, `teclado_extra`, `usos`, `almacenamiento`, `pantalla_tamanio`, `pantalla_tactil`, `pantala_led`, `memoria_ram`, `gpu_dedicada`, `procesador`, `foto`, `precio`, `subcategoria_id`) VALUES
(1, 'All in One Bangho Lite', 20, 'Bangho', 'All in One', 0, 1, 0, 1, 'Oficina', '512', '21', 0, 1, 8, 0, 'Intel Celeron', '/pc_escritorios/1.jpeg', 350000.00, 1),
(2, 'All in one Lenovo Ideacenter', 25, 'Lenovo', 'All in One', 1, 1, 0, 0, 'Hogar', '512', '23', 0, 1, 8, 0, 'Intel i3', '/pc_escritorios/2.jpeg', 400000.00, 1),
(3, 'All in one Apple iMac', 15, 'Apple', 'All in One', 0, 1, 0, 0, 'Diseño', '1024', '27', 0, 1, 16, 1, 'Apple M1', '/pc_escritorios/3.webp', 1200000.00, 1),
(4, 'Pc Kelyx Pcarm', 30, 'Kelyx', 'PC de Escritorio', 1, 0, 0, 1, 'Oficina', '256', '0', 0, 0, 4, 0, 'Intel Celeron', '/pc_escritorios/4.jpg', 220000.00, 1),
(5, 'PC completa Gfast H100 Intel Celeron 4Gb', 40, 'Gfast', 'PC Completa', 0, 0, 0, 1, 'Hogar', '256', '0', 0, 0, 4, 0, 'Intel Celeron', '/pc_escritorios/5.jpeg', 200000.00, 1),
(6, 'PC armada Amd ryzen 3 3200g Msi B450m', 35, 'MSI', 'PC Armada', 1, 0, 1, 1, 'Gaming', '512', '0', 0, 1, 8, 1, 'AMD Ryzen 3 3200g', '/pc_escritorios/6.webp', 350000.00, 1),
(7, 'PC Gamer Armada AMD Ryzen 5 2600', 28, 'AMD', 'PC Gamer', 1, 0, 1, 1, 'Gaming', '1024', '0', 0, 1, 16, 1, 'AMD Ryzen 5 2600', '/pc_escritorios/7.jpeg', 500000.00, 1),
(8, 'PC Armada Gamer Amd Ryzen 7 5700g', 18, 'AMD', 'PC Gamer', 0, 1, 1, 1, 'Gaming', '1024', '0', 0, 1, 16, 1, 'AMD Ryzen 7 5700g', '/pc_escritorios/8.jpg', 650000.00, 1),
(9, 'PC Sentey F10 Gamer', 20, 'Sentey', 'PC Gamer', 1, 0, 1, 1, 'Gaming', '512', '0', 0, 1, 16, 1, 'Intel i5 10400f', '/pc_escritorios/9.webp', 480000.00, 1),
(10, 'PC gamer intel core i5 10400f', 22, 'Intel', 'PC Gamer', 1, 0, 1, 1, 'Gaming', '1024', '0', 0, 1, 16, 1, 'Intel Core i5 10400f', '/pc_escritorios/10.webp', 550000.00, 1),
(11, 'Pc diseño grafico Ryzen 7 8700g', 15, 'AMD', 'PC Profesional', 0, 1, 0, 0, 'Diseño', '2048', '0', 0, 1, 32, 1, 'AMD Ryzen 7 8700g', '/pc_escritorios/11.jpg', 900000.00, 1),
(12, 'PC armada intel core i5 14400 8gb ddr4', 25, 'Intel', 'PC Armada', 1, 0, 0, 1, 'Oficina', '512', '0', 0, 1, 8, 1, 'Intel Core i5 14400', '/pc_escritorios/12.webp', 420000.00, 1);
INSERT INTO `computacion_ram` (`id`, `nombre`, `stock`, `fabricante`, `oferta`, `tipo`, `capacidad_gb`, `latencia`, `consumo`, `velocidad`, `pin_de_memoria`, `disipador_de_calor`, `foto`, `precio`, `subcategoria_id`) VALUES
(1, 'Hiksemi DDR4 8GB 3200MHz', 50, 'Hiksemi', 0, 'DDR4', 8, 'CL16', 1.20, 3200, '288', '1', '/ram/1.jpg', 15000.00, 6),
(2, 'Hikvision DDR4 16GB 3200MHz', 40, 'Hikvision', 1, 'DDR4', 16, 'CL18', 1.35, 3200, '288', '1', '/rams/2.jpg', 28000.00, 6),
(3, 'PNY XLR8 DDR5 32GB 5600MHz', 30, 'PNY', 1, 'DDR5', 32, 'CL36', 1.25, 5600, '288', '1', '/rams/3.jpg', 65000.00, 6),
(4, 'Hiksemi DDR5 16GB 5200MHz', 35, 'Hiksemi', 0, 'DDR5', 16, 'CL38', 1.25, 5200, '288', '0', '/rams/4.jpg', 42000.00, 6),
(5, 'Memox DDR4 8GB 2666MHz', 60, 'Memox', 0, 'DDR4', 8, 'CL19', 1.20, 2666, '288', '0', '/rams/5.jpg', 12000.00, 6),
(6, 'Hiksemi DDR4 32GB 3200MHz', 20, 'Hiksemi', 1, 'DDR4', 32, 'CL18', 1.35, 3200, '288', '1', '/rams/6.jpg', 58000.00, 6),
(7, 'Hiksemi DDR5 64GB 6000MHz', 10, 'Hiksemi', 1, 'DDR5', 64, 'CL40', 1.30, 6000, '288', '1', '/rams/7.jpg', 125000.00, 6),
(8, 'Hiksemi Future DDR5 32GB 6400MHz RGB', 15, 'Hiksemi Future', 1, 'DDR5', 32, 'CL32', 1.35, 6400, '288', '1', '/rams/8.jpg', 95000.00, 6),
(9, 'Oscoo DDR4 16GB 3000MHz', 25, 'Oscoo', 0, 'DDR4', 16, 'CL17', 1.20, 3000, '288', '0', '/rams/9.jpg', 26000.00, 6),
(10, 'Adata XPG Lancer DDR5 32GB 6000MHz', 18, 'Adata', 1, 'DDR5', 32, 'CL36', 1.35, 6000, '288', '1', '/rams/10.jpg', 88000.00, 6);
INSERT INTO `computacion_subcategoria` (`id`, `nombre`, `categoria_id`) VALUES
(1, 'PC Escritorio', 1),
(2, 'Notebook', 1),
(3, 'Motherboard', 2),
(4, 'Cpu', 2),
(5, 'Gpu', 2),
(6, 'Ram', 2),
(7, 'Cooler', 3),
(8, 'Disco', 2),
(9, 'Fuente', 3),
(10, 'Gabinete', 2),
(11, 'Teclado', 3),
(12, 'Monitor', 3),
(13, 'Mouse', 3),
(14, 'Sistema_Operativo', 6),
(15, 'Paquete_office', 6);
INSERT INTO `computacion_teclado` (`id`, `nombre`, `stock`, `fabricante`, `oferta`, `color`, `conexion`, `botones`, `iluminacion`, `consumo`, `foto`, `precio`, `subcategoria_id`) VALUES
(1, 'Logitech Estándar Negro', 40, 'Logitech', 0, 'Negro', 'Cableado', '104', '0', 0.500, '/teclados/1.jpg', 8500.00, 11),
(2, 'Teclado Gaming Genesis Rhod', 30, 'Genesis', 1, 'Negro', 'Cableado', '105', '1', 1.200, '/teclados/2.jpg', 12000.00, 11),
(3, 'Logitech Inalámbrico K270', 50, 'Logitech', 0, 'Negro', 'Inalámbrico', '104', '0', 0.300, '/teclados/3.jpg', 9500.00, 11),
(4, 'Redragon Fidd Blanco Naranja Sw', 25, 'Redragon', 1, 'Blanco/Naranja', 'Cableado', '87', '1', 1.500, '/teclados/4.jpg', 18500.00, 11),
(5, 'Razer Blackwidow Gamer Switch', 20, 'Razer', 1, 'Negro', 'Cableado', '104', '1', 1.800, '/teclados/5.jpg', 28000.00, 11),
(6, 'Logitech G Rosa Tenkeyless', 15, 'Logitech', 1, 'Rosa', 'Cableado', '87', '1', 1.400, '/teclados/6.jpg', 22000.00, 11);
INSERT INTO `django_content_type` (`id`, `app_label`, `model`) VALUES
(1, 'admin', 'logentry'),
(3, 'auth', 'group'),
(2, 'auth', 'permission'),
(4, 'auth', 'user'),
(7, 'computacion', 'categoria'),
(20, 'computacion', 'cooler'),
(19, 'computacion', 'cpu'),
(18, 'computacion', 'disco'),
(17, 'computacion', 'fuente'),
(16, 'computacion', 'gabinete'),
(15, 'computacion', 'gpu'),
(14, 'computacion', 'monitor'),
(13, 'computacion', 'motherboard'),
(12, 'computacion', 'mouse'),
(11, 'computacion', 'notebook'),
(10, 'computacion', 'pcescritorio'),
(9, 'computacion', 'ram'),
(8, 'computacion', 'subcategoria'),
(21, 'computacion', 'teclado'),
(5, 'contenttypes', 'contenttype'),
(29, 'encuesta', 'encuesta'),
(30, 'encuesta', 'resultado'),
(6, 'sessions', 'session'),
(25, 'usuario', 'menu'),
(27, 'usuario', 'menurol'),
(26, 'usuario', 'rol'),
(28, 'usuario', 'usuariorol'),
(24, 'venta', 'detalleventa'),
(23, 'venta', 'qrventa'),
(22, 'venta', 'venta');
INSERT INTO `django_migrations` (`id`, `app`, `name`, `applied`) VALUES
(1, 'contenttypes', '0001_initial', '2025-10-01 14:57:32.286891'),
(2, 'auth', '0001_initial', '2025-10-01 14:57:34.417559'),
(3, 'admin', '0001_initial', '2025-10-01 14:57:34.959134'),
(4, 'admin', '0002_logentry_remove_auto_add', '2025-10-01 14:57:34.998448'),
(5, 'admin', '0003_logentry_add_action_flag_choices', '2025-10-01 14:57:35.041398'),
(6, 'contenttypes', '0002_remove_content_type_name', '2025-10-01 14:57:35.421645'),
(7, 'auth', '0002_alter_permission_name_max_length', '2025-10-01 14:57:35.654302'),
(8, 'auth', '0003_alter_user_email_max_length', '2025-10-01 14:57:35.757925'),
(9, 'auth', '0004_alter_user_username_opts', '2025-10-01 14:57:35.794947'),
(10, 'auth', '0005_alter_user_last_login_null', '2025-10-01 14:57:35.994033'),
(11, 'auth', '0006_require_contenttypes_0002', '2025-10-01 14:57:36.004728'),
(12, 'auth', '0007_alter_validators_add_error_messages', '2025-10-01 14:57:36.056132'),
(13, 'auth', '0008_alter_user_username_max_length', '2025-10-01 14:57:36.325828'),
(14, 'auth', '0009_alter_user_last_name_max_length', '2025-10-01 14:57:36.582496'),
(15, 'auth', '0010_alter_group_name_max_length', '2025-10-01 14:57:36.666211'),
(16, 'auth', '0011_update_proxy_permissions', '2025-10-01 14:57:36.689633'),
(17, 'auth', '0012_alter_user_first_name_max_length', '2025-10-01 14:57:36.893411'),
(18, 'computacion', '0001_initial', '2025-10-01 14:57:41.448308'),
(19, 'encuesta', '0001_initial', '2025-10-01 14:57:41.602481'),
(20, 'encuesta', '0002_initial', '2025-10-01 14:57:42.085444'),
(21, 'sessions', '0001_initial', '2025-10-01 14:57:42.224488'),
(22, 'usuario', '0001_initial', '2025-10-01 14:57:43.525440'),
(23, 'venta', '0001_initial', '2025-10-01 14:57:44.727703');