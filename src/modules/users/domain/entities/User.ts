import { randomBytes } from 'node:crypto';
import { UserModel } from '../models/user.model';

export class User {
  public readonly _id: string;
  public name: string;
  public email: string;
  public password: string;
  public shortenedLinks?: string[];
  public avatar?: string;
  public createdAt?: Date;

  constructor(props: UserModel.toCreate, id?: string) {
    Object.assign(this, props);

    this.shortenedLinks = this.shortenedLinks ?? [];
    this.avatar = this.avatar ?? null;
    this.createdAt = this.createdAt ?? new Date();
    this._id = id || randomBytes(12).toString('hex');
  }

  public addShortenLink(shortenLink: string) {
    this.shortenedLinks.push(shortenLink);
  }
}
