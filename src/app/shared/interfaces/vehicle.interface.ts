export enum VehicleType {
  Car = 'CAR',
  Motorcycle = 'MOTORCYCLE',
}

export interface Vehicle {
  type: VehicleType;
  brand: string;
  plateNumber: string;
  model?: string;
}
