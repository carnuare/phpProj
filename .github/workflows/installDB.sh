#!/bin/sh
sudo apt install mysql-server
telnet 127.0.0.1 3306 
mysql -h 127.0.0.1 -u root -p assignment_tracker < assignment_tracker.sql