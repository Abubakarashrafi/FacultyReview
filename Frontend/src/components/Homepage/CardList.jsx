import React from "react";
import Card from "../UI/Card";

const CardList = ({ teachers }) => {
  return (
    <div className="container mx-auto px-4 mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {teachers.map((teacher) => (
          <Card key={teacher.id} teacher={teacher} />
        ))}
      </div>
    </div>
  );
};

export default CardList;
