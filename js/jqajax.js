$(document).ready(function(){
    $("#btnadd").click(function(e){
        // prevent default use to stop page reload for submit button
        e.preventDefault();
        let uid=$("#uid").val();
        let nm=$("#nameid").val();
        let em=$("#emailid").val();
        let pw=$("#passwordid").val();
        mydata={id:uid,name:nm,email:em,password:pw};
        $.ajax({
            url:"insert.php",
            type:"POST",
            data:JSON.stringify(mydata),
            success:function(data){
                msg1="<div class='alert alert-dark mt-3'>"+data +"</div>";
                $("#msg").html(msg1);
                $("#myform")[0].reset();
            }
        })
    });
    // ajax request for deleting data 

    $("#tbody").on("click",".btn-del",function(){
        if(confirm("do you want to delete ?")){
        let id=$(this).attr("data-uid");
        console.log(id)
        mydata={uid:id};
        mythis=this;
        $.ajax({
            url:"delete.php",
            method:"POST",
            data:JSON.stringify(mydata),
            success:function(data){
                if(data==1){
                    msg1="<div class='alert alert-dark mt-3'>User deleted successfully</div>";
                    $(mythis).closest("tr").fadeOut();
                }else if(data==0){
                    msg1="<div class='alert alert-dark mt-3'>Unable to delete User</div>";
                }
                $("#msg").html(msg1);  
            }
        })
    }
    })

    // ajax for edit data
    $("#tbody").on("click",".btn-edit",function(){
        let id=$(this).attr("data-uid");
        mydata={uid:id};
        $.ajax({
            url:"edit.php",
            method:"POST",
            dataType:"json",
            data:JSON.stringify(mydata),
            success:function(data){
                $("#uid").val(data.id);
                $("#nameid").val(data.name);
                $("#emailid").val(data.email);
                $("#passwordid").val(data.password);

            }
        })
        })
});