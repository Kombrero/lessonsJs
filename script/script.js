let min = 0,
    max = 100,
    userInteger,
    i = 10;
    randomGame = function getrandomInteger(i){  
        function nestedFunc() {
            // получить случайное число от (min-0.5) до (max+0.5)
            let rand = min - 0.5 + Math.random() * (max - min + 1);
            rand = Math.round(rand)
            console.log(rand);
            
            userInteger = prompt('Угадай число от 0 до 100');

            console.log(Boolean(userInteger));
            console.log(userInteger);
            
            if(Boolean(userInteger) === false){
                return;
            }else{
                if(rand > userInteger){
                    alert('Загаданное число больше');
                }else if(rand < userInteger){
                    alert('Загаданное число меньше');
                }else if(rand == userInteger){
                    alert('Угадали');
                }else{
                    alert('Введите число');
                }
            }
        }
       nestedFunc();
       i--;
       if (i > 0){
           randomGame(i);
       }
    };
    randomGame(i);
  
//console.log(boleanChange());

// if (randomInteger === boleanChange()){
//     console.log('Вы угадали !!!');
// }else if(randomInteger < boleanChange()){
//     console.log('Загаданное число меньше');
// }else if(randomInteger > boleanChange()){
//     console.log('Загаданное число больше');
// }else{
//     console.log('Введите число');
// }