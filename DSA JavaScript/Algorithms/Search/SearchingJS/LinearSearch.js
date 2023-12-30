const beasts = ["Centaur", "Godzilla", "Mosura", "Minotaur", "Hydra", "Nessie"];

// Returns index
beasts.indexOf("Godzilla");

// Returns index
beasts.findIndex((item) => {
    return item === "Godzilla";
});

// Returns the item itself
beasts.find((item) => {
    return item === "Godzilla";
});

// Returns true 
beasts.includes("Godzilla");