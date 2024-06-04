import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { ParseIntPipe } from './decorators/parsint.decorator';
import { ValidateStringPipe } from './decorators/parsstring.decorator';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/transactions/:hash')
  async getTransactionByHash(
    @Param('hash', ValidateStringPipe) hash: string,
  ): Promise<any> {
    return await this.appService.getTransactionByHash(hash);
  }

  @Get('/block/:height')
  async getInfoAboutBlock(
    @Param('height', ParseIntPipe) height: number,
  ): Promise<any> {
    return await this.appService.getInfoAboutBlock(height);
  }
}
