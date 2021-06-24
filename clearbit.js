
class ClearBit{
  constructor(name, link, position, company){
    this.name = name;
    this.link = link;
    this.position = position;
    this.company = company;
  }

  buildText(){
    let sent;
    if('aeouiAEOIU'.includes(this.position[0])){
      sent = 'an'
    }else {
      sent = 'a'
    }
    const text = [`Hi ${this.name},\n\nI applied for the Software Developer position and noticed you are ${sent} ${this.position}\nat ${this.company}. I definitely have the Full-stack experience that your team is seeking. (check out my FSP!) I believe I would be a great fit overall because I am a skilled developer and avid learner who excels in a fast-paced environment.\n \nI would be happy to learn more about the role and the company. Would you be available for a 15 minutes Zoom Call this week?\n \nI have attached my resume for your review. I appreciate your consideration and feedback. \n\nBest Regards,\nAlexey Sergeev \n\nPortfolio \nGithub \nLinkedIn\n`]

    // return 'baba'.link('https://github.com/')
    return text[0];
  }

}

let c = new ClearBit('Alexey', 's', 'Engineer', 'Google');
console.log(c.buildText())



// function pali(s){
//   return (s === s.split('').reverse().join(''))
// }

// function pali(str) {
//   str = str.replace(/\W/g, '').toLowerCase();
//   console.log(str)
//   return (str == str.split('').reverse().join(''));
// }

// console.log(pali('hacah'))
// console.log(pali('haah'))
// console.log(pali('ha, a, H'))
