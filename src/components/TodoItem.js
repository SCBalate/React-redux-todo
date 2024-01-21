import React, { Component } from "react";
import { motion } from "framer-motion";
import { AiFillEdit } from "react-icons/ai";
import { IoCheckmarkDoneSharp, IoClose } from "react-icons/io5";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
  }

  componentDidMount() {
    this.inputRef.current.focus();
  }

  changeFocus = () => {
    this.inputRef.current.disabled = false;
    this.inputRef.current.focus();
  };

  update = (id, value, e) => {
    if (e.which === 13) {
      // 13 is the key code for the enter key
      this.props.updateTodo({ id, item: value });
      this.inputRef.current.disabled = true;
    }
  };

  render() {
    const { item, completeTodo, removeTodo } = this.props;

    return (
      <motion.li
        initial={{ x: "150vw", transition: { type: "spring", duration: 2 } }}
        animate={{ x: 0, transition: { type: "spring", duration: 2 } }}
        whileHover={{
          scale: 0.9,
          transition: { type: "spring", duration: 0.1 },
        }}
        exit={{
          x: "-60vw",
          scale: [1, 0],
          transition: { duration: 0.5 },
          backgroundColor: "rgba(255,0,0,1)",
        }}
        key={item.id}
        className="card"
      >
        <textarea
          ref={this.inputRef}
          disabled={this.inputRef}
          defaultValue={item.item}
          onKeyPress={(e) =>
            this.update(item.id, this.inputRef.current.value, e)
          }
        />
        <div className="btns">
          <motion.button
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => this.changeFocus()}
          >
            {" "}
            <AiFillEdit />{" "}
          </motion.button>
          {item.completed === false && (
            <motion.button
              whileHover={{ scale: 1.4 }}
              whileTap={{ scale: 0.9 }}
              style={{ color: "green" }}
              onClick={() => completeTodo(item.id)}
            >
              <IoCheckmarkDoneSharp />
            </motion.button>
          )}
          <motion.button
            whileHover={{ scale: 1.4 }}
            whileTap={{ scale: 0.9 }}
            style={{ color: "red" }}
            onClick={() => removeTodo(item.id)}
          >
            {" "}
            <IoClose />
          </motion.button>{" "}
        </div>
        {item.completed && <span className="completed">done</span>}
      </motion.li>
    );
  }
}

export default TodoItem;
