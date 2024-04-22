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
) ENGINE=InnoDB AUTO_INCREMENT=165 DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `answers`
--

LOCK TABLES `answers` WRITE;
/*!40000 ALTER TABLE `answers` DISABLE KEYS */;
INSERT INTO `answers` VALUES (140,'igaz',0,93),(141,'hamis',1,93),(142,'1',1,94),(143,'2',0,94),(144,'3',1,94),(145,'1',0,95),(146,'2',0,95),(147,'3',1,95),(148,'4',0,95),(149,'igaz',1,96),(150,'hamis',0,96),(151,'asdasd',0,97),(152,'sadasdasd',1,97),(153,'asdasd',0,98),(154,'asdasd',0,98),(155,'asdasd',0,98),(156,'asdasd',0,98),(157,'igaz',1,99),(158,'hamis',0,99),(159,'asf',0,100),(160,'asf',1,100),(161,'asf',0,101),(162,'asf',1,101),(163,'asf',0,101),(164,'asf',0,101);
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
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `class`
--

LOCK TABLES `class` WRITE;
/*!40000 ALTER TABLE `class` DISABLE KEYS */;
INSERT INTO `class` VALUES (1,'12.A'),(3,'11.A'),(4,'13.A'),(22,'21.A'),(23,'8.B');
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
) ENGINE=InnoDB AUTO_INCREMENT=102 DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tasks`
--

LOCK TABLES `tasks` WRITE;
/*!40000 ALTER TABLE `tasks` DISABLE KEYS */;
INSERT INTO `tasks` VALUES (93,'1.feladat igaz','1',1,49),(94,'2.feladat 1 a jo megoldás','1',2,49),(95,'3feladat 3 a jo megoldás','1',3,49),(96,'asddas','1',1,50),(97,'asdads','1',2,50),(98,'adsads','1',3,50),(99,'asf','1',1,51),(100,'asf','1',2,51),(101,'asf','1',3,51);
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
) ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tests`
--

LOCK TABLES `tests` WRITE;
/*!40000 ALTER TABLE `tests` DISABLE KEYS */;
INSERT INTO `tests` VALUES (49,'A nagyon nagy Teszt','2024-04-21','Matematika','8.B',3,19),(50,'asf','2024-04-21','Matematika','8.B',2,19),(51,'Almafa','2024-04-22','Biologia','8.B',40,1);
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
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `useranswer`
--

LOCK TABLES `useranswer` WRITE;
/*!40000 ALTER TABLE `useranswer` DISABLE KEYS */;
INSERT INTO `useranswer` VALUES (32,25,149,96),(33,25,152,97),(34,25,154,98),(35,28,157,99),(36,28,159,100),(37,28,162,101);
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
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (0,'admin','$2b$10$28ez/oz/PYo21tTgoozgBOpG0l9Q1yaMWLEF8zj1rCeMmPMfqY0K.',23,1,'admin@gmail.com',1),(1,'tanár','$2b$10$kAjnzTFu/Ukc6uRMTqfLt.r2WpioJRrB4.zit0GGElAU.LdOuY1P2',1,1,'tanar@gmail.com',2),(2,'diák','$2a$10$fHbDO7fjU1lmZKXe.1u6yuiOKkF5EpAX.r9TJPIBtjhs7EvvUk4T2',3,1,'diak@gmail.com',3),(7,'diak1','$2a$10$fDA1rTd7sGlwRsmJjuL9uOPbWCdWtsYS04TZFEi4bJoOjHleiJwYi',1,1,'diak1@gmail.com',3),(19,'Tanár Tanár','$2b$10$NQmiMG8w6PZMpDl2s4SmiOVRVnUqgUs4/Kg6aRYqK.AiWyYeUCdPW',23,1,'TanárTanár',2),(20,'Diák Diák','$2b$10$MYtD4GEaQUIRvC6RKOw9ueiUlN9EVH5ss.4xXIzlH8E07c1R2.w8e',23,1,'DiákDiák',3);
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
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usertests`
--

LOCK TABLES `usertests` WRITE;
/*!40000 ALTER TABLE `usertests` DISABLE KEYS */;
INSERT INTO `usertests` VALUES (21,0,49,0,0),(22,19,49,0,0),(23,0,50,0,0),(24,19,50,0,0),(25,20,50,1,0),(26,0,51,0,0),(27,19,51,0,0),(28,20,51,1,0);
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

-- Dump completed on 2024-04-22  5:29:49
