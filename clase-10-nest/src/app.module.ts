import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosController } from './modules/usuario/usuarios.controller';
import { RopaController } from './controller/ropa/ropa.controller';
import { LibroModule } from './resources/libro/libro.module';

@Module({
  imports: [ LibroModule],
  controllers: [AppController, UsuariosController, RopaController],
  providers: [AppService],
  exports: [],
})
export class AppModule {}
