const { v4 } = require('uuid')

let contacts = [
    {
        id:v4(),
        name: "Jackson Pontes",
        email: "jack@email.com",
        phone: '12312365475',
        category_id:v4()
    },
    {
        "id": v4(),
        "name": "Miguel Arthur",
        "email": "miguel@email.com",
        "phone": "12312365475",
        "category_id": v4()
    },
    {
        "id": v4(),
        "name": "Pablo José",
        "email": "pablo@email.com",
        "phone": "12312365475",
        "category_id": v4()
    }

]

class ContactsRepository {
    findAll() {
        return new Promise((resolve) => resolve(contacts));
    }

    findById(id){
      return new Promise ((resolve) => resolve(contacts.find((contact) => {
        return contact.id === id
    })))
    }

    findByEmail(email){
        return new Promise ((resolve) => resolve(contacts.find((contact) => contact.email === email )))
     }

    delete(id){
        return new Promise((resolve) => {
            contacts = contacts.filter((contact) => contact.id !== id)
            resolve()
        })
    }

    create({name,email,phone,category_id}){
        return new Promise((resolve) => {
            const newContact =   {
                id:v4(),
                name ,
                email,
                phone,
                category_id
            }

            contacts.push(newContact)
            resolve(newContact)
        })
    }


    update(id,{name,email,phone,category_id}){
        return new Promise((resolve) => {
            const updatedContact =   {
                id,
                name ,
                email,
                phone,
                category_id
            }

            contacts = contacts.map((contact) => {
                contact.id === id ? updatedContact : contact
            })
            resolve(updatedContact)
        })
    }

}

module.exports = new ContactsRepository();
