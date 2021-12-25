
// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
function ans1(){
    const result = inventors.filter(inventor => inventor.year > 1500 && inventor.year < 1600);
    return result;
}

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
function ans2(){
    const result = inventors.map(inventor => inventor.first + " " + inventor.last)
    return result;
}

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
function ans3(){
    const result = inventors.sort(
        function(a, b){
            if(a.year > b.year) return 1;
            if(a.year == b.year) return 0;
            if(a.year < b.year) return -1;
    })
    return result
}

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
function ans4(){
    const lives = inventors.map(inv => inv.passed - inv.year)
    const result = lives.reduce( (acc, val, idx) => {return acc += val})

    return result;
}

// 5. Sort the inventors by years lived
function ans5(){
    const result = inventors.sort(
        function(a, b){
            if((a.passed-a.year) > (b.passed-b.year)) return 1;
            if((a.passed-a.year) == (b.passed-b.year)) return 0;
            if((a.passed-a.year) < (b.passed-b.year)) return -1;
        }
    )

        return result;
}

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// run ans6() on this web site
function ans6(){
    const category = document.querySelector(".mw-category")
    const link = category.querySelectorAll("a")

    const linkArr = Array.from(link);

    const result = linkArr.filter(word => word.textContent.split(" ").includes("de"))
                    .map(names => names.textContent)

    return result;
}


// 7. sort Exercise
// Sort the people alphabetically by last name
function ans7(){
    const result = people.sort(
        function(a, b){
            a = a.split(",")[0].toUpperCase()
            b = b.split(",")[0].toUpperCase()

            if(a > b) return 1;
            if(a == b) return 0;
            if(a < b) return -1;
        }
    )

    return result;
}

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

function ans8(){
    const result = data.reduce(function(obj, item){
        if(!obj[item]){
            obj[item] = 0;
        }
        obj[item]++;
        return obj;
    }, {})

    return result;
}