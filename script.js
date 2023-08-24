import { createTable } from './createTable.js';

const fetchUsersBtn = document.getElementById('fetch-btn');
const deletetableBtn = document.getElementById('delete-table-btn');
const tableContainer = document.getElementById('table-container');
const usersEndpoint = 'https://reqres.in/api/users?delay=3';

// To avoid using innerHTML
function deleteTable() {
	tableContainer.innerText = null;
}

function isDataLocallyAvailable(key) {
	return sessionStorage.getItem(key) === null ? false : true;
}

function setSessionCleanup(key) {
	setTimeout(() => {
		sessionStorage.removeItem(key);
	}, 10000);
}

async function getData(url) {
	const response = await fetch(url);
	const parsedResponse = await response.json();
	return parsedResponse.data;
}

async function handleTableGeneration(url, key) {
	if (isDataLocallyAvailable(key)) {
		const localData = JSON.parse(sessionStorage.getItem(key));
		tableContainer.innerText = null;
		tableContainer.append(createTable(localData));
	} else {
		const data = await getData(url);
		tableContainer.innerText = null;
		tableContainer.append(createTable(data));
		sessionStorage.setItem(key, JSON.stringify(data));
		setSessionCleanup(key);
	}
}

fetchUsersBtn.addEventListener('click', () => handleTableGeneration(usersEndpoint, 'users'));
deletetableBtn.addEventListener('click', deleteTable);
