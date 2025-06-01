const countryName = new URLSearchParams(location.search).get('name')
const flagImage = document.querySelector('.country-details img');
const countryNameH1 = document.querySelector('.details-text-container h1');
const nativeName = document.querySelector('.native-name');
const population = document.querySelector('.population');
const region = document.querySelector('.region');
const subRegion = document.querySelector('.sub-region');
const capital = document.querySelector('.capital');
const topLevelDomain = document.querySelector('.top-level-domain');
const currency = document.querySelector('.currency');
const languages = document.querySelector('.lang');
const borderCountries = document.querySelector('.border-countries');
const themeChanger = document.querySelector('.theme-switcher');



fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
.then((res)=>res.json())
.then((data)=>{
   const countryData = data[0];
   flagImage.src = countryData.flags.svg;
   countryNameH1.innerText = countryData.name.common;

   if(countryData.name.nativeName){
    nativeName.innerText = Object.values(countryData.name.nativeName)[0].common;
   } else{
    nativeName.innerText = countryData.name.common;
   }

   population.innerText = countryData.population.toLocaleString('en-IN');
   region.innerText = countryData.region;
   
   if(countryData.subRegion){
    subRegion.innerText = countryData.subRegion;
   } else{
    subRegion.innerText = countryData.region;
   }

   topLevelDomain.innerText = countryData.tld[0]
   currency.innerText = Object.values(countryData.currencies)[0].name;
   languages.innerText = Object.values(countryData.languages).join(', ');

   if(countryData.capital){
    capital.innerText = Object.values(countryData.capital)
   } else{
    capital.innerText = countryData.name.common;
   }

    if(countryData.borders){
        countryData.borders.forEach((border)=>{
            fetch(`https://restcountries.com/v3.1/alpha/${border}`)
            .then((res)=>res.json())
            .then((data)=>{
                const borderCountry = data[0];
                const borderCountryTag = document.createElement('a');
                borderCountryTag.innerText = borderCountry.name.common;
                borderCountryTag.href = `country.html?name=${borderCountry.name.common}`
                borderCountries.append(borderCountryTag);
            })
        })
    }
})

themeChanger.addEventListener('click',()=>{
    document.body.classList.toggle('dark');
})