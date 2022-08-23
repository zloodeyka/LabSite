
export class ContextMenuItem {
  public text: string;
  public value: string;

  public items: ContextMenuItem[]|undefined;

  constructor(text: string, value: string, items?: ContextMenuItem[]) {
    this.text = text;
    this.value = value;
    this.items = items;
  }
}
