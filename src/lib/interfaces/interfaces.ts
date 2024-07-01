export interface UserDataType {
    name: string;
    email: string;
    phone: string;
    id: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
    };
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }
  