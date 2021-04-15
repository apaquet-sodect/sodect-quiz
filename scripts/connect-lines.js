// by gonzalo moiguer
// gonzamoiguer.com
var ConnectLines = {
    mousePos: {x: 0, y: 0},
    currKey : "",
    isDrawingLine : false,
    drawingFrom : null,
    myData : {},
    requestId: null,

    CheckAllGuessed: function(){
        let entries = Object.entries(this.myData)
        let sum = 0
        for(let i = 0; i < entries.length; i++){
            sum += entries[i][1].guessed
        }
        if(sum == entries.length){
            console.log("Juego ganado!")
            this.Stop();
        }
    },

    GetStyleData: function(x1, y1, x2, y2) {
        var a = x1 - x2,
            b = y1 - y2,
            c = Math.sqrt(a * a + b * b);
        var sx = (x1 + x2) / 2,
            sy = (y1 + y2) / 2;
        var x = sx - c / 2,
            y = sy;
        var alpha = Math.PI - Math.atan2(-b, a);
        return {x:x, y:y, length:c, angle:alpha}
    },

    DragStarted: function(key, element){
        if(this.myData[key].guessed){ return }
        this.myData[key].line.classList.remove("lineHide")
        this.drawingFrom = element
        this.currKey = key
        this.isDrawingLine = true
    },

    Draw: function(){
        var _this = this;
        if(_this.isDrawingLine){
            let fromRect = _this.drawingFrom.getBoundingClientRect()
            let data = _this.GetStyleData(fromRect.x+fromRect.width-5, fromRect.y+(fromRect.width/2), _this.mousePos.x, _this.mousePos.y)

            var styles = 'width: ' + data.length + 'px; '
                       + 'height: 0px; '
                       + '-moz-transform: rotate(' + data.angle + 'rad); '
                       + '-webkit-transform: rotate(' + data.angle + 'rad); '
                       + '-o-transform: rotate(' + data.angle + 'rad); '
                       + '-ms-transform: rotate(' + data.angle + 'rad); '
                       + 'top: ' + data.y + 'px; '
                       + 'left: ' + data.x + 'px; ';
            _this.myData[_this.currKey].line.setAttribute('style', styles);
        }

        _this.requestId = requestAnimationFrame(function(){_this.Draw()})
    },

    // ConnectLines.Init(".from > div")
    Init:function(fromsQuery){
        var _this = this;
        this.isDrawingLine = false
        this.myData = {}
        this.requestId = null
        // updated mouse position
        document.onmousemove = (event) => {
            var eventDoc, doc, body;
            event = event || window.event; // IE-ism
            // If pageX/Y aren't available and clientX/Y are,
            // calculate pageX/Y - logic taken from jQuery.
            // (This is to support old IE)
            if (event.pageX == null && event.clientX != null) {
                eventDoc = (event.target && event.target.ownerDocument) || document;
                doc = eventDoc.documentElement;
                body = eventDoc.body;

                event.pageX = event.clientX +
                  (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
                  (doc && doc.clientLeft || body && body.clientLeft || 0);
                event.pageY = event.clientY +
                  (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
                  (doc && doc.clientTop  || body && body.clientTop  || 0 );
            }
            this.mousePos={x: event.pageX, y: event.pageY}
        }
        // create base data
        froms = document.querySelectorAll(fromsQuery)
        for(let i=0; i<froms.length; i++){
            let myKey = froms[i].dataset.key
            let to = document.querySelector(`.to > div[data-key=${myKey}]`)

            let myLine = document.createElement("div");
            myLine.setAttribute('class', "arrow");
            myLine.classList.add("lineHide")
            document.body.appendChild(myLine)

            froms[i].addEventListener("mousedown", function(e){
                _this.DragStarted(myKey, froms[i])
            })
            this.myData[myKey] = {from: froms[i], to: to, line:myLine, guessed: false}
        }
        // Mouseup eventlistener
        document.addEventListener("mouseup", function(e){
            if(_this.isDrawingLine){
                if(!e.target.classList.contains("boxto")){
                    _this.myData[_this.currKey].line.classList.add("lineHide")
                }else{
                    _this.myData[_this.currKey].line.classList.remove("lineHide")
                    let droppedKey = e.target.dataset.key;
                    if(_this.currKey == droppedKey){
                        // console.log("Correct")
                        _this.myData[_this.currKey].line.classList.add("correct")
                        _this.myData[_this.currKey].from.classList.add("correct")
                        _this.myData[_this.currKey].to.classList.add("correct")
                        _this.myData[_this.currKey].guessed = true
                        _this.CheckAllGuessed()
                    }
                }
                _this.isDrawingLine = false
            }
        })
        this.Draw()
    },

    Stop: function(){
        window.cancelAnimationFrame(this.requestId);
        this.requestId = undefined;
        document.onmousemove = null

    }
}
