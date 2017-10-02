function average(result,result1){
    
    var a= result+result1;
    return a/2;
      
    }
    function calculate(){
      
      var result =parseFloat($("#High").val());
    var result1 = parseFloat($("#Low").val());
    var b= average(result,result1);
    document.getElementById("res").value=b;
   
    }