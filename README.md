# Procesverslag
Markdown is een simpele manier om HTML te schrijven.  
Markdown cheat cheet: [Hulp bij het schrijven van Markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet).

Nb. De standaardstructuur en de spartaanse opmaak van de README.md zijn helemaal prima. Het gaat om de inhoud van je procesverslag. Besteedt de tijd voor pracht en praal aan je website.

Nb. Door *open* toe te voegen aan een *details* element kun je deze standaard open zetten. Fijn om dat steeds voor de relevante stuk(ken) te doen.





## Jij

<details>
<summary>uitwerken voor kick-off werkgroep</summary>

### Auteur:
Jaclyn Karsseboom

#### Je startniveau:
Blauwe piste

#### Je focus:
Extra aandacht aan de surface plane:
1. States van controls (forms, inputs, links)
2. Advanced positioning: sticky navigatiebalk
3. Formulieren in de footer en op de productpage
4. Productpage bevat een Youtube video
5. Light en dark mode
 
</details>





## Je website

<details>
<summary>uitwerken voor kick-off werkgroep</summary>

### Je opdracht:
https://www.thesill.com/

#### Screenshot(s) van de eerste pagina (small screen): 
Homepagina 
<img src="images/homepage.png" width="375px" alt="homepagina met een overzicht van alle planten">

#### Screenshot(s) van de tweede pagina (small screen):
Productpagina
<img src="images/productpage.png" width="375px" alt="productpagina van een enkel product met een beschrijving van verzorgingstips voor deze plant">
 
</details>




## Breakdownschets (week 1)

<details>
<summary>uitwerken na afloop 2e werkgroep</summary>

### de hele homepagina: 
<img src="images/Homepageschets.png" width="375px" alt="breakdown van de hele homepagina">

### de hele productpagina: 
<img src="images/Productpageschets.png" width="375px" alt="breakdown van de hele productpagina">

### dynamisch deel (bijv menu): 
<img src="images/menu.png" width="375px" alt="breakdown van een dynamisch deel">

### wellicht nog een dynamisch deel (bijv filter): 
<img src="images/cart.png" width="375px" alt="breakdown van nog een dynamisch deel">

</details>





## Voortgang 1 (week 2)

<details open>
<summary>uitwerken voor 1e voortgang</summary>

### Stand van zaken

-dit ging goed- Mijn HTML tot nu toe is netjes en goed leesbaar. Ik heb verschillende elementen in mijn code staan, zoals lists, input forms en select forms. Ik heb de bronnen van hoe ik deze correct moest coderen opgeslagen in de bronnenlijst.

-dit was lastig- Ik vind het spannend om mijn werk te laten zien aan anderen en ik ben bang dat ik niet ver genoeg ben gekomen. Ik heb wat moeite met op gang komen als het gaat om waar ik moet beginnen met CSS.

### voortgang 1 homepagina: 
<img src="images/voortgang1home.png" width="375px" alt="homepagina met alleen html">

### voortgang 1 productpagina: 
<img src="images/voortgang1product.png" width="375px" alt="productpagina met alleen html">

### Verslag van meeting

- Een paragraph in een anchor is dubbelop.
- De call to action knop moet een link zijn, geen button. Buttons zijn meer voor een form submitten en links leiden naar een andere pagina.
- Hamburger menu uit laten klappen is complex, google hamburger menu en ga de voorbeelden namaken.
- Zet de producten en het about gedeelte in UL's i.p.v. articles: dan wordt er al een beetje styling voor jou gedaan.
- List in flexbox aanpassen naar de gewenste layout: CSS tricks website bekijken.
- Afbeeldingen zet je naast elkaar in grid.
- Voor nu is het gebruik van classes oke, maar voor het eindgesprek moet je zoveel mogelijk CSS selectors hebben.

</details>





## Voortgang 2 (week 3)

<details>
<summary>uitwerken voor 2e voortgang</summary>

### Stand van zaken

-dit ging goed- Mijn HTML heb ik wat netter gemaakt en ik heb alle afbeeldingen toegevoegd. Grid is gelukt in het productenoverzicht op de homepage. Bronnen bewaard in de bronvermelding.

-dit was lastig- Ik vond het lastig om te beginnen met CSS. Mijn tweede pagina is nu door de war doordat ik de CSS heb gemaakt met de hoofdpagina in gedachte: ik weet niet hoe dat moet (moet ik dan met classes werken?). Daarnaast lukt het niet om de buttons kan stylen. Lastig om het hamburger menu te maken en het menu met flexbox naast elkaar te zetten.

### voortgang 2 homepagina: 
<img src="images/voortgang2home.png" width="375px" alt="homepagina met een begin aan CSS">

### voortgang 2 productpagina: 
<img src="images/voortgang2product.png" width="375px" alt="productpagina door de war">

### Verslag van meeting

- De tweede HTML pagina in CSS aanroepen door een class te gebruiken in de body van de productpagina (section:nth-of-type(2) {}). 
- Menu elementen naast elkaar zetten met behulp van flexbox (kijken naar codepen oefeningen met responsive menuutjes). 
- Buttons stylen in de states. 
- Een werkende carousel (sliden door productfoto's op de tweede pagina) is bijzaak en niet verplicht (overflow x-scroll ???> div waar plaatjes instaan die buiten het scherm vallen, dan kan je heen er weer scrollen door de afbeeldingen). 
- Read me verslag moet aangevuld worden voor het eindgesprek.

</details>





## Toegankelijkheidstest (week 4)

<details>
<summary>uitwerken na test in 8e voortgang</summary>

### Bevindingen
Lijst met je bevindingen die in de test naar voren kwamen:

#### Spelen met een screenreader 

<img src="images/screenreader.png" width="375px" alt="screenshot van de homepagina met een screenreader">

Met een screenreader krijg je minder snel een overzicht van wat er allemaal op de website te vinden is, daarnaast krijg je met de toetscombinaties een heel andere interactie met een website.

1. De stem van de voiceover van mijn computer zelf is Engels, maar mijn HTML is in het Nederlands ingesteld. Ik hoor dus 2 verschillende stemmen en talen door elkaar heen terwijl de content van mijn website Engels is. 
2. Ik heb gifs en icons op de homepage zijn die worden beschreven als een unlabelled image missing image description.
3. De screenreader noemt op de productpage alle knoppen binnen de YouTube video speler op.

1. <html lang="nl"> moet naar het Engels verandert worden.
2. Alt tekst toevoegen bij alle afbeeldingen of voor de minder belangrijke images die meer als decoratie dienen ervoor zorgen dat die images genegeerd worden door screenreaders.
3. Andere video speler of die buttons/links disablen zodat ze niet opgesomd worden door de screenreader.

#### Muis en toetsenbord

<img src="images/tab.png" width="375px" alt="screenshot van de homepagina waar je doorheen kunt tabben">

1. De homeknop wordt niet zichtbaar met een border tijdens het tabben.
2. Heel andere interactie met de website: ieder klikbaar element krijgt een border eromheen zodat je visueel kan zien waar op de website je nu bent.


#### Visuele beperking

<img src="images/bril.JPG" width="375px" alt="testpersoon probeert de website te bedienen met een bril die je zicht beperkt">

1. Diabetic eye disease: vlekjes door het scherm heen. Alles was nog goed leesbaar en de knopjes waren te vinden. Het kostte alleen wat meer moeite.
2. Peripheral field loss: kost veel moeite om te concentreren op de content van de website. Je kan echt alleen in het midden van je field of view scherp zien.
3. Blur: kopjes zijn leesbaar en de afbeeldingen zijn wel duidelijk. De knoppen zijn te onderscheiden maar de tekst in de knoppen zijn onduidelijk. Echter kan ik de paragraphs niet lezen omdat de letters te fijn zijn en verdwijnen in de achtergrond.


#### Concentratieprobleem

<img src="images/ballon.JPG" width="375px" alt="persoon bedient website terwijl zij een ballon in de lucht houden">

Een form invullen tijdens het omhoog houden van een ballon is moeilijk. 
1. De radio buttons zijn vrij klein, lastig eentje uit te kiezen.
2. Het is lastig om iedere optie uit een select form te lezen en er eentje uit te selecteren. 
3. Het typen ging heel langzaam omdat je maar 2 letters per keer kan intypen anders valt je ballon alweer op de grond.

</details>





## Voortgang 3 (week 4)

<details>
<summary>uitwerken voor 3e voortgang</summary>

### Stand van zaken
-dit ging goed- Flexbox gebruikt om de menubar elementen naast elkaar te krijgen en het menu scrollt nu ook mee. De tweede pagina is ook bijna zo goed als af. 

-dit was lastig- Passende states verzinnen en deze goed werkend laten maken. Verschillende soorten forms stylen. Beginnen aan de Javascript interactie.

### voortgang 3 homepagina: 
<img src="images/voortgang3home.png" width="375px" alt="homepagina helemaal af">

### voortgang 3 productpagina: 
<img src="images/voortgang3product.png" width="375px" alt="productpagina vrijwel af">

### Verslag van meeting

- Position zo min mogelijk gebruiken.
- Radio buttons stylen zodat het meer bij de huisstijl past.
- De website W3Schools gebruiken: scrollen door de verschillende elementen die je kunt aanpassen.
- Website ziet er al uit als een professionele website, alleen is hij nog niet responsive, hij ziet er niet uit als je het scherm breder maakt.
- Verschillende soorten content, goed gebruik gemaakt van allerlei forms.

</details>





## Eindgesprek (week 5)

<details>
<summary>uitwerken voor eindgesprek</summary>

### Stand van zaken
-waar ik blij mee ben- 
- Experimenteren met verschillende formulieren vond ik leuk en interessant om te doen, veel verschillende input types ontdekt.
- Menubalk is goed gelukt: elementen naast elkaar gezet met flexbox en dat hij plakt aan de bovenkant tijdens het scrollen.

-wat lastig was-
- Beginnen met CSS: de juiste selectoren gebruiken en zo min mogelijk classes in de code zetten. Ik was bang dat mijn code daardoor slordig eruit zou zien.
- Javascript.

### Screenshot(s)

### eindopracht homepagina: 
<img src="images/finalhome.png" width="375px" alt="homepagina helemaal af">

### eindopracht productpagina: 
<img src="images/finalproduct.png" width="375px" alt="productpagina helemaal af">

### eindopracht uitklapmenu:
<img src="images/finalmenu.png" width="375px" alt="menu helemaal af">

### eindopdracht darkmodus:
<img src="images/finaldarkhome.png" width="375px" alt="hoofdpagina in dark modus">

### validatie:
<img src="images/cssvalid.png" width="375px" alt="css is helemaal ok!">
<img src="images/htmlwarning.png" width="375px" alt="html heeft een aantal warnings die ik niet wist op te lossen">

</details>





## Bronnenlijst

<details open>
<summary>continu bijhouden terwijl je werkt</summary>

Nb. Wees specifiek ('css-tricks' als bron is bijv. niet specifiek genoeg).

1. bron 1 - comments in html: https://html.com/tags/comment-tag/
2. bron 2 - image tag: https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML
3. bron 3 - links, inputs en buttons: https://www.youtube.com/watch?v=bFvjE4ZRtSE&list=PLZlA0Gpn_vH9xx-RRVNG187ETT2ekWFsq&index=9
4. bron 4 - input type select: https://www.w3schools.com/tags/att_select_form.asp
5. bron 5 - radio buttons: https://www.w3schools.com/html/html_forms.asp 
6. bron 6 - font: https://fonts.adobe.com/fonts/tenez?mv=affiliate&mv2=red
7. bron 7 - video in html: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/video en https://www.w3schools.com/html/html_youtube.asp 
8. bron 8 - button voor screen readers: https://codepen.io/jaclynck-the-typescripter/pen/VwMwVqX 
9. bron 9 - forms stylen: https://www.w3schools.com/css/css_form.asp
10. bron 10 - styling input buttons: https://www.w3schools.com/css/css_form.asp 
11. bron 11 - button styling: https://fdossena.com/?p=html5cool/buttons/i.frag 
12. bron 12 - color input types, range input types en optgroup: https://www.youtube.com/watch?v=AryZSCeKU9Y&list=WL&index=38&t=8s 
13. bron 13 - scroll to bottom met id tag: https://www.w3docs.com/snippets/html/how-to-create-an-anchor-link-to-jump-to-a-specific-part-of-a-page.html
14. bron 14 - sticky menubar: https://www.w3schools.com/howto/howto_js_navbar_sticky.asp
15. bron 15 - h1 state met de hover underline: https://codepen.io/shooft/pen/yLOdLBg?editors=0100
16. bron 16 - menu flexbox: https://css-tricks.com/snippets/css/a-guide-to-flexbox/
17. bron 17 - icon naast heading: https://stackoverflow.com/questions/11701311/logo-image-and-h1-heading-on-the-same-line 
18. bron 18 - uitklapbare hamburger menu: https://codepen.io/jaclynck-the-typescripter/pen/VwMwVqX  
19. bron 19 - styling radio buttons: https://css-tricks.com/zero-trickery-custom-radios-and-checkboxes/ 
20. bron 20 - light/dark mode: https://codepen.io/shooft/pen/ExXRLXL 

</details>