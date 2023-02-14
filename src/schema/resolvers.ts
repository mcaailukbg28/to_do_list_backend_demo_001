export const resolvers = {
    Query: {
        books: () => books,
    },
    Mutation: {
        addBook: (parent, args, contextValue, info) => {
            const {title, author} = args;
            return {
                code: "yu",
                success: true,
                message: title + "|" + author,
                book: {
                    title: 'The Awakening',
                    author: 'Kate Chopin',
                }
            }
        }
    }
};

const books = [
    {
        title: 'The Awakening',
        author: 'Kate Chopin',
    },
    {
        title: 'City of Glass',
        author: 'Paul Auster',
    },
];