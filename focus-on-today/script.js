const allCheckBox = document.querySelectorAll(".custom-checkbox");
const allInputGoal = document.querySelectorAll(".input-goal");
const errorMessage = document.querySelector(".error-message");
const progressValue = document.querySelector(".progress-value");
const progressLabel = document.querySelector(".progress-label");

// const allGoals = JSON.parse(localStorage.getItem("allGoals")) || {
//     first: {
//         name: '',
//         completed: false,
//     },

//     second: {
//         name: '',
//         completed: false,
//     },

//     third: {
//         name: '',
//         completed: false,
//     }
// }; 

const allGoals = JSON.parse(localStorage.getItem("allGoals")) || {};

let completedGoalsCount = Object.values(allGoals).filter(
  (goal) => goal.completed
).length;

progressValue.style.width = `${completedGoalsCount / allInputGoal.length *100}%`;
progressValue.firstElementChild.innerText = `${completedGoalsCount}/${allInputGoal.length} completed`


allCheckBox.forEach((checkbox) => {
  checkbox.addEventListener("click", () => {
    const allGoalsAdded = [...allInputGoal].every((input) => {
      return input.value;
    });

    if (allGoalsAdded) {
      checkbox.parentElement.classList.toggle("completed");
      errorMessage.innerText = "";
      const inputId = checkbox.nextElementSibling.id;
      allGoals[inputId].completed = !allGoals[inputId].completed;
      completedGoalsCount = Object.values(allGoals).filter(
        (goal) => goal.completed
      ).length;
      progressValue.style.width = `${completedGoalsCount / allInputGoal.length *100}%`;
      progressValue.firstElementChild.innerText = `${completedGoalsCount}/${allInputGoal.length} completed`;

      if(completedGoalsCount === 1){
        progressLabel.innerText = 'Well Begun is half done!';
      } else if (completedGoalsCount === 2) {
        progressLabel.innerText = 'Just a step away, Keep going!';
      } else if(completedGoalsCount ===3){
        progressLabel.innerText = 'Whoa! You just completed all your goals, time for chill :D';
      }
      else{
        progressLabel.innerText = 'Raise the bar by completing your goals!';
      }

      localStorage.setItem("allGoals", JSON.stringify(allGoals));

    } else {
      errorMessage.innerText = "Please set all the 3 goals";
    }
  });
});

allInputGoal.forEach((input) => {
    if(allGoals[input.id]){
        input.value = allGoals[input.id].name;

        if (allGoals[input.id].completed) {
            input.parentElement.classList.add("completed");
          }
    }

    
    
    input.addEventListener("input", () => {
        
        if(allGoals[input.id] && allGoals[input.id].completed){
            input.value = allGoals[input.id].name
            return
        }
        
        if(allGoals[input.id]) {
            allGoals[input.id].name = input.value;
        } else {
            allGoals[input.id] = {
                name: input.value,
                completed: false,
            }
        }
        localStorage.setItem("allGoals", JSON.stringify(allGoals));
    
  });
});
