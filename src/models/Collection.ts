import { User, UserProps } from './User';
import { Eventing } from './Everything';
import axios, { AxiosResponse } from 'axios';

export class Collection {
    model: User[] = [];
    events: Eventing = new Eventing();
    constructor(public rootUrl: string) { }
    get on() {
        return this.events.on;
    }

    get trigger() {
        return this.events.trigger;
    }

    fetch(): void {
        axios.get(this.rootUrl).then((response: AxiosResponse) => {
            response.data.forEach((element: UserProps) => {
                const user = User.buildUser(element);
                this.model.push(user);
            });
        });
        this.trigger('change');
    }
}