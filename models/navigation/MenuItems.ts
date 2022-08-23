import {ContextMenuItem} from "~/models/navigation/ContextMenuItem";

export class MenuItem {
  public ClassName: string;
  public ClassNameTarget: string;
  public Text: string;
  public Path: string;
  public Expanded: Boolean | null;
  public Items: ContextMenuItem[]|undefined;

  // for context menu
  public text: string;
  public value: string;

  constructor(text: string, path: string, expanded: Boolean, items?: ContextMenuItem[]) {
    this.Text = text;
    this.text = text;
    this.Path = path;
    this.value = path;
    this.Expanded = expanded;
    this.Items = [];
    this.ClassName = path + "-button";
    this.ClassNameTarget = "." + path + "-button";
    this.Items = items;
  }
}
