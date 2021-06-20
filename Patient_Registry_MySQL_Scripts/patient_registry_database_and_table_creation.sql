
CREATE DATABASE  IF NOT EXISTS `patient_registry`;
USE `patient_registry`;

DROP TABLE IF EXISTS `patient`;
CREATE TABLE `patient` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `first_name` varchar(45) DEFAULT NULL,
  `last_name` varchar(45) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `weight` varchar(45) DEFAULT NULL,
  `gender` varchar(45) DEFAULT NULL,
  `diagnosis` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;