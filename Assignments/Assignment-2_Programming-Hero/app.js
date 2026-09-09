// Problem - 1
function matchWinner(teamAGoals, teamBGoals) {
  if (typeof teamAGoals !== "number" || typeof teamBGoals !== "number") {
    return "Invalid";
  }
  if (teamAGoals > teamBGoals) {
    return "Team A Won";
  } else if (teamBGoals > teamAGoals) {
    return "Team B Won";
  } else {
    return "Draw";
  }
}

// Problem - 2
function isElevatorSafe(weights) {
  if (Array.isArray(weights) !== true) {
    return "Invalid";
  }

  let totalWeight = 0;
  for (let weight of weights) {
    totalWeight = totalWeight + weight;
  }
  if (totalWeight <= 400) {
    return true;
  } else {
    return false;
  }
}

// Problem - 3
function calculateAiCost(tokensUsed) {
  if (typeof tokensUsed !== "number" || tokensUsed < 0) {
    return "Invalid";
  }

  if (tokensUsed <= 500) {
    return 0;
  }
  const extraTokens = tokensUsed - 500;
  const cost = Math.floor(extraTokens / 100) * 5;

  return cost;
}

// Problem - 4
function topRatedRestaurant(restaurants) {
  if (Array.isArray(restaurants) !== true || restaurants.length === 0) {
    return "Invalid";
  }

  let topRatedRestaurant = restaurants[0];

  for (let restaurant of restaurants) {
    if (restaurant.rating > topRatedRestaurant.rating) {
      topRatedRestaurant = restaurant;
    }
  }
  return topRatedRestaurant.name.toUpperCase();
}

// Problem - 5
function averageResponseTime(times) {
  if (Array.isArray(times) === false) {
    return "Invalid";
  }

  if (times.length === 0) {
    return "Invalid";
  }

  let total = 0;
  for (let i = 0; i < times.length; i++) {
    if (typeof times[i] !== "number") {
      return "Invalid";
    }
    total = total + times[i];
  }

  return total / times.length;
}

