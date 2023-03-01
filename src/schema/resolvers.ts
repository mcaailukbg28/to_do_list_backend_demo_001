const resolvers = {
  Query: {
    books: () => books,
  },
  Mutation: {
    addBook: (parent: any, args: { title: any; author: any; }, contextValue: any, info: any) => {
      const { title, author } = args;
      return {
        code: "yu",
        success: true,
        message: title + "|" + author,
        book: {
          title: "The Awakening",
          author: "Kate Chopin",
        },
      };
    },
  },
};

const books = [
  {
    title: "The Awakening",
    author: "Kate Chopin",
  },
  {
    title: "City of Glass",
    author: "Paul Auster",
  },
];

export { resolvers };
