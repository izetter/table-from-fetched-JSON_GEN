export function createTable(data) {
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
