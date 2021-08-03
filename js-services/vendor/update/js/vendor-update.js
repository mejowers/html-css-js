

$(() => {
    $("#zGet").on("click", () => {
        var id = $("#zId").val();
        console.log("Id is ", id);
        vendorGetById(id) 
           .done(res => {
            console.debug(res);
            display(res);
        })
            .fail(err => {
                console.error(err);
            });
    })

    $("save").on("click", () => {
        let vendor = {};
        getVendor(vendor);
        vendorUpdate(vendor);
    });

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

const getVendor = (vendor) => {
    vendor.id = $("#uid").val(),
    vendor.code = $("#uCode").val(),
    vendor.name = $("#uName").val(),
    vendor.address = $("#uAddress").val(),
    vendor.city = $("#uCity").val(),
    vendor.state = $("#uState").val(),
    vendor.zip = $("#uZip").val(),
    vendor.phone = $("#uPhone").val(),
    vendor.email = $("#uEmail").val()
}


   