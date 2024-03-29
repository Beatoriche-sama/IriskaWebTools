var canvasPanel;
$(document).ready(function() {
canvasPanel = document.getElementById("canvasPanel");
});

function createCanvas(result){
let index = 1;
for(logsId in result){
let value = result[logsId];
let canvas = document.createElement("canvas");
let logs = drawCanvas(index, canvas, value);
for(listInd in logs){
    index += logs[listInd].length;
}
canvasPanel.appendChild(canvas);
canvas.addEventListener('mousemove', (function (e) {
  drawToolTip(e, canvas, logs);
}));
}
}

function revalidateCanvas(){
    if(responseData == null) return;
    repaint();
    createCanvas();
}


function getLogInfoText(log){
var inputPoints = log.doublePoint;
return log.name + ' ' +
JSON.stringify(inputPoints);
}

  function drawCanvas(index, canvas, parsedResult){
    var ctx = canvas.getContext("2d");
    var background = new Image();
    background.src = parsedResult.imageSrc;
    var logsList = JSON.parse(parsedResult.logs);
    background.onload = function(){
        let ind  = index;
        canvas.width = background.width;
        canvas.height = background.height;
        ctx.drawImage(background,0,0);
     for(listInd in logsList){
         var list = logsList[listInd]
         var step;
         ctx.strokeStyle = 'purple';
         ctx.font = "bold 16px serif";
         ctx.fillStyle = "#ff0000";
         ctx.lineWidth = 3;
         ctx.beginPath();

    for (step = 0; step < list.length; step++) {
        var log = list[step];
        var scaledPoint1 = log.scaledGamePoint;
        ctx.moveTo(scaledPoint1.x, scaledPoint1.y);
        var src = JSON.parse(log.teleport) == true?
                "/images/tp.png" : "/images/x_mark.png";
        addMarker(src, ctx, scaledPoint1.x, scaledPoint1.y, ind, log);
        if(step != list.length - 1){
        var scaledPoint2 = list[step + 1].scaledGamePoint;
        ctx.lineTo(scaledPoint2.x, scaledPoint2.y);
        }
        ctx.stroke();
        ind++;
    }
    }
    }
    return logsList;
}

function addOutLineText(ctx, text, x, y){
    var fontsize = 16;
    var fontface = 'verdana';
    var lineHeight = fontsize;
    ctx.font = fontsize + 'px ' + fontface;
    var textWidth = ctx.measureText(text).width;

    ctx.strokeStyle = 'dark blue';
    ctx.fillStyle = '#63E5FF';
    ctx.beginPath();
    ctx.arc(x, y, textWidth / text.toString().length, 0, 2 * Math.PI, false);
    ctx.stroke();
    ctx.fill();

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.strokeStyle = 'black';
    ctx.strokeText(text, x, y)
    ctx.fillStyle = 'white';
    ctx.fillText(text, x, y)
}

function addMarker(src, ctx, x, y, step, log){
   var marker = new Image();
   marker.src = src;
   marker.onload = function(){
    var imgWidth = 30;
    var imgHeight = 30;
    var imgWidthCenter = imgWidth / 2;
    var imgHeightCenter = imgHeight / 2;
    var imageX = x - imgWidthCenter;
    var imageY = y - imgHeightCenter;
    addOutLineText(ctx, step, imageX + imgWidthCenter, imageY);
    /*if(isTooltipEnabled == false)
    addOutLineText(ctx, getLogInfoText(log), imageX + imgWidth, imageY + imgHeightCenter);*/
    ctx.drawImage(marker, imageX, imageY, imgWidth, imgHeight);
   }
}

function drawToolTip(e, canvas, data){
        e.preventDefault();
        e.stopPropagation();
        canvas.title = "";

        var bounds = canvas.getBoundingClientRect();
        var canvasWidth = canvas.width;
        var canvasHeight = canvas.height;

        var currentX = e.clientX - bounds.left;
        var currentY = e.clientY - bounds.top;

        for(i in data){
        var logs = data[i]
        for(index in logs){
        var log = logs[index];
        var point = log.scaledGamePoint;
        var x = point.x;
        var y = point.y;
        var margin = 4;

         if(Math.abs(x - currentX) < margin
                && Math.abs(y - currentY) < margin)
                canvas.title = getLogInfoText(log);
        }
        }

  }