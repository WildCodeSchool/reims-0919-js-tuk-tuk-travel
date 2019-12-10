drop database if exists tuktuktravel; 
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
    `IDuser_creator` INT NOT NULL,
    `destination` VARCHAR(255),
    `start_date` DATE NOT NULL,
    `end_date` DATE NOT NULL,
    `number_of_travelers_max` INT,
    `description` TEXT,
    FOREIGN KEY (`IDuser_creator`) REFERENCES `users`(`userID`),
    PRIMARY KEY (`travelID`)    
);

INSERT INTO `users` (
    `userID`, 
    `lastname`, 
    `firstname`, 
    `password`, 
    `birthday`, 
    `address`, 
    `email`, 
    `phone_number`, 
    `description`, 
    `picture`
) VALUES (
    1, 
    'Bourelle', 
    'Herve', 
    'toto', 
    '1966-12-02', 
    '3 rue david 51100 reims', 
    'herve.bourelle@gmail.com', 
    '0626124408', 
    'cool', 
    NULL);

INSERT INTO `travels` (
    `travelID`, 
    `IDuser_creator`, 
    `destination`, 
    `start_date`, 
    `end_date`, 
    `number_of_travelers_max`, 
    `description`
) VALUES (
    1, 
    1, 
    'New York', 
    '2020-01-24', 
    '2020-01-31', 
    3, 
    'Lorem ipsum dolor sit amet, 
    consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt
    ut labore et dolore magna aliqua.
    Ut enim ad minim veniam, quis nostrud 
    exercitation ullamco laboris nisi ut 
    aliquip ex ea commodo consequat. 
    Duis aute irure dolor in reprehenderit 
    in voluptate velit esse cillum dolore eu 
    fugiat nulla pariatur.'
    );
