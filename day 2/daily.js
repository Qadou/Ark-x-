const url = 'https://dummyjson.com/users'


const fetchUserData = async () => {
    try{
        const reponse = await fetch(url);
        const data = await reponse.json();
        return data.users;
        
    }catch(error){
        console.log(error.message)
    }
}


const processUserData = (data) => {
    const filteredUsers = data.filter(({ gender }) => gender !== 'male')
    const mappedUsers = filteredUsers.map(({ firstName,lastName, age }) => `FirstName :  ${firstName},\nlastName :${lastName},\nAge : ${age}`);
    return mappedUsers;
}

const summarizeAge = (data) => {
    const totalAge = data.reduce((accumulator, { age }) => accumulator + age, 0);
    return ` ${totalAge}`;
}

const displayResults = async () => {
    const data = await fetchUserData();
    const processedUsers = processUserData(data);
    const totalAge = summarizeAge(data);

    console.log('Processed Users:');
    processedUsers.forEach(user => console.log(user));
    console.log('Total Age of Active Users:', totalAge);
}

displayResults();