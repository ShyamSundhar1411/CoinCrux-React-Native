import React from "react";
export function TimeAgo({ time }) {
  const getTimeDifference = (timestamp) => {
    const current = new Date();
    const previous = new Date(timestamp);
    const difference = current - previous;

    const hours = Math.floor(difference / (1000 * 60 * 60));
    const days = Math.floor(hours / 24);

    if (days > 0) {
      return `${days} day${days > 1 ? "s" : ""} ago`;
    } else {
      return `${hours} hour${hours > 1 ? "s" : ""} ago`;
    }
  };
  time = Date.parse(time);
  const result = getTimeDifference(time);
  return result;
}
