import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class services1626487847731 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({     
                name: "services",
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
                    }   
                ],
                foreignKeys: [
                    {
                        name: 'profesionalId',
                        columnNames: ['id_pro'],
                        referencedTableName: 'professional',
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

