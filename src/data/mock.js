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
    image: "/1.png",
    description: "Mit jahrelanger Erfahrung, einem vielfältigen Musik mix und einer einzigartigen Bühnenpräsenz bringt er jede Party zum Kochen!",
    funFact: "Marc Rixx – Der unvergleichliche Party-DJ."
  },
  {
    id: 2,
    name: "Marry",
    genre: "",
    image: "/2.png",
    description: "Die unglaubliche Natürlichkeit, Eleganz und zugleich geballte Power machen MARRY einfach einzigartig- so, wie Ihr unverkennbares Markenzeichen: das Stirnband.",
    funFact: "Dies zu Recht, denn MARRY rockt alles, was ihr in die Quere kommt!"
  },
  {
    id: 3,
    name: "Nancy Franck",
    genre: "",
    image: "/3.png",
    description: "Fetzig wird es auf der Bühne mit der 22-jährigen Sängerin aus Aachen, die mit ihrenSongsPartystimmung pur verbreitet. Mit ihrer quirligen, frechen Art versteht sie es, ihr Publikum mitzureißen und die Korken so richtig knallen zu lassen.",
    funFact: "Nancy Franck, der neue Stern am Partyhimmel!"
  },
  {
    id: 4,
    name: "Bronaldos",
    genre: "",
    image: "/4.png",
    description: "Die drei Jungs heizen ihre Crowd ordentlich ein. Was sie vor allem ausmacht: Partylaune die mitreißt, eine lustige und charmante Art, und eine Bühnenshow die jeden zum mitmachen animiert.",
    funFact: "Bronaldos - Die Backstreet Boys der Insel! Partypower aus dem Herzen von Malle!"
  },
  {
    id: 5,
    name: "Sabbotage",
    genre: "",
    image: "/5.png",
    description: "Sabbotage, dieser Mann steht für schweißtreibende Bühnenshows, Moderation mit dem gewissen Augenzwinkern und vor allen Dingen für eingängige Ballermann-Evergreens wie „Glück auf (Wir müssen aufhören weniger zu trinken)“, „Wir versaufen unser Geld“ oder „Bierpolizei“.",
    funFact: "Sabbotage – Die Original Show aus dem Bierkönig/Mallorca"
  },
  {
    id: 6,
    name: "Minnie Rock",
    genre: "",
    image: "/6.png",
    description: "Minnie Rock verbindet Nostalgie mit modernen Produktionstechniken.",
    funFact: "Explosive Festival-Hymnen und gigantische Drops."
  },
  {
    id: 7,
    name: "Markus Becker",
    genre: "",
    image: "/7.png",
    description: "Seine Show ist ein Garant für gelungene Veranstaltungen wie zB. TV Shows, Apres Ski Partys, Beach-und Mallorca Partys, Oktoberfeste, Zelt-und Hallenveranstaltungen, Diskotheken, Stadtfeste aber auch Galas und Präsentationen",
    funFact: "Das rote Pferd - Wer kennt es nicht?"
  },
  {
    id: 8,
    name: "Stefan Stürmer",
    genre: "",
    image: "/8.png",
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
    price: 0,
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
      { time: "12:00", title: "Doors Open", artist: "Einlass" },
      { time: "13:00", title: "Opening Set", artist: "Sunny Vibes" },
      { time: "15:00", title: "Mainstage", artist: "Luna Beats" },
      { time: "17:00", title: "Mainstage", artist: "DJ Thunder" },
      { time: "19:00", title: "Mainstage", artist: "Bass Master" },
      { time: "21:00", title: "Headline Act", artist: "Fire Starter" },
      { time: "23:00", title: "Closing Set", artist: "Electra Soul" }
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
    title: '§1 Allgemein',
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
a. Eine Ticketanfrage auf der Website stellt noch kein Vertragsangebot dar, sondern lediglich eine Aufforderung zur Abgabe eines Angebots.

b. Das Angebot erfolgt, sobald der Kunde alle erforderlichen Daten in das Bestellformular eingibt und dieses elektronisch an die jeweilige Vorverkaufsstelle übermittelt.

c. Mit der Bestätigung der Ticketbestellung und der Rechnungsstellung durch die Vorverkaufsstelle wird das Angebot angenommen; der Vertrag ist damit geschlossen.

d. Der Ticketkauf ist ausschließlich volljährigen und voll geschäftsfähigen Personen gestattet.

e. Eine Rückgabe gekaufter Tickets ist ausgeschlossen. Auch bei Onlinekäufen besteht kein Widerrufsrecht gemäß § 312g Abs. 2 Satz 1 Nr. 9 BGB.

f. Tickets berechtigen ausschließlich zum Besuch der auf ihnen angegebenen Veranstaltung.

g. Tickets sind nach Erhalt sicher aufzubewahren und vor schädlichen Einflüssen zu schützen. Beschädigte oder unleserliche Tickets verlieren ihre Gültigkeit.
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
a. Zutritt erhält nur, wer ein gültiges Ticket vorlegt. Das Ticket berechtigt zu einem einmaligen Eintritt. Ein Wiedereinlass ist ausgeschlossen.

b. Beim Einlass finden Taschen- und Personenkontrollen statt. Besucher erklären sich mit diesen Kontrollen einverstanden.

c. Der Veranstalter kann Besuchern aus wichtigem Grund den Zutritt verweigern, insbesondere bei:
- Mitführen verbotener Gegenstände
- starkem Alkohol- oder Drogeneinfluss
- rassistischen, sexistischen oder menschenverachtenden Äußerungen
- Verstößen gegen Jugendschutzbestimmungen

d. In diesen Fällen verliert das Ticket seine Gültigkeit; eine Erstattung erfolgt nicht.

e. Zutritt haben grundsätzlich nur Erwachsene ab 18 Jahren. Jugendliche ab 16 Jahren nur mit Begleitperson und Muttizettel.
`
  },

  {
    title: '§6 Verbotene Gegenstände',
    content: `
Verboten sind insbesondere:
- Glasflaschen und Glasbehälter
- Waffen jeglicher Art
- Pyrotechnik, Fackeln, Feuerwerkskörper
- Drohnen
- Tiere
- politische, religiöse oder kommerzielle Werbemittel
- sonstige gefährliche Gegenstände

Der Veranstalter ist berechtigt, verbotene Gegenstände einzuziehen oder die Mitnahme zu verweigern.
`
  },

  {
    title: '§7 Hausrecht',
    content: `
Das Hausrecht wird durch den Veranstalter und das beauftragte Personal ausgeübt.

Besucher haben den Anweisungen des Personals Folge zu leisten.

Bei Verstößen kann der Besucher vom Gelände verwiesen und mit einem Hausverbot belegt werden. Eine Rückerstattung des Ticketpreises erfolgt nicht.
`
  },

  {
    title: '§8 Veranstaltungsabsage und Abbruch',
    content: `
a. Wird die Veranstaltung vor Beginn abgesagt, wird der Ticketpreis ohne Gebühren erstattet.

b. Die Veranstaltung findet grundsätzlich bei jeder Witterung statt.

c. Bei Abbruch aufgrund höherer Gewalt besteht kein Anspruch auf Rückerstattung.

d. Programmänderungen oder der Ausfall einzelner Künstler berechtigen nicht zur Rückerstattung, solange der Gesamtcharakter der Veranstaltung erhalten bleibt.
`
  },

  {
    title: '§9 Gesundheitsgefahren durch Lautstärke',
    content: `
Hohe Lautstärke kann zu Hörschäden führen.

Der Veranstalter empfiehlt ausdrücklich die Nutzung von Ohrstöpseln.

Jeder Besucher ist selbst verantwortlich für seine Aufenthaltsdauer und Position vor den Bühnen.
`
  },

  {
    title: '§10 Bild- und Tonaufnahmen',
    content: `
a. Erlaubt sind nur Mobiltelefone mit Kamerafunktion.

b. Professionelle Kameras, Audio-Recorder oder Geräte mit Wechselobjektiven sind verboten.

c. Der Veranstalter ist berechtigt, Bild- und Tonaufnahmen zu erstellen und zu verwerten.

Mit Betreten des Geländes willigt der Besucher unwiderruflich in die Nutzung seines Bildes und seiner Stimme ein.
`
  },

  {
    title: '§11 Haftungsbeschränkungen',
    content: `
Der Veranstalter haftet nur bei Vorsatz oder grober Fahrlässigkeit.

Keine Haftung besteht für verlorene oder beschädigte Gegenstände.

Das Betreten des Geländes erfolgt auf eigene Gefahr.
`
  },

  {
    title: '§12 Verbot des Mitbringens eigener Getränke und Speisen',
    content: `
Das Mitbringen eigener Getränke und Speisen ist grundsätzlich untersagt.

Ausnahmen gelten nur:
- aus medizinischen Gründen mit Nachweis
- für Babys und Kleinkinder in angemessenem Umfang

Unzulässig bleiben:
- Glasbehälter
- Alkohol
- undurchsichtige oder manipulierte Behälter

Beim Einlass finden Kontrollen statt. Bei Verstößen kann der Zutritt verweigert werden.
`
  },

  {
    title: 'Umgang mit Fundsachen',
    content: `
Gefundene Gegenstände sind unverzüglich beim Personal abzugeben.

Nicht abgeholte Fundsachen werden nach Veranstaltungsende an das zuständige Fundbüro übergeben.

Der Veranstalter übernimmt keine Haftung für Fundsachen.
`
  },

  {
    title: 'Tiere',
    content: `
Das Mitführen von Tieren ist untersagt.

Ausgenommen sind gesetzlich anerkannte Assistenzhunde mit gültigem Nachweis.

Der Veranstalter behält sich aus Sicherheits- und Tierschutzgründen weitere Einschränkungen vor.
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
