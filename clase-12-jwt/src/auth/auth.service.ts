import { BadRequestException, Injectable, InternalServerErrorException } from '@nestjs/common';
import { sign, decode, JsonWebTokenError, TokenExpiredError, verify} from "jsonwebtoken";
import { credencialesDto } from './dto/credenciales.dto';

//esto va en un env
const CONTRASENA_SECRETA = 'mi_contrasena_secreta';

@Injectable()
export class AuthService {

    login(user: credencialesDto) {

        //lee de la base de datos y compara contraseñas
        //necesito crear un tolen, sign es el metodo
        return this.createToken(user.user);
    }

    register(user: credencialesDto) {
        //lee de la base si el usuario existe y guarda
        return this.createToken(user.user);
    }


    createToken(username:string) {

        const token = sign(
            {
                user: username,
                admin:false,
            },
            CONTRASENA_SECRETA,
            {
                expiresIn:"5m"
            }

        )
        return token;
    }


    verificar(authHeader:string) {
        console.log(authHeader);

        if(!authHeader) throw new BadRequestException();
        const [tipo,token] = authHeader.split(" ");
        if(tipo !== "Bearer") throw new BadRequestException();

        try{

            const tokenValidado= verify(token, CONTRASENA_SECRETA);
            return tokenValidado;

        }catch(e){
            if(e instanceof TokenExpiredError){
                return "token expirado";
            }
            if(e instanceof JsonWebTokenError){
                return "Firma falla o token modificado";    
            }

            throw new InternalServerErrorException();
        }
    
    }

    
    
}    