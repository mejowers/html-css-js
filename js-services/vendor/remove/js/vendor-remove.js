let vendorId = 0;

$(() => {
    $("#zGet").on("click", () => {
        vendorId = $("#zId").val();
        vendorGetById(vendorId)
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
        vendorRemove(vendorId)
        .done(res => {
            console.debug(res);
            console.log("Remove successful!");
            $("#message").html("<b>Remove successful!</b>");
            
            })
            .fail(err => console.error(err));
            $("#message").html("<b>Remove not successful!</b>");

    });
});


const display = (vendor) => {
    $("#rId").val(vendor.id);
    $("#rCode").val(vendor.code);
    $("#rName").val(vendor.name);
    $("#rAddress").val(vendor.address);
    $("#rCity").val(vendor.city);
    $("#rState").val(vendor.state);
    $("#rZip").val(vendor.zip);
    $("#rPhone").val(vendor.phone);
    $("#rEmail").val(vendor.email);    
};

