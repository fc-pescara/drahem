const getDataFetch = () => {
    fetch('https://fakestoreapi.com/products')
        .then(res => res.json())
        .then(json => {
            json.forEach(element=>titrea(element))
            json.forEach(element=>prix(element))
            json.forEach(element => createCard(element))
            json.forEach(element=>notep(element))
            json.forEach(element=>imagel(element))
            json.forEach(element=>identifianti(element))
            json.forEach(element=>category(element))
           


            
        })
}

const getDataAwait = async () => {
    const result = await fetch('https://fakestoreapi.com/products')
    const data = await result.json()
    


}

getDataFetch()
getDataAwait()






const createCard = data => {
    console.log(data);
const newP = document.createElement("p")
    newP.className="description"
    newP.innerHTML = data.description
    document.body.appendChild(newP) 

}


const identifianti = data =>  {
    console.log(data);
    const identifiant = document.createElement ("h1")
    identifiant.className="identifiant"
    identifiant.innerHTML = data.id
    document.body.appendChild(identifiant)
}

const prix = data =>  {
    console.log(data);
    const NewPrix = document.createElement ("h3")
    NewPrix.className="price"
    NewPrix.innerHTML = data.price
    document.body.appendChild(NewPrix)
}


const notep= data =>  {
    
    console.log(data);
    const note = document.createElement ("h3")
    note.className="note"
    note.innerHTML = data.rating
    document.body.appendChild(note)
}


const imagel = data =>  {
    console.log(data);
    const image = document.createElement ("img")
    image.className="images"
    image.innerHTML = data.image
    document.body.appendChild(image)
}

const titrea = data =>  {
    console.log(data);
    const titre = document.createElement ("h4")
    titre.className="title"
    titre.innerHTML = data.title
    document.body.appendChild(titre)
}

const category = data =>  {
    console.log(data);
    const  categorie = document.createElement ("h4")
    categorie.className="category"
    categorie.innerHTML = data.category
    document.body.appendChild(categorie)
}



const cards = document.getElementsByClassName("cards");
const listchildren = cards.children ;


const cardsItem = cards.children;
cardcopy = cardsItem.cloneNode(true);

cards.appendChild(cardcopy);