export interface MenuItem {
  icon: string;
  label: string;
  tip?:string;
  active?: boolean;
}

export const MENU_ITEMS: MenuItem[] = [
  { icon: 'icon1', label: 'Lorem',tip:"Lorem" },
  { icon: 'icon2', label: 'Lorem',tip:"Lorem" },
  { icon: 'icon3', label: 'Lorem',tip:"Crowdfunding" },
  { icon: 'icon4', label: 'Lorem',tip:"Vulnerabilities" },
  { icon: 'icon5', label: 'Lorem',tip:"Integration" },
  { icon: 'icon6', label: 'Lorem',tip:"report" },
  { icon: 'icon7', label: 'Lorem',tip:"report" },
];

export const BOTTOM_MENU_ITEMS: MenuItem[] = [
  { icon: 'settings', label: 'Lorem' },
  { icon: 'notification', label: 'Lorem' },
];




