-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 28, 2017 at 02:43 AM
-- Server version: 5.7.14
-- PHP Version: 5.6.25

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `federerp_pb`
--

-- --------------------------------------------------------

--
-- Table structure for table `eventtable`
--

CREATE TABLE `eventtable` (
  `eventID` char(36) COLLATE utf8_unicode_ci NOT NULL,
  `date` date NOT NULL,
  `time` time NOT NULL,
  `notes` text COLLATE utf8_unicode_ci NOT NULL,
  `eventType` tinytext COLLATE utf8_unicode_ci NOT NULL,
  `name` tinytext COLLATE utf8_unicode_ci NOT NULL,
  `clientID` varchar(36) COLLATE utf8_unicode_ci NOT NULL,
  `location` text COLLATE utf8_unicode_ci NOT NULL,
  `preShootMeeting` tinyint(1) NOT NULL,
  `amount` int(11) NOT NULL,
  `accountingCategory` tinytext COLLATE utf8_unicode_ci NOT NULL,
  `itemDescription` text COLLATE utf8_unicode_ci NOT NULL,
  `haveReceipt` tinyint(1) NOT NULL,
  `forEvent` char(36) COLLATE utf8_unicode_ci NOT NULL,
  `printType` tinytext COLLATE utf8_unicode_ci NOT NULL,
  `priceToClient` int(11) NOT NULL,
  `hours` time NOT NULL,
  `photoDueDate` date NOT NULL,
  `shootType` tinytext COLLATE utf8_unicode_ci NOT NULL,
  `vendorInfo` text COLLATE utf8_unicode_ci NOT NULL,
  `schedule` text COLLATE utf8_unicode_ci NOT NULL,
  `vipInfo` text COLLATE utf8_unicode_ci NOT NULL,
  `numPhotos` smallint(6) NOT NULL,
  `additionalLocations` text COLLATE utf8_unicode_ci NOT NULL,
  `estimatedDueDate` date NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `eventtable`
--
ALTER TABLE `eventtable`
  ADD PRIMARY KEY (`eventID`) USING BTREE;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
