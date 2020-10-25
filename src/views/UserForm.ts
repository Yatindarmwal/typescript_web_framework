import { View } from './View';
import { User, UserProps } from '../models/User';
export class UserForm extends View<User, UserProps> {
    eventsMap(): { [key: string]: () => void } {
        return {
            // 'click:button': this.onButtonClick,
            // 'mouseenter:h1': this.onHeaderHover,
            'click:.set-age': this.onSetAgeClick,
            'click:.set-name': this.onSetNameClick,
            'click:.save-model': this.onSaveClick
        }
    }
    // onHeaderHover(): void {
    //     console.log('On hover');
    // }
    // onButtonClick(): void {
    //     console.log('Hi there');
    // }
    onSaveClick = (): void => {
        this.model.save();
    }

    onSetAgeClick = (): void => {
        this.model.setRandomAge();
    }
    template(): string {
        return `
        <div>
            <input placeholder = "${this.model.get('name')}"/>
            <button class = "set-name">Change Name</button>
            <button class = "set-age">Set Random age</button>
            <button class = "save-model">Save User age</button>
        </div>
        `
    }

    onSetNameClick = (): void => {
        const input = this.parent.querySelector('input');
        if (input) {
            const name = input.value;
            this.model.set({ name });
        }
    }
}