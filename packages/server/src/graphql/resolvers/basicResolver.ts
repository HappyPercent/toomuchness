import db from 'src/db';

export default async function basicResolver<T>(text: string, values?: string[]): Promise<T[] | undefined> {
    try {
        const res = await db.query(text, values);
        return res.rows as T[];
    } catch (err) {
        console.log(err);
    }
}
