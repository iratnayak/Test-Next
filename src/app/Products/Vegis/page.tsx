import Link from "next/link";
import React from "react";

function page() {
  const Vegis = [
    {
      vid: 1,
      location: "Hambanthota",
    },
    {
      vid: 2,
      location: "Kurunegala",
    },
    {
      vid: 3,
      location: "Pasyala",
    },
  ];
  return (
    <>
      <div className="text-2xl text-orange-500 font-bold">
        Vegitable Shops Locations
      </div>
      <ul>
        {Vegis.map((loc) => {
          return (
            <li key={loc.vid}>
              <Link href={`/Products/Vegis/${loc.location}`}>
                {loc.location}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default page;
