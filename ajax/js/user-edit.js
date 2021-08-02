const baseurl = "http://localhost:8080/api/users/";

$(() => {

   $("#getid").on("click", () => {
        var id = $("#zId").val();
        console.log("Id is ", id);
        getUserById(id);
   })
  
   $("#save").on("click", () => {
       let user = {};
       getFromPage(user);
        updateUser(user);
    });
});

const getUserById = (id) => {
    $.getJSON(`${baseurl}${id}`)
     .done(res => { console.debug(res);
        displayUser(res);
    })
    .fail(err => {
        console.error(err);
    });

};

const displayUser = (user) => {
    $("#uId").val(user.id);
    $("#uUsername").val(user.username);
    $("#uPassword").val(user.password);
    $("#uFirstName").val(user.firstName);
    $("#uLastName").val(user.lastName);
    $("#uPhone").val(user.phone);
    $("#uEmail").val(user.email);
    $("#uReviewer").prop("checked", user.reviewer);
    $("#uAdmin").prop("checked", user.admin);
}

// const update = () => {
//     let updateUser = {
//         id: $("#uId").val(),
//         username: $("#uUsername").val(),
//         password: $("#uPassword").val(),
//         firstName: $("#uFirstName").val(),
//         lastName: $("#uLastName").val(),
//         phone: $("#uPhone").val(),
//         email: $("#uEmail").val(),
//         reviewer: $("#uReviewer").prop("checked"),
//         admin: $("#uAdmin").prop("checked")
//     }

    const getFromPage = (user) => {
            user.id = $("#uId").val(),
            user.username = $("#uUsername").val(),
            user.password = $("#uPassword").val(),
            user.firstName = $("#uFirstName").val(),
            user.lastName = $("#uLastName").val(),
            user.phone = $("#uPhone").val(),
            user.email = $("#uEmail").val(),
            user.reviewer = $("#uReviewer").prop("checked"),
            user.admin = $("#uAdmin").prop("checked")
        }

    const updateUser = (user) => {
        // user.id = Number(user.id);
        user.id = +user.id;
        console.log(user);
    $.ajax({
        method: "PUT",
        url: `${baseurl}`,
        data: JSON.stringify(user),
        contentType: "application/json"
    })
      .done(res => {
          console.debug("Update successful!");
      })
      .fail(err => {
          console.error(err);
      });
};