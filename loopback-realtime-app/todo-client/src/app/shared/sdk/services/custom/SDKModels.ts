/* tslint:disable */
import { Injectable } from '@angular/core';
import { User } from '../../models/User';
import { Todo } from '../../models/Todo';
import { Posts } from '../../models/Posts';

export interface Models { [name: string]: any }

@Injectable()
export class SDKModels {

  private models: Models = {
    User: User,
    Todo: Todo,
    Posts: Posts,
    
  };

  public get(modelName: string): any {
    return this.models[modelName];
  }

  public getAll(): Models {
    return this.models;
  }

  public getModelNames(): string[] {
    return Object.keys(this.models);
  }
}
