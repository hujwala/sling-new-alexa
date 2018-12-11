  jQuery(function($) {
    $('#submit-button').click(function(event){
      debugger;
      event.preventDefault();
      var email = '';
      var password = '';

      email = $('#signup-form #email').val();
      password = $('#signup-form #password').val();

      if(email && password){
        var url = document.location;
        var api_url = '';
        api_url = 'https://ums.q.sling.com/v5/sessions';
        $.ajax({
          url: api_url,
          dataType:'json',
          header:{
            'Access-Control-Allow-Origin':'*'
          },

          type: 'post',
          data: {
             "email": email,
             "password": password
         },

         success:function(response){
         console.log("sucess!!");

         },

         error:function(error){
          console.log(error.responseJSON.error);
          var err = '<h3>'+error.responseJSON.error+'</h3>'
                  $('#error-msg').append(err);
        }
      });
      }
    });
  });