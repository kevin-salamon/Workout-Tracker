const API = {
// gets the last workout through a fetch request to /api/workouts
  async getLastWorkout() {
    let res;
    try {
      res = await fetch("/api/workouts");
    } catch (err) {
      console.log(err)
    }
    const json = await res.json();

    return json[json.length - 1]; // gets the length - 1, which the last workout
  },

//lets you add an exercise by fetch.PUT through /api/workouts
  async addExercise(data) {
    const id = location.search.split("=")[1]; // gotta look up wtf this is

    const res = await fetch("/api/workouts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });

    const json = await res.json();

    return json;
  },

 // adds a new workout (date + exercise, right?) by fetch.POST to /api/workouts 
  async createWorkout(data = {}) {
    const res = await fetch("/api/workouts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" }
    });

    const json = await res.json();

    return json;
  },

 // Not sure what this does yet. 
  async getWorkoutsInRange() {
    const res = await fetch(`/api/workouts/range`);
    const json = await res.json();

    return json;
  },
};
