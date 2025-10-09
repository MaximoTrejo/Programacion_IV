import { PartialType } from '@nestjs/mapped-types';
import { CreateLibroDto } from './create-libro.dto';


//parcialtype crea una clase con las mismas propiedades que CreateLibroDto pero todas opcionales
export class UpdateLibroDto extends PartialType(CreateLibroDto) {


}
