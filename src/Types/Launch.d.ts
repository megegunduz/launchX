export type Launch = {
  date: string,
  name: string,
  details: string | null,
  image: string | null,
  detailImage: string | null,
  failures: {
    time: number | null,
    altitude: number |null,
    reason: string |null,
  }[] | null;
};

export type LaunchResponse = {
  docs: LaunchData[],
};

export type LaunchData = {
  flight_number: number,
  name: string,
  date_utc: string,
  date_unix: string,
  date_local: string,
  data_precision: 'half' | 'quarter' | 'year' | 'month' | 'day' | 'hour',
  static_fire_date_utc: string | null,
  static_fire_date_unix: string | null,
  tdb: boolean,
  net: boolean,
  window: number | null,
  rocker: string | null,
  success: boolean | null,
  failures: {
    time: number | null,
    altitude: number | null,
    reason: string | null,
  }[] | null,
  upcoming: boolean,
  details: string | null,
  fairings: {
    reused: boolean | null,
    recovery_attemp: boolean | null,
    recovered: boolean | null,
    ships: number[] | null,
  },
  crew: {
    crew: number | null,
    role: string | null,
  }[] | null,
  ships: number[] | null,
  capsules: number[] |null,
  payloads: number[] |null,
  launchpad: number[] | null,
  cores: {
    core: number | null,
    flight: number | null,
    gridfins: boolean | null,
    legs: boolean | null,
    reused: boolean | null,
    landing_attempt: boolean | null,
    landing_success: boolean | null,
    landing_type: string | null,
    landpad: number | null,
  }[] | null,
  links: {
    patch: {
      small: string | null,
      large: string | null,
    },
    reddit: {
      campaign: string | null,
      launch: string | null,
      media: string | null,
      recovery: string | null,
    },
    flickr: {
      small: string,
      large: string,
    },
    presskit: string | null,
    webcast: string | null,
    youtube_id: string | null,
    article: string | null,
    wikipedia: string | null,
  },
  auto_update: boolean,
};
