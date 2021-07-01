import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import {CopyToClipboard} from 'react-copy-to-clipboard';


function App() {
  const [nameInput, setName] = useState({name: ''})
  const [linkInput, setLink] = useState({link: ''})
  const [positionInput, setPosition] = useState({position: ''})
  const [companyInput, setCompany] = useState({company: ''})
  const [exp, setExp] = useState({e: ''})
  const [text, setText] = useState({text: ''})

  useEffect(() => {
    let ia;
    if('aeouiAEOIU'.includes(positionInput.position[0])){
      ia = 'an'
    }else {
      ia = 'a'
    }
    document.getElementById('indefinite-article').innerHTML = ia;
  }, [positionInput]);

  useEffect(()=>{
    const days = {
      'Mon': 0,
      'Tue': 1,
      'Wed': 2,
      'Thu': 3,
      'Fri': 4,
    }

    const today = Date().slice(0,3);
    let noun;
    if (days[today] < 3) {
      noun = 'this'
    } else{
      noun = 'next'
    }
    document.getElementById('date').innerHTML = noun;
  })
  
  const clearText = () => {
    setName({name: ''})
    setPosition({position: ''})
    setLink({link: ''})
    setCompany({company: ''})
    setExp({e: ''})
    document.getElementById('copied').innerText = ''
  }

  const copy =()=>{
    const text = document.getElementById('m-text')
    const range = document.createRange();
    range.selectNode(text);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    
    const successful = document.execCommand('copy');
    document.getElementById('copied').innerText = 'Copied!'
  }

  return (
    <div className="App">
      <header className="App-header">
        <div style={{'color': 'White', 'fontSize': '40px', 'padding': '30px', 'fontWeight': 'bold'}}>ClearBit Emails</div>
        <div className='inputs'>
          <div>
            Person name <input type='text' onChange={(e) => setName({name: e.target.value})} value={nameInput.name}/>
          </div>
          <div>
            Person position <input type='text' onChange={(e) => setPosition({position: e.target.value})} value={positionInput.position}/>
          </div>
          <div>
            Link to job post<input type='text' onChange={(e) => setLink({link: e.target.value})} value={linkInput.link}/>
          </div>
          <div>
            Company name <input type='text' onChange={(e) => setCompany({company: e.target.value})} value={companyInput.company}/>
          </div>
          <div>
            Experience required <input type='text' onChange={(e) => setExp({e: e.target.value})} value={exp.e}/>
          </div>
        </div>
        <div style={{'display': 'flex', 'justifyContent': 'space-between', 'width': '500px', 'margin': '20px','height': '50px',}}>
          <button onClick={() => clearText()} style={{'background': 'pink'}}>Clear</button>
          <div id='copied'></div>
          <button onClick={() => copy()} style={{'background': 'lightgreen'}}>Copy to clipboard</button>
        </div>
        
        <div className='main-text' style={{'width': '600px'}}>
          <text id='m-text'>
            Hi {nameInput.name},
            <br />
            <br />
            I noticed you are <p id='indefinite-article'></p> {positionInput.position}
            &nbsp;at {companyInput.company} and decided to personally reach out to see if you are the right person to talk
            about the role and company. 
            <br />
            <br />
            
            I applied for a <a href={linkInput.link} target='none'>Software Developer</a> position and believe I would be a good fit since 
            I have the {exp.e} experience that your team is seeking 
            (check out my <a href="https://ondesk.herokuapp.com/#/" target='none'>Full Stack Project</a> and&nbsp; 
            <a href="https://alexeysergeev-cm.github.io/images/Resume%20-%20Alexey%20Sergeev.pdf" target='none'>Resume</a>).
            <br />
            <br />
            Would you be free <p id='date'></p> week for a quick zoom chat or phone call?<br />
            I appreciate your time.<br />
            <br />
            Best Regards,<br />
            Alexey Sergeev<br />
            <br />
            <a href="https://alexeysergeev-cm.github.io">Portfolio</a><br />
            <a href="https://github.com/alexeysergeev-cm">Github</a><br />
            <a href="https://www.linkedin.com/in/alexey-sergeev-cm/">LinkedIn</a><br />
          </text>
        </div>
      </header>
    </div>
  );
}

export default App;
