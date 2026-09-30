export type LegalItem = {
  title: string;
  /** TODO: add outbound URL when available */
  href?: string;
};

export type LegalCategory = {
  id: string;
  heading: string;
  items: LegalItem[];
};

export const legislativaCategories: LegalCategory[] = [
  {
    id: "zakony",
    heading: "Zákony",
    items: [
      { title: "Zákon 182/1993 o vlastníctve bytov a nebytových priestorov" },
      { title: "Zákon 18/2018 o ochrane osobných údajov" },
      { title: "Zákon 157/2018 o metrológii" },
      { title: "Zákon 321/2014 o energetickej efektívnosti" },
      { title: "Zákon 657/2004 o tepelnej energetike" },
      { title: "Zákon 314/2001 o ochrane pred požiarmi" },
    ],
  },
  {
    id: "vyhlasky",
    heading: "Vyhlášky",
    items: [
      {
        title:
          "Vyhláška MH SR 240/2016 ktorou sa ustanovuje teplota teplej úžitkovej vody na odbernom mieste, pravidlá rozpočítavania množstva tepla dodaného v teplej úžitkovej vode a rozpočítavania množstva tepla",
      },
      {
        title:
          "Vyhláška MPSVaR 508/2009 ktorou sa ustanovujú podrobnosti na zaistenie bezpečnosti a ochrany zdravia pri práci s technickými zariadeniami tlakovými, zdvíhacími, elektrickými a plynovými a ktorou sa ustanovujú technické zariadenia, ktoré sa považujú za vyhradené technické zariadenia",
      },
      {
        title:
          "Vyhláška MV SR 699/2004 o zabezpečení stavieb vodou na hasenie požiarov",
      },
      {
        title:
          "Vyhláška MV SR 719/2002 o pravidelnej kontrole hasiacich prístrojov",
      },
    ],
  },
  {
    id: "ceny-energii",
    heading: "Ceny energií",
    items: [
      { title: "URSO – burzové ceny elektriny a plynu" },
      { title: "eex – natural gas markets" },
    ],
  },
];
