
  export interface Holiday {
    name: string,
    mainConduct: string,
    rating: number,
    holidayDate: Date,
    holidayType: holType;
  }

  export enum holType{
    singleDay= "singl eDay",
    coupleDays= "couple Days",
    weekLong = "week Long"
  }