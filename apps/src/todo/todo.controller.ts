import { Body, Controller, Get, Post, Put, Delete, Param, Res } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller('todo')
export class TodoController {
  
  constructor(private readonly todoService: TodoService) {}
  
  @Get()
  async findAll(@Res() res) {
    res.render('index', {
      todos: await this.todoService.findAll()
    })
  }

  @Post()
  create(@Body() body, @Res() res) {
    this.todoService.create(body);
    res.redirect('/todo');
  }
  
  @Put(':id')
  update(@Param('id') id, @Body() body) {
    this.todoService.update(id, body)
  }

  @Delete(':id')
  remove(@Param('id') id) {
    this.todoService.remove(id);
  }
}
