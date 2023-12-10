function attachEvents() {
    
    document.getElementById('btnLoad').addEventListener('click', getAllPhones);
    document.getElementById('btnCreate').addEventListener('click', createContact);
    async function getAllPhones() {
        const phoneInfo = await fetch('http://localhost:3030/jsonstore/phonebook');
        const phoneInfoJson = await phoneInfo.json();

        const phonebook = document.getElementById("phonebook");
        phonebook.innerHTML = '';
        Object.values(phoneInfoJson).forEach(contact => {
            const li = document.createElement('li');
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            li.textContent = `${contact.person}: ${contact.phone}`;
            li.appendChild(deleteButton);
            phonebook.appendChild(li);
            deleteButton.addEventListener('click', deleteContact);

            function deleteContact() {
                const id = contact._id;
                fetch(`http://localhost:3030/jsonstore/phonebook/${id}`, {
                    method: 'delete',
                });
                li.remove();

            }

        })
    }

    function createContact() {
        const person = document.getElementById('person').value;
        const phone = document.getElementById('phone').value;
        const contact = {
            person,
            phone
        }
        fetch('http://localhost:3030/jsonstore/phonebook', {
            method: 'post',
            body: JSON.stringify(contact)
        });
        document.getElementById('person').value = '';
        document.getElementById('phone').value = '';
        getAllPhones()
    }


}

attachEvents();