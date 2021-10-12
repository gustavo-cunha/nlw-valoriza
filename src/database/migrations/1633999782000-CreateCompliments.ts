import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class CreateCompliments1633999782000 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "compliment",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "user_sender",
                        type: "uuid",
                    },
                    {
                        name: "user_receiver",
                        type: "uuid",
                    },
                    {
                        name: "tag_id",
                        type: "uuid",
                    },
                    {
                        name: "message",
                        type: "varchar",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "fkUserSenderCompliment",
                        referencedTableName: "user",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_sender"],
                        onUpdate: "CASCADE",
                        onDelete: "SET NULL",
                    },
                    {
                        name: "fkUserReceiverCompliment",
                        referencedTableName: "user",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_receiver"],
                        onUpdate: "CASCADE",
                        onDelete: "SET NULL",
                    },
                    {
                        name: "fkTagCompliment",
                        referencedTableName: "tag",
                        referencedColumnNames: ["id"],
                        columnNames: ["tag_id"],
                        onUpdate: "CASCADE",
                        onDelete: "SET NULL",
                    },
                ]
            })
        );

        /*await queryRunner.createForeignKey(
            "compliment",
            new TableForeignKey({
                name: "fkUserSenderCompliment",
                referencedTableName: "user",
                referencedColumnNames: ["id"],
                columnNames: ["user_sender"],
                onUpdate: "CASCADE",
                onDelete: "SET NULL",
            })
        );*/
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        queryRunner.dropTable("compliment");
    }

}
