//arrays zijn handig als je geen specifieke info nodig hebt en objects zijn handiger wanneer je specifiek iets zoekt.
// array is handiger wanneer alles op 1 pagina moet komen staan en een object is handiger als je die persoon op een pagina wil hebben

import { ContinueTag } from "liquidjs"

export const sprekers = {
    "kilian":
    {
        naam: "Kilian Valkhof",
        titel: "The rule of least power",
        url: "kilian",
        conclusie: [
            "Once you learn something, you don't need to learn again, maar er komen wel steeds nieuwe manieren bij om hetzelfde te doen. Ik wil in de toekomst graag meer experimenteren en dingen uitproberen door kleine Codepen-experimentjes te maken. Dit heb ik sowieso tijdens de minor veel gezien en wil dit dus zelf ook gaan doen. Ook ben ik het met Kylian eens dat je eerst zoveel mogelijk met html moet proberen, dan pas overgaat naar CSS als je meer nodig hebt en dan pas overstapt op Javascript."
        ],
        content: [
            "Onze eerste spreker is Kilian Valkhof. Kilian maakt browsers en zit in het Electron Governance Team. Hieronder de stukken uit zijn talk die ik mee wil nemen.",
            "Kilian verteld over the rule of least power. Dit houd in dat je zoveel mogelijk doet met de taal waarmee je begint en dan opbouwt wanneer je niet anders kan. Dus je begint met HTML, gaat naar CSS wanneer je niet verder kan met HTML en kan je niet verder met CSS? Dan ga je verder met Javascript. Ik denk dat hij hier progressive enhancement in gedachten heeft. Ik vind dit een hele fijne manier van werken. Niet alleen is het een manier van toegankelijkheid hanteren, want CSS is over het algemeen veel minder zwaar dan Javascript en wordt meestal ook eerder ingeladen, maar het is ook een soort stappenplan, waarin je eerst begint met het één en dan pas overgaat naar het ander. Dat vind ik persoonlijk fijn, omdat het wat structuur geeft wanneer je werkt aan een project. Dit wil ik dan ook meenemen naar toekomstige projecten."
        ],
        lijst: [
            "Custom Toggles",
            "Datalist",
            "Colorpick",
            "In-page-transistions",
            "Fixed & sticky",
            "Scroll-snap API",
            "Details",
            "Dialog",
            "Container Queries"
        ]
    },
    "fenna":
    {
        naam: "Fenna de Wilde",
        titel: "Toegankelijkheid",
        url: "fenna",
        conclusie: "Ik vond deze talk heel interessant, omdat ze het over allemaal technieken heeft gehad die ik niet echt goed kende. Vasilis heeft me een paar jaar geleden ooit verteld over het gebruik van een Aria-label, maar ik was dit alweer vergeten en wist niet dat er nog zo veel meer was qua Aria-attributes. Fenna heeft me echt geïnspireerd om meer te doen met toegankelijkheid.",
        content: [
            "Fenna liet wat werk zien van zichzelf. Ze maakt hele mooie animaties in haar website. Ze heeft veel verteld over technieken waarmee je de toegankelijkheid kan verbeteren. Ik vind het vet dat ze hiermee bezig is in haar projecten, ondanks dat dat van haar werk niet per se hoeft, maar ze doet het, omdat ze het zelf belangrijk vind. Ik wil dit ook meenemen later. Als je toegankelijkheid vanaf het begin implementeert, dan kan het ook enorm meevallen hoeveel werk het is. En mocht je veel moeten werken met tools en op manieren die de toegankelijkheid in de weg zitten, dan kan je veel oplossen met Aria-Labels.",
            "Ze heeft het gehad over de focus state. Over dat je de focus state visible moet maken voor keyboard gebruikers. Ze heeft het over Aria-attributes gehad. (Accessible Rich Internet Applications) Je hebt Aria-labels. Die geven aan wat iets is. Aria-controls. Hiermee constroleer je verbinding. Aria-expanded, Aria-Live, Aria-atomic. Ik snapte nog niet helemaal wat je met alles kunt doen, ik heb wel een aantal dingen opgeschreven, maar mijn notities zijn niet duidelijk genoeg. Ik vind het wel fijn om te weten wat er allemaal is en ga hier in de toekomst zeker mee werken als het nodig is.",
            "Ze heeft het ook gehad over hoe je bepaalde onderdelen toegankelijk kunt maken in je website. Je kan een carousel bijvoorbeeld toegankelijk maken door de container een rol te geven. De carousel moet ook bestaan uit een section met een aria-roledescription = ‘carousel’, aria-labelledby of aria-label. Bij de slide moet je dan role = group hebben staan. aria-roledescription = ‘slide’ en een aria-labelledby. Ze raad ook af om een ul of li te gebruiken voor een carousel. Het is fijn om deze informatie opgeschreven te hebben zodat ik gericht kan zoeken naar deze technieken. Als je niet weet dat al deze dingen bestaan is het moeilijk om soms antwoord te krijgen op je vraag van hoe je iets moet doen, wanneer je niet echt weet waar je naar zoekt.",
            "Ze heeft het ook gehad over Focus guards, De WAI contrast formule (4,5:1), een minimale font size van 16px en een regellengte van 50 tot 75 tekens. Bij de ALT-tekst moet je het beknopt houden en een correcte semantiek gebruiken.",
            "Op het einde verteld ze wat je nog meer kan doen."
        ],
        lijst: [
            "Skip to content button",
            "Prefers-reduced-motion",
            "Autoplay gepauzeerd maken",
            "Zelf kijken met een screenreader hoe je website ervaren wordt."
        ]
    },
    "jeffrey":
    {
        naam: "Jeffrey Arts",
        titel: "Frontend & Kunst",
        url: "jeffrey",
        conclusie: "Ik heb hier niet per se echt veel uitgehaald qua techniek, maar de talk heeft me wel geïnspireerd om te experimenteren met code, en meer te maken met code dan alleen functionele dingen. Ik weet verder niet zo goed wat ik hier verder over moet vertellen. Ik vond het cool om te zien wat hij heeft gemaakt, mijn notities waren wel heel leeg."
    },
    "nils":
    {
        naam: "Nils Binder",
        titel: "Design & Flexibility",
        url: "nils",
        conclusie: "Ik wil beter nadenken over wat je kan doen met de content wanneer je scherm opeens heel groot wordt, wat doe je met al die witruimte? Dit is eigenlijk het enige wat ik meeneem.",
        content: [
            "Ik kan mijn notities van deze talk niet meer vinden, want dit is de enige talk waarbij ik notities heb gemaakt op mijn computer… Nu weet ik nog wel het een en ander waar hij het over gehad heeft. Ik weet dat Nils allemaal coole projecten liet zijn vanuit het bedrijf waar hij werkt. 9elements heet het.",
            "Nils had het over whitespace. We weten vaak wat we willen doen met de content wanneer een scherm kleiner wordt, maar je hebt tegenwoordig ook veel brede schermen. Er zijn mega veel scherm groottes bijgekomen de afgelopen jaren. Wat doe je met de content wanneer je scherm de hoogte heeft van een doorsnee computer scherm, maar de breedte is zo lang als drie doorsnee schermen bij elkaar. Vaak blijft er heel veel wit over. Nils vind dat dit beter kan. Ik ben het daarmee eens. Het is zonde van de ruimte om die niet te gebruiken wanneer dit misschien wel voordelen kan hebben voor het design en de kwaliteit van de ervaring van de gebruiker."
        ]
    },
    "jeremy":
    {
        naam: "Jeremy Keith",
        titel: "Declarative of imperative code, mindset & culture",
        url: "jeremy",
        conclusie: "Jeremy zijn talk was ik helaas niet bij. Ik heb wel van mijn klasgenoten uitgelegd gekregen wat er ongeveer verteld is. Ik heb het idee dat Jeremy zijn talk heel erg leek qua essentie op die van Kylian. Dat je HTML als basis hebt, CSS maakt het mooi en voegt wat toe en Javascript geeft net even wat meer kracht aan je website. Ik haal hier dus een beetje hetzelfde uit als de talk van Kylian. Na Jeremy gezien te hebben op CSS-day vind ik het wel extra jammer dat ik hem gemist heb, niet alleen is hij super slim, hij is ook mega grappig!"
    },
    "julia":
    {
        naam: "Julia Miocene",
        titel: "Animeren met pure CSS",
        url: "julia",
        conclusie: "Ik ga al deze technieken zeker meenemen naar toekomstige experimentjes en vond het cool om te zien wat je allemaal kan doen met CSS.",
        content: [
            "Julia maakt hele coole pure CSS animaties en artworks. Ze heeft het over verschillende technieken gehad waarmee je vormen kunt maken in CSS. Met de border-radius kan je al heel wat bereiken. (dit had ik stiekem al van Sanne geleerd), met de filter ‘drop-shadow’ kan je outlines maken. Je kan ook verschillende masks gebruiken.",
            "Als je een karakter wilt maken, dan bestaat die uit verschillende onderdelen. Je moet onderdelen die aan elkaar zitten ook in elkaar plaatsen in de HTML. een arm zit bijvoorbeeld vast aan de torso, dus zit die in de torso. aan die arm, zit natuurlijk een hand. Dus die zit in de arm en in de hand zitten weer vingers. Hierdoor kan je alles relatief van elkaar laten bewegen zonder dat het er raar uit komt te zien. Je kan de joints van je karakter nog beter bepalen door transform-origin te gebruiken. Je kan zelfs spaghetti benen of armen maken, door enorm veel divs in elkaar te doen en die te vormen tot rondjes. Dit heeft ze in meerdere projecten gebruikt en ziet er heel gaaf uit! Ook kan je een soort noise aan je CSS artwork toevoegen met een SVG filter. Hierdoor krijgt het een illustratieve uitstraling."
        ]
    },
    "mariekepim":
    {
        naam: "Marieke de Hoop & Pim Teeuwisse",
        titel: "Toegankelijkheid",
        url: "mariekepim",
        conclusie: "Er zijn veel sprekers die vertellen over toegankelijkheid. Én toch heb ik het idee dat ik uit elke talk weer wat anders haal. Uit de ene talk haal ik techniek en uit de andere talk haal ik richtlijnen. Dat is ook wat ik uit deze talk heb gehaald. Richtlijnen om mij aan vast te houden en die mij zullen helpen met het bouwen van websites die voor iedereen een fijne ervaring zijn.",
        content: [
            "Marieke en Pim begonnen hun talk met de vraag: ‘Wie wordt er graag buitengesloten?’ Natuurlijk was ons antwoord daarop: niemand. Er werd verteld over situationeel buitengesloten worden, tijdelijke beperkingen en permanente beperkingen. Ze hadden het over de vraag: ‘Wie sluit je buiten met de keuzes die je maakt in je design proces?’. Ze vertelde onder meer over de WCAG criteria en over de Big 4.",
            "We kregen nog een aantal vragen mee die we aan onszelf kunnen stellen om de toegankelijkheid te verbeteren en een lijst met dingen die je kan doen om meer inzicht te krijgen in de toegankelijkheid van je website",
            "Hieronder een paar richtlijnen in een lijst"
        ],
        lijst: [
            "Audio control (geluid langer dan 3 seconden moet je kunnen pauzeren / stoppen of het volume van kunnen verlagen)",
            "No keyboard trap (je moet niet in de navigatie vast komen te zitten met je toetsenbord)",
            "Pause, stop, hide (alle bewegende content, knipperende, scrollende of actualiserende elementen moeten paused, stopped of gehide kunnen worden)",
            "Three flashes or below treshhold. (niks mag 3 keer of meer flashen binnen een seconde)"
        ]
    },
    "rosa":
    {
        naam: "Rosa Schuurman",
        titel: "Creative coding & Circuit bending",
        url: "rosa",
        conclusie: "Ik krijg het gevoel dat je soms gewoon maar moet beginnen met experimenteren, zelfs wanneer je nog geen idee hebt hoe of wat. Dit neem ik mee van wat ik gehoord heb over Rosa haar talk.",
        content: [
            "Ik was niet bij deze talk helaas. Ik heb gehoord dat ze hele coole dingen maakte met circuit bending. Ik ben zelf totaal niet technisch aangelegd en zou niet zo snel hardware bij elkaar rapen en zomaar experimenteren hiermee. Ik vind het vet wanneer iemand zoiets kan. In mijn omgeving ken ik een aantal mensen die dit soort dingen doen. (al dan niet op Rosa haar niveau)"
        ]
    },
    "robert":
    {
        naam: "Robert Spier",
        titel: "Werken na je studie",
        url: "robert",
        conclusie: "Ik neem niet per se iets mee uit deze talk. Ik stel deze vragen vaak zelf al aan mezelf, maar ik kan me voorstellen dat niet iedereen dit doet en dat het wel een belangrijk onderwerp is om bij stil te staan.",
        content: [
            "Robert zijn talk ging vooral over wat je gaat doen na je studie. Wil je veel geld verdienen? Wil je iets doen wat je leuk vind, zelfs als dit betekend dat je minder verdiend? Wil je misschien een trainee-ship gaan doen ergens? en wat houd dit in? Robert vroeg ons heel veel. Allemaal vragen die ik mij ook al vaker heb gesteld. Ik vond het wel cool dat we ons een keer bezig hielden met iets wat niet per se met code te maken heeft, maar wel belangrijk is om over na te denken voor ieder van ons."
        ]
    },
    "dewaag":
    {
        naam: "De Waag",
        url: "dewaag",
        conclusie: "was vaag. Ik heb hier niks uitgehaald. Het voelde een beetje als zonde van mijn tijd. Ik heb ook niet echt aantekeningen kunnen maken, want we moesten vooral meedoen met hun experiment. Ik had het idee dat wij meer voor hen deden dan zij voor ons. Aangezien zij onze input nodig hadden voor hun project. Meer kan ik er ook niet over zeggen. (dit was dan ook de enige talk die ik niks vond, en dat is eigenlijk heel positief)"
    },
    "q42":
    {
        naam: "Q42",
        titel: "Projecten van Q42",
        url: "q42",
        conclusie: "Ik vond het leuk om te zien wat Q42 allemaal doet. Ik vond hun project Sensemath echt mega cool! Innovatie op het gebied van toegankelijkheid is heel cool om te zien! Veel van de informatie over toegankelijkheid was wel herhaling qua wat ik al heb gehoord bij andere talks. Ook vond ik andere talks dieper op dat onderwerp ingaan. Wél vond ik het cool om te zien hoe innovatie op het gebied van toegankelijkheid eruit kan zien. En dat je hier vaak verder moet kijken dan naar de manieren en technieken die al bestaan en dit neem ik dan ook mee voor mijn toekomstige projecten.",
        content: [
            "We waren uitgenodigd op locatie bij Q42. Q42 zegt producten te maken die het leven leuker, slimmer en gemakkelijker maakt. Ze hebben het gehad over wat ze belangrijk vinden, namelijk: toegankelijkheid, innovatie en strijden voor de eindgebruiker",
            "Volgens Q42 staat de eindegebruiker altijd centraal en worden er gebruikerstesten gedaan in groepen.",
            "Ze hadden het ook over hun project Sensemath. Waar ze de vraag stelden: ‘Hoe kan je wiskunde doen wanneer je niet kan zien?’. Dit vind ik een heel cool project. Door middel van geluid wisten ze verschillende grafieken na te bootsen. Ook hebben ze verteld over Appt. Een platform die alle apps toegankelijk wil maken en Oculi-mundi. Een project waarin ze een kunst collectie van oude kaarten van een rijke familie op een website hebben gepresenteerd."
        ]
    },
    "bramus":
    {
        naam: "Bramus",
        titel: "View transitions on single page applications",
        url: "bramus",
        conclusie: "Ik moet me nog wat meer verdiepen in het onderwerp en de techniek om hier gebruik van te kunnen maken, maar dat ga ik zeker doen wanneer ik dit wil gaan gebruiken. Voor nu laat ik het nog even liggen.",
        content: [
            "Bramus vertelde ons over een API die de kracht geeft om same page transitions te maken. Bramus raad aan om page transitions pas in te schakelen wanneer de webbrowser dit ondersteund. Daarna kwam er heel veel code. Ik was op een gegeven moment de draad kwijt, ik lette wel op, maar kon niet snel genoeg schrijven om alle code snippets bij de houden en was erg moe die dag. Sanne heeft ons een artikel van Bramus gegeven waarin alles staat uitgelegd. Ook heeft Sanne een project van hem laten zien waarin hij dit gebruikt."
        ]
    },
    "miriam":
    {
        naam: "Miriam Suzanne",
        titel: "Container Queries",
        url: "miriam",
        conclusie: "Ik had hier echt meer uit willen halen en vind het jammer dat ik uiteindelijk heb opgegeven met aantekeningen maken en dat hierdoor ook minder is blijven hangen, maar het is wat het is. Naar mijn idee kan je met container queries wel heel efficiënt de layout bepalen van je website. Hier moet ik alleen in mijn eigen tijd meer onderzoek naar gaan doen. Misschien snap ik dan ook wat er nou precies mis kan gaan met container queries.",
        content: [
            "Miriam vroeg ons: ‘boxes, what do they know?’. Leuke manier om de talk te beginnen! Ze heeft het gehad over de combinatie van fluid en fixed layouts. Ze had het over wat voor informatie containers hebben over hun content. Ze heeft het gehad over dat het soms slim is om je container een naam en een type te geven. En hier houden mijn aantekeningen op. Ik vond het een vrij ingewikkeld verhaal, wel heel interessant. Deze talk kwam na die van Bramus. Ik was al heel moe en mijn concentratie was ook helemaal verdwenen. Ik weet nog dat er loops kunnen ontstaan wanneer je codeert met container queries, maar ik ben vergeten hoe je dit kon fixen. Ik kan me vaag herinneren dat dit niet goed was."
        ]
    }
}

export const vakken = {
    "wafs": 
    {
        naam: "Web App From Scratch",
        titel: "Web App From Scratch",
        url: "wafs",
        content: [
            "Dit vak was een soort intro-vak voor mijn gevoel. We moesten in groepjes werken aan een groepswebsite en een persoonlijke website. We gingen werken met een J-SON file en we moesten gebruik maken van een API. Die twee onderdelen waren helemaal nieuw voor mij. Ook had ik al heel lang niet gecodeerd, dus dit was echt even een opfrisser.",
            "Voor mijn persoonlijke website wist ik niet zo goed wat ik wilde doen. Uiteindelijk heb ik het heel simpel gehouden. Ik probeerde een carousel te maken die uiteindelijk helemaal niet is geworden zoals ik hem wilde hebben. Dit was mijn tweede poging tot het maken van een carousel. Jammer dat het weer een mislukking was, maar hij is wel beter geworden dan de eerste keer, dus dat is een vooruitgang. Ik ben ook gegaan voor een simpele API, om het mezelf niet gelijk te moeilijk te maken, want dat doe ik nogal vaak. Ik heb een kattenplaatjes API gebruikt, omdat ik twee katten heb thuis.",
            "Voor onze gezamenlijke website hebben we stick figures van onszelf gemaakt. Als je op ons klikt zie je informatie uit de J-SON file en als je op de achtergrond klikt van één van ons, dan ga je naar onze persoonlijke website."
        ],
        imgUrl: [
            "/images/wafs.png",
            "/images/wafsAPI.png"
        ],
        imgAlt: [
            "Mijn persoonlijke website",
            "De katten API die ik heb gebruikt"
        ]
    },
    "css": 
    {
        naam: "CSS to the Rescue",
        titel: "CSS to the Rescue",
        url: "css",
        content: [
            "Voor CSS to the rescue was ik super enthousiast! Top vak! Het leukste vak van de hele minor! Jammer dat ik in het midden van deze minor zoveel moeite kreeg met het strakke schema en met mijn energie, hierdoor heb ik bij veel vakken niet alles eruit gehaald wat er in zat. Los daarvan vond ik alle lessen die we gekregen hebben tijdens dit vak echt onwijs waardevol. Voor mijn gevoel was dit één van de weinige vakken die zo gestructureerd was qua het geven van informatie.",
            "Voor dit vak wilde ik een soort pin-ball machine maken. Mijn originele idee was veel interessanter en leuker dan het uiteindelijk is geworden. Ik wilde graag dat je onderdelen van de pinbal machine kon aanpassen. Ook wilde ik de bal wat interessantere animaties laten doen en dat je de flippers kon bewegen met het toetsenbord. In dat opzicht ben ik erg teleurgesteld dat het niet meer is geworden, maar ik vond de kleuren en de animatie van mijn raketje wel heel leuk. Ik ben al blij dat ik er iets van heb kunnen maken. (dit geld een beetje voor al mijn vakken)"
        ],
        imgUrl: [
            "/images/CSS.png"
        ],
        imgAlt: [
            "Mijn CSS project"
        ]
    },
    "browser-technologies": 
    {
        naam: "Browser Technologies",
        titel: "Browser Technologies",
        url: "browser-technologies",
        content: [
            "Ik vond dit vak het minst leuke vak. Puur omdat de opdracht zo ontzettend saai was. Wél was hij heel waardevol, maar ik heb heel lang gedaan over motivatie vinden om vooruitgang te maken en heb het vak uiteindelijk gehaald met heel veel hulp van mijn medestudenten. Mijn website was uiteindelijk heel minimaal en ik heb het vak daarom ook net aan gehaald. Ik heb wel veel geleerd over toegankelijkheid en formulieren. Ik weet ook dat ik van mijn leven niet voor de overheid wil werken, mocht ik ooit het formulier van de belastingdienst moeten coderen.",
        ],
        imgUrl: [
            "/images/browserTech.png"
        ],
        imgAlt: [
            "Mijn Browser Tech website"
        ]
    },
    "hacketon": 
    {
        naam: "Hacketon",
        titel: "Hacketon",
        url: "hacketon",
        content: [
            "Na een paar hele zware weken was het tijd voor de hacketon. Ik had hier veel zin in, omdat ik wist dat ik bij Eva zou zitten. Toen bleek dat ik ook nog bij Niels en Ferhat in het team zat. Ik had nog niet heel veel met hun gesproken, maar ik wist wel dat ik ze heel aardig vind. Deze week was echt mega gezellig en super leuk!",
            "We moesten voor CSS-day een website maken met data van alle CSS-day events van afgelopen jaren. We wilden zoveel mogelijk doen met CSS, met progressive enhancement in gedachten. We hebben uiteindelijk een flip-klok gemaakt die op elk deel van de website informatie toont van dat jaar. Ik vond dit één van de leukste weken van de minor."
        ],
        imgUrl: [
            "/images/hacketon.png"
        ],
        imgAlt: [
            "Ons hacketon project"
        ]
    },
    "human-centered-design": 
    {
        naam: "Human Centered Design",
        titel: "Human Centered Design",
        url: "human-centered-design",
        content: [
            "Voor dit vak moesten we een website maken die geheel trouw was aan de wensen van één individu. Dit individu was iemand met een beperking. Er waren 3 mensen met verschillende beperkingen. Ik mocht iets gaan maken voor Marie. Ze is Doof. Ze houd van films en series en ze zou graag een betere ervaring hebben met de overdracht van informatie over wat er gezegd wordt, wat de emoties zijn of hoe muziek ervaren wordt in een serie of film.",
            "Ze had verteld over de serie ‘The Bear’, waarin veel hectische scenes te zien zijn. De ondertiteling vertaald niet alle geluiden die te horen zijn of alle tekst zoals die gezegd wordt. Het is ook niet altijd duidelijk waar al het geluid vandaan komt. Dit wilde ik zo accuraat mogelijk nabootsen met een scene uit ‘The Bear’."
        ],
        imgUrl: [
            "/images/HCD.png"
        ],
        imgAlt: [
            "Mijn HCD project"
        ]
    },
    "api": 
    {
        naam: "API",
        titel: "API",
        url: "api",
        content: [
            "Voor dit vak moesten we gebruik maken van een API. Ik had ervoor gekozen om de API van het Rijksmuseum te gebruiken en hiermee een doom-scroll pagina te maken zoals Instagram, maar dan met kunstwerken uit het Rijksmuseum. Ik vond dit vak verschrikkelijk moeilijk. Opeens maakten we gebruik van NPM packages, waaronder TinyHTTP en Liquid. Dit was zo nieuw en intimiderend voor mij. Ik had hier nog nooit mee gewerkt en het leek net alsof iedereen het al begreep. Het voelde als een enorme blinde stap waarin ik had gemist hoe we hem hadden gemaakt waardoor ik helemaal vastliep.",
            "Uiteindelijk is mijn opdracht gelukt en heb ik mijn uiterste best gedaan om er iets van te begrijpen, maar door en door snap ik het nog niet. Ik heb ook geleerd dat ik veel eerder vragen moet stellen."
        ],
        imgUrl: [
            "/images/API.png"
        ],
        imgAlt: [
            "Mijn API project"
        ]
    },
    "meesterproef": 
    {
        naam: "Meesterproef",
        titel: "Meesterproef",
        url: "meesterproef",
        content: [
            "Voor de meesterproef hebben wij in samenwerking met de OBA (Mariska) en FDND aan het project Bieb in Bloei gewerkt. FDND had al een design gemaakt. Wij zijn verder gegaan met dat design. Mariska wilde graag seizoensgebonden animaties op de website hebben. Wij hebben er toen voor gekozen om niet alleen animaties toe te voegen, maar ook het design mee te laten veranderen met het seizoen.",
            "Qua design veranderen de kleuren van de website elk seizoen automatisch. We hebben ook een weather API gekoppeld aan de website en hier animaties voor gemaakt. Als het regent, regent het ook op de website. Qua seizoensgebondenheid heb je in de lente bij zonnig weer bloesemblaadjes en in de herfst krijg je herfstblaadjes. We hadden hier graag meer mee gedaan, maar de tijd ging veel sneller dan gehoopt. Al met al waren we super tevreden over wat we geleverd hebben en het allerbelangrijkste: Mariska was ook blij."
        ],
        imgUrl: [
            "/images/meesterproef.png"
        ],
        imgAlt: [
            "Ons Meesterproef project"
        ]
    }
}

export const leerdoelen = {
    "leerdoel1":
    {
        titel:"Meer vragen stellen",
        content: "Ik kom vaak vast te zitten wanneer ik iets moeilijk vind en heb het idee dat ik het dan allemaal alleen moet uitvogelen en trek hierdoor veel te laat aan de bel."
    },
    "leerdoel2":
    {
        titel:"Javascript beter begrijpen",
        content: "de manier van denken in stapjes. Welke stappen zijn er nodig om tot iets te komen in Javascript? Javascript schrijven gaat bij mij totaal niet intuïtief en dit is enorm frustrerend. Hierdoor schrikken veel projecten mij af en ben ik té overweldigd om er mee verder te gaan. Als ik hier nou wat beter in wordt, dan gaan mijn projecten steeds meer vloeien!"
    },
    "leerdoel3":
    {
        titel:"Meer denken aan toegankelijkheid",
        content: "Ondanks de weekly nerds over toegankelijkheid en alle lessen die we hebben gehad, blijft het voor mij nog een beetje vaag hoe ik dit moet toepassen, puur omdat ik het nog niet vaak genoeg zelf heb gedaan. Ik wil hier meer mee bezig zijn met de meesterproef, zodat ik het vanaf het begin kan toepassen bij toekomstige projecten."
    }
}

export const reflectie =
    [
        "Ik begon deze minor super onzeker. Ik had weinig vertrouwen in mijn skills en wist dat het strakke schema mij zwaar zou vallen. Ik was wel erg gemotiveerd om er alles uit te halen wat er uit te halen viel. Ik wilde minder bang zijn voor code.",
        "Ik ben mezelf enorm tegen gekomen en heb veel geleerd over mezelf en van het web. Soms kwam ik niet opdagen uit angst en vermoeidheid, maar ik ben de minor sterk geëindigd door er met de meesterproef elke dag te zijn en dingen uit te proberen die ik hiervoor niet durfde aan te raken. (zoals Javascript)",
        "Ik ontdekte na alle vakken gehad te hebben wat mijn grote blokkades zijn en waar mijn zwakke punten liggen. Ik vroeg te laat om hulp en Javascript vond (vind) ik maar vaag en eng, waardoor ik té lang vast blijf zitten. Ik heb geleerd dat ik niet alles in één keer hoef te begrijpen. Al helemaal niet als het gaat om iets als Javascript. Zoiets moet je gewoon gaan gebruiken en mee oefenen. En hoe vaker je iets ziet en gebruikt, hoe meer en meer het kwartje gaat vallen. Ik kan niet zeggen dat ik een Javascript ster ben geworden, maar die angst die ik voelde is heel veel minder en ik weet nu dat het oké is om vragen te stellen. Niet alleen aan docenten, maar ook aan mijn medestudenten. (die het overigens ook heel leuk vinden om over code te praten)",
        "Ik merk dat mijn hersenen nieuwe wegen aan het maken zijn en dat heb ik al heel lang niet ervaren. Ik denk dat ik al die tijd niet heb begrepen wat leren echt inhoud. Of ik was het een beetje vergeten. Leren betekend niet dat je iets leest of doorneemt en het kwartje gelijk valt en je incapabel bent als dit niet zo is. Je leert door dingen te herhalen en te ervaren. Dit vind ik eigenlijk nog het meest waardevolle wat ik uit de minor gehaald heb.",
        "Ik vind het lastig om te bepalen wat ik nou echt helemaal onder de knie heb en wat niet. Ik ken veel nieuwe technieken, maar ik vind het moeilijk om die zo abrupt uit te schrijven. Naast dat ik mijn eerste twee leerdoelen in mijn ogen gehaald heb had ik nog een leerdoel, namelijk meer bezig zijn met toegankelijkheid. We hebben dit met zijn alle gedaan tijdens de meesterproef. We hebben vanaf het begin toegankelijkheid in ons hoofd gehad tijdens het coderen en het maken van bepaalde keuzes. Dankzij alle talks over toegankelijkheid was het ook veel duidelijker hoe we dit moesten aanpakken.",
        "Ik zou mezelf niet zijn als ik toch het gevoel heb dat ik niet genoeg gedaan heb. Dit heb ik altijd en dit zou een volgend leerdoel kunnen zijn. Minder bang en kritisch zijn op mezelf. Ik kijk om mij heen en zie zo veel coole dingen, en dan voelt het soms nogal als een domper om mijn eigen werk te zien en dit hiermee te vergelijken. Ik heb altijd al een langzame ‘learning curve’ gehad, maar weet wel dat als ik iets eenmaal onder de knie heb, ik er mega goed in kan worden. Ik weet niet of dit ook zo zal zijn met coderen voor het web, maar ik kan het in ieder geval proberen.",
        "Ik heb eigenlijk uit bijna elk vak dingen meegenomen voor de meesterproef. Dankzij WAFS en API heb ik geleerd hoe je informatie uit een API op je website zet en gebruikt. CSS to the Rescue heeft me veel CSS technieken geleerd ik nog niet kende en die nieuw zijn in de CSS universe. Browser Technologies heeft me over progressive enhancement en toegankelijkheid geleerd en HCD liet me out of the box nadenken en experimenteren en overigens ook over toegankelijkheid. Al die dingen zijn ook wel aan bod gekomen tijdens de meesterproef en ik vond ze allemaal heel waardevol.",
    ]

export const toekomst = 
    [
        "Ik heb zin in de toekomst! Het lijkt mij heel vet als het mij lukt om visual designer en front-end-developer te worden. Ik weet in ieder geval wel dat ik wil blijven experimenteren met code. Ik had het er al met medestudenten over dat als ze zin hebben om samen in de vakantie te coderen, dat mij dat heel leuk lijkt. Ik vind animatie heel vet en zou dus graag verschillende manieren van animeren onder de knie willen krijgen.",
        "Tijdens de meesterproef heb ik wat dingen geleerd over canvas. Hier zou ik graag nog meer van willen leren. Ook wil ik meer gebruik maken van NPM packages, omdat dit voor mij nog altijd een best groot vraagteken is. Dit is ook de reden waarom ik mijn weekly nerd met tinyHTTP en Liquid wilde doen, juist omdat ik het nog niet zo goed begrijp. Niels heeft me wederom geholpen om het op te zetten, maar ik voel me niet meer vervelend over het feit dat ik hier voorlopig nog vaak hulp bij nodig ga hebben. CSS blijf ik enorm leuk vinden en wil hier daarom ook meer mee oefenen om zo een CSS pro te worden."
    ]
