// "Database" (data layer)
const roomData = {
  "Living Room": {
    title: "Living Room",
    description: "Main common area for residents.",
    status: "Available"
  },

  "Kitchen": {
    title: "Kitchen",
    description: "Shared kitchen with appliances.",
    status: "In Use"
  },

  "Bedroom": {
    title: "Bedroom",
    description: "Private sleeping area.",
    status: "Available"
  }
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
      `${data.description}\n` +
      `Status: ${data.status}`
    );

  });
});