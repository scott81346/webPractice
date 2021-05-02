let mapArray, ctx, currentImgMain;
let imgMountain, imgMain, imgEnemy;
const gridLength = 200;

$(function(){
    mapArray = [
        [0,1,1],
        [0,0,0],
        [3,1,2]
    ]; //0-可走、1-障礙、2-終點、3-敵人
    ctx = $("#myCanvas")[0].getContext("2d");

    imgMain = new Image();
    imgMain.src = "images/spriteSheet.png";
    currentImgMain = {
        // "x":0,
        // "y":0
        x:0,
        y:0
    };
    imgMain.onload = function(){
        //從原本的圖的(0,0)剪下寬80高130的區域，貼至目前指定位置，並且縮放成指定的寬度與高度
        ctx.drawImage(imgMain,0,0,80,130,currentImgMain.x,currentImgMain.y, gridLength, gridLength);
        // ctx.drawImage(imgMain,0,0);
        // ctx.drawImage(imgMain,0,0,300,300);
    };

    imgMountain = new Image();
    imgMountain.src = "images/material.png";
    imgEnemy = new Image();
    imgEnemy.src = "images/Enemy.png";
    
    imgMountain.onload = function(){
        imgEnemy.onload = function(){
            for(var x in mapArray){
                for(var y in mapArray){
                    if(mapArray[x][y]==1){
                        ctx.drawImage(imgMountain,32,65,32,32,y*gridLength,x*gridLength, gridLength, gridLength);
                    }else if (mapArray[x][y]==3){
                        ctx.drawImage(imgEnemy,7,40,104,135,y*gridLength,x*gridLength, gridLength, gridLength);
                    }
                }
            }
        };
    };

});

$(document).on("keydown",function(event){

    let targetImag, targetBlock, cutImagePositionX;
    targetImag = {
        x:-1,
        y:-1
    };
    targetBlock = {
        x:-1,
        y:-1
    };

    event.preventDefault();
    
    // console.log(event);

    switch(event.code){
        //shift +tab 反縮排
        case "ArrowLeft":
            targetImag.x = currentImgMain.x - gridLength;
            targetImag.y = currentImgMain.y;
            cutImagePositionX = 175;
            break;
        case "ArrowUp":
            targetImag.x = currentImgMain.x;
            targetImag.y = currentImgMain.y - gridLength;
            cutImagePositionX = 355;
            break;
        case "ArrowRight":
            targetImag.x = currentImgMain.x + gridLength;
            targetImag.y = currentImgMain.y;
            cutImagePositionX = 540;
            break;
        case "ArrowDown":
            targetImag.x = currentImgMain.x;
            targetImag.y = currentImgMain.y + gridLength;
            cutImagePositionX = 0;
            break;
        default:
            return;
    }

    console.log(`TargetImag(${targetImag.x},${targetImag.y})`);
    console.log(`TargetBlcok(${targetImag.x},${targetImag.y})`);

    if(targetImag.x<=400 && targetImag.x>=0 && targetImag.y <=400 && targetImag.y >=0){
        targetBlock.x = targetImag.y / gridLength;
        targetBlock.y = targetImag.x / gridLength;
    }else{
        targetBlock.x = -1;
        targetBlock.y = -1;
    }

    ctx.clearRect(currentImgMain.x, currentImgMain.y, gridLength,gridLength);
    // c
    if(targetBlock.x!=-1 && targetBlock.y!=-1){
        switch(mapArray[targetBlock.x][targetBlock.y]){
            case 0:
                $("#talkBox").text("");
                currentImgMain.x = targetImag.x;
                currentImgMain.y = targetImag.y;
                break;
            case 1:
                $("#talkBox").text("有山");
                break;
            case 2:
                $("#talkBox").text("抵達終點");
                currentImgMain.x = targetImag.x;
                currentImgMain.y = targetImag.y;
                break;
            case 3:
                $("#talkBox").text("哈摟");
                break;
    }
    }else{
        $("#talkBox").text("邊界");
    }

    ctx.drawImage(imgMain,cutImagePositionX,0,80,130,currentImgMain.x,currentImgMain.y, gridLength, gridLength);

});