import { supabase } from '../config/supabase.js';

export const createTodo = async (req, res) => {
  const { title } = req.body;

  const { error } = await supabase.from('todos').insert({
    title,
    user_id: req.user.userId
  });

  if (error) return res.status(500).json({ message: error.message });

  res.status(201).json({ message: "Todo created" });
};

export const getTodos = async (req, res) => {
  const { data } = await supabase
    .from('todos')
    .select('*')
    .eq('user_id', req.user.userId);

  res.json(data);
};

export const updateTodo = async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase
    .from('todos')
    .update(req.body)
    .eq('id', id)
    .eq('user_id', req.user.userId);

  if (error) return res.status(403).json({ message: "Not allowed" });

  res.json({ message: "Todo updated" });
};

export const deleteTodo = async (req, res) => {
  const { id } = req.params;

  const { error } = await supabase
    .from('todos')
    .delete()
    .eq('id', id)
    .eq('user_id', req.user.userId);

  if (error) return res.status(403).json({ message: "Not allowed" });

  res.json({ message: "Todo deleted" });
};
