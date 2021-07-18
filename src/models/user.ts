import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    UpdateDateColumn,
    CreateDateColumn,
} from 'typeorm';

@Entity('users')
class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    phone: string;

    @Column()
    about: string;

    @Column()
    resume: string;

    @Column()
    avatar: string;

    @Column()
    cover: string;

    @Column()
    perms: string;

    @Column()
    city_id: number; 

    @Column()
    plan_id: number;

    @Column()
    views: number;

    @Column()
    token: string;

    @Column()
    created_ip: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default User;
