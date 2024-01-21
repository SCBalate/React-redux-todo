import React, { useState } from "react";
import { connect } from "react-redux";
import {
  addTodos,
  removeTodos,
  updateTodos,
  completeTodos,
} from "../redux/actions";
import { GoPlus } from "react-icons/go";
import { BsPencil } from "react-icons/bs";
import { motion } from "framer-motion";

const mapStateToProps = (state) => {
  return {
    todos: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTodo: (obj) => dispatch(addTodos(obj)),
    removeTodo: (id) => dispatch(removeTodos(id)),
    updateTodo: (obj) => dispatch(updateTodos(obj)),
    completeTodo: (id) => dispatch(completeTodos(id)),
  };
};

const Todos = (props) => {
  const [todo, setTodo] = useState("");
  const [editMode, setEditMode] = useState({ status: false, id: null });

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const add = () => {
    if (todo === "") {
      alert("Input is Empty");
    } else {
      props.addTodo({
        id: Math.floor(Math.random() * 1000),
        item: todo,
        completed: false,
      });
      setTodo("");
    }
  };

  //   const remove = (id) => {
  //     props.removeTodo(id);
  //   };

  //   const edit = (id, item) => {
  //     setEditMode({ status: true, id: id });
  //     setTodo(item);
  //   };

  const update = () => {
    props.updateTodo({
      id: editMode.id,
      item: todo,
    });
    setEditMode({ status: false, id: null });
    setTodo("");
  };

  //   const complete = (id) => {
  //     props.completeTodo(id);
  //   };

  return (
    <div className="addTodos">
      <input
        type="text"
        onChange={(e) => handleChange(e)}
        className="todo-input"
        value={todo}
      />

      {editMode.status ? (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="add-btn"
          onClick={() => update()}
        >
          <BsPencil />
        </motion.button>
      ) : (
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="add-btn"
          onClick={() => add()}
        >
          <GoPlus />
        </motion.button>
      )}

      <br />
    </div>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
