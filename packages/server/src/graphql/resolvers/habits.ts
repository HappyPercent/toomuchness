import { Habit } from 'core/types';
import basicResolver from './basicResolver';

export default function habits() {
    return basicResolver<Habit>('SELECT * FROM habits');
}
