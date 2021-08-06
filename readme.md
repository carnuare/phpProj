# PHP SAMPLE PROJECT BY CARLOS N.A. VERSION 0.1


## TO RUN THE APP WITH DOCKER LOCALLY DO THE FOLLOWING:

(in the root folder)
- docker-compose build
- docker-compose up -d 

Head to http://localhost:8010/ to see the app.

You need to import "assignment_tracker.sql" (located in the root folder) into the database "assignment_tracker".
*Phpmyadmin* allows you to do that.

Access *phpmyadmin* in localhost:8020. (User: root | password: example)

Now you can use the app.

## TEST

To run the unit tests run: (in src/tests/phpunit) phpunit .

To run the end2end test run: (in src/tests/puppeteer) node example.js 

Please make sure that the application is running before executing the tests.
