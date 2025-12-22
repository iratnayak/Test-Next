import React from "react";

async function page({ params }) {
  const { mid } = await params;
  return <div>Meat Item {mid}</div>;
}

export default page;
