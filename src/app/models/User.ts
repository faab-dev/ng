export class User {
  id: string;
  status: string;
  name: string;
  type: string;
  login: string;
  appID: string;
  partnerID: string | null;
  hotelID: string | null;
  access: object[];
  roles: object[];
  whenCreated: number;
  whenUpdated: number;
}
