//Importando el router de express
import Router from 'express';
import path from 'path';
const router = Router();

//importando ROOT_DIR
import { ROOT_DIR } from '../helpers/paths.js';    


//GET /add-products
//GET /admin/add-products
router.get('/add-products', (request,response,next) => {
    //Se muestra el formulario
    console.log("📝Mostrando el formulario");
    console.log(`ROOT_DIR: ${ROOT_DIR}`);
    //Une las rutas. Directorio raiz luego carpeta views y luego archivo html
    response.sendFile(path.join(ROOT_DIR,'views','add-products.html'));
})

//Procesando la informacion recibida del formulario
//POST /add-product
router.post('/add-products', (request,response) =>{
    //Extrayendo los parametros en la peticion
    console.log(request.body);
    response.redirect('/');
});


//Exportando el enrutador a la "main/app.js"
export default router;