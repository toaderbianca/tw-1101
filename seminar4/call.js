const person={
    fullname: function(){
        console.log(`${this.firstName} ${this.lastName}`)
    },
    greet: function(age,punctuation){
        console.log(`I am ${age} old${punctuation}`)
    }
}

const person2={
    firstName: 'adrian',
    lastName:'Mihai'
}

person.fullname.call(person2)
person.greet.call(person2,24,'.')

person.greet.apply(person2,[25,'!'])

const bound=person.greet.bind(person2)
bound(24,'.')