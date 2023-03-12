$(document).ready(function() {
    $('#amount').on('keyup', function () {
        let income = $(this).val();
        let UpdateRent = $("#rangeText").html();
    var needs =  parseInt(income * 0.5);
    var wants = parseInt(income * 0.3);
    var saving = parseInt(income * 0.2);
    var Update = parseInt(needs * UpdateRent /100);
    $('.need').html("$"+needs);
    $('.want').html("$"+wants);
     $('.save').html("$" + saving);
    $("#RentCal").html(Update);
    $('li').css('font-size', '20px');
        $('span').css('color', 'green');
       
    
   
  });
});


//Range bar move
 $(document).ready(function(){
      
       let Thumb = $("#range");
        let rangeText = $("#rangeText");
        
        let max = 50;
        let min = 10;
  
     Thumb.on("input", function () {
         let Percentage = (this.value - min) / (max - min) * 100;
         rangeText.text(this.value +"%");
         let rangeVal = ("#rangeText");
    
     })
 });
 

        


      