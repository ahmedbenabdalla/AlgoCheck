function algo(phrase){
  let countWords;
  let countChar;
  let countVoyelle=0;
  countChar=phrase.replace(/ /g, "");
  countChar=countChar.replace("."||"!"||"?"||",","");
  countChar=countChar.length;
  
  countWords=Array.from(phrase).filter(char=>(char==" " || char==".")).length;
  ["a", "e", "i", "o", "u", "y","A", "E", "I", "O", "U", "Y"].forEach(v=>
  {
  Array.from(phrase).forEach(char=>
  {
  if(char===v)
    countVoyelle+=1;
   })
  })
  console.log("Number of Words:",countWords);
  console.log("countChar",countChar);
  console.log("countVoyelle",countVoyelle)
}
algo("hi bla bla kkkk?");