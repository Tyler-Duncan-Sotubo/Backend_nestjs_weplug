import { Controller, Get, Param } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('api')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get('posts')
  async getAllPost() {
    return this.postService.getAllPosts(); //
  }

  @Get('post/:id')
  async getPost(@Param('id') id: string) {
    return this.postService.getPost(id); //
  }
}
