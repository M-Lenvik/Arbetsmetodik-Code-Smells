# Kurs: Arbetsmetodik
## Utbildning till Frontend developer på Medieinstitutet
Detta är en uppgift att fixa fel i en tilldelad kod. Se uppgiftsbeskrivning nedan.

Skapad av **Marie Lenvik** <br>
https://github.com/M-Lenvik

## Innehållsförteckning
1. [Beskrivning av sidan](#beskrivning-av-sidan)
2. [Uppgift: Fixa koden](#uppgift-fixa-koden)
3. [Kom igång med projektet](#kom-igång-med-projektet)
4. [Tekniker som använts](#tekniker-som-använts)
5. [Betygskriterier](#betygskriterier)
   1. [För G](#för-g)
   2. [För VG](#för-vg)


## Beskrivning av sidan
<p>Denna sida är skapad för en uppgift som en del i utbildningen till Frontend utvecklare på Medieinstititet. <br>
  Webbsidan är en sida som listar poddar från Sveriges radio. All info som visas på sidan hämtas via API från:
  'https://api.sr.se/api/v2/programs/index?programcategoryid=133&format=json&pagination=false&indent=true&filter=program.archived&filterValue=false'
</p>

## Uppgift: Fixa koden
Uppgiften var att fixa till en rörig kod som från början inte fungerade. <br><br>
**Uppgiftsbeskrivning** <br>
Du har precis fått din första praktikplats på webbyrån Wundermålig AB, och din första uppgift är att fixa till kod som en annan utvecklare lämnat efter sig. Koden håller ungefär samma standard som företagsnamnet.

## Kom igång med projektet
**Installera genom följande:** 
```
npm install
```
```
npm run dev
```
Detta är webbsidan, men titta gärna här för att se sidan live:
[medieinstitutet.github.io/fed24d-arbetsm](https://medieinstitutet.github.io/fed24d-arbetsmetodik-inl-1-M-Lenvik/)
![Arbetsmetodik SR Podcasts](https://github.com/user-attachments/assets/cdc04e75-e6f2-4cd5-96c0-d8372e3739f8)


## Tekniker som använts
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)

![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)

![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white)
![Prettier](https://img.shields.io/badge/prettier-%23F7B93E.svg?style=for-the-badge&logo=prettier&logoColor=black)


## Betygskriterier
### För G
- [x] Få projektet att funka
- [x] CSS till Sass
- [x] Enhetlig namngivning i CSS:en
- [x] Konvertera till TypeScript
- [x] Enhetlig kodkvalitet
- [x] Mobilvyn
- [x] Språk
- [x] Rensa loggning
- [x] Dokumentation
- [x] Tillgänglighet (bilder)
- [x] Refaktorera funktioner
- [x] Eliminera onödig kod
- [x] Rensa bort kod som inte ska sättas
- [x] Refaktorera namngivning

### För VG
- [x] Rätt sak på rätt plats
- [x] Hantera loggning på ett effektivt sätt
- [x] Gör en tillgänglighetsgranskning av sidan
- [x] Utnyttja features i Sass i CSS:en
- [x] Rensa bort paket som inte används
- [x] Hantera fel i API-anropet
- [x] Gör en Lighthouse-analys
- [ ] Läs av utvecklingsmiljön
- [x] Enhetlig syntax i CSS:en
- [ ] Publicera sidan på GitHub pages

## Betyg
![alt text](<Betyg Arbetsmetodik för utvecklare Code smells.jpg>)

## Lighthousanalys
<p>Det finns fortfarande några varningar kvar, men på det stora hela nöjde jag mig med detta.</p>

![lighthouse](https://github.com/user-attachments/assets/49584546-662d-4346-8706-94d0c46194cc)
