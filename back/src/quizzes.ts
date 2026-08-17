    import { Hono } from 'hono'
    import sql from './db/client';


    export const quizzes = new Hono()

    quizzes.get('/', async (c) => {
        const rows = await sql`SELECT * FROM quizzes ORDER BY created_at DESC`
        return c.json(rows)
    })

    quizzes.get('/:id', async (c) => {
        const id = c.req.param('id')
        const [quiz] = await sql`SELECT * FROM quizzes WHERE id = ${id}`

        if (!quiz) {
            return c.json({ error: 'Quiz introuvable' }, 404)
        }

        return c.json(quiz)
    })

    quizzes.post('/', async (c) => {
        const body = await c.req.json()
        const { title, description, factors, questions, results } = body

        if (!title) {
            return c.json({ error: 'Le titre est requis' }, 400)
        }

        const [quiz] = await sql`
            INSERT INTO quizzes (title, description, factors, questions, results)
            VALUES (${title}, ${description ?? ''}, ${sql.json(factors ?? [])}, ${sql.json(questions ?? [])}, ${sql.json(results ?? [])})
            RETURNING *
        `

        return c.json(quiz, 201)
    })

    quizzes.put('/:id', async (c) => {
        const id = c.req.param('id')
        const body = await c.req.json()
        const { title, description, factors, questions, results } = body

        const [quiz] = await sql`
            UPDATE quizzes
            SET title = ${title},
                description = ${description ?? ''},
                factors = ${sql.json(factors ?? [])},
                questions = ${sql.json(questions ?? [])},
                results = ${sql.json(results ?? [])},
                updated_at = now()
            WHERE id = ${id}
            RETURNING *
        `

        if (!quiz) {
            return c.json({ error: 'Quiz introuvable' }, 404)
        }

        return c.json(quiz)
    })

    quizzes.delete('/:id', async (c) => {
        const id = c.req.param('id')
        const result = await sql`DELETE FROM quizzes WHERE id = ${id}`

        if (result.count === 0) {
            return c.json({ error: 'Quiz introuvable' }, 404)
        }

        return c.body(null, 204)
    })