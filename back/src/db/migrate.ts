import postgres from 'postgres'
import { readFile } from 'fs/promises'
import path from 'path'

const sql = postgres(process.env.DATABASE_URL!, { max: 1 })

const schema = await readFile(path.join(import.meta.dir, 'schema.sql'), 'utf-8')

await sql.unsafe(schema)
console.log('✅ Schéma appliqué')

await sql.end()