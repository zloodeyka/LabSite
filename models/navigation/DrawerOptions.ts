export class DrawerOptions {
  public menuMode: string;
  public menuRevealMode: string;
  public minMenuSize: number;
  public maxMenuSize: number;
  public closeOnOutsideClick: Boolean;
  public selectedPosition: string;

  constructor(props: any) {
    this.menuMode = props.isLarge ? "shrink" : "overlap";
    this.menuRevealMode = props.isXSmall ? "slide" : "expand";
    this.minMenuSize = 0;
    this.maxMenuSize = 150;
    this.closeOnOutsideClick = !props.isLarge,
    this.selectedPosition = 'left';
  }
}
