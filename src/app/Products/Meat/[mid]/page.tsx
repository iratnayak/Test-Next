import React from "react";

async function page({ params }) {
  const { mid } = await params;
  return <div>Meat Shop Location in - {mid}</div>;
}

export default page;
