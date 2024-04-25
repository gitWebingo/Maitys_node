const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371e3; // Earth's radius in meters
  const l1 = (lat1 * Math.PI) / 180;
  const l2 = (lat2 * Math.PI) / 180;
  const l = ((lat2 - lat1) * Math.PI) / 180;
  const lamda = ((lon2 - lon1) * Math.PI) / 180;
  const a =
    Math.sin(l / 2) * Math.sin(l / 2) +
    Math.cos(l1) * Math.cos(l2) * Math.sin(lamda / 2) * Math.sin(lamda / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance;
};

module.exports = calculateDistance;
