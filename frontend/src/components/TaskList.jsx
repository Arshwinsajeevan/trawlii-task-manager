import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onToggle, onDelete }) => {
    if (tasks.length === 0) {
        return <div style={{ textAlign: 'center', color: '#94a3b8', marginTop: '2rem' }}>No tasks yet. Add one above!</div>;
    }
    return (
        <div>
            {tasks.map(task => (
                <TaskItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
            ))}
        </div>
    );
};
export default TaskList;
