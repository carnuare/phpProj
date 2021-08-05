const puppeteer = require('puppeteer');
(async() =>{
    try{ 
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); 
        var yyyy = today.getFullYear();
        var today = dd + '/' + mm + '/' + yyyy;

        const browser = puppeteer.launch();
        const page = await (await browser).newPage();
        await page.goto('http://localhost:8010');
    
        console.log("Browser opened. Viewing assignments...");
    

        //VIEW ASSIGNMENTS INITIAL
        await page.waitForTimeout(2000); //esperar a que se cargue la pagina bien
        console.log("Taking a screenshot...")
        await page.screenshot({ path: './puppeteer/img/assignments_initial.png'});
        var initialNumAssignments = ((await page.$$("#list > div > div.list__item")).length);
        console.log('The number of initial assignments is: %i', initialNumAssignments);

        //CREATE NEW COURSE
        const [response] = await Promise.all([
            page.waitForNavigation(),
            page.click("body > main > p > a"), //go to view/edit courses
            
        ]);
        console.log("Clicked View/Edit courses...");
        var numCourses = ((await page.$$("#list > div > div.list__item")).length);
        console.log('The number of courses is: %i', numCourses);
        console.log("Creating new course...");
        await page.$eval('#course_name', (el, today) => el.value =`puppeteer course ${today}`, today);
        await page.click('#addCourse'); //click añadir
        await page.waitForTimeout(2000);
        var newNumCourses = ((await page.$$("#list > div > div.list__item")).length);
        console.log('The number of courses now is: %i', newNumCourses);
        await page.screenshot({ path: './puppeteer/img/courses_final.png'});
        console.log("Taking a screenshot...")

        if(newNumCourses - numCourses != 1){
            console.log("ERROR: The course was not created successfully");
            process.exit(1);
        }

        //CREATE NEW ASSIGNMENT
        await page.click("body > main > p > a"); //go to view add assignments
        console.log("Clicked View & Add Assignments...");
        console.log('Creating new assignment...');
        await page.click('#course_select');
        await page.waitForTimeout(300);
        await page.keyboard.press('ArrowDown');
        await page.keyboard.press('Enter');//para que coja el primer curso si o si
        //await page.select('#course_select', '1'); //esto solo funciona 1 vez, si borras el curso y metes otro nuevo, tiene otro valor 
        await page.$eval('#description', (el, today) => el.value =`puppeteer assignment ${today}`, today); //añadimos descripción con fecha de hoy
        await page.screenshot({ path: './puppeteer/img/new_assignments_01.png'});
        await page.click('#addAss'); //click añadir
        await page.waitForTimeout(2000);
        await page.screenshot({ path: './puppeteer/img/new_assignments_02.png'});
        var newNumAssignments = ((await page.$$("#list > div > div.list__item")).length);
        console.log('There are now %i assignments.', newNumAssignments);

        if(newNumAssignments-initialNumAssignments != 1){ //comprobamos que hay 1 más
            console.log("ERROR: The assignment was not created successfully");
            process.exit(1);
        }
        
        //CLOSE
        
        
        await (await browser).close();
    
        console.log("Browser closed");
        process.exit(0);
    }catch(err){ //necesario para handlear todos los errores que puedan dar las promesas, hay que cerrar el proceso para no fastidiar el workflow
        console.log(err);
        process.exit(1);
    }finally{
        process.exit(0);
    }
    
})();