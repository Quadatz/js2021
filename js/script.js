
//const result = prompt("Вам есть 18?", "Да");
// const result = +prompt("Вам есть 18?", "Да");
// console.log(typeof(result));

// const category = 'toys';

// console.log(`https://someurl.com/${category}/5`);

/*const user = "Ivan"

alert(`Привет, ${user}`); */



/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на 
вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
- count - сюда передается ответ на первый вопрос
- movies - в это свойство поместить пустой объект
- actors - тоже поместить пустой объект
- genres - сюда поместить пустой массив
- privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
- 'Один из последних просмотренных фильмов?'
- 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
movies: {
    'logan': '8.1'
}

Проверить, чтобы все работало без ошибок в консоли */

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


console.log(personalMovieDB); 

for (let i = 0; i < 2; i++)
{
    const a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', '');

    if(a != null && b != null && a != '' &&
    b != '' && a.length <= 50 && b.length <= 50) {
        personalMovieDB.movies[a] = b;
    } else{
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count < 30) {
    console.log('Вы обычный зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы киноман!');
}

