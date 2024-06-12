function myName() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve({
            firstName: 'Heisenberg',
            moniker: 'the Cook '
           }); 
        }, 3000);
    });
};
const sayMyName = () => {
        myName()
            .then(name => {
                const sayIt = `Your'e ${name.moniker}, your'e ${name.firstName}.`;
                console.log(sayIt);
            })
            .catch(err => {
                console.log(err);
            })
            .finally(() => {
                console.log("Your'e goddamn right.");
            });
};

sayMyName();