import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

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

}

export { User };
