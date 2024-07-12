import React, { useEffect, useState } from "react";

const FilterRestaurent = ({
  maxCost,
  setSortBy,
  priceValue,
  setPriceValue,
}) => {
  const intervalSize = (maxCost - 100) / 4;

  useEffect(() => {
    setPriceValue(maxCost);
  }, [maxCost]);

  useEffect(() => {
    const priceRange = document.getElementById("price-range");
    if (priceRange) {
      const value =
        ((priceRange.value - priceRange.min) /
          (priceRange.max - priceRange.min)) *
        100;
      priceRange.style.background =
        "linear-gradient(to right, #82CFD0 0%, #82CFD0 " +
        value +
        "%, #fff " +
        value +
        "%, white 100%)";
    }
  }, [priceValue]);

  const handlePriceChange = (e) => {
    setPriceValue(e.target.value);
  };

  const handleSort = (sortType) => {
    setSortBy(sortType);
  };

  return (
    <div className="col-lg-4 filter-col">
      <span className="filter-title">Sort By</span>
      <div className="sorting-buttons">
        <button onClick={() => handleSort("rating")}>Rating</button>
        <button onClick={() => handleSort("delivery")}>Delivery Time</button>
        <button onClick={() => handleSort("cost")}>Cost</button>
      </div>
      <span className="filter-title">Filter</span>
      <div>
        <div className="filter-title">Price</div>
        <div className="price-list">
          <span>100</span>
          {[...Array(3)].map((_, index) => (
            <span key={index + 1}>{100 + intervalSize * (index + 1)}</span>
          ))}
          <span>{maxCost}</span>
        </div>
        <input
          id="price-range"
          type="range"
          min="100"
          max={maxCost}
          value={priceValue}
          step="10"
          onChange={handlePriceChange}
        />
      </div>
    </div>
  );
};

export default FilterRestaurent;
