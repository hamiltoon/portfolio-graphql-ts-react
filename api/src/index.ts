import { makeExecutableSchema } from '@graphql-tools/schema'
import { addMocksToSchema } from '@graphql-tools/mock'
// import { mockServer } from '@graphql-tools/mock'
import { typeDefs as scalarTypeDefs, resolvers } from 'graphql-scalars'
import express from 'express'
import mocks from './dataMock'
import { graphqlHTTP } from 'express-graphql'
import { typeDefsOperation, typeDefsSchema } from './graphqlSchema'
import cors from 'cors'

const schema = makeExecutableSchema({
  typeDefs: [...scalarTypeDefs, typeDefsSchema],
})
const schemaWithMocks = addMocksToSchema({
  schema,
  mocks,
})

const app = express()
app.use(cors())

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
