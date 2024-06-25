import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class ExternalApiService {
  private apiUrl = 'https://airqino-api.magentalab.it/';

  async fetchData(): Promise<any> {
    try {
      const response = await axios.get(this.apiUrl);
      return response.data; // Assurez-vous que c'est le format JSON attendu
    } catch (error) {
      throw new Error(`Failed to fetch data from API: ${error.message}`);
    }
  }
}
