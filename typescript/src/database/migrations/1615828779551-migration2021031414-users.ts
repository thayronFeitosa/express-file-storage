import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class migration2021031414Users1615828779551 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "users",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment',
          },
          {
            name: "name",
            type: "varchar",
            length: "100",
            isNullable: false,

          },
          {
            name: "lastName",
            type: "varchar",
            length: "100",
            isNullable: false,
          },
          {
            name: "email",
            type: "varchar",
            length: "100",
            isNullable: false,
            isUnique: true
          },
          {
            name: "cpf",
            type: "varchar",
            length: "11",
            isNullable: false,
            isUnique: true
          },
          {
            name: "password",
            type: "varchar",
            length: "300",
            isNullable: false,
          },
          {
            name: "create_at",
            type: "date",
            isNullable: false,
          }

        ]
      })
    );
  }
  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("users");

  }

}
