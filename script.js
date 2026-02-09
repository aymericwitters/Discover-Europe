// Landen en hun provincies/gebieden
const landen = {
    "België": ["Antwerpen","Oost-Vlaanderen","West-Vlaanderen","Vlaams-Brabant","Limburg","Henegouwen","Luik","Namen","Luxemburg","Waals-Brabant"],
    "Nederland": ["Noord-Holland","Zuid-Holland","Utrecht","Gelderland","Limburg","Overijssel","Flevoland","Friesland","Drenthe","Groningen","Zeeland","Noord-Brabant"],
    "Frankrijk": ["Île-de-France","Provence-Alpes-Côte d’Azur","Nouvelle-Aquitaine","Occitanie","Auvergne-Rhône-Alpes"],
    "Duitsland": ["Bayern","Nordrhein-Westfalen","Baden-Württemberg","Hessen","Sachsen"]
};

// Info per provincie/gebied
const infoData = {
    // België
    "Antwerpen": "Antwerpen is de grootste haven van België en bekend om diamanten.",
    "Oost-Vlaanderen": "Oost-Vlaanderen heeft Gent, historische stad en Vlaamse Ardennen.",
    "West-Vlaanderen": "West-Vlaanderen ligt aan de kust met Brugge en Oostende.",
    "Vlaams-Brabant": "Vlaams-Brabant heeft Leuven, kastelen en Hageland.",
    "Limburg": "Limburg is groen, Hasselt, Nationaal Park Hoge Kempen.",
    "Henegouwen": "Henegouwen: Charleroi, Bergen (Mons) en bossen van Chimay.",
    "Luik": "Luik: stad Luik en Ardennen voor outdoor activiteiten.",
    "Namen": "Namen: citadel, rivieren Maas en Samber, kastelen.",
    "Luxemburg": "Luxemburg: Ardennen, bossen, Durbuy, perfect voor wandelen.",
    "Waals-Brabant": "Waals-Brabant: Wavre, Waterloo, kastelen en wandelroutes.",
    // Nederland
    "Noord-Holland": "Noord-Holland: Amsterdam, Haarlem, grachten en tulpenvelden.",
    "Zuid-Holland": "Zuid-Holland: Den Haag, Rotterdam, cultuur en strand.",
    "Utrecht": "Utrecht: historische binnenstad en gezellige grachten.",
    "Gelderland": "Gelderland: Veluwe, natuur voor wandelen en fietsen.",
    "Limburg": "Limburg (NL): heuvels, Maastricht, Bourgondische keuken.",
    "Overijssel": "Overijssel: historische steden en mooie natuurgebieden.",
    "Flevoland": "Flevoland: polders, moderne steden zoals Lelystad.",
    "Friesland": "Friesland: meren, wateractiviteiten, Leeuwarden.",
    "Drenthe": "Drenthe: hunebedden, bossen en rustige natuur.",
    "Groningen": "Groningen: studentenstad, musea en levendig centrum.",
    "Zeeland": "Zeeland: stranden, waterwerken en pittoreske dorpjes.",
    "Noord-Brabant": "Noord-Brabant: steden zoals Eindhoven en Breda, gezellige sfeer.",
    // Frankrijk
    "Île-de-France": "Île-de-France bevat Parijs, de Eiffeltoren en musea.",
    "Provence-Alpes-Côte d’Azur": "Bekend om zon, stranden, lavendelvelden en Côte d’Azur.",
    "Nouvelle-Aquitaine": "Bordeaux, wijn, stranden en middeleeuwse stadjes.",
    "Occitanie": "Toulouse, Pyreneeën en prachtige natuurgebieden.",
    "Auvergne-Rhône-Alpes": "Alpen, Lyon en outdoor activiteiten zoals skiën en wandelen.",
    // Duitsland
    "Bayern": "Bayern: München, Alpen, Neuschwanstein en biertradities.",
    "Nordrhein-Westfalen": "NRW: Keulen, Düsseldorf, cultuur en industriegeschiedenis.",
    "Baden-Württemberg": "Stuttgart, Zwarte Woud en mooie natuurgebieden.",
    "Hessen": "Frankfurt, financiële stad en heuvelachtige natuur.",
    "Sachsen": "Dresden en Leipzig, barokke steden en culturele historie."
};

// Toon provincieknoppen voor gekozen land
function toonLand(land) {
    const container = document.getElementById("provincies-container");
    container.innerHTML = ""; // leeg eerst

    landen[land].forEach(item => {
        const btn = document.createElement("button");
        btn.textContent = item;
        btn.onclick = () => toonInfo(item);
        container.appendChild(btn);
    });

    // Reset info-box
    document.getElementById("info").innerHTML = `<p>Kies een provincie/gebied in ${land} 👆</p>`;
}

// Toon info in de box
function toonInfo(item) {
    document.getElementById("info").innerHTML = `<h2>${item}</h2><p>${infoData[item]}</p>`;
}
