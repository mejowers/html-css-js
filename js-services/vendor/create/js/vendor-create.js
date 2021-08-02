

$(() => {
    $("#save").on("click", () => {
        
        add();
            
})
   
});

const add = () => {
    let vendor = {};
    vendor.id = $("#xId").val();
    vendor.code = $("#xCode").val();
    vendor.name = $("#xName").val();
    vendor.address = $("#xAddress").val();
    vendor.city = $("#xCity").val();
    vendor.state = $("#xState").val();
    vendor.zip = $("#xZip").val();
    vendor.phone = $("#xPhone").val();
    vendor.email = $("#xEmail").val();


vendorAdd(vendor)
    .done(res => {
    console.debug(res);
    console.log("Added successfully!")
    })
    .fail(err => console.error(err));
};
