
function ranking(people) {
    let result =  people.sort((a,b) => {return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1}).sort((a,b) => { return b.points - a.points}),
        position = 1;

    result.forEach((item, i) => {
        i === 0 ? item.position = position : result[i - 1].points === result[i].points ? item.position = result[i - 1].position : item.position = position;      
        position++;
    });

    return result;
}
console.log(ranking([
    {
      name: "John",
      points: 100,
    },
    {
      name: "Bob",
      points: 130,
    },
    {
      name: "Mary",
      points: 120,
    },
    {
      name: "Kate",
      points: 120,
    },
  ]));