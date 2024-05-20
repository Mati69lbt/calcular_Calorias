// cspell: ignore Categoria, Calorias
import { categories } from "../data/categories";

const Form = () => {
  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg">
      <div className="grid grid-cols-1 gap-3">
        <label htmlFor="category" className="font-bold">
          Categoria:
        </label>
        <select
          className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          id="category"
        >
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
      </div>
      <div className="grid grid-cols-1 gap-3">
        {" "}
        <label htmlFor="activity" className="font-bold">
          Actividad:
        </label>
        <input
          type="text"
          id="activity"
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="Ej. comida, jugo de naranja, ciclismo, running"
        />
      </div>
      <div className="grid grid-cols-1 gap-3">
        {" "}
        <label htmlFor="calories" className="font-bold">
          Calorias:
        </label>
        <input
          type="number"
          id="calories"
          className="border border-slate-300 p-2 rounded-lg"
          placeholder="Calorias. Ej: 300 0 500"
        />
      </div>
    </form>
  );
};

export default Form;
