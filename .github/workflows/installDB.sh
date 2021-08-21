#!/bin/sh
sudo apt install mysql-server
sudo apt install mysql-client

docker ps
mysql --host 127.0.0.1 --port 3306 -u root assignment_tracker < assignment_tracker.sql --password=example 
