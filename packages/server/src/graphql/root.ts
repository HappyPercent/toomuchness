import createHabit from './resolvers/createHabit';
import habbits from './resolvers/habbits';

const root = {
    habbits,
    createHabit,
};

export default root;
