import postgres from 'postgres'

const connectionString = process.env.DATABASE_URL

if (!connectionString) {
    throw new Error('DATABASE_URL manquant dans les variables d\'environnement')
}

const sql = postgres(connectionString, {
    max: 10,
})

export default sql