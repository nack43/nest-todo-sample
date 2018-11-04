import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo)
    private readonly todoRepository: Repository<Todo>
  ) {}

  // get data from db
  findAll() {
    return this.todoRepository.find();
  }

  create(todo: Todo) {
    this.todoRepository.save(todo);
  }

  update(id: number, content: string) {
    this.todoRepository.update(id, { content: content});
  }

  remove(id: number) {
    this.todoRepository.delete(id);
  }
}
