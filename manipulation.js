console.log('Hello world!')

// con la DOM Manipulation noi possiamo alterare il contenuto e l'aspetto
// di una pagina web SUCCESSIVAMENTE al suo caricamento!

// possiamo anche INSERIRE/ELIMINARE contenuti in modo dinamico
// in modo da generare dei contenuti personalizzati a seconda dell'utente!

// Il processo per alterare/inserire contenuti in una pagina caricata
// si compone di DUE FASI:

// un arciere che punta ad una mela cosa fa?
// 1) PRENDE LA MIRA (si seleziona l'elemento corretto)
// 2) SCOCCA LA FRECCIA (si altera/inserisce/elimina l'elemento)

// in JS...
// 1) DOM TRAVERSING
// 2) DOM MANIPULATION

// 1) SELEZIONARE L'ELEMENTO/GLI ELEMENTI DESIDERATI
// tutti i metodi che applicheremo riguarderanno il DOCUMENT
// il document rappresenta la pagina caricata dal browser, completa di indirizzo,
// dominio, tab, elementi HTML...
console.log(document)

// a) con gli id
const mainTitleOfThePage = document.getElementById('main-title')
console.log(mainTitleOfThePage)
// getElementById è un metodo che vi permette di recuperare un riferimento
// ad un elemento della pagina tramite il suo attributo id (che è univoco)
// tornerà UN ELEMENTO oppure NULL (se l'elemento non viene trovato)

// b) con una classe
let allTheArticles = document.getElementsByClassName('content')
console.log(allTheArticles)
// getElementsByClassName è un metodo che vi permette di recuperare tutti
// i riferimenti a tutti gli elementi dotato della stessa class
// class NON È un attributo univoco quindi potreste ricevere molti elementi
// in ogni caso, li tornerà sotto forma di un array: potreste ricevere
// un array vuoto (nel caso la classe specificata non sia stata trovata), un
// array con un solo elemento (se la classe era stata applicata ad un solo elemento)
// oppure un nutrito array di elementi

// quello che torna getElementsByClassName non è un vero e proprio array
// bensì una HTMLCollection
// sulle HTMLCollection potete fare un semplice ciclo for
// sulle HTMLCollection NON potete usare forEach, map, filter, etc.
allTheArticles = Array.from(allTheArticles) // trasforma la HTMLCollection in un vero e proprio array
// ora allTheArticles È un vero e proprio array
allTheArticles.forEach((el) => console.log(el))

// c) tramite il tag
let allTheLis = document.getElementsByTagName('li')
console.log(allTheLis)
// torna una HTMLCollection, valgono tutte le cose già descritte per getElementsByClassName

// d) querySelector
let firstLiInOl = document.querySelector('ol li')
console.log(firstLiInOl)
// document.querySelector permette di selezionare un elemento nel DOM a partire da un suo selettore CSS valido
// è particolarmente utile quando dobbiamo selezionare un elemento difficilmente raggiungibile,
// oppure senza classe, senza id, etc.
// in caso di multipli elementi corrispondenti al vostro selettore CSS, querySelector
// vi ritornerà il primo

// e) querySelectorAll
let allTheLisInOl = document.querySelectorAll('ol li')
// document.querySelectorAll funziona esattamente come querySelector, tramite un
// selettore CSS, ma ritornerà TUTTI i riferimenti all'interno di una NodeList
// (una specie di array, non richiede la conversione con Array.from() per l'utilizzo
// di metodi avanzati come map, forEach etc.)
// document.querySelectorAll tornerà SEMPRE un array, anche in caso di nessun match
allTheLisInOl.forEach((e) => {
  console.log(e)
})

// proviamo a selezionare elementi nella pagina!
let fourthLi = document.querySelector('ol li:nth-of-type(4)')
console.log('fourthLi', fourthLi)

let secondArticle = document.getElementsByClassName('content')[1]
console.log('secondArticle', secondArticle)

// seleziono lo stesso elemento ma con il tag name
let alwaysTheSecondArticle = document.getElementsByTagName('article')[1]
console.log('alwaysTheSecondArticle', alwaysTheSecondArticle)

// querySelector e querySelectorAll sono comodi ma cerchiamo di utilizzarli
// quando ce n'è bisogno, magari non per un singolo id o classe (non prendiamo
// a cannonate una formichina!)

// 2)
// Manipolazione degli elementi

// la proprietà innerText di un elemento di torna il suo contenuto testuale
console.log(mainTitleOfThePage.innerText)
// così come utilizziamo .innerText per LEGGERE un valore, lo possiamo anche SOVRASCRIVERE
mainTitleOfThePage.innerText = 'HELLO EPICODE!'

// la proprietà classList è piena di metodi per aggiungere/togliere/sostituire/controllare
// le classi CSS applicate all'elemento
mainTitleOfThePage.classList.add('primary-color')
// mainTitleOfThePage.classList.remove('primary-color')
// toggle aggiunge la classe se non presente, e la toglie se già presente
mainTitleOfThePage.classList.toggle('test')
// la proprietà className invece opera sempre sulle classe CSS ma tratta il valore di class="" come un'unica stringa
// mainTitleOfThePage.className = 'primary-color test'

// la proprietà style di un elemento del DOM ci permette di applicare uno
// stile inline via JS
// QUICK & DIRTY :)
mainTitleOfThePage.style.fontSize = '1em'
mainTitleOfThePage.style.backgroundColor = 'green'
mainTitleOfThePage.style.border = `2px solid black`

// setAttribute vi permette di settare genericamente un attributo qualsiasi
// aggiungo un id="mario" al secondo articolo
secondArticle.setAttribute('id', 'mario')

// cambiamo il valore href del link al foglio CSS e rompiamo la pagina
// document.querySelector('link').setAttribute('href', '')

// CREATEELEMENT
// Il metodo document.createElement() ci permette di creare in memoria un nuovo
// elemento nel DOM

let newListItem = document.createElement('li')
console.log('newListItem', newListItem)
// <li></li> <-- ho creato un tag li vuoto

// inseriamo come valore testuale del mio nuovo tag li "Sixth"
newListItem.innerText = 'Sixth'
// <li>Sixth</li> <-- ho aggiunto il testo

// l'elemento newListItem ora è completo ed esiste in memoria
// ora dobbiamo AGGIUNGERLO FISICAMENTE alla pagina!
// il metodo più classico è "appenderlo" nel DOM, alla fine di un altro elemento

// quindi, visto che devo appenderlo alla fine della mia lista ordinata,
// devo trovare il riferimento a tale lista e appenderci alla fine il mio newListItem

// due alternative:
// getElementsByTagName
// let parentOl = document.getElementsByTagName('ol')[0] // :)
// querySelector
let parentOl = document.querySelector('ol') // :)
console.log(parentOl.parentNode.parentNode) // :) posso risalire ai miei "antenati" quanto voglio

// ultimo passaggio: appendere newListItem a parentOl
parentOl.appendChild(newListItem)

// senza inserire l'elemento con ad es. appendChild NON vedremo l'elemento nel DOM!
