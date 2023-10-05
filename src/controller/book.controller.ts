import { Request, Response, } from "express";

import { CreateBookInput } from "../schema/book.schema";
import { createBook, deleteOneBook, getAllBooks, updateOneBook } from "../service/book.service";


export async function createBookHandler(req: Request<{}, {}, CreateBookInput>,res: Response) {

    const body = req.body;

    try {
        const user = await createBook(body);

        return res.send("Book successfully created")
    } catch (error: any) {
        if(error.code === 11000) {
            return res.status(409).send("Book already exists")
        }

        return res.status(500).send(error)
    }
    
}

export async function getAllBooksHandler(_: any, res: Response) {

    try {

        return res.send(await getAllBooks())
    } catch (error: any) {

        return res.status(500).send(error)
    }
    
}

export async function updateBookHandler(req: Request<{id: string}, {}, Partial<CreateBookInput>>, res: Response) {

    console.log("req", req.params)

    try {

        return res.send(await updateOneBook(req.params.id, req.body));
    } catch (error: any) {

        return res.status(500).send(error)
    }
    
}

export async function deleteBookHandler(req: Request<{id: string}, {}, Partial<CreateBookInput>>, res: Response) {

    try {

        return res.send(await deleteOneBook(req.params.id))
    } catch (error: any) {

        return res.status(500).send(error)
    }
    
}