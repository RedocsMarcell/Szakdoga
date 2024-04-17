-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: szakdoga
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

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
-- Table structure for table `answers`
--

DROP TABLE IF EXISTS `answers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `answers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` text NOT NULL,
  `Correct` tinyint(4) NOT NULL,
  `Task_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk7_idx` (`Task_id`),
  CONSTRAINT `fk7` FOREIGN KEY (`Task_id`) REFERENCES `tasks` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=108 DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answers`
--

LOCK TABLES `answers` WRITE;
/*!40000 ALTER TABLE `answers` DISABLE KEYS */;
INSERT INTO `answers` VALUES (46,'igaz',1,61),(47,'hamis',0,61),(48,'igen ',1,62),(49,'nem',0,62),(50,'lehet',0,62),(51,'ads',0,63),(52,'asd',0,63),(53,'asd',0,63),(54,'sad',1,63),(55,'igaz',1,64),(56,'hamis',0,64),(57,'fsa',0,65),(58,'fas',1,65),(59,'fsa',0,65),(60,'asf',0,66),(61,'afs',1,66),(62,'afs',0,66),(63,'afs',0,66),(64,'igaz',1,67),(65,'hamis',0,67),(66,'fas',0,68),(67,'asf',1,68),(68,'fas',0,69),(69,'fasfs',1,69),(70,'ffs',0,69),(71,'f',0,69),(72,'igaz',1,70),(73,'hamis',0,70),(74,'asf',1,71),(75,'sfa',0,71),(76,'afs',0,72),(77,'asf',1,72),(78,'saf',0,72),(79,'asf',0,72),(80,'igaz',0,73),(81,'hamis',1,73),(82,'elso',0,74),(83,'masodik',0,74),(84,'harmadik',1,74),(85,'negyedik',1,74),(86,'nem',0,75),(87,'nem',0,75),(88,'nem',0,75),(89,'igen',1,75),(90,'igaz',1,76),(91,'hamis',0,76),(92,'1 valász',0,77),(93,'2 valász',1,77),(94,'3 valász',0,77),(95,'1 valász',0,78),(96,'2 valász',0,78),(97,'3 valász',1,78),(98,'4 valász',0,78),(99,'igaz',1,79),(100,'hamis',0,79),(101,'1 válasz',0,80),(102,'2 válasz',1,80),(103,'3válasz',0,80),(104,'válasz 1',0,81),(105,'válasz 2',0,81),(106,'válasz 3',1,81),(107,'válasz 4',0,81);
/*!40000 ALTER TABLE `answers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `class`
--

DROP TABLE IF EXISTS `class`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `class` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `ClassName` varchar(45) NOT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `class`
--

LOCK TABLES `class` WRITE;
/*!40000 ALTER TABLE `class` DISABLE KEYS */;
INSERT INTO `class` VALUES (1,'12.A'),(3,'11.A'),(4,'13.A');
/*!40000 ALTER TABLE `class` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,'admin'),(2,'Tanár'),(3,'Diák');
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tasks`
--

DROP TABLE IF EXISTS `tasks`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tasks` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` text NOT NULL,
  `score` varchar(45) NOT NULL,
  `type_id` int(11) NOT NULL,
  `Test_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk4_idx` (`Test_id`),
  KEY `fk9_idx` (`type_id`),
  CONSTRAINT `fk4` FOREIGN KEY (`Test_id`) REFERENCES `tests` (`Id`),
  CONSTRAINT `fk9` FOREIGN KEY (`type_id`) REFERENCES `tests_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=82 DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tasks`
--

LOCK TABLES `tasks` WRITE;
/*!40000 ALTER TABLE `tasks` DISABLE KEYS */;
INSERT INTO `tasks` VALUES (55,'igaz e ?','1',1,33),(56,'Elso a helyes válasz? igen','1',2,33),(57,'asd','1',3,33),(58,'igaz e ?','1',1,34),(59,'Elso a helyes válasz? igen','1',2,34),(60,'asd','1',3,34),(61,'igaz e ?','1',1,35),(62,'Elso a helyes válasz? igen','1',2,35),(63,'asd','1',3,35),(64,'ads','1',1,36),(65,'saf','1',2,36),(66,'asffsa','1',3,36),(67,'afs','1',1,37),(68,'fas','1',2,37),(69,'afsafs','1',3,37),(70,'fas','1',1,38),(71,'saf','1',2,39),(72,'fas','1',3,40),(73,'elso kerdes mindig igaz','1',1,41),(74,'kettes mindig nehez','1',2,41),(75,'laaalalala','1',3,41),(76,'1.feladat','1',1,42),(77,'2.feladat','1',2,42),(78,'3.feladat','1',3,42),(79,'1 Kérdés igaz','1',1,43),(80,'2 kérdés 2. a jo','1',2,43),(81,'3 kérdés 3 valasz jo','1',3,43);
/*!40000 ALTER TABLE `tasks` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tests`
--

DROP TABLE IF EXISTS `tests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tests` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(100) NOT NULL,
  `Date` date NOT NULL,
  `Subject` varchar(50) NOT NULL,
  `class` varchar(45) NOT NULL,
  `Time` int(11) NOT NULL,
  `User_Id` int(11) DEFAULT NULL,
  PRIMARY KEY (`Id`),
  KEY `fk2_idx` (`User_Id`),
  CONSTRAINT `fk2` FOREIGN KEY (`User_Id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=44 DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tests`
--

LOCK TABLES `tests` WRITE;
/*!40000 ALTER TABLE `tests` DISABLE KEYS */;
INSERT INTO `tests` VALUES (33,'Teszt','2003-08-16','rajz','11.A',0,1),(34,'Teszt','2003-08-16','rajz','11.A',0,1),(35,'Teszt','2003-08-16','rajz','11.A',0,1),(36,'asd','2024-04-12','Matematika','10.A',40,1),(37,'asd','2024-04-13','Matematika','11.A',40,1),(38,'11.A dolgozat igen','2024-04-15','Matematika','11.A',45,1),(39,'2. dolgozat nem','2024-04-15','Matematika','11.A',45,1),(40,'3. valami lehet','2024-04-15','Matematika','11.A',45,1),(41,'nem','2024-04-16','Matematika','11.A',10,1),(42,'nagy teszt','2024-04-18','Irodalom','12.A',40,1),(43,'Biosz','2024-04-18','Biologia','12.A',40,1);
/*!40000 ALTER TABLE `tests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tests_type`
--

DROP TABLE IF EXISTS `tests_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tests_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tests_type`
--

LOCK TABLES `tests_type` WRITE;
/*!40000 ALTER TABLE `tests_type` DISABLE KEYS */;
INSERT INTO `tests_type` VALUES (1,'TrueFalse'),(2,'MultipleAnswers'),(3,'OneAnswer');
/*!40000 ALTER TABLE `tests_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `useranswer`
--

DROP TABLE IF EXISTS `useranswer`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `useranswer` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `UserTestId` int(11) NOT NULL,
  `AnswerId` int(11) NOT NULL,
  `TaskId` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `answerId_idx` (`AnswerId`),
  KEY `UserTestId_idx` (`UserTestId`),
  KEY `TaskId_idx` (`TaskId`),
  CONSTRAINT `TaskId` FOREIGN KEY (`TaskId`) REFERENCES `tasks` (`id`),
  CONSTRAINT `UserTestId` FOREIGN KEY (`UserTestId`) REFERENCES `usertests` (`id`),
  CONSTRAINT `dffdggdf` FOREIGN KEY (`AnswerId`) REFERENCES `answers` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `useranswer`
--

LOCK TABLES `useranswer` WRITE;
/*!40000 ALTER TABLE `useranswer` DISABLE KEYS */;
INSERT INTO `useranswer` VALUES (8,7,80,73),(9,7,82,74),(10,7,83,74),(11,7,89,75),(12,10,90,76),(13,10,92,77),(14,10,95,78);
/*!40000 ALTER TABLE `useranswer` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Username` varchar(45) NOT NULL,
  `Password` varchar(100) NOT NULL,
  `class_Id` int(11) NOT NULL,
  `Enable` tinyint(4) DEFAULT NULL,
  `Email` varchar(70) NOT NULL,
  `Role_Id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `password_UNIQUE` (`Password`),
  UNIQUE KEY `username_UNIQUE` (`Username`),
  KEY `fk5_idx` (`Role_Id`),
  CONSTRAINT `asd` FOREIGN KEY (`class_Id`) REFERENCES `class` (`Id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `fk5` FOREIGN KEY (`Role_Id`) REFERENCES `role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (0,'admin','$2b$10$28ez/oz/PYo21tTgoozgBOpG0l9Q1yaMWLEF8zj1rCeMmPMfqY0K.',0,1,'admin@gmail.com',1),(1,'tanár','$2b$10$kAjnzTFu/Ukc6uRMTqfLt.r2WpioJRrB4.zit0GGElAU.LdOuY1P2',1,1,'tanar@gmail.com',2),(2,'diák','$2a$10$fHbDO7fjU1lmZKXe.1u6yuiOKkF5EpAX.r9TJPIBtjhs7EvvUk4T2',3,1,'diak@gmail.com',3),(7,'diak1','$2a$10$fDA1rTd7sGlwRsmJjuL9uOPbWCdWtsYS04TZFEi4bJoOjHleiJwYi',1,1,'diak1@gmail.com',3);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usertests`
--

DROP TABLE IF EXISTS `usertests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usertests` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `UserID` int(11) NOT NULL,
  `TestId` int(11) NOT NULL,
  `Completed` int(11) NOT NULL,
  `Points` double NOT NULL,
  PRIMARY KEY (`id`),
  KEY `userfk_idx` (`UserID`),
  KEY `TestFk_idx` (`TestId`),
  CONSTRAINT `TestFk` FOREIGN KEY (`TestId`) REFERENCES `tests` (`Id`),
  CONSTRAINT `userfk` FOREIGN KEY (`UserID`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usertests`
--

LOCK TABLES `usertests` WRITE;
/*!40000 ALTER TABLE `usertests` DISABLE KEYS */;
INSERT INTO `usertests` VALUES (1,2,38,0,0),(2,7,38,0,0),(3,2,39,0,0),(4,7,39,0,0),(5,2,40,1,0),(6,7,40,0,0),(7,2,41,1,0),(8,7,41,0,0),(9,1,42,0,0),(10,7,42,1,0),(11,1,43,0,0),(12,7,43,0,0);
/*!40000 ALTER TABLE `usertests` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-18  1:19:12
