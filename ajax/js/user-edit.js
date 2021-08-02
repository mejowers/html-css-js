const baseurl = "http://localhost:8080/api/users/";

$(() => {

   $("#getid").on("click", () => {
        var id = $("#zId").val();
        console.log("Id is ", id);
        getUserById(id);
   })
  
   $("#save").on("click", () => {
        update();
    })
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

const update = () => {
    let updateUser = {
        id: $("uId").val(),
        username: $("#uUsername").val(),
        password: $("#uPassword").val(),
        firstName: $("#uFirstName").val(),
        lastName: $("#uLastName").val(),
        phone: $("#uPhone").val(),
        email: $("#uEmail").val(),
        reviewer: $("#uReviewer").prop("checked"),
        admin: $("#uAdmin").prop("checked")
    }

    $.ajax({
        method: "PUT",
        url: "${baseurl}${id}",
        data: JSON.stringify(updateUser),
        contentType: "application/json"
    })
      .done(res => {
          console.debug(res, " - Updated!");
      })
      .fail(err => {
          console.error(err);
      });
};