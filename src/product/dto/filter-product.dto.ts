import { ApiProperty } from '@nestjs/swagger';

export class FilterProductDto {
  @ApiProperty({
    example: { from: 50, to: 5000 },
    description: 'It returns products between this price',
  })
  price: { from: number; to: number };

  @ApiProperty({ example: 1, description: 'Id of model' })
  brand_id: number;

  attributes: { attribute_id: number; attribute_value: string }[];
}
