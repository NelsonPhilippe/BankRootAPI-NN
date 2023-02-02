import { ApiProperty } from '@nestjs/swagger';
import { RankEnum } from '../../enums/rank.enum';

export class CreateUserDto {
  @ApiProperty()
  name: string;
  @ApiProperty()
  lastname: string;
  @ApiProperty()
  mail: string;
  @ApiProperty()
  created_at: Date;
  @ApiProperty()
  updated_at: Date;
  @ApiProperty()
  rank: RankEnum;
}
