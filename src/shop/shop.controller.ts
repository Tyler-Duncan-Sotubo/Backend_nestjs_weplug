import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { ShopService } from './shop.service';
import { CreateCartDto } from './dto/create-cart.dto';

@Controller('api')
export class ShopController {
  constructor(private readonly shopService: ShopService) {}

  @Get('cart/:user_id')
  async getCartItem(@Param('user_id') user_id: string) {
    return this.shopService.getCartItem(user_id);
  }

  @Post('cart')
  async createCartItem(@Body() dto: CreateCartDto) {
    return this.shopService.createCartItem(dto);
  }

  @Delete('cart/:card_id')
  async deleteCartItem(@Param('card_id') card_id: string) {
    return this.shopService.deleteCartItem(card_id);
  }
}
