import { Body, Controller, Get, HttpCode, Post, Put, Query, Req } from '@nestjs/common';
import { get } from 'http';


//se crea una interfaz para tener todos los datos 

// interface Request {
//     offset
// }

@Controller('usuarios')
export class UsuariosController {

    @Get()
    traerUsuarios(@Query() queryParams: any) {
        console.log(queryParams);
        return { usuarios:[] };
    }


    @Post()
    crearUsuario(@Body() body: any) {
        console.log(body);
        return { mensaje: 'Usuario creado' };
    }

    ///usuarios/id?id=1
    @Get("/id")  
    traerUsuarioPorId(@Query('id') id: string   ) {
        return id;
    }

    @Get("/nombre")
    traerUsuarioPorNombre(@Query('nombre') nombre: string   ) {
        return nombre;
    }

    @Put()
    @HttpCode(202)
    modificar(@Req() req: Request) {
        console.log(req.url);
        return "hola";
    }

    //una forma de tener varios tipos
    @Get("/todos")
    traerConFiltros(@Query('limit') limit:number,
    @Query('offset') offset:number,
    @Query('nombre') nombre:string){

        //limit
        //offset
        //nombre

    }

    
    @Get("/todos")
    traerConfiltro(@Query() query:any){
        const {offset,limit,nombre} = query;
    }

}
