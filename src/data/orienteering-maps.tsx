/**
 * This object contains all the information about the orienteering maps. 
 */

export const orienteeringMaps = [
    {
      id: 1,
      name: "Tevaniemi",
      year: "1995",
      mapMaker: "Ari Anjala, Jukka Pohjonen",
      scale: "1:10 000",
      description: "Tevaniemessä rastin löytävät vain tosisuunnistajat",
      mapUrl: 'https://iknv.fi/wp-content/uploads/2021/03/Logo_nouski_keltpuna_kopio.jpg',
      coordinates: [
        { lat: 61.839594, lng: 23.074075 },
        { lat: 61.838541, lng: 23.120970 },
        { lat: 61.856278, lng: 23.116159 },
        { lat: 61.854902, lng: 23.050351 },
        { lat: 61.847046, lng: 23.049840 },
        { lat: 61.839594, lng: 23.074075 }
      ]
    },
    {
      id: 2,
      name: "Vatula/Kirkkojärvi",
      year: "2011",
      mapMaker: "Anjala, Mazulis, Pohjonen, Savonen",
      scale: "1:10000, 1:15000",
      description: "Kartalla järjestetty mm. KLL 2010, ja KLL 2002. Myös kiintorastikartta",
      mapUrl: 'https://iknv.fi/wp-content/uploads/2022/11/vatula.jpg',
      fullMapUrl: 'https://iknv.fi/wp-content/uploads/2022/11/Kirkkojarvi_2011.jpg',
      coordinates: [
        { lat: 61.6810072, lng: 22.9363632 },
        { lat: 61.6803559, lng: 22.9887199 },
        { lat: 61.7089184, lng: 23.0285454 },
        { lat: 61.7208710, lng: 23.0118942 },
        { lat: 61.7284324, lng: 22.9930115 },
        { lat: 61.7294087, lng: 22.9609108 },
        { lat: 61.7274576, lng: 22.9274368 },
        { lat: 61.6823097, lng: 22.9083824 },
        { lat: 61.6811700, lng: 22.9361916 }
      ]
    },
    {
      id: 3,
      name: "Ikaalisten keskusta",
      year: "2012",
      mapMaker: "Marius Mazulis ja Jukka Pohjonen",
      scale: "1:10 000 & 1: 5 000",
      description: "Useita sprinttikarttoja (mm. Keskusta, Toivolansaari) ja suunnistuskartta.",
      mapUrl: 'https://iknv.fi/wp-content/uploads/2021/03/Logo_nouski_keltpuna_kopio.jpg',
      coordinates: [
        { lng: 23.0383301, lat: 61.7769359 },
        { lng: 23.0558395, lat: 61.7569647 },
        { lng: 23.1160927, lat: 61.7403934 },
        { lng: 23.1344604, lat: 61.7486802 },
        { lng: 23.0961800, lat: 61.7637856 },
        { lng: 23.0431366, lat: 61.7803444 },
        { lng: 23.0379868, lat: 61.7768548 }
      ]
    },
    {
      id: 4,
      name: "Kylpylä/Teiharju",
      year: "2015-2016",
      mapMaker: "Jukka Pohjonen, Ari Anjala, Arvo Paulin",
      scale: "1:10 000",
      description: "Sprinttikartta kylpylästä. Suunnistuskartta Teiharjusta (mm. Viestiliigan finaali 2020)",
      mapUrl: 'https://iknv.fi/wp-content/uploads/2022/11/teiharju.jpg',
      fullMapUrl: 'https://iknv.fi/wp-content/uploads/2022/11/Vatulanharju-2018.jpg',
      coordinates: [
        { lng: 23.0153275, lat: 61.7696780 },
        { lng: 23.0306053, lat: 61.7734931 },
        { lng: 23.0376434, lat: 61.7829881 },
        { lng: 23.0069160, lat: 61.8053438 },
        { lng: 22.9784203, lat: 61.8064789 },
        { lng: 22.9681206, lat: 61.8042086 },
        { lng: 23.0148125, lat: 61.7698903 }
      ]
    },
    {
      id: 5,
      name: "Jämi",
      year: "2022",
      mapMaker: "Pohjonen, Paulin, Savonen, Pikkarainen",
      scale: "1:10 000 & 1: 15 000",
      description: "Jämin suuret kankaat on kokonaan kartoitettu. Jämillä järjestetään vuosittain Jämi Suunnistusmaraton.",
      mapUrl: 'https://iknv.fi/wp-content/uploads/2022/11/jami.jpg',
      coordinates: [
        { lng: 22.7992058, lat: 61.7479097 },
        { lng: 22.7792931, lat: 61.7504720 },
        { lng: 22.7528572, lat: 61.7196715 },
        { lng: 22.6465988, lat: 61.7335721 },
        { lng: 22.6769829, lat: 61.7872460 },
        { lng: 22.8285599, lat: 61.7683368 }
      ]
    },
    {
      id: 6,
      name: "Riitiala",
      year: "2022",
      mapMaker: "Topias Helminen",
      scale: "1:10 000",
      description: "Uusi kartta, jossa myös kiintorastit.",
      mapUrl: 'https://iknv.fi/wp-content/uploads/2022/11/riitiala.jpg',
      coordinates: [
        { lng: 22.9774761, lat: 61.8696704 },
        { lng: 23.0045128, lat: 61.8851612 },
        { lng: 22.9802227, lat: 61.8987446 },
        { lng: 22.9797077, lat: 61.8950664 },
        { lng: 22.9736137, lat: 61.8841099 },
        { lng: 22.9664898, lat: 61.8726640 },
        { lng: 22.9773903, lat: 61.8697917 }
      ]
    },
    {
      id: 7,
      name: "Juhtimäki",
      year: "2006",
      mapMaker: "Ari Anjala",
      scale: "1:10 000",
      description: "Perinteistä ja vaativaa ikaalilaista maastoa",
      mapUrl: 'https://iknv.fi/wp-content/uploads/2021/03/Logo_nouski_keltpuna_kopio.jpg',
      coordinates: [
        { lng: 23.4467125, lat: 61.8276393 },
        { lng: 23.4562397, lat: 61.8274368 },
        { lng: 23.4621620, lat: 61.8312041 },
        { lng: 23.4780407, lat: 61.8345661 },
        { lng: 23.4825897, lat: 61.8371581 },
        { lng: 23.4733200, lat: 61.8464310 },
        { lng: 23.4671402, lat: 61.8506414 },
        { lng: 23.4448242, lat: 61.8504390 },
        { lng: 23.4467125, lat: 61.8276393 }
      ]
    },
    {
      id: 8,
      name: "Luhalahti",
      year: "2019",
      mapMaker: "Ari Anjala",
      scale: "1:10 000",
      description: "Väinänvuori, Konsonvuori, Himoistenvuoret. Iso osa alueesta harjoituskiellossa vuoden 2025 SM-viestiin asti.",
      mapUrl: 'https://iknv.fi/wp-content/uploads/2022/11/vainanvuori.jpg',
      coordinates: [
        { lng: 23.3043194, lat: 61.7754414 },
        { lng: 23.3101559, lat: 61.7713193 },
        { lng: 23.3116579, lat: 61.7637897 },
        { lng: 23.3214855, lat: 61.7635258 },
        { lng: 23.3251333, lat: 61.7630590 },
        { lng: 23.3270645, lat: 61.7624297 },
        { lng: 23.3332872, lat: 61.7627922 },
        { lng: 23.3440590, lat: 61.7660804 },
        { lng: 23.3534575, lat: 61.7638480 },
        { lng: 23.3597660, lat: 61.7637103 },
        { lng: 23.3632851, lat: 61.7743852 },
        { lng: 23.3553028, lat: 61.7840017 },
        { lng: 23.3565903, lat: 61.7865169 },
        { lng: 23.3506680, lat: 61.7921145 },
        { lng: 23.3501530, lat: 61.7935340 },
        { lng: 23.3456898, lat: 61.7954401 },
        { lng: 23.3329010, lat: 61.7940612 },
        { lng: 23.3359909, lat: 61.7839205 },
        { lng: 23.3220863, lat: 61.7818920 },
        { lng: 23.3100700, lat: 61.7802712 },
        { lng: 23.3038902, lat: 61.7753613 }
      ]
    },
    {
      id: 9,
      name: "Nisunperä",
      year: "?",
      mapMaker: "?",
      scale: "1:10 000",
      description: "Nisunperän kartta. Nisunperällä on järjestetty mm. vuoden 1998 FIN5-rastiviikon osakilpailu.",
      mapUrl: 'https://iknv.fi/wp-content/uploads/2021/03/Logo_nouski_keltpuna_kopio.jpg',
      coordinates: [
        { lng: 23.3550453, lat: 61.7455872 },
        { lng: 23.3911800, lat: 61.7456308 },
        { lng: 23.3753014, lat: 61.7603723 },
        { lng: 23.3683491, lat: 61.7614685 },
        { lng: 23.3608818, lat: 61.7603723 },
        { lng: 23.3536720, lat: 61.7541192 },
        { lng: 23.3547878, lat: 61.7455901 }
      ]
    },
    {
      id: 10,
      name: "Särkijärvi",
      year: "2014",
      mapMaker: "Ari Anjala",
      scale: "1:10 000",
      description: "Kartalla järjestettiin mm. vuoden 1998 FIN5-rastiviikon osakilpailu",
      mapUrl: 'https://iknv.fi/wp-content/uploads/2021/03/Logo_nouski_keltpuna_kopio.jpg',
      coordinates: [
        { lng: 23.3121300, lat: 61.7533135 },
        { lng: 23.3147049, lat: 61.7416969 },
        { lng: 23.3471489, lat: 61.7399093 },
        { lng: 23.3512688, lat: 61.7555063 },
        { lng: 23.3117867, lat: 61.7534759 }
      ]
    },
    {
      id: 11,
      name: "Luomu",
      year: "2019",
      mapMaker: "Arvo Paulin",
      scale: "1:10 000",
      description: "Peitteinen ja vaativa maasto keskustan eteläpuolella Ikaalisten Luomun kasvihuoneiden takana.",
      mapUrl: 'https://iknv.fi/wp-content/uploads/2022/11/luomu.jpg',
      fullMapUrl: 'https://iknv.fi/wp-content/uploads/2022/11/luomu2019.jpg',
      coordinates: [
        { lng: 23.069677097543956, lat: 61.75254074815014 }, 
        { lng: 23.071891531599213, lat: 61.747443277633046 },
        { lng: 23.072861891809282, lat: 61.735907403867955 }, 
        { lng: 23.079817832983995, lat: 61.7341689124866 }, 
        { lng: 23.111216178616655, lat: 61.734649294860894},
        { lng: 23.097062770530037, lat: 61.745101476431415},
        { lng: 23.077354270521106, lat: 61.751320784962836}
      ]                   
    }                     
  ]

  export interface orienteeringMapType {
    id: number
    name?: string
    mapMaker?: string
    scale?: string
    description?: string
    coordinates?: coordiNatesType[]
  }

  export interface coordiNatesType {
    lng: number
    lat: number
  }