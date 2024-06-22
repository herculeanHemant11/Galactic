import { useEffect, useState } from "react";
import { REST_API } from "../utils/constants";

const useGetRestData = (sortBy) => {
  const [resData, setResData] = useState([]);

  const getResData = async () => {
    try {
      const response = await fetch(REST_API);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      const resData =
        json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      console.log(resData);

      switch (sortBy) {
        case "rating":
          resData: resData.sort((a, b) => b.info.avgRating - a.info.avgRating);
          break;
        case "delivery":
          resData: resData.sort(
            (a, b) => a.info.sla.deliveryTime - b.info.sla.deliveryTime
          );
          break;
        case "cost":
          resData: resData.sort(
            (a, b) => a.info.costForTwo - b.info.costForTwo
          );
          break;
        default:
          break;
      }

      setResData(resData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setResData([]);
    }
  };

  useEffect(() => {
    getResData();
  }, [sortBy]);

  return resData;
};

export default useGetRestData;
