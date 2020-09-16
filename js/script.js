fetch("https://spreadsheets.google.com/feeds/list/1xqdpfbLrugkU7uSUrQmSQ60uJkqsARoVZpEFN6JNBoo/od6/public/values?alt=json")
    .then(function (response) {
      console.log(response)
      return response.json();
    })
    .then(function(exerciseData) {
    console.log(exerciseData)
    loadData(exerciseData);
})
function loadData(list){
    console.log(list)
    list.forEach(showExercise);

}
function showExercise(theExercise) {
    console.log(theExercise)
    const temp = document.querySelector("#exercise_template").content
    const theCopy = temp.cloneNode(true);
    theCopy.querySelector(".name").textContent= theExercise.exercise;
    const parent = document.querySelector(".exerciselist");
    parent.appendChild(theCopy);
}
