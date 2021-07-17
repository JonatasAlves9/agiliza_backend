import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
} from 'typeorm';

@Entity('services')
class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    id_pro: string;

}

export default User;