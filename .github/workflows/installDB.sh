#!/bin/sh
sudo apt install mysql-server
sudo apt install mysql-client

sleep 30
mysql --host db --port 3306 -u root assignment_tracker < assignment_tracker.sql --password=example 
