import fs from 'fs'
import path from 'path'

export const typeDefsSchema = fs
  .readFileSync(path.join(__dirname, 'schema.graphql'))
  .toString('utf-8')

export const typeDefsOperation = fs
  .readFileSync(path.join(__dirname, 'operation.graphql'))
  .toString('utf-8')
