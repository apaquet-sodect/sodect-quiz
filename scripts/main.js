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
                    title: "Jeux interactifs"
                }],
                seigneurie: [{
                    // seigneurie Game #1 LES OBJETS DU QUOTIDIEN
                    title: "JEU #1 – LES OBJETS DU QUOTIDIEN: NOUVELLE-FRANCE",
                    objects: [
                        {
                            name: "auto",
                            correct: false,
                            guessed: false
                        },
                        {
                            name: "rabot",
                            correct: true,
                            guessed: false
                        },
                        {
                            name: "walkman",
                            correct: false,
                            guessed: false
                        },
                        {
                            name: "ecrire",
                            correct: false,
                            guessed: false
                        },
                        {
                            name: "raquette",
                            correct: true,
                            guessed: false
                        },
                        {
                            name: "ampoule",
                            correct: false,
                            guessed: false
                        },
                        {
                            name: "chapelet",
                            correct: true,
                            guessed: false
                        },
                        {
                            name: "faux",
                            correct: true,
                            guessed: false
                        },
                        {
                            name: "moulin",
                            correct: true,
                            guessed: false
                        },
                        {
                            name: "telephone",
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
            seigneurieJeu3Win: function(){
                return `Your score is ${this.games.seigneurie[2].score}/${this.games.seigneurie[2].objects.length}`
            }



        },

        watch: {},


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
                        console.log("show!")
                        self.message.title = "Ganaste el primer juego"
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
                     console.log("show!")
                     if(this.capsule == "seigneurie" && app.game == 3){
                         this.message.title = this.seigneurieJeu3Win
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


    let soundCorrect = document.getElementById("soundCorrect");

    function SoundCorrect() {
        soundCorrect.play();
    }
    let soundWrong = document.getElementById("soundWrong");

    function SoundWrong() {
        soundWrong.play();
    }




}) //DOMContentLoaded


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
