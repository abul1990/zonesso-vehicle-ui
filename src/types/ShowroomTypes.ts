export interface Vehicle {
    id: number;
    type: string;
    brand: string;
    model: string;
    year: number;
    price: number;
    description: string;
    details?: any;
  }

export interface ShowroomResponse {
    id: number;
    name: string;
    location: string;
    vehicles: Vehicle[];
}

export interface ShowroomType {
    id: number;
    name: string;
    imageSource: any;
    iconSource: any;
    distance: number;
}
