    function addtask () {
        var taskinput = document.getElementById("new-task");
        var tasktext = taskinput.value.trim();
        if (tasktest!=="")
            {
                var tasklist =document.getElementById("task-list");
                var listitems = document.createElement("li");
                listitems.className="task";
                listitems.textcontent = tasktext;

                //create a delete button
                var deletebutton = document.createElement("button");
                deletebutton.textcontent="delete" ;

                //add event listener to delete button
                deletebutton.addEventListener("click", function(){
                    tasklist.removechild(listitems);
                });
    //append delete button to list item
    listitems.appendchild(deletebutton);
    tasklist.appendchild(listitems);
    taskinput.value="";
            }
    }
    document.getElementById("add-task").addEventListener("click", addtask);

    document.getElementById("new-task").addEventListener("keypress", function(event){
        if (event.key==="Enter"){
            addtask();
        }
    });