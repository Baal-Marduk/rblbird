new fullpage('#fullpage', {
    //options here
    autoScrolling:true,
    scrollHorizontally: true,
    licenseKey: '040537C2-E09F42F7-8268A83E-40C27A9D',


    onLeave: function(origin, destination, direction){
        $('#navigation__label').text("");

        if(destination.anchor != "header"){
            $('#navigation__label').text(destination.anchor);
            color = "black"
        }else{
            color = "white"
        }

        
        $( "<style>.navigation__icon,.navigation__icon:after,.navigation__icon:before{ background-color: "+ color +";transition: all .3s }</style>" ).appendTo( "head" );

    }

    });
    //methods
    fullpage_api.setAllowScrolling(true);

    