async function addStudent(){
    await fetch('/add_student',{
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            name:document.getElementById('name').value,
            email:document.getElementById('email').value
        })
    });
    loadStudents();
}

async function loadStudents(){
    let res = await fetch('/students');
    let data = await res.json();

    let body = document.getElementById('tableBody');
    body.innerHTML = '';

    data.forEach(s=>{
        body.innerHTML += `
        <tr>
            <td>${s.id}</td>
            <td>${s.name}</td>
            <td>${s.email}</td>
        </tr>`;
    });
}