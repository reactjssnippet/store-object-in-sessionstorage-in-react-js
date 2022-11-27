import React, { useEffect, useState } from "react";
export default function App() {
  const [obj, setObj] = useState([]);

  useEffect(() => {
    storeSessionstorage();

    fetchSessionstorage();
  }, []);

  const storeSessionstorage = () => {
    let objData = {
      id: 1,
      name: "John",
      work: "none of your business"
    };
    sessionStorage.setItem("obj", JSON.stringify(objData));
  };

  const fetchSessionstorage = () => {
    let obj = sessionStorage.getItem("obj");
    if (obj) {
      obj = JSON.parse(obj);
      setObj(obj);
    }
  };

  return (
    <div className="App">
      <h1>{`Object From Sessionstorage`}</h1>
      <p>{obj.name}</p>
    </div>
  );
}
