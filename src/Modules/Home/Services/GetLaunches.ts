import client from '../../../Utils/AxiosInstance';
import { AxiosResponse } from 'axios';
import { Launch, LaunchData, LaunchResponse } from '../Types';

type getLaunchesArgs = {
  page: number,
}

const getLaunches = async (props: getLaunchesArgs): Promise<Launch[]> => {
  const res: AxiosResponse<LaunchResponse> = await client.post('query', {
    options: {
      page: props.page,
    }
  });

  return convert(res.data.docs);
};

const convert = (data: LaunchData[]): Launch[] => {
  return data.map(launchResponse => {
    return({
      name: launchResponse.name,
      date: launchResponse.date_utc,
      details: launchResponse.details,
    });
  });
}

export { getLaunches }