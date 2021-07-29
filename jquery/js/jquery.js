let topics = [
    { name: "Git/GitHub", rating: 4},
    { name: "SQl", rating: 5},
    { name: "Java/C#", rating: 3}
];

$( () => {
    console.log("The HTML is loaded!");
    display();
} );

const display = () => {
    let tbody = $("#tbody");
    for(let topic of topics) {
        let tr = $("<tr></tr>");
        let tdName = $(`<td>${topic.name}</td>`);
        tr.append(tdName);
        let tdRating = $(`<td>${topic.rating}</td>`);
        tr.append(tdRating);
        tbody.append(tr);
    }
}