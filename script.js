let achievements = [
    // Level 0
    ["Animate Name", "Make Music", "Let's Dance", "Race to Finish", "Level 0 Test"],
    // Level 1
    ["Make It Fly", "Create Story", "Pong Game", "Level 1 Test"],
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
students[0].student_achievements.push(achievements[0][1]);
students[0].student_achievements.push(achievements[0][3]);
students[0].student_achievements.push(achievements[0][0]);
students[0].student_achievements.push(achievements[0][2]);
//students[0].student_achievements.push(achievements[0][4]); // level 0 standard complete
students[0].student_achievements.push(achievements[1][2]);



// Cooper

// Ethan
students[2].student_achievements.push(achievements[1][2]);

// Sergiu
students[3].student_achievements.push(achievements[0][3]);
students[3].student_achievements.push(achievements[1][2]);


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