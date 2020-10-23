var rows = 3;
var cols = 9;

$(document).ready(function(){
    for(var i=0; i<30; ++i){
        addBingoSheet();
    }
});

function addBingoSheet(){
    var $bingoSheet = $("<div><h3>Happy Vijayadashami</h3></div>");
    $bingoSheet.append("<img src='bingokite.png' />")
    for(var i=0; i<5; ++i){
        $bingoSheet.append(createBingoBlock(getNumberPool(75, [38, 42])));
    }
    $(".bingoContainer").append($bingoSheet);
}

function getNumberPool(n, excludeNumArr){
    var numberPool = [];
    for(var i=1; i<=n; ++i){
        if(!excludeNumArr.includes(i)){
            numberPool.push(i);
        }
    }
    return numberPool;
}

function createBingoBlock(numberPool){
    var $table = $("<table></table>");
    for(var i=0; i<rows; ++i){
        var $tr = $("<tr></tr>");
        var blocksToFill = 5;
        for(var j=0; j<cols; ++j){
            var $td = $("<td></td>");
            if(blocksToFill >= 0 && shouldFill(blocksToFill, cols-j)){
                $td.text(getNumberToFill(numberPool));
                --blocksToFill;
            }
            $tr.append($td);
        }
        $table.append($tr);
    }

    return $table;
}

function shouldFill(blocksToFill, blocksRemaining){
    return blocksToFill > Math.random() * blocksRemaining;;
}

function getNumberToFill(numberPool){
    var len = numberPool.length;
    var ind = parseInt(Math.random()*len);
    var value = numberPool[ind];
    numberPool.splice(ind, 1);
    return value;
}
