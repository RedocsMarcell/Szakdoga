-- Táblák létrehozása
CREATE TABLE `Users` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(255) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `classid` INT,
  `enable` BOOLEAN,
  `email` VARCHAR(255) NOT NULL,
  `roleid` INT,
  PRIMARY KEY (`id`)
);

CREATE TABLE `Class` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `ClassName` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `Role` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);

CREATE TABLE `Dolgozatok` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `date` DATE NOT NULL,
  `subject` VARCHAR(255) NOT NULL,
  `class` INT,
  `userid` INT,
  PRIMARY KEY (`id`)
);

CREATE TABLE `Feladatok` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `text` TEXT NOT NULL,
  `score` INT NOT NULL,
  `type` INT,
  `DolgozatID` INT,
  PRIMARY KEY (`id`)
);

CREATE TABLE `Valaszok` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `text` VARCHAR(255) NOT NULL,
  `is` BOOLEAN NOT NULL,
  `FeladatID` INT,
  PRIMARY KEY (`id`)
);

CREATE TABLE `Dolgozat_Tipus` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`id`)
);

-- Kapcsolatok létrehozása
ALTER TABLE `Users`
  ADD CONSTRAINT `fk_users_class` FOREIGN KEY (`classid`) REFERENCES `Class` (`id`);

ALTER TABLE `Users`
  ADD CONSTRAINT `fk_users_role` FOREIGN KEY (`roleid`) REFERENCES `Role` (`id`);

ALTER TABLE `Dolgozatok`
  ADD CONSTRAINT `fk_dolgozatok_users` FOREIGN KEY (`userid`) REFERENCES `Users` (`id`);

ALTER TABLE `Dolgozatok`
  ADD CONSTRAINT `fk_dolgozatok_class` FOREIGN KEY (`class`) REFERENCES `Class` (`id`);

ALTER TABLE `Feladatok`
  ADD CONSTRAINT `fk_feladatok_dolgozatok` FOREIGN KEY (`DolgozatID`) REFERENCES `Dolgozatok` (`id`);

ALTER TABLE `Feladatok`
  ADD CONSTRAINT `fk_feladatok_tipus` FOREIGN KEY (`type`) REFERENCES `Dolgozat_Tipus` (`id`);

ALTER TABLE `Valaszok`
  ADD CONSTRAINT `fk_valaszok_feladatok` FOREIGN KEY (`FeladatID`) REFERENCES `Feladatok` (`id`);

-- Adatok feltoltése
INSERT INTO `Role` (`id`, `Name`) VALUES
(0, 'admin'),
(1, 'Teacher'),
(2, 'Student');

INSERT INTO `Class` (`id`, `ClassName`) VALUES
(0, 'Teacher'),
(1, '9.a'),
(4, '13.a');

INSERT INTO `Users` (`username`, `password`, `email`, `classid`, `roleid`) VALUES
('admin', 'admin', 'admin@gmail.com', NULL, 0),
('Balics', 'Jelszo', 'Balics@gmail.com', 1, 2),
('Benike', 'Benike', 'Benike@gmail.com', 4, 2);

INSERT INTO `Dolgozat_Tipus` (`id`, `name`) VALUES
(0, 'Feleletvalasztos'),
(1, 'Igaz Hamis'),
(2, 'Tobb helyes valasz');

INSERT INTO `Dolgozatok` (`name`, `date`, `subject`, `class`, `userid`) VALUES
('Dolgozatnev', '2024-02-12', '90', 1, 2);

INSERT INTO `Feladatok` (`text`, `score`, `type`, `DolgozatID`) VALUES
('mikor volt a kerdojel?', 5, 0, 1),
('aranyalma arany.', 3, 1, 1);

INSERT INTO `Valaszok` (`text`, `is`, `FeladatID`) VALUES
('Soha', FALSE, 1),
('Tegnap', TRUE, 1),
('Igaz', TRUE, 2),
('Hamis', FALSE, 2);