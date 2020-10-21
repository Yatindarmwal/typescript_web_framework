import { User } from './models/User';


const user = new User({ id: 9, name: 'newer name ', age: 67 });

// user.attributes.get('id');

// user.sync.save();
// user.on('change', () => {
//     console.log('change triggered');
// });

user.on('save', () => {
    console.log(user);
});

user.save();