import { Link } from "react-router-dom";
import styles from "./ProjectCards.module.css";
import { BsPencil, BsFillTrashFill } from "react-icons/bs";

function ProjectCards({ id, name, budget, category, handleRemove }) {
  const remove = (e) => {
    e.preventDefault();
    handleRemove(id);
  };

  return (
    <div className={styles.project_card}>
      <h4>{name.length >= 15 ? name.substring(0, 10) + "..." : name}</h4>

      <p>
        {" "}
        <span>Orçamento: </span> {budget}{" "}
      </p>

      <p className={styles.category_text}>
        <span className={`${styles[category.toLowerCase()]}`}></span> {category}
      </p>

      <div className={styles.project_card_actions}>
        <Link to={`/project/${id}`}>
          <BsPencil /> Editar
        </Link>

        <button onClick={remove}>
          <BsFillTrashFill /> Excluir
        </button>
      </div>
    </div>
  );
}

export default ProjectCards;
