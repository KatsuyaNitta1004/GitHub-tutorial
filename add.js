$("#addTodo").click(function() {
    const input = $("#input").val();
    $("#todoList").append("<li><input type='checkbox'>" + inputTodo + "</li>");
 
    $("input").val("");
}