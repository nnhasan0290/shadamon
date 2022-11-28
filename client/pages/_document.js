import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  render() {
    
    return (
      <Html>
        <Head />
        <body style={{backgroundColor: "#f2f3f7"}}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}