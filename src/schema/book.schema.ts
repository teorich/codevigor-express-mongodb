import { TypeOf, object, string } from 'zod';

export const createBookSchema = object({
    body: object({
        title: string({
            required_error: "title is required"
        }),
        author: string({
            required_error: "author is required"
        }),
        publishDate: string({
            required_error: "date is is required"
        }),
        
    })
})

export type CreateBookInput = TypeOf<typeof createBookSchema>["body"]