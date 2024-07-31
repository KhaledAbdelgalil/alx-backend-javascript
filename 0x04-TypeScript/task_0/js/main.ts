interface Student {
	firstName: string;
	lastName: string;
	age: number;
	location: string;
}
const FirstStudent: Student = {
	firstName: "Khaled",
	lastName: "Mansour",
	age: 28,
	location: "Egypt",
};
const SecondStudent: Student = {
	firstName: "Ashraf",
	lastName: "Atef",
	age: 24,
	location: "Egypt",
};
const studentsList: Array<Student> = [FirstStudent, SecondStudent];
export const renderTable = (studentsList: Array<Student>): void => {
	const table = document.createElement("table");
	const headRow = document.createElement("tr");
	table.appendChild(headRow);

	headRow.innerHTML += "<th>FirstName</th>";
	headRow.innerHTML += "<th>Location</th>";

	for (const student of studentsList) {
		const studentRow = document.createElement("tr");
		studentRow.innerHTML += `<td>${student.firstName}</td>`;
		studentRow.innerHTML += `<td>${student.location}</td>`;
		table.appendChild(studentRow);
	}

	document.body.appendChild(table);
};

renderTable(studentsList);
