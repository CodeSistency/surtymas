
import axios from "../../../axio/axios"
import CardItem4 from './CardItem4'
import ButtonCta from "./Button";
import Button3 from "./Button3";
import Cart from './Cart'
import { getServerSession } from "next-auth/next"
import { options } from "../api/auth/[...nextauth]/options"
import { Button } from "@nextui-org/button";
import Link from "next/link";
import ButtonCart from './ButtonCart'
import ButtonCart2 from './ButtonCart2'


// async function getProducts(){
//     const res = await fetch('https://backend-5m1g.onrender.com/productos/limited')

//     return res.json()
// }

const data = [
  {
    "tallas": {
        "U": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "6517035f9692b4c4063e2371"
            }
        ],
        "XS": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "6517035f9692b4c4063e2372"
            }
        ],
        "S": [
            {
                "color": "#090909",
                "quantity": 3,
                "sold": 0,
                "_id": "6517035f9692b4c4063e2373"
            }
        ],
        "M": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "6517035f9692b4c4063e2374"
            }
        ],
        "L": [
            {
                "color": "#070707",
                "quantity": 3,
                "sold": 0,
                "_id": "6517035f9692b4c4063e2375"
            }
        ],
        "XL": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "6517035f9692b4c4063e2376"
            }
        ],
        "0XL": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "6517035f9692b4c4063e2377"
            }
        ],
        "1XL": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "6517035f9692b4c4063e2378"
            }
        ],
        "2XL": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "6517035f9692b4c4063e2379"
            }
        ],
        "3XL": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "6517035f9692b4c4063e237a"
            }
        ],
        "4XL": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "6517035f9692b4c4063e237b"
            }
        ],
        "5XL": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "6517035f9692b4c4063e237c"
            }
        ],
        "FIT": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "6517035f9692b4c4063e237d"
            }
        ]
    },
    "tallas_zapatos": {
        "25": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "6517035f9692b4c4063e237e"
            }
        ],
        "26": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "6517035f9692b4c4063e237f"
            }
        ],
        "27": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "6517035f9692b4c4063e2380"
            }
        ],
        "28": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "6517035f9692b4c4063e2381"
            }
        ],
        "29": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "6517035f9692b4c4063e2382"
            }
        ],
        "30": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "6517035f9692b4c4063e2383"
            }
        ],
        "31": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "6517035f9692b4c4063e2384"
            }
        ],
        "32": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "6517035f9692b4c4063e2385"
            }
        ],
        "33": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "6517035f9692b4c4063e2386"
            }
        ],
        "34": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "6517035f9692b4c4063e2387"
            }
        ],
        "35": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "6517035f9692b4c4063e2388"
            }
        ],
        "36": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "6517035f9692b4c4063e2389"
            }
        ],
        "37": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "6517035f9692b4c4063e238a"
            }
        ],
        "38": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "6517035f9692b4c4063e238b"
            }
        ],
        "39": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "6517035f9692b4c4063e238c"
            }
        ],
        "40": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "6517035f9692b4c4063e238d"
            }
        ],
        "41": [],
        "42": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "6517035f9692b4c4063e238e"
            }
        ],
        "43": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "6517035f9692b4c4063e238f"
            }
        ],
        "44": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "6517035f9692b4c4063e2390"
            }
        ]
    },
    "_id": "6517035f9692b4c4063e2370",
    "titulo": "Pantalon de vestir ",
    "descripcion": "Pantalón de vestir de bota campana, con un estilo único. ",
    "precio": 10,
    "precio_mayor": 0,
    "tipo": "pantalon",
    "codigo": "0275",
    "comparar": 0,
    "descuento": false,
    "descuento_cantidad": 0,
    "sexo": "mujer",
    "imagen": "{}",
    "imagenes": [
        "https://firebasestorage.googleapis.com/v0/b/surtimas-18cd7.appspot.com/o/1696006898126Screenshot_20230626-204951_2.jpg?alt=media&token=7a757a60-d061-490d-b8fb-872fbd5078f5",
        "https://firebasestorage.googleapis.com/v0/b/surtimas-18cd7.appspot.com/o/1696006946242Screenshot_20230626-204953_2.jpg?alt=media&token=89056e88-2b64-4c72-b45e-75457067e1d3",
        "https://firebasestorage.googleapis.com/v0/b/surtimas-18cd7.appspot.com/o/1696006946226Screenshot_20230626-204951_2.jpg?alt=media&token=3ace5d95-4b9c-422d-b0f6-9ace9b5671cd"
    ],
    "comentarios": [],
    "createdAt": "2023-09-29T17:03:27.536Z",
    "updatedAt": "2023-09-29T17:03:27.536Z",
    "__v": 0
},

  {
    "tallas": {
        "U": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "651758e8da0802c4393930e7"
            }
        ],
        "XS": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "651758e8da0802c4393930e8"
            }
        ],
        "S": [
            {
                "color": "#fff",
                "quantity": 1,
                "sold": 0,
                "_id": "651758e8da0802c4393930e9"
            }
        ],
        "M": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "651758e8da0802c4393930ea"
            }
        ],
        "L": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "651758e8da0802c4393930eb"
            }
        ],
        "XL": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "651758e8da0802c4393930ec"
            }
        ],
        "0XL": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "651758e8da0802c4393930ed"
            }
        ],
        "1XL": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "651758e8da0802c4393930ee"
            }
        ],
        "2XL": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "651758e8da0802c4393930ef"
            }
        ],
        "3XL": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "651758e8da0802c4393930f0"
            }
        ],
        "4XL": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "651758e8da0802c4393930f1"
            }
        ],
        "5XL": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "651758e8da0802c4393930f2"
            }
        ],
        "FIT": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "651758e8da0802c4393930f3"
            }
        ]
    },
    "tallas_zapatos": {
        "25": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "651758e8da0802c4393930f4"
            }
        ],
        "26": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "651758e8da0802c4393930f5"
            }
        ],
        "27": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "651758e8da0802c4393930f6"
            }
        ],
        "28": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "651758e8da0802c4393930f7"
            }
        ],
        "29": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "651758e8da0802c4393930f8"
            }
        ],
        "30": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "651758e8da0802c4393930f9"
            }
        ],
        "31": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "651758e8da0802c4393930fa"
            }
        ],
        "32": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "651758e8da0802c4393930fb"
            }
        ],
        "33": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "651758e8da0802c4393930fc"
            }
        ],
        "34": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "651758e8da0802c4393930fd"
            }
        ],
        "35": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "651758e8da0802c4393930fe"
            }
        ],
        "36": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "651758e8da0802c4393930ff"
            }
        ],
        "37": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "651758e8da0802c439393100"
            }
        ],
        "38": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "651758e8da0802c439393101"
            }
        ],
        "39": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "651758e8da0802c439393102"
            }
        ],
        "40": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "651758e8da0802c439393103"
            }
        ],
        "41": [],
        "42": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "651758e8da0802c439393104"
            }
        ],
        "43": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "651758e8da0802c439393105"
            }
        ],
        "44": [
            {
                "color": "#fff",
                "quantity": 0,
                "sold": 0,
                "_id": "651758e8da0802c439393106"
            },
            {
              "tallas": {
                  "U": [
                      {
                          "color": "#fff",
                          "quantity": 0,
                          "sold": 0,
                          "_id": "65184bd2e9c057c84fcb8a90"
                      }
                  ],
                  "XS": [
                      {
                          "color": "#fff",
                          "quantity": 0,
                          "sold": 0,
                          "_id": "65184bd2e9c057c84fcb8a91"
                      }
                  ],
                  "S": [
                      {
                          "color": "#fff",
                          "quantity": 0,
                          "sold": 0,
                          "_id": "65184bd2e9c057c84fcb8a92"
                      }
                  ],
                  "M": [
                      {
                          "color": "#fff",
                          "quantity": 0,
                          "sold": 0,
                          "_id": "65184bd2e9c057c84fcb8a93"
                      }
                  ],
                  "L": [
                      {
                          "color": "#fff",
                          "quantity": 0,
                          "sold": 0,
                          "_id": "65184bd2e9c057c84fcb8a94"
                      }
                  ],
                  "XL": [
                      {
                          "color": "#000000",
                          "quantity": 2,
                          "sold": 0,
                          "_id": "65184bd2e9c057c84fcb8a95"
                      }
                  ],
                  "0XL": [
                      {
                          "color": "#fff",
                          "quantity": 0,
                          "sold": 0,
                          "_id": "65184bd2e9c057c84fcb8a96"
                      }
                  ],
                  "1XL": [
                      {
                          "color": "#fff",
                          "quantity": 0,
                          "sold": 0,
                          "_id": "65184bd2e9c057c84fcb8a97"
                      }
                  ],
                  "2XL": [
                      {
                          "color": "#fff",
                          "quantity": 0,
                          "sold": 0,
                          "_id": "65184bd2e9c057c84fcb8a98"
                      }
                  ],
                  "3XL": [
                      {
                          "color": "#fff",
                          "quantity": 0,
                          "sold": 0,
                          "_id": "65184bd2e9c057c84fcb8a99"
                      }
                  ],
                  "4XL": [
                      {
                          "color": "#fff",
                          "quantity": 0,
                          "sold": 0,
                          "_id": "65184bd2e9c057c84fcb8a9a"
                      }
                  ],
                  "5XL": [
                      {
                          "color": "#fff",
                          "quantity": 0,
                          "sold": 0,
                          "_id": "65184bd2e9c057c84fcb8a9b"
                      }
                  ],
                  "FIT": [
                      {
                          "color": "#fff",
                          "quantity": 0,
                          "sold": 0,
                          "_id": "65184bd2e9c057c84fcb8a9c"
                      }
                  ]
              },
              "tallas_zapatos": {
                  "25": [
                      {
                          "color": "#fff",
                          "quantity": 0,
                          "sold": 0,
                          "_id": "65184bd2e9c057c84fcb8a9d"
                      }
                  ],
                  "26": [
                      {
                          "color": "#fff",
                          "quantity": 0,
                          "sold": 0,
                          "_id": "65184bd2e9c057c84fcb8a9e"
                      }
                  ],
                  "27": [
                      {
                          "color": "#fff",
                          "quantity": 0,
                          "sold": 0,
                          "_id": "65184bd2e9c057c84fcb8a9f"
                      }
                  ],
                  "28": [
                      {
                          "color": "#fff",
                          "quantity": 0,
                          "sold": 0,
                          "_id": "65184bd2e9c057c84fcb8aa0"
                      }
                  ],
                  "29": [
                      {
                          "color": "#fff",
                          "quantity": 0,
                          "sold": 0,
                          "_id": "65184bd2e9c057c84fcb8aa1"
                      }
                  ],
                  "30": [
                      {
                          "color": "#fff",
                          "quantity": 0,
                          "sold": 0,
                          "_id": "65184bd2e9c057c84fcb8aa2"
                      }
                  ],
                  "31": [
                      {
                          "color": "#fff",
                          "quantity": 0,
                          "sold": 0,
                          "_id": "65184bd2e9c057c84fcb8aa3"
                      }
                  ],
                  "32": [
                      {
                          "color": "#fff",
                          "quantity": 0,
                          "sold": 0,
                          "_id": "65184bd2e9c057c84fcb8aa4"
                      }
                  ],
                  "33": [
                      {
                          "color": "#fff",
                          "quantity": 0,
                          "sold": 0,
                          "_id": "65184bd2e9c057c84fcb8aa5"
                      }
                  ],
                  "34": [
                      {
                          "color": "#fff",
                          "quantity": 0,
                          "sold": 0,
                          "_id": "65184bd2e9c057c84fcb8aa6"
                      }
                  ],
                  "35": [
                      {
                          "color": "#fff",
                          "quantity": 0,
                          "sold": 0,
                          "_id": "65184bd2e9c057c84fcb8aa7"
                      }
                  ],
                  "36": [
                      {
                          "color": "#fff",
                          "quantity": 0,
                          "sold": 0,
                          "_id": "65184bd2e9c057c84fcb8aa8"
                      }
                  ],
                  "37": [
                      {
                          "color": "#fff",
                          "quantity": 0,
                          "sold": 0,
                          "_id": "65184bd2e9c057c84fcb8aa9"
                      }
                  ],
                  "38": [
                      {
                          "color": "#fff",
                          "quantity": 0,
                          "sold": 0,
                          "_id": "65184bd2e9c057c84fcb8aaa"
                      }
                  ],
                  "39": [
                      {
                          "color": "#fff",
                          "quantity": 0,
                          "sold": 0,
                          "_id": "65184bd2e9c057c84fcb8aab"
                      }
                  ],
                  "40": [
                      {
                          "color": "#fff",
                          "quantity": 0,
                          "sold": 0,
                          "_id": "65184bd2e9c057c84fcb8aac"
                      }
                  ],
                  "41": [],
                  "42": [
                      {
                          "color": "#fff",
                          "quantity": 0,
                          "sold": 0,
                          "_id": "65184bd2e9c057c84fcb8aad"
                      }
                  ],
                  "43": [
                      {
                          "color": "#fff",
                          "quantity": 0,
                          "sold": 0,
                          "_id": "65184bd2e9c057c84fcb8aae"
                      }
                  ],
                  "44": [
                      {
                          "color": "#fff",
                          "quantity": 0,
                          "sold": 0,
                          "_id": "65184bd2e9c057c84fcb8aaf"
                      }
                  ]
              },
              "_id": "65184bd2e9c057c84fcb8a8f",
              "titulo": "Blusa mangas asimétricas ",
              "descripcion": "Hermosa blusa de algodón ",
              "precio": 10,
              "precio_mayor": 0,
              "tipo": "blusa",
              "codigo": "0083",
              "comparar": 0,
              "descuento": false,
              "descuento_cantidad": 0,
              "sexo": "mujer",
              "imagen": "{}",
              "imagenes": [
                  "https://firebasestorage.googleapis.com/v0/b/surtimas-18cd7.appspot.com/o/16960909666161695930374219.jpg?alt=media&token=2b467ab5-d6ad-4fd6-8a4a-e1a4b97cd994",
                  "https://firebasestorage.googleapis.com/v0/b/surtimas-18cd7.appspot.com/o/16960909700321695930374219.jpg?alt=media&token=a3882dee-3d00-45fb-b15c-b2d7a987b400",
                  "https://firebasestorage.googleapis.com/v0/b/surtimas-18cd7.appspot.com/o/16960909700521695930401165.jpg?alt=media&token=873cdc9d-2c6c-47ec-a566-0586c87cb11e"
              ],
              "comentarios": [],
              "createdAt": "2023-09-30T16:24:50.271Z",
              "updatedAt": "2023-09-30T16:24:50.271Z",
              "__v": 0
          },

        ]
    },
    "_id": "651758e8da0802c4393930e6",
    "titulo": "Falda corta",
    "descripcion": "hermosa falda corta con estampado de blanco con negro",
    "precio": 10,
    "precio_mayor": 0,
    "tipo": "falda",
    "codigo": "0070",
    "comparar": 0,
    "descuento": false,
    "descuento_cantidad": 0,
    "sexo": "mujer",
    "imagen": "{}",
    "imagenes": [
        "https://firebasestorage.googleapis.com/v0/b/surtimas-18cd7.appspot.com/o/1696028824629Screenshot_20230627-220927_2.jpg?alt=media&token=61dca40d-67d2-474f-9339-81ccade35784",
        "https://firebasestorage.googleapis.com/v0/b/surtimas-18cd7.appspot.com/o/1696028826393Screenshot_20230627-220927_2.jpg?alt=media&token=01f6b289-bcb2-48fc-adca-110d5f5a0557",
        "https://firebasestorage.googleapis.com/v0/b/surtimas-18cd7.appspot.com/o/1696028826401Screenshot_20230627-220925_2.jpg?alt=media&token=24098fe1-0d14-4ec8-a71b-9cc863f94556"
    ],
    "comentarios": [],
    "createdAt": "2023-09-29T23:08:24.869Z",
    "updatedAt": "2023-09-29T23:08:24.869Z",
    "__v": 0
},
{
  "tallas": {
      "U": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "65174516da0802c43938abe2"
          }
      ],
      "XS": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "65174516da0802c43938abe3"
          }
      ],
      "S": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "65174516da0802c43938abe4"
          }
      ],
      "M": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "65174516da0802c43938abe5"
          }
      ],
      "L": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "65174516da0802c43938abe6"
          }
      ],
      "XL": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "65174516da0802c43938abe7"
          }
      ],
      "0XL": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "65174516da0802c43938abe8"
          }
      ],
      "1XL": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "65174516da0802c43938abe9"
          }
      ],
      "2XL": [
          {
              "color": "#000000",
              "quantity": 1,
              "sold": 0,
              "_id": "65174516da0802c43938abea"
          }
      ],
      "3XL": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "65174516da0802c43938abeb"
          }
      ],
      "4XL": [
          {
              "color": "#000000",
              "quantity": 1,
              "sold": 0,
              "_id": "65174516da0802c43938abec"
          }
      ],
      "5XL": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "65174516da0802c43938abed"
          }
      ],
      "FIT": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "65174516da0802c43938abee"
          }
      ]
  },
  "tallas_zapatos": {
      "25": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "65174516da0802c43938abef"
          }
      ],
      "26": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "65174516da0802c43938abf0"
          }
      ],
      "27": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "65174516da0802c43938abf1"
          }
      ],
      "28": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "65174516da0802c43938abf2"
          }
      ],
      "29": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "65174516da0802c43938abf3"
          }
      ],
      "30": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "65174516da0802c43938abf4"
          }
      ],
      "31": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "65174516da0802c43938abf5"
          }
      ],
      "32": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "65174516da0802c43938abf6"
          }
      ],
      "33": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "65174516da0802c43938abf7"
          }
      ],
      "34": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "65174516da0802c43938abf8"
          }
      ],
      "35": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "65174516da0802c43938abf9"
          }
      ],
      "36": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "65174516da0802c43938abfa"
          }
      ],
      "37": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "65174516da0802c43938abfb"
          }
      ],
      "38": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "65174516da0802c43938abfc"
          }
      ],
      "39": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "65174516da0802c43938abfd"
          }
      ],
      "40": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "65174516da0802c43938abfe"
          }
      ],
      "41": [],
      "42": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "65174516da0802c43938abff"
          }
      ],
      "43": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "65174516da0802c43938ac00"
          }
      ],
      "44": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "65174516da0802c43938ac01"
          }
      ]
  },
  "_id": "65174516da0802c43938abe1",
  "titulo": "Suéter con botones en las mangas",
  "descripcion": "Hermoso suéter de tela texturizada con detalle de encaje en el cuello. ",
  "precio": 12,
  "precio_mayor": 0,
  "tipo": "sueter",
  "codigo": "0250",
  "comparar": 0,
  "descuento": false,
  "descuento_cantidad": 0,
  "sexo": "mujer",
  "imagen": "{}",
  "imagenes": [
      "https://firebasestorage.googleapis.com/v0/b/surtimas-18cd7.appspot.com/o/16960236998761695929879236.jpg?alt=media&token=707eb0f2-c1c3-42cc-b2b8-ca4818c9e929",
      "https://firebasestorage.googleapis.com/v0/b/surtimas-18cd7.appspot.com/o/16960236998961695929849013.jpg?alt=media&token=a2334c17-1042-4de3-aea7-f3163602ab3b",
      "https://firebasestorage.googleapis.com/v0/b/surtimas-18cd7.appspot.com/o/16960237013741695929879236.jpg?alt=media&token=ea686f87-5d4f-4603-a998-6b267a5d08ee"
  ],
  "comentarios": [],
  "createdAt": "2023-09-29T21:43:50.789Z",
  "updatedAt": "2023-09-29T21:43:50.789Z",
  "__v": 0
},
{
  "tallas": {
      "U": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "651734cada0802c4393874c1"
          }
      ],
      "XS": [
          {
              "color": "#fff",
              "quantity": 2,
              "sold": 0,
              "_id": "651734cada0802c4393874c2"
          }
      ],
      "S": [
          {
              "color": "#9b9b9b",
              "quantity": 2,
              "sold": 0,
              "_id": "651734cada0802c4393874c3"
          },
          {
              "color": "#f5ad70",
              "quantity": 1,
              "sold": 0,
              "_id": "651734cada0802c4393874c4"
          },
          {
              "color": "#4a4a4a",
              "quantity": 1,
              "sold": 0,
              "_id": "651734cada0802c4393874c5"
          },
          {
              "color": "#fff",
              "quantity": 8,
              "sold": 0,
              "_id": "651734cada0802c4393874c6"
          }
      ],
      "M": [
          {
              "color": "#9b9b9b",
              "quantity": 2,
              "sold": 0,
              "_id": "651734cada0802c4393874c7"
          },
          {
              "color": "#fff",
              "quantity": 18,
              "sold": 0,
              "_id": "651734cada0802c4393874c8"
          }
      ],
      "L": [
          {
              "color": "#f8ac6a",
              "quantity": 1,
              "sold": 0,
              "_id": "651734cada0802c4393874c9"
          },
          {
              "color": "#4a4a4a",
              "quantity": 1,
              "sold": 0,
              "_id": "651734cada0802c4393874ca"
          },
          {
              "color": "#fff",
              "quantity": 1,
              "sold": 0,
              "_id": "651734cada0802c4393874cb"
          }
      ],
      "XL": [
          {
              "color": "#000000",
              "quantity": 1,
              "sold": 0,
              "_id": "651734cada0802c4393874cc"
          }
      ],
      "0XL": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "651734cada0802c4393874cd"
          }
      ],
      "1XL": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "651734cada0802c4393874ce"
          }
      ],
      "2XL": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "651734cada0802c4393874cf"
          }
      ],
      "3XL": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "651734cada0802c4393874d0"
          }
      ],
      "4XL": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "651734cada0802c4393874d1"
          }
      ],
      "5XL": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "651734cada0802c4393874d2"
          }
      ],
      "FIT": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "651734cada0802c4393874d3"
          }
      ]
  },
  "tallas_zapatos": {
      "25": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "651734cada0802c4393874d4"
          }
      ],
      "26": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "651734cada0802c4393874d5"
          }
      ],
      "27": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "651734cada0802c4393874d6"
          }
      ],
      "28": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "651734cada0802c4393874d7"
          }
      ],
      "29": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "651734cada0802c4393874d8"
          }
      ],
      "30": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "651734cada0802c4393874d9"
          }
      ],
      "31": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "651734cada0802c4393874da"
          }
      ],
      "32": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "651734cada0802c4393874db"
          }
      ],
      "33": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "651734cada0802c4393874dc"
          }
      ],
      "34": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "651734cada0802c4393874dd"
          }
      ],
      "35": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "651734cada0802c4393874de"
          }
      ],
      "36": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "651734cada0802c4393874df"
          }
      ],
      "37": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "651734cada0802c4393874e0"
          }
      ],
      "38": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "651734cada0802c4393874e1"
          }
      ],
      "39": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "651734cada0802c4393874e2"
          }
      ],
      "40": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "651734cada0802c4393874e3"
          }
      ],
      "41": [],
      "42": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "651734cada0802c4393874e4"
          }
      ],
      "43": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "651734cada0802c4393874e5"
          }
      ],
      "44": [
          {
              "color": "#fff",
              "quantity": 0,
              "sold": 0,
              "_id": "651734cada0802c4393874e6"
          }
      ]
  },
  "_id": "651734cada0802c4393874c0",
  "titulo": "Franela Oversize",
  "descripcion": "franela estilo oversize, unicolor, 100% poliéster. ",
  "precio": 10,
  "precio_mayor": 0,
  "tipo": "franela",
  "codigo": "0003",
  "comparar": 0,
  "descuento": false,
  "descuento_cantidad": 0,
  "sexo": "mujer",
  "imagen": "{}",
  "imagenes": [
      "https://firebasestorage.googleapis.com/v0/b/surtimas-18cd7.appspot.com/o/1696019097971Screenshot_20230630-081831_2.jpg?alt=media&token=191bd68f-331c-48d8-9a00-f874519d9a33",
      "https://firebasestorage.googleapis.com/v0/b/surtimas-18cd7.appspot.com/o/1696019211615Screenshot_20230630-081608_2.jpg?alt=media&token=8537925d-daa0-492e-9bc0-ca70f35b99e9",
      "https://firebasestorage.googleapis.com/v0/b/surtimas-18cd7.appspot.com/o/1696019211574Screenshot_20230630-081831_2.jpg?alt=media&token=b0897cd2-9ed4-4cf0-ba30-609a9ef42e9a",
      "https://firebasestorage.googleapis.com/v0/b/surtimas-18cd7.appspot.com/o/1696019211634Screenshot_20230630-081656_2.jpg?alt=media&token=1ac3f9c3-ec04-4645-ae8a-ae7f8bca5eab",
      "https://firebasestorage.googleapis.com/v0/b/surtimas-18cd7.appspot.com/o/16960192115961695926974939.jpg?alt=media&token=6140d166-2a8c-4d8c-90fd-203ed08eecb7",
      "https://firebasestorage.googleapis.com/v0/b/surtimas-18cd7.appspot.com/o/1696019211647Screenshot_20230630-081738_2.jpg?alt=media&token=b3bac379-e7a4-4dc8-9da9-6de2e3b9e56a"
  ],
  "comentarios": [],
  "createdAt": "2023-09-29T20:34:18.916Z",
  "updatedAt": "2023-10-02T23:08:41.777Z",
  "__v": 0
},

]

export default function Cards() {

   
    // console.log(products);
  return (
    <>
     <div className="flex gap-2 items-center min-h-45 px-4 py-8 card-container">
        <CardItem4
            titulo='Pantalo de vestir'
            codigo="0275"
            precio="10"
            id={`6517035f9692b4c4063e2370`}
            imagen={`https://firebasestorage.googleapis.com/v0/b/surtimas-18cd7.appspot.com/o/1696006898126Screenshot_20230626-204951_2.jpg?alt=media&token=7a757a60-d061-490d-b8fb-872fbd5078f5`}
        
        >
             <ButtonCta  product={[data[0]]}/>
{/*                     
                    {session ? <Button3 user={session?.user?.name} product={[product]}/> 
                    :   <Link href={`/login`} ><Button radius="full" color="primary"  className="w-full  self-end justify-self-end  text-white shadow-lg">Carrito</Button></Link>
                    } */}
                    {/* <ButtonCart product={[product]}/> */}
                    <ButtonCart2 product={data[0]}/>

        </CardItem4>
               <CardItem4
            titulo='Falda Corta'
            codigo="0070"
            precio="10"
            id={`651758e8da0802c4393930e6`}
            imagen={`https://firebasestorage.googleapis.com/v0/b/surtimas-18cd7.appspot.com/o/1696028824629Screenshot_20230627-220927_2.jpg?alt=media&token=61dca40d-67d2-474f-9339-81ccade35784`}
        
        >
          <ButtonCta  product={[data[1]]}/>
{/*                     
                    {session ? <Button3 user={session?.user?.name} product={[product]}/> 
                    :   <Link href={`/login`} ><Button radius="full" color="primary"  className="w-full  self-end justify-self-end  text-white shadow-lg">Carrito</Button></Link>
                    } */}
                    {/* <ButtonCart product={[product]}/> */}
                    <ButtonCart2 product={data[1]}/>
        </CardItem4>

<CardItem4
            titulo='Blusa mangas asimétricas'
            codigo="0083"
            precio="10"
            id={`65184bd2e9c057c84fcb8a8f`}
            imagen={`https://firebasestorage.googleapis.com/v0/b/surtimas-18cd7.appspot.com/o/16960909666161695930374219.jpg?alt=media&token=2b467ab5-d6ad-4fd6-8a4a-e1a4b97cd994`}
        
        >
          <ButtonCta product={[data[2]]}/>
{/*                     
                    {session ? <Button3 user={session?.user?.name} product={[product]}/> 
                    :   <Link href={`/login`} ><Button radius="full" color="primary"  className="w-full  self-end justify-self-end  text-white shadow-lg">Carrito</Button></Link>
                    } */}
                    {/* <ButtonCart product={[product]}/> */}
                    <ButtonCart2 product={data[2]}/>

        </CardItem4>

<CardItem4
            titulo='Suéter con botones en las mangas'
            codigo="0250"
            precio="12"
            id={`65174516da0802c43938abe1`}
            imagen={`https://firebasestorage.googleapis.com/v0/b/surtimas-18cd7.appspot.com/o/16960236998761695929879236.jpg?alt=media&token=707eb0f2-c1c3-42cc-b2b8-ca4818c9e929`}
        
        >
          <ButtonCta  product={[data[3]]}/>
{/*                     
                    {session ? <Button3 user={session?.user?.name} product={[product]}/> 
                    :   <Link href={`/login`} ><Button radius="full" color="primary"  className="w-full  self-end justify-self-end  text-white shadow-lg">Carrito</Button></Link>
                    } */}
                    {/* <ButtonCart product={[product]}/> */}
                    <ButtonCart2 product={data[3]}/>

        </CardItem4>

<CardItem4
            titulo='Franela Oversize'
            codigo="0003"
            precio="10"
            id={`651734cada0802c4393874c0`}
            imagen={`https://firebasestorage.googleapis.com/v0/b/surtimas-18cd7.appspot.com/o/1696019097971Screenshot_20230630-081831_2.jpg?alt=media&token=191bd68f-331c-48d8-9a00-f874519d9a33`}
        
        >
          <ButtonCta product={[data[4]]}/>
{/*                     
                    {session ? <Button3 user={session?.user?.name} product={[product]}/> 
                    :   <Link href={`/login`} ><Button radius="full" color="primary"  className="w-full  self-end justify-self-end  text-white shadow-lg">Carrito</Button></Link>
                    } */}
                    {/* <ButtonCart product={[product]}/> */}
                    <ButtonCart2 product={data[4]}/>

        </CardItem4>
{/*  */}
        

     </div>
        
    </>
  )
}

