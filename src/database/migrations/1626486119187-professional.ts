import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class professional1626486119187 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'professional',
              columns: [
                {
                  name: 'id',
                  type: 'varchar',
                  isPrimary: true,
                  generationStrategy: 'uuid',
                  default: 'uuid_generate_v4()',
                },
                {
                  name: 'id_user',
                  type: 'varchar',
                },
                {
                  name: 'id_profission',
                  type: 'varchar',
                  isNullable: false,
                },
                {
                    name: 'description',
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
                {
                    name: 'profesionId',
                    columnNames: ['id_profission'],
                    referencedTableName: 'profissions',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL',
                },
              ],   
            })
          );
        }


    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('professional');
    }

}
