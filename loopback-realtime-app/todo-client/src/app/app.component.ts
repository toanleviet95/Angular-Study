import { Component } from '@angular/core';
import { Todo, Posts, FireLoopRef } from './shared/sdk/models';
import { RealTime, PostsApi } from './shared/sdk/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private title: string = 'Todo app works!';
  private todos = [];
  private todo: Todo   = new Todo();
  private todoRef: FireLoopRef<Todo>;
  private posts = [];
  private post: Posts   = new Posts();
  constructor(private rt: RealTime, private postsApi: PostsApi) {
    this.rt.onReady().subscribe(() => {
      this.todoRef = this.rt.FireLoop.ref<Todo>(Todo);
      this.todoRef.on('change').subscribe((stats: any) => {
        if(!stats || stats.length === 0) {
          this.postsApi.find().subscribe((objects: any) => {
            if(objects.length === 0) {
              this.todos = [];
              return;
            }
            for(let i = 0; i < objects.length; i++) {
              this.todos.push({
                id: objects[i].id,
                text: objects[i].content
              });
            }
          });
        } else {
          this.todos = stats;
        }
      });
    });
  }

  createTodo(): void {
    this.todoRef.create(this.todo).subscribe(() => this.todo = new Todo());
    this.post.account_id = 1;
    this.post.content = this.todo.text;
    this.postsApi.create(this.post).subscribe(() => {
      this.post = new Posts();
    })
  }

  updateTodo(todo: Todo): void {
    this.todoRef.upsert(todo).subscribe();
    const obj = new Posts();
    obj.id = todo.id;
    obj.content = todo.text;
    obj.account_id = 1;
    this.postsApi.upsert(obj).subscribe();
  }

  removeTodo(todo: Todo): void {
    this.todoRef.remove(todo).subscribe();
    this.postsApi.deleteById(todo.id).subscribe();
  }
}
