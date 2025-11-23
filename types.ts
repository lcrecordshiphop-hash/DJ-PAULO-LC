export interface Program {
  id: string;
  title: string;
  artist: string;
  edition: string;
  date: string;
  image: string;
  link: string;
}

export interface NavItem {
  label: string;
  href: string;
  active?: boolean;
}