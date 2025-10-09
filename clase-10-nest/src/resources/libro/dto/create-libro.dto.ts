import { IsDefined, IsString} from "class-validator";

export class CreateLibroDto {
    
    //para configurar en eslint 
    @IsString()
    @IsDefined()
    autor:string;

    @IsString()
    nombre:String;
}
