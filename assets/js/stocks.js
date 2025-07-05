document.addEventListener("DOMContentLoaded", function () {

    var stocksContent = document.getElementById('stocksContent');
    var stocksContentArray = stocksContent.children;
    var stoksSliderElips = document.getElementById('stoksSliderElips');

    NewElement(stocksContentArray.length, 'div', "elips", stoksSliderElips);

    var stoksSliderElipsArray = stoksSliderElips.children;
    var stoksLeft = document.getElementById('stoksLeft');
    var stoksRight = document.getElementById('stoksRight');

    numStocks = 0;

    Slider(numStocks, stocksContentArray, 'flex', stoksSliderElipsArray, 'elips_active')


    stoksLeft.addEventListener('click', (e) => {

        numStocks = SliderArray(e, 'stoksLeft', 'stoksRight', Slider, numStocks, stocksContentArray, 'flex', stoksSliderElipsArray, 'elips_active');

    });

    stoksRight.addEventListener('click', (e) => {

        numStocks = SliderArray(e, 'stoksLeft', 'stoksRight', Slider, numStocks, stocksContentArray, 'flex', stoksSliderElipsArray, 'elips_active');

    });


    for (let i = 0; i < stoksSliderElipsArray.length; i++) {
        stoksSliderElipsArray[i].addEventListener('click', () => {
            numStocks = i
            Slider(numStocks, stocksContentArray, 'flex', stoksSliderElipsArray, 'elips_active')
        });
    }
    
    
    for(let i = 0; i < stocksContentArray.length; i++){
        stocksContentArray[i].onclick = function(){
            localStorage.setItem('stocksKey', i);
        }
    }

});
