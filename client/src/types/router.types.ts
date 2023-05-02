export interface RouterType {
  title: string;
  path: string;
  component: JSX.Element;
  children?: RouterType[];
  icon?: any;
  show: boolean;
}
