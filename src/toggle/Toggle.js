const theme = {
    general:{
     header:{
        main:'font-nunitoSans flex justify-between py-5 px-2  shadow-md z-10',
        text:'font-extrabold lg:text-2xl text-base',
        icon:'fa-regular fa-moon mr-2 text-xl',
        toggle:'font-extrabold text-base'
     },
     main:{
      main:'min-h-screen pt-9'
    },
    card:{
        main:'flex flex-col shadow-lg rounded-lg overflow-hidden',
        text:'flex flex-col p-5'
    }
    },
    light:{

        header:{
            main:'bg-white',
            text:'text-veryDarkBlueL',
            icon:'text-veryDarkBlueL',
            toggle:'text-veryDarkBlueL'
    
        },
        main:{
          main:'bg-veryLightGray'
        },
        card:{
           main:'bg-white',
           text:'text-veryDarkBlueL'
        }
        
    },
    dark:{
        header:{
            main:'bg-darkBlue',
            text:'text-white',
            icon:'text-white',
            toggle:'text-white',

        },
        main:{
            main:'bg-veryDarkBlue', 
        },
        card:{
            main:'bg-darkBlue',
            text:'text-white'
        }

        
    }
}
export default theme