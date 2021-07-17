import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class profission1626485697690 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
              name: 'profissions',
              columns: [
                {
                  name: 'id',
                  type: 'varchar',
                  isPrimary: true,
                  generationStrategy: 'uuid',
                  default: 'uuid_generate_v4()',
                },
                {
                  name: 'name',
                  type: 'varchar',
                  isNullable: false,
                  isUnique: true,
                },
                {
                  name: 'description',
                  type: 'varchar',
                  isNullable: false,
                }
              ],
            })
          );
        }
      

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('professional');
    }

}
