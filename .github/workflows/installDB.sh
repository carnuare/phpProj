#!/bin/sh
sudo apt install mysql-server
sudo apt install mysql-client

sleep 10
mysql --host db -u root assignment_tracker < assignment_tracker.sql --password=example 
