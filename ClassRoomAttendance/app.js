function getStudents(classroom){

    let {hasTeachingAssitant,classList} = classroom;
    let teacher,teachingAssitant,students;

    if(hasTeachingAssitant){
        [teacher,teachingAssitant,...students] = classList;
    }else{
        [teacher,...students] = classList;
    }
    return students;
}


function selectedStudents(classroom){
    let{classList} = classroom;
    let students;
    [...students] = classList;
    console.log(classList.length);
    let selectedIndex = Math.floor(Math.random()*classList.length);
    console.log(selectedIndex);
    return students[selectedIndex];
    //Math.random
    
}

console.log(getStudents({
    hasTeachingAssitant:false,
    classList:["Rashida","John","Roman","Lisa","Omar","Lukas"],
    })
);

console.log(selectedStudents({
      classList:["Rashida","John","Roman","Lisa","Omar","Lukas"],
    })
);
