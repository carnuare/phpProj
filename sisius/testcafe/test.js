import { Selector } from 'testcafe';
import { env } from 'process';
if(process.env.UVUSER == null){
    //const CREDS = require('./../../../../.secrets/creds'); //~ en php_proj quito /../
    //var username = CREDS.username;
    //var password = CREDS.password;
    
}else{
    var username = process.env.UVUSER;
    var password = process.env.UVPASS;
}


fixture `Recualificacion test`
    .page `https://investigacion.us.es/sisius/investigador/recualificacion/sign_in`;

test('Formulario Recualificación 1', async t => {
    await t
        .typeText('#username', username)
        .typeText('#password', password)
        .click('button[type="submit"]') //logeado
        .click('button[data-target="#upload-app"]')
        .setFilesToUpload('#file', ['files/form_recualificacion_1.pdf'])
        .click('button[id="button_upload"]')//uploadeado el form
        .wait(1000)
        .click('a[class="btn btn-default btn-sm"]') //ver borrador solicitud
        .click('button[data-target="#upload-file-1692"]') //a partir de aquí subimos fichero. 1
        .setFilesToUpload('#file', ['files/prueba.pdf']) 
        .click('button[id="button_upload_doc"]') 
        .click('button[data-target="#upload-file-1694"]') //2
        .setFilesToUpload('#file', ['files/prueba.pdf']) 
        .click('button[id="button_upload_doc"]') 
        .click('button[data-target="#upload-file-1695"]') //3
        .setFilesToUpload('#file', ['files/prueba.pdf']) 
        .click('button[id="button_upload_doc"]') 
        .click('button[data-target="#upload-file-1696"]') //4
        .setFilesToUpload('#file', ['files/prueba.pdf']) 
        .click('button[id="button_upload_doc"]') 
        .click('button[data-target="#upload-file-1697"]') //5
        .setFilesToUpload('#file', ['files/prueba.pdf']) 
        .click('button[id="button_upload_doc"]') 
        .click('button[data-target="#upload-file-1698"]') //6
        .setFilesToUpload('#file', ['files/prueba.pdf']) 
        .click('button[id="button_upload_doc"]') 
        .click('button[data-target="#upload-file-1658"]') //7
        .setFilesToUpload('#file', ['files/prueba.pdf']) 
        .click('button[id="button_upload_doc"]') 
        .click('button[data-target="#upload-file-1659"]') //8
        .setFilesToUpload('#file', ['files/prueba.pdf']) 
        .click('button[id="button_upload_doc"]') 
        .click('button[data-target="#upload-file-1660"]') //9
        .setFilesToUpload('#file', ['files/prueba.pdf']) 
        .click('button[id="button_upload_doc"]')  
        .click('button[data-target="#upload-file-1663"]') //10
        .setFilesToUpload('#file', ['files/prueba.pdf']) 
        .click('button[id="button_upload_doc"]') 
        .click('button[data-target="#upload-file-1661"]') //11
        .setFilesToUpload('#file', ['files/prueba.pdf']) 
        .click('button[id="button_upload_doc"]') 
        .click('button[data-target="#upload-file-1673"]') //13
        .setFilesToUpload('#file', ['files/prueba.pdf']) 
        .click('button[id="button_upload_doc"]') 
        .setNativeDialogHandler(() => true)
        .click('a[class="btn btn-success btn-sm"]')
        .click('a[class="btn btn-secondary btn-sm"]');
 
})

test('Formulario Recualificación 2', async t => {
    await t
        .typeText('#username', username)
        .typeText('#password', password)
        .click('button[type="submit"]') //logeado
        .click('button[data-target="#upload-app"]')
        .setFilesToUpload('#file', ['files/form_recualificacion_2.pdf'])
        .click('button[id="button_upload"]')//uploadeado el form
        .wait(1000)
        .click('a[class="btn btn-default btn-sm"]') //ver borrador solicitud
        .click('button[data-target="#upload-file-1701"]') //a partir de aquí subimos fichero. 1
        .setFilesToUpload('#file', ['files/prueba.pdf']) 
        .click('button[id="button_upload_doc"]') 
        .click('button[data-target="#upload-file-1703"]') //2
        .setFilesToUpload('#file', ['files/prueba.pdf']) 
        .click('button[id="button_upload_doc"]') 
        .click('button[data-target="#upload-file-1704"]') //3
        .setFilesToUpload('#file', ['files/prueba.pdf']) 
        .click('button[id="button_upload_doc"]') 
        .click('button[data-target="#upload-file-1705"]') //4
        .setFilesToUpload('#file', ['files/prueba.pdf']) 
        .click('button[id="button_upload_doc"]') 
        .click('button[data-target="#upload-file-1706"]') //5
        .setFilesToUpload('#file', ['files/prueba.pdf']) 
        .click('button[id="button_upload_doc"]') 
        .click('button[data-target="#upload-file-1707"]') //6
        .setFilesToUpload('#file', ['files/prueba.pdf']) 
        .click('button[id="button_upload_doc"]') 
        .click('button[data-target="#upload-file-1640"]') //7
        .setFilesToUpload('#file', ['files/prueba.pdf']) 
        .click('button[id="button_upload_doc"]') 
        .click('button[data-target="#upload-file-1641"]') //8
        .setFilesToUpload('#file', ['files/prueba.pdf']) 
        .click('button[id="button_upload_doc"]') 
        .click('button[data-target="#upload-file-1642"]') //9
        .setFilesToUpload('#file', ['files/prueba.pdf']) 
        .click('button[id="button_upload_doc"]') 
        .click('button[data-target="#upload-file-1699"]') //10
        .setFilesToUpload('#file', ['files/prueba.pdf']) 
        .click('button[id="button_upload_doc"]') 
        .click('button[data-target="#upload-file-1655"]') //11
        .setFilesToUpload('#file', ['files/prueba.pdf']) 
        .click('button[id="button_upload_doc"]') 
        .click('button[data-target="#upload-file-1643"]') //12
        .setFilesToUpload('#file', ['files/prueba.pdf']) 
        .click('button[id="button_upload_doc"]') 
        .click('button[data-target="#upload-file-1644"]') //13
        .setFilesToUpload('#file', ['files/prueba.pdf']) 
        .click('button[id="button_upload_doc"]') 
        .click('button[data-target="#upload-file-1700"]') //14
        .setFilesToUpload('#file', ['files/prueba.pdf']) 
        .click('button[id="button_upload_doc"]') 
        .setNativeDialogHandler(() => true)
        .click('a[class="btn btn-success btn-sm"]')
        .click('a[class="btn btn-secondary btn-sm"]');
 
})

test('Formulario Recualificación 3', async t => {
    await t
        .typeText('#username', username)
        .typeText('#password', password)
        .click('button[type="submit"]') //logeado
        .click('button[data-target="#upload-app"]')
        .setFilesToUpload('#file', ['files/form_recualificacion_3.pdf'])
        .click('button[id="button_upload"]')//uploadeado el form
        .wait(1000)
        .click('a[class="btn btn-default btn-sm"]') //ver borrador solicitud
        .click('button[data-target="#upload-file-1710"]') //a partir de aquí subimos fichero. 1
        .setFilesToUpload('#file', ['files/prueba.pdf']) 
        .click('button[id="button_upload_doc"]') 
        .click('button[data-target="#upload-file-1712"]') //2
        .setFilesToUpload('#file', ['files/prueba.pdf']) 
        .click('button[id="button_upload_doc"]') 
        .click('button[data-target="#upload-file-1713"]') //3
        .setFilesToUpload('#file', ['files/prueba.pdf']) 
        .click('button[id="button_upload_doc"]') 
        .click('button[data-target="#upload-file-1714"]') //4
        .setFilesToUpload('#file', ['files/prueba.pdf']) 
        .click('button[id="button_upload_doc"]') 
        .click('button[data-target="#upload-file-1715"]') //5
        .setFilesToUpload('#file', ['files/prueba.pdf']) 
        .click('button[id="button_upload_doc"]') 
        .click('button[data-target="#upload-file-1716"]') //6
        .setFilesToUpload('#file', ['files/prueba.pdf']) 
        .click('button[id="button_upload_doc"]') 
        .click('button[data-target="#upload-file-1676"]') //7
        .setFilesToUpload('#file', ['files/prueba.pdf']) 
        .click('button[id="button_upload_doc"]') 
        .click('button[data-target="#upload-file-1677"]') //8
        .setFilesToUpload('#file', ['files/prueba.pdf']) 
        .click('button[id="button_upload_doc"]') 
        .click('button[data-target="#upload-file-1678"]') //9
        .setFilesToUpload('#file', ['files/prueba.pdf']) 
        .click('button[id="button_upload_doc"]') 
        .click('button[data-target="#upload-file-1708"]') //10
        .setFilesToUpload('#file', ['files/prueba.pdf']) 
        .click('button[id="button_upload_doc"]') 
        .click('button[data-target="#upload-file-1681"]') //11
        .setFilesToUpload('#file', ['files/prueba.pdf']) 
        .click('button[id="button_upload_doc"]') 
        .click('button[data-target="#upload-file-1679"]') //12
        .setFilesToUpload('#file', ['files/prueba.pdf']) 
        .click('button[id="button_upload_doc"]') 
        .click('button[data-target="#upload-file-1680"]') //13
        .setFilesToUpload('#file', ['files/prueba.pdf']) 
        .click('button[id="button_upload_doc"]') 
        .click('button[data-target="#upload-file-1709"]') //14
        .setFilesToUpload('#file', ['files/prueba.pdf']) 
        .click('button[id="button_upload_doc"]') 
        .setNativeDialogHandler(() => true)
        .click('a[class="btn btn-success btn-sm"]')
        .click('a[class="btn btn-secondary btn-sm"]');
 
})
