export interface FoodItem {
  id: any;
  name: string;
  price: number;
  image: string;
  type: 'veg' | 'non-veg';
  quantity: number;

}

export const soups: FoodItem[] = [
  { id: 1, name: 'Tomato Soup', price: 100,  image: './assets/img/soups/tomato-soup.jpg', type: 'veg', quantity: 1 },
  { id: 2, name: 'Chicken noodle soup', price: 150,  image: './assets/img/soups/chicken-noodle-soup.jpg', type: 'non-veg', quantity: 1 },
  { id: 3, name: 'Manchow Soup', price: 120,  image: './assets/img/soups/manchow-soup.jpg', type: 'non-veg', quantity: 1 },
  { id: 4, name: 'Hot and Sour Soup', price: 130,  image: './assets/img/soups/hot-and-sour-soup.jpg', type: 'veg', quantity: 1 },
  { id: 5, name: 'Sweet Corn Soup', price: 110,  image: './assets/img/soups/sweet-corn-soup.jpg', type: 'veg', quantity: 1 }
];

export const starters: FoodItem[] = [
{ id: 6, name: 'Paneer Tikka', price: 200,  image: './assets/img/starters/paneer-tikka.jpg', type: 'veg', quantity: 1 },
{ id: 7, name: 'Chicken Tikka', price: 250,  image: './assets/img/starters/chicken-tikka.jpg', type: 'non-veg', quantity: 1 },
{ id: 8, name: 'Panner 65', price: 180,  image: './assets/img/starters/panner-65.jpg', type: 'veg', quantity: 1 },
{ id: 9, name: 'Fish Fry', price: 280,  image: './assets/img/starters/fish-fry.jpg', type: 'non-veg', quantity: 1 },
{ id: 10, name: 'Chicken 65', price: 260,  image: './assets/img/starters/chicken-65.jpg', type: 'non-veg', quantity: 1 },
];

export const curries: FoodItem[] = [
  {id:11, name: 'Butter Chicken', image: './assets/img/curries/butter-chicken.jpg', price: 350,  type:'non-veg', quantity: 1 },
  {id:12, name: 'Panner Butter Masala', image: './assets/img/curries/paneer-butter-masala.jpg', price: 300, type:'veg', quantity: 1 },
  {id:13, name: 'Mutton Korma', image: './assets/img/curries/mutton-korma.jpg', price: 380, type:'non-veg', quantity: 1 },
  {id:14, name: 'Mushroom Masala', image: './assets/img/curries/mushroom-curry.jpg', price: 280,  type: 'veg', quantity: 1 },
  {id:15, name: 'Chicken Tikka Masala', image: './assets/img/curries/chicken-tikka-masala.jpg', price: 320,  type: 'non-veg', quantity: 1 },
  {id:16, name: 'Boneless Chicken ', image: './assets/img/curries/boneless-chicken-curry.jpg', price: 320,  type: 'non-veg', quantity: 1 },
  {id:17, name: 'Mughlai Chicken', image: './assets/img/curries/mughlai-chicken.jpg', price: 370,  type: 'non-veg', quantity: 1 },
  {id:18, name: 'Methi Chaman', image: './assets/img/curries/methi-chaman.jpg', price: 280,  type: 'veg', quantity: 1 },
  {id:19, name: 'Punjabi Chicken ', image: './assets/img/curries/punjabi-chicken-curry.jpeg', price: 360,  type: 'non-veg', quantity: 1 },
  {id:20,name: 'Hyderabadi Chicken ', image: './assets/img/curries/hyderabadi-chicken-curry.jpg', price: 450,  type: 'non-veg', quantity: 1 }
];

export const breads: FoodItem[] = [
  {id:21, name: 'Naan', price: 50,  image: './assets/img/breads/naan.jpg', type: 'veg', quantity: 1 },
  {id:22, name: 'Pulka', price: 30,  image: './assets/img/breads/pulka.jpg', type: 'veg', quantity: 1 },
  {id:23, name: 'Kulcha', price: 60,  image: './assets/img/breads/kulcha.jpg', type: 'veg', quantity: 1 },
  {id:24,name: 'Paratha', price: 40,  image: './assets/img/breads/paratha.jpg', type: 'veg', quantity: 1 },
  {id:25, name: 'Rumali Roti', price: 20,  image: './assets/img/breads/rumali-roti.jpg', type: 'veg', quantity: 1 },
];
export const mainCourses: FoodItem[] = [
  {id:26, name: 'Veg Biryani', price: 300,  image: './assets/img/main-course/veg-biryani.jpg', type: 'veg', quantity: 1 },
  {id:27, name: 'Mushroom Biryani', price: 450,  image: './assets/img/main-course/mushroom-biryani.jpeg', type: 'veg', quantity: 1 },
  {id:28, name: 'Chicken Biryani', price: 350,  image: './assets/img/main-course/chicken-biryani.png', type: 'non-veg', quantity: 1 },
  {id:29, name: 'Mutton Biryani', price: 400,  image: './assets/img/main-course/mutton-biryani.jpg', type: 'non-veg', quantity: 1 },
  {id:30, name: 'Prawn Biryani', price: 450,  image: './assets/img/main-course/prawn-biryani.jpeg', type: 'non-veg', quantity: 1 },
  {id:31, name: 'Egg Biryani', price: 250,  image: './assets/img/main-course/egg-biryani.jpg', type: 'non-veg', quantity: 1 },
  {id:32, name: 'Paneer Biryani', price: 350,  image: './assets/img/main-course/paneer-biryani.jpg', type: 'veg', quantity: 1 },
  {id:33, name: 'Hyderabadi Biryani', price: 450,  image: './assets/img/main-course/hyderabadi-biryani.jpg', type: 'non-veg', quantity: 1 },
  {id:34, name: 'Kashmiri Biryani', price: 400,  image: './assets/img/main-course/kashmiri-biryani.jpg', type: 'non-veg', quantity: 1 },
  {id:35, name: 'Fried Wings Biryani', price: 450,  image: './assets/img/main-course/fried-wings-biryani.jpg', type: 'non-veg', quantity: 1 }
];
  export const desserts: FoodItem[] = [
    {id:36, name: 'Gulab Jamun', image: './assets/img/desserts/gulab-jamun.jpg', price: 100,  type: 'veg', quantity: 1 },
    {id:37, name: 'Kulfi', image: './assets/img/desserts/kulfi.jpg', price: 90,  type: 'veg', quantity: 1 },
    {id:38, name: 'Kheer', image: './assets/img/desserts/kheer.jpg', price: 120,  type: 'veg', quantity: 1 },
    {id:39, name: 'Phirni', image: './assets/img/desserts/phirni.jpg', price: 200,  type: 'veg', quantity: 1 },
    {id:40, name: 'Ras Malai', image: './assets/img/desserts/ras-malai.jpg', price: 150,  type: 'veg', quantity: 1 },
    ];
    export const iceCreams: FoodItem[] = [
      {id:41, name: 'Caramel Vanilla', price: 50,  image: './assets/img/icecreams/vanilla-ice-cream.jpg', type: 'veg', quantity: 1 },
      {id:42, name: 'Chocolate', price: 60,  image: './assets/img/icecreams/chocolate-ice-cream.jpg', type: 'veg', quantity: 1 },
      {id:43, name: 'Strawberry', price: 60,  image: './assets/img/icecreams/strawberry-ice-cream.jpg', type: 'veg', quantity: 1 },
      {id:44, name: 'Butterscotch', price: 70,  image: './assets/img/icecreams/butterscotch-ice-cream.jpg', type: 'veg', quantity: 1 },
      {id:45, name: 'Mango', price: 80,  image: './assets/img/icecreams/mango-ice-cream.jpg', type: 'veg', quantity: 1 },
    ];

    export const milkshakes: FoodItem[] = [
      {id:46, name: 'Chocolate Shake', price: 150,  image: './assets/img/milkshakes/chocolate-shake.jpg', type: 'veg', quantity: 1 },
      {id:47, name: 'Strawberry Shake', price: 150,  image: '/assets/img/milkshakes/strawberry-shake.jpg', type: 'veg', quantity: 1 },
      {id:48, name: 'Vanilla Shake', price: 150,  image: '/assets/img/milkshakes/vanilla-shake.jpg', type: 'veg', quantity: 1 },
      {id:49, name: 'Oreo Shake', price: 170,  image: '/assets/img/milkshakes/oreo-shake.jpg', type: 'veg', quantity: 1 },
      {id:50, name: 'Caramel Shake', price: 170,  image: '/assets/img/milkshakes/caramel-shake.jpg', type: 'veg', quantity: 1 },
    ];
