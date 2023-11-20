/*
 Navicat Premium Data Transfer

 Source Server         : localhost
 Source Server Type    : MySQL
 Source Server Version : 100428 (10.4.28-MariaDB)
 Source Host           : localhost:3306
 Source Schema         : qytatrans

 Target Server Type    : MySQL
 Target Server Version : 100428 (10.4.28-MariaDB)
 File Encoding         : 65001

 Date: 16/11/2023 00:52:58
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin`  (
  `id_admin` int NOT NULL AUTO_INCREMENT,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id_admin`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of admin
-- ----------------------------

-- ----------------------------
-- Table structure for booking
-- ----------------------------
DROP TABLE IF EXISTS `booking`;
CREATE TABLE `booking`  (
  `no_transaksi` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `id_driver` int NULL DEFAULT NULL,
  `id_penumpang` int NULL DEFAULT NULL,
  `id_rute` int NULL DEFAULT NULL,
  `id_status` int NULL DEFAULT NULL,
  `id_kendaraan` int NULL DEFAULT NULL,
  `tanggal` date NULL DEFAULT NULL,
  `pukul` time NULL DEFAULT NULL,
  `latitude` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `longitude` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `tanggal_booking` datetime NULL DEFAULT NULL,
  PRIMARY KEY (`no_transaksi`) USING BTREE,
  INDEX `b_driver`(`id_driver` ASC) USING BTREE,
  INDEX `b_penumpang`(`id_penumpang` ASC) USING BTREE,
  INDEX `b_rute`(`id_rute` ASC) USING BTREE,
  INDEX `b_status`(`id_status` ASC) USING BTREE,
  INDEX `b_kendaraan`(`id_kendaraan` ASC) USING BTREE,
  CONSTRAINT `b_driver` FOREIGN KEY (`id_driver`) REFERENCES `driver` (`id_driver`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `b_kendaraan` FOREIGN KEY (`id_kendaraan`) REFERENCES `kendaraan` (`id_kendaraan`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `b_penumpang` FOREIGN KEY (`id_penumpang`) REFERENCES `penumpang` (`id_penumpang`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `b_rute` FOREIGN KEY (`id_rute`) REFERENCES `rute` (`id_rute`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `b_status` FOREIGN KEY (`id_status`) REFERENCES `status` (`id_status`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of booking
-- ----------------------------

-- ----------------------------
-- Table structure for driver
-- ----------------------------
DROP TABLE IF EXISTS `driver`;
CREATE TABLE `driver`  (
  `id_driver` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `whatsapp` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `img` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id_driver`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of driver
-- ----------------------------
INSERT INTO `driver` VALUES (1, 'Firman Nurokhim Hidayatuloh', 'firman@gmail.com', '621231231123', 'firman', '202cb962ac59075b964b07152d234b70', 'default.png');

-- ----------------------------
-- Table structure for iklan
-- ----------------------------
DROP TABLE IF EXISTS `iklan`;
CREATE TABLE `iklan`  (
  `id_iklan` int NOT NULL AUTO_INCREMENT,
  `img` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id_iklan`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of iklan
-- ----------------------------
INSERT INTO `iklan` VALUES (1, 'a676b3a66c4e27612cf6018523f2d0e8.png');

-- ----------------------------
-- Table structure for kendaraan
-- ----------------------------
DROP TABLE IF EXISTS `kendaraan`;
CREATE TABLE `kendaraan`  (
  `id_kendaraan` int NOT NULL AUTO_INCREMENT,
  `merk` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id_kendaraan`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 13 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of kendaraan
-- ----------------------------
INSERT INTO `kendaraan` VALUES (7, 'Innova');
INSERT INTO `kendaraan` VALUES (8, 'Mobilio');
INSERT INTO `kendaraan` VALUES (9, 'Avanza');
INSERT INTO `kendaraan` VALUES (10, 'Wuling');
INSERT INTO `kendaraan` VALUES (11, 'Ertiga');
INSERT INTO `kendaraan` VALUES (12, 'Hiace');

-- ----------------------------
-- Table structure for kota
-- ----------------------------
DROP TABLE IF EXISTS `kota`;
CREATE TABLE `kota`  (
  `id_kota` int NOT NULL AUTO_INCREMENT,
  `kota` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id_kota`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 10 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of kota
-- ----------------------------
INSERT INTO `kota` VALUES (1, 'Purwokerto');
INSERT INTO `kota` VALUES (2, 'Cilacap');
INSERT INTO `kota` VALUES (3, 'Semarang');
INSERT INTO `kota` VALUES (4, 'Solo');
INSERT INTO `kota` VALUES (5, 'Sidareja');
INSERT INTO `kota` VALUES (6, 'Pangandaran');
INSERT INTO `kota` VALUES (7, 'Blora');
INSERT INTO `kota` VALUES (8, 'Pekalongan');
INSERT INTO `kota` VALUES (9, 'Yogyakarta');

-- ----------------------------
-- Table structure for penumpang
-- ----------------------------
DROP TABLE IF EXISTS `penumpang`;
CREATE TABLE `penumpang`  (
  `id_penumpang` int NOT NULL AUTO_INCREMENT,
  `nama` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `email` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `whatsapp` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `alamat` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `username` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `img` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id_penumpang`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of penumpang
-- ----------------------------
INSERT INTO `penumpang` VALUES (1, 'Yuangga Bagas', 'yuangga@gmail.com', '628977138677', 'Cilacap', 'bagas', 'e10adc3949ba59abbe56e057f20f883e', 'default.png');
INSERT INTO `penumpang` VALUES (5, 'tes', 'tes@gmail.com', '628977138677', 'alamat tes', 'tes', 'e10adc3949ba59abbe56e057f20f883e', 'default.png');

-- ----------------------------
-- Table structure for rute
-- ----------------------------
DROP TABLE IF EXISTS `rute`;
CREATE TABLE `rute`  (
  `id_rute` int NOT NULL AUTO_INCREMENT,
  `asal` int NULL DEFAULT NULL,
  `tujuan` int NULL DEFAULT NULL,
  `keterangan` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  `harga` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id_rute`) USING BTREE,
  INDEX `r_asal`(`asal` ASC) USING BTREE,
  INDEX `r_tujuan`(`tujuan` ASC) USING BTREE,
  CONSTRAINT `r_asal` FOREIGN KEY (`asal`) REFERENCES `kota` (`id_kota`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `r_tujuan` FOREIGN KEY (`tujuan`) REFERENCES `kota` (`id_kota`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 30 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of rute
-- ----------------------------
INSERT INTO `rute` VALUES (2, 1, 3, NULL, '190000');
INSERT INTO `rute` VALUES (3, 3, 1, NULL, '190000');
INSERT INTO `rute` VALUES (4, 1, 2, NULL, '55000');
INSERT INTO `rute` VALUES (5, 2, 1, NULL, '55000');
INSERT INTO `rute` VALUES (6, 1, 9, '(Via Kebumen)', '150000');
INSERT INTO `rute` VALUES (7, 9, 1, '(Via Kebumen)', '150000');
INSERT INTO `rute` VALUES (8, 1, 4, '(Via Salatiga)', '175000');
INSERT INTO `rute` VALUES (9, 4, 1, '(Via Salatiga)', '175000');
INSERT INTO `rute` VALUES (10, 2, 3, NULL, '200000');
INSERT INTO `rute` VALUES (11, 3, 2, NULL, '200000');
INSERT INTO `rute` VALUES (12, 5, 3, NULL, '170000');
INSERT INTO `rute` VALUES (13, 3, 5, NULL, '170000');
INSERT INTO `rute` VALUES (14, 6, 3, NULL, '205000');
INSERT INTO `rute` VALUES (15, 3, 6, NULL, '205000');
INSERT INTO `rute` VALUES (16, 3, 7, NULL, '110000');
INSERT INTO `rute` VALUES (17, 7, 3, NULL, '110000');
INSERT INTO `rute` VALUES (18, 1, 8, NULL, '100000');
INSERT INTO `rute` VALUES (19, 8, 1, NULL, '100000');
INSERT INTO `rute` VALUES (20, 1, 7, NULL, '300000');
INSERT INTO `rute` VALUES (21, 7, 1, NULL, '300000');
INSERT INTO `rute` VALUES (22, 7, 9, NULL, '150000');
INSERT INTO `rute` VALUES (23, 9, 7, NULL, '150000');
INSERT INTO `rute` VALUES (24, 2, 7, NULL, '310000');
INSERT INTO `rute` VALUES (25, 7, 2, NULL, '310000');
INSERT INTO `rute` VALUES (26, 6, 7, NULL, '315000');
INSERT INTO `rute` VALUES (27, 7, 6, NULL, '315000');
INSERT INTO `rute` VALUES (28, 2, 8, NULL, '155000');
INSERT INTO `rute` VALUES (29, 8, 2, NULL, '155000');

-- ----------------------------
-- Table structure for rute_jadwal_detail
-- ----------------------------
DROP TABLE IF EXISTS `rute_jadwal_detail`;
CREATE TABLE `rute_jadwal_detail`  (
  `id_rute_jadwal_detail` int NOT NULL AUTO_INCREMENT,
  `id_rute` int NULL DEFAULT NULL,
  `pukul` time NULL DEFAULT NULL,
  PRIMARY KEY (`id_rute_jadwal_detail`) USING BTREE,
  INDEX `rjd_rute`(`id_rute` ASC) USING BTREE,
  CONSTRAINT `rjd_rute` FOREIGN KEY (`id_rute`) REFERENCES `rute` (`id_rute`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 185 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of rute_jadwal_detail
-- ----------------------------
INSERT INTO `rute_jadwal_detail` VALUES (1, 2, '01:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (2, 2, '02:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (3, 2, '03:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (4, 2, '04:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (5, 2, '05:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (6, 2, '06:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (7, 2, '07:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (8, 2, '08:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (9, 2, '09:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (10, 2, '10:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (11, 2, '11:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (12, 2, '12:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (13, 2, '13:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (14, 2, '14:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (15, 2, '15:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (16, 2, '16:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (17, 2, '17:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (18, 2, '19:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (19, 2, '20:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (20, 2, '21:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (21, 2, '22:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (22, 2, '23:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (23, 2, '23:59:00');
INSERT INTO `rute_jadwal_detail` VALUES (24, 3, '01:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (25, 3, '02:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (26, 3, '03:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (27, 3, '04:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (28, 3, '05:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (29, 3, '06:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (30, 3, '07:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (31, 3, '08:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (32, 3, '09:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (33, 3, '10:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (34, 3, '11:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (35, 3, '12:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (36, 3, '13:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (37, 3, '14:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (38, 3, '15:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (39, 3, '16:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (40, 3, '17:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (41, 3, '19:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (42, 3, '20:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (43, 3, '21:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (44, 3, '22:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (45, 3, '23:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (46, 3, '23:59:00');
INSERT INTO `rute_jadwal_detail` VALUES (47, 4, '05:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (48, 4, '06:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (49, 4, '07:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (50, 4, '08:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (51, 4, '09:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (52, 4, '10:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (53, 4, '11:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (54, 4, '12:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (55, 4, '13:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (56, 4, '14:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (57, 4, '15:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (58, 4, '16:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (59, 4, '17:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (60, 4, '19:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (61, 4, '20:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (62, 4, '21:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (63, 4, '22:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (64, 5, '05:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (65, 5, '06:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (66, 5, '07:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (67, 5, '08:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (68, 5, '09:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (69, 5, '10:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (70, 5, '11:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (71, 5, '12:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (72, 5, '13:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (73, 5, '14:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (74, 5, '15:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (75, 5, '16:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (76, 5, '17:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (77, 5, '19:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (78, 5, '20:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (79, 5, '21:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (80, 5, '22:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (81, 6, '01:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (82, 6, '03:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (83, 6, '05:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (84, 6, '08:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (85, 6, '17:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (86, 6, '20:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (87, 7, '07:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (88, 7, '10:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (89, 7, '13:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (90, 7, '15:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (91, 7, '17:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (92, 7, '20:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (93, 8, '01:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (94, 8, '09:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (95, 8, '13:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (96, 8, '19:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (97, 9, '01:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (98, 9, '09:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (99, 9, '13:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (100, 9, '19:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (101, 10, '02:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (102, 10, '05:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (103, 10, '07:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (104, 10, '09:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (105, 10, '11:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (106, 10, '15:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (107, 10, '17:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (108, 10, '20:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (109, 10, '22:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (110, 10, '23:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (111, 11, '02:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (112, 11, '05:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (113, 11, '07:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (114, 11, '09:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (115, 11, '11:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (116, 11, '15:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (117, 11, '17:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (118, 11, '20:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (119, 11, '22:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (120, 11, '23:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (121, 12, '07:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (122, 12, '13:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (123, 12, '19:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (124, 13, '07:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (125, 13, '13:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (126, 13, '19:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (127, 14, '07:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (128, 14, '13:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (129, 14, '19:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (130, 15, '07:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (131, 15, '13:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (132, 15, '19:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (133, 16, '06:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (134, 16, '09:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (135, 16, '13:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (136, 16, '18:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (137, 16, '20:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (138, 17, '06:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (139, 17, '09:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (140, 17, '13:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (141, 17, '18:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (142, 17, '20:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (143, 18, '07:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (144, 18, '10:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (145, 18, '14:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (146, 18, '19:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (147, 18, '21:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (148, 19, '07:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (149, 19, '10:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (150, 19, '14:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (151, 19, '19:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (152, 19, '21:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (153, 20, '05:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (154, 20, '11:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (155, 20, '23:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (156, 21, '05:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (157, 21, '11:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (158, 21, '23:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (159, 22, '06:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (160, 22, '10:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (161, 22, '15:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (162, 22, '18:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (163, 23, '06:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (164, 23, '10:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (165, 23, '15:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (166, 23, '18:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (167, 24, '05:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (168, 24, '10:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (169, 24, '23:59:00');
INSERT INTO `rute_jadwal_detail` VALUES (170, 25, '05:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (171, 25, '10:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (172, 25, '23:59:00');
INSERT INTO `rute_jadwal_detail` VALUES (173, 26, '07:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (174, 26, '20:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (175, 27, '07:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (176, 27, '20:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (177, 28, '05:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (178, 28, '07:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (179, 28, '12:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (180, 28, '17:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (181, 29, '05:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (182, 29, '07:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (183, 29, '12:00:00');
INSERT INTO `rute_jadwal_detail` VALUES (184, 29, '17:00:00');

-- ----------------------------
-- Table structure for rute_kendaraan_detail
-- ----------------------------
DROP TABLE IF EXISTS `rute_kendaraan_detail`;
CREATE TABLE `rute_kendaraan_detail`  (
  `id_rute_kendaraan_detail` int NOT NULL AUTO_INCREMENT,
  `id_kendaraan` int NULL DEFAULT NULL,
  `id_rute` int NULL DEFAULT NULL,
  PRIMARY KEY (`id_rute_kendaraan_detail`) USING BTREE,
  INDEX `id_kendaraan`(`id_kendaraan` ASC) USING BTREE,
  INDEX `rkd_rute`(`id_rute` ASC) USING BTREE,
  CONSTRAINT `rkd_kendaraan` FOREIGN KEY (`id_kendaraan`) REFERENCES `kendaraan` (`id_kendaraan`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `rkd_rute` FOREIGN KEY (`id_rute`) REFERENCES `rute` (`id_rute`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE = InnoDB AUTO_INCREMENT = 23 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of rute_kendaraan_detail
-- ----------------------------
INSERT INTO `rute_kendaraan_detail` VALUES (1, 7, 2);
INSERT INTO `rute_kendaraan_detail` VALUES (2, 7, 3);
INSERT INTO `rute_kendaraan_detail` VALUES (3, 8, 4);
INSERT INTO `rute_kendaraan_detail` VALUES (4, 8, 5);
INSERT INTO `rute_kendaraan_detail` VALUES (5, 9, 4);
INSERT INTO `rute_kendaraan_detail` VALUES (6, 9, 5);
INSERT INTO `rute_kendaraan_detail` VALUES (7, 10, 4);
INSERT INTO `rute_kendaraan_detail` VALUES (8, 10, 5);
INSERT INTO `rute_kendaraan_detail` VALUES (9, 11, 4);
INSERT INTO `rute_kendaraan_detail` VALUES (10, 11, 5);
INSERT INTO `rute_kendaraan_detail` VALUES (11, 7, 10);
INSERT INTO `rute_kendaraan_detail` VALUES (12, 7, 11);
INSERT INTO `rute_kendaraan_detail` VALUES (13, 12, 10);
INSERT INTO `rute_kendaraan_detail` VALUES (14, 12, 11);
INSERT INTO `rute_kendaraan_detail` VALUES (15, 12, 12);
INSERT INTO `rute_kendaraan_detail` VALUES (16, 12, 13);
INSERT INTO `rute_kendaraan_detail` VALUES (17, 12, 14);
INSERT INTO `rute_kendaraan_detail` VALUES (18, 12, 15);
INSERT INTO `rute_kendaraan_detail` VALUES (19, 12, 16);
INSERT INTO `rute_kendaraan_detail` VALUES (20, 12, 17);
INSERT INTO `rute_kendaraan_detail` VALUES (21, 7, 20);
INSERT INTO `rute_kendaraan_detail` VALUES (22, 7, 21);

-- ----------------------------
-- Table structure for status
-- ----------------------------
DROP TABLE IF EXISTS `status`;
CREATE TABLE `status`  (
  `id_status` int NOT NULL AUTO_INCREMENT,
  `status` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id_status`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of status
-- ----------------------------
INSERT INTO `status` VALUES (1, 'Berlangsung');
INSERT INTO `status` VALUES (2, 'Selesai');
INSERT INTO `status` VALUES (3, 'Dibatalkan');
INSERT INTO `status` VALUES (4, 'Menunggu persetujuan');
INSERT INTO `status` VALUES (5, 'Dalam Penjemputan');
INSERT INTO `status` VALUES (6, 'Mengantar');

SET FOREIGN_KEY_CHECKS = 1;
