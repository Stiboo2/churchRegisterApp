import React, { useState, useEffect } from "react";
price;
import Title from "../Title/Title";
import memberS from "../Data/membersData";
//import "./Socials.css";
const FilterBar = () => {
  const [eventItems, setEventItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);

  const filterItems = (category) => {
    if (category === "all") {
      setEventItems(items);
      return;
    }
  };

  return (
    <main>
      <section className="section_sc menu_sc">
        <Title className="event-title" text="Our Social Event" />
      </section>
    </main>
  );
};
export default FilterBar;
