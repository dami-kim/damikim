(function(m,a,i,l,e,r){ m['MailerLiteObject']=e;function f(){
    var c={ a:arguments,q:[]};var r=this.push(c);return "number"!=typeof r?r:f.bind(c.q);}
    f.q=f.q||[];m[e]=m[e]||f.bind(f.q);m[e].q=m[e].q||f.q;r=a.createElement(i);
    var _=a.getElementsByTagName(i)[0];r.async=1;r.src=l+'?v'+(~~(new Date().getTime()/1000000));
    _.parentNode.insertBefore(r,_);})(window, document, 'script', 'https://static.mailerlite.com/js/universal.js', 'ml');
    
    var ml_account = ml('accounts', '3734594', 'o5s5e8x8r6', 'load');
    

// (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
//     .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
//     n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
//     (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
//     ml('account', '610408');


$(function(){
    $("#nav-placeholder").load("/nav.html");
});


$(function(){
    $("#s-nav-placeholder").load("/s-nav.html");
});

  
 // Accordion 
 function myAccFunc() {
    var x = document.getElementById("demoAcc");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// $(document).ready(function() {
//     $('#demoAcc a').each(function() {
//     //   var li = $('this');
//     //   var a = $('a', li);
//       var a = $('this');
//       console.log("a");
//       if( a.includes("artwork") == true ) {
//         document.getElementById("#demoAcc").addClass('w3-show');
//         console.log('include');
//       }
//     });
//   });

// Click on the "Jeans" link on page load to open the accordion for demo purposes
// document.getElementById("myBtn").click();




// Open and close sidebar
function w3_open() {
    // document.getElementById("mySidebar").style.right = "0";
    // document.getElementById("mySidebar").style.left = "null";
    document.getElementById("close").style.display = "block";
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
    }
    
function w3_close() {
    // document.getElementById("mySidebar").style.right = "null";
    // document.getElementById("mySidebar").style.left = "0";
    document.getElementById("close").style.display = "none";
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
    }  
    
      

window.addEventListener('load', videoScroll);
window.addEventListener('scroll', videoScroll);

function videoScroll() {

  if ( document.querySelectorAll('video[autoplay]').length > 0) {
    var windowHeight = window.innerHeight,
        videoEl = document.querySelectorAll('video[autoplay]');

    for (var i = 0; i < videoEl.length; i++) {

      var thisVideoEl = videoEl[i],
          videoHeight = thisVideoEl.clientHeight,
          videoClientRect = thisVideoEl.getBoundingClientRect().top;

      if ( videoClientRect <= ( (windowHeight) - (videoHeight*.5) ) && videoClientRect >= ( 0 - ( videoHeight*.5 ) ) ) {
        thisVideoEl.play();
      } else {
        thisVideoEl.pause();
      }

    }
  }

}

<script>
  var video = document.getElementById('myVideo');
  video.autoplay = true;
  video.load();
</script>
