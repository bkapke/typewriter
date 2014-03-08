#Typewriter.js

[Demo](http://yourshoesuntied.com/typewriter-js-demo/)

##Description

Typwriter.js is a quick easy plugin that allows you pick a bloack of text and simulate it being typed into the page.



##Dependencies

###**jQuery**

###**typewriter.js**


##Implementation

Include the scripts.  **Make sure file paths are correct!**

    <script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
    <script src="js/typewriter.js"></script>

Create a css class for the typewriter text  

    .typewriter {
        /*Hide The text initially, the JS file will add it back to the dom */
        display: none;
    }
    
Delcare the settings and initialize the library.

    $(document).ready(function(){
        //settings
        var settings = ({
            delayedStart: 0,
            speed: 50,
            randomRange: true,
            debug: false,
            //keyClickPath : "audio/typewriter-1.mp3"
        });
        
        //element
        var typeWriter = new TypeWriter($('#typewriter'), settings);
        
        //initialize
        typeWriter.startTyping();
        
        //listen for skip button
        $('#skip').click(function() {
            //this just shows the text and ends the loop
            typeWriter.skip();    
        });
        
        //listen for restart button
        $('#restart').click(function() {
            //this just shows the text and ends the loop
            typeWriter.restart();    
        });
        
        
        
    });
    
Format your html.


    <div>
        <input id="skip" type="button" value="skip">
        <input id="restart" type="button" value="restart">
    </div>

    <div>
        <p class="typewriter" id="typewriter">
            Hello there, I am typewriter.js.  Initialize me and I will type out your text block in the view. And now for some ipsum text....<br><br> In facilisis scelerisque dui vel dignissim. Sed nunc orci, ultricies congue vehicula quis, facilisis a orci. In aliquet facilisis condimentum. Donec at orci orci, a dictum justo. Sed a nunc non lectus fringilla suscipit. Vivamus pretium sapien sit amet mauris aliquet eleifend vel vitae arcu. Fusce pharetra dignissim nisl egestas pretium. 
            <div style="display:none;">
            <a href="http://slipsum.com">lorem ipsum</a></div>
        </p>
    </div>
