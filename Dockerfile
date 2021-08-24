FROM php:7.4-apache

RUN pecl install xdebug \
    && docker-php-ext-enable xdebug

ENV MYSQL_HOST='db'
ENV MYSQL_DATABASE='assignment_tracker'
ENV MYSQL_USER='root'
ENV MYSQL_PASSWORD='example'