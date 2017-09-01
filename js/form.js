(function($) {
	 
	 $('#one').unbind("change.invitation");
	 $('#one').on("change.invitation", "input:radio[name=invitation]:checked", function () {
        if ($("input[name='invitation']:checked").val() == 'card') {
            $("#invitation_email").hide();
            $("#invitation_adress").show();
        }
        else if ($("input[name='invitation']:checked").val() == 'email') {
            $("#invitation_adress").hide();
            $("#invitation_email").show();
        }
        else if ($("input[name='invitation']:checked").val() == 'no') {
            $("#invitation_email").hide();
            $("#invitation_adress").hide();
        }
    });



	// $("#one").unbind("click.submit");
	// $("#one").on("click.submit", ".submit", function(){
	$('#one form').submit(function(e){
		if(!confirm("確定要送出嗎？"))
			return false;

		var name = $("#name").val();
		var answer = $('input[name="answer"]:checked').val();
		var phone = $("#phone").val();
		var relation = $('input[name="relation"]:checked').val();
		var number = $("#number").val();
		var vegetablenum = $("#vegetablenum").val();
		var childnum = $("#childnum").val();
		var addresscode = $("#addresscode").val();
		var address = $("#address").val();
		var email = $("#email").val();
		var bride_ = $('input[name="bride_"]:checked').val();
		var bridegroom_ = $('input[name="bridegroom_"]:checked').val();
		var message = $("#message").val();

		var data= {
			"method": "write",
			"name": name,
			"answer": answer,
			"phone": phone,
			"relation": relation,
			"number": number,
			"vegetablenum": vegetablenum,
			"childnum": childnum,
			"addresscode": addresscode,
			"address": address,
			"email": email,
			"bride_": bride_,
			"bridegroom_": bridegroom_,
			"message": message
		}
		// console.log(JSON.stringify(data));
		
		
		$.ajax({
			type: "post",
			// url: "https://script.google.com/macros/s/AKfycbxiP8CarQcgrB1ARS2b3nnZ9ncsnkVAGeg6r-ODtOhNbvo3TC0/exec", // 填入網路應用程式網址
			url: "https://script.google.com/macros/s/AKfycbz8zQi6ca0T4_HTlkDhcpZLrjq9_rvgYYhgdC_-SC-9vU2T17I/exec",
			dataType: "json",
			data: data,
			crossDomain: true,
			success: function(object,result,status){
				// modal.style.display = "block";
				if(typeof(object) == "object" && object.result == "Success")
					modal.style.display = "block";
				else{
					var errorModal = document.getElementById('errorModal');
					errorModal.style.display = "block";
				}
			},
			error: function(object,result,status){
				// modal.style.display = "block";
				if(typeof(object) == "object" && object.result == "Success")
					modal.style.display = "block";
				else{
					var errorModal = document.getElementById('errorModal');
					errorModal.style.display = "block";
				}
			}
		});
		return false;
	});


	var modal = document.getElementById('myModal');

	// Get the button that opens the modal
	var btn = document.getElementById("myBtn");

	// Get the <span> element that closes the modal
	// var span = document.getElementsByClassName("close")[0];

	// When the user clicks on <span> (x), close the modal
	// $(span).unbind();
	// span.onclick = function(event) {
	// 	event.preventDefault();
	//     modal.style.display = "none";
	// }

	// When the user clicks anywhere outside of the modal, close it
	// $(window).unbind();
	// window.onclick = function(event) {
	//     if (event.target == modal) {
	//         modal.style.display = "none";
	//     }
	// }

})(jQuery);