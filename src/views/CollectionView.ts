import { Collection } from "../models/Collection";

export abstract class CollectionView<T, K> {
    constructor(public Parent: Element, public collection: Collection<T, K>) { }
    abstract renderItem(model: T, itemParent: Element): void;
    render = (): void => {
        this.Parent.innerHTML = "";
        const templateElement = document.createElement('template');
        console.log(this.collection.model.length);
        console.log(this.collection.model);
        console.log(this.collection.model.length);
        console.log(this.collection)
        console.log(this.collection.model[0]);
        for (let i = 0; i < this.collection.model.length; i++) {
            let model = this.collection.model[i];
            console.log('yoo');
            const itemParent = document.createElement('div');
            this.renderItem(model, itemParent);
            templateElement.content.append(templateElement.content);
        }
        console.log('sdsds')
        this.Parent.append(templateElement.content);
    }
}