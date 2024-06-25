import { Injectable, Logger, OnModuleInit } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StationRawDataEntity } from './entities/station-raw-data.entity';
import * as cron from 'node-cron';

@Injectable()
export class AppService implements OnModuleInit{
  private readonly logger = new Logger(AppService.name);
  constructor(
    private readonly httpService: HttpService,
    @InjectRepository(StationRawDataEntity)
    private readonly stationRawDataRepository: Repository<StationRawDataEntity>
  ) {}

  async onModuleInit() {
    this.startScheduledTasks();
  }

  private startScheduledTasks() {
    // Planifier les tâches avec node-cron
    cron.schedule('0 * * * *', () => {
      this.logger.log('Fetching data from sensors...');
      this.getCurrentValues1();
      this.getCurrentValues2();
    });
  }

  private async saveSensorData(sensorId: string, data: any) {
    const stationData = new StationRawDataEntity();
    stationData.sensorId = sensorId; // Enregistrez l'ID du capteur
    stationData.AUX1_INPUT = data.AUX1_INPUT || null;
    stationData.AUX2_INPUT = data.AUX2_INPUT || null;
    stationData.CO = this.getValue(data.values, 'co');
    stationData.CO2 = this.getValue(data.values, 'co2');
    stationData.NO2 = this.getValue(data.values, 'no2');
    stationData.O3 = this.getValue(data.values, 'o3');
    stationData.PM10 = this.getValue(data.values, 'pm10');
    stationData.PM2_5 = this.getValue(data.values, 'pm25');
    stationData.RH = this.getValue(data.values, 'rh');
    stationData.T = this.getValue(data.values, 'extT');
    stationData["Temp. int."] = this.getValue(data.values, 'temp_int');
    stationData.VOC = this.getValue(data.values, 'voc');
    stationData.lat = data.lat || null;
    stationData.lon = data.lon || null;
    stationData.utc_timestamp = data.timestamp;

    await this.stationRawDataRepository.save(stationData);
    this.logger.log(`Data saved for sensor ${sensorId} at ${data.timestamp}`);
  }

  private getValue(values: any[], sensor: string): number | null {
    const valueObj = values.find(v => v.sensor === sensor);
    return valueObj ? valueObj.value : null;
  }

  async getCurrentValues1(): Promise<any> {
    this.logger.log('Fetching data for sensor SMART188');
    const response = await firstValueFrom(this.httpService.get('https://airqino-api.magentalab.it/getCurrentValues/SMART188'));
    await this.saveSensorData('SMART188', response.data);
    return response.data;
  }

  async getCurrentValues2(): Promise<any> {
    this.logger.log('Fetching data for sensor SMART189');
    const response = await firstValueFrom(this.httpService.get('https://airqino-api.magentalab.it/getCurrentValues/SMART189'));
    await this.saveSensorData('SMART189', response.data);
    return response.data;
  }

  async getSessionInfo(): Promise<any> {
    const response = await firstValueFrom(this.httpService.get('https://airqino-api.magentalab.it/getSessionInfo/AQ54'));
    return response.data;
  }
}
