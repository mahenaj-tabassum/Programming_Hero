// ===============================================
//      Food Delivery Menu Filter
// ===============================================

type MenuItem = {
  name: string;
  price: number;
  tag: string;
};

function findMenuItemsByTag(menuItems: MenuItem[], tag: string): MenuItem[] {
  let matchedItem = menuItems.filter((item) => {
    return item.tag === tag;
  });
  return matchedItem;
}

const menu = [
  { name: "Veggie Bowl", price: 350, tag: "vegan" },
  { name: "Tofu Wrap", price: 300, tag: "vegan" },
  { name: "Chicken Wings", price: 450, tag: "spicy" },
  { name: "Beef Burger", price: 500, tag: "spicy" },
];

console.log(findMenuItemsByTag(menu, "vegan"));
