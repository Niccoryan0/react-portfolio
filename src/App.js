import React from "react";
import $ from "jquery";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";

const App = () => {
  const [resumeData, setResumeData] = React.useState({});

  React.useEffect(() => {
    console.log("Hi");
    $.ajax({
      url: "/resumeData.json",
      dataType: "json",
      cache: false,
      success: function (data) {
        setResumeData(data);
      },
      error: function (xhr, status, err) {
        console.log(err);
        alert(err);
      },
    });
  }, []);
  return (
    <div className="App">
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
      <Footer data={resumeData.main} />
    </div>
  );
};

export default App;
