#!/bin/sh
sudo apt install mysql-server
#telnet 127.0.0.1 3306 
sleep 10
mysql -u root --password=example 
CREATE DATABASE assignment_tracker;
EXIT
mysql -u root assignment_tracker < assignment_tracker.sql --password=example 
