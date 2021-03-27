import { Column, Entity } from 'typeorm';
import { BaseEntity } from '@realworld/shared/api/foundation';

@Entity()
export abstract class Favorite extends BaseEntity {
  @Column()
  username: string;
  @Column()
  articleSlug: string;
}