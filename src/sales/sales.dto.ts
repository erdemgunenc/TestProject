import { ApiProperty } from "@nestjs/swagger";

export class CreateSalesBodyDTO {
    @ApiProperty()
    readonly orderId: string;
}