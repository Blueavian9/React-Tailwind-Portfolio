module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        glow: "#03e9f4",
      },
      keyframes: {
        "btn-anim1": {
          "0%": { left: "-100%" },
          "50%, 100%": { left: "100%" },
        },
        // ... other keyframes
      },
      animation: {
        "btn-anim1": "btn-anim1 1s linear infinite",
        // ... other animations
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover", "group-hover"],
    },
  },
  plugins: [],
};





//module.exports = {
// content: [
  //   "./index.html",
  //   "./src/**/*.{js,ts,jsx,tsx}",
  //   "./src/components/**/*.{js,ts,jsx,tsx}", // Add paths if necessary
  // ],
  // theme: {
    //   extend: {
      //     colors: {
        //       glow: "#03e9f4",
        //     },
        //     keyframes: {
          //       "btn-anim1": {
            //         "0%": { left: "-100%" },
            //         "50%, 100%": { left: "100%" },
            //       },
            //       "btn-anim2": {
              //         "0%": { top: "-100%" },
              //         "50%, 100%": { top: "100%" },
              //       },
              //       "btn-anim3": {
                //         "0%": { right: "-100%" },
                //         "50%, 100%": { right: "100%" },
                //       },
                //       "btn-anim4": {
                  //         "0%": { bottom: "-100%" },
                  //         "50%, 100%": { bottom: "100%" },
                  //       },
                  //     },
                  //     animation: {
                    //       "btn-anim1": "btn-anim1 1s linear infinite",
                    //       "btn-anim2": "btn-anim2 1s linear infinite 0.25s",
                    //       "btn-anim3": "btn-anim3 1s linear infinite 0.5s",
                    //       "btn-anim4": "btn-anim4 1s linear infinite 0.75s",
                    //     },
                    //   },
                    // },
                    // variants: {
                      //   extend: {
                        //     animation: ["hover", "group-hover"],
                        //   },
                        // },
                        // plugins: {
                          //   tailwindcss: {},
                          //   autoprefixer: {},
                          // },
                        //};