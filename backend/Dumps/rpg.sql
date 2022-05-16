-- MySQL dump 10.13  Distrib 8.0.25, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: rpg
-- ------------------------------------------------------
-- Server version	8.0.29-0ubuntu0.20.04.3

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Characters`
--

DROP TABLE IF EXISTS `Characters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Characters` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nameCharacters` varchar(45) NOT NULL,
  `sexe` varchar(45) NOT NULL,
  `size` decimal(4,2) NOT NULL,
  `origin` varchar(45) NOT NULL,
  `idUser` int NOT NULL,
  `idJdr` int NOT NULL,
  `lvl` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idUser_idx` (`idUser`),
  KEY `idJdr_idx` (`idJdr`),
  CONSTRAINT `idJdr` FOREIGN KEY (`idJdr`) REFERENCES `jdr` (`id`),
  CONSTRAINT `idUser` FOREIGN KEY (`idUser`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Characters`
--

LOCK TABLES `Characters` WRITE;
/*!40000 ALTER TABLE `Characters` DISABLE KEYS */;
INSERT INTO `Characters` VALUES (1,'Cylian','M',1.90,'Absolom',11,3,8),(2,'Haaru','F',1.55,'Bresda',16,3,5),(3,'Lestat de Lioncourt','M',1.75,'Paris',11,5,NULL);
/*!40000 ALTER TABLE `Characters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `characteristics`
--

DROP TABLE IF EXISTS `characteristics`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `characteristics` (
  `id` int NOT NULL AUTO_INCREMENT,
  `str` int NOT NULL,
  `dex` int NOT NULL,
  `con` int NOT NULL,
  `int` int NOT NULL,
  `wis` int NOT NULL,
  `cha` int NOT NULL,
  `idRace` int NOT NULL,
  `idJdr` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idRace_idx` (`idRace`),
  KEY `idJdr_idx` (`idJdr`),
  CONSTRAINT `idRace` FOREIGN KEY (`idRace`) REFERENCES `raceStarFinder` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `characteristics`
--

LOCK TABLES `characteristics` WRITE;
/*!40000 ALTER TABLE `characteristics` DISABLE KEYS */;
/*!40000 ALTER TABLE `characteristics` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jdr`
--

DROP TABLE IF EXISTS `jdr`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jdr` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nameJdr` varchar(45) NOT NULL,
  `image` varchar(255) NOT NULL,
  `nameimg` varchar(255) DEFAULT NULL,
  `descr` longtext,
  `coverImg` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jdr`
--

LOCK TABLES `jdr` WRITE;
/*!40000 ALTER TABLE `jdr` DISABLE KEYS */;
INSERT INTO `jdr` VALUES (1,'Donjon & dragon','https://i.ibb.co/H4RQRBS/d-d.jpg','https://i.ibb.co/tMFjS0S/d-d-titles.png',NULL,NULL),(2,'Pathfinder','https://i.ibb.co/F0Lx6g1/pathfinder.jpg','https://i.ibb.co/34Zfrvj/pathfinder-title.png',NULL,NULL),(3,'Starfinder','https://i.ibb.co/jJxsxS9/starfinder.jpg','https://i.ibb.co/s17MXH8/starfinder-title.png','Starfinder est un jeu mêlant fantastique et science-fiction qui se déroule quelques milliers d\'années après le jeu de rôle Pathfinder. Il en reprend le système de base et l\'adapte à l\'exploration de l\'univers, pour un setting space opera qui vous rappelera l\'ambiance des Gardiens de la Galaxie : à vous pistolets laser, épées à plasma, armures assistées, jetpacks et nécroglisseurs !',NULL),(4,'Star Wars','https://i.ibb.co/r6CZ361/star-wars.jpg','https://i.ibb.co/ykK3DvP/star-wars-title.png',NULL,NULL),(5,'Vampire: la mascarade','https://i.ibb.co/K7QhKpP/vampire.jpg','https://i.ibb.co/vLSpsZz/vampire-title.png',NULL,NULL),(6,'Les terres d\'Arran','https://i.ibb.co/xGRt4gD/terre-d-arran.jpg','https://i.ibb.co/fxBHbvx/terre-d-arran-title.png',NULL,NULL);
/*!40000 ALTER TABLE `jdr` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `raceStarFinder`
--

DROP TABLE IF EXISTS `raceStarFinder`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `raceStarFinder` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `bonusFor` int DEFAULT NULL,
  `bonusDex` int DEFAULT NULL,
  `bonusCon` int DEFAULT NULL,
  `bonusInt` int DEFAULT NULL,
  `bonusSag` int DEFAULT NULL,
  `bonusCha` int DEFAULT NULL,
  `Taille` varchar(45) NOT NULL,
  `type` varchar(45) NOT NULL,
  `pv` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `raceStarFinder`
--

LOCK TABLES `raceStarFinder` WRITE;
/*!40000 ALTER TABLE `raceStarFinder` DISABLE KEYS */;
INSERT INTO `raceStarFinder` VALUES (1,'Androïdes',NULL,2,NULL,2,NULL,-2,'M','Androïde',4),(2,'Humain',NULL,NULL,NULL,NULL,NULL,NULL,'M','Humanoïde',4),(3,'Kasathas',2,NULL,NULL,-2,2,NULL,'M','Kasatha',4),(4,'Lashuntas ( Korashas )',2,NULL,NULL,NULL,-2,2,'M','Lashunta',4),(5,'Lashuntas ( Damayas)',NULL,NULL,-2,2,NULL,2,'M','Lashunta',4),(6,'Shirrens',NULL,NULL,2,NULL,2,-2,'M','Shirren',6),(7,'Vesks',2,NULL,2,-2,NULL,NULL,'M','Vesk',6),(8,'Ysokis',-2,2,NULL,2,NULL,NULL,'P','Ysoki',2);
/*!40000 ALTER TABLE `raceStarFinder` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int NOT NULL AUTO_INCREMENT,
  `login` varchar(45) NOT NULL,
  `mail` varchar(64) NOT NULL,
  `password` varchar(64) NOT NULL,
  `lastname` varchar(45) NOT NULL,
  `firstname` varchar(45) NOT NULL,
  `avatar` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `login_UNIQUE` (`login`),
  UNIQUE KEY `mail_UNIQUE` (`mail`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Supertoto','toto@spamland.sl','toto','','',NULL),(4,'TotoMan','totman@testLand.tl','toto','','',NULL),(7,'Hypertoto','zeb@ulon.fr','toto','','',NULL),(9,'super Toto','toto@totoland.to','ghfghfhft','','',NULL),(11,'Cylian','Luigi@toto.to','toto','','',NULL),(12,'Atoto','Amar@toto.to','toto','','',NULL),(13,'Alexoto','Alexandre@totoland.to','toto','','',NULL),(14,'Hamzoto','hamzo@totoland.to','toto','','',NULL),(15,'Robertoto','robert@gmol.go','toto','','',NULL),(16,'louis','Luigi@gdgjsidgjsd.li','toto','','',NULL),(17,'lou','Luigi@gdgjsbfbf.lm','toto','','',NULL),(18,'superlapin','Luo@spamland.sp','$2b$10$8Kg1kHXDa/uboDbfiA48BeEUvY2Uui0SZzsT2O9ZLJyXkMWcBGU6i','john','Doe',NULL),(19,'Melune','luigi@totolant.tl','$2b$10$mCaHDXQQE9RqC5Yy2im1BefuZoxrO8Mhkje6K16S1DrYlj9CrFCPK','Menez','Luigi','https://i.ibb.co/9hC9PjV/token-1.png'),(20,'MegaToto','toto@totoland.toto','$2b$10$naD5OU7I4u7g0mE93VGGfu0SG/o3nzTquMx/2x/xeV4U9G4/hkmRq','toto','toto',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-16 10:17:13
