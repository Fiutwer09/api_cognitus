import express, {Request,Response} from "express";
import cors from "cors";
import dotenv from "dotenv";
import morgan from "morgan";



type ResponseType = {
    status: boolean,
    message: string | undefined, 
    data: any
}

const users = [
    { id: 1,name: "Alice", age: 30 },
    { id: 2,name: "Bob", age: 25 },
    { id: 3,name: "Charlie", age: 35 },
    { id: 4,name: "Diana", age: 28 },
    { id: 5,name: "Edward", age: 22 }
]


dotenv.configDotenv()

const app = express();
const port = process.env.PORT  || 3000


app.use(express.json())
app.use(cors())
app.use(morgan("dev"))


app.get("/", (req: Request , res: Response) => {
    console.log("Ingresar a la ruta /");
    return res.send(200).json({userID:1, name:"jhojan"})
})


app. get ("/query-params",(req: Request, res: Response)=> {
    const params = req. params;
    return res. status (200).json(params);
})

app. get ("/path-vars/:id",(req: Request, res: Response)=> {
    const params = req.query;
    return res. status (200).json(params);
})

app. get ("/body",(req: Request, res: Response)=> {
    const params = req.body;
    return res. status (200).json(params);
})

app. get ("/headers",(req: Request, res: Response)=> {
    const params = req. headers;
    return res. status (200).json(params);
})

app.get("/users/:id",(req: Request, res: Response ) => {
    const id = req.params.id;<
    const foundUser = users.filter((user) => user.id == parseInt(id))
    const hasUser = foundUser.length > 0;
    const usersResponse: ResponseType = {
        status :hasUser ? true : false,
        message :hasUser ? "" : 'El usuario no se encontro',
        data: foundUser
    }
    return res.status(200).json(users)
})

app.listen (port,() => {
    console.log(`App running on port ${port}`);
})




