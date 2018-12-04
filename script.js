let achievements = [
    // Level 0
    ["Animate Name", "Make Music", "Pong Game", "Race to Finish"],
    // Level 1
    ["Make It Fly", "Create Story"],
    // Level 2
    []
];

let students = [
    {
        name: "Amber",
        student_achievements: []
    },
    {
        name: "Cooper",
        student_achievements: []
    },
    {
        name: "Ethan",
        student_achievements: []
    },
    {
        name: "Sergiu",
        student_achievements: []
    }
];

// Amber
//students[0].student_achievements.push(achievements[0][3]);

// Cooper

// Ethan

// Sergiu

for (let i in students) {
    let student_bar = students[i].name.toLocaleLowerCase();
    student_bar += "-bar";

    for (let c in students[i].student_achievements) {
        let progress_item = document.createElement("div");
        progress_item.classList.add("progress-item");

        let text = document.createTextNode(students[i].student_achievements[c]);
        progress_item.appendChild(text);

        document.getElementById(student_bar).appendChild(progress_item);
    }





}