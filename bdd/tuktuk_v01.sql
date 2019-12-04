CREATE DATABASE `tuktuktravel`;
USE `tuktuktravel`;
CREATE TABLE `users`(
    `userID` INT NOT NULL AUTO_INCREMENT,
    `lastname` VARCHAR(100) NOT NULL,
    `firstname` VARCHAR(100) NOT NULL, 
    `password` VARCHAR(255) NOT NULL,
    `birthday` DATE NOT NULL, 
    `address` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone_number` VARCHAR(15) NOT NULL,
    `description` TEXT NULL,
    `picture` TEXT,
    PRIMARY KEY (`userID`) 
);

CREATE TABLE `travels`(
    `travelID` INT NOT NULL AUTO_INCREMENT,
    `destination` VARCHAR(255),
    `start_date` DATE NOT NULL,
    `end_date` DATE NOT NULL,
    `number_of_travelers_max` INT,
    `description` TEXT,
    FOREIGN KEY (`IDuser_creator`) REFERENCES `users`(`userID`),
    PRIMARY KEY (`travelID`)    
);

CREATE TABLE `interests` (
    `interestID` INT NOT NULL AUTO_INCREMENT,
    `description` TEXT,
    PRIMARY KEY (`interestID`)
);

CREATE TABLE `interests_users` (
    `interest_userID` INT NOT NULL AUTO_INCREMENT,
    FOREIGN KEY (`IDuser`) REFERENCES `users`(`userID`)
    FOREIGN KEY (`IDinterest`) REFERENCES `interests`(`interestID`)
    PRIMARY KEY ('interest_userID')
);

CREATE TABLE `travels_users` (
    `travel_userID` INT NOT NULL AUTO_INCREMENT,
    `rate` INT,
    `comment` TEXT,
    FOREIGN KEY (`IDuser`) REFERENCES `users`(`userID`),
    FOREIGN KEY (`IDtravel`) REFERENCES `travels`(`travelID`),
    PRIMARY KEY (`travel_userID`)
    
);