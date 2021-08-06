#!/bin/sh
sudo apt install mysql-server
echo "Running docker-compose"
docker-compose up -d
docker port YOUR_CONTAINER_NAME
docker ps
#telnet 127.0.0.1 3306 
mysql -u root assignment_tracker < assignment_tracker.sql --password=example