import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity() // Nom de la table dans la base de données
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length:100 })
    name: string;

    @Column({ length:100})
    email: string;

    @Column()
    password: string;
}