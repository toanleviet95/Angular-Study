/* tslint:disable */

declare var Object: any;
export interface PostsInterface {
  "id"?: number;
  "account_id": number;
  "content": string;
  "likes"?: number;
  "dislikes"?: number;
  "comments"?: number;
  "created_at"?: string;
  "updated_at"?: string;
}

export class Posts implements PostsInterface {
  "id": number;
  "account_id": number;
  "content": string;
  "likes": number;
  "dislikes": number;
  "comments": number;
  "created_at": string;
  "updated_at": string;
  constructor(data?: PostsInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Posts`.
   */
  public static getModelName() {
    return "Posts";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Posts for dynamic purposes.
  **/
  public static factory(data: PostsInterface): Posts{
    return new Posts(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'Posts',
      plural: 'Posts',
      path: 'Posts',
      idName: 'id',
      properties: {
        "id": {
          name: 'id',
          type: 'number'
        },
        "account_id": {
          name: 'account_id',
          type: 'number'
        },
        "content": {
          name: 'content',
          type: 'string'
        },
        "likes": {
          name: 'likes',
          type: 'number'
        },
        "dislikes": {
          name: 'dislikes',
          type: 'number'
        },
        "comments": {
          name: 'comments',
          type: 'number'
        },
        "created_at": {
          name: 'created_at',
          type: 'string'
        },
        "updated_at": {
          name: 'updated_at',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
