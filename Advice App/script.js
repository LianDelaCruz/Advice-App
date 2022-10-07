const currentAdvice = document.querySelector('#current-advice-content');
const adviceListContent = document.querySelector('#advice-list-content');
const ListContainer = document.querySelector('#advice-list-container');
const submitBtn = document.querySelector("#submit-btn");
const removeBtn = document.querySelector('#remove-btn');
const url = `https://api.adviceslip.com/advice`;
let previousAdvice;

submitBtn.addEventListener("click", displayAdvice);
removeBtn.addEventListener("click", removeListOfAdvice);
hideRemoveBtn();


/*This function fetches the data from API and display it in the DOM.*/
function displayAdvice() {   
    fetch(url).then(
        (response) => {
            return response.json();
        }).then(
        (adviceData) => {
            const advice = adviceData.slip.advice;
            if (advice===previousAdvice) { //I added this as I have noticed that the data being fetched is repeated.
                displayAdvice()
                return
            }
            console.log(advice)
            currentAdvice.innerHTML ='"'+ advice + '"';
            if (previousAdvice) {
                addAdviceToList(previousAdvice);
            } //This is to not show the previous advice in the current advice section and move it in the advice list once the button is clicked.
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
    showRemoveBtn();
}
/*This function clears the list in the DOM*/
function removeListOfAdvice() {
    adviceListContent.textContent = '';
    removeBtn.style.visibility = 'hidden';
}

/*Functions to show and hide the list container in the DOM */
function showRemoveBtn () {
    removeBtn.style.visibility = '' ;
}

function hideRemoveBtn () {
    removeBtn.style.visibility = 'hidden';
} 