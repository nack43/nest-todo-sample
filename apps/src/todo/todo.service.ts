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

  update(id: number, todo: Todo) {
    this.todoRepository.update(id, todo);
  }

  remove(id: number) {
    this.todoRepository.delete(id);
  }
}
