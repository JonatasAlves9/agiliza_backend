
import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class servicesPro1626488074942 implements MigrationInterface {


    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'services_pro',
                columns: [
                  {
                    name: 'id',
                    type: 'varchar',
                    isPrimary: true,
                    generationStrategy: 'uuid',
                    default: 'uuid_generate_v4()',
                  },
                  {
                    name: 'id_pro',
                    type: 'varchar',
                    isNullable: false,
                  },
                  {
                    name: 'id_service',
                    type: 'varchar',
                    isNullable: false,
                  },
                  {
                    name: 'description',
                    type: 'varchar',
                    isNullable: true,
                  },
                  {
                      name: 'price',
                      type: 'varchar',
                      isNullable: true,
                  },
                  {
                      name: 'time',
                      type: 'varchar',
                      isNullable: true,
                  },
                  {
                    name: 'created_at',
                    type: 'timestamp',
                    default: 'now()',
                  },
                  {
                      name: 'updated_at',
                      type: 'timestamp',
                      default: 'now()',
                  },
                ],
                foreignKeys: [
                {
                    name: 'proId',
                    columnNames: ['id_pro'],
                    referencedTableName: 'professional',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL',
                },
                {
                    name: 'services_id_service',
                    columnNames: ['id_service'],
                    referencedTableName: 'services',
                    referencedColumnNames: ['id'],
                    onUpdate: 'CASCADE',
                    onDelete: 'SET NULL',
                },
                ],
              })
            );
          }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('services');
    }


}