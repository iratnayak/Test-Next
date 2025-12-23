import Link from "next/link";
import React from "react";

function page() {
  const Meat = [
    {
      mid: 1,
      location: "Colombo",
    },
    {
      mid: 2,
      location: "Eheliyagoda",
    },
    {
      mid: 3,
      location: "Rathnapura",
    },
  ];
  return (
    <>
      <div className="text-2xl text-amber-300 font-bold">
        Meat Shop Locations
      </div>
      <ul>
        {Meat.map((loc) => {
          return (
            <li key={loc.mid}>
              <Link href={`/Products/Meat/${loc.location}`}>
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
