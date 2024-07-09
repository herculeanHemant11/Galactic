import { useEffect, useState } from "react";
import { REST_API } from "../utils/constants";

const useGetRestData = (sortBy) => {
  const [resData, setResData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getResData = async () => {
    setLoading(true);
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
      const maxPrice = resData.reduce((max, item) => {
        return item.info.costForTwo > max ? item.info.costForTwo : max;
      }, resData[0].info.costForTwo);

      console.log(maxPrice);

      switch (sortBy) {
        case "rating":
          resData.sort((a, b) => b.info.avgRating - a.info.avgRating);
          break;
        case "delivery":
          resData.sort(
            (a, b) => a.info.sla.deliveryTime - b.info.sla.deliveryTime
          );
          break;
        case "cost":
          resData.sort((a, b) => a.info.costForTwo - b.info.costForTwo);
          break;
        default:
          break;
      }

      setResData(resData);
    } catch (error) {
      console.error("Error fetching data:", error);
      setResData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setLoading(true); // Ensure loading state is set before fetching data
    getResData();
  }, [sortBy]);

  return { resData, loading };
};

export default useGetRestData;
