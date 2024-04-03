import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import Header from "studentapp1/Header";
import Footer from "studentapp1/Footer"
import StudentForm from "studentapp1/StudentForm";

const App = () => {
  const handleSubmit = (formData) => {
    console.log("Form submitted with data:", formData);
   
  };

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      <Header />
      <div className="my-10">Student 2 Content</div>
      <StudentForm onSubmit={handleSubmit} />
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
