#!/bin/sh
sudo apt install mysql-server
echo "Running docker-compose"
docker-compose up -d php
docker ps
