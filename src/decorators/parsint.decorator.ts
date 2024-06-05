import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ParseIntPipe implements PipeTransform<string, number> {
  transform(value: string): number {
    const val = parseInt(value, 10);
    if (isNaN(val) || val.toString().length !== 8) {
      throw new BadRequestException(
        'Валидация не пройдена . Проверьте правильность роута. Номер блока должен быть числом и содержать 8 цифр',
      );
    }
    return val;
  }
}
