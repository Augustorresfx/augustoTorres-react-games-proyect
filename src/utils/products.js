const products = [
    {
      id: 1,
      name: "Age of Empires IV",
      stock: 3,
      cost: 49.99,
      description: "Age of Empires IV es un videojuego de estrategia en tiempo real desarrollado por Relic Entertainment en asociación con World's Edge y publicado por Xbox Game Studios. Es la cuarta entrega de la serie Age of Empires. El juego fue lanzado el 28 de octubre de 2021 para Windows.",
      capacity: 1500,
      image: [
        "https://s3.gaming-cdn.com/images/products/9602/orig/age-of-empires-iv-windows-10-pc-game-microsoft-store-cover.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 1,
      brandId: 95,
      packingId: null,
      category: {
        name: "Estrategia",
        id: 1
      },
      brand: {
        id: 95,
        name: "Eco de los Andes"
      },
      reviews: []
    },
    {
      id: 2,
      name: "Humankind",
      stock: 54,
      cost: 39.99,
      description: "Humankind es un videojuego de estrategia por turnos 4X de Amplitude Studios y publicado por Sega. El juego fue lanzado para Microsoft Windows y Stadia en agosto de 2021.",
      capacity: 1500,
      image: [
        "https://static-cdn.jtvnw.net/ttv-boxart/Humankind.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 1,
      brandId: 95,
      packingId: null,
      category: {
        name: "Estrategia",
        id: 1
      },
      brand: {
        id: 95,
        name: "Eco de los Andes"
      },
      reviews: []
    },
    {
      id: 4,
      name: "Battlefield 2042",
      stock: 26,
      cost: 59.99,
      description: "Battlefield 2042 es un videojuego de disparos y acción bélica en primera persona, desarrollado por DICE y distribuido por Electronic Arts.​ El videojuego será lanzado el 19 de noviembre del 2021 en las plataformas PlayStation 4, PlayStation 5, Xbox One, Xbox Series X y Series S, y Windows.",
      capacity: 750,
      image: [
        "https://cdn1.epicgames.com/offer/52f57f57120c440fad9bfa0e6c279317/EGS_Battlefield2042_DICE_S2_1200x1600-331f59b6877d2bf2194943fcf7a68048_1200x1600-331f59b6877d2bf2194943fcf7a68048"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.030Z",
      categoryId: 2,
      brandId: 10,
      packingId: null,
      category: {
        name: "Disparos",
        id: 2
      },
      brand: {
        id: 10,
        name: "Alambrado"
      },
      reviews: []
    },
    {
      id: 5,
      name: "Far Cry 6",
      stock: 13,
      cost: 59.99,
      description: "Far Cry 6 es un videojuego de disparos en primera persona desarrollado por Ubisoft Toronto y publicado por Ubisoft. Es la sexta entrega principal de la serie Far Cry, fue lanzado el 7 de octubre del 2021 para las plataformas de Microsoft Windows, PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S y Google Stadia.",
      capacity: 750,
      image: [
        "https://cdn1.epicgames.com/b4565296c22549e4830c13bc7506642d/offer/TETRA_PREORDER_STANDARD%20EDITION_EPIC_Store_Portrait_1200x1600-1200x1600-ca8b802ff13813c37a44ebf68d0946a2.png"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.032Z",
      categoryId: 2,
      brandId: 10,
      packingId: null,
      category: {
        name: "Disparos",
        id: 2
      },
      brand: {
        id: 10,
        name: "Alambrado"
      },
      reviews: []
    },
    {
      id: 6,
      name: "Call of Duty: Vanguard",
      stock: 23,
      cost: 59.99,
      description: "Call of Duty: Vanguard es un videojuego de disparos en primera persona desarrollado por Sledgehammer Games y distribuido por Activision.​ Es el decimoctavo título de la franquicia Call of Duty.",
      capacity: 750,
      image: [
        "https://s3.gaming-cdn.com/images/products/9842/orig/call-of-duty-vanguard-xbox-series-xs-xbox-serie-x-s-juego-microsoft-store-cover.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.031Z",
      categoryId: 2,
      brandId: 10,
      packingId: null,
      category: {
        name: "Disparos",
        id: 2
      },
      brand: {
        id: 10,
        name: "Alambrado"
      },
      reviews: []
    },
    {
      id: 139,
      name: "Deathloop",
      stock: 9,
      cost: 59.99,
      description: "Deathloop es un juego de disparos en primera persona de 2021 desarrollado por Arkane Studios y publicado por Bethesda Softworks. Fue lanzado el 14 de septiembre para Microsoft Windows y como una consola cronometrada exclusiva para PlayStation 5.",
      capacity: 750,
      image: [
        "https://image.api.playstation.com/vulcan/ap/rnd/202007/1617/Fv4asO4zbdqL83hiL9COTlWZ.png"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.030Z",
      categoryId: 2,
      brandId: 16,
      packingId: null,
      category: {
        name: "Disparos",
        id: 2
      },
      brand: {
        id: 16,
        name: "Altos del Plata"
      },
      reviews: []
    },
    {
      id: 68,
      name: "Red Dead Redemption 2",
      stock: 89,
      cost: 34.99,
      description: "Red Dead Redemption II, es un videojuego de acción-aventura western, en un mundo abierto y en perspectiva de primera y tercera persona, ​ con componentes para un jugador y multijugador.​ Fue desarrollado por Rockstar Games.",
      capacity: 750,
      image: [
        "https://cdn1.epicgames.com/epic/offer/RDR2PC1227_Epic%20Games_860x1148-860x1148-b4c2210ee0c3c3b843a8de399bfe7f5c.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.032Z",
      categoryId: 3,
      brandId: 16,
      packingId: null,
      category: {
        name: "Mundo Abierto",
        id: 3
      },
      brand: {
        id: 16,
        name: "Altos del Plata"
      },
      reviews: []
    },
    {
      id: 222,
      name: "Horizon Zero Dawn",
      stock: 7,
      cost: 28.99,
      description: "Horizon Zero Dawn es un videojuego de acción, aventura y de mundo abierto desarrollado por Guerrilla Games y distribuido por Sony Interactive Entertainment para PlayStation 4. Es la primera propiedad intelectual de Guerrilla Games desde la serie Killzone en 2004 y se anunció por primera vez en el E3 2015.",
      capacity: 375,
      image: [
        "http://trucosjuegos.hiperarticulos.com/wp-content/uploads/2018/01/Como-jugar-Horizon-Zero-Dawn-2.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.032Z",
      categoryId: 3,
      brandId: 16,
      packingId: null,
      category: {
        name: "Mundo Abierto",
        id: 3
      },
      brand: {
        id: 16,
        name: "Altos del Plata"
      },
      reviews: []
    },
    {
      id: 135,
      name: "The Elder Scrolls V: Skyrim",
      stock: 6,
      cost: 10.99,
      description: "The Elder Scrolls V: Skyrim es un videojuego de rol de acción del tipo mundo abierto desarrollado por Bethesda Game Studios y publicado por Bethesda Softworks.",
      capacity: 750,
      image: [
        "https://upload.wikimedia.org/wikipedia/pt/a/aa/The_Elder_Scrolls_5_Skyrim_capa.png"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.032Z",
      categoryId: 3,
      brandId: 16,
      packingId: null,
      category: {
        name: "Mundo Abierto",
        id: 3
      },
      brand: {
        id: 16,
        name: "Altos del Plata"
      },
      reviews: []
    },
    {
      id: 31,
      name: "Grand Theft Auto V",
      stock: 100,
      cost: 3150,
      description: "Grand Theft Auto V es un videojuego de acción-aventura de mundo abierto desarrollado por el estudio Rockstar North y distribuido por Rockstar Games. Fue lanzado el 17 de septiembre de 2013 para las consolas PlayStation 3 y Xbox 360.​",
      capacity: 700,
      image: [
        "https://i.3djuegos.com/juegos/5065/grand_theft_auto_v/fotos/ficha/grand_theft_auto_v-2654943.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T11:08:17.792Z",
      categoryId: 3,
      brandId: 17,
      packingId: null,
      category: {
        name: "Mundo Abierto",
        id: 3
      },
      brand: {
        id: 17,
        name: "Amareto Disaronno"
      },
      reviews: []
    }
  ];

  module.exports = {
    products,
  }