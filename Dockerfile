FROM php:7.4-apache

RUN docker-php-ext-install mysqli
RUN docker-php-ext-enable mysqli
RUN docker-php-ext-install pdo pdo_mysql

ENV MYSQL_HOST='db'
ENV MYSQL_DATABASE='assignment_tracker'
ENV MYSQL_USER='root'
ENV MYSQL_PASSWORD='example'