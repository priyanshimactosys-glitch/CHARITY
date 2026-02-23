export interface MenuItem {
  id: string;
  title: string;
  slug?: string;
  children?: MenuItem[];
}
