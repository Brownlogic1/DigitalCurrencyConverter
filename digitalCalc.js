  $.get("https://api.coinmarketcap.com/v1/ticker/", function (data, status) {
            for (var i = 0; i < data.length - 1; i++) {
                if (data[i].id == "bitcoin") {
                    $("#my_cell").html(data[i].price_usd);
                    var x = $("#my_cell").html(data[i].price_usd);
                    console.log(x);
                }
                if (data[i].id == "litecoin") {
                    $("#my_cell1").html(data[i].price_usd);
                }
                if (data[i].id == "ethereum") {
                    $("#my_cell2").html(data[i].price_usd);
                }
            }
        });
        const inputs = document.querySelectorAll('#my_cell');
        function calc(button) {
            var cashToSpend = document.getElementById('cashToSpend').value;
            var coinToConvert = document.getElementById('coinToConvert').value;
            var answerDiv = document.getElementById('answer');
            var answerConvertDiv = document.getElementById('answerUSD');
            var btcPrice = document.body.querySelector("#my_cell").innerHTML;
            var ltcPrice = document.body.querySelector("#my_cell1").innerHTML;
            var ethPrice = document.body.querySelector("#my_cell2").innerHTML;
          
            var totalBtcDiv = document.getElementById('totalBTC');
            var totalLtcDiv = document.getElementById('totalLTC');
            var totalEthDiv = document.getElementById('totalETH');
            var totalBtc = document.getElementById('totalBTC').textContent;
            var totalLtc = document.getElementById('totalLTC').textContent;
            var totalETH = document.getElementById('totalETH').textContent;
            var bankRoll = document.getElementById('bankRoll');


            var btnCoin = button.value;
            switch (btnCoin) {
                case btnCoin = 'BTC':
                    var btcBought = cashToSpend / btcPrice;
                    answerDiv.textContent = "You have purchased " + btcBought + " bitcoin";
                    
                    
                    totalBtcDiv.textContent = +totalBtc + +btcBought;
                   bankRoll.textContent -= cashToSpend;
                    
                    break;
                case btnCoin = 'LTC':
                    var ltcBought = cashToSpend / ltcPrice;
                    answerDiv.textContent = "You have purchased " + ltcBought + " litecoin";
                   
                    totalLtcDiv.textContent = +totalLtc + +ltcBought;
                    bankRoll.textContent -= cashToSpend;
                    break;
                case btnCoin = 'ETH':
                    var ethBought = cashToSpend / ethPrice;
                    answerDiv.textContent = "You have purchased " + ethBought + " ethereum";
                    
                    totalEthDiv.textContent = +totalETH + +ethBought;
                    bankRoll.textContent -= cashToSpend;
                    break;
                case btnCoin = 'BTCtoCash':
                    var btcSold = coinToConvert * btcPrice;
                    answerConvertDiv.textContent = "You can sell for " + btcSold;
                    totalBtcDiv.textContent = +totalBtc - +coinToConvert;
                    bankRoll.textContent = +btcSold + +bankRoll.textContent;


                    break;
                case btnCoin = 'LTCtoCash':
                    var ltcSold = coinToConvert * ltcPrice;
                    answerConvertDiv.textContent = "You can sell for " + ltcSold;
                    totalLtcDiv.textContent = +totalLtc - +coinToConvert;
                    bankRoll.textContent = +ltcSold + +bankRoll.textContent;
                    break;
                case btnCoin = 'ETHtoCash':
                    var ethSold = coinToConvert * ethPrice;
                    answerConvertDiv.textContent = "You can sell for " + ethSold;
                    totalEthDiv.textContent = +totalETH - +coinToConvert;
                    bankRoll.textContent = +ethSold + +bankRoll.textContent;
                    break;
                default:
                    break;

            }




        }
