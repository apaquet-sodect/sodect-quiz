var app;

document.addEventListener("DOMContentLoaded", () => {


    app = new Vue({
        el: '#app',
        data: {
            capsule:"menu",
            game:0,
            colors:{
                seigneurie:"#A5EA1B",
                voyageurs:"#F8375B",
                moulins:"#F2B120",
                moderne:"#A3C4E7",
            },
            games:{
                menu:[
                    {title: "Jeux interactifs"}
                ],
                seigneurie:[{
                    // Game #1 LES OBJETS DU QUOTIDIEN
                    title: "JEU #1 – LES OBJETS DU QUOTIDIEN: NOUVELLE-FRANCE",
                    objects:[
                        {name: "auto", correct:false, guessed:false},
                        {name: "rabot", correct:true, guessed:false},
                        {name: "walkman", correct:false, guessed:false},
                        {name: "ecrire", correct:false, guessed:false},
                        {name: "raquette", correct:true, guessed:false},
                        {name: "ampoule", correct:false, guessed:false},
                        {name: "chapelet", correct:true, guessed:false},
                        {name: "faux", correct:true, guessed:false},
                        {name: "moulin", correct:true, guessed:false},
                        {name: "telephone", correct:false, guessed:false}
                    ]
                },{
                    // game #2
                },{
                    // game #3
                }],

            }
        },

        computed: {
            GetTitle:function(){
                if(this.capsule == "menu"){
                    return this.games.menu[0].title
                }else{
                    return this.games[this.capsule][this.game-1].title
                }
            }
        },

        watch: {},


        methods: {
            CheckElementIsCorrect(el,ev){
                // console.log(ev.currentTarget)
                let myObjects = this.games[this.capsule][this.game-1].objects
                let obj = myObjects.find(x => x.name == el)

                if(obj.correct){
                    console.log("correct :)")
                    SoundCorrect()
                    obj.guessed = true;
                }else{
                    console.log("incorrect")
                    SoundWrong()
                }
                // Chequear si ya están todas adivinadas
                let cantCorrect = myObjects.filter(function(e){ return e.correct }).length

                let cantGuessed = myObjects.filter(function(e){ return e.guessed }).length
                if(cantGuessed == cantCorrect){
                    console.log("Game won !")
                }


            }
        },

        mounted: function() {
            console.log("Vue mounted")
        }

    }) // app


    let soundCorrect = document.getElementById("soundCorrect");
    function SoundCorrect(){
        soundCorrect.play();
    }
    let soundWrong = document.getElementById("soundWrong");
    function SoundWrong(){
        soundWrong.play();
    }

}) //DOMContentLoaded
