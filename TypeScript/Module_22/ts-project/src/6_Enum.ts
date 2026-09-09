// =======================================================
//  Enums
// =======================================================

enum Day {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

let offDay = Day.Friday;

console.log(Day.Monday); //0

if (offDay === Day.Friday || offDay === Day.Sunday) {
}

// =======================================================
// String type enum
// =======================================================
enum Roles {
  Admin = "Admin",
  Moderator = "Moderator",
  Guest = "Guest",
}

console.log(Roles.Admin); // Admin

const Leo = {
  name: "Leo",
  role: Roles.Guest,
};

console.log(Leo);

enum Priority {
  Low,
  Moderate,
  Medium,
  High,
  Urgent,
}

enum APIStatus {
  Pending = "Pending",
  Success = "Success",
}
