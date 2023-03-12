import "./Main.scss";
import {data} from "../../helpers/data";
import Card from "./Card";

const Main = () => {
    // console.log(data);
  return (
    <div className="card-container">
     {data.map((item, index) =>    /*{data.map((item) =>{  data sayısı kadar döküman yazdırır */ 
       <Card {...item}  key={index}/>  /*   <Card name="harvey" /> name="harvey" --> Props  {...item} bu şekilde datayı card.jsx de kullanabileceğiz. Propslar tek yönlü yukarıdan aşağıya doğru  */ 
        )}
    </div>
  )
}

export default Main;
