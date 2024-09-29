import { Module } from '@nestjs/common';
import { TodoService } from './todo.service';
import { TodoController } from './todo.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Task, TaskSchema } from './entities/todo.entities';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [MongooseModule.forFeature([{name: Task.name, schema: TaskSchema}]), UsersModule],
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
