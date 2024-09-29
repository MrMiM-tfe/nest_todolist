import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Task } from './entities/todo.entities';
import { Model } from 'mongoose';
import { NullCheck } from 'src/decorators/null-check.decorator';

@Injectable()
export class TodoService {
  constructor(@InjectModel(Task.name) private taskModel: Model<Task>) {}

  create(createTodoDto: CreateTodoDto) {
    return this.taskModel.create(createTodoDto);
  }

  findAll() {
    return this.taskModel.find();
  }

  @NullCheck()
  findOne(id: string) {
    return this.taskModel.findById(id);
  }

  @NullCheck()
  update(id: string, updateTodoDto: UpdateTodoDto) {
    return this.taskModel.findByIdAndUpdate(id, updateTodoDto);
  }

  @NullCheck()
  remove(id: string) {
    return this.taskModel.findByIdAndDelete(id);
  }
}
