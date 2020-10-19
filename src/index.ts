import { User } from './models/User';


const user = new User({ name: 'NEW NAME', age: 200 });
user.save();
// user.fetch();