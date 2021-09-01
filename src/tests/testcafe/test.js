import { Selector } from 'testcafe';

fixture `First Cafe Test`
    .page `http://localhost:8010`;
    

test('Create course', async t => {
    await t
        .click('body > main > p > a')
        .expect("a").eql("a");
    const numCourse = await Selector('#list > div > div.list__item').count;
    await t
        .typeText('#course_name', 'Cafe Course')
        .click('#addCourse')
        .wait(1000)
        .expect(Selector('#list > div > div.list__item').count).eql(numCourse +2);
    
    
    //const articleHeader = await Selector('.result-content').find('h1');
    
    // Obtain the text of the article header
    //let headerText = await articleHeader.innerText;
});
/*
test('Create course 2', async t => {
    await t
        .click('body > main > p > a')
        .expect("a").eql("a");
    const numCourse = await Selector('#list > div > div.list__item').count;
    await t
        .typeText('#course_name', 'Cafe Course 2')
        .click('#addCourse')
        .wait(1000)
        .expect(Selector('#list > div > div.list__item').count).eql(numCourse +4);
    
    
    //const articleHeader = await Selector('.result-content').find('h1');
    
    // Obtain the text of the article header
    //let headerText = await articleHeader.innerText;
});
*/