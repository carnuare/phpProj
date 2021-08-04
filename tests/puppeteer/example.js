const puppeteer = require('puppeteer');
(async() =>{
    const browser = puppeteer.launch();
    const page = await (await browser).newPage();
    await page.goto('http://localhost:8000');

    console.log("Browser opened. Viewing assignments...");

    await page.waitForTimeout(2000); //esperar a que se cargue la pagina bien
    console.log("Taking a screenshot...")
    await page.screenshot({ path: './tests/puppeteer/img/assignments.png'});
    var initialNumAssignments = ((await page.$$("#list > div > div.list__item")).length);
    console.log('There are %i initial assignments.', initialNumAssignments);
    console.log('Creating new assignment...');

    //añadiremos un assignment nuevo
    await page.click('#course_select');
    await page.select('#course_select', '1'); //seleccionamos el primer curso

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); 
    var yyyy = today.getFullYear();
    var today = dd + '/' + mm + '/' + yyyy;

    await page.$eval('#description', (el, today) => el.value =`puppeteer assignment ${today}`, today); //añadimos descripción con fecha de hoy
    await page.screenshot({ path: './tests/puppeteer/img/new_assignments_01.png'});
    await page.click('#addAss'); //click añadir
    await page.waitForTimeout(2000);
    await page.screenshot({ path: './tests/puppeteer/img/new_assignments_02.png'});
    var newNumAssignments = ((await page.$$("#list > div > div.list__item")).length);
    console.log('There are now %i assignments.', newNumAssignments);
    if(newNumAssignments-initialNumAssignments != 1){ //comprobamos que hay 1 más
        console.log("ERROR: The assignment was not created successfully");
        process.exit(1);
    }
    

    const [response] = await Promise.all([
        page.waitForNavigation(),
        page.click("body > main > p > a"), //go to view/edit courses
        
    ]);
    console.log("Clicked View/Edit courses...");

    var numCourses = ((await page.$$("#list > div > div.list__item")).length);
    console.log('There are %i courses.', numCourses);

    await page.waitForTimeout(2000);
    console.log("Taking a screenshot...")
    await page.screenshot({ path: './tests/puppeteer/img/courses.png'});
    await await (await browser).close();

    console.log("Browser closed");
    process.exit(0);
})();