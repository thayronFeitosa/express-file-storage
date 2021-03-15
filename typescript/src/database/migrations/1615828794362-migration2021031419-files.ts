import {MigrationInterface, QueryRunner, Table, TableForeignKey} from "typeorm";

export class migration2021031419Files1615828794362 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "file",
        columns: [
          {
            name: "id",
            type: "int",
            isPrimary: true,
            isGenerated: true,
            generationStrategy: "increment"
          },
          {
            name: "name",
            type: "varchar",
            length: "200",
            isNullable: false

          },
          {
            name: "size",
            type: "varchar",
            length: "50",
            isNullable: false
          },
          {
            name: "url",
            type: "varchar",
            length: "200",
            isNullable: false
          },
          {
            name: "keyName",
            type: "varchar",
            length: "200",
            isNullable: false
          },
          {
            name: "createAt",
            type: "datetime",
            default: "now()"
          },
          {
            name: "userId",
            type: 'int',
            isNullable: false

          },

        ]
      }));

    await queryRunner.createForeignKey("file", new TableForeignKey({
      columnNames: ["userId"],
      referencedColumnNames: ["id"],
      referencedTableName: "users",
      onDelete: "CASCADE"
    }));
  }


  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("file");
  }

}