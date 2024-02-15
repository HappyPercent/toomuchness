import createHabit from './resolvers/createHabit';
import habits from './resolvers/habits';

const root = {
    habits,
    createHabit,
};

export default root;
