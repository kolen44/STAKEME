import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class ValidateStringPipe implements PipeTransform<any, string> {
  transform(value: any): string {
    if (typeof value !== 'string') {
      throw new BadRequestException(
        'Валидация не пройдена. Проверьте правильность роута ',
      );
    }
    return value;
  }
}
