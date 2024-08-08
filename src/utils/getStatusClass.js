export const getStatusClasses = (status) => {
  switch (status) {
    case "Delivered":
      return "text-green-700 bg-green-200";
    case "Cancelled":
    case "Pending":
      return "text-red-700 bg-red-100";
    default:
      return "";
  }
};
