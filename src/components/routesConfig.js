export const routesConfig = [

  {
    title: "Home",
    route: "/",
    icon: "LayoutDashboard",
  },
  {
    title: "Solutions",
    route: "/solutions",
    icon: "Lightbulb",
  },
  {
    title: "All Products",
    route: "/allproducts",
    icon: "Package",
  },
  {
    title: "Product",
    route: "/product",
    icon: "Box",
  },
  {
    title: "Resources",
    route: "/resources",
    icon: "FileText",
  },
  {
    title: "About Us",
    route: "/aboutus",
    icon: "Users",
  },
  {
    title: "Contact Us",
    route: "/contactus",
    icon: "PhoneCall",
  },
  {
    title: "Support",
    route: "/support",
    icon: "Headphones",
  },
  // Footer related routes
  {
    title: "Terms of Service",
    route: "/terms",
    icon: "FileText",
    isFooter: true,
  },
  {
    title: "Privacy Policy",
    route: "/privacy",
    icon: "Shield",
    isFooter: true,
  },
  {
    title: "ESG Policy",
    route: "/esgpolicy",
    icon: "Leaf",
    isFooter: true,
  },
];

// Helper function to get specific route types
export const getMainRoutes = () =>
  routesConfig.filter((route) => !route.isFooter);
export const getFooterRoutes = () =>
  routesConfig.filter((route) => route.isFooter);

// Helper function to get route by path
export const getRouteByPath = (path) =>
  routesConfig.find((route) => route.route === path);

// Helper function to get route title by path
export const getRouteTitleByPath = (path) => {
  const route = getRouteByPath(path);
  return route ? route.title : "";
};
