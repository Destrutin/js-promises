// Part 1 ----------------

// let baseURL = 'http://numbersapi.com';

// axios
//     .get(`${baseURL}/7?json`)
//     .then(n1 => {
//         console.log(n1)
//     })
//     .catch(err => {
//         console.log(err)
//     });

// axios
//     .get(`${baseURL}/7?json`)
//     .then(n1 => {
//         console.log(n1)
//     })
//     .catch(err => {
//         console.log(err)
//     });

// let fiveNumPromises = [];

// for (let i = 1; i < 5; i++) {
//     fiveNumPromises.push(
//         axios.get(`${baseURL}/${i}?json`)
//     );
// }

// Promise.all(fiveNumPromises)
//     .then(numArr => {
//         let div = document.querySelector('div');
//         numArr.forEach(n => {
//             let p = document.createElement('p');
//             p.textContent = n.data.text;
//             div.append(p);
//         });
//     });

// let favNumPromises = [];

// for (let i = 1; i < 5; i++) {
//     favNumPromises.push(
//         axios.get(`${baseURL}/7?json`)
//     );
// }

// Promise.all(favNumPromises)
//     .then(factArr => {
//         let div = document.querySelector('div');
//         factArr.forEach(f => {
//             let p = document.createElement('p');
//             p.textContent = f.data.text;
//             div.append(p);
//         });
//     });

    // Part 2 -------------------

let cardsBaseUrl = 'https://deckofcardsapi.com/api/deck';

axios
    .get(`${cardsBaseUrl}/new/draw/`)
    .then(card => {
        let {value, suit} = card.data.cards[0];
        console.log(`${value} of ${suit}`);
    });

axios
    .get(`${cardsBaseUrl}/new/draw/`)
        .then(card => {
            let deckId = card.data.deck_id;
            let {value, suit} = card.data.cards[0];
            console.log(`${value} of ${suit}`);
            return axios.get(`${cardsBaseUrl}/${deckId}/draw/`);
        })
        .then(card => {
            let {value, suit} = card.data.cards[0];
            console.log(`${value} of ${suit}`);
        });
        
let gimmeCard = document.querySelector('button');
let cardDiv = document.querySelector('#card-div');

axios
    .get(`${cardsBaseUrl}/new/shuffle/`)
    .then(card => {
        deckId = card.data.deck_id;
    });

    gimmeCard.addEventListener('click', () => {
        axios
            .get(`${cardsBaseUrl}/${deckId}/draw/`)
            .then(card => {
                let imgSrc = card.data.cards[0].image;
                let imgEl = document.createElement('img');
                imgEl.src = imgSrc;
                cardDiv.append(imgEl);
                if (card.data.remaining === 0) {
                    gimmeCard.remove();
                }
            });
    })


//suggestions and improvements
//1. There is code duplication in the second and third parts of the script where it's fetching and displaying a card. Refactor the script to a separate function to avoid redundancy.
//2. The variable deckId is used across different parts of the script without being declared with let or const inside the relevant scopes



//check out this example

//let cardsBaseUrl = 'https://deckofcardsapi.com/api/deck';
//let deckId;

// Function to draw a single card
//function drawCard() {
//    return axios.get(`${cardsBaseUrl}/${deckId}/draw/`);
//}

// Function to display a card image
//function displayCardImage(imgSrc) {
//    let imgEl = document.createElement('img');
//    imgEl.src = imgSrc;
//    cardDiv.append(imgEl);
//}

//axios.get(`${cardsBaseUrl}/new/shuffle/`)
//    .then(response => {
//        deckId = response.data.deck_id;
//    })
//    .catch(error => {
//        console.error('Error while shuffling the deck:', error);
//    });

//gimmeCard.addEventListener('click', () => {
//    drawCard()
//        .then(response => {
//            let card = response.data.cards[0];
//            displayCardImage(card.image);
//            if (response.data.remaining === 0) {
//                gimmeCard.remove();
//            }
//        })
//        .catch(error => {
//            console.error('Error while drawing a card:', error);
//        });
//});
