export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
}

export const products = [
  {
    id: 11,
    name: 'Butterscotch Icecream',
    price: 200,
    description: 'large box with mixed nuts and added flavour of butter scotch',
  },
  {
    id: 12,
    name: 'Redvelvet Cake',
    price: 1100,
    description:
      'A 1kg cake made of redvelvet and added chocalate with fresh cream and bread',
  },
  {
    id: 13,
    name: 'vanila cone icecream',
    price: 200,
    description: 'a pack of 10 cones with vanila flavour',
  },
];

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
