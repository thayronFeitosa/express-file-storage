import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { User } from './User';

@Entity('file')
class File {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @Column()
  public name: string;

  @Column()
  public size: string;

  @Column()
  public url: string;

  @Column()
  public keyName: string;

  @Column()
  public createAt: Date;

  @OneToOne(type => User)
  @JoinColumn()
  user : User;

}

export { File };
