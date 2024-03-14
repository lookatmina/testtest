import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'performances',
})
export class Performance {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', unique: true, nullable: false })
  title: string;

  @Column({ type: 'varchar', nullable: false })
  description: string;

  @Column({ type: 'datetime', array: true })
  date: Date[];

  @Column({ type: 'varchar' })
  place: string;

  @Column({ type: 'varchar' })
  seat: string;

  @Column({ type: 'varchar' })
  image: string;

  @Column({ type: 'varchar' })
  category: string;
}
