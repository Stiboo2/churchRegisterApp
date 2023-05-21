import React, { useState, useEffect } from "react";
import Title from "../Title/Title";
import { useGlobalContext } from "../../context";

const FilterBar = () => {
  const [branchCatelog, setBranchCatelog] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [branchItemss, setbranchItemss] = useState([]);
  const { cart } = useGlobalContext();
  const members = Array.from(cart.entries());

  const filterbranchItemss = (category) => {
    if (category === "all") {
      setBranchCatelog(branchItemss);
      return;
    }
    const newItems = branchItemss.filter((item) => item === category);
    setBranchCatelog(newItems);
  };

  let branchSet = new Set();
  members.map((memberbranchItems) => {
    const [id, person] = memberbranchItems;
    branchSet.add(person.branch);
  });

  const fetchBranches = () => {
    setCategories(["all", ...branchSet]);
    setbranchItemss(branchSet);
  };
  useEffect(() => {
    fetchBranches();
  }, []);

  console.log(branchItemss);
  if (members.length === 0) {
    return (
      <section className="cart">
        {/* cart header */}
        <header>
          <h2>your bag</h2>
          <h4 className="empty-cart">is currently empty</h4>
        </header>
      </section>
    );
  }

  return (
    <main>
      <section className="section_sc menu_sc">
        <Title className="event-title" text="Our Social Event" />
      </section>
    </main>
  );
};

export default FilterBar;
