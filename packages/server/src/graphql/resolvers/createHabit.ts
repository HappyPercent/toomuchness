import basicResolver from './basicResolver';
import { Habit } from 'core/types';

export default async function createHabit({ name }: { name: string }) {
    const created = await basicResolver<Habit>('INSERT INTO habits(name, created_on) VALUES($1, NOW()) RETURNING *', [
        name,
    ]);
    return created?.[0];
}
