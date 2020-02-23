const API = {
  async getLastWorkout() {
    const res = await fetch("/api/workouts");
    const json = await res.json();

    return json[json.length - 2];
  },
  async addExercise(data) {
   //alert("add exercise")
    const id = location.search.split("=")[1];

    const res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    return json;
  },
  async createWorkout() {
    //alert("create workout")
    const res = await fetch("/api/workouts", { 
      method: "POST",
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();

    return json;
  }
};
