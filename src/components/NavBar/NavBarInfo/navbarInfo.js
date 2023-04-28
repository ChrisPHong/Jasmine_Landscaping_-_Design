import instaLogo from '../instagramLogo.png'

const navBarInfo = [
  {
    id: 1,
    path: "/",
    title: "Home",
    nName: "nav-item",
    sName: "sidebar-item",
  },
  {
    id: 2,
    path: "/AboutUs",
    title: "About",
    nName: "nav-item",
    sName: "sidebar-item",
  },
  {
    id: 3,
    path: "/Contact",
    title: "Contact",
    nName: "nav-item",
    sName: "sidebar-item",
  },
  {
    id: 4,
    path: "/photos",
    title: "Gallery",
    nName: "nav-item",
    sName: "sidebar-item",
  },
  {
    id: 5,
    path: "https://www.instagram.com/jasminelandscapedesign/?hl=en",
    title: "Instagram",
    nName: "nav-item",
    sName: "sidebar-item",
    logo: instaLogo
  },
];

export { navBarInfo };
