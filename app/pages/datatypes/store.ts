
export class Store {
  branch_id: number;
  //states: Array<State>;
  latitude: string;
  longitude: string;
  name: string;
  phone: string;
  address: string;
  distance: number;

  constructor( branch_id?: number, latitude?: string, longitude?: string, name?: string,
               phone?: string, address?: string, distance = 0){
    this.branch_id = branch_id;
    this.latitude = latitude;
    this.longitude = longitude;
    this.name = name;
    this.phone = phone;
    this.address = address;
    this.distance = distance;
  }
}