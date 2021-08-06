#!/bin/sh
sudo apt install mysql-server
sudo apt install mysql-client

docker ps
sleep 30
mysql --host 127.0.0.1 --port 3306 -u root assignment_tracker < assignment_tracker.sql --password=example 
