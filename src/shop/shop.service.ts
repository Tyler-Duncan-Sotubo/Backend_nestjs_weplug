import { PrismaService } from 'database/prisma.service';
import { Injectable } from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';

@Injectable()
export class ShopService {
  constructor(private readonly prisma: PrismaService) {}

  async getCartItem(user_id: string) {
    try {
      const cartItem = await this.prisma.cartItem.findMany({
        where: {
          userId: user_id,
          status: 'active',
        },
      });

      if (!cartItem) {
        return null;
      }

      return cartItem;
    } catch (error) {
      throw new Error(error);
    }
  }

  async createCartItem(dto: CreateCartDto) {
    try {
      const num = parseFloat(dto.price.replace(/,/g, ''));
      const cartItem = await this.prisma.cartItem.create({
        data: {
          product: dto.product,
          productId: dto.id,
          description: dto.description,
          price: num,
          quantity: 1,
          userId: dto.user_id,
        },
      });

      return cartItem;
    } catch (error) {
      console.log(error);
    }
  }

  private async updateCartItem(user_id: string) {
    try {
      // Check if the cart item exists
      const existingCartItem = await this.prisma.cartItem.findMany({
        where: {
          userId: user_id,
          status: 'active',
        },
      });

      // throw an error if it doesn't exist
      if (existingCartItem) {
        throw new Error('Cart item not found');
      }

      // Update the cart item with user id and change status to inactive
      await this.prisma.cartItem.updateMany({
        where: {
          userId: user_id,
        },
        data: {
          status: 'inactive',
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  }

  async deleteCartItem(card_id: string) {
    try {
      // Check if the cart item exists
      const existingCartItem = await this.prisma.cartItem.findUnique({
        where: {
          id: card_id,
        },
      });

      // throw an error if it doesn't exist
      if (!existingCartItem) {
        throw new Error('Cart item not found');
      }

      // Update the cart item with user id and change status to inactive
      await this.prisma.cartItem.delete({
        where: {
          id: existingCartItem.id,
        },
      });
    } catch (error) {
      throw new Error(error);
    }
  }
}
