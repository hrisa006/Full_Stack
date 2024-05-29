type IdType = number;
type CountryType = "BG" | "EN" | "DE" | "FR" | "GB" | "US"; //...

export interface Person {
    id: IdType;
    firstName: string;
    lastName: string;
    email: string;
    contact?: Contact; //optional property
    readonly salutation: string;
}

export interface Contact {
    country: CountryType;
    city?: string;
    address?: string;
    phone?: string;
}

export enum Role {
    Author = 1, Reader, Admin
}

export interface User extends Person {
    password: string;
    roles: Role[]; //Array<Role> - generic array
}

export class PersonImpl implements Person {
    constructor(
        public id: IdType,
        public firstName: string,
        public lastName: string,
        public email: string,
        public contact?: Contact
    ) {}
    get salutation() {
        return `Hello Person ${this.firstName} ${this.lastName} [${this.email}]`;
    }
}

type UserCreateDto = Omit<User, 'id'>;

export class UserDto implements UserCreateDto {
    constructor(
        public firstName: string,
        public lastName: string,
        public email: string,
        public password: string,
        public contact?: Contact,
        public roles: Role[] = [Role.Reader]
    ) {}
    get salutation() {
        return `Hi ${this.firstName} ${this.lastName} [${this.email}] in roles: ${this.roles.map(r => Role[r]).join(', ')}`;
    }
}

export class UserImpl extends UserDto implements User{
    constructor(
        public id: IdType,
        firstName: string,
        lastName: string,
        email: string,
        password: string,
        contact?: Contact,
        roles: Role[] = [Role.Reader]
    ) {
        super(password, firstName, lastName, email, contact, roles);
    }
}