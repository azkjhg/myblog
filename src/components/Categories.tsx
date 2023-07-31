import React from "react";

type Props = {
  categories: string[];
  selected: string;
  onClick: (category: string) => void;
};
const Categories = ({ categories, selected, onClick }: Props) => {
  return (
    <section className="text-center p-4">
      <h2 className="text-lg font-bold border-b border-sky-500 mb-2">
        Category
      </h2>
      <ul>
        {categories.map((category) => (
          <li
            className={`cursor-pointer hover:text-sky-500 ${
              category === selected && "text-sky-500"
            }`}
            key={category}
          >
            <button onClick={() => onClick(category)}>{category}</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Categories;
