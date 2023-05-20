import React, { useState, useEffect } from "react";
import Title from "./Title";
import "./Socials.css";
import Loading from "../Tools/Loading";
import Event from "./Event";
import { getEvents } from "../Doctors/EventsData";
import Categories from "./Categories";

const Socials = () => {
  const [eventItems, setEventItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [items, setItems] = useState([]);

  const filterItems = (category) => {
    if (category === "all") {
      setEventItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setEventItems(newItems);
  };

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const loadedEvents = await getEvents();
      setLoading(false);
      setEventItems(loadedEvents);
      setCategories([
        "all",
        ...new Set(loadedEvents.map((item) => item.category)),
      ]);
      setItems(loadedEvents);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <section className="section_sc menu_sc">
        <Title className="event-title" text="Our Social Event" />
        <Categories categories={categories} filterItems={filterItems} />
        <Event items={eventItems} />
      </section>
    </main>
  );
};

export default Socials;
