import Accordion from 'react-bootstrap/Accordion';


function About() {
  return (
    <Accordion defaultActiveKey="0">
      <Accordion.Item eventKey="0">
        <Accordion.Header>Qualification</Accordion.Header>
        <Accordion.Body>
         <ul>
          <li>Matriculation with 73% </li>
          <li>Plus two with 65%</li>
          <li>BCA with 78%</li>
         </ul>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>Skills</Accordion.Header>
        <Accordion.Body>
          {/* <h4>SOFT SKILLS</h4>
          <h4>TECHNICAL SKILLS</h4> */}
         <ul>
          <li>HTML5</li>
          <li>CSS</li>
          <li>BOOTSTRAP</li>
          <li>JAVASCRIPT</li>
          <li>REACT JS</li>
         </ul>
         

        </Accordion.Body>
        
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Experience</Accordion.Header>
        <Accordion.Body>
        <ul>
          <li>Four month of working experience in FRONTEND</li>
        </ul>
        </Accordion.Body>
      </Accordion.Item>
     
    </Accordion>
    
  );
}

export default About;
