type GrewOnionType = {
  name: string;
  image_url: string;
};
export type CalendarGrowDataType = {
  date: string;
  onions: GrewOnionType[];
};

export type DayComponentType = {
  date: {
    dateString: string;
    day: number;
    month: number;
    timestamp: number;
    year: number;
  };
  state: any;
  marking: {
    marked: boolean;
    onion: string;
  };
  navigation: any;
  route: any;
};
