// "Database" (data layer)
const roomData = {
  "1301": {
    title: "ROOM 1301",
    Resident: "RESIDENT NAME: Unknown",
    Notes: "NOTE: Prefers no housekeeping",
    Dining: "Dining Preference: Eats downstairs"

  },

  "1302": {
    title: "ROOM 1302",
    Resident: "RESIDENT NAME: Mary Anne McGovern",
    Notes: "NOTE: Very clean room, cleans on her own time.",
    Dining: "Dining Preference: Eats downstairs"
  },

  "1303": {
    title: "ROOM 1303",
    Resident: "RESIDENT NAME: EMPTY ROOM",
    Notes: "NOTE: N/A",
    Dining: "Dining Preference: N/A"    
  },

  "1304": {
    title: "ROOM 1304",
    Resident: "RESIDENT NAME: Patricia Rudolph",
    Notes: "NOTE: Has a cat, dirtiest room on the floor.",
    Dining: "Dining Preference: Sometimes eats in the room"
  },

  "1305": {
    title: "ROOM 1305",
    Resident: "RESIDENT NAME: Nancy Dalton",
    Notes: "NOTE: Almost deaf, cannot standup, needs help moving.",
    Dining: "Dining Preference: Eats downstairs"
  },

  "1306": {
    title: "ROOM 1306",
    Resident: "RESIDENT NAME: Bob",
    Notes: "NOTE: Has a cat, but room is well kept.",
    Dining: "Dining Preference: Eats downstairs"
  },

  "1307": {
    title: "ROOM 1307",
    Resident: "RESIDENT NAME: Ray Tomasini",
    Notes: "NOTE: Garbage in the bathroom needs to be taken out more than once a week.",
    Dining: "Dining Preference: Eats downstairs"
  },

  "1308": {
    title: "ROOM 1308",
    Resident: "RESIDENT NAME: Unknown",
    Notes: "NOTE: Bathroom gets very dirty",
    Dining: "Dining Preference: Sometimes eats in the room"
  },

  "1309": {
    title: "ROOM 1309",
    Resident: "RESIDENT NAME: Connie Devivo",
    Notes: "NOTE: Prefers no housekeeping",
    Dining: "Dining Preference: Always eats inside the room"
  },

  "1310": {
    title: "ROOM 1310",
    Resident: "RESIDENT NAME: Nancy Termini",
    Notes: "NOTE: Likes microwave cleaned. ",
    Dining: "Dining Preference: Eats lunch downstairs "
  },

  "1311": {
    title: "ROOM 1311",
    Resident: "RESIDENT NAME: Terry Mirarchi",
    Notes: "NOTE: Has cat, but hides the cat in the closet on cleaning day. ",
    Dining: "Dining Preference: Leaves the room when cleaning time. "
  },

  "1312": {
    title: "ROOM 1312",
    Resident: "RESIDENT NAME: Cindy Scola",
    Notes: "NOTE: May not want to be cleaned",
    Dining: "Dining Preference: Sometimes eats in the room"
  },

  "1313": {
    title: "ROOM 1313",
    Resident: "RESIDENT NAME: Peggy",
    Notes: "NOTE: Bed change every cleaning day. ",
    Dining: "Dining Preference: Easts downstairs"
  },

  "1314": {
    title: "ROOM 1314",
    Resident: "RESIDENT NAME: Empty Room",
    Notes: "NOTE: N/A",
    Dining: "Dining Preference: N/A"
  },

  "1315": {
    title: "ROOM 1315",
    Resident: "RESIDENT NAME: Jill Pfeil",
    Notes: "NOTE: N/A", 
    Dining: "Dining Preference: N/A "
  },

  "1316": {
    title: "ROOM 1316",
    Resident: "RESIDENT NAME: Empty Room",
    Notes: "NOTE: N/A",
    Dining: "Dining Preference: N/A"
  },

 
};


// UI logic (event handling layer)
const rooms = document.querySelectorAll(".room");

rooms.forEach(room => {
  room.addEventListener("click", () => {

    const key = room.dataset.room;
    const data = roomData[key];

    if (!data) {
      console.warn("Missing data for:", key);
      return;
    }

    alert(
      `${data.title}\n` +
      `${data.Resident || ''}\n` +
      `${data.Notes || ''}\n` +
      `${data.Dining || ''}\n`
    );

  });
});