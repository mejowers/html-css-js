const baseurl = "http://localhost:8080/api/users/";

$(() => {
    console.log("Everything is ready!");

    $("#getid").on("click", () => {
        var id = $("#zId").val();
        console.log("Id is ", id);
        getUserById(id);
   })
     
   $("#delete").on("click", () => {
       var id = $("#zId").val();
        removeUser(id);
   })

});

const getUserById = (id) => {
    $.getJSON(`http://localhost:8080/api/users/${id}`)
    .done(res => { console.debug(res);
        displayUser(res);
    })
    .fail(err => {
        console.error(err);
    });

};

const displayUser = (user) => {
    $("#dId").html(user.id);
    $("#dUsername").text(user.username);
    $("#dFirstname").text(user.firstName);
    $("#dLastname").text(user.lastName);
    $("#dPhone").text(user.phone);
    $("#dEmail").text(user.email);
    $("#uReviewer").text(`${(user.reviewer ? "Yes" : "No")}`);
    $("#uAdmin").text(`${(user.admin ? "Yes" : "No")}`);
}

const removeUser = (id) => { 
   console.log(id);
$.ajax({
    method: "DELETE",
    url: `${baseurl}${id}`
   
})
  .done(res => {
      console.debug("Delete successful!");
  })
  .fail(err => {
      console.error(err);
  });

}