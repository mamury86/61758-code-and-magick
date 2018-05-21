// var getMaxElement = function (arr) {
//     var max = -1;
//     var maxIndex = -1;

//     for (var i = 0; i < times.length; i++) {
//         var time = times[i];
//         if(time > max) {
//             max = time;
//             maxIndex = i;
//         }
//     }
//     return max;
// };


window.renderStatistics = function (ctx, names, times) {
    ctx.fillStyle = 'white';
    ctx.strokeRect(100, 10, 420, 270);
    ctx.fillRect(100, 10, 420, 270);

    ctx.fillStyle = '#000';
    ctx.font = '16px, PT Mono';

    ctx.fillText('Ура, вы победили!', 120, 40);
    
    // ctx.fillText('Список результатов:', 120, 80);

    var max = -1;
    var maxIndex = -1;

    for (var i = 0; i < times.length; i++) {
        var time = times[i];
        if(time > max) {
            max = time;
            maxIndex = i;
        }
    }

    var histogramWidth = 150;
    var step = histogramWidth / (max - 0);

    ctx.fillText('Худшее время', + max.toFixed(2) + 'ьс у ишрока' + names[maxIndex], 120, 60);

    var barHeight = 40;
    var indent = 50;
    var initialX = 120;
    var initialY = 80;
    var lineHeight = 15;

    for (var i = 0; i < times.length; i++) {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
        ctx.fillRect(initialX, initialY + indent * i, times[i] * step, barHeight);
        ctx.fillText(names[i], initialX + histogramWidth, initialY + lineHeight + indent * i);
    }

};


