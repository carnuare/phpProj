#!/bin/sh
mysql -u root -p
CREATE DATABASE assignment_tracker;
EXIT
mysql -u root -p assignment_tracker < assignment_tracker.sql