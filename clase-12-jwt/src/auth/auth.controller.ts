import { Body, Controller, Get, Headers, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { credencialesDto } from './dto/credenciales.dto';
import { JwtGuard } from 'src/guards/jwt/jwt.guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {
  }

  @Post('login')
  login(@Body() body: credencialesDto) {
    return this.authService.login(body);
  }


  @Post('registro')
  register(@Body() body: credencialesDto) {
    return this.authService.register(body);
  }

  @Get("data")
  traer(@Headers("Authorization") authHeader: string) {
    return this.authService.verificar(authHeader);
  }

  @UseGuards(JwtGuard)
  @Get("data/jwt")
  traerConGuard(@Req() request: any) {
    return { message: 'Logro pasar el guard' }
  }
}
