import { BadRequestException, CanActivate, ExecutionContext, HttpException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { sign, decode, JsonWebTokenError, TokenExpiredError, verify} from "jsonwebtoken";

//esto va en un env
const CONTRASENA_SECRETA = 'mi_contrasena_secreta';

@Injectable()
export class JwtGuard implements CanActivate {
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    //leer el token
    const request: Request = context.switchToHttp().getRequest();

    const authHeader: string | undefined = request.headers.authorization;

    if (!authHeader) throw new BadRequestException();
    const [tipo, token] = authHeader.split(" ");
    if (tipo !== "Bearer") throw new BadRequestException();

    try {

      const tokenValidado = verify(token, CONTRASENA_SECRETA);

      (request as any).user = tokenValidado;
      return true;

    } catch (e) {
      if (e instanceof TokenExpiredError) {
        throw new HttpException("token expirado", 401); 
      }
      if (e instanceof JsonWebTokenError) {
        throw new HttpException("Firma falla o token modificado", 401); 
      }

      throw new InternalServerErrorException();
    }



    //verificarlo
    //pasar los datos importantes
    //retornar true


    //caso de error, thowr new 




    return true;
  }
}
