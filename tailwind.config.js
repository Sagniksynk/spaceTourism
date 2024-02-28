/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend:{
      colors:{
        primary: "#0B0D17",
        secondary: "#D0D6F9",
        white: "#FFFFFF",
      },
      fontFamily: {
        bellefair : ["Bellefair"],
        barlow : ["Barlow Condensed"],
      },
      fontSize: {
        heading1: ['150px'],
        heading2: ['100px'],
        heading3: ['56px'],
        heading4: ['32px'],
        heading5: ['28px'],
        subheading1: ['28px'],
        subheading2: ['14px'],
        navText: ['16px'],
        body: ['18px'],
      },
      // tracking for letter spacing
  
      letterSpacing:{
        heading5 : '4.75px',
        subheading2: '2.35px',
        navText: '2.7px',
      },
      backgroundImage: {
        homeMobile: "url('./assets/images/home/background-home-mobile.jpg')",
        homeTablet: "url('./assets/images/home/background-home-tablet.jpg')",
        homeDesktop: "url('./assets/images/home/background-home-desktop.jpg')",
        destinationMobile: "url('./assets/images/destination/background-destination-mobile.jpg')",
        destinationTablet: "url('./assets/images/destination/background-destination-tablet.jpg')",
        destinationDesktop: "url('./assets/images/destination/background-destination-desktop.jpg')",
        crewMobile: "url('./assets/images/crew/background-crew-mobile.jpg')",
        crewTablet: "url('./assets/images/crew/background-crew-tablet.jpg')",
        crewDesktop: "url('./assets/images/crew/background-crew-desktop.jpg')",
        techMobile: "url('./assets/images/technology/background-technology-mobile.jpg')",
        techTablet: "url('./assets/images/technology/background-technology-tablet.jpg')",
        techDesktop: "url('./assets/images/technology/background-technology-desktop.jpg')",
        iconOpen: "url('./assets/images/shared/icon-hamburger.svg')",
        iconClose: "url('./assets/images/shared/icon-close.svg')",
      },
    }
  },
  plugins: [],
}

