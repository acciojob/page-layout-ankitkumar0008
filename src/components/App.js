
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
        <PageLayout header="Welcome to my website" footer="© 2023 My Website. All rights reserved">This is the content of my website.</PageLayout>
    </div>
  )
}

export default App

function PageLayout({ header, footer, children }) {
  return (
    <>
      
      <header>{header}</header>

      
      <main>{children}</main>

      
      <footer>{footer}</footer>
    </>
  );
}