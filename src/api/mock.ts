import { ProductDetailsDTO, SearchResultsDTO } from '../types/DTO';

export const getProductDetailsMock: ProductDetailsDTO = {
  author: {
    name: 'Rafael',
    lastname: 'Pelle',
  },
  categories: ['Computación', 'Laptops y Accesorios', 'Notebooks'],
  item: {
    id: 'MLA1486407330',
    title:
      'Netbook 11.6 Pcbox Hd Celeron N4020 8gb Ssd 480 Sf20gm7 Free Color Blanco',
    price: {
      currency: 'ARS',
      amount: 169599,
      decimals: 0,
    },
    picture: 'https://http2.mlstatic.com/D_686591-MLA50193351225_062022-O.jpg',
    condition: 'new',
    free_shipping: true,
    sold_quantity: 100,
    description:
      'Ya sea para trabajar o jugar, la computadora portátil ASUS Vivobook 15 F1500 es la computadora portátil de nivel de entrada que ofrece un rendimiento potente y efectos visuales inmersivos. La pantalla Nano Edge de la computadora portátil ASUS Vivobook 15 cuenta con amplios ángulos de visión de 178 grados. ASUS Vivobook 15 Laptop viene con procesador Intel Core i5, 8GB RAM, 256GB SSD y Windows 11 Home. La computadora portátil ASUS Vivobook 15 está equipada con todos los puertos que necesita. Viene con una amplia conectividad con USB 3.2 Gen 1 tipo C, USB 3.2 Gen 1 tipo A, USB 2.0 tipo A, conector de audio combinado de 3,5 mm, Wi-Fi 5 (802.11ac) y Bluetooth 4.1 * Visiblemente impresionante: experimente detalles nítidos y colores nítidos en la pantalla IPS Full HD de 15,6" con una relación pantalla-cuerpo del 83 %, relación de aspecto 16:9 y biseles estrechos * Potente productividad: el procesador Intel Core i5-1135G7 de 11.ª generación y la GPU Intel® Iris Xe ofrecen una velocidad e inteligencia inigualables, lo que permite una productividad impresionante * Teclado de diseño ergonómico: el teclado de tamaño completo de Vivobook 15 es perfecto para trabajar en entornos con poca luz. Diseñado ergonómicamente, su construcción robusta de una sola pieza y el recorrido de la tecla de 1,4 mm brindan una experiencia de escritura cómoda. * Especificaciones internas: 8GB DDR4 RAM y 256GB M.2 NVMe™ PCIe® 3.0 SSD para almacenar sus archivos * Elegante y liviano con solo 3.97 lbs y 0.78 pulgadas de grosor',
  },
};

export const getSearchResultsMock: SearchResultsDTO = {
  author: {
    name: 'Rafael',
    lastname: 'Pelle',
  },
  categories: ['Computación', 'Laptops y Accesorios', 'Notebooks'],
  items: [
    {
      id: 'MLA1486407330',
      title:
        'Netbook 11.6 Pcbox Hd Celeron N4020 8gb Ssd 480 Sf20gm7 Free Color Blanco',
      price: {
        currency: 'ARS',
        amount: 169599,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_820447-MLU71283746071_082023-I.jpg',
      condition: 'new',
      free_shipping: true,
    },
    {
      id: 'MLA1486407330',
      title:
        'Netbook 11.6 Pcbox Hd Celeron N4020 8gb Ssd 480 Sf20gm7 Free Color Blanco',
      price: {
        currency: 'ARS',
        amount: 169599,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_820447-MLU71283746071_082023-I.jpg',
      condition: 'new',
      free_shipping: true,
    },
    {
      id: 'MLA1486407330',
      title:
        'Netbook 11.6 Pcbox Hd Celeron N4020 8gb Ssd 480 Sf20gm7 Free Color Blanco',
      price: {
        currency: 'ARS',
        amount: 169599,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_820447-MLU71283746071_082023-I.jpg',
      condition: 'new',
      free_shipping: true,
    },
    {
      id: 'MLA1486407330',
      title:
        'Netbook 11.6 Pcbox Hd Celeron N4020 8gb Ssd 480 Sf20gm7 Free Color Blanco',
      price: {
        currency: 'ARS',
        amount: 169599,
        decimals: 0,
      },
      picture: 'http://http2.mlstatic.com/D_820447-MLU71283746071_082023-I.jpg',
      condition: 'new',
      free_shipping: true,
    },
  ],
};
