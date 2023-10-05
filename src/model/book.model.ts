import { getModelForClass, modelOptions, prop } from "@typegoose/typegoose";



@modelOptions({
    schemaOptions: {
        timestamps: true
    },
})
export class Book {

    @prop({required: true, unique: true})
    title: string

    @prop({required: true})
    author: string

    @prop({required: true})
    publishDate: string
}

const BookModel = getModelForClass(Book)

export default BookModel