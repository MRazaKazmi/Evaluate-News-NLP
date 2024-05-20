import { checkForValidUrl } from './urlChecker'

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('urlForm'); //getting the form element by ID
    form.addEventListener('submit', handleSubmit); //adding event listener for form submission
});

function handleSubmit(event) {
    event.preventDefault();

    // Get the URL from the input field
    const formText = document.getElementById('name').value;

    // Check if the URL is valid
    if (checkForValidUrl(formText)) {
        // If the URL is valid, send it to the server using the serverURL constant above
        postData('http://localhost:8000/api', { url: formText })
        .then((res) => {
            updateUI(res);
            })
    }
}

// Function to POST data to server
const postData = async (url = "", data = {}) => {
    try {
        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        const output = await res.json();
        return output;
    } catch (error) {
        console.log('error:', error);
    }
}

// Function to update UI elements

const updateUI = async(data)=>{
    try {
        document.getElementById("polarity").innerHTML = `Polarity: ${data.score_tag}`;
        document.getElementById('subjectivity').innerHTML = `Subjectivity: ${data.subjectivity}`;
        document.getElementById('text').innerHTML = `Text: ${data.sentence_list[0].text}`;

    } catch(error) {
        console.log('errror:', error);
    }
}
// Export the handleSubmit function
export { handleSubmit };

