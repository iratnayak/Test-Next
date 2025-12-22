import React from "react";

async function page({ params }) {
  const { dpath } = await params;
  console.log(params);

  return (
    <>
      <div>Catch All Routs</div>
      <ul>
        {dpath.map((item, index) => {
          return <li key={index}>{item}</li>;
        })}
      </ul>
    </>
  );
}

export default page;
