import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import './style.css';
import Card from './Card.js';

function App() {
  let array=[
  {
    plan:"BASIC",
    Members:"For Team of 3-5 Members",
    pricem:"28",
    prices:"$20",
    ispopular:false,
    features:[
      {
        name:"Perfect of Small Team"
      },
      {
        name:"Unlimited Invoices"
      },
      {
        name:"Project Management"
      },
      {
        name:"Team Management;"
      },
      {
        name:"Time Tracking;"
      },
      
    ]
  },
  {
    plan:"INTERMEDIATE",
    Members:"For Team of 5-10 Members",
    pricem:"39",
    prices:"$30",
    ispopular:true,
    features:[
      {
        name:"Perfect of Small Team"
      },
      {
        name:"Unlimited Invoices"
      },
      {
        name:"Project Management"
      },
      {
        name:"Team Management"
      },
      {
        name:"Time Tracking;"
      },
      
    ]
  },
  {
    plan:"HIGH CLASS",
    Members:"For Team of 10-25 Members",
    pricem:"58",
    prices:"$50",
    ispopular:false,
    features:[
      {
        name:"Perfect of Small Team"
      },
      {
        name:"Unlimited Invoices"
      },
      {
        name:"Project Management"
      },
      {
        name:"Team Management"
      },
      {
        name:"Time Tracking"
      },
      
    ]
  },
  {
    plan:"SUPREME",
    Members:"For Team of 25-100 Members",
    pricem:"99",
    prices:"$80",
    ispopular:false,
    features:[
      {
        name:"Perfect of Small Team"
      },
      {
        name:"Unlimited Invoices"
      },
      {
        name:"Project Management"
      },
      {
        name:"Team Management"
      },
      {
        name:"Time Tracking"
      },
      
    ]
  }
  ]
  return (
    <div className="App">
      <div class="pricing1 py-5 bg-light">
        <div class="container">
          <Header heading="Pricing to make your Work Effective" 
          para="We offer 100% satisafaction and Money back Guarantee"></Header>
          <div class="row mt-5">
            { 
              array.map(function(obj){
                return <Card data={obj}></Card>
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
