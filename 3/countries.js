
let countries = [{"name":{"common":"Moldova","official":"Republic of Moldova","nativeName":{"ron":{"official":"Republica Moldova","common":"Moldova"}}},"region":"Europe","subregion":"Eastern Europe","population":2617820},{"name":{"common":"United States","official":"United States of America","nativeName":{"eng":{"official":"United States of America","common":"United States"}}},"region":"Americas","subregion":"North America","population":329484123},{"name":{"common":"Mayotte","official":"Department of Mayotte","nativeName":{"fra":{"official":"Département de Mayotte","common":"Mayotte"}}},"region":"Africa","subregion":"Eastern Africa","population":226915},{"name":{"common":"Nauru","official":"Republic of Nauru","nativeName":{"eng":{"official":"Republic of Nauru","common":"Nauru"},"nau":{"official":"Republic of Nauru","common":"Nauru"}}},"region":"Oceania","subregion":"Micronesia","population":10834},{"name":{"common":"Mozambique","official":"Republic of Mozambique","nativeName":{"por":{"official":"República de Moçambique","common":"Moçambique"}}},"region":"Africa","subregion":"Eastern Africa","population":31255435},{"name":{"common":"Brazil","official":"Federative Republic of Brazil","nativeName":{"por":{"official":"República Federativa do Brasil","common":"Brasil"}}},"region":"Americas","subregion":"South America","population":211049527}];

countries.forEach(country => {
    let name = country.name.common;
    let region = country.region;
    let subregion = country.subregion;
    let population = country.population;
    console.log(`Country: ${name}, Region: ${region}, Subregion: ${subregion}, Population: ${population}`);
});
