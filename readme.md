# PHP SAMPLE PROJECT BY CARLOS N.A. VERSION 0.1


## TO RUN THE APP LOCALLY WITH DOCKER:

(in the root folder)
- docker-compose build
- docker-compose up -d 

Head to http://localhost:8010/ to see the app.

You need to import "assignment_tracker.sql" (located in the root folder) into the database "assignment_tracker".
*Phpmyadmin* allows you to do that. 
Access *phpmyadmin* in localhost:8020. (User: root | password: example)

You can also import the file running the following command: 

mysql --host 127.0.0.1 --port 3306 -u root assignment_tracker < assignment_tracker.sql --password=example 

Now you can use the app.

## TEST

To run the unit tests run: (in src/tests/phpunit) phpunit .

To run the end2end test run: (in src/tests/puppeteer) node example.js 

Please make sure that the application is running locally before executing the e2e tests.

## COVERAGE

[![codecov](https://codecov.io/gh/carnuare/phpProj/branch/main/graph/badge.svg?token=FHLE66T2CN)](https://codecov.io/gh/carnuare/phpProj)

# VISIT THE DEPLOYED APP

https://php-sample-proj.herokuapp.com/


