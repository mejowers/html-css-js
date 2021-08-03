

$(() => {
    $("#zGet").on("click", () => {
        let id = $("#zId").val();
        vendorGetById(id)
            .done(res => {
                console.debug(res);
                display(res);
            })
            .fail (err => {
                $("#message").html("</b>Vendor not found!</b>");
                console.error(err);
    });
});

    $("#save").on("click", () => {
       update();

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

const update = () => {
    let vendor = {};
    vendor.id = $("#uId").val();
    vendor.code = $("#uCode").val();
    vendor.name = $("#uName").val();
    vendor.address = $("#uAddress").val();
    vendor.city = $("#uCity").val();
    vendor.state = $("#uState").val();
    vendor.zip = $("#uZip").val();
    vendor.phone = $("#uPhone").val();
    vendor.email = $("#uEmail").val();

vendor.id = Number(vendor.id);
vendorUpdate(vendor)
    .done(res => {
    console.debug(res);
    console.log("Update successful!");
    $("#message").html("<b>Change successful!</b>");
    
    })
    .fail(err => console.error(err));
    $("#message").html("<b>Change successful!</b>");
};

  




   