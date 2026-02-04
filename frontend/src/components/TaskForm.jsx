import React, { useState } from 'react';
import { Plus } from 'lucide-react';

const TaskForm = ({ onAdd }) => {
    const [title, setTitle] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) return;
        onAdd({ title });
        setTitle('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Add a new task..."
                style={{ flex: 1 }}
            />
            <button type="submit" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Plus size={20} /> Add
            </button>
        </form>
    );
};
export default TaskForm;
