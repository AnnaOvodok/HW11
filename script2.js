// function declaration - объявление функции
// заголовок функции + тело функции - {}
function myBestJavaScriptFunction(name, age, salary, isStudent) {
    // console.log(name + ' ' + age + ' ' + salary); // склеивание строк и массивов - конкатинация
    console.log(`
                 Info about ${name} 
                 his age is = ${age} 
                 and his salary is = ${salary}
                 and his state = ${isStudent}`);
}

myBestJavaScriptFunction('Admin', 24, 100500, true);
myBestJavaScriptFunction('Jack Sparrow', 30, 100500, false);
myBestJavaScriptFunction('John Dow', 42, 1500, false);

function homework(sum, diff, mult, div) {
    console.log(`
        Сумма чисел a + b = ${sum}
        Разница чисел a - b = ${diff}
        Произведение чисел a * b = ${mult}
        Деление чисел a / b = ${div}`)
}

homework(30, 10, 200, 2);

