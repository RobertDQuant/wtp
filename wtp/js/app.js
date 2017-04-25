// created objects for each pokemon with name, picture, and silhouette

const pikachu = {
    name: 'Pikachu',
    image: 'http://kuuiz.com/wp-content/uploads/2016/09/Pokemon-025-Pikachu.png',
    silhouette: 'http://kuuiz.com/wp-content/uploads/2016/10/Pokemon-Silhouette-025-Pikachu.png'
}

const charmander = {
    name: 'charmander',
    image: 'http://kuuiz.com/wp-content/uploads/2016/09/Pokemon-004-Charmander-1.png',
    silhouette: 'http://kuuiz.com/wp-content/uploads/2016/10/Pokemon-Silhouette-004-Charmander-Silhouette.png'
}

const squirtle = {
    name: 'squirtle',
    image: 'http://kuuiz.com/wp-content/uploads/2016/09/Pokemon-007-Squirtle.png',
    silhouette: 'http://kuuiz.com/wp-content/uploads/2016/10/Pokemon-Silhouette-007-Squirtle.png'
}

const bulbasaur = {
    name: 'bulbasaur',
    image: 'http://kuuiz.com/wp-content/uploads/2016/09/Pokemon-001-Bulbasaur-1.png',
    silhouette: 'http://kuuiz.com/wp-content/uploads/2016/10/Pokemon-Silhouette-001-Bulbasaur.png'
}

const pokemon = []

pokemon.push(pikachu);
pokemon.push(charmander);
pokemon.push(squirtle);
pokemon.push(bulbasaur);


// this is a object with the questions and choices
const questions = [
    {
        "question": '',
        options: [
                'Pikachu', 'Bulbasaur', 'A Rat', 'Squritle'
            ],
        //            "option1": "Pikachu",
        //            "option2": "Bulbasaur",
        //            "option3": "A Rat",
        //            "option4": "A frog",
        "answer": "1"
    },
    {
        "question": '',
        options: [
                'Dog', 'Bulbasaur', 'Charmander', 'Turtle'
            ],
        //            "option1": "Dog",
        //            "option2": "Bulbasaur",
        //            "option3": "Charmander",
        //            "option4": "Turtle",
        "answer": "3"
    },
    {
        "question": '',
        options: [
                'Frog', 'Bulbasaur', 'Squirtle', 'Meowth'
            ],
        //            "option1": "Frog",
        //            "option2": "Bulbasaur",
        //            "option3": "Squirtle",
        //            "option4": "A frog",
        "answer": "3"
}];

//This function displays a pokemon picture inside of the question div and displays a list of choices in the option div

function start() {
    const options = document.querySelectorAll('.option');

    for (let x = 0; x < options.length; x++) {
        options[x].innerHTML = questions[0]['options'][x];
        //             options[x].innerHTML = `<img src=${questions[0].question} />`;

        const myQuestions = document.querySelectorAll('.question');

        for (let x = 0; x < myQuestions.length; x++) {
            myQuestions[x].innerHTML = `<img src=http://kuuiz.com/wp-content/uploads/2016/10/Pokemon-Silhouette-025-Pikachu.png${questions[0].question} />`;
            
            
            
        }

    }
}

start();
