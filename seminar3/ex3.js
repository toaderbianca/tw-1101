const students = [ { name: "Alice", scores: [90, 85, 92] }, { name: "Bob", scores: [75, 80, 85] }, { name:
    "Charlie", scores: [90, 95, 85] }, { name: "David", scores: [100, 100, 100] } ];

const arrmedii=students.map(student=>{
    const media=student.scores.reduce((acc,el)=>acc+el,0)/student.scores.length;
    return {name: student.name, media};
})

const arrCeimaiBuni=arrmedii.filter(el=>el.media>90);

console.log(arrCeimaiBuni);