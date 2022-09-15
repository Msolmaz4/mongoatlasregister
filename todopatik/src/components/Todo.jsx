import { useContext, useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
//cikis yapmak icin
import { signOut } from "firebase/auth";
import { auth } from "./FireBase";
//import { nanoid } from "nanoid";
import { Link } from "react-router-dom";

import { db } from "./FireBase";
//bu baglanti icn  firebase
//getDocs hepsini geri getitirir
import { collection, getDocs ,addDoc,deleteDoc,doc} from "firebase/firestore";

import AuthContext from "./Auth";

function Todo() {
  const { current } = useContext(AuthContext);
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  const handle = () => {
    signOut(auth);
  };

  const handlen = (e) => {
    e.preventDefault();
   /**const newData = {
      id: nanoid(),
      text: input,
    };
    setData([...data, newData]);
    setInput("");

    console.log(setData);
    * 
    *  */ 
//3 add ekleme
//burada tod aciklama yap onemli yoksa cok karisrtiri burdajki todo firebase verfddigimiy degisijk yap g;ster
    const addRef = collection(db,'todos')
    addDoc(addRef ,{todo:input})
    //geleni gormek icin
    .then(res=>{
      console.log(res)
      setData([...data,{todo:input,id:res.id}])
    })
  setInput()
  };

  //firebase bagliyoruy
  const getTodos = async (db) => {
    //2
    let todos = [];

    // 1
    //burada dikkat edilecek olay firebase ilk dosyanin ismi
    const collRe = collection(db, "todos");
    //1
    //bundan somra ayri komut getdOC KUTUPHAANRIN OZELLIGI HEPSINI collre baglantiisndaki hepsinigetri
    const todoSch = await getDocs(collRe);

    //1
    //ne geldigini gormek icin
    console.log(todoSch);

    //2 burada yukarida bir tane degisken yapariy oraya gondrirz
    //burada obje yaparsak id alabiliriy
    todoSch.docs.forEach((doc) => {
      todos.push({ ...doc.data(), id: doc.id });
    });

  
    //consol gorduk
    /**
     * (2) [{…}, {…}]
0
: 
{todo: 'gel', id: 'p6CAn3apWmDXuRd9WXLf'}
1
: 
{todo: 'elma', id: 'tZq0mzKrwZV7juR9Jz2J'}
length
: 
2
     * 
     */
    console.log(todos);
    setData(todos);
  };
  //1
  useEffect(() => {
    getTodos(db);
  }, []);
/**
 *   const delet = (id) => {
    const newData = data.filter((el) => el.id !== id);
    console.log(newData);
    setData(newData);
  };

 */
const delet =(id)=>{
  //yukarifdn adoc unutma cekmeyi cunku collection degil doc silecegiz
  const docRef = doc(db,'todos',id)
  deleteDoc(docRef)
  getTodos(db)
  //burada soylede yapabiliriy
  //let son = data.filter(el=>el.id != id)
  //setData(son) bunu sor nedenb mantik yurttur

}

  //4

  //yeniden firebase gidip data base oludsturdul
  //binu firebase dosazasina ekle
  return (
    <Navbar>
      {current ? (
        <div>
          <Container>
            <Navbar.Brand href="#home">TO DO </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
              <Navbar.Text>Signed in as: {current.displayName}</Navbar.Text>
            </Navbar.Collapse>
            <Button onClick={handle}> Logout</Button>
          </Container>
          <div>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <Button onClick={handlen}>ekle</Button>
            {data.map((er) => (
              <div>
                {er.todo}
                {er.id}
                <button onClick={() => delet(er.id)}>silmek</button>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <Link to="/">
            <Button> login</Button>
          </Link>
        </div>
      )}
    </Navbar>
  );
}

export default Todo;
