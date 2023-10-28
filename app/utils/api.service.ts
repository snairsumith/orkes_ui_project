import axios, {AxiosResponse} from 'axios';
import {API_BASE_URL} from '../constants/constant';

const apiBaseUrl: string = API_BASE_URL;

interface ApiResponse {
  error: any;
  response?: AxiosResponse;
  resultCode: number;
}

export async function axiosGet(endPoint: string): Promise<ApiResponse> {
  const header: {[key: string]: string} = {
    'Content-Type': 'application/json',
  };

  try {
    const response: AxiosResponse = await axios.get(
      `${apiBaseUrl}${endPoint}`,
      {
        headers: header,
      },
    );

    if (
      (response.status >= 200 && response.status < 300) ||
      response.status === 304
    ) {
      return {error: null, response, resultCode: 1};
    } else {
      return {error: response, resultCode: 2};
    }
  } catch (error) {
    return {error: error, resultCode: 2};
  }
}
