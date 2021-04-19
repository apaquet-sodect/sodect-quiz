var app;

document.addEventListener("DOMContentLoaded", () => {


    app = new Vue({
        el: '#app',
        data: {
            capsule: "menu",
            game: 0,
            colors: {
                seigneurie: "#A5EA1B",
                voyageurs: "#F8375B",
                moulins: "#F2B120",
                moderne: "#A3C4E7",
            },
            message:{
                show: false,
                title: "",

            },
            games: {
                menu: [{
                    title: "JEUX INTERACTIFS"
                }],
                seigneurie: [
                    {
                    // seigneurie Game #1 LES OBJETS DU QUOTIDIEN
                    title: "LES OBJETS DU QUOTIDIEN: NOUVELLE-FRANCE",
                    winMessage: "Ganaste el primer juego",
                    objects: [
                        {
                            name: "auto",
                            title: "Veille auto",
                            correct: false,
                            guessed: false
                        },
                        {
                            name: "rabot",
                            title: "Rabot",
                            correct: true,
                            guessed: false
                        },
                        {
                            name: "walkman",
                            title: "Walkman cassette",
                            correct: false,
                            guessed: false
                        },
                        {
                            name: "ecrire",
                            title: "Machine à écrire",
                            correct: false,
                            guessed: false
                        },
                        {
                            name: "raquette",
                            title: "Raquette de babiche",
                            correct: true,
                            guessed: false
                        },
                        {
                            name: "ampoule",
                            title: "Une ampoule électrique",
                            correct: false,
                            guessed: false
                        },
                        {
                            name: "chaplet",
                            title: "Chaplet",
                            correct: true,
                            guessed: false
                        },
                        {
                            name: "faux",
                            title: "Faux (l’outil)",
                            correct: true,
                            guessed: false
                        },
                        {
                            name: "moulin",
                            title: "Moulin à farine",
                            correct: true,
                            guessed: false
                        },
                        {
                            name: "telephone",
                            title: "Vieux téléphone",
                            correct: false,
                            guessed: false
                        }
                    ]
                }, {
                    // seigneurie Game #2
                    title: "QUIZ HISTORIQUE",
                    winMessage: "Ganasteee el segundo juego",
                    question : 0,
                    objects:[
                        {q: "En moyenne, combien d’enfants retrouve-t-on par famille?", img: "a.jpg"},
                        {q: "Au temps du régime seigneurial, on organise souvent des charivaris. Pourquoi? ", img: "a.jpg"},
                        {q: "Les premières seigneuries font face à un cours d’eau. Celle de Terrebonne longe la rivière des Mille-Îles, autrefois nommée", img: "a.jpg"},
                        {q: "Les censitaires peuvent-ils voter?", img: "a.jpg"},
                        {q: "Selon l’état et L’Église en Nouvelle-France, un bon habitant est un ______________ pratiquant et obéissant, attaché à sa langue et qui cultive sa terre en travaillant dur.", img: "a.jpg"},
                        {q: "Quand le censitaire fait moudre son blé au moulin, il doit donner une partie au seigneur. Combien de sac de blé doit-il donner au seigneur?", img: "a.jpg"},
                    ]
                }, {
                    // seigneurie Game #3
                    title: "SEIGNEUR OU CENSITAIRE?",
                    winMessage: this.seigneurieJeu3Win,
                    score: 0,
                    question : 0,
                    objects:[
                        {q: "Il a toujours le premier banc à l’église. ", r: "seigneur"},
                        {q: "Il peut donner sa terre à ses enfants ou la vendre. ", r: "censitaire"},
                        {q: "Il peut avoir son propre four. ", r: "censitaire" },
                        {q: "Il doit construire un moulin à farine. ", r: "seigneur"},
                        {q: "Il peut chasser et pêcher pour nourrir sa famille.", r:"censitaire" },
                        {q: "Il doit jurer fidélité au roi.", r: "seigneur"}
                    ]
                }],

                voyageurs: [
                    {
                        // Voyageurs Game #1 À CHACUN SA FOURRURE
                        title: "À CHACUN SA FOURRURE",
                        connectLines: null,
                        objects:[
                            {
                                name: "castor",
                                title: "Castor"
                            },{
                                name: "lievre",
                                title: "Lièvre"
                            },{
                                name: "loup",
                                title: "Loup"
                            },{
                                name: "ours",
                                title: "Ours"
                            },{
                                name: "raton",
                                title: "Raton laveur"
                            },{
                                name: "cerf",
                                title: "Cerf"
                            },
                        ]
                    },
                    {
                        // Voyageurs Game #2 TROQUE TON CASTOR
                        title: "TROQUE TON CASTOR",
                        // winMessage: return this.voyageursJeu2Win,
                        score: 0,
                        question : 0,
                        objects:[
                            {q: "Combien de peaux de castor as-tu besoin pour troquer un fusil ?", r: "12 peaux de castor", other: ["4 peaux de castor", "10 peaux de castor"]},
                            {q: "Tu as besoin de poudre noire pour ton fusil. Combien de peaux de castor as-tu besoin pour t’en procurer ?", r: "1 peau de castor ", other: ["2 peaux de castor", "5 peaux de castor"]},
                            {q: "Tu veux une marmite de quatre litres pour faire bouillir ton eau d’érable. Combien de peaux de castors as-tu besoin pour te la procurer ? ", r: "18 peaux de castor", other: ["9 peaux de castor", "15 peaux de castor"]},
                            {q: "Combien de peau de castor as-tu besoin pour acheter un tomahawk, une livre de perle, une paire de chaussures et deux chemises ?", r: "7 peaux de castor ", other: ["4 peaux de castor", "9 peaux de castor"]},
                            {q: "Quelle est la valeur d’une peau de loup en peaux de castor ? ", r: "10 peaux de castor ", other: ["3 peaux de castor", "8 peaux de castor"]},
                        ]
                    },
                    {
                        // Voyageurs Game #3 LA COMPAGNIE DU NORD-OUEST
                        title: "LA COMPAGNIE DU NORD-OUEST",
                        winMessage: "Ganaste el 3er jeugo",
                        objects:[
                            {
                                name: "voyageurs",
                                title: "Voyageurs",
                                correct: true,
                                guessed: false
                            },{
                                name: "mangeur",
                                title: "Mangeur lard",
                                correct: false,
                                guessed: false
                            },{
                                name: "marmitonne",
                                title: "Marmitonne",
                                correct: true,
                                guessed: false
                            },{
                                name: "coureur",
                                title: "Coureur des bois",
                                correct: false,
                                guessed: false
                            },{
                                name: "homme",
                                title: "Homme de l’Athabasca",
                                correct: true,
                                guessed: false
                            },{
                                name: "plombier",
                                title: "Plombier",
                                correct: false,
                                guessed: false
                            },{
                                name: "marchand",
                                title: "Marchand",
                                correct: true,
                                guessed: false
                            },{
                                name: "paysan",
                                title: "Paysan",
                                correct: false,
                                guessed: false
                            },{
                                name: "kayakiste",
                                title: "Kayakiste",
                                correct: false,
                                guessed: false
                            },{
                                name: "bourgeois",
                                title: "Bourgeois écossais (Beaver Club)",
                                correct: true,
                                guessed: false
                            },
                        ]
                    }
                ],

                moulins: [
                    {
                        title:"LES MOULINS DE TERREBONNE",
                        connectLines: null,
                        objects:[
                            {
                                name: "farin",
                                title: "Moudre le blé"
                            },{
                                name: "carder",
                                title: "Faire de la laine "
                            },{
                                name: "scie",
                                title: "Couper du bois"
                            }
                        ]
                    },{
                        title:"coso",
                        connectLines: null,
                        objects:[
                            {
                                name: "bleue",
                                title: "Plante d’indigo"
                            },{
                                name: "brune",
                                title: "Écorce d’arbre"
                            },{
                                name: "jaune",
                                title: "Pissenlit"
                            },{
                                name: "rouge",
                                title: "Cochenille"
                            }
                        ]
                    },{
                        title:"RÉGIME SEIGNEURIAL OU MUNICIPAL",
                        winMessage: this.moulinsJeu3Win,
                        score: 0,
                        question : 0,
                        objects:[
                            {q: "Le maire", r: "régime municipal"},
                            {q: "Les censitaires", r: "régime seigneurial"},
                            {q: "Le cens et les rentes", r: "régime seigneurial" },
                            {q: "Les taxes", r: "régime municipal"},
                            {q: "Une élection", r:"régime municipal" },
                            {q: "Les corvées", r: "régime seigneurial"}
                        ]
                    }
                ],

                moderne: [
                    {
                        title:"L’INDENCIE DE 1922",
                        winMessage: "Ganaste el 3er jeugo",
                        objects:[
                            {
                                name: "Boucherie",
                                title: "Boucherie Ouimet",
                                correct: true,
                                guessed: false
                            },{
                                name: "Limoges",
                                title: "Manufacture Limoges",
                                correct: true,
                                guessed: false
                            },{
                                name: "maison",
                                title: "Maison Bélisle",
                                correct: false,
                                guessed: false
                            },{
                                name: "quincaillerie",
                                title: "La quincaillerie",
                                correct: true,
                                guessed: false
                            },{
                                name: "bibliotheque",
                                title: "La bibliothèque",
                                correct: false,
                                guessed: false
                            },{
                                name: "hotel",
                                title: "L’hôtel de Ville",
                                correct: true,
                                guessed: false
                            },{
                                name: "theatre",
                                title: "Le Théâtre du Vieux-Terrebonne",
                                correct: false,
                                guessed: false
                            },{
                                name: "pharmacie",
                                title: "La pharmacie",
                                correct: true,
                                guessed: false
                            },
                        ]
                    },{
                        title:"CARRÉ AUX DATES",
                        connectLines: null,
                        objects:[
                            {
                                name: "bleue",
                                title: "Éclairage au gaz",
                                year: 1885
                            },{
                                name: "bleue",
                                title: "Électrification",
                                year: 1890
                            },{
                                name: "bleue",
                                title: "Installation du téléphone",
                                year: 1893
                            },{
                                name: "bleue",
                                title: "Incendie du Vieux-Terrebonne",
                                year: 1922
                            },{
                                name: "bleue",
                                title: "Terrains de camping puis parc de maisons mobiles sur l’Île-des-Moulins",
                                year: 1967
                            },{
                                name: "bleue",
                                title: "L’Île-des-Moulins devient Site historique",
                                year: 1973
                            },
                        ]
                    },{
                        title:"DEUX VÉRITÉS ET UN MENSONGE",
                        score: 0,
                        question : 0,
                        objects:[
                            {r: "Un jeu d’évasion", other: ["Une boîte à chanson", "Une bibliothèque"]},
                            {r: "Une centrale hydroélectrique", other: ["Un terrain de camping", "Un bureau seigneurial"]},
                            {r: "Une station de ski", other: ["Une boulangerie", "Une manufacture de matelas"]},
                            {r: "Un moulin à papier", other: ["Un moulin à scie", "Un moulin à farine"]},
                            {r: "Moulin à vent", other: ["Moulin à réaction", "Moulin à aubes"]},
                        ]
                    }
                ],

            }
        },

        computed: {
            GetTitle: function() {
                if (this.capsule == "menu") {
                    return this.games.menu[0].title
                } else {
                    return this.games[this.capsule][this.game - 1].title
                }
            },

            currQuizScore: function(){
                let score = `${this.games[this.capsule][this.game - 1].score} / ${this.games[this.capsule][this.game - 1].objects.length}`
                return `Your score is ${score}`
            }

        },

        watch: {
            game: function(val){
                if(this.capsule == "voyageurs" && val == "1" && this.games.voyageurs[0].connectLines == null){
                    this.games.voyageurs[0].connectLines = new ConnectLines(".voyageurs.game1 .connectLines")
                    let self = this
                    this.games.voyageurs[0].connectLines.parentEl.addEventListener("gameWon",function(){
                        console.log("game won")
                        self.game++
                    })
                }
            }
        },


        methods: {
            CheckElementIsCorrect(el, ev) {
                let myObjects = this.games[this.capsule][this.game - 1].objects
                let obj = myObjects.find(x => x.name == el)

                let dom = ev.currentTarget
                if (obj.correct) {
                    // console.log("correct :)")
                    SoundCorrect()
                    obj.guessed = true;
                } else {
                    // console.log("incorrect")
                    animateCSS(dom, "headShake")
                    SoundWrong()
                }
                // Chequear si ya están todas adivinadas
                let cantCorrect = myObjects.filter(function(e) {
                    return e.correct
                }).length

                let cantGuessed = myObjects.filter(function(e) {
                    return e.guessed
                }).length
                if (cantGuessed == cantCorrect) {

                    var self=this
                    setTimeout(function(){
                        self.message.title = self.games[self.capsule][self.game - 1].winMessage
                        self.message.show = true
                    }, 1200)
                }
            },
            NextQuestion: function(answer = ""){
                if(answer != ""){
                    let currQuestion = this.games[this.capsule][this.game - 1].question
                    let correctAnswer = this.games[this.capsule][this.game - 1].objects[currQuestion].r
                    if(correctAnswer == answer){
                        console.log("correct!")
                        this.games[this.capsule][this.game - 1].score++
                    }
                }
                let cantQuestions = this.games[this.capsule][this.game - 1].objects.length
                let currCuestion =  this.games[this.capsule][this.game - 1].question
                if(currCuestion == cantQuestions-1){
                     // Game ended
                     if(this.games[this.capsule][this.game - 1].score !== undefined){
                         this.message.title = this.currQuizScore
                     }else{
                         this.message.title = this.games[this.capsule][this.game - 1].winMessage
                     }
                     this.message.show = true

                }else{
                    this.games[this.capsule][this.game - 1].question++
                }

            },

            NextJeux: function(){
                    if(this.game == 3){
                        this.capsule = "menu"
                        this.game = 0
                    }else{
                        this.game++
                    }
                    this.message.show = false
            },
            MainMenu: function(){
                this.capsule = "menu"
                this.game = 0
            }
        },

        mounted: function() {
            console.log("Vue mounted")
        }

    }) // app

}) //DOMContentLoaded


let soundCorrect = document.getElementById("soundCorrect");

function SoundCorrect() {
    soundCorrect.currentTime=0
    soundCorrect.play();
}
let soundWrong = document.getElementById("soundWrong");

function SoundWrong() {
    soundWrong.currentTime=0
    soundWrong.play();
}

const animateCSS = (element, animation, prefix = 'animate__') =>
    // We create a Promise and return it
    new Promise((resolve, reject) => {
        const animationName = `${prefix}${animation}`;
        //const node = document.querySelector(element);

        element.classList.add(`${prefix}animated`, animationName);

        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
            event.stopPropagation();
            element.classList.remove(`${prefix}animated`, animationName);
            resolve('Animation ended');
        }

        element.addEventListener('animationend', handleAnimationEnd, {
            once: true
        });
    });

var myMessage = document.getElementById("message")
function ShowMessage(){

    app._data.message.show = true
    animateCSS(myMessage,"slideInLeft")
}
function HideMessage(){
    animateCSS(myMessage,"slideOutRight").then((el) =>{app._data.message.show = false})
}
