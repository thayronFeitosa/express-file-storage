import { Column, Entity, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { File } from './File';


@Entity('users')
class User {
  @PrimaryGeneratedColumn('increment')
  public id: number;

  @Column()
  public name: string;

  @Column()
  public lastName: string;

  @Column()
  public email: string;

  @Column()
  public cpf: string;

  @Column()
  public password: string;

  @Column()
  public create_at: Date;

  @OneToOne(type => File, user => User )
  @JoinTable()
  file: File

}

export { User };
