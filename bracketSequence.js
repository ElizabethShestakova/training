        let catalanLine = [1,1,2,5,14,42,132,429,1430,4862,16796];
        function shuffle(arr) {                      
            let currentIndex = arr.length, 
                swap,
                randomIndex;
            while (currentIndex !== 0) {
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex--;

                swap = arr[currentIndex];
                arr[currentIndex] = arr[randomIndex];
                arr[randomIndex] = swap;
            }            
            return arr;
        }        
        function validate(str) {
            let count = 0;
            for (let i = 0; i < str.length; i++) {
                if (str[i] == '(') {
                    count++;
                } else {
                    if (count == 0) {
                        return false;
                    } else {
                        count--;
                    }
                }
            }
            if (count == 0) {
                return true;
            } else {
                return false;
            }
        }
        function makeBrackets(n) {
            let result = [],
                bracketsLength = n*2,
                brackets = '()',
                intermediateResult = brackets.repeat(n),
                resultLength = catalanLine[n];                
                console.log(resultLength);
                result.push(intermediateResult);                
                
                while (result.length < resultLength) {
                    let shuffledString = shuffle(intermediateResult.split('')).join('');

                    if (validate(shuffledString)) {
                        //проверить есть ли такой массив в результате
                        let canPush = true;
                        for (let i = 0; i < result.length; i++) {                            
                            if (result[i] == shuffledString) {
                                canPush = false;
                            }
                        }
                        if (canPush) {
                            result.push(shuffledString);
                        }
                    }

                }
                return result.sort();

        }
        console.log('Скобочная последовательность из числа 2' + makeBrackets(2));
        console.log('Скобочная последовательность из числа 3' + makeBrackets(3));
        console.log('Скобочная последовательность из числа 0' + makeBrackets(0));
        console.log('Скобочная последовательность из числа 11' + makeBrackets(11));
        
       