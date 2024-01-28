import butterfly from "./ButterFly.png";
import flower from "./Flower.png";

function Mover()
{
  let butterfly = getelementbyid(butterfly);
};

function MainPart() {
  return (
    <div className="h-screen flex items-center justify-center ">
    <div className="h-[90vh] w-[90vh] shadow-xl bg-[#FAFAF6] relative">
    <div className="absolute bg-amber-900	 h-[1.5vh] w-[80vh] right-0"></div>
    <div className="absolute bg-amber-900	 h-[1.5vh] w-[80vh] left-0 bottom-0"></div>
    <div className="absolute bg-amber-900	 h-[90vh] w-[1.5vh] right-0"></div>
    <div className="absolute bg-amber-900	 h-[90vh] w-[1.5vh] left-0"></div>
      <div className="bg-[#4B2B30] h-[1.5vh] w-[10vh] top-0"></div>
      
      <img src={butterfly} alt="" onClick={Mover} id="butterfly" className="h-[10vh] w-[10vh] ml-[0.5vh]" srcset="" />
      <div className="absolute bg-amber-900	 h-[15vh] w-[1.5vh] left-[10vh] top-[0vh]"></div>
      <div className="absolute bg-amber-900	 h-[11vh] w-[1.5vh] left-[10vh] top-[25vh]"></div>
      <div className="absolute bg-amber-900	 h-[1.5vh] w-[11.5vh] left-[0vh] top-[36vh]"></div>
      <div className="absolute bg-amber-900	 h-[1.5vh] w-[25vh] top-[25vh] left-[10vh]"></div>
      <div className="absolute bg-amber-900	 h-[11.5vh] w-[1.5vh] left-[35vh] top-[15vh]"></div>
      <div className="absolute bg-amber-900	 h-[1.5vh] w-[50vh] top-[15vh] left-[25vh]"></div>
      <div className="absolute bg-amber-900	 h-[11.5vh] w-[1.5vh] top-[15vh] left-[75vh]"></div>
      <div className="absolute bg-amber-900	 h-[1.5vh] w-[63vh] top-[38vh] left-[25vh]"></div>
      <div className="absolute bg-amber-900	 h-[11.5vh] w-[1.5vh] top-[26.5vh] left-[60vh]"></div>
      <div className="absolute bg-amber-900	 h-[11.5vh] w-[1.5vh] top-[15vh] left-[48vh]"></div>
      <div className="absolute bg-amber-900	 h-[11.5vh] w-[1.5vh] top-[39vh] left-[25vh]"></div>
      <div className="absolute bg-amber-900	 h-[1.5vh] w-[15.5vh] top-[50.5vh] left-[11vh]"></div>
      <div className="absolute bg-amber-900	 h-[1.5vh] w-[35vh] left-[38.5vh] top-[50.5vh]"></div>
      <div className="absolute bg-amber-900	 h-[13vh] w-[1.5vh] left-[73.5vh]  top-[50.5vh]"></div>
      <div className="absolute bg-amber-900	 h-[1.5vh] w-[62.5vh] left-[11vh] top-[62vh]"></div>
      <div className="absolute bg-amber-900	 h-[27vh] w-[1.5vh] left-[38.5vh] bottom-0"></div>
      <div className="absolute bg-amber-900	 h-[1.5vh] w-[27vh] top-[74.5vh]"></div>
      <div className="absolute bg-amber-900	 h-[1.5vh] w-[34vh] right-0 top-[74.5vh]"></div>
      <img src={flower} alt="" className="h-[10vh] w-[10vh] bottom-0 right-2 absolute" srcset="" /></div>
    </div>
  )
}

export default function App() {
  return (
    
    <MainPart></MainPart>
  )
}