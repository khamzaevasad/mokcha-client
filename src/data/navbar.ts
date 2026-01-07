export const navPath = (authMember: boolean) => [
  { id: 1, to: "/", label: "Home" },
  { id: 2, to: "/products", label: "Products" },
  { id: 3, to: "/help", label: "Help" },
  ...(authMember
    ? [
        { id: 4, to: "/orders", label: "Orders" },
        { id: 5, to: "/member-page", label: "My Page" },
      ]
    : []),
];
