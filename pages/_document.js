import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <style jsx global>{`
            /* Other global styles such as 'html, body' etc... */
#floatingLogo {
  background-color: "#F00",
  position: absolute,
  top: -40px,
  left: 50%,
  height: 214px,
}
           
            #__next {
              height: 100%;
            }
          `}</style>
        </body>
      </html>
    );
  }
}
