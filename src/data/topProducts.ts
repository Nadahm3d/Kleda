import kjole from "../assets/images/kjole.jpg.avif";
import jogge from "../assets/images/jogge.jpg.avif";
import genser from "../assets/images/genser.jpg.avif";
import loafers from "../assets/images/loafers.jpg.avif";
import tskjorte from "../assets/images/tskjorte.jpg.avif";

export type TopProduct = {
  id: number;
  name: string;
  brand: string;
  image: string;
  productUrl: string;
  sold: { day: number; month: number; year: number };
  clicks: { day: number; month: number; year: number };
  favorites: { day: number; month: number; year: number };
  trendSold: number;
  trendClicks: number;
  trendFavorites: number;
};

export const topProducts: TopProduct[] = [
  {
    id: 1,
    name: "Kjole – Sommerkoleksjon",
    brand: "H&M",
    image: kjole,
    productUrl: "https://www2.hm.com/no_no/productpage.html",
    sold: { day: 12, month: 310, year: 1280 },
    clicks: { day: 160, month: 1800, year: 8900 },
    favorites: { day: 6, month: 240, year: 1300 },
    trendSold: 1,
    trendClicks: -1,
    trendFavorites: 1,
  },
  {
    id: 2,
    name: "Joggebukse – Basic",
    brand: "H&M",
    image: jogge,
    productUrl: "https://www2.hm.com/no_no/productpage.1302372003.html?utm_source=google&utm_medium=cpc&utm_campaign=mk_no%7Cln_nor%7Cpl_google%7Cct_sh%7Cbu_mens%7Ckt_bra%7Cbg_branded%7Ccs_shopv2%7Cadt_all%7Csp_low%7Cpi_nog06anu3aa214&utm_term=&gad_source=1&gad_campaignid=13537578474&gbraid=0AAAAADvrmzTSbEE-nIJwmzq8MSjJaLe2F&gclid=Cj0KCQiA9OnJBhD-ARIsAPV51xPdgYgRG0fEzgMX2n3ZHR8fuMepgsWHWR5kxzhiB9r46BytHsUlJ5AaAj_FEALw_wcB",
    sold: { day: 19, month: 260, year: 980 },
    clicks: { day: 200, month: 1500, year: 7600 },
    favorites: { day: 5, month: 210, year: 1150 },
    trendSold: -1,
    trendClicks: 1,
    trendFavorites: 1,
  },
  {
    id: 3,
    name: "Genser – Ullmix",
    brand: "H&M",
    image: genser,
    productUrl: "https://www2.hm.com/no_no/productpage.1296595002.html?utm_source=google&utm_medium=cpc&utm_campaign=mk_no%7Cln_nor%7Cpl_google%7Cct_sh%7Cbu_mens%7Ckt_bra%7Cbg_branded%7Ccs_shopv2%7Cadt_all%7Csp_low%7Cpi_nog06anu3aa214&utm_term=&gad_source=1&gad_campaignid=13537578474&gbraid=0AAAAADvrmzTSbEE-nIJwmzq8MSjJaLe2F&gclid=Cj0KCQiA9OnJBhD-ARIsAPV51xNbTvFRB-JkTpG3iDGOYmBPfIKtIKdCfCxoT_yDC4zQ8AwaTNAlNcwaArtuEALw_wcB",
    sold: { day: 24, month: 329, year: 1299 },
    clicks: { day: 110, month: 1100, year: 5900 },
    favorites: { day: 17, month: 250, year: 1200 },
    trendSold: 1,
    trendClicks: 1,
    trendFavorites: -1,
  },
  {
    id: 4,
    name: "Loafers - black",
    brand: "H&M",
    image: loafers,
    productUrl: "https://www2.hm.com/no_no/productpage.1298051001.html?utm_source=google&utm_medium=cpc&utm_campaign=mk_no%7Cln_nor%7Cpl_google%7Cct_sh%7Cbu_mens%7Ckt_bra%7Cbg_branded%7Ccs_shopv2%7Cadt_all%7Csp_low%7Cpi_nog06anu3aa214&utm_term=&gad_source=1&gad_campaignid=13537578474&gbraid=0AAAAADvrmzTSbEE-nIJwmzq8MSjJaLe2F&gclid=Cj0KCQiA9OnJBhD-ARIsAPV51xNXdAFdlpMsb_mfRXnVjaRkbi2ncOk-DnE7fxFYgdwoxKztRB1pR7YaAvRuEALw_wcB",
    sold: { day: 15, month: 410, year: 1450 },
    clicks: { day: 210, month: 2200, year: 10500 },
    favorites: { day: 10, month: 320, year: 1500 },
    trendSold: 1,
    trendClicks: 1,
    trendFavorites: 1,
  },
  {
    id: 5,
    name: "T-skjorte – Premium Cotton",
    brand: "H&M",
    image: tskjorte,
    productUrl: "https://www2.hm.com/no_no/productpage.1232194047.html?utm_source=google&utm_medium=cpc&utm_campaign=mk_no%7Cln_nor%7Cpl_google%7Cct_sh%7Cbu_mens%7Ckt_bra%7Cbg_branded%7Ccs_shopv2%7Cadt_all%7Csp_low%7Cpi_nog06anu3aa214&utm_term=&gad_source=1&gad_campaignid=13537578474&gbraid=0AAAAADvrmzTSbEE-nIJwmzq8MSjJaLe2F&gclid=Cj0KCQiA9OnJBhD-ARIsAPV51xM1OF8XyQws3MfJ5BQz2QSvQuh_tb9IDYjzbWv9iwuvgEGegZM-UPQaAi15EALw_wcB",
    sold: { day: 6, month: 325, year: 660 },
    clicks: { day: 70, month: 760, year: 4200 },
    favorites: { day: 3, month: 140, year: 800 },
    trendSold: -1,
    trendClicks: -1,
    trendFavorites: 1,
  },
];
