import { checkForValidUrl } from './urlChecker'

const serverURL = 'https://localhost:8000/api'

const form = document.getElementById('urlForm');
form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();

    // Get the URL from the input field
    const formText = document.getElementById('name').value;

    // Check if the URL is valid
    if (checkForValidUrl(formText)) {
        // If the URL is valid, send it to the server using the serverURL constant above
        postData(serverURL, { url: formText })
        .then((res) => {
            updateUI(res);
            })
    }
}

// Function to send data to the server
const postData = async (url = "", data = {}) => {
    try {
        console.log(data)

        const res = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        console.log(res);
        const answer = await res.json();
        console.log('Answer from server:', answer);
        return answer; //parsing the JSON response
    } catch (error) {
        throw error; //throwing any errors that occur during the fetch request
    }
}

const updateUI = async(data)=>{
    try{

        document.getElementById("polarity").innerHTML = `Polarity: ${data.score_tag}`;
        document.getElementById('subjectivity').innerHTML = `Subjectivity: ${data.subjectivity}`;
        document.getElementById('text').innerHTML = `Text: ${data.sentence_list[0].text}`;

    }catch(error){
        console.log('ErrorUpdateUI:', error);
    }
}
// Export the handleSubmit function
export { handleSubmit };

