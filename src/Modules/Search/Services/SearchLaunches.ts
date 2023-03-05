import client, { type AxiosResponse } from '../../../Utils/AxiosInstance';
import { Launch, LaunchData, LaunchResponse } from '../../../Types';

type searchLaunchArgs = {
  date: string,
};

export const searchLaunches = async (params: searchLaunchArgs): Promise<Launch[]> => {
  const res: AxiosResponse<LaunchResponse> = await client.post('query', {
    query: {
      "date_utc": {
        "$gte": params.date,
        "$lte": params.date,
      }
    },
  });

  return convert(res.data.docs);
};

const convert = (data: LaunchData[]): Launch[] => {
  return data.map(launchResponse => {
    return ({
      name: launchResponse.name,
      date: launchResponse.date_utc,
      details: launchResponse.details,
      image: launchResponse.links.patch.small,
      detailImage: launchResponse.links.patch.large,
      failures: launchResponse.failures,
    })
  })
};
