export const Navigations = [
  {
    MenuName: "Your work",
    Href: "/Main",
    Current: true,
    Type: "MenuItem",
    Children: {
      MenuName: "Your work",
      Href: "#",
      Current: true,
    },
  },
  { MenuName: "Projects", Href: "/Main", Current: false, Type: "MenuItem" },
  { MenuName: "Filters", Href: "/Issues", Current: false, Type: "MenuItem" },
  { MenuName: "Dashboards", Href: "/Main", Current: false, Type: "MenuItem" },
  { MenuName: "People", Href: "/People", Current: false, Type: "MenuItem" },
  { MenuName: "Apps", Href: "/Apps", Current: false, Type: "MenuItem" },
  { MenuName: "Create", Href: "/CreateIssue", Current: false, Type: "Button" },
];
export const UserNavigations = [
  { MenuName: "Your Profile", Href: "/UserProfile" },
  { MenuName: "Settings", Href: "/UserSetting" },
  {
    MenuName: "Sign out",
    Href: "/Logout",
    Type: "Button",
    Onclick: "UserLogout",
  },
];
