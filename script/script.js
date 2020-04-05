let min = 0,
    max = 100,
    userInteger,
    i = 10;
    randomGame = function getrandomInteger(i){  
        if (userInteger === null) {
            return;
        }
        function nestedFunc() {
            // получить случайное число от (min-0.5) до (max+0.5)
            let rand = min - 0.5 + Math.random() * (max - min + 1);
            rand = Math.round(rand)
            console.log(rand);
            
            userInteger = prompt('Угадай число от 0 до 100');
            

            console.log(Boolean(userInteger));
            console.log(userInteger);
            
            
            i--;

            function repeat (){
                let replay = confirm('Хотите сыграть снова ?');
                console.log(replay);
                if(replay == false){
                   return userInteger = null; 
                }else{
                    i = 10;
                    nestedFunc();
                }
            }
           
            if (userInteger === null){
                return;
            }else if(rand < userInteger && userInteger.trim() !== ''){
                alert('Загаданное число меньше ' +'осталось ' + i + ' попыток');
            }else if(rand == userInteger){
                alert('Угадали ');
                repeat();
            }else if (rand > userInteger && userInteger.trim() !== '' ) {
                alert ('Загаданное число больше '  +'осталось ' + i + ' попыток')   
            }else {
                alert ('Введите число '  +'осталось ' + i + ' попыток');
            }
            if (i == 0){
                alert ('Конец игры');
                repeat();

               
     
            }                        
        }
        
        nestedFunc();
        
        if (i > 0){
            randomGame(i);
        }
    };
    randomGame(i);