import { Eventing } from './Eventing';
import { Sync } from './Sync';

const rootURl = `http://localhost:3000/users`;

export interface UserProps {
    id?: number;
    name?: string;
    age?: number;
}

export class User {
    public events: Eventing = new Eventing();
    public sync: Sync<UserProps> = new Sync<UserProps>(rootURl);
    constructor(private data: UserProps) {

    }

    get(propName: string): (number | string) {
        return this.data[propName];
    }

    set(update: UserProps): void {
        Object.assign(this.data, update);
    }
}