export type StoryTone =
  | "identity"
  | "personal"
  | "architecture"
  | "transformation"
  | "investigation"
  | "warm-technical"
  | "data"
  | "comparison";

export type Pribeh = {
  number: string;
  title: string;
  slug: string;
  subtitle?: string;
  tone: StoryTone;
  /** Exact paragraphs as supplied — do not rewrite */
  paragraphs: string[];
  pullQuote?: string;
  imageSlot: `story-0${1 | 2 | 3 | 4 | 5 | 6 | 7 | 8}`;
  imageSrc: string;
  imageAlt: string;
  /** CSS object-position for careful cropping */
  objectPosition?: string;
};

export const pribehyIntro =
  "Všetky tu uverejnené príbehy sú výsledkom mojich doterajších praktických skúseností a zámerov smerujúcich ku skvalitneniu života ľudí žijúcich v bytových domoch.";

export const pribehy: Pribeh[] = [
  {
    number: "01",
    title: "Bytostiam v bytoch",
    slug: "bytostiam-v-bytoch",
    tone: "identity",
    imageSlot: "story-01",
    imageSrc: "/stories/story-01.jpg",
    imageAlt:
      "Muž zo zadu hľadí na bytový dom; v popredí zeleň, v pozadí panelák s modrými lodžiami",
    objectPosition: "50% 72%",
    pullQuote:
      "Pod menom BYTYS po prvý raz opúšťam priestor svojej fyzickej pôsobnosti.",
    paragraphs: [
      "Ľuďom žijúcim v bytových domoch prispievam k vyššej miere spokojnosti a komfortu bývania. Rád pomôžem aj vám a o svoje skúsenosti v oblasti zabezpečenia prevádzky bytového domu sa s vami podelím. Od roku 1990 ich zbieram osobným aj profesným životom priamo tu v bytovom dome. Profesne začínam popri zamestnaní členstvom v samospráve, ktorej neskôr predsedám. Zmýšľanie, aktivita a výsledky mojej práce prirodzene vyúsťujú k osamostatneniu bytového domu, v ktorom žijem. Založením spoločenstva sa vydávame na cestu utužovania viery vo vlastné schopnosti. Po výraznej rekonštrukcii bytovky sa nám podaril úspech doposiaľ najväčší. V decembri 2015 spúšťame prevádzku vlastného zdroja tepla. Domová kotolňa sa napriek odhováraniam „zaručených odborníkov“ stáva zdrojom najvyšších úspor.",
      "Pod menom BYTYS po prvý raz opúšťam priestor svojej fyzickej pôsobnosti. Smerujem k vám, ľuďom žijúcim v bytových domoch blízkych i vzdialených. Zámerom je mi odovzdávanie praktických skúseností každému, kto prejavením záujmu ocení ich úžitok.",
    ],
  },
  {
    number: "02",
    title: "Ako sa šomroš domovníkom stal",
    slug: "ako-sa-somros-domovnikom-stal",
    tone: "personal",
    imageSlot: "story-02",
    imageSrc: "/stories/story-02.jpg",
    imageAlt:
      "Stojaci muž v spoločenskej miestnosti bytového domu počas stretnutia s obyvateľmi",
    objectPosition: "42% 35%",
    pullQuote: "„Čo znamená byť domovníkom?“ ozvalo sa prekvapivo kdesi z hlbín môjho vnútra.",
    paragraphs: [
      "Celé je to obrovská nehánodná náhoda. Začalo to mojou prvou účasťou na domovej schôdzi, kam som sa vybral, akože ináč, šomrať, frfľať,  jojkať, nariekať. Mojím zámerom bolo nájsť vinníka a zjednať nápravu krivdy mi spôsobenej. Konečne nastal deň konania schôdze. Nasrdený si neisto zastanem vo dverách schôdzovne, počúvam o čom to celé je a čakám na vhodnú príležitosť.",
      "Ibaže bezstarostné, usmevavé tváre prítomných žien mi od počiatku akoby dávali najavo, že nie som na správnom mieste. Roztrpčený predtuchou, že nepochodím, prešlapujem z nohy na nohu. A práve v momente posledného bodu programu, ktorým bola voľba nového člena samosprávy, hotujem sa k odchodu.",
      "„Nič pre mňa,“ pomyslím si a hlavu i telo zvŕtam do priestoru osvetlenej chodby, keď tu ma z úvah vytrhnú štebotavé hlasy: „Čo poviete na pána Tokoša?“ zaznelo priestorom.",
      "„Nuž čože, na taľafatky majú čas,“ zašomrem si popod nos opúšťajúc pritom pivničné priestory. Zjavne si doberajú novousadlíka. Bo spojenie môjho mena s členstvom v samospráve vyvoláva na ich tvárach úsmevy.",
      "Ibaže v úradnej obálke od vtedajšieho správcu ma o niekoľko dní čakalo prekvapenie v podobe zápisnice z domovej schôdze. Stálo v nej, čierne na bielom, rozhodnutie o voľbe nového člena samosprávy.",
      "„Čo znamená byť domovníkom?“ ozvalo sa prekvapivo kdesi z hlbín môjho vnútra.",
      "Vtedy som netušil, že vďaka nenáhodnej náhode nadobudnem silu k prekonávaniu prekážok na ceste premeny od šomroša, po bytosť schopnú súznenia so susedmi žijúcimi v bytovom dome. A to od najmenšieho mrňúsa až po človeka v úctyhodnom veku.",
    ],
  },
  {
    number: "03",
    title: "Ako sme si rukávy vysúkali",
    slug: "ako-sme-si-rukavy-vysukali",
    tone: "architecture",
    imageSlot: "story-03",
    imageSrc: "/stories/story-03.jpg",
    imageAlt:
      "Bytový dom počas obnovy so lešením, činnosťou na streche a staveniskom pri dome",
    objectPosition: "48% 40%",
    pullQuote:
      "Založenie SVB (zmena formy správy zo správcu na spoločenstvo) výrazne posilnilo našu dôveru vo vlastné schopnosti.",
    paragraphs: [
      "Zatečené steny príbytkov susedov žijúcich na najvyššom podlaží vyvolali vo mne túžbu po zmene vtedajšieho stavu k lepšiemu. Hoci s minimálnymi skúsenosťami, púšťam sa do práce. Ku zmene postojov k spoločným častiam bytového domu dochádza postupne u viacerých vlastníkov. S radosťou vnímam ako sa spolu s novou valbovou strechou začína pozvolna šíriť vzájomná dôvera medzi susedmi a samosprávou, ktorá s každým ďalším dokončeným projektom narastá.",
      "Na rad prichádzajú okná a dvere spoločných priestorov. Doposiaľ nepríjemný kovový pleskot poštových schránok umiestnených vo vestibule a železných vchodových dverí sa mení v jemné puknutie magnetickej lišty. Z pivníc sa vytratilo lístie, v zimnom období sneh a hlavne celoročný zápach mačacieho moču.",
      "Pokračujeme digitálnym dorozumievacím systémom s možnosťou prepojenia medzi bytmi, čipovým otváraním dverí a senzorovým osvetlením po podlažiach.",
      "Vysoké náklady za opakované spárovanie panelových spojov odštartovali prípravu na obnovu fasády, do ktorej sa akoby náhodou zamiešala výstavba lodžií.",
      "Založenie SVB (zmena formy správy zo správcu na spoločenstvo) výrazne posilnilo našu dôveru vo vlastné schopnosti. Zároveň pomohlo s najvýznamnejším projektom, čo do úspory finančných prostriedkov. Realizáciou domovej kotolne.",
      "Výťahy, ležaté i zvislé rozvody, maľovanie spoločných priestorov a všetko, čo život v bytovom dome prinesie, nás ešte len čaká. No s každoročne usporenými peniazmi, vďaka prevádzke vlastného zdroja tepla, sú naše výhliadky do budúcna radostnejšie.",
    ],
  },
  {
    number: "04",
    title: "Ako sa z nájomníkov vlastníci stali",
    slug: "ako-sa-z-najomnikov-vlastnici-stali",
    subtitle: "alebo o vnútornej i vonkajšej premene",
    tone: "transformation",
    imageSlot: "story-04",
    imageSrc: "/stories/story-04.jpg",
    imageAlt:
      "Skupina obyvateľov stojaca pred bytovým domom",
    objectPosition: "50% 62%",
    pullQuote: "Čo teraz?",
    paragraphs: [
      "Do vlastníctva sme byty preberali plne si neuvedomujúc, že spolu s nimi preberáme zodpovednosť aj za spoločné, nebytové priestory. Bytové domy boli navyše v stave kedy žiadali výraznú investíciu do rekonštrukcie. Strechy, fasády, okná, vchodové dvere po obnove priam kričali. A tak prvotné nadšenie, spôsobené zmenou nájomníckeho stavu na hrdé vlastníctvo, zakrátko vystriedali rozpaky vyvolané práve neblahým stavom spoločných priestorov. Čo teraz?",
      "Nastalo neisté hľadanie odpovedí na otázky týkajúce sa vysokých investícií potrebných na uvedenie bytového domu do harmonického celku. Tak po stránke vonkajšej ako aj vnútrornej, bytostnej. Veď sused suseda z vedľajšieho vchodu poznal iba výnimočne a to sme stáli pred dôležitým rozhodovaním. Ukázalo sa, že roky nájomníčenia zanechali kdesi hlboko každého z nás svoju stopu. Vlastníkmi sme sa síce stali okamihom podpísania zmluvy, ale ako tak rýchlo myseľ preonačiť?",
      "Nečudo, že v prvých momentoch „slobody\" sme sa, my čerství vlastníci, obracali naspäť ku správcovi. Ibaže správca vedomý si zákona, svojho i nášho stavu, nám dal jasne najavo, že on vykonáva iba správu a za stav bytového domu sú zodpovední noví majitelia, teda my vlastníci.",
      "Plní rozpakov sme sa snažili porozumieť, čo sa to vlastne s nami deje. Osveta, ktorá by v oblasti vlastníctva bytov a nebytových priestorov pomohla, chýbala. Domová schôdza, konajúca sa pod vedením správcu raz v roku, tiež nevládala vytvoriť dostatočný priestor pre formovanie tak potrebnej identity zodpovedného vlastníka. Odkázaní na metódu pokus-omyl sme s nevôľou prijímali prvé zvýšenia do fondu opráv. „Furt sa len zvyšuje a nič sa nerobí,“ zvyčajne v tých časoch zaznievalo medzi obyvateľmi bytového domu.",
      "Začali sme ožívať, len čo sa objavili prvé známky pohybu. Nová valbová strecha so zateplením povaly, po nej vchodové dvere s čipovým otváraním, okná v spoločných priestoroch, lodžie, fasáda, založenie spoločenstva vlastníkov, domová kotolňa (vlastný zdroj tepla).",
      "Inde zasa v inom poradí alebo inej skladbe. Každý bytový dom sa s otázkou vlastníctva vysporadúva po svojom. Tak ako najlepšie vie.",
    ],
  },
  {
    number: "05",
    title: "Ukradnutá voda",
    slug: "ukradnuta-voda",
    subtitle: "alebo o postojoch k riešeniu problémov",
    tone: "investigation",
    imageSlot: "story-05",
    imageSrc: "/stories/story-05.jpg",
    imageAlt:
      "Vodomer a potrubia v technickom priestore bytového domu",
    objectPosition: "50% 45%",
    pullQuote:
      "Kam sa vtedy podela studená voda, v objeme kvartálnej spotreby bytového domu, netuším podnes.",
    paragraphs: [
      "„Nedoplatok? A za čo?,“ pýta sa manželka.\n„Za studenú vodu,“ rečiem, „no ale za také množstvo, čo by sme ňou ťavy napájali.“\n„Dúfam, že to tak nenecháš,“ posilňuje moju sebadôveru manželka.\n„Pravdaže, predsa jestvuje dáka spravodlivosť,“ reagujem váhavo.\nNuž ale ako zistiť, čo sa porobilo? A kde začať?",
      "Prvou zastávkou na ceste odhaľovania záhady stratenej vody mi bola domová schôdza. Šiel som na ňu s predstavou, že ak aj nie všetci susedia, predsa len sa pripoja aspoň podaktorí a prispejú k vyriešeniu veľkého problému. O mojom omyle ma presvedčili rady, ktoré som obdržal od nich namiesto pomoci. Radili mi aby som najprv nedoplatok uhradil, ak sa nechcem dostať do ešte väčších problémov a potom si vraj môžem pátrať koľko sa mi zachce. No najlepšie spravím, keď celú vec nechám ako je, lebo aj tak nič nezistím, že nie som jediný, a že život je už proste taký. Ich „štedré rady\" sa našťastie minuli ciela. Prístup susedov ku svojím peniazom ma síce prekvapil, no zároveň akoby posilnil moje odhodlanie vytrvať až do konca. „Nuž čože, po schôdzi ako pred ňou“ vravím si a pokračujem v pátraní sám.",
      "Moje ďalšie kroky smerovali do miestnych vodární, odtiaľ k bývalému správcovi a niekoľko krát, s rôznym časovým odstupom, tam a späť. Spočiatku sa na príslušných miestach vyjadrovali, ku mojím konkrétnym otázkam, všeobecným klišé o ľudskej zlobe, závisti, chamtivosti a s ňou súvisiacej tendencii kradnúť. Nenápadne smerovali moju pozornosť od seba k ľuďom žijúcim v panelových domoch, zaručeným to vinníkom. „Áno, ľudia kradnú a nehľadia vôkol seba,“ ubezpečovali ma.",
      "Vzhľadom k môjmu opätovnému poukázaniu na množstvo vyfakturovanej vody, prišli na rad úvahy o vizuálnych prejavoch katastrofy (mokrom okolitom trávniku, zatopenej vodomernej šachte, ba dokonca suteréne bytového domu). No v každom prípade muselo ísť o únik vody za hlavným vodomerom vodární.",
      "Medzi dohadmi a fantastickými scenármi, ktoré akoby nemali konca kraja, sa predsa len zaskvel aj konkrétny údaj. Dozvedel som sa, že množstvo stratenej vody presahuje kvartálnu spotrebu bytového domu. Ďalším dôležitým údajom bola „nábehová krivka vodomeru.“ Prosto povedané stav, kedy vodomer síce vodu prepúšťa, no nemeria. Na dôvažok sa mi neoficiálnou cestou ušlo aj niekoľko „zaručených návodov\" ako to ľudia robia, že dokážu vodomer oklamať.",
      "Môž byť, nájde sa aj „sporiteľ.“ Zúfalec, ktorý hľadá iba vlastný prospech na úkor suseda. Ale v našom prípade by musel „cincúrikovať“ svorne celý bytový dom a to bez výnimky, každý deň, počas celého roka. Už len vedieť si predstaviť tak obrovskú vytrvalosť u všetkých bytov v počte 69, vyžaduje poriadnu dávku fantázie. Čo poviete?!",
      "Kam sa vtedy podela studená voda, v objeme kvartálnej spotreby bytového domu, netuším podnes. Vyššie zmienené „zátopové oblasti“ sa nekonali. Okolité trávnaté plochy, chodníky aj suterén bytovky vykazovali počas celého roka štandartný prevádzkový stav. No isté a zároveň pozoruhodné je, že vďaka následnej pravidelnej mesačnej kontrole faktúr a stavu meradiel sa podobný jav u nás už nezopakoval.",
    ],
  },
  {
    number: "06",
    title: "Domová kotolňa",
    slug: "domova-kotolna",
    subtitle: "alebo o tom, koho o radu pýtať",
    tone: "warm-technical",
    imageSlot: "story-06",
    imageSrc: "/stories/story-06.jpg",
    imageAlt:
      "Domová kotolňa s kotlami, čerpadlami a rozvodmi potrubí",
    objectPosition: "40% 50%",
    pullQuote:
      "Vtedy som si uvedomil, aké je dôležité, aby ten koho o radu pýtam, mal postoje a výsledky súladné s mojimi zámermi.",
    paragraphs: [
      "Rozhodnutiu vybudovať vlastný zdroj tepla predchádzal záujem o informácie, ktoré by prosto a vecne popísali benefity zamýšľaného zámeru. Spočiatku ku mne prichádzali správy väčšinou negatívneho charakteru. Zväčša z úst neprajníkov som sa dozvedal o vysokých nákladoch na prevádzku domovej kotolne (povinné revízie, servisy, opravy, poplatky za znečistenie ovzdušia….). Skrátka, že ide o záležitosť vyslovene stratovú.",
      "No dobre, vravím si, ak je vlastná tvorba tepla, pre bytový dom, taká nevýhodná, čo potom centrálny zásobovateľ tepla (CZT)? Jemu sa oplatí? A to aj napriek podstatne väčším tepelným stratám vďaka starým a dlhým rozvodom pomedzi bytové domy, nákladom na prevádzku firemných priestorov, mzdy zamestnancov a v neposledom rade tvorbe zisku?",
      "Ako tak zvažujem PROTI a PRE v mojom živote sa postupne objavujú správne bytosti. Nadšenci, ktorí domovú kotolňu vybudovali a úspešne ju aj prevádzkujú. Na tvare miesta vnímam radosť z úspor, ktoré im domová kotolňa prináša. Jas v očiach a jemné sebavedomé úsmevy si odnášam ako dar. Vtedy som si uvedomil, aké je dôležité, aby ten koho o radu pýtam, mal postoje a výsledky súladné s mojimi zámermi.",
    ],
  },
  {
    number: "07",
    title: "Domová kotolňa v číslach",
    slug: "domova-kotolna-v-cislach",
    subtitle: "alebo o tom, či sa vlastný zdroj tepla vyplatí",
    tone: "data",
    imageSlot: "story-07",
    imageSrc: "/stories/story-07.jpg",
    imageAlt:
      "Fasáda bytového domu večer s osvetlenými oknami",
    objectPosition: "50% 45%",
    paragraphs: [
      "Ako príklad uvádzam 8 podlažný dom, 3 vchody, 69 bytov:",
    ],
  },
  {
    number: "08",
    title: "Cena za 1 m3 TUV",
    slug: "cena-za-1-m3-tuv",
    subtitle: "alebo ovocie domovej kotolne",
    tone: "comparison",
    imageSlot: "story-08",
    imageSrc: "/stories/story-08.jpg",
    imageAlt:
      "Kohútik s tečúcou horúcou vodou a stúpajúcou parou",
    objectPosition: "58% 45%",
    paragraphs: [
      "Ohrev TUV (teplej úžitkovejvody) patrí k najvyšším položkám nákladov spojených s užívaním bytu. U nás, v bytovom dome, kde žijem so svojou rodinou, výjde samotný ohrev „kubíka\" teplej vody na 4,59 EUR vrátane energií a nákladov na prevádzku domovej kotolne. So studenou vodou potrebnou na ohrev TUV to činí 6,82 EUR. Ak zarátame aj splátku úveru poskytnutého na vybudovanie domovej kotolne je to na kompletku za 8,25 EUR / 1 m3 TUV.",
      "Tri roky naspäť, pred vybudovaním domovej kotolne, sme ju u CZT mali za 16,33 – 16,91 – 15,83",
      "U vás koľko?",
    ],
  },
];

/** Exact financial figures for story 07 — display as editorial blocks, do not rewrite */
export const story07Data = {
  context: "Ako príklad uvádzam 8 podlažný dom, 3 vchody, 69 bytov:",
  mainComparison: [
    {
      value: "42 198 EUR",
      label: "cena tepla od CZT (UK+TUV) priemer za posledných osem rokov pred spustením domovej kotolne",
    },
    {
      value: "18 015 EUR",
      label: "náklady na tvorbu tepla z vlastnej domovej kotolne (energie + prevádzka)",
    },
  ],
  afterMain: [
    {
      value: "24 183 EUR",
      label: "ročná úspora, ktorá príde na rad po splatení úveru",
    },
    {
      value: "– 5 767 EUR",
      label: "ročná splátka úveru",
    },
    {
      value: "18 416 EUR",
      label: "ročná úspora súčasná",
    },
  ],
  decade: [
    {
      value: "184 160 EUR",
      label: "Úspora za 10 rokov u nás činí 184 160 EUR.",
      isStatement: true,
    },
    {
      text: "V prípade, že by sme po desiatich rokoch investovali do obnovy kotolne hoc aj 50 000 EUR (čo považujem za nadsadané) stále nám ostáva benefit vo výške 134 160 EUR.",
      highlight: "134 160 EUR",
    },
  ],
  tuvIntro: "Nadôvažok uvádzam aj ročnú úsporu nákladov na TUV štvorčlennej domácnosti:",
  tuvComparison: [
    {
      value: "831 EUR",
      label: "56 m3 TUV = teplo od CZT",
    },
    {
      value: "388 EUR",
      label: "64 m3 TUV = teplo z vlasnej domovej kotolne",
    },
    {
      value: "443 EUR",
      label: "ročná úspora na TUV a to pri vyššej spotrebe o 8 m3",
    },
  ],
  tuvDecade:
    "Za desať rokov má u nás štvorčlenná domácnosť možnosť, na teplej vode, usporiť 4 430 EUR.",
  tuvDecadeNote: "(Koľko že je v meste podobných domácností?)",
} as const;

/** Exact price figures for story 08 */
export const story08Data = {
  currentPrices: [
    { value: "4,59 EUR", note: "samotný ohrev „kubíka\" teplej vody" },
    { value: "6,82 EUR", note: "so studenou vodou potrebnou na ohrev TUV" },
    { value: "8,25 EUR / 1 m3 TUV", note: "na kompletku vrátane splátky úveru" },
  ],
  pastPrices: ["16,33", "16,91", "15,83"],
  closing: "U vás koľko?",
} as const;

export function getPribehBySlug(slug: string): Pribeh | undefined {
  return pribehy.find((p) => p.slug === slug);
}

export function getAdjacentPribehy(slug: string) {
  const index = pribehy.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: undefined, next: undefined };
  return {
    // Order is 01 → 08 (oldest to newest)
    prev: index > 0 ? pribehy[index - 1] : undefined,
    next: index < pribehy.length - 1 ? pribehy[index + 1] : undefined,
  };
}
