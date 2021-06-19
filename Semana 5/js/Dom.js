$(document).ready(
    function() {

        $("#tarea").on("focus", function() {
            $(this).css('background-color', '#d1ebf7');
        });

        $("#des").click(
            function() {
                $("#tarea").attr('disabled', 'disabled')
            }
        )

        var nuevaTarea;

        $("#Agregar").click(
            function() {
                nuevaTarea = $("#tarea").val();
                $("#toDo").append("<li>" + nuevaTarea + "</li>");
                //alert(nuevaTarea);
            }
        )
    }
);