/* tinymce.init({
    selector: 'div#tinymce',
    inline: true,
    toolbar: 'insert | undo redo |  formatselect | bold italic backcolor  | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help',
}); */
$(document).ready(function(){
tinymce.init({
    selector: '#tinymce',
    height: 500,
    menubar: false,
    toolbar: 'insert | undo redo |  formatselect | bold italic backcolor  | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help'
  });
  
    $('#file_upload').uploadify({
        'swf'      : 'uploadify.swf',
        'uploader' : 'uploadify.php' 
        // Put your options here
    });


  $('#inp_img').change(function (e) { 
    
    e.preventDefault();
    if (this.files && this.files[0]) {
      
      var FR= new FileReader();
      
      FR.addEventListener("load", function(e) {
        document.getElementById("img").src       = e.target.result;
        $('#b64_image').val(e.target.result)
      }); 
       
      FR.readAsDataURL( this.files[0] );

    }
  });

  $('#filetitle').change(function (e) { 
    
    e.preventDefault();
    if (this.files && this.files[0]) {
      var FR= new FileReader();
      
      FR.addEventListener("load", function(e) {
        $('#b64_file').val(e.target.result)
      }); 
      FR.readAsDataURL( this.files[0] );

    }
  });
  
    
})

