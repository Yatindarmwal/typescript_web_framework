import { Model } from '../models/Model';
interface ModelForView {
    on(eventName: string, callback: () => void): void;
}

export abstract class View<T extends Model<K>, K>{

    region: { [key: string]: Element } = {};

    constructor(public parent: Element, public model: T) {
        this.bindModel();
    }

    regionsMap(): { [key: string]: string } {
        return {};
    }

    eventsMap(): { [key: string]: () => void } {
        return {};
    }
    abstract template(): string;

    mapRegion(fragment: DocumentFragment): void {
        const region_map = this.regionsMap();
        for (let key in region_map) {
            const selector = region_map[key];
            const element = fragment.querySelector(selector);

            if (element)
                this.region[key] = element;
        }
    }

    bindModel(): void {
        this.model.on('change', () => {
            this.render();
        });
    }

    bindEvents(fragment: DocumentFragment): void {
        const eventsMap = this.eventsMap();
        for (let eventKey in eventsMap) {
            const [eventName, selector] = eventKey.split(':');
            fragment.querySelectorAll(selector).forEach((element) => {
                element.addEventListener(eventName, eventsMap[eventKey])
            });
        }
    }

    onRender(): void {

    }

    render(): void {
        this.parent.innerHTML = '';
        const templateElement = document.createElement('template');
        templateElement.innerHTML = this.template();
        this.bindEvents(templateElement.content);
        this.mapRegion(templateElement.content);
        this.onRender();
        this.parent.append(templateElement.content);
    }
}