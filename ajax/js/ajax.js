

$(() => {
    console.log("Everything is ready!");
}); 

const getAllUsers = () => {
    $.getJSON(`http://localhost:8080/api/users/`)
        .done(res => {
            console.debug(res);
            display(res);
        })
        .fail(err => {
            console.error(err);
        });
    }

const display = (users) => {
    let tbody = $("tbody");
    tbody.empty();
    for(let user of users) {
        let tr = $("<tr></tr>");
        tr.append( $(`<td>${user.id}</td>`) );
        tr.append( $(`<td>${user.username}</td>`) );
        tr.append( $(`<td>${user.firstName} ${user.lastName}</td>`) );
        tr.append( $(`<td>${user.phone}</td>`) );
        tr.append( $(`<td>${user.email}</td>`) );
        tr.append( $(`<td>${user.reviewer ? "Yes" : "No"}</td>`) );
        tr.append( $(`<td>${user.admin ? "Yes" : "No"}</td>`) );
        tbody.append(tr);
    }
};