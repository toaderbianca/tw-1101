function ex(text,word){
    const poz=text.indexOf(word);
    return poz!==-1 ? `Cuvantul ${word} a fost gasit la pozitia ${poz}` : `Cuvantul ${word} nu a fost gasit.`;
};
const txt="Ana are mere.";
const cuv="oua";
console.log(ex(txt,cuv));