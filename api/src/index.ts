import { makeExecutableSchema } from '@graphql-tools/schema'
import { addMocksToSchema } from '@graphql-tools/mock'
import { mockServer } from '@graphql-tools/mock'
import { typeDefs as scalarTypeDefs, resolvers } from 'graphql-scalars'
import express from 'express'
import mocks from './dataMock'
import { graphqlHTTP } from 'express-graphql'
import { typeDefs } from './graphqlSchema'

const schema = makeExecutableSchema({ typeDefs: [...scalarTypeDefs, typeDefs] })
const schemaWithMocks = addMocksToSchema({
  schema,
  mocks,

  //   resolvers: (store) => ({
  //     Mutation: {
  //       changeMyName: (_, { newName }) => {
  //         // special singleton types `Query` and `Mutation` will use the key `ROOT`

  //         // this will set the field value for the `User` entity referenced in field
  //         // `me` of the singleton `Query`
  //         store.set('Query', 'ROOT', 'me', { name: newName })

  //         return store.get('Query', 'ROOT', 'me')
  //       },
  //     },
  //   }),
})

const app = express()
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schemaWithMocks,
    graphiql: true,
  }),
)

app.listen(4000, () => {
  console.info('Listening on http://localhost:4000/graphql')
})
