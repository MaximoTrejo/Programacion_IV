import { Module } from '@nestjs/common';
import { UsuariosController } from './usuarios.controller';
import { UsuarioService } from './usuario.service';

//controlar que siembre sean rutas relativas 

@Module({

    controllers: [UsuariosController],
    providers: [UsuarioService],

})
export class UsuarioModule {}
