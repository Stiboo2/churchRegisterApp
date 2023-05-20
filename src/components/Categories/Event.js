import React from "react";
import "./Socials.css";
const Event = ({ items }) => {
  return (
    <div className="section-center_sc">
      {items.map((eventItem) => {
        const { id, title, image, desc, date } = eventItem;

        return (
          <article key={id} className="menu_sc-item">
            <img src={image} alt={title} className="photo_sc" />
            <div className="item-info_sc">
              <header>
                <h4>{title}</h4>
                <h4 className="date">{date}</h4>
              </header>
              <p className="item-text_sc">{desc}</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default Event;
