import { Global } from "@emotion/react"

export const Fonts = () => (
  <Global
    styles={`
      /* Copied from https://fonts.googleapis.com/css2?family=Open+Sans:wght@700&family=Raleway&display=swap */

      /* latin-ext */
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 700;
        font-display: swap;
        src: @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,600;0,700;0,800;1,400&display=swap');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      @font-face {
        font-family: 'Montserrat';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,600;0,700;0,800;1,400&display=swap');
        unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
      }
      `}
  />
)
