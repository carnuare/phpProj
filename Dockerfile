FROM php:7.4-apache

RUN docker-php-ext-install mysqli
RUN docker-php-ext-enable mysqli
RUN docker-php-ext-install pdo pdo_mysql

RUN pecl install xdebug \
    && docker-php-ext-enable xdebug

ENV MYSQL_HOST='db'
ENV MYSQL_DATABASE='assignment_tracker'
ENV MYSQL_USER='root'
ENV MYSQL_PASSWORD='example'