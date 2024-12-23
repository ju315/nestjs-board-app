import {
  ArgumentMetadata,
  BadRequestException,
  PipeTransform,
} from '@nestjs/common';
import { BoardStatus } from '../board-status.enum';

export class BoardStatusValidationPipe implements PipeTransform {
  readonly StatusOptions = [BoardStatus.PRIVATE, BoardStatus.PUBLIC];

  transform(value: any, metadata: ArgumentMetadata) {
    value = value.toUpperCase();

    if (!this.isStatus(value)) {
      throw new BadRequestException(`${value} is not in the status options`);
    }

    return value;
  }

  private isStatus(status: any) {
    const idx = this.StatusOptions.indexOf(status);
    return idx !== -1;
  }
}
