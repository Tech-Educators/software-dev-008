let myName = 'Davina'

// look at the value of whatever my name is 
switch (myName) {
    case 'Davina':
        console.log('What just happened')
        break;
    case 'sam':
    case 'tim':
        console.log('Whoa!')
        break;
    default:
        console.log(`Theres nothing that matches ${myName}`)
}