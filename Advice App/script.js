const currentAdvice = document.querySelector('#current-advice-content');
const adviceListContent = document.querySelector('#advice-list-content');
const submitBtn = document.querySelector("#submit-btn");
const removeBtn = document.querySelector('#remove-btn');
const url = `https://api.adviceslip.com/advice`;
let previousAdvice;

submitBtn.addEventListener("click", displayAdvice);
removeBtn.addEventListener("click", removeListOfAdvice);

/*This function fetches the data from API and display it in the DOM.*/
function displayAdvice() {   
    fetch(url).then(
        (response) => {
            return response.json();
        }).then(
        (adviceData) => {
            console.log(adviceData)
            const advice = adviceData.slip.advice;
            currentAdvice.innerHTML = advice;
            if (previousAdvice) {
                addAdviceToList(previousAdvice);
            }
            previousAdvice = advice;
        }).catch(
            (error) => {
                console.log(error);
            }
        )
};

/*This function creates a list of item for the second section in the DOM*/
function addAdviceToList(advice) {
    const adviceListItem = document.createElement('li');
    adviceListItem.textContent = advice;
    adviceListContent.appendChild(adviceListItem);

}
/*This function clears the list in the DOM*/
function removeListOfAdvice() {
    adviceListContent.textContent = '';
}
