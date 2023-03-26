export interface routerType {
  title: string;
  path: string;
  component: JSX.Element;
  children?: routerType[];
  icon?: any;
  show: boolean;
}
