import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class addressUsers1626392164809 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'address_users',
              columns: [
                {
                  name: 'id',
                  type: 'varchar',
                  isPrimary: true,
                },
                {
                  name: 'id_user',
                  type: 'varchar',
                  isNullable: false,
                },
                {
                    name: 'street',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'uf',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'country',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'zip',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'number',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'reference',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'neighbor',
                    type: 'varchar',
                    isNullable: false,
                }
              ],
              foreignKeys: [
                {
                  name: 'userId',
                  columnNames: ['id_user'],
                  referencedTableName: 'users',
                  referencedColumnNames: ['id'],
                  onUpdate: 'CASCADE',
                  onDelete: 'SET NULL',
                },
              ],   
            })
          );
        }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('address_users');
    }

}
