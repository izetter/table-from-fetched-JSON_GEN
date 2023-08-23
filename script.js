const users = {
	page: 1,
	per_page: 6,
	total: 12,
	total_pages: 2,
	data: [
		{
			id: 1,
			email: 'george.bluth@reqres.in',
			first_name: 'George',
			last_name: 'Bluth',
			avatar: 'https://reqres.in/img/faces/1-image.jpg',
		},
		{
			id: 2,
			email: 'janet.weaver@reqres.in',
			first_name: 'Janet',
			last_name: 'Weaver',
			avatar: 'https://reqres.in/img/faces/2-image.jpg',
		},
		{
			id: 3,
			email: 'emma.wong@reqres.in',
			first_name: 'Emma',
			last_name: 'Wong',
			avatar: 'https://reqres.in/img/faces/3-image.jpg',
		},
		{
			id: 4,
			email: 'eve.holt@reqres.in',
			first_name: 'Eve',
			last_name: 'Holt',
			avatar: 'https://reqres.in/img/faces/4-image.jpg',
		},
		{
			id: 5,
			email: 'charles.morris@reqres.in',
			first_name: 'Charles',
			last_name: 'Morris',
			avatar: 'https://reqres.in/img/faces/5-image.jpg',
		},
		{
			id: 6,
			email: 'tracey.ramos@reqres.in',
			first_name: 'Tracey',
			last_name: 'Ramos',
			avatar: 'https://reqres.in/img/faces/6-image.jpg',
		},
	],
	support: {
		url: 'https://reqres.in/#support-heading',
		text: 'To keep ReqRes free, contributions towards server costs are appreciated!',
	},
};

const container = document.getElementById('table-container');

function createTable(data) {
	const table = document.createElement('table');
	table.classList.add('table');
	const thead = table.createTHead();
	const theadRow = thead.insertRow();
	thead.append(theadRow);

	for (let key in data[0]) {
		const th = document.createElement('th');
		th.innerText = key
			.replace(/[\-_]/g, ' ')
			.split(' ')
			.map((word) => word.replace(word[0], word[0].toUpperCase()))
			.join(' ');
		theadRow.append(th);
	}

	const tbody = table.createTBody();
	for (let obj of data) {
		const row = tbody.insertRow();
		for (let key in obj) {
			const cell = row.insertCell();
			if (/^http.*\.jpg$/.test(obj[key]) || /^http.*\.png$/.test(obj[key])) {
				cell.setHTML(`<img src=${obj[key]} class="rounded-circle" style="max-width: 3.5rem" alt="pic" />`);
			} else {
				cell.innerText = obj[key];
			}
		}
	}
	return table;
}

container.append(createTable(users.data));
