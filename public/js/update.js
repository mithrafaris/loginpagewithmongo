$("#userdetails").submit(function (event) {
  event.preventDefault();
  var unindexed_array = $(this).serializeArray();
  var data = {};
  $.map(unindexed_array, function (n, i) {
    // Fixed the syntax error here
    data[n["name"]] = n["value"];
  });

  console.log(data);
  var request = {
    url: `http://localhost:3000/api/users/${data.id}?`,
    method: "put",
    data: data,
  };
  $.ajax(request).done(function (response) {
    alert("data updated successfully!");
  });
});

if(window.location.pathname=="/userdetails"){
    console.log("comming in if condition");
$ondelete=$(".table tbody td a.delete");
console.log($ondelete);
$ondelete.click(function() {
    
var id=$(this).attr("data-id")
var request ={
    "url": `http://localhost:3000/api/users/${id}?`,
    "method":"delete"
}  
if(confirm("Do you really want to delete this record?"))
{
    $.ajax(request).done(function (response) {
        alert("Date deleted successfully")
        location .reload()
        
    })
}  
})
}
