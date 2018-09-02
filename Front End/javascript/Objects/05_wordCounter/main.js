

let words=[
    {
        word:"the",
        count:0
    },
];
// for(var i=0;i<5;i++){
//     words.push({word:"hello",count:0});
// }


let wordCount=(string)=>{
    string=string.toLowerCase().replace(/[^a-zA-Z ]/g, "").split(" ");
    for(var i=0;i<string.length;i++){
       
        let found=false;
        for(var j=0;j<words.length;j++){
            // If word is found
            if(words[j].word.includes(string[i])==true){
                words[j].count++;
                found=true;
            }
        }
        // else it will be pushed with count of 1
        if(found==false){
            words.push({word:string[i],count:1});
        }
    }

    // printWords

    // for(var k=0;k<words.length;k++){
    //     console.log(words[k].word+"  "+words[k].count);
    // }

    return words;
}


console.log(wordCount("After successfully working as the mercenary Deadpool for two years, Wade Wilson fails to kill one of his targets on his anniversary with his girlfriend Vanessa. That night, after the pair decides to start a family together, the target tracks Wilson down and kills Vanessa. Wilson kills the man in revenge. He blames himself for her death and attempts to commit suicide six weeks later by blowing himself up. Wilson has a vision of Vanessa in the afterlife, but the pieces of his body remain alive and are put back together by Colossus. Wilson is left with only a Skee-Ball token, an anniversary gift, as a final memento of Vanessa.Recovering at the X-Mansion, Wilson agrees to join the X-Men as a form of healing. He, Colossus, and Negasonic Teenage Warhead respond to a standoff between authorities and the unstable young mutant Russell Collins / Firefist at an orphanage, labeled a Mutant Reeducation Center. Wilson realizes that Collins has been abused by the orphanage staff, and kills one of the staff members. Colossus stops him from killing anyone else, and both Wilson and Collins are arrested. Restrained with collars that suppress their powers, they are taken to the Ice Box, an isolated prison for mutant criminals. Meanwhile, a cybernetic soldier from the future, Cable, whose family is murdered by an older Collins, travels back in time to kill the boy before Collins ever becomes a killer.Cable breaks into the Ice Box and attacks Collins. Wilson, whose collar has broken in the melee, attempts to defend Collins. After Cable takes Vanessa's token, Wilson forces himself and Cable out of the prison, but not before Collins overhears Wilson deny that he cares for the young mutant. Near death again, Wilson has another vision of Vanessa in which she convinces him to help Collins. Wilson organizes a team called X-Force to break Collins out of a prison-transfer convoy and defend him from Cable. The team launches its assault on the convoy by parachuting from a plane, but all of the members die during the landing except for Wilson and the lucky Domino. While they fight Cable, Collins frees fellow inmate Juggernaut, who agrees to help Collins kill the abusive orphanage headmaster. Juggernaut destroys the convoy, allowing himself and Collins to escape.Cable offers to work with Wilson and Domino to stop Collins' first murder, and agrees to give Wilson a chance to talk Collins down. At the orphanage, they are overpowered by Juggernaut while Collins attacks the headmaster, until Colossus—who had at first refused to help Wilson due to Wilson's murderous ways—arrives to distract Juggernaut. When Wilson fails to talk down Collins, Cable shoots at the young mutant. Wilson leaps in front of the bullet while wearing the Ice Box collar and dies, reuniting with Vanessa in the afterlife. Seeing this sacrifice, Collins does not kill the headmaster; this changes the future so that Cable's family now survives. Cable uses the last charge on his time-traveling device, which he needed for returning to his family, to go back several minutes and strap Vanessa's token in front of Wilson's heart. Now when Wilson takes the bullet for Collins, it is stopped by the token and both survive. Collins still has his change of heart, and afterwards, the headmaster is run over by Wilson's taxi-driver friend Dopinder.In a mid-credits sequence, Negasonic Teenage Warhead and her girlfriend Yukio repair Cable's time-traveling device for Wilson. He uses it to save the lives of Vanessa and X-Force member Peter, and kills both X-Men Origins: Wolverine's version of Deadpool and actor Ryan Reynolds while he is considering starring in the film Green Lantern."));

// Sorting words from biggest to smallest count

function compare(a,b){
    const countA=a.count;
    const countB=b.count;

    let comparison=0;
    if(countA>countB){
        comparison=1;
    }else if(countA<countB){
        comparison =-1;
    }
    return comparison*-1;
}

words.sort(compare);

var mostUsedWords=(array,cnt)=>{
    console.log("10 most used words");
    for(var i=0;i<cnt;i++){
        console.log(array[i].count+" times used word \""+array[i].word+"\"");
    }
}

mostUsedWords(words,10);

console.log(words);
