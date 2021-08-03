

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
        vendor.id = Number(vendor.id);
        vendorUpdate(vendor)
            .done(res => {
            console.debug(res);
            display(res);
            
            })
            .fail(err => console.error(err));
    });
});

const display = (vendor) => {
    $("#uId").val(vendor.id);
    $("#uCode").val(vendor.code);
    $("#uName").val(vendor.name);
    $("#uAddress").val(vendor.address);
    $("#uCity").val(vendor.city);
    $("#uState").val(vendor.state);
    $("#uZip").val(vendor.zip);
    $("#uPhone").val(vendor.phone);
    $("#uEmail").val(vendor.email);    
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




   