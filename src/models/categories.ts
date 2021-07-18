import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
} from 'typeorm';

@Entity('categories')
class Category {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    parent_id: number;

    @Column()
    name: string;
}

export default Category;
