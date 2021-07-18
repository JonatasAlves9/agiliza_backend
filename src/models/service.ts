import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
} from 'typeorm';

@Entity('services')
class Service {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    user_id: number;

    @Column()
    category_id: number;

    @Column()
    title: string;

    @Column()
    details: string;

    @Column()
    duration: number;

    @Column()
    service_status_id: number;

    @Column()
    views: number;

    @CreateDateColumn()
    created_at: Date;

}

export default Service;
