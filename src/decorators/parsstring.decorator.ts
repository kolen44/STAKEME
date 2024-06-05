import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateStringPipe implements PipeTransform<any, string> {
  transform(value: any): string {
    if (typeof value !== 'string' || value.length !== 66) {
      throw new BadRequestException(
        'Валидация не пройдена. Проверьте правильность роута. Xеш транзакции должен быть 66 символов в длину и быть строкой ',
      );
    }
    return value;
  }
}
