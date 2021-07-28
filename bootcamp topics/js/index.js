class Topic {
    constructor(name, rating =3) {
        this.name = name;
        this.rating = rating;
    }
}

let topics = [
    new Topic("Git/GitHub", 4),
    new Topic("MySql", 4),
    new Topic("Sql", 4),
    new Topic("Java", 4),
    new Topic("C#/.Net", 4),
    new Topic("HTML", 4),
    new Topic("Bootstrap", 4),
    new Topic("CSS", 4),
    new Topic("Entity Framework", 4),
    new Topic("SSMS", 4),
    new Topic("Scrum", 4)
];

const displayTopics = () => {
    let tbody = document.getElementById("tbody");
    tbody.innerHTML = "";
    for(let topic of topics) {
        let tr = "<tr>";
        tr += `<td>${topic.name}</td>`;
        tr += `<td>${topic.rating}</td>`;
        tr += "</tr>";
        tbody.innerHTML += tr;
    }
};