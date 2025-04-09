import Cover from "./components/Cover"
import TransitionsPage from "./components/TransitionsPage"
import Introduccion from "./components/Introduccion";


export default function Home() {
  return (
   <main>
    <TransitionsPage/>
  
    <div className="flex min-h [100vh] h-full bg-no-repeat bg-gradient-cover px-10">
      <Cover/>
      <Introduccion/>
    
      
    </div>
   </main>
  );
}
