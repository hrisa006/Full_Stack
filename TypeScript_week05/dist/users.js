export var Role;
(function (Role) {
    Role[Role["Author"] = 1] = "Author";
    Role[Role["Reader"] = 2] = "Reader";
    Role[Role["Admin"] = 3] = "Admin";
})(Role || (Role = {}));
export class PersonImpl {
    constructor(id, firstName, lastName, email, contact) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.contact = contact;
    }
    get salutation() {
        return `Hello Person ${this.firstName} ${this.lastName} [${this.email}]`;
    }
}
export class UserDto {
    constructor(firstName, lastName, email, password, contact, roles = [Role.Reader]) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.contact = contact;
        this.roles = roles;
    }
    get salutation() {
        return `Hi ${this.firstName} ${this.lastName} [${this.email}] in roles: ${this.roles.map(r => Role[r]).join(', ')}`;
    }
}
export class UserImpl extends UserDto {
    constructor(id, firstName, lastName, email, password, contact, roles = [Role.Reader]) {
        super(password, firstName, lastName, email, contact, roles);
        this.id = id;
    }
}
//# sourceMappingURL=users.js.map