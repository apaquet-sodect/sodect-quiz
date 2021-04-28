var app;

document.addEventListener("DOMContentLoaded", () => {


    app = new Vue({
        el: '#app',
        data: {
            doingTransition: false,
            loaded:false,
            capsule: "menu",
            game: 0,
            colors: {
                seigneurie: "#A5EA1B",
                voyageurs: "#F8375B",
                moulins: "#F2B120",
                moderne: "#A3C4E7",
            },
            btnEmoji: "",
            message:{
                show: false,
                title: "",

            },
            randomList: [],
            games: {
                menu: [{
                    title: "JEUX INTERACTIFS"
                }],
                seigneurie: [
                    {
                    // seigneurie Game #1 LES OBJETS DU QUOTIDIEN
                    title: "LES OBJETS DU QUOTIDIEN: NOUVELLE-FRANCE",
                    winMessage: "Bravo, tu as réussi le premier jeu !",
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
                    winMessage: "Bravo, tu as réussi le Quiz historique !",
                    question : 0,
                    objects:[
                        {q: "En moyenne, combien d’enfants retrouve-t-on par famille ?", a: "Six", blur: true, img: "q1.jpg"},
                        {q: "Les premières seigneuries font face à un cours d’eau. Celle de Terrebonne longe la rivière des Mille-Îles, autrefois nommée _________________", a: "La rivière Jésus", blur: true, img: "q2.jpg"},
                        {q: "Selon l’état et L’Église en Nouvelle-France, un bon habitant est un ______________ pratiquant et obéissant, attaché à sa langue et qui cultive sa terre en travaillant dur.", a:"Catholique", blur: true, img: "q3.jpg"},
                        {q: "Quand le censitaire fait moudre son blé au moulin, il doit donner une partie au seigneur. Combien de sacs de blé doit-il donner au seigneur ? __________________", a: "1 sac sur 14", blur: true, img: "q4.jpg"},
                        {q: "À quelle activité les colons consacrent-ils la majeure partie de leur temps ?", a: "Aux travaux agricoles", blur: true, img: "q5.jpg"},
                    ]
                }, {
                    // seigneurie Game #3
                    title: "SEIGNEUR OU CENSITAIRE?",
                    score: 0,
                    question : 0,
                    objects:[
                        {q: "Il a toujours le premier banc à l’église. ", r: "seigneur", guessed: undefined},
                        {q: "Il peut donner sa terre à ses enfants ou la vendre. ", r: "censitaires", guessed: undefined},
                        {q: "Il peut avoir son propre four. ", r: "censitaires" , guessed: undefined},
                        {q: "Il doit construire un moulin à farine. ", r: "seigneur", guessed: undefined},
                        {q: "Il peut chasser et pêcher pour nourrir sa famille.", r:"censitaires" , guessed: undefined},
                        {q: "Il doit jurer fidélité au roi.", r: "seigneur", guessed: undefined}
                    ]
                }],

                voyageurs: [
                    {
                        // Voyageurs Game #1 À CHACUN SA FOURRURE
                        title: "À CHACUN SA FOURRURE",
                        winMessage: "Bravo, tu connais tes fourrures !",
                        linesType: "horizontal",
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
                        score: 0,
                        question : 0,
                        objects:[
                            {q: "Combien de peaux de castor as-tu besoin pour troquer un fusil?", r: "12 peaux de castor", other: ["4 peaux de castor", "10 peaux de castor"], guessed: undefined},
                            {q: "Tu as besoin de poudre noire pour ton fusil. Combien de peaux de castor as-tu besoin pour t’en procurer?", r: "1 peau de castor ", other: ["2 peaux de castor", "5 peaux de castor"], guessed: undefined},
                            {q: "Tu veux une marmite de quatre litres pour faire bouillir ton eau d’érable. Combien de peaux de castors as-tu besoin pour te la procurer? ", r: "18 peaux de castor", other: ["9 peaux de castor", "15 peaux de castor"], guessed: undefined},
                            {q: "Combien de peau de castor as-tu besoin pour acheter un tomahawk, une livre de perle, une paire de chaussures et deux chemises?", r: "7 peaux de castor ", other: ["4 peaux de castor", "9 peaux de castor"], guessed: undefined},
                            {q: "Quelle est la valeur d’une peau de loup en peaux de castor? ", r: "10 peaux de castor ", other: ["3 peaux de castor", "8 peaux de castor"], guessed: undefined},
                        ]
                    },
                    {
                        // Voyageurs Game #3 LA COMPAGNIE DU NORD-OUEST
                        title: "LA COMPAGNIE DU NORD-OUEST",
                        winMessage: "Bravo !",
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
                        winMessage: "Bravo, tu sais identifier les moulins !",
                        connectLines: null,
                        objects:[
                            {
                                name: "farine",
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
                        title: "POUR CHAQUE LAINE SA TEINTURE",
                        winMessage: "Bravo !",
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
                        score: 0,
                        question : 0,
                        objects:[
                            {q: "Le maire", r: "régime municipal", guessed: undefined},
                            {q: "Les censitaires", r: "régime seigneurial", guessed: undefined},
                            {q: "Le cens et les rentes", r: "régime seigneurial" , guessed: undefined},
                            {q: "Les taxes", r: "régime municipal", guessed: undefined},
                            {q: "Une élection", r:"régime municipal" , guessed: undefined},
                            {q: "Les corvées", r: "régime seigneurial", guessed: undefined}
                        ]
                    }
                ],

                moderne: [
                    {
                        title:"L’INDENCIE DE 1922",
                        winMessage: "Bravo, tu connais bien l'histoire de l'incendie de 1922 !",
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
                        title:"ÉVÉNEMENTS MARQUANTS",
                        winMessage: "Bravo !",
                        connectLines: null,
                        linesType: "horizontal",
                        objects:[
                            {
                                name: "eclairage",
                                title: "Éclairage au gaz",
                                year: 1885
                            },{
                                name: "electrification",
                                title: "Électrification",
                                year: 1890
                            },{
                                name: "telephone",
                                title: "Installation du téléphone",
                                year: 1893
                            },{
                                name: "incendie",
                                title: "Incendie du Vieux-Terrebonne",
                                year: 1922
                            },{
                                name: "camping",
                                title: "Terrains de camping puis parc de maisons mobiles sur l’Île-des-Moulins",
                                year: 1967
                            },{
                                name: "moulins",
                                title: "L’Île-des-Moulins devient Site historique",
                                year: 1973
                            },
                        ]
                    },{
                        title:"DEUX VÉRITÉS ET UN MENSONGE",
                        score: 0,
                        question : 0,
                        objects:[
                            {r: "Un jeu d’évasion", other: ["Une boîte à chanson", "Une bibliothèque"], guessed: undefined},
                            {r: "Une centrale hydroélectrique", other: ["Un terrain de camping", "Un bureau seigneurial"], guessed: undefined},
                            {r: "Une station de ski", other: ["Une boulangerie", "Une manufacture de matelas"], guessed: undefined},
                            {r: "Un moulin à papier", other: ["Un moulin à scie", "Un moulin à farine"], guessed: undefined},
                            {r: "Moulin à vent", other: ["Moulin à réaction", "Moulin à aubes"], guessed: undefined},
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
                    return this.currGameData.title
                }
            },

            currQuizScore: function(){
                let score = `${this.currGameData.score} / ${this.currGameData.objects.length}`
                return `Ton score est ${score}`
            },

            currGameData: function(){
                return this.games[this.capsule][this.game-1]
            },

            // btnEmoji: function(){
            //     let possibleBtnEmojis = ["🙌","👌","🖖","👋"]
            //     let rand = Math.floor(Math.random()*possibleBtnEmojis.length)
            //     return
            // }


        },

        watch: {
            message: {
                 handler(val){
                   if(val.show){
                       this.RandEmoji()
                   }
                 },
                 deep: true
             },
            game: function(val){
                if(this.capsule != "menu" && this.currGameData.connectLines !== undefined && this.currGameData.connectLines == null){
                    // Its an unitiliazied connect line game
                    this.currGameData.connectLines = new ConnectLines(`.${this.capsule}.game${this.game} .connectLines`)
                    if(this.currGameData.linesType != undefined){
                        this.currGameData.connectLines.display = this.currGameData.linesType
                    }
                    let self = this
                    this.currGameData.connectLines.parentEl.addEventListener("gameWon",function(){
                        // console.log("game won")
                        SoundCorrect()
                        setTimeout(function(){
                            self.message.title = self.currGameData.winMessage
                            self.message.show = true
                        },300)

                    })
                }
            }
        },


        methods: {
            EnterFullscreen(){
                console.log("Entering fullscreen")
                this.toggleFullScreen();
            },
            toggleFullScreen(){
                if (!document.fullscreenElement) {
                    document.documentElement.requestFullscreen();
                } else {
                    if (document.exitFullscreen) {
                    document.exitFullscreen();
                    }
                }
            },

            RandEmoji(){
                let possibleBtnEmojis = ["🙌","👌","🖖","👋","✊","👉","🔑","🇨🇦","🌚","🎃","👍","🤙","🎓"]
                let rand = Math.floor(Math.random()*possibleBtnEmojis.length)
                let emoji = possibleBtnEmojis[rand]
                this.btnEmoji = ` " ${emoji}"`
            },

            CheckElementIsCorrect(el, ev) {
                if(this.doingTransition){return}
                let myObjects = this.currGameData.objects
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
                    this.doingTransition = true
                    setTimeout(function(){
                        self.message.title = self.games[self.capsule][self.game - 1].winMessage
                        self.message.show = true
                        self.doingTransition = false
                    }, 1200)
                }
            },
            NextQuestion: function(answer = ""){
                if(this.doingTransition){ return }
                let delay = 1300
                if(answer != ""){
                    let currQuestion = this.currGameData.question
                    let correctAnswer = this.currGameData.objects[currQuestion].r
                    if(correctAnswer == answer){
                        // console.log("correct!")
                        this.currGameData.score++
                        SoundCorrect()
                        this.currGameData.objects[currQuestion].guessed = true
                    }else{
                        // todo animation
                        this.currGameData.objects[currQuestion].guessed = false
                        SoundWrong()
                    }
                }else{
                    delay = 0;
                    RandomSoundPop();
                }
                let cantQuestions = this.currGameData.objects.length
                let currCuestion =  this.currGameData.question

                this.doingTransition = true
                if(currCuestion == cantQuestions-1){
                     // Game ended
                     if(this.currGameData.score !== undefined){
                         this.message.title = this.currQuizScore
                     }else{
                         this.message.title = this.currGameData.winMessage
                     }
                     let self = this
                     setTimeout(function(){
                         self.doingTransition = false
                         self.message.show = true
                     }, delay)
                }else{
                    let self = this
                    setTimeout(function(){
                        self.doingTransition = false
                        self.currGameData.question++
                    }, delay)

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
            // console.log("Vue mounted")
            var self=this
            Promise.all(Array.from(document.images).filter(img => !img.complete).map(img => new Promise(resolve => { img.onload = img.onerror = resolve; }))).then(() => {
                console.log('images finished loading');
                this.loaded=true
            });
            for(let i=0;i<100;i++){
                this.randomList.push( Math.round(Math.random()*100) )
            }
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

let soundPop = document.getElementById("soundPop")
function SoundPop(){
    soundPop.currentTime = 0
    soundPop.play()
}

let soundPop2 = document.getElementById("soundPop2")
let soundPop3 = document.getElementById("soundPop3")
function RandomSoundPop(){
    let sounds = [soundPop,soundPop2,soundPop3]
    let rSound = sounds[Math.floor(Math.random()*sounds.length)]
    rSound.currentTime = 0
    rSound.play()
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
