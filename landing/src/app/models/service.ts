export class Service {
    public name: string;
    public description: string;
    public textList: Array<string> = new Array<string>();
    public items: Array<ServiceItem> = new Array<ServiceItem>();
}

export class ServiceItem {
    public minute: number;
    public price: number;
}