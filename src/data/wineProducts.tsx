'use client';

import { useTranslation } from "react-i18next";

export interface WineProduct {
    id: number;
    name: string;
    image: string;
    type: string;
    DO: string;
    description: string;
    description2: string;
    grapeVariety: string;
    grapeGrowe: string;
    pairing: string;
    servingTemperature: string;
    tastingNotes: string;
    vineyards: string;
    logo?: string;
  }

  export const WineProduct = () => {
    const { t } = useTranslation("wine");
    return [
      { 
        "id": 1, 
        "name": "Bertsolari", 
        "image": "/iconos/botellas/bertsolari.jpg", 
        "type": t("Aperitif"), 
        "DO": "",
        "grapeVariety":"40 botánicos", 
        "grapeGrowe":"Sin Crianza",
        "pairing":"",
        "serving Temperature":"",
        "tastingNotes":"",
        "vineyards":"",
        "description":"Bertsolari, la complejidad de sus 40 Botánicos le confieren una visión más compleja y gastronómica de la bebida, largo, intenso y persistente", 
        "description2":""
      },
      { 
        "id": 2, 
        "name": "Cargol treu banya", 
        "image": "/iconos/botellas/cargol.jpg", 
        "type": t("red"), 
        "DO": "Costers del segre",
        "grapeVariety":"Tempranillo, Garnacha Negra, Merlot, Syrah", 
        "grapeGrowe":"6 meses",
        "pairing":"Carnes rojas, guisos, embutidos, quesos curados",
        "servingTemperature":"16-18ºC",
        "tastingNotes":"Color rojo picota con ribete violáceo. En nariz es un vino intenso, donde destacan los aromas de frutas rojas y negras, como la mora y la ciruela. En boca es un vino fresco, con una acidez equilibrada y un final largo y persistente.",
        "vineyards":"Viñedos de más de 20 años, situados en la comarca de la Segarra, en suelos arcillo-calcáreos y con un clima mediterráneo continental.",
        "description":"Marcado en aromas, tras las notas de frutos rojos y negros maduros (mora, ciruela pasa, casis) con cierto recuerdo de confitura, aparecen notas terciarias derivadas de la crianza en barrica como tostados y ahumados, recuerdos de carbón y bosque húmedo, especies dulces y setas secas" ,
        "description2":"Vino muy equilibrado gracias al proceso de crianza de 24 meses de paso por barricas de roble (12 meses de roble francés y 12 meses de roble americano), confiriendo un carácter único al vino. Botas de roble usadas, lo que es un reserva especial y no muy cargado de madera.",
        "logo": "/iconos/cargol-logo.png"
      },
      { 
        "id": 3, 
        "name": "Companys blanc", 
        "image": "/iconos/botellas/companys_blanc.jpg", 
        "type": t("white"), 
        "DO": "Terra Alta",
        "grapeVariety":"Garnacha blanca", 
        "grapeGrowe":"El 50% pasará 4 meses en barricas de 350 y 500 litros. El 50% restante permanece en depósitos inox, realizando trabajo con las lías.",
        "pairing":"",
        "serving Temperature":"",
        "tastingNotes":"",
        "vineyards":"",
        "description":"Garnacha blanca de cepas viejas donde el 50% pasará 4 meses en barricas 500 litros y el 50% restante permanece en depósitos inox, realizando trabajo con las lías durante 4 meses. Suelo: “Panal”   duna   fósil   del   cuaternario, composición arenosa. “Tapàs” suelo de textura franca con material subyacente arcilloso." ,
        "description2":""
      },
      { 
        "id": 4, 
        "name": "Companys negre", 
        "image": "/iconos/botellas/companys_negre.jpg", 
        "type": t("red"), 
        "DO": "Terra Alta",
        "grapeVariety":"Garnacha Fina, Peluda",
        "grapeGrowe":"Fermentación   entre   22-25ºC durante unos 15 días. Una vez finalizada la  fermentación se realiza el ensamblaje de todos los vinos, previo paso a barrica.",
        "pairing":"",
        "serving Temperature":"",
        "tastingNotes":"",
        "vineyards":"",
        "description": "Garnacha Fina (50%) y Peluda (50%) de cepas de más de 40 años donde realizamos crianza por paso de barricas de roble francés de 500L durante 12 meses. Suelo:  “Tapàs”  suelo  de  textura  franca  con material  subyacente   arcilloso.   “Tapàs   blanc” suelos poco profundos con fragmentos carbonatados." ,
        "description2":""
      },
      { 
        "id": 5, 
        "name": "La Descarada", 
        "image": "/iconos/botellas/descarada.jpg", 
        "type": t("white"), 
        "DO": "Penedes", 
        "grapeVariety":"Gewurztraminer; Moscatel; Sauvignon Blanc", 
        "grapeGrowe":"Sin Crianza", 
        "pairing":"",
        "serving Temperature":"",
        "tastingNotes":"",
        "vineyards":"",
        "description":"De aspecto claro, con una intensidad media, de color limón, presencia de lágrimas. En nariz presenta una condición limpia, de intensidad alta y aroma a fruta verde del tipo manzana, exótica como el lichi y floral del estilo violeta/flor de cerezo con un toque final herbáceo de lavanda" ,
        "description2":""
      },
      { 
        "id": 6, 
        "name": "I Tant Blanc", 
        "image": "/iconos/botellas/i_tant_blanc.jpg", 
        "type": t("white"), 
        "DO": "Terra Alta", 
        "grapeVariety":"Garnacha blanca", 
        "grapeGrowe":"Sin Crianza",
        "pairing":"",
        "serving Temperature":"",
        "tastingNotes":"",
        "vineyards":"",
        "description":"Presenta un color amarillo de baja intensidad, con una combinación cromática de tonos color paja y algún reflejo verdoso. Muestra las características de las garnachas blancas de la zona: intensidad, fruta y mineralidad. La fruta blanca que aparece nos recuerda la pulpa de melón, las peras y las frutas de hueso como el melocotón y el albaricoque" ,
        "description2":""
      },
      { 
        "id": 7, 
        "name": "I Tant Brut Rosat", 
        "image": "/iconos/botellas/i_tant_brut_rose.jpg", 
        "type": t("sparkling"), 
        "DO": "Cava", 
        "grapeVariety":"Pinot noir", 
        "grapeGrowe":"15 meses",
        "pairing":"",
        "serving Temperature":"",
        "tastingNotes":"",
        "vineyards":"",
        "description":"Presenta un agradable color cereza y matices a salmón brillante con una fina y brillante capa y un amplio rosario que forman una fiel corona. En nariz, es rico en aromas a fruta silvestre combinando la grosella, notas a ligera crianza y fina reducción que le otorgan una gran elegancia" ,
        "description2":""
      },
      { 
        "id": 8, 
        "name": "I Tant Brut Nature Reserva", 
        "image": "/iconos/botellas/i_tant_brut.jpg", 
        "type": t("sparkling"), 
        "DO": "Cava", 
        "grapeVariety":"Xarel·lo, Macabeo, Parellada", 
        "grapeGrowe":"20 meses",
        "pairing":"",
        "serving Temperature":"",
        "tastingNotes":"",
        "vineyards":"",
        "description":"Presenta una brillante capa dorada con matices verdosos, un constante rosario de finas burbujas y una fiel corona con una capa de espuma persistente. En nariz aparecen aromas florales que recuerdan a primavera, seguidamente sobresale una ligera fruta cítrica con agradable levadura que recuerda a bollería" ,
        "description2":""
      },
      { 
        "id": 9, 
        "name": "I Tant Negre", 
        "image": "/iconos/botellas/i_tant_negra.jpg", 
        "type": t("red"), 
        "DO": "Montsant", 
        "grapeVariety":"Garnacha negra", 
        "grapeGrowe":"Sin Crianza",
        "pairing":"",
        "serving Temperature":"",
        "tastingNotes":"",
        "vineyards":"",
        "description":"Presenta un color granate intenso con tonos violáceos. Una explosión aromática de frutos rojos. Esta fruta va acompañada con aromas balsámicos dándole un carácter goloso. Para finalizar nos aparecen unos toques anisados que recuerdan el hinojo, planta típica del sotobosque mediterráneo." ,
        "description2":""
      },
      { 
        "id": 10, 
        "name": "I Tant Rosat", 
        "image": "/iconos/botellas/i_tant_rosat.jpg", 
        "type": t("rosé"), 
        "DO": "Terra Alta", 
        "grapeVariety":"Garnacha", 
        "grapeGrowe":"Sin Crianza",
        "pairing":"",
        "serving Temperature":"",
        "tastingNotes":"",
        "vineyards":"",
        "description":"Color pulpa de cereza con una capa muy suave, con reflejos color rosa salmón y una nitidez extraordinaria. Los aromas de este vino están ligados con la expresión de la tierra donde han sido cultivadas las viñas que lo componen. Encontramos aromas minerales que recuerdan los suelos calcáreos, presencia de aromas especiados como pimienta verde y un recuerdo de fruta roja" ,
        "description2":""
      },
      { 
        "id": 11, 
        "name": "Mar Salada Blanc", 
        "image": "/iconos/botellas/mar-salada-blanc.jpg", 
        "type": t("white"), 
        "DO": "Catalunya",  
        "grapeVariety":"Macabeo, Garnacha Blanca", 
        "grapeGrowe":"Sin Crianza", 
        "pairing":"",
        "serving Temperature":"",
        "tastingNotes":"",
        "vineyards":"",
        "description":"Atractiu color groc pàl·lid verdós amb tocs a llimona. Aroma afruitada en el qual destaquen els tons a fruita blanca amb un lleuger fons cítric. Es presenta equilibrat i fresc en el paladar. Final llarg i agradable.", 
        "description2":""
      },
      { 
        "id": 12, 
        "name": "Mar Salada Cava", 
        "image": "/iconos/botellas/mar-salada-cava.jpg", 
        "type": t("sparkling"), 
        "DO": "Cava", 
        "grapeVariety":"Xarel·lo, Macabeo, Parellada", 
        "grapeGrowe":"9 meses",
        "pairing":"",
        "serving Temperature":"",
        "tastingNotes":"",
        "vineyards":"",
        "description":"El cava Mar Salada presenta una brillante capa dorada con matices verdosos, un constante rosario de finas burbujas y una fiel corona con una capa de espuma persistente. En nariz, en un primer momento aparecen aromas florales que recuerdan épocas como la primavera, seguidamente sobresale una ligera fruta cítrica con agradable levadura que recuerda a bollería." ,
        "description2":""
      },
      { 
        "id": 13, 
        "name": "Mar Salada Negre", 
        "image": "/iconos/botellas/mar-salada-negre.jpg", 
        "type": t("red"), 
        "DO": "Catalunya",   
        "grapeVariety":"Garnacha negra, Tempranillo", 
        "grapeGrowe":"Sin Crianza", 
        "pairing":"",
        "serving Temperature":"",
        "tastingNotes":"",
        "vineyards":"",
        "description":"Atractivo color rojo violáceo. Aromas intensos que seducen con sus notas de frutos rojos y negros. Suave y equilibrado, en boca presenta un postgusto largo. Ideal para carnes rojas y blancas, guisadas o asadas. Excelente acompañante de quesos curados y semicurados, embutidos, setas y caracoles." ,
        "description2":""
      },
      { 
        "id": 14, 
        "name": "Mar Salada Rosat", 
        "image": "/iconos/botellas/mar-salada-rosat.jpg", 
        "type": t("rosé"), 
        "DO": "Catalunya",
        "grapeVariety":"Garnacha negra, Tempranillo", 
        "grapeGrowe":"Sin Crianza",
        "pairing":"",
        "serving Temperature":"",
        "tastingNotes":"",
        "vineyards":"",
        "description":"Atractivo color rosado intenso donde sobresalen aromas de frutas rojas y frambuesas sobre un fondo de fresas. En boca presenta una entrada suave y redonda, y da una sensación bien equilibrada con una acidez refrescante. Ideal para el aperitivo. Excelente acompañante para ensaladas, sopas, platos de pasta, pizza y todo tipo de carnes con salsas con base de crema de leche." ,
        "description2":""
      },
      { 
        "id": 15, 
        "name": "Musugorri", 
        "image": "/iconos/botellas/musugorri.jpg", 
        "type": t("Aperitif"), 
        "DO": "",
        "grapeVariety":"30 botánicos", 
        "grapeGrowe":"Sin Crianza", 
        "pairing":"",
        "serving Temperature":"",
        "tastingNotes":"",
        "vineyards":"",
        "description": "Musugorri, 30 Botánicos Solidarios, una manera de practicar el aperitivo en clave social. Musugorri significa “mofletes rojos” en euskera, esos que se nos ponen a todos cuando tomamos buen vermut. Con estas botellas queremos potenciar la reutilización de los envases, con las ventajas que esto supone para el medio ambiente. ",
        "description2":""
      },
      { 
        "id": 16, 
        "name": "Que si", 
        "image": "/iconos/botellas/Que-si.png", 
        "type": t("red"), 
        "DO": "Priorat", 
        "grapeVariety":"Merlot, Garnacha, Cariñena", 
        "grapeGrowe":"Sin Crianza",
        "pairing":"",
        "serving Temperature":"",
        "tastingNotes":"",
        "vineyards":"",
        "description":"Vino de capa oscura, prácticamente opaco, color magenta muy vivo. Mezcla de frutas negras y rojas, típicas de las variedades que lo componen. También encontramos un carácter especiado que recuerda al pimentón y de manera muy sutil a la nuez moscada." ,
        "description2":""
      },
      { 
        "id": 17, 
        "name": "Saltimbanqui sau", 
        "image": "/iconos/botellas/saltimbanqui-sau.jpg", 
        "type": t("white"), 
        "DO": "Rueda",
        "grapeVariety":"Sauvignon blanco", 
        "grapeGrowe":"Sin Crianza", 
        "pairing":"",
        "serving Temperature":"",
        "tastingNotes":"",
        "vineyards":"",
        "description":"De color amarillo pálido y destellos verdosos. Característicos aromas varietales como la lima, la hierba y las flores blancas. También muestra notas de fruta tropical, como la piña y la fruta de la pasión." ,
        "description2":""
      },
      { 
        "id": 18, 
        "name": "Saltimbanqui verdejo", 
        "image": "/iconos/botellas/saltimbanqui-verdejo.jpg", 
        "type": t("white"), 
        "DO": "Rueda", 
        "grapeVariety":"Verdejo", 
        "grapeGrowe":"Sin Crianza",
        "pairing":"",
        "serving Temperature":"",
        "tastingNotes":"",
        "vineyards":"",
        "description":"Elaborado con uvas de viñedos de más de 40 años, es la mejor expresión de Rueda y su terroir.” Joven y brillante. Alta intensidad con vibrantes notas de fruta exótica, aromas florales y toques de anís e hinojo. Seco, cuerpo medio, crujiente y refrescante acidez." ,
        "description2":""
      },
      { 
        "id": 19, 
        "name": "Tronat Blanc", 
        "image": "/iconos/botellas/tronat_blanc.jpg", 
        "type": t("white"), 
        "DO": "Empordà", 
        "grapeVariety":"Garnacha", 
        "grapeGrowe":"Sin Crianza",
        "pairing":"",
        "serving Temperature":"",
        "tastingNotes":"",
        "vineyards":"",
        "description": "Color amarillo pálido con reflejos verdosos. Aromáticamente intenso, con notas de frutas dulces y pequeños toques florales. En boca es equilibrado, fresco y sedoso, mostrándose como un vino atrevido, largo, expresivo y tocado por la Tramontana.",
        "description2":""
      },
      { 
        "id": 20, 
        "name": "Tronat Negre", 
        "image": "/iconos/botellas/tronat_negre.jpg", 
        "type": t("red"), 
        "DO": "Empordà", 
        "grapeVariety":"Merlot, Garnacha, Cariñena", 
        "grapeGrowe":"12 meses en roble americano",
        "pairing":"",
        "serving Temperature":"",
        "tastingNotes":"",
        "vineyards":"",
        "description": "De color rojo cereza con reflejos granatosos, su capa intensa demuestra que es un vino con Estructura y complejidad. En nariz se encuentran notas de fruta roja madura, como la ciruela o la cereza picota, acompañadas de unos aromas sutiles y complejos aportados por la variedad Cariñena.",
      "description2":""
      }
  ];
}

export const WineTypes = () => {
  const { t } = useTranslation("wine");
  return [t("red"), t("white"), t("rosé"), t("sparkling")];
}

export const WineDO = () => {

  return ["Rioja", "Priorat", "Penedès", "Montsant", "Empordà", "Rías Baixas", "Navarra", "Valdeorras", "Rueda", "Cava"];
}