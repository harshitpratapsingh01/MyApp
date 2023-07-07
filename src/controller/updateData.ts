import { details } from "../models/schema";

const updateUserData = (updateData ,id, req, res) => {
    const person = details.find((account) => account.id === id);
    const index = details.indexOf(person);

    console.log(person);
    console.log(index);
    const updatedAccount = {...person,...updateData };

    console.log(updatedAccount);
    details[index] = updatedAccount;

    res.json({details});
}

export {updateUserData};