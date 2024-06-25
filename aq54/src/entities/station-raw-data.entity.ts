// station-raw-data.entity.ts
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('station') // Nom de la table dans la base de données
export class StationRawDataEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  sensorId: string; // Nouvelle colonne pour l'ID du capteur


  @Column({ nullable: true })
  AUX1_INPUT: string;

  @Column({ nullable: true })
  AUX2_INPUT: string;

  @Column({ type: 'double precision', nullable: true })
  CO: number;

  @Column({ type: 'double precision', nullable: true })
  CO2: number;

  @Column({ type: 'double precision', nullable: true })
  NO2: number;

  @Column({ type: 'double precision', nullable: true })
  O3: number;

  @Column({ type: 'double precision', nullable: true })
  PM10: number;

  @Column({ type: 'double precision', nullable: true })
  PM2_5: number;

  @Column({ type: 'double precision', nullable: true })
  RH: number;

  @Column({ type: 'double precision', nullable: true })
  T: number;

  @Column({ type: 'double precision', nullable: true })
  "Temp. int.": number; // Si le nom de la colonne contient des espaces ou des caractères spéciaux, utilisez des guillemets doubles

  @Column({ type: 'double precision', nullable: true })
  VOC: number;

  @Column({ type: 'double precision', nullable: true })
  lat: number;

  @Column({ type: 'double precision', nullable: true })
  lon: number;

  @Column({ nullable: true })
  utc_timestamp: string;
}
