import React from 'react';
import { Trash2, CheckCircle, Circle } from 'lucide-react';

const TaskItem = ({ task, onToggle, onDelete }) => {
    return (
        <div className={`glass-panel task-item ${task.is_completed ? 'completed' : ''}`} style={{ display: 'flex', alignItems: 'center', padding: '1rem', marginBottom: '0.8rem', justifyContent: 'space-between', transition: 'all 0.3s' }}>
            <div onClick={() => onToggle(task)} style={{ display: 'flex', alignItems: 'center', cursor: 'pointer', flex: 1 }}>
                {task.is_completed ? <CheckCircle color="#10b981" size={24} /> : <Circle color="#94a3b8" size={24} />}
                <span style={{ marginLeft: '1rem', textDecoration: task.is_completed ? 'line-through' : 'none', color: task.is_completed ? '#94a3b8' : '#f8fafc', fontSize: '1.1rem', transition: 'all 0.3s' }}>
                    {task.title}
                </span>
            </div>
            <button onClick={() => onDelete(task.id)} style={{ background: 'transparent', padding: '0.5rem', marginLeft: '0.5rem', color: '#ef4444', border: 'none' }} aria-label="Delete task">
                <Trash2 size={20} />
            </button>
        </div>
    );
};
export default TaskItem;
