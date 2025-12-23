import React from "react";

async function page({ params }) {
  const { id } = await params;
  return <div>Goceries Location in - {id}</div>;
}

export default page;
