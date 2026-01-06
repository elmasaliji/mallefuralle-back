// Mock Data for Malle für Alle Event - UPDATED WITH NEW CONTENT

export const eventData = {
  name: "MALLE FÜR ALLE",
  date: new Date("2026-05-09T14:00:00"),
  location: "Seestern-Panoramabühne, Zeulenroda-Triebes",
  tagline: "Sonne, Sangria & Spaßattacken!",
  description: "Bereit für Urlaubsfeeling ohne Gepäckstress? Bei Malle für Alle bekommst du Mallorca-Vibes direkt vor die Haustür geliefert – Sonnenschein-Modus an, gute Laune inklusive!",
  fullDescription: "Natürlich lassen wir dich nicht nur rumsitzen: Es gibt abgefahrene Spiele, bei denen garantiert niemand trocken bleibt, Aktivitäten, die selbst den größten Partymuffel wachrütteln, und Überraschungen, die so unerwartet sind wie ein Sangria-Eimer im Wohnzimmer. Ob du der Party-Profi bist, der alles mitnimmt, oder einfach nur fürs Mallorca-Feeling kommst – hier wird jeder zum Inselhelden. 🍹🌞 Also schnapp dir deine Freunde und komm vorbei – Malle für Alle macht jede Party zum Urlaubsupgrade!"
};

export const socialLinks = {
  instagram: "https://www.instagram.com/mallefueralle_event/",
  tiktok: "https://www.tiktok.com/@mallefueralle0",
  ticketShop: "https://mixerei.ticket.io/2g9WzE3P/"
};

export const artists = [
  {
    id: 1,
    name: "DJ Set Marc Rixx",
    genre: "",
    image: `${process.env.PUBLIC_URL}/1.png`,
    description: "Mit jahrelanger Erfahrung, einem vielfältigen Musik mix und einer einzigartigen Bühnenpräsenz bringt er jede Party zum Kochen!",
    funFact: "Marc Rixx – Der unvergleichliche Party-DJ."
  },
  {
    id: 2,
    name: "Marry",
    genre: "",
    image: `${process.env.PUBLIC_URL}/2.png`,
    description: "Die unglaubliche Natürlichkeit, Eleganz und zugleich geballte Power machen MARRY einfach einzigartig- so, wie Ihr unverkennbares Markenzeichen: das Stirnband.",
    funFact: "Dies zu Recht, denn MARRY rockt alles, was ihr in die Quere kommt!"
  },
  {
    id: 3,
    name: "Nancy Franck",
    genre: "",
    image: `${process.env.PUBLIC_URL}/3.png`,
    description: "Fetzig wird es auf der Bühne mit der 22-jährigen Sängerin aus Aachen, die mit ihrenSongsPartystimmung pur verbreitet. Mit ihrer quirligen, frechen Art versteht sie es, ihr Publikum mitzureißen und die Korken so richtig knallen zu lassen.",
    funFact: "Nancy Franck, der neue Stern am Partyhimmel!"
  },
  {
    id: 4,
    name: "Bronaldos",
    genre: "",
   image: `${process.env.PUBLIC_URL}/4.png`,

    description: "Die drei Jungs heizen ihre Crowd ordentlich ein. Was sie vor allem ausmacht: Partylaune die mitreißt, eine lustige und charmante Art, und eine Bühnenshow die jeden zum mitmachen animiert.",
    funFact: "Bronaldos - Die Backstreet Boys der Insel! Partypower aus dem Herzen von Malle!"
  },
  {
    id: 5,
    name: "Sabbotage",
    genre: "",
    image: `${process.env.PUBLIC_URL}/5.png`,

    description: "Sabbotage, dieser Mann steht für schweißtreibende Bühnenshows, Moderation mit dem gewissen Augenzwinkern und vor allen Dingen für eingängige Ballermann-Evergreens wie „Glück auf (Wir müssen aufhören weniger zu trinken)“, „Wir versaufen unser Geld“ oder „Bierpolizei“.",
    funFact: "Sabbotage – Die Original Show aus dem Bierkönig/Mallorca"
  },
  {
    id: 6,
    name: "Minnie Rock",
    genre: "",
    image: `${process.env.PUBLIC_URL}/6.png`,

    description: "Minnie Rock verbindet Nostalgie mit modernen Produktionstechniken.",
    funFact: "Explosive Festival-Hymnen und gigantische Drops."
  },
  {
    id: 7,
    name: "Markus Becker",
    genre: "",
   image: `${process.env.PUBLIC_URL}/7.png`,

    description: "Seine Show ist ein Garant für gelungene Veranstaltungen wie zB. TV Shows, Apres Ski Partys, Beach-und Mallorca Partys, Oktoberfeste, Zelt-und Hallenveranstaltungen, Diskotheken, Stadtfeste aber auch Galas und Präsentationen",
    funFact: "Das rote Pferd - Wer kennt es nicht?"
  },
  {
    id: 8,
    name: "Stefan Stürmer",
    genre: "",
    image: `${process.env.PUBLIC_URL}/8.png`,

    description: "Zwischen dem Rauschen der Wellen, flirrenden Lichtern und dieser besonderen Mischung aus Freiheit, Leichtigkeit und Sommergefühl. Laut Stefan Stürmer hat der liebe Gott uns eine Insel geschenkt. Du fühlst, du bist gekommen um zu bleiben.",
    funFact: "Mit „Eine Meile“ präsentiert Stefan Stürmer einen Song, der das Lebensgefühl an der Mallorca-Promenade einfängt."
  }
];

export const tickets = [
  {
    id: 1,
    name: "Economy Class",
    price: 19.40,
    description: "Dein Einstieg ins Malle-Feeling",
    fullDescription: "Dieses Ticket berechtigt eine erwachsene Person zum Eintritt zur Veranstaltung. Es gilt für den gewählten Termin und ist nicht übertragbar. Bitte halte beim Einlass dein Ticket (digital oder ausgedruckt) bereit.",
    features: [
      "Eintritt für 1 Erwachsenen",
      "Zugang zu allen regulären Bereichen der Veranstaltung",
      "Unterstützung durch das Servicepersonal vor Ort",
      "Shuttle Service zum Veranstaltungsgelände"
    ],
    hints: [
      "Gültig nur am gebuchten Datum",
      "Keine Ermäßigungen enthalten",
      "Rückgabe oder Umtausch je nach Veranstalterbedingungen"
    ],
    available: true,
    popular: false,
    dateRange: "10.12.2025 — 28.02.2026"
  },
  {
    id: 2,
    name: "Business Class",
    price: 29.40,
    description: "Front-of-Stage & Priority Einlass",
    fullDescription: "Dieses Ticket berechtigt eine erwachsene Person zum Eintritt zur Veranstaltung und gewährt zusätzlich Zugang zum exklusiven Front-of-Stage-Bereich direkt vor der Bühne. Mit diesem Ticket profitierst du außerdem von einem schnelleren Einlass über einen separaten Zugang.",
    features: [
      "Eintritt für 1 Erwachsenen",
      "Zugang zum Front-of-Stage-Bereich",
      "Schneller Einlass über den bevorzugten Zugang",
      "Zugang zu allen regulären Bereichen der Veranstaltung",
      "Unterstützung durch das Servicepersonal vor Ort",
      "Shuttle Service zum Veranstaltungsgelände"
    ],
    hints: [
      "Gültig nur am gebuchten Datum",
      "Nicht übertragbar",
      "Keine Ermäßigungen enthalten",
      "Rückgabe oder Umtausch je nach Veranstalterbedingungen"
    ],
    available: true,
    popular: true,
    dateRange: "10.12.2025 — 28.02.2026"
  },
  {
    id: 3,
    name: "First Class",
    price: 199.40,
    priceText: "VIP",
    description: "Das ultimative VIP-Erlebnis",
    fullDescription: "Dieses VIP-Ticket bietet einer erwachsenen Person ein außergewöhnliches Veranstaltungserlebnis mit zahlreichen exklusiven Vorteilen – von bevorzugtem Einlass bis zu besonderen Begegnungen mit ausgewählten Künstlern.",
    features: [
      "Priority Check-in über den bevorzugten VIP-Eingang",
      "Zugang zum VIP-Loungebereich mit komfortabler Atmosphäre und perfekter Sicht auf die Bühne",
      "Free Sangria im Faneimer (no Limit)",
      "LED-Fanpaket zur Abholung am Einlass",
      "Meet & Greet mit ausgewählten Künstlern der Veranstaltung",
      "Zugang zu allen regulären Bereichen der Veranstaltung",
      "Betreuung durch das VIP-Servicepersonal",
      "Shuttleservice zum Veranstaltungsgelände"
    ],
    hints: [
      "Gültig nur am gebuchten Datum",
      "Nicht übertragbar",
      "Inhalte des VIP-Pakets können je nach Künstler und Veranstaltung leicht variieren",
      "Rückgabe oder Umtausch gemäß den Bedingungen des Veranstalters"
    ],
    available: true,
    popular: false,
    dateRange: "10.12.2025 — 28.02.2026"
  }
];

export const shuttleService = {
  hinfahrt: [
    { stop: "Zeulenroda Unterer Bahnhof", times: ["11:45", "13:45", "15:45"] },
    { stop: "Markt Zeulenroda", times: ["12:00", "14:00", "16:00"] },
    { stop: "Ankunft Seesternbühne", times: ["12:15", "14:15", "16:15"] }
  ],
  rueckfahrt: {
    info: "Rückfahrt wird noch bekannt gegeben",
    note: "Voraussichtlich 3 Fahrten - auch für Nachteulen!"
  }
};

export const faqData = [
  {
    question: "Gibt es eine Abendkasse?",
    answer: "Falls nicht ausverkauft, wird es eine Abendkasse geben. Wir empfehlen jedoch den Vorverkauf, da die Nachfrage hoch ist."
  },
  {
    question: "Was passiert bei schlechtem Wetter?",
    answer: "Das Event findet bei jedem Wetter statt. Große Bereiche sind überdacht oder wettergeschützt."
  },
  {
    question: "Gibt es Parkplätze?",
    answer: "Ja, es stehen Parkflächen in der Nähe bereit. Frühzeitige Anreise wird empfohlen."
  },
  {
    question: "Kann ich bargeldlos zahlen?",
    answer: "Bei all unseren Veranstaltungen ist das bargeldlose Bezahlen möglich, jedoch arbeiten wir auch mit externen Partnern zusammen und diese haben womöglich nicht diese Möglichkeiten. Wir bitten euch dies zu verstehen."
  },
  {
    question: "Mit welchen Überraschungen kann man rechnen?",
    answer: "Lass dich einfach überraschen! Ein Vorbeikommen lohnt sich definitiv. 🎉"
  },
  {
    question: "Wird es typische Malle-Drinks geben?",
    answer: "Natürlich! Nicht nur die legendären Sangria-Eimer wird es geben – zahlreiche weitere Malle-Klassiker warten auf euch. 🍹"
  },
  {
    question: "Wird die Rückfahrt auch spät nachts sichergestellt?",
    answer: "Natürlich! Auch für die Nachteulen hat unser Shuttle einen Platz frei. 🦉"
  },
  {
    question: "Gibt es einen Dresscode?",
    answer: "Mallorca-Outfits sind ausdrücklich willkommen (Hawaiihemden, Luftmatratzen, Spaßkostüme) – aber natürlich kein Muss. Und wer nichts Passendes im Schrank hat: Unser Malle-Merchandise-Stand hat für jeden das Passende!"
  },
  {
    question: "Kann ich mir Merchandise kaufen?",
    answer: "Natürlich! Was wäre Malle für Alle ohne Merchandise? Von LED-Partyhelmen bis zu schrillen Accessoires – wir haben alles! 🌴"
  }
];

export const vorverkaufsstellen = [
  { id: 1, name: "Ticket Center Zeulenroda", address: "Marktplatz 5, 07937 Zeulenroda", plz: "07937" },
  { id: 2, name: "Reisebüro Sonnenschein", address: "Hauptstraße 12, 07937 Zeulenroda", plz: "07937" },
  { id: 3, name: "Tourist Info Greiz", address: "Burgplatz 1, 07973 Greiz", plz: "07973" },
  { id: 4, name: "Ticket Shop Gera", address: "Sorge 5, 07545 Gera", plz: "07545" },
  { id: 5, name: "Event Store Plauen", address: "Postplatz 2, 08523 Plauen", plz: "08523" },
  { id: 6, name: "Touristinfo Schleiz", address: "Neumarkt 2, 07907 Schleiz", plz: "07907" },
  { id: 7, name: "Buchhandlung Jena", address: "Markt 16, 07743 Jena", plz: "07743" },
  { id: 8, name: "Ticket Point Saalfeld", address: "Markt 6, 07318 Saalfeld", plz: "07318" }
];

export const schedule = {
  tag1: {
    name: "09. Mai 2026",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&h=800&fit=crop",
    events: [
      { time: "12:00", title: "Event", artist: "Artist" },
      { time: "13:00", title: "Eventt", artist: "Artist" },
      { time: "15:00", title: "Event", artist: "Artist" },
      { time: "17:00", title: "Event", artist: "Artist" },
      { time: "19:00", title: "Event", artist: "Artist" },
      { time: "21:00", title: "Event", artist: "Artist" },
      { time: "23:00", title: "Event", artist: "Artist" }
    ]
  }
};

export const impressumData = {
  company: "CFE-Veranstaltung UG",
  address: "Hermann-Kiese-Straße 4, 99098 Erfurt",
  phone: "+49 157 88509144",
  email: "info@mallefueralle.de",
  ceo: "Christopher Finholdt",
  register: "HRB 521604, Amtsgericht Jena",
  vatId: "DE366443410",
  additionalSections: [
    {
      title: "Haftung für Inhalte",
      content: "Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.\n\nVerpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen."
    },
    {
      title: "Haftung für Links",
      content: "Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.\n\nEine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen."
    },
    {
      title: "Urheberrecht",
      content: "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.\n\nSoweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen."
    }
  ]
};

export const datenschutzData = {
  lastUpdated: "01.01.2025",
  sections: [
    {
      title: "1. Datenschutz auf einen Blick",
      content: "Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können."
    },
    {
      title: "2. Datenerfassung auf dieser Website",
      content: "Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum entnehmen."
    },
    {
      title: "3. Ihre Rechte",
      content: "Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger."
    }
  ]
};


export const agbData = [
  {
    title: '§1 Allgemeine Geschäftsbedingungen für Veranstaltungen der CFE- Veranstaltung UG',
    content: `
Allgemeine Geschäftsbedingungen für Veranstaltungen der CFE-Veranstaltung UG.

Diese Allgemeinen Geschäftsbedingungen (im Folgenden „AGB“) gelten für die Nutzung des Online-Angebots sowie für sämtliche Veranstaltungen der CFE-Veranstaltung UG, Hermann-Kiese-Straße 4, 99098 Erfurt (im Folgenden „Veranstalter“).

Sie regeln alle daraus entstehenden vertraglichen Beziehungen mit Nutzern und Kunden und finden sowohl auf den Erwerb von Eintrittskarten als auch auf den Besuch der vom Veranstalter organisierten Events Anwendung.

Der Ticketverkauf erfolgt über ticket i/o GmbH oder Reservix GmbH (nachfolgend „Ticketverkäufer“). Beim Kauf von Eintrittskarten gelten zusätzlich die AGB des jeweiligen Ticketverkäufers.

Darüber hinaus ist die Hausordnung der jeweiligen Veranstaltungsstätte verbindlich. Die Gültigkeit dieser AGB beginnt mit dem Kauf oder Besitz eines Tickets. Mit Erwerb des Tickets erkennt der Käufer diese AGB an.
`
  },

  {
    title: '§2 Geltungsbereich',
    content: `
Diese AGB gelten zwischen dem Käufer eines Tickets, dem Besucher der Veranstaltung und dem Veranstalter.

Durch den Erwerb eines Tickets kommt ein Veranstaltungsvertrag zwischen Kunde und Veranstalter zustande.

Mit dem Kauf eines Tickets oder dem Betreten des Veranstaltungsgeländes akzeptiert der Besucher sämtliche Rechte und Pflichten aus diesen AGB.

Die Veranstaltung findet auf einem ausgewiesenen Open-Air-Gelände an der Rudolf-Weber-Arena in Oberhausen (Stadt Oberhausen) statt.
`
  },

  {
    title: '§3 Vertragsschluss',
    content: `
a. Eine Ticketanfrage auf der Website stellt noch kein Vertragsangebot dar. Sie dient lediglich als  Aufforderung an den Kunden, ein solches Angebot abzugeben. Das Angebot erfolgt erst, wenn der  Kunde alle relevanten Daten in das Bestellformular eingibt und dieses elektronisch an die jeweilige  Vorverkaufsstelle (Paylogic, Pfuelstraße 10997 Berlin) übermittelt. 

b. Mit der Bestätigung der Ticketbestellung und der Rechnungsstellung durch die Vorverkaufsstelle  wird das Angebot angenommen; der Vertrag ist damit geschlossen. 

c. Der Ticketkauf ist ausschließlich volljährigen und voll geschäftsfähigen Personen gestattet. 

d. Eine Rückgabe gekaufter Tickets ist ausgeschlossen. Auch bei Onlinekäufen besteht kein  Widerrufsrecht gemäß § 312g Abs. 2 Satz 1 Nr. 9 BGB. 

e. Tickets berechtigen zum Besuch der auf ihnen angegebenen Veranstaltung. 

f. Tickets sind nach Erhalt sicher aufzubewahren und vor schädlichen Einflüssen (Hitze, Feuchtigkeit,  Sonneneinstrahlung) zu schützen. Beschädigte oder unleserliche Tickets verlieren ihre Gültigkeit und  damit den Anspruch auf Zutritt. 

`
  },

  {
    title: '§4 Weitergabe von Tickets',
    content: `
a. Die Weitergabe oder der Weiterverkauf von Tickets ist untersagt.

b. Bei Verstoß kann der Veranstalter Tickets sperren, den Zutritt verweigern, den Besucher vom Gelände verweisen, künftige Ticketkäufe untersagen, ein Hausverbot aussprechen sowie eine Vertragsstrafe von bis zu 2.000 € verhängen.

c. Die genaue Höhe der Vertragsstrafe wird nach billigem Ermessen festgelegt und kann gerichtlich überprüft werden.

d. Der Verlust von Tickets wird nicht ersetzt.
`
  },

  {
    title: '§5 Einlassregelungen',
    content: `
a. Zutritt zum Gelände erhält nur, wer ein gültiges Ticket vorlegt. Das Ticket berechtigt zu einem  einmaligen Eintritt und nur für eine Person. Ein Wiedereinlass ist ausgeschlossen. Beim Eintritt wird  das Ticket vollständig entwertet. 

b. Beim Einlass finden Sicherheitskontrollen statt. Besucher stimmen einer Durchsuchung von  Taschen sowie einer möglichen Leibesvisitation zu.

c. Der Veranstalter kann Besuchern aus wichtigem Grund den Zutritt verweigern. Wichtige Gründe  sind insbesondere: 

i. Mitführen verbotener Gegenstände (siehe Ziffer 6). 

ii. Offensichtlich starker Alkohol- oder Drogeneinfluss. 

iii. offensichtlich homophobe, sexistische, rassistische oder menschenverachtende Einstellungen. iv. Verstöße gegen Jugendschutzbestimmungen. 

d. In diesen Fällen verliert das Ticket seine Gültigkeit; eine Erstattung erfolgt nicht. e. Der Veranstalter kann die Vorlage eines aktuellen negativen Corona-Tests (max. 24 h alt), eines  gültigen Impf- oder Genesenen-Nachweises sowie Gesundheitskontrollen wie etwa  Temperaturmessungen verlangen, sofern dies nach sorgfältiger Prüfung aufgrund pandemischer  Risiken angemessen erscheint. 

f. Zutritt haben grundsätzlich nur Erwachsene ab 18 Jahren. Jugendliche ab 16 Jahren dürfen das  Event besuchen, wenn sie eine volljährige Begleitperson und ein korrekt ausgefülltes  Erziehungsbeauftragungsformular („Muttizettel“) vorweisen. Kindern und Jugendlichen unter 16  Jahren ist der Zutritt nicht erlaubt – außer beim Familienfestival „Burning Sea“. 

`
  },

  {
    title: '§6 Verbotene Gegenstände',
    content: `
a. Der Veranstalter ist berechtigt, Taschen- und Gepäckkontrollen durchzuführen. Der Zutritt kann  verweigert werden, wenn verbotene Gegenstände mitgeführt werden. 

b. Verboten sind insbesondere: Glasflaschen und -behälter, Tiere, Waffen jeglicher Art, Fackeln,  Pyrotechnik, Trockeneis, Wunderkerzen, Himmelslaternen, Drohnen samt Steuerung, Vuvuzelas,  Megafone, politische, religiöse oder kommerzielle Werbemittel, Banner, Symbole, Flugblätter sowie  alle Gegenstände, die eine Gefahr darstellen. 

c. Der Veranstalter darf verbotene Gegenstände vorübergehend einziehen oder verwahren. 

`
  },

  {
    title: '§7 Hausrecht',
    content: `
a. Das Hausrecht übt der Veranstalter bzw. das beauftragte Personal aus. Besucher müssen den  Anweisungen des Personals unbedingt Folge leisten. Verboten sind unter anderem: i. Mitführen verbotener Gegenstände. 

ii. Ausübung körperlicher Gewalt. 

iii. Werfen von Gegenständen. 

iv. Verrichten der Notdurft außerhalb von Toiletten. 

v. Beschädigung oder Verschmutzung von Anlagen, Wänden oder Gegenständen. vi. Gewerblicher Handel oder Werbung ohne schriftliche Genehmigung. 

vii. Betreten gesperrter Bereiche oder Klettern auf Bühnen, Traversenkonstruktionen usw. viii. Bild- und Tonaufnahmen entgegen Ziffer 8. 

b. Bei Verstößen kann der Besucher vom Gelände verwiesen und mit einem Hausverbot belegt  werden. 

c. In solchen Fällen behält das Ticket keine Gültigkeit; der Ticketpreis wird nicht erstattet. 

`
  },

  {
    title: '§8 Veranstaltungsabsage, Ablauf und Abbruch',
    content: `
a. Wird die Veranstaltung vor Beginn abgesagt, erstattet der Veranstalter den Ticketpreis ohne  Vorverkaufs- und Systemgebühren. 

b. Die Veranstaltung findet grundsätzlich bei jeder Witterung statt. Muss sie aufgrund gefährlicher  Wetterlagen oder wegen höherer Gewalt (z. B. behördliche Anordnung, gerichtliche Entscheidung)  abgebrochen werden, besteht kein Anspruch auf Rückerstattung, sofern kein Vorsatz oder grobe  Fahrlässigkeit des Veranstalters vorliegt. 

c. Haftung für Folgeschäden durch Verschiebung oder Absage ist ausgeschlossen. d. Der Veranstalter hat keinen Einfluss auf Länge, Ablauf oder Inhalte der einzelnen Darbietungen und  übernimmt hierfür keine Haftung. 

e. Programmänderungen, Ausfall einzelner Shows oder Künstler – einschließlich Headlinern – berechtigen nicht zur Rückerstattung, solange der Gesamtcharakter des Events erhalten bleibt.

f. Verspätungen oder Änderungen einzelner Programmpunkte sind möglich und werden über die  Eventhomepage oder Social-Media-Kanäle bekanntgegeben. 

`
  },

  {
    title: '§9 Gesundheitsgefahren durch Lautstärke',
    content: `
a. Dem Besucher ist bewusst, dass insbesondere vor den Bühnen erhöhte Lautstärke herrscht und  dadurch Gesundheitsrisiken wie Hörschäden entstehen können. 
b. Der Veranstalter bemüht sich um geeignete technische Maßnahmen zur Reduzierung von Risiken,  empfiehlt jedoch ausdrücklich die Nutzung von Ohrstöpseln, besonders in Lautsprechernähe. c. Jeder Besucher ist selbst dafür verantwortlich, Aufenthaltsdauer und Position vor den Bühnen den  eigenen Hörgewohnheiten anzupassen. 

`
  },

  {
    title: '§10 Bild- und Tonaufnahmen',
    content: `
a. Auf dem Gelände sind nur Mobiltelefone mit Kamerafunktion erlaubt. Profi-Kameras (z. B.  Spiegelreflex), Geräte mit Zoomobjektiven oder Videofunktion sowie Audio-Recorder sind verboten.  Besuchern kann der Zutritt verweigert werden, wenn sie solche Geräte nicht abgeben möchten. Für  Verluste wird nur bei Vorsatz oder grober Fahrlässigkeit gehaftet. 

b. Alle kommerziellen Bild- und Tonrechte liegen beim Veranstalter. Aufnahmen oder Verbreitung  durch Unbefugte sind untersagt. 

c. Der Veranstalter darf die Veranstaltung fotografieren, filmen, live streamen und Aufnahmen  verwerten. Auch Besucher können darauf erkennbar sein. Mit Betreten des Geländes willigen  Besucher unwiderruflich ein, dass ihr Bild und ihre Stimme ohne Vergütung, zeitlich und örtlich  unbeschränkt, in allen Medien genutzt werden dürfen. 

`
  },

  {
    title: '§11 Haftungsbeschränkungen',
    content: `
a. Die Haftung des Veranstalters sowie seiner gesetzlichen Vertreter und Erfüllungsgehilfen für  Schäden oder vergebliche Aufwendungen ist ausgeschlossen, außer bei Verletzung wesentlicher  Vertragspflichten. In solchen Fällen ist die Haftung auf Vorsatz und grobe Fahrlässigkeit beschränkt. 

b. Unberührt bleiben Ansprüche wegen Schäden an Leben, Körper oder Gesundheit, nach dem  Produkthaftungsgesetz, wegen arglistiger Täuschung oder aufgrund übernommener Garantien. 

c. Die Einschränkungen gelten auch für die persönliche Haftung von Vertretern und  Erfüllungsgehilfen. 

d. Der Veranstalter haftet nicht für verlorene oder beschädigte Gegenstände. Das Parken erfolgt auf  eigenes Risiko. 

e. Teile des Geländes können uneben sein und Stolpergefahr verursachen. Mit dem Ticketkauf  erkennt der Besucher dieses Risiko an. 

`
  },

  {
    title: '§12 Verbot des Mitbringens eigener Getränke und Speisen',
    content: `
a. Grundsätzliches Verbot 
Das Mitführen und Konsumieren von eigenen Getränken und Speisen jeglicher Art ist auf dem  gesamten Veranstaltungsgelände strikt untersagt. Dies umfasst insbesondere alkoholische und nicht alkoholische Getränke, Softdrinks, Energydrinks, Wasser, Glasbehälter, Dosen, Tetra-Paks,  Thermoskannen, Lunchboxen, Snackverpackungen sowie verderbliche Lebensmittel. b. Zweck des Verbots 
Das Verbot dient dem Schutz der Besucher und der Aufrechterhaltung eines geordneten und sicheren  Veranstaltungsablaufs. Gründe hierfür sind u. a.: 

i. Sicherheitsrisiken durch Glasflaschen, Dosen oder ungeprüfte Behältnisse, 

ii. Hygienevorgaben, 

iii. Kontrolle des Alkoholausschanks gemäß gesetzlichen Bestimmungen, 

iv. Vermeidung von Schmuggel von Substanzen, die die Sicherheit gefährden könnten. c. Ausnahmen aus medizinischen Gründen 
Aus gesundheitlichen Gründen dürfen Lebensmittel oder Getränke nur dann mitgeführt werden,  wenn 

i. diese medizinisch zwingend erforderlich sind (z. B. bei Diabetes, Nahrungsmittelunverträglichkeiten, 
Allergien, Stoffwechselerkrankungen) und 

ii. ein geeigneter Nachweis vorgelegt wird, insbesondere: 
– ärztliches Attest, 
– Allergiepass, 
– medizinische Bescheinigung, 

iii. die Lebensmittel oder Getränke in kleinen, nicht-gefährlichen, transparenten Behältern mitgeführt  werden, 

iv. diese ausschließlich für den persönlichen Eigenbedarf bestimmt sind. 
Der Veranstalter kann die Mitnahme verweigern, wenn der Nachweis nicht ausreichend erscheint  oder Sicherheitsbedenken bestehen. 

d. Ausnahmen für Kleinkinder und Säuglinge 
Für Babys und Kleinkinder dürfen in einem angemessenen Umfang mitgeführt werden: i. Babynahrung (Breigläschen, Pulver, Quetschbeutel), 

ii. Wasser oder geeignete Getränke in kunststoffbasierten Babyflaschen, 

iii. Snacks für Kleinkinder. 
Eine Mitnahme ist nur gestattet, wenn das Kind anwesend ist. Der Veranstalter kann unangemessene  Mengen zurückweisen. 

e. Verbote trotz Ausnahmegründen 
Unzulässig bleibt in jedem Fall das Mitbringen von: 

i. Glasbehältern jeglicher Art, 

ii. alkoholischen Getränken, 

iii. selbstgebrauten oder geöffneten Flüssigkeiten, 

iv. Flüssigkeiten in undurchsichtigen oder manipulationsanfälligen Behältern, 

v. Lebensmitteln, die ein Gesundheitsrisiko darstellen können (leicht verderbliche, ungekennzeichnete  oder unverpackte Waren). 

f. Kontrollen beim Einlass 
Beim Zutritt finden Taschen- und Personen-Kontrollen statt. Das Sicherheitspersonal ist berechtigt,  jegliche mitgeführte Speisen oder Getränke unabhängig von der Art einzuziehen oder die Mitnahme  zu untersagen. 

g. Verhalten bei Verstößen 

i. Besuchern, die trotz Verbots Speisen oder Getränke mitführen, kann der Zutritt verweigert werden. ii. Befindet sich der Besucher bereits auf dem Gelände, kann er des Geländes verwiesen werden. iii. Eine Erstattung des Ticketpreises erfolgt in diesen Fällen nicht. 

iv. Der Veranstalter kann eingezogene Gegenstände entsorgen; ein Anspruch auf Rückgabe besteht  nicht. 

h. Mitgebrachte Gegenstände zur späteren Abholung 
Eine Verwahrung verbotener Speisen und Getränke durch den Veranstalter oder das  Sicherheitspersonal erfolgt grundsätzlich nicht. Der Veranstalter übernimmt keinerlei Haftung für  Gegenstände, die der Besucher außerhalb des Einlassbereichs zurücklassen musste. i. Gastronomisches Angebot des Veranstalters 
Zur Versorgung der Besucher stehen ausreichend Verkaufsstände mit diversen Getränken und Speisen  zur Verfügung. Der Veranstalter übernimmt keine Garantie für bestimmte Produkte,  Lebensmittelarten oder Verfügbarkeit. 

j. Sicherheitsvorbehalt 
Der Veranstalter behält sich das Recht vor, das Mitbringen bestimmter Behältnisse oder Lebensmittel  auch über diese Regelung hinaus zu untersagen oder weitere Einschränkungen zu erlassen, sofern  dies aus Sicherheits-, Gesundheits- oder Organisationsgründen erforderlich erscheint. 

`
  },

  {
    title: 'Umgang mit Fundsachen',
    content: `
a. Abgabe von gefundenen Gegenständen 
Besucher sind verpflichtet, auf dem Veranstaltungsgelände gefundene Gegenstände unverzüglich  beim Veranstalter, beim Sicherheitspersonal oder an der offiziellen Fundstelle abzugeben. Eine 
eigenmächtige Aneignung gefundener Gegenstände ist verboten und kann strafrechtliche  Konsequenzen haben. 

b. Verhalten bei Fund von gefährlichen oder sicherheitsrelevanten Gegenständen Werden Gegenstände gefunden, die eine potenzielle Gefahr darstellen könnten (z. B. Waffen, Drogen,  verdächtige Pakete, Pyrotechnik), ist unverzüglich das Sicherheitspersonal zu informieren. In solchen  Fällen dürfen die Gegenstände nicht eigenständig berührt oder transportiert werden. 

c. Dokumentation durch den Veranstalter 
Der Veranstalter dokumentiert abgegebene Fundsachen, soweit dies organisatorisch möglich ist, und  bewahrt sie nach gesetzlichen Vorgaben auf. Eine sofortige Bearbeitung oder Registrierung während  der laufenden Veranstaltung kann aus organisatorischen Gründen eingeschränkt sein. 

d. Aufbewahrung während der Veranstaltung 
Während der Veranstaltungsdauer werden Fundsachen an einer zentralen Fundstelle oder beim  Sicherheitsteam verwahrt. Da die Sicherheit und Funktionalität des Veranstaltungsgeschehens  Vorrang hat, kann keine durchgängige Erreichbarkeit garantiert werden. 

e. Herausgabe von Fundsachen an ihre Eigentümer 
Die Rückgabe von Fundsachen erfolgt nur nach eindeutigem Eigentumsnachweis. Als Nachweise  gelten unter anderem: 

i. detaillierte Beschreibung des Gegenstands, 

ii. Besitznachweise (z. B. Kaufbelege, Seriennummern, Fotos), 

iii. Ausweisdokumente zur Identitätsbestätigung. 

f. Wertvolle Gegenstände 
Wertgegenstände wie Smartphones, Geldbörsen, Schlüssel, Schmuck oder technische Geräte werden  nach Möglichkeit separat und besonders gesichert aufbewahrt. Der Veranstalter übernimmt jedoch  keine Haftung für Verlust, Beschädigung oder Diebstahl von Fundsachen (siehe Haftungsregelungen  der AGB). 

g. Nicht abgeholte Fundsachen nach Veranstaltungsende 
Nach Abschluss der Veranstaltung werden verbleibende Fundsachen gemäß den gesetzlichen  Bestimmungen an das zuständige örtliche Fundbüro weitergeleitet. Ort und Zeitpunkt der Übergabe  variieren je nach Veranstaltungsort. 

h. Ausschluss von Haftung 
Der Veranstalter haftet weder für den Verlust persönlicher Gegenstände noch für Beschädigungen an  Fundsachen. Ebenfalls ausgeschlossen ist eine Haftung für Gegenstände, die vom Besucher außerhalb  des Geländes abgelegt oder deponiert wurden. 

i. Aufbewahrungsfristen 
Die gesetzlichen Aufbewahrungs- und Eigentumsübertragungsfristen richten sich nach dem  Bürgerlichen Gesetzbuch (BGB). Ansprüche des ursprünglichen Eigentümers können nur innerhalb  der gesetzlichen Fristen geltend gemacht werden. 

j. Besondere Einschränkungen für verderbliche oder gefährliche Gegenstände Der Veranstalter ist berechtigt, verderbliche, unhygienische oder gefährliche Gegenstände sofort und  ohne Benachrichtigung zu entsorgen. Ein Anspruch auf Wiederaushändigung oder Entschädigung  besteht nicht. 

k. Abgabe von behördlich relevanten Funden 
Bei Fundsachen, die strafrechtlich relevant sind (z. B. Betäubungsmittel, Waffen), erfolgt die  unverzügliche Übergabe an die zuständige Polizeibehörde. Eine Herausgabe an Besucher ist  ausgeschlossen. 

`
  },

  {
    title: 'Tiere auf dem Veranstaltungsgelände (erweitert & detailliert) ',
    content: `
a. Grundsätzliches Verbot 
Das Mitführen von Tieren jeglicher Art ist auf dem gesamten Veranstaltungsgelände strikt untersagt.  Dies umfasst insbesondere Hunde, Katzen, Nagetiere, Vögel, Reptilien, Nutztiere sowie exotische oder  potenziell gefährliche Tiere. Das Verbot gilt unabhängig davon, ob die Tiere angeleint, in  Transportboxen oder in sonstigen Behältnissen mitgeführt werden. 

i. Lärm- und Stressbelastung durch hohe Lautstärke, Menschenmengen und Licht-/Pyroeffekte,

ii. Gefährdung anderer Besucher durch unvorhersehbares Tierverhalten, 

iii. hygienische Anforderungen des Veranstaltungsgeländes, 

iv. Unfall- und Stolpergefahren, 

v. mögliche Allergierisiken für andere Besucher. 

b. Ausnahme für Assistenzhunde 
Das Verbot gilt nicht für gesetzlich anerkannte Assistenzhunde (z. B. Blindenführhunde, medizinische  Signalhunde, PTBS-Assistenzhunde), sofern folgende Voraussetzungen erfüllt sind: i. Der Hund ist eindeutig als Assistenzhund gekennzeichnet (z. B. durch Kenndecke, Geschirr,  Ausweis). 

ii. Ein offizieller Assistenzhund-Ausweis oder ein vergleichbarer Nachweis wird auf Nachfrage  vorgelegt. 

iii. Der Hund ist gut erzogen, unter Kontrolle des Halters und stellt keine Gefahr dar. iv. Der Hund darf und kann die Veranstaltung unter den gegebenen Umständen sicher begleiten. Der Veranstalter behält sich das Recht vor, die Mitnahme eines Assistenzhundes zu untersagen, wenn  objektive Sicherheits- oder Tierschutzbedenken bestehen (z. B. extreme Lautstärke). c. Ausschluss nicht anerkannter Tiere 
Therapiehunde, emotional-support Animal oder privat ausgebildete Begleithunde gelten nicht automatisch als Assistenzhunde im rechtlichen Sinne. Für diese Tiere besteht weiterhin ein  Mitnahmeverbot. 

d. Haftung des Tierhalters 
Der Halter haftet für sämtliche Schäden oder Störungen, die durch ein mitgebrachtes Tier verursacht  werden, einschließlich Schäden an Personen, Sachen oder Veranstaltungstechnik. e. Tierschutz und Fürsorgepflicht 
Da die Lautstärke, Menschenmenge und Lichtverhältnisse erfahrungsgemäß eine erhebliche  Stressbelastung für Tiere darstellen, rät der Veranstalter ausdrücklich von der Mitnahme jeglicher  Tiere ab – auch in Fällen, in denen die Mitnahme theoretisch zulässig wäre. 

f. Sicherheitsvorbehalt 
Der Veranstalter ist befugt, zusätzliche Einschränkungen zu erlassen oder bestehende Regeln  anzupassen, sofern dies aus Sicherheits- oder Tierschutzgründen erforderlich erscheint.

`
  }
];


export const merchInfo = {
  title: "Malle Merchandise Stand",
  tagline: "Der Merch-Stand, der selbst den Bierkönig nervös macht!",
  description: "Hier bekommst du alles, was du brauchst, um auszusehen, als wärst du gerade frisch aus dem Flieger an der Playa gelandet: Malle-Zubehör, schrille Accessoires, aufblasbare Highlights und natürlich unsere Stars des Abends – LED-Partyhelme, so hell, dass sogar der Mond neidisch wird.",
  fullDescription: "Mit unseren blinkenden Gadgets wirst du zur wandelnden Lichtshow – perfekt, falls jemand dich auf dem Gelände sucht (#LebendeLaterne). Und keine Sorge: Peinlich wird's erst, wenn du NICHTS davon trägst! Also ab zum Stand, eindecken, anstrahlen lassen und ab auf die Tanzfläche – Malle für Alle wird nicht nur zur Party, sondern zur kompletten Mallorca-Transformation! 🌴🍍🎉",
  items: ["LED-Partyhelme", "Hawaiihemden", "Aufblasbare Flamingos", "Sonnenbrillen", "Fan-Shirts", "Sangria-Eimer"]
};
