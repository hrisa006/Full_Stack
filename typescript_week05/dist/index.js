import { PersonImpl, Role, UserImpl } from "./users.js";
const users = [
    new UserImpl(1, 'John', 'Doe', 'john@gmail.com', 'john123', { country: 'US', city: 'Sofia', address: 'bul. Vitosha 1' }, [Role.Reader, Role.Author, Role.Admin]),
    new UserImpl(2, 'Jane', 'Radoeva', 'jany@gmail.com', 'jany123', { country: 'BG' }, [Role.Reader, Role.Author]),
    new UserImpl(3, 'Georgi', 'Ivanchev', 'gosho@abv.com', 'goshko78'),
    new PersonImpl(4, 'Ivan', 'Petrov', 'ivanpetrov@yahoo.com')
];
const contentElem = document.getElementById('content');
const usersItemsStr = users.map(u => `<li>${u.salutation}</li>`).join('');
if (contentElem) {
    contentElem.innerHTML = `<ul>${usersItemsStr}</ul>`;
}
//# sourceMappingURL=index.js.map