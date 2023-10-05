import BookModel, { Book } from "../model/book.model";


export function createBook(input: Partial<Book>) {
    return BookModel.create(input)
}

export function getAllBooks() {
    return BookModel.find({});
}

export function getOneBook(id: string) {
    return BookModel.findById(id);
}

export function updateOneBook(id: string, data: Partial<Book>) {
    return BookModel.findByIdAndUpdate(id, data)
}

export function deleteOneBook(id: string) {
    return BookModel.findByIdAndDelete(id)
}