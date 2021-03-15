import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
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

  @OneToOne(type => File)
  file: File

}

export { User };
