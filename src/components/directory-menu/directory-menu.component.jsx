import CategoryItem from "../category-item/category-item.component";
import "./directory-menu.style.scss";

const DirectoryMenu = ({ categories }) => {
  return (
    <div className="directory-menu-container">
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default DirectoryMenu;
