import { Selector } from 'testcafe';

fixture `First Cafe Test`
    .page `http://localhost:8010`;
    

test('Create course', async t => {
    await t
        .click('body > main > p > a');
    const numCourse = await Selector('#list > div > div.list__item').count;
    await t
        .typeText('#course_name', 'Cafe Course')
        .click('#addCourse')
        .wait(1000)
        .expect(Selector('#list > div > div.list__item').count).eql(numCourse +1); //poner +2 para que falle
    
});

test('Create assignment', async t => {

    const numAss = await Selector('#list > div > div.list__item').count;
    await t
        .typeText('#description','Sample assignment')
        .click(Selector('#course_select'))
        .click(Selector('#course_select').find('option').withText('Cafe Course'))
        .click('#addAss')
        .wait(500)
        .expect(Selector('#list > div > div.list__item').count).eql(numAss +1);
});
