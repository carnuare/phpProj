#!/bin/sh
sudo apt install mysql-server
echo "Running docker-compose"
docker-compose up -d
#telnet 127.0.0.1 3306 
mysql -h 127.0.0.1 -u root assignment_tracker < assignment_tracker.sql --password=example