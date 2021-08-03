
$(() => {

    let urlParms = parseUrl();
    let id = +urlParms.id;
    vendorGetById(id)
        .done(res => {
            console.debug(res);
            display(res);
            })
            .fail(err => console.error(err));

    // $("#zGet").on("click", () => {
    //     let id = $("#zId").val();
    //     vendorGetById(id)
    //         .done(res => {
    //             console.debug(res);
    //             display(res);
    //         })
    //         .fail(err => console.error(err));
    // })
});


const display = (vendor) => {
    $("#dId").val(vendor.id);
    $("#dCode").val(vendor.code);
    $("#dName").val(vendor.name);
    $("#dAddress").val(vendor.address);
    $("#dCity").val(vendor.city);
    $("#dState").val(vendor.state);
    $("#dZip").val(vendor.zip);
    $("#dPhone").val(vendor.phone);
    $("#dEmail").val(vendor.email);    
}